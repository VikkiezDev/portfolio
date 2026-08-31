/* =====================================================================
   Rendering engine + interactivity. You shouldn't need to edit this —
   it reads siteData from data.js and builds the page automatically.
   ===================================================================== */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initNavbarScroll();
  initTypewriter();
  initLeetcodeCounter();
  renderSkills();
  renderExperience();
  initCarousel();
  renderProjects();
  renderCertifications();
  renderEducation();
  initScrollSpy();
  initRevealObserver();
  initBackToTop();
  initContactForm();
  document.getElementById('year').textContent = new Date().getFullYear();
});

/* ---------- THEME TOGGLE ---------- */
function initTheme() {
  const saved = localStorage.getItem('theme');
  const theme = saved || 'light';   // always light unless the user already chose dark
  document.documentElement.setAttribute('data-theme', theme);

  document.getElementById('themeToggle').addEventListener('click', () => {
    const current = document.documentElement.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });
}

/* ---------- MOBILE NAV ---------- */
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const navLinks = document.getElementById('navLinks');

  hamburger.addEventListener('click', () => {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', open);
  });

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', false);
    });
  });
}

/* ---------- NAVBAR SHADOW ON SCROLL ---------- */
function initNavbarScroll() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }, { passive: true });
}

/* ---------- TYPEWRITER EFFECT ---------- */
function initTypewriter() {
  const el = document.getElementById('typedRole');
  const roles = siteData.roles;
  if (!roles || !roles.length) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) { el.textContent = roles[0]; return; }

  let roleIndex = 0, charIndex = 0, deleting = false;

  function tick() {
    const word = roles[roleIndex];
    if (!deleting) {
      charIndex++;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === word.length) { deleting = true; setTimeout(tick, 1600); return; }
      setTimeout(tick, 55);
    } else {
      charIndex--;
      el.textContent = word.slice(0, charIndex);
      if (charIndex === 0) { deleting = false; roleIndex = (roleIndex + 1) % roles.length; setTimeout(tick, 300); return; }
      setTimeout(tick, 30);
    }
  }
  tick();
}

/* ---------- LEETCODE ---------- */
async function initLeetcodeCounter() {
  const el = document.getElementById('leetcodeStat');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let target = siteData.leetcodeFallback || 0;

  try {
    const res = await fetch(`https://leetcode-stats-api.herokuapp.com/${siteData.leetcodeUsername}`);
    if (res.ok) {
      const data = await res.json();
      if (typeof data.totalSolved === 'number') target = data.totalSolved;
    }
  } catch (err) {
    // silently fall back to leetcodeFallback if the API is unreachable
  }

  if (reduceMotion) { el.textContent = target + '+'; return; }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let current = 0;
        const step = Math.max(1, Math.round(target / 40));
        const interval = setInterval(() => {
          current += step;
          if (current >= target) { current = target; clearInterval(interval); }
          el.textContent = current + '+';
        }, 25);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(el);
}

/* ---------- SKILLS ---------- */
function renderSkills() {
  const container = document.getElementById('skillsGrid');
  container.innerHTML = siteData.skills.map(group => `
    <div class="skill-category">
      <h3>${escapeHtml(group.category)}</h3>
      <div class="skill-tags">
        ${group.items.map(item => `<span class="skill-tag">${escapeHtml(item)}</span>`).join('')}
      </div>
    </div>
  `).join('');
}

