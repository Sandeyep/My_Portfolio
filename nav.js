 // JavaScript to handle the click event and toggle the 'active' class
 document.addEventListener('DOMContentLoaded', function () {
    var links = document.querySelectorAll('.nav ul li a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            links.forEach(function (otherLink) {
                otherLink.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
});



// Typing animation script start
var typed = new Typed(".typing", {
    strings: ["Berojgar", "Front End Developer", "Youtuber", "Teacher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  var typed = new Typed(".typing2", {
    strings: ["React.js Developer", "Front End Developer", "Youtuber", "Teacher"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });