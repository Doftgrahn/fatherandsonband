const Swiper = require('Swiper');

class Gallery {
  constructor() {
    let swiperWrapper = document.querySelector('.swiper-container');
    if (swiperWrapper) {
      this.insertSwiper();
    }
  }

  insertSwiper() {
    let swiper = new Swiper('.swiper-container', {
      // Enable lazy loading
      lazy: true,
      loop: true,
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