/* ---------- EXPERIENCE TIMELINE ---------- */
function renderExperience() {
  const container = document.getElementById('timeline');
  container.innerHTML = siteData.experience.map(item => `
    <div class="timeline-item reveal">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <span class="timeline-date">${escapeHtml(item.start)} — ${escapeHtml(item.end)}</span>
        <h3 class="timeline-role">${escapeHtml(item.role)}</h3>
        <p class="timeline-company">
          ${item.companyUrl
            ? `<a href="${escapeAttr(item.companyUrl)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.company)}</a>`
            : escapeHtml(item.company)}
          ${item.location ? ` · ${escapeHtml(item.location)}` : ''}
        </p>
        <ul class="timeline-points">
          ${item.points.map(p => `<li>${escapeHtml(p)}</li>`).join('')}
        </ul>
        <div class="timeline-tags">
          ${item.tech.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  observeReveal(container.querySelectorAll('.reveal'));
}

/* ---------- PROJECTS ---------- */
const categoryIcons = {
  'Data Engineering': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14a9 3 0 0018 0V5"/><path d="M3 12a9 3 0 0018 0"/></svg>',
  'Data Warehousing': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/><ellipse cx="12" cy="11" rx="4" ry="1.5"/><path d="M8 11v4c0 .8 1.8 1.5 4 1.5s4-.7 4-1.5v-4"/></svg>',
  // 'Machine Learning': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v6M12 17v6M4.2 4.2l4.2 4.2M15.5 15.5l4.3 4.3M1 12h6M17 12h6M4.2 19.8l4.2-4.3M15.5 8.5l4.3-4.3"/></svg>',
  'Data Visualization': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/></svg>',
  'Data Analytics': '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
  default: '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 19a2 2 0 01-2 2H4a2 2 0 01-2-2V5a2 2 0 012-2h5l2 3h9a2 2 0 012 2z"/></svg>'
};

let activeFilter = 'All';

/* ---------- RELATIVE TIME ---------- */
function getRelativeTime(dateStr) {
  const date = new Date(dateStr);
  if (isNaN(date)) return '';

  const now = new Date();
  const diffMs = now - date;
  const diffDay = Math.floor(diffMs / (1000 * 60 * 60 * 24));

  if (diffDay <= 0) return 'Today';
  if (diffDay === 1) return 'Yesterday';
  if (diffDay < 30) return `${diffDay} day${diffDay > 1 ? 's' : ''} ago`;

  const diffMonth = Math.floor(diffDay / 30);
  if (diffMonth < 12) return `${diffMonth} month${diffMonth > 1 ? 's' : ''} ago`;

  const diffYear = Math.floor(diffMonth / 12);
  return `${diffYear} year${diffYear > 1 ? 's' : ''} ago`;
}

function renderProjects() {
  renderProjectFilters();
  renderProjectGrid();
}

function renderProjectFilters() {
  const categories = ['All', ...new Set(siteData.projects.map(p => p.category))];
  const container = document.getElementById('projectFilters');
  container.innerHTML = categories.map(cat => `
    <button class="filter-btn ${cat === activeFilter ? 'active' : ''}" data-filter="${escapeAttr(cat)}">${escapeHtml(cat)}</button>
  `).join('');

  container.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeFilter = btn.dataset.filter;
      container.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderProjectGrid();
    });
  });
}

function renderProjectGrid() {
  const container = document.getElementById('projectsGrid');
  const list = activeFilter === 'All' ? siteData.projects : siteData.projects.filter(p => p.category === activeFilter);

  container.innerHTML = list.map((p, i) => `
    <div class="project-card" style="animation-delay:${i * 0.06}s">
      ${p.isNew ? '<span class="project-badge-new">New</span>' : ''}
      ${p.inProgress ? '<span class="project-badge-progress">In Progress</span>' : ''}
      <div class="project-thumb">${categoryIcons[p.category] || categoryIcons.default}</div>
      <div class="project-body">
        <div class="project-meta-row">
          <span class="project-category">${escapeHtml(p.category)}</span>
          ${p.date ? `<span class="project-date">${getRelativeTime(p.date)}</span>` : ''}
        </div>
        <h3 class="project-title">${escapeHtml(p.title)}</h3>
        <p class="project-desc">${escapeHtml(p.description)}</p>
        <div class="project-tags">
          ${p.tech.map(t => `<span class="skill-tag">${escapeHtml(t)}</span>`).join('')}
        </div>
        <div class="project-links">
          ${p.github ? `<a href="${escapeAttr(p.github)}" target="_blank" rel="noopener noreferrer">Code →</a>` : ''}
          ${p.demo ? `<a href="${escapeAttr(p.demo)}" target="_blank" rel="noopener noreferrer">Live Demo →</a>` : ''}
          ${p.images && p.images.length ? `<button class="project-output-btn">Output →</button>` : ''}
        </div>
      </div>
    </div>
  `).join('');

  // Wire up Output buttons to open the carousel with the right images
  const withImages = list.filter(p => p.images && p.images.length);
  container.querySelectorAll('.project-output-btn').forEach((btn, i) => {
    btn.addEventListener('click', () => openCarousel(withImages[i].images, withImages[i].title));
  });
}

/* ---------- OUTPUT CAROUSEL ---------- */
let carouselImages = [];
let carouselIndex = 0;

function initCarousel() {
  document.getElementById('carouselClose').addEventListener('click', closeCarousel);
  document.getElementById('carouselOverlay').addEventListener('click', closeCarousel);
  document.getElementById('carouselPrev').addEventListener('click', () => showCarouselImage(carouselIndex - 1));
  document.getElementById('carouselNext').addEventListener('click', () => showCarouselImage(carouselIndex + 1));

  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('carouselModal');
    if (!modal.classList.contains('open')) return;
    if (e.key === 'Escape') closeCarousel();
    if (e.key === 'ArrowLeft') showCarouselImage(carouselIndex - 1);
    if (e.key === 'ArrowRight') showCarouselImage(carouselIndex + 1);
  });
}

