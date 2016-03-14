// JavaScript Document


// screen loader
	$(window).load(function() {
		// $('body').css('overflow', 'hidden');
		$('.screen-loader').fadeOut('slow');
	});


// preload
$(document).ready(function() {
	$('#preload').css({display: 'block'});
});


// preload function
$(window).load(preLoader);
function preLoader() {
	setTimeout(function() {

		$('#preload').delay(250).fadeOut(1500);

	});
};


// preloader
  paceOptions = {
    ajax: false,     // disabled
    document: false, // disabled
    eventLag: false, // disabled
    elements: {
    selectors: ['body']
    }
  };


// Cycle2
$(document).ready( function(){
	
	$('#slider').cycle({
		fx: 'fade',
		timeout: 4000,
		speed: 2000,
		slides: '.slide'
	});
	
});


// fire home
	$("#fire-home").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});
	
	
// fire about
	$("#fire-about").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#about").fadeIn("slow");
			$(".current").removeClass("current");
			$("#about").addClass("current");
		});
	});
	
	
// fire services
	$("#fire-services").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#services").fadeIn("slow");
			$(".current").removeClass("current");
			$("#services").addClass("current");
		});
	});
	
	
// fire contact
	$("#fire-contact").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#contact").fadeIn("slow");
			$(".current").removeClass("current");
			$("#contact").addClass("current");
		});
	});
	
	
// fire home mobile
	$("#fire-home-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});
	
	
// fire about mobile
	$("#fire-about-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#about").fadeIn("slow");
			$(".current").removeClass("current");
			$("#about").addClass("current");
		});
	});
	
	
// fire services mobile
	$("#fire-services-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#services").fadeIn("slow");
			$(".current").removeClass("current");
			$("#services").addClass("current");
		});
	});
	
	
// fire contact mobile
	$("#fire-contact-mobile").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$("#contact").fadeIn("slow");
			$(".current").removeClass("current");
			$("#contact").addClass("current");
		});
	});
	

// fire closer
	$("#fire-about-closer, #fire-services-closer, #fire-contact-closer").click(function(e) {
		e.preventDefault();
		$(".current").fadeOut("slow", function() {
			$(".upper-page").fadeIn("slow");      
			$(".current").removeClass("current");
			$(".upper-page").addClass("current");
		});
	});


// menu active state
$('a.menu-state').click(function() {
    $('a.menu-state').removeClass("active");
    $(this).addClass("active");
});


// niceScroll
$(document).ready(function () {
    $("body").niceScroll({
	   cursorcolor: "#fff",				 
	   cursorwidth: "5px",				 
	   cursorborder: "1px solid #fff",
	   cursorborderradius: "0px",
	   zindex: "9999",
	   scrollspeed: "60",
	   mousescrollstep: "40",
	   // background: "rgba(255, 255, 255, 0.1)"
    });
});


// niceScroll || scrollbars resize
$("body").getNiceScroll().resize();


// twitter ticker
      jQuery(function($){
        $("#ticker").tweet({
          username: "enihilo",
          page: 1,
          avatar_size: 0,
          count: 20,
          loading_text: ""
        }).bind("loaded", function() {
          var ul = $(this).find(".tweet_list");
          var ticker = function() {
            setTimeout(function() {
              ul.find('li:first').animate( {marginTop: '-75px'}, 500, function() {
                $(this).detach().appendTo(ul).removeAttr('style');
              });
              ticker();
            }, 8000);
          };
          ticker();
        });
      });
	  
	  
// twitter ticker settings
$(document).ready(function(){
        $(this).find(".tweet_list").list_ticker({
                speed: 8000,
                effect: 'fade' // fade, slide
        })             
})
			

// mobile-detect
	var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };