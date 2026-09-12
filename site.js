(() => {
  const button = document.getElementById('mobileMenuButton');
  const menu = document.getElementById('mobileMenu');
  const close = document.getElementById('mobileMenuClose');
  if (!button || !menu || !close) return;

  const openMenu = (event) => {
    if (event) event.preventDefault();
    menu.classList.add('open');
    menu.setAttribute('aria-hidden', 'false');
    button.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
    close.focus({ preventScroll: true });
  };

  const closeMenu = () => {
    menu.classList.remove('open');
    menu.setAttribute('aria-hidden', 'true');
    button.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  button.addEventListener('click', openMenu);
  close.addEventListener('click', closeMenu);
  menu.addEventListener('click', (event) => {
    if (event.target === menu) closeMenu();
  });
  menu.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.classList.contains('open')) closeMenu();
  });
})();
