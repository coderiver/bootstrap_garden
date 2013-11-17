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

	// scrollable
	if ($('.building__gallery-wrap').exists()){
		$('.building__gallery-wrap .caro').scrollable({
			next:'.slide__arrow-next',
			prev:'.slide__arrow-prev',
			items: '.slides'
		});
	};

	$(".building__gallery-wrap .slides a").click(function() {
		$(".building__media img").attr('src', $(this).attr('href'));
		$(this).parent().addClass('active').siblings().removeClass('active');
		return false;
	});



	//select
	function select() {
		var el = $('.js-select');
		var el_title = el.children("span");
		var item = el.find('li');
		var input = el.find(".js-select-input");
		var el_text = el.find(".js-select-text");
		var checkbox = el.find(".checkbox");
		var list = el.find('.js-select-drop');
		el_title.click(function(event){
			if ($(this).parent().hasClass('is-open')) {
				$(this).parent().removeClass('is-open');
			}
			else {
				el.removeClass('is-open');
				$(this).parent().addClass('is-open');
			};
			event.stopPropagation();
		});
		checkbox.click(function(event){
			event.stopPropagation();
		});
		item.bind("click",function(){
			$(this).toggleClass("is-selected");
			var text = $(this).text();
			var id = $(this).attr("data-id");
			$(this).parents(".js-select").find(".js-select-text").text(text);
			$(this).parents(".js-select").find(".js-select-input").val(id);
	 });
	};
	select();


});

