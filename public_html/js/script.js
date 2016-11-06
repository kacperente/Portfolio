$(document).ready(function(){
    $(window).scroll(function() { // check if scroll event happened
        if ($(document).scrollTop() > 1) { // check if user scrolled more than 50 from top of the browser window
            $(".navbar-inverse").addClass("scroll"); // if yes, then change the color of class "navbar-fixed-top" to white (#f8f8f8)
        } else {
            $(".navbar-inverse").removeClass("scroll"); // if not, change it back to transparent
        }
    });
    $(".burger-menu").hide();
    $(".burger").click(function() {
        if ($(".burger-menu").is(":hidden")) {
            $(".burger-menu").slideDown('fast');
        }
        else {
            $(".burger-menu").slideUp('fast');
        }
    });
    $('.menu-about').click(function(){
        if($(".burger-menu").is(":visible")){
            $(".burger-menu").slideUp('fast');
        }
        $.scrollTo($('#about'),500);
    });
    $('.menu-skills').click(function(){
        if($(".burger-menu").is(":visible")){
            $(".burger-menu").slideUp('fast');
        }
        $.scrollTo($('#skills'),500);
    });
    $('.menu-projects').click(function(){
        if($(".burger-menu").is(":visible")){
            $(".burger-menu").slideUp('fast');
        }
        $.scrollTo($('#projects'),500);
    });
    $('.menu-contact').click(function(){
        if($(".burger-menu").is(":visible")){
            $(".burger-menu").slideUp('fast');
        }
        $.scrollTo($('#contact'),500);
    });
});

