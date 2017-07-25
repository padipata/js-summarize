prefixed-event
==============

Simplifies `addEventListener` and `removeEventListener` for events that require vendor prefixes.

Adapted from [Craig Buckler's article](http://www.sitepoint.com/css3-animation-javascript-event-handlers/).


### Install

`npm install prefixed-event`

### Usage

```js

var prefixedEvent = require('prefixed-event')
var el = document.querySelector('.something-animated')

function doSomething(){
    prefixedEvent.remove(el, 'AnimationEnd', doSomething)
}

prefixedEvent.add(el, 'AnimationEnd', doSomething )

```


### Testing

* Uses browserify
* Uses `testem`

`make test`
