$(function() {
  $('.toggle-nav').on('click', () => {
    $('nav .nav-bottom').toggleClass('active');
    $('body').toggleClass('fixed');
  })
});