(function() {
  const STORAGE_KEY = 'portfolio-theme';
  const getTheme = () => localStorage.getItem(STORAGE_KEY) || 'dark';
  const setTheme = (theme) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEY, theme);
  };
  const toggleTheme = () => {
    const next = getTheme() === 'dark' ? 'light' : 'dark';
    setTheme(next);
  };
  setTheme(getTheme());
  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('#themeToggle, #themeToggleMobile').forEach(btn => {
      if (btn) btn.addEventListener('click', toggleTheme);
    });
  });
})();
