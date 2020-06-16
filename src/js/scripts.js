// Tooltip
$('[data-toggle="tooltip"]').tooltip();

// Tooltip mobile
$("span[title]").click(function () {
    var $title = $(this).find(".title");
    if (!$title.length) {
      $(this).append('<span class="title">' + $(this).attr("title") + '</span>');
    } else {
      $title.remove();
    }
});

// EKKO Lightbox
$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox();
});

// Change class after scrolling
$(function() {
  //caches a jQuery object containing the header element
  var header = $(".normalHeader");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 500) {
          header.removeClass('normalHeader').addClass("changedHeader");
      } else {
          header.removeClass("changedHeader").addClass('normalHeader');
      }
  });
});

// TO-TOP BTN
$(function() {
  //caches a jQuery object containing the header element
  var header = $(".noTop");
  $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll >= 800) {
          header.removeClass('noTop').addClass("toTop");
      } else {
          header.removeClass("toTop").addClass('noTop');
      }
  });
});

// TOGGLER MENU
const toggler = document.querySelector('.menu__toggler');
const menu    = document.querySelector('.menu');
/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
toggler.addEventListener('click', () => {
  toggler.classList.toggle('active');
  menu.classList.toggle('active');
});

//Slick Slider
$(document).ready(function(){
    $('.slider_default').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/arrow-left.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../images/arrow-right.svg'>",
        autoplay: true,
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
            breakpoint: 480,
            settings: {
              centerMode: true,
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ],
    })

    $('.slider_instagram').slick({
        prevArrow:"<img class='a-left control-c prev slick-prev' src='../images/arrow-left.svg'>",
        nextArrow:"<img class='a-right control-c next slick-next' src='../images/arrow-right.svg'>",
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
    });

});