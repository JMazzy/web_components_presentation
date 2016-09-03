# Web Components

## Questions

### What are web components?
- Defined in the web specifications (W3C)
- “Reusable UI widgets created using open Web technology” -- MDN
- Four separate but synergistic technologies join forces to allow web components (we’ll talk about each in more depth):
  - Custom Elements
  - HTML Templates
  - Shadow DOM
  - HTML Imports

### How are web components created?
- HTML, CSS, JS, just like anything else on the front-end

### Why use web components?
- Portable
- Reusable
- Modular
- Once a component is defined, it can be used with a single line of HTML

## Specifications

### Changes to web standards which enable web components (MDN):
- `<template>` and `<shadow>` elements have been added to standard HTML
- API interfaces for new elements (`HTMLTemplateElement`, `HTMLShadowElement`)
- Extensions of `<link>` and the `HTMLLinkElement` interface
- Added `Document.registerElement()`, Modified `Document.createElement()` and `Document.createElementNS()`
- “Lifecycle callbacks” can be added to the prototype of a custom element
- CSS pseudo-class `:unresolved`, style elements by default
- Shadow DOM, `ShadowRoot` and `Element.createShadowRoot()`, `Element.getDestinationInsertionPoints()`, `Element.shadowRoot`
- Extend `Event` interface, `Event.path`
- Document interface extensions
- Styling of web components using:
  - Pseudo-classes `:host`, `:host()`, `:host-context()`
  - Pseudo-elements `::shadow`, `::content`
  - Combinator, `/deep/`

### Custom Elements
Pretty self-explanatory. It lets you define and use new HTML tags. Also, you can add to current HTML tags (need to look into what this means)

### HTML Imports
Import HTML documents for display in other HTML documents. (Similar to partials?)

### HTML Templates
Allows declaring “inert DOM subtrees” in your HTML and “instantiate document fragments with identical contents”

### Shadow DOM
Sounds “shady” but it is not. Improves encapsulation of HTML DOM trees. You can now create a boundary between DOM trees.

## Browser Support
Chrome/Chromium, Opera - Full, Native Support
Firefox - supported but must be manually turned on in the browser, only full support for templates
Safari - meh, templates OK, nothing else
IE/Edge - meh, templates OK, nothing else

### Polyfills
- Polyfills enable you to use them with any browser
- https://github.com/webcomponents

## Libraries
Libraries which use/supplement/improve web components

### Polymer
Google Polymer is a is a framework which uses Web Components, and provides polyfills to bridge the gap to full browser support of Web Components, but it is not synonymous. You can use Web Components without Google Polymer. (MDN)

### X-Tag
### Bosonic
### SkateJS
