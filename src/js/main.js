
$(window).scroll(function() {
  if ($document.scrollTop() > 5px) {
    // usuario bajó 5 px o más;
    // entonces:
    $("#cabeza").addClass("menutransparente");
    $("#cabeza").removeClass("menusolido");

  } else {
    $("#cabeza").removeClass("menutransparente");
    $("#cabeza").addClass("menusolido");
  }
});

