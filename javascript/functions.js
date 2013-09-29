
	/*
	 * Nav Functions
	*/
	function menu_check() {
		//Current Window Width
		var width = get_em($(window).width());
		//Base EM to break at
		var breakpoint = 50;
		if(width <= breakpoint) {
			return true;
		}
		if(width > breakpoint) {
			return false;
		}
	}
	function init_menu() {
		//Menu Object
		var menu = $('#nav-menu');
		//Menu Trigger Object
		var menu_trigger = $('.menu-button');
		if(menu_check()) {
			menu_trigger.css('display','block');
			menu.css('display','none');
		}
		else {
			menu_trigger.css('display','none');
			menu.css('display','block');
		}
	}
	/*
	 * End Nav Functions
	*/

	/*
	 * General Functions
	*/
	function get_em(calculate_on) {
		//Base Font Size for EM Calculation
		var base_font = parseInt($('html').css('font-size'));
		return calculate_on / base_font;
	}
	/*
	 * End General Functions
	*/


/*
 * Smart Resize Function 
 * http://www.paulirish.com/2009/throttled-smartresize-jquery-event-handler/
 */
(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          }

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  };
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');
/*
 * End Smart Resize
 */