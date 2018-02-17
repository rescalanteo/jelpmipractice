
$(window).scroll(function() {
  if ($document.scrollTop() >= 5px) {
    // usuario bajó 5 px o más;
    // entonces:
    $element.addClass(menutransparente);
    $element.removeClass(menusolido);

  } else {
    $element.removeClass(menutransparente);
    $element.addClass(menusolido);
  }
});