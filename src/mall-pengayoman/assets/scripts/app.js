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