var mobileModules = '';
(function ($) {

    mobileModules = {

        xs_functions: function () {
            $('div.inner-container ul.menu-container .fa').parent('a').on('touchstart click', function (event) {
                var obj = $(this).parent('li');
                if (!obj.hasClass('no-mob-toggle')) {
                    event.preventDefault();
                    $(this).parent('li').toggleClass('selected');
                }
            });

        },

        sm_functions: function() {
          mobileModules.xs_functions();
        },

        detect_smallest_rez: function () {

            w = $(window).width();

            if (w <= 567) {
                status = 'xs';
                if (resolution_status != status) {
                    resolution_status = status;
                    if (!$('html').hasClass('no-responsive')) {
                        mobileModules.xs_functions();
                    }
                }
            } else if (w >= 568 && w <= 767) {
                status = 'sm';
                if (resolution_status != status) {
                    resolution_status = status;
                    if (!$('html').hasClass('no-responsive')) {
                        mobileModules.sm_functions();
                    }
                }
            } else if (w >= 768 && w <= 1023) {
                status = 'md';
                if ($('body').hasClass('mob_menu_opened')) {
                  $('body').toggleClass('mob_menu_opened');
                }
                if (resolution_status != status) {
                    resolution_status = status;
                    /*mobileModules.md_functions();*/
                }
        }
      },

        smart_vers: function () {

            $(window).on('resize', function () {
                mobileModules.detect_smallest_rez();
            });

            $('a.smart_menu_caller').on('touchstart click', function (event) {
                event.preventDefault();
                $('body').toggleClass('mob_menu_opened');
                //$('.mob_nav_header').toggleClass('mob_nav_header hide mob_nav_header');
            })
        }
    };

    var resolution_status;

})(jQuery);
