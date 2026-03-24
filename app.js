/* ============================================
   FLOWER MOUND FOOD — APP.JS
   ============================================ */

// ─── RESTAURANT DATA ───────────────────────
const restaurants = [
  // Flower Mound
  { name: "Luna Grill", category: "American", town: "Flower Mound" },
  { name: "Verf's Grill & Tavern", category: "American", town: "Flower Mound" },
  { name: "1845 Taste Texas", category: "American", town: "Flower Mound" },
  { name: "Texas Roadhouse", category: "American", town: "Flower Mound" },
  { name: "Istanbul Cuisine", category: "American", town: "Flower Mound" },
  { name: "Fish City Grill", category: "American", town: "Flower Mound" },
  { name: "Rustico Wood Fired Grill", category: "American", town: "Flower Mound" },
  { name: "Local Pint", category: "American", town: "Flower Mound" },
  { name: "The Tavern at Lakeside", category: "American", town: "Flower Mound" },
  { name: "Tycoon", category: "American", town: "Flower Mound" },
  { name: "Harold Dean Smoked Goods", category: "BBQ", town: "Flower Mound" },
  { name: "Flurry's Market", category: "American", town: "Flower Mound" },
  { name: "Texas Star Cafe", category: "American", town: "Flower Mound" },
  { name: "Whiskey & Smoke", category: "BBQ", town: "Flower Mound" },
  { name: "Clink Wine Bar + Bites", category: "American", town: "Flower Mound" },
  { name: "Vieux Carré", category: "American", town: "Flower Mound" },
  { name: "Guitars & Growlers", category: "American", town: "Flower Mound" },
  { name: "Mi Cocina", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Taco Ocho", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Mi Dia From Scratch", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Mattito's Tex-Mex", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Anamia's Tex Mex", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Gloria's Latin Cuisine", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Urbano Enchilada Taco Bar", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Mena's Grill Tex Mex", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Gabriela & Sofia's TexMex", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Pretty Burrito", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Fajita Pete's", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Los Caminos", category: "Mexican / Tex-Mex", town: "Flower Mound" },
  { name: "Branded Bowls", category: "American", town: "Flower Mound" },
  { name: "Mister O1 Extraordinary Pizza", category: "Pizza", town: "Flower Mound" },
  { name: "Mio Nonno Trattoria", category: "Italian", town: "Flower Mound" },
  { name: "Fiori", category: "Italian", town: "Flower Mound" },
  { name: "Enzo's NY Pizzeria", category: "Pizza", town: "Flower Mound" },
  { name: "Alforno's Italian Kitchen", category: "Italian", town: "Flower Mound" },
  { name: "Bari's Pizza & Pasta", category: "Pizza", town: "Flower Mound" },
  { name: "GiroPizza", category: "Pizza", town: "Flower Mound" },
  { name: "Palio's Pizza Cafe", category: "Pizza", town: "Flower Mound" },
  { name: "Rocco's Italian Kitchen", category: "Italian", town: "Flower Mound" },
  { name: "Hanaya Hibachi Sushi & Asian Fusion", category: "Asian", town: "Flower Mound" },
  { name: "Asahi Teppenyaki & Sushi", category: "Asian", town: "Flower Mound" },
  { name: "Ramen Mura", category: "Asian", town: "Flower Mound" },
  { name: "Sushi Yamazaki Bar & Grill", category: "Asian", town: "Flower Mound" },
  { name: "Pei Wei Asian Kitchen", category: "Asian", town: "Flower Mound" },
  { name: "Tomo Sushi", category: "Asian", town: "Flower Mound" },
  { name: "Sushi Damu", category: "Asian", town: "Flower Mound" },
  { name: "Sushi Go", category: "Asian", town: "Flower Mound" },
  { name: "Yummy Sichuan", category: "Asian", town: "Flower Mound" },
  { name: "Curry Up Now", category: "Asian", town: "Flower Mound" },
  { name: "Supreme Boil", category: "Seafood", town: "Flower Mound" },
  { name: "Morning Edition", category: "Breakfast & Brunch", town: "Flower Mound" },
  { name: "First Watch", category: "Breakfast & Brunch", town: "Flower Mound" },
  { name: "Honeybird Sandwiches, Donuts & Coffee", category: "Breakfast & Brunch", town: "Flower Mound" },
  { name: "Grutogi Bistro", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "Toastique", category: "Breakfast & Brunch", town: "Flower Mound" },
  { name: "CAVA", category: "American", town: "Flower Mound" },
  { name: "TruFit Foods", category: "American", town: "Flower Mound" },
  { name: "Starbucks", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "Hive Bakery", category: "Bakery", town: "Flower Mound" },
  { name: "Snowy Bingsu & Boba", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "The Flour Shop Bakery", category: "Bakery", town: "Flower Mound" },
  { name: "Nothing Bundt Cakes", category: "Bakery", town: "Flower Mound" },
  { name: "Buttermilk Sky Pie", category: "Bakery", town: "Flower Mound" },
  { name: "Handel's Homemade Ice Cream", category: "Ice Cream", town: "Flower Mound" },
  { name: "Paris Baguette", category: "Bakery", town: "Flower Mound" },
  { name: "Cristy's Cake Shop", category: "Bakery", town: "Flower Mound" },
  { name: "TRIO Coffee", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "Nekter Juice Bar", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "Dutch Bros Coffee", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "TeaLabo", category: "Coffee & Tea", town: "Flower Mound" },
  { name: "Sara's Donut Story", category: "Donuts", town: "Flower Mound" },
  { name: "Southern Maid Donuts", category: "Donuts", town: "Flower Mound" },
  { name: "FM Donuts", category: "Donuts", town: "Flower Mound" },

  // Highland Village
  { name: "Hillside Fine Grill", category: "American", town: "Highland Village" },
  { name: "Bistecca – An Italian Steakhouse", category: "Steakhouse", town: "Highland Village" },
  { name: "Shoal Creek Tavern", category: "Bar & Grill", town: "Highland Village" },
  { name: "Seven Mile Cafe", category: "Breakfast & Brunch", town: "Highland Village" },
  { name: "Sip + Savor", category: "American", town: "Highland Village" },
  { name: "Delhi6 Indian Kitchen & Bar", category: "Indian", town: "Highland Village" },
  { name: "Blue Goose Cantina", category: "Mexican / Tex-Mex", town: "Highland Village" },
  // Hugo's Lost Colony - CLOSED permanently (April 2025)
  { name: "Torchy's Tacos", category: "Mexican / Tex-Mex", town: "Highland Village" },
  { name: "Grimaldi's Coal Brick-Oven Pizzeria", category: "Pizza", town: "Highland Village" },
  { name: "Palio's Pizza Cafe (HV)", category: "Pizza", town: "Highland Village" },
  { name: "Salerno's Italian Restaurant", category: "Italian", town: "Highland Village" },
  { name: "Dragon House Highland Village", category: "Chinese", town: "Highland Village" },
  { name: "Mt. Fuji Hibachi", category: "Japanese", town: "Highland Village" },
  { name: "The Snooty Pig Cafe (HV)", category: "American", town: "Highland Village" },
  { name: "Berries & Batter", category: "Breakfast & Brunch", town: "Highland Village" },
  { name: "Lambeau's America", category: "Bar & Grill", town: "Highland Village" },
  { name: "Honey Berry Pancakes & Cafe", category: "Breakfast & Brunch", town: "Highland Village" },
  { name: "Pokemoto", category: "Asian", town: "Highland Village" },

  // Lantana
  { name: "Black Rock Coffee Bar", category: "Coffee & Tea", town: "Lantana" },
  { name: "Marigold Market + Cafe", category: "American", town: "Lantana" },
  { name: "La Popular", category: "Mexican / Tex-Mex", town: "Lantana" },
  { name: "Ling Wu Asian Restaurant", category: "Asian", town: "Lantana" },
  { name: "Taro Kitchen & Cocktails", category: "American", town: "Lantana" },
  { name: "Lantana Grill", category: "American", town: "Lantana" },
  { name: "Awesome Times", category: "American", town: "Lantana" },

  // Argyle
  { name: "407 BBQ", category: "BBQ", town: "Argyle" },
  { name: "Earl's 377 Pizza", category: "Pizza", town: "Argyle" },
  { name: "Bumbershoot Barbecue", category: "BBQ", town: "Argyle" },
  { name: "Kimzey's Coffee Shop", category: "Coffee & Tea", town: "Argyle" },
  { name: "The Snooty Pig Cafe", category: "Breakfast & Brunch", town: "Argyle" },
  { name: "Little Joe's Farmstead", category: "American", town: "Argyle" },
  { name: "Giovanni's Pizza", category: "Pizza", town: "Argyle" },
  { name: "Cactus Canyon", category: "Mexican / Tex-Mex", town: "Argyle" },
  { name: "Bella Italia Bistro", category: "Italian", town: "Argyle" },
  { name: "Donut Paradise", category: "Donuts", town: "Argyle" },
  { name: "The Jenny Layne Bakery", category: "Bakery", town: "Argyle" },
  { name: "Gnome Cones", category: "Ice Cream", town: "Argyle" },

  // Bartonville
  { name: "Marty B's", category: "American", town: "Bartonville" },
  { name: "The Bartonville Store", category: "American", town: "Bartonville" },
  { name: "Tokyo Samurai Hibachi & Sushi", category: "Japanese", town: "Bartonville" },
  { name: "Palermo Italian Cafe", category: "Italian", town: "Bartonville" },
  { name: "Golden Egg Cafe", category: "Breakfast & Brunch", town: "Bartonville" },
  { name: "Casa Mia", category: "Mexican / Tex-Mex", town: "Bartonville" },
  { name: "The Barrel", category: "American", town: "Bartonville" },
  { name: "Calles de Mexico", category: "Mexican / Tex-Mex", town: "Bartonville" },
  { name: "Trios Italian Bistro", category: "Italian", town: "Bartonville" },
  { name: "Dickey's Barbecue Pit", category: "BBQ", town: "Bartonville" },
  { name: "Bartonville Tavern", category: "Bar & Grill", town: "Bartonville" },
  { name: "Marty B's Coffee Co.", category: "Coffee & Tea", town: "Bartonville" },

  // Lewisville
  { name: "Starwood Diner", category: "Breakfast & Brunch", town: "Lewisville" },
  { name: "Saltgrass Steak House", category: "Steakhouse", town: "Lewisville" },
  { name: "Prairie House Restaurant", category: "Steakhouse", town: "Lewisville" },
  { name: "Rockfish Seafood & Grill", category: "Seafood", town: "Lewisville" },
  { name: "Sullivan Texas BBQ", category: "BBQ", town: "Lewisville" },
  { name: "Parma Pasta Pizza", category: "Italian", town: "Lewisville" },
  { name: "Alfredo's Pizza & Pasta", category: "Italian", town: "Lewisville" },
  { name: "Chante Mexican Grill & Cantina", category: "Mexican / Tex-Mex", town: "Lewisville" },
  { name: "Cristina's Mexican Restaurant", category: "Mexican / Tex-Mex", town: "Lewisville" },
  { name: "Jinbeh", category: "Japanese", town: "Lewisville" },
  { name: "Korner Cafe", category: "American", town: "Lewisville" },
  { name: "Main Street Cafe", category: "American", town: "Lewisville" },
  { name: "Fat Cow BBQ", category: "BBQ", town: "Lewisville" },
  { name: "Big Jack's BBQ", category: "BBQ", town: "Lewisville" },
  { name: "Razzoo's Cajun Cafe", category: "American", town: "Lewisville" },
  { name: "Pho One Vietnamese Restaurant", category: "Vietnamese", town: "Lewisville" },
  { name: "Pho Que Huong", category: "Vietnamese", town: "Lewisville" },
  { name: "Nick's Pizza Pasta", category: "Pizza", town: "Lewisville" },
  { name: "Pie 314", category: "Pizza", town: "Lewisville" },
  { name: "Motor City Pizza", category: "Pizza", town: "Lewisville" },
  { name: "Blue Ocean Sushi", category: "Japanese", town: "Lewisville" },
  { name: "Prairie House Restaurant", category: "American", town: "Lewisville" },
  { name: "Mama's Daughters' Diner", category: "American", town: "Lewisville" },
  { name: "Lucky Panda Cafe", category: "Asian", town: "Lewisville" },
  { name: "Martinez Abarrotes & Grill", category: "Mexican / Tex-Mex", town: "Lewisville" },
  { name: "Rosa's Cafe & Tortilla Factory", category: "Mexican / Tex-Mex", town: "Lewisville" },
  { name: "Whataburger", category: "Burgers", town: "Lewisville" },
  { name: "Drunken Donkey Bar and Grill", category: "Bar & Grill", town: "Lewisville" },
  { name: "Mochinut", category: "Donuts", town: "Lewisville" },
];

