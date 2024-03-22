function preloader() {
  document.getElementById("preloader-logo").innerHTML =
    '<object type="image/svg+xml" data="https://ieeesjcet.github.io/tesseract24/images/tess.svg"></object>';
  setTimeout((e) => {
    document.getElementById("preloader").classList.toggle("hidden");
    document.getElementById("desktop").classList.toggle("hidden");
    window.onscroll = function () {};
  }, 4000);

  TopScroll = window.pageYOffset || document.documentElement.scrollTop;
  (LeftScroll = window.pageXOffset || document.documentElement.scrollLeft),
    // if scroll happens, set it to the previous value
    (window.onscroll = function () {
      window.scrollTo(0, 0);
    });
}
