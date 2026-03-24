/**
 * EMAIL CAPTURE — Popup + Spin Wheel Integration
 * Sends signups to a Google Sheet via Apps Script web app.
 * 
 * SETUP: Replace the URL below with your Google Apps Script deployment URL.
 */
const EMAIL_SCRIPT_URL = 'YOUR_GOOGLE_SCRIPT_URL_HERE';

// ─── HELPERS ────────────────────────────────
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function hasSeenPopup() {
  return sessionStorage.getItem('fmfood_popup_seen') === '1';
}

function markPopupSeen() {
  sessionStorage.setItem('fmfood_popup_seen', '1');
}

function hasSubscribed() {
  return localStorage.getItem('fmfood_subscribed') === '1';
}

function markSubscribed() {
  localStorage.setItem('fmfood_subscribed', '1');
}

async function submitEmail(email, source) {
  if (EMAIL_SCRIPT_URL === 'YOUR_GOOGLE_SCRIPT_URL_HERE') {
    console.warn('Email capture: Google Script URL not configured yet.');
    return { result: 'error', message: 'Not configured' };
  }
  try {
    const resp = await fetch(EMAIL_SCRIPT_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, source })
    });
    // no-cors means we can't read the response, so assume success
    return { result: 'success' };
  } catch (err) {
    console.error('Email submit error:', err);
    return { result: 'error', message: err.toString() };
  }
}

// ─── POPUP ──────────────────────────────────
function createPopup() {
  const overlay = document.createElement('div');
  overlay.id = 'emailPopupOverlay';
  overlay.className = 'email-popup-overlay';
  overlay.innerHTML = `
    <div class="email-popup">
      <button class="email-popup-close" id="emailPopupClose">&times;</button>
      <span class="email-popup-tag">Stay in the Loop</span>
      <h3 class="email-popup-title">Get the <span class="text-gradient">Weekly Roundup</span></h3>
      <p class="email-popup-desc">New restaurants, events, deals, and where locals are eating — delivered once a week.</p>
      <form class="email-popup-form" id="emailPopupForm">
        <input type="email" placeholder="your@email.com" class="email-popup-input" id="emailPopupInput" required>
        <button type="submit" class="btn btn-primary email-popup-btn">Sign Me Up</button>
      </form>
      <p class="email-popup-note">No spam, unsubscribe anytime. Just local food news.</p>
      <p class="email-popup-status" id="emailPopupStatus"></p>
    </div>
  `;
  document.body.appendChild(overlay);

  // Close handlers
  document.getElementById('emailPopupClose').addEventListener('click', closePopup);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closePopup();
  });

  // Submit handler
  document.getElementById('emailPopupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('emailPopupInput');
    const status = document.getElementById('emailPopupStatus');
    const btn = e.target.querySelector('button');
    const email = input.value.trim();

    if (!isValidEmail(email)) {
      status.textContent = 'Please enter a valid email.';
      status.className = 'email-popup-status error';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending...';

    const result = await submitEmail(email, 'popup');
    
    if (result.result === 'success') {
      status.textContent = "You're in! Watch your inbox.";
      status.className = 'email-popup-status success';
      markSubscribed();
      setTimeout(closePopup, 2000);
    } else if (result.result === 'duplicate') {
      status.textContent = "You're already subscribed!";
      status.className = 'email-popup-status success';
      markSubscribed();
      setTimeout(closePopup, 2000);
    } else {
      // With no-cors we can't read errors, so assume success
      status.textContent = "You're in! Watch your inbox.";
      status.className = 'email-popup-status success';
      markSubscribed();
      setTimeout(closePopup, 2000);
    }
  });
}

function showPopup() {
  const overlay = document.getElementById('emailPopupOverlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
}

function closePopup() {
  const overlay = document.getElementById('emailPopupOverlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    markPopupSeen();
  }
}

// ─── SPIN WHEEL EMAIL CAPTURE ───────────────
function injectSpinWheelCapture() {
  const modalActions = document.querySelector('#winnerModal .modal-actions');
  if (!modalActions || document.getElementById('spinEmailCapture')) return;

  const container = document.createElement('div');
  container.id = 'spinEmailCapture';
  container.className = 'spin-email-capture';
  
  if (hasSubscribed()) {
    // Already subscribed, don't show
    return;
  }

  container.innerHTML = `
    <div class="spin-email-divider"></div>
    <p class="spin-email-label">Get picks like this in your inbox every week</p>
    <form class="spin-email-form" id="spinEmailForm">
      <input type="email" placeholder="your@email.com" class="spin-email-input" id="spinEmailInput">
      <button type="submit" class="btn btn-primary spin-email-btn">Subscribe</button>
    </form>
    <p class="spin-email-status" id="spinEmailStatus"></p>
  `;
  modalActions.parentNode.insertBefore(container, modalActions.nextSibling);

  document.getElementById('spinEmailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('spinEmailInput');
    const status = document.getElementById('spinEmailStatus');
    const btn = e.target.querySelector('button');
    const email = input.value.trim();

    if (!isValidEmail(email)) {
      status.textContent = 'Enter a valid email.';
      status.className = 'spin-email-status error';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending...';

    const result = await submitEmail(email, 'spin-wheel');
    
    status.textContent = "You're in! Weekly picks incoming.";
    status.className = 'spin-email-status success';
    markSubscribed();
    btn.textContent = '✓ Subscribed';
  });
}

// ─── FOOTER EMAIL CAPTURE ───────────────────
function injectFooterCapture() {
  const footer = document.querySelector('.footer-bottom');
  if (!footer || document.getElementById('footerEmailCapture')) return;

  const container = document.createElement('div');
  container.id = 'footerEmailCapture';
  container.className = 'footer-email-capture';
  container.innerHTML = `
    <p class="footer-email-label">Get the weekly roundup — restaurants, events, and deals.</p>
    <form class="footer-email-form" id="footerEmailForm">
      <input type="email" placeholder="your@email.com" class="footer-email-input" id="footerEmailInput">
      <button type="submit" class="btn btn-primary footer-email-btn">Subscribe</button>
    </form>
    <p class="footer-email-status" id="footerEmailStatus"></p>
  `;
  footer.parentNode.insertBefore(container, footer);

  document.getElementById('footerEmailForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const input = document.getElementById('footerEmailInput');
    const status = document.getElementById('footerEmailStatus');
    const btn = e.target.querySelector('button');
    const email = input.value.trim();

    if (!isValidEmail(email)) {
      status.textContent = 'Enter a valid email.';
      status.className = 'footer-email-status error';
      return;
    }

    btn.disabled = true;
    btn.textContent = 'Sending...';

    await submitEmail(email, 'footer');
    
    status.textContent = "You're in! Watch for the weekly roundup.";
    status.className = 'footer-email-status success';
    markSubscribed();
    btn.textContent = '✓ Subscribed';
  });
}

// ─── INIT ───────────────────────────────────
function initEmailCapture() {
  // Create popup (always, for structure)
  createPopup();

  // Show popup after 8 seconds if not seen and not already subscribed
  if (!hasSeenPopup() && !hasSubscribed()) {
    setTimeout(showPopup, 8000);
  }

  // Inject spin wheel email capture when winner modal opens
  const winnerModal = document.getElementById('winnerModal');
  if (winnerModal) {
    const observer = new MutationObserver(() => {
      if (winnerModal.classList.contains('active')) {
        injectSpinWheelCapture();
      }
    });
    observer.observe(winnerModal, { attributes: true, attributeFilter: ['class'] });
  }

  // Inject footer email capture
  injectFooterCapture();
}

// Run after DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEmailCapture);
} else {
  initEmailCapture();
}
