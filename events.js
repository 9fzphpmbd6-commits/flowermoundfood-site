/* ============================================
   EVENTS PAGE — JavaScript
   Flower Mound Food
   ============================================ */

(function () {
  'use strict';

  /* ---------- SAMPLE EVENTS DATA ---------- */
  var events = [
    {
      id: 1,
      restaurant: "Marty B's",
      title: "Live Jazz Night",
      description: "Enjoy smooth jazz with craft cocktails and Southern-inspired bites every Tuesday evening starting at 7 PM. Reservations recommended.",
      type: "live-music",
      typeLabel: "Live Music",
      town: "Bartonville",
      date: "2026-03-10",
      month: "MAR",
      day: "10"
    },
    {
      id: 2,
      restaurant: "Tycoon Flats",
      title: "Half-Price Appetizers",
      description: "All appetizers half off from 4–7 PM. Perfect for after-work bites with friends and family. Dine-in only.",
      type: "special",
      typeLabel: "Special",
      town: "Flower Mound",
      date: "2026-03-11",
      month: "MAR",
      day: "11"
    },
    {
      id: 3,
      restaurant: "El Fenix",
      title: "$2 Taco Thursday",
      description: "Build-your-own tacos for just $2 each all day. Mix and match proteins and fresh toppings. Drinks specials all night.",
      type: "special",
      typeLabel: "Special",
      town: "Highland Village",
      date: "2026-03-12",
      month: "MAR",
      day: "12"
    },
    {
      id: 4,
      restaurant: "Cork & Pig Tavern",
      title: "Wine Wednesday BOGO",
      description: "Buy one glass of wine, get one free every Wednesday. Explore rotating selections from Texas vineyards.",
      type: "happy-hour",
      typeLabel: "Happy Hour",
      town: "Flower Mound",
      date: "2026-03-11",
      month: "MAR",
      day: "11"
    },
    {
      id: 5,
      restaurant: "Twisted Root Burger Co.",
      title: "Trivia Night",
      description: "Test your knowledge every Thursday at 8 PM. Teams of up to 6. Winner gets free burgers for the table!",
      type: "family",
      typeLabel: "Family",
      town: "Flower Mound",
      date: "2026-03-12",
      month: "MAR",
      day: "12"
    },
    {
      id: 6,
      restaurant: "Shoal Creek Tavern",
      title: "Friday Pint Night",
      description: "All craft pints $5 from 5–9 PM. Rotating taps feature local Texas breweries. Live acoustic music on the patio.",
      type: "happy-hour",
      typeLabel: "Happy Hour",
      town: "Flower Mound",
      date: "2026-03-13",
      month: "MAR",
      day: "13"
    },
    {
      id: 7,
      restaurant: "Brio Italian Grille",
      title: "Kids Eat Free Sunday",
      description: "Kids 12 and under eat free with the purchase of an adult entrée every Sunday. Family-friendly dining at its best.",
      type: "family",
      typeLabel: "Family",
      town: "Highland Village",
      date: "2026-03-15",
      month: "MAR",
      day: "15"
    },
    {
      id: 8,
      restaurant: "The Yard",
      title: "Grand Opening Weekend",
      description: "Join us for our grand opening celebration! Live music Saturday, complimentary appetizers, and giveaways all weekend.",
      type: "live-music",
      typeLabel: "Live Music",
      town: "Argyle",
      date: "2026-03-14",
      month: "MAR",
      day: "14"
    }
  ];

  /* Event dates for calendar dots */
  var eventDates = [10, 11, 12, 13, 14, 15];

  /* ---------- MOBILE NAV TOGGLE ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });
    navLinks.querySelectorAll('.nav-link').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  /* ---------- FILTER PILLS ---------- */
  var filterPills = document.getElementById('filterPills');
  var activeFilter = 'all';

  if (filterPills) {
    filterPills.addEventListener('click', function (e) {
      var pill = e.target.closest('.filter-pill');
      if (!pill) return;
      filterPills.querySelectorAll('.filter-pill').forEach(function (p) { p.classList.remove('active'); });
      pill.classList.add('active');
      activeFilter = pill.dataset.filter;
      renderEvents();
    });
  }

  /* ---------- RENDER EVENTS ---------- */
  function renderEvents() {
    var list = document.getElementById('eventsList');
    if (!list) return;

    var filtered = events;
    if (activeFilter === 'this-week') {
      filtered = events.filter(function (ev) {
        var d = parseInt(ev.day, 10);
        return d >= 8 && d <= 15;
      });
    } else if (activeFilter !== 'all') {
      filtered = events.filter(function (ev) { return ev.type === activeFilter; });
    }

    if (filtered.length === 0) {
      list.innerHTML = '<div class="events-empty"><p>No events found for this filter. Check back soon!</p></div>';
      return;
    }

    list.innerHTML = filtered.map(function (ev) {
      return '<div class="event-card" data-type="' + ev.type + '">' +
        '<div class="event-date-badge">' +
          '<span class="event-date-month">' + ev.month + '</span>' +
          '<span class="event-date-day">' + ev.day + '</span>' +
        '</div>' +
        '<div class="event-card-body">' +
          '<div class="event-card-restaurant">' + ev.restaurant + '</div>' +
          '<h3 class="event-card-title">' + ev.title + '</h3>' +
          '<p class="event-card-desc">' + ev.description + '</p>' +
          '<div class="event-card-footer">' +
            '<span class="badge badge-town">' + ev.town + '</span>' +
            '<span class="badge badge-category">' + ev.typeLabel + '</span>' +
            '<a href="#" class="event-card-link">Learn More &rarr;</a>' +
          '</div>' +
        '</div>' +
      '</div>';
    }).join('');
  }

  /* ---------- MINI CALENDAR (SIDEBAR) ---------- */
  function renderMiniCalendar() {
    var cal = document.getElementById('miniCalendar');
    if (!cal) return;

    var today = 8; /* March 8, 2026 */
    var daysInMonth = 31;
    var startDay = 0; /* March 1, 2026 is a Sunday */

    var html = '<div class="mini-cal-header">';
    ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].forEach(function (d) {
      html += '<span>' + d + '</span>';
    });
    html += '</div><div class="mini-cal-grid">';

    for (var i = 0; i < startDay; i++) {
      html += '<div class="mini-cal-day empty"></div>';
    }

    for (var day = 1; day <= daysInMonth; day++) {
      var classes = 'mini-cal-day';
      if (day === today) classes += ' today';
      if (eventDates.indexOf(day) !== -1) classes += ' has-event';
      html += '<div class="' + classes + '">' + day + '</div>';
    }

    html += '</div>';
    cal.innerHTML = html;
  }

  /* ============================================
     PROMOTE SECTION — 2-STEP FLOW
     ============================================ */

  var selectedPackage = null;
  var selectedStripeLink = null;

  var packageLabels = {
    '1day': '1 Day — $10',
    '3day': '3 Days — $25',
    '7day': '7 Days — $49'
  };

  /* ---------- STEP 1: PACKAGE SELECTION ---------- */
  var packageCards = document.querySelectorAll('.package-card');
  var step1 = document.getElementById('promoteStep1');
  var step2 = document.getElementById('promoteStep2');
  var banner = document.getElementById('selectedPackageBanner');
  var changeBtn = document.getElementById('changePackageBtn');

  packageCards.forEach(function (card) {
    card.addEventListener('click', function () {
      /* Highlight selected */
      packageCards.forEach(function (c) { c.classList.remove('selected'); });
      card.classList.add('selected');

      selectedPackage = card.dataset.package;
      selectedStripeLink = card.dataset.link;

      /* Transition to step 2 */
      setTimeout(function () {
        step1.classList.add('promote-step-hidden');
        step2.classList.remove('promote-step-hidden');

        /* Show selected package banner */
        if (banner) {
          banner.innerHTML = 'Selected: <strong>' + packageLabels[selectedPackage] + '</strong>';
        }

        /* Scroll to step 2 */
        step2.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 300);
    });
  });

  /* Back button */
  if (changeBtn) {
    changeBtn.addEventListener('click', function () {
      step2.classList.add('promote-step-hidden');
      step1.classList.remove('promote-step-hidden');
      step1.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  }

  /* ---------- LIVE PREVIEW ---------- */
  function updatePreview() {
    var restaurant = document.getElementById('promoRestaurant');
    var title = document.getElementById('promoTitle');
    var desc = document.getElementById('promoDesc');
    var type = document.getElementById('promoType');

    var prevRestaurant = document.getElementById('previewRestaurant');
    var prevTitle = document.getElementById('previewTitle');
    var prevDesc = document.getElementById('previewDesc');
    var prevType = document.getElementById('previewType');

    if (prevRestaurant && restaurant) {
      prevRestaurant.textContent = restaurant.value || 'Your Restaurant';
    }
    if (prevTitle && title) {
      prevTitle.textContent = title.value || 'Event Title';
    }
    if (prevDesc && desc) {
      prevDesc.textContent = desc.value || 'Your event description will appear here...';
    }
    if (prevType && type) {
      prevType.textContent = type.value || 'Event Type';
    }
  }

  /* ---------- FORM INPUT LISTENERS ---------- */
  ['promoRestaurant', 'promoTitle', 'promoDesc', 'promoType'].forEach(function (id) {
    var el = document.getElementById(id);
    if (el) {
      el.addEventListener('input', updatePreview);
      el.addEventListener('change', updatePreview);
    }
  });

  /* ---------- FORM SUBMISSION ---------- */
  var form = document.getElementById('promoteForm');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var restaurant = document.getElementById('promoRestaurant').value;
      var title = document.getElementById('promoTitle').value;
      var desc = document.getElementById('promoDesc').value;
      var type = document.getElementById('promoType').value;
      var dates = document.getElementById('promoDates').value;
      var email = document.getElementById('promoEmail').value;
      var logo = document.getElementById('promoLogo').value;
      var notes = document.getElementById('promoNotes').value;

      if (!selectedPackage || !selectedStripeLink) {
        alert('Please select a package first.');
        return;
      }

      /* Build the email body */
      var subject = encodeURIComponent('Event Promotion Request — ' + restaurant);
      var bodyParts = [
        '--- EVENT PROMOTION REQUEST ---',
        '',
        'Package: ' + packageLabels[selectedPackage],
        '',
        'Restaurant: ' + restaurant,
        'Event Title: ' + title,
        'Description: ' + (desc || '(none provided)'),
        'Event Type: ' + type,
        'Preferred Dates: ' + dates,
        'Contact Email: ' + email,
        '',
        'Logo/Image: ' + (logo || '(none provided — will use restaurant name)'),
        '',
        'Additional Notes: ' + (notes || '(none)')
      ];

      var body = encodeURIComponent(bodyParts.join('\n'));

      /* Open mailto in background, then redirect to Stripe */
      var mailtoLink = 'mailto:flowermoundfood@gmail.com?subject=' + subject + '&body=' + body;

      /* Create a hidden link to trigger mailto without leaving page */
      var a = document.createElement('a');
      a.href = mailtoLink;
      a.target = '_blank';
      a.style.display = 'none';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);

      /* Redirect to Stripe after a brief delay */
      setTimeout(function () {
        window.open(selectedStripeLink, '_blank');
      }, 800);

      /* Show confirmation */
      var btn = document.getElementById('promoteSubmitBtn');
      if (btn) {
        btn.textContent = 'Redirecting to payment...';
        btn.disabled = true;
        btn.style.opacity = '0.6';
      }
    });
  }

  /* ---------- INIT ---------- */
  renderEvents();
  renderMiniCalendar();

})();
