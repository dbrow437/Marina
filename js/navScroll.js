$(document).ready(function() {
  $(window).scroll(handleNavColor($("nav.navbar")));
});

function handleNavColor(header) {
  return function() {
    let position = $(window).scrollTop();

    if (position >= 50) {
      header.addClass("scrolled");
    } else {
      header.removeClass("scrolled");
    }
  };
}
