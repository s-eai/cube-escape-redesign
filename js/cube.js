$(document).ready(function(){
    // console.log( $("#header-menu").height() );
    $("#header-menu").on("mouseenter focus", function(){
        $(".header-menu-sub").stop().slideDown(500);
        $(this).css("height" , "380px");
    });
    $("#header-menu").mouseleave(function(){
        $(".header-menu-sub").stop().slideUp(10);
        $("#header-menu a").removeClass("ent");
        $(this).stop().css("height","80px");
    });
    $("#header-menu").blur(function(){
        $(".header-menu-sub").stop().slideUp(10);
        $("#header-menu a").removeClass("ent");
        $(this).css("height","80px");
    });
    $(".header-menu-title").on("mouseenter focus", function(){
        $(".header-menu-title").removeClass("ent");
        $(".header-menu-sub-list").removeClass("ent");
        $(this).addClass("ent");
    });
    $(".header-menu-sub-list").on("mouseenter focus", function(){
        $(".header-menu-sub-list").removeClass("ent");
        $(this).addClass("ent");
        $(".header-menu-title").removeClass("ent");
        $(this).parent().prev().addClass("ent");
    });

    // << 테마 소개 JS >>
    $(".theme-info img").on("mouseenter focus" , function(){
        $(".theme-txt").stop().fadeOut();
        $(this).next().fadeIn().css("display","flex");
    });
    $(".theme-info").mouseleave(function(){
        $(".theme-txt").stop().fadeOut();
    });
    $(".theme-info").blur(function(){
        $(".theme-txt").stop().fadeOut();
    });
});//END ALL