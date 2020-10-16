$(document).ready(function () {
	// Counter
	$(window).scroll(function () {
		var pos = $('.achievements__counter').offset().top = window.innerHeight;

		if ($(window).scrollTop() > pos) {
			$('.achievements__digit').each(function () {
				var that = $(this),
						countTo = that.attr('data-count');

				$({countNum: that.text()}).animate(
					{
						countNum: countTo
					},
					{
						duration: 1000,
						easing: 'swing',
						step: function() {
							that.text(Math.floor(this.countNum));
						},
						complete: function() {
							that.text(this.countNum);
						}
					}
				);
			});
		}
	});

	// Slider advantages
	if (window.matchMedia('(max-width: 960px)').matches) {
		$('.advantages__flex').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg><use xlink:href="./svg/sprite.svg#arrow"></use></svg></button>',
			nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg><use xlink:href="./svg/sprite.svg#arrow"></use></svg></button>',
			dots: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	// Slider quality
	if (window.matchMedia('(max-width: 1600px)').matches) {
		$('.quality__flex').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg><use xlink:href="./svg/sprite.svg#arrow"></use></svg></button>',
			nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg><use xlink:href="./svg/sprite.svg#arrow"></use></svg></button>',
			dots: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 960,
					settings: {
						slidesToShow: 2
					}
				},
				{
					breakpoint: 640,
					settings: {
						slidesToShow: 1
					}
				}
			]
		});
	}

	// Product
	$('.product-item').hover(
		function () {
			var prodBtn = $(this).find('.product-item__button'),
				prodContent = $(this).find('.product-item__content'),
				prodText = $(this).find('.product-item__description');

			prodContent.addClass('product-item__content--expand');
			prodBtn.removeClass('button--inactive');
			prodText.stop(true, true).slideDown(400).addClass('product-item__description--visible');
		},

		function () {
			var prodBtn = $(this).find('.product-item__button'),
				prodContent = $(this).find('.product-item__content'),
				prodText = $(this).find('.product-item__description');

			prodText.removeClass('product-item__description--visible');
			prodContent.removeClass('product-item__content--expand');
			prodBtn.addClass('button--inactive');
			prodText.stop(true, true).slideUp(400);
		}
	);
});


