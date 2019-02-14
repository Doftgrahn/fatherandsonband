(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var App = function App() {
  _classCallCheck(this, App);

  console.log('app.js');

  var panels = document.querySelectorAll('.b-gallery__container-img');

  panels.forEach(function (panel) {
    return panel.addEventListener('click', toggleOpen);
  });
  panels.forEach(function (panel) {
    return panel.addEventListener('transitionend', toggleActive);
  });
  // panels.forEach(panel => panel.addEventListener('mouseover', toggleOpen));

};

window.addEventListener('load', function () {
  new App();
});

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

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7OztJQ0FNLEcsR0FDSixlQUFjO0FBQUE7O0FBQ1osVUFBUSxHQUFSLENBQVksUUFBWjs7QUFHQSxNQUFNLFNBQVMsU0FBUyxnQkFBVCxDQUEwQiwyQkFBMUIsQ0FBZjs7QUFFQSxTQUFPLE9BQVAsQ0FBZTtBQUFBLFdBQVMsTUFBTSxnQkFBTixDQUF1QixPQUF2QixFQUFnQyxVQUFoQyxDQUFUO0FBQUEsR0FBZjtBQUNBLFNBQU8sT0FBUCxDQUFlO0FBQUEsV0FBUyxNQUFNLGdCQUFOLENBQXVCLGVBQXZCLEVBQXdDLFlBQXhDLENBQVQ7QUFBQSxHQUFmO0FBQ0E7O0FBSUQsQzs7QUFHSCxPQUFPLGdCQUFQLENBQXdCLE1BQXhCLEVBQWdDLFlBQU07QUFDcEMsTUFBSSxHQUFKO0FBR0QsQ0FKRDs7QUFRQSxTQUFTLFVBQVQsR0FBc0I7QUFDcEIsVUFBUSxHQUFSLENBQVksT0FBWjtBQUNBLE9BQUssU0FBTCxDQUFlLE1BQWYsQ0FBc0IsTUFBdEI7QUFDRDs7QUFFRCxTQUFTLFlBQVQsQ0FBc0IsQ0FBdEIsRUFBeUI7QUFDdkIsVUFBUSxHQUFSLENBQVksRUFBRSxZQUFkO0FBQ0EsTUFBSSxFQUFFLFlBQUYsQ0FBZSxRQUFmLENBQXdCLE1BQXhCLENBQUosRUFBcUM7QUFDbkMsU0FBSyxTQUFMLENBQWUsTUFBZixDQUFzQixhQUF0QjtBQUNBLFlBQVEsR0FBUixDQUFZLFFBQVo7QUFDRDtBQUNGIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKXtmdW5jdGlvbiByKGUsbix0KXtmdW5jdGlvbiBvKGksZil7aWYoIW5baV0pe2lmKCFlW2ldKXt2YXIgYz1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlO2lmKCFmJiZjKXJldHVybiBjKGksITApO2lmKHUpcmV0dXJuIHUoaSwhMCk7dmFyIGE9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitpK1wiJ1wiKTt0aHJvdyBhLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsYX12YXIgcD1uW2ldPXtleHBvcnRzOnt9fTtlW2ldWzBdLmNhbGwocC5leHBvcnRzLGZ1bmN0aW9uKHIpe3ZhciBuPWVbaV1bMV1bcl07cmV0dXJuIG8obnx8cil9LHAscC5leHBvcnRzLHIsZSxuLHQpfXJldHVybiBuW2ldLmV4cG9ydHN9Zm9yKHZhciB1PVwiZnVuY3Rpb25cIj09dHlwZW9mIHJlcXVpcmUmJnJlcXVpcmUsaT0wO2k8dC5sZW5ndGg7aSsrKW8odFtpXSk7cmV0dXJuIG99cmV0dXJuIHJ9KSgpIiwiY2xhc3MgQXBwIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgY29uc29sZS5sb2coJ2FwcC5qcycpO1xuXG5cbiAgICBjb25zdCBwYW5lbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYi1nYWxsZXJ5X19jb250YWluZXItaW1nJyk7XG5cbiAgICBwYW5lbHMuZm9yRWFjaChwYW5lbCA9PiBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRvZ2dsZU9wZW4pKTtcbiAgICBwYW5lbHMuZm9yRWFjaChwYW5lbCA9PiBwYW5lbC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgdG9nZ2xlQWN0aXZlKSk7XG4gICAgLy8gcGFuZWxzLmZvckVhY2gocGFuZWwgPT4gcGFuZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgdG9nZ2xlT3BlbikpO1xuXG5cblxuICB9XG59XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xuICBuZXcgQXBwKCk7XG5cblxufSlcblxuXG5cbmZ1bmN0aW9uIHRvZ2dsZU9wZW4oKSB7XG4gIGNvbnNvbGUubG9nKCdIZWxsbycpO1xuICB0aGlzLmNsYXNzTGlzdC50b2dnbGUoJ29wZW4nKTtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlQWN0aXZlKGUpIHtcbiAgY29uc29sZS5sb2coZS5wcm9wZXJ0eU5hbWUpO1xuICBpZiAoZS5wcm9wZXJ0eU5hbWUuaW5jbHVkZXMoJ2ZsZXgnKSkge1xuICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1hY3RpdmUnKTtcbiAgICBjb25zb2xlLmxvZygnbGFsYWxhJyk7XG4gIH1cbn1cbiJdfQ==
