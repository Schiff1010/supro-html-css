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

var modal = document.getElementById('image-modal');
var img = document.getElementById("image-gr");
var caption=document.getElementById("caption-img");
img.onclick = function() {
  modal.style.display = "block";
  modalImg.src = this.src;
  caption.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() { 
    modal.style.display = "none";
}

$('.slider').slick({
  rtl:true
});