// ─── DERIVED DATA ──────────────────────────
const allCategories = [...new Set(restaurants.map(r => r.category))].sort();
const allTowns = [...new Set(restaurants.map(r => r.town))].sort();

// ─── DOM ELEMENTS ──────────────────────────
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => document.querySelectorAll(sel);

// ─── POPULATE DROPDOWNS ────────────────────
function populateDropdowns() {
  const cuisineSelects = [
    $('#wheelCuisineFilter'),
    $('#dirCuisineFilter'),
    $('#submitCuisine')
  ];
  const townSelects = [
    $('#wheelTownFilter'),
    $('#dirTownFilter'),
    $('#submitTown')
  ];

  cuisineSelects.forEach(sel => {
    if (!sel) return;
    const isSubmit = sel.id === 'submitCuisine';
    allCategories.forEach(cat => {
      const opt = document.createElement('option');
      opt.value = cat;
      opt.textContent = cat;
      sel.appendChild(opt);
    });
  });

  townSelects.forEach(sel => {
    if (!sel) return;
    allTowns.forEach(town => {
      const opt = document.createElement('option');
      opt.value = town;
      opt.textContent = town;
      sel.appendChild(opt);
    });
  });
}

// ─── NAVIGATION ────────────────────────────
function initNav() {
  const navbar = $('#navbar');
  const toggle = $('#navToggle');
  const links = $('#navLinks');
  const navLinks = $$('.nav-link');

  // Scroll effect
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });

  // Mobile toggle
  toggle.addEventListener('click', () => {
    toggle.classList.toggle('open');
    links.classList.toggle('open');
  });

  // Close mobile on link click
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      toggle.classList.remove('open');
      links.classList.remove('open');
    });
  });

  // Active link on scroll
  const sections = $$('.section');
  const observerOpts = { rootMargin: '-40% 0px -40% 0px' };
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.id;
        navLinks.forEach(l => l.classList.remove('active'));
        const activeLink = $(`a.nav-link[href="#${id}"]`);
        if (activeLink) activeLink.classList.add('active');
      }
    });
  }, observerOpts);

  sections.forEach(s => sectionObserver.observe(s));
}

