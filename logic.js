$(document).ready(function () {

    var navPosition = $("#navbar").offset().top;

    $(window).scroll(function () {
        // if the window is at the bottom of the cover page
        if ($(window).scrollTop() >= navPosition) {
            // make navbar sticky
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
            
            // change active tab on nav bar
            $("#home-link").removeClass("current-page");
            $("#about-link").addClass("current-page");
        }
        else {
            $("#navbar").removeClass("sticky");
            $("#cover-screen").removeClass("extra-margin");

            // change active tab on nav bar
            $("#home-link").addClass("current-page");
            $("#about-link").removeClass("current-page");
        }

    });

    // hover functions
    $("#lunch-and-wag").hover(function() {
        $("#lunch-and-wag").addClass("shadow");
    }, function() {
        $("#lunch-and-wag").removeClass("shadow");
    });

    $("#weather").hover(function() {
        $("#weather").addClass("shadow");
    }, function() {
        $("#weather").removeClass("shadow");
    });

    $("#work-day-scheduler").hover(function() {
        $("#work-day-scheduler").addClass("shadow");
    }, function() {
        $("#work-day-scheduler").removeClass("shadow");
    });

    $("#code-quiz").hover(function() {
        $("#code-quiz").addClass("shadow");
    }, function() {
        $("#code-quiz").removeClass("shadow");
    });
})