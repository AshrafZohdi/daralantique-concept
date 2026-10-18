/* Item page: renders one item from data.js based on ?code=, in the page's language. */
(function () {
  var lang = document.documentElement.lang === 'ar' ? 'ar' : 'en';
  var items = window.DAR_ITEMS, cats = window.DAR_CATS[lang], conds = window.DAR_COND, ui = window.DAR_UI[lang];
  var code = new URLSearchParams(location.search).get('code') || 'DA-0142';
  var it = items.filter(function (x) { return x.code === code; })[0] || items[0];
  var L = it[lang];
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  var fill = function (tpl, v) { return tpl.replace('{}', v); };

  document.title = fill(ui.title, L.name);
  $('crumb-shelf').textContent = cats[it.cat];
  $('crumb-shelf').href = 'shop.html?shelf=' + it.cat;
  $('crumb-name').textContent = L.name;
  $('code').innerHTML = esc(fill(ui.item, '')) + '<span dir="ltr">' + it.code + '</span>';
  $('cond').textContent = conds[it.c][lang];
  $('cond').className = 'badge badge-' + conds[it.c].tone;
  $('isnew').hidden = !it.new;
  $('name').textContent = L.name;
  $('desc').textContent = L.desc;
  $('ask-label').textContent = fill(ui.ask, it.code);
  $('ask').href = 'https://wa.me/' + window.DAR_WA + '?text=' +
    encodeURIComponent(ui.wa_q.replace('{code}', it.code).replace('{name}', L.name));

  var rows = [[ui.spec[0], L.platform], [ui.spec[1], L.region], [ui.spec[2], conds[it.c][lang]]];
  if (L.box) rows.push([ui.spec[3], L.box]);
  if (L.video) rows.push([ui.spec[4], L.video]);
  $('specs').innerHTML = rows.map(function (r) { return '<dt>' + esc(r[0]) + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');

  var main = $('main-art');
  var bgs = [it.bg, it.bg === '#EFEBE5' ? '#E6E9F0' : '#EFEBE5', '#F4F2EE', '#E9E2D6'];
  $('thumbs').innerHTML = bgs.map(function (bg, i) {
    return '<button type="button" class="thumb" aria-pressed="' + (i === 0) + '" aria-label="' + esc(ui.views[i]) + '" data-bg="' + bg + '">' +
      '<div class="art" data-kind="' + it.kind + '" data-tint="' + it.tint + '" data-bg="' + bg + '"></div></button>';
  }).join('');
  main.setAttribute('data-kind', it.kind);
  main.setAttribute('data-tint', it.tint);
  main.setAttribute('data-bg', it.bg);
  $('thumbs').querySelectorAll('.thumb').forEach(function (b) {
    b.addEventListener('click', function () {
      $('thumbs').querySelectorAll('.thumb').forEach(function (x) { x.setAttribute('aria-pressed', String(x === b)); });
      main.setAttribute('data-bg', b.dataset.bg);
      window.DarArt.paint(main);
    });
  });

  var others = items.filter(function (x) { return x.code !== it.code; });
  var related = others.filter(function (x) { return x.cat === it.cat; })
    .concat(others.filter(function (x) { return x.cat !== it.cat; })).slice(0, 4);
  $('related').innerHTML = related.map(function (r) {
    var c = conds[r.c], R = r[lang];
    return '<a class="card" href="item.html?code=' + r.code + '"><div style="position:relative">' +
      '<div class="art" data-kind="' + r.kind + '" data-tint="' + r.tint + '" data-bg="' + r.bg + '"></div>' +
      '<span class="badge badge-' + c.tone + '">' + esc(c[lang]) + '</span></div>' +
      '<span class="card-meta"><span class="card-code" dir="ltr">' + r.code + '</span><span class="card-name">' + esc(R.name) + '</span>' +
      '<span class="card-sub">' + esc(R.meta) + '</span></span><span class="card-price">' + esc(ui.price) + '</span></a>';
  }).join('');

  window.DarArt.paintAll();
})();
