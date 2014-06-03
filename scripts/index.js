/*global module, require, process */

(function () {
    'use strict';

    var required = {
            expect: require('expect.js'),
            Array: {}
        },
        toClassStr = Object.prototype.toString,
        canIterArgs = true;

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x.min');
    } else {
        required.utilx = require('../lib/util-x');
    }

    function checkObjectCoercible(inputArg) {
        var type = typeof inputArg;

        if (type === 'undefined' || inputArg === null) {
            throw new TypeError('Cannot convert "' + inputArg + '" to object');
        }

        return inputArg;
    }

    if (!('0' in Array.prototype.slice.call((function () { return arguments; }(1))))) {
        canIterArgs = false;
    }

    if (canIterArgs) {
        required.Array.slice = function (array, start, end) {
            var object = checkObjectCoercible(array),
                args = [];

            if (arguments.length === 1) {
                args[0] = start;
                args.length = 1;
            } else if (arguments.length > 1) {
                args[0] = start;
                args[1] = end;
                args.length = 2;
            }
            return Array.prototype.slice.apply(object, args);
        };
    } else {
        required.Array.slice = function (array, start, end) {
            /*jslint bitwise: true */
            var obj = Object(checkObjectCoercible(array)),
                length = obj.length >>> 0,
                relativeStart = start >> 0,
                val = [],
                next = 0,
                type = typeof end,
                isArgs = toClassStr.call(obj) === '[object Arguments]' ||
                                        (('callee' in obj) && typeof obj.length === 'number'),
                relativeEnd,
                finalEnd,
                k;

            /*jslint bitwise: false */
            if (relativeStart < 0) {
                k = Math.max(length + relativeStart, 0);
            } else {
                k = Math.min(relativeStart, length);
            }

            if (type === 'undefined') {
                relativeEnd = length;
            } else {
                /*jslint bitwise: true */
                relativeEnd = end >> 0;
                /*jslint bitwise: false */
            }

            if (relativeEnd < 0) {
                finalEnd = Math.max(length + relativeEnd, 0);
            } else {
                finalEnd = Math.min(relativeEnd, length);
            }

            val.length = Math.max(finalEnd - k, 0);
            while (k < finalEnd) {
                if ((!canIterArgs && isArgs) || (k in obj)) {
                    val[next] = obj[k];
                }

                next += 1;
                k += 1;
            }

            return val;
        };
    }

    function trim(text) {
        return text.replace(/^\s+|\s+$/g, '');
    }

    required.Array.create = function (varArgs) {
        var result,
            sliced,
            length,
            idx,
            it;

        if (!arguments.length) {
            result = [];
            result.length = 0;
        } else if (arguments.length === 1) {
            result = [];
            if (toClassStr.call(varArgs) === '[object Number]') {
                /*jslint bitwise: true */
                result.length = varArgs >>> 0;
                /*jslint bitwise: false */
            } else if (toClassStr.call(varArgs) === '[object String]') {
                sliced = trim(varArgs.slice(1, -1));
                if (sliced[sliced.length - 1] === ',') {
                    sliced = sliced.slice(0, -1);
                }

                /*jslint regexp: true */
                sliced = sliced.match(/(?!,|$)(?:[^,"']*(?:"(?:\\.|[^\\"])*"|'(?:\\.|[^\\'])*')?)*/g);
                length = sliced.length;
                for (idx = 0; idx < length; idx += 1) {
                    it = trim(sliced[idx]);
                    if (it) {
                        /*jslint evil: true */
                        result[idx] = eval(it);
                        if (idx + 1 > result.length) {
                            result.length = idx + 1;
                        }
                        /*jslint evil: false */
                    }
                }
            } else {
                result[0] = varArgs;
                result.length = 1;
            }
        } else {
            result = required.Array.slice(arguments);
        }

        return result;
    };

    module.exports = required;
}());
