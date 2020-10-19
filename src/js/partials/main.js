$(document).ready(function () {
	$("input[name='phone']").mask(" +7 (000) 000-00-00");

	anchorScroll($('.anchor'));

	function anchorScroll(e) {
		e.click(function () {
			link = $(this).attr('href');
			to = $(link).offset().top;
			$('body, html').animate({
				scrollTop: to
			}, 800);
		});
	}
	
	// Open/close mobile menu
	var header = $('.header'),
			menu = $('.header-menu'),
			burger = $('.header__burger');

	burger.click(function () {
		header.addClass('header--open-menu header--visible');
		$('.overlay').fadeIn(200);
	});

	$(document).click(function (e) {
		if (menu.has(e.target).length === 0 &&
					!menu.is(e.target) &&
					burger.has(e.target).length === 0 &&
					!burger.is(e.target) &&
					header.hasClass('header--open-menu')) {
			header.removeClass('header--open-menu');
			$('.overlay').fadeOut(200);

			setTimeout(function () {
				header.removeClass('header--visible');
			}, 300)
		}
	});

	// Change day after 00:00
	var months = [
		'января',
		'февраля',
		'марта',
		'апреля',
		'мая',
		'июня',
		'июля',
		'августа',
		'сентября',
		'октября',
		'ноября',
		'декабря'
	];

	var curDate = new Date(),
			newDate = new Date(curDate.getFullYear(), curDate.getMonth(), curDate.getDate() + 31);

	$('.bonus-day').text(newDate.getDate());
	$('.bonus-month').text(months[newDate.getMonth()]);

	// Form socials checked
	$('.form__socials label').click(function () {
		$(this).find('input').prop('checked')
			? $(this).addClass('form__socials-item--checked')
			: $(this).removeClass('form__socials-item--checked');
	});

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

	// Slider team
	$('.team__slider').slick({
		slidesToShow: 2,
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


