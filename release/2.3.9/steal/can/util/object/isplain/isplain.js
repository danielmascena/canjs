/*!
 * CanJS - 2.3.9
 * http://canjs.com/
 * Copyright (c) 2016 Bitovi
 * Mon, 11 Jan 2016 23:51:29 GMT
 * Licensed MIT
 */

/*can@2.3.9#util/object/isplain/isplain*/
steal('can/util/can.js', function (can) {
    var core_hasOwn = Object.prototype.hasOwnProperty, isWindow = function (obj) {
            return obj !== null && obj == obj.window;
        }, isPlainObject = function (obj) {
            if (!obj || typeof obj !== 'object' || obj.nodeType || isWindow(obj)) {
                return false;
            }
            try {
                if (obj.constructor && !core_hasOwn.call(obj, 'constructor') && !core_hasOwn.call(obj.constructor.prototype, 'isPrototypeOf')) {
                    return false;
                }
            } catch (e) {
                return false;
            }
            var key;
            for (key in obj) {
            }
            return key === undefined || core_hasOwn.call(obj, key);
        };
    can.isPlainObject = isPlainObject;
    return can;
});