function openCarousel(images, title) {
  carouselImages = images;
  carouselIndex = 0;
  document.getElementById('carouselTitle').textContent = title;
  showCarouselImage(0);

  const modal = document.getElementById('carouselModal');
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closeCarousel() {
  const modal = document.getElementById('carouselModal');
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

function showCarouselImage(idx) {
  if (idx < 0) idx = carouselImages.length - 1;
  if (idx >= carouselImages.length) idx = 0;
  carouselIndex = idx;

  document.getElementById('carouselImage').src = carouselImages[idx];
  document.getElementById('carouselCounter').textContent = `${idx + 1} / ${carouselImages.length}`;

  const showNav = carouselImages.length > 1 ? 'flex' : 'none';
  document.getElementById('carouselPrev').style.display = showNav;
  document.getElementById('carouselNext').style.display = showNav;
}

/* ---------- CERTIFICATION ---------- */
function renderCertifications() {
  const container = document.getElementById('certificationsGrid');
  const icon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="6"/><path d="M8.5 14L6 22l6-3 6 3-2.5-8"/></svg>';
  container.innerHTML = siteData.certifications.map(c => `
    <div class="cert-card reveal">
      <div class="cert-badge">${icon}</div>
      <div>
        <div class="cert-title">${escapeHtml(c.title)}</div>
        <div class="cert-issuer">${escapeHtml(c.issuer)}</div>
        <div class="cert-date">${escapeHtml(c.date)}${c.credentialId ? ' · ID: ' + escapeHtml(c.credentialId) : ''}</div>
      </div>
      ${c.credentialUrl ? `<a href="${escapeAttr(c.credentialUrl)}" target="_blank" rel="noopener noreferrer" class="cert-link">View Credential →</a>` : ''}
    </div>
  `).join('');
  observeReveal(container.querySelectorAll('.reveal'));
}

/* ---------- EDUCATION ---------- */
function renderEducation() {
  const container = document.getElementById('educationList');
  const icon = '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10L12 5 2 10l10 5 10-5z"/><path d="M6 12v5c0 1.7 2.7 3 6 3s6-1.3 6-3v-5"/></svg>';
  container.innerHTML = siteData.education.map(ed => `
    <div class="education-card reveal">
      <div class="education-icon">${icon}</div>
      <div>
        <div class="education-degree">${escapeHtml(ed.degree)}</div>
        <div class="education-institution">${escapeHtml(ed.institution)}</div>
        <div class="education-meta">${escapeHtml(ed.start)} – ${escapeHtml(ed.end)} · ${escapeHtml(ed.location)}</div>
        ${ed.details ? `<p class="education-details">${escapeHtml(ed.details)}</p>` : ''}
      </div>
    </div>
  `).join('');
  observeReveal(container.querySelectorAll('.reveal'));
}

/* ---------- SCROLL SPY (active nav link) ---------- */
function initScrollSpy() {
  const sections = document.querySelectorAll('main section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -50% 0px' });

  sections.forEach(s => observer.observe(s));
}

/* ---------- SCROLL REVEAL ---------- */
function initRevealObserver() {
  observeReveal(document.querySelectorAll('.reveal'));
}
function observeReveal(elements) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  elements.forEach(el => observer.observe(el));
}

/* ---------- BACK TO TOP ---------- */
function initBackToTop() {
  document.getElementById('backToTop').addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

/* ---------- CONTACT FORM (Netlify Forms) ---------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');
  const btn = document.getElementById('submitBtn');

  function encode(data) {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
      .join('&');
  }

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    btn.disabled = true;
    btn.textContent = 'Sending...';
    status.textContent = '';
    status.className = 'form-status';

    const formData = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: encode(formData)
      });
      if (res.ok) {
        status.textContent = "Thanks! Your message has been sent — I'll get back to you soon.";
        status.classList.add('success');
        form.reset();
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      status.textContent = "Something went wrong. Please email me directly instead.";
      status.classList.add('error');
    } finally {
      btn.disabled = false;
      btn.textContent = 'Send Message';
    }
  });
}

/* ---------- UTIL ---------- */
function escapeHtml(str = '') {
  return String(str).replace(/[&<>"']/g, m => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[m]));
}
function escapeAttr(str = '') { return escapeHtml(str); }
