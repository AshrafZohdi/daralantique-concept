/* Item page: renders one item from data.js based on ?code= */
(function () {
  var items = window.DAR_ITEMS, cats = window.DAR_CATS, conds = window.DAR_COND;
  var code = new URLSearchParams(location.search).get('code') || 'DA-0142';
  var it = items.filter(function (x) { return x.code === code; })[0] || items[0];
  var $ = function (id) { return document.getElementById(id); };
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };

  document.title = it.name + ' | Dar Al Antique';
  $('crumb-shelf').textContent = cats[it.cat];
  $('crumb-shelf').href = 'shop.html?shelf=' + it.cat;
  $('crumb-name').textContent = it.name;
  $('code').textContent = 'Item ' + it.code;
  $('cond').textContent = conds[it.c][0];
  $('cond').className = 'badge badge-' + conds[it.c][1];
  $('isnew').hidden = !it.new;
  $('name').textContent = it.name;
  $('desc').textContent = it.desc;
  $('ask-label').textContent = 'Ask about ' + it.code + ' on WhatsApp';
  $('ask').href = 'https://wa.me/' + window.DAR_WA + '?text=' +
    encodeURIComponent('Hi, is item ' + it.code + ' (' + it.name + ') still available?');

  var rows = [['Platform', it.platform], ['Region', it.region], ['Condition', conds[it.c][0]]];
  if (it.box) rows.push(['In the box', it.box]);
  if (it.video) rows.push(['Video out', it.video]);
  $('specs').innerHTML = rows.map(function (r) { return '<dt>' + r[0] + '</dt><dd>' + esc(r[1]) + '</dd>'; }).join('');

  var main = $('main-art');
  var views = [['Front of the box', it.bg], ['Back of the box', it.bg === '#EFEBE5' ? '#E6E9F0' : '#EFEBE5'], ['Side view', '#F4F2EE'], ['Close up', '#E9E2D6']];
  $('thumbs').innerHTML = views.map(function (v, i) {
    return '<button type="button" class="thumb" aria-pressed="' + (i === 0) + '" aria-label="' + v[0] + '" data-bg="' + v[1] + '">' +
      '<div class="art" data-kind="' + it.kind + '" data-tint="' + it.tint + '" data-bg="' + v[1] + '"></div></button>';
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
    var c = conds[r.c];
    return '<a class="card" href="item.html?code=' + r.code + '"><div style="position:relative">' +
      '<div class="art" data-kind="' + r.kind + '" data-tint="' + r.tint + '" data-bg="' + r.bg + '"></div>' +
      '<span class="badge badge-' + c[1] + '">' + c[0] + '</span></div>' +
      '<span class="card-meta"><span class="card-code">' + r.code + '</span><span class="card-name">' + esc(r.name) + '</span>' +
      '<span class="card-sub">' + esc(r.meta) + '</span></span><span class="card-price">Ask for price</span></a>';
  }).join('');

  window.DarArt.paintAll();
})();
