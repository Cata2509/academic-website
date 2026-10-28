const menu = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.nav');
function closeMenu() {
  navigation?.classList.remove('open');
  menu?.setAttribute('aria-expanded', 'false');
  if (menu) menu.textContent = 'Menu';
}
menu?.addEventListener('click', () => {
  const open = navigation.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
  menu.textContent = open ? 'Close' : 'Menu';
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menu?.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menu.focus();
  }
});
navigation?.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
const form = document.querySelector('[data-filter-form]');
if (form) {
  const rows = [...document.querySelectorAll('[data-search]')];
  const normalise = text => text.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
  function filter() {
    const query = normalise(form.querySelector('input').value).trim();
    const words = query.split(/\s+/).filter(Boolean);
    let count = 0;
    for (const row of rows) {
      const matches = words.every(word => normalise(row.dataset.search).includes(word));
      const selected = [...form.querySelectorAll('select')].every(select => !select.value || row.dataset[select.name] === select.value);
      row.hidden = !(matches && selected);
      if (!row.hidden) count++;
    }
    document.querySelector('[data-result-count]').textContent = `${count} of ${rows.length} publications`;
    document.querySelector('[data-empty]').hidden = count !== 0;
  }
  form.addEventListener('input', filter);
  form.addEventListener('change', filter);
  form.addEventListener('submit', event => event.preventDefault());
  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    form.reset();
    filter();
    form.querySelector('input').focus();
  });
}
document.querySelector('[data-print]')?.addEventListener('click', () => window.print());
