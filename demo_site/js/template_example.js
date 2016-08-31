var APP = APP || {};

APP.TemplateExample = (function() {
  var dogs, t, name, breed;

  function init() {
    dogs = [
      { name: "Fluffy", breed: "Doberman" },
      { name: "Fido", breed: "Wolfhound" },
      { name: "Rover", breed: "Beagle" },
      { name: "Vicious", breed: "Bassett Hound" }
    ];

    t = document.querySelector("#dog-table-row");

    for ( var i = 0; i < dogs.length; i++ ) {
      var dog = dogs[i];
      nameElement = t.content.querySelector(".dog-name");
      breedElement = t.content.querySelector(".dog-breed");

      nameElement.textContent = dog.name;
      breedElement.textContent = dog.breed;

      var tbody = document.querySelector("#dog-table-body");
      var clone = document.importNode(t.content, true);

      tbody.appendChild(clone);
    }
  }

  return {
    init: init,
  };
})();

APP.TemplateExample.init();
