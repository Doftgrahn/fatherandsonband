import Gallery from './classes/gallery';
import Aos from './classes/aos';
import Lazy from './classes/lazy';
import Scroll from './classes/scroll';
import Hamburger from './classes/hamburger';

class App {
  constructor() {
    new Gallery();
    new Aos();
    new Lazy();
    new Scroll();
    new Hamburger();
  }
}

window.addEventListener('load', () => {
  new App();
});
