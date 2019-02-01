class App {
  constructor() {
    console.log('app.js');

  }
}

window.addEventListener('load', () => {
  new App();
   firebase.initializeApp(config);

});

// Firebase
const config = {
   apiKey: "AIzaSyDon9EBl4F6hxlzQJjqeuQQ_Fiby86bNGA",
   authDomain: "father-and-son-band.firebaseapp.com",
   databaseURL: "https://father-and-son-band.firebaseio.com",
   projectId: "father-and-son-band",
   storageBucket: "father-and-son-band.appspot.com",
   messagingSenderId: "1079667065376"
 };
