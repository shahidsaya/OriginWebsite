$(document).ready(function(e) {

	$('.apos-rich-text a[href^="#"]').click(function(e) {
		e.preventDefault();
		const dest = $(this).attr('href');
		$('html, body').animate({scrollTop: $(dest).offset().top - 200}, 'fast');
	});

});
