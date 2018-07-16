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
})