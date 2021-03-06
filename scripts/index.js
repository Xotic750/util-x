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

    required.noop = function () {
        return;
    };

    required.isStrictMode = function () {
        var isStrict = (function () {
                return !this;
            }());

        /*
        if (!isStrict) {
            try {
                eval('function (a, a) { var x = { p: 015, p: 015 }; }');
            } catch (eIsStrictMode) {
                isStrict = true;
            }
        }
        */

        return isStrict;
    };

    required.returnArgs = function () {
        return arguments;
    };

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

    required.expect.Assertion.prototype.assert = function (truth, msg, error, expected) {
        var fmsg = this.flags.not ? error : msg,
            ok = this.flags.not ? !truth : truth,
            err;

        if (!ok) {
            err = new Error(fmsg.call(this));
            if (!err.stack) {
                err.stack = err.name + ': ' + err.message;
                if (err.stacktrace) {
                    err.stack += '\n' + err.stacktrace;
                }
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

    required.expect.Assertion.prototype.assertWarn = function (truth, msg, error, expected) {
        var fmsg = this.flags.not ? error : msg,
            ok = this.flags.not ? !truth : truth,
            err;

        if (!ok) {
            err = new Error(fmsg.call(this));
            if (!err.stack) {
                err.stack = err.name + ': ' + err.message;
                if (err.stacktrace) {
                    err.stack += '\n' + err.stacktrace;
                }
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

            //throw err;
            console.log(err.stack);
        }

        this.and = new required.expect.Assertion(this.obj);
    };

    module.exports = required;
}());
