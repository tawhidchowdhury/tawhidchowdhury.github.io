(() => {
  const root = document.documentElement;
  const button = document.querySelector('.theme-toggle');
  const saved = localStorage.getItem('theme');
  if (saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    root.dataset.theme = 'dark';
  }
  const updateButton = () => {
    const dark = root.dataset.theme === 'dark';
    button?.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    if (button) button.innerHTML = `<span aria-hidden="true">${dark ? '☼' : '◐'}</span>`;
  };
  updateButton();
  button?.addEventListener('click', () => {
    const dark = root.dataset.theme !== 'dark';
    if (dark) root.dataset.theme = 'dark';
    else delete root.dataset.theme;
    localStorage.setItem('theme', dark ? 'dark' : 'light');
    updateButton();
  });
  const year = document.querySelector('#year');
  if (year) year.textContent = new Date().getFullYear();
})();
