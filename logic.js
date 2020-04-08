/* reload the page if the window is resized. This is needed to reset the
position of elements variables for scrolling */
window.addEventListener("resize", function () {
    location.reload();
    return false;
});

$(document).ready(function () {



    // define position of elements for scrolling
    var navPosition = $("#navbar").offset().top;
    var projectPosition = $("#projects").offset().top - 10;
    var resumePosition = $("#resume").offset().top - 10;
    var contactPosition = $("#contact-break").offset().top - 10;

    $(window).scroll(function () {
        // if the window is between the cover section and the projects section
        if ($(window).scrollTop() >= (navPosition) && ($(window).scrollTop() < projectPosition)) {
            // make navbar sticky
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
            // change active tab on nav bar
            $("#home-link").removeClass("current-page");
            $("#about-link").addClass("current-page");
            $("#projects-link").removeClass("current-page");
            $("#resume-link").removeClass("current-page");
            $("#contact-link").removeClass("current-page");
        }
        // if the window is between the projects section and the resume section
        else if ($(window).scrollTop() >= (projectPosition) && $(window).scrollTop() < resumePosition) {
            // make navbar sticky
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
            // change active tab on nav bar
            $("#home-link").removeClass("current-page");
            $("#about-link").removeClass("current-page");
            $("#projects-link").addClass("current-page");
            $("#resume-link").removeClass("current-page");
            $("#contact-link").removeClass("current-page");
        }
        // if the window is between the resume section and the contact section
        else if ($(window).scrollTop() >= (resumePosition) && $(window).scrollTop() < contactPosition) {
            // make navbar sticky
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
            // change active tab on nav bar
            $("#home-link").removeClass("current-page");
            $("#about-link").removeClass("current-page");
            $("#projects-link").removeClass("current-page");
            $("#resume-link").addClass("current-page");
            $("#contact-link").removeClass("current-page");
        }
        // if the window is at the contact-break section
        else if ($(window).scrollTop() >= (contactPosition)) {
            // make navbar sticky
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
            // change active tab on nav bar
            $("#home-link").removeClass("current-page");
            $("#about-link").removeClass("current-page");
            $("#projects-link").removeClass("current-page");
            $("#resume-link").removeClass("current-page");
            $("#contact-link").addClass("current-page");
        }
        // if the window goes back into the cover section
        else {
            // take stickiness away
            $("#navbar").removeClass("sticky");
            $("#cover-screen").removeClass("extra-margin");
            // change active tab on nav bar
            $("#home-link").addClass("current-page");
            $("#about-link").removeClass("current-page");
            $("#projects-link").removeClass("current-page");
            $("#resume-link").removeClass("current-page");
            $("#contact-link").removeClass("current-page");
        }
    });


    // hover functions
    $("#lunch-and-wag").hover(function () {
        $("#lunch-and-wag").addClass("shadow");
    }, function () {
        $("#lunch-and-wag").removeClass("shadow");
    });

    $("#weather").hover(function () {
        $("#weather").addClass("shadow");
    }, function () {
        $("#weather").removeClass("shadow");
    });

    $("#work-day-scheduler").hover(function () {
        $("#work-day-scheduler").addClass("shadow");
    }, function () {
        $("#work-day-scheduler").removeClass("shadow");
    });

    $("#code-quiz").hover(function () {
        $("#code-quiz").addClass("shadow");
    }, function () {
        $("#code-quiz").removeClass("shadow");
    });
})