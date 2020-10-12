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


