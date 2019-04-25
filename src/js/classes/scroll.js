class Scroll {
  constructor() {
    let header = document.querySelector('.b-header__container');
    let headerTargets = [...header.querySelectorAll('.b-header__container-meny-links')];

    if (headerTargets.length) {
      headerTargets.forEach(link => {
        link.addEventListener('click', (e) => {
          this.scroll(link, e);
          this.removeHamburger();
        })
      });
    }
  }
  scroll(target, e) {
    e.preventDefault();
    let targetSection = target.getAttribute('data-scroll');
    document.getElementById(targetSection).scrollIntoView();
  }
  removeHamburger() {
    this.hamburger = document.querySelector('.b-header__hamburgerContainer');
    this.wrapper = document.querySelector('.b-header__container');
    this.wrapper.classList.remove('b-header__container--active');
    this.hamburger.classList.remove('active');
  }
}


export default Scroll;
