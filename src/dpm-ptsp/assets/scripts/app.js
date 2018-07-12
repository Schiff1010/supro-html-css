$('.toggle-nav').on('click', function() {
  $('nav .nav-bottom').toggleClass('active');
  $('body').toggleClass('fixed');
});

$(window).on('resize', function(e) {
  if (e.target.innerWidth >= 640) {
    $('nav .nav-bottom').removeClass('active');
    $('body').removeClass('fixed');
  }
});