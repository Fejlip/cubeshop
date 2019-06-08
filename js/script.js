$(function () {

    // Content height

    let setheight = $(window).height() - 101;
    $(".info").css("height", setheight);

    // Invisible div used on offer 

    $('.placeholder').css("height", 27);
    $('.placeholder-slider').css("height", 27);

    // Page animation

    $("#wrapper").fadeIn(1000);

    // Navbar management

    $("#burger-menu").css("display", "none");
    $("#burger-menu").css("height", $(window).height() - $("#header").height());

    $("#burger").on('click', () => {
        $("#burger").toggleClass("is-active");
        $("#burger-menu").fadeToggle(500);
    })

    if ($(window).width() < 768) {
        $("#normal-menu").css("display", "none");
    } else {
        $("#burger").css("display", "none");
    }

    // Offer items management

    $(".list-2-3").css("height", $(".list-basic").height());
    $(".packet-2-3").css("height", $(".packet-1").innerHeight());

    if ($(window).width() < 992) {
        $(".packets").css("display", "none");
        $(".hidden").css("display", "inherit");
    } else {
        $(".packets").css("display", "flex");
        $(".hidden").css("display", "none");
    }

    $(".list-2-3-slider").css("height", 169);
    $(".packet-2-3-slider").css("height", 453);

    $(window).resize(function () {

        // Content height 

        setheight = $(window).height() - 101;
        $(".info").css("height", setheight);

        // Offer items management

        if ($(window).width() < 992) {
            $(".packets").css("display", "none");
            $(".hidden").css("display", "inherit");
            $('.placeholder-slider').css("height", 27);
        } else {
            $('.placeholder').css("height", 27);
            $(".packets").css("display", "flex");

            $(".list-2-3").css("height", $(".list-basic").height());
            $(".packet-2-3").css("height", $(".packet-1").innerHeight());

            $(".hidden").css("display", "none");

            $(".list-2-3-slider").css("height", $(".list-basic").height());
            $(".packet-2-3-slider").css("height", $(".packet-1").innerHeight());
        }

        // Navbar management

        if ($(window).width() < 768) {
            $("#burger").css("display", "inherit");
            $("#normal-menu").css("display", "none");
        } else {
            $("#burger").removeClass("is-active");
            $("#burger").css("display", "none");
            $("#normal-menu").css("display", "inherit");
            $("#burger-menu").css("display", "none");
        }
    });
});