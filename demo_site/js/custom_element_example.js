var APP = APP || {};

APP.CustomElementExample = (function() {

  function init() {
    // declaring an element - MUST HAVE A DASH (-) IN THE NAME!!!
    var ThingyThing = document.registerElement('thingy-thing');

    var thingyThing = document.querySelector('thingy-thing');

    thingyThing.addEventListener('click', function() {
      alert("You clicked a ThingyThing!!!");
    });
  }

  return {
    init: init,
  };
})();

APP.CustomElementExample.init();
