jQuery('window').ready(function($){
	init_menu();
	$('#menu-button').click(function(e){
		var menu = $('#nav-menu');
		menu.slideToggle();
		$('#menu-button').toggleClass('active');
		return false;
	});
	/*
	 * Window Resize
	 */
	$(window).smartresize(function(){
		//All resize functions here
		init_menu();
	});
	/*
	 * End Window Resize
	 */
});