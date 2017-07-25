# native-promisify-if-present

Conditionally returns a promise from a callback-as-last-argument function using a native Promise, but only if native Promises exist, and you didn't pass in a callback.

Otherwise your callback function works as usual.

Why another promisify module?! Sorry. Here's why:

1. I'm writing a library and want to support both callbacks and promises
2. I don't want to pick what Promise library you use if you're polyfilling it
3. Since Promises are [part of the web](http://caniuse.com/#feat=promises) now, you should be polyfilling them and using native if present anyway, so this will look for Promises on `window` or `global` if defined.
4. I still don't want it to cause JS errors if you were using the libarary I was building, needing to support IE, and you just want the callback API (even IE 11 doesn't have native promises).

## install

```
npm install native-promisify-if-present
```

## example

```javascript
var promisify = require('native-promisify-if-present');

// write your callback function as usual
function someFunctionThatTakesCallback(name, callback) {
	// if we choose to do this it won't
	// blow up even if there's no native Promises
	// and no callback was passed
	if (!callback) {
		callback = function () {}
	}

	// just error-first your callbacks as usual
	if (somethingWentWrong) {
		callback(new Error('oh crap'))
	} else {
		// error is `null` when successful
		callback(null, 'all is well')	
	}
}

// call promisify to support both mechanisms
module.exports = promisify(someFunctionThatTakesCallback)
```

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

