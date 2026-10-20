const menuToggle = document.getElementById('menuToggle');
const navList = document.getElementById('navList');

menuToggle.addEventListener('click', () => {
  const isOpen = navList.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(isOpen));
});

document.querySelectorAll('#navList a').forEach(link => {
  link.addEventListener('click', () => {
    navList.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  });
});

document.getElementById('year').textContent = new Date().getFullYear();


// =========================
// MODO DIA / NOITE
// =========================

const themeToggle = document.getElementById('themeToggle');
const themeIcon = themeToggle.querySelector('.theme-icon');

function applyTheme(isDark) {
  document.body.classList.toggle('dark-mode', isDark);

  themeToggle.setAttribute('aria-pressed', String(isDark));
  themeToggle.setAttribute(
    'aria-label',
    isDark ? 'Ativar modo diurno' : 'Ativar modo noturno'
  );
  themeToggle.setAttribute(
    'title',
    isDark ? 'Ativar modo diurno' : 'Ativar modo noturno'
  );

  themeIcon.textContent = isDark ? '☀' : '☾';
}

const savedTheme = localStorage.getItem('portfolio-theme');

if (savedTheme === 'dark') {
  applyTheme(true);
} else if (savedTheme === 'light') {
  applyTheme(false);
} else {
  applyTheme(window.matchMedia('(prefers-color-scheme: dark)').matches);
}

themeToggle.addEventListener('click', () => {
  const isDark = !document.body.classList.contains('dark-mode');
  applyTheme(isDark);
  localStorage.setItem('portfolio-theme', isDark ? 'dark' : 'light');
});
