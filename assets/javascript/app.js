$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.parallax').parallax();
  });
 
//   $(document).on('click', '.click-to-expand', function() {
//     var imageSrc = $(this).parents('.image-grid').find('img').attr('src');
//     $('.js-modal-image').attr('src', imageSrc);
//   });

// (function() {
//   $(document).on("click", ".click-to-expand", function() {
//     var imageSrc = $(this).parents(".image-grid").find("img").attr("src");
//     $(".js-modal-image").attr("src", imageSrc);
//   });
// })();

// $('.grid').masonry({
//   // options
//   itemSelector: '.grid-item',
//   columnWidth: 200
// });

// init Masonry after all images have loaded
var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({
    itemSelector: '.grid-item',
    percentPosition: true,
    columnWidth: '.grid-sizer',
    // gutter: '.gutter-sizer'

  }); 
});

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   gutter: '.gutter-sizer',
//   percentPosition: true
//   // isFitWidth: true
// });