// ─── SCROLL REVEAL ─────────────────────────
let revealObserver; // global so dynamic content can use it
function initReveal() {
  const reveals = $$('.reveal');
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.05, rootMargin: '50px 0px -10px 0px' });

  reveals.forEach(el => revealObserver.observe(el));

  // Reveal hero immediately
  setTimeout(() => {
    const heroSection = document.querySelector('#home');
    if (heroSection) {
      heroSection.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
    }
  }, 100);

  // If page loads with a hash, reveal that section after scroll settles
  if (window.location.hash) {
    setTimeout(() => {
      const target = document.querySelector(window.location.hash);
      if (target) {
        target.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
      }
    }, 400);
  }

  // Fallback: re-check all reveals after a short delay (handles edge cases)
  setTimeout(() => {
    reveals.forEach(el => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('visible');
      }
    });
  }, 600);
}

// ─── SPIN WHEEL (CANVAS) ──────────────────
const WHEEL_COLORS = [
  '#D97706', '#B45309', '#92400E', '#F59E0B', '#FBBF24',
  '#F97316', '#EA580C', '#C2410C', '#EF4444', '#DC2626',
  '#10B981', '#059669', '#047857', '#14B8A6', '#0D9488',
  '#8B5CF6', '#7C3AED', '#6D28D9', '#EC4899', '#DB2777',
  '#6366F1', '#4F46E5', '#3B82F6', '#2563EB', '#0EA5E9',
  '#06B6D4', '#F43F5E', '#E11D48', '#A855F7', '#9333EA'
];

