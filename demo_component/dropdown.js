// Find the template (HTML Templates)
var ownerDocument = document.currentScript.ownerDocument;
var template = ownerDocument.querySelector('#dropdown-template');

// Create the prototype
var dropdownPrototype = Object.create(HTMLElement.prototype);

// Callback which is run upon creation of an element of the custom type
dropdownPrototype.createdCallback = function() {
  this.init();
  this.render();
}

dropdownPrototype.init = function() {
  // create shadow root
  this._root = this.createRootElement();

  // init component parts
  this._bar = this._root.querySelector('.dropdown-bar');
  this._body = this._root.querySelector('.dropdown-body');

  // Add event listeners
  this.registerListeners();
};

dropdownPrototype.registerListeners = function() {
  this._bar.addEventListener('click', function(evt) {
    var body = this.nextElementSibling;

    // Toggle the 'hidden' class
    if ( body.classList.contains('hidden') ) {
      this.classList.remove('folded')
      body.classList.remove('hidden');
    } else {
      this.classList.add('folded')
      body.classList.add('hidden')
    }

  }, true);
};

dropdownPrototype.createRootElement = function() {
  // Creates the Shadow DOM for this element
  var root = this.createShadowRoot();

  // Grab the template content, import it to the document
  var content = document.importNode(template.content, true);

  // Append the template to the shadow root (activate it, so it is rendered)
  root.appendChild(content);

  return root;
}

dropdownPrototype.render = function() {
  // Grab content from inside the custom tags
  var barContent = this.children[0].innerHTML;
  var bodyContent = this.children[1].innerHTML;

  // Place the content into the appropriate areas
  this._bar.innerHTML = barContent;
  this._body.innerHTML = bodyContent;
};

// Register the Custom Element so it is recognized
document.registerElement("x-dropdown", {
  prototype: dropdownPrototype,
});
