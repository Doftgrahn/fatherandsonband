// import Glide from '@glidejs/glide';

import Gallery from './classes/gallery';
import Aos from './classes/aos';
import Lazy from './classes/lazy';
import Scroll from './classes/scroll';



class App {
  constructor() {
    new Gallery();
    new Aos();
    new Lazy();
    new Scroll();
  }
}

window.addEventListener('load', () => {
  new App();
});







//     const panels = document.querySelectorAll('.b-gallery__container-img');

//
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
//
//
// function toggleOpen() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }
//
// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//     console.log('lalala');
//   }
// }
