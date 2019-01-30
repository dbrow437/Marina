$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
    $("nav").addClass("scrolled");
  } else {
    $("nav").removeClass("scrolled");
  }
});
