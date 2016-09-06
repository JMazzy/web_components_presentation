var APP = APP || {};

APP.TemplateExample = (function() {
  var dogs, t, name, breed;

  function init() {
    // sample data for the template
    dogs = [
      { name: "Fluffy", breed: "Doberman" },
      { name: "Fido", breed: "Wolfhound" },
      { name: "Rover", breed: "Beagle" },
      { name: "Vicious", breed: "Bassett Hound" },
      { name: "Rex", breed: "Labrador Retriever" }
    ];

    // get a handle on the template
    t = document.querySelector("#dog-table-row");

    for ( var i = 0; i < dogs.length; i++ ) {
      var dog = dogs[i];

      // fields where data will go
      nameElement = t.content.querySelector(".dog-name");
      breedElement = t.content.querySelector(".dog-breed");

      // fill in the data
      nameElement.textContent = dog.name;
      breedElement.textContent = dog.breed;

      // get a handle on the table body in the main document
      var tbody = document.querySelector("#dog-table-body");

      // "clone" template and insert content
      var clone = document.importNode(t.content, true);

      // add the cloned row to the table body
      tbody.appendChild(clone);
    }
  }

  return {
    init: init,
  };
})();

APP.TemplateExample.init();
