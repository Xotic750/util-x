/*global module, require, process */

(function () {
    'use strict';

    var required = {
            expect: require('expect.js'),
            Array: {},
            log: {}
        };

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x.min');
    } else {
        required.utilx = require('../lib/util-x');
    }

    required.log.toBe = function (x, y) {
        if (x !== y) {
            console.log('Expected: ');
            console.log(required.utilx.JSON.stringify(x));
            console.log('To be: ');
            console.log(required.utilx.JSON.stringify(y));
        }

        return x;
    };

    required.log.toEql = function (x, y) {
        if (!required.utilx.Object.deepEqual(x, y)) {
            console.log('Expected: ');
            console.log(required.utilx.JSON.stringify(x));
            console.log('To sort of equal: ');
            console.log(required.utilx.JSON.stringify(y));
        }

        return x;
    };

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
            if (Object.prototype.toString.call(varArgs) === '[object Number]') {
                /*jslint bitwise: true */
                result.length = varArgs >>> 0;
                /*jslint bitwise: false */
            } else if (Object.prototype.toString.call(varArgs) === '[object String]') {
                sliced = varArgs.slice(1, -1).replace(/^\s+|\s+$/g, '');
                if (sliced[sliced.length - 1] === ',') {
                    sliced = sliced.slice(0, -1);
                }

                /*jslint regexp: true */
                sliced = sliced.split(/,/g);
                length = sliced.length;
                for (idx = 0; idx < length; idx += 1) {
                    it = sliced[idx].replace(/^\s+|\s+$/g, '');
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
            result = Array.prototype.slice.call(arguments);
        }

        return result;
    };

    module.exports = required;
}());
