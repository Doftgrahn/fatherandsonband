
 class Gallery {
   constructor() {

     let swiper = new Swiper('.swiper-container', {
         // Enable lazy loading
         lazy: true,
         pagination: {
           el: '.swiper-pagination',
           clickable: true,
         },
         navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev',
         },
       });

   }
 }


 export default Gallery;
