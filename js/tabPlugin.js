(function($) {
    'use strict';

    // Tilføjer plugin til fn så det kan bruges normalt
    $.fn.tabPlugin = function (options) {

        // Options
        // Sætter default options, hvis der ikke sendes noget med
        const defaultOptions = {
            colors:{
                bgcolor: 'blue',
                txtcolor: 'red'
            },
            text:{
                textsize: '15px',
                hover: 'pointer',
                txtbgcolor: 'white',
                bgheight: '50px',
            },
            animations:{
                fadein: 'slow',
            }

        };




        const opts = $.extend(true, {}, defaultOptions, options);

        // Går gennem alle elementer der matcher selector = idx=index, el=element
        return this.each(function (idx, el) {
            $(el).css('height', opts.text.bgheight);

            $(el).css('background-color', opts.colors.bgcolor);

            $(el).find('li a').css('color', opts.colors.txtcolor);

            $(el).find('li a').css('font-size', opts.text.textsize);

            $(el).find('li a').css('cursor', opts.text.hover);

            $(el).find('li a').css('background-color', opts.text.txtbgcolor);

            $(el).find('li a:not(:first)').addClass('inactive');

            $('.container').hide();

            $('.container:first').show();

            $(el).find('li a').click(function(){
                let t = $(this).attr('href');
                $(el).find('li a').addClass('inactive');
                $(this).removeClass('inactive');
                $('.container').hide();
                $(t).fadeIn(opts.animations.fadein);
                return false;
            });

            if($(this).hasClass('inactive')){
                $(el).find('li a').addClass('inactive');
                $(this).removeClass('inactive');
                $('.container').hide();
                $(t).fadeIn(opts.animations.fadein);
            }


        });
    };

})(jQuery);