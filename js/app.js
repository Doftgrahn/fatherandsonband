(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

var _gallery = require('./classes/gallery.js');

var _gallery2 = _interopRequireDefault(_gallery);

var _aos = require('./classes/aos.js');

var _aos2 = _interopRequireDefault(_aos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } } // import Glide from '@glidejs/glide';

var App = function App() {
  _classCallCheck(this, App);

  new _gallery2.default();
  new _aos2.default();
};

window.addEventListener('load', function () {
  new App();
});

//     const panels = document.querySelectorAll('.b-gallery__container-img');

//
// panels.forEach(panel => panel.addEventListener('click', toggleOpen));
// panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
//
//
// function toggleOpen() {
//   console.log('Hello');
//   this.classList.toggle('open');
// }
//
// function toggleActive(e) {
//   console.log(e.propertyName);
//   if (e.propertyName.includes('flex')) {
//     this.classList.toggle('open-active');
//     console.log('lalala');
//   }
// }

},{"./classes/aos.js":2,"./classes/gallery.js":3}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Aos = function Aos() {
  _classCallCheck(this, Aos);

  AOS.init();
};

exports.default = Aos;

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Gallery = function Gallery() {
  _classCallCheck(this, Gallery);

  var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    speed: 400,
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination'
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar'
    }
  });
};

exports.default = Gallery;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2NsYXNzZXMvYW9zLmpzIiwic3JjL2pzL2NsYXNzZXMvZ2FsbGVyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDRUE7Ozs7QUFDQTs7Ozs7OzBKQUhBOztJQUtNLEcsR0FDSixlQUFjO0FBQUE7O0FBQ1osTUFBSSxpQkFBSjtBQUNBLE1BQUksYUFBSjtBQUNELEM7O0FBR0gsT0FBTyxnQkFBUCxDQUF3QixNQUF4QixFQUFnQyxZQUFNO0FBQ3BDLE1BQUksR0FBSjtBQUNELENBRkQ7O0FBVUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7SUN4Q00sRyxHQUNKLGVBQWM7QUFBQTs7QUFFWixNQUFJLElBQUo7QUFFRCxDOztrQkFJWSxHOzs7Ozs7Ozs7OztJQ1JSLE8sR0FDSixtQkFBYztBQUFBOztBQUVaLE1BQU0sV0FBVyxJQUFJLE1BQUosQ0FBWSxtQkFBWixFQUFpQztBQUM5QztBQUNBO0FBQ0EsV0FBTSxHQUh3QztBQUk5QyxVQUFNLElBSndDOztBQU05QztBQUNBLGdCQUFZO0FBQ1YsVUFBSTtBQURNLEtBUGtDOztBQVc5QztBQUNBLGdCQUFZO0FBQ1YsY0FBUSxxQkFERTtBQUVWLGNBQVE7QUFGRSxLQVprQzs7QUFpQjlDO0FBQ0EsZUFBVztBQUNULFVBQUk7QUFESztBQWxCbUMsR0FBakMsQ0FBakI7QUF5QkQsQzs7a0JBSVksTyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsIi8vIGltcG9ydCBHbGlkZSBmcm9tICdAZ2xpZGVqcy9nbGlkZSc7XG5cbmltcG9ydCBHYWxsZXJ5IGZyb20gJy4vY2xhc3Nlcy9nYWxsZXJ5LmpzJztcbmltcG9ydCBBb3MgZnJvbSAnLi9jbGFzc2VzL2Fvcy5qcyc7XG5cbmNsYXNzIEFwcCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIG5ldyBHYWxsZXJ5KCk7XG4gICAgbmV3IEFvcygpO1xuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBuZXcgQXBwKCk7XG59KTtcblxuXG5cblxuXG5cblxuLy8gICAgIGNvbnN0IHBhbmVscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5iLWdhbGxlcnlfX2NvbnRhaW5lci1pbWcnKTtcblxuLy9cbi8vIHBhbmVscy5mb3JFYWNoKHBhbmVsID0+IHBhbmVsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdG9nZ2xlT3BlbikpO1xuLy8gcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIHRvZ2dsZUFjdGl2ZSkpO1xuLy9cbi8vXG4vLyBmdW5jdGlvbiB0b2dnbGVPcGVuKCkge1xuLy8gICBjb25zb2xlLmxvZygnSGVsbG8nKTtcbi8vICAgdGhpcy5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuJyk7XG4vLyB9XG4vL1xuLy8gZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGUpIHtcbi8vICAgY29uc29sZS5sb2coZS5wcm9wZXJ0eU5hbWUpO1xuLy8gICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJ2ZsZXgnKSkge1xuLy8gICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1hY3RpdmUnKTtcbi8vICAgICBjb25zb2xlLmxvZygnbGFsYWxhJyk7XG4vLyAgIH1cbi8vIH1cbiIsImNsYXNzIEFvcyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gICAgQU9TLmluaXQoKTtcblxuICB9XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgQW9zO1xuIiwiXG4gY2xhc3MgR2FsbGVyeSB7XG4gICBjb25zdHJ1Y3RvcigpIHtcblxuICAgICBjb25zdCBteVN3aXBlciA9IG5ldyBTd2lwZXIgKCcuc3dpcGVyLWNvbnRhaW5lcicsIHtcbiAgICAgICAgIC8vIE9wdGlvbmFsIHBhcmFtZXRlcnNcbiAgICAgICAgIC8vIGRpcmVjdGlvbjogJ3ZlcnRpY2FsJyxcbiAgICAgICAgIHNwZWVkOjQwMCxcbiAgICAgICAgIGxvb3A6IHRydWUsXG5cbiAgICAgICAgIC8vIElmIHdlIG5lZWQgcGFnaW5hdGlvblxuICAgICAgICAgcGFnaW5hdGlvbjoge1xuICAgICAgICAgICBlbDogJy5zd2lwZXItcGFnaW5hdGlvbicsXG4gICAgICAgICB9LFxuXG4gICAgICAgICAvLyBOYXZpZ2F0aW9uIGFycm93c1xuICAgICAgICAgbmF2aWdhdGlvbjoge1xuICAgICAgICAgICBuZXh0RWw6ICcuc3dpcGVyLWJ1dHRvbi1uZXh0JyxcbiAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldicsXG4gICAgICAgICB9LFxuXG4gICAgICAgICAvLyBBbmQgaWYgd2UgbmVlZCBzY3JvbGxiYXJcbiAgICAgICAgIHNjcm9sbGJhcjoge1xuICAgICAgICAgICBlbDogJy5zd2lwZXItc2Nyb2xsYmFyJyxcbiAgICAgICAgIH0sXG4gICAgICAgfSlcblxuXG5cbiAgIH1cbiB9XG5cblxuIGV4cG9ydCBkZWZhdWx0IEdhbGxlcnk7XG4iXX0=
