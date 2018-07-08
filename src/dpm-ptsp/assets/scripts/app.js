$(function() {
  $('.toggle-nav').on('click', () => {
    $('nav .nav-bottom').toggleClass('active');
    $('body').toggleClass('fixed');
  })

  $(window).on('resize', (e) => {
    if (e.target.innerWidth >= 640) {
      $('nav .nav-bottom').removeClass('active');
      $('body').removeClass('fixed');
    }
  })
});