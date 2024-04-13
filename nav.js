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

//  slideer
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

/*----------------------------------------------------------------- */