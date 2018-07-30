$('.category .dropdown-category li').each(function () {
  $(this).mouseover(function () {
    $(this).find('.sub-category').css({
      'visibility': 'visible',
      'opacity': 1
    })
  })
  $(this).mouseleave(function () {
    $(this).find('.sub-category').css({
      'visibility': 'hidden',
      'opacity': 0
    })
  })
})

/*
// Owl Carousel
$('.slide .owl-carousel').owlCarousel({
  items: 1,
  loop: true,
  nav: true,
  autoplay: true,
  navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>']
})
$('.product .owl-carousel').owlCarousel({
  items: 5,
  nav: true,
  navText: ['<i class="material-icons">chevron_left</i>', '<i class="material-icons">chevron_right</i>'],
  responsive: {
    0: {
      items: 2
    },
    767: {
      items: 3
    },
    992: {
      items: 4
    },
    1200: {
      items: 5
    }
    
  }
});

*/
/*

//slick slider
(function($) {
  "use strict";
  $('.wrap-slick1').each(function(){
    var wrapSlick1 = $(this);
    var slick = $(this).find('.slick1');

    var itemSlick1 = $(slick1).find('.item-slick1');
    var layerSlick1 = $(slick1).find('.layer-slick1');
    var actionSlick1 = [];

    $(slick1).on('init', function(){
      var layerCurrentItem = $(itemSlick1[0]).find('.layer-slick1');

      for(var i=0; i<actionSlick1.length;i++){
        clearTimeout(actionSlick1[i]);
      }

      $(layerSlick1).each(function(){
        $(this).removeClass($(this).data('appear') + ' visible-true');
      });

      for (var i=0; i<layerCurrentItem.length;i++) {
        actionSlick1[i] = setTimeout(function(index){
          $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
        }, $(layerCurrentItem[i]).data('delay'),i);
      }
    });

    var showDot = false;
    if ($(wrapSlick1).find('.wrap-slick1-dots').length>0) {
      showDot = true;
    }

    $(slick1).slick ({
      pauseOnFocus:false,
      pauseOnHover:false,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      speed: 1000,
      infinite :true,
      autoplay: true,
      autoplaySpeed: 6000,
      arrows: true,
      appendArrows: $(wrapSlick1),
      prevArrow: '<button class="arrow-slick1 prev-slick1"><i class="zmdi zmdi-caret-left"></i></button>',
                nextArrow:'<button class="arrow-slick1 next-slick1"><i class="zmdi zmdi-caret-right"></i></button>',
      dots:showDot,
      appendDots: $(wrapSlick1).find('.wrap-slick1-dots'),
      dotsClass : 'slick1-dots',
      customPaging: function (slick, index){
        var linkThumb = $(slick.$slides[index]).data('thumb');
        var caption = $(slick.$slides[index]).data('caption');
        return '<img src="' + linkThumb + '">' +
                            '<span class="caption-dots-slick1">' + caption + '</span>';
      },

    });

    $(slick1).on('afterChange', function(event, slick, currentSlide) {
      
      var layerCurrentItem = $(itemSlick1[currentSlide]).find('.layer-slick1');

      for(var i=0; i<actionSlick1.length; i++) {
        clearTimeout(actionSlick1[i]);
      }

      $(layerSlick1).each(function(){
        $(this).removeClass($(this).data('appear') + ' visible-true');
      });

      for(var i=0; i<layerCurrentItem.length; i++) {
        actionSlick1[i] = setTimeout(function(index){
          $(layerCurrentItem[index]).addClass($(layerCurrentItem[index]).data('appear') + ' visible-true');
        }, $(layerCurrentItem[i]).data('delay'),i);
      }

    });


  });


});*/

 // $('.slider-for').slick({
 //   slidesToShow: 1,
 //   slidesToScroll: 1,
 //   arrows: false,
 //   fade: true
 // });

/*
SLIDER PAGE1
 */
$(document).ready(function() {
  $("#slider-page1").owlCarousel({
    navigation : true,
    slideSpeed :300,
    paginationSpeed :400,
    items : 1,
    singleItem :true
  });
});