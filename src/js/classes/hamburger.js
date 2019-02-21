class Hamburger {
  constructor() {
    this.hamburger = document.querySelector('.b-header__hamburgerContainer');
    this.wrapper = document.querySelector('.b-header__container');
    if (this.hamburger && this.wrapper) {
      this.hamburger.addEventListener('click', () => {
        this.toggleMenu();
      });
    }
  }

  toggleMenu() {
    this.hamburger.classList.toggle('active');
    this.wrapper.classList.toggle('b-header__container--active');
  }
}

export default Hamburger;