let wheelSegments = [];
let wheelAngle = 0;
let wheelSpinning = false;
let wheelAnimId = null;
const canvas = $('#wheelCanvas');
const ctx = canvas.getContext('2d');

function getFilteredRestaurants() {
  const cuisine = $('#wheelCuisineFilter').value;
  const town = $('#wheelTownFilter').value;
  let filtered = restaurants;
  if (cuisine !== 'all') filtered = filtered.filter(r => r.category === cuisine);
  if (town !== 'all') filtered = filtered.filter(r => r.town === town);
  return filtered;
}

function pickWheelSegments() {
  const filtered = getFilteredRestaurants();
  if (filtered.length === 0) return [];

  const maxSegments = 24;
  let selected;

  if (filtered.length <= maxSegments) {
    selected = [...filtered];
  } else {
    // Random sample
    const shuffled = [...filtered].sort(() => Math.random() - 0.5);
    selected = shuffled.slice(0, maxSegments);
  }

  return selected;
}

function drawWheel() {
  const dpr = window.devicePixelRatio || 1;
  const displaySize = canvas.clientWidth;

  canvas.width = displaySize * dpr;
  canvas.height = displaySize * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

  const cx = displaySize / 2;
  const cy = displaySize / 2;
  const radius = displaySize / 2 - 8;

  ctx.clearRect(0, 0, displaySize, displaySize);

  if (wheelSegments.length === 0) {
    // Empty state
    ctx.beginPath();
    ctx.arc(cx, cy, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#1A1A1F';
    ctx.fill();
    ctx.strokeStyle = 'rgba(245, 158, 11, 0.2)';
    ctx.lineWidth = 2;
    ctx.stroke();

    ctx.fillStyle = '#6B6B78';
    ctx.font = '600 16px Sora, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('No restaurants match', cx, cy - 12);
    ctx.fillText('your filters', cx, cy + 12);
    return;
  }

  const segCount = wheelSegments.length;
  const segAngle = (Math.PI * 2) / segCount;

  wheelSegments.forEach((seg, i) => {
    const startAngle = wheelAngle + i * segAngle;
    const endAngle = startAngle + segAngle;

    // Draw segment
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    ctx.fillStyle = WHEEL_COLORS[i % WHEEL_COLORS.length];
    ctx.fill();

    // Segment border
    ctx.strokeStyle = 'rgba(0,0,0,0.25)';
    ctx.lineWidth = 1;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(startAngle + segAngle / 2);

    const textRadius = radius * 0.62;
    ctx.fillStyle = '#FFFFFF';
    ctx.font = `600 ${Math.min(11, 200 / segCount)}px Sora, sans-serif`;
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';

    // Truncate text
    let displayName = seg.name;
    if (displayName.length > 22) {
      displayName = displayName.slice(0, 20) + '…';
    }
    ctx.fillText(displayName, textRadius, 0);
    ctx.restore();
  });

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 30, 0, Math.PI * 2);
  ctx.fillStyle = '#0C0C0E';
  ctx.fill();
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.4)';
  ctx.lineWidth = 2;
  ctx.stroke();

  // Outer ring
  ctx.beginPath();
  ctx.arc(cx, cy, radius, 0, Math.PI * 2);
  ctx.strokeStyle = 'rgba(245, 158, 11, 0.3)';
  ctx.lineWidth = 4;
  ctx.stroke();
}

