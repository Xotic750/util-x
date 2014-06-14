/*global module, require, process */

(function () {
    'use strict';

    var required = {
            stack: require('stacktrace-js'),
            expect: require('expect.js'),
            Array: {},
            log: {}
        },
        message = 'test if we see info',
        ieError = false;

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x.min');
    } else {
        required.utilx = require('../lib/util-x');
    }

    required.create = function (varArgs) {
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
        throw new Error(message);
    } catch (e) {
        if (e.message === message && e.toString() === '[object Object]') {
            ieError = true;
        }
    }

    required.expect.Assertion.prototype.assert = function (truth, msg, error, expected) {
        var fmsg = this.flags.not ? error : msg,
            ok = this.flags.not ? !truth : truth,
            err;

        if (!ok) {
            err = new Error(fmsg.call(this));
            if (ieError) {
                err.toString = function () {
                    return this.name + ': ' + this.message;
                };
            } else if (typeof err.stack !== 'string') {
                err.stack = err.name + ': ' + err.message + '\n    ' + required.stack().join('\n    ');
            }

            if (err.message.indexOf('opera:config#UserPrefs|Exceptions Have Stacktrace') !== -1) {
                err.toString = function () {
                    var arr = this.message.split(new RegExp('\\r\\n|\\n')),
                        messageToString = this.name + ': ',
                        length = arr.length,
                        tempArr,
                        element,
                        index;

                    if (length > 1) {
                        for (tempArr = [], index = 0; index < length; index += 1) {
                            element = arr[index];
                            if (element.indexOf('opera:config#UserPrefs|Exceptions Have Stacktrace') !== -1) {
                                tempArr.push(element);
                            }
                        }

                        messageToString += tempArr.join('\n');
                    } else {
                        messageToString += this.message;
                    }

                    return messageToString;
                };
            }

            if (arguments.length > 3) {
                err.actual = this.obj;
                err.expected = expected;
                err.showDiff = true;
            }

            throw err;
        }

        this.and = new required.expect.Assertion(this.obj);
    };

    module.exports = required;
}());
