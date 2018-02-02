/*Search form*/
$(function() {
    $('#toggle-search').click(function(event) {
        // console.log('ok');
        $('.search').toggleClass('open');;
    });
});
/*Banner slide*/
$(function() {
    $(".rslides").responsiveSlides();
});
/*Banner link*/
$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        responsiveClass: true,
        dots: false,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: true,
                loop: false
            }
        }
    })
});

/*Menu*/



$(function() {
    // will only process code within delay(function() { ... }) every 100ms.

    $(window).resize(function() {

        var width = $(window).width();
        if (width >= 768) {
            $('li.dropdown').removeAttr('data-toggle')
            $('li.dropdown').addClass('dropdown-hv');
            $('li.dropdown.dropdown-hv').hover(function() {
                $(this).addClass('active');
                /* Stuff to do when the mouse enters the element */
            }, function() {
                $(this).removeClass('active');
                /* Stuff to do when the mouse leaves the element */
            });
        } else if (width <= 767) {

            $('li.dropdown').attr('data-toggle', 'dropdown');
            $('li.dropdown').removeClass('dropdown-hv');
            // code for mobile landscape
        };
    });

    $(window).resize();
});

//fix menu top
$(window).scroll(function(event) {
    /* Act on the event */
    if ($(window).scrollTop() > 175) {

        $('.main-menu').addClass('fixed-top');
    }
    else{
        $('.main-menu').removeClass('fixed-top');
    }

});