function spinWheel() {
  if (wheelSpinning) return;

  wheelSegments = pickWheelSegments();
  if (wheelSegments.length === 0) {
    drawWheel();
    return;
  }

  wheelSpinning = true;
  const spinBtn = $('#spinBtn');
  spinBtn.disabled = true;
  spinBtn.style.opacity = '0.6';

  // Calculate target
  const segAngle = (Math.PI * 2) / wheelSegments.length;
  const winnerIndex = Math.floor(Math.random() * wheelSegments.length);

  // Pointer is at top (270° = -π/2). We need the winner segment's center to align there.
  // The center of segment i is at: wheelAngle + i*segAngle + segAngle/2
  // For pointer at -π/2: wheelAngle + winnerIndex*segAngle + segAngle/2 = -π/2 + 2πk
  // => wheelAngle = -π/2 - winnerIndex*segAngle - segAngle/2 + 2πk
  const targetAngle = -Math.PI / 2 - winnerIndex * segAngle - segAngle / 2;

  // Add multiple rotations for effect
  const extraRotations = (4 + Math.floor(Math.random() * 4)) * Math.PI * 2;
  const totalSpin = targetAngle - wheelAngle + extraRotations;

  const duration = 4000 + Math.random() * 2000;
  const startTime = performance.now();
  const startAngle = wheelAngle;

  function easeOutQuint(t) {
    return 1 - Math.pow(1 - t, 5);
  }

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeOutQuint(progress);

    wheelAngle = startAngle + totalSpin * eased;
    drawWheel();

    if (progress < 1) {
      wheelAnimId = requestAnimationFrame(animate);
    } else {
      // Done
      wheelSpinning = false;
      spinBtn.disabled = false;
      spinBtn.style.opacity = '1';
      showWinner(wheelSegments[winnerIndex]);
    }
  }

  wheelAnimId = requestAnimationFrame(animate);
}

