// Apply the saved theme before the stylesheet loads, avoiding a light flash.
(() => {
  let saved = null;
  try { saved = localStorage.getItem('academic-theme'); } catch (_) {}
  const preferred = saved === 'light' || saved === 'dark' ? saved : null;
  const darkSystem = window.matchMedia?.('(prefers-color-scheme: dark)').matches;
  const theme = preferred || (darkSystem ? 'dark' : 'light');
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
})();
