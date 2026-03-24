/* ============================================
   FLOWER MOUND FOOD — BLOG.JS
   ============================================ */

const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── BLOG LISTING ──────────────────────────
function renderBlogGrid() {
  const grid = $('#blogGrid');
  if (!grid || typeof blogArticles === 'undefined') return;

  grid.innerHTML = '';
  const frag = document.createDocumentFragment();

  blogArticles.forEach((article, i) => {
    const card = document.createElement('a');
    card.className = 'blog-card';
    card.href = `#${article.slug}`;
    card.style.animationDelay = `${i * 0.08}s`;
    card.addEventListener('click', (e) => {
      e.preventDefault();
      showArticle(article.slug);
    });

    card.innerHTML = `
      <div class="blog-card-emoji">${article.heroEmoji}</div>
      <div class="blog-card-content">
        <div class="blog-card-meta">
          <span class="blog-card-category">${article.category}</span>
          <span class="blog-card-date">${article.date}</span>
        </div>
        <h2 class="blog-card-title">${article.title}</h2>
        <p class="blog-card-desc">${article.metaDescription}</p>
        <span class="blog-card-read">${article.readTime} →</span>
      </div>
    `;
    frag.appendChild(card);
  });

  grid.appendChild(frag);
}

// ─── ARTICLE VIEW ──────────────────────────
function showArticle(slug) {
  const article = blogArticles.find(a => a.slug === slug);
  if (!article) return;

  // Update meta
  document.title = `${article.title} — Flower Mound Food`;
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);

  // Populate
  $('#articleCategory').textContent = article.category;
  $('#articleDate').textContent = article.date;
  $('#articleRead').textContent = article.readTime;
  $('#articleTitle').textContent = article.title;
  $('#articleBody').innerHTML = article.content;

  // Switch views
  $('#blogListing').style.display = 'none';
  $('#articleView').style.display = 'block';

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'instant' });

  // Update URL hash
  history.pushState(null, '', `#${slug}`);
}

function showListing() {
  document.title = 'Blog — Flower Mound Food';
  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', 'Local restaurant guides, food recommendations, and dining tips for Flower Mound, Highland Village, Argyle, Bartonville, Lantana & Lewisville TX.');

  $('#blogListing').style.display = 'block';
  $('#articleView').style.display = 'none';
  window.scrollTo({ top: 0, behavior: 'instant' });
  history.pushState(null, '', 'blog.html');
}

// ─── NAVIGATION ────────────────────────────
function initBlogNav() {
  const toggle = $('#navToggle');
  const links = $('#navLinks');

  if (toggle && links) {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('open');
      links.classList.toggle('open');
    });

    $$('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        toggle.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }

  // Back buttons
  const backToList = $('#backToList');
  const backToListBottom = $('#backToListBottom');
  if (backToList) {
    backToList.addEventListener('click', (e) => {
      e.preventDefault();
      showListing();
    });
  }
  if (backToListBottom) {
    backToListBottom.addEventListener('click', (e) => {
      e.preventDefault();
      showListing();
    });
  }
}

// ─── HASH ROUTING ──────────────────────────
function handleHash() {
  const hash = window.location.hash.slice(1);
  if (hash && blogArticles.find(a => a.slug === hash)) {
    showArticle(hash);
  } else {
    showListing();
  }
}

// ─── INIT ──────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderBlogGrid();
  initBlogNav();
  handleHash();
});

window.addEventListener('popstate', handleHash);
