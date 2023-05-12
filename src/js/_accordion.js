(function ($) {
  //
  $(".accordion").each(function (i, el) {
    var multiple = $(this).hasClass("mult");

    $(this).find(".accordion-head").on("click", function () {
      var active =$(this).hasClass("active");
      $body = $(this).next();
      $body.slideToggle();
      $(this).parent().toggleClass("open");
      if (!multiple) $(el).find(".accordion-body").not($body).slideUp().parent().removeClass("open");
    });
  });

  //
})(jQuery);


