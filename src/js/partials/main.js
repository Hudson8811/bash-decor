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

	$('[href ^= "#popup-"]').fancybox({
		touch: false,
		scrolling: 'no',
		beforeShow: function(){
			$("body").css({'overflow-y':'hidden'});
		},
		afterClose: function(){
			$("body").css({'overflow-y':'visible'});
		}
	});

	// Gallery popup
	$('a[href="#popup-gallery"]').click(function () {
		if ($(this).hasClass('freshpr-item-bottom__more')) {
			$('.js-gallery-name').text($(this).prev().text());
		} else {
			$('.js-gallery-name').text($(this).siblings('.product-item__title').text());
		}
	});

	$('.popup__thumbs-item').click(function () {
		if (!$(this).hasClass('popup__gallery--active')) {
			var content = $(this).parent().next().find('img'),
					that = $(this);

			$('.popup__thumbs-item').removeClass('popup__gallery--active');
			that.addClass('popup__gallery--active');

			content.fadeOut(150);
			setTimeout(function () {
				content.attr('src', that.find('img').attr('src'));
				content.fadeIn(150);
			}, 150);
		}
	});

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

	// Timer
	(function ($) {
		var minutes = 60;

		$.fn.countdown = function (prop) {
			var options = $.extend({
				callback: function () {},
				timestamp: 0
			}, prop);

			var left, m, s;

			(function tick() {
				// time left
				left = Math.floor((options.timestamp - (new Date())) / 1000);

				if (left < 0) {
					left = 0;
				}

				// minutes left
				m = Math.floor(left / minutes);
				left -= m * minutes;

				// seconds left
				s = left;

				options.callback(m, s);

				setTimeout(tick, 1000);
			})();

			return this;
		};
	})(jQuery);

	var countdown1 = $('[data-time-out]');
	countdown1.each(function(){
		var thisCD = $(this),
				ts = new Date(thisCD.attr('data-time-out'));
		if ((new Date()) > ts) {
			ts = (new Date()).getTime() + 30 * 60 * 1000;
		}

		thisCD.countdown({
			timestamp: ts,
			callback: function (minutes, seconds) {
				thisCD.find('.js-stock-countdown-m').html(minutes.toString().padStart(2,0));
				thisCD.find('.js-stock-countdown-s').html(seconds.toString().padStart(2,0));
			}
		});
	});

	// Form socials checked
	$('.form__socials label').click(function () {
		$(this).find('input').prop('checked')
			? $(this).addClass('form__socials-item--checked')
			: $(this).removeClass('form__socials-item--checked');
	});

	// Counter
	$(window).scroll(function () {
		var pos = $('.achievements__counter').offset.top = window.innerHeight;

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

	// Slider choice
	if (window.matchMedia('(min-width: 641px) and (max-width: 960px)').matches) {
		$('.choice__flex').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
			nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
			dots: false,
			infinite: false
		});
	}

	// Slider advantages
	if (window.matchMedia('(max-width: 960px)').matches) {
		$('.advantages__flex').slick({
			slidesToShow: 2,
			slidesToScroll: 1,
			prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
			nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
			dots: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 640,
					settings: 'unslick'
				}
			]
		});
	}

	// Slider quality
	if (window.matchMedia('(max-width: 1600px)').matches) {
		$('.quality__flex').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
			nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
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
					settings: 'unslick'
				}
			]
		});
	}

	// Slider team
	$('.team__slider').slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		prevArrow: '<button class="slider-arrow slider-arrow--prev" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
		nextArrow: '<button class="slider-arrow slider-arrow--next" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 240.823 240.823" id="arrow"><path d="M57.633 129.007L165.93 237.268c4.752 4.74 12.451 4.74 17.215 0 4.752-4.74 4.752-12.439 0-17.179l-99.707-99.671 99.695-99.671c4.752-4.74 4.752-12.439 0-17.191-4.752-4.74-12.463-4.74-17.215 0L57.621 111.816c-4.679 4.691-4.679 12.511.012 17.191z"/></svg></button>',
		dots: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 960,
				settings: {
					slidesToShow: 1
				}
			}
		]
	});

	// Product
	/*$('.products__flex .product-item').hover(
		function () {
			var prodBtn = $(this).find('.btn-v2'),
				prodContent = $(this).find('.product-item__content'),
				prodText = $(this).find('.product-item__description');

			prodContent.addClass('product-item__content--expand');
			prodBtn.removeClass('btn-v2--gray');
			prodText.stop(true, true).slideDown(400).addClass('product-item__description--visible');
		},

		function () {
			var prodBtn = $(this).find('.btn-v2'),
				prodContent = $(this).find('.product-item__content'),
				prodText = $(this).find('.product-item__description');

			prodText.removeClass('product-item__description--visible');
			prodContent.removeClass('product-item__content--expand');
			prodBtn.addClass('btn-v2--gray');
			prodText.stop(true, true).slideUp(400);
		}
	);*/

	$('.products__flex .product-item').each(function () {
		showDesc($(this),
			$(this).find('.btn-v2'),
			$(this).find('.product-item__description'),
			$(this).find('.product-item__content'));
	});

	$('.team__slide').each(function () {
		showDesc($(this),
			$(this).find('.btn-v2'),
			$(this).find('.team__flex'));
	});


	function showDesc(elem, btn, text, textWrap) {
		elem.hover(
			function () {
				if (textWrap)
					textWrap.addClass('product-item__content--expand');
				btn.removeClass('btn-v2--gray');
				text.stop(true, true).slideDown(400).addClass('product-item__description--visible');
			},

			function () {
				text.removeClass('product-item__description--visible');
				if (textWrap)
					textWrap.removeClass('product-item__content--expand');
				btn.addClass('btn-v2--gray');
				text.stop(true, true).slideUp(400);
			}
		);
	}


	$('.custom-finp input[type=file]').on('change', function() {
		var items=$(this).closest('.custom-finp').find('.custom-finp__items');
		var str='';
		for (var i = 0; i < this.files.length; i++) {
			str+='<div class="custom-finp__item">'+this.files[i].name+'</div>';
		}
		items.html(str);
	});



	$('.js-reviews-control').click(function(){
		$(this).addClass('btn-v2--orange').removeClass('btn-v2--gray')
		.siblings('.btn-v2--orange').removeClass('btn-v2--orange').addClass('btn-v2--gray')

		$(this).closest('.reviews-container').find('.reviews-tab--active').removeClass('reviews-tab--active').siblings().addClass('reviews-tab--active');

	});



	if($('.js-quiz-slider').length>0){
		$('.js-quiz-slider').on('init', function(slick){
			var max=$(this).find('.quiz-slide').length - 1;
			$(this).siblings('.quiz-steps').find('.quiz-steps__text').attr('data-max',max);
			$(this).siblings('.quiz-steps').find('.quiz-steps__all').html(max);
			$(this).siblings('.quiz-steps').find('.quiz-steps__progress_finished').css('width',(1/max*100)+'%');

		});
		$('.js-quiz-slider').slick({
			infinite: false,
			//initialSlide: 1,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			touchMove: false,
			swipe: false,
			accessibility: false,
			draggable: false,

		});
		$('.js-quiz-slider').on('beforeChange', function(event, slick,currentSlide, nextSlide){
			var max = parseInt($(this).siblings('.quiz-steps').find('.quiz-steps__text').attr('data-max'));
			console.log(max);
			if(nextSlide+1<=max){
				$(this).siblings('.quiz-steps').find('.quiz-steps__text').html('Шаг <span class="quiz-steps__current">'+(nextSlide+1)+'</span> из <span class="quiz-steps__all">'+max+'</span>');
			}
			else{
				$(this).siblings('.quiz-steps').find('.quiz-steps__text').html('Выбор подарка');
			}


			var width=((nextSlide+1)/($(this).find('.quiz-slide').length)*100);
			width=width>100?100:width;
			$(this).siblings('.quiz-steps').find('.quiz-steps__progress_finished').css('width',width+'%');


		});
		$('.js-quiz-next-slide').click(function(){
			var target=$(this).attr('data-target');
			if(typeof(target)!=='undefined' && target!==''){
				$('#'+target).slick('slickNext');
			}
			else{
				$(this).closest('.js-quiz-slider').slick('slickNext');
			}

			if ($(this).closest('.slick-slide').is(':last-of-type')) {
				$('.popup--quiz').addClass('slide-down');
			}
		});
		$('.js-quiz-prev-slide').click(function(){
			var target=$(this).attr('data-target');
			if(typeof(target)!=='undefined' && target!==''){
				$('#'+target).slick('slickPrev');
			}
			else{
				$(this).closest('.js-quiz-slider').slick('slickPrev');
			}
		});
	}


	$('.js-custom-inp-numer .custom-inp-numer__more').click(function(){
		var inp=$(this).closest('.js-custom-inp-numer').find('.custom-inp-numer__inp');
		inp.val(parseInt(inp.val())+1);
	});

	$('.js-custom-inp-numer .custom-inp-numer__less').click(function(){
		var inp=$(this).closest('.js-custom-inp-numer').find('.custom-inp-numer__inp');
		inp.val(parseInt(inp.val())-1>0?parseInt(inp.val())-1:0);
	});

	$('.js-num-place .quiz-flex-3__item').change(function () {
		var place = $(this).find('input'),
				numBlock = $('.quiz-inp-size[data-place="' + place.attr('id') + '"]');

		if (place.prop('checked')) {
			numBlock.css('display', 'flex');
		} else {
			numBlock.hide();
		}
	})


});


