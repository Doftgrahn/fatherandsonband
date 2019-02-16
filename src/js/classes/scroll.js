class Scroll {
  constructor() {
    let header = document.querySelector('.b-header__container');
    let headerTargets = header.querySelectorAll('a');

    if (headerTargets.length) {
      headerTargets.forEach(link => {
        link.addEventListener('click', (e) => {
          this.scroll(link, e);
        })
      });
    }
  }

  scroll(target, e) {
    e.preventDefault();
    let targetSection = target.getAttribute('data-scroll');
    document.getElementById(targetSection).scrollIntoView();
  }
}





export default Scroll;
