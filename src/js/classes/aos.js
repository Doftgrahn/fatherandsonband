const aos = require('aos');

class Aos {
  constructor() {
    aos.init({
      once: true,
    });
  }
}


export default Aos;
