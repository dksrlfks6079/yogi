$(document).ready(function () {
    $(".slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaypeed: 300,
    })
    $(".nav li").hover(function () {
        $(this).find("ul").stop().slideToggle("fast")
    })

    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $(".top").addClass("on")
            $(".inner").addClass("on")
        } else {
            $(".top").removeClass("on")
            $(".inner").removeClass("on")
        }
    })
})
