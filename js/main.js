//Responsive nav
$(function() {
    menu = $('nav ul');

    $('#openup').on('click', function(e) {
        e.preventDefault(); menu.slideToggle();
    });

    $(window).resize(function(){
        var w = $(this).width(); if(w > 480 && menu.is(':hidden')) {
            menu.removeAttr('style');
        }
    });

    $('nav li').on('click', function(e) {
        var w = $(window).width(); if(w < 480 ) {
            menu.slideToggle();
        }
    });
    $('.open-menu').height($(window).height());
});
//Scrolling
$("#amusic").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#music").offset().top
    }, 500);
});
$("#avideo").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#video").offset().top
    }, 500);
});
$("#ashowcase").click(function() {
    $([document.documentElement, document.body]).animate({
        scrollTop: $("#showcase").offset().top
    }, 500);
});