// setTimeout(
//   function() { 
//   masonry() }
//     , 1000)

// $(document).ready(function () {
//   var $projects = $(".projects");

//   $projects.imagesLoaded(function () {
//       $projects.masonry();
//   });
// });

var $grid = $('.grid').imagesLoaded( function() {
  $grid.masonry({  
      itemSelector: '.grid-item',
      percentPosition: true,
      columnWidth: '.grid-sizer',
      gutter: '.gutter-sizer',

 
  });

  // $grid.imagesLoaded().progress(function() {
  //   $grid.masonry('layout');
  // });
});

$('.grid').masonry({ 
itemSelector: '.grid-item',
columnWidth: '.grid-sizer',
 percentPosition: true
// gutter: '.gutter-sizer',

});

var $grid = $('.grid').masonry({
// options...
});

$grid.imagesLoaded().progress( function() {
$grid.masonry('layout');
});





//   $('.grid-item').click(function() {
//     $('.lightbox').fadeIn(300);
//       $('.lightbox').append("<img src='" + $(this).attr('src') + "'alt='" + $(this).attr("alt") + "' />");
//       $(".filter").css("background-image", "url(" + $(this).attr("src") + ")");

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

// init Masonry after all images have loaded//


// $('.grid').masonry({
//   itemSelector: '.grid-item',
//   columnWidth: '.grid-sizer',
//   gutter: '.gutter-sizer',
//   percentPosition: true
//   // isFitWidth: true
// });


$(function() {
  //  $("#typed").typed({

var typed = new Typed("#typed", {
  // stringsElement: "#typed-strings",
  strings: ["HELLO I'M ISABEL"],
    typeSpeed: 0, 
    showCursor: false,
    
    // startDelay: 0,
    //  backSpeed: 0,
    //  backDelay: 0,
    //  loop: false,
    //      contentType: 'html',
    //      loopCount: true,
         // cursorChar: "",
         callback: function() {
         showThis();
      
         },
  
          });
          showThis();
          function showThis(){
            // $("#typed-second").typed({
              var typed = new Typed("#typed-second", {
                strings: ["I'M A GRAPHIC DESIGNER", "I'M AN ILLUSTRATOR", "I'M A UX/UI DESIGNER", "AND A YOGA TEACHER"],
                typeSpeed: 30,
                startDelay: 1000,
                backSpeed: 30, 
                showCursor: false,
              backDelay: 1500,
              
                smartBackspace: true,
                loop: true,
                loopCount: 3,
                // cursorChar: '_',
                showCursor: false,
                  onReset: function(self) { prettyLog('onReset ' + self) },
                 reset() {}
              });
            }
          
              
          });
 
              // callback: function() {
              //   $("#typed-third").typed({
              //     strings: 
              //     backDelay: 1500,
              //     typeSpeed: 30,
              //     backSpeed: 30, 
              //     loop: false,
                      
                 
              //   });
              // }
           
          // starting callback function before each string
     // preStringTyped: function() {},
     
     // //callback for every typed string
     // onStringTyped: function() {},
     
     // // callback for reset
  
  
   


// function showThis() {
//   $("span.second").typed({
// var typed = new Typed('#typed', {
// stringsElement: ,
        // $("#typed").typed({
    // strings: 
    // ["I'm a Graphic_Designer"],
    

 
       

        // strings: jquery plugin types sentences and deletes them
      //   strings: ["Hi I'm Isabel","I'm a Graphic Designer","an Illustrator"],
//    typeSpeed: 30, 
//    startDelay: 0,
//     backSpeed: 0,
//     backDelay: 800,
//     loop: true,
//     contentType: 'html',
//     loopCount: true,
//       });  
// }
//  });
        // cursorChar: "",
  //  callback: function() {},
         // starting callback function before each string
    // preStringTyped: function() {},
    
    // //callback for every typed string
    // onStringTyped: function() {},
    
    // // callback for reset
  // resetCallback: function() {
  //    showThis();
   
  function openModal() {
    document.getElementById('myModal').style.display = "block";
  }
  
  function closeModal() {
    document.getElementById('myModal').style.display = "none";
  }
  
      

 


