// Toggle Sidebar
$('.aside-dropdown').click(function() {
  $(this).toggleClass('open')
  var arrow_icon = $(this).find('.float-right')
  arrow_icon.text() === 'keyboard_arrow_down' ? arrow_icon.text('keyboard_arrow_up') : arrow_icon.text('keyboard_arrow_down')
})

// Toggle Nav Style
$('.toggle-aside').click(function() {
  $('.nav-aside').toggleClass('open')
  $(this).toggleClass('open')
  var arrow_icon = $(this).find('.material-icons')
  arrow_icon.text() === 'menu' ? arrow_icon.text('close') : arrow_icon.text('menu')
  
  var logo = $('.logo-mobile')
  $(this).hasClass('open') === true ? logo.hide() : logo.show()
})

// Dropdown avoid close
$('li.dropdown-noclose a').on('click', function (e) {
  var element = $(this).parent()
  if (element.find('.dropdown-menu').hasClass('show') === true) {
    $('.dropdown-menu').removeClass('show')
  } else {
    element.find('.dropdown-menu').addClass('show')
  }
})
$(document).click(function (e) {
  e.stopPropagation()
  var container = $(".dropdown-noclose")

  //check if the clicked area is dropDown or not
  if (container.has(e.target).length === 0) {
    $('.dropdown-menu').removeClass('show')
  }
})

// Select All
$('.data-content #select-all').click(function(event) {
  if(this.checked) {
    // Iterate each checkbox
    $('.data-content :checkbox').each(function() {
      this.checked = true
    })
  }
  else {
    $('.data-content :checkbox').each(function() {
      this.checked = false
    })
  }
})

$('.own-datepicker').datepicker({
  format: "dd/mm/yyyy"
})