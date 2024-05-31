function initializeTyping(selector, strings) {
  new Typed(selector, {
      strings: strings,
      typeSpeed: 100,
      backSpeed: 60,
      loop: true,
  });
}

document.addEventListener('DOMContentLoaded', function () {
  initializeTyping(".typing", ["Student", "Front End Developer", "Graphic Designer",]);
});