# NSS - Single Page Applications

## Mindmelt Exercise:
* Implementation of Modules, XHR's, & Callbacks in vanilla JavaScript.
* Grunt + Browserfy for JS compiling

## Directives
Utilizing two JSON files, each being an array of objects (one being carnivores, the other being herbivores):
* the data of each JSON is stored into individual, private arrays within a specified module, `animal.js`
### Modularity
* `Animal.js` 
  * has two functions requesting data for each of the JSON files
  * the function pushes the data to the private array
  * specified function exports the data through the invoked callback of the function
* `Module-xhr.js` 
  * imports both functions from `animal.js`
  * contains individual functions for printing both JSON's data to the DOM (showCarnivores, showHerbivores)
  * calls the imported functions from `animal.js` with DOM printing functions passed in as arguments to return JSON data via calback functionality, e.g.:
  ```
  const animal = require("./animal");
  animal.loadCarnivores(showCarnivores);
  ```
