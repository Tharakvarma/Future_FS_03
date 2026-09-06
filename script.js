const menuToggle = document.getElementById('menuToggle');
const mobileMenu = document.getElementById('mobileMenu');

menuToggle.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', isOpen);
  menuToggle.textContent = isOpen ? '×' : '☰';
});

mobileMenu.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mobileMenu.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.textContent = '☰';
  });
});

document.querySelectorAll('.menu-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelector('.menu-tab.active').classList.remove('active');
    tab.classList.add('active');
    const category = tab.dataset.category;
    document.querySelectorAll('.menu-card').forEach((card) => {
      card.hidden = category !== 'all' && card.dataset.category !== category;
    });
  });
});

const dateField = document.querySelector('input[type="date"]');
dateField.min = new Date().toISOString().split('T')[0];

document.getElementById('reserveForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const formStatus = document.getElementById('formStatus');
  formStatus.textContent = 'Thanks! We’ll call you shortly to confirm your table.';
  event.target.reset();
  dateField.min = new Date().toISOString().split('T')[0];
});
