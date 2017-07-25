var isFunc = require('is-function')
var slice = Array.prototype.slice
var Promise

if (typeof window !== 'undefined') {
  Promise = window.Promise
}
if (typeof global !== 'undefined') {
  Promise = global.Promise
}

module.exports = function promisify (func) {
  if (Promise) {
    return function () {
      var args = slice.call(arguments)
      var ctx = this
      if (isFunc(args.slice(-1))) {
        return func.apply(ctx, args)
      } else {
        return new Promise(function (resolve, reject) {
          args.push(function (err, result) {
            if (err) {
              reject(err)
            } else {
              resolve.apply(this, slice.call(arguments, 1))
            }
          })
          func.apply(ctx, args)
        })
      }
    }
  } else {
    return func
  }
}
