/* Catalog filters: shelf, condition, search and sort. */
(function () {
  var grid = document.getElementById('grid');
  var cards = Array.prototype.slice.call(grid.querySelectorAll('.card'));
  var count = document.getElementById('count');
  var empty = document.getElementById('empty');
  var q = document.getElementById('q');
  var sort = document.getElementById('sort');
  var state = { shelf: 'all', cond: 'all', q: '' };

  var params = new URLSearchParams(location.search);
  if (params.get('shelf')) state.shelf = params.get('shelf');

  function press(selector, attr, value) {
    document.querySelectorAll(selector).forEach(function (b) {
      b.setAttribute('aria-pressed', String(b.getAttribute(attr) === value));
    });
  }

  function render() {
    var shown = 0;
    cards.forEach(function (c) {
      var ok = (state.shelf === 'all' || c.dataset.cat === state.shelf) &&
               (state.cond === 'all' || c.dataset.cond === state.cond) &&
               (!state.q || c.dataset.search.indexOf(state.q) !== -1);
      c.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown === 1 ? '1 item' : shown + ' items';
    empty.hidden = shown !== 0;
    grid.hidden = shown === 0;
    press('.f-shelf', 'data-shelf', state.shelf);
    press('.f-cond', 'data-cond', state.cond);
    var p = new URLSearchParams(location.search);
    if (state.shelf === 'all') p.delete('shelf'); else p.set('shelf', state.shelf);
    var s = p.toString();
    history.replaceState(null, '', location.pathname + (s ? '?' + s : ''));
  }

  function resort() {
    var sorted = cards.slice().sort(function (a, b) {
      if (sort.value === 'name') return a.dataset.name.localeCompare(b.dataset.name);
      return b.dataset.code.localeCompare(a.dataset.code);
    });
    sorted.forEach(function (c) { grid.appendChild(c); });
  }

  document.querySelectorAll('.f-shelf').forEach(function (b) {
    b.addEventListener('click', function () { state.shelf = b.dataset.shelf; render(); });
  });
  document.querySelectorAll('.f-cond').forEach(function (b) {
    b.addEventListener('click', function () { state.cond = b.dataset.cond; render(); });
  });
  q.addEventListener('input', function () { state.q = q.value.trim().toLowerCase(); render(); });
  sort.addEventListener('change', resort);
  document.getElementById('clear').addEventListener('click', function () {
    state = { shelf: 'all', cond: 'all', q: '' }; q.value = ''; render();
  });

  resort();
  render();
})();