$(document).on('click', '[data-toggle="lightbox"]', function(event) {
  event.preventDefault();
  $(this).ekkoLightbox({
      alwaysShowClose: true,
      onShown: function() {
          console.log('Portfolio Img');  
      }
  });
  // $(".modal-content").modal
});

  // $(document).ready(function() {
  //   var e=new Typewriter(
  //     $("#heading")[0],
  //     {loop:!0,
  //     blinkSpeed:50}
  //   );
  //   e.typeString("Type").pauseFor(850) });


    //    document.addEventListener("DOMContentLoaded", function(){
    //     Typed.new(".element", {
    //         strings: ["First sentence.", "Second sentence."],
    //         typeSpeed: 0
    //     });
    // });

    // var $window = $(window);
    // var windowsize = $window.width();
    // var aboveHeight = 215;
    // var aboutVisible = false;

    // $("#jason").hide();


	// 	function openToggle() {
	// 		if ($("#jason").is(":visible")) {
	// 			if ($(window).scrollTop() > aboveHeight) {
	// 				$("html, body").animate({scrollTop: $('#bigLogo').height()}, 500, 'easeInOutCubic');
	// 			}
	// 		}
	// 		if (!aboutVisible) {
	// 			aboutVisible = true;
	// 			// $("#blueArrow").slideDown('100', 'easeInOutCubic').delay(300);
	// 			$("#aboutBtn").css("color", "#EB4B1D");
	// 			$("#aboutBtn").hover(function() {
	// 				$(this).css("color", "#EB4B1D");
	// 			}, function() {
	// 				$(this).css("color", "#EB4B1D");
	// 			});
	// 			$("#jason").slideDown('300', 'easeInOutCubic');
	// 			$('body,html').animate({scrollTop: 0}, 500);
	// 		} else {
	// 			aboutVisible = false;
	// 			// $("#blueArrow").slideUp('100', 'easeInOutCubic');
	// 			$("#aboutBtn").css("color", "#111f46");
	// 			$("#aboutBtn").hover(function() {
	// 				$(this).css("color", "#EB4B1D");
	// 			}, function() {
	// 				$(this).css("color", "#111f46");
	// 			});
	// 			$("#jason").slideUp('300', 'easeInOutCubic');
	// 		}
	// 	}


      //       $(function() {
      //         $(".testing-typed").typed({
      //           stringsElement: $('.typed-effect'),
      //             strings: ["Hi I'm Isabel^200", "I'm a Graphic_Designer", "an Illustrator", "UX/UI_Designer", "and Yoga_Teacher"],
      //             typeSpeed: 30,
      //             startDelay: 0,
      //             smartBackspace: true;
      //           backSpeed: 0,
      //         backDelay: 800,
      //         // showCursor: false,
      //         // contentType: 'html',
      //         loop: false,
      //         // contentType: 'html',
      //         // loopCount: false,
      //             callback: function() {
      
      //               // showThis();
      //             },
                
      //         });
      // // $(".reset").click(function() {
      // //         $("h2 .first").typed('reset');
      // //       });
      // };
         
          //  function showThis(){
      
          //     $("#typed").typed({
          //       // stringsElement: $('.second'),
          //           strings: ["a"],
          //           backDelay: 1500,    
          //           typeSpeed: 100,
          //           backSpeed: 100,
          //           loop: true
                    
                    
          //       });
          //     };
      
                // function and(){
                //   $("span.second").typed({
                //     strings: ["and yoga teacher"],
                //     typeSpeed: 30,
                //     backSpeed: 30,
                //     loop: false,
                //   })
                // }
      
        //     }
        //  });
      
      
      // typewriter.typeString('Hello')
      // .pauseFor(2500)
      // .deleteAll()
      // .typeString("I'm Isa");
      // .start();
      
      
        
          // function newTyped() {
          //   /* typed obj */
          // }
      
      
      
      
      
        









