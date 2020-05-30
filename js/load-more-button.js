$( document ).ready(function () {
  $(".moreBox").slice(0, 3).show();
    if ($(".blogBox:hidden").length != 0) {
      $("#loadMore").show();
    }   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".moreBox:hidden").slice(0, 1).slideDown();
      if ($(".moreBox:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });
  });

$("#navbarCollapse").on('show.bs.collapse', function() {
    $('a.nav-link').click(function() {
        $("#navbarCollapse").collapse('hide');
    });
});