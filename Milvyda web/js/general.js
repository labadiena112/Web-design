var plugins = '';
(function ($) {

    $(function() {
        $.reject({
            reject: { msie: 9 }, // Reject all renderers for demo
            header: 'Your browser is not supported here', // Header Text
            paragraph1: 'You are currently using an unsupported browser', // Paragraph 1
            paragraph2: 'Please install one of the many optional browsers below to proceed',
            closeMessage: 'Close this window at your own demise!' // Message below close window link
        });
        return false;
    });

    plugins = {

        swipers: function () {

            var indexSwiper = new Swiper('.swiper1', {
                loop: true,
                nextButton: '.swiper-button-next1',
                prevButton: '.swiper-button-prev1',
                autoHeight: true,
                slidesPerView: 3,
                spaceBetween: 10,
            });

            var indexSwiper1 = new Swiper('.swiper2', {
                loop: true,
                nextButton: '.swiper-button-next2',
                prevButton: '.swiper-button-prev2',
                autoHeight: true,
                slidesPerView: 4,
                spaceBetween: 10,
            });

            var indexSwiper2 = new Swiper('.swiper3', {
                loop: true,
                nextButton: '.swiper-button-next3',
                prevButton: '.swiper-button-prev3',
                autoHeight: true,
                slidesPerView: 3,
                spaceBetween: 10,
            });

            var indexSwiper3 = new Swiper('.swiper4', {
                loop: true,
                nextButton: '.swiper-button-next4',
                prevButton: '.swiper-button-prev4',
                autoHeight: true,
                slidesPerView: 1,
                spaceBetween: 10,
            });
          },
        buildMobile: function () {
            mobileModules.detect_smallest_rez();
            mobileModules.smart_vers();
        }
    };
    plugins.swipers();
    plugins.buildMobile();

})(jQuery);
