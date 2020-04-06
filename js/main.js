$(function() {
  "use strict";

  $(window).on("resize", function() {
    $("#main-header").height($(window).height());
  });

  // Switch navbar background color
  $(window).on("scroll", function() {
    var scrTop = $(this).scrollTop();
    if (scrTop >= 50) {
      $(".navbar").addClass("fixed-top scroll");
    } else {
      $(".navbar").removeClass("fixed-top scroll");
    }
  });
  // navbar-toggler btn
  $(".navbar-toggler").on("click", function() {
    $(this).toggleClass("open");
    $(".navbar-collapse").toggleClass("hidden");
    $(".mobile__nav").toggleClass("open");
  });

  // Clients
  $("#our-clients .item").on("mouseenter", function() {
    $("#our-clients .item").addClass("overlay");
    $(this).removeClass("overlay");
  });
  $("#our-clients .item").on("mouseleave", function() {
    $("#our-clients .item").removeClass("overlay");
  });
});
