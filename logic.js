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
            $("#resume-link").addClass("current-page");
        }
        else {
            $("#navbar").removeClass("sticky");
            $("#cover-screen").removeClass("extra-margin");

            // change active tab on nav bar
            $("#home-link").addClass("current-page");
            $("#resume-link").removeClass("current-page");
        }

    });
})