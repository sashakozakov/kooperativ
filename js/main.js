;
(function ($) {
	$(document).ready(function () {
		var $slider = $('.home_slider');
		// var $slider = $('.slider-image');
		var $testimonials = $('.testimonial-slider');

		$slider.slick({
			dots: true,
			infinite: true,
			speed: 500,
			autoplay: true,
			autoplaySpeed: 5000,
			fade: true,
			cssEase: 'linear',
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			nextArrow: '<i class="fa fa-chevron-right next" aria-hidden="true"></i>',
			prevArrow: '<i class="fa fa-chevron-left prev" aria-hidden="true"></i>',
			slide: '.slide'
		});

		$('.home_slider').find('.slick-dots').appendTo('.home_slider .caption .custom_dots');


		$('.header .hamburher').click(function() {
			$(this).toggleClass('opnd');
			$('.header .menu').toggleClass('menu_opened');
		});

		$('.menu .menu-item-has-children').click(function(e) {
				if (e.target == this) {
					$(this).parent().find('.sub-menu').slideToggle("slow");
					$(this).toggleClass('sub-opened');
				}
		});



	});
}(jQuery));
