/**
 * @file {@link http://xotic750.github.io/util-x/ util-x}. A Javascript utility library..
 * @version 0.1.0
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @module util-x
 * @requires stacktrace-js
 */

/*
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

(function (globalThis, window, JSON, module, define, base) {
    'use strict';

    base = {};

    base.str = {};
    base.str.object = 'object';
    base.str.Function = 'function';
    base.str.callee = 'callee';
    base.str.Length = 'length';
    base.str.Prototype = 'prototype';
    base.str.ToString = 'toString';
    base.str.Constructor = 'constructor';
    base.str.value = 'value';
    base.str.sentinel = 'sentinel';
    base.str.test = 'test';
    base.str.stack = 'stack';
    base.str.stacktrace = 'stacktrace';
    base.str.message = 'message';
    base.str.name = 'name';
    base.str.newline = '\n';
    base.str.factory = 'factory';
    base.str.number = 'number';
    base.str.string = 'string';
    base.str.Null = 'null';
    base.str.boolean = 'boolean';
    base.str.Undefined = 'undefined';
    base.str.set = 'set';
    base.str.get = 'get';
    base.str.empty = '';
    base.str.zero = '0';
    base.str.g = 'g';
    base.str.period = '.';
    base.str.proto = '__proto__';
    base.str.defineGetter = '__defineGetter__';
    base.str.defineSetter = '__defineSetter__';
    base.str.lookupGetter = '__lookupGetter__';
    base.str.lookupSetter = '__lookupSetter__';

    base.props = {};

    base.props.shadowed = [
        base.str.ToString,
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        base.str.Constructor
    ];

    base.props.unwantedError = [
        'fileName',
        'lineNumber',
        'columnNumber',
        base.str.name,
        base.str.message,
        base.str.stack,
        'arguments',
        'type'
    ];

    base.classString = {};
    base.classString.arguments = '[object Arguments]';
    base.classString.Function = '[object Function]';
    base.classString.object = '[object Object]';
    base.classString.Undefined = '[object Undefined]';
    base.classString.Null = '[object Null]';
    base.classString.error = '[object Error]';
    base.classString.regexp = '[object RegExp]';
    base.classString.array = '[object Array]';
    base.classString.date = '[object Date]';
    base.classString.string = '[object String]';
    base.classString.boolean = '[object Boolean]';
    base.classString.number = '[object Number]';

    base.properties = {};

    base.properties.constant = {};
    base.properties.constant.enumerable = false;
    base.properties.constant.writable = false;
    base.properties.constant.configurable = false;

    base.properties.notEnumerable = {};
    base.properties.notEnumerable.enumerable = false;
    base.properties.notEnumerable.writable = true;
    base.properties.notEnumerable.configurable = true;

    /*jslint evil:true */
    base.eval = eval;
    /*jslint evil:false */
    base.isNaN = isNaN;
    base.isFinite = isFinite;
    base.parseInt = parseInt;
    base.parseFloat = parseFloat;

    base.Math = {};
    base.Math.sign = Math.sign;
    base.Math.min = Math.min;
    base.Math.max = Math.max;
    base.Math.floor = Math.floor;
    base.Math.ceil = Math.ceil;
    base.Math.abs = Math.abs;
    base.Math.random = Math.random;

    base.JSON = {};
    if (JSON) {
        base.JSON.parse = JSON.parse;
        base.JSON.stringify = JSON.stringify;
    }

    base.object = {};
    base.object.instance = {};
    base.object.Ctr = base.object.instance.constructor;
    base.object.proto = base.object.Ctr.prototype;
    base.object.assign = base.object.Ctr.assign;
    base.object.create = base.object.Ctr.create;
    base.object.defineProperties = base.object.Ctr.defineProperties;
    base.object.defineProperty = base.object.Ctr.defineProperty;
    base.object.freeze = base.object.Ctr.freeze;
    base.object.getOwnPropertyDescriptor = base.object.Ctr.getOwnPropertyDescriptor;
    base.object.getOwnPropertyNames = base.object.Ctr.getOwnPropertyNames;
    base.object.getPrototypeOf = base.object.Ctr.getPrototypeOf;
    base.object.is = base.object.Ctr.is;
    base.object.isnt = base.object.Ctr.isnt;
    base.object.isExtensible = base.object.Ctr.isExtensible;
    base.object.isFrozen = base.object.Ctr.isFrozen;
    base.object.isSealed = base.object.Ctr.isSealed;
    base.object.keys = base.object.Ctr.keys;
    base.object.preventExtensions = base.object.Ctr.preventExtensions;
    base.object.seal = base.object.Ctr.seal;
    base.object.setPrototypeOf = base.object.Ctr.setPrototypeOf;
    base.object[base.str.defineGetter] = base.object.instance[base.str.defineGetter];
    base.object[base.str.defineSetter] = base.object.instance[base.str.defineSetter];
    base.object[base.str.lookupGetter] = base.object.instance[base.str.lookupGetter];
    base.object[base.str.lookupGetter] = base.object.instance[base.str.lookupGetter];
    /*jslint evil:true */
    base.object.eval = base.object.instance.eval;
    /*jslint evil:false */
    base.object.hasOwn = base.object.instance.hasOwnProperty;
    base.object.isPrototypeOf = base.object.instance.isPrototypeOf;
    base.object.propertyIsEnumerable = base.object.instance.propertyIsEnumerable;
    base.object.toLocaleString = base.object.instance.toLocaleString;
    base.object.toSource = base.object.instance.toSource;
    base.object.toString = base.object.instance.toString;
    base.object.unwatch = base.object.instance.unwatch;
    base.object.valueOf = base.object.instance.valueOf;
    base.object.watch = base.object.instance.watch;

    base.array = {};
    base.array.instance = [];
    base.array.Ctr = base.array.constructor;
    base.array.proto = base.array.Ctr.prototype;
    base.array.isArray = base.array.Ctr.isArray;
    base.array.of = base.array.Ctr.of;
    base.array.from = base.array.Ctr.from;
    base.array.concat = base.array.instance.concat;
    base.array.every = base.array.instance.every;
    base.array.filter = base.array.instance.filter;
    base.array.find = base.array.instance.find;
    base.array.findIndex = base.array.instance.findIndex;
    base.array.forEach = base.array.instance.forEach;
    base.array.indexOf = base.array.instance.indexOf;
    base.array.join = base.array.instance.join;
    base.array.lastIndexOf = base.array.instance.lastIndexOf;
    base.array.map = base.array.instance.map;
    base.array.pop = base.array.instance.pop;
    base.array.push = base.array.instance.push;
    base.array.reduce = base.array.instance.reduce;
    base.array.reduceRight = base.array.instance.reduceRight;
    base.array.reverse = base.array.instance.reverse;
    base.array.shift = base.array.instance.shift;
    base.array.slice = base.array.instance.slice;
    base.array.some = base.array.instance.some;
    base.array.sort = base.array.instance.sort;
    base.array.splice = base.array.instance.splice;
    base.array.toString = base.array.instance.toString;
    base.array.unshift = base.array.instance.unshift;

    base.string = {};
    base.string.instance = '';
    base.string.Ctr = base.string.instance.constructor;
    base.string.proto = base.string.Ctr.prototype;
    base.string.fromCharCode = base.string.Ctr.fromCharCode;
    base.string.fromCodePoint = base.string.Ctr.fromCodePoint;
    base.string.anchor = base.string.instance.anchor;
    base.string.charAt = base.string.instance.charAt;
    base.string.charCodeAt = base.string.instance.charCodeAt;
    base.string.codePointAt = base.string.instance.codePointAt;
    base.string.concat = base.string.instance.concat;
    base.string.contains = base.string.instance.contains;
    base.string.endsWith = base.string.instance.endsWith;
    base.string.indexOf = base.string.instance.indexOf;
    base.string.lastIndexOf = base.string.instance.lastIndexOf;
    base.string.link = base.string.instance.link;
    base.string.localeCompare = base.string.instance.localeCompare;
    base.string.match = base.string.instance.match;
    base.string.normalize = base.string.instance.normalize;
    base.string.repeat = base.string.instance.repeat;
    base.string.replace = base.string.instance.replace;
    base.string.search = base.string.instance.search;
    base.string.slice = base.string.instance.slice;
    base.string.split = base.string.instance.split;
    base.string.startsWith = base.string.instance.startsWith;
    base.string.substr = base.string.instance.substr;
    base.string.substring = base.string.instance.substring;
    base.string.toLocaleLowerCase = base.string.instance.toLocaleLowerCase;
    base.string.toLocaleUpperCase = base.string.instance.toLocaleUpperCase;
    base.string.toLowerCase = base.string.instance.toLowerCase;
    base.string.toString = base.string.instance.toString;
    base.string.toUpperCase = base.string.instance.toUpperCase;
    base.string.trim = base.string.instance.trim;
    base.string.trimLeft = base.string.instance.trimLeft;
    base.string.trimRight = base.string.instance.trimRight;
    base.string.valueOf = base.string.instance.valueOf;
    base.string.whiteSpaces = [
        0x0009, // Tab
        0x000a, // Line Feed
        0x000b, // Vertical Tab
        0x000c, // Form Feed
        0x000d, // Carriage Return
        0x0020, // Space
        0x0085, // Next line
        0x00a0, // No-break space
        0x1680, // Ogham space mark
        0x180e, // Mongolian vowel separator
        0x2000, // En quad
        0x2001, // Em quad
        0x2002, // En space
        0x2003, // Em space
        0x2004, // Three-per-em space
        0x2005, // Four-per-em space
        0x2006, // Six-per-em space
        0x2007, // Figure space
        0x2008, // Punctuation space
        0x2009, // Thin space
        0x200a, // Hair space
        0x200b, // Zero width space
        0x2028, // Line separator
        0x2029, // Paragraph separator
        0x202f, // Narrow no-break space
        0x205f, // Medium mathematical space
        0x3000, // Ideographic space
        0xfeff // Byte Order Mark
    ];

    base.number = {};
    base.number.instance = 0;
    base.number.Ctr = base.number.instance.constructor;
    base.number.proto = base.number.Ctr.prototype;
    base.number.EPSILON = base.number.Ctr.EPSILON;
    base.number.MAX_VALUE = base.number.Ctr.MAX_VALUE;
    base.number.MIN_VALUE = base.number.Ctr.MIN_VALUE;
    base.number.NEGATIVE_INFINITY = base.number.Ctr.NEGATIVE_INFINITY;
    base.number.NaN = base.number.Ctr.NaN;
    base.number.POSITIVE_INFINITY = base.number.Ctr.POSITIVE_INFINITY;
    base.number.isFinite = base.number.Ctr.isFinite;
    base.number.isInteger = base.number.Ctr.isInteger;
    base.number.isNaN = base.number.Ctr.isNaN;
    base.number.parseFloat = base.number.Ctr.parseFloat;
    base.number.parseInt = base.number.Ctr.parseInt;
    base.number.toInteger = base.number.Ctr.toInteger;
    base.number.toExponential = base.number.instance.toExponential;
    base.number.toFixed = base.number.instance.toFixed;
    base.number.toLocaleString = base.number.instance.toLocaleString;
    base.number.toPrecision = base.number.instance.toPrecision;
    base.number.toString = base.number.instance.toString;
    base.number.valueOf = base.number.instance.valueOf;

    base.boolean = {};
    base.boolean.instance = true;
    base.boolean.Ctr = base.boolean.instance.constructor;
    base.boolean.proto = base.boolean.Ctr.prototype;
    base.boolean.toString = base.boolean.instance.toString;
    base.boolean.valueOf = base.boolean.instance.valueOf;

    base.Function = {};
    base.Function.instance = function () {
        return;
    };

    base.Function.Ctr = base.Function.instance.constructor;
    base.Function.proto = base.Function.Ctr.prototype;
    base.Function.apply = base.Function.instance.apply;
    base.Function.bind = base.Function.instance.bind;
    base.Function.call = base.Function.instance.call;
    base.Function.toString = base.Function.instance.toString;

    base.regExp = {};
    base.regExp.instance = new RegExp();
    base.regExp.Ctr = base.regExp.instance.constructor;
    base.regExp.proto = base.regExp.Ctr.prototype;
    base.regExp.exec = base.regExp.instance.exec;
    base.regExp.test = base.regExp.instance.test;
    base.regExp.toString = base.regExp.instance.toString;
    base.regExp.splitNewLine = new base.regExp.Ctr('\\r\\n|\\n');
    base.regExp.plusMinus = new base.regExp.Ctr('^[+\\-]?');
    base.regExp.notDigits = new base.regExp.Ctr('^\\d+$');
    base.regExp.testStr = new base.regExp.Ctr(base.str.test);
    base.regExp.escapeThese = new base.regExp.Ctr('[\\[\\](){}?*+\\^$\\\\.|]', base.str.g);
    base.regExp.beginsFunction = new base.regExp.Ctr('^\\s*\\bfunction\\b');
    base.regExp.replacementToken = new base.regExp.Ctr('\\$(?:\\{(\\$+)\\}|(\\d\\d?|[\\s\\S]))', base.str.g);
    base.regExp.getNativeFlags = new base.regExp.Ctr('\\/([a-z]*)$', 'i');
    base.regExp.clipDuplicates = new base.regExp.Ctr('([\\s\\S])(?=[\\s\\S]*\\1)', base.str.g);

    base.date = {};
    base.date.instance = new Date();
    base.date.Ctr = base.date.instance.constructor;
    base.date.proto = base.date.Ctr.prototype;
    base.date.now = base.date.Ctr.now;
    base.date.getTime = base.date.instance.getTime;

    base.error = {};
    base.error.instance = new Error();
    base.error.Ctr = base.error.instance.constructor;
    base.error.proto = base.error.Ctr.prototype;

    base.typeError = {};
    base.typeError.instance = new TypeError();
    base.typeError.Ctr = base.typeError.instance.constructor;
    base.typeError.proto = base.typeError.Ctr.prototype;

    base.syntaxError = {};
    base.syntaxError.instance = new SyntaxError();
    base.syntaxError.Ctr = base.syntaxError.instance.constructor;
    base.syntaxError.proto = base.syntaxError.Ctr.prototype;

    base.rangeError = {};
    base.rangeError.instance = new RangeError();
    base.rangeError.Ctr = base.rangeError.instance.constructor;
    base.rangeError.proto = base.rangeError.Ctr.prototype;

    base.evalError = {};
    base.evalError.instance = new EvalError();
    base.evalError.Ctr = base.evalError.instance.constructor;
    base.evalError.proto = base.evalError.Ctr.prototype;

    base.referenceError = {};
    base.referenceError.instance = new ReferenceError();
    base.referenceError.Ctr = base.referenceError.instance.constructor;
    base.referenceError.proto = base.referenceError.Ctr.prototype;

    base.uriError = {};
    base.uriError.instance = new URIError();
    base.uriError.Ctr = base.uriError.instance.constructor;
    base.uriError.proto = base.uriError.Ctr.prototype;

    function BindCtr() {
        return;
    }

    function proxy(fn, thisArg) {
        var args,
            bound,
            binder,
            boundLength,
            boundArgs,
            index;

        if (fn) {
            boundArgs = [];
            args = base.array.slice.call(arguments, 2);
            boundLength = base.Math.max(0, fn.length - args.length);
            for (index = 0; index < boundLength; index += 1) {
                boundArgs[index] = '$' + index;
            }

            binder = function () {
                if (this instanceof bound) {
                    var result = fn.apply(this, base.array.concat.call(args, base.array.slice.call(arguments)));

                    if (base.object.Ctr(result) === result) {
                        return result;
                    }

                    return this;
                }

                return fn.apply(thisArg, base.array.concat.call(args, base.array.slice.call(arguments)));
            };

            bound = base.Function.Ctr('binder', 'return function(' +
                            base.array.join.call(boundArgs, ',') +
                            '){return binder.apply(this,arguments)}')(binder);

            if (base.object.toString.call(fn.prototype) === base.classString.object) {
                BindCtr.prototype = fn.prototype;
                bound.prototype = new BindCtr();
                BindCtr.prototype = null;
            }
        }

        return bound;
    }

    function toMethod(protoFn) {
        return proxy(base.Function.call, protoFn);
    }

    var testShims = false,
        toClassStr = toMethod(base.object.toString),
        hasOwn = toMethod(base.object.hasOwn),
        isEnumerable = toMethod(base.object.propertyIsEnumerable),
        definePropertyPatch1,
        definePropertyPatch2,
        definePropertyPatch3,
        freezeObject,

        splice = toMethod(base.array.splice),
        push = toMethod(base.array.push),
        join = toMethod(base.array.join),
        concat = toMethod(base.array.concat),
        unshift = toMethod(base.array.unshift),
        pop = toMethod(base.array.pop),
        forEach = toMethod(base.array.forEach),
        some = toMethod(base.array.some),
        every = toMethod(base.array.every),
        map = toMethod(base.array.map),
        slice = toMethod(base.array.slice),
        filter = toMethod(base.array.filter),
        reduce = toMethod(base.array.reduce),
        reduceRight = toMethod(base.array.reduceRight),
        sortFN = base.array.sort,
        indexOf = toMethod(base.array.indexOf),
        lastIndexOf = toMethod(base.array.lastIndexOf),

        split = toMethod(base.string.split),
        trim = toMethod(base.string.trim),
        replace = toMethod(base.string.replace),
        charAt = toMethod(base.string.charAt),
        charCodeAt = toMethod(base.string.charCodeAt),
        strSlice = toMethod(base.string.slice),

        exec = toMethod(base.regExp.exec),
        test = toMethod(base.regExp.test),
        correctExecNpcg,

        strictEqual,
        notStrictEqual,
        patchedIEErrorToString = false,
        hasDontEnumBug = true,
        hasFuncProtoBug = false,
        hasErrorProps,
        nonEnumProps,
        testObject1,
        testObject2,
        TestConstructor,
        previousIEErrorToString,
        isArgumentsCheck,
        fixOpera10GetPrototypeOf,
        testProp,
        testValue,
        testIndex,
        shouldSplitString,
        isOkToUseOtherErrors,
        isFunctionInternal,
        isIENativeFunction,
        isNativeFunction,
        isProtoSupported,
        areGetSetSupported,
        boxedString,
        reduceTypeErrorMessage,
        reduceRightTypeErrorMessage,
        isErrorTypePrototype,
        internalSlice,
        unwantedErrorPropsFilter,
        keysWorksWithArguments,
        // JSON compliance result
        isSupportedResult,

        // JSON stringify variables
        stringifiedValue,
        stringifyGap,
        stringifyIndent,
        stringifyMeta,
        stringifyReplacer,
        stringifyQuote,
        stringifyToString,

        // JSON parse variables
        threwSynatxError,

        publicUtil,

        /**
         * @namespace utilx
         */
        $ = {
            /**
             * @memberOf utilx
             * @namespace Boolean
             */
            Boolean: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Number
             */
            Number: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace String
             */
            String: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Array
             */
            Array: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Object
             */
            Object: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Function
             */
            Function: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Date
             */
            Date: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Error
             */
            Error: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace RegExp
             */
            RegExp: {
                prototype: {}
            },

            /**
             * @memberOf utilx
             * @namespace Math
             */
            Math: {},

            /**
             * @memberOf utilx
             * @namespace JSON
             */
            JSON: {}
        };

    /**
     * +0
     * @memberOf utilx.Number
     * @name POSITIVE_ZERO
     * @type {number}
     */
    $.Number.POSITIVE_ZERO = +0;

    /**
     * -0
     * @memberOf utilx.Number
     * @name NEGATIVE_ZERO
     * @type {number}
     */
    $.Number.NEGATIVE_ZERO = -0;

    /**
     * 128
     * @memberOf utilx.Number
     * @name WORD8
     * @type {number}
     */
    $.Number.WORD8 = 128;

    /**
     * 256
     * @memberOf utilx.Number
     * @name UWORD8
     * @type {number}
     */
    $.Number.UWORD8 = 256;

    /**
     * 65536
     * @memberOf utilx.Number
     * @name WORD16
     * @type {number}
     */
    $.Number.WORD16 = 32768;

    /**
     * 32768
     * @memberOf utilx.Number
     * @name UWORD16
     * @type {number}
     */
    $.Number.UWORD16 = 65536;

    /**
     * 2147483648
     * @memberOf utilx.Number
     * @name WORD32
     * @type {number}
     */
    $.Number.WORD32 = 2147483648;

    /**
     * 4294967296
     * @memberOf utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.UWORD32 = 4294967296;

    /**
     * 4294967295
     * @memberOf utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.MAX_UINT32 = 4294967295;

    /**
     * 2147483647
     * @memberOf utilx.Number
     * @name MAX_INT32
     * @type {number}
     */
    $.Number.MAX_INT32 = 2147483647;

    /**
     * -2147483648
     * @memberOf utilx.Number
     * @name MIN_INT32
     * @type {number}
     */
    $.Number.MIN_INT32 = -2147483648;

    /**
     * 65535
     * @memberOf utilx.Number
     * @name MAX_UINT16
     * @type {number}
     */
    $.Number.MAX_UINT16 = 65535;

    /**
     * 32767
     * @memberOf utilx.Number
     * @name MAX_INT16
     * @type {number}
     */
    $.Number.MAX_INT16 = 32767;

    /**
     * -32768
     * @memberOf utilx.Number
     * @name MIN_INT16
     * @type {number}
     */
    $.Number.MIN_INT16 = -32768;

    /**
     * 255
     * @memberOf utilx.Number
     * @name MAX_UINT8
     * @type {number}
     */
    $.Number.MAX_UINT8 = 255;

    /**
     * 127
     * @memberOf utilx.Number
     * @name MAX_INT8
     * @type {number}
     */
    $.Number.MAX_INT8 = 127;

    /**
     * -128
     * @memberOf utilx.Number
     * @name MIN_INT8
     * @type {number}
     */
    $.Number.MIN_INT8 = -128;

    /**
     * 9007199254740991
     * @memberOf utilx.Number
     * @name MAX_INTEGER
     * @type {number}
     */
    $.Number.MAX_INTEGER = 9007199254740991;

    /**
     * -9007199254740991
     * @memberOf utilx.Number
     * @name MIN_INTEGER
     * @type {number}
     */
    $.Number.MIN_INTEGER = -9007199254740991;

    /**
     * -9007199254740991
     * @memberOf utilx.Number
     * @name UNSAFE_INTEGER
     * @type {number}
     */
    $.Number.UNSAFE_INTEGER = 9007199254740992;

    /**
     * Infinity
     * @memberOf utilx.Number
     * @name POSITIVE_INFINITY
     * @type {number}
     */
    $.Number.POSITIVE_INFINITY = 1 / $.Number.POSITIVE_ZERO;

    /**
     * -Infinity
     * @memberOf utilx.Number
     * @name NEGATIVE_INFINITY
     * @type {number}
     */
    $.Number.NEGATIVE_INFINITY = 1 / $.Number.NEGATIVE_ZERO;

    /**
     * 1.7976931348623157e+308
     * @memberOf utilx.Number
     * @name MAX_VALUE
     * @type {number}
     */
    $.Number.MAX_VALUE = 1.7976931348623157e+308;

    /**
     * 5e-324
     * @memberOf utilx.Number
     * @name MIN_VALUE
     * @type {number}
     */
    $.Number.MIN_VALUE = 5e-324;

    /**
     * NaN
     * @memberOf utilx.Number
     * @name NaN
     * @type {number}
     */
    $.Number.NaN = $.Number.POSITIVE_ZERO / $.Number.POSITIVE_ZERO;

    /**
     * 2.220446049250313e-16
     * @memberOf utilx.Number
     * @name EPSILON
     * @type {number}
     */
    $.Number.EPSILON = 2.220446049250313e-16;

    /**
     * Returns the primitive value undefined.
     * @memberOf utilx.Function
     * @name noop
     * @function
     * @return {undefined}
     */
    $.Function.noop = base.Function.instance;

    /**
     * Returns an arguments object of the arguments supplied.
     * @memberOf utilx.Function
     * @name returnArgs
     * @function
     * @argument {...*} var_args
     * @return {arguments}
     */
    $.Function.returnArgs = function () {
        return arguments;
    };

    /**
     * Coerces an input to a Number.
     * @memberOf utilx.Number
     * @name toNumber
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toNumber = function (inputArg) {
        return +inputArg;
    };

    /**
     * Returns true if the operands are loosely equal.
     * @memberOf utilx.Object
     * @name equal
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.equal = function (a, b) {
        /*jslint eqeq: true */
        return a == b;
    };

    /**
     * Returns true if the operands are not loosely equal.
     * @memberOf utilx.Object
     * @name notEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.notEqual = function (a, b) {
        /*jslint eqeq: true */
        return a != b;
    };

    /**
     * Returns true if the operands are strictly equal with no type conversion.
     * @memberOf utilx.Object
     * @name strictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.strictEqual = strictEqual = function (a, b) {
        return a === b;
    };

    /**
     * Returns true if the operands are not strictly equal with no type conversion.
     * @memberOf utilx.Object
     * @name notStrictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.notStrictEqual = notStrictEqual = function (a, b) {
        return a !== b;
    };

    /**
     * Returns true if the operand number is less than limit.
     * @memberOf utilx.Object
     * @name lt
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.lt = function (a, b) {
        return a < b;
    };

    /**
     * Returns true if the operand number is less than or equal to limit.
     * @memberOf utilx.Object
     * @name lte
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.lte = function (a, b) {
        return a <= b;
    };

    /**
     * Returns true if the operand number is greater than limit.
     * @memberOf utilx.Object
     * @name gt
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.gt = function (a, b) {
        return a > b;
    };

    /**
     * Returns true if the operand number is greater than or equal to limit.
     * @memberOf utilx.Object
     * @name gte
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.gte = function (a, b) {
        return a >= b;
    };

    /**
     * The mod/remainder operator returns the first operand modulo of the second operand, that is,
     * number1 modulo number2, in the preceding statement, where number1 and number2 are numbers.
     * The modulo function is the integer remainder of dividing number1 by number2.
     * For example, 12 % 5 returns 2. The result will have the same sign as number1; that is, -1 % 2 returns -1.
     * Truncating division
     * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator}
     * @memberOf utilx.Number
     * @name mod
     * @function
     * @param {*} a
     * @param {*} b
     * @return {number}
     */
    $.Number.mod = function (a, b) {
        return a % b;
    };

    /**
     * Returns a number clamped to the range set by min and max.
     * @memberOf utilx.Number
     * @name clamp
     * @function
     * @param {*} number
     * @param {*} min
     * @param {*} max
     * @return {number}
     */
    $.Number.clamp = function (number, min, max) {
        return base.Math.min(base.Math.max(number, min), max);
    };

    /**
     * Returns true if the operand inputArg is undefined.
     * @memberOf utilx.Object
     * @name isUndefined
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isUndefined = function (inputArg) {
        return strictEqual(typeof inputArg, base.str.Undefined);
    };

    /**
     * Returns true if the operand inputArg is null.
     * @memberOf utilx.Object
     * @name isNull
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isNull = function (inputArg) {
        return inputArg === null;
    };

    /**
     * Indicates if __proto__ is supported.
     * @private
     * @name isProtoSupported
     * @type {boolean}
     */
    isProtoSupported = (base.object.proto[base.str.proto] === null);

    /**
     * Returns true if the operand inputArg is undefined or null.
     * @memberOf utilx.Object
     * @name isUndefinedOrNull
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isUndefinedOrNull = function (value) {
        return value === null || strictEqual(typeof value, base.str.Undefined);
    };

    /**
     * Returns true if the operand inputArg is a true.
     * @memberOf utilx.Boolean
     * @name isTrue
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isTrue = function (inputArg) {
        return inputArg === true;
    };

    /**
     * Returns true if the operand inputArg is a false.
     * @memberOf utilx.Boolean
     * @name isFalse
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isFalse = function (inputArg) {
        return inputArg === false;
    };

    /**
     * Returns true if the operand inputArg is a boolean.
     * @memberOf utilx.Boolean
     * @name isBoolean
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isBoolean = function (inputArg) {
        return inputArg === true || inputArg === false;
    };

    /**
     * Returns true if the operand inputArg is a truthy.
     * @memberOf utilx.Object
     * @name isTruthy
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isTruthy = function (inputArg) {
        return !!inputArg;
    };

    /**
     * Returns true if the operand inputArg is a falsy.
     * @memberOf utilx.Object
     * @name isFalsy
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isFalsy = function (inputArg) {
        return !inputArg;
    };

    /**
     * Returns true if the operand inputArg is a Number.
     * @memberOf utilx.Number
     * @name isNumber
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isNumber = function (inputArg) {
        return strictEqual(typeof inputArg, base.str.number);
    };

    /**
     * Returns true if the operand inputArg is the number 0.
     * @memberOf utilx.Number
     * @name isZero
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isZero = function (inputArg) {
        return inputArg === 0;
    };

    /**
     * Returns true if the operand inputArg is the number 0 or +0.
     * @memberOf utilx.Number
     * @name isPositiveZero
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isPositiveZero = function (inputArg) {
        return inputArg === 0 && (1 / inputArg) === $.Number.POSITIVE_INFINITY;
    };

    /**
     * Returns true if the operand inputArg is the number -0.
     * @memberOf utilx.Number
     * @name isNegativeZero
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isNegativeZero = function (inputArg) {
        return inputArg === 0 && (1 / inputArg) === $.Number.NEGATIVE_INFINITY;
    };

    /**
     * Returns true if the operand inputArg is a string.
     * @memberOf utilx.String
     * @name isString
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isString = function (inputArg) {
        return strictEqual(typeof inputArg, base.str.string);
    };

    /**
     * Returns true if the operand inputArg is a primitive object.
     * @memberOf utilx.Object
     * @name isPrimitive
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isPrimitive = function (inputArg) {
        return inputArg === null || inputArg === true || inputArg === false ||
            strictEqual(typeof inputArg, base.str.Undefined) ||
            strictEqual(typeof inputArg, base.str.string) ||
            strictEqual(typeof inputArg, base.str.number);
    };

    /**
     * Returns true if the operand inputArg is not a primitive object.
     * @memberOf utilx.Object
     * @name isNotPrimitive
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isNotPrimitive = function (inputArg) {
        return !$.Object.isPrimitive(inputArg);
    };

    /**
     * Returns true if the operand inputArg is typeof Object.
     * @memberOf utilx.Object
     * @name isTypeOfObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if (strictEqual(typeof base.regExp.testStr, base.str.object)) {
        $.Object.isTypeOfObject = function (inputArg) {
            return strictEqual(typeof inputArg, base.str.object);
        };
    } else {
        $.Object.isTypeOfObject = function (inputArg) {
            return strictEqual(typeof inputArg, base.str.object) || $.RegExp.isRegExp(inputArg);
        };
    }

    /**
     * Returns true if the operand inputArg is of type Object but not if null.
     * @memberOf utilx.Object
     * @name isTypeObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isTypeObject = function (inputArg) {
        return inputArg !== null && $.Object.isTypeOfObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a boolean object.
     * @memberOf utilx.Boolean
     * @name isBooleanObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isBooleanObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.boolean;
    };

    /**
     * Returns true if the operand inputArg is a boolean object with the value of true.
     * @memberOf utilx.Boolean
     * @name isTrueObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isTrueObject = function (inputArg) {
        return $.Boolean.isBooleanObject(inputArg) && base.boolean.valueOf.call(inputArg) === true;
    };

    /**
     * Returns true if the operand inputArg is a boolean object with the value of false.
     * @memberOf utilx.Boolean
     * @name isFalseObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isFalseObject = function (inputArg) {
        return $.Boolean.isBooleanObject(inputArg) && base.boolean.valueOf.call(inputArg) === false;
    };

    /**
     * Returns true if the operand inputArg is a string object.
     * @memberOf utilx.String
     * @name isStringObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isStringObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.string;
    };

    /**
     * Returns true if the operand inputArg is a number object.
     * @memberOf utilx.Number
     * @name isNumberObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isNumberObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.number;
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object.
     * @memberOf utilx.Boolean
     * @name isBooleanAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isBooleanAny = function (inputArg) {
        return inputArg === true || inputArg === false || $.Boolean.isBooleanObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object with the value of true.
     * @memberOf utilx.Boolean
     * @name isTrueAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isTrueAny = function (inputArg) {
        return inputArg === true || $.Boolean.isTrueObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object with the value of false.
     * @memberOf utilx.Boolean
     * @name isFalseAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Boolean.isFalseAny = function (inputArg) {
        return inputArg === false || $.Boolean.isFalseObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a string literal or object.
     * @memberOf utilx.String
     * @name isStringAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isStringAny = function (inputArg) {
        return $.String.isString(inputArg) || $.String.isStringObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a number literal or object.
     * @memberOf utilx.Number
     * @name isNumberAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isNumberAny = function (inputArg) {
        return $.Number.isNumber(inputArg) || $.Number.isNumberObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is an empty string (ie '').
     * @memberOf utilx.String
     * @name isEmpty
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isEmpty = function (inputArg) {
        return inputArg === base.str.empty;
    };

    /**
     * Returns true if the operand inputArg is an empty string object (ie '').
     * @memberOf utilx.String
     * @name isEmptyObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isEmptyObject = function (inputArg) {
        return $.String.isStringObject(inputArg) && base.string.valueOf.call(inputArg) === base.str.empty;
    };

    /**
     * Returns true if the operand inputArg is an empty string literal or object (ie '').
     * @memberOf utilx.String
     * @name isEmptyAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isEmptyAny = function (inputArg) {
        return $.String.isStringAny(inputArg) && base.string.valueOf.call(inputArg) === base.str.empty;
    };

    /**
     * Returns true if the operand inputArg is a string and is not empty.
     * @memberOf utilx.String
     * @name isNotEmpty
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isNotEmpty = function (inputArg) {
        return $.String.isString(inputArg) && inputArg !== base.str.empty;
    };

    /**
     * Returns true if the operand inputArg is a string object and is not empty.
     * @memberOf utilx.String
     * @name isNotEmptyObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isNotEmptyObject = function (inputArg) {
        return $.String.isStringObject(inputArg) && base.string.valueOf.call(inputArg) !== base.str.empty;
    };

    /**
     * Returns true if the operand inputArg is a string literal or object and is not empty.
     * @memberOf utilx.String
     * @name isNotEmptyAny
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.String.isNotEmptyAny = function (inputArg) {
        return $.String.isStringAny(inputArg) && base.string.valueOf.call(inputArg) !== base.str.empty;
    };

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object using $.Object.ToObject, otherwise returns the argument.
     * @memberOf utilx.Object
     * @name CheckObjectCoercible
     * @function
     * @param {*} inputArg
     * @param {string} [msg]
     * @return {boolean}
     */
    $.Object.CheckObjectCoercible = function (inputArg) {
        if (inputArg === null || strictEqual(typeof inputArg, base.str.Undefined)) {
            throw new TypeError('Cannot convert "' + inputArg + '" to object');
        }

        return inputArg;
    };

    /**
     * The abstract operation converts its argument to a value of type Object
     * @memberOf utilx.Object
     * @name ToObject
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    $.Object.ToObject = function (inputArg) {
        return base.object.Ctr($.Object.CheckObjectCoercible(inputArg));
    };

    /**
     * The abstract operation converts its argument to a value of type String
     * @memberOf utilx.String
     * @name ToString
     * @function
     * @param {*} inputArg
     * @return {string}
     */
    $.String.ToString = function (inputArg) {
        var val;

        if ($.String.isString(inputArg)) {
            val = inputArg;
        } else if (strictEqual(typeof inputArg, base.str.Undefined)) {
            val = base.str.Undefined;
        } else {
            val = base.string.Ctr(inputArg);
        }

        return val;
    };

    /**
     * Returns true if the specified property is in the specified object.
     * @memberOf utilx.Object
     * @name has
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
    $.Object.has = function (object, property) {
        return property in object;
    };

    /**
     * Returns true if the operand inputArg is an argumenta object.
     * @memberOf utilx.Object
     * @name isArguments
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if (toClassStr($.Function.returnArgs()) === base.classString.arguments) {
        $.Object.isArguments = function (inputArg) {
            return toClassStr(inputArg) === base.classString.arguments;
        };
    } else {
        isArgumentsCheck = function (inputArg) {
            return $.Object.isTypeObject(inputArg) &&
                toClassStr(inputArg) === base.classString.object &&
                hasOwn(inputArg, base.str.callee) &&
                hasOwn(inputArg, base.str.Length) &&
                $.Number.isNumber(inputArg.length);
        };

        if (toClassStr(isEnumerable) === base.classString.Function) {
            $.Object.isArguments = function (inputArg) {
                return isArgumentsCheck(inputArg) &&
                    !isEnumerable(inputArg, base.str.callee) &&
                    !isEnumerable(inputArg, base.str.Length);
            };
        } else {
            $.Object.isArguments = isArgumentsCheck;
        }
    }

    /**
     * Tests to see if the argument is one of the seven standard Error type prototypes.
     * @private
     * @function isErrorTypePrototype
     * @param {*} inputArg
     * @return {boolean}
     */
    isErrorTypePrototype = function (inputArg) {
        var result;

        switch (inputArg) {
        case base.error.proto:
            /* falls through */
        case base.typeError.proto:
            /* falls through */
        case base.syntaxError.proto:
            /* falls through */
        case base.rangeError.proto:
            /* falls through */
        case base.evalError.proto:
            /* falls through */
        case base.referenceError.proto:
            /* falls through */
        case base.uriError.proto:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * @memberOf utilx.Object
     * @name ToClassString
     * @function
     * @param {*} object
     * @return {string}
     */
    try {
        if (toClassStr() === base.classString.Undefined &&
                toClassStr(null) === base.classString.Null &&
                toClassStr(base.regExp.proto) === base.classString.regexp &&
                toClassStr(base.string.proto) === base.classString.string &&
                toClassStr(base.error.proto) === base.classString.error &&
                toClassStr($.Function.returnArgs()) === base.classString.arguments) {

            $.Object.ToClassString = function (object) {
                return toClassStr(object);
            };
        }
    } catch (ignore) {}

    if (strictEqual(typeof $.Object.ToClassString, base.str.Undefined)) {
        $.Object.ToClassString = function (object) {
            var val;

            if (strictEqual(typeof object, base.str.Undefined)) {
                val = base.classString.Undefined;
            } else if (object === null) {
                val = base.classString.Null;
            } else if ($.Object.isArguments(object)) {
                val = base.classString.arguments;
            } else if (object === base.number.proto) {
                val = base.classString.number;
            } else if (object === base.boolean.proto) {
                val = base.classString.boolean;
            } else if (object === base.object.proto) {
                val = base.classString.object;
            } else if (object === base.Function.proto) {
                val = base.classString.Function;
            } else if (object === base.string.proto) {
                val = base.classString.string;
            } else if (object === base.date.proto) {
                val = base.classString.date;
            } else if (object === base.regExp.proto) {
                val = base.classString.regexp;
            } else if (isErrorTypePrototype(object)) {
                val = base.classString.error;
            } else {
                val = toClassStr(object);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is an error.
     * @memberOf utilx.Error
     * @name isError
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Error.isError = function (inputArg) {
        return $.Object.ToClassString(inputArg) === base.classString.error ||
            ($.Object.isTypeObject(inputArg) && $.Object.instanceOf(inputArg, base.error.Ctr));
    };

    /**
     * Returns true if the operand inputArg is a RegExp.
     * @memberOf utilx.RegExp
     * @name isRegExp
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.RegExp.isRegExp = function (inputArg) {
        return $.Object.ToClassString(inputArg) === base.classString.regexp &&
            $.String.isString(inputArg.source) && (inputArg.global === true || inputArg.global === false);
    };

    /**
     * Returns true if the operand inputArg is a native Function in IE. Used by Function.isFunction.
     * @private
     * @function isIENativeFunction
     * @param {*} inputArg
     * @return {boolean}
     */
    if ($.Object.isTypeObject(window) && window.alert &&
                strictEqual(typeof window.alert.toString, base.str.Undefined) &&
                test(base.regExp.beginsFunction, window.alert)) {

        isIENativeFunction = function (inputArg) {
            // inputArg
            // we want return true or false

            // inputArg.toString === undefined
            // native functions do not
            // contain a toString callback
            // as is for every user defined
            // function or object, even if deleted
            // so next step is a "safe" destructuration
            // assumption

            // test(base.regExp.beginsFunction, inputArg)
            // we are looking for a function
            // and IE shows them with function
            // as first word. Eventually
            // there could be a space
            // (never happened, it does not hurt anyway)

            return inputArg && strictEqual(typeof inputArg.toString, base.str.Undefined) &&
                    test(base.regExp.beginsFunction, inputArg);
        };
    } else {
        isIENativeFunction = function () {
            return false;
        };
    }

    /**
     * Test if a function is native by simply trying to evaluate its original Function.prototype.toString call.
     * Used by Function.isFunction.
     * @private
     * @function isNativeFunction
     * @param {*} inputArg
     * @return {boolean}
     */
    try {
        /*jslint evil: true */
        base.eval('(' + base.Function.toString.call(base.Function.Ctr) + ')');
        /*jslint evil: false */
        // Opera 10 doesn't play ball so have to test the string
        testValue = '^function \\S*\\(\\) \\{ (\\[native code\\]|\\/\\* source code not available \\*\\/) \\}$';
        base.regExp.operaNative = new base.regExp.Ctr(testValue);
        isNativeFunction = function (inputArg) {
            return test(base.regExp.operaNative, inputArg);
        };
    } catch (eINF1) {
        isNativeFunction = function (inputArg) {
            var val = false,
                ownToString;

            try {
                // no execution
                // just an error if it is native
                // every browser manifest native
                // functions with some weird char
                // that cannot be evaluated [native]
                ownToString = inputArg.toString;
                /*jslint evil: true */
                base.eval('(' + ownToString.call(inputArg) + ')');
                /*jslint evil: false */
            } catch (eINF2) {
                val = true;
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by Function.isFunction.
     * @private
     * @function isFunctionBasic
     * @param {*} inputArg
     * @return {boolean}
     */
    function isFunctionBasic(inputArg) {
        return $.Object.ToClassString(inputArg) === base.classString.Function ||
            (strictEqual(typeof inputArg, base.str.Function) &&
             strictEqual(typeof inputArg.call, base.str.Function) &&
             strictEqual(typeof inputArg.apply, base.str.Function));
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by Function.isFunction.
     * @private
     * @function isFunctionExtended
     * @param {*} inputArg
     * @return {boolean}
     */
    function isFunctionExtended(inputArg) {
        // it should be a function in any case
        // before we try to pass it to
        // Function.prototype.toString
        return isFunctionInternal(inputArg, false) && isNativeFunction(inputArg);
    }

    try {
        // native function cannot be passed
        // to native Function.prototype.toString
        // as scope to evaluate ... only IE, sure
        if ($.Object.isTypeObject(window) && window.alert) {
            base.Function.toString.call(window.alert);
        }

        // this function is for every other browser
        isFunctionInternal = function (inputArg, n) {
            var val;

            if (!n) {
                val = isFunctionBasic(inputArg);
            } else {
                val = isFunctionExtended(inputArg);
            }

            return val;
        };
    } catch (eIFI) {
        isFunctionInternal = function (inputArg, n) {
            var val;

            if (!n) {
                val = isFunctionBasic(inputArg);
            } else {
                val = isIENativeFunction(inputArg) || isFunctionExtended(inputArg);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function.
     * @memberOf utilx.Function
     * @name isFunction
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Function.isFunction = function (inputArg) {
        return isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true);
    };

    /**
     * Returns true if the operand inputArg is a native Function.
     * @memberOf utilx.Function
     * @name isNativeFunction
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Function.isNativeFunction = function (inputArg) {
        return $.Function.isFunction(inputArg) && (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
    };

    /**
     * Returns true if the operand inputArg is an Object.
     * @memberOf utilx.Object
     * @name isObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isObject = function (inputArg) {
        return $.Object.ToClassString(inputArg) === base.classString.object && !$.Function.isFunction(inputArg);
    };

    /**
     * Indicates if __defineGetter__ and __lookupSetter__ are supported.
     * @private@name areGetSetSupported
     * @type {boolean}
     */
    areGetSetSupported = ($.Function.isFunction(base.object[base.str.lookupGetter]) &&
                          $.Function.isFunction(base.object[base.str.lookupSetter]));

    /**
     * Throws a TypeError if arguments is not a function otherwise returns the function.
     * @private
     * @function throwIfNotAFunction
     * @param {*} inputArg
     * @return {function}
     */
    function throwIfNotAFunction(inputArg) {
        if (!$.Function.isFunction(inputArg)) {
            throw new base.typeError.Ctr(inputArg + ' is not a function');
        }

        return inputArg;
    }

    /**
     * Returns true if the operand inputArg is an object or function but not null.
     * @private
     * @function isTypeObjectOrIsFunction
     * @param {*} inputArg
     * @return {boolean}
     */
    function isTypeObjectOrIsFunction(inputArg) {
        return $.Object.isTypeObject(inputArg) || $.Function.isFunction(inputArg);
    }

    /**
     * Throws a TypeError if the operand inputArg is not an object or not a function,
     * otherise returns the object.
     * @private
     * @function throwIfIsNotTypeObjectOrIsNotFunction
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotTypeObjectOrIsNotFunction(inputArg) {
        if (!isTypeObjectOrIsFunction(inputArg)) {
            throw new base.typeError.Ctr('called on non-object');
        }

        return inputArg;
    }

    /**
     * This method creates a new function that, when called, has its this keyword set to the provided value,
     * with a given sequence of arguments preceding any provided when the new function is called.
     * @memberOf utilx.Function
     * @name bind
     * @function
     * @param {function} fn
     * @param {object} thisArg
     * @param {...*} [var_args]
     * @return {function}
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.Function.bind)) {
            throw new base.error.Ctr();
        }

        testObject1 = [1, 2, 3];
        TestConstructor = base.Function.bind.call(function () {
            return testObject1;
        }, null);

        testObject2 = new TestConstructor();
        if (testObject1 !== testObject2) {
            throw new base.error.Ctr();
        }

        testObject1 = function (x) {
            this.name = x || 'A';
        };

        TestConstructor = base.Function.bind.call(testObject1, null, 'B');
        testObject2 = new TestConstructor();
        if (!(testObject2 instanceof testObject1) || !(testObject2 instanceof TestConstructor)) {
            throw new base.error.Ctr();
        }

        $.Function.bind = base.Function.bind.call(base.Function.call, base.Function.bind);
    } catch (eBind) {
        $.Function.prototype.bind = function (thisArg) {
            var fn = throwIfNotAFunction(this),
                args = slice(arguments, 1),
                bound,
                binder = function () {
                    if (this instanceof bound) {
                        var result = fn.apply(this, concat(args, slice(arguments)));

                        if (base.object.Ctr(result) === result) {
                            return result;
                        }

                        return this;
                    }

                    return fn.apply(thisArg, concat(args, slice(arguments)));
                },
                boundLength = base.Math.max(0, fn.length - args.length),
                boundArgs = [],
                index;

            for (index = 0; index < boundLength; index += 1) {
                boundArgs[index] = '$' + index;
            }

            bound = base.Function.Ctr('binder', 'return function(' + join(boundArgs, ',') +
                             '){return binder.apply(this,arguments)}')(binder);

            if ($.Object.isObject(fn.prototype)) {
                BindCtr.prototype = fn.prototype;
                bound.prototype = new BindCtr();
                BindCtr.prototype = null;
            }

            return bound;
        };

        $.Function.bind = $.Function.prototype.bind.call(base.Function.call, $.Function.prototype.bind);
    }

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * @memberOf utilx.Function
     * @name ToMethod
     * @function
     * @param {function} protoFn
     * @return {function}
     */
    $.Function.ToMethod = function (protoFn) {
        return $.Function.bind(base.Function.call, throwIfNotAFunction(protoFn));
    };

    /**
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     * @memberOf utilx.Array
     * @name isArray
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.isArray)) {
        $.Array.isArray = base.array.isArray;
    } else {
        $.Array.isArray = function (inputArg) {
            return $.Object.ToClassString(inputArg) === base.classString.array;
        };
    }

    /**
     * The arrayJoin() method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     * @memberOf utilx.Array
     * @name join
     * @function
     * @param {array} inputArg
     * @param {string} [separator]
     * @return {*}
     */
    $.Array.prototype.join = function (separator) {
        $.Object.CheckObjectCoercible(this);
        if (strictEqual(typeof separator, base.str.Undefined)) {
            separator = ',';
        }

        return join(this, separator);
    };

    $.Array.join = $.Function.ToMethod($.Array.prototype.join);

    /**
     * Returns true if the operand inputArg is a Date object.
     * @memberOf utilx.Date
     * @name isDate
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Date.isDate = function (inputArg) {
        return $.Object.ToClassString(inputArg) === base.classString.date;
    };

    /**
     * Determines whether two values are the same value.
     * @memberOf utilx.Object
     * @name is
     * @function
     * @param {*} x
     * @param {*} y
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.is)) {
        $.Object.is = base.object.is;
    } else {
        $.Object.is = function (x, y) {
            var val;

            if (x === y) {
                if (x === 0) {
                    val = (1 / x) === (1 / y);
                } else {
                    val = true;
                }
            } else {
                val = notStrictEqual(x, x) && notStrictEqual(y, y);
            }

            return val;
        };
    }

    /**
     * Determines whether two values are not the same value.
     * @memberOf utilx.Object
     * @name isnt
     * @function
     * @param {*} x
     * @param {*} y
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.isnt)) {
        $.Object.isnt = base.object.isnt;
    } else {
        $.Object.isnt = function (x, y) {
            return !$.Object.is(x, y);
        };
    }

    /**
     * Returns true if the operands are of the same typeof.
     * @memberOf utilx.Object
     * @name areSameTypeOf
     * @function
     * @param {*} a
     * @param {*} b
     * @param {...*} [var_args]
     * @return {boolean}
     */
    $.Object.areSameTypeOf = function (a) {
        if (arguments.length < 2) {
            throw new base.syntaxError.Ctr('must supply at least 2 arguments');
        }

        return !$.Array.some(arguments, function (arg) {
            return notStrictEqual(this, typeof arg);
        }, typeof a);
    };

    /**
     * Returns true if the operands are of the same object class.
     * @memberOf utilx.Object
     * @name areSameClass
     * @function
     * @param {*} a
     * @param {*} b
     * @param {...*} [var_args]
     * @return {boolean}
     */
    $.Object.areSameClass = function areSameClass(a) {
        if (arguments.length < 2) {
            throw new base.syntaxError.Ctr('must supply at least 2 arguments');
        }

        return !$.Array.some(arguments, function (arg) {
            return this !== $.Object.ToClassString(arg);
        }, $.Object.ToClassString(a));
    };

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * @memberOf utilx.Number
     * @name isNaN
     * @function
     * @param {*} number
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.number.isNaN)) {
        $.Number.isNaN = base.number.isNaN;
    } else {
        $.Number.isNaN = function (number) {
            return $.Object.is(number, $.Number.NaN);
        };
    }

    /**
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     * @memberOf utilx.Number
     * @name inRange
     * @function
     * @param {(number|string)} value
     * @param {(number|string)} min
     * @param {(number|string)} max
     * @return {boolean}
     */
    $.Number.inRange = function (value, min, max) {
        if (!$.Number.isNumberAny(value) && !$.String.isStringAny(value)) {
            throw new base.typeError.Ctr('arguments must be either numbers or strings');
        }

        if (!$.Object.areSameTypeOf(value, min, max)) {
            throw new base.typeError.Ctr('arguments must be of the same type');
        }

        if (min === max || $.Number.isNaN(min) || $.Number.isNaN(max)) {
            throw new base.rangeError.Ctr('min and max do not define a range');
        }

        return value >= min && value <= max;
    };

    /**
     * Returns true if the operand value is less than or equal to min or is greater than or equal to max.
     * @memberOf utilx.Number
     * @name outRange
     * @function
     * @param {(number|string)} value
     * @param {(number|string)} min
     * @param {(number|string)} max
     * @return {boolean}
     */
    $.Number.outRange = function (value, min, max) {
        if (!$.Number.isNumberAny(value) && !$.String.isStringAny(value)) {
            throw new base.typeError.Ctr('arguments must be either numbers or strings');
        }

        if (!$.Object.areSameTypeOf(value, min, max)) {
            throw new base.typeError.Ctr('arguments must be of the same type');
        }

        if (min === max || $.Number.isNaN(min) || $.Number.isNaN(max)) {
            throw new base.rangeError.Ctr('min and max do not define a range');
        }

        return value <= min || value >= max;
    };

    /**
     * The function determines whether the passed value is finite.
     * More robust version of the original global isFinite.
     * @memberOf utilx.Number
     * @name isFinite
     * @function
     * @param {*} number
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.number.isFinite)) {
        $.Number.isFinite = base.number.isFinite;
    } else {
        $.Number.isFinite = function (number) {
            return $.Number.isNumber(number) && base.isFinite(number);
        };
    }

    /**
     * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
     * "negative number", "positive zero",  "negative zero" and NaN respectively.
     * @memberOf utilx.Math
     * @name sign
     * @function
     * @param {*} value
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.Math.sign)) {
        $.Math.sign = base.Math.sign;
    } else {
        $.Math.sign = function (value) {
            var number = +value,
                val;

            if (number === 0 || $.Number.isNaN(number)) {
                val = number;
            } else if (number < 0) {
                val = -1;
            } else {
                val = 1;
            }

            return val;
        };
    }

    /**
     * The function evaluates the passed value and converts it to an integer.
     * @memberOf utilx.Number
     * @name toInteger
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.number.toInteger)) {
        $.Number.toInteger = base.number.toInteger;
    } else {
        $.Number.toInteger = function (inputArg) {
            var number = +inputArg,
                val;

            if ($.Number.isNaN(number)) {
                val = 0;
            } else if (number === 0 || !$.Number.isFinite(number)) {
                val = number;
            } else {
                val = $.Math.sign(number) * base.Math.floor(base.Math.abs(number));
            }

            return val;
        };
    }

    /**
     * The $.Number.isInteger() method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isInteger
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.number.isInteger)) {
            throw new base.error.Ctr();
        }

        if (base.number.isInteger($.Number.UNSAFE_INTEGER) || base.number.isInteger(-$.Number.UNSAFE_INTEGER)) {
            throw new base.error.Ctr('Failed unsafe integer check');
        }

        $.Number.isInteger = base.number.isInteger;
    } catch (eIsInt) {
        $.Number.isInteger = function nfeIsInteger(inputArg) {
            return !$.Number.isNaN(inputArg) && $.Number.isFinite(inputArg) &&
                $.Number.inRange(inputArg, $.Number.MIN_INTEGER, $.Number.MAX_INTEGER) &&
                $.Number.toInteger(inputArg) === inputArg;
        };
    }

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range -2^31 through 2^31-1, inclusive.
     * @memberOf utilx.Number
     * @name toInt32
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toInt32 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = ($.Math.sign(number) * base.Math.floor(base.Math.abs(number))) % $.Number.UWORD32;
            if (val > $.Number.MAX_INT32) {
                val -= $.Number.UWORD32;
            } else if (val < $.Number.MIN_INT32) {
                val += $.Number.UWORD32;
            }
        }

        return val;
    };

    /**
     * The $.Number.isInt32() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^31 through 2^31-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isInt32
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isInt32 = function (inputArg) {
        return $.Number.isInteger(inputArg) &&
            $.Number.inRange(inputArg, $.Number.MIN_INT32, $.Number.MAX_INT32);
    };

    /**
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Rounding division
     * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator}
     * @memberOf utilx.Number
     * @name modulo
     * @function
     * @param {*} dividend
     * @param {*} divisor
     * @return {number}
     */
    $.Number.prototype.modulo = function (divisor) {
        return this - divisor * base.Math.floor(this / divisor);
    };

    $.Number.modulo = $.Function.ToMethod($.Number.prototype.modulo);

    /**
     * The Number.isOdd returns true if the integer is odd otherwise false.
     * @memberOf utilx.Number
     * @name isOdd
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isOdd = function (inputArg) {
        return $.Number.isInteger(inputArg) && (inputArg % 2) !== 0;
    };

    /**
     * The Number.isEven returns true if the integer is even otherwise false.
     * @memberOf utilx.Number
     * @name isOdd
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isEven = function (inputArg) {
        return $.Number.isInteger(inputArg) && (inputArg % 2) === 0;
    };

    /**
     * The abstract operation converts its argument to one of 2^53 integer values in
     * the range 0 through 2^53-1,inclusive.
     * @memberOf utilx.Number
     * @name toUint
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toUint = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = $.Number.modulo($.Number.toInteger(number), $.Number.UNSAFE_INTEGER);
        }

        return val;
    };

    /**
     * The $.Number.isUint() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^53-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isUint
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isUint = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, 0, $.Number.MAX_INTEGER);
    };

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range 0 through 2^32-1,inclusive.
     * @memberOf utilx.Number
     * @name toUint32
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toUint32 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = $.Number.modulo($.Number.toInteger(number), $.Number.UWORD32);
        }

        return val;
    };

    /**
     * The $.Number.isUint32() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^32-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isUint32
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isUint32 = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, 0, $.Number.MAX_UINT32);
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range -2^15 through 2^15-1, inclusive.
     * @memberOf utilx.Number
     * @name toInt16
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toInt16 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = ($.Math.sign(number) * base.Math.floor(base.Math.abs(number))) % $.Number.UWORD16;
            if (val > $.Number.MAX_INT16) {
                val -= $.Number.UWORD16;
            } else if (val < $.Number.MIN_INT16) {
                val += $.Number.UWORD16;
            }
        }

        return val;
    };

    /**
     * The $.Number.isInt16() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^15 through 2^15-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isInt16
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isInt16 = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, $.Number.MIN_INT16, $.Number.MAX_INT16);
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range 0 through 2^16-1,inclusive.
     * @memberOf utilx.Number
     * @name toUint16
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toUint16 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = $.Number.modulo($.Number.toInteger(number), $.Number.UWORD16);
        }

        return val;
    };

    /**
     * The $.Number.isUint16() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^16-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isUint16
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isUint16 = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, 0, $.Number.MAX_UINT16);
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range -2^7 through 2^7-1, inclusive.
     * @memberOf utilx.Number
     * @name toInt8
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toInt8 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val  = ($.Math.sign(number) * base.Math.floor(base.Math.abs(number))) % $.Number.UWORD8;
            if (val > $.Number.MAX_INT8) {
                val -= $.Number.UWORD8;
            } else if (val < $.Number.MIN_INT8) {
                val += $.Number.UWORD8;
            }
        }

        return val;
    };

    /**
     * The $.Number.isInt8() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^7 through 2^7-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isInt8
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isInt8 = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, $.Number.MIN_INT8, $.Number.MAX_INT8);
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range 0 through 2^8-1,inclusive.
     * @memberOf utilx.Number
     * @name toUint8
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.Number.toUint8 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = $.Number.modulo($.Number.toInteger(number), $.Number.UWORD8);
        }

        return val;
    };

    /**
     * The $.Number.isUint8() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^8-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx.Number
     * @name isUint8
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Number.isUint8 = function (inputArg) {
        return $.Number.isInteger(inputArg) && $.Number.inRange(inputArg, 0, $.Number.MAX_UINT8);
    };

    /**
     * The Array.push() method adds one or more elements to the end of an array and
     * returns the new length of the array.
     * @memberOf utilx.Array
     * @name push
     * @function
     * @param {array} array
     * @param {...*} [var_args]
     * @return {number}
     */
    if (!testShims && push([], 0) === 1) {
        $.Array.push = $.Function.ToMethod(base.array.push);
    } else {
        $.Array.prototype.push = function () {
            base.array.push.apply(this, slice(arguments));

            return this.length;
        };

        $.Array.push = $.Function.ToMethod($.Array.prototype.push);
    }

    /**
     * The Array.unshift() method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     * @memberOf utilx.Array
     * @name unshift
     * @function
     * @param {array} array
     * @param {...*} var_args
     * @return {number}
     */
    if (!testShims && unshift([], 0) === 1) {
        $.Array.unshift = $.Function.ToMethod(base.array.unshift);
    } else {
        $.Array.prototype.unshift = function () {
            base.array.unshift.apply(this, slice(arguments));

            return this.length;
        };

        $.Array.unshift = $.Function.ToMethod($.Array.prototype.unshift);
    }

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error.
     * @private
     * @function onlyCoercibleToString
     * @param {*} inputArg
     * @return {string}
     */
    function onlyCoercibleToString(inputArg) {
        return $.String.ToString($.Object.CheckObjectCoercible(inputArg));
    }

    /**
     * Returns an integer clamped to the range set by min and max.
     * @membrOf utilx.Number
     * @name clampToInt
     * @function
     * @param {*} number
     * @param {*} min
     * @param {*} max
     * @return {number}
     */
    $.Number.clampToInt = function (number, min, max) {
        return $.Number.clamp($.Number.toInteger(number), $.Number.toInteger(min), $.Number.toInteger(max));
    };

    /**
     * Removes any duplicate characters from the provided string.
     * @memberOf utilx.String
     * @function clipDuplicates
     * @param {string} str String to remove duplicate characters from.
     * @returns {string} String with any duplicate characters removed.
     */
    $.String.clipDuplicates = function (str) {
        return replace(str, base.regExp.clipDuplicates, base.str.empty);
    };

    /**
     * Throws a TypeError if the argument is not a RegExp.
     * @function throwIfIsNotRegExp
     * @private
     * @param {RegExp} inputArg
     * @returns {RegExp}
     */
    function throwIfIsNotRegExp(inputArg) {
        if (!$.RegExp.isRegExp(inputArg)) {
            throw new base.typeError.Ctr('Type RegExp expected');
        }

        return inputArg;
    }

    /**
     * Copies a regex object. Allows adding and removing native flags while copying the regex.
     * @private
     * @function copyRegExp
     * @param {RegExp} regex Regex to copy.
     * @param {Object} [options] Allows specifying native flags to add or remove while copying the regex.
     * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
     */
    function copyRegExp(regExpArg, options) {
        throwIfIsNotRegExp(regExpArg);

        if (!$.Object.isPlainObject(options)) {
            options = {};
        }

        // Get native flags in use
        var flags = exec(base.regExp.getNativeFlags, $.String.ToString(regExpArg))[1];

        if (options.add) {
            flags = $.String.clipDuplicates(flags + options.add);
        }

        if (options.remove) {
            // Would need to escape `options.remove` if this was public
            flags = replace(flags, new base.regExp.Ctr('[' + options.remove + ']+', base.str.g), base.str.empty);
        }

        return new base.regExp.Ctr(regExpArg.source, flags);
    }

    // Check for correct `exec` handling of nonparticipating capturing groups
    correctExecNpcg = strictEqual(typeof exec(new base.regExp.Ctr('()??'), base.str.empty)[1],
                                           base.str.Undefined);

    /**
     * Fixes browser bugs in the native `RegExp.prototype.exec`.
     * @memberOf utilx.RegExp
     * @name exec
     * @function
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @returns {array} Match array with named backreference properties, or `null`.
     */
    $.RegExp.prototype.exec = function (stringArg) {
        throwIfIsNotRegExp(this);

        var str = onlyCoercibleToString(stringArg),
            origLastIndex = this.lastIndex,
            match = base.regExp.exec.apply(this, arguments),
            r2;

        if ($.Array.isArray(match)) {
            // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating
            // capturing groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of
            // older IEs. IE 9 in standards mode follows the spec
            if (!correctExecNpcg && match.length > 1 && $.Array.contains(match, base.str.empty)) {
                r2 = copyRegExp(this, {remove: base.str.g});
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                replace(strSlice($.String.ToString(str), match.index), r2, function () {
                    var args = slice(arguments),
                        len = args.length - 2,
                        index;

                    // Skip index 0 and the last 2
                    for (index = 1; index < len; index += 1) {
                        if (strictEqual(typeof args[index], base.str.Undefined)) {
                            $.Array.assign(match, index, base.Undefined);
                        }
                    }
                });
            }

            // Fix browsers that increment `lastIndex` after zero-length matches
            if (this.global && match[0].length && this.lastIndex > match.index) {
                this.lastIndex = match.index;
            }
        }

        if (!this.global) {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            this.lastIndex = origLastIndex;
        }

        return match;
    };

    $.RegExp.exec = $.Function.ToMethod($.RegExp.prototype.exec);

    /**
     * Fixes browser bugs in the native `RegExp.prototype.test`.
     * @memberOf utilx.RegExp
     * @name test
     * @function
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @returns {Boolean} Whether the regex matched the provided value.
     */
    $.RegExp.prototype.test = function (stringArg) {
        // Do this the easy way :-)
        return !!$.RegExp.exec(this, stringArg);
    };

    $.RegExp.test = $.Function.ToMethod($.RegExp.prototype.test);

    /**
     * Executes a regex search in a specified string. Returns a match array or `null`.
     * Optional `pos` argument specifies the search start position.
     * The `lastIndex` property of the provided regex is not
     * used, but is updated for compatibility. Also fixes browser bugs compared to the native
     * `RegExp.prototype.exec` and can be used reliably cross-browser.
     * @private
     * @function regExpForEachExec
     * @param {string} stringArg String to search.
     * @param {RegExp} regExpArg Regex to search with.
     * @param {Number} [pos=0] Zero-based index at which to start the search.
     * @returns {array} Match array or `null`.
     */
    function regExpForEachExec(stringArg, regExpArg, pos) {
        throwIfIsNotRegExp(regExpArg);

        var str = onlyCoercibleToString(stringArg),
            r2 = copyRegExp(regExpArg, {
                add: base.str.g,
                remove: 'y'
            }),
            match;

        r2.lastIndex = pos = $.Number.clampToInt(pos, 0, $.Number.MAX_INTEGER);
        match = $.RegExp.exec(r2, str);
        if (regExpArg.global) {
            if ($.Array.isArray(match)) {
                regExpArg.lastIndex = r2.lastIndex;
            } else {
                regExpArg.lastIndex = 0;
            }
        }

        return match;
    }

    /**
     * Executes a provided function once per regex match.
     * @private
     * @function regExpForEach
     * @param {string} str String to search.
     * @param {RegExp} regex Regex to search with.
     * @param {Function} callback Function to execute for each match. Invoked with four arguments:
     *   <li>The match array, with named backreference properties.
     *   <li>The zero-based match index.
     *   <li>The string being traversed.
     *   <li>The regex object being used to traverse the string.
     * @param {*} [context] Object to use as `this` when executing `callback`.
     * @returns {*} Provided `context` object.
     */
    function regExpForEach(stringArg, regExpArg, callback, context) {
        throwIfIsNotRegExp(regExpArg);

        var str = onlyCoercibleToString(stringArg),
            pos = 0,
            index = 0,
            match = regExpForEachExec(str, regExpArg, pos);

        while ($.Array.isArray(match)) {
            // Because `regex` is provided to `callback`, the function can use the deprecated/
            // nonstandard `RegExp.prototype.compile` to mutate the regex. However, since
            // `regExpExec` doesn't use `lastIndex` to set the search position, this can't lead
            // to an infinite loop, at least. Actually, because of the way `regExpExec` caches
            // globalized versions of regexes, mutating the regex will not have any effect on the
            // iteration or matched strings, which is a nice side effect that brings extra safety
            callback.call(context, match, index, str, regExpArg);
            pos = match.index + $.Number.clampToInt(match[0].length, 1, $.Number.UWORD32);
            match = regExpForEachExec(str, regExpArg, pos);
            index += 1;
        }

        return context;
    }

    /**
     * Splits a String object into an array of strings by separating the string into subbase.str.
     * @memberOf utilx.String
     * @name split
     * @function
     * @param {string} stringArg
     * @param {string} [separator]
     * @param {number} [limit]
     * @return {array.<string>}
     */
    if (testShims || split(base.str.test, new base.regExp.Ctr('(?:test)*')).length !== 2 ||
            split(base.str.period, new base.regExp.Ctr('(.?)(.?)')).length !== 4 ||
            split('tesst', new base.regExp.Ctr('(s)*'))[1] === 't' ||
            split(base.str.empty, new base.regExp.Ctr('.?')).length > 0 ||
            split(base.str.period, new base.regExp.Ctr('()()')).length > 1) {

        $.String.prototype.split = function (separator, limit) {
            var str = onlyCoercibleToString(this),
                output,
                origLastIndex,
                lastLastIndex,
                lastLength;

            // "0".split(undefined, 0) -> []
            if (strictEqual(typeof separator, base.str.Undefined) && limit === 0) {
                output = [];
            } else if (!$.RegExp.isRegExp(separator)) {
                // Browsers handle nonregex split correctly, so use the faster native method
                output = base.string.split.apply(str, arguments);
            } else {
                output = [];
                origLastIndex = separator.lastIndex;
                lastLastIndex = 0;
                /* Values for `limit`, per the spec:
                 * If undefined: pow(2,32) - 1
                 * If 0, Infinity, or NaN: 0
                 * If positive number: limit = floor(limit); if (limit >= pow(2,32)) limit -= pow(2,32);
                 * If negative number: pow(2,32) - floor(abs(limit))
                 * If other: Type-convert, then use the above rules
                 */
                if (strictEqual(typeof limit, base.str.Undefined)) {
                    limit = $.Number.MAX_UINT32;
                } else {
                    limit = $.Number.toUint32(limit);
                }

                regExpForEach(str, separator, function (match) {
                    // This condition is not the same as `if (match[0].length)`
                    if ((match.index + match[0].length) > lastLastIndex) {
                        push(output, strSlice(str, lastLastIndex, match.index));
                        if (match.length > 1 && match.index < str.length) {
                            //$.Array.push.apply(base.Undefined, concat([output], slice(match, 1)));
                            output = concat(output, slice(match, 1));
                        }

                        lastLength = match[0].length;
                        lastLastIndex = match.index + lastLength;
                    }
                });

                if (lastLastIndex === str.length) {
                    if (!test(separator, base.str.empty) || lastLength) {
                        push(output, base.str.empty);
                    }
                } else {
                    push(output, strSlice(str, lastLastIndex));
                }

                separator.lastIndex = origLastIndex;
                if (output.length > limit) {
                    output = slice(output, 0, limit);
                }
            }

            return output;
        };
    } else {
        $.String.prototype.split = function (separator, limit) {
            var val;

            // "0".split(undefined, 0) -> []
            if (strictEqual(typeof separator, base.str.Undefined) && limit === 0) {
                val = [];
            } else {
                val = base.string.split.apply(onlyCoercibleToString(this), arguments);
            }

            return val;
        };
    }

    $.String.split = $.Function.ToMethod($.String.prototype.split);

    /**
     * Fixes browser bugs in replacement text syntax when performing a replacement using a nonregex search
     * value, and the value of a replacement regex's `lastIndex` property during replacement iterations
     * and upon completion. Note that this doesn't support SpiderMonkey's proprietary third (`flags`)
     * argument.
     * @memberOf utilx.String
     * @name replace
     * @function
     * @param {RegExp|String} search Search pattern to be replaced.
     * @param {String|Function} replacement Replacement string or a function invoked to create it.
     * @returns {String} New string with one or all matches replaced.
     */
    $.String.prototype.replace = function (search, replacement) {
        var str = onlyCoercibleToString(this),
            isRegex = $.RegExp.isRegExp(search),
            origLastIndex,
            result;

        if (isRegex) {
            // Only needed if `search` is nonglobal
            origLastIndex = search.lastIndex;
        } else {
            // Type-convert
            search = $.String.ToString(search);
        }

        // Don't use `typeof`; some older browsers return 'function' for regex objects
        if ($.Function.isFunction(replacement)) {
            // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
            // functions isn't type-converted to a string
            result = replace(str, search, function () {
                var args = slice(arguments);

                // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox,
                // Safari bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
                if (isRegex && search.global) {
                    search.lastIndex = args[args.length - 2] + args[0].length;
                }

                // Should pass `undefined` as context; see
                // <https://bugs.ecmascript.org/show_bug.cgi?id=154>
                return replacement.apply(base.Undefined, args);
            });
        } else {
            // Ensure that the last value of `args` will be a string when given nonstring `this`,
            // while still throwing on `null` or `undefined` context
            result = replace(str, search, function () {
                // Keep this function's `arguments` available through closure
                var args = slice(arguments),
                    length = args.length;

                return replace($.String.ToString(replacement), base.regExp.replacementToken, function () {
                    var argTokens = slice(arguments),
                        $0 = argTokens[0],
                        $2 = argTokens[2];

                    // Special variable or numbered backreference without curly braces
                    // $$
                    if ($2 === '$') {
                        return '$';
                    }

                    // $&, $0 (not followed by 1-9), $00
                    if ($2 === '&' || +$2 === 0) {
                        return args[0];
                    }

                    // $` (left context)
                    if ($2 === '`') {
                        return slice(args[length - 1], 0, args[length - 2]);
                    }

                    // $' (right context)
                    if ($2 === '\'') {
                        return slice(args[length - 1], args[length - 2] + args[0].length);
                    }

                    // Numbered backreference without curly braces
                    // Type-convert; drop leading zero
                    $2 = +$2;
                    /*
                     * Native behavior
                     * - Backrefs end after 1 or 2 digits. Cannot reference capturing group 100+.
                     * - `$1` is a literal `$1` if no capturing groups.
                     * - `$10` is `$1` followed by a literal `0` if less than 10 capturing groups.
                     * - `$01` is `$1` if at least one capturing group, else it's a literal `$01`.
                     * - `$0` is a literal `$0`.
                     */
                    if (!$.Number.isNaN($2)) {
                        if ($2 > (length - 3)) {
                            throw new base.syntaxError.Ctr('Backreference to undefined group ' + $0);
                        }

                        return args[$2] || base.str.empty;
                    }

                    throw new base.syntaxError.Ctr('Invalid token ' + $0);
                });
            });
        }

        if (isRegex) {
            if (search.global) {
                // Fixes IE, Safari bug (last tested IE 9, Safari 5.1)
                search.lastIndex = 0;
            } else {
                // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
                search.lastIndex = origLastIndex;
            }
        }

        return result;
    };

    $.String.replace = $.Function.ToMethod($.String.prototype.replace);

    /**
     * Fixes browser bugs in the native `String.prototype.match`.
     * @memberOf utilx.String
     * @name match
     * @function
     * @param {string} stringArg String to search.
     * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
     * @returns {array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
     * the result of calling `$.RegExp.exec(regExpArg)`.
     */
    $.String.prototype.match = function (regExpArg) {
        var str = onlyCoercibleToString(this),
            result;

        if (!$.RegExp.isRegExp(regExpArg)) {
            regExpArg = new base.regExp.Ctr(regExpArg);
        } else if (regExpArg.global) {
            result = base.string.match.apply(str, arguments);
            // Fixes IE bug
            regExpArg.lastIndex = 0;

            return result;
        }

        return $.RegExp.exec(regExpArg, str);
    };

    $.String.match = $.Function.ToMethod($.String.prototype.match);

    /**
     * Coerces its argument to a string and returns the first character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name first
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    $.String.prototype.first = function () {
        return charAt(onlyCoercibleToString(this), 0);
    };

    $.String.first = $.Function.ToMethod($.String.prototype.first);

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name last
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    $.String.prototype.last = function () {
        return charAt(this, onlyCoercibleToString(this).length - 1);
    };

    $.String.last = $.Function.ToMethod($.String.prototype.last);

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name countCharacter
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {number}
     */
    $.String.prototype.countCharacter = function (character) {
        var first = $.String.first(character),
            val;

        if ($.String.isEmpty(first)) {
            val = $.Number.POSITIVE_INFINITY;
        } else {
            val = $.Number.clampToInt($.String.split(this,
                                             first).length - 1, 0, $.Number.POSITIVE_INFINITY);
        }

        return val;
    };

    $.String.countCharacter = $.Function.ToMethod($.String.prototype.countCharacter);

    /**
     * Returns true if arguments is less than zero or is Object.equal to positive infinity
     * @private
     * @function isLtZeroOrPositiveInfinity
     * @param {*} inputArg
     * @return {boolean}
     */
    function isLtZeroOrPositiveInfinity(inputArg) {
        return inputArg < 0 || inputArg === $.Number.POSITIVE_INFINITY;
    }

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or Object.equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name padLeadingChar
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @param {number} size
     * @return {string}
     */
    $.String.prototype.padLeadingChar = function (character, size) {
        var string = onlyCoercibleToString(this),
            singleChar = $.String.first(character),
            count = $.Number.toInteger(size) - string.length;

        if (isLtZeroOrPositiveInfinity(count)) {
            count = 0;
        }

        return $.String.repeat(singleChar, count) + string;
    };

    $.String.padLeadingChar = $.Function.ToMethod($.String.prototype.padLeadingChar);

    /**
     * Repeat the current string several times, return the new string. Used by String.repeat
     * @private
     * @function stringRepeatRep
     * @param {string} s
     * @param {number} times
     * @return {string}
     */
    function stringRepeatRep(s, times) {
        var half,
            val;

        if (times < 1) {
            val = base.str.empty;
        } else if (times % 2) {
            val = stringRepeatRep(s, times - 1) + s;
        } else {
            half = stringRepeatRep(s, times / 2);
            val = half + half;
        }

        return val;
    }

    /**
     * Repeat the current string several times, return the new string.
     * @memberOf utilx.String
     * @name repeat
     * @function
     * @param {string} string
     * @param {number} times
     * @return {string}
     */
    if (!testShims && $.Function.isNativeFunction(base.string.repeat)) {
        $.String.repeat = $.Function.ToMethod(base.string.repeat);
    } else {
        $.String.prototype.repeat = function (times) {
            var thisString = onlyCoercibleToString(this),
                count = $.Number.toInteger(times);

            if (isLtZeroOrPositiveInfinity(count)) {
                throw new base.rangeError.Ctr();
            }

            return stringRepeatRep(thisString, count);
        };

        $.String.repeat = $.Function.ToMethod($.String.prototype.repeat);
    }

    /**
     * Determines whether a string begins with the characters of another string,
     * returning true or false as appropriate.
     * @memberOf utilx.String
     * @name startsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.string.startsWith)) {
        $.String.startsWith = $.Function.ToMethod(base.string.startsWith);
    } else {
        $.String.prototype.startsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                start = $.Number.clampToInt(position, 0, thisStr.length);

            return strSlice(thisStr, start, start + searchStr.length) === searchStr;
        };

        $.String.startsWith = $.Function.ToMethod($.String.prototype.startsWith);
    }

    /**
     * Determines whether a string ends with the characters of another string,
     * returning true or false as appropriate.
     * @memberOf utilx.String
     * @name endsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.string.endsWith)) {
        $.String.endsWith = $.Function.ToMethod(base.string.endsWith);
    } else {
        $.String.prototype.endsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                thisLen = thisStr.length,
                end,
                start;

            if (strictEqual(typeof position, base.str.Undefined)) {
                position = thisLen;
            } else {
                position = $.Number.toInteger(position);
            }

            end = $.Number.clamp(position, 0, thisLen);
            start = end - searchStr.length;

            return start >= 0 && strSlice(thisStr, start, end) === searchStr;
        };

        $.String.endsWith = $.Function.ToMethod($.String.prototype.endsWith);
    }

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     * @memberOf utilx.String
     * @name contains
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.string.contains)) {
        $.String.contains = $.Function.ToMethod(base.string.contains);
    } else {
        $.String.prototype.contains = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                thisLen = thisStr.length;

            if (strictEqual(typeof position, base.str.Undefined)) {
                position = 0;
            } else {
                position = $.Number.toInteger(position);
            }

            return base.string.instance.indexOf.call(thisStr, searchStr, $.Number.clamp(position, 0, thisLen)) !== -1;
        };

        $.String.contains = $.Function.ToMethod($.String.prototype.contains);
    }

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * @memberOf utilx.Object
     * @name getPrototypeOf
     * @function
     * @param {object} object
     * @return {Prototype}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.getPrototypeOf)) {
        $.Object.getPrototypeOf = function (object) {
            return base.object.getPrototypeOf(throwIfIsNotTypeObjectOrIsNotFunction(object));
        };
    } else if (base.object.proto[base.str.proto] === null) {
        $.Object.getPrototypeOf = function (object) {
            return throwIfIsNotTypeObjectOrIsNotFunction(object)[base.str.proto];
        };
    } else {
        if ($.Function.returnArgs().constructor.prototype !== base.object.proto) {
            fixOpera10GetPrototypeOf = true;
        }

        $.Object.getPrototypeOf = function (object) {
            if (throwIfIsNotTypeObjectOrIsNotFunction(object) === base.object.proto) {
                return null;
            }

            var ctrProto;

            if ($.Function.isFunction(object.constructor)) {
                if (fixOpera10GetPrototypeOf && $.Object.isArguments(object)) {
                    ctrProto = base.object.proto;
                } else {
                    ctrProto = object.constructor.prototype;
                }
            } else if ($.Object.isObject(object[base.str.proto])) {
                ctrProto = object[base.str.proto];
            } else {
                ctrProto = base.object.proto;
            }

            if (object === ctrProto) {
                return base.object.proto;
            }

            return ctrProto;
        };
    }

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are Object.equal and native objects do not necessarily abide by the rules.
     * @memberOf utilx.Object
     * @name isPlainObject
     * @function
     * @param {object} object
     * @return {boolean}
     */
    $.Object.isPlainObject = function (object) {
        return $.Object.isTypeObject(object) && $.Object.isObject(object) &&
                    $.Object.getPrototypeOf(object) === base.object.proto;
    };

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     * @memberOf utilx.Array
     * @name contains
     * @function
     * @param {array} array
     * @param {*} searchElement
     * @return {boolean}
     */
    $.Array.prototype.contains = function (searchElement) {
        return $.Array.indexOf(this, searchElement) !== -1;
    };

    $.Array.contains = $.Function.ToMethod($.Array.prototype.contains);

    //Test for hasDontEnumBug and hasFuncProtoBug.
    testObject1 = {
        toString: null
    };

    for (testProp in testObject1) {
        if (testProp === base.str.ToString && testObject1[testProp] === null) {
            hasDontEnumBug = false;
            break;
        }
    }

    testObject1 = function () {
        return;
    };

    testObject1.prototype.constructor = testObject1;
    for (testProp in testObject1) {
        if (testProp === base.str.Prototype) {
            hasFuncProtoBug = true;
            break;
        }
    }

    if (hasDontEnumBug) {
        // Used to avoid iterating non-enumerable properties in IE < 9
        nonEnumProps = {};

        nonEnumProps[base.classString.array] =
            nonEnumProps[base.classString.date] =
            nonEnumProps[base.classString.number] = {
                constructor: true,
                toLocaleString: true,
                toString: true,
                valueOf: true
            };

        nonEnumProps[base.classString.boolean] =
            nonEnumProps[base.classString.string] = {
                constructor: true,
                toString: true,
                valueOf: true
            };

        nonEnumProps[base.classString.error] =
            nonEnumProps[base.classString.Function] =
            nonEnumProps[base.classString.regexp] = {
                constructor: true,
                toString: true
            };

        nonEnumProps[base.classString.object] = {
            constructor: true
        };

        for (testIndex = 0; testIndex < base.props.shadowed.length; testIndex += 1) {
            testValue = base.props.shadowed[testIndex];
            for (testProp in nonEnumProps) {
                if (hasOwn(nonEnumProps, testProp) && !hasOwn(nonEnumProps[testProp], testValue)) {
                    nonEnumProps[testProp][testValue] = false;
                }
            }
        }
    }

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the $.Object.has function, this method does not check down the object's prototype
     * chain.
     * @memberOf utilx.Object
     * @name hasOwn
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
    if (hasDontEnumBug) {
        $.Object.prototype.hasOwn = function (property) {
            return hasOwn(this, property) ||
                ($.Array.contains(base.props.shadowed, property) &&
                    $.Object.has(this, property) &&
                    !$.Object.is(this[property], $.Object.getPrototypeOf(this)[property]));
        };

        $.Object.hasOwn = $.Function.ToMethod($.Object.prototype.hasOwn);
    } else if (hasFuncProtoBug) {
        $.Object.prototype.hasOwn = function (property) {
            var val;

            if ($.Function.isFunction(this) && property === base.str.Prototype) {
                val = true;
            } else {
                val = hasOwn(this, property);
            }

            return val;
        };

        $.Object.hasOwn = $.Function.ToMethod($.Object.prototype.hasOwn);
    } else {
        $.Object.hasOwn = $.Function.ToMethod(base.object.hasOwn);
    }

    /**
     * Returns true if argument is null, not an object or is a function.
     * @private
     * @function isNotTypeObjectOrIsFunction
     * @param {*} inputArg
     * @return {boolean}
     */
    function isNotTypeObjectOrIsFunction(inputArg) {
        return !$.Object.isTypeObject(inputArg) || $.Function.isFunction(inputArg);
    }

    /**
     * Returns true if argument is an object that has own property of length which is a number of uint32
     * but is not a function.
     * @private
     * @function hasValidLength
     * @param {*} inputArg
     * @return {boolean}
     */
    function hasValidLength(inputArg) {
        return $.Object.isTypeObject(inputArg) && $.Object.hasOwn(inputArg, base.str.Length) &&
            $.Number.isNumber(inputArg.length) && $.Number.isUint32(inputArg.length);
    }

    /**
     * Throws TypeError if argument is null, not an object or is a function otherwise return the object.
     * @private
     * @function throwIfIsNotTypeObjectOrIsFunction
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotTypeObjectOrIsFunction(inputArg) {
        if (isNotTypeObjectOrIsFunction(inputArg)) {
            throw new base.typeError.Ctr('called on a invalid object');
        }

        return inputArg;
    }

    /**
     * Throws TypeError if argument has not got a valid length otherwise return the object.
     * @private
     * @function throwIfIsNotHasValidLength
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotHasValidLength(inputArg) {
        if (!hasValidLength(inputArg)) {
            throw new base.typeError.Ctr('invalid length property');
        }

        return inputArg;
    }

    /**
     * Returns true if arguments is an array or an arguments object.
     * @private
     * @function isArrayOrArguments
     * @param {*} inputArg
     * @return {boolean}
     */
    function isArrayOrArguments(inputArg) {
        return $.Array.isArray(inputArg) || $.Object.isArguments(inputArg);
    }

    /**
     * The function takes one argument inputArg, if the argument is an object whose class internal
     * property is "Array" or is an Object whose class internal property is "Arguments";
     * returns true if length is zero otherwise it returns false.
     * Otherwise returns null if the argument does not match the rquirements.
     * @memberOf utilx.Array
     * @name isEmpty
     * @function
     * @param {array} inputArg
     * @return {(boolean|null)}
     */
    $.Array.isEmpty = function (inputArg) {
        if (!isArrayOrArguments(inputArg)) {
            throwIfIsNotTypeObjectOrIsFunction(inputArg);
            throwIfIsNotHasValidLength(inputArg);
        }

        return !inputArg.length;
    };

    /**
     * Returns the first element of an array; otherwise returns undefined.
     * @memberOf utilx.Array
     * @name first
     * @function
     * @param {array|arguments} inputArg
     * @return {*}
     */
    $.Array.prototype.first = function () {
        if (!isArrayOrArguments(this)) {
            throwIfIsNotTypeObjectOrIsFunction(this);
            throwIfIsNotHasValidLength(this);
        }

        return this[0];
    };

    $.Array.first = $.Function.ToMethod($.Array.prototype.first);

    /**
     * Returns the last element of an array; otherwise returns undefined.
     * @memberOf utilx.Array
     * @name last
     * @function
     * @param {array|arguments} inputArg
     * @return {*}
     */
    $.Array.prototype.last = function () {
        if (!isArrayOrArguments(this)) {
            throwIfIsNotTypeObjectOrIsFunction(this);
            throwIfIsNotHasValidLength(this);
        }

        return this[this.length - 1];
    };

    $.Array.last = $.Function.ToMethod($.Array.prototype.last);

    /**
     * The Array.assign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     * @memberOf utilx.Array
     * @name assign
     * @function
     * @param {array} array
     * @param {number|string} index
     * @param {*} value
     * @return {number}
     */
    $.Array.prototype.assign = function (index, value) {
        if (!isArrayOrArguments(this)) {
            throwIfIsNotTypeObjectOrIsFunction(this);
            throwIfIsNotHasValidLength(this);
        }

        var numIndex;

        if (arguments.length >= 2) {
            if ($.Number.isFinite(+index)) {
                numIndex = $.Number.toInteger(index);
            } else {
                numIndex = $.Number.NaN;
            }

            if ($.Number.inRange(numIndex, 0, $.Number.MAX_UINT32 - 1)) {
                this[numIndex] = value;
                numIndex += 1;
                if (numIndex > this.length) {
                    this.length = numIndex;
                }

            } else {
                this[$.String.ToString(index)] = value;
            }
        }

        return this.length;
    };

    $.Array.assign = $.Function.ToMethod($.Array.prototype.assign);

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * @memberOf utilx.Object
     * @name ToObjectFixIndexedAccess
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    boxedString = $.Object.ToObject(base.str.g);
    shouldSplitString = (boxedString[0] !== base.str.g || !$.Object.has(boxedString, 0));
    $.Object.ToObjectFixIndexedAccess = function (inputArg) {
        var object = $.Object.ToObject(inputArg),
            index,
            length;

        if (shouldSplitString && $.String.isString(inputArg)) {
            for (index = 0, length = inputArg.length; index < length; index += 1) {
                object[index] = charAt(inputArg, index);
            }
        }

        return object;
    };

    /**
     * The $.Array.splice() method changes the content of an array,
     * adding new elements while removing old elements.
     * @memberOf utilx.Array
     * @name splice
     * @function
     * @param {array} array
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     */
    if (!testShims && $.Function.isNativeFunction(base.array.splice) && splice([1, 2], 0).length === 2) {
        try {
            if (!splice([1, 2]).length) {
                $.Array.splice = $.Function.ToMethod(base.array.splice);
            } else {
                throw new base.error.Ctr();
            }
        } catch (eSplice) {
            $.Array.prototype.splice = function () {
                var val;

                if (arguments.length < 1) {
                    val = [];
                } else {
                    val = base.array.splice.apply(this, arguments);
                }

                return val;
            };

            $.Array.splice = $.Function.ToMethod($.Array.prototype.splice);
        }
    } else {
        $.Array.prototype.splice = function (start, deleteCount) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
                removed = [],
                relativeStart = $.Number.clampToInt(start, -$.Number.MAX_UINT32, $.Number.MAX_UINT32),
                actualStart,
                actualDeleteCount,
                k = 0,
                from,
                args = slice(arguments),
                argLength = args.length,
                item = 2,
                itemCount = base.Math.max(argLength - item, 0),
                to,
                loopCache;

            if (argLength < 1) {
                return removed;
            }

            if ($.Math.sign(relativeStart) < 0) {
                actualStart = base.Math.max(length + relativeStart, 0);
            } else {
                actualStart = base.Math.min(relativeStart, length);
            }

            if (argLength < 2) {
                deleteCount = length - actualStart;
            }

            actualDeleteCount = $.Number.clamp($.Number.clampToInt(deleteCount,
                                        0, $.Number.MAX_UINT32),
                                        0, length - actualStart);
            while (k < actualDeleteCount) {
                from = actualStart + k;
                if ($.Object.hasOwn(object, from)) {
                    push(removed, object[from]);
                }

                k += 1;
            }

            if (itemCount < actualDeleteCount) {
                k = actualStart;
                loopCache = length - actualDeleteCount;
                while (k < loopCache) {
                    from = k + actualDeleteCount;
                    to = k + itemCount;
                    if ($.Object.hasOwn(object, from)) {
                        object[to] = object[from];
                    } else {
                        delete object[to];
                    }

                    k += 1;
                }

                k = length;
                loopCache = length - actualDeleteCount + itemCount;
                while (k > loopCache) {
                    delete object[k - 1];
                    k -= 1;
                }
            } else if (itemCount > actualDeleteCount) {
                k = length - actualDeleteCount;
                while (k > actualStart) {
                    from = k + actualDeleteCount - 1;
                    to = k + itemCount - 1;
                    if ($.Object.hasOwn(object, from)) {
                        object[to] = object[from];
                    } else {
                        delete object[to];
                    }

                    k -= 1;
                }
            }

            k = actualStart;
            while (item < argLength) {
                object[k] = args[item];
                k += 1;
                item += 1;
            }

            object.length = length - actualDeleteCount + itemCount;

            return removed;
        };

        $.Array.splice = $.Function.ToMethod($.Array.prototype.splice);
    }

    /**
     * Checks if the supplied function suffers from the V8 strict mode bug.
     * @private
     * @function checkV8StrictBug
     * @param {function} fn
     * @return {boolean}
     */
    function checkV8StrictBug(fn) {
        var hasV8StrictBug = false;

        fn.call([1], function () {
            hasV8StrictBug = $.String.isStringObject(this);
        }, 'foo');

        return hasV8StrictBug;
    }

    /**
     * Executes a provided function once per array element.
     * @memberOf utilx.Array
     * @name forEach
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {undefined}
     */
    try {
        forEach('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.forEach) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.array.forEach)) {

            $.Array.forEach = $.Function.ToMethod(base.array.forEach);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eForEach) {
        $.Array.prototype.forEach = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length,
                index;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index)) {
                    fn.call(thisArg, object[index], index, object);
                }
            }
        };

        $.Array.forEach = $.Function.ToMethod($.Array.prototype.forEach);
    }

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     * @memberOf utilx.Array
     * @name some
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {boolean}
     */
    try {
        some('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.some) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.array.some)) {

            $.Array.some = $.Function.ToMethod(base.array.some);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eSome) {
        $.Array.prototype.some = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length,
                index,
                val;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            val = false;
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index) && fn.call(thisArg, object[index], index, object)) {
                    val = true;
                    break;
                }
            }

            return val;
        };

        $.Array.some = $.Function.ToMethod($.Array.prototype.some);
    }

    /**
     * This method returns a value in the array, if an element in the array satisfies the provided testing function.
     * Otherwise undefined is returned.
     * @memberOf utilx.Array
     * @name find
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {*}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.find) && !checkV8StrictBug(base.array.find)) {
        $.Array.find = $.Function.ToMethod(base.array.find);
    } else {
        $.Array.prototype.find = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length,
                index,
                element,
                val;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            for (index = 0; index < length; index += 1) {
                element = object[index];
                if ($.Object.has(object, index) && fn.call(thisArg, element, index, object)) {
                    val = element;
                    break;
                }
            }

            return val;
        };

        $.Array.find = $.Function.ToMethod($.Array.prototype.find);
    }

    /**
     * This method returns an index in the array, if an element in the array satisfies the provided testing function.
     * Otherwise -1 is returned.
     * @memberOf utilx.Array
     * @name findIndex
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.findIndex) && !checkV8StrictBug(base.array.findIndex)) {
        $.Array.findIndex = $.Function.ToMethod(base.array.findIndex);
    } else {
        $.Array.prototype.findIndex = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                val = -1,
                length,
                index;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index) && fn.call(thisArg, object[index], index, object)) {
                    val = index;
                    break;
                }
            }

            return val;
        };

        $.Array.findIndex = $.Function.ToMethod($.Array.prototype.findIndex);
    }

    /**
     * This method creates a new Array instance with a variable number of arguments,
     * regardless of number or type of the arguments.
     * @memberOf utilx.Array
     * @name of
     * @function
     * @param {...*} [var_args]
     * @return {array}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.of)) {
        $.Array.of = base.array.of;
    } else {
        $.Array.of = function () {
            return slice(arguments);
        };
    }

    /**
     * Converts a single argument that is an array-like object or list (eg. arguments, NodeList,
     * DOMTokenList (used by classList), NamedNodeMap (used by attributes property)) into a new Array() and returns it.
     * @memberOf utilx.Array
     * @name from
     * @function
     * @param {object} arrayLike
     * @param {function} [mapfn]
     * @param {object} [thisArg]
     * @return {array}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.from) && !checkV8StrictBug(base.array.from)) {
        $.Array.from = base.array.from;
    } else {
        $.Array.from = function (arrayLike, mapfn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(arrayLike),
                length,
                Ctr,
                mapping,
                array,
                index,
                value,
                isTargetArrayOrArguments;

            if (strictEqual(typeof mapfn, base.str.Undefined)) {
                mapping = false;
            } else {
                throwIfNotAFunction(mapfn);
                mapping = true;
            }

            Ctr = this;
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            if ($.Function.isFunction(Ctr)) {
                array = new Ctr(length);
                isTargetArrayOrArguments = isArrayOrArguments(array);
            } else {
                array = [];
                isTargetArrayOrArguments = true;
            }

            for (index = 0; index < length; index += 1) {
                value = object[index];
                if (mapping) {
                    value = mapfn.call(thisArg, value, index);
                }

                if (isTargetArrayOrArguments) {
                    $.Array.assign(array, index, value);
                } else {
                    array[index] = value;
                }
            }

            array.length = length;

            return array;
        };
    }

    /**
     * Tests whether all elements in the array pass the test implemented by the provided function.
     * @memberOf utilx.Array
     * @name every
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {boolean}
     */
    try {
        every('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.every) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) &&
                !checkV8StrictBug(base.array.every)) {

            $.Array.every = $.Function.ToMethod(base.array.every);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eEvery) {
        $.Array.prototype.every = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length,
                index,
                val;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            val = true;
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index) && !fn.call(thisArg, object[index], index, object)) {
                    val = false;
                    break;
                }
            }

            return val;
        };

        $.Array.every = $.Function.ToMethod($.Array.prototype.every);
    }

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     * @memberOf utilx.Array
     * @name map
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
    try {
        map('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.map) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) &&
                !checkV8StrictBug(base.array.map)) {

            $.Array.map = $.Function.ToMethod(base.array.map);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eMap) {
        $.Array.prototype.map = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length,
                index,
                arr;

            throwIfNotAFunction(fn);
            arr = [];
            arr.length = length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index)) {
                    $.Array.assign(arr, index, fn.call(thisArg, object[index], index, object));
                }
            }

            return arr;
        };

        $.Array.map = $.Function.ToMethod($.Array.prototype.map);
    }

    /**
     * Returns some args for testing purposes.
     * @private
     * @function someArgs
     * @return {arguments}
     */
    function someArgs() {
        return $.Function.returnArgs(base.Undefined, null, 1, 'a', 2, 'b', null, base.Undefined);
    }

    /**
     * Creates a new array from arguments, starting at start and ending at end.
     * @private
     * @function internalSlice
     * @param {array} array
     * @param {number|string} [start]
     * @param {number|string} [end]
     * @return {array}
     */
    internalSlice = function (start, end) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
            relativeStart = $.Number.toInteger(start),
            val = [],
            next = 0,
            isTargetArrayOrArguments = isArrayOrArguments(object),
            relativeEnd,
            final,
            k;

        if ($.Math.sign(relativeStart) < 0) {
            k = base.Math.max(length + relativeStart, 0);
        } else {
            k = base.Math.min(relativeStart, length);
        }

        if (strictEqual(typeof end, base.str.Undefined)) {
            relativeEnd = length;
        } else {
            relativeEnd = $.Number.toInteger(end);
        }

        if ($.Math.sign(relativeEnd) < 0) {
            final = base.Math.max(length + relativeEnd, 0);
        } else {
            final = base.Math.min(relativeEnd, length);
        }

        val.length = base.Math.max(final - k, 0);
        while (k < final) {
            if ($.Object.has(object, k)) {
                if (isTargetArrayOrArguments) {
                    $.Array.assign(val, next, object[k]);
                } else {
                    val[next] = object[k];
                }
            }

            next += 1;
            k += 1;
        }

        return val;
    };

    /**
     * Creates a new array from arguments, starting at start and ending at end.
     * @memberOf utilx.Array
     * @name slice
     * @function
     * @param {array} array
     * @param {number|string} [start]
     * @param {number|string} [end]
     * @return {array}
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.array.slice) ||
                slice(someArgs()).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), base.Undefined, base.Undefined).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), -1).length !== 1 ||
                slice(someArgs(), 0).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), 3).toString() !== 'a,2,b,,' ||
                slice(someArgs(), -1, 4).length ||
                slice(someArgs(), 0, 4).toString() !== ',,1,a' ||
                slice(someArgs(), 3, 6).toString() !== 'a,2,b') {

            throw new base.error.Ctr();
        }

        $.Array.prototype.slice = function () {
            try {
                return base.array.slice.apply(this, arguments);
            } catch (eSliceFB) {
                return internalSlice.apply(this, arguments);
            }
        };
    } catch (eSlice) {
        $.Array.prototype.slice = internalSlice;
    }

    $.Array.slice = $.Function.ToMethod($.Array.prototype.slice);

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     * @memberOf utilx.Array
     * @name filter
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
    try {
        filter('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.filter) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) &&
                !checkV8StrictBug(base.array.filter)) {

            $.Array.filter = $.Function.ToMethod(base.array.filter);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eFilter) {
        $.Array.prototype.filter = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                next,
                length,
                arr,
                index,
                element;

            throwIfNotAFunction(fn);
            arr = [];
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            next = 0;
            for (index = 0; index < length; index += 1) {
                if ($.Object.has(object, index)) {
                    element = object[index];
                    if (fn.call(thisArg, element, index, object)) {
                        $.Array.assign(arr, next, element);
                        next += 1;
                    }
                }
            }

            return arr;
        };

        $.Array.filter = $.Function.ToMethod($.Array.prototype.filter);
    }

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     * @memberOf utilx.Array
     * @name reduce
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {*} [initialValue]
     * @return {*}
     */
    try {
        reduce('foo', function (previous, item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.reduce) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1)) {

            $.Array.reduce = $.Function.ToMethod(base.array.reduce);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eReduce) {
        reduceTypeErrorMessage = 'reduce of empty array with no initial value';
        $.Array.prototype.reduce = function (fn, initialValue) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                accumulator,
                length,
                kPresent,
                index;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            if (!length && arguments.length === 1) {
                throw new base.typeError.Ctr(reduceTypeErrorMessage);
            }

            index = 0;
            if (arguments.length > 1) {
                accumulator = initialValue;
            } else {
                kPresent = false;
                while (!kPresent && index < length) {
                    kPresent = $.Object.has(object, index);
                    if (kPresent) {
                        accumulator = object[index];
                        index += 1;
                    }
                }

                if (!kPresent) {
                    throw new base.typeError.Ctr(reduceTypeErrorMessage);
                }
            }

            while (index < length) {
                if ($.Object.has(object, index)) {
                    accumulator = fn.call(base.Undefined, accumulator, object[index], index, object);
                }

                index += 1;
            }

            return accumulator;
        };

        $.Array.reduce = $.Function.ToMethod($.Array.prototype.reduce);
    }

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     * @memberOf utilx.Array
     * @name reduceRight
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {*} [initialValue]
     * @return {*}
     */
    try {
        reduceRight('foo', function (previous, item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.array.reduceRight) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1)) {

            $.Array.reduceRight = $.Function.ToMethod(base.array.reduceRight);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eReduceRight) {
        reduceRightTypeErrorMessage = 'reduceRight of empty array with no initial value';
        $.Array.prototype.reduceRight = function (fn, initialValue) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                accumulator,
                length,
                kPresent,
                index;

            throwIfNotAFunction(fn);
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32);
            if (!length && arguments.length === 1) {
                throw new base.typeError.Ctr(reduceRightTypeErrorMessage);
            }

            index = length - 1;
            if (arguments.length > 1) {
                accumulator = initialValue;
            } else {
                kPresent = false;
                while (!kPresent && index >= 0) {
                    kPresent = $.Object.has(object, index);
                    if (kPresent) {
                        accumulator = object[index];
                        index -= 1;
                    }
                }

                if (!kPresent) {
                    throw new base.typeError.Ctr(reduceRightTypeErrorMessage);
                }
            }

            while (index >= 0) {
                if ($.Object.has(object, index)) {
                    accumulator = fn.call(base.Undefined, accumulator, object[index], index, object);
                }

                index -= 1;
            }

            return accumulator;
        };

        $.Array.reduceRight = $.Function.ToMethod($.Array.prototype.reduceRight);
    }

    /**
     * Returns a random integer between the supplied min and max arguments.
     * If no arguments are supplied or are the same then 0 and 1 will be used.
     * If min is not supplied then 0 is used.
     * @memberOf utilx.Number
     * @name randomInt
     * @function
     * @param {number} [min]
     * @param {number} max
     * @return {number}
     */
    $.Number.randomInt = function (min, max) {
        if (arguments.length === 1) {
            max = min;
            min = 0;
        }

        min = $.Number.toInteger(min);
        max = $.Number.toInteger(max);
        if ($.Object.is(min, max)) {
            max = 1;
            min = 0;
        }

        var mult,
            val;

        if (min < 0 && max > 0 && (max - min + 1) > $.Number.MAX_INTEGER) {
            mult = base.Math.floor(base.Math.random() * 2);
            if (mult === 0) {
                mult = -1;
            }

            val = base.Math.floor(base.Math.random() * $.Number.UNSAFE_INTEGER) * mult;
        } else {
            val = base.Math.floor(base.Math.random() * (max - min + 1) + min);
        }

        return val;
    };

    /**
     * Default compare function for stableSort.
     * @private
     * @function defaultComparison
     * @param {*} left
     * @param {*} right
     * @return {number}
     */
    function defaultComparison(left, right) {
        var leftS = $.String.ToString(left),
            rightS = $.String.ToString(right),
            val;

        if (leftS === rightS) {
            val = 0;
        } else if (leftS < rightS) {
            val = -1;
        } else {
            val = 1;
        }

        return val;
    }

    /**
     * merge function for stableSort.
     * @private
     * @function merge
     * @param {array} left
     * @param {array} right
     * @param {Function} comparison
     * @return {array}
     */
    function merge(left, right, comparison) {
        var result = [];

        while (left.length && right.length) {
            if (comparison(left[0], right[0]) <= 0) {
                push(result, left.shift());
            } else {
                push(result, right.shift());
            }
        }

        while (left.length) {
            push(result, left.shift());
        }

        while (right.length) {
            push(result, right.shift());
        }

        return result;
    }

    /**
     * mergeSort function for stableSort.
     * @private
     * @function mergeSort
     * @param {array} array
     * @param {Function} comparefn
     * @return {array}
     */
    function mergeSort(array, comparefn) {
        var length = $.Number.clampToInt(array.length, 0, $.Number.MAX_UINT32),
            middle,
            val;

        if (length < 2) {
            val = slice(array);
        } else {
            middle = base.Math.ceil(length / 2);
            val = merge(mergeSort(slice(array, 0, middle), comparefn),
                         mergeSort(slice(array, middle), comparefn), comparefn);
        }

        return val;
    }

    /**
     * The $.Array.stableSort() method sorts the elements of an array in place and returns the array.
     * This is a stable sort. The default sort order is lexicographic (not numeric).
     * @memberOf utilx.Array
     * @name stableSort
     * @function
     * @param {array} array
     * @param {Function} [compareFN]
     * @return {array}
     */
    $.Array.prototype.stableSort = function (comparefn) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            isTargetArrayOrArguments;

        if (strictEqual(typeof comparefn, base.str.Undefined)) {
            comparefn = defaultComparison;
        }

        throwIfNotAFunction(comparefn);
        if ($.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32) > 1) {
            isTargetArrayOrArguments = isArrayOrArguments(object);
            $.Array.forEach(mergeSort(object, comparefn), function (value, index) {
                if (isTargetArrayOrArguments) {
                    $.Array.assign(object, index, value);
                } else {
                    object[index] = value;
                }
            });
        }

        return object;
    };

    $.Array.stableSort = $.Function.ToMethod($.Array.prototype.stableSort);

    /**
     * The $.Array.Sort() method sorts the elements of an array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     * @memberOf utilx.Array
     * @name sort
     * @function
     * @param {array} array
     * @param {Function} [compareFN]
     * @return {array}
     */
    if (!testShims && $.Function.isNativeFunction(sortFN)) {
        $.Array.prototype.sort = function (comparefn) {
            $.Object.CheckObjectCoercible(this);
            if (strictEqual(typeof comparefn, base.str.Undefined)) {
                comparefn = defaultComparison;
            }

            throwIfNotAFunction(comparefn);

            return sortFN.call(this, comparefn);
        };
    } else {
        $.Array.prototype.sort = $.Array.prototype.stableSort;
    }

    $.Array.sort = $.Function.ToMethod($.Array.prototype.sort);

    /**
     * Builds the test string used to determine if native trim is ES5.
     * @private
     * @function buildTestString
     * @param {string} previous
     * @param {string} element
     * @return {string}
     */
    function buildTestString(previous, element) {
        return previous + base.string.Ctr.fromCharCode(element);
    }

    base.string.wsStr = $.Array.reduce(base.string.whiteSpaces, function (previous, element) {
        return previous + '\\u' + $.String.padLeadingChar(element.toString(16), base.str.zero, 4);
    }, base.str.empty);

    /**
     * Removes whitespace from both ends of the string.
     * @memberOf utilx.String
     * @name trim
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    try {
        if (!testShims && $.Function.isNativeFunction(base.string.trim) &&
                !trim($.Array.reduce(base.string.whiteSpaces, buildTestString, base.str.empty)).length) {

            $.String.trim = $.Function.ToMethod(base.string.trim);
        } else {
            throw new base.error.Ctr();
        }
    } catch (eTrim) {
        base.regExp.wsTrim =
            new base.regExp.Ctr('^[' + base.string.wsStr + ']+|[' + base.string.wsStr + ']+$', base.str.g);

        $.String.prototype.trim = function () {
            return $.String.replace(onlyCoercibleToString(this), base.regExp.wsTrim, base.str.empty);
        };

        $.String.trim = $.Function.ToMethod($.String.prototype.trim);
    }

    /**
     * This function parses a string argument and returns an integer of the specified radix or base.
     * @memberOf utilx.Number
     * @name parseInt
     * @function
     * @param {string} str
     * @param {number} radix
     * @return {number}
     */
    if (testShims || !$.Function.isNativeFunction(base.number.parseInt) ||
            base.number.parseInt(base.string.wsStr + '08') !== 8 ||
            base.number.parseInt(base.string.wsStr + '0x16') !== 22) {

        if (testShims || base.parseInt(base.string.wsStr + '08') !== 8 ||
                base.parseInt(base.string.wsStr + '0x16') !== 22) {

            base.regExp.hex = new base.regExp.Ctr('^0[xX]');
            $.Number.parseInt = function (str, radix) {
                str = $.String.trim(str);
                if (strictEqual(typeof radix, base.str.Undefined) || !$.Number.toInt32(radix)) {
                    radix = test(base.regExp.hex, str) ? 16 : 10;
                }

                return base.parseInt(str, radix);
            };
        } else {
            $.Number.parseInt = base.parseInt;
        }
    } else {
        $.Number.parseInt = base.number.parseInt;
    }

    /**
     * This method parses a string argument and returns a floating point number.
     * @memberOf utilx.Number
     * @name parseFloat
     * @function
     * @param {string} str
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.number.parseFloat)) {
        $.Number.parseFloat = base.number.parseFloat;
    } else {
        $.Number.parseFloat = base.parseFloat;
    }

    /**
     * This method formats a number using fixed-point notation.
     * @memberOf utilx.Number
     * @name toFixed
     * @function
     * @param {number} fractionDigits
     * @return {string}
     */
    if (testShims || !$.Function.isNativeFunction(base.number.toFixed) ||
            base.number.toFixed.call(0.00008, 3) !== '0.000' ||
            base.number.toFixed.call(0.9, 0) === '0' ||
            base.number.toFixed.call(1.255, 2) !== '1.25' ||
            base.number.toFixed.call(1000000000000000128, 0) !== '1000000000000000128') {

        // Hide these variables and functions
        (function () {
            var baseNum = 1e7,
                data = [0, 0, 0, 0, 0, 0],
                size = data.length;

            function multiply(n, c) {
                var index;

                for (index = 0; index < size; index += 1) {
                    c += n * data[index];
                    data[index] = c % baseNum;
                    c = base.Math.floor(c / baseNum);
                }
            }

            function divide(n) {
                var c = 0,
                    index;

                for (index = size - 1; index >= 0; index -= 1) {
                    c += data[index];
                    data[index] = base.Math.floor(c / n);
                    c = (c % n) * baseNum;
                }
            }

            function numToString() {
                var s = '',
                    index,
                    t;

                for (index = size - 1; index >= 0; index -= 1) {
                    if (s || !index || data[index]) {
                        t = $.String.ToString(data[index]);
                        if (!s) {
                            s = t;
                        } else {
                            s += strSlice('0000000', 0, 7 - t.length) + t;
                        }
                    }
                }

                return s;
            }

            function pow(x, n, acc) {
                var val;

                if (!n) {
                    val = acc;
                } else if ($.Number.isOdd(n)) {
                    val = pow(x, n - 1, acc * x);
                } else if ($.Number.isEven(n)) {
                    val = pow(x * x, n / 2, acc);
                } else {
                    throw new base.error.Ctr();
                }

                return val;
            }

            function log(x) {
                var n = 0;

                while (x >= 4096) {
                    n += 12;
                    x /= 4096;
                }

                while (x >= 2) {
                    n += 1;
                    x /= 2;
                }

                return n;
            }

            $.Number.prototype.toFixed = function (fractionDigits) {
                var f,
                    x,
                    s,
                    m,
                    e,
                    z,
                    j,
                    k;

                f = +fractionDigits;
                // Test for NaN and round fractionDigits down
                if ($.Number.isNaN(f)) {
                    f = 0;
                } else {
                    f = base.Math.floor(f);
                }

                if (!$.Number.inRange(f, 0, 20)) {
                    throw new RangeError('Number.toFixed called with invalid number of decimals');
                }

                x = +this;
                // Test for NaN or if it is too big or small, return the string value of the number.
                if ($.Number.isNaN(x) || $.Number.outRange(x, -1e21, 1e21)) {
                    return $.String.ToString(x);
                }

                s = '';
                if (x < 0) {
                    s = '-';
                    x = -x;
                }

                m = '0';
                if (x > 1e-21) {
                    // 1e-21 < x < 1e21
                    // -70 < log2(x) < 70
                    e = log(x * pow(2, 69, 1)) - 69;
                    if (e < 0) {
                        z = x * pow(2, -e, 1);
                    } else {
                        z = x / pow(2, e, 1);
                    }

                    // Math.pow(2, 52)
                    z *= 0x10000000000000;
                    e = 52 - e;

                    // -18 < e < 122
                    // x = z / 2 ^ e
                    if (e > 0) {
                        multiply(0, z);
                        j = f;
                        while (j >= 7) {
                            multiply(1e7, 0);
                            j -= 7;
                        }

                        multiply(pow(10, j, 1), 0);
                        j = e - 1;
                        while (j >= 23) {
                            /*jslint bitwise:true */
                            divide(1 << 23);
                            /*jslint bitwise:false */
                            j -= 23;
                        }

                        /*jslint bitwise:true */
                        divide(1 << j);
                        /*jslint bitwise:false */
                        multiply(1, 1);
                        divide(2);
                        m = numToString();
                    } else {
                        multiply(0, z);
                        /*jslint bitwise:true */
                        multiply(1 << (-e), 0);
                        /*jslint bitwise:false */
                        m = numToString() + strSlice('0.00000000000000000000', 2, 2 + f);
                    }
                }

                if (f > 0) {
                    k = m.length;
                    if (k <= f) {
                        m = s + strSlice('0.0000000000000000000', 0, f - k + 2) + m;
                    } else {
                        m = s + strSlice(m, 0, k - f) + '.' + strSlice(m, k - f);
                    }
                } else {
                    m = s + m;
                }

                return m;
            };
        }());
    } else {
        $.Number.prototype.toFixed = base.number.toFixed;
    }

    $.Number.toFixed = $.Function.ToMethod($.Number.prototype.toFixed);

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @memberOf utilx.Array
     * @name indexOf
     * @function
     * @param {array} array
     * @param {object} searchElement
     * @param {number} [fromIndex]
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.indexOf) && indexOf([0, 1], 1, 2) === -1) {
        $.Array.indexOf = $.Function.ToMethod(base.array.indexOf);
    } else {
        $.Array.prototype.indexOf = function (searchElement, fromIndex) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
                val = -1,
                index;

            if (length) {
                if (arguments.length > 1) {
                    fromIndex = $.Number.toInteger(fromIndex);
                } else {
                    fromIndex = 0;
                }

                if (fromIndex < length) {
                    if (fromIndex < 0) {
                        fromIndex = length - base.Math.abs(fromIndex);
                    }

                    if (fromIndex < 0) {
                        fromIndex = 0;
                    }

                    for (index = fromIndex; index < length; index += 1) {
                        if ($.Object.has(object, index) && searchElement === object[index]) {
                            val = index;
                            break;
                        }
                    }
                }
            }

            return val;
        };

        $.Array.indexOf = $.Function.ToMethod($.Array.prototype.indexOf);
    }

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @memberOf utilx.Array
     * @name lastIndexOf
     * @function
     * @param {array} array
     * @param {object} searchElement
     * @param {number} [fromIndex]
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.lastIndexOf) && lastIndexOf([0, 1], 0, -3) === -1) {
        $.Array.lastIndexOf = $.Function.ToMethod(base.array.lastIndexOf);
    } else {
        $.Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
                val = -1,
                index;

            if (length) {
                if (arguments.length > 1) {
                    fromIndex = $.Number.toInteger(fromIndex);
                } else {
                    fromIndex = length - 1;
                }

                if (fromIndex >= 0) {
                    fromIndex = base.Math.min(fromIndex, length - 1);
                } else {
                    fromIndex = length - base.Math.abs(fromIndex);
                }

                for (index = fromIndex; index >= 0; index -= 1) {
                    if ($.Object.has(object, index) && object[index] === searchElement) {
                        val = index;
                        break;
                    }
                }
            }

            return val;
        };

        $.Array.lastIndexOf = $.Function.ToMethod($.Array.prototype.lastIndexOf);
    }

    /**
     * Fill every element of array from start up to but not including end is assigned value.
     * @memberOf utilx.Array
     * @name fill
     * @function
     * @param {array} array
     * @param {*} value
     * @param {number} [start]
     * @param {number} [end]
     * @return {array}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.fill)) {
        $.Array.fill = $.Function.ToMethod(base.array.fill);
    } else {
        $.Array.prototype.fill = function (value, start, end) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
                relativeStart = $.Number.toInteger(start),
                relativeEnd,
                final,
                index,
                isTargetArrayOrArguments;

            if (start < 0) {
                relativeStart = base.Math.max(length + relativeStart, 0);
            } else {
                relativeStart = base.Math.min(relativeStart, length);
            }

            if (strictEqual(typeof end, base.str.Undefined)) {
                relativeEnd = length;
            } else {
                relativeEnd = $.Number.toInteger(end);
            }

            if (relativeEnd < 0) {
                final = base.Math.max(length + relativeEnd, 0);
            } else {
                final = base.Math.min(relativeEnd, length);
            }

            isTargetArrayOrArguments = isArrayOrArguments(object);
            for (index = relativeStart; index < final; index += 1) {
                if (isTargetArrayOrArguments) {
                    $.Array.assign(object, index, value);
                } else {
                    object[index] = value;
                }
            }

            return object;
        };

        $.Array.fill = $.Function.ToMethod($.Array.prototype.fill);
    }

    /**
     * Every element of array from start up to but not including end is assigned value.
     * @memberOf utilx.Array
     * @name copyWithin
     * @function
     * @param {array} array
     * @param {array} target
     * @param {number} [start]
     * @param {number} [end]
     * @return {array}
     */
    if (!testShims && $.Function.isNativeFunction(base.array.copyWithin)) {
        $.Array.copyWithin = $.Function.ToMethod(base.array.copyWithin);
    } else {
        $.Array.prototype.copyWithin = function (target, start, end) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
                relativeTarget = $.Number.toInteger(target),
                relativeStart = $.Number.toInteger(start),
                relativeEnd,
                to,
                from,
                final,
                count,
                direction,
                index,
                isTargetArrayOrArguments;

            if (relativeTarget < 0) {
                to = base.Math.max(length + relativeTarget, 0);
            } else {
                to = base.Math.min(relativeTarget, length);
            }

            if (relativeStart < 0) {
                from = base.Math.max(length + relativeStart, 0);
            } else {
                from = base.Math.min(relativeStart, length);
            }

            if (strictEqual(typeof end, base.str.Undefined)) {
                relativeEnd = length;
            } else {
                relativeEnd = $.Number.toInteger(end);
            }

            if (relativeEnd < 0) {
                final = base.Math.max(length + relativeEnd, 0);
            } else {
                final = base.Math.min(relativeEnd, length);
            }

            count = base.Math.min(final - from, length - to);
            if (from < to && to < from + count) {
                direction = -1;
                from += count - 1;
                to += count - 1;
            } else {
                direction = 1;
            }

            isTargetArrayOrArguments = isArrayOrArguments(object);
            for (index = count; index > 0; index -= 1) {
                if ($.Object.hasOwn(object, from)) {
                    if (isTargetArrayOrArguments) {
                        $.Array.assign(object, to, object[from]);
                    } else {
                        object[to] = object[from];
                    }
                } else {
                    delete object[to];
                }

                from += direction;
                to += direction;
            }

            return object;
        };

        $.Array.copyWithin = $.Function.ToMethod($.Array.prototype.copyWithin);
    }

    /**
     * Returns true if the operand key matches the test property name.
     * @private
     * @function unwantedErrorPropsFilter
     * @param {key} string
     * @return {boolean}
     */
    unwantedErrorPropsFilter = function (key) {
        return key !== this;
    };

    for (testProp in base.error.proto) {
        if ($.Array.contains(base.props.unwantedError, testProp)) {
            hasErrorProps = true;
        } else {
            base.props.unwantedError = $.Array.filter(base.props.unwantedError, unwantedErrorPropsFilter, testProp);
        }
    }

    /**
     * Returns an array of a given object's own enumerable properties, in the same order as that provided by a
     * for-in loop (the difference being that a for-in loop enumerates properties in the prototype chain as well).
     * Some gotchas to watch for, not all browsers agree on what properties are enumerable:
     * IE 6 to 9: Error: description, message
     * IE 10: Error: description
     * FF 3 to 5: Error: message, fileName, lineNumber, stack
     * FF 3 to 3.5: Function: prototype
     * Chrome 5 to 9: Error: message, stack
     * Chrome 10 to 13: Error: arguments, type, message, stack
     * V8 Error object has: captureStackTrace, stackTraceLimit
     * Opera 10 to 12 & next: Error: message
     * Opera 11.5: Function: prototype
     * Safari 4 to 6 & next: Error: message
     * There are most probably other native objects that do not agree: Object and Array should be fine in all
     * environments.
     * @memberOf utilx.Object
     * @name keys
     * @function
     * @param {object} object
     * @return {array}
     */
    try {
        if (!testShims && $.Function.isNativeFunction(base.object.keys)) {
            keysWorksWithArguments = base.object.keys($.Function.returnArgs(1, 2)).length === 2;
            if (hasErrorProps) {
                $.Object.keys = function (object) {
                    if (!keysWorksWithArguments && $.Object.isArguments(object)) {
                        object = slice(object);
                    }

                    var keys = base.object.keys(object);

                    if (isErrorTypePrototype(object)) {
                        keys = $.Array.filter(keys, function (key) {
                            return !$.Array.contains(base.props.unwantedError, key);
                        });
                    }

                    return keys;
                };
            } else if (!keysWorksWithArguments) {
                $.Object.keys = function (object) {
                    return base.object.keys(slice(object));
                };
            } else {
                $.Object.keys = base.object.keys;
            }
        } else {
            throw new base.error.Ctr();
        }
    } catch (eKeys) {
        $.Object.keys = function (object) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);

            var skipProto = hasFuncProtoBug && $.Function.isFunction(object),
                skipErrorProps = hasErrorProps && isErrorTypePrototype(object),
                props = [],
                prop,
                ctor,
                isProto,
                nonEnum;

            for (prop in object) {
                if (!(skipProto && prop === base.str.Prototype) &&
                        !(skipErrorProps && $.Array.contains(base.props.unwantedError, prop)) &&
                            $.Object.hasOwn(object, prop)) {

                    push(props, prop);
                }
            }

            if (hasDontEnumBug && object !== base.object.proto) {
                ctor = object.constructor;
                isProto = ($.Function.isFunction(ctor) && ctor.prototype === object);
                nonEnum = nonEnumProps[$.Object.ToClassString(object)];
                $.Array.forEach(base.props.shadowed, function (property) {
                    if (!(isProto && nonEnum[property]) && $.Object.hasOwn(object, property)) {
                        push(props, property);
                    }
                });
            }

            return props;
        };
    }

    /**
     * Check to see if an object is empty (contains no enumerable properties).
     * Some gotchas to watch for, not all browsers agree on what properties are enumerable:
     * IE 6 to 9: Error: description, message
     * IE 10: Error: description
     * FF 3 to 5: Error: message, fileName, lineNumber, stack
     * FF 3 to 3.5: Function: prototype
     * Chrome 5 to 9: Error: message, stack
     * Chrome 10 to 13: Error: arguments, type, message, stack
     * V8 Error object has: captureStackTrace, stackTraceLimit
     * Opera 10 to 12 & next: Error: message
     * Opera 11.5: Function: prototype
     * Safari 4 to 6 & next: Error: message
     * There are most probably other native objects that do not agree: Object and Array should be fine in all
     * environments..
     * @memberOf utilx.Object
     * @name isEmpty
     * @function
     * @param {object} inputArg
     * @return {boolean}
     */
    $.Object.isEmpty = function (inputArg) {
        return !$.Object.keys(inputArg).length;
    };

    /**
     * Returns true if the operand inputArg is a String and only contains numerical digits.
     * @memberOf utilx.String
     * @name isDigits
     * @function
     * @param {*} string
     * @return {boolean}
     */
    $.String.prototype.isDigits = function () {
        return $.String.isNotEmptyAny(this) && $.RegExp.test(base.regExp.notDigits, this);
    };

    $.String.isDigits = $.Function.ToMethod($.String.prototype.isDigits);

    /**
     * Returns true if the operand inputArg is deemed numeric.
     * @memberOf utilx.Object
     * @name isNumeric
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Object.isNumeric = function (inputArg) {
        var val = false,
            string;

        if ($.Number.isNumberAny(inputArg) || $.String.isStringAny(inputArg)) {
            string = $.String.replace($.String.ToString(inputArg), base.regExp.plusMinus, base.str.empty);
            if (!base.isNaN(base.parseFloat(string)) && base.isFinite(string)) {
                val = true;
            }
        }

        return val;
    };

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     * @memberOf utilx.Object
     * @name defineProperty
     * @function
     * @param {object} object
     * @param {string} property
     * @param {object} descriptor
     * @return {object}
     */
    try {
        if (testShims) {
            throw new base.error.Ctr();
        }

        testObject1 = base.object.defineProperty({}, base.str.sentinel, {
            value: null
        });

        if (testObject1[base.str.sentinel] !== null) {
            throw new base.error.Ctr('Fails sentinel check');
        }

        // Test string integer
        try {
            testValue = base.object.defineProperty([], '1.', {
                value: null
            });

            if (testValue[1] !== null) {
                throw new base.error.Ctr('Fails integer check');
            }
        } catch (eDP1) {
            definePropertyPatch1 = true;
        }

        // Test assign to array
        try {
            testObject1 = base.object.defineProperty([], base.str.zero, {
                value: null
            });

            if (testObject1[0] !== null) {
                throw new base.error.Ctr('Fails array check');
            }
        } catch (eDP2) {
            definePropertyPatch2 = true;
        }

        // Test overwrite array property when no value defined
        try {
            testObject1 = base.object.defineProperty([10], base.str.zero, {});
            if (testObject1[0] !== 10) {
                throw new base.error.Ctr('Fails overwrite check');
            }
        } catch (eDP3) {
            definePropertyPatch3 = true;
        }

        if (definePropertyPatch1 || definePropertyPatch2 || definePropertyPatch3) {
            $.Object.defineProperty = function (object, property, descriptor) {
                var isA = isArrayOrArguments(object) && $.Object.isNumeric(property) &&
                            $.Number.isUint32(+property),
                    isB = (definePropertyPatch1 || definePropertyPatch2) &&
                            $.Object.hasOwn(descriptor, base.str.value);

                if (definePropertyPatch1 && isA) {
                    property = +property;
                }

                if (definePropertyPatch2 && isA &&
                        (isB || !$.Object.hasOwn(object, property))) {

                    $.Array.assign(object, property, descriptor[base.str.value]);
                }

                if (definePropertyPatch3 && isA && !isB) {
                    descriptor[base.str.value] = object[property];
                }

                return base.object.defineProperty(object, property, descriptor);
            };
        } else {
            $.Object.defineProperty = base.object.defineProperty;
        }

        testObject1 = {
            abc: 0,
            def: base.str.empty,
            ghi: true,
            jkl: $.Function.noop
        };

        $.Array.forEach($.Object.keys(testObject1), function (key) {
            $.Object.defineProperty(testObject1, key, base.properties.notEnumerable);
        });

        if (testObject1.abc !== 0 ||
                testObject1.def !==  base.str.empty ||
                testObject1.ghi !== true ||
                testObject1.jkl !== $.Function.noop) {

            throw new base.error.Ctr();
        }

        testObject1 = [10, true, base.str.empty, $.Function.noop];

        $.Array.forEach($.Object.keys(testObject1), function (key) {
            $.Object.defineProperty(testObject1, key, base.properties.notEnumerable);
        });

        if (testObject1[0] !== 10 ||
                testObject1[1] !== true ||
                testObject1[2] !== base.str.empty ||
                testObject1[3] !== $.Function.noop) {

            throw new base.error.Ctr();
        }
    } catch (eDP) {
        $.Object.defineProperty = function (object, property, descriptor) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);
            if (!isTypeObjectOrIsFunction(descriptor)) {
                throw new base.typeError.Ctr('Property description must be an object: ' +
                                             $.String.ToString(descriptor));
            }

            if ($.Object.hasOwn(descriptor, base.str.value) && ($.Object.hasOwn(descriptor, base.str.get) ||
                        $.Object.hasOwn(descriptor, base.str.set))) {

                throw new base.typeError.Ctr('Invalid property. A property cannot have accessors and a value');
            }

            var prototype;

            if (!$.Object.hasOwn(descriptor, base.str.get) && !$.Object.hasOwn(descriptor, base.str.set)) {
                if ($.Object.hasOwn(descriptor, base.str.value) || !$.Object.hasOwn(object, property)) {
                    if (isProtoSupported) {
                        prototype = object[base.str.proto];
                        object[base.str.proto] = base.object.proto;
                        if (isArrayOrArguments(object) && $.Object.isNumeric(property) &&
                                $.Number.isUint32(+property)) {

                            $.Array.assign(object, property, descriptor.value);
                        } else {
                            try {
                                delete object[property];
                            } catch (eHasOwn) {
                                if (!testShims) {
                                    throw eHasOwn;
                                }
                            }

                            object[property] = descriptor.value;
                        }

                        if (strictEqual(typeof prototype, base.str.Undefined)) {
                            delete object[base.str.proto];
                        } else {
                            object[base.str.proto] = prototype;
                        }
                    } else {
                        if (isArrayOrArguments(object) && $.Object.isNumeric(property) &&
                                $.Number.isUint32(+property)) {

                            $.Array.assign(object, property, descriptor.value);
                        } else {
                            object[property] = descriptor.value;
                        }
                    }
                }
            } else {
                if (!$.Function.isNativeFunction(base.object[base.str.defineGetter]) ||
                        !$.Function.isNativeFunction(base.object[base.str.defineSetter])) {

                    throw new base.typeError.Ctr('getters & setters can not be defined on this javascript engine');
                }

                if ($.Function.isFunction(descriptor.get)) {
                    base.object[base.str.defineGetter].call(object, property, descriptor.get);
                }

                if ($.Function.isFunction(descriptor.set)) {
                    base.object[base.str.defineSetter].call(object, property, descriptor.set);
                }
            }

            return object;
        };
    }

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     * @memberOf utilx.Object
     * @name defineProperties
     * @function
     * @param {object} object
     * @param {string} props
     * @return {object}
     */
    $.Object.defineProperties = function (object, props) {
        throwIfIsNotTypeObjectOrIsNotFunction(object);
        if (!isTypeObjectOrIsFunction(props)) {
            throw new base.typeError.Ctr('Property description must be an object');
        }

        $.Array.forEach($.Object.keys(props), function (key) {
            $.Object.defineProperty(object, key, props[key]);
        });

        return object;
    };

    /**
     * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties
     * from being removed; and prevents existing properties, or their enumerability, configurability, or
     * writability, from being changed.
     * In essence the object is made effectively immutable. Returns the object being frozen.
     * @memberOf utilx.Object
     * @name freeze
     * @function
     * @param {object} object
     * @return {object}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.freeze)) {
        $.Object.freeze = base.object.freeze;
    } else {
        $.Object.freeze = function (object) {
            return throwIfIsNotTypeObjectOrIsNotFunction(object);
        };
    }

    // detect a Rhino bug and patch it
    try {
        testObject1 = {
            noop: $.Function.noop
        };

        $.Object.freeze(testObject1.noop);
    } catch (eFreeze) {
        freezeObject = $.Object.freeze;
        $.Object.freeze = function (object) {
            var val;

            if ($.Function.isFunction(object)) {
                val = object;
            } else {
                val = freezeObject(object);
            }

            return val;
        };
    }

    /**
     * Determine if an object is frozen.
     * @memberOf utilx.Object
     * @name isFrozen
     * @function
     * @param {object} object
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.isFrozen)) {
        $.Object.isFrozen = base.object.isFrozen;
    } else {
        $.Object.isFrozen = function (object) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);

            return false;
        };
    }

    /**
     * To make object fully immutable, freeze each object in object.
     * @memberOf utilx.Object
     * @name deepFreeze
     * @function
     * @param {object} object
     * @return {object}
     */
    $.Object.deepFreeze = function (object) {
        $.Object.freeze(object);
        $.Array.forEach($.Object.keys(object), function (propKey) {
            var prop = object[propKey];

            if (isTypeObjectOrIsFunction(prop) && !$.Object.isFrozen(prop)) {
                $.Object.deepFreeze(prop);
            }
        });

        return object;
    };

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     * @memberOf utilx.Object
     * @name instanceOf
     * @function
     * @param {object} object
     * @param {function} ctr
     * @return {boolean}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.isPrototypeOf)) {
        $.Object.instanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            return isTypeObjectOrIsFunction(object) &&
                (object instanceof ctr || base.object.isPrototypeOf.call(ctr.prototype, object));
        };
    } else {
        $.Object.instanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            var val = false;

            if (isTypeObjectOrIsFunction(object)) {
                val = object instanceof ctr;
                if (!val) {
                    while (object) {
                        if (object === ctr.prototype) {
                            val = true;
                            break;
                        }

                        object = $.Object.getPrototypeOf(object);
                    }
                }
            }

            return val;
        };
    }

    /**
     * The assign function is used to copy the values of all of the enumerable own properties from a
     * source object to a target object.
     * @memberOf utilx.Object
     * @name assign
     * @function
     * @param {object} target
     * @param {...object} source
     * @return {object}
     */
    if (!testShims && $.Function.isNativeFunction(base.object.assign)) {
        $.Object.assign = base.object.assign;
    } else {
        $.Object.assign = function (target) {
            throwIfIsNotTypeObjectOrIsNotFunction(target);

            var isTargetArrayOrArguments = isArrayOrArguments(target);

            $.Array.forEach(slice(arguments, 1), function (source) {
                $.Array.forEach($.Object.keys(throwIfIsNotTypeObjectOrIsNotFunction(source)), function (key) {
                    var value = source[key];

                    if (isTargetArrayOrArguments) {
                        $.Array.assign(target, key, value);
                    } else {
                        target[key] = value;
                    }
                });
            });

            return target;
        };
    }

    /**
     * The constructor used by $.Object.create if shimmed.
     * @private
     * @constructor ObjectCreateFunc
     */
    function ObjectCreateFunc() {
        return;
    }

    /**
     * The $.Object.create method creates a new object with the specified prototype object and properties.
     * @memberOf utilx.Object
     * @name create
     * @function
     * @param {object} prototype
     * @return {object}
     */
    try {
        if (testShims) {
            throw new base.error.Ctr();
        }

        testObject1 = base.object.create(ObjectCreateFunc.prototype, {
            constructor: $.Object.assign({
                value: ObjectCreateFunc
            }, base.properties.notEnumerable),

            foo: $.Object.assign({
                value: base.str.test
            }, base.properties.notEnumerable)
        });

        if (testObject1.foo !== base.str.test) {
            throw new base.error.Ctr();
        }

        $.Object.create = base.object.create;
    } catch (eCreate) {
        $.Object.create = function (prototype, propertiesObject) {
            var newObject;

            ObjectCreateFunc.prototype = throwIfIsNotTypeObjectOrIsNotFunction(prototype);
            newObject = new ObjectCreateFunc();
            $.Object.defineProperty(newObject, base.str.proto, $.Object.assign({
                value: prototype
            }, base.properties.notEnumerable));

            if ($.Object.isPlainObject(propertiesObject)) {
                $.Object.defineProperties(newObject, propertiesObject);
            }

            return newObject;
        };
    }

    /**
     * Returns true if the operand inputArg is a Date object and is valid.
     * @memberOf utilx.Date
     * @name isValid
     * @function
     * @param {*} dateObject
     * @return {boolean}
     */
    $.Date.prototype.isValid = function () {
        return $.Date.isDate(this) && !$.Number.isNaN(base.date.getTime.call(this));
    };

    $.Date.isValid = $.Function.ToMethod($.Date.prototype.isValid);

    /**
     * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @memberOf utilx.Date
     * @name now
     * @function
     * @return {number}
     */
    if (!testShims && $.Function.isNativeFunction(base.date.now)) {
        $.Date.now = base.date.now;
    } else {
        $.Date.now = function now() {
            return base.date.getTime.call(new base.date.Ctr());
        };
    }

    /**
     * Takes string and puts a backslash in front of every character that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain
     * special regex characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name escapeRegex
     * @function
     * @param {string} string
     * @return {string}
     */
    $.String.prototype.escapeRegex = function () {
        return $.String.replace(onlyCoercibleToString(this), base.regExp.escapeThese, '\\$&');
    };

    $.String.escapeRegex = $.Function.ToMethod($.String.prototype.escapeRegex);

    /**
     * Wraps a string within the given character.
     * @memberOf utilx.String
     * @name wrapInChars
     * @function
     * @param {string} string
     * @param {string} character
     * @return {string}
     */
    $.String.prototype.wrapInChars = function (characters) {
        if (!$.String.isStringAny(characters) && !$.Number.isNumberAny(characters)) {
            characters = '';
        } else {
            characters = $.String.ToString(characters);
        }

        return characters + $.String.ToString(this) + characters;
    };

    $.String.wrapInChars = $.Function.ToMethod($.String.prototype.wrapInChars);

    /**
     * Replace all occurences of a string pattern within a string with the string characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx.String
     * @name replaceAll
     * @function
     * @param {string} string
     * @param {(string|RegExp)} pattern
     * @param {string} characters
     * @return {string}
     */
    $.String.prototype.replaceAll = function (pattern, characters) {
        if ($.String.isStringAny(pattern)) {
            pattern = new base.regExp.Ctr($.String.escapeRegex(pattern), base.str.g);
        } else if ($.RegExp.isRegExp(pattern)) {
            pattern = copyRegExp(pattern, {
                add: base.str.g
            });
        }

        if (!$.String.isStringAny(characters) && !$.Number.isNumberAny(characters)) {
            characters = '';
        } else {
            characters = $.String.ToString(characters);
        }

        return $.String.replace(onlyCoercibleToString(this), pattern, characters);
    };

    $.String.replaceAll = $.Function.ToMethod($.String.prototype.replaceAll);

    /**
     * Tests a deep equality relation.. set opts {strict: true} for Object.deepStrictEqual.
     * @memberOf utilx.Object
     * @name deepEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @param {object} opts
     * @return {boolean}
     */
    $.Object.deepEqual = function (a, b, opts) {
        if (!$.Object.isPlainObject(opts)) {
            opts = {};
        }

        if ($.Object.is(a, b)) {
            return true;
        }

        if ($.Date.isDate(a) && $.Date.isDate(b)) {
            return $.Object.is(a.getTime(), b.getTime());
        }

        if ($.RegExp.isRegExp(a) && $.RegExp.isRegExp(b)) {
            return a.source === b.source &&
                a.global === b.global &&
                a.multiline === b.multiline &&
                a.lastIndex === b.lastIndex &&
                a.ignoreCase === b.ignoreCase &&
                a.sticky === b.sticky;
        }

        if (!$.Object.isTypeObject(a) && !$.Object.isTypeObject(b)) {
            return opts.strict ? $.Object.is(a, b) : $.Object.equal(a, b);
        }

        if (opts.strict) {
            if (!$.Object.is($.Object.getPrototypeOf($.Object.ToObject(a)),
                                $.Object.getPrototypeOf($.Object.ToObject(b)))) {

                return false;
            }
        } else {
            if (!$.Object.is(a.prototype, b.prototype)) {
                return false;
            }
        }

        if ($.Object.isArguments(a)) {
            if (!$.Object.isArguments(b)) {
                return false;
            }

            return $.Object.deepEqual(slice(a), slice(b), opts);
        }

        var ka,
            kb,
            status;

        try {
            ka = $.Object.keys(a);
            kb = $.Object.keys(b);
        } catch (eDE) {
            return false;
        }

        if (ka.length !== kb.length) {
            if ($.Array.isArray(a) && $.Array.isArray(b)) {
                if (a.length !== b.length) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            $.Array.stableSort(ka);
            $.Array.stableSort(kb);
            status = $.Array.some(ka, function (aKey, index) {
                return aKey !== kb[index];
            });

            if (status) {
                return false;
            }
        }

        status = $.Array.some(ka, function (aKey) {
            return !$.Object.deepEqual(a[aKey], b[aKey], opts);
        });

        if (status) {
            return false;
        }

        return true;
    };

    /**
     * Shortcut for $.Object.deepEqual(a, b, {strict: true})
     * @memberOf utilx.Object
     * @name deepStrictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.Object.deepStrictEqual = function (a, b) {
        return $.Object.deepEqual(a, b, {
            strict: true
        });
    };

    /**
     * Truncates a long string to the length specified by n; used by AssertionError.toString
     * @memberOf utilx.String
     * @name truncate
     * @function
     * @param {string} s
     * @param {number|string} n
     * @return {string}
     */
    $.String.prototype.truncate = function (n) {
        var s = $.String.ToString(this);

        n = +n;
        if (!$.Number.isNaN(n) && n >= 0) {
            if (s.length > n) {
                s = strSlice(s, 0, n);
            }
        }

        return s;
    };

    $.String.truncate = $.Function.ToMethod($.String.prototype.truncate);

    /**
     * Inherit the prototype methods from one constructor into another.
     * @memberOf utilx.Function
     * @name inherits
     * @function
     * @param {function} ctor
     * @param {function} superCtor
     * @return {undefined}
     */
    $.Function.prototype.inherits = function (superCtor) {
        throwIfNotAFunction(this);
        throwIfNotAFunction(superCtor);
        this.superCtor = superCtor;
        this.prototype = $.Object.create(superCtor.prototype);
        $.Object.defineProperty(this.prototype, base.str.Constructor, $.Object.assign({
            value: this
        }, base.properties.notEnumerable));
    };

    $.Function.inherits = $.Function.ToMethod($.Function.prototype.inherits);

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     * @memberOf utilx.Error
     * @name isErrorTypeConstructor
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.Error.isErrorTypeConstructor = function (inputArg) {
        var result;

        switch (inputArg) {
        case base.error.Ctr:
            /* falls through */
        case base.typeError.Ctr:
            /* falls through */
        case base.syntaxError.Ctr:
            /* falls through */
        case base.rangeError.Ctr:
            /* falls through */
        case base.evalError.Ctr:
            /* falls through */
        case base.referenceError.Ctr:
            /* falls through */
        case base.uriError.Ctr:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    /**
     * Custom replacer used to help stringify error messages.
     * @memberOf utilx
     * @name customErrorReplacer
     * @function
     * @param {string} key Unused
     * @param {*} value
     * @return {string}
     */
    $.customErrorReplacer = function () {
        var value = slice(arguments, 1, 2),
            result;

        if ($.String.isString(value)) {
            result = value;
        } else if (strictEqual(typeof value, base.str.Undefined) ||
                    $.Function.isFunction(value) || $.RegExp.isRegExp(value) ||
                    ($.Number.isNumber(value) && !$.Number.isFinite(value))) {

            result = $.String.ToString(value);
        } else {
            result = value;
        }

        return result;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberOf utilx
     * @name normaliseErrorIEToStringOn
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringOn = function () {
        var message = 'Should we patch IE6&7?';

        try {
            throw new base.error.Ctr(message);
        } catch (ePatch) {
            if (ePatch.message === message && ePatch.toString() === base.classString.error) {
                previousIEErrorToString = base.error.prototype.toString;
                $.Object.defineProperties(base.error.proto, {
                    toString: $.Object.assign({
                        value: function () {
                            return this.name + ': ' + this.message;
                        }
                    }, base.properties.notEnumerable)
                });

                patchedIEErrorToString = true;
            }
        }

        return patchedIEErrorToString;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberOf utilx
     * @name normaliseErrorIEToStringOff
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringOff = function () {
        if (patchedIEErrorToString) {
            $.Object.defineProperties(base.error.proto, {
                toString: $.Object.assign({
                    value: previousIEErrorToString
                }, base.properties.notEnumerable)
            });

            patchedIEErrorToString = false;
        }

        return patchedIEErrorToString;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberOf utilx
     * @name normaliseErrorIEToStringState
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringState = function () {
        return patchedIEErrorToString;
    };

    /**
     * Creates a custom Error constructor.
     * @private
     * @function makeCustomError
     * @param {string} name
     * @param {constructor} ErrorConstructor Does not work with IE < 9, only Error can be used
     * @param {number|string} [maxMessageLength] Range 64 to Infinity (128 default)
     * @return {constructor}
     */
    function makeCustomError(name, ErrorConstructor, maxMessageLength) {
        if (!$.String.isString(name) || $.String.isEmpty(name)) {
            throw new base.typeError.Ctr('"name" was not a valid string');
        }

        if (!$.Error.isErrorTypeConstructor(ErrorConstructor)) {
            throw new base.typeError.Ctr('"ErrorConstructor" was not an Error type');
        }

        maxMessageLength = +maxMessageLength;
        if ($.Number.isNaN(maxMessageLength) || maxMessageLength < 64) {
            maxMessageLength = 128;
        }

        function CustomError(message, stackStartFunction) {
            var err;

            if (!$.String.isString(message)) {
                message = $.String.truncate($.JSON.stringify(message, $.customErrorReplacer),
                                               maxMessageLength);
            }

            $.Object.defineProperty(this, base.str.message, $.Object.assign({
                value: message
            }, base.properties.notEnumerable));

            if (!$.Function.isFunction(stackStartFunction)) {
                stackStartFunction = CustomError;
            }

            this.stackStartFunction = stackStartFunction;
            if ($.Function.isFunction(ErrorConstructor.captureStackTrace)) {
                ErrorConstructor.captureStackTrace(this, this.stackStartFunction);
            } else {
                err = ErrorConstructor.call(this);
                if ($.String.isString(err[base.str.stack])) {
                    $.Object.defineProperty(this, base.str.stack, $.Object.assign({
                        value: err[base.str.stack]
                    }, base.properties.notEnumerable));
                } else if ($.String.isString(err[base.str.stacktrace])) {
                    $.Object.defineProperty(this, base.str.stack, $.Object.assign({
                        value: err[base.str.stacktrace]
                    }, base.properties.notEnumerable));
                }
            }
        }

        $.Function.inherits(CustomError, ErrorConstructor);

        $.Object.defineProperties(CustomError.prototype, {
            name: $.Object.assign({
                value: name
            }, base.properties.notEnumerable),

            toString: $.Object.assign({
                value: function () {
                    var arr = $.String.split(this.message, base.regExp.splitNewLine),
                        messageToString = this.name + ': ';

                    if (arr.length > 1) {
                        arr = $.Array.filter(arr, function (element) {
                            var val;

                            if (!$.String.contains(element,
                                                     'opera:config#UserPrefs|Exceptions Have Stacktrace')) {

                                val = element;
                            }

                            return val;
                        });

                        messageToString += $.Array.join(arr, base.str.newline);
                    } else {
                        messageToString += this.message;
                    }

                    return messageToString;
                }
            }, base.properties.notEnumerable)
        });

        return CustomError;
    }

    try {
        TestConstructor = makeCustomError('CustomSyntaxError', base.syntaxError.Ctr);
        isOkToUseOtherErrors = $.Object.instanceOf(new TestConstructor(base.str.test), base.syntaxError.Ctr);
    } catch (eCSE) {
        // IE < 9
        isOkToUseOtherErrors = false;
    }

    /**
     * Creates a custom Error. If and invalid ErrorConstructor is provided it will default to Error.
     * If a valid native Error type constructor is provided but not supporte by the browesr the it will
     * also default to Error. (Looking at you IE < 9)
     * @memberOf utilx
     * @name customError
     * @function
     * @param {string} name
     * @param {constructor} [ErrorConstructor] Does not work with IE < 9, only Error can be used (defult: Error)
     * @param {number|string} [maxMessageLength] Range 64 to Infinity (128 default)
     * @return {constructor}
     */
    $.customError = function (name, ErrorConstructor, maxMessageLength) {
        if (!$.String.isString(name)) {
            throw new base.typeError.Ctr('"name" was not a string');
        }

        if ($.String.isEmpty(name)) {
            throw new base.syntaxError.Ctr('"name" was an empty string');
        }

        if (strictEqual(typeof maxMessageLength, base.str.Undefined) &&
                ($.Number.isNumber(ErrorConstructor) || $.String.isString(ErrorConstructor))) {
            maxMessageLength = ErrorConstructor;
            ErrorConstructor = base.error.Ctr;
        }

        if (!isOkToUseOtherErrors || !$.Error.isErrorTypeConstructor(ErrorConstructor)) {
            ErrorConstructor = base.error.Ctr;
        }

        return makeCustomError(name, ErrorConstructor, maxMessageLength);
    };

    /**
     * Returns a property descriptor for an own property (that is, one directly present on an object,
     * not present by dint of being along an object's prototype chain) of a given object.
     * On environments that do not support it natively, this is just a sham to allow code to work.
     * @methodOf utilx.Object
     * @function getOwnPropertyDescriptor
     * @param {object} object
     * @param {string} property
     * @return {object}
     */
    try {
        testObject1 = {
            sentinel: null
        };

        testObject2 = [10, 20, 30];
        testObject2[4] = base.Undefined;
        if (testShims || !$.Function.isNativeFunction(base.object.getOwnPropertyDescriptor) ||
                base.object.getOwnPropertyDescriptor(testObject1, base.str.sentinel).value !== null ||
                base.object.getOwnPropertyDescriptor(testObject2, 3).value !== 30 ||
                base.object.getOwnPropertyDescriptor(testObject2, '3').value !== 30 ||
                !$.Object.hasOwn(base.object.getOwnPropertyDescriptor(testObject2, 4), base.str.value) ||
                base.object.getOwnPropertyDescriptor(testObject2, 4).value !== base.Undefined ||
                base.object.getOwnPropertyDescriptor(testObject2, 5) !== base.Undefined ||
                $.Object.hasOwn(base.object.getOwnPropertyDescriptor(testObject2, 5), base.str.value)) {

            throw new base.error.Ctr();
        }

        if (!(base.object.getOwnPropertyDescriptor(function (a) {
                return a;
            }, base.str.Length).writable)) {

            $.Object.getOwnPropertyDescriptor = base.object.getOwnPropertyDescriptor;
        } else {
            $.Object.getOwnPropertyDescriptor = function (object, property) {
                var descriptor = base.object.getOwnPropertyDescriptor(object, property);

                if ($.Function.isFunction(object) && property === base.str.Length && descriptor.writable) {
                    descriptor.writable = false;
                }

                return descriptor;
            };
        }
    } catch (eGOPD) {
        $.Object.getOwnPropertyDescriptor = function (object, property) {
            var descriptor,
                prototype,
                getter,
                setter;

            if ($.Object.hasOwn(throwIfIsNotTypeObjectOrIsNotFunction(object), property)) {
                descriptor = {};
                descriptor.configurable = true;
                descriptor.enumerable = true;
                if (areGetSetSupported) {
                    prototype = object[base.str.proto];
                    object[base.str.proto] = base.object.proto;
                    getter = base.object[base.str.lookupGetter].call(object, property);
                    setter = base.object[base.str.lookupSetter].call(object, property);
                    if (strictEqual(typeof prototype, base.str.Undefined)) {
                        delete object[base.str.proto];
                    } else {
                        object[base.str.proto] = prototype;
                    }

                    if ($.Function.isNativeFunction(getter) || $.Function.isNativeFunction(setter)) {
                        if ($.Function.isNativeFunction(getter)) {
                            descriptor[base.str.get] = getter;
                        }

                        if ($.Function.isNativeFunction(setter)) {
                            descriptor[base.str.set] = setter;
                        }
                    }
                }

                descriptor[base.str.value] = object[property];
                descriptor.writable = true;
            }

            return descriptor;
        };
    }

    /**
     * Swap places of 2 item values on an object's properties.
     * @memberOf utilx.Object
     * @name swapItems
     * @function
     * @param {object} object
     * @param {(number|string)} prop1
     * @param {(number|string)} prop2
     * @return {object}
     */
    $.Object.swapItems = function (object, prop1, prop2) {
        throwIfIsNotTypeObjectOrIsNotFunction(object);
        prop1 = $.String.ToString(prop1);
        prop2 = $.String.ToString(prop2);

        var temp1,
            temp2,
            num;

        if (prop1 !== prop2) {
            temp1 = $.Object.getOwnPropertyDescriptor(object, prop1);
            temp2 = $.Object.getOwnPropertyDescriptor(object, prop2);
            num = $.Number.toUint32(prop2);
            if (!$.Object.isPlainObject(temp1) || !$.Object.hasOwn(temp1, base.str.value)) {
                if ($.Object.isTypeObject(object) && !$.Function.isFunction(object) &&
                        hasValidLength(object) && $.String.ToString(num) === prop2 &&
                        num === object.length - 1) {

                    object.length -= 1;
                }

                delete object[prop2];
            } else {
                if ($.Object.isTypeObject(object) && !$.Function.isFunction(object) && hasValidLength(object) &&
                        $.String.ToString(num) === prop2 && num === object.length) {

                    object.length += 1;
                }

                $.Object.defineProperty(object, prop2, temp1);
            }

            num = $.Number.toUint32(prop1);
            if (!$.Object.isPlainObject(temp2) || !$.Object.hasOwn(temp2, base.str.value)) {
                if ($.Object.isTypeObject(object) && !$.Function.isFunction(object) && hasValidLength(object) &&
                        $.String.ToString(num) === prop1 && num === object.length - 1) {

                    object.length -= 1;
                }

                delete object[prop1];
            } else {
                $.Object.defineProperty(object, prop1, temp2);
                if ($.Object.isTypeObject(object) && !$.Function.isFunction(object) && hasValidLength(object) &&
                        $.String.ToString(num) === prop1 && num === object.length) {

                    object.length += 1;
                }

                $.Object.defineProperty(object, prop1, temp2);
            }
        }

        return object;
    };

    /**
     * Fisher-Yates Array.shuffle for randomly shuffling a set.
     * @memberOf utilx.Array
     * @name shuffle
     * @function
     * @param {array} array
     * @param {(number|string)} [rounds]
     * @return {array}
     */
    $.Array.prototype.shuffle = function (rounds) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
            index,
            round;

        if (length > 1 && !$.String.isStringObject(object)) {
            rounds = $.Number.clampToInt(rounds, 1, $.Number.MAX_INTEGER);
            for (round = 0; round < rounds; round += 1) {
                for (index = 0; index < length; index += 1) {
                    $.Object.swapItems(object, index, $.Number.randomInt(0, index));
                }
            }

            object.length = length;
        }

        return this;
    };

    $.Array.shuffle = $.Function.ToMethod($.Array.prototype.shuffle);

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     * @memberOf utilx.JSON
     * @name stringify
     * @function
     * @param {*} value
     * @param {function|array} replacer
     * @param {number} space
     * @return {string}
     */
    if (!testShims && $.Function.isNativeFunction(base.JSON.stringify)) {
        // A test function object with a custom `toJSON` method.
        (function () {
            stringifiedValue = function () {
                return 1;
            };
        }());

        stringifiedValue.toJSON = stringifiedValue;

        try {
            isSupportedResult =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                base.JSON.stringify(0) === base.str.zero &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                base.JSON.stringify(new base.number.Ctr()) === base.str.zero &&
                base.JSON.stringify(new base.string.Ctr()) === '""' &&
                // FF 3.1b1, 2 throw an error if the stringifiedValue is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                base.JSON.stringify($.Function.noop) === base.Undefined &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                base.JSON.stringify(base.Undefined) === base.Undefined &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the stringifiedValue is omitted entirely.
                base.JSON.stringify() === base.Undefined &&
                // FF 3.1b1, 2 throw an error if the given stringifiedValue is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                base.JSON.stringify(stringifiedValue) === '1' &&
                base.JSON.stringify([stringifiedValue]) === '[1]' &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                base.JSON.stringify([base.Undefined]) === '[null]' &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                base.JSON.stringify(null) === base.str.Null &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, $.Function.noop, 1]` serializes as "[1,true,],". These versions
                // of Firefox also allow trailing commas in JSON objects and arrays.
                // FF 3.1b3 elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                base.JSON.stringify([base.Undefined, $.Function.noop, null]) === '[null,null,null]' &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                // Removed test for '\0' => '\\'u0000'as Chrome 10 fails in 'use strict' mode with
                // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.
                base.JSON.stringify({
                    'A': [stringifiedValue, true, false, null, '\b\n\f\r\t']
                }) === '{"A":[1,true,false,null,"\\b\\n\\f\\r\\t"]}' &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                //base.JSON.stringify(null, stringifiedValue) === '"1"' &&
                base.JSON.stringify([1, 2], null, 1) === '[\n 1,\n 2\n]' &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                base.JSON.stringify(new base.date.Ctr(-8.64e15)) === '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                base.JSON.stringify(new base.date.Ctr(8.64e15)) === '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                base.JSON.stringify(new base.date.Ctr(-621987552e5)) === '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.7 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                base.JSON.stringify(new base.date.Ctr(-1)) === '"1969-12-31T23:59:59.999Z"';
        } catch (eStringify) {
            isSupportedResult = false;
        }
    }

    if (isSupportedResult) {
        $.JSON.stringify = base.JSON.stringify;
    } else {
        base.str.stringifyRxCharacters = '[\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5';
        base.str.stringifyRxCharacters += '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';
        base.regExp.stringifyEscapable = new base.regExp.Ctr(base.str.stringifyRxCharacters, base.str.g);
        stringifyMeta = {
            '\b': '\\b',
            '\t': '\\t',
            '\n': '\\n',
            '\f': '\\f',
            '\r': '\\r',
            '"': '\\"',
            '\\': '\\\\'
        };

        stringifyQuote = function (string) {
            var result = '"';

            base.regExp.stringifyEscapable.lastIndex = 0;
            if ($.RegExp.test(base.regExp.stringifyEscapable, string)) {
                result += $.String.replace(string, base.regExp.stringifyEscapable, function (a) {
                    var c = stringifyMeta[a],
                        r;

                    if ($.String.isString(c)) {
                        r = c;
                    } else {
                        r = '\\u' + strSlice('0000' + charCodeAt(a, 0).toString(16), -4);
                    }

                    return r;
                });
            } else {
                result += string;
            }

            return result + '"';
        };

        stringifyToString = function (key, holder) {
            var member,
                mind = stringifyGap,
                partial,
                value = holder[key];

            if (isTypeObjectOrIsFunction(value) && $.Function.isFunction(value.toJSON)) {
                value = value.toJSON(key);
            }

            if ($.Function.isFunction(stringifyReplacer)) {
                value = stringifyReplacer.call(holder, key, value);
            }

            switch (typeof value) {
            case base.str.string:
                return stringifyQuote(value);
            case base.str.number:
                if ($.Number.isFinite(value)) {
                    return $.String.ToString(value);
                }

                return base.str.Null;
            case base.str.boolean:
            case base.str.Null:
                return $.String.ToString(value);
            case base.str.object:
                if (value === null) {
                    return $.String.ToString(value);
                }

                stringifyGap += stringifyIndent;
                if ($.Array.isArray(value)) {
                    partial = $.Array.map(value, function () {
                        return stringifyToString(slice(arguments, 1, 2), value) || base.str.Null;
                    });

                    if (!partial.length) {
                        member = '[]';
                    } else if ($.String.isNotEmpty(stringifyGap)) {
                        member = '[' + base.str.newline + stringifyGap +
                            $.Array.join(partial, ',' + base.str.newline + stringifyGap) +
                            base.str.newline + mind + ']';
                    } else {
                        member = '[' + $.Array.join(partial) + ']';
                    }

                    stringifyGap = mind;

                    return member;
                }

                if ($.Array.isArray(stringifyReplacer)) {
                    partial = $.Array.reduce(stringifyReplacer, function (prev, element) {
                        var v;

                        if ($.String.isString(element)) {
                            v = stringifyToString(element, value);
                            if (!strictEqual(typeof v, base.str.Undefined)) {
                                push(prev, stringifyQuote(element) +
                                                ($.String.isNotEmpty(stringifyGap)  ? ': ' : ':') + v);
                            }
                        }

                        return prev;
                    }, []);
                } else {
                    partial = $.Array.reduce($.Object.keys(value), function (prev, k) {
                        var v = stringifyToString(k, value);

                        if (!strictEqual(typeof v, base.str.Undefined)) {
                            push(prev, stringifyQuote(k) +
                                            ($.String.isNotEmpty(stringifyGap) ? ': ' : ':') + v);
                        }

                        return prev;
                    }, []);
                }

                if (!partial.length) {
                    member = '{}';
                } else if ($.String.isNotEmpty(stringifyGap)) {
                    member = '{' + base.str.newline + stringifyGap +
                        $.Array.join(partial, ',' + base.str.newline + stringifyGap) + base.str.newline + mind + '}';
                } else {
                    member = '{' + $.Array.join(partial) + '}';
                }

                stringifyGap = mind;

                return member;
            }

            return base.Undefined;
        };

        $.JSON.stringify = function (value, replacer, space) {
            stringifyGap = base.str.empty;
            if ($.Number.isNumber(space)) {
                stringifyIndent = $.String.repeat(' ', space);
            } else if ($.String.isString(space)) {
                stringifyIndent = space;
            } else {
                stringifyIndent = base.str.empty;
            }

            stringifyReplacer = replacer;
            if (!$.Object.isUndefinedOrNull(replacer) &&
                    !$.Function.isFunction(replacer) &&
                    !$.Array.isArray(replacer)) {

                throw new base.error.Ctr('JSON.stringify');
            }

            return stringifyToString(base.str.empty, {
                '': value
            });
        };
    }

    /**
     * Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
     * @memberOf utilx.JSON
     * @name parse
     * @function
     * @param {string} text
     * @param {function|array} reviver
     * @return {object}
     */
    // Determines whether the (possibly native) `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    if (!testShims && $.Function.isNativeFunction(base.JSON.parse)) {
        try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (base.JSON.parse(base.str.zero) === 0 && base.JSON.parse(false) === false) {
                // Simple parsing test.
                testValue = base.JSON.parse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
                isSupportedResult = (testValue.A.length === 5 && testValue.A[0] === 1);
                if (isSupportedResult) {
                    try {
                        // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in base.str.
                        isSupportedResult = $.String.isString(base.JSON.parse('"\t"'));
                    } catch (ignore) {}

                    if (isSupportedResult) {
                        try {
                            // FF 4.0 and 4.0.1 allow leading `+` signs, and leading and
                            // trailing decimal points. FF 4.0, 4.0.1, and IE 9-10 also
                            // allow certain octal literals.
                            isSupportedResult = base.JSON.parse('01') !== 1;
                        } catch (ignore) {}
                    }
                }
            }
        } catch (eParse) {
            isSupportedResult = false;
        }
    }

    if (isSupportedResult) {
        try {
            base.JSON.parse();
        } catch (eParse) {
            threwSynatxError = $.Object.instanceOf(eParse, base.syntaxError.Ctr);
        }

        if (threwSynatxError) {
            $.JSON.parse = base.JSON.parse;
        } else {
            $.JSON.parse = function (text, reviver) {
                if (strictEqual(typeof text, base.str.Undefined)) {
                    throw new base.syntaxError.Ctr('JSON.parse');
                }

                return base.JSON.parse(text, reviver);
            };
        }
    } else {
        base.regExp.parseProtect1 = new base.regExp.Ctr('^[\\],:{}\\s]*$');
        base.regExp.parseProtect2 = new base.regExp.Ctr('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', base.str.g);
        base.regExp.parseProtect3 = new base.regExp.Ctr('"[^"\\\\\\n\\r]*"|true|false|null|' +
                                                '-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',
                                                base.str.g);
        base.regExp.parseProtect4 = new base.regExp.Ctr('(?:^|:|,)(?:\\s*\\[)+', base.str.g);
        base.str.parseRxCharacters = '[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f';
        base.str.parseRxCharacters += '\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';
        base.regExp.parseCharacterTest = new base.regExp.Ctr(base.str.parseRxCharacters, base.str.g);
        $.JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var value = holder[key];

                if ($.Object.isTypeObject(value)) {
                    $.Array.forEach($.Object.keys(value), function (k) {
                        var v = walk(value, k);

                        if (!strictEqual(typeof v, base.str.Undefined)) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    });
                }

                return reviver.call(holder, key, value);
            }

            text = $.String.ToString(text);
            base.regExp.parseCharacterTest.lastIndex = 0;
            if ($.RegExp.test(base.regExp.parseCharacterTest, text)) {
                text = $.String.replace(text, base.regExp.parseCharacterTest, function (a) {
                    return '\\u' + strSlice('0000' + charCodeAt(a, 0).toString(16), -4);
                });
            }

            if ($.RegExp.test(base.regExp.parseProtect1, $.String.replace($.String.replace($.String.replace(text,
                                base.regExp.parseProtect2, '@'),
                                base.regExp.parseProtect3, ']'),
                                base.regExp.parseProtect4, base.str.empty))) {

                /*jslint evil: true */
                j = base.eval('(' + text + ')');
                /*jslint evil: false */

                if ($.Function.isFunction(reviver)) {
                    return walk({
                        '': j
                    }, base.str.empty);
                }

                return j;
            }

            throw new base.syntaxError.Ctr('JSON.parse');
        };
    }

    /**
     * Calculate the Power Set of a given array.
     * @memberOf utilx.Array
     * @name powerSet
     * @function
     * @param {array} array
     * @return {array.array}
     */
    $.Array.prototype.powerSet = function () {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            length = $.Number.clampToInt(object.length, 0, $.Number.MAX_UINT32),
            lastElement,
            val;

        if (!length) {
            val = [[]];
        } else {
            lastElement = pop(object);
            val = $.Array.reduce($.Array.powerSet(object), function (previous, element) {
                push(previous, element);
                element = slice(element);
                push(element, lastElement);
                push(previous, element);

                return previous;
            }, []);
        }

        return val;
    };

    $.Array.powerSet = $.Function.ToMethod($.Array.prototype.powerSet);

    /**
     * Creates a copy of utilx from $.
     * @private
     * @function factory
     * @return {object}
     */
    function factory() {
        var utilx = {};

        $.Array.forEach($.Object.keys($), function (key1) {
            if (!$.Object.hasOwn(utilx, 'methods')) {
                $.Object.defineProperty(utilx, 'methods', $.Object.assign({
                    value: []
                }, base.properties.notEnumerable));
            }

            $.Object.defineProperty(utilx, key1, $.Object.assign({
                value: $[key1]
            }, base.properties.notEnumerable));

            if ($.Object.isPlainObject($[key1])) {
                if (!$.Object.hasOwn(utilx[key1], 'methods')) {
                    $.Object.defineProperty(utilx[key1], 'methods', $.Object.assign({
                        value: []
                    }, base.properties.notEnumerable));
                }

                $.Array.forEach($.Object.keys($[key1]), function (key2) {
                    $.Object.defineProperty(utilx[key1], key2, $.Object.assign({
                        value: $[key1][key2]
                    }, base.properties.notEnumerable));

                    if ($.Object.isPlainObject($[key1][key2])) {
                        if (!$.Object.hasOwn(utilx[key1][key2], 'methods')) {
                            $.Object.defineProperty(utilx[key1][key2], 'methods', $.Object.assign({
                                value: []
                            }, base.properties.notEnumerable));
                        }

                        $.Array.forEach($.Object.keys($[key1][key2]), function (key3) {
                            $.Object.defineProperty(utilx[key1][key2], key3, $.Object.assign({
                                value: $[key1][key2][key3]
                            }, base.properties.notEnumerable));

                            push(utilx[key1][key2].methods, key3);
                        });
                    } else {
                        push(utilx[key1].methods, key2);
                    }
                });
            } else {
                push(utilx.methods, key1);
            }
        });

        $.Object.defineProperties(utilx.Number, {
            POSITIVE_ZERO: base.properties.constant,

            NEGATIVE_ZERO: base.properties.constant,

            UNSAFE_INTEGER: base.properties.constant,

            WORD8: base.properties.constant,

            UWORD8: base.properties.constant,

            WORD16: base.properties.constant,

            UWORD16: base.properties.constant,

            WORD32: base.properties.constant,

            UWORD32: base.properties.constant,

            MAX_UINT32: base.properties.constant,

            MAX_INT32: base.properties.constant,

            MIN_INT32: base.properties.constant,

            MAX_UINT16: base.properties.constant,

            MAX_INT16: base.properties.constant,

            MIN_INT16: base.properties.constant,

            MAX_UINT8: base.properties.constant,

            MAX_INT8: base.properties.constant,

            MIN_INT8: base.properties.constant,

            MAX_INTEGER: base.properties.constant,

            MIN_INTEGER: base.properties.constant,

            POSITIVE_INFINITY: base.properties.constant,

            NEGATIVE_INFINITY: base.properties.constant,

            MAX_VALUE: base.properties.constant,

            MIN_VALUE: base.properties.constant,

            NAN: base.properties.constant,

            EPSILON: base.properties.constant
        });

        return utilx;
    }

    /*
     *
     * UMD
     *
     */

    if (!$.Object.isTypeObject(globalThis)) {
        throw new base.typeError.Ctr('Invalid global context');
    }

    publicUtil = $.Object.defineProperty(factory(), base.str.factory, $.Object.assign({
        value: function () {
            return $.Object.defineProperty(factory(), base.str.factory, $.Object.assign({
                value: publicUtil[base.str.factory]
            }, base.properties.notEnumerable));
        }
    }, base.properties.notEnumerable));

    if ($.Object.isTypeObject(module) && $.Object.isTypeObject(module.exports)) {
        $.Object.defineProperty(module, 'exports', $.Object.assign({
            value: publicUtil
        }, base.properties.notEnumerable));
    } else if ($.Function.isFunction(define) && $.Object.isTypeObject(define.amd)) {
        define(function () {
            return publicUtil;
        });
    } else {
        $.Object.defineProperty(globalThis, 'utilx', $.Object.assign({
            value: publicUtil
        }, base.properties.notEnumerable));
    }

    /*global module, define, window */
}(this,
    typeof window === 'object' && window,
    typeof JSON === 'object' && JSON,
    typeof module === 'object' && module,
    typeof define === 'function' && define));
