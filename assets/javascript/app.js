
  $('.sidenav').sidenav();
  $('.parallax').parallax();



  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({  
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        // gutter: '.gutter-sizer',
  
   
    });

    // $grid.imagesLoaded().progress(function() {
    //   $grid.masonry('layout');
    // });



 
});
// $('.grid').masonry({ 
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//    percentPosition: true
//   // gutter: '.gutter-sizer',

// });

//   $('.grid-item').click(function() {
//     $('.lightbox').fadeIn(300);
//       $('.lightbox').append("<img src='" + $(this).attr('src') + "'alt='" + $(this).attr("alt") + "' />");
//       $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");
  
// });



// $grid.imagesLoaded().progess(function() {
//   $grid.masonry('layout');
// });





// $('.grid-item').click(function(event) {
//   if(!$(this).hasClass('item-opened')) {
//     var elWidth = $(this).outerWidth()/2;
//     var elPosition = this.getBoundingClientRect();

//     			// Store position
//           $(this).attr('data-coord-left', $(this).css('left'));
//           $(this).attr('data-coord-top', $(this).css('top'));
  
//           // Transition effect
//             $(this).css({
//               top:	elPosition.top,
//               left:	elPosition.left
//             }).delay(400).css({
//               top: 			'120px',
//               left:			'10%',
//               zIndex:		'99999',
//               // marginLeft:	'-20%'
//               // position: 'fixed'
//             }).addClass('item-opened');
  
//           $('.grid-alpha').fadeIn();
  
//           // Scroll to the top
//           $('html, body').animate({
//             scrollTop: $('.grid').offset().top
//           }, 650);
//           $('.grid').css('overflow', 'visible');
//         } else{
//           $('.grid').css('overflow', 'hidden');
//         }
//     });
  
  
  // Close item Modal
    // $(document).on('click', function(e) {
    //   if ($('.item-opened').length > 0) {
    //     if (!$(e.target).closest('.grid-item').length && !$(e.target).hasClass('item-opened')) {
    //       $('.grid-alpha').fadeOut(650);
  
    //       $('.item-opened').css({
    //         top: 			$('.item-opened').data('coord-top'),
    //         left:			$('.item-opened').data('coord-left'),
    //         marginLeft:	''
    //       });
  
    //       $('html, body').animate({
    //         scrollTop: ($('.grid').offset().top + parseFloat($('.item-opened').data('coord-top'))) - 30
    //       }, 650);
  
    //       setTimeout(function() {
    //         $('.grid-item').css('z-index', '').removeClass('item-opened');
    //       }, 350);
    //       $('.grid').css('overflow', 'hidden');
    //     }
    //   }
    // });




 
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
//   // itemSelector: '.grid-item',
//   // columnWidth: 33.3%;


// });

// init Masonry after all images have loaded

    
    //
 

// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   gutter: '.gutter-sizer',
//   percentPosition: true
//   // isFitWidth: true
// });
