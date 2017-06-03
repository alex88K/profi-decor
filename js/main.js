$(function() {
/*--Main nav-----------------------------------*/ 

	$('.navbar-toggle').jPushMenu({ closeOnClickLink: false });
	$('.dropdown-toggle').dropdown();

/*--------------------------------------------------*/ 
	
	var promo_sl = $('.promo-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 500,
		fluidSpeed: 500,
		navSpeed: 500
	});

	$('.promo-nav .prev-slide').on('click', function() {
		promo_sl.trigger('prev.owl.carousel');
	});

	$('.promo-nav .next-slide').on('click', function() {
		promo_sl.trigger('next.owl.carousel');
	});


	var portfolio_sl = $('.portfolio-slider .owl-carousel').owlCarousel({
		responsive: {
			0: { items: 1 },
			480: { items: 2 },
			768: { items: 3 },
			980: { items: 5 }
		},
		margin: 18,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 500,
		fluidSpeed: 500,
		navSpeed: 500
	});

	$('.portfolio-nav .prev-slide').on('click', function() {
		portfolio_sl.trigger('prev.owl.carousel');
	});

	$('.portfolio-nav .next-slide').on('click', function() {
		portfolio_sl.trigger('next.owl.carousel');
	});

	var article_sl = $('.article-slider .owl-carousel').owlCarousel({
		items: 1,
		nav: false,
		dots: false,
		loop: true,
		smartSpeed: 500,
		fluidSpeed: 500,
		navSpeed: 500
	});

	$('.article-nav .prev-slide').on('click', function() {
		article_sl.trigger('prev.owl.carousel');
	});

	$('.article-nav .next-slide').on('click', function() {
		article_sl.trigger('next.owl.carousel');
	});

/*--Animation-------------------*/

	window.sr = ScrollReveal();
	sr.reveal('.reveal-anim', { duration: 800 });
	sr.reveal('.reveal-anim', { afterReveal: function(domEl) { 
			$(domEl).css({ 
				'-webkit-transform': 'none', 
				'transform': 'none'
			});
		} });
	sr.reveal('.reveal-left', { duration: 800, origin: 'left', distance: '100px' });
	sr.reveal('.reveal-right', { duration: 800, origin: 'right', distance: '100px' });
});

/*!
 * jPushMenu.js
 * 1.1.1
 * @author: takien
 * http://takien.com
 * Original version (pure JS) is created by Mary Lou http://tympanus.net/
 */
(function($) {
	$.fn.jPushMenu = function(customOptions) {
		var o = $.extend({}, $.fn.jPushMenu.defaultOptions, customOptions);
		/* add class to the body.*/
		
		$('body').addClass(o.bodyClass);
		$(this).addClass('jPushMenuBtn');
		$(this).click(function() {
			var target         = '',
			push_direction     = '';
			
			if($(this).is('.'+o.showLeftClass)) {
				target         = '.cbp-spmenu-left';
				push_direction = 'toright';
			}
			else if($(this).is('.'+o.showRightClass)) {
				target         = '.cbp-spmenu-right';
				push_direction = 'toleft';
			}
			else if($(this).is('.'+o.showTopClass)) {
				target         = '.cbp-spmenu-top';
			}
			else if($(this).is('.'+o.showBottomClass)) {
				target         = '.cbp-spmenu-bottom';
			}
			
			$(this).toggleClass(o.activeClass);
			$(target).toggleClass(o.menuOpenClass);
			
			if($(this).is('.'+o.pushBodyClass)) {
				$('body').toggleClass( 'cbp-spmenu-push-'+push_direction );
			}
			
			/* disable all other button*/
			$('.jPushMenuBtn').not($(this)).toggleClass('disabled');
			
			return false;
		});
		var jPushMenu = {
			close: function (o) {
				$('.jPushMenuBtn,body,.cbp-spmenu').removeClass('disabled active cbp-spmenu-open cbp-spmenu-push-toleft cbp-spmenu-push-toright');
			}
		}

    if(o.closeOnClickOutside) {
			$(document).click(function() {
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$(document).on('click touchstart', function(){
				jPushMenu.close();
				$('.jPushMenuBtn').removeClass('menu-active');
			});

			$('.cbp-spmenu,.toggle-menu').click(function(e){
				e.stopPropagation();
			});

			$('.cbp-spmenu,.toggle-menu').on('click touchstart', function(e){
				e.stopPropagation();
			});
		}

        // On Click Link
        if(o.closeOnClickLink) {
            $('.cbp-spmenu a').on('click',function(){
                jPushMenu.close();
            });
        }
	};
 
   /* in case you want to customize class name,
   *  do not directly edit here, use function parameter when call jPushMenu.
   */
	$.fn.jPushMenu.defaultOptions = {
		bodyClass       : 'cbp-spmenu-push',
		activeClass     : 'menu-active',
		showLeftClass   : 'menu-left',
		showRightClass  : 'menu-right',
		showTopClass    : 'menu-top',
		showBottomClass : 'menu-bottom',
		menuOpenClass   : 'cbp-spmenu-open',
		pushBodyClass   : 'push-body',
		closeOnClickOutside: true,
		closeOnClickInside: true,
		closeOnClickLink: true
	};
})(jQuery);