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
        margin: 20,
        responsiveClass: true,
        dots: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,
                nav: false
            },
            1000: {
                items: 5,
                nav: false,
                loop: false
            }
        }
    })
});

/*Menu*/

$(function() {
    $('li.dropdown').hover(function() {
        $(this).addClass('active');
        /* Stuff to do when the mouse enters the element */
    }, function() {
        $(this).removeClass('active');
        /* Stuff to do when the mouse leaves the element */
    });

});

