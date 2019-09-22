(function($) {
	'use strict';

	// Tilføjer plugin til fn så det kan bruges normalt
	$.fn.pluginSkabelon = function (options) {

		// Options
		// Sætter default options, hvis der ikke sendes noget med
		let defaultOptions = {
		
		};
		
		let opts = $.extend(true, {}, defaultOptions, options);

		// Går gennem alle elementer der matcher selector = idx=index, el=element
		return this.each(function (idx, el) {
			
		});
	};

})(jQuery);