function showWinner(restaurant) {
  $('#winnerName').textContent = restaurant.name;
  $('#winnerCategory').textContent = restaurant.category;
  $('#winnerTown').textContent = restaurant.town;
  $('#winnerModal').classList.add('active');
}

function closeModal() {
  $('#winnerModal').classList.remove('active');
}

function initWheel() {
  wheelSegments = pickWheelSegments();
  drawWheel();

  $('#spinBtn').addEventListener('click', spinWheel);
  // Click on canvas to spin too
  canvas.addEventListener('click', spinWheel);

  $('#modalClose').addEventListener('click', closeModal);
  $('#modalCloseBtn').addEventListener('click', closeModal);
  $('#spinAgainBtn').addEventListener('click', () => {
    closeModal();
    setTimeout(spinWheel, 300);
  });
  $('#winnerModal').addEventListener('click', (e) => {
    if (e.target === $('#winnerModal')) closeModal();
  });

  // Re-draw on filter change
  $('#wheelCuisineFilter').addEventListener('change', () => {
    wheelSegments = pickWheelSegments();
    wheelAngle = 0;
    drawWheel();
  });
  $('#wheelTownFilter').addEventListener('change', () => {
    wheelSegments = pickWheelSegments();
    wheelAngle = 0;
    drawWheel();
  });

  // Resize
  window.addEventListener('resize', drawWheel);
}

