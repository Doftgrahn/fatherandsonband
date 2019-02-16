

class Lazy {
  constructor() {



    window.addEventListener('load', function(){
        const allimages= document.getElementsByTagName('img');
        for (var i=0; i<allimages.length; i++) {
            if (allimages[i].getAttribute('data-src')) {
                allimages[i].setAttribute('src', allimages[i].getAttribute('data-src'));
            }
        }
    }, false)


  }
}






export default Lazy
