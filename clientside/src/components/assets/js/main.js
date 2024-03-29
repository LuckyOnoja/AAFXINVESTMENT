import $ from 'jquery';
export default function Mainjs() {
  $(document).ready(function () {
    $(".nav-toggler").click(function () {
      $(" .site-nav").toggleClass("togleOut");
      $(".nav-body").toggleClass("togleOut");
    });
  });
  $(document).ready(function () {
    $(".nav-body").click(function () {
      $(" .site-nav").removeClass("togleOut");
      $(".nav-body").removeClass("togleOut");
    });
  });
  $(document).ready(function () {
    $(".toglein-nav").click(function () {
      $(" .site-nav").removeClass("togleOut");
      $(".nav-body").removeClass("togleOut");
    });
  });

  $(document).ready(function () {
    $("#video-toggler").click(function () {
      $(".video-modal").addClass("togleVideo-modal");
    });
  });

  $(document).ready(function () {
    $(".video-toggler-Out").click(function () {
      $(".video-modal").removeClass("togleVideo-modal");
    });
  });

  var vid = document.getElementById("video-dspy");

  function pauseVid() {
    vid.pause();
  }

  $(document).ready(function () {
    $(".f-selector").click(function () {
      $(".f-selector").addClass("active-selector");
      $(".s-selector").removeClass("active-selector");
      $(".th-selector").removeClass("active-selector");
      $(".fth-selector").removeClass("active-selector");

      $(".faq-container-f").show();
      $(".faq-container-s").hide();
      $(".faq-container-th").hide();
      $(".faq-container-fth").hide();
    });
  });

  $(document).ready(function () {
    $(".s-selector").click(function () {
      $(".s-selector").addClass("active-selector");
      $(".f-selector").removeClass("active-selector");
      $(".th-selector").removeClass("active-selector");
      $(".fth-selector").removeClass("active-selector");

      $(".faq-container-s").show();
      $(".faq-container-f").hide();
      $(".faq-container-th").hide();
      $(".faq-container-fth").hide();
    });
  });

  $(document).ready(function () {
    $(".th-selector").click(function () {
      $(".th-selector").addClass("active-selector");
      $(".s-selector").removeClass("active-selector");
      $(".f-selector").removeClass("active-selector");
      $(".fth-selector").removeClass("active-selector");

      $(".faq-container-th").show();
      $(".faq-container-s").hide();
      $(".faq-container-f").hide();
      $(".faq-container-fth").hide();
    });
  });

  $(document).ready(function () {
    $(".fth-selector").click(function () {
      $(".fth-selector").addClass("active-selector");
      $(".s-selector").removeClass("active-selector");
      $(".th-selector").removeClass("active-selector");
      $(".f-selector").removeClass("active-selector");

      $(".faq-container-fth").show();
      $(".faq-container-s").hide();
      $(".faq-container-th").hide();
      $(".faq-container-f").hide();
    });
  });

  $(document).ready(function () {
    var headerHeight = $(".top-nav").outerHeight();

    $(".selector-btn").click(function (e) {
      var linkHref = $(this).attr("href");

      $("html, body").animate(
        {
          scrollTop: $(linkHref).offset().top - headerHeight,
        },
        1000
      );

      e.preventDefault();
    });
  });
}
