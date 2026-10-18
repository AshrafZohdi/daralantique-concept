/* Hero shelf: pieces come alive, lean toward the pointer, hop on their own, and bounce when picked. */
(function () {
  var stage = document.querySelector('.shelf-stage');
  if (!stage) return;
  var shelf = stage.querySelector('.shelf');
  var pieces = Array.prototype.slice.call(stage.querySelectorAll('.piece'));
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)');
  var visible = true, hovered = null, timer = null;

  function hop(el) {
    if (!el || reduce.matches) return;
    el.classList.remove('hop');
    void el.offsetWidth; // restart the animation
    el.classList.add('hop');
  }
  pieces.forEach(function (el) {
    el.addEventListener('animationend', function (ev) {
      if (ev.target.classList.contains('lift')) el.classList.remove('hop', 'boing');
    });
    el.addEventListener('pointerenter', function () { hovered = el; });
    el.addEventListener('pointerleave', function () { if (hovered === el) hovered = null; });
    el.addEventListener('click', function (ev) {
      if (reduce.matches || ev.metaKey || ev.ctrlKey || ev.shiftKey || ev.button !== 0) return;
      ev.preventDefault();
      el.classList.remove('hop');
      el.classList.add('boing');
      var href = el.getAttribute('href');
      setTimeout(function () { location.href = href; }, 380);
    });
  });

  // One piece at a time does a little hop, so the shelf never looks static.
  function idle() {
    clearTimeout(timer);
    timer = setTimeout(function () {
      if (visible && !document.hidden) {
        var pool = pieces.filter(function (p) { return p !== hovered; });
        hop(pool[Math.floor(Math.random() * pool.length)]);
      }
      idle();
    }, 1800 + Math.random() * 1800);
  }

  // Pieces lean gently toward the pointer.
  function lean(ev) {
    if (reduce.matches || ev.pointerType === 'touch') return;
    pieces.forEach(function (el) {
      var r = el.getBoundingClientRect();
      var dx = ev.clientX - (r.left + r.width / 2);
      var dy = ev.clientY - (r.top + r.height / 2);
      var d = Math.max(1, Math.hypot(dx, dy));
      var pull = Math.max(0, 1 - d / 520);
      el.style.setProperty('--tx', (dx / d * 6 * pull).toFixed(2) + 'px');
      el.style.setProperty('--ty', (dy / d * 3 * pull).toFixed(2) + 'px');
      el.style.setProperty('--rot', (dx / d * 4 * pull).toFixed(2) + 'deg');
    });
  }
  function settle() {
    pieces.forEach(function (el) { el.style.setProperty('--tx', '0px'); el.style.setProperty('--ty', '0px'); el.style.setProperty('--rot', '0deg'); });
  }
  var hero = stage.closest('.hero') || document;
  hero.addEventListener('pointermove', lean);
  hero.addEventListener('pointerleave', settle);

  // Only animate while the shelf is on screen.
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(function (entries) {
      visible = entries[0].isIntersecting;
      shelf.classList.toggle('is-live', visible && !reduce.matches);
    }).observe(shelf);
  } else {
    shelf.classList.toggle('is-live', !reduce.matches);
  }

  // Wake-up: the shelf hops to life once, piece by piece.
  function start() {
    if (reduce.matches) return;
    pieces.forEach(function (el, i) { setTimeout(function () { hop(el); }, 250 + i * 110); });
    setTimeout(idle, 250 + pieces.length * 110 + 600);
  }
  reduce.addEventListener && reduce.addEventListener('change', function () {
    shelf.classList.toggle('is-live', visible && !reduce.matches);
    if (reduce.matches) { clearTimeout(timer); settle(); } else { idle(); }
  });
  start();
})();
