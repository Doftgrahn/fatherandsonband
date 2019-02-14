class App {
  constructor() {
    console.log('app.js');


    const panels = document.querySelectorAll('.b-gallery__container-img');

    panels.forEach(panel => panel.addEventListener('click', toggleOpen));
    panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));


  }
}





window.addEventListener('load', () => {
  new App();


})







function toggleOpen() {
  console.log('Hello');
  this.classList.toggle('open');
}

function toggleActive(e) {
  console.log(e.propertyName);
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
    console.log('lalala');
  }
}
