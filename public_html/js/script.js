$(document).ready(function(){
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
});

