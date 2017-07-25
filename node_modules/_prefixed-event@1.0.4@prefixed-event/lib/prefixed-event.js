module.exports = (function(){
'use strict';

var pfx = ["webkit", "moz", "MS", "o", ""];
function assert(pred,msg){
    if(!pred) {
        throw new Error(msg)
    }

}

function noop(){}
return {
    add: function(element, type, callback) {
        callback = (callback || noop);
        assert(element,'element is required')
        assert(type,'type is required')

        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }
            element.addEventListener(pfx[p]+type, callback, false);
        }
    }
    ,remove: function(element,type,callback){
        callback = (callback || noop);
        assert(element,'element is required')
        assert(type,'type is required')
        for (var p = 0; p < pfx.length; p++) {
            if (!pfx[p]) {
                type = type.toLowerCase();
            }
            element.removeEventListener(pfx[p]+type, callback, false);
        }
    }

}

})();

