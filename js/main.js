//IT members
$(document).ready(function () {
    $("#members-it").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});

//Commercial members
$(document).ready(function () {
    $("#members-c").owlCarousel({
        loop: true,
        margin: 20,
        autoplay: true,
        dots: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        autoplaySpeed: 3000,
        responsive: {
            0: {
                items: 1
            },
            2000: {
                items: 1
            },
        },
    });
});