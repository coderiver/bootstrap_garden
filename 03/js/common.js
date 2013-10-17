$(document).ready(function() {

	// function element exists
	jQuery.fn.exists = function() {
		return $(this).length;
	}

	// slider pager

	$('.carousel').carousel();

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

