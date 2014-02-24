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

	// select

	$(".select").each(function(){
		var select_first = $(this).find("option:first").text();
		$(this).find(".select__value").text(select_first);

		$(this).find("select").change(function(){
			var select = $(this).find("option:selected").text();
			$(this).parent().find(".select__value").text(select);
		});
	});

});