// !function(t){
//     "use strict";
//     var s=function(s,o){
//         this.el=t(s),
//         this.options=t.extend({},
//             t.fn.typed.defaults,o),
//             this.isInput=this.el.is("input"),
//             this.attr=this.options.attr,
//             this.showCursor=this.isInput?!1:this.options.showCursor,
//             this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),
//             this.contentType=this.options.contentType,
//             this.typeSpeed=this.options.typeSpeed,
//             this.startDelay=this.options.startDelay,
//             this.backSpeed=this.options.backSpeed,
//             this.backDelay=this.options.backDelay,
//             this.strings=this.options.strings,
//             this.strPos=0,this.arrayPos=0,
//             this.stopNum=0,this.loop=this.options.loop,
//             this.loopCount=this.options.loopCount,
//             this.curLoop=0,this.stop=!1,
//             this.cursorChar=this.options.cursorChar,this.build()};s.prototype={constructor:s,init:function(){var t=this;t.timeout=setTimeout(function(){t.typewrite(t.strings[t.arrayPos],t.strPos)},t.startDelay)},build:function(){this.showCursor===!0&&(this.cursor=t('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.init()},typewrite:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.typeSpeed,e=this;e.timeout=setTimeout(function(){var o=0,i=t.substr(s);if("^"===i.charAt(0)){var r=1;/^\^\d+/.test(i)&&(i=/\d+/.exec(i)[0],r+=i.length,o=parseInt(i)),t=t.substring(0,s)+t.substring(s+r)}if("html"===e.contentType){var n=t.substr(s).charAt(0);if("<"===n||"&"===n){var a="",h="";for(h="<"===n?">":";";t.substr(s).charAt(0)!==h;)a+=t.substr(s).charAt(0),s++;s++,a+=h}}e.timeout=setTimeout(function(){if(s===t.length){if(e.options.onStringTyped(e.arrayPos),e.arrayPos===e.strings.length-1&&(e.options.callback(),e.curLoop++,e.loop===!1||e.curLoop===e.loopCount))return;e.timeout=setTimeout(function(){e.backspace(t,s)},e.backDelay)}else{0===s&&e.options.preStringTyped(e.arrayPos);var o=t.substr(0,s+1);e.attr?e.el.attr(e.attr,o):e.isInput?e.el.val(o):"html"===e.contentType?e.el.html(o):e.el.text(o),s++,e.typewrite(t,s)}},o)},o)}},backspace:function(t,s){if(this.stop!==!0){var o=Math.round(70*Math.random())+this.backSpeed,e=this;e.timeout=setTimeout(function(){if("html"===e.contentType&&">"===t.substr(s).charAt(0)){for(var o="";"<"!==t.substr(s).charAt(0);)o-=t.substr(s).charAt(0),s--;s--,o+="<"}var i=t.substr(0,s);e.attr?e.el.attr(e.attr,i):e.isInput?e.el.val(i):"html"===e.contentType?e.el.html(i):e.el.text(i),s>e.stopNum?(s--,e.backspace(t,s)):s<=e.stopNum&&(e.arrayPos++,e.arrayPos===e.strings.length?(e.arrayPos=0,e.init()):e.typewrite(e.strings[e.arrayPos],s))},o)}},reset:function(){var t=this;clearInterval(t.timeout);var s=this.el.attr("id");this.el.after('<span id="'+s+'"/>'),this.el.remove(),"undefined"!=typeof this.cursor&&this.cursor.remove(),t.options.resetCallback()}},t.fn.typed=function(o){return this.each(function(){var e=t(this),i=e.data("typed"),r="object"==typeof o&&o;i||e.data("typed",i=new s(this,r)),"string"==typeof o&&i[o]()})},t.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],typeSpeed:0,startDelay:0,backSpeed:0,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},

// resetCallback:function(){}}}(window.jQuery);




// // My code
// $('.resource').hide();
//  $(function(){
//   $(".typed-effect").typed({
//     strings: ["Hi I'm Isabel^200"], // ^{number} denotes time in ms to wait

//     // typing speed
//     typeSpeed: 70,
    
//     // time before typing starts
//     startDelay: 0,
    
//     // backspacing speed
//     backSpeed: 0,
    
//     // time before backspacing
//     backDelay: 50,
    
