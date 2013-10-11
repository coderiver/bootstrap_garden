$(document).ready(function() {

	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	// scrollable
	if ($('.building__gallery-wrap').exists()){
		$('.building__gallery-wrap .caro').scrollable({
			next:'.slide__arrow-next',
			prev:'.slide__arrow-prev'
		});
	};

	$(".building__gallery-wrap .slides a").click(function() {
		$(".building__media img").attr('src', $(this).attr('href'));
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});



});

