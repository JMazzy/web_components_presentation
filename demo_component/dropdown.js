// Find the template
var ownerDocument = document.currentScript.ownerDocument;
var template = ownerDocument.querySelector('#dropdown-template');

// Create the prototype
var dropdownPrototype = Object.create(HTMLElement.prototype);

// Define createdCallback with a shadow root
dropdownPrototype.createdCallback = function() {
  this.init();
}

dropdownPrototype.init = function() {
  // create shadow root
  this._root = this.createRootElement();

  // init component parts
  this._bar = this._root.querySelector('.dropdown-bar');
  this._body = this._root.querySelector('.dropdown-body');

  var barContent = this.children[0].innerHTML;
  var bodyContent = this.children[1].innerHTML;

  this._bar.innerHTML = barContent;
  this._body.innerHTML = bodyContent;

  this.registerListeners();
};

dropdownPrototype.registerListeners = function() {
  this._bar.addEventListener('click', function(evt) {
    var body = this.nextElementSibling;
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
  var root = this.createShadowRoot();

  var content = document.importNode(template.content, true);

  root.appendChild(content);

  return root;
}

// Register the element
document.registerElement("x-dropdown", {
  prototype: dropdownPrototype,
});