//     // loop
//     loop: false,
    
//     // false = infinite
//     loopCount: false,
    
//     // show cursor
//     showCursor: true,
    
//     // character for cursor
//     cursorChar: "",
    
//     // attribute to type (null == text)
//     attr: null,
    
//     // either html or text
//     contentType: 'html',
    
//     // call when done callback function
//     callback: function() {

//        $('.resource').delay(500).fadeIn('slow');
//       setTimeout (function () {
//         $('.typed-effect + .typed-cursor').css({'opacity': '0', 'animation': 'none'});
//       }, 1300);

//     },
    
//     // starting callback function before each string
//     preStringTyped: function() {},
    
//     //callback for every typed string
//     onStringTyped: function() {},
    
//     // callback for reset
//     resetCallback: function() {}
//   });
//   setTimeout ( function() {
//     $(".testing-typed").typed({
//     strings: ["I am a Graphic_Designer"], // ^{number} denotes time in ms to wait

//     // typing speed
//     typeSpeed: 120,
    
//     // time before typing starts
//     startDelay: 0,
    
//     // backspacing speed
//     backSpeed: 0,
    
//     // time before backspacing
//     backDelay: 800,
    
//     // loop
//     loop: true,
    
//     // false = infinite
//     loopCount: false,
    
//     // show cursor
//     showCursor: true,
    
//     // character for cursor
//     cursorChar: "",
    
//     // attribute to type (null == text)
//     attr: null,
    
//     // either html or text
//     contentType: 'html',
    
//     // call when done callback function
//     callback: function() {},
    
//     // starting callback function before each string
//     preStringTyped: function() {},
    
//     //callback for every typed string
//     onStringTyped: function() {},
    
//     // callback for reset
//     resetCallback: function() {}
//   });
//   }, 6500);
// });







//   $('.sidenav').sidenav();
//   $('.parallax').parallax();
//   $('.category').hide();

//   ('#category').hover(function(){}
//     $(this).fadeIn(100);
//     $(this).fadeOut(500);
//       });


   
    //   $(".category").hover(  
    //       function(){  
    //       $(this).hide();
        // $(".category").hover(
        //     function(){
        //     $('.category').css("visibility", "hidden");
        //     });
            // $(".img").hover(
            //     function(){
            //     $('.category').css("visibility", "hidden");
            //     });
            





    //   var TxtType = function(el, toRotate, period) {
    //     this.toRotate = toRotate;
    //     this.el = el;
    //     this.loopNum = 0;
    //     this.period = parseInt(period, 10) || 2000;
    //     this.txt = '';
    //     this.tick();
    //     this.isDeleting = false;
    // };
    // TxtType.prototype.tick = function() {
    //     var i = this.loopNum % this.toRotate.length;
    //     var fullTxt = this.toRotate[i];

    //     if (this.isDeleting) {
    //     this.txt = fullTxt.substring(0, this.txt.length - 1);
    //     } else {
    //     this.txt = fullTxt.substring(0, this.txt.length + 1);
    //     }

    //     this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

    //     var that = this;
    //     var delta = 200 - Math.random() * 100;

    //     if (this.isDeleting) { delta /= 2; }

    //     if (!this.isDeleting && this.txt === fullTxt) {
    //     delta = this.period;
    //     this.isDeleting = true;
    //     } else if (this.isDeleting && this.txt === '') {
    //     this.isDeleting = false;
    //     this.loopNum++;
    //     delta = 500;
    //     }

    //     setTimeout(function() {
    //     that.tick();
    //     }, delta);
    // };

    // window.onload = function() {
    //     var elements = document.getElementsByClassName('typewrite');
    //     for (var i=0; i<elements.length; i++) {
    //         var toRotate = elements[i].getAttribute('data-type');
    //         var period = elements[i].getAttribute('data-period');
    //         if (toRotate) {
    //           new TxtType(elements[i], JSON.parse(toRotate), period);
    //         }
    //     }
    //     // INJECT CSS
    //     var css = document.createElement("style");
    //     css.type = "text/css";
    //     css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
    //     document.body.appendChild(css);
    // };



 