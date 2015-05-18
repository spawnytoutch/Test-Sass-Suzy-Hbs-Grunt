(function($) {

    $(document).ready(function() {

        $('#main-nav > ul').prepend('<li class=\"mobile\"><a href=\"#\"><span>&nbsp; <i class=\"burger\">&#9776;</i></span></a></li>');

        $('#main-nav > ul > li > a').click(function(e) {
            $('#main-nav li').removeClass('active');
            $(this).closest('li').addClass('active');
            var checkElement = $(this).next();

            if ((checkElement.is('ul')) && (checkElement.is(':visible'))) {
                $(this).closest('li').removeClass('active');
                checkElement.slideUp('normal');
            }

            if ((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
                $('#main-nav ul ul:visible').slideUp('normal');
                checkElement.slideDown('normal');
            }

            if ($(this).parent().hasClass('mobile')) {
                e.preventDefault();
                $('#main-nav').toggleClass('expand');
            }

            if ($(this).closest('li').find('ul').children().length == 0) {
                return true;
            } else {
                return false;
            }

        });

    });

})(jQuery);