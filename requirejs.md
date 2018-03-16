RequireJS
=========

FAQ
---

### Fix: `max-params` ###

Many using many dependecies in RequireJS, ESLint may complain about the maximum number of parameters for code like this:

#### Problem ####

```js
define([
    'dependency1',
    'dependency2',
    'dependency3',
    'dependency4',
    'dependency5',
    'dependency6'
], function(d1, d2, d3, d4, d5, d6) {
    // code
});
```

#### Solution #1 ####

```js
define([
    'dependency1',
    'dependency2',
    'dependency3',
    'dependency4',
    'dependency5',
    'dependency6'
], function() {
    var [d1, d2, d3, d4, d5, d6] = arguments;   // Requires ES6?
});
```

#### Solution #2 ####

```js
define(function(require) {
    var d1 = require('dependency1');
    var d2 = require('dependency2');
    var d3 = require('dependency3');
    var d4 = require('dependency4');
    var d5 = require('dependency5');
    var d6 = require('dependency6');
});
```