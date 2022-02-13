/* -------------------------------------------

Name: 		Arter
Version:  1.0
Author:		Nazar Miller (millerDigitalDesign)
Portfolio:  https://themeforest.net/user/millerdigitaldesign/portfolio?ref=MillerDigitalDesign

p.s. I am available for Freelance hire (UI design, web development). mail: miller.themes@gmail.com

------------------------------------------- */
$(function () {
  "use strict";

  const options = {
    containers: ["#swup", "#swupMenu"],
    animateHistoryBrowsing: true,
    linkSelector: "a:not([data-no-swup])",
  };
  const swup = new Swup(options);

  // scrollbar
  Scrollbar.use(OverscrollPlugin);
  Scrollbar.init(document.querySelector("#scrollbar"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });
  Scrollbar.init(document.querySelector("#scrollbar2"), {
    damping: 0.05,
    renderByPixel: true,
    continuousScrolling: true,
  });

  // page loading
  $(document).ready(function () {
    anime({
      targets: ".art-preloader .art-preloader-content",
      opacity: [0, 1],
      delay: 200,
      duration: 600,
      easing: "linear",
      complete: function (anim) {},
    });
    anime({
      targets: ".art-preloader",
      opacity: [1, 0],
      delay: 2200,
      duration: 400,
      easing: "linear",
      complete: function (anim) {
        $(".art-preloader").css("display", "none");
      },
    });
  });

  var bar = new ProgressBar.Line(preloader, {
    strokeWidth: 1.7,
    easing: "easeInOut",
    duration: 1400,
    delay: 750,
    trailWidth: 1.7,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(1);

  // counters
  anime({
    targets: ".art-counter-frame",
    opacity: [0, 1],
    duration: 800,
    delay: 2300,
    easing: "linear",
  });

  anime({
    targets: ".art-counter",
    delay: 1300,
    opacity: [1, 1],
    complete: function (anim) {
      $(".art-counter").each(function () {
        $(this)
          .prop("Counter", 0)
          .animate(
            {
              Counter: $(this).text(),
            },
            {
              duration: 2000,
              easing: "linear",
              step: function (now) {
                $(this).text(Math.ceil(now));
              },
            }
          );
      });
    },
  });

  // progressbars
  var bar = new ProgressBar.Circle(circleprog1, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2500,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog2, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2600,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.91);

  var bar = new ProgressBar.Circle(circleprog3, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2700,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog4, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Circle(circleprog5, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Circle(circleprog6, {
    strokeWidth: 7,
    easing: "easeInOut",
    duration: 1400,
    delay: 3000,
    trailWidth: 7,
    step: function (state, circle) {
      var value = Math.round(circle.value() * 100);
      if (value === 0) {
        circle.setText("");
      } else {
        circle.setText(value);
      }
    },
  });

  bar.animate(0.8);


  var bar = new ProgressBar.Line(lineprog1, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2800,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.95);

  var bar = new ProgressBar.Line(lineprog2, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 2900,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Line(lineprog3, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3000,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.93);

  var bar = new ProgressBar.Line(lineprog4, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3100,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.94);

  var bar = new ProgressBar.Line(lineprog5, {
    strokeWidth: 1.72,
    easing: "easeInOut",
    duration: 1400,
    delay: 3200,
    trailWidth: 1.72,
    svgStyle: {
      width: "100%",
      height: "100%",
    },
    step: (state, bar) => {
      bar.setText(Math.round(bar.value() * 100) + " %");
    },
  });

  bar.animate(0.9);

  // Contact form
  $(".art-input").keyup(function () {
    if ($(this).val()) {
      $(this).addClass("art-active");
    } else {
      $(this).removeClass("art-active");
    }
  });

  $("#form").submit(function () {
    $.ajax({
      type: "POST",
      url: "mail.php",
      data: $(this).serialize(),
    }).done(function () {
      var tl = anime.timeline({
        easing: "easeOutExpo",
      });

      tl.add({
        targets: ".art-submit",
        opacity: 0,
        scale: 0.5,
      }).add({
        targets: ".art-success",
        scale: 1,
        height: "45px",
      });
    });
    return false;
  });

  // portfolio filter
  $(".art-filter a").on("click", function () {
    $(".art-filter .art-current").removeClass("art-current");
    $(this).addClass("art-current");

    var selector = $(this).data("filter");
    $(".art-grid").isotope({
      filter: selector,
    });
    return false;
  });

  // masonry Grid
  $(".art-grid").isotope({
    filter: "*",
    itemSelector: ".art-grid-item",
    transitionDuration: ".6s",
  });

  // slider testimonials
  var swiper = new Swiper(".art-testimonial-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: false,
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-testi-swiper-next",
      prevEl: ".art-testi-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider works
  var swiper = new Swiper(".art-works-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-works-swiper-next",
      prevEl: ".art-works-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 2,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  // slider blog
  var swiper = new Swiper(".art-blog-slider", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1400,
    autoplay: {
      delay: 4000,
    },
    autoplaySpeed: 5000,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".art-blog-swiper-next",
      prevEl: ".art-blog-swiper-prev",
    },
    breakpoints: {
      1500: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 1,
      },
    },
  });

  $('[data-fancybox="gallery"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "share", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="diplome"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $('[data-fancybox="avatar"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "close"],
  });

  $('[data-fancybox="recommendation"]').fancybox({
    animationEffect: "zoom-in-out",
    animationDuration: 600,
    transitionDuration: 1200,
    buttons: ["zoom", "slideShow", "thumbs", "close"],
  });

  $.fancybox.defaults.hash = false;

  $(".current-menu-item a").clone().appendTo(".art-current-page");

  $(".art-map-overlay").on("click", function () {
    $(this).addClass("art-active");
  });

  $(".art-info-bar-btn").on("click", function () {
    $(".art-info-bar").toggleClass("art-active");
    $(".art-menu-bar-btn").toggleClass("art-disabled");
  });

  $(".art-menu-bar-btn").on("click", function () {
    $(".art-menu-bar-btn , .art-menu-bar").toggleClass("art-active");
    $(".art-info-bar-btn").toggleClass("art-disabled");
  });

  $(".art-info-bar-btn , .art-menu-bar-btn").on("click", function () {
    $(".art-content").toggleClass("art-active");
  });

  $(".art-curtain , .art-mobile-top-bar").on("click", function () {
    $(
      ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
    ).removeClass("art-active , art-disabled");
  });

  $(".menu-item").on("click", function () {
    if ($(this).hasClass("menu-item-has-children")) {
      $(this).children(".sub-menu").toggleClass("art-active");
    } else {
      $(
        ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
      ).removeClass("art-active , art-disabled");
    }
  });

  //redirect
  


  // reinit
  document.addEventListener("swup:contentReplaced", function () {
    Scrollbar.use(OverscrollPlugin);
    Scrollbar.init(document.querySelector("#scrollbar"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });
    Scrollbar.init(document.querySelector("#scrollbar2"), {
      damping: 0.05,
      renderByPixel: true,
      continuousScrolling: true,
    });

    $("#form").submit(function () {
      $.ajax({
        type: "POST",
        url: "mail.php",
        data: $(this).serialize(),
      }).done(function () {
        var tl = anime.timeline({
          easing: "easeOutExpo",
        });

        tl.add({
          targets: ".art-submit",
          opacity: 0,
          scale: 0.5,
        }).add({
          targets: ".art-success",
          scale: 1,
          height: "45px",
        });
      });
      return false;
    });

    // Masonry Grid
    $(".art-grid").isotope({
      filter: "*",
      itemSelector: ".art-grid-item",
      transitionDuration: ".6s",
    });

    $(".art-filter a").on("click", function () {
      $(".art-filter .art-current").removeClass("art-current");
      $(this).addClass("art-current");

      var selector = $(this).data("filter");
      $(".art-grid").isotope({
        filter: selector,
      });
      return false;
    });

    anime({
      targets: ".art-counter-frame",
      opacity: [0, 1],
      duration: 800,
      delay: 300,
      easing: "linear",
    });

    $(".art-counter").each(function () {
      $(this)
        .prop("Counter", 0)
        .animate(
          {
            Counter: $(this).text(),
          },
          {
            duration: 2000,
            easing: "linear",
            step: function (now) {
              $(this).text(Math.ceil(now));
            },
          }
        );
    });

    // slider testimonials
    var swiper = new Swiper(".art-testimonial-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: false,
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-testi-swiper-next",
        prevEl: ".art-testi-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 1,
        },
      },
    });

    // slider works
    var swiper = new Swiper(".art-works-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-works-swiper-next",
        prevEl: ".art-works-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 2,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    // slider blog
    var swiper = new Swiper(".art-blog-slider", {
      slidesPerView: 3,
      spaceBetween: 30,
      speed: 1400,
      autoplay: {
        delay: 4000,
      },
      autoplaySpeed: 5000,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      navigation: {
        nextEl: ".art-blog-swiper-next",
        prevEl: ".art-blog-swiper-prev",
      },
      breakpoints: {
        1500: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 3,
        },
        992: {
          slidesPerView: 1,
        },
      },
    });

    $('[data-fancybox="gallery"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="diplome"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $('[data-fancybox="recommendation"]').fancybox({
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });

    $.fancybox.defaults.hash = false;

    $(".current-menu-item a").clone().prependTo(".art-current-page");

    $(".menu-item").on("click", function () {
      if ($(this).hasClass("menu-item-has-children")) {
        $(this).children(".sub-menu").toggleClass("art-active");
      } else {
        $(
          ".art-menu-bar-btn , .art-menu-bar , .art-info-bar , .art-content , .art-menu-bar-btn , .art-info-bar-btn"
        ).removeClass("art-active , art-disabled");
      }
    });
  });
});

function openpage(link) {
  console.log("clicked")

  window.open(link , '_blank');
};