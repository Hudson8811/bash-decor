$(document).ready(function () {
	$('.articles__up').click(function () {
		$('body, html').animate({
			scrollTop: 0
		}, 1000);
	});

	$('.pagination a').click(function () {
		$(this).addClass('pagi-active');
		$(this).prevAll('a').addClass('pagi-active');
		$(this).nextAll('a').removeClass('pagi-active');
	});
});