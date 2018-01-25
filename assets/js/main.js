(function ($) {
   "use strict";

   jQuery(document).ready(function($) {

         $(".homa-page-slides").owlCarousel({
            items : 1,
            loop : true,
            dots : false,
            nav  : true,
            navText : ["<i class='zmdi zmdi-arrow-left'></i>", "<i class='zmdi zmdi-arrow-right'></i>"],
         });


         $(".case-study-area").owlCarousel({
            margin : 30,
            loop : true,
            dots : true,
            nav  : false,
            responsive : {
    0 : {
        items : 1
    },

    768 : {
        items : 2

    },
     992 : {
        items : 3
    }
}
         });


         $(".logo-carousel").owlCarousel({
            margin : 30,
            loop : true,
            dots : false,
            nav  : false,
             responsive : {
    0 : {
        items : 2
    },

    768 : {
        items : 4

    },
     992 : {
        items : 6
    }
}
         });

            $(".testimonial-carousel").owlCarousel({
            items : 1,
            loop : true,
            dots : true,
            nav  : false,
         });

            $(".menu-trigger").on('click', function() {
               $(".off-canvas-menu").addClass("show-off-canvas-menu");
               $(".off-canvas-menu-shade").addClass("active");
            });
             $(".cross-button, .off-canvas-menu-shade").on('click', function() {
               $(".off-canvas-menu").removeClass("show-off-canvas-menu");
               $(".off-canvas-menu-shade").removeClass("active");
            });


            $(".single-testimonial-box").hover(function(){
               $(".single-testimonial-box").removeClass('active');
               $(this).addClass('active');
            });

            $(".play-btn").magnificPopup({
               type: 'video'
            });

            $("#traffiq-menu").slicknav({
                prependTo: '#mobile-menu-wrap'
                
            });
   });

   jQuery(window).load(function() {

   });

}(jQuery));





















// $(document).ready(function(){
//   $('.case-study-area').owlCarousel({
//     loop:true,
//       margin : 30,
//       dots : true,
//     nav:true,
//     responsive:{
//         0:{
//             items:1
//         },
//         600:{
//             items:2
//         },
//         1000:{
//             items:4
//         }
//     }
// })
// });