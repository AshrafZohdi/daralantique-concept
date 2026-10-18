/* Language switch keeps you on the same page: same item, same filters, same section. */
(function () {
  document.querySelectorAll('a.lang-switch').forEach(function (a) {
    a.addEventListener('click', function () {
      var base = a.getAttribute('href').split(/[?#]/)[0];
      a.setAttribute('href', base + location.search + location.hash);
    });
  });
})();
