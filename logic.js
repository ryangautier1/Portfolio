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


//     $().mousemove(function(event){
//         if($(".card:hover").length != 0){
//             console.log($(event.target));
//            $(event.target).addClass("shadow");
//        } else{
//            $(".card").removeClass("shadow");
//        }
//    });
})