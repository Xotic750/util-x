/*global module, require, process */

(function () {
    'use strict';

    var required = {
            expect: require('expect.js'),
            Array: {},
            log: {}
        },
        utilx,
        stringifyMeta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        },
        stringifyEscapable = new RegExp('[\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5' +
                                        '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]', 'g'),

        stringifyGap,
        stringifyReplacer,
        stringifyIndent;

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = utilx = require('../lib/util-x.min');
    } else {
        required.utilx = utilx = require('../lib/util-x');
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

    function stringifyQuote(string) {
        var result = '"';

        stringifyEscapable.lastIndex = 0;
        if (utilx.RegExp.test(stringifyEscapable, string)) {
            result += utilx.String.replace(string, stringifyEscapable, function (a) {
                var c = stringifyMeta[a],
                    r;

                if (typeof c === 'string') {
                    r = c;
                } else {
                    r = '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
                }

                return r;
            });
        } else {
            result += string;
        }

        return result + '"';
    }

    function stringifyToString(key, holder) {
        var member,
            mind = stringifyGap,
            partial,
            value = holder[key];

        if (utilx.Object.isNotPrimitive(value) && utilx.Function.isFunction(value.toJSON)) {
            value = value.toJSON(key);
        }

        if (utilx.Function.isFunction(stringifyReplacer)) {
            value = stringifyReplacer.call(holder, key, value);
        }

        switch (typeof value) {
        case 'string':
            return stringifyQuote(value);
        case 'number':
        case 'boolean':
            return value.toString();
        case 'function':
            if (utilx.Function.isNativeFunction(value)) {
                return '[Native Function]';
            }

            return '[Function]';
        case 'null':
            return 'null';
        case 'object':
            if (value === null) {
                return 'null';
            }

            stringifyGap += stringifyIndent;
            if (utilx.Array.isArray(value)) {
                partial = utilx.Array.map(value, function (unused, idx, obj) {
                    /*jslint unparam: true */
                    /*jshint unused : false */
                    return this(idx, obj) || 'null';
                }, stringifyToString);

                if (!partial.length) {
                    member = '[]';
                } else if (typeof stringifyGap === 'string' && stringifyGap !== '') {
                    member = '[\n' + stringifyGap + utilx.Array.join(partial, ',\n' + stringifyGap) + '\n' + mind + ']';
                } else {
                    member = '[' + utilx.Array.join(partial) + ']';
                }

                stringifyGap = mind;

                return member;
            }

            if (utilx.Array.isArray(stringifyReplacer)) {
                partial = utilx.Array.reduce(stringifyReplacer, function (prev, element) {
                    var v;

                    if (typeof element === 'string') {
                        v = stringifyToString(element, value);
                        if (v !== undefined) {
                            utilx.Array.push(prev, stringifyQuote(element) +
                                    (typeof stringifyGap === 'string' && stringifyGap !== '' ? ': ' : ':') + v);
                        }
                    }

                    return prev;
                }, []);
            } else {
                partial = utilx.Array.reduce(utilx.Object.keys(value), function (prev, k) {
                    var v = stringifyToString(k, value);

                    if (v !== undefined) {
                        utilx.Array.push(prev, stringifyQuote(k) +
                                    (typeof stringifyGap === 'string' && stringifyGap !== '' ? ': ' : ':') + v);
                    }

                    return prev;
                }, []);
            }

            if (!partial.length) {
                member = '{}';
            } else if (typeof stringifyGap === 'string' && stringifyGap !== '') {
                member = '{\n' + stringifyGap + utilx.Array.join(partial, ',\n' + stringifyGap) + '\n' + mind + '}';
            } else {
                member = '{' + utilx.Array.join(partial) + '}';
            }

            stringifyGap = mind;

            return member;
        }

        return 'undefined';
    }

    function stringify(value, replacer, space) {
        stringifyGap = '';
        if (typeof space === 'number') {
            stringifyIndent = utilx.String.repeat(' ', space);
        } else if (typeof space === 'string') {
            stringifyIndent = space;
        } else {
            stringifyIndent = '';
        }

        stringifyReplacer = replacer;
        if (!utilx.Object.isUndefinedOrNull(replacer) && !utilx.Function.isFunction(replacer) &&
                                                                !utilx.Array.isArray(replacer)) {

            throw new Error('stringify');
        }

        return stringifyToString('', {
            '': value
        });
    }

    required.log.toBe = function (x, y) {
        if (x !== y) {
            console.log('Expected: ');
            console.log(stringify(x));
            console.log('To be: ');
            console.log(stringify(y));
        }

        return x;
    };

    required.log.toEql = function (x, y) {
        if (!required.utilx.Object.deepEqual(x, y)) {
            console.log('Expected: ');
            console.log(stringify(x));
            console.log('To sort of equal: ');
            console.log(stringify(y));
        }

        return x;
    };

    required.log.toBeRef = function (r, x, y) {
        if (x !== y) {
            console.log('Reference: ');
            console.log(r);
            required.log.toBe(x, y);
        }

        return x;
    };

    module.exports = required;
}());
