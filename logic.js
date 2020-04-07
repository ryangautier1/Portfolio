$(document).ready(function () {

    var navPosition = $("#navbar").offset().top;

    $(window).scroll(function () {
        if ($(window).scrollTop() >= navPosition) {
            $("#navbar").addClass("sticky");
            $("#cover-screen").addClass("extra-margin");
        }
        else {
            $("#navbar").removeClass("sticky");
            $("#cover-screen").removeClass("extra-margin");
        }

    });
})