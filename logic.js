// implement lozad
const observer = lozad();
observer.observe();

$(document).ready(function () {
    // animate visible elements on page load
    $('.myFadeIn').each(function () {
        if (checkAnimatePos(this)) {
            $(this).addClass('animate__fadeInUpBig');
            $(this).removeClass('opacity-0');
        }
    })

    // 0 indicates project image showing, 1 indicates description showing
    const projectState = [false, false, false, false, false, false];

    $(".project-card").on('click', function (event) {
        let id = event.target.getAttribute("data-project");
        let index = document.getElementById(id).getAttribute("data-index");

        // check state of target
        // project image showing before click
        if (projectState[index] === false) {
            $("#" + id).children(".project-info").addClass('project-animate');
            $("#" + id).children(".project-info").children(".project-title").addClass('title-animate');
            $("#" + id).children(".project-info").children(".project-description").addClass('description-animate');
            $("#" + id).children(".project-info").children(".project-divider").addClass('divider-animate');
            $("#" + id).children(".project-info").children(".project-divider").removeClass('d-none');
            $("#" + id).children(".project-info").children(".link-buttons").addClass('link-animate');
            $("#" + id).children(".project-img").addClass('img-animate');
            // if(id === "digital-class") {
            //     $("#digital-class").addClass('digital-class-description-height');
            // }
        }
        // project description showing
        else {
            $("#" + id).children(".project-info").removeClass('project-animate');
            $("#" + id).children(".project-info").children(".project-title").removeClass('title-animate');
            $("#" + id).children(".project-info").children(".project-description").removeClass('description-animate');
            $("#" + id).children(".project-info").children(".project-divider").removeClass('divider-animate');
            $("#" + id).children(".project-info").children(".link-buttons").removeClass('link-animate');
            $("#" + id).children(".project-img").removeClass('img-animate');
            $("#" + id).children(".project-info").children(".project-divider").addClass('d-none');
            // if(id === "digital-class") {
            //     $("#digital-class").removeClass('digital-class-description-height');
            // }
        }
        projectState[index] = !projectState[index];
    });

    $(".project-card").hover(function (event) {
        // mouse over function
        let id = event.target.getAttribute("data-project");
        let index = document.getElementById(id).getAttribute("data-index");

        $("#" + id).children(".project-info").addClass('project-animate');
        $("#" + id).children(".project-info").children(".project-title").addClass('title-animate');
        $("#" + id).children(".project-info").children(".project-description").addClass('description-animate');
        $("#" + id).children(".project-info").children(".project-divider").addClass('divider-animate');
        $("#" + id).children(".project-info").children(".project-divider").removeClass('d-none');
        $("#" + id).children(".project-info").children(".link-buttons").addClass('link-animate');
        $("#" + id).children(".project-img").addClass('img-animate');
        // if(id === "digital-class") {
        //     $("#digital-class").addClass('digital-class-description-height');
        // }
        projectState[index] === true;
    }, function (event) {
        // console.log(event.target);
        // mouse out function
        let id = event.target.getAttribute("data-project");
        let index = document.getElementById(id).getAttribute("data-index");

        $("#" + id).children(".project-info").removeClass('project-animate');
        $("#" + id).children(".project-info").children(".project-title").removeClass('title-animate');
        $("#" + id).children(".project-info").children(".project-description").removeClass('description-animate');
        $("#" + id).children(".project-info").children(".project-divider").removeClass('divider-animate');
        $("#" + id).children(".project-info").children(".link-buttons").removeClass('link-animate');
        $("#" + id).children(".project-img").removeClass('img-animate');
        $("#" + id).children(".project-info").children(".project-divider").addClass('d-none');
        // if(id === "digital-class") {
        //     $("#digital-class").removeClass('digital-class-description-height');
        // }
        projectState[index] === false;
    });

    var height = $(window).height();
    /* reload the page if the window is resized. This is needed to reset the
    position of elements variables for scrolling */
    $(window).resize(function () {
        // check if the window resized more than it does when mobile browsers hide the navbar
        if (Math.abs($(window).height() - height) > 55) {
            location.reload();
            return false;
        }
    });


    function checkAnimatePos(element) {
        //return true is element is above the bottom of the window and below the top
        let windowBottom = $(window).scrollTop() + $(window).height();
        let windowTop = $(window).scrollTop();
        let elementBottom = $(element).offset().top + $(element).height();
        let elementTop = $(element).offset().top;

        return ((elementTop <= windowBottom) && (elementBottom >= windowTop));
    }

    // define position of elements for scrolling
    var navPosition = $("#navbar").offset().top;
    var projectPosition = $("#projects").offset().top - 20;
    var resumePosition = $("#resume").offset().top - 20;
    var contactPosition = $("#contact-break").offset().top - 20;

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

        // fade elements in on scroll
        $('.myFadeIn').each(function () {
            if (checkAnimatePos(this)) {
                $(this).addClass('animate__fadeInUp');
                $(this).removeClass('opacity-0');
            }
        })
        
    });

    // hover functions. Must be unique for each card so only the desired card gets shadow
    $("#lunch-and-wag").hover(function () {
        $("#lunch-and-wag").addClass("shadow");
    }, function () {
        $("#lunch-and-wag").removeClass("shadow");
    });

    $("#digital-class").hover(function () {
        $("#digital-class").addClass("shadow");
    }, function () {
        $("#digital-class").removeClass("shadow");
    });

    $("#google-books").hover(function () {
        $("#google-books").addClass("shadow");
    }, function () {
        $("#google-books").removeClass("shadow");
    });

    $("#readme").hover(function () {
        $("#readme").addClass("shadow");
    }, function () {
        $("#readme").removeClass("shadow");
    });

    $("#avoid-the-orcas").hover(function () {
        $("#avoid-the-orcas").addClass("shadow");
    }, function () {
        $("#avoid-the-orcas").removeClass("shadow");
    });

    $("#tv-tracker").hover(function () {
        $("#tv-tracker").addClass("shadow");
    }, function () {
        $("#tv-tracker").removeClass("shadow");
    })
})