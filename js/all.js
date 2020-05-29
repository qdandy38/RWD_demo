$(document).ready(function() {
    $('.show-menu').click(function(e) {
        e.preventDefault();
        $('body').toggleClass('menu-open');
        $(this).toggleClass('open');
    });

    $('.nav-menu li a').click(function(e) {
        e.preventDefault();
        $(this).toggleClass('nav-menu-active');
        //其他的選單移除active樣式
        $(this).parent().siblings().find('a').removeClass('nav-menu-active');
    });

    $('.heart-btn').click(function(e) {
        e.preventDefault();
        var target = e.target;
        $(target).toggleClass("far")
        $(target).toggleClass("fas")


    });

});