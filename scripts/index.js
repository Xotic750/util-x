/*global module, require, process */

(function () {
    'use strict';

    var required = {
            expect: require('expect.js'),
            Array: {}
        },
        reduceTypeErrorMessage = 'reduce of empty array with no initial value',
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

    function isFunction(inputArg) {
        return toClassStr.call(inputArg) === '[object Function]' ||
             (typeof inputArg === 'function' && inputArg.call && inputArg.apply);
    }

    function throwIfNotAFunction(inputArg) {
        if (!isFunction(inputArg)) {
            throw new TypeError(inputArg + ' is not a function');
        }

        return inputArg;
    }

    function trimLeft(text) {
        return text.replace(/^\s+/g, '');
    }

    function trimRight(text) {
        return text.replace(/\s+$/g, '');
    }

    function trim(text) {
        return trimLeft(trimRight(text));
    }

    required.Array.reduce = function (array, fn, initialValue) {
        var object = Object(array),
            accumulator,
            length,
            kPresent,
            index;

        throwIfNotAFunction(fn);
        /*jslint bitwise: true */
        length = object.length >>> 0;
        /*jslint bitwise: false */
        if (!length && arguments.length === 2) {
            throw new TypeError(reduceTypeErrorMessage);
        }

        index = 0;
        if (arguments.length > 2) {
            accumulator = initialValue;
        } else {
            kPresent = false;
            while (!kPresent && index < length) {
                kPresent = index in object;
                if (kPresent) {
                    accumulator = object[index];
                    index += 1;
                }
            }

            if (!kPresent) {
                throw new TypeError(reduceTypeErrorMessage);
            }
        }

        while (index < length) {
            if (index in object) {
                accumulator = fn.call(undefined, accumulator, object[index], index, object);
            }

            index += 1;
        }

        return accumulator;
    };

    required.Array.create = function (varArgs) {
        var result,
            sliced;

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
                result = required.Array.reduce(sliced, function (acc, it, idx) {
                    it = trim(it);
                    if (it) {
                        /*jslint evil: true */
                        acc[idx] = eval(it);
                        if (idx + 1 > acc.length) {
                            acc.length = idx + 1;
                        }
                        /*jslint evil: false */
                    }

                    return acc;
                }, []);
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
