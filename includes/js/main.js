$(document).ready(function() {
	console.log('jQuery is loaded and ready. May your fingers be swift and accurate.');
	
	$(".bxslider").bxSlider({
    auto: true,
    pagerCustom: '#bx-pager'
	});
	
	$('.zoom').zoom();
	
	var maxHeight = -1;
	$('.categoriesList.categoryPage li, .categoriesList li').each(function() {
	 maxHeight = maxHeight > $(this).height() ? maxHeight : $(this).height();
	});
	
	$('.categoriesList.categoryPage li, .categoriesList li').each(function() {
	 // $(this).css("min-height", maxHeight);
	});
	
});