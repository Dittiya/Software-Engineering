// category scroll menu section
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("slides-fade");
  var dots = document.getElementsByClassName("dot");
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

// cookies
var user_sess = 'false';
user_sess = sessionStorage.getItem('clicked');
var username = sessionStorage.getItem('username');

// while (user_sess == 'true') {
//   // user logged in
// }



// change iframe
$(document).ready(function () {
  $('#change1').click(function (e) { 
    $('#frame').attr('src', 'org1.html');
    e.preventDefault();
  });
  $('#change2').click(function (e) { 
    $('#frame').attr('src', 'org2.html');
    e.preventDefault();
  });
  $('#change3').click(function (e) { 
    $('#frame').attr('src', 'org3.html');
    e.preventDefault();
  });
});