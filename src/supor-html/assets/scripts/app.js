/*$(function() {
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
*/
var $itemElement = $('.img-item');
$('.filter_link').click(function(e){
  e.preventDefault();
  var filterVal = $(this).data('filter');

  if(filterVal === 'all' ) {
    $itemElement.show();
  }else {
    $itemElement.hide().filter('.' + filterVal).show();
  }
});

$(document).ready(function() {
  $('.blok4').magnificPopup({
    delegate: 'a',
    type:'image',
    tLoading: 'loading image #%curr%..',
    mainClass: 'mfp-img-mobile',
    gallery: {
      enable: true,
      navigateByImgClick :true,
      preload:[0,1]
    },
    image : {
      tError: '<a href="%url%">The Image #%curr%</a>could not be loaded.',
      titleSrc : function(item) {
        return item.el.attr('title') + '<small>pop up image</small>'
      }
    }

  });
});

