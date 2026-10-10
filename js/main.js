(() => {
  const header = document.querySelector('.header');
  const toggle = document.querySelector('.toggle');
  const nav = document.querySelector('#nav');
  const setMenu = (open) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    nav.classList.toggle('open', open);
  };
  toggle.addEventListener('click', () => setMenu(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', (event) => { if (event.target.closest('a')) setMenu(false); });
  document.addEventListener('click', (event) => {
    if (toggle.getAttribute('aria-expanded') === 'true' && !header.contains(event.target)) setMenu(false);
  });
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenu(false); });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); }, { passive: true });
  const updateHeader = () => header.classList.toggle('scrolled', window.scrollY > 12);
  updateHeader();
  window.addEventListener('scroll', updateHeader, { passive: true });

  const items = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries, io) => entries.forEach((entry) => {
      if (entry.isIntersecting) { entry.target.classList.add('visible'); io.unobserve(entry.target); }
    }), { threshold: .12, rootMargin: '0px 0px -30px 0px' });
    items.forEach((item) => observer.observe(item));
  } else items.forEach((item) => item.classList.add('visible'));

  const copy = {
    session: ['A new term, a thousand possibilities', 'New faces, familiar friends, and a fresh year of questions to explore together. This concept story reflects the hopeful start of a school year.'],
    science: ['Curiosity takes centre stage at our innovation exhibition', 'A concept story about learners testing ideas, sharing experiments, and discovering how science can help explain the world around them.'],
    sports: ['Team spirit shines at inter-house sports', 'A concept story celebrating participation, teamwork, and cheering one another on during a school sports day.']
  };
  const dialog = document.querySelector('dialog');
  document.querySelectorAll('[data-story]').forEach((link) => link.addEventListener('click', (event) => {
    event.preventDefault();
    const story = copy[link.dataset.story];
    dialog.querySelector('h3').textContent = story[0];
    dialog.querySelector('p:last-child').textContent = story[1];
    dialog.showModal();
  }));
  document.querySelector('.close').addEventListener('click', () => dialog.close());
  dialog.addEventListener('click', (event) => { if (event.target === dialog) dialog.close(); });

  const form = document.querySelector('.form');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const name = form.elements.name.value.trim();
    form.querySelector('.status').textContent = `Thank you, ${name}. Your details are valid in this demo; they have not been sent. Please contact the school directly once its enquiry channel is configured.`;
    form.reset();
  });
})();
