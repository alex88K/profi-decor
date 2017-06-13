$(function() {
/*--Main nav-----------------------------------*/ 

	$('#navbar > .nav').smartmenus({
		subIndicatorsText: '',
		subMenusSubOffsetX: 1,
    	subMenusSubOffsetY: 0
	});

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
		navSpeed: 500,
		center: true
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

/*--Catalog page------------------------*/ 

	if ( $('.catalog-item').length > 0 ) {
		var href = window.location.href;
		var subStart = href.indexOf('#catalog');
		var activeSubCategory = '';
		var catalogLink = $('.catalog-link');

		console.log( window.location.href );
		window.location.hash = "";
		
		if( subStart !== -1 ) {
			$.each(catalogLink, function(index, value) {
				activeSubCategory = href.slice(subStart);

				if( $(this).attr('href') === activeSubCategory ) {
					catalogLink.eq(index).addClass('active').attr('aria-expanded', 'true');
					$('.tab-content').find(activeSubCategory).addClass('in');

				}
			});
		}
	}

	$('.tab-content .collapse').on('show.bs.collapse', function(){
		$('.collapse').collapse('hide');
		$('.catalog-link').removeClass('active');
		$('.catalog-link[href=#' + $(this).attr('id') + ']').addClass('active');
	});

	$('.tab-content .collapse').on('hide.bs.collapse', function(){
		$('.catalog-link[href=#' + $(this).attr('id') + ']').removeClass('active');
	});

/*--AJAX Form submit--------------------*/

	$(document).on('af_complete', function(event,response) {
		var form_id = response.form.parents('.modal').attr('id');
		if (response.success) {
			$('#'+form_id).modal('hide');
			$('#modal-mes').modal('show');
		}
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

/* SVG fix for Firefox */ 
(function(document, window) {
	"use strict";

	document.addEventListener("DOMContentLoaded", function() {
		var baseUrl = window.location.href
			.replace(window.location.hash, "");

		if( baseUrl.indexOf("#") !== -1 ) { baseUrl = baseUrl.replace("#", ""); }
			
		[].slice.call(document.querySelectorAll("use[*|href]"))
			.filter(function(element) {
				return (element.getAttribute("xlink:href").indexOf("#") === 0);
			})
			.forEach(function(element) {
				element.setAttribute("xlink:href", baseUrl + element.getAttribute("xlink:href"));
			});
	}, false);
}(document, window));