$(document).ready(
    function () {

        $(window).resize(function () {
            var bodyheight = $(this).height();
            $("section").height(bodyheight);
        }).resize();

        $(".up").click(function () {
            $('html, body').animate({
                scrollTop: 0
            }, 'slow');
        });

        $(".down").click(function () {
            $('html, body').animate({
                scrollTop: $(this).parent().next().offset().top
            }, 'fast');
        });

    });