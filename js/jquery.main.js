$(document).ready(function() {

	"use strict";

	jQuery("#contactForm").validator().on("submit", function (event) {

		"use strict";

		if (event.isDefaultPrevented()) {
			// handle the invalid form...
			formError();
			submitMSG(false, "Please Follow Error Messages and Complete as Required");
		} else {
			// everything looks good!
			event.preventDefault();
			submitForm();
		}
	});

	function submitForm(){
		
		"use strict";

		// Initiate Variables With Form Content
		var name = $("#name").val();
		var email = $("#email").val();
		var message = $("#Essaie").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
			data: "name=" + name + "&email=" + email + "&Essaie=" + message,
			success : function(text){
				if (text == "success"){
					formSuccess();
				} else {
					formError();
					submitMSG(false,text);
				}
			}
		});
	}

	function formSuccess(){
		
		"use strict";

		$("#contactForm")[0].reset();
		submitMSG(true, "Thank you for your submission :)")
	}

	function formError(){
		
		"use strict";

		$("#contactForm").removeClass().addClass('shake animated').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			$(this).removeClass();
		});
	}

	function submitMSG(valid, msg){
		
		"use strict";

		if(valid){
			var msgClasses = "success form-Essaie";
		} else {
			var msgClasses = "error form-Essaie";
		}
		$("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
	}

	initAddClass();
	// Add Class  init
	function initAddClass() {
		"use strict";

		jQuery('.nav-opener').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("nav-active");
		});
		jQuery('#nav .smooth').on( "click", function(){
			if (jQuery("body").hasClass("nav-active")) {
				setTimeout(function() { 
				jQuery("body").removeClass("nav-active");}, 800);
			}
		});
		jQuery('.side-opener, .side-close').on( "click", function(e){
			e.preventDefault();
			jQuery("body").toggleClass("side-active");
		});
	}


	$.scrollIt({
		topOffset: -84,
		scrollTime: 1500,
		easing: 'easeInOutExpo'
	});

	jQuery('.magnify-image').magnify();

	initSlickSlider();
	// Slick Slider init
	function initSlickSlider() {
		"use strict";

		jQuery('.main-slider').slick({
			dots: false,
			speed: 800,
			infinite: true,
			slidesToShow: 1,
			adaptiveHeight: true,
			autoplay: true,
			arrows: true,
			fade: true,
			autoplaySpeed: 4000
		});
		jQuery('.screen-slider').slick({
			dots: true,
			speed: 800,
			infinite: true,
			slidesToShow: 4,
			adaptiveHeight: true,
			autoplay: true,
			arrows: false,
			autoplaySpeed: 4000,
			responsive: [
			    {
			      breakpoint: 1023,
			      settings: {
			        slidesToShow: 3
			      }
			    },
			    {
			      breakpoint: 767,
			      settings: {
			        slidesToShow: 2
			      }
			    }
			    ,
			    {
			      breakpoint: 479,
			      settings: {
			        slidesToShow: 1
			      }
			    }
			]
		});
		jQuery('.line-slider').slick({
			speed: 800,
			dots: false,
			arrows: false,
			infinite: true,
			autoplay: true,
			slidesToShow: 6,
			autoplaySpeed: 2000,
			adaptiveHeight: true,
			responsive: [
				{
					breakpoint: 991,
					settings: {
						slidesToShow: 4
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 3
					}
				},
				{
				breakpoint: 480,
					settings: {
						slidesToShow: 2
					}
				}
			]
		});
	}

	initCounter();
	// Counter init
	function initCounter() {
		"use strict";

		jQuery('.counter').counterUp({
			delay: 10,
			time: 2000
		});
	}

	initLightbox();
	// modal popup init
	function initLightbox() {
		
		"use strict";

		jQuery('a.lightbox, a[rel*="lightbox"]').fancybox({
			padding: 0
		});
		jQuery("#newsletter-hiddenlink").fancybox().trigger('click');
	}

    initStickyHeader();
	// sticky header init
	function initStickyHeader() {

		"use strict";

		var win = jQuery(window),
			stickyClass = 'sticky';

		jQuery('#header').each(function() {
			var header = jQuery(this);
			var headerOffset = header.offset().top || 0;
			var flag = true;


			jQuery(this).css('height' , jQuery(this).innerHeight());

			function scrollHandler() {
				if (win.scrollTop() > headerOffset) {
					if (flag){
						flag = false;
						header.addClass(stickyClass);
					}
				} else {
					if (!flag) {
						flag = true;
						header.removeClass(stickyClass);
					}
				}
			}

			scrollHandler();
			win.on('scroll resize orientationchange', scrollHandler);
		});
	}

	initbackTop();
	// backtop init
    function initbackTop() {
        "use strict";

        var jQuerybackToTop = jQuery("#back-top");
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > 100) {
                jQuerybackToTop.addClass('active');
            } else {
                jQuerybackToTop.removeClass('active');
            }
        });
        jQuerybackToTop.on('click', function(e) {
            jQuery("html, body").animate({scrollTop: 0}, 900);
        });
    }

	initStyleChanger();
	// style changer
	function initStyleChanger() {
		"use strict";
		
		var element = jQuery('#style-changer');

		if(element) {
			$.ajax({
				url: element.attr('data-src'),
				type: 'get',
				dataType: 'text',
				success: function(data) {
					var newContent = jQuery('<div>', {
						html: data
					});

					newContent.appendTo(element);
				}
			});
		}
	}


	if (Modernizr.csstransforms3d) {
      window.sr = ScrollReveal();

      sr.reveal('.reveal-bottom-20', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-top-20', {
        origin: 'top',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-left-10', {
        origin: 'left',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-left-20', {
        origin: 'left',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-right-10', {
        origin: 'right',
        distance: '10px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-right-20', {
        origin: 'right',
        distance: '20px',
        duration: 800,
        delay: 400,
        opacity: 1,
        scale: 0,
        easing: 'linear',
        reset: true
      });

      sr.reveal('.reveal-bottom-opacity', {
        origin: 'bottom',
        distance: '20px',
        duration: 800,
        delay: 0,
        opacity: 0,
        scale: 0,
        easing: 'linear',
        mobile: false
      });

    }

});

 
jQuery( window ).on( "load" , function() {
	"use strict";

	new WOW().init();

	jQuery( "#loader" ).delay( 600 ).fadeOut( 300 );
	
	initFixedScrollBlock();
    // initialize fixed blocks on scroll
    function initFixedScrollBlock() {
        "use strict";

        jQuery('.main-holder').fixedScrollBlock({
			slideBlock: '.img2',
			positionType: 'fixed',
			extraTop: 110,
			extraBottom: 60
		});
    }

}); 