import Gallery from './classes/gallery';
import Aos from './classes/aos';
import Lazy from './classes/lazy';
import Scroll from './classes/scroll';
import Hamburger from './classes/hamburger';
import Tour from './classes/tour';

class App {
  constructor() {
    new Gallery();
    new Aos();
    new Lazy();
    new Scroll();
    new Hamburger();
    new Tour();
  }
}

window.addEventListener('load', () => {
  new App();
});
