window.addEventListener('scroll', function() {

  /* TESTE */

  function getOffset(el) {
      var _x = 0;
      var _y = 0;
      while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft;
          _y += el.offsetTop - el.scrollTop;
          el = el.offsetParent;
      }
      return {
          top: _y,
          left: _x
      };
  }

  var x = getOffset(document.querySelector('.exclusive__btn')).top;

  if (window.scrollY >= x) {
      ok = document.querySelector(".thumbnail__ig");
  }

  var newSection = getOffset(document.querySelector('.collection__subheader')).top;

  if (window.scrollY >= (newSection - 500)) {
      ik = document.querySelector('.collection__header');
      ik.classList.add("header--active");

      document.querySelector('.collection__subheader').classList.add("heading--active");
      document.querySelector('.collection__header').classList.add("heading--active");
  }
});