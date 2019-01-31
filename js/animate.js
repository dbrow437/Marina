

$(function()) {
  $('selector').click(function() {
    animate('selector', 'animation');
    animate('selector', 'animation');
    return false
  });



  function animate(element, animation) {
    $(element).addClass('animated '+animation);
    var wait = setTimeout(function() {
      $(element).removeClass('animated '+animation);
    }, 1000s);
  }
}
