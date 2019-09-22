(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.tabPlugin = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            colors:{
                bgcolor: 'red',
                txtcolor: 'white'
            },
            text:{
                textsize: '50px',
            },
            animations:{
                texteffect: '0',
                height: '200px',
            }

        };

        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {

        });
    };

})(jQuery);