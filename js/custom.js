$(function () {
    $('.to_top').on('click', function () {
        $('html, body').animate({ scrollTop: 0 }, 1000 )
    })
});

$(function () {
    $('.main_visual_slide').slick({
        arrows: false,
        // dots: true,
        autoplay: true,
        pauseOnHover: false,
        useTransform: false
    });

    $('.main_visual_slide').on('afterChange', function (e, s, c) {
        $('.main_visual .lnk li').removeClass('on');
        $('.main_visual .lnk li').eq(c).addClass('on');
    });
})