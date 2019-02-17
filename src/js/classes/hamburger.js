class Hamburger {
  constructor() {

    const hamburger = document.querySelectorAll('.b-header__hamburgerContainer');
    hamburger.forEach(node => {
      node.addEventListener('click', myHamburger);
    });
  }
};

export default Hamburger




function myHamburger(e) {
  const active = document.querySelector('.active');

   e.preventDefault()
  if (active) {
    active.classList.remove('active');
  } else {
    e.currentTarget.classList.add('active');
  }
}
