

$(function() {
   $("#typed").typed({

    // var typed = new Typed("#typed", {
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

          function showThis(){
            // $("#typed-second").typed({
              var typed = new Typed("#typed-second", {
                strings: ["I'M A GRAPHIC DESIGNER", "I'M AN ILLUSTRATOR", "I'M A UX/UI DESIGNER", "I'M A YOGA TEACHER", ""],
                typeSpeed: 30,
                backSpeed: 30, 

              backDelay: 1500,
              
                smartBackspace: true,
                loop: false,
                // loopCount: 2,
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



  var $grid = $('.grid').imagesLoaded( function() {
    $grid.masonry({  
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer',
        gutter: '.gutter-sizer',
  
   
    });

//     // $grid.imagesLoaded().progress(function() {
//     //   $grid.masonry('layout');
//     // });



 
});
$('.grid').masonry({ 
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
   percentPosition: true
  // gutter: '.gutter-sizer',

});

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
 

$('.grid').masonry({
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer',
  gutter: '.gutter-sizer',
  percentPosition: true
  // isFitWidth: true
});

function getInfoFromItem(t){
  var r=t.find(".picContainer"),
  e=t.find("img"),
  a=t.find(".workTitle"),
  c=t.find(".webTag");
  return{target:r.attr("target"),
  href:r.attr("href"),alt:e.attr("alt"),src:e.attr("src"),srcset:e.attr("srcset"),title:a.text(),tags:c.text()}}
  
  function createItem(){
    var t=getInfoFromItem($(this)),
    r=$("<a>"),e=$("<img>"),a=$("<div>"),c=$("<div>"),n=$("<div>"),o=$("<div>");e.attr("src",t.src),e.attr("srcset",t.srcset),e.attr("alt",t.alt),r.attr("href",t.href),r.attr("target",t.target),c.text(t.alt).attr("class","thumbTitle"),n.text(t.tags).attr("class","thumbTags"),a.attr("class","thumbContainer"),a.append(e),projects.push(t.href),t.href==pageName&&(a.attr("class","thumberContainerCurrent"),
    
    currentProjectNum=projects.indexOf(t.href));var s=$("<li>");return o.attr("class","textContainer").append(c).append(n),r.append(a).append(o),s.append(r).attr("class","projectThumbs"),s[0]}var pageName=document.location.href.match(/[^\/]+$/)[0],projects=[],currentProjectNum;
    
    $(function(){$.get("index.html",function(t){var r=$("<output>").append($.parseHTML(t)).find("#portfolio-list > li"),e=$("#projectsList"),a=r.map(createItem);a.appendTo(e),0==currentProjectNum?($("#prevProject").attr("href",projects[projects.length-1]),$("#nextProject").attr("href",projects[currentProjectNum+1])):(projects[currentProjectNum-1].indexOf("http://")!==-1?$("#prevProject").attr("href",projects[currentProjectNum-2]):$("#prevProject").attr("href",projects[currentProjectNum-1]),projects[currentProjectNum+1].indexOf("http://")!==-1?$("#nextProject").attr("href",projects[currentProjectNum+2]):$("#nextProject").attr("href",projects[currentProjectNum+1]))},"text")});










!function(e){
  e.flexslider=function(t,n){var i=e(t),
      a=e.extend({},e.flexslider.defaults,n),r=a.namespace,o="ontouchstart"in window||window.DocumentTouch&&document instanceof DocumentTouch,s=o?"touchend":"click",
      u="vertical"===a.direction,l=a.reverse,c=0<a.itemWidth,d="fade"===a.animation,p=""!==a.asNavFor,
      f={};e.data(t,"flexslider",i),f={init:function(){i.animating=!1,i.currentSlide=a.startAt,i.animatingTo=i.currentSlide,
        i.atEnd=0===i.currentSlide||i.currentSlide===i.last,i.containerSelector=a.selector.substr(0,a.selector.search(" ")),
        i.slides=e(a.selector,i),i.container=e(i.containerSelector,i),i.count=i.slides.length,i.syncExists=0<e(a.sync).length,
        "slide"===a.animation&&(a.animation="swing"),i.prop=u?"top":"marginLeft",i.args={},i.manualPause=!1;var t,n=i;if((t=!a.video)&&(t=!d)&&(t=a.useCSS))
        e:{t=document.createElement("div");var r,s=["perspectiveProperty","WebkitPerspective","MozPerspective","OPerspective","msPerspective"];
        for(r in s)if(void 0!==t.style[s[r]]){i.pfx=s[r].replace("Perspective","").toLowerCase(),i.prop="-"+i.pfx+"-transform",t=!0;break e}t=!1}n.transitions=t,""!==a.controlsContainer&&
        (i.controlsContainer=0<e(a.controlsContainer).length&&e(a.controlsContainer)),""!==a.manualControls&&
        (i.manualControls=0<e(a.manualControls).length&&e(a.manualControls)),a.randomize&&(i.slides.sort
          (function(){return Math.round(Math.random())-.5}),i.container.empty().append(i.slides)),i.doMath(),
          p&&f.asNav.setup(),i.setup("init"),a.controlNav&&f.controlNav.setup(),a.directionNav&&f.directionNav.setup(),
          a.keyboard&&(1===e(i.containerSelector).length||a.multipleKeyboard)&&e(document).bind("keyup",function(e){e=e.keyCode,i.animating||39!==e&&37!==e||(e=39===e?i.getTarget
            ("next"):37===e?i.getTarget("prev"):!1,i.flexAnimate(e,a.pauseOnAction))}),a.mousewheel&&i.bind("mousewheel",
            function(e,t){e.preventDefault();var n=0>t?i.getTarget("next"):i.getTarget("prev");i.flexAnimate(n,a.pauseOnAction)}),a.pausePlay&&f.pausePlay.setup(),a.slideshow&&(a.pauseOnHover&&i.hover
              (function(){!i.manualPlay&&!i.manualPause&&i.pause()},function(){!i.manualPause&&!i.manualPlay&&i.play()}),0<a.initDelay?setTimeout(i.play,a.initDelay):i.play()),o&&a.touch&&f.touch(),(!d||d&&a.smoothHeight)&&e(window).bind("resize focus",f.resize),
              setTimeout(function(){a.start(i)},200)},asNav:{setup:function(){i.asNav=!0,i.animatingTo=Math.floor(i.currentSlide/i.move),i.currentItem=i.currentSlide,i.slides.removeClass(r+"active-slide").eq(i.currentItem).addClass(r+"active-slide"),i.slides.click(function(t){t.preventDefault(),t=e(this);var n=t.index();
                !e(a.asNavFor).data("flexslider").animating&&!t.hasClass("active")&&(i.direction=i.currentItem<n?"next":"prev",i.flexAnimate(n,a.pauseOnAction,!1,!0,!0))})}},controlNav:{setup:function()
                  {i.manualControls?f.controlNav.setupManual():f.controlNav.setupPaging()},setupPaging:function(){var t,n=1;if(i.controlNavScaffold=e('<ol class="'+r+"control-nav "+r+("thumbnails"===a.controlNav?"control-thumbs":"control-paging")+'"></ol>'),
                  1<i.pagingCount)for(var u=0;u<i.pagingCount;u++)t="thumbnails"===a.controlNav?'<img src="'+i.slides.eq(u).attr("data-thumb")+'"/>':"<a>"+n+"</a>",i.controlNavScaffold.append("<li>"+t+"</li>"),n++;i.controlsContainer?e(i.controlsContainer).append(i.controlNavScaffold):i.append(i.controlNavScaffold),f.controlNav.set(),f.controlNav.active(),
                  i.controlNavScaffold.delegate("a, img",s,function(t){t.preventDefault(),t=e(this);var n=i.controlNav.index(t);t.hasClass(r+"active")||(i.direction=n>i.currentSlide?"next":"prev",i.flexAnimate(n,a.pauseOnAction))}),o&&i.controlNavScaffold.delegate("a","click touchstart",function(e){e.preventDefault()})},setupManual:function(){i.controlNav=i.manualControls,f.controlNav.active(),i.controlNav.live(s,function(t){t.preventDefault(),t=e(this);var n=i.controlNav.index(t);t.hasClass(r+"active")||(n>i.currentSlide?i.direction="next":i.direction="prev",
                  i.flexAnimate(n,a.pauseOnAction))}),o&&i.controlNav.live("click touchstart",function(e){e.preventDefault()})},set:function(){i.controlNav=e("."+r+"control-nav li "+("thumbnails"===a.controlNav?"img":"a"),i.controlsContainer?i.controlsContainer:i)},active:function(){i.controlNav.removeClass(r+"active").eq(i.animatingTo).addClass(r+"active")},update:function(t,n){1<i.pagingCount&&"add"===t?i.controlNavScaffold.append(e("<li><a>"+i.count+"</a></li>")):1===i.pagingCount?i.controlNavScaffold.find("li").remove():i.controlNav.eq(n).closest("li").remove(),f.controlNav.set(),
                  1<i.pagingCount&&i.pagingCount!==i.controlNav.length?i.update(n,t):f.controlNav.active()}},directionNav:{setup:function(){var t=e('<ul class="'+r+'direction-nav"><li><a class="'+r+'prev" href="#">'+a.prevText+'</a></li><li><a class="'+r+'next" href="#">'+a.nextText+"</a></li></ul>");i.controlsContainer?(e(i.controlsContainer).append(t),i.directionNav=e("."+r+"direction-nav li a",i.controlsContainer)):(i.append(t),i.directionNav=e("."+r+"direction-nav li a",i)),f.directionNav.update(),i.directionNav.bind(s,function(t){t.preventDefault(),t=e(this).hasClass(r+"next")?i.getTarget("next"):i.getTarget("prev"),i.flexAnimate(t,a.pauseOnAction)}),o&&i.directionNav.bind("click touchstart",function(e){e.preventDefault()})},update:function(){var e=r+"disabled";1===i.pagingCount?i.directionNav.addClass(e):a.animationLoop?i.directionNav.removeClass(e):0===i.animatingTo?i.directionNav.removeClass(e).filter("."+r+"prev").addClass(e):i.animatingTo===i.last?i.directionNav.removeClass(e).filter("."+r+"next").addClass(e):i.directionNav.removeClass(e)}},pausePlay:{setup:function(){var t=e('<div class="'+r+'pauseplay"><a></a></div>');i.controlsContainer?(i.controlsContainer.append(t),i.pausePlay=e("."+r+"pauseplay a",i.controlsContainer)):(i.append(t),i.pausePlay=e("."+r+"pauseplay a",i)),f.pausePlay.update(a.slideshow?r+"pause":r+"play"),i.pausePlay.bind(s,function(t){t.preventDefault(),e(this).hasClass(r+"pause")?(i.manualPause=!0,i.manualPlay=!1,i.pause()):(i.manualPause=!1,i.manualPlay=!0,i.play())}),o&&i.pausePlay.bind("click touchstart",function(e){e.preventDefault()})},update:function(e){"play"===e?i.pausePlay.removeClass(r+"pause").addClass(r+"play").text(a.playText):i.pausePlay.removeClass(r+"play").addClass(r+"pause").text(a.pauseText)}},touch:function(){function e(e){f=u?r-e.touches[0].pageY:r-e.touches[0].pageX,m=u?Math.abs(f)<Math.abs(e.touches[0].pageX-o):Math.abs(f)<Math.abs(e.touches[0].pageY-o),(!m||500<Number(new Date)-h)&&(e.preventDefault(),!d&&i.transitions&&(a.animationLoop||(f/=0===i.currentSlide&&0>f||i.currentSlide===i.last&&f>0?Math.abs(f)/p+2:1),i.setProps(s+f,"setTouch")))}function n(){if(t.removeEventListener("touchmove",e,!1),i.animatingTo===i.currentSlide&&!m&&null!==f){var u=l?-f:f,c=u>0?i.getTarget("next"):i.getTarget("prev");i.canAdvance(c)&&(550>Number(new Date)-h&&50<Math.abs(u)||Math.abs(u)>p/2)?i.flexAnimate(c,a.pauseOnAction):d||i.flexAnimate(i.currentSlide,a.pauseOnAction,!0)}t.removeEventListener("touchend",n,!1),s=f=o=r=null}var r,o,s,p,f,h,m=!1;t.addEventListener("touchstart",function(d){i.animating?d.preventDefault():1===d.touches.length&&(i.pause(),p=u?i.h:i.w,h=Number(new Date),s=c&&l&&i.animatingTo===i.last?0:c&&l?i.limit-(i.itemW+a.itemMargin)*i.move*i.animatingTo:c&&i.currentSlide===i.last?i.limit:c?(i.itemW+a.itemMargin)*i.move*i.currentSlide:l?(i.last-i.currentSlide+i.cloneOffset)*p:(i.currentSlide+i.cloneOffset)*p,r=u?d.touches[0].pageY:d.touches[0].pageX,o=u?d.touches[0].pageX:d.touches[0].pageY,t.addEventListener("touchmove",e,!1),t.addEventListener("touchend",n,!1))},!1)},resize:function(){!i.animating&&i.is(":visible")&&(c||i.doMath(),d?f.smoothHeight():c?(i.slides.width(i.computedW),i.update(i.pagingCount),i.setProps()):u?(i.viewport.height(i.h),i.setProps(i.h,"setTotal")):(a.smoothHeight&&f.smoothHeight(),i.newSlides.width(i.computedW),i.setProps(i.computedW,"setTotal")))},smoothHeight:function(e){if(!u||d){var t=d?i:i.viewport;e?t.animate({height:i.slides.eq(i.animatingTo).height()},e):t.height(i.slides.eq(i.animatingTo).height())}},sync:function(t){var n=e(a.sync).data("flexslider"),r=i.animatingTo;switch(t){case"animate":n.flexAnimate(r,a.pauseOnAction,!1,!0);break;case"play":!n.playing&&!n.asNav&&n.play();break;case"pause":n.pause()}}},i.flexAnimate=function(t,n,s,h,m){if(p&&1===i.pagingCount&&(i.direction=i.currentItem<t?"next":"prev"),!i.animating&&(i.canAdvance(t,m)||s)&&i.is(":visible")){if(p&&h){if(s=e(a.asNavFor).data("flexslider"),i.atEnd=0===t||t===i.count-1,s.flexAnimate(t,!0,!1,!0,m),i.direction=i.currentItem<t?"next":"prev",s.direction=i.direction,Math.ceil((t+1)/i.visible)-1===i.currentSlide||0===t)return i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),!1;i.currentItem=t,i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),t=Math.floor(t/i.visible)}if(i.animating=!0,i.animatingTo=t,a.before(i),n&&i.pause(),i.syncExists&&!m&&f.sync("animate"),a.controlNav&&f.controlNav.active(),c||i.slides.removeClass(r+"active-slide").eq(t).addClass(r+"active-slide"),i.atEnd=0===t||t===i.last,a.directionNav&&f.directionNav.update(),t===i.last&&(a.end(i),a.animationLoop||i.pause()),d)o?(i.slides.eq(i.currentSlide).css({opacity:0,zIndex:1}),i.slides.eq(t).css({opacity:1,zIndex:2}),i.slides.unbind("webkitTransitionEnd transitionend"),i.slides.eq(i.currentSlide).bind("webkitTransitionEnd transitionend",function(){a.after(i)}),i.animating=!1,i.currentSlide=i.animatingTo):(i.slides.eq(i.currentSlide).fadeOut(a.animationSpeed,a.easing),i.slides.eq(t).fadeIn(a.animationSpeed,a.easing,i.wrapup));else{var g=u?i.slides.filter(":first").height():i.computedW;c?(t=a.itemWidth>i.w?2*a.itemMargin:a.itemMargin,t=(i.itemW+t)*i.move*i.animatingTo,t=t>i.limit&&1!==i.visible?i.limit:t):t=0===i.currentSlide&&t===i.count-1&&a.animationLoop&&"next"!==i.direction?l?(i.count+i.cloneOffset)*g:0:i.currentSlide===i.last&&0===t&&a.animationLoop&&"prev"!==i.direction?l?0:(i.count+1)*g:l?(i.count-1-t+i.cloneOffset)*g:(t+i.cloneOffset)*g,i.setProps(t,"",a.animationSpeed),i.transitions?(a.animationLoop&&i.atEnd||(i.animating=!1,i.currentSlide=i.animatingTo),i.container.unbind("webkitTransitionEnd transitionend"),i.container.bind("webkitTransitionEnd transitionend",function(){i.wrapup(g)})):i.container.animate(i.args,a.animationSpeed,a.easing,function(){i.wrapup(g)})}a.smoothHeight&&f.smoothHeight(a.animationSpeed)}},i.wrapup=function(e){!d&&!c&&(0===i.currentSlide&&i.animatingTo===i.last&&a.animationLoop?i.setProps(e,"jumpEnd"):i.currentSlide===i.last&&0===i.animatingTo&&a.animationLoop&&i.setProps(e,"jumpStart")),i.animating=!1,i.currentSlide=i.animatingTo,a.after(i)},i.animateSlides=function(){i.animating||i.flexAnimate(i.getTarget("next"))},i.pause=function(){clearInterval(i.animatedSlides),i.playing=!1,a.pausePlay&&f.pausePlay.update("play"),i.syncExists&&f.sync("pause")},i.play=function(){i.animatedSlides=setInterval(i.animateSlides,a.slideshowSpeed),i.playing=!0,a.pausePlay&&f.pausePlay.update("pause"),i.syncExists&&f.sync("play")},i.canAdvance=function(e,t)
                  {var n=p?i.pagingCount-1:i.last;return t?!0:p&&i.currentItem===i.count-1&&0===e&&"prev"===i.direction?!0:p&&0===i.currentItem&&e===i.pagingCount-1&&"next"!==i.direction?!1:e!==i.currentSlide||p?a.animationLoop?!0:i.atEnd&&0===i.currentSlide&&e===n&&"next"!==i.direction?!1:i.atEnd&&i.currentSlide===n&&0===e&&"next"===i.direction?!1:!0:!1},i.getTarget=function(e){return i.direction=e,"next"===e?i.currentSlide===i.last?0:i.currentSlide+1:0===i.currentSlide?i.last:i.currentSlide-1},i.setProps=function(e,t,n){var r,o=e?e:(i.itemW+a.itemMargin)*i.move*i.animatingTo;r=-1*function(){if(c)return"setTouch"===t?e:l&&i.animatingTo===i.last?0:l?i.limit-(i.itemW+a.itemMargin)*i.move*i.animatingTo:i.animatingTo===i.last?i.limit:o;switch(t){case"setTotal":return l?(i.count-1-i.currentSlide+i.cloneOffset)*e:(i.currentSlide+i.cloneOffset)*e;case"setTouch":return e;case"jumpEnd":return l?e:i.count*e;case"jumpStart":return l?i.count*e:e;default:return e}}()+"px",i.transitions&&(r=u?"translate3d(0,"+r+",0)":"translate3d("+r+",0,0)",n=void 0!==n?n/1e3+"s":"0s",i.container.css("-"+i.pfx+"-transition-duration",n)),i.args[i.prop]=r,(i.transitions||void 0===n)&&i.container.css(i.args)},i.setup=function(t){if(d)i.slides.css({width:"100%","float":"left",marginRight:"-100%",position:"relative"}),"init"===t&&(o?i.slides.css({opacity:0,display:"block",webkitTransition:"opacity "+a.animationSpeed/1e3+"s ease",zIndex:1}).eq(i.currentSlide).css({opacity:1,zIndex:2}):i.slides.eq(i.currentSlide).fadeIn(a.animationSpeed,a.easing)),a.smoothHeight&&f.smoothHeight();else{var n,s;"init"===t&&(i.viewport=e('<div class="'+r+'viewport"></div>').css({overflow:"hidden",position:"relative"}).appendTo(i).append(i.container),i.cloneCount=0,i.cloneOffset=0,l&&(s=e.makeArray(i.slides).reverse(),i.slides=e(s),i.container.empty().append(i.slides))),a.animationLoop&&!c&&(i.cloneCount=2,i.cloneOffset=1,"init"!==t&&i.container.find(".clone").remove(),i.container.append(i.slides.first().clone().addClass("clone")).prepend(i.slides.last().clone().addClass("clone"))),i.newSlides=e(a.selector,i),n=l?i.count-1-i.currentSlide+i.cloneOffset:i.currentSlide+i.cloneOffset,u&&!c?(i.container.height(200*(i.count+i.cloneCount)+"%").css("position","absolute").width("100%"),setTimeout(function(){i.newSlides.css({display:"block"}),i.doMath(),i.viewport.height(i.h),i.setProps(n*i.h,"init")},"init"===t?100:0)):(i.container.width(200*(i.count+i.cloneCount)+"%"),i.setProps(n*i.computedW,"init"),setTimeout(function(){i.doMath(),i.newSlides.css({width:i.computedW,"float":"left",display:"block"}),a.smoothHeight&&f.smoothHeight()},"init"===t?100:0))}c||i.slides.removeClass(r+"active-slide").eq(i.currentSlide).addClass(r+"active-slide")},i.doMath=function(){var e=i.slides.first(),t=a.itemMargin,n=a.minItems,r=a.maxItems;i.w=i.width(),i.h=e.height(),i.boxPadding=e.outerWidth()-e.width(),c?(i.itemT=a.itemWidth+t,i.minW=n?n*i.itemT:i.w,i.maxW=r?r*i.itemT:i.w,i.itemW=i.minW>i.w?(i.w-t*n)/n:i.maxW<i.w?(i.w-t*r)/r:a.itemWidth>i.w?i.w:a.itemWidth,i.visible=Math.floor(i.w/(i.itemW+t)),i.move=0<a.move&&a.move<i.visible?a.move:i.visible,i.pagingCount=Math.ceil((i.count-i.visible)/i.move+1),i.last=i.pagingCount-1,i.limit=1===i.pagingCount?0:a.itemWidth>i.w?(i.itemW+2*t)*i.count-i.w-t:(i.itemW+t)*i.count-i.w-t):(i.itemW=i.w,i.pagingCount=i.count,i.last=i.count-1),i.computedW=i.itemW-i.boxPadding},i.update=function(e,t){i.doMath(),c||(e<i.currentSlide?i.currentSlide+=1:e<=i.currentSlide&&0!==e&&(i.currentSlide-=1),i.animatingTo=i.currentSlide),a.controlNav&&!i.manualControls&&("add"===t&&!c||i.pagingCount>i.controlNav.length?f.controlNav.update("add"):("remove"===t&&!c||i.pagingCount<i.controlNav.length)&&(c&&i.currentSlide>i.last&&(i.currentSlide-=1,i.animatingTo-=1),f.controlNav.update("remove",i.last))),a.directionNav&&f.directionNav.update()},i.addSlide=function(t,n){var r=e(t);i.count+=1,i.last=i.count-1,u&&l?void 0!==n?i.slides.eq(i.count-n).after(r):i.container.prepend(r):void 0!==n?i.slides.eq(n).before(r):i.container.append(r),i.update(n,"add"),i.slides=e(a.selector+":not(.clone)",i),i.setup(),a.added(i)},i.removeSlide=function(t){var n=isNaN(t)?i.slides.index(e(t)):t;i.count-=1,i.last=i.count-1,isNaN(t)?e(t,i.slides).remove():u&&l?i.slides.eq(i.last).remove():i.slides.eq(t).remove(),i.doMath(),i.update(n,"remove"),i.slides=e(a.selector+":not(.clone)",i),i.setup(),a.removed(i)},f.init()},e.flexslider.defaults={namespace:"flex-",selector:".slides > li",animation:"fade",easing:"swing",direction:"horizontal",reverse:!1,animationLoop:!0,smoothHeight:!1,startAt:0,slideshow:!0,slideshowSpeed:7e3,animationSpeed:600,initDelay:0,randomize:!1,pauseOnAction:!0,pauseOnHover:!1,useCSS:!0,touch:!0,video:!1,controlNav:!0,directionNav:!0,prevText:"Previous",nextText:"Next",keyboard:!0,multipleKeyboard:!1,mousewheel:!1,pausePlay:!1,pauseText:"Pause",playText:"Play",controlsContainer:"",manualControls:"",sync:"",asNavFor:"",itemWidth:0,itemMargin:0,minItems:0,maxItems:0,move:0,start:function(){},before:function(){},after:function(){},end:function(){},added:function(){},removed:function(){}},e.fn.flexslider=function(t){if(void 0===t&&(t={}),"object"==typeof t)return this.each(function(){var n=e(this),i=n.find(t.selector?t.selector:".slides > li");1===i.length?(i.fadeIn(400),t.start&&t.start(n)):void 0==n.data("flexslider")&&new e.flexslider(this,t)});var n=e(this).data("flexslider");switch(t){case"play":n.play();break;case"pause":n.pause();break;case"next":n.flexAnimate(n.getTarget("next"),!0);break;case"prev":case"previous":n.flexAnimate(n.getTarget("prev"),!0);break;default:"number"==typeof t&&n.flexAnimate(t,!0)}}}(jQuery),!function(e){"use strict";var t=function(t,n){this.el=e(t),this.options=e.extend({},e.fn.typed.defaults,n),this.isInput=this.el.is("input"),this.attr=this.options.attr,this.showCursor=this.isInput?!1:this.options.showCursor,this.elContent=this.attr?this.el.attr(this.attr):this.el.text(),this.contentType=this.options.contentType,this.typeSpeed=this.options.typeSpeed,this.startDelay=this.options.startDelay,this.backSpeed=this.options.backSpeed,this.backDelay=this.options.backDelay,this.stringsElement=this.options.stringsElement,this.strings=this.options.strings,this.strPos=0,this.arrayPos=0,this.stopNum=0,this.loop=this.options.loop,this.loopCount=this.options.loopCount,this.curLoop=0,this.stop=!1,this.cursorChar=this.options.cursorChar,this.shuffle=this.options.shuffle,this.sequence=[],this.build()};t.prototype={constructor:t,init:function(){var e=this;e.timeout=setTimeout(function(){for(var t=0;t<e.strings.length;++t)e.sequence[t]=t;e.shuffle&&(e.sequence=e.shuffleArray(e.sequence)),e.typewrite(e.strings[e.sequence[e.arrayPos]],e.strPos)},e.startDelay)},build:function(){var t=this;if(this.showCursor===!0&&(this.cursor=e('<span class="typed-cursor">'+this.cursorChar+"</span>"),this.el.after(this.cursor)),this.stringsElement){this.strings=[],this.stringsElement.hide(),console.log(this.stringsElement.children());var n=this.stringsElement.children();e.each(n,function(n,i){t.strings.push(e(i).html())})}this.init()},typewrite:function(e,t){if(this.stop!==!0){var n=Math.round(70*Math.random())+this.typeSpeed,i=this;i.timeout=setTimeout(function(){var n=0,a=e.substr(t);if("^"===a.charAt(0)){var r=1;/^\^\d+/.test(a)&&(a=/\d+/.exec(a)[0],r+=a.length,n=parseInt(a)),e=e.substring(0,t)+e.substring(t+r)}if("html"===i.contentType){var o=e.substr(t).charAt(0);if("<"===o||"&"===o){var s="",u="";for(u="<"===o?">":";";e.substr(t+1).charAt(0)!==u&&(s+=e.substr(t).charAt(0),t++,!(t+1>e.length)););t++,s+=u}}i.timeout=setTimeout(function(){if(t===e.length){if(i.options.onStringTyped(i.arrayPos),i.arrayPos===i.strings.length-1&&(i.options.callback(),i.curLoop++,i.loop===!1||i.curLoop===i.loopCount))return;i.timeout=setTimeout(function(){i.backspace(e,t)},i.backDelay)}else{0===t&&i.options.preStringTyped(i.arrayPos);var n=e.substr(0,t+1);i.attr?i.el.attr(i.attr,n):i.isInput?i.el.val(n):"html"===i.contentType?i.el.html(n):i.el.text(n),t++,i.typewrite(e,t)}},n)},n)}},backspace:function(e,t){if(this.stop!==!0){var n=Math.round(70*Math.random())+this.backSpeed,i=this;i.timeout=setTimeout(function(){if("html"===i.contentType&&">"===e.substr(t).charAt(0)){for(var n="";"<"!==e.substr(t-1).
                  charAt(0)&&(n-=e.substr(t).charAt(0),t--,!(0>t)););t--,n+="<"}var a=e.substr(0,t);i.attr?i.el.attr(i.attr,a):i.isInput?i.el.val(a):"html"===i.contentType?i.el.html(a):i.el.text(a),t>i.stopNum?(t--,i.backspace(e,t)):t<=i.stopNum&&(i.arrayPos++,i.arrayPos===i.strings.length?(i.arrayPos=0,i.shuffle&&(i.sequence=i.shuffleArray(i.sequence)),i.init()):i.typewrite(i.strings[i.sequence[i.arrayPos]],t))},n)}},shuffleArray:function(e){var t,n,i=e.length;if(i)for(;--i;)n=Math.floor(Math.random()*(i+1)),t=e[n],e[n]=e[i],e[i]=t;return e},reset:function(){var e=this;clearInterval(e.timeout),this.el.attr("id"),this.el.empty(),"undefined"!=typeof this.cursor&&this.cursor.remove(),this.strPos=0,this.arrayPos=0,this.curLoop=0,this.options.resetCallback()}},e.fn.typed=function(n){return this.each(function(){var i=e(this),a=i.data("typed"),r="object"==typeof n&&n;a&&a.reset(),i.data("typed",a=new t(this,r)),"string"==typeof n&&a[n]()})},e.fn.typed.defaults={strings:["These are the default values...","You know what you should do?","Use your own!","Have a great day!"],stringsElement:null,typeSpeed:0,startDelay:0,backSpeed:0,shuffle:!1,backDelay:500,loop:!1,loopCount:!1,showCursor:!0,cursorChar:"|",attr:null,contentType:"html",callback:function(){},preStringTyped:function(){},onStringTyped:function(){},resetCallback:function(){}}}(window.jQuery),function(){for(var e=document.getElementsByTagName("iframe"),t=0;t<e.length;t++){var n=e[t],i=/www.youtube.com|player.vimeo.com/;if(-1!==n.src.search(i)){var a=n.height/n.width*100;n.style.position="absolute",n.style.top="0",n.style.left="0",n.width="68%",n.height="68%";var r=document.createElement("div");r.className="video-wrap",r.style.width="100%",r.style.position="absolute",r.style.top="3.6%",r.style.left="16%",r.style.paddingTop=a+"%";var o=n.parentNode;o.insertBefore(r,n),r.appendChild(n)}}}(),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(e,t,n,i,a){return jQuery.easing[jQuery.easing.def](e,t,n,i,a)},easeInQuad:function(e,t,n,i,a){return i*(t/=a)*t+n},easeOutQuad:function(e,t,n,i,a){return-i*(t/=a)*(t-2)+n},easeInOutQuad:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t+n:-i/2*(--t*(t-2)-1)+n},easeInCubic:function(e,t,n,i,a){return i*(t/=a)*t*t+n},easeOutCubic:function(e,t,n,i,a){return i*((t=t/a-1)*t*t+1)+n},easeInOutCubic:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t+n:i/2*((t-=2)*t*t+2)+n},easeInQuart:function(e,t,n,i,a){return i*(t/=a)*t*t*t+n},easeOutQuart:function(e,t,n,i,a){return-i*((t=t/a-1)*t*t*t-1)+n},easeInOutQuart:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t+n:-i/2*((t-=2)*t*t*t-2)+n},easeInQuint:function(e,t,n,i,a){return i*(t/=a)*t*t*t*t+n},easeOutQuint:function(e,t,n,i,a){return i*((t=t/a-1)*t*t*t*t+1)+n},easeInOutQuint:function(e,t,n,i,a){return(t/=a/2)<1?i/2*t*t*t*t*t+n:i/2*((t-=2)*t*t*t*t+2)+n},easeInSine:function(e,t,n,i,a){return-i*Math.cos(t/a*(Math.PI/2))+i+n},easeOutSine:function(e,t,n,i,a){return i*Math.sin(t/a*(Math.PI/2))+n},easeInOutSine:function(e,t,n,i,a){return-i/2*(Math.cos(Math.PI*t/a)-1)+n},easeInExpo:function(e,t,n,i,a){return 0==t?n:i*Math.pow(2,10*(t/a-1))+n},easeOutExpo:function(e,t,n,i,a){return t==a?n+i:i*(-Math.pow(2,-10*t/a)+1)+n},easeInOutExpo:function(e,t,n,i,a){return 0==t?n:t==a?n+i:(t/=a/2)<1?i/2*Math.pow(2,10*(t-1))+n:i/2*(-Math.pow(2,-10*--t)+2)+n},easeInCirc:function(e,t,n,i,a){return-i*(Math.sqrt(1-(t/=a)*t)-1)+n},easeOutCirc:function(e,t,n,i,a){return i*Math.sqrt(1-(t=t/a-1)*t)+n},easeInOutCirc:function(e,t,n,i,a){return(t/=a/2)<1?-i/2*(Math.sqrt(1-t*t)-1)+n:i/2*(Math.sqrt(1-(t-=2)*t)+1)+n},easeInElastic:function(e,t,n,i,a){var r=1.70158,o=0,s=i;if(0==t)return n;if(1==(t/=a))return n+i;if(o||(o=.3*a),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return-(s*Math.pow(2,10*(t-=1))*Math.sin((t*a-r)*(2*Math.PI)/o))+n},easeOutElastic:function(e,t,n,i,a){var r=1.70158,o=0,s=i;if(0==t)return n;if(1==(t/=a))return n+i;if(o||(o=.3*a),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return s*Math.pow(2,-10*t)*Math.sin((t*a-r)*(2*Math.PI)/o)+i+n},easeInOutElastic:function(e,t,n,i,a){var r=1.70158,o=0,s=i;if(0==t)return n;if(2==(t/=a/2))return n+i;if(o||(o=a*(.3*1.5)),s<Math.abs(i)){s=i;var r=o/4}else var r=o/(2*Math.PI)*Math.asin(i/s);return 1>t?-.5*(s*Math.pow(2,10*(t-=1))*Math.sin((t*a-r)*(2*Math.PI)/o))+n:s*Math.pow(2,-10*(t-=1))*Math.sin((t*a-r)*(2*Math.PI)/o)*.5+i+n},easeInBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),i*(t/=a)*t*((r+1)*t-r)+n},easeOutBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),i*((t=t/a-1)*t*((r+1)*t+r)+1)+n},easeInOutBack:function(e,t,n,i,a,r){return void 0==r&&(r=1.70158),(t/=a/2)<1?i/2*(t*t*(((r*=1.525)+1)*t-r))+n:i/2*((t-=2)*t*(((r*=1.525)+1)*t+r)+2)+n},easeInBounce:function(e,t,n,i,a){return i-jQuery.easing.easeOutBounce(e,a-t,0,i,a)+n},easeOutBounce:function(e,t,n,i,a){return(t/=a)<1/2.75?i*(7.5625*t*t)+n:2/2.75>t?i*(7.5625*(t-=1.5/2.75)*t+.75)+n:2.5/2.75>t?i*(7.5625*(t-=2.25/2.75)*t+.9375)+n:i*(7.5625*(t-=2.625/2.75)*t+.984375)+n},easeInOutBounce:function(e,t,n,i,a){return a/2>t?.5*jQuery.easing.easeInBounce(e,2*t,0,i,a)+n:.5*jQuery.easing.easeOutBounce(e,2*t-a,0,i,a)+.5*i+n}}),function(e){e.fn.magnify=function(t){var n=this,i=e.extend({speed:100,timeout:-1,onload:function(){}},t),a=function(t){var n,a,r,s,u,l,c,d,p,f=e(t),h=f.closest("a"),m=0,g=0,v=f.attr("data-magnify-src")||i.src||h.attr("href")||"",y=function(){a.is(":visible")&&a.fadeOut(i.speed,function(){e("html").removeClass("magnifying").trigger("magnifyend")})};if(v){f.data("originalStyle",f.attr("style"));var w=new Image;e(w).on({load:function(){var t,b;f.css("display","block"),f.parent(".magnify").length||f.wrap('<div class="magnify"></div>'),n=f.parent(".magnify"),f.prev(".magnify-lens").length?n.children(".magnify-lens").css("background-image","url('"+v+"')"):f.before('<div class="magnify-lens loading" style="background:url(\''+v+"') no-repeat 0 0\"></div>"),a=n.children(".magnify-lens"),a.removeClass("loading"),r=n.offset(),s=n.width(),u=n.height(),l=f.innerWidth(),c=f.innerHeight(),d=a.width(),p=a.height(),m=w.width,g=w.height,f.data("zoomSize",{width:m,height:g}),w=null,i.onload(),n.off().on({"mousemove touchmove":function(n){if(n.preventDefault(),!u)return void o();if(t=(n.pageX||n.originalEvent.touches[0].pageX)-r.left,b=(n.pageY||n.originalEvent.touches[0].pageY)-r.top,a.is(":animated")||(s>t&&u>b&&t>0&&b>0?a.is(":hidden")&&(e("html").addClass("magnifying").trigger("magnifystart"),a.fadeIn(i.speed)):y()),a.is(":visible")){var f=t-d/2,h=b-p/2;if(m&&g)var v=-1*Math.round(t/l*m-d/2),w=-1*Math.round(b/c*g-p/2),x=v+"px "+w+"px";a.css({top:Math.round(h)+"px",left:Math.round(f)+"px",backgroundPosition:x||""})}},mouseenter:function(){r=n.offset()},mouseleave:y}),i.timeout>=0&&n.on("touchend",function(){setTimeout(y,i.timeout)}),e("body").not(n).on("touchstart",y);var x=f.attr("usemap");if(x){var C=e("map[name="+x.slice(1)+"]");f.after(C),n.click(function(n){if(n.clientX||n.clientY){a.hide();var i=document.elementFromPoint(n.clientX||n.originalEvent.touches[0].clientX,n.clientY||n.originalEvent.touches[0].clientY);"AREA"===i.nodeName?i.click():e("area",C).each(function(){var n=e(this).attr("coords").split(",");return t>=n[0]&&t<=n[2]&&b>=n[1]&&b<=n[3]?(this.click(),!1):void 0})}})}h.length&&(h.css("display","inline-block"),!h.attr("href")||f.attr("data-magnify-src")||i.src||h.click(function(e){e.preventDefault()}))},error:function(){w=null}}),w.src=v}},r=0,o=function(){clearTimeout(r),r=setTimeout(function(){n.destroy(),n.magnify(i)},100)};return this.destroy=function(){return this.each(function(){var t=e(this),n=t.prev("div.magnify-lens"),i=t.data("originalStyle");t.parent("div.magnify").length&&n.length&&(i?t.attr("style",i):t.removeAttr("style"),t.unwrap(),n.remove())}),e(window).off("resize",o),n},e(window).resize(o),this.each(function(){a(this)})}}(jQuery),jQuery.reel||function(e,t,n,i){function a(e){return x.instances.push(e[0])&&e}function r(e){return(x.instances=x.instances.not(v(e.attr(ot))))&&e}function o(e){return x.instances.first().data(e)}function s(e){return"data:image/gif;base64,R0lGODlh"+e}function u(e){return"<"+e+"/>"}function l(e){return"."+(e||"")}function c(e){return e.replace(tt,x.cdn)}function d(e){return"url('"+w(e)+"')"}function p(e,t){return typeof t==ct?t[e]:t}function f(e,t,n){return _(e,$(t,n))}function h(e,t){return X(e)*(t?-1:1)}function m(e){return yt?e.touch||e.originalEvent.touches[0]:e}function g(e){return e===i?0:typeof e==pt?e:e+"px"}function v(e){return"#"+e}function y(e,t,n){for(;e.length<t;)e=n+e;return e}function w(e){return encodeURI(decodeURI(e))}function b(e){try{console.warn("Deprecation - Please consult https://github.com/pisi/Reel/wiki/Deprecations")}catch(t){}return e}if(e&&!(+e().jquery.replace(".",Ze).substr(0,2)<15)){var x=e.reel={version:"1.2-devel",def:{frame:1,frames:36,loops:!0,clickfree:!1,draggable:!0,scrollable:!0,steppable:!0,throwable:!0,wheelable:!0,cw:!1,revolution:i,stitched:0,directional:!1,row:1,rows:0,orbital:0,vertical:!1,inversed:!1,footage:6,spacing:0,horizontal:!0,suffix:"-reel",image:i,images:"",path:"",preload:"fidelity",speed:0,delay:0,timeout:2,rebound:.5,entry:i,opening:0,brake:.23,velocity:0,tempo:36,laziness:6,cursor:i,hint:"",indicator:0,klass:"",preloader:2,area:i,attr:{},annotations:i,graph:i,monitor:i,step:i,steps:i},fn:{reel:function(){var n=arguments,s=e(this),f=s.data(),y=n[0]||{},S=n[1];if("object"==typeof y){var k=e.extend({},x.def,y);n=s.filter(st).unreel().filter(function(){var t=e(this),n=k.attr,i=n.src||t.attr("src"),a=n.width||t.width();return t=n.height||t.height(),i&&a&&t?!0:void 0});var I=[];return k.step&&(k.frame=k.step),k.steps&&(k.frames=k.steps),n.each(function(){var n,s,f=e(this),y=function(e,t){return f.reel(e,t)&&t},S=function(e){return f.reel(e)},T={setup:function(){if(!f.hasClass(N)){y(ve,k);var t=f.attr(k.attr).attr("src"),n=y(ot,f.attr(ot)||f.attr(ot,N+"-"+ +new Date).attr(ot)),i=f.attr(Oe),r=e.extend({},f.data()),o=k.images,s=k.stitched,c=k.loops,d=k.orbital,m=k.revolution,g=k.rows,w=k.footage,b=x.re.sequence.exec(o);o=y(fe,b?x.sequence(b,k,S):o||[]),b={x:f.width(),y:f.height()};var M=y(le,d&&w||1>=g&&o.length||k.frames),P=g>1||d;y(Ce,p("x",m)||s/2||2*b.x),y(Se,P?p("y",m)||(g>3?b.y:b.y/(5-g)):0),g=s?1:H(M/w),n=v(n+k.suffix),m=f[0].className||Ze,w=e(u(nt),{id:n.substr(1),"class":m+Ge+A+Ge+q+"0"}),w=f.wrap(w.addClass(k.klass)).attr({"class":N}),I.push(a(w)[0]),w=w.parent().bind(T.instance),y(pe,o.length?Ze:k.image||t.replace(x.re.image,"$1"+k.suffix+".$2")),y(V,[]),y(Ie,k.spacing),y(Te,g),y(oe,b),y(G,1/(M-(c&&!s?0:1))),y(Pe,s-(c?0:b.x)),y(Me,0),y(Ae,n),y(Z,y(Ne,k.speed)<0),y(Qe,0),y(qe,k.vertical),y(we,0),y(re,h(1,!k.cw&&!s)),y(ne,{}),y(te,!1),y(ie,y(ae,0)),y(ge,y(ce,0)),y(be,!1),y(xe,!1),y(he,!1),y(J,k.brake),y(ee,!!d),y(je,k.tempo/(x.lazy?k.laziness:1)),y(me,-1),y(R,k.annotations||w.unbind(l(R))&&{}),y(U,{src:t,classes:m,style:i||Ze,data:r}),k.steppable||w.unbind("up.steppable"),k.indicator||w.unbind(".indicator"),It(Ze,{width:b.x,height:b.y,overflow:de,position:"relative"}),It(Je+Ge+l(N),{display:et}),C.bind(T.pool),f.trigger("setup")}},instance:{teardown:function(){var e=f.data(U);f.parent().unbind(T.instance),S(Oe).remove(),S(F).unbind(We),r(f.unbind(We).removeData().siblings().unbind(We).remove().end().attr({"class":e.classes,src:e.src,style:e.style}).data(e.data).unwrap()),Pt(),C.unbind(T.pool),Qt.unbind(Le)},setup:function(){function t(e){return f.trigger("down",[m(e).clientX,m(e).clientY,e])&&e.give}function n(e,t){return!t||f.trigger("wheel",[t,e])&&e.give}var a=S(oe);S(le),f.attr(ot);var r=k.rows,o=k.stitched,s=f.parent(),d=y(F,e(k.area||s));r=k.rows||1,It(Ge+l(N),{MozUserSelect:lt,WebkitUserSelect:lt}),yt?(It(Ge+l(N),{WebkitBackgroundSize:S(fe).length?o?g(o)+Ge+g(a.y):i:o&&g(o)+Ge+g((a.y+k.spacing)*r-k.spacing)||g(a.x*k.footage)+Ge+g(a.y*S(Te)*r*(k.directional?2:1))}),d.bind(Ke,t)):(o=k.cursor,a=o==it?gt:o||mt,o=o==it?vt+Ge+"!important":i,It(Ze,{cursor:c(a)}),It(l(Q),{cursor:"wait"}),It(l(E)+Je+l(E)+" *",{cursor:c(o||a)},!0),d.bind(k.wheelable?Ye:null,n).bind(k.clickfree?He:ze,t).bind("dragstart",function(){return!1})),k.hint&&d.attr("title",k.hint),k.indicator&&s.append(Tt("x")),r>1&&k.indicator&&s.append(Tt("y")),k.monitor&&s.append(St=e(u(nt),{"class":O}))&&It(Ge+l(O),{position:Ve,left:0,top:0}),It(Ge+l(D),{display:lt})},preload:function(){function t(e,t){setTimeout(function(){t.parent().length&&t.attr({src:w(e)})},2*(d-c.length))}var n=S(oe),i=f.parent(),a=S(fe),r=!a.length,o=S(le),s=k.footage,l=x.preload[k.preload]||x.preload[x.def.preload],c=r?[S(pe)]:l(a.slice(0),k,S),d=c.length;for(y(we,r?.5:0),a=[],i.addClass(Q).append(kt()),y(Oe,e("<"+Oe+' type="text/css">'+It.rules.join("\n")+"</"+Oe+">").prependTo(at)),f.trigger("stop");c.length;){l=k.path+c.shift();
var p=n.x*(r?s:1),h=n.y*(r?o/s:1)*(k.directional?2:1);p=e(u(st)).attr({"class":D,width:p,height:h}).appendTo(i),p.bind("load error abort",function(){return!!e(this).parent().length&&f.trigger("preloaded")&&!1}),t(l,p),a.push(l)}y(V,a)},preloaded:function(){var e=S(fe).length||1,t=y(we,$(S(we)+1,e));t===e&&(f.parent().removeClass(Q).unbind(we,T.instance.preloaded),f.trigger("loaded")),1===t&&f.trigger("frameChange",[i,S(ue)])},loaded:function(){S(fe).length>1||f.css({backgroundImage:d(k.path+S(pe))}).attr({src:c(ht)}),k.stitched&&f.attr({src:c(ht)}),S(xe)||y(Qe,k.velocity||0)},opening:function(){if(!k.opening)return f.trigger("openingDone");y(he,!0),y(De,!S(Ne));var e=k.entry||k.speed,t=S(se),n=k.opening;y(se,t-e*n),y(me,H(n*o(je)))},openingDone:function(){y(ye,!1),y(he,!1);var e=Be+l(he);C.unbind(e,T.pool[e]),k.delay>0?s=setTimeout(function(){f.trigger("play")},1e3*k.delay):f.trigger("play")},play:function(e,t){t=y(Ne,t||S(Ne)),y(Z,0>t),e=y(ye,!!t),y(De,!e),ut()},pause:function(){bt()},stop:function(){var e=y(De,!0);y(ye,!e)},down:function(t,n,i,a){function r(e){return f.trigger("pan",[m(e).clientX,m(e).clientY,e])&&e.give}function o(e){return f.trigger("up",[e])&&e.give}(!a||a.button==wt||k.clickfree)&&k.draggable&&(y(te,S(ue)),t=k.clickfree,y(Qe,0),At=jt(S(Ce),n,i),yt||a&&a.preventDefault(),bt(),Pt(),xt=!1,e(rt,Qt).addClass(E),yt?Qt.bind(Ue,r).bind(Fe+Ge+Re,o):(t?S(F):Qt).bind(_e,r).bind(t?$e:Xe,o))},up:function(){y(te,!1),y(be,!1);var t=k.throwable,n=X(Dt[0]+Dt[1])/60;tt=y(Qe,t?t===!0?n:$(t,n):0)?1:0,bt(),Pt(),e(rt,Qt).removeClass(E),(k.clickfree?S(F):Qt).unbind(Le)},pan:function(e,t,n,i){if(k.draggable&&Et){Et=!1,bt();var a=k.rows,r=k.orbital;e=yt&&!S(be)&&1>=a&&!r&&k.scrollable;var o={x:t-At.x,y:n-At.y};if(i&&e&&X(o.x)<X(o.y))return i.give=!0;if(X(o.x)>0||X(o.y)>0){i&&(i.give=!1),xt=!0,At={x:t,y:n},i=S(Ce),e=S(ne);var s=S(qe),u=y(se,Ot(s?n-e.y:t-e.x,S(ie),i,S(ge),S(ce),S(re),s?n-e.y:t-e.x));y(be,S(be)||S(ue)!=S(te)),(o=Mt(s?o.y:o.x||0))&&y(Z,0>o),r&&S(ee)&&(y(qe,X(n-e.y)>X(t-e.x)),e=jt(i,t,n)),a>1&&(S(oe),a=S(Se),r=S(ae),o=-r*a,y(Ee,x.math.envelope(n-e.y,r,a,o,o+a,-1))),!(u%1)&&!k.loops&&jt(i,t,n)}}},wheel:function(e,t,n){t&&(Ct=!0,e=H(W.sqrt(X(t))/2),e=h(e,t>0),t=.0833*S(Ce),jt(t),e&&y(Z,0>e),y(Qe,0),y(se,Ot(e,S(ie),t,S(ge),S(ce),S(re))),n&&n.preventDefault(),n&&(n.give=!1),bt(),f.trigger("up",[n]))},fractionChange:function(e,t,n){return t!==i?b(y(se,t)):(e=1+z(n/S(G)),t=k.rows>1,n=k.orbital,y(ee,!!n&&(n>=e||e>=k.footage-n+2)),t&&(e+=(S(ke)-1)*S(le)),void y(ue,e))},tierChange:function(e,t,n){t===i&&(e=y(ke,L(B(n,1,k.rows))),t=S(le),n=S(ue)%t||t,y(ue,n+e*t-t))},rowChange:function(e,t,n){return t!==i?y(ke,t):void y(Ee,1/(k.rows-1)*(n-1))},frameChange:function(e,t,n){if(t!==i)return b(y(ue,t));this.className=this.className.replace(x.re.frame_klass,q+n);var a=S(le);t=k.rows,e=k.path;var r=n%a||a,o=!!S(we),s=((n-r)/a+1-1)/(t-1),u=L(B(s,1,t)),l=S(ke);o&&u===l?S(Ee):y(Ee,s),r=$((r-1)/(a-1),.9999),s=l*a-a,a=L(B(r,s+1,s+a)),s=X((S(se)||0)-r)<1/(S(le)-1),o&&a===n&&s?S(se):y(se,r);var c=k.footage;k.orbital&&S(qe)&&(n=k.inversed?c+1-n:n,n+=c),s=k.horizontal;var p=k.stitched;a=S(fe);var h=!a.length||k.stitched;u=S(Ie);var m=S(oe);h?(p?(n=y(Me,L(B(r,0,S(Pe)))%p),t=1>=t?0:(m.y+u)*(t-l),n=[g(-n),g(-t)],(t=a.length>1&&a[l-1])&&f.css("backgroundImage").search(e+t)<0&&f.css({backgroundImage:d(e+t)})):(e=n%c-1,e=0>e?c-1:e,n=z((n-.1)/c),n+=t>1?0:S(Z)?0:S(Te),n*=(s?m.y:m.x)+u,e*=(s?m.x:m.y)+u,n=a.length?[0,0]:s?[g(-e),g(-n)]:[g(-n),g(-e)]),f.css({backgroundPosition:n.join(Ge)})):(n=a[n-1],o&&f.attr({src:w(e+n)}))},"fractionChange.indicator":function(e,t,n){if(t===i&&k.indicator){t=S(oe),e=k.indicator;var a=k.orbital;t=a&&S(qe)?t.y:t.x,a=a?k.footage:k.images.length||S(le),a=H(t/a),t-=a,n=L(B(n,0,t)),n=!k.cw||k.stitched?n:t-n,Tt.$x.css(S(qe)?{left:0,top:g(n),bottom:K,width:e,height:a}:{bottom:0,left:g(n),top:K,width:a,height:e})}},"tierChange.indicator":function(e,t,n){if(t===i&&k.rows>1&&k.indicator){var a=S(oe).y;e=k.indicator,t=H(a/k.rows),a-=t,n=L(n*a),Tt.$y.css({left:0,top:n,width:e,height:t})}},"setup.annotations":function(){S(oe);var t=f.parent();e.each(S(R),function(n,i){var a=typeof i.node==pt?e(i.node):i.node||{};a=a.jquery?a:e(u(nt),a),a=a.attr({id:n}).addClass(j);var r=i.image?e(u(st),i.image):e(),o=i.link?e(u("a"),i.link).click(function(){return!1}):e();It(v(n),{display:lt,position:Ve},!0),i.image||i.link&&a.append(o),i.link||i.image&&a.append(r),i.link&&i.image&&a.append(o.append(r)),a.appendTo(t)})},"frameChange.annotations":function(t,n,a){var r=S(oe),o=k.stitched,s=S(Me);S(we)&&n===i&&e.each(S(R),function(t,n){t=e(v(t));var u=n.start||1,l=n.end,c=a-1,d=n.at?"+"==n.at[c]:!1;c=n.at?c:c-u+1;var p=typeof n.x!=ct?n.x:n.x[c],f=typeof n.y!=ct?n.y:n.y[c];n=p!==i&&f!==i&&(n.at?d:c>=0&&(!l||l-u>=c)),o&&(u=p>o-r.x&&s>=0&&s<r.x,p=p<r.x&&s>o-r.x?p+o:p,p=u?p-o:p,p-=s),p={display:n?et:lt,left:g(p),top:g(f)},t.css(p)})},"up.annotations":function(n,i){xt||Ct||(n=e(i.target),i=n.is("a")?n:n.parents("a"),n=i.attr("href"),i=i.attr("target")||"self",n&&(xt="_blank"==i?!!t.open(n):!!(t[i].location.href=n)))},"up.steppable":function(){xt||Ct||f.trigger(S(ne).x-f.offset().left>.5*S(oe).x?"stepRight":"stepLeft")},"stepLeft stepRight":function(){bt()},stepLeft:function(){y(Z,!1),y(se,S(se)-S(G)*S(re))},stepRight:function(){y(Z,!0),y(se,S(se)+S(G)*S(re))},"setup.fu":function(){y(ue,k.frame+(k.row-1)*S(le)),f.trigger("preload")},"wheel.fu":function(){Ct=!1},"clean.fu":function(){f.trigger("teardown")},"loaded.fu":function(){f.trigger("opening")}},pool:{"tick.reel.preload":function(){var e=S(oe),t=Y(kt.$.css(ft)),n=S(fe).length||1,i=L(1/n*S(we)*e.x);kt.$.css({width:t+(i-t)/3+1}),S(we)===n&&t>e.x-1&&(kt.$.fadeOut(300,function(){kt.$.remove()}),C.unbind(Be+l(dt),T.pool[Be+l(dt)]))},"tick.reel":function(e){var t=S(Qe),i=o(je),a=k.monitor;return tt&&(t-=S(J)/i*tt,t=y(Qe,t>.1?t:tt=n=0)),a&&St.text(S(a)),t&&tt++,n&&n++,Mt(0),Et=!0,n&&!t?_(e):S(te)?_(e,bt()):void(S(me)>0||(!k.loops&&k.rebound&&(n||S(se)%1?Nt=0:Nt++,Nt>=1e3*k.rebound/i&&y(Z,!S(Z))),e=S(re)*h(1,S(Z)),t=(S(ye)?X(S(Ne))+t:t)/o(je),y(se,S(se)-t*e)))},"tick.reel.opening":function(){if(S(he)){var e=(k.entry||k.speed)/o(je)*(k.cw?-1:1),t=y(me,S(me)-1);y(se,S(se)+e),t||f.trigger("openingDone")}}}},_=function(e,t){return e.stopImmediatePropagation()||t},tt=0,ut=function(){return n=0},bt=function(){return clearTimeout(s),C.unbind(Be+l(he),T.pool[Be+l(he)]),y(me,0),y(xe,!0),n=-k.timeout*o(je)},xt=!1,Ct=!1,St=e(),kt=function(){var t=k.preloader;return It(Ge+l(P),{position:Ve,left:0,top:S(oe).y-t,height:t,overflow:de,backgroundColor:"#000"}),kt.$=e(u(nt),{"class":P})},Tt=function(t){return It(Ge+l(M)+l(t),{position:Ve,width:0,height:0,overflow:de,backgroundColor:"#000"}),Tt["$"+t]=e(u(nt),{"class":M+Ge+t})},It=function(t,n,i){function a(t){var n=[];return e.each(t,function(e,t){n.push(e.replace(/([A-Z])/g,"-$1").toLowerCase()+":"+g(t)+";")}),"{"+n.join(Ze)+"}"}return i=i?Ze:S(Ae),t=t.replace(/^/,i).replace(Je,Je+i),It.rules.push(t+a(n))&&n},Nt=0,At={x:0,y:0},Mt=function(e){return Dt.push(e)&&Dt.shift()&&e},Pt=function(){return Dt=[0,0]},Dt=Pt(),Ot=k.graph||x.math[k.loops?"hatch":"envelope"],jt=function(e,t,n){var a=y(ie,S(se));y(ae,S(Ee));var r=k.loops;return y(ge,r?0:-a*e),y(ce,r?e:e-a*e),t&&y(ne,{x:t,y:n})||i},Et=!0,Qt=C;try{C[0]!=top.document&&(Qt=C.add(top.document))}catch(qt){}top===self?e():function(t){return e("iframe",Qt.last()).each(function(){try{if(e(this).contents().find(at).html()==e(at).html())return(t=e(this))&&!1}catch(n){}}),t}(),It.rules=[],T.setup()}),T=T||function tt(){var e=+new Date,t=o(je);return t?(C.trigger(Be),x.cost=(+new Date+x.cost-e)/2,T=setTimeout(tt,_(4,1e3/t-x.cost))):T=null}(),e(I)}return"string"==typeof y?1==n.length?(S=f[y],s.trigger("recall",[y,S]),S):(S!==i&&(x.normal[y]&&(S=x.normal[y](S,f)),f[y]!==S&&s.trigger(y+"Change",[i,f[y]=S])),s.trigger("store",[y,S])):void 0},unreel:function(){return this.trigger("teardown")}},re:{image:/^(.*)\.(jpg|jpeg|png|gif)\??.*$/i,ua:[/(msie|opera|firefox|chrome|safari)[ \/:]([\d.]+)/i,/(webkit)\/([\d.]+)/i,/(mozilla)\/([\d.]+)/i],touchy_agent:/iphone|ipod|ipad|android|fennec|rim tablet/i,lazy_agent:/\(iphone|ipod|android|fennec|blackberry/i,frame_klass:/frame-\d+/,sequence:/(^[^#|]*([#]+)[^#|]*)($|[|]([0-9]+)\.\.([0-9]+))($|[|]([0-9]+)$)/},cdn:"http://code.vostrel.cz/",math:{envelope:function(e,t,n,i,a,r){return t+f(i,a,-e*r)/n},hatch:function(e,t,n,i,a,r){return e=(i>e?a:0)+e%a,e=t+-e*r/n,e-z(e)},interpolate:function(e,t,n){return t+e*(n-t)}},preload:{fidelity:function(e,t,n){function i(e,n,i){function a(e){for(;!(e>=1&&l>=e);)e+=1>e?+l:-l;return s[i+e]||(s[i+e]=!!r.push(e))}if(!e.length)return[];var r=[],o=4*n,u=t.frame,l=e.length;n=!0;for(var c=l/o,d=0;o>d;d++)a(u+L(d*c));for(;c>1;)for(d=0,o=r.length,c/=2,n=!n;o>d;d++)a(r[d]+(n?1:-1)*L(c));for(d=0;l>=d;d++)a(d);for(d=0;d<r.length;d++)r[d]=e[r[d]-1];return r}var a=t.orbital,r=a?2:t.rows||1,o=a?t.footage:n(le);n=(t.row-1)*o,a=[].concat(e);var s=new Array(e.length+1);return e=2>r?[]:a.slice(n,n+o),i(e,1,n).concat(i(a,r,0))},linear:function(e){return e}},normal:{fraction:function(e,t){return t[ve].loops?e-z(e):f(0,1,e)},tier:function(e){return f(0,1,e)},row:function(e,t){return L(f(1,t[ve].rows,e))},frame:function(e,t){var n=t[ve];return t=t[le]*(n.orbital?2:n.rows||1),e=L(n.loops?e%t||t:f(1,t,e)),0>e?e+t:e}},sequence:function(e,t){if(e.length<=1)return t.images;var n=[],i=t.orbital,a=e[1],r=e[2],o=+e[4]||1,s=i?2:t.rows||1;for(t=i?t.footage:t.stitched?1:t.frames,s=+(e[5]||s*t)-o,e=+e[7]||1,t=0;s>=t;)n.push(a.replace(r,y(o+t+Ze,r.length,"0"))),t+=e;return n},instances:e(),leader:o,cost:0},C=e(n);n=navigator.userAgent;var S=x.re.ua[0].exec(n)||x.re.ua[1].exec(n)||x.re.ua[2].exec(n),k=+S[2].split(".").slice(0,2).join(".");S="MSIE"==S[1];var T,I=!(S&&8>k),N="reel",A=N+"-overlay",M=N+"-indicator",P=N+"-preloader",D=N+"-cached",O=N+"-monitor",j=N+"-annotation",E=N+"-panning",Q=N+"-loading",q="frame-",W=Math,L=W.round,z=W.floor,H=W.ceil,$=W.min,_=W.max,X=W.abs,Y=parseInt,B=x.math.interpolate,R="annotations",F="area",K="auto",U="backup",Z="backwards",G="bit",J="brake",V="cached",ee="center",te="clicked",ne="clicked_location",ie="clicked_on",ae="clicked_tier",re="cwish",oe="dimensions",se="fraction",ue="frame",le="frames",ce="hi",de="hidden",pe="image",fe="images",he="opening",me=he+"_ticks",ge="lo",ve="options",ye="playing",we="preloaded",be="reeling",xe="reeled",Ce="revolution",Se="revolution_y",ke="row",Te="rows",Ie="spacing",Ne="speed",Ae="stage",Me="stitched_shift",Pe="stitched_travel",De="stopped",Oe="style",je="tempo",Ee="tier",Qe="velocity",qe="vertical",We=l(N),Le=l("pan")+We,ze="mousedown"+We,He="mouseenter"+We,$e="mouseleave"+Le,_e="mousemove"+Le,Xe="mouseup"+Le,Ye="mousewheel"+We,Be="tick"+We,Re="touchcancel"+Le,Fe="touchend"+Le,Ke="touchstart"+We,Ue="touchmove"+Le,Ze="",Ge=" ",Je=",",Ve="absolute",et="block",tt="@CDN@",nt="div",it="hand",at="head",rt="html",ot="id",st="img",ut="jquery."+N,lt="none",ct="object",dt="preload",pt="string",ft="width",ht=I?s("CAAIAIAAAAAAAAAAACH5BAEAAAAALAAAAAAIAAgAAAIHhI+py+1dAAA7"):tt+"blank.gif",mt=d(tt+ut+".cur")+Je+"move",gt=d(tt+ut+"-drag.cur")+Je+"move",vt=d(tt+ut+"-drag-down.cur")+Je+"move",yt=x.touchy=x.re.touchy_agent.test(n);x.lazy=x.re.lazy_agent.test(n);var wt=yt?i:S&&9>k?1:0,bt=e.cleanData;e.cleanData=function(t){bt(e(t).each(function(){e(this).triggerHandler("clean")}))},e.extend(e.fn,x.fn)}}(jQuery,window,document),function(e){function t(t){var n=t||window.event,i=[].slice.call(arguments,1),a=0,r=0,o=0;return t=e.event.fix(n),t.type="mousewheel",n.wheelDelta&&(a=n.wheelDelta/120),n.detail&&(a=-n.detail/3),o=a,void 0!==n.axis&&n.axis===n.HORIZONTAL_AXIS&&(o=0,r=-1*a),void 0!==n.wheelDeltaY&&(o=n.wheelDeltaY/120),void 0!==n.wheelDeltaX&&(r=-1*n.wheelDeltaX/120),i.unshift(t,a,r,o),(e.event.dispatch||e.event.handle).apply(this,i)}var n=["DOMMouseScroll","mousewheel"];if(e.event.fixHooks)for(var i=n.length;i;)e.event.fixHooks[n[--i]]=e.event.mouseHooks;e.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var e=n.length;e;)this.addEventListener(n[--e],t,!1);else this.onmousewheel=t},teardown:function(){if(this.removeEventListener)for(var e=n.length;e;)this.removeEventListener(n[--e],t,!1);else this.onmousewheel=null}},e.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})}(jQuery),jQuery.fn.extend({everyTime:function(e,t,n,i,a){return this.each(function(){jQuery.timer.add(this,e,t,n,i,a)})},oneTime:function(e,t,n){return this.each(function(){jQuery.timer.add(this,e,t,n,1)})},stopTime:function(e,t){return this.each(function(){jQuery.timer.remove(this,e,t)})}}),jQuery.event.special,jQuery.extend({timer:{global:[],guid:1,dataKey:"jQuery.timer",regex:/^([0-9]+(?:\.[0-9]*)?)\s*(.*s)?$/,powers:{ms:1,cs:10,ds:100,s:1e3,das:1e4,hs:1e5,ks:1e6},timeParse:function(e){if(void 0==e||null==e)return null;var t=this.regex.exec(jQuery.trim(e.toString()));if(t[2]){var n=parseFloat(t[1]),i=this.powers[t[2]]||1;return n*i}return e},add:function(e,t,n,i,a,r){var o=0;if(jQuery.isFunction(n)&&(a||(a=i),i=n,n=t),t=jQuery.timer.timeParse(t),!("number"!=typeof t||isNaN(t)||0>=t)){a&&a.constructor!=Number&&(r=!!a,a=0),a=a||0,r=r||!1;var s=jQuery.data(e,this.dataKey)||jQuery.data(e,this.dataKey,{});s[n]||(s[n]={}),i.timerID=i.timerID||this.guid++;var u=function(){r&&this.inProgress||(this.inProgress=!0,(++o>a&&0!==a||i.call(e,o)===!1)&&jQuery.timer.remove(e,n,i),this.inProgress=!1)};u.timerID=i.timerID,s[n][i.timerID]||(s[n][i.timerID]=window.setInterval(u,t)),this.global.push(e)}},remove:function(e,t,n){var i,a=jQuery.data(e,this.dataKey);if(a){if(t){if(a[t]){if(n)n.timerID&&(window.clearInterval(a[t][n.timerID]),delete a[t][n.timerID]);else for(var n in a[t])window.clearInterval(a[t][n]),delete a[t][n];for(i in a[t])break;i||(i=null,delete a[t])}}else for(t in a)this.remove(e,t,n);for(i in a)break;i||jQuery.removeData(e,this.dataKey)}}}}),jQuery(window).bind("unload",function(){jQuery.each(jQuery.timer.global,function(e,t){jQuery.timer.remove(t)})});