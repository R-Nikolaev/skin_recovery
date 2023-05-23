(function ($) {
  //
  $(".select_map").each(function (i, el) {
    var multiple = $(this).hasClass("mult");
    $(this).find(".btn-map").on("click", function () {
      $body = $(this).next();
      $body.slideToggle();
      $(this).parent().toggleClass("open");
      if (!multiple) $(el).find(".btn-map-body").not($body).slideUp().parent().removeClass("open");
    });
  });
  //
})(jQuery);
