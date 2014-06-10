/*global module, require, process, window */

(function () {
    'use strict';

    var required = {
            expect: require('expect.js'),
            Array: {},
            log: {}
        },
        logit = false,
        assert = required.expect.Assertion.prototype.assert,
        type,
        str;

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x.min');
    } else {
        required.utilx = require('../lib/util-x');
    }

    required.Array.create = function (varArgs) {
        var length = arguments.length,
            result = [],
            sliced,
            idx,
            it;

        if (!length) {
            result.length = 0;
        } else if (length === 1) {
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
                sliced = sliced.split(',');
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
            for (idx = 0; idx < length; idx += 1) {
                result[idx] = arguments[idx];
                if (idx + 1 > result.length) {
                    result.length = idx + 1;
                }
            }
        }

        return result;
    };

    try {
        type = typeof window;
        if (type !== 'undefined' &&
                window !== null &&
                type !== 'boolean' &&
                type !== 'string' &&
                type !== 'number' &&
                window.alert) {

            Function.prototype.toString.call(window.alert);
        }
    } catch (e) {
        logit = true;
    }

    try {
        throw new Error('test if we see info');
    } catch (e) {
        type = typeof console;
        str = e.toString();
        logit = (logit || typeof e.stack !== 'string' || str.indexOf('test if we see info') === -1) &&
            type !== 'undefined' &&
            console !== null &&
            type !== 'boolean' &&
            type !== 'string' &&
            type !== 'number' &&
            console.log;
    }

    required.expect.Assertion.prototype.assert = function (truth, msg, error, expected) {
        /*jslint unparam: true */
        /*jshint unused: false */
        var fmsg = this.flags.not ? error : msg,
            ok = this.flags.not ? !truth : truth;

        if (!ok && logit) {
            console.log(fmsg.call(this));
        }

        assert.apply(this, arguments);
    };

    module.exports = required;
}());
