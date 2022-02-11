$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('.icon_top').fadeIn();
    } else {
        $('.icon_top').fadeOut();
    }
});


