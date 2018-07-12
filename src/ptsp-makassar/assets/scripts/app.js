// Toggle Sidebar
$('.toggle').click(function() {
  $('.menus').slideToggle('fast')
  var icon = $(this).find('.material-icons')
  icon.text() === 'menu' ? icon.text('close') : icon.text('menu')
})