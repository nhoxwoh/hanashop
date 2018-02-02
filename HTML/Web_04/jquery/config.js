 /*Menu*/


 //Menu hover pc
 $(function() {
     // will only process code within delay(function() { ... }) every 100ms.

     $(window).resize(function() {

         var width = $(window).width();
         if (width >= 768) {

             $('li.dropmenu').hover(function() {
                 $(this).addClass('active');
                 $(this).find('ul').addClass('animation-menuhv');
                 /* Stuff to do when the mouse enters the element */
             }, function() {
                 $(this).removeClass('active');
                 $(this).find('ul').removeClass('animation-menuhv')
                 /* Stuff to do when the mouse leaves the element */
             });
         }
     });

     $(window).resize();
 });

 //Menu mobile
 $(function() {
     jQuery('.nav-menu').meanmenu();
 });

 //Search 
 $(function() {
     $('.search-icon').click(function(event) {

         $('.top-search-input-wrap').attr('style', 'display:block');
         $('.search-close-icon').attr('style', 'display:block');
         $('.search-icon').attr('style', 'display:none');
     });
     $('.search-close-icon').click(function(event) {
         $('.top-search-input-wrap').removeAttr('style').attr('style', 'display:none');
         $('.search-close-icon').removeAttr('style').attr('style', 'display:none');
         $('.search-icon').removeAttr('style').attr('style', 'display:block');

     });
     $('.top-search-overlay').click(function(event) {
         $('.top-search-input-wrap').removeAttr('style').attr('style', 'display:none');
         $('.search-close-icon').removeAttr('style').attr('style', 'display:none');
         $('.search-icon').removeAttr('style').attr('style', 'display:block')
     });
 });


/* jQuery(document).ready(function() {
     jQuery('.slide-banner').revolution({
         delay: 9000,
         startwidth: 1140,
         startheight: 500,
         hideThumbs: 10
     });
 });*/

/*Banner link*/
/*$(document).ready(function() {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        dots: true,
        autoplay: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 4,
                nav: false,
                loop: false
            }
        }
    })
});*/
