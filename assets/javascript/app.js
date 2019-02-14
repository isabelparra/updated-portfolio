
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

    $(function() {
        // $("#typed").typed({
        var typed = new Typed('#typed', {
          stringsElement: "#typed-strings",
              // $("#typed").typed({
          // strings: 
          // ["Hi I'm Isabel^500"],
          // "I'm a Graphic_Designer"],
      
       
             
      
              // strings: jquery plugin types sentences and deletes them
            //   strings: ["Hi I'm Isabel","I'm a Graphic Designer","an Illustrator"],
         typeSpeed: 30, 
         startDelay: 0,
          backSpeed: 0,
          backDelay: 800,
          loop: false,
              contentType: 'html',
              loopCount: true,
              // cursorChar: "",
              callback: function() {},
               // starting callback function before each string
          // preStringTyped: function() {},
          
          // //callback for every typed string
          // onStringTyped: function() {},
          
          // // callback for reset
         resetCallback: function() {
        //    showThis();
         }
        });

       
      
      
            // })
       
        });
            
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



  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({  
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        // gutter: '.gutter-sizer',
  
   
    });

//     // $grid.imagesLoaded().progress(function() {
//     //   $grid.masonry('layout');
//     // });



 
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

// var type = document.getElementById('type');

// var typewriter = new Typewriter(app, {
//     loop: true
// });

// typewriter.typeString('Hello')
// .pauseFor(2500)
// .deleteAll()
// .typeString('Graphic Designer')
// .pauseFor(2500)
// .deleteChars(7)
// .typeString('yoga')
// .pauseFor(2500)
// .start();

// function openToggle() {
//     if ($("#jason").is(":visible")) {
// if ($(window).scrollTop() >
// aboveHeight) {
//     $("html, body").animate({scrollTop: $('#bigLogo').hiehgt()}, 500, 'easeInOutCubic');
// }
//     }
//     if(!aboutVisible) {
//         aboutVisible = true;
//         $("#blueArrow").slidedown('100', 'easeInOutCubic').delay(300);

//     }
// }





// function navBackVisible(){folded=!0,
//     $("nav").addClass("navFolded")}
//     function navBackTrasparent(){folded=!1,$("nav")
//     .removeClass("navFolded")}
    
// var $window=$(window),windowsize=$window.width(),aboveHeight=0,themeColor="#000000",
// tagSelector="#portfolio-filter li",currentTag="all",projects="#portfolio-list li",isMobile=!1,hT,folded=!1,projectMenu=!1,
// overlay=jQuery('<div id="blackOverlay"> </div>');(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(isMobile=!0),$(function(){$(window).scroll(function(){var e=$(window).scrollTop()-$("#contentWrapper").offset().top;

// $("#projectInfo")
// .css("transform","translateY("+.5*e+"px)"),
// $("#projectInfo").css("opacity",1-e/200),e>=hT&&1!=folded&&navBackVisible(),e<=hT&&1==folded&&navBackTrasparent()})}),$(document).ready(function(){function e(){$(window).scrollTop()>aboveHeight&&$window.width()>800?($("nav").css("position","fixed"),
// $("#projectInfo").css("padding-top","100px")):($("nav").css("position","relative"),$("#projectInfo").css("padding-top","0px"))}0==$(".projects").length&&$.get("nav.html",function(e){$("nav").html(e)}),e(),$("#mainContent").length?hT=$("#mainContent").offset().top-$("nav").height():$("#mainContentSchweppes").length?hT=$("#mainContentSchweppes").offset().top-$("nav").height():$(".projects").length&&(hT=$(".projects").offset().top-$("nav").height()),$(window).scrollTop()>hT&&navBackVisible(),isMobile&&($(".project a figure").find("#projectText").removeClass("overlay").addClass("overlayMobile"),$(".workTitle").removeClass("workTitle").addClass("workTitleMobile"),$(".webTag").removeClass("webTag").addClass("webTagMobile"),$(".project a").removeClass("picContainer").addClass("picContainerMobile")),$.get("footer.html",function(e){$("#footer").html(e)}),$("#menuClose").click(function(){projectMenu&&(projectMenu=!1,$("#projectsMenu").slideUp(400),$("#blackOverlay").remove(),$("#projectInfo").css("transform","translateY(0px)"))}),

// $(window).scroll(e),$(window).resize(e)}),
// $(function(){function e(){$(tagSelector).each(function(){$(this).attr("data-filter")==currentTag&&$(this).children("a").toggleClass("current")})}e(),$(tagSelector).click(function(){$(tagSelector).each(function(){$(this).children("a").hasClass("current")&&$(this).children("a").toggleClass("current")}),$(this).children("a").toggleClass("current");var e=$(this).attr("data-filter");if(isMobile)if("all"==e)$(".project:hidden").show();else{var o="";o+="."+e,$(".project").not(o).fadeOut(),$(".project").filter(o).fadeIn()}else if("all"==e)$(".project").fadeTo(500,1),$(".project").children("a").removeClass("picContainerIdle").addClass("picContainer"),$(".project").children("a").css({cursor:"pointer"}),$(".project").children("a").children("figure").find("#projectText").removeClass("overlayIdle").addClass("overlay"),$(".project").children("a").children("figure").children("img").removeClass("picGrayscale").addClass("pic");else{var o="";o+="."+e,$(".project").not(o).children("a").removeClass("picContainer").addClass("picContainerIdle"),$(".project").not(o).children("a").children("figure").find("#projectText").removeClass("overlay").addClass("overlayIdle"),$(".project").not(o).children("a").children("figure").children("img").removeClass("pic").addClass("picGrayscale"),$(".project").not(o).fadeTo(500,.2),$(".project").not(o).children("a").css({cursor:"default"}),$(".project").filter(o).fadeTo(500,1),$(".project").filter(o).children("a").removeClass("picContainerIdle").addClass("picContainer"),$(".project").filter(o).children("a").children("figure").children("img").removeClass("picGrayscale").addClass("pic"),$(".project").filter(o).children("a").css({cursor:"pointer"}),$(".project").filter(o).children("a").children("figure").find("#projectText").removeClass("overlayIdle").addClass("overlay")}})});