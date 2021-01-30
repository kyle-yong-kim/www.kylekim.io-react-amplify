import jQuery from 'jquery';

(function($) {
  "use strict"; // Start of use strict

  // // Smooth scrolling using jQuery easing
  // $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
  //   if (window.location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && window.location.hostname == this.hostname) {
  //     var target = $(this.hash);
  //     target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
  //     if (target.length) {
  //       $('html, body').animate({
  //         scrollTop: (target.offset().top - 57)
  //       }, 1000, "easeInOutExpo");
  //       return false;
  //     }
  //   }
  // });

  $(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    // console.log(event);

    $('html, body').animate({
        // scrollTop: $($.attr(this, 'href')).offset().top - 56
        scrollTop: $($.attr(this, 'href')).offset().top
        // 100 is the sticky nav height
    }, 600, "swing");
});

  // // Scroll to top button appear
  // $(document).scroll(function() {
  //   var scrollDistance = $(this).scrollTop();
  //   if (scrollDistance > 100) {
  //     $('.scroll-to-top').fadeIn();
  //   } else {
  //     $('.scroll-to-top').fadeOut();
  //   }
  // });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  //Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 57
  });

  function pauseVideo(shouldPause) {
    var vid = document.getElementById("myVideo");
    
    if (vid !== null) { // check if element exists first, for podcast page. Is there a smarter fix???

      if (shouldPause) {
        vid.pause();
      }
      else {
        vid.play();
      }
    }
  }

  // Collapse Navbar
  var navbarCollapse = function() {
    var nav = $("#mainNav");
    // console.log("nav length: ", nav.length);
    if (nav.length) {
      if ($("#mainNav").offset().top > 120) {
        // $("#mainNav").addClass("navbar-shrink");
        $("#landing-page").addClass("landing-page-light");
        $("#welcome-text").addClass("moveleft");
        $("#landing-page-subtext-wrapper").addClass("landing-page-wrapper-light");
        $("#landing-page-subtext-wrapper").addClass("moveright");
        $("#welcome-korean-text").addClass("moveright");
        $("#welcome-korean-text").addClass("whiteText");
        $("#myVideo").addClass("increase-brightness");
        pauseVideo(true);
      } else {
        // $("#mainNav").removeClass("navbar-shrink");
        $("#landing-page").removeClass("landing-page-light");
        $("#landing-page-subtext-wrapper").removeClass("landing-page-wrapper-light");
        $("#welcome-text").removeClass("moveleft");
        $("#landing-page-subtext-wrapper").removeClass("moveright");
        $("#welcome-korean-text").removeClass("moveright");
        $("#welcome-korean-text").removeClass("whiteText");
        $("#myVideo").removeClass("increase-brightness");
        pauseVideo(false);
      }
    }
  };

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

  // Modal popup$(function () {
  // $('.portfolio-item').magnificPopup({
  //   type: 'inline',
  //   preloader: false,
  //   focus: '#username',
  //   modal: true
  // });
  // $(document).on('click', '.portfolio-modal-dismiss', function(e) {
  //   e.preventDefault();
  //   $.magnificPopup.close();
  // });

  // Floating label headings for the contact form
  $(function() {
    $("body").on("input propertychange", ".floating-label-form-group", function(e) {
      $(this).toggleClass("floating-label-form-group-with-value", !!$(e.target).val());
    }).on("focus", ".floating-label-form-group", function() {
      $(this).addClass("floating-label-form-group-with-focus");
    }).on("blur", ".floating-label-form-group", function() {
      $(this).removeClass("floating-label-form-group-with-focus");
    });
  });

})(jQuery); // End of use strict
