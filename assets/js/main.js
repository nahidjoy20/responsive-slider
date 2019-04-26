$(document).ready(function () {

   $(".carousel-main").owlCarousel({
      items: 3,
      loop: true,
      autoplay: true,
      autoplayTimeout: 3000,
      margin: 10,
      nav: true,
      dots: false,
      navText: [
         '<i class="fa fa-angle-left"></i>',
         '<i class="fa fa-angle-right"></i>'
      ],
      responsiveClass: true,
      responsive: {
         0: {
            items: 1
         },
         600: {
            items: 1
         },
         768: {
            items: 2
         },
         1000: {
            items: 3
         }
      }
   });



});