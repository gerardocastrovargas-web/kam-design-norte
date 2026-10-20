/* KAM Design 2.0: demo visual con movimiento discreto y accesibilidad.
   Las secciones e imágenes están listas para integrar GSAP/ScrollTrigger
   y sustituir el hero por video en una siguiente etapa. */
(() => {
  'use strict';
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const header = document.getElementById('site-header');
  const progress = document.getElementById('scroll-progress');
  const menuButton = document.getElementById('menu-toggle');
  const mobileMenu = document.getElementById('mobile-nav');
  const heroImage = document.querySelector('.hero-photo');
  const contactPhoto = document.querySelector('.contact-photo');
  let raf = 0;
  const onScroll = () => {
    if (raf) return;
    raf = window.requestAnimationFrame(() => {
      const y = window.scrollY;
      header.classList.toggle('is-scrolled', y > 20);
      const travel = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      progress.style.transform = `scaleX(${Math.max(0, Math.min(1, y / travel))})`;
      if (!reduceMotion && window.innerWidth > 850 && heroImage && y < window.innerHeight * 1.3) {
        heroImage.style.transform = `translate3d(0, ${Math.min(95, y * .15)}px, 0) scale(1.055)`;
      }
      if (!reduceMotion && contactPhoto) {
        const rect = contactPhoto.parentElement.getBoundingClientRect();
        if (rect.bottom > 0 && rect.top < window.innerHeight) {
          const delta = (window.innerHeight / 2) - (rect.top + rect.height / 2);
          contactPhoto.style.transform = `translate3d(0,${Math.min(32,Math.max(-32,delta * .05))}px,0) scale(1.055)`;
        }
      }
      raf = 0;
    });
  };
  window.addEventListener('scroll', onScroll, { passive: true });
  window.addEventListener('resize', onScroll, { passive: true });
  onScroll();

  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menú');
    mobileMenu.classList.remove('is-open');
    mobileMenu.inert = true;
    document.body.classList.remove('menu-open');
  };
  menuButton.addEventListener('click', () => {
    if (menuButton.getAttribute('aria-expanded') === 'true') return closeMenu();
    menuButton.setAttribute('aria-expanded', 'true');
    menuButton.setAttribute('aria-label', 'Cerrar menú');
    mobileMenu.inert = false;
    mobileMenu.classList.add('is-open');
    document.body.classList.add('menu-open');
  });
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', (event) => {
    const hash = a.getAttribute('href');
    const target = hash && document.querySelector(hash);
    if (!target) { closeMenu(); return; }
    event.preventDefault();
    closeMenu();
    target.scrollIntoView({ behavior: reduceMotion ? 'instant' : 'smooth', block: 'start' });
    if (window.location.protocol === 'http:' || window.location.protocol === 'https:' || window.location.protocol === 'file:') {
      window.history.replaceState(null, '', hash);
    }
  }));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });
  window.addEventListener('resize', () => { if (window.innerWidth > 850) closeMenu(); });

  const revealElements = document.querySelectorAll('[data-reveal]');
  if (reduceMotion || !('IntersectionObserver' in window)) {
    revealElements.forEach(el => el.classList.add('in-view'));
  } else {
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('in-view');
        revealObserver.unobserve(entry.target);
      });
    }, { rootMargin: '0px 0px -30px 0px', threshold: .07 });
    revealElements.forEach(el => revealObserver.observe(el));
  }

  document.getElementById('current-year').textContent = String(new Date().getFullYear());
})();