// ─── RESTAURANT DIRECTORY ──────────────────
function initDirectory() {
  const grid = $('#directoryGrid');
  const searchInput = $('#searchInput');
  const cuisineFilter = $('#dirCuisineFilter');
  const townFilter = $('#dirTownFilter');
  const sortFilter = $('#dirSortFilter');
  const resultsCount = $('#resultsCount');

  function renderDirectory() {
    const query = searchInput.value.toLowerCase().trim();
    const cuisine = cuisineFilter.value;
    const town = townFilter.value;
    const sort = sortFilter.value;

    let filtered = restaurants.filter(r => {
      const matchQuery = !query || r.name.toLowerCase().includes(query) || r.category.toLowerCase().includes(query);
      const matchCuisine = cuisine === 'all' || r.category === cuisine;
      const matchTown = town === 'all' || r.town === town;
      return matchQuery && matchCuisine && matchTown;
    });

    // Sort
    if (sort === 'alpha') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sort === 'town') {
      filtered.sort((a, b) => a.town.localeCompare(b.town) || a.name.localeCompare(b.name));
    } else if (sort === 'category') {
      filtered.sort((a, b) => a.category.localeCompare(b.category) || a.name.localeCompare(b.name));
    }

    resultsCount.textContent = `Showing ${filtered.length} of ${restaurants.length} restaurants`;

    grid.innerHTML = '';

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
          <p style="font-size: 1.2rem; color: var(--text-muted); font-family: var(--font-display);">No restaurants found</p>
          <p style="color: var(--text-muted); margin-top: 8px;">Try adjusting your filters or search</p>
        </div>
      `;
      return;
    }

    // Use DocumentFragment for performance
    const frag = document.createDocumentFragment();
    filtered.forEach((r, i) => {
      const card = document.createElement('div');
      card.className = 'restaurant-card';
      card.style.animationDelay = `${Math.min(i * 0.03, 0.5)}s`;
      card.innerHTML = `
        <div class="card-name">${escapeHtml(r.name)}</div>
        <div class="card-badges">
          <span class="badge badge-category">${escapeHtml(r.category)}</span>
          <span class="badge badge-town">${escapeHtml(r.town)}</span>
        </div>
      `;
      frag.appendChild(card);
    });
    grid.appendChild(frag);
  }

  searchInput.addEventListener('input', debounce(renderDirectory, 200));
  cuisineFilter.addEventListener('change', renderDirectory);
  townFilter.addEventListener('change', renderDirectory);
  sortFilter.addEventListener('change', renderDirectory);

  renderDirectory();
}

function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

function debounce(fn, ms) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), ms);
  };
}

// ─── SUBMIT FORM ───────────────────────────
function initForm() {
  const form = $('#submitForm');
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const restaurant = data.get('restaurant') || '';
    const contact = data.get('contact') || '';
    const email = data.get('email') || '';
    const phone = data.get('phone') || '';
    const cuisine = data.get('cuisine') || '';
    const town = data.get('town') || '';
    const website = data.get('website') || '';
    const message = data.get('message') || '';

    const subject = encodeURIComponent(`New Restaurant Submission: ${restaurant}`);
    const body = encodeURIComponent(
      `Restaurant Name: ${restaurant}\n` +
      `Contact Name: ${contact}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Cuisine: ${cuisine}\n` +
      `Town: ${town}\n` +
      `Website: ${website}\n` +
      `Message: ${message}`
    );

    window.open(`mailto:flowermoundfood@gmail.com?subject=${subject}&body=${body}`, '_self');
  });
}

// ─── INIT ──────────────────────────────────
// --- FEATURED EVENTS RENDERER ---
function initFeaturedEvents() {
  const grid = document.getElementById('featuredEventsGrid');
  const specials = document.getElementById('weeklySpecials');
  if (!grid || typeof FEATURED_EVENTS === 'undefined') return;

  // Show first 3 events as spotlight cards
  const eventsToShow = FEATURED_EVENTS.slice(0, 3);
  grid.innerHTML = eventsToShow.map((ev, i) => `
    <a href="${ev.link}" target="_blank" rel="noopener noreferrer" class="spotlight-card reveal${i > 0 ? ' reveal-delay-' + i : ''}" style="text-decoration:none;color:inherit;">
      <div class="spotlight-date">${ev.date}</div>
      <h3 class="spotlight-restaurant">${ev.restaurant}</h3>
      <h4 class="spotlight-title">${ev.title}</h4>
      <p class="spotlight-desc">${ev.desc}</p>
      <div class="spotlight-meta">
        <span class="badge badge-town">${ev.town}</span>
        <span class="spotlight-time">${ev.time}</span>
      </div>
    </a>
  `).join('');

  // Show remaining events as a compact list
  if (FEATURED_EVENTS.length > 3) {
    const remaining = FEATURED_EVENTS.slice(3);
    let moreHtml = '<div class="more-events reveal">';
    moreHtml += '<h3 class="more-events-title">Also This Week</h3>';
    moreHtml += '<div class="more-events-list">';
    remaining.forEach(ev => {
      moreHtml += `
        <a href="${ev.link}" target="_blank" rel="noopener noreferrer" class="more-event-row">
          <span class="more-event-date">${ev.weekday} ${ev.date.split(' ')[1]}</span>
          <span class="more-event-name">${ev.restaurant} — ${ev.title}</span>
          <span class="more-event-time">${ev.time}</span>
          <span class="badge badge-town">${ev.town}</span>
        </a>`;
    });
    moreHtml += '</div></div>';
    grid.insertAdjacentHTML('afterend', moreHtml);
  }

  // Re-observe dynamically added .reveal elements
  if (revealObserver) {
    document.querySelectorAll('.events-spotlight-section .reveal:not(.visible)').forEach(el => {
      revealObserver.observe(el);
    });
  }

  // Weekly recurring specials
  if (specials && typeof WEEKLY_SPECIALS !== 'undefined' && WEEKLY_SPECIALS.length > 0) {
    let html = '<h3 class="weekly-specials-title">Weekly Recurring Specials</h3>';
    html += '<div class="weekly-specials-list">';
    WEEKLY_SPECIALS.forEach(s => {
      html += `
        <div class="weekly-special-row">
          <span class="weekly-special-day">${s.day}</span>
          <span class="weekly-special-deal"><strong>${s.restaurant}</strong> — ${s.deal}</span>
          <span class="badge badge-town">${s.town}</span>
        </div>`;
    });
    html += '</div>';
    specials.innerHTML = html;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  populateDropdowns();
  initNav();
  initReveal();
  initWheel();
  initDirectory();
  initForm();
  initFeaturedEvents();
});
