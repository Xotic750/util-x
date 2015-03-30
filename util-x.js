/**
 * @file {@link http://xotic750.github.io/util-x/ util-x}. A Javascript utility library..
 * @version 0.2.0
 * @author Graham Fairweather <xotic750@gmail.com>
 * @copyright Copyright (c) 2013 Graham Fairweather
 * @license {@link <http://www.gnu.org/licenses/gpl-3.0.html> GPL3}
 * @module util-x
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

/*global
    define, global, module, self, window
*/

/*properties
    '', '\b', '\t', '\n', '\f', '\r', '"', '0', '1', '1.', '10', '11', '2', '3',
    '4', '5', '6', '7', '8', '9', A, AffirmError, Array, AssertionError, Boolean,
    CheckObjectCoercible, Ctr, DP, Date, EPSILON, Error, EvalError, Function,
    JSON, MAX_INT16, MAX_INT32, MAX_INT8, MAX_SAFE_INTEGER, MAX_UINT16,
    MAX_UINT32, MAX_UINT8, MAX_VALUE, MIN_INT16, MIN_INT32, MIN_INT8,
    MIN_SAFE_INTEGER, MIN_VALUE, Math, NEGATIVE_INFINITY, NEGATIVE_ZERO, NaN,
    Number, Object, POSITIVE_INFINITY, POSITIVE_ZERO, RM, RangeError,
    ReferenceError, RegExp, String, SyntaxError, ToMethod, ToObject, ToString,
    TypeError, UNSAFE_INTEGER, URIError, UWORD16, UWORD32, UWORD8, Uint8Array,
    WORD16, WORD32, WORD8, '\\', abs, actual, add, alert, amd, anchor,
    appendChild, apply, areSameClass, areSameTypeOf, argNames, assert, assign,
    bind, body, c, call, captureStackTrace, ceil, charAt, charCodeAt, clamp,
    clampToInt, classId, clipDuplicates, codePointAt, concat, configurable,
    console, constructor, contains, copyWithin, countCharacter, create,
    createElement, customError, customErrorReplacer, debug, deepEqual,
    deepFreeze, deepStrictEqual, defineGetter, defineProperties, defineProperty,
    defineSetter, display, document, doesNotThrow, e, endsWith, enumerable,
    equal, escapeRegex, every, exec, execSlice, expected, exports, factory, fail,
    fill, filter, find, findIndex, first, firstIn, floor, foo, forAll, forEach,
    forKeys, frames, freeze, from, fromCharCode, fromCodePoint, get,
    getElementsByTagName, getOwnPropertyDescriptor, getOwnPropertyNames,
    getPrototypeOf, getTime, getUTCDate, getUTCFullYear, getUTCHours,
    getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds, global,
    goNative, hasOwn, hasOwnProperty, hasProperty, ifError, ignoreCase, inRange,
    index, indexOf, inherits, instanceOf, interimLastIndex, is, isArguments,
    isArray, isBoolean, isBytestring, isDate, isDigits, isEmpty, isError,
    isErrorTypeConstructor, isEven, isExtensible, isFinite, isFrozen, isFunction,
    isInt16, isInt32, isInt8, isInteger, isNaN, isNativeFunction, isNegative,
    isNumber, isNumeric, isOdd, isPlainObject, isPositive, isPrimitive,
    isPrototypeOf, isRegExp, isSafeInteger, isSealed, isString, isUint, isUint16,
    isUint32, isUint8, isUndefined, isValid, join, keys, last, lastIn, lastIndex,
    lastIndexOf, length, link, localeCompare, log, lookupGetter, lookupSetter,
    map, match, max, message, methods, min, minus, modulo, multiline, name, noop,
    normaliseErrorIEToStringOff, normaliseErrorIEToStringOn,
    normaliseErrorIEToStringState, normalize, notDeepEqual, notDeepStrictEqual,
    notEqual, notOk, notStrictEqual, now, of, ok, onload, operator, outRange,
    padLeadingChar, parse, parseFloat, parseInt, plus, pop, pow, powerSet,
    preventExtensions, propertyIsEnumerable, proto, prototype, push, random,
    randomInt, reduce, reduceRight, regex, remove, removeChild, repeat, replace,
    replaceAll, returnArgs, reverse, round, s, seal, search, sentinel, set,
    setPrototypeOf, shift, shuffle, sign, slice, some, sort, source, splice,
    split, sqrt, stableSort, stack, stackStartFunction, stacktrace, startsWith,
    sticky, strictEqual, stringify, style, substr, substring, swapItems, test,
    throws, times, toExponential, toFixed, toISOString, toInt16, toInt32, toInt8,
    toInteger, toJSON, toLength, toLocaleLowerCase, toLocaleString,
    toLocaleUpperCase, toLowerCase, toObject, toPrecision, toPrimitive, toSource,
    toString, toStringTag, toUint, toUint16, toUint32, toUint8, toUpperCase,
    trim, trimLeft, trimRight, trimString, truncate, typeOf, unique, unshift,
    unwatch, value, valueOf, version, watch, wrapInChars, writable, wsStr, write,
    application, uxTest
*/

/**
 * Type consisting of the primitive values.
 * @typedef {(null|undefined|boolean|string|number)} module:util-x~primitive
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
 */

/**
 * A number or string to be used as a number.
 * @typedef {(number|string)} module:util-x~NumberLike
 */

/**
 * A string or number to be used as a string.
 * @typedef {(string|number)} module:util-x~StringLike
 */

/**
 * Host objects that are of an array structure.
 * @typedef {(Array|Arguments)} module:util-x~Arrays
 */

/**
 * Objects that are array like, in that they are an integer indexed list
 * that have a length property which is integer between 0 and 2^32-1 (inclusive)
 * @typedef {(Arrays|Object)} module:util-x~ArrayLike
 */

/**
 * This IIFE contains the private scope of the module.
 *
 * @alias module:util-x
 * @param {?(Object|boolean)} global Reference to the 'global' object or false.
 * @param {?(Object|boolean)} module Reference to the 'module' object or false - CMD.
 * @param {?(Object|boolean)} define Reference to the 'define' object or false - AMD.
 * @param {undefined} Undefined An undefined variable.
 */
(function (global, module, define, Undefined) {
    'use strict';

    var base,

        // not every shim is compatable with every JS engine
        testShims = false,
        enableLog = true,
        $conlog,

        $affirm,

        // Shortcut number constants
        POSITIVE_ZERO = +0,
        NEGATIVE_ZERO = -0,
        WORD8 = 128,
        UWORD8 = 256,
        WORD16 = 32768,
        UWORD16 = 65536,
        WORD32 = 2147483648,
        UWORD32 = 4294967296,
        MAX_UINT32 = 4294967295,
        MAX_INT32 = 2147483647,
        MIN_INT32 = -2147483648,
        MAX_UINT16 = 65535,
        MAX_INT16 = 32767,
        MIN_INT16 = -32768,
        MAX_UINT8 = 255,
        MAX_INT8 = 127,
        MIN_INT8 = -128,
        MAX_SAFE_INTEGER = 9007199254740991,
        MIN_SAFE_INTEGER = -9007199254740991,
        UNSAFE_INTEGER = 9007199254740992,
        MAX_VALUE = 1.7976931348623157e+308,
        MIN_VALUE = 5e-324,
        EPSILON = 2.220446049250313e-16,

        // 'Object#toString' result references.
        stringTagArguments = '[object Arguments]',
        stringTagFunction = '[object Function]',
        stringTagObject = '[object Object]',
        stringTagUndefined = '[object Undefined]',
        stringTagNull = '[object Null]',
        stringTagError = '[object Error]',
        stringTagRegExp = '[object RegExp]',
        stringTagArray = '[object Array]',
        stringTagDate = '[object Date]',
        stringTagString = '[object String]',
        stringTagBoolean = '[object Boolean]',
        stringTagNumber = '[object Number]',


        //stringTagMap = '[object Map]',
        //stringTagSet = '[object Set]',
        //stringTagWeakMap = '[object WeakMap]',

        stringTagArrayBuffer = '[object ArrayBuffer]',
        stringTagFloat32Array = '[object Float32Array]',
        stringTagFloat64Array = '[object Float64Array]',
        stringTagInt8Array = '[object Int8Array]',
        stringTagInt16Array = '[object Int16Array]',
        stringTagInt32Array = '[object Int32Array]',
        stringTagUint8Array = '[object Uint8Array]',
        stringTagUint8ClampedArray = '[object Uint8ClampedArray]',
        stringTagUint16Array = '[object Uint16Array]',
        stringTagUint32Array = '[object Uint32Array]',

        stringTagHTMLCollection = '[object HTMLCollection]',
        stringTagNodeList = '[object NodeList]',

        hasAccessorSupport,
        stringProto = '__proto__',
        stringDefineGetter = '__defineGetter__',
        stringDefineSetter = '__defineSetter__',
        stringLookupGetter = '__lookupGetter__',
        stringLookupSetter = '__lookupGetter__',

        propConstant,
        propNotEnumerable,
        shadowed,

        // Shortcuts
        pCharAt,
        CError,
        CTypeError,
        CSyntaxError,
        CRangeError,
        CReferenceError,
        CEvalError,
        CURIError,
        CNumber,
        CString,
        CDate,
        CRegExp,
        CFunction,
        CBoolean,
        CArray,
        //CObject,

        protoObject,
        protoFunction,
        protoNumber,
        protoBoolean,
        protoString,
        protoDate,
        protoRegExp,
        protoArray,

        protoError,
        protoTypeError,
        protoSyntaxError,
        protoRangeError,
        protoEvalError,
        protoReferenceError,
        protoURIError,

        $Object,

        $min,
        $max,
        $floor,
        $abs,
        $ceil,
        $random,
        $sqrt,
        //mRound,
        $isFunction,
        $throwIfNotFunction,
        $toStringTag,
        hasDontEnumBug,
        hasProtoEnumBug,
        hasEnumArgsBug,
        hasEnumStringBug,
        hasBoxedStringBug,
        hasArrayLengthBug,

        unwantedError,

        hasErrorProps,
        //nonEnumProps,

        testTemp,

        wspaceStrings,

        hasWorkingGOPD,
        hasProto,
        hasGetSet,
        isStrictMode,
        hasDeleteBug,
        hasCallBug,
        hasApplyBug,
        hasApplyRequiresArrayLikeBug,
        supportsApplyArrayLike,
        supportsXFrameClass,
        $pSlice,
        $pConcat,

        //hasWorkingCreate,

        // Shortcuts
        $String,
        pMatch,
        pSplit,
        pSearch,

        pCharCodeAt,
        pSSlice,
        pSIndexOf,

        pReplace,

        pHasOwn,

        pExec,
        pTest,

        //iBind,

        $instanceOf,
        $returnThis,
        $unshift,
        $shift,
        $reverse,
        $hasOwn,
        $repeat,
        $isNative,
        $isArguments,
        $isArray,
        $isRegExp,
        $isInteger,
        $isSafeInteger,
        $isNumeric,
        $inRange,
        $isPlainObject,
        $isErrorTypeConstructor,
        $getPrototypeOf,
        $modulo,
        $forEach,
        $push,
        $pop,
        $deepEqual,
        $deepStrictEqual,
        $defineProperty,
        $defineProperties,
        $assign,
        $create,
        $objectKeys,
        $stringify,
        $truncate,
        $inherits,
        $stringContains,
        $exec,
        $test,
        $slice,
        $argSlice,
        $split,
        $replace,
        $splice,
        $isDigits,
        $join,
        $parseInt,
        $map,
        $trim,
        $substr,
        $parseFloat,
        $concat,
        $randomInt,
        $pApply,
        $pCall,
        $call,
        $apply,
        $isNaN,
        $isFinite,
        $sort,
        $defProp,
        $deleteProperty,

        BigNum,

        exports;

    /**
     * The main namespace for methods and properties that are to be exported from this library.
     *
     * @name module:util-x~exports
     * @namespace
     */
    exports = {
        /**
         * @name module:util-x~exports.Boolean
         * @namespace
         */
        Boolean: {
            /**
             * @name module:util-x~exports.Boolean.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Number
         * @namespace
         */
        Number: {
           /**
             * @name module:util-x~exports.Number.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.String
         * @namespace
         */
        String: {
           /**
             * @name module:util-x~exports.String.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Array
         * @namespace
         */
        Array: {
           /**
             * @name module:util-x~exports.Array.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Object
         * @namespace
         */
        Object: {
           /**
             * @name module:util-x~exports.Object.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Function
         * @namespace
         */
        Function: {
           /**
             * @name module:util-x~exports.Function.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Date
         * @namespace
         */
        Date: {
           /**
             * @name module:util-x~exports.Date.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.Error
         * @namespace
         */
        Error: {
           /**
             * @name module:util-x~exports.Error.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.RegExp
         * @namespace
         */
        RegExp: {
           /**
             * @name module:util-x~exports.RegExp.proto
             * @namespace
             */
            proto: {}
        },

        /**
         * @name module:util-x~exports.MATH
         * @namespace
         */
        Math: {},

        /**
         * @name module:util-x~exports.JSON
         * @namespace
         */
        JSON: {}
    };

    /**
     * List of unwanted Error prototype prtoperty names that are enumerable.
     *
     * @private
     * @name module:util-x~unwantedError
     * @type {Array.<string>}
     */
    unwantedError = [];

    /**
     * Used to define property values.
     *
     * @private
     * @name module:util-x~propConstant
     * @namespace
     * @const
     * @property {boolean} enumerable false
     * @property {boolean} writable false
     * @property {boolean} configurable false
     */
    propConstant = {
        enumerable: false,
        writable: false,
        configurable: false
    };

    /**
     * Used to define property values.
     *
     * @private
     * @name module:util-x~propNotEnumerable
     * @namespace
     * @const
     * @property {boolean} enumerable false
     * @property {boolean} writable true
     * @property {boolean} configurable true
     */
    propNotEnumerable = {
        enumerable: false,
        writable: true,
        configurable: true
    };

    /**
     * @private
     * @name module:util-x~shadowed
     * @const
     * @type {Array.<string>}
     */
    shadowed = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];

    /**
     * Object used for temporary testing values.
     *
     * @private
     * @name module:util-x~testTemp
     * @namespace
     */
    testTemp = {};

    /**
     * Holds references to language built ins.
     *
     * @private
     * @name module:util-x~base
     * @namespace
     */
    base = {
        /**
         * @private
         * @function
         */
        isNaN: global.isNaN,

        /**
         * @private
         * @function
         */
        isFinite: global.isFinite,

        /**
         * @private
         * @function
         */
        parseInt: global.parseInt,

        /**
         * @private
         * @function
         */
        parseFloat: global.parseFloat,

        /**
         * Holds references to the global Math methods and members.
         *
         * @private
         * @namespace
         */
        Math: {
            /**
             * @private
             * @function
             */
            sign: global.Math.sign,

            /**
             * @private
             * @function
             */
            min: global.Math.min,

            /**
             * @private
             * @function
             */
            max: global.Math.max,

            /**
             * @private
             * @function
             */
            floor: global.Math.floor,

            /**
             * @private
             * @function
             */
            ceil: global.Math.ceil,

            /**
             * @private
             * @function
             */
            abs: global.Math.abs,

            /**
             * @private
             * @function
             */
            random: global.Math.random,

            /**
             * @private
             * @function
             */
            pow: global.Math.pow,

            /**
             * @private
             * @function
             */
            sqrt: global.Math.sqrt,

            /**
             * @private
             * @function
             */
            round: global.Math.round
        },

        /**
         * @private
         * @namespace
         */
        Object: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Object,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Object.prototype,

            /**
             * @private
             * @function
             */
            assign: global.Object.assign,

            /**
             * @private
             * @function
             */
            create: global.Object.create,

            /**
             * @private
             * @function
             */
            defineProperties: global.Object.defineProperties,

            /**
             * @private
             * @function
             */
            defineProperty: global.Object.defineProperty,

            /**
             * @private
             * @function
             */
            freeze: global.Object.freeze,

            /**
             * @private
             * @function
             */
            getOwnPropertyDescriptor: global.Object.getOwnPropertyDescriptor,

            /**
             * @private
             * @function
             */
            getOwnPropertyNames: global.Object.getOwnPropertyNames,

            /**
             * @private
             * @function
             */
            getPrototypeOf: global.Object.getPrototypeOf,

            /**
             * @private
             * @function
             */
            is: global.Object.is,

            /**
             * @private
             * @function
             */
            isExtensible: global.Object.isExtensible,

            /**
             * @private
             * @function
             */
            isFrozen: global.Object.isFrozen,

            /**
             * @private
             * @function
             */
            isSealed: global.Object.isSealed,

            /**
             * @private
             * @function
             */
            keys: global.Object.keys,

            /**
             * @private
             * @function
             */
            preventExtensions: global.Object.preventExtensions,

            /**
             * @private
             * @function
             */
            seal: global.Object.seal,

            /**
             * @private
             * @function
             */
            setPrototypeOf: global.Object.setPrototypeOf,

            /**
             * @private
             * @function
             */
            defineGetter: global.Object.prototype[stringDefineGetter],

            /**
             * @private
             * @function
             */
            defineSetter: global.Object.prototype[stringDefineSetter],

            /**
             * @private
             * @function
             */
            lookupGetter: global.Object.prototype[stringLookupGetter],

            /**
             * @private
             * @function
             */
            lookupSetter: global.Object.prototype[stringLookupSetter],

            /**
             * @private
             * @function
             */
            hasOwn: global.Object.prototype.hasOwnProperty,

            /**
             * @private
             * @function
             */
            isPrototypeOf: global.Object.prototype.isPrototypeOf,

            /**
             * @private
             * @function
             */
            propertyIsEnumerable: global.Object.prototype.propertyIsEnumerable,

            /**
             * @private
             * @function
             */
            toLocaleString: global.Object.prototype.toLocaleString,

            /**
             * @private
             * @function
             */
            toSource: global.Object.prototype.toSource,

            /**
             * @private
             * @function
             */
            toString: global.Object.prototype.toString,

            /**
             * @private
             * @function
             */
            unwatch: global.Object.prototype.unwatch,

            /**
             * @private
             * @function
             */
            valueOf: global.Object.prototype.valueOf,

            /**
             * @private
             * @function
             */
            watch: global.Object.prototype.watch
        },

        /**
         * Holds references to the global Array methods and members.
         *
         * @private
         * @namespace
         */
        Array: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Array,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Array.prototype,

            /**
             * @private
             * @function
             */
            isArray: global.Array.isArray,

            /**
             * @private
             * @function
             */
            of: global.Array.of,

            /**
             * @private
             * @function
             */
            from: global.Array.from,

            /**
             * @private
             * @function
             */
            concat: global.Array.prototype.concat,

            /**
             * @private
             * @function
             */
            every: global.Array.prototype.every,

            /**
             * @private
             * @function
             */
            filter: global.Array.prototype.filter,

            /**
             * @private
             * @function
             */
            find: global.Array.prototype.find,

            /**
             * @private
             * @function
             */
            findIndex: global.Array.prototype.findIndex,

            /**
             * @private
             * @function
             */
            forEach: global.Array.prototype.forEach,

            /**
             * @private
             * @function
             */
            indexOf: global.Array.prototype.indexOf,

            /**
             * @private
             * @function
             */
            join: global.Array.prototype.join,

            /**
             * @private
             * @function
             */
            lastIndexOf: global.Array.prototype.lastIndexOf,

            /**
             * @private
             * @function
             */
            map: global.Array.prototype.map,

            /**
             * @private
             * @function
             */
            pop: global.Array.prototype.pop,

            /**
             * @private
             * @function
             */
            push: global.Array.prototype.push,

            /**
             * @private
             * @function
             */
            reduce: global.Array.prototype.reduce,

            /**
             * @private
             * @function
             */
            reduceRight: global.Array.prototype.reduceRight,

            /**
             * @private
             * @function
             */
            reverse: global.Array.prototype.reverse,

            /**
             * @private
             * @function
             */
            shift: global.Array.prototype.shift,

            /**
             * @private
             * @function
             */
            slice: global.Array.prototype.slice,

            /**
             * @private
             * @function
             */
            some: global.Array.prototype.some,

            /**
             * @private
             * @function
             */
            sort: global.Array.prototype.sort,

            /**
             * @private
             * @function
             */
            splice: global.Array.prototype.splice,

            /**
             * @private
             * @function
             */
            toString: global.Array.prototype.toString,

            /**
             * @private
             * @function
             */
            unshift: global.Array.prototype.unshift
        },

        /**
         * Holds references to the global String methods and members.
         *
         * @private
         * @namespace
         */
        String: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.String,

            /**
             * @private
             * @type {Object}
             */
            proto: global.String.prototype,

            /**
             * @private
             * @function
             */
            fromCharCode: global.String.fromCharCode,

            /**
             * @private
             * @function
             */
            fromCodePoint: global.String.fromCodePoint,

            /**
             * @private
             * @function
             */
            anchor: global.String.prototype.anchor,

            /**
             * @private
             * @function
             */
            charAt: global.String.prototype.charAt,

            /**
             * @private
             * @function
             */
            charCodeAt: global.String.prototype.charCodeAt,

            /**
             * @private
             * @function
             */
            codePointAt: global.String.prototype.codePointAt,

            /**
             * @private
             * @function
             */
            concat: global.String.prototype.concat,

            /**
             * @private
             * @function
             */
            contains: global.String.prototype.contains,

            /**
             * @private
             * @function
             */
            endsWith: global.String.prototype.endsWith,

            /**
             * @private
             * @function
             */
            indexOf: global.String.prototype.indexOf,

            /**
             * @private
             * @function
             */
            lastIndexOf: global.String.prototype.lastIndexOf,

            /**
             * @private
             * @function
             */
            link: global.String.prototype.link,

            /**
             * @private
             * @function
             */
            localeCompare: global.String.prototype.localeCompare,

            /**
             * @private
             * @function
             */
            match: global.String.prototype.match,

            /**
             * @private
             * @function
             */
            normalize: global.String.prototype.normalize,

            /**
             * @private
             * @function
             */
            repeat: global.String.prototype.repeat,

            /**
             * @private
             * @function
             */
            replace: global.String.prototype.replace,

            /**
             * @private
             * @function
             */
            search: global.String.prototype.search,

            /**
             * @private
             * @function
             */
            slice: global.String.prototype.slice,

            /**
             * @private
             * @function
             */
            split: global.String.prototype.split,

            /**
             * @private
             * @function
             */
            startsWith: global.String.prototype.startsWith,

            /**
             * @private
             * @function
             */
            substr: global.String.prototype.substr,

            /**
             * @private
             * @function
             */
            substring: global.String.prototype.substring,

            /**
             * @private
             * @function
             */
            toLocaleLowerCase: global.String.prototype.toLocaleLowerCase,

            /**
             * @private
             * @function
             */
            toLocaleUpperCase: global.String.prototype.toLocaleUpperCase,

            /**
             * @private
             * @function
             */
            toLowerCase: global.String.prototype.toLowerCase,

            /**
             * @private
             * @function
             */
            toString: global.String.prototype.toString,

            /**
             * @private
             * @function
             */
            toUpperCase: global.String.prototype.toUpperCase,

            /**
             * @private
             * @function
             */
            trim: global.String.prototype.trim,

            /**
             * @private
             * @function
             */
            trimLeft: global.String.prototype.trimLeft,

            /**
             * @private
             * @function
             */
            trimRight: global.String.prototype.trimRight,

            /**
             * @private
             * @function
             */
            valueOf: global.String.prototype.valueOf
        },

        /**
         * Holds references to the global Number methods and members.
         *
         * @private
         * @namespace
         */
        Number: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Number,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Number.prototype,

            /**
             * @private
             * @type {number}
             */
            EPSILON: global.Number.EPSILON,

            /**
             * @private
             * @type {number}
             */
            MAX_VALUE: global.Number.MAX_VALUE,

            /**
             * @private
             * @type {number}
             */
            MIN_VALUE: global.Number.MIN_VALUE,

            /**
             * @private
             * @type {number}
             */
            MAX_SAFE_INTEGER: global.Number.MAX_SAFE_INTEGER,

            /**
             * @private
             * @type {number}
             */
            MIN_SAFE_INTEGER: global.Number.MIN_SAFE_INTEGER,

            /**
             * @private
             * @type {number}
             */
            NaN: global.Number.NaN,

            /**
             * @private
             * @type {number}
             */
            POSITIVE_INFINITY: global.Number.POSITIVE_INFINITY,

            /**
             * @private
             * @type {number}
             */
            NEGATIVE_INFINITY: global.Number.NEGATIVE_INFINITY,

            /**
             * @private
             * @function
             */
            isFinite: global.Number.isFinite,

            /**
             * @private
             * @function
             */
            isInteger: global.Number.isInteger,

            /**
             * @private
             * @function
             */
            isSafeInteger: global.Number.isSafeInteger,

            /**
             * @private
             * @function
             */
            isNaN: global.Number.isNaN,

            /**
             * @private
             * @function
             */
            parseFloat: global.Number.parseFloat,

            /**
             * @private
             * @function
             */
            parseInt: global.Number.parseInt,

            /**
             * @private
             * @function
             */
            toExponential: global.Number.prototype.toExponential,

            /**
             * @private
             * @function
             */
            toFixed: global.Number.prototype.toFixed,

            /**
             * @private
             * @function
             */
            toLocaleString: global.Number.prototype.toLocaleString,

            /**
             * @private
             * @function
             */
            toPrecision: global.Number.prototype.toPrecision,

            /**
             * @private
             * @function
             */
            toString: global.Number.prototype.toString,

            /**
             * @private
             * @function
             */
            valueOf: global.Number.prototype.valueOf
        },

        /**
         * Holds references to the global Boolean methods and members.
         *
         * @private
         * @namespace
         */
        Boolean: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Boolean,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Boolean.prototype,

            /**
             * @private
             * @function
             */
            toString: global.Boolean.prototype.toString,

            /**
             * @private
             * @function
             */
            valueOf: global.Boolean.prototype.valueOf
        },

        /**
         * Holds references to the global Function methods and members.
         *
         * @private
         * @namespace
         */
        Function: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Function,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Function.prototype,

            /**
             * @private
             * @function
             */
            apply: global.Function.prototype.apply,

            /**
             * @private
             * @function
             */
            bind: global.Function.prototype.bind,

            /**
             * @private
             * @function
             */
            call: global.Function.prototype.call,

            /**
             * @private
             * @function
             */
            toString: global.Function.prototype.toString
        },

        /**
         * Holds references to the global RegExp methods and members.
         *
         * @private
         * @namespace
         */
        RegExp: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.RegExp,

            /**
             * @private
             * @type {Object}
             */
            proto: global.RegExp.prototype,

            /**
             * @private
             * @function
             */
            exec: global.RegExp.prototype.exec,

            /**
             * @private
             * @function
             */
            test: global.RegExp.prototype.test,

            /**
             * @private
             * @function
             */
            toString: global.RegExp.prototype.toString
        },

        /**
         * Holds references to the global Date methods and members.
         *
         * @private
         * @namespace
         */
        Date: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Date,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Date.prototype,

            /**
             * @private
             * @function
             */
            now: global.Date.now,

            /**
             * @private
             * @function
             */
            toJSON: global.Date.prototype.toJSON,

            /**
             * @private
             * @function
             */
            toISOString: global.Date.prototype.toISOString,

            /**
             * @private
             * @function
             */
            getTime: global.Date.prototype.getTime
        },

        /**
         * Holds references to the global Error methods and members.
         *
         * @private
         * @namespace
         */
        Error: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.Error,

            /**
             * @private
             * @type {Object}
             */
            proto: global.Error.prototype
        },

        /**
         * Holds references to the global TypeError methods and members.
         *
         * @private
         * @namespace
         */
        TypeError: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.TypeError,

            /**
             * @private
             * @type {Object}
             */
            proto: global.TypeError.prototype
        },

        /**
         * Holds references to the global SyntaxError methods and members.
         *
         * @private
         * @namespace
         */
        SyntaxError: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.SyntaxError,

            /**
             * @private
             * @type {Object}
             */
            proto: global.SyntaxError.prototype
        },

        /**
         * Holds references to the global RangeError methods and members.
         *
         * @private
         * @namespace
         */
        RangeError: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.RangeError,

            /**
             * @private
             * @type {Object}
             */
            proto: global.RangeError.prototype
        },

        /**
         * Holds references to the global EvalError methods and members.
         *
         * @private
         * @namespace
         */
        EvalError: {
             /**
              * @private
              * @constructor
              */
            Ctr: global.EvalError,

             /**
              * @private
              * @type {Object}
              */
            proto: global.EvalError.prototype
        },

        /**
         * Holds references to the global ReferenceError methods and members.
         *
         * @private
         * @namespace
         */
        ReferenceError: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.ReferenceError,

             /**
              * @private
              * @type {Object}
              */
            proto: global.ReferenceError.prototype
        },

        /**
         * Holds references to the global Error methods and members.
         *
         * @private
         * @namespace
         */
        URIError: {
            /**
             * @private
             * @constructor
             */
            Ctr: global.URIError,

            /**
             * @private
             * @type {Object}
             */
            proto: global.URIError.prototype
        }
    };

    /**
     * Holds references to the global JSON methods and members. If it exists.
     *
     * @private
     * @namespace
     */
    base.JSON = {};
    if (typeof global.JSON === 'object' && global.JSON) {
        /**
         * @private
         * @function
         */
        base.JSON.parse = global.JSON.parse;

        /**
         * @private
         * @function
         */
        base.JSON.stringify = global.JSON.stringify;
    } else {
        base.JSON.parse = Undefined;
        base.JSON.stringify = Undefined;
    }

    /**
     * Prototypal function, as usually used in
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain inheritance and the prototype chain}.
     * @typedef {Function} module:util-x~prototypalFunction
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * Stand alone function created from a {@link prototypalFunction prototypalFunction}.
     * @typedef {Function} module:util-x~boundPrototypalFunction
     * @param {...*} [varArgs]
     * @returns {*}
     */

    // Shortcuts
    pCharAt = base.String.charAt;
    CError = base.Error.Ctr;
    CTypeError = base.TypeError.Ctr;
    CSyntaxError = base.SyntaxError.Ctr;
    CRangeError = base.RangeError.Ctr;
    CReferenceError = base.ReferenceError.Ctr;
    CEvalError = base.EvalError.Ctr;
    CURIError = base.URIError.Ctr;
    CNumber = base.Number.Ctr;
    CString = base.String.Ctr;
    CDate = base.Date.Ctr;
    CRegExp = base.RegExp.Ctr;
    CFunction = base.Function.Ctr;
    CBoolean = base.Boolean.Ctr;
    CArray = base.Array.Ctr;
    //CObject = base.Object.Ctr;

    protoObject = base.Object.proto;
    protoFunction = base.Function.proto;
    protoNumber = base.Number.proto;
    protoBoolean = base.Boolean.proto;
    protoString = base.String.proto;
    protoDate = base.Date.proto;
    protoRegExp = base.RegExp.proto;
    protoArray = base.Array.proto;

    protoError = base.Error.proto;
    protoTypeError = base.TypeError.proto;
    protoSyntaxError = base.SyntaxError.proto;
    protoRangeError = base.RangeError.proto;
    protoEvalError = base.EvalError.proto;
    protoReferenceError = base.ReferenceError.proto;
    protoURIError = base.URIError.proto;

    $String = base.String.Ctr;
    pMatch = base.String.match;
    pSplit = base.String.split;
    pCharCodeAt = base.String.charCodeAt;
    pSSlice = base.String.slice;
    pSIndexOf = base.String.indexOf;
    pReplace = base.String.replace;
    pSearch = base.String.search;
    pHasOwn = base.Object.hasOwnProperty;
    pExec = base.RegExp.exec;
    pTest = base.RegExp.test;

    /**
     * Shortcut
     * Replaced later
     * This method parses a string argument and returns a floating point number.
     *
     * @private
     * @function module:util-x~$parseFloat
     * @param {StringLike} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
     */
    $parseFloat = base.parseFloat;

    /**
     * Shortcut
     * The Object constructor creates an object wrapper.
     * Keeps jslint happy
     *
     * @private
     * @function module:util-x~$Object
     * @param {*} inputArg
     * @throws TypeError if inputArg is null or undefined
     * @returns {*}
     */
    $Object = base.Object.Ctr;

    /**
     * Shortcut
     * The String constructor creates an object wrapper.
     * Keeps jslint happy
     *
     * @private
     * @function module:util-x~$String
     * @param {*} inputArg
     * @throws TypeError if inputArg is null or undefined
     * @returns {*}
     */
    $String = base.String.Ctr;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$min
     * @param {number} number
     * @returns {number}
     */
    $min = base.Math.min;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$max
     * @param {number} number
     * @returns {number}
     */
    $max = base.Math.max;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$floor
     * @param {number} number
     * @returns {number}
     */
    $floor = base.Math.floor;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$abs
     * @param {number} number
     * @returns {number}
     */
    $abs = base.Math.abs;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$ceil
     * @param {number} number
     * @returns {number}
     */
    $ceil = base.Math.ceil;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$random
     * @returns {number}
     */
    $random = base.Math.random;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$sqrt
     * @returns {number}
     */
    $sqrt = base.Math.sqrt;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~$round
     * @returns {number}
     */
    //$round = base.Math.round;

    /**
     * Returns the arguments at index.
     * Primarily to keep jslint happy
     *
     * @private
     * @function module:util-x~$getArgItem
     * @param {arguments} args
     * @param {number} index
     * @returns {*}
     */
    function $getArgItem(args, index) {
        return args[index];
    }

    /**
     * Set the value of the arguments at index.
     * Primarily to keep jslint happy
     *
     * @private
     * @function module:util-x~$getArgItem
     * @param {arguments} args
     * @param {number} index
     * @param {*} value
     * @returns {*}
     */
    function $setArgItem(args, index, value) {
        args[index] = value;

        return value;
    }

    /**
     * Returns the first argument unchanged.
     * Primary use with ToMethod.
     *
     * @private
     * @function module:util-x~$firstArg
     * @param {*} [arg]
     * @returns {*}
     */
    function $firstArg() {
        return $getArgItem(arguments, 0);
    }

    /**
     * Returns an arguments object of the arguments supplied.
     *
     * @private
     * @name module:util-x~$returnArgs
     * @param {...*} [varArgs]
     * @returns {Arguments}
     */
    function $returnArgs() {
        return arguments;
    }

    /**
     * Shortcut
     * Returns true if the operands are strictly equal with no type conversion.
     *
     * @private
     * @function module:util-x~$strictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4
     */
    function $strictEqual(a, b) {
        return a === b;
    }

    /**
     * Shortcut
     * Replaced later
     * Returns true if the argument coerces to NaN, and otherwise returns false.
     *
     * @private
     * @function module:util-x~$isNaN
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4
     */
    $isNaN = function (inputArg) {
        var num = +inputArg;

        return !$strictEqual(num, num);
    };

    /**
     * Shortcut
     * Replaced later
     * Returns false if the argument coerces to NaN, +Infinity, or -Infinity, and otherwise returns true.
     *
     * @private
     * @function module:util-x~$isFinite
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.5
     */
    $isFinite = function (inputArg) {
        var num = +inputArg;

        return $strictEqual(num, num) && num !== Infinity && num !== -Infinity;
    };

    /**
     * Shortcut
     * Returns true if the operand inputArg is undefined.
     *
     * @private
     * @function module:util-x~$isUndefined
     * @param {*} inputArg
     * @returns {boolean}
     */
    function $isUndefined(inputArg) {
        return $strictEqual(typeof inputArg, 'undefined');
    }

    /**
     * Returns true if the operand inputArg is undefined.
     *
     * @function module:util-x~exports.Object.isUndefined
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Object.isUndefined = $isUndefined;
    exports.Object.isUndefined.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to a value of type string
     *
     * @private
     * @function module:util-x~$toString
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.8
     */
    function $toString(inputArg) {
        var val;

        if (inputArg === null) {
            val = 'null';
        } else if ($isUndefined(inputArg)) {
            val = 'undefined';
        } else {
            val = $String(inputArg);
        }

        return val;
    }

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object, otherwise returns the argument.
     *
     * @private
     * @function module:util-x~$checkObjectCoercible
     * @param {*} inputArg The object to be tested.
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {*} The inputArg if coercible.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
     */
    function $checkObjectCoercible(inputArg) {
        if (inputArg === null || $isUndefined(inputArg)) {
            throw new CTypeError('Cannot convert argument to object: ' + inputArg);
        }

        return inputArg;
    }

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     *
     * @private
     * @function module:util-x~$toObject
     * @param {*} inputArg The argument to be converted to an object.
     * @throws {TypeError} If inputArg is not coercible to an object.
     * @returns {Object} Value of inputArg as type Object.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    function $toObject(inputArg) {
        return $Object($checkObjectCoercible(inputArg));
    }

    /**
     * The function evaluates the passed value and converts it to an integer.
     *
     * @private
     * @function module:util-x~$toInteger
     * @param {*} inputArg The object to be converted to an integer.
     * @returns {number} If the target value is NaN, null or undefined, 0 is returned. If the target value is false, 0 is returned and if true, 1 is returned.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
     */
    function $toInteger(inputArg) {
        var number = +inputArg,
            val = 0;

        if ($strictEqual(number, number)) {
            if (!number || number === Infinity || number === -Infinity) {
                val = number;
            } else {
                val = (number > 0 || -1) * $floor($abs(number));
            }
        }

        return val;
    }

    /**
     * Shortcut
     * Replaced later
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @private
     * @function module:util-x~$isInteger
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
     */
    $isInteger = function (inputArg) {
        return typeof inputArg === 'number' && inputArg !== Infinity && inputArg !== -Infinity && $toInteger(inputArg) === inputArg;
    };

    /**
     * Shortcut
     * Replaced later
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @private
     * @function module:util-x~$isSafeInteger
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
     */
    $isSafeInteger = function (inputArg) {
        return typeof inputArg === 'number' && inputArg !== Infinity && inputArg !== -Infinity && $toInteger(inputArg) === inputArg && inputArg >= MIN_SAFE_INTEGER && inputArg <= MAX_SAFE_INTEGER;
    };

    /**
     * The abstract operation ToLength converts its argument to an integer suitable for use as the length
     * of an array-like object.
     *
     * @private
     * @function module:util-x~$toLength
     * @param {*} inputArg The object to be converted to a length.
     * @returns {number} If len <= +0 then +0 else if len is +Infinity then 2^53-1 else min(len, 2^53-1).
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
     */
    function $toLength(inputArg) {
        return $min($max($toInteger(inputArg), 0), MAX_SAFE_INTEGER);
    }

    /**
     * Checks if `value` is a valid array-like length.
     *
     * **Note:** This function is based on ES `ToLength`. See the
     * [ES spec](https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength)
     * for more details.
     *
     * @private
     * @function module:util-x~$isLength
     * @param {*} inputArg The value to check.
     * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
     */
    function $isLength(inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= 0;
    }

    /**
     * Checks if 'value' is a valid array-like index.
     *
     * @private
     * @function module:util-x~$isLength
     * @param {*} inputArg The value to check.
     * @param {number} [length] The upper bounds of a valid index otherwise MAX_SAFE_INTEGER - 1.
     * @returns {boolean} Returns true if inputArg is a valid index, otherwise false.
     */
    function $isIndex(inputArg, length) {
        if ($toLength(arguments.length) > 1) {
            length = $toLength(length);
        } else {
            length = MAX_SAFE_INTEGER - 1;
        }

        inputArg = +inputArg;

        return $isLength(inputArg) && inputArg < length;
    }

    /**
     * Indicates if delete throws an error on a property that does not exist.
     * True if it has, otherwise false.
     *
     * @private
     * @name module:util-x~hasDeleteBug
     * @type {boolean}
     */
    hasDeleteBug = (function () {
        var arr = [0, 1, 2, 3],
            rtn;

        try {
            delete arr[2];
            delete arr[2];

            rtn = false;
        } catch (e) {
            rtn = true;
        }

        return rtn;
    }());

    /**
     * Delete an item from an Array or Arguments object with delete bug. Internal use only.
     * Safari 5
     *
     * @private
     * @function module:util-x~$deleteProperty
     * @param {Object} object
     * @param {string} property
     */
    $deleteProperty = (function () {
        var fn;

        if (hasDeleteBug) {
            fn = function (object, property) {
                try {
                    delete object[property];
                } catch (ignore) {}
            };
        } else {
            fn = function (object, property) {
                delete object[property];
            };
        }

        return fn;
    }());

    /**
     * Returns the this context of the function.
     *
     * @private
     * @function module:util-x~$returnThis
     * @return {*}
     */
    $returnThis = function () {
        return this;
    };

    /**
     * Indicates if running in strict mode.
     * True if we are, otherwise false.
     *
     * @private
     * @name module:util-x~isStrictMode
     * @type {boolean}
     */
    isStrictMode = !$returnThis();

    /**
     * Indicates if the this argument used with call does not convert to an object when not strict mode.
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasCallBug
     * @type {boolean}
     */
    hasCallBug = (function () {
        var returnThis = function () {
                return this;
            },
            rtn;

        // try in case call is missing
        try {
            rtn = !isStrictMode && typeof $call(returnThis, 'foo') === 'string';
        } catch (eHasCallBug) {
            rtn = false;
        }

        return rtn;
    }());

    /**
     * Indicates if the this argument used with apply does not convert to an object when not strict mode.
     * True if it does not, otherwise false.
     *
     * @private
     * @name module:util-x~hasApplyBug
     * @type {boolean}
     */
    hasApplyBug = (function () {
        var rtn;

        // try in case apply is missing
        try {
            rtn = !isStrictMode && typeof $returnThis.apply('foo') === 'string';
        } catch (eHasApplyArrayBug) {
            rtn = false;
        }

        return rtn;
    }());

    /**
     * Indicates if the arrayLike argument used must be an specified and arrayLike.
     * True if it does not, otherwise false.
     *
     * @private
     * @name module:util-x~hasApplyRequiresArrayLikeBug
     * @type {boolean}
     */
    hasApplyRequiresArrayLikeBug = (function () {
        var rtn;

        // try in case apply is missing
        try {
            $returnThis.apply('foo');
            rtn = false;
        } catch (eHasApplyRequiresArrayLikeBug) {
            rtn = true;
        }

        return rtn;
    }());

    /**
     * Indicates if apply works with ArrayLike objects.
     * True if it does not, otherwise false.
     *
     * @private
     * @name module:util-x~supportsApplyArrayLike
     * @type {boolean}
     */
    supportsApplyArrayLike = (function () {
        var returnArg0,
            rtn;

        returnArg0 = function (arg) {
            return arg;
        };

        // try in case apply is missing
        try {
            rtn = returnArg0.apply('foo', $returnArgs(1)) === 1;
            rtn = returnArg0.apply('foo', { 0: 1, length: 1 }) === 1;
        } catch (eHasApplyArrayBug) {
            rtn = false;
        }

        return rtn;
    }());

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * For use with call.
     *
     * @private
     * @function module:util-x~$toObjectCallFix
     * @param {*} inputArg The argument to be converted to an object.
     * @returns {Object} Value of inputArg as type Object.
     */
    /*
    function $toObjectCallFix(inputArg) {
        var object = inputArg,
            type;

        if (hasCallBug) {
            type = typeof inputArg;
            if (type === 'boolean' || type === 'number' || type === 'string') {
                object = $toObject(inputArg);
            }
        }

        return object;
    }
    */

    /**
     * @private
     * @function module:util-x~$hasProperty
     * @param {*} inputArg The object to be tested.
     * @param {string} property The property name.
     * @returns {boolean} True if the property is on the object or in the object's prototype, otherwise false.
     */
    /*jslint todo: true */
    /** @todo: fix args and string enum bug */
    /*jslint todo: false */
    function $hasProperty(inputArg, property) {
        /*jstwit in: true */
        return $toString(property) in $toObject(inputArg);
    }

    /**
     * Forchecking an objects item by index. Can pacth or objects that don't work with boxed index access.
     * Primary use in Array shims.
     *
     * @private
     * @function module:util-x~$hasItem
     * @param {Object} object
     * @param {number} index
     * @param {string} stringTag
     * @returns {boolean}
     */
    function $hasItem(object, index, stringTag) {
        return stringTag === stringTagString || $hasProperty(object, index);
    }

    /**
     * For getting an objects item by index. Can pacth or objects that don't work with boxed index access.
     * Primary use in Array shims.
     *
     * @private
     * @function module:util-x~$getItem
     * @param {Object} object
     * @param {number} index
     * @param {string} stringTag
     * @returns {*}
     */
    function $getItem(object, index, stringTag) {
        var item;

        if (stringTag === stringTagString) {
            item = $call(pCharAt, object, index);
        } else {
            item = object[index];
        }

        return item;
    }

    /**
     * Creates a new array from the arraylike argument, starting at start and ending at end.
     * Combats issues where {@link module:util-x~exports.Array.proto.slice} does not work on the arguments object.
     * Used in the {@link module:util-x~exports.Array.proto.slice} shim when it fails tests, and
     * in the mission critical function {@link module:util-x~$toMethod}.
     *
     * @private
     * @function module:util-x~$pSlice
     * @this {module:util-x~ArrayLike} The object to be sliced.
     * @throws {TypeError} If args is not coercible to an object.
     * @param {module:util-x~NumberLike} [start] The starting index.
     * @param {module:util-x~NumberLike} [end] The ending index.
     * @returns {Array} A new array containg the selection.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    $pSlice = function (start, end) {
        var object = $toObject(this),
            length = $toLength(object.length),
            stringTag = $toStringTag ? $toStringTag(object) : $call(base.Object.toString, object),
            relativeStart = $toInteger(start),
            val = [],
            next = 0,
            relativeEnd,
            finalEnd,
            k;

        if (relativeStart < 0) {
            k = $max(length + relativeStart, 0);
        } else {
            k = $min(relativeStart, length);
        }

        if ($isUndefined(end)) {
            relativeEnd = length;
        } else {
            relativeEnd = $toInteger(end);
        }

        if (relativeEnd < 0) {
            finalEnd = $max(length + relativeEnd, 0);
        } else {
            finalEnd = $min(relativeEnd, length);
        }

        finalEnd = $toLength(finalEnd);
        val.length = $toLength($max(finalEnd - k, 0));
        while (k < finalEnd) {
            if ($hasItem(object, k, stringTag)) {
                val[next] = $getItem(object, k, stringTag);
            }

            next += 1;
            k += 1;
        }

        return val;
    };

    /**
     * Returns true if the operand inputArg is a primitive object.
     *
     * @private
     * @function module:util-x~isPrimitive
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
     */
    function $isPrimitive(inputArg) {
        var type = typeof inputArg;

        return type === 'undefined' || inputArg === null || type === 'boolean' || type === 'string' || type === 'number';
    }

    /**
     * Returns true if the operand inputArg is a primitive object.
     *
     * @function module:util-x~exports.Object.isPrimitive
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
     */
    exports.Object.isPrimitive = $isPrimitive;
    exports.Object.isPrimitive.argNames = ['inputArg'];

    /**
     * @private
     * @function module:util-x~$getName
     * @param {Object} object
     * @param {string} name
     * @return {string}
     */
    function $getName(object, name) {
        while (!$isUndefined(object[name])) {
            name += $toString($toInteger($random() * 100));
        }

        return name;
    }

    /**
     * Sets the arguments as per ES3 or ES5 non-strict spec.
     *
     * @private
     * @function module:util-x~$toObjectThisArg
     * @param {*} thisArg
     * @param {boolean} [strictMode]
     * @returns {Object}
     */
    function $toObjectThisArg(thisArg, strictMode) {
        if (!strictMode) {
            if (thisArg === null || $isUndefined(thisArg)) {
                thisArg = global;
            } else {
                thisArg = $Object(thisArg);
            }
        }

        return thisArg;
    }

    function $throwArgsWrongType(args) {
        if (args !== null && !$isUndefined(args)) {
            if ($isPrimitive(args) || (!$isPrimitive(args.constructor) && args.constructor.prototype === protoString)) {
                throw new CTypeError('Arguments list has wrong type');
            }
        }

        return args;
    }

    /**
     * ES3 spec shim
     *
     * @private
     * @function module:util-x~$evalCallApply
     * @param {*} thisArg
     * @param {string} name
     * @param {Function} func
     * @param {ArrayLike} args
     * @param {number} start
     * @returns {*}
     */
    function $evalCallApply(thisArg, name, func, args, start) {
        var length = $toLength(args.length),
            last = length - 1,
            argsStrings = '',
            index,
            rtn;

        for (index = start; index < length; index += 1) {
            argsStrings += 'args[' + index + ']';
            if (index < last) {
                argsStrings += ',';
            }
        }

        thisArg = $toObjectThisArg(thisArg, false);
        name = $getName(thisArg, name);
        thisArg[name] = func;
        /*jslint evil: true */
        rtn = new CFunction('fn', 'name', 'args', 'return function () { return fn[name](' + argsStrings + '); }();')(thisArg, name, args);
        //rtn = eval('(thisArg[name](' + argsStrings + '))');
        /*jslint evil: false */
        $deleteProperty(thisArg, name);

        return rtn;
    }

    /**
     * This method calls a function with a given this value and arguments provided as an
     * array (or an array-like object).
     *
     * @private
     * @function module:util-x~$pApply
     * @this {Function}
     * @param {*} thisArg
     * @param {module:util-x~ArrayLike} [arrayLike]
     * @returns {*}
     */
    $pApply = (function (apply) {
        var fn;

        if (!apply) {
            // ES3 spec
            fn = function (thisArg, arrayLike) {
                return $evalCallApply(thisArg, '__$pApply__', this, $Object($throwArgsWrongType(arrayLike)), 0);
            };
        } else if (testShims || hasApplyBug || hasApplyRequiresArrayLikeBug || !supportsApplyArrayLike) {
            // ES5 patch
            fn = (function () {
                return function (thisArg, arrayLike) {
                    var object = $Object($throwArgsWrongType(arrayLike)),
                        length = $toLength(object.length),
                        name = $getName(this, '__$pApply_'),
                        args = [],
                        index,
                        rtn;

                    this[name] = apply;
                    args.length = length;
                    for (index = 0; index < length; index += 1) {
                        args[index] = object[index];
                    }

                    rtn = this[name]($toObjectThisArg(thisArg, isStrictMode), args);
                    $deleteProperty(this, name);

                    return rtn;
                };
            }());
        } else {
            fn = apply;
        }

        return fn;
    }(base.Function.apply));

    /**
     * This method calls a function with a given this value and arguments provided individually.
     *
     * @private
     * @function module:util-x~$pCall
     * @this {Function}
     * @param {*} thisArg
     * @param {*} [varArgs]
     * @returns {*}
     */
    $pCall = (function () {
        var fn;

        if (!base.Function.call) {
            // ES3 spec
            fn = function (thisArg) {
                return $evalCallApply(thisArg, '__$pCall__', this, arguments, 1);
            };
        } else if (testShims || hasCallBug) {
            // ES5 patch
            fn = (function () {
                return function (thisArg) {
                    var length = $toLength(arguments.length),
                        name = $getName(this, '__$pCall__'),
                        args = [],
                        index,
                        rtn;

                    this[name] = $pApply;
                    args.length = length - 1;
                    for (index = 1; index < length; index += 1) {
                        args[index - 1] = arguments[index];
                    }

                    rtn = this[name]($toObjectThisArg(thisArg, isStrictMode), args);
                    $deleteProperty(this, name);

                    return rtn;
                };
            }());
        } else {
            fn = base.Function.call;
        }

        return fn;
    }());

    /**
     * This method calls a function with a given this value and arguments provided individually.
     *
     * @private
     * @function module:util-x~$call
     * @param {Function} func
     * @param {*} thisArg
     * @param {*} [varArgs]
     * @returns {*}
     */
    $call = function (func, thisArg) {
        var length = $toLength(arguments.length),
            name = $getName(func, '__$call__'),
            args = [],
            index,
            rtn;

        args.length = $toLength(length - 2);
        for (index = 2; index < length; index += 1) {
            args[index - 2] = arguments[index];
        }

        func[name] = $pApply;
        rtn = func[name](thisArg, args);
        $deleteProperty(func, name);

        return rtn;
    };

    /**
     * This method calls a function with a given this value and arguments provided as an
     * array (or an array-like object).
     *
     * @private
     * @function module:util-x~$apply
     * @param {Function} func
     * @param {*} thisArg
     * @param {module:util-x~ArrayLike} [arrayLike]
     * @returns {*}
     */
    $apply = function (func, thisArg, arrayLike) {
        var name = $getName(func, '__$apply__'),
            rtn;

        func[name] = $pApply;
        rtn = func[name](thisArg, arrayLike);
        $deleteProperty(func, name);

        return rtn;
    };

    /**
     * Shortcut
     * Creates a new array from arguments, starting at start and ending at end.
     * You should not slice on arguments because it prevents optimizations in
     * JavaScript engines (V8 for example). Instead, try constructing a new array
     * by iterating through the arguments object.
     *
     * @private
     * @function module:util-x~$argSlice
     * @param {module:util-x~ArrayLike} array
     * @param {module:util-x~NumberLike} [start]
     * @param {module:util-x~NumberLike} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    $argSlice = function (array, start, end) {
        return $call($pSlice, array, start, end);
    };

    /**
     * Shortcut
     * Replaced later
     * Creates a new array from arguments, starting at start and ending at end.
     *
     * @private
     * @function module:util-x~$slice
     * @param {module:util-x~ArrayLike} array
     * @param {module:util-x~NumberLike} [start]
     * @param {module:util-x~NumberLike} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    $slice = $argSlice;

    /**
     * Shortcut
     * Redefined later
     * Returns true if the operand inputArg is a Function. (Duck typed)
     * Replaced later on with a more reliable method, but we need to define
     * more functions first.
     *
     * @private
     * @function module:util-x~$isFunction
     * @param {*} [inputArg] The object to be tested.
     * @returns {boolean} True if the object matches the duck typing, otherwise false.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    $isFunction = function (inputArg) {
        // Avoid a Chakra JIT bug in compatibility modes of IE 11
        return typeof inputArg === 'function' || false;
    };

    // redefinition
    $isFunction = (function (pOToString) {
        if (!($isFunction(/x/) || (global.Uint8Array && !$isFunction(global.Uint8Array)))) {
            return $isFunction;
        }

        return function (inputArg) {
            /*
             * The use of 'Object#toString' avoids issues with the 'typeof' operator
             * in older versions of Chrome and Safari which return 'function' for regexes
             * and Safari 8 equivalents which return 'object' for typed array constructors.
             */
            return $call(pOToString, inputArg) === stringTagFunction;
        };
    }(base.Object.toString));

    /**
     * Throws a TypeError for argument not a fuction.
     *
     * @private
     * @function module:util-x~$throwNotFunction
     * @param {*} [inputArg] The object to be tested.
     * @throws {TypeError} If inputArg is not a function.
     */
    function $throwNotFunction(inputArg) {
        throw new CTypeError('Argument is not a function: ' + $toString(inputArg));
    }

    /**
     * Throws a TypeError if arguments is not a function otherwise returns the function.
     *
     * @private
     * @function module:util-x~$throwIfNotFunction
     * @param {*} [inputArg] The object to be tested.
     * @throws {TypeError} If inputArg is not a function.
     * @returns {Function} The supplied function.
     */
    $throwIfNotFunction = function (inputArg) {
        if (!$isFunction(inputArg)) {
            $throwNotFunction(inputArg);
        }

        return inputArg;
    };

    (function (pOToString) {
        var oldLoad,
            getBody,
            createIframe,
            body,
            content;

        if (typeof window === 'function' || typeof window === 'object') {
            getBody = function () {
                return window.document.body || window.document.getElementsByTagName('body')[0];
            };

            createIframe = function () {
                var iframe = window.document.createElement('iframe');

                iframe.style.display = 'none';
                iframe.application = 'yes';
                body.appendChild(iframe);
                content = window.frames[$toLength(window.frames.length) - 1];
                content.document.write('<script>parent.uxTest = { Array: Array };<\/script>');
                supportsXFrameClass = $call(pOToString, new window.uxTest.Array(1, 2, 3)) === stringTagArray;
                body.removeChild(iframe);
                try {
                    delete window.uxTest;
                } catch (e) {
                    window.uxTest = Undefined;
                }
            };

            body = getBody();
            if (!body) {
                oldLoad = window.onload;
                window.onload = function (evt) {
                    try {
                        oldLoad(evt);
                    } catch (ignore) {}

                    body = getBody();
                    createIframe();
                };
            } else {
                createIframe();
            }
        }
    }(Object.prototype.toString));

    /**
     * @private
     * @function module:util-x~$checkCrossFrame
     * @param {Object} inputArg
     * @param {string} strCtr
     * @returns {boolean}
     */
    function $checkXFrame(inputArg, strCtr) {
        var rtn;

        if (supportsXFrameClass === false) {
            rtn = inputArg.constructor && $toString(inputArg.constructor) === strCtr;
        } else {
            rtn = false;
        }

        return rtn;
    }

    /**
     * Throws a TypeError if the operand inputArg is not an object or not a function,
     * otherise returns the object.
     *
     * @private
     * @function module:util-x~$throwIfIsPrimitive
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is not an object or a function.
     * @returns {(Object|Function)}
     */
    function $throwIfIsPrimitive(inputArg) {
        if ($isPrimitive(inputArg)) {
            throw new CTypeError('called on non-object: ' + $toString(inputArg));
        }

        return inputArg;
    }

    /**
     * Returns true if the operand inputArg is a boolean.
     *
     * @function module:util-x~exports.Boolean.isBoolean
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Boolean.isBoolean = (function (pOToString, strBool) {
        return function (inputArg) {
            return typeof inputArg === 'boolean' || (!$isPrimitive(inputArg) && ($call(pOToString, inputArg) === stringTagBoolean || $checkXFrame(inputArg, strBool)));
        };
    }(base.Object.toString, $toString(CBoolean)));

    exports.Boolean.isBoolean.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a Number.
     *
     * @function module:util-x~exports.Number.isNumber
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isNumber = (function (pOToString, strNum) {
        return function (inputArg) {
            return typeof inputArg === 'number' || (!$isPrimitive(inputArg) && ($call(pOToString, inputArg) === stringTagNumber || $checkXFrame(inputArg, strNum)));
        };
    }(base.Object.toString, $toString(CNumber)));

    exports.Number.isNumber.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a string.
     *
     * @function module:util-x~exports.String.isString
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.String.isString = (function (pOToString, strStr) {
        return function (inputArg) {
            return typeof inputArg === 'string' || (!$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'length') && ($call(pOToString, inputArg) === stringTagString || $checkXFrame(inputArg, strStr)));
        };
    }(base.Object.toString, $toString(CString)));

    exports.String.isString.argNames = ['inputArg'];

    /**
     * Shortcut
     * Replaced later
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     *
     * @private
     * @function module:util-x~$isArray
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
     */
    $isArray = (function (pOToString, strArr) {
        return function (inputArg) {
            return !$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'length') && ($call(pOToString, inputArg) === stringTagArray || $checkXFrame(inputArg, strArr));
        };
    }(base.Object.toString, $toString(CArray)));

    /**
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     *
     * @function module:util-x~exports.Object.isArguments
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Object.isArguments = (function (pOToString) {
        var isArgs = $call(pOToString, $returnArgs()) === stringTagArguments,
            fn;

        function duckType(inputArg) {
            return !$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'length') && $call(pHasOwn, inputArg, 'callee') && !$call(pHasOwn, inputArg, 'arguments');
        }

        if (isArgs) {
            fn = function (inputArg) {
                return !$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'length') && ($call(pOToString, inputArg) === stringTagArguments || (supportsXFrameClass === false && duckType(inputArg)));
            };
        } else {
            fn = duckType;
        }

        return fn;
    }(base.Object.toString));

    exports.Object.isArguments.argNames = ['inputArg'];

    /**
     * Shortcut
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     *
     * @private
     * @function module:util-x~.$isArguments
     * @param {*} inputArg
     * @returns {boolean}
     */
    $isArguments = exports.Object.isArguments;

    /**
     * Shortcut
     * Returns true if the operand inputArg is a RegExp.
     *
     * @private
     * @function module:util-x~$isRegExp
     * @param {*} inputArg
     * @returns {boolean}
     */
    $isRegExp = (function (pOToString, strRx) {
        var isRegExp = $call(pOToString, new CRegExp('x')) === stringTagRegExp,
            fn;

        if (isRegExp) {
            fn = function (inputArg) {
                return !$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'ignoreCase') && ($call(pOToString, inputArg) === stringTagRegExp || $checkXFrame(inputArg, strRx));
            };
        } else {
            fn = function (inputArg) {
                return !$isPrimitive(inputArg) &&
                    $call(pHasOwn, inputArg, 'ignoreCase') &&
                    typeof inputArg.ignoreCase === 'boolean' &&
                    $call(pHasOwn, inputArg, 'global') &&
                    typeof inputArg.global === 'boolean' &&
                    $call(pHasOwn, inputArg, 'multiline') &&
                    typeof inputArg.multiline === 'boolean' &&
                    $call(pHasOwn, inputArg, 'source') &&
                    typeof inputArg.source === 'string';
            };
        }

        return fn;
    }(base.Object.toString, $toString(CRegExp)));

    /**
     * Returns true if the operand inputArg is a RegExp.
     *
     * @function module:util-x~.exports.RegExp.$isRegExp
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.RegExp.isRegExp = $isRegExp;
    exports.RegExp.isRegExp.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is an error.
     *
     * @function module:util-x~exports.Error.isError
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Error.isError = (function (pOToString, strErr) {
        return function (inputArg) {
            return !$isPrimitive(inputArg) && $call(pHasOwn, inputArg, 'message') && ($call(pOToString, inputArg) === stringTagError || $checkXFrame(inputArg, strErr));
        };
    }(base.Object.toString, $toString(CError)));

    exports.Error.isError.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a Date object.
     *
     * @function module:util-x~exports.Date.isDate
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Date.isDate = (function (pOToString, strDate) {
        return function (inputArg) {
            return !$isPrimitive(inputArg) && ($call(pOToString, inputArg) === stringTagDate || $checkXFrame(inputArg, strDate));
        };
    }(base.Object.toString, $toString(CDate)));

    exports.Date.isDate.argNames = ['inputArg'];

    /**
     * Returns true if argument has own property of length
     * which is a safe integer and is greather or equal to 0.
     *
     * @private
     * @function module:util-x~$hasOwnValidLength
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     */
    function $hasOwnValidLength(inputArg) {
        var object = $toObject(inputArg);

        return ($call(pHasOwn, object, 'length') && $isLength(object.length)) || (hasArrayLengthBug && $isArray(object));
    }

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     *
     * @private
     * @function module:util-x~$instanceOf
     * @param {Object} object The object to be tested.
     * @param {Function} ctr The constructor to test the object against
     * @throws {TypeError} If ctr is not a function.
     * @returns {boolean} True if the constructor is in the object chain, otherwise false.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    $instanceOf = (function (pIsPrototypeOf) {
        return function $instanceOf(object, ctr) {
            $throwIfNotFunction(ctr);

            return (!$isPrimitive(object) && (object instanceof ctr || (!$isPrimitive(ctr.prototype) && $call(pIsPrototypeOf, ctr.prototype, object))));
        };
    }(base.Object.isPrototypeOf));

    /**
     * @private
     * @function module:util-x~$bindArgs
     * @param {number} length
     * @param {string} [separator] A single comma with or without leading and trailing space characters.
     * @returns {string}
     */
    function $bindArgs(length, separator) {
        var len = $toLength(length),
            args = '',
            last,
            index;

        if (len) {
            if (typeof separator !== 'string' || !$call(pTest, /^ *, *$/, separator)) {
                separator = ',';
            }

            last = len - 1;
            for (index = 0; index < len; index += 1) {
                args += '$' + index;
                if (index < last) {
                    args += separator;
                }
            }
        }

        return args;
    }

    /**
     * Shortcut
     * Replaced later
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     *
     * @private
     * @function module:util-x~$isPlainObject
     * @param {Object} object
     * @returns {boolean}
     */
    $isPlainObject = function (object) {
        return !$isPrimitive(object) && !$isFunction(object) && !$isPrimitive(object.constructor) && object.constructor.prototype === protoObject;
    };

    /**
     * Internal $affirm
     *
     * @private
     * @name module:util-x~$affirm
     * @namespace
     */
    $affirm = {};

    /**
     * @private
     * @constructor module:util-x~$affirm.AffirmError
     * @param {Object} opts
     */
    $affirm.AffirmError = (function () {
        function ClassEmpty() {
            return;
        }

        var fn = function (opts) {
            if (!$isPlainObject(opts)) {
                opts = {};
            }

            if (!$isFunction(opts.stackStartFunction)) {
                opts.stackStartFunction = $affirm.AffirmError;
            }

            $call(CError, this, opts.message, opts.stackStartFunction);
            this.message = opts.message;
            this.actual =  opts.actual;
            this.expected = opts.expected;
            this.operator = opts.operator;
        };

        ClassEmpty.prototype = protoError;
        fn.prototype = new ClassEmpty();
        fn.prototype.name = 'AffirmError';
        fn.prototype.constructor = fn;

        return fn;
    }());

    /**
     * @private
     * @function module:util-x~$throwIfNotEnoughArgs
     * @param {arguments} args
     * @param {number} requiredLength
     * @throws {SyntaxError} If args.length < requiredLength
     * @returns {number} Arguments length
     */
    function $throwIfNotEnoughArgs(args, requiredLength) {
        var length = (!$isPrimitive(args) && $toLength(args.length)) || 0;

        if (length < $toLength(requiredLength)) {
            throw new CSyntaxError($toString(length) + ' is not enough arguments, requires ' + $toString(requiredLength));
        }

        return length;
    }

    /**
     * Throws an exception that displays the values for actual and expected separated by the provided operator.
     *
     * @private
     * @function module:util-x~$affirm.fail
     * @param {*} actual
     * @param {*} expected
     * @param {string} message
     * @param {string} operator
     * @param {Function} [stackStartFunction]
     * @throws {SyntaxError} If not enough arguments
     */
    $affirm.fail = function (actual, expected, message, operator, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 4);
        if (!$isFunction(stackStartFunction)) {
            stackStartFunction = $affirm.fail;
        }

        throw new $affirm.AffirmError({
            actual: actual,
            expected: expected,
            message: $toString(message),
            operator: $toString(operator),
            stackStartFunction: stackStartFunction
        });
    };

    /**
     * Create optional arguments for $affirm
     *
     * @private
     * @function module:util-x~$optArgs
     * @param {number} begin
     * @param {string} message
     * @param {Function} stackStartFunction
     * @param {Function} caller
     * @returns {Object}
     */
    function $optArgs(begin, message, stackStartFunction, caller) {
        var length = $throwIfNotEnoughArgs(arguments, 4);

        begin = $toLength(begin);
        if (length === begin) {
            if ($isFunction(message)) {
                stackStartFunction = message;
                message = 'undefined';
            } else {
                message = $toString(message);
            }
        } else if (length > begin) {
            message = $toString(message);
            if (!$isFunction(stackStartFunction)) {
                stackStartFunction = caller;
            }
        }

        return {
            message: message,
            stackStartFunction: stackStartFunction
        };
    }

    /**
     * Tests if value is truthy, it is equivalent to $affirm.equal(!!value, true, message);
     *
     * @private
     * @function module:util-x~$affirm.ok
     * @param {*} value
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     */
    $affirm.ok = function (guard, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 1);

        var opt;

        guard = !guard;
        if (guard) {
            opt = $optArgs(2, message, stackStartFunction, $affirm.ok);
            $affirm.fail(!guard, true, opt.message, 'ok', opt.stackStartFunction);
        }
    };

    /**
     * Tests shallow, coercive equality with the equal comparison operator ( == ).
     *
     * @private
     * @function module:util-x~$affirm.equal
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     * @returns {undefined}
     */
    $affirm.equal = function (actual, expected, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 2);

        var opt;

        /*jslint eqeq: true */
        if (actual != expected) {
            opt = $optArgs(3, message, stackStartFunction, $affirm.equal);
            $affirm.fail(actual, expected, opt.message, '==', opt.stackStartFunction);
        }
    };

    /**
     * Tests shallow, coercive non-equality with the not equal comparison operator ( != ).
     *
     * @private
     * @function module:util-x~$affirm.notEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     */
    $affirm.notEqual = function (actual, expected, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 2);

        var opt;

        /*jslint eqeq: true */
        if (actual == expected) {
            opt = $optArgs(3, message, stackStartFunction, $affirm.notEqual);
            $affirm.fail(actual, expected, opt.message, '!=', opt.stackStartFunction);
        }
    };

    /**
     * Tests strict equality, as determined by the strict equality operator ( === ).
     *
     * @private
     * @function module:util-x~$affirm.strictEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message}
     * @param {Function} [stackStartFunction]
     */
    $affirm.strictEqual = function (actual, expected, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 2);

        var opt;

        if (actual !== expected) {
            opt = $optArgs(3, message, stackStartFunction, $affirm.strictEqual);
            $affirm.fail(actual, expected, opt.message, '===', opt.stackStartFunction);
        }
    };

    /**
     * Tests strict non-equality, as determined by the strict not equal operator ( !== ).
     *
     * @private
     * @function module:util-x~$affirm.notStrictEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message}
     * @param {Function} [stackStartFunction]
     */
    $affirm.notStrictEqual = function (actual, expected, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 2);

        var opt;

        if (actual === expected) {
            opt = $optArgs(3, message, stackStartFunction, $affirm.notStrictEqual);
            $affirm.fail(actual, expected, opt.message, '!==', opt.stackStartFunction);
        }
    };

    /**
     * Expects block to throw an error. error can be constructor, regexp or validation function.
     *
     * @private
     * @function module:util-x~$affirm.throws
     * @param {Function} block
     * @param {Function} error
     * @param {string|function} [message]
     * @param {Function} [stackStartFunction]
     */
    $affirm.throws = function (block, error, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 2);

        var actual,
            expected,
            opt;

        if ($isFunction(block)) {
            try {
                block();
            } catch (eBlock) {
                actual = eBlock;
            }
        }

        if ($isFunction(error)) {
            try {
                /*jslint newcap:true */
                throw new error();
            } catch (eError) {
                if ($instanceOf(eError, CError)) {
                    expected = error;
                }
            }
        }

        if (!expected) {
            expected = CError;
        }

        if (!$instanceOf(actual, expected)) {
            opt = $optArgs(3, message, stackStartFunction, $affirm.throws);
            $affirm.fail(actual, expected, opt.message, 'throws', opt.stackStartFunction);
        }
    };

    /**
     * Expects block not to throw an error, see $affirm.throws for details.
     *
     * @private
     * @function module:util-x~$affirm.doesNotThrow
     * @param {Function} block
     * @param {string} [message0
     * @param {Function} [stackStartFunction]
     */
    $affirm.doesNotThrow = function (block, message, stackStartFunction) {
        $throwIfNotEnoughArgs(arguments, 1);

        var actual,
            opt;

        if ($isFunction(block)) {
            try {
                block();
            } catch (eBlock) {
                actual = eBlock;
            }
        }

        if (!$isUndefined(actual)) {
            opt = $optArgs(2, message, stackStartFunction, $affirm.doesNotThrow);
            $affirm.fail(actual, Undefined, opt.message, 'doesNotThrow', opt.stackStartFunction);
        }
    };

    /**
     * Tests if value is not a falsy value, throws if it is a truthy value.
     * Useful when testing the first argument, error in callbacks.
     *
     * @private
     * @function module:util-x~$affirm.ifError
     * @param {*} [err]
     */
    $affirm.ifError = function (err) {
        if (err) {
            throw err;
        }
    };

    /**
     * @private
     * @function module:util-x~$decide
     * @param {Function|boolean} affirms A function that throws exceptions or boolean (coerced).
     * @param {Function|*} pass A function to be called or any value. If affirms was called then the result of the call will be supplied as an argument to a function.
     * @param {Function} fail A function to be called or any value. If affirms was called then the result of the call will be supplied as an argument to a function.
     * @param {Array} [argNames] If fail evaluated to a function then this array will be added as the property 'argNames'.
     * @param {string} [message] Any value will be coerced to a string for logging.
     * @returns {*}
     */
    function $decide(affirms, pass, fail, argNames, message) {
        var length = $throwIfNotEnoughArgs(arguments, 3),
            result,
            passed,
            returned;

        if ($isFunction(affirms)) {
            try {
                returned = affirms();
                passed = true;
            } catch (eAffirms) {
                if (length === 4 && typeof argNames === 'string') {
                    message = argNames;
                } else {
                    message = $toString(message);
                }

                $conlog(message, eAffirms);
                passed = false;
            }
        } else {
            if (affirms) {
                passed = true;
            } else {
                passed = false;
            }
        }

        if (passed) {
            if ($isFunction(pass)) {
                result = pass(returned);
            } else {
                result = pass;
            }

        } else {
            if ($isFunction(fail)) {
                result = fail(returned);
                if ($isFunction(result) && $isArray(argNames)) {
                    result.argNames = argNames;
                }
            } else {
                result = fail;
            }
        }

        return result;
    }

    /**
     * When the concat method is called with zero or more arguments item1, item2, etc.,
     * it returns an array containing the array elements of the object followed by the array elements
     * of each argument in order.
     *
     * @private
     * @function module:util-x~$pConcat
     * @this {Array} array
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    $pConcat = function () {
        var object = $toObject(this),
            length = $toLength(arguments.length),
            len,
            val = [],
            next = 0,
            index,
            element,
            k;

        for (index = -1; index < length; index += 1) {
            if (index === -1) {
                element = object;
            } else {
                element = arguments[index];
            }

            if ($isArray(element)) {
                k = 0;
                len = $toLength(element.length);
                while (k < len) {
                    if ($hasProperty(element, k)) {
                        val[next] = element[k];
                        k += 1;
                    } else {
                        val[next] = element;
                    }

                    next += 1;
                }
            }
        }

        return val;
    };

    /**
     * Shortcut
     * Replaced later
     * When the concat method is called with zero or more arguments item1, item2, etc.,
     * it returns an array containing the array elements of the object followed by the array elements
     * of each argument in order.
     *
     * @private
     * @function module:util-x~$concat
     * @param {Array} array
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    $concat = function (array) {
        return $apply($pConcat, array, $argSlice(arguments, 1));
    };

    /**
     * @private
     * @function module:util-x~$conlog
     * @param {...*} [varArgs]
     */
    $conlog = (function (console) {
        var hasLog = !$isPrimitive(console) && !$isPrimitive(console.log),
            log,
            arr,
            fn;

        if (hasLog) {
            log = console.log;
            arr = ['Test log', true];

            try {
                $apply(log, console, arr);
                arr.length = 1;
                fn = function () {
                    if (enableLog) {
                        $apply(log, console, arguments);
                    }
                };

                fn('Using function apply for logging');
            } catch (eFunction) {
                fn = null;
            }

            if (!fn) {
                try {
                    log(arr[0]);
                    log(arr[1]);
                    fn = function () {
                        var length,
                            index;

                        if (enableLog) {
                            length = arguments.length;
                            for (index = 0; index < length; index += 1) {
                                log(arguments[index]);
                            }
                        }
                    };

                    fn('Using for loop for logging');
                } catch (eLoop) {
                    fn = null;
                }
            }
        }

        if (!fn) {
            fn = function () {
                return;
            };
        }

        return function () {
            if (global.log && global.log.debug) {
                try {
                    $apply(global.log.debug, global.log, arguments);
                } catch (ignore) {}
            }

            $apply(fn, null, arguments);
        };
    }(global.console));

    /**
     * Provides a string representation of the supplied object in the form "[object type]",
     * where type is the object type.
     *
     * @private
     * @function module:util-x~$toStringTag
     * @param {*} inputArg The object for which a class string represntation is required.
     * @returns {string} A string value of the form "[object type]".
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.2
     */
    $toStringTag = (function (pOToString) {
        return $decide(
            // test
            function () {
                $affirm.ok(!testShims, 'testing shim');
                $affirm.strictEqual($call(pOToString, protoRegExp), stringTagRegExp, 'test1');
                $affirm.strictEqual($call(pOToString, protoString), stringTagString, 'test2');
                $affirm.strictEqual($call(pOToString, protoNumber), stringTagNumber, 'test3');
                $affirm.strictEqual($call(pOToString, protoBoolean), stringTagBoolean, 'test3');
                $affirm.strictEqual($call(pOToString, protoError), stringTagError, 'test4');
                $affirm.strictEqual($call(pOToString, protoFunction), stringTagFunction, 'test5');
                $affirm.strictEqual($call(pOToString, protoArray), stringTagArray, 'test6');
                $affirm.strictEqual($call(pOToString, $returnArgs()), stringTagArguments, 'test7');
            },

            // pass
            function () {
                function toC(inputArg) {
                    return $call(pOToString, inputArg);
                }

                return $decide(
                    //test
                    function () {
                        $affirm.doesNotThrow(function () {
                            toC();
                        }, 'test1');

                        $affirm.strictEqual(toC(), stringTagUndefined, 'test2');

                        $affirm.doesNotThrow(function () {
                            toC(Undefined);
                        }, 'test3');

                        $affirm.strictEqual(toC(Undefined), stringTagUndefined, 'test3');

                        $affirm.doesNotThrow(function () {
                            toC(null);
                        }, 'test4');

                        $affirm.strictEqual(toC(null), stringTagNull, 'test5');
                    },

                    // pass
                    function () {
                        return toC;
                    },

                    // fail
                    function () {
                        return function (inputArg) {
                            var val;

                            if (inputArg === null) {
                                val = stringTagNull;
                            } else if ($isUndefined(inputArg)) {
                                val = stringTagUndefined;
                            } else {
                                val = toC(inputArg);
                            }

                            return val;
                        };
                    },

                    // argNames
                    ['inputArg'],

                    // message
                    '$toStringTag basic patch'
                );
            },

            // fail
            function () {
                return function (inputArg) {
                    var object,
                        val;

                    if ($isUndefined(inputArg)) {
                        val = stringTagUndefined;
                    } else if (inputArg === null) {
                        val = stringTagNull;
                    } else if (!$isPrimitive(inputArg) && !$call(pHasOwn, inputArg, 'arguments') && $call(pHasOwn, inputArg, 'callee') && $call(pHasOwn, inputArg, 'length')) {
                        val = stringTagArguments;
                    } else {
                        object = $Object(inputArg);
                        if ($instanceOf(object, CNumber)) {
                            val = stringTagNumber;
                        } else if ($instanceOf(object, CBoolean) || object === protoBoolean) {
                            val = stringTagBoolean;
                        } else if ($instanceOf(object, CString) || object === protoString) {
                            val = stringTagString;
                        } else if ($instanceOf(object, CDate) || object === protoDate) {
                            val = stringTagDate;
                        } else if ($instanceOf(object, CRegExp) || object === protoRegExp) {
                            val = stringTagRegExp;
                        } else if ($instanceOf(object, CError) || object === protoError) {
                            val = stringTagError;
                        } else if ($instanceOf(object, CArray) || object === protoArray) {
                            val = stringTagArray;
                        } else if ($instanceOf(object, CFunction) || object === protoFunction) {
                            val = stringTagFunction;
                        } else if (object === protoObject) {
                            val = stringTagObject;
                        }
                    }

                    if (!val) {
                        val = $call(pOToString, object);
                    }

                    return val;
                };
            },

            // argNames
            ['inputArg'],

            // message
            '$toStringTag extended patch'
        );
    }(base.Object.toString));
    /**
     * Indicates if the environment suffers the "don't enum bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasDontEnumBug
     * @type {boolean}
     * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    hasDontEnumBug = !$call(base.Object.propertyIsEnumerable, {'toString': null}, 'toString');

    /**
     * Indicates if the environment's function objects suffer the "prototype is enumerable bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasProtoEnumBug
     * @type {boolean}
     * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    hasProtoEnumBug = $call(base.Object.propertyIsEnumerable, function () { return; }, 'prototype');

    /**
     * Indicates if the arguments object suffers the "index enumeration bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasEnumArgsBug
     * @type {boolean}
     */
    hasEnumArgsBug = (function () {
        var argObj = $returnArgs('h', 'e', 'j'),
            expected = {},
            prop;

        /*jslint forin: true */
        for (prop in argObj) {
            if (prop === '0' || prop === '1' || prop === '2') {
                expected[prop] = argObj[prop];
            }
        }

        return expected[0] !== 'h' || expected[1] !== 'e' || expected[2] !== 'j';
    }());

    /**
     * Indicates if a string suffers enumerable bug.
     *
     * @private
     * @name module:util-x~hasEnumStringBug
     * @type {boolean}
     */
    hasEnumStringBug = !$call(pHasOwn, 'x', '0');

    /**
     * Indicates if a string suffers the "indexed accessability bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasBoxedStringBug
     * @type {boolean}
     */
    hasBoxedStringBug = (function () {
        var boxedString = $Object('a');

        return boxedString[0] !== 'a' || !$hasProperty(boxedString, 0);
    }());

    /**
     * Indicates if a arra suffers the "zero length array's length is not a number bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasArrayLengthBug
     * @type {boolean}
     */
    hasArrayLengthBug = typeof [].length !== 'number';

    /**
     * Indicates if the Error object has additional enumerable properties.
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasErrorProps
     * @type {boolean}
     */
    hasErrorProps = (function () {
        var errObjs = [
                protoError,
                protoTypeError,
                protoSyntaxError,
                protoRangeError,
                protoEvalError,
                protoReferenceError,
                protoURIError
            ],
            length1 = $toLength(errObjs.length),
            index1,
            length2,
            index2,
            prop,
            found,
            obj;

        unwantedError.length = 0;
        for (index1 = 0; index1 < length1; index1 += 1) {
            obj = errObjs[index1];
            /*jslint forin: true */
            for (prop in obj) {
                if ($call(pHasOwn, obj, prop)) {
                    found = false;
                    length2 = $toLength(unwantedError.length);
                    for (index2 = 0; index2 < length2; index2 += 1) {
                        if (prop === unwantedError[index2]) {
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        try {
                            if (base.Object.defineProperty) {
                                base.Object.defineProperty(obj, prop, propNotEnumerable);
                                if (base.Object.propertyIsEnumerable(protoFunction, 'length')) {
                                    throw new CError('Still enumerable');
                                }

                                $conlog('Unwanted error ' + prop + ' patched');
                            }
                        } catch (eUnwantedError) {
                            unwantedError.length += 1;
                            unwantedError[length2] = prop;
                            $conlog('Unwanted error ' + prop + ' patch failed');
                        }
                    }
                }
            }
        }

        return !!unwantedError.length;
    }());

    /**
     * Indicates if __proto__ is supported.
     * True if it is, otherwise false.
     *
     * @private
     * @name module:util-x~hasProto
     * @type {boolean}
     */
    hasProto = protoObject[stringProto] === null;

    /**
     * Indicates if __defineGetter__ and __lookupSetter__ are supported.
     * True if they are, otherwise false.
     *
     * @private
     * @name module:util-x~hasGetSet
     * @type {boolean}
     */
    hasGetSet = $isFunction(base.Object.lookupGetter) && $isFunction(base.Object.lookupSetter);

    /**
     * The function takes an argument protoFn, and returns a bound function as a stand alone method.
     *
     * @private
     * @function module:util-x~$toMethod
     * @param {prototypalFunction} protoFn A prototypal function to be converted to be bound as a stand alone method.
     * @throws {TypeError} If protoFn is not a function.
     * @param {Function} [checkThisArgFn] A function to perform any checks on thisArg.
     *                                    Default checkThisArgFn is to {@link @function module:util-x~$checkObjectCoercible}
     *                                    if none supplied or is not a function.
     * @returns {module:util-x~boundPrototypalFunction} Stand alone method.
     */
    function $toMethod(protoFn, checkThisArgFn) {
        $throwIfNotFunction(protoFn);
        if (!$isFunction(checkThisArgFn)) {
            checkThisArgFn = $checkObjectCoercible;
        }

        /*jslint evil: true */
        return new CFunction('fn', 'check', 'slice', 'apply', 'return function (' + $bindArgs(protoFn.length + 1) + ') { return apply(fn, check(arguments[0]), slice(arguments, 1)); };')(protoFn, checkThisArgFn, $argSlice, $apply);
    }

    // redefinition
    $slice = $toMethod($pSlice);

    $conlog('+++++++++ hasDontEnumBug: ' + hasDontEnumBug);
    $conlog('+++++++++ hasProtoEnumBug: ' + hasProtoEnumBug);
    $conlog('+++++++++ hasEnumArgsBug: ' + hasEnumArgsBug);
    $conlog('+++++++++ hasErrorProps: ' + hasErrorProps);
    $conlog('+++++++++ hasBoxedStringBug: ' + hasBoxedStringBug);
    $conlog('+++++++++ hasEnumStringBug: ' + hasEnumStringBug);
    $conlog('+++++++++ hasArrayLengthBug: ' + hasArrayLengthBug);
    $conlog('+++++++++ hasDeleteBug: ' + hasDeleteBug);
    $conlog('+++++++++ hasCallBug: ' + hasCallBug);
    $conlog('+++++++++ hasApplyBug: ' + hasApplyBug);
    $conlog('+++++++++ hasApplyRequiresArrayLikeBug: ' + hasApplyRequiresArrayLikeBug);
    $conlog('+++++++++ supportsApplyArrayLike: ' + supportsApplyArrayLike);
    $conlog('+++++++++ hasProto: ' + hasProto);
    $conlog('+++++++++ hasGetSet: ' + hasGetSet);
    $conlog('+++++++++ isStrictMode: ' + isStrictMode);

    /*
     *
     * EXPORTABLE CONSTANTS
     *
     */

    /**
     * @name module:util-x~exports.version
     * @type {string}
     * @const
     * @default 0.2.0
     */
    exports.version = '0.2.0';

    /**
     * @name module:util-x~exports.Number.POSITIVE_ZERO
     * @type {number}
     * @const
     * @default +0
     */
    exports.Number.POSITIVE_ZERO = POSITIVE_ZERO;

    /**
     * @name module:util-x~exports.Number.NEGATIVE_ZERO
     * @type {number}
     * @const
     * @default -0
     */
    exports.Number.NEGATIVE_ZERO = NEGATIVE_ZERO;

    /**
     * @name module:util-x~exports.Number.WORD8
     * @type {number}
     * @const
     * @default 128
     */
    exports.Number.WORD8 = WORD8;

    /**
     * @name module:util-x~exports.Number.UWORD8
     * @type {number}
     * @const
     * @default 256
     */
    exports.Number.UWORD8 = UWORD8;

    /**
     * @name module:util-x~exports.Number.WORD16
     * @type {number}
     * @const
     * @default 65536
     */
    exports.Number.WORD16 = WORD16;

    /**
     * @name module:util-x~exports.Number.UWORD16
     * @type {number}
     * @const
     * @default 32768
     */
    exports.Number.UWORD16 = UWORD16;

    /**
     * @name module:util-x~exports.Number.WORD32
     * @type {number}
     * @const
     * @default 2147483648
     */
    exports.Number.WORD32 = WORD32;

    /**
     * @name module:util-x~exports.Number.UWORD32
     * @type {number}
     * @const
     * @default 4294967296
     */
    exports.Number.UWORD32 = UWORD32;

    /**
     * @name module:util-x~exports.Number.MAX_UINT32
     * @type {number}
     * @const
     * @default 4294967295
     */
    exports.Number.MAX_UINT32 = MAX_UINT32;

    /**
     * @name module:util-x~exports.Number.MAX_INT32
     * @type {number}
     * @const
     * @default 2147483647
     */
    exports.Number.MAX_INT32 = MAX_INT32;

    /**
     * @name module:util-x~exports.Number.MIN_INT32
     * @type {number}
     * @const
     * @default -2147483648
     */
    exports.Number.MIN_INT32 = MIN_INT32;

    /**
     * @name module:util-x~exports.Number.MAX_UINT16
     * @type {number}
     * @const
     * @default 65535
     */
    exports.Number.MAX_UINT16 = MAX_UINT16;

    /**
     * @name module:util-x~exports.Number.MAX_INT16
     * @type {number}
     * @const
     * @default 32767
     */
    exports.Number.MAX_INT16 = MAX_INT16;

    /**
     * @name module:util-x~exports.Number.MIN_INT16
     * @type {number}
     * @const
     * @default -32768
     */
    exports.Number.MIN_INT16 = MIN_INT16;

    /**
     * @name module:util-x~exports.Number.MAX_UINT8
     * @type {number}
     * @const
     * @default 255
     */
    exports.Number.MAX_UINT8 = MAX_UINT8;

    /**
     * @name module:util-x~exports.Number.MAX_INT8
     * @type {number}
     * @const
     * @default 127
     */
    exports.Number.MAX_INT8 = MAX_INT8;

    /**
     * @name module:util-x~exports.Number.MIN_INT8
     * @type {number}
     * @const
     * @default -128
     */
    exports.Number.MIN_INT8 = MIN_INT8;

    /**
     * @name module:util-x~exports.Number.MAX_SAFE_INTEGER
     * @type {number}
     * @const
     * @default 9007199254740991
     */
    exports.Number.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;

    /**
     * @name module:util-x~exports.Number.MIN_SAFE_INTEGER
     * @type {number}
     * @const
     * @default -9007199254740991
     */
    exports.Number.MIN_SAFE_INTEGER = MIN_SAFE_INTEGER;

    /**
     * @name module:util-x~exports.Number.UNSAFE_INTEGER
     * @type {number}
     * @const
     * @default 9007199254740992
     */
    exports.Number.UNSAFE_INTEGER = UNSAFE_INTEGER;

    /**
     * @name module:util-x~exports.Number.MAX_VALUE
     * @type {number}
     * @const
     * @default 1.7976931348623157e+308
     */
    exports.Number.MAX_VALUE = MAX_VALUE;

    /**
     * @name module:util-x~exports.Number.MIN_VALUE
     * @type {number}
     * @const
     * @default 5e-324
     */
    exports.Number.MIN_VALUE = MIN_VALUE;

    /**
     * @name module:util-x~exports.Number.NaN
     * @type {number}
     * @const
     * @default NaN
     */
    exports.Number.NaN = NaN;

    /**
     * @name module:util-x~exports.Number.POSITIVE_INFINITY
     * @type {number}
     * @const
     * @default Infinity
     */
    exports.Number.POSITIVE_INFINITY = Infinity;

    /**
     * @name module:util-x~exports.Number.NEGATIVE_INFINITY
     * @type {number}
     * @const
     * @default -Infinity
     */
    exports.Number.NEGATIVE_INFINITY = -Infinity;

    /**
     * @name module:util-x~exports.Number.EPSILON
     * @type {number}
     * @const
     * @default 2.220446049250313e-16
     */
    exports.Number.EPSILON = EPSILON;

    /*
     *
     * EXPORTABLES THAT DO NOT RELY ON ANY OF OUR FUNCTIONS
     *
     */

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~noop
     * @returns {undefined}
     */
    function noop() {
        return;
    }

    /**
     * Returns the primitive value of undefined.
     *
     * @function module:util-x~exports.Function.noop
     * @returns {undefined}
     */
    exports.Function.noop = noop;

    /**
     * Returns an arguments object of the arguments supplied.
     *
     * @function module:util-x~exports.Function.returnArgs
     * @argument {...*} [varArgs]
     * @returns {Arguments}
     */
    exports.Function.returnArgs = $returnArgs;

    /**
     * Returns a number clamped to the range set by min and max.
     *
     * @function module:util-x~exports.Number.clamp
     * @param {*} number
     * @param {*} min
     * @param {*} max
     * @returns {number}
     */
    exports.Number.clamp = function (number, min, max) {
        return $min($max(number, min), max);
    };

    exports.Number.clamp.argNames = ['number', 'min', 'max'];

    /**
     * Shortcut
     * Abstract operation that coerces its argument to a primitive value.
     *
     * @private
     * @function module:util-x~$toPrimitive
     * @param {*} [inputArg] The object to convert into a string.
     * @returns {string} A string representing the object's valueOf.
     */
    function $toPrimitive(inputArg) {
        var val;

        if ($isPrimitive(inputArg)) {
            val = inputArg;
        } else {
            val = inputArg.valueOf();
        }

        if (val === 0 && 1 / val === -Infinity) {
            val = '-0';
        } else if (!$isPrimitive(val)) {
            val = $toString(val);
        }

        return val;
    }

    /**
     * Abstract operation that coerces its argument to a primitive value.
     *
     * @function module:util-x~exports.Object.toPrimitive
     * @param {*} [inputArg] The object to convert into a string.
     * @returns {string} A string representing the object's valueOf.
     */
    exports.Object.toPrimitive = $toPrimitive;
    exports.Object.toPrimitive.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a number which is positive.
     *
     * @function module:util-x~exports.Number.isPositive
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isPositive = function (inputArg) {
        var rtn;

        if (typeof inputArg !== 'number') {
            rtn = false;
        } else if (inputArg === 0) {
            rtn = 1 / inputArg === Infinity;
        } else {
            rtn = inputArg > 0;
        }

        return rtn;
    };

    exports.Number.isPositive.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a number which is negative.
     *
     * @function module:util-x~exports.Number.isNegative
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isNegative = function (inputArg) {
        var rtn;

        if (typeof inputArg !== 'number') {
            rtn = false;
        } else if (inputArg === 0) {
            rtn = 1 / inputArg !== Infinity;
        } else {
            rtn = inputArg < 0;
        }

        return rtn;
    };

    exports.Number.isNegative.argNames = ['inputArg'];

    /**
     * Shortcut
     * The abstract operation converts its argument to a value of type string
     *
     * @private
     * @function module:util-x~$toString
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.8
     */
    $toString = $decide(
        // test
        function () {
            $affirm.ok(!testShims, 'testing shim');

            /*jslint todo: true */
            /** @todo Decide if ToString () should be '' or 'undefined'? */
            /*jslint todo: false */
            $affirm.doesNotThrow(function () {
                $String();
            }, 'test1');

            $affirm.strictEqual($String(), 'undefined', 'test2');

            $affirm.doesNotThrow(function () {
                $String(Undefined);
            }, 'test3');

            $affirm.strictEqual($String(Undefined), 'undefined', 'test4');

            $affirm.doesNotThrow(function () {
                $String(null);
            }, 'test5');

            $affirm.strictEqual($String(null), 'null', 'test3');
        },

        // pass
        function () {
            return $String;
        },

        // fail
        function () {
            return $toString;
        },

        // argNames
        ['inputArg'],

        // message
        'ToString patch'
    );

    /**
     * The abstract operation converts its argument to a value of type string
     *
     * @function module:util-x~exports.String.ToString
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.8
     */
    exports.String.ToString = $toString;

    /**
     * Shortcut
     * Returns true if the operand inputArg is deemed numeric.
     *
     * @private
     * @function module:util-x~$isNumeric
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://stackoverflow.com/a/15043984/592253
     */
    $isNumeric = (function () {
        var plusMinus = new CRegExp('^[+\\-]?');

        return function (inputArg) {
            var thisClass = $toStringTag(inputArg),
                val,
                string,
                number;

            if (thisClass === stringTagNumber || thisClass === stringTagString) {
                string = $call(pReplace, inputArg, plusMinus, '');
                number = $parseFloat(string);
                val = $strictEqual(number, number) && $isFinite(string);
            } else {
                val = false;
            }

            return val;
        };
    }());

    /**
     * Returns true if the operand inputArg is deemed numeric.
     *
     * @function module:util-x~exports.Object.isNumeric
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://stackoverflow.com/a/15043984/592253
     */
    exports.Object.isNumeric = $isNumeric;
    exports.Object.isNumeric.argNames = ['inputArg'];

    /**
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     *
     * @function module:util-x~exports.Number.inRange
     * @param {module:util-x~NumberLike} value
     * @param {module:util-x~NumberLike} min
     * @param {module:util-x~NumberLike} max
     * @returns {boolean}
     */
    exports.Number.inRange = function (value, min, max) {
        min = $toPrimitive(min);
        if ($toStringTag(min) !== stringTagNumber && !$isNumeric(min)) {
            min = NaN;
        }

        max = $toPrimitive(max);
        if ($toStringTag(max) !== stringTagNumber && !$isNumeric(max)) {
            max = NaN;
        }

        return +$toPrimitive(value) >= +min && value <= +max;
    };

    exports.Number.inRange.argNames = ['value', 'min', 'max'];

    /**
     * Shortcut
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     *
     * @private
     * @function module:util-x~$inRange
     * @param {module:util-x~NumberLike} value
     * @param {module:util-x~NumberLike} min
     * @param {module:util-x~NumberLike} max
     * @returns {boolean}
     */
    $inRange = exports.Number.inRange;

    /**
     * Returns true if the operand value is less than or equal to min or is greater than or equal to max.
     *
     * @function module:util-x~exports.Number.outRange
     * @param {module:util-x~NumberLike} value
     * @param {module:util-x~NumberLike} min
     * @param {module:util-x~NumberLike} max
     * @returns {boolean}
     */
    exports.Number.outRange = function (value, min, max) {
        value = $toPrimitive(value);
        if (($toStringTag(value) !== stringTagNumber || !$strictEqual(value, value)) && !$isNumeric(value)) {
            return true;
        }

        min = $toPrimitive(min);
        if (($toStringTag(min) !== stringTagNumber || !$strictEqual(min, min)) && !$isNumeric(min)) {
            return true;
        }

        max = $toPrimitive(max);
        if (($toStringTag(max) !== stringTagNumber || !$strictEqual(max, max)) && !$isNumeric(max)) {
            return true;
        }

        value = +value;

        return value <= +min || value >= +max;
    };

    exports.Number.outRange.argNames = ['value', 'min', 'max'];

    /*
     *
     * EXPORTABLES THAT DO RELY ON ANY OF OUR FUNCTIONS
     *
     */

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object, otherwise returns the argument.
     *
     * @function module:util-x~exports.Object.CheckObjectCoercible
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {*}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
     */
    exports.Object.CheckObjectCoercible = $checkObjectCoercible;
    exports.Object.CheckObjectCoercible.argNames = ['inputArg'];

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error.
     *
     * @private
     * @function module:util-x~$onlyCoercibleToString
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {string}
     */
    function $onlyCoercibleToString(inputArg) {
        return $toString($checkObjectCoercible(inputArg));
    }

    /**
     * The abstract operation converts its argument to a value of type Object.
     *
     * @function module:util-x~exports.Object.ToObject
     * @param {*} inputArg
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    exports.Object.ToObject = $toObject;
    exports.Object.ToObject.argNames = ['inputArg'];

    /**
     * Returns true if the specified property is in the specified object.
     *
     * @function module:util-x~exports.Object.hasProperty
     * @param {Object} object The object that has was called upon.
     * @param {StringLike} property A string or numeric expression representing a property name or array index.
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7
     */
    exports.Object.hasProperty = $hasProperty;
    exports.Object.hasProperty.argNames = ['object', 'property'];

    //
    (function (toStringTag) {
        var runIENativeFunction,
            isIENativeFunction,
            isNativeFunction,
            isFunctionInternal;

        try {
            /*
             * native function cannot be passed
             * to native Function.prototype.toString
             * as scope to evaluate ... only IE, sure
             */
            if (!$isPrimitive(global) && global.alert) {
                $call(base.Function.toString, global.alert);
            }

            runIENativeFunction = false;
        } catch (eRunIENativeFunction) {
            /**
             * Run a spcific detection on IE?
             *
             * @private
             * @type {boolean}
             */
            runIENativeFunction = true;
        }

        /**
         * Returns true if the operand inputArg is a native Function in IE.
         *
         * @private
         * @function isIENativeFunction
         * @param {*} inputArg
         * @returns {boolean}
         */
        isIENativeFunction = (function () {
            /*
             * Are we in IE? How to define isIENativeFunction.
             */
            var typeofIE = runIENativeFunction && global.alert && typeof global.alert.toString,
                beginsFunction = new CRegExp('^\\s*\\bfunction\\b'),
                fn;

            if (typeofIE === 'undefined' && $call(pTest, beginsFunction, global.alert)) {
                fn = function (inputArg) {
                    /*
                     * inputArg
                     * we want return true or false
                     *
                     * inputArg.toString === undefined
                     * native functions do not
                     * contain a toString callback
                     * as is for every user defined
                     * function or object, even if deleted
                     * so next step is a "safe" destructuration
                     * assumption

                     * test(beginsFunction, inputArg)
                     * we are looking for a function
                     * and IE shows them with function
                     * as first word. Eventually
                     * there could be a space
                     * (never happened, it does not hurt anyway)
                     */
                    var type = typeof inputArg.toString;

                    return type === 'undefined' && $call(pTest, beginsFunction, inputArg);
                };
            } else {
                fn = function () {
                    return false;
                };
            }

            return fn;
        }());

        /**
         * Test if a function is native by simply trying to evaluate its original Function.prototype.toString call.
         * Used by {@link exports.Function.isFunction}.
         *
         * @private
         * @function isNativeFunction
         * @param {*} inputArg
         * @returns {boolean}
         */
        try {
            /*jslint evil: true */
            eval('(' + $call(base.Function.toString, CFunction) + ')');
            /*jslint evil: false */

            /*
             * Opera 10 doesn't play ball so have to test the string.
             */
            isNativeFunction = (function () {
                var operaNative = new CRegExp('^function \\S*\\(\\) \\{ (\\[native code\\]|\\/\\* source code not available \\*\\/) \\}$');

                return function (inputArg) {
                    return $call(pTest, operaNative, inputArg);
                };
            }());
        } catch (eINF1) {
            isNativeFunction = function (inputArg) {
                var val;

                try {
                    // no execution
                    // just an error if it is native
                    // every browser manifest native
                    // functions with some weird char
                    // that cannot be evaluated [native]
                    /*jslint evil: true */
                    eval('(' + inputArg.toString() + ')');
                    /*jslint evil: false */
                    val = false;
                } catch (eFnToString) {
                    val = true;
                }

                return val;
            };
        }

        /**
         * Returns true if the operand inputArg is a Function.
         *
         * @private
         * @function isFunctionExtended
         * @param {*} inputArg
         * @returns {boolean}
         */
        function isFunctionExtended(inputArg) {
            /*
             * it should be a function in any case
             * before we try to pass it to
             * Function.prototype.toString
             */
            return isFunctionInternal(inputArg, false) && isNativeFunction(inputArg);
        }

        /**
         * Returns true if the operand inputArg is a Function.
         *
         * @private
         * @function isFunctionInternal
         * @param {*} inputArg
         * @returns {boolean}
         */
        if (runIENativeFunction) {
            // used when IE
            isFunctionInternal = function (inputArg, n) {
                var val;

                if (n) {
                    val = isIENativeFunction(inputArg) || isFunctionExtended(inputArg);
                } else {
                    val = $call(toStringTag, inputArg) === stringTagFunction;
                }

                return val;
            };
        } else {
            // this function is for every other browser
            isFunctionInternal = function (inputArg, n) {
                var val;

                if (n) {
                    val = isFunctionExtended(inputArg);
                } else {
                    val = $call(toStringTag, inputArg) === stringTagFunction;
                }

                return val;
            };
        }

        /**
         * Returns true if the operand inputArg is a Function.
         *
         * @function module:util-x~exports.Function.isFunction
         * @param {*} inputArg
         * @returns {boolean}
         * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
         */
        exports.Function.isFunction = function (inputArg) {
            return !$isPrimitive(inputArg) && (isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true));
        };

        exports.Function.isFunction.argNames = ['inputArg'];

        // redefinition
        $isFunction = exports.Function.isFunction;

        /**
         * Returns true if the operand inputArg is a native Function.
         *
         * @function module:util-x~exports.Function.isNativeFunction
         * @param {*} inputArg
         * @returns {boolean}
         */
        if (runIENativeFunction) {
            exports.Function.isNativeFunction = function (inputArg) {
                return $isFunction(inputArg) && (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
            };
        } else {
            exports.Function.isNativeFunction = function (inputArg) {
                return $isFunction(inputArg) && isNativeFunction(inputArg);
            };
        }

        exports.Function.isNativeFunction.argNames = ['inputArg'];
    }(base.Object.toString));

    /**
     * Shortcut
     * Returns true if the operand inputArg is a native Function.
     *
     * @private
     * @function module:util-x~$isNative
     * @param {*} inputArg
     * @returns {boolean}
     */
    $isNative = exports.Function.isNativeFunction;

    /**
     * @private
     * @function module:util-x~$affirmBasic
     * @param {Function} Fn Native prototype method
     * @returns {Function}
     */
    function $affirmBasic(Fn) {
        return function () {
            $affirm.ok(!testShims, 'testing shim');
            $affirm.ok($isNative(Fn), 'not native');
        };
    }

    /**
     * This method calls a function with a given this value and arguments provided individually.
     *
     * @function module:util-x~exports.Function.proto.call
     * @this {Function}
     * @param {*} thisArg
     * @param {*} [varArgs]
     * @returns {*}
     */
    exports.Function.proto.call = (function () {
        var argNames = ['thisArg'];

        return $decide(
            // test
            function () {
                $affirm.ok($isNative(base.Function.call), 'not native');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.ok(!testShims, 'testing patch');
                        $affirm.ok(!hasCallBug, 'strict mode bug');
                    },

                    // pass
                    function () {
                        return $pCall;
                    },

                    // fail
                    function () {
                        return $pCall;
                    },

                    // argNames
                    argNames,

                    // message
                    'Function.call patch'
                );
            },

            // fail
            function () {
                return $pCall;
            },

            // argNames
            argNames,

            // message
            'Function.call shim'
        );
    }());

    /**
     * This method calls a function with a given this value and arguments provided individually.
     *
     * @function module:util-x~exports.Function.call
     * @param {Function} func
     * @param {*} thisArg
     * @param {*} [varArgs]
     * @returns {*}
     */
    exports.Function.call = $call;
    exports.Function.call.argNames = ['func', 'thisArg'];

    /**
     * This method calls a function with a given this value and arguments provided as an
     * array (or an array-like object).
     *
     * @function module:util-x~exports.Function.proto.apply
     * @this {Function}
     * @param {*} thisArg
     * @param {module:util-x~ArrayLike} [arrayLike]
     * @returns {*}
     */
    exports.Function.proto.apply = (function () {
        var argNames = ['thisArg', 'arrayLike'];

        return $decide(
            // test
            function () {
                $affirm.ok($isNative(base.Function.apply), 'not native');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.ok(!testShims, 'testing patch');
                        $affirm.ok(!hasApplyBug, 'strict mode bug');
                        $affirm.ok(!hasApplyRequiresArrayLikeBug, 'correct arguments and error throwing');
                        $affirm.ok(supportsApplyArrayLike, 'supports array like objects');
                    },

                    // pass
                    function () {
                        return $pApply;
                    },

                    // fail
                    function () {
                        return $pApply;
                    },

                    // argNames
                    argNames,

                    // message
                    'Function.apply patch'
                );
            },

            // fail
            function () {
                return $pApply;
            },

            // argNames
            argNames,

            // message
            'Function.apply shim'
        );
    }());

    /**
     * This method calls a function with a given this value and arguments provided as an
     * array (or an array-like object).
     *
     * @function module:util-x~exports.Function.apply
     * @param {Function} func
     * @param {*} thisArg
     * @param {module:util-x~ArrayLike} [arrayLike]
     * @returns {*}
     */
    exports.Function.apply = $apply;
    exports.Function.apply.argNames = ['func', 'thisArg', 'arrayLike'];

    /**
     * Shortcut
     * This method returns a string indicating the type of the unevaluated operand.
     *
     * @private
     * @function module:util-x~$typeOf
     * @param {*} inputArg
     * @returns {string}
     */
    function $typeOf(inputArg) {
        var rtn;

        if ($isRegExp(inputArg)) {
            rtn = 'object';
        } else if ($isFunction(inputArg)) {
            rtn = 'function';
        } else {
            rtn = typeof inputArg;
        }

        return rtn;
    }

    /**
     * This method returns a string indicating the type of the unevaluated operand.
     *
     * @function module:util-x~exports.Object.typeOf
     * @param {*} inputArg
     * @returns {string}
     */
    exports.Object.typeOf = $typeOf;
    exports.Object.typeOf.argNames = ['inputArg'];

    /**
     * Returns true if the operands are of the same typeof.
     *
     * @function module:util-x~exports.Object.areSameTypeOf
     * @param {*} a
     * @param {...*} [b]
     * @returns {boolean}
     */
    exports.Object.areSameTypeOf = function (a, b) {
        a = $typeOf(a);
        b = $typeOf(b);

        var same = a === b,
            length,
            index;

        if (same) {
            length = $toLength(arguments.length);
            for (index = 2; index < length; index += 1) {
                b = $typeOf(arguments[index]);
                same = a === b;
                if (!same) {
                    break;
                }
            }
        }

        return same;
    };

    exports.Object.areSameTypeOf.argNames = ['a', 'b'];

    /**
     * Returns true if the operands are of the same object class.
     *
     * @function module:util-x~exports.Object.areSameClass
     * @param {*} a
     * @param {...*} [b]
     * @returns {boolean}
     */
    exports.Object.areSameClass = function (a, b) {
        a = $toStringTag(a);

        var same = a === $toStringTag(b),
            length,
            index;

        if (same) {
            length = $toLength(arguments.length);
            for (index = 2; index < length; index += 1) {
                same = a === $toStringTag(arguments[index]);
                if (!same) {
                    break;
                }
            }
        }

        return same;
    };

    exports.Object.areSameClass.argNames = ['a', 'b'];

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     *
     * @function module:util-x~exports.Object.instanceOf
     * @param {Object} object
     * @param {Function} ctr
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    exports.Object.instanceOf = $instanceOf;
    exports.Object.instanceOf.argNames = ['object', 'ctr'];

    /**
     * Returns true if the argument coerces to NaN, and otherwise returns false.
     *
     * @function module:util-x~exports.isNaN
     * @param {*} number
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4
     */
    exports.isNaN = $decide(
        // test
        $affirmBasic(base.isNaN),

        // pass
        function () {
            return base.isNaN;
        },

        // fail
        function () {
            return $isNaN;
        },

        // argNames
        ['number'],

        // message
        'isNaN shim'
    );

    // redefinition
    $isNaN = exports.isNaN;

    /**
     * Returns false if the argument coerces to NaN, +Infinity, or -Infinity, and otherwise returns true.
     *
     * @private
     * @function module:util-x~exports.isFinite
     * @param {*} number
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.5
     */
    exports.isFinite = $decide(
        // test
        $affirmBasic(base.isFinite),

        // pass
        function () {
            return base.isFinite;
        },

        // fail
        function () {
            return $isFinite;
        },

        // argNames
        ['number'],

        // message
        'isFinite shim'
    );

    // redefinition
    $isFinite = exports.isFinite;

    /**
     * Creates a new array from this array, starting at start and ending at end.
     *
     * @function module:util-x~exports.Array.proto.slice
     * @this {module:util-x~ArrayLike}
     * @param {module:util-x~NumberLike} [start]
     * @param {module:util-x~NumberLike} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    exports.Array.proto.slice = $decide(
        // test
        function () {
            $affirmBasic(base.Array.slice)();

            // should throw
            $affirm.throws(function () {
                $call(base.Array.slice);
            }, CTypeError, 'no arguments');

            $affirm.throws(function () {
                $call(base.Array.slice, Undefined);
            }, CTypeError, 'argument is undefined');

            $affirm.throws(function () {
                $call(base.Array.slice, null);
            }, CTypeError, 'argument is null');

            function createArray() {
                var length = arguments.length,
                    result = [],
                    idx;

                result.length = length;
                for (idx = 0; idx < length; idx += 1) {
                    result[idx] = arguments[idx];

                }

                return result;
            }

            var someArgs = $returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined),
                someArray = createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined),
                someObject = {
                    0: Undefined,
                    1: null,
                    2: 1,
                    3: 'a',
                    4: 2,
                    5: 'b',
                    6: null,
                    7: Undefined,
                    length: 8
                },
                someString = '1234567890';

            function sOk(original, sliceArgs, expected) {
                var testSlice = $apply(base.Array.slice, original, sliceArgs),
                    length = $toLength(expected.length),
                    index,
                    isOk = true;

                if ($toLength(testSlice.length) !== length) {
                    isOk = false;
                } else {
                    for (index = 0; index < length; index += 1) {
                        if (testSlice[index] !== expected[index]) {
                            isOk = false;
                            break;
                        }
                    }
                }

                return isOk;
            }

            // works on array
            $affirm.ok(sOk(someArray, [], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test1');
            $affirm.ok(sOk(someArray, [Undefined, Undefined], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test2');
            $affirm.ok(sOk(someArray, [-1], createArray(Undefined)), 'test3');
            $affirm.ok(sOk(someArray, [0], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test4');
            $affirm.ok(sOk(someArray, [3], createArray('a', 2, 'b', null, Undefined)), 'test5');
            $affirm.ok(sOk(someArray, [-1, 4], []), 'test6');
            $affirm.ok(sOk(someArray, [0, 4], createArray(Undefined, null, 1, 'a')), 'test7');
            $affirm.ok(sOk(someArray, [3, 6], createArray('a', 2, 'b')), 'test8');

            // works on arguments
            $affirm.ok(sOk(someArgs, [], $returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test9');
            $affirm.ok(sOk(someArgs, [Undefined, Undefined], $returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test10');
            $affirm.ok(sOk(someArgs, [-1], $returnArgs(Undefined)), 'test11');
            $affirm.ok(sOk(someArgs, [0], $returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test12');
            $affirm.ok(sOk(someArgs, [3], $returnArgs('a', 2, 'b', null, Undefined)), 'test13');
            $affirm.ok(sOk(someArgs, [-1, 4], []), 'test14');
            $affirm.ok(sOk(someArgs, [0, 4], $returnArgs(Undefined, null, 1, 'a')), 'test15');
            $affirm.ok(sOk(someArgs, [3, 6], $returnArgs('a', 2, 'b')), 'test16');

            // works on object with length
            $affirm.ok(sOk(someObject, [], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test17');
            $affirm.ok(sOk(someObject, [Undefined, Undefined], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test18');
            $affirm.ok(sOk(someObject, [-1], createArray(Undefined)), 'test19');
            $affirm.ok(sOk(someObject, [0], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test20');
            $affirm.ok(sOk(someObject, [3], createArray('a', 2, 'b', null, Undefined)), 'test21');
            $affirm.ok(sOk(someObject, [-1, 4], []), 'test22');
            $affirm.ok(sOk(someObject, [0, 4], createArray(Undefined, null, 1, 'a')), 'test23');
            $affirm.ok(sOk(someObject, [3, 6], createArray('a', 2, 'b')), 'test24');

            // works on strings
            $affirm.ok(sOk(someString, [], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test25');
            $affirm.ok(sOk(someString, [Undefined, Undefined], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test26');
            $affirm.ok(sOk(someString, [-1], createArray('0')), 'test27');
            $affirm.ok(sOk(someString, [0], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test28');
            $affirm.ok(sOk(someString, [3], createArray('4', '5', '6', '7', '8', '9', '0')), 'test29');
            $affirm.ok(sOk(someString, [-1, 4], createArray()), 'test30');
            $affirm.ok(sOk(someString, [0, 4], createArray('1', '2', '3', '4')), 'test31');
            $affirm.ok(sOk(someString, [3, 6], createArray('4', '5', '6')), 'test32');
        },

        // pass
        function () {
            return base.Array.slice;
        },

        // fail
        function () {
            return $pSlice;
        },

        // argNames
        ['start', 'end'],

        // message
        'Array.slice shim'
    );

    /**
     * Creates a new array from the argument array, starting at start and ending at end.
     *
     * @function module:util-x~exports.Array.slice
     * @param {module:util-x~ArrayLike} array
     * @param {module:util-x~NumberLike} [start]
     * @param {module:util-x~NumberLike} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    exports.Array.slice = $toMethod(exports.Array.proto.slice);
    exports.Array.slice.argNames = ['array', 'start', 'end'];

    // redefinition
    $slice = exports.Array.slice;

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * Default this check is to {@link $checkObjectCoercible}.
     *
     * @function module:util-x~exports.Function.ToMethod
     * @param {prototypalFunction} protoFn
     * @param {Function} checkThisArgFn
     * @throws {TypeError} If protoFn is not a {@link Function function}.
     * @returns {boundPrototypalFunction}
     */
    exports.Function.ToMethod = $toMethod;
    exports.Function.ToMethod.argNames = ['protofn', 'checkThisArgFn'];

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * I.e. [[Class]] A String value indicating a specification defined classification of objects.
     *
     * @function module:util-x~exports.Object.toStringTag
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2
     */
    exports.Object.toStringTag = $toStringTag;

    /**
     * Throws a TypeError if arguments is a function otherwise returns the function.
     *
     * @private
     * @function module:util-x~throwIfFunction
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is a {@link Function function}.
     * @returns {Function}
     */
    /*
    function throwIfFunction(inputArg) {
        if ($isFunction(inputArg)) {
            throw new CTypeError($toStringTag(inputArg) + ' is a function');
        }

        return inputArg;
    }
    */

    /**
     * Target function.
     * @typedef {Function} module:util-x~bindTargetFunction
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * Bound function.
     * @typedef {Function} module:util-x~boundFunction
     * @this thisArg
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * This function creates a new function (a bound function) with the same function body
     * (internal call property in ECMAScript 5 terms) as the function it is being called on
     * (the bound function's target function) with the this value bound to thisArg,
     * which cannot be overridden.
     *
     * @function module:util-x~exports.Function.proto.bind
     * @this {module:util-x~bindTargetFunction}
     * @throws {TypeError} If fn is not a function.
     * @param {*} thisArg the this argument to be bound to the new function
     * @param {...*} [varArgs] any arguments to be bound to the new function.
     * @returns {module:util-x~boundFunction}.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
     */
    exports.Function.proto.bind = $decide(
        // test
        function () {
            $affirmBasic(base.Function.bind)();

            var bindArr = [1, 2, 3],
                BindCtr = $call(base.Function.bind, function () {
                    return bindArr;
                }, null),
                bindObj = new BindCtr();

            $affirm.strictEqual(bindArr, bindObj, 'same array');

            function BindFn(x) {
                this.name = x || 'A';
            }

            BindCtr = $call(base.Function.bind, BindFn, null, 'B');
            bindObj = new BindCtr();

            $affirm.ok(bindObj instanceof BindFn, 'instanceof a');
            $affirm.ok(bindObj instanceof BindCtr, 'instanceof b');
            $affirm.strictEqual(bindObj.name, 'B', 'return B');
        },

        // pass
        function () {
            return base.Function.bind;
        },

        // fail
        function () {
            function BindCtr() {
                return;
            }

            function makeBound(binder, args) {
                /*jslint evil: true */
                return new CFunction('binder', 'apply', 'return function (' + args + ') { return apply(binder, this, arguments); };')(binder, $apply);
            }

            return function (thisArg) {
                var fn = $throwIfNotFunction(this),
                    args = $argSlice(arguments, 1),
                    bound = makeBound(function () {
                        var binderArgs = $concat(args, $argSlice(arguments)),
                            result;

                        if ($instanceOf(this, bound)) {
                            result = $apply(fn, this, binderArgs);
                            if ($Object(result) === result) {
                                return result;
                            }

                            return this;
                        }

                        return $apply(fn, thisArg, binderArgs);
                    }, $bindArgs(fn.length - args.length));

                if ($Object(fn.prototype) === fn.prototype) {
                    BindCtr.prototype = fn.prototype;
                    bound.prototype = new BindCtr();
                    BindCtr.prototype = protoFunction;
                }

                return bound;
            };
        },

        // argNames
        ['thisArg', 'varArgs'],

        // message
        'Function.bind shim'
    );

    /**
     * This function creates a new function (a bound function) with the same function body
     * (internal call property in ECMAScript 5 terms) as the function it is being called on
     * (the bound function's target function) with the this value bound to thisArg,
     * which cannot be overridden.
     *
     * @function module:util-x~exports.Function.bind
     * @param {module:util-x~bindTargetFunction} fn
     * @throws {TypeError} If fn is not a {@link Function function}.
     * @param {*} thisArg the this argument to be bound to the new function
     * @param {...*} [varArgs] any arguments to be bound to the new function.
     * @returns {module:util-x~boundFunction}.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
     */
    exports.Function.bind = $toMethod(exports.Function.proto.bind);
    exports.Function.bind.argNames = ['fn', 'thisArg', 'varArgs'];

    /**
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     *
     * @function module:util-x~exports.Array.isArray
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
     */
    exports.Array.isArray = $decide(
        // test
        function () {
            $affirmBasic(base.Array.isArray)();
            $affirm.ok(base.Array.isArray([]), 'is an array');
            $affirm.ok(!base.Array.isArray({}), 'is an array');
        },

        // pass
        function () {
            return base.Array.isArray;
        },

        // fail
        function () {
            return $isArray;
        },

        // argNames
        ['inputArg'],

        // message
        'Array.isArray shim'
    );

    // redefinition
    $isArray = exports.Array.isArray;

    /**
     * This method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     *
     * @function module:util-x~exports.Array.proto.join
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If inputArg is null or undefined.
     * @param {string} [separator]
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    exports.Array.proto.join = (function () {
        var argNames = ['separator'];

        return $decide(
            // test
            $affirmBasic(base.Array.join),

            // pass
            function () {
                return $decide(
                    // test
                    function name() {
                        $affirm.strictEqual($call(base.Array.join, [1, 2]), '1,2', 'defaults to comma 1');
                        $affirm.strictEqual($call(base.Array.join, [1, 2], Undefined), '1,2', 'defaults to comma 2');
                    },

                    // pass
                    function () {
                        return base.Array.join;
                    },

                    // fail
                    function () {
                        var pJoin = base.Array.join;

                        return function (separator) {
                            $checkObjectCoercible(this);
                            if ($isUndefined(separator)) {
                                separator = ',';
                            }

                            return $call(pJoin, this, separator);
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Array.join patch'
                );
            },

            // fail
            function () {
                return function (separator) {
                    var object = $toObject(this),
                        length = $toLength(object.length),
                        last = length - 1,
                        result = '',
                        index,
                        val;

                    if ($isUndefined(separator)) {
                        separator = ',';
                    }

                    separator = $toString(separator);
                    for (index = 0; index < length; index += 1) {
                        val = object[index];
                        if (val !== null && !$isUndefined(val)) {
                            result += $toString(val);
                        }

                        if (index < last) {
                            result += separator;
                        }
                    }

                    return result;
                };
            },

            // argNames
            argNames,

            // message
            'Array.join shim'
        );
    }());

    /**
     * This method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     *
     * @function module:util-x~exports.Array.join
     * @param {module:util-x~ArrayLike} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @param {string} [separator]
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    exports.Array.join = $toMethod(exports.Array.proto.join);
    exports.Array.join.argNames = ['inputArg', 'separator'];

    /**
     * Shortcut
     * This method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     *
     * @private
     * @function module:util-x~$join
     * @param {module:util-x~ArrayLike} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @param {string} [separator]
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    $join = exports.Array.join;

    /**
     * Determines whether two values are the same value.
     *
     * @function module:util-x~exports.Object.is
     * @param {*} [x]
     * @param {*} [y]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    exports.Object.is = $decide(
        // test
        function () {
            $affirmBasic(base.Object.is)();
        },

        // pass
        function () {
            return base.Object.is;
        },

        // fail
        function () {
            return function (x, y) {
                var val;

                if (x === y) {
                    val = x !== 0 || (1 / x) === (1 / y);
                } else {
                    val = !$strictEqual(x, x) && !$strictEqual(y, y);
                }

                return val;
            };
        },

        // argNames
        ['x', 'y'],

        // message
        'Object.is shim'
    );

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * NOTE This function differs from the global isNaN function (18.2.3) is that it does not convert its argument
     * to a Number before determining whether it is NaN.
     *
     * @function module:util-x~exports.Number.isNaN
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
     */
    exports.Number.isNaN = $decide(
        // test
        function () {
            $affirmBasic(base.Number.isNaN)();
        },

        // pass
        function () {
            return base.Number.isNaN;
        },

        // fail
        function () {
            return function (inputArg) {
                return typeof inputArg === 'number' && base.isNaN(inputArg);
            };
        },

        // argNames
        ['inputArg'],

        // message
        'Number.isNaN shim'
    );

    /**
     * The function determines whether the passed value is finite.
     * More robust version of the original global isFinite.
     *
     * @function module:util-x~exports.Number.isFinite
     * @param {*} number
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
     */
    exports.Number.isFinite = $decide(
        // test
        function () {
            $affirmBasic(base.Number.isFinite)();
        },

        // pass
        function () {
            return base.Number.isFinite;
        },

        // fail
        function () {
            return function (number) {
                return typeof number === 'number' && $strictEqual(number, number) && number !== Infinity && number !== -Infinity;
            };
        },

        // argNames
        ['number'],

        // message
        'Number.isFinite shim'
    );

    /**
     * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
     * "negative number", "positive zero",  "negative zero" and NaN respectively.
     *
     * @function module:util-x~exports.Math.sign
     * @param {*} value
     * @returns {number}
     */
    exports.Math.sign = $decide(
        // test
        function () {
            $affirmBasic(base.Math.sign)();
        },

        // pass
        function () {
            return base.Math.sign;
        },

        // fail
        function () {
            return function (value) {
                return +value && (+(value >= 0) || -1);
            };
        },

        // argNames
        ['value'],

        // message
        'Math.sign shim'
    );

    /**
     * The function evaluates the passed value and converts it to an integer.
     *
     * @function module:util-x~exports.Number.toInteger
     * @param {*} inputArg The object to be converted to an integer.
     * @returns {number} If the target value is NaN, null or undefined, 0 is returned. If the target value is false, 0 is returned and if true, 1 is returned.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
     */
    exports.Number.toInteger = $toInteger;
    exports.Number.toInteger.argNames = ['inputArg'];
    $isInteger = $decide(
        // test
        $affirmBasic(base.Number.isInteger),

        // pass
        function () {
            return base.Number.isInteger;
        },

        // fail
        function () {
            return $isInteger;
        },

        // argNames
        ['inputArg'],

        // message
        'Number.isInteger shim'
    );

    /**
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isInteger
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
     */
    exports.Number.isInteger = $isInteger;

    $isSafeInteger = $decide(
        // test
        function () {
            $affirmBasic(base.Number.isSafeInteger)();
            $affirm.ok(!base.Number.isSafeInteger(UNSAFE_INTEGER), 'max unsafe');
            $affirm.ok(!base.Number.isSafeInteger(-UNSAFE_INTEGER), 'min unsafe');
        },

        // pass
        function () {
            return base.Number.isSafeInteger;
        },

        // fail
        function () {
            return $isSafeInteger;
        },

        // argNames
        ['inputArg'],

        // message
        'Number.isSafeInteger shim'
    );

    /**
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isSafeInteger
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
     */
    exports.Number.isSafeInteger = $isSafeInteger;

    /**
     * Shortcut
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range -2^31 through 2^31-1, inclusive.
     *
     * @private
     * @function module:util-x~toInt32
     * @param {*} inputArg
     * @returns {number}
     */
    function toInt32(inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * $floor($abs(number))) % UWORD32;
            if (val > MAX_INT32) {
                val -= UWORD32;
            } else if (val < MIN_INT32) {
                val += UWORD32;
            }
        }

        return val;
    }

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range -2^31 through 2^31-1, inclusive.
     *
     * @function module:util-x~exports.Number.toInt32
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toInt32 = toInt32;
    exports.Number.toInt32.argNames = ['inputArg'];

    /**
     * The exports.Number.isInt32() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^31 through 2^31-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isInt32
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isInt32 = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= MIN_INT32 && inputArg <= MAX_INT32;
    };

    exports.Number.isInt32.argNames = ['inputArg'];

    /**
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Known as Rounding division, Floored division or Integer division.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
     *
     * @function module:util-x~exports.Number.proto.modulo
     * @this {number}
     * @param {number} divisor
     * @returns {number}
     */
    exports.Number.proto.modulo = function (divisor) {
        return this - divisor * $floor(this / divisor);
    };

    exports.Number.proto.modulo.argNames = ['divisor'];

    /**
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Known as Rounding division, Floored division or Integer division.
     * @see @link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
     *
     * @function module:util-x~exports.Number.modulo
     * @param {number} dividend
     * @param {number} divisor
     * @returns {number}
     */
    exports.Number.modulo = $toMethod(exports.Number.proto.modulo, $firstArg);
    exports.Number.modulo.argNames = ['dividend', 'divisor'];

    /**
     * Shortcut
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Known as Rounding division, Floored division or Integer division.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
     *
     * @private
     * @function module:util-x~$modulo
     * @param {number} dividend
     * @param {number} divisor
     * @returns {number}
     */
    $modulo = exports.Number.modulo;

    /**
     * The Number.isOdd returns true if the integer is odd otherwise false.
     *
     * @function module:util-x~exports.Number.isOdd
     * @param {number} inputArg
     * @returns {boolean}
     */
    exports.Number.isOdd = function (inputArg) {
        return $isInteger(inputArg) && inputArg % 2 !== 0;
    };

    exports.Number.isOdd.argNames = ['inputArg'];

    /**
     * The Number.isEven returns true if the integer is even otherwise false.
     *
     * @function module:util-x~exports.Number.isEven
     * @param {number} inputArg
     * @returns {boolean}
     */
    exports.Number.isEven = function (inputArg) {
        return $isInteger(inputArg) && inputArg % 2 === 0;
    };

    exports.Number.isEven.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^53 integer values in
     * the range 0 through 2^53-1,inclusive.
     *
     * @function module:util-x~exports.Number.toUint
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toUint = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = $modulo($toInteger(number), UNSAFE_INTEGER);
        }

        return val;
    };

    exports.Number.toUint.argNames = ['inputArg'];

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^53-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isUint
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isUint = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_SAFE_INTEGER;
    };

    exports.Number.isUint.argNames = ['inputArg'];

    /**
     * The abstract operation ToLength converts its argument to an integer suitable for use as the length
     * of an array-like object.
     *
     * @function module:util-x~exports.Number.toLength
     * @param {*} inputArg
     * @returns {number}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
     */
    exports.Number.toLength = $toLength;
    exports.Number.toLength.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range 0 through 2^32-1,inclusive.
     *
     * @function module:util-x~exports.Number.toUint32
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toUint32 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = $modulo($toInteger(number), UWORD32);
        }

        return val;
    };

    exports.Number.toUint32.argNames = ['inputArg'];

    /**
     * Shortcut
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^32-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @private
     * @function module:util-x~$isUint32
     * @param {*} inputArg
     * @returns {boolean}
     */
    function $isUint32(inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT32;
    }

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^32-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isUint32
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isUint32 = $isUint32;
    exports.Number.isUint32.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range -2^15 through 2^15-1, inclusive.
     *
     * @function module:util-x~exports.Number.toInt16
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toInt16 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * $floor($abs(number))) % UWORD16;
            if (val > MAX_INT16) {
                val -= UWORD16;
            } else if (val < MIN_INT16) {
                val += UWORD16;
            }
        }

        return val;
    };

    exports.Number.toInt16.argNames = ['inputArg'];

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^15 through 2^15-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isInt16
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isInt16 = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= MIN_INT16 && inputArg <= MAX_INT16;
    };

    exports.Number.isInt16.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range 0 through 2^16-1,inclusive.
     *
     * @function module:util-x~exports.Number.toUint16
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toUint16 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = $modulo($toInteger(number), UWORD16);
        }

        return val;
    };

    exports.Number.toUint16.argNames = ['inputArg'];

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^16-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isUint16
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isUint16 = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT16;
    };

    exports.Number.isUint16.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range -2^7 through 2^7-1, inclusive.
     *
     * @function module:util-x~exports.Number.toInt8
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toInt8 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val  = ((number > 0 || -1) * $floor($abs(number))) % UWORD8;
            if (val > MAX_INT8) {
                val -= UWORD8;
            } else if (val < MIN_INT8) {
                val += UWORD8;
            }
        }

        return val;
    };

    exports.Number.toInt8.argNames = ['inputArg'];

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^7 through 2^7-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isInt8
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isInt8 = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= MIN_INT8 && inputArg <= MAX_INT8;
    };

    exports.Number.isInt8.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range 0 through 2^8-1,inclusive.
     *
     * @function module:util-x~exports.Number.toUint8
     * @param {*} inputArg
     * @returns {number}
     */
    exports.Number.toUint8 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && $strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = $modulo($toInteger(number), UWORD8);
        }

        return val;
    };

    exports.Number.toUint8.argNames = ['inputArg'];

    /**
     * This method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^8-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @function module:util-x~exports.Number.isUint8
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isUint8 = function (inputArg) {
        return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT8;
    };

    exports.Number.isUint8.argNames = ['inputArg'];

    /**
     * When the concat method is called with zero or more arguments item1, item2, etc.,
     * it returns an array containing the array elements of the object followed by the array elements
     * of each argument in order.
     *
     * @function module:util-x~exports.Array.proto.concat
     * @this {Array} array
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    exports.Array.proto.concat = $decide(
        // test
        function () {
            $affirmBasic(base.Array.concat)();
            $affirm.doesNotThrow(function () {
                $call(base.Array.concat, [], true);
            });

            var concatArr = [1, 2, 3],
                expected = $slice($returnArgs(1, 2, 3, undefined, null, false)),
                resArr,
                index;

            $affirm.doesNotThrow(function () {
                resArr = $call(base.Array.concat, concatArr, $slice($returnArgs(undefined, null, false)));
            });

            $affirm.strictEqual(resArr.length, 6, 'array length incorrect');
            for (index = 0; index < resArr.length; index += 1) {
                $affirm.ok($call(pHasOwn, resArr, index), 'array value not set');
                $affirm.strictEqual(resArr[index], expected[index], 'array wrong return value');
            }
        },

        // pass
        function () {
            return base.Array.concat;
        },

        // fail
        function () {
            return $pConcat;
        },

        // message
        'Array.concat shim'
    );

    /**
     * When the concat method is called with zero or more arguments item1, item2, etc.,
     * it returns an array containing the array elements of the object followed by the array elements
     * of each argument in order.
     *
     * @function module:util-x~exports.Array.concat
     * @param {Array} array
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
     */
    exports.Array.concat = $toMethod(exports.Array.proto.concat);
    exports.Array.concat.argNames = ['array', 'varArgs'];
    $concat = exports.Array.concat;

    /**
     * This method adds one or more elements to the end of the array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.proto.push
     * @this {module:util-x~ArrayLike}
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     */
    exports.Array.proto.push = $decide(
        // test
        function () {
            $affirmBasic(base.Array.push)();
            $affirm.doesNotThrow(function () {
                $call(base.Array.push, [], true);
            });

            var pushArr = [],
                pushObj = {};

            $affirm.strictEqual($call(base.Array.push, pushArr, Undefined), 1, 'array wrong return count');
            $affirm.strictEqual(pushArr.length, 1, 'array length incorrect');
            $affirm.ok($call(pHasOwn, pushArr, 0), 'array value not set');
            $affirm.strictEqual(pushArr[0], Undefined, 'array value incorrect');

            $affirm.strictEqual($call(base.Array.push, pushObj, Undefined), 1, 'object wrong return count');
            $affirm.strictEqual(pushObj.length, 1, 'object length incorrect');
            $affirm.ok($call(pHasOwn, pushObj, 0), 'object value not set');
            $affirm.strictEqual(pushObj[0], Undefined, 'object value incorrect');

            $affirm.strictEqual($call(base.Array.push, pushArr, 0), 2, 'array wrong return count');
            $affirm.strictEqual(pushArr.length, 2, 'array length incorrect');
            $affirm.ok($call(pHasOwn, pushArr, 1), 'array value not set');
            $affirm.strictEqual(pushArr[1], 0, 'array value incorrect');

            $affirm.strictEqual($call(base.Array.push, pushObj, 0), 2, 'object wrong return count');
            $affirm.strictEqual(pushObj.length, 2, 'object length incorrect');
            $affirm.ok($call(pHasOwn, pushObj, 1), 'object value not set');
            $affirm.strictEqual(pushObj[1], 0, 'object value incorrect');
        },

        // pass
        function () {
            return base.Array.push;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    len = $toLength(arguments.length),
                    index;

                object.length = length + len;
                for (index = 0; index < len; index += 1) {
                    object[length + index] = arguments[index];
                }

                return object.length;
            };
        },

        // message
        'Array.push shim'
    );

    /**
     * This method adds one or more elements to the end of the array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.push
     * @param {module:util-x~ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     */
    exports.Array.push = $toMethod(exports.Array.proto.push);
    exports.Array.push.argNames = ['array', 'varArgs'];

    /**
     * Shortcut
     * This method adds one or more elements to the end of the array and
     * returns the new length of the array.
     *
     * @private
     * @function module:util-x~$push
     * @param {module:util-x~ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     */
    $push = exports.Array.push;

    /**
     * This method removes the last element from an array and returns that element.
     *
     *
     * @function module:util-x~exports.Array.proto.pop
     * @this {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
     */
    exports.Array.proto.pop = $decide(
        // test
        function () {
            $affirmBasic(base.Array.pop)();
            $affirm.doesNotThrow(function () {
                $call(base.Array.pop, []);
            });

            var popArr = [1, 2, 3],
                popObj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                };

            $affirm.strictEqual($call(base.Array.pop, popArr), 3, 'array wrong return value');
            $affirm.strictEqual(popArr.length, 2, 'array length incorrect');
            $affirm.ok(!$call(pHasOwn, popArr, 2), 'array value 2 not deleted');

            $affirm.strictEqual($call(base.Array.pop, popObj), 3, 'object wrong return value');
            $affirm.strictEqual(popObj.length, 2, 'object length incorrect');
            $affirm.ok(!$call(pHasOwn, popObj, 2), 'object value 2 not deleted');

            $affirm.strictEqual($call(base.Array.pop, popArr), 2, 'array wrong return value');
            $affirm.strictEqual(popArr.length, 1, 'array length incorrect');
            $affirm.ok(!$call(pHasOwn, popArr, 1), 'array value 1 not deleted');

            $affirm.strictEqual($call(base.Array.pop, popObj), 2, 'object wrong return value');
            $affirm.strictEqual(popObj.length, 1, 'object length incorrect');
            $affirm.ok(!$call(pHasOwn, popObj, 1), 'object value 1 not deleted');
        },

        // pass
        function () {
            return base.Array.pop;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    len = $toLength(object.length),
                    index,
                    value;

                if (len === 0) {
                    object.length = 0;
                } else {
                    index = len - 1;
                    value = object[index];
                    $deleteProperty(object, index);
                    object.length = index;
                }

                return value;
            };
        },

        // message
        'Array.pop shim'
    );

    /**
     * This method removes the last element from an array and returns that element.
     *
     * @function module:util-x~exports.Array.pop
     * @param {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
     */
    exports.Array.pop = $toMethod(exports.Array.proto.pop);
    exports.Array.pop.argNames = ['array'];

    /**
     * Shortcut
     * This method removes the last element from an array and returns that element.
     *
     * @private
     * @function module:util-x~$pop
     * @param {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
     */
    $pop = exports.Array.pop;

    /**
     * The first element of the array is removed from the array and returned.
     *
     *
     * @function module:util-x~exports.Array.proto.shift
     * @this {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     */
    exports.Array.proto.shift = $decide(
        // test
        function () {
            $affirmBasic(base.Array.shift)();
            $affirm.doesNotThrow(function () {
                $call(base.Array.shift, []);
            });

            var shiftArr = [1, 2, 3],
                shiftObj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                };

            $affirm.strictEqual($call(base.Array.shift, shiftArr), 1, 'array wrong return value');
            $affirm.strictEqual(shiftArr.length, 2, 'array length incorrect');
            $affirm.ok(!$call(pHasOwn, shiftArr, 2), 'array value 2 not deleted');

            $affirm.strictEqual($call(base.Array.shift, shiftObj), 1, 'object wrong return value');
            $affirm.strictEqual(shiftObj.length, 2, 'object length incorrect');
            $affirm.ok(!$call(pHasOwn, shiftObj, 2), 'object value 2 not deleted');

            $affirm.strictEqual($call(base.Array.shift, shiftArr), 2, 'array wrong return value');
            $affirm.strictEqual(shiftArr.length, 1, 'array length incorrect');
            $affirm.ok(!$call(pHasOwn, shiftArr, 1), 'array value 1 not deleted');

            $affirm.strictEqual($call(base.Array.shift, shiftObj), 2, 'object wrong return value');
            $affirm.strictEqual(shiftObj.length, 1, 'object length incorrect');
            $affirm.ok(!$call(pHasOwn, shiftObj, 1), 'object value 1 not deleted');

            // IE7
            shiftObj = {
                0: Undefined,
                1: null,
                2: -1,
                3: 0,
                4: 1,
                5: false,
                6: true,
                7: Undefined,
                8: '',
                9: 'abc',
                10: null,
                11: Undefined
            };

            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test1');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test2');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test3');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test4');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test5');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test6');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test7');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test8');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test9');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test10');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test11');
            $affirm.strictEqual($call(base.Array.shift, shiftObj), Undefined, 'test112');
            $affirm.strictEqual(shiftObj[9], 'abc', 'test13');
            $affirm.strictEqual(shiftObj.length, 0, 'test14');
        },

        // pass
        function () {
            return base.Array.shift;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    len = $toLength(object.length),
                    index,
                    value,
                    to;

                if (len === 0) {
                    object.length = 0;
                } else {
                    value = object[0];
                    for (index = 1; index < len; index += 1) {
                        to = index - 1;
                        if ($hasProperty(object, index)) {
                            object[to] =  object[index];
                        } else {
                            $deleteProperty(object, to);
                        }
                    }

                    $deleteProperty(object, len - 1);
                    object.length = len - 1;
                }

                return value;
            };
        },

        // message
        'Array.shift shim'
    );

    /**
     * The first element of the array is removed from the array and returned.
     *
     * @function module:util-x~exports.Array.shift
     * @param {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     */
    exports.Array.shift = $toMethod(exports.Array.proto.shift);
    exports.Array.shift.argNames = ['array'];

    /**
     * Shortcut
     * The first element of the array is removed from the array and returned.
     *
     * @private
     * @function module:util-x~$shift
     * @param {module:util-x~ArrayLike} array
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
     */
    $shift = exports.Array.shift;

    /**
     * This method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.proto.unshift
     * @this {module:util-x~ArrayLike}
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     */

    exports.Array.proto.unshift = $decide(
        // test
        function () {
            $affirmBasic(base.Array.unshift)();
            $affirm.doesNotThrow(function () {
                $call(base.Array.unshift, [], true);
            });

            var unshiftArr = [],
                unshiftObj = {};

            $affirm.strictEqual($call(base.Array.unshift, unshiftArr, Undefined), 1, 'array wrong return count');
            $affirm.strictEqual(unshiftArr.length, 1, 'array length incorrect');
            $affirm.ok($call(pHasOwn, unshiftArr, 0), 'array value not set');
            $affirm.strictEqual(unshiftArr[0], Undefined, 'array value incorrect');

            $affirm.strictEqual($call(base.Array.unshift, unshiftObj, Undefined), 1, 'object wrong return count');
            $affirm.strictEqual(unshiftObj.length, 1, 'object length incorrect');
            $affirm.ok($call(pHasOwn, unshiftObj, 0), 'object value not set');
            $affirm.strictEqual(unshiftObj[0], Undefined, 'object value incorrect');

            $affirm.strictEqual($call(base.Array.unshift, unshiftArr, 0), 2, 'array wrong return count');
            $affirm.strictEqual(unshiftArr.length, 2, 'array length incorrect');
            $affirm.ok($call(pHasOwn, unshiftArr, 0), 'array value not set');
            $affirm.strictEqual(unshiftArr[0], 0, 'array value incorrect');

            $affirm.strictEqual($call(base.Array.unshift, unshiftObj, 0), 2, 'object wrong return count');
            $affirm.strictEqual(unshiftObj.length, 2, 'object length incorrect');
            $affirm.ok($call(pHasOwn, unshiftObj, 0), 'object value not set');
            $affirm.strictEqual(unshiftObj[0], 0, 'object value incorrect');
        },

        //pass
        function () {
            return base.Array.unshift;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    len = $toLength(object.length),
                    k = len,
                    argCount = $toLength(arguments.length),
                    from,
                    to,
                    j;

                object.length = len + argCount;
                for (k = len; k > 0; k -= 1) {
                    from = k - 1;
                    to = k + argCount - 1;
                    if ($hasProperty(object, from)) {
                        object[to] = object[from];
                    } else {
                        $deleteProperty(object, to);
                    }
                }

                for (j = 0; j < argCount; j += 1) {
                    object[j] = arguments[j];
                }

                return object.length;
            };
        },

        // message
        'Array.unshift shim'
    );

    /**
     * This method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.unshift
     * @param {module:util-x~ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     */
    exports.Array.unshift = $toMethod(exports.Array.proto.unshift);
    exports.Array.unshift.argNames = ['array', 'varArgs'];

    /**
     * Shortcut
     * This method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     *
     * @private
     * @function module:util-x~$unshift
     * @param {module:util-x~ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     */
    $unshift = exports.Array.unshift;

    /**
     * The elements of the array are rearranged so as to reverse their order.
     *
     * @function module:util-x~exports.Array.proto.reverse
     * @this {module:util-x~ArrayLike}
     * @returns {module:util-x~ArrayLike}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8
     */
    exports.Array.proto.reverse = $decide(
        // test
        function () {
            $affirmBasic(base.Array.reverse)();
            $affirm.doesNotThrow(function () {
                base.Array.reverse.call(1);
            }, 'number');

            $affirm.doesNotThrow(function () {
                base.Array.reverse.call(true);
            }, 'boolean');

            $affirm.doesNotThrow(function () {
                base.Array.reverse.call('a');
            }, 'string');
        },

        //pass
        function () {
            return base.Array.reverse;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    middle = $floor(length / 2),
                    lower = 0,
                    lowerValue,
                    upperValue,
                    lowerExists,
                    upperExists,
                    upper;

                while (lower !== middle) {
                    upper = length - lower - 1;
                    lowerValue = object[lower];
                    upperValue = object[upper];
                    lowerExists = $hasProperty(object, lower);
                    upperExists = $hasProperty(object, upper);
                    if (lowerExists && upperExists) {
                        object[lower] = upperValue;
                        object[upper] = lowerValue;
                    } else if (!lowerExists && upperExists) {
                        object[lower] = upperValue;
                        $deleteProperty(object, upper);
                    } else if (lowerExists && !upperExists) {
                        object[upper] = lowerValue;
                        $deleteProperty(object, lower);
                    }

                    lower += 1;
                }

                return object;
            };
        },

        // message
        'Array.reverse shim'
    );

    /**
     * The elements of the array are rearranged so as to reverse their order.
     *
     * @function module:util-x~exports.Array.reverse
     * @param {module:util-x~ArrayLike} array
     * @returns {module:util-x~ArrayLike}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8
     */
    exports.Array.reverse = $toMethod(exports.Array.proto.reverse);
    exports.Array.reverse.argNames = ['array'];

    /**
     * Shortcut
     * The elements of the array are rearranged so as to reverse their order.
     *
     * @private
     * @function module:util-x~$reverse
     * @param {module:util-x~ArrayLike} array
     * @returns {module:util-x~ArrayLike}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8
     */
    $reverse = exports.Array.reverse;

    /**
     * Returns an integer clamped to the range set by min and max.
     * The arguments are converted to integers with the {@link exports.Number.toInteger toInteger} method.
     *
     * @function module:util-x~exports.Number.clampToInt
     * @param {*} num
     * @param {*} min
     * @param {*} max
     * @returns {number}
     */
    exports.Number.clampToInt = function (num, min, max) {
        return $min($max($toInteger(num), $toInteger(min)), $toInteger(max));
    };

    exports.Number.clampToInt.argNames = ['num', 'min', 'max'];

    /**
     * Throws a TypeError if the argument is not a RegExp.
     *
     * @private
     * @function module:util-x~throwIfNotRegExp
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is not a RegExp.
     * @returns {RegExp}
     */
    function throwIfNotRegExp(inputArg) {
        if (!$isRegExp(inputArg)) {
            throw new CTypeError('Type RegExp expected: ' + $toString(inputArg));
        }

        return inputArg;
    }

    // RegExp closure
    (function () {
        var clipDups = new CRegExp('([\\s\\S])(?=[\\s\\S]*\\1)', 'g'),
            // Check for correct `exec` handling of nonparticipating capturing groups
            npcgType = typeof $call(pExec, new CRegExp('()??'), '')[1],
            escapeThese = new CRegExp('[\\[\\](){}?*+\\^$\\\\.|]', 'g'),
            correctExecNpcg = npcgType === 'undefined',
            replacementToken = new CRegExp('\\$(?:\\{(\\$+)\\}|(\\d\\d?|[\\s\\S]))', 'g'),
            getNativeFlags = new CRegExp('\\/([a-z]*)$', 'i'),
            es5limit = $join($call(pSplit, 'test', /(?:)/, -1), '') === 'test' &&
                        $join($call(pSplit, 'a b c d', / /, -(UWORD32 - 1)), '') === 'a' &&
                        $join($call(pSplit, 'a b c d', / /, UWORD32 + 1), '') === 'a' &&
                        $join($call(pSplit, 'a b c d', / /, Infinity), '') === '';

        /**
         * This method takes a string and puts a backslash in front of every character
         * that is part of the regular expression syntax.
         * This is useful if you have a run-time string that you need to match in some text and the string may contain
         * special regex characters.
         * Throws an error if the argument can not be coerced, i.e. null or undefined.
         *
         * @function module:util-x~exports.String.proto.escapeRegex
         * @this {string}
         * @returns {string}
         */
        exports.String.proto.escapeRegex = function () {
            return $call(pReplace, $onlyCoercibleToString(this), escapeThese, '\\$&');
        };

        /**
         * This {@link module:util-x~boundPrototypalFunction method} takes a string and puts a backslash in front of every character
         * that is part of the regular expression syntax.
         * This is useful if you have a run-time string that you need to match in some text and the string may contain
         * special regex characters.
         * Throws an error if the argument can not be coerced, i.e. null or undefined.
         *
         * @function module:util-x~exports.String.escapeRegex
         * @param {string} string
         * @returns {string}
         */
        exports.String.escapeRegex = $toMethod(exports.String.proto.escapeRegex);
        exports.String.escapeRegex.argNames = ['string'];

        /**
         * Removes any duplicate characters from the provided string.
         *
         * @function module:util-x~exports.String.clipDuplicates
         * @param {string} str String to remove duplicate characters from.
         * @returns {string} String with any duplicate characters removed.
         */
        exports.String.clipDuplicates = function (str) {
            return $call(pReplace, $onlyCoercibleToString(str), clipDups, '');
        };

        exports.String.clipDuplicates.argNames = ['str'];

        /**
         * Copies a regex object. Allows adding and removing native flags while copying the regex.
         *
         * @private
         * @function module:util-x~copyRegExp
         * @param {RegExp} regex Regex to copy.
         * @param {Object} [options] Allows specifying native flags to add or remove while copying the regex.
         * @returns {RegExp} Copy of the provided regex, possibly with modified flags.
         */
        function copyRegExp(regExpArg, options) {
            var flags;

            if (!$isPlainObject(options)) {
                options = {};
            }

            // Get native flags in use
            flags = $onlyCoercibleToString($call(pExec, getNativeFlags, $toString(regExpArg))[1]);
            if (options.add) {
                flags = $call(pReplace, flags + options.add, clipDups, '');
            }

            if (options.remove) {
                // Would need to escape `options.remove` if this was public
                flags = $call(pReplace, flags, new CRegExp('[' + options.remove + ']+', 'g'), '');
            }

            return new CRegExp(regExpArg.source, flags);
        }

        /**
         * Fixes browser bugs in the native `RegExp.prototype.exec`.
         *
         * @function module:util-x~exports.RegExp.proto.exec
         * @this {RegExp}
         * @param {string} stringArg String to search.
         * @returns {Array} Match array with named backreference properties, or `null`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
         */

        try {
            if (testShims || !correctExecNpcg) {
                throw new CError();
            }

            testTemp.regex = /x/;
            testTemp.regex.lastIndex = 4;
            testTemp.execSlice = $slice($call(pExec, testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex = /x/g;
            testTemp.regex.lastIndex = 4;
            if ($call(pExec, testTemp.regex, '123x5') !== null) {
                throw new CError();
            }

            testTemp.regex.lastIndex = 2;
            testTemp.execSlice = $slice($call(pExec, testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex.lastIndex = '3';
            testTemp.execSlice = $slice($call(pExec, testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex.lastIndex = '4';
            if ($call(pExec, testTemp.regex, '123x5') !== null) {
                throw new CError();
            }

            testTemp.regex = /\b/g;
            testTemp.match = $call(pExec, testTemp.regex, '1,2');
            if (!testTemp.match[0].length && testTemp.regex.lastIndex > testTemp.match.index) {
                throw new CError();
            }

            testTemp.regex = /x/;
            $call(pExec, testTemp.regex, '123x5');
            if (testTemp.regex.lastIndex !== 0) {
                throw new CError();
            }

            exports.RegExp.proto.exec = pExec;
        } catch (eExec) {
            exports.RegExp.proto.exec = function (stringArg) {
                var str,
                    origLastIndex,
                    match,
                    found,
                    len,
                    idx,
                    r2;

                throwIfNotRegExp(this);
                str = $toString(stringArg);
                origLastIndex = this.lastIndex;
                match = $apply(pExec, this, arguments);
                if ($isArray(match)) {
                    // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating
                    // capturing groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of
                    // older IEs. IE 9 in standards mode follows the spec
                    len = match.length;
                    if (!correctExecNpcg && len > 1) {
                        for (idx = 0; idx < len; idx += 1) {
                            if ('' === match[idx]) {
                                found = true;
                                break;
                            }
                        }

                        if (found) {
                            r2 = copyRegExp(this, {remove: 'g'});
                            // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                            // matching due to characters outside the match
                            $call(pReplace, $call(pSSlice, $toString(str), match.index), r2, function () {
                                var length = arguments.length - 2,
                                    index,
                                    type,
                                    it;

                                // Skip index 0 and the last 2
                                for (index = 1; index < length; index += 1) {
                                    it = arguments[index];
                                    type = typeof it;
                                    if (type === 'undefined') {
                                        match[index] = it;
                                    }
                                }
                            });
                        }
                    }

                    // Fix browsers that increment `lastIndex` after zero-length matches
                    if (this.global && !match[0].length && this.lastIndex > match.index) {
                        this.lastIndex = match.index;
                    }
                }

                if (!this.global) {
                    // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
                    this.lastIndex = origLastIndex;
                }

                return match;
            };

            exports.RegExp.proto.exec.argNames = ['stringArg'];
        }

        /**
         * Fixes browser bugs in the native `RegExp.prototype.exec`.
         *
         * @function module:util-x~exports.RegExp.exec
         * @param {RegExp} regExpArg
         * @param {string} stringArg String to search.
         * @returns {Array} Match array with named backreference properties, or `null`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
         */
        exports.RegExp.exec = $toMethod(exports.RegExp.proto.exec);
        exports.RegExp.exec.argNames = ['regExpArg', 'stringArg'];

        /**
         * Fixes browser bugs in the native `RegExp.prototype.exec`.
         *
         * @private
         * @function module:util-x~$exec
         * @param {RegExp} regExpArg
         * @param {string} stringArg String to search.
         * @returns {Array} Match array with named backreference properties, or `null`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
         */
        $exec = exports.RegExp.exec;

        /**
         * Fixes browser bugs in the native `RegExp.prototype.test`.
         *
         * @function module:util-x~exports.RegExp.proto.test
         * @this {RegExp}
         * @param {string} stringArg String to search.
         * @returns {Boolean} Whether the regex matched the provided value.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
         */
        exports.RegExp.proto.test = function (stringArg) {
            // Do this the easy way :-)
            return !!$exec(this, stringArg);
        };

        exports.RegExp.proto.test.argNames = ['stringArg'];

        /**
         * Fixes browser bugs in the native `RegExp.prototype.test`.
         *
         * @function module:util-x~exports.RegExp.test
         * @param {RegExp} regExpArg
         * @param {string} stringArg String to search.
         * @returns {Boolean} Whether the regex matched the provided value.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
         */
        exports.RegExp.test = $toMethod(exports.RegExp.proto.test);
        exports.RegExp.test.argNames = ['regExpArg', 'stringArg'];

        /**
         * Fixes browser bugs in the native `RegExp.prototype.test`.
         *
         * @private
         * @function module:util-x~$test
         * @param {RegExp} regExpArg
         * @param {string} stringArg String to search.
         * @returns {Boolean} Whether the regex matched the provided value.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
         */
        $test = exports.RegExp.test;

        /**
         * Checks to see that the string is only comprised of byte sized characters.
         *
         * @function module:util-x~exports.String.proto.isBytestring
         * @this {string}
         * @returns {Boolean} Is a bytestring or not.
         */
        exports.String.proto.isBytestring = function () {
            return exports.RegExp.test(/^[\x00-\xFF]*$/, $onlyCoercibleToString(this));
        };

        /**
         * Checks to see that the string is only comprised of byte sized characters.
         *
         * @function module:util-x~exports.String.isBytestring
         * @param {string} stringArg String to check.
         * @returns {Boolean} Is a bytestring or not.
         */
        exports.String.isBytestring = $toMethod(exports.String.proto.isBytestring);
        exports.String.isBytestring.argNames = ['stringArg'];

        /**
         * Splits a String object into an array of strings by separating the string into subbase.str.
         *
         * @function module:util-x~exports.String.proto.split
         * @this {string} stringArg
         * @param {string|RegExp}} [separator]
         * @param {number} [limit]
         * @returns {Array.<string>}
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         */
        try {
            /*jslint todo: true */
            /** @todo Require more tests for string split */
            /*jslint todo: false */
            if (!testShims || !$isNative(pSplit) ||
                    $call(pSplit, 'test', new CRegExp('(?:test)*')).length === 2 ||
                    $call(pSplit, '.', new CRegExp('(.?)(.?)')).length !== 4 ||
                    $call(pSplit, 'tesst', new CRegExp('(s)*'))[1] === 't' ||
                    $call(pSplit, '', new CRegExp('.?')).length > 0 ||
                    $call(pSplit, '.', new CRegExp('()()')).length > 1) {

                throw new CError();
            }

            exports.String.proto.split = function (separator, limit) {
                var isUndef,
                    val;

                // "0".split(undefined, 0) -> []
                if ($isUndefined(separator) && limit === 0) {
                    val = [];
                } else {
                    isUndef = $isUndefined(limit);
                    if (es5limit) {
                        if (isUndef) {
                            limit = MAX_UINT32;
                        } else {
                            limit = $min($toLength(limit), MAX_UINT32);
                        }
                    } else {
                        if (isUndef) {
                            limit = MAX_SAFE_INTEGER;
                        } else {
                            limit = $toLength(limit);
                        }
                    }

                    val = $call(pSplit, $onlyCoercibleToString(this), separator, limit);
                }

                return val;
            };

            exports.String.proto.split.argNames = ['separator', 'limit'];
        } catch (eSplit) {
            exports.String.proto.split = (function () {
                function search(str, regex, pos) {
                    var r2 = copyRegExp(regex, {
                            add: 'g',
                            remove: 'y'
                        }),
                        match;

                    r2.lastIndex = pos || 0;
                    match = $exec(r2, str);
                    if (regex.global) {
                        if (match) {
                            regex.lastIndex = r2.lastIndex;
                        } else {
                            regex.lastIndex = 0;
                        }
                    }

                    return match;
                }

                return function (separator, limit) {
                    var str = $onlyCoercibleToString(this),
                        isUndef,
                        output,
                        origLastIndex,
                        lastLastIndex,
                        lastLength,
                        pos,
                        match,
                        length;

                    // "0".split(undefined, 0) -> []
                    if ($isUndefined(separator) && limit === 0) {
                        output = [];
                    } else {
                        isUndef = $isUndefined(limit);
                        if (es5limit) {
                            if (isUndef) {
                                limit = MAX_UINT32;
                            } else {
                                limit = $min($toLength(limit), MAX_UINT32);
                            }
                        } else {
                            if (isUndef) {
                                limit = MAX_SAFE_INTEGER;
                            } else {
                                limit = $toLength(limit);
                            }
                        }

                        if (!$isRegExp(separator)) {
                            // Browsers handle nonregex split correctly, so use the faster native method
                            output = $call(pSplit, str, separator, limit);
                        } else {
                            output = [];
                            origLastIndex = separator.lastIndex;
                            lastLastIndex = 0;
                            length = str.length;
                            match = search(str, separator, pos);
                            while (match) {
                                // This condition is not the same as `if (match[0].length)`
                                if ((match.index + $toLength(match[0].length)) > lastLastIndex) {
                                    $push(output, $call(pSSlice, str, lastLastIndex, match.index));
                                    if ($toLength(match.length) > 1 && match.index < length) {
                                        output = $concat(output, $slice(match, 1));
                                    }

                                    lastLength = $toLength(match[0].length);
                                    lastLastIndex = match.index + lastLength;
                                }

                                pos = match.index + (match[0].length || 1);
                                match = search(str, separator, pos);
                            }

                            if (lastLastIndex === str.length) {
                                if (!$call(pTest, separator, '') || lastLength) {
                                    $push(output, '');
                                }
                            } else {
                                $push(output, $call(pSSlice, str, lastLastIndex));
                            }

                            separator.lastIndex = origLastIndex;
                            if (output.length > limit) {
                                output = $slice(output, 0, limit);
                            }
                        }
                    }

                    return output;
                };
            }());

            exports.String.proto.split.argNames = ['separator', 'limit'];
        }

        /**
         * Splits a String object into an array of strings by separating the string into subbase.str.
         *
         * @function module:util-x~exports.String.split
         * @param {string} stringArg
         * @param {string|RegExp}} [separator]
         * @param {number} [limit]
         * @returns {Array.<string>}
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         */
        exports.String.split = $toMethod(exports.String.proto.split);
        exports.String.split.argNames = ['stringArg', 'separator', 'limit'];

        /**
         * Splits a String object into an array of strings by separating the string into subbase.str.
         *
         * @private
         * @function module:util-x~$split
         * @param {string} stringArg
         * @param {string|RegExp}} [separator]
         * @param {number} [limit]
         * @returns {Array.<string>}
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
         */
        $split = exports.String.split;

        /**
         * Fixes browser bugs in replacement text syntax when performing a replacement using a nonregex search
         * value, and the value of a replacement regex's `lastIndex` property during replacement iterations
         * and upon completion. Note that this doesn't support SpiderMonkey's proprietary third (`flags`)
         * argument.
         *
         * @function module:util-x~exports.String.proto.replace
         * @this {string}
         * @param {RegExp|string} search Search pattern to be replaced.
         * @param {string|Function} replacement Replacement string or a function invoked to create it.
         * @returns {string} New string with one or all matches replaced.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
         */
        try {
            if (testShims || !$isNative(pSplit)) {
                throw new CError();
            }

            /*jslint todo: true */
            /** @todo Require more tests for string replace */
            /*jslint todo: false */
            if ($call(pReplace, 'aaa', /aa/, '$&b') !== 'aaba' ||
                    $call(pReplace, 'aaa', /aa/, '$\'b') !== 'aba' ||
                    $call(pReplace, 'xaaa', /aa/, '$`b') !== 'xxba' ||
                    $call(pReplace, 'aaa', /aa/, '$$b') !== '$ba') {

                throw new CError('Failed token handling');
            }

            testTemp.regex = /x/g;
            testTemp.regex.lastIndex = 1;
            $call(pReplace, 'nomatch', testTemp.regex, '_');
            if (testTemp.regex.lastIndex !== 0) {
                throw new CError('No reset of lastIndex of a global regex');
            }

            testTemp.regex.lastIndex = testTemp.interimLastIndex = 0;
            $call(pReplace, '1x2', testTemp.regex, function () {
                testTemp.interimLastIndex = testTemp.regex.lastIndex;
            });

            if (testTemp.interimLastIndex !== 2) {
                throw new CError('No update of lastIndex during replacement iterations');
            }

            testTemp.regex = /x/;
            testTemp.regex.lastIndex = 1;
            $call(pReplace, 'nomatch', testTemp.regex, '_');
            if (testTemp.regex.lastIndex !== 0) {
                throw new CError('No reset of lastIndex of a non-global regex');
            }

            exports.String.proto.replace = pReplace;
        } catch (eReplace) {
            $conlog('EWW', eReplace);
            exports.String.proto.replace = function (search, replacement) {
                var str = $onlyCoercibleToString(this),
                    isRegex = $isRegExp(search),
                    origLastIndex,
                    result;

                if (isRegex) {
                    // Only needed if `search` is nonglobal
                    origLastIndex = search.lastIndex;
                } else {
                    // Type-convert
                    search = $toString(search);
                }

                // Don't use `typeof`; some older browsers return 'function' for regex objects
                if ($isFunction(replacement)) {
                    // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
                    // functions isn't type-converted to a string
                    result = $call(pReplace, str, search, function () {
                        // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox,
                        // Safari bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
                        if (isRegex && search.global) {
                            search.lastIndex = arguments[$toLength(arguments.length) - 2] + $getArgItem(arguments, 0).length;
                        }

                        // Should pass `undefined` as context; see
                        // <https://bugs.ecmascript.org/show_bug.cgi?id=154>
                        return $apply(replacement, Undefined, arguments);
                    });
                } else {
                    // Ensure that the last value of `args` will be a string when given nonstring `this`,
                    // while still throwing on `null` or `undefined` context
                    result = $call(pReplace, str, search, function () {
                        // Keep this function's `arguments` available through closure
                        var args = arguments,
                            length = $toLength(arguments.length);

                        return $call(pReplace, $toString(replacement), replacementToken, function () {
                            var $0 = $getArgItem(arguments, 0),
                                $2 = $getArgItem(arguments, 2);

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
                                return $slice(args[length - 1], 0, args[length - 2]);
                            }

                            // $' (right context)
                            if ($2 === '\'') {
                                return $slice(args[length - 1], args[length - 2] + args[0].length);
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
                            if ($strictEqual($2, $2)) {
                                if ($2 > (length - 3)) {
                                    throw new CSyntaxError('Backreference to undefined group ' + $0);
                                }

                                return args[$2] || '';
                            }

                            throw new CSyntaxError('Invalid token ' + $0);
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

            exports.String.proto.replace.argNames = ['search', 'replacement'];
        }

        /**
         * Fixes browser bugs in replacement text syntax when performing a replacement using a nonregex search
         * value, and the value of a replacement regex's `lastIndex` property during replacement iterations
         * and upon completion. Note that this doesn't support SpiderMonkey's proprietary third (`flags`)
         * argument.
         *
         * @function module:util-x~exports.String.replace
         * @param {string} inputArg the string on which to perform the replace.
         * @param {RegExp|string} search Search pattern to be replaced.
         * @param {string|Function} replacement Replacement string or a function invoked to create it.
         * @returns {string} New string with one or all matches replaced.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
         */
        exports.String.replace = $toMethod(exports.String.proto.replace);
        exports.String.replace.argNames = ['inputArg', 'search', 'replacement'];

        /**
         * Fixes browser bugs in replacement text syntax when performing a replacement using a nonregex search
         * value, and the value of a replacement regex's `lastIndex` property during replacement iterations
         * and upon completion. Note that this doesn't support SpiderMonkey's proprietary third (`flags`)
         * argument.
         *
         * @private
         * @function module:util-x~$replace
         * @param {string} inputArg the string on which to perform the replace.
         * @param {RegExp|string} search Search pattern to be replaced.
         * @param {string|Function} replacement Replacement string or a function invoked to create it.
         * @returns {string} New string with one or all matches replaced.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
         */
        $replace = exports.String.replace;

        /**
         * This method replaces all occurences of a string pattern within
         * the string with the string characters.
         *
         * @function module:util-x~exports.String.proto.replaceAll
         * @this {string}
         * @throws {Error} an If the argument can not be coerced, i.e. null or undefined.
         * @param {(string|RegExp)} pattern
         * @param {string} characters
         * @returns {string}
         */
        exports.String.proto.replaceAll = function (pattern, characters) {
            if ($toStringTag(pattern) === stringTagString) {
                pattern = new CRegExp($replace($onlyCoercibleToString(pattern), escapeThese, '\\$&'), 'g');
            } else if ($isRegExp(pattern)) {
                pattern = copyRegExp(pattern, {
                    add: 'g'
                });
            }

            if ($toStringTag(characters) !== stringTagString && $toStringTag(characters) !== stringTagNumber) {
                characters = '';
            } else {
                characters = $toString(characters);
            }

            return $replace($onlyCoercibleToString(this), pattern, characters);
        };

        exports.String.proto.replaceAll.argNames = ['pattern', 'characters'];

        /**
         * This {@link module:util-x~boundPrototypalFunction method} replaces all occurences of a string pattern within
         * a string with the string characters.
         *
         * @function module:util-x~exports.String.replaceAll
         * @param {string} string
         * @throws {Error} an If the argument can not be coerced, i.e. null or undefined.
         * @param {(string|RegExp)} pattern
         * @param {string} characters
         * @returns {string}
         */
        exports.String.replaceAll = $toMethod(exports.String.proto.replaceAll);
        exports.String.replaceAll.argNames = ['string', 'pattern', 'characters'];

        /**
         * Fixes browser bugs in the native `String.prototype.match`.
         *
         * @function module:util-x~exports.String.proto.match
         * @this {string}
         * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
         * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
         * the result of calling `$exec(regExpArg)`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        exports.String.proto.match = function (regExpArg) {
            var str = $onlyCoercibleToString(this),
                result;

            if (!$isRegExp(regExpArg)) {
                regExpArg = new CRegExp(regExpArg);
            } else if (regExpArg.global) {
                result = $apply(pMatch, str, arguments);
                // Fixes IE bug
                regExpArg.lastIndex = 0;

                return result;
            }

            return $exec(regExpArg, str);
        };

        exports.String.proto.match.argNames = ['regExpArg'];

        /**
         * Fixes browser bugs in the native `String.prototype.match`.
         *
         * @function module:util-x~exports.String.match
         * @param {string} stringArg String to search.
         * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
         * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
         * the result of calling `$exec(regExpArg)`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        exports.String.match = $toMethod(exports.String.proto.match);
        exports.String.match.argNames = ['stringArg', 'regExpArg'];
    }());

    /**
     * Coerces its argument to a string and returns the first character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.proto.first
     * @this {string}
     * @returns {string}
     */
    exports.String.proto.first = function () {
        return $call(pCharAt, $onlyCoercibleToString(this), 0);
    };

    /**
     * Coerces its argument to a string and returns the first character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.first
     * @param {string} inputArg
     * @returns {string}
     */
    exports.String.first = $toMethod(exports.String.proto.first);
    exports.String.first.argNames = ['inputArg'];

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.proto.last
     * @this {string}
     * @returns {string}
     */
    exports.String.proto.last = function () {
        var str = $onlyCoercibleToString(this);

        return $call(pCharAt, str, str.length - 1);
    };

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.last
     * @param {string} inputArg
     * @returns {string}
     */
    exports.String.last = $toMethod(exports.String.proto.last);
    exports.String.last.argNames = ['inputArg'];

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.proto.countCharacter
     * @this {string}
     * @param {string} character
     * @returns {number}
     */
    exports.String.proto.countCharacter = function (character) {
        var str = $onlyCoercibleToString(this),
            first = $call(pCharAt, $onlyCoercibleToString(character), 0),
            val;

        if (first === '') {
            val = Infinity;
        } else {
            val = $min($max($split(str, first).length - 1, 0), Infinity);
        }

        return val;
    };

    exports.String.proto.countCharacter.argNames = ['character'];

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.countCharacter
     * @param {string} inputArg
     * @param {string} character
     * @returns {number}
     */
    exports.String.countCharacter = $toMethod(exports.String.proto.countCharacter);
    exports.String.countCharacter.argNames = ['inputArg', 'character'];

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or Object.equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.proto.padLeadingChar
     * @this {string}
     * @param {string} character
     * @param {number} size
     * @returns {string}
     */
    exports.String.proto.padLeadingChar = function (character, size) {
        var string = $onlyCoercibleToString(this),
            singleChar = $call(pCharAt, $onlyCoercibleToString(character), 0),
            count = $toInteger(size) - string.length;

        if (count < 0 || count === Infinity) {
            count = 0;
        }

        return exports.String.repeat(singleChar, count) + string;
    };

    exports.String.proto.padLeadingChar.argNames = ['character', 'size'];

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or Object.equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.padLeadingChar
     * @param {string} inputArg
     * @param {string} character
     * @param {number} size
     * @returns {string}
     */
    exports.String.padLeadingChar = $toMethod(exports.String.proto.padLeadingChar);
    exports.String.padLeadingChar.argNames = ['inputArg', 'character', 'size'];

    /**
     * Repeat the current string several times, return the new string.
     *
     * @function module:util-x~exports.String.proto.repeat
     * @this {string}
     * @param {number} count
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    exports.String.proto.repeat = $decide(
        // test
        $affirmBasic(base.String.repeat),

        // pass
        function () {
            return base.String.repeat;
        },

        // fail
        function () {
            /**
             * Repeat the current string several times, return the new string. Used by String.repeat
             *
             * @param {string} s
             * @param {number} count
             * @returns {string}
             */
            function stringRepeatRep(s, count) {
                var half,
                    val;

                if (count < 1 || s.length < 1) {
                    val = '';
                } else if (count % 2 === 1) {
                    count -= 1;
                    if (count > 0) {
                        val = stringRepeatRep(s, count) + s;
                    } else {
                        val = s;
                    }
                } else {
                    half = stringRepeatRep(s, count / 2);
                    val = half + half;
                }

                return val;
            }

            return function (count) {
                var thisString = $onlyCoercibleToString(this);

                count = $toInteger(count);
                if (count < 0) {
                    throw new CRangeError('repeat count must be non-negative');
                }

                if (count === Infinity) {
                    throw new CRangeError('repeat count must be less than infinity');
                }

                return stringRepeatRep(thisString, count);
            };
        },

        // argNames
        ['count'],

        // messgae
        'String.repeat shim'
    );

    /**
     * Repeat the current string several times, return the new string.
     *
     * @function module:util-x~exports.String.repeat
     * @param {string} string
     * @param {number} count
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    exports.String.repeat = $toMethod(exports.String.proto.repeat);
    exports.String.repeat.argNames = ['string', 'count'];

    /**
     * Repeat the current string several times, return the new string.
     *
     * @private
     * @function module:util-x~$repeat
     * @param {string} string
     * @param {number} count
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    $repeat = exports.String.repeat;

    /**
     * Determines whether a string begins with the characters of another string,
     * returning true or false as appropriate.
     *
     * @function module:util-x~exports.String.proto.startsWith
     * @this {string}
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     */
    exports.String.proto.startsWith = $decide(
        // test
        $affirmBasic(base.String.startsWith),

        // pass
        function () {
            return base.String.startsWith;
        },

        // fail
        function () {
            return function (searchString, position) {
                var thisStr = $onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    start = $min($max($toInteger(position), 0), thisStr.length);

                return $call(pSSlice, thisStr, start, start + searchStr.length) === searchStr;
            };
        },

        // argNames
        ['searchString', 'position'],

        // message
        'String.startsWith shim'
    );

    /**
     * Determines whether a string begins with the characters of another string,
     * returning true or false as appropriate.
     *
     * @function module:util-x~exports.String.startsWith
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     */
    exports.String.startsWith = $toMethod(exports.String.proto.startsWith);
    exports.String.startsWith.argNames = ['string', 'searchString', 'position'];

    /**
     * Determines whether a string ends with the characters of another string,
     * returning true or false as appropriate.
     *
     * @function module:util-x~exports.String.proto.endsWith
     * @this {string}
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     */
    exports.String.proto.endsWith = $decide(
        // test
        $affirmBasic(base.String.endsWith),

        // pass
        function () {
            return base.String.endsWith;
        },

        // fail
        function () {
            return function (searchString, position) {
                var thisStr = $onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    thisLen = thisStr.length,
                    end,
                    start;

                if ($isUndefined(position)) {
                    position = thisLen;
                } else {
                    position = $toInteger(position);
                }

                end = $min($max(position, 0), thisLen);
                start = end - searchStr.length;

                return start >= 0 && $call(pSSlice, thisStr, start, end) === searchStr;
            };
        },

        // argNames
        ['searchString', 'position'],

        // message
        'String.endsWith shim'
    );

    /**
     * Determines whether a string ends with the characters of another string,
     * returning true or false as appropriate.
     *
     * @function module:util-x~exports.String.endsWith
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     */
    exports.String.endsWith = $toMethod(exports.String.proto.endsWith);
    exports.String.endsWith.argNames = ['string', 'searchString', 'position'];

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     *
     * @function module:util-x~exports.String.proto.contains
     * @this {string}
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
     */
    exports.String.proto.contains = $decide(
        // test
        $affirmBasic(base.String.contains),

        // pass
        function () {
            return base.String.contains;
        },

        // fail
        function () {
            return function (searchString, position) {
                var str = $onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    length = str.length;

                if ($isUndefined(position)) {
                    position = 0;
                } else {
                    position = $toInteger(position);
                }

                return $call(pSIndexOf, str, searchStr, $min($max(position, 0), length)) !== -1;
            };
        },

        // argNames
        ['searchString', 'position'],

        // message
        'String.contains shim'
    );

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     *
     * @function module:util-x~exports.String.contains
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
     */
    exports.String.contains = $toMethod(exports.String.proto.contains);
    exports.String.proto.contains.argNames = ['string', 'searchString', 'position'];

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     *
     * @private
     * @function module:util-x~$stringContains
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
     */
    $stringContains = exports.String.contains;

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * Actually based on the ECMA6 draft, which only throws on undefined or null.
     *
     * @function module:util-x~exports.Object.getPrototypeOf
     * @param {Object} object
     * @returns {Prototype}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof
     */
    exports.Object.getPrototypeOf = (function () {
        var argNames = ['object'];

        return $decide(
            // test
            $affirmBasic(base.Object.getPrototypeOf),

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        var proto;

                        $affirm.doesNotThrow(function () {
                            proto = base.Object.getPrototypeOf(1);
                        }, 'get number literal proto');

                        $affirm.strictEqual(proto, protoNumber, 'work with number literal');

                        $affirm.doesNotThrow(function () {
                            proto = base.Object.getPrototypeOf(true);
                        }, 'get boolean literal proto');

                        $affirm.strictEqual(proto, protoBoolean, 'work with boolean literal');

                        $affirm.doesNotThrow(function () {
                            proto = base.Object.getPrototypeOf('');
                        }, 'get string literal proto');

                        $affirm.strictEqual(proto, protoString, 'work with string literal');
                    },

                    // pass
                    function () {
                        return base.Object.getPrototypeOf;
                    },

                    // fail
                    function () {
                        var mGetPrototypeOf = base.Object.getPrototypeOf;

                        return function (object) {
                            return mGetPrototypeOf($toObject(object));
                        };
                    },

                    // argNames
                    ['object'],

                    // message
                    'Object.getPrototypeOf primitive patch'
                );
            },

            // fail
            function () {
                return $decide(
                    // test
                    function () {
                        var proto;

                        $affirm.doesNotThrow(function () {
                            proto = protoObject[stringProto];
                        }, 'get __proto__');

                        $affirm.strictEqual(protoObject[stringProto], null, 'has __proto__');

                        $affirm.doesNotThrow(function () {
                            proto = $toObject(1)[stringProto];
                        }, 'get number literal proto');

                        $affirm.strictEqual(proto, protoNumber, 'work with number literal');

                        $affirm.doesNotThrow(function () {
                            proto = $toObject(true)[stringProto];
                        }, 'get boolean literal proto');

                        $affirm.strictEqual(proto, protoBoolean, 'work with boolean literal');

                        $affirm.doesNotThrow(function () {
                            proto = $toObject('')[stringProto];
                        }, 'get string literal proto');

                        $affirm.strictEqual(proto, protoString, 'work with string literal');
                        $affirm.ok(!testShims, 'testing shim');
                    },

                    // pass
                    function () {
                        return function (object) {
                            return $toObject(object)[stringProto];
                        };
                    },

                    // fail
                    function () {
                        var fixOpera10GetPrototypeOf;

                        if ($returnArgs().constructor.prototype !== protoObject) {
                            fixOpera10GetPrototypeOf = true;
                        }

                        return function (object) {
                            var obj = $toObject(object),
                                ctrProto,
                                protoObj;

                            if (obj === protoObject) {
                                return null;
                            }

                            if ($isFunction(obj.constructor)) {
                                if (fixOpera10GetPrototypeOf && $isArguments(obj)) {
                                    ctrProto = protoObject;
                                } else {
                                    ctrProto = obj.constructor.prototype;
                                }
                            } else {
                                protoObj = obj[stringProto];
                                if ($toStringTag(protoObj) === stringTagObject && !$isFunction(protoObj)) {
                                    ctrProto = protoObj;
                                } else {
                                    ctrProto = protoObject;
                                }
                            }

                            if (obj === ctrProto) {
                                return protoObject;
                            }

                            return ctrProto;
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.getPrototypeOf full shim'
                );
            },

            // argNames
            argNames,

            // message
            'Object.getPrototypeOf __proto__ shim'
        );
    }());

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * Actually based on the ECMA6 draft, which only throws on undefined or null.
     *
     * @private
     * @function module:util-x~$getPrototypeOf
     * @param {Object} object
     * @returns {Prototype}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
     */
    $getPrototypeOf = exports.Object.getPrototypeOf;

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     *
     * @function module:util-x~exports.Object.isPlainObject
     * @param {Object} object
     * @returns {boolean}
     */
    exports.Object.isPlainObject = function (object) {
        return $toStringTag(object) === stringTagObject && !$isFunction(object) && $getPrototypeOf(object) === protoObject;
    };

    exports.Object.isPlainObject.argNames = ['object'];
    $isPlainObject = exports.Object.isPlainObject;

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
     *
     * @function module:util-x~exports.Object.proto.hasOwnProperty
     * @this {Object}
     * @param {StringLike} property
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     */
    /*jslint todo: true */
    /** @todo: fix args and string enum bug */
    /*jslint todo: false */
    /* jshint -W001 */
    exports.Object.proto.hasOwnProperty = (function () {
        var argNames = ['property'];

        return $decide(
            // test
            function () {
                $affirm.ok(!hasDontEnumBug, 'hasDontEnumBug');
                $affirm.ok(!hasProtoEnumBug, 'hasProtoEnumBug');
            },

            // pass
            function () {
                return pHasOwn;
            },

            // fail
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.ok(!hasProtoEnumBug, 'hasProtoEnumBug');
                    },

                    // pass
                    function () {
                        return function (property) {
                            var prop = $toString(property);

                            return (prop === 'prototype' && $isFunction(this)) || $call(pHasOwn, this, prop);
                        };
                    },

                    // fail
                    function () {
                        return function (property) {
                            var prop = $toString(property),
                                hop = $call(pHasOwn, this, prop),
                                length,
                                index;


                            if (!hop && $hasProperty(this, prop)) {
                                length = $toLength(shadowed.length);
                                for (index = 0; index < length; index += 1) {
                                    if (prop === shadowed[index] && this[prop] !== $getPrototypeOf(this)[prop]) {
                                        hop = true;
                                        break;
                                    }
                                }
                            }

                            return hop;
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.hasOwnProperty hasDontEnumBug patch'
                );
            },

            // argNames
            argNames,

            // message
            'Object.hasOwnProperty hasDontEnumBug patch'
        );
    }());

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
     *
     * @function module:util-x~exports.Object.hasOwnProperty
     * @param {Object} object
     * @param {StringLike} property
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     */
    exports.Object.hasOwnProperty = $toMethod(exports.Object.proto.hasOwnProperty);
    exports.Object.hasOwnProperty.argNames = ['object', 'property'];
    /* jshint +W001 */

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
     *
     * @private
     * @function module:util-x~$hasOwn
     * @param {Object} object
     * @param {StringLike} property
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     */
    $hasOwn = exports.Object.hasOwnProperty;

    /**
     * @private
     * @function module:util-x~$specialToObject
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {(boolean|null)}
     */
    function $specialToObject(inputArg) {
        var object = $toObject(inputArg);

        if (!$hasOwnValidLength(object)) {
            throw new CTypeError('invalid length property: ' + $toString(object));
        }

        if ($isFunction(inputArg)) {
            throw new CTypeError('argument is a function: ' + $toString(object));
        }

        return object;
    }

    /**
     * The function takes one argument inputArg of an ArrayLike object and eturns true if length is zero
     * otherwise it returns false.
     *
     * @function module:util-x~exports.Array.isEmpty
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {boolean}
     */
    exports.Array.isEmpty = function (inputArg) {
        return !$specialToObject(inputArg).length;
    };

    exports.Array.isEmpty.argNames = ['inputArg'];

    /**
     * Returns the first element of an array i.e. array[0]
     * Use in combination .isEmpty
     *
     * @function module:util-x~exports.Array.proto.first
     * @this {module:util-x~ArrayLike}
     * @returns {*}
     */
    exports.Array.proto.first = function () {
        var object = $specialToObject(this);

        return $getItem(object, 0, $toStringTag(object));
    };

    /**
     * Returns the first element of an array i.e. array[0]
     * Use in combination .isEmpty
     *
     * @function module:util-x~exports.Array.first
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.first = $toMethod(exports.Array.proto.first);
    exports.Array.first.argNames = ['inputArg'];

    /**
     * Returns the first populated elements index in an array ignoring holes, otherwise -1.
     *
     * @function module:util-x~exports.Array.proto.firstIn
     * @this {module:util-x~ArrayLike}
     * @returns {number}
     */
    exports.Array.proto.firstIn = function () {
        var object = $specialToObject(this),
            length = object.length,
            stringTag = $toStringTag(object),
            rtn = -1,
            index;

        if (stringTag === stringTagString) {
            rtn = length - 1;
        } else {
            for (index = 0; index < length; index += 1) {
                if ($hasItem(object, index, stringTag)) {
                    rtn = index;
                    break;
                }
            }
        }

        return rtn;
    };

    /**
     * Returns the first populated elements index in an array ignoring holes, otherwise -1.
     *
     * @function module:util-x~exports.Array.firstIn
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.firstIn = $toMethod(exports.Array.proto.firstIn);
    exports.Array.firstIn.argNames = ['inputArg'];

    /**
     * Returns the last element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.proto.last
     * @this {module:util-x~ArrayLike}
     * @returns {*}
     */
    exports.Array.proto.last = function () {
        var object = $specialToObject(this);

        return $getItem(object, object.length - 1, $toStringTag(object));
    };

    /**
     * Returns the last element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.last
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.last = $toMethod(exports.Array.proto.last);
    exports.Array.last.argNames = ['inputArg'];

    /**
     * Returns the last populated elements index of an array ignoring holes, otherwise -1.
     *
     * @function module:util-x~exports.Array.proto.lastIn
     * @this {module:util-x~ArrayLike}
     * @returns {*}
     */
    exports.Array.proto.lastIn = function () {
        var object = $specialToObject(this),
            last = object.length - 1,
            stringTag = $toStringTag(object),
            rtn = -1,
            index;

        if (stringTag === stringTagString) {
            rtn = last;
        } else {
            for (index = last; index >= 0; index -= 1) {
                if ($hasItem(object, index, stringTag)) {
                    rtn = index;
                    break;
                }
            }
        }

        return rtn;
    };

    /**
     * Returns the last populated elements index of an array ignoring holes, otherwise -1.
     *
     * @function module:util-x~exports.Array.lastIn
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.lastIn = $toMethod(exports.Array.proto.lastIn);
    exports.Array.lastIn.argNames = ['inputArg'];

    /**
     * Compares operand a against operand b and returns true if they are deemed to be the same value.
     * Otherwise returns false.
     * @typedef {Function} module:util-x~equalityFn
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */

    /**
     * This method creates a new array of unique occurences using
     * the {@link module:util-x~exports.Object.strictEqual strictEqual} comparison.
     * The new array is ordered as per the original array.
     * A function can be provided as an alternative comparison method.
     *
     * @function module:util-x~exports.Array.proto.unique
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined.
     * @param {module:util-x~equalityFn} [equalFn]
     * @throws {TypeError} If equalFn is not a {@link Function function}.
     * @param {*} [thisArg]
     * @returns {Array}
     */
    exports.Array.proto.unique = (function () {
        return function (equalFn, thisArg) {
            var object = $toObject(this),
                stringTag,
                length,
                index,
                arr,
                idx,
                val,
                it;

            if ($isUndefined(equalFn)) {
                equalFn = $strictEqual;
            }

            $throwIfNotFunction(equalFn);
            arr = [];
            length = $toLength(object.length);
            stringTag = $toStringTag(object);
            for (index = 0; index < length; index += 1) {
                if ($hasItem(object, index, stringTag)) {
                    it = $getItem(object, index, stringTag);
                    val = true;
                    for (idx = 0; idx < length; idx += 1) {
                        if (idx < index && $hasItem(object, idx, stringTag) && $call(equalFn, thisArg, it, $getItem(object, idx, stringTag))) {
                            val = false;
                            break;
                        }
                    }

                    if (val) {
                        $push(arr, it);
                    }
                }
            }

            return arr;
        };
    }());

    exports.Array.proto.unique.argNames = ['equalFn', 'thisArg'];

    /**
     * This method creates a new array of unique occurences using
     * the {@link module:util-x~exports.Object.strictEqual strictEqual} comparison.
     * The new array is ordered as per the original array.
     * A function can be provided as an alternative comparison method.
     *
     * @function module:util-x~exports.Array.unique
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined.
     * @param {module:util-x~equalityFn} [equalFn]
     * @throws {TypeError} If equalFn is not a {@link Function function}.
     * @param {*} [thisArg]
     * @returns {Array}
     */
    exports.Array.unique = $toMethod(exports.Array.proto.unique);
    exports.Array.proto.unique.argNames = ['array', 'equalFn', 'thisArg'];

    /**
     * Returns a property descriptor for an own property (that is, one directly present on an object,
     * not present by dint of being along an object's prototype chain) of a given object.
     * On environments that do not support it natively, this is just a sham to allow code to work.
     *
     * @function module:util-x~exports.Object.getOwnPropertyDescriptor
     * @param {Object} object
     * @param {string} property
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
     */
    exports.Object.getOwnPropertyDescriptor = (function () {
        var argNames = ['object', 'property'];

        return $decide(
            // test
            function () {
                $affirmBasic(base.Object.getOwnPropertyDescriptor)();

                var gOPDsentinel = {
                        sentinel: null
                    },
                    gOPDarray = [10, 20, 30];

                gOPDarray[4] = Undefined;

                $affirm.strictEqual(base.Object.getOwnPropertyDescriptor(gOPDsentinel, 'sentinel').value, null, 'test1');
                $affirm.strictEqual(base.Object.getOwnPropertyDescriptor(gOPDarray, 2).value, 30, 'test2');
                $affirm.strictEqual(base.Object.getOwnPropertyDescriptor(gOPDarray, '2').value, 30, 'test3');
                $affirm.ok($call(pHasOwn, base.Object.getOwnPropertyDescriptor(gOPDarray, 4), 'value'), 'test4');
                $affirm.strictEqual(base.Object.getOwnPropertyDescriptor(gOPDarray, 4).value, Undefined, 'test5');
                $affirm.strictEqual(base.Object.getOwnPropertyDescriptor(gOPDarray, 5), Undefined, 'test6');
            },

            // pass
            function () {
                hasWorkingGOPD = true;
                return $decide(
                    // test
                    function () {
                        // This is an intrusive patch but if it can be done correctly then it's worth it.
                        try {
                            if (base.Object.getOwnPropertyDescriptor(protoFunction, 'length').writable) {
                                base.Object.defineProperty(protoFunction, 'length', propConstant);
                                if (base.Object.getOwnPropertyDescriptor(protoFunction, 'length').writable) {
                                    throw new CError('Still writable');
                                }
                            }
                        } catch (eLengthPatch) {
                            $conlog('Failed to patch Function.prototype.length', eLengthPatch);
                        }

                        $affirm.ok(!(base.Object.getOwnPropertyDescriptor(function () { return; }, 'length').writable), 'Function.length should be read only.');
                    },

                    // pass
                    function () {
                        return $decide(
                            // test
                            function () {
                                $affirm.throws(function () {
                                    base.Object.getOwnPropertyDescriptor(Undefined, 'name');
                                }, CTypeError, 'undefined');

                                $affirm.throws(function () {
                                    base.Object.getOwnPropertyDescriptor(null, 'name');
                                }, CTypeError, 'null');

                                $affirm.doesNotThrow(function () {
                                    base.Object.getOwnPropertyDescriptor(42, 'name');
                                }, 'number');

                                $affirm.doesNotThrow(function () {
                                    base.Object.getOwnPropertyDescriptor(true, 'name');
                                }, 'boolean');

                                $affirm.doesNotThrow(function () {
                                    base.Object.getOwnPropertyDescriptor('a', 'name');
                                }, 'string');
                            },

                            // pass
                            function () {
                                return base.Object.getOwnPropertyDescriptor;
                            },

                            // fail
                            function () {
                                var mGetOwnPropertyDescriptor = base.Object.getOwnPropertyDescriptor;

                                return function (object, property) {
                                    return mGetOwnPropertyDescriptor($toObject(object), property);
                                };
                            },

                            // argNames
                            argNames,

                            // message
                            'Object.getOwnPropertyDescriptor throws patch'
                        );
                    },

                    // fail
                    function () {
                        var mGetOwnPropertyDescriptor = base.Object.getOwnPropertyDescriptor;

                        return function (object, property) {
                            var obj = $toObject(object),
                                descriptor = mGetOwnPropertyDescriptor(obj, property);

                            if (property === 'length' && descriptor.writable && $isFunction(obj)) {
                                descriptor.writable = false;
                            }

                            return descriptor;
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.getOwnPropertyDescriptor read only patch'
                );
            },

            // fail
            function () {
                var mLookupGetter = base.Object.lookupSetter,
                    mLookupSetter = base.Object.lookupSetter;

                return function (object, property) {
                    var obj = $toObject(object),
                        descriptor,
                        prototype,
                        getter,
                        setter;

                    if ($hasOwn(obj, property)) {
                        descriptor = {};
                        descriptor.configurable = true;
                        descriptor.enumerable = true;
                        if (hasGetSet) {
                            prototype = obj[stringProto];
                            obj[stringProto] = protoObject;
                            getter = $call(mLookupGetter, obj, property);
                            setter = $call(mLookupSetter, obj, property);
                            if ($isUndefined(prototype)) {
                                $deleteProperty(obj, stringProto);
                            } else {
                                obj[stringProto] = prototype;
                            }

                            if ($isNative(getter) || $isNative(setter)) {
                                if ($isNative(getter)) {
                                    descriptor.get = getter;
                                }

                                if ($isNative(setter)) {
                                    descriptor.set = setter;
                                }
                            }
                        }

                        descriptor.value = obj[property];
                        descriptor.writable = true;
                    }

                    return descriptor;
                };
            },

            // argNames
            argNames,

            //message
            'Object.getOwnPropertyDescriptor sham'
        );
    }());

    /**
     * This method changes the content of an array,
     * adding new elements while removing old elements.
     *
     * @function module:util-x~exports.Array.proto.splice
     * @this {module:util-x~ArrayLike}
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    exports.Array.proto.splice = (function () {
        var argNames = ['start', 'deleteCount'],
            readOnlyLengths = {};

        // Used to identify `toStringTag` values of object with read only length.
        readOnlyLengths[stringTagFunction] = true;
        readOnlyLengths[stringTagString] = true;
        readOnlyLengths[stringTagArrayBuffer] = true;
        readOnlyLengths[stringTagFloat32Array] = true;
        readOnlyLengths[stringTagFloat64Array] = true;
        readOnlyLengths[stringTagInt8Array] = true;
        readOnlyLengths[stringTagInt16Array] = true;
        readOnlyLengths[stringTagInt32Array] = true;
        readOnlyLengths[stringTagUint8Array] = true;
        readOnlyLengths[stringTagUint8ClampedArray] = true;
        readOnlyLengths[stringTagUint16Array] = true;
        readOnlyLengths[stringTagUint32Array] = true;
        readOnlyLengths[stringTagHTMLCollection] = true;
        readOnlyLengths[stringTagNodeList] = true;

        // this is by no means perfect but it's better than nothing
        function readOnlyLength(inputArg) {
            var stringTag = $toStringTag(inputArg);

            if (readOnlyLengths[stringTag] || (hasWorkingGOPD && $call(pHasOwn, inputArg, 'length') && !exports.Object.getOwnPropertyDescriptor(inputArg, 'length').writable)) {
                throw new CTypeError('Cannot assign to read only property \'length\' of ' + stringTag);
            }

            return inputArg;
        }

        return $decide(
            // test
            function () {
                $affirmBasic(base.Array.splice)();
                $affirm.strictEqual($call(base.Array.splice, [1, 2], 0).length, 2, 'correct length');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.strictEqual($call(base.Array.splice, [1, 2]).length, 0, 'is zero');

                        $affirm.throws(function () {
                            $call(base.Array.splice, 'abc');
                        }, CTypeError, 'string should throw');

                        $affirm.throws(function () {
                            $call(base.Array.splice, function () { return; });
                        }, CTypeError, 'function should throw');
                    },

                    // pass
                    function () {
                        return base.Array.splice;
                    },

                    // fail
                    function () {
                        var pSplice = base.Array.splice;

                        return function () {
                            var object = readOnlyLength($toObject(this)),
                                val;

                            if ($toLength(arguments.length) < 1) {
                                val = [];
                            } else {
                                val = $apply(pSplice, object, arguments);
                            }

                            return val;
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Array.splice patch'
                );
            },

            // fail
            function () {
                return function (start, deleteCount) {
                    var object = readOnlyLength($toObject(this)),
                        length = $toLength(object.length),
                        removed = [],
                        relativeStart = $toInteger(start),
                        stringTag = $toStringTag(object),
                        actualStart,
                        actualDeleteCount,
                        k = 0,
                        from,
                        argLength = $toLength(arguments.length),
                        item = 2,
                        itemCount = $max(argLength - item, 0),
                        to,
                        loopCache;

                    if (argLength < 1) {
                        return removed;
                    }

                    if (relativeStart < 0) {
                        actualStart = $max(length + relativeStart, 0);
                    } else {
                        actualStart = $min(relativeStart, length);
                    }

                    if (argLength < 2) {
                        deleteCount = length - actualStart;
                    }

                    actualDeleteCount = $min($max($toLength(deleteCount), 0), length - actualStart);
                    while (k < actualDeleteCount) {
                        from = actualStart + k;
                        if ($hasItem(object, from, stringTag)) {
                            $push(removed, $getItem(object, from, stringTag));
                        }

                        k += 1;
                    }

                    if (itemCount < actualDeleteCount) {
                        k = actualStart;
                        loopCache = length - actualDeleteCount;
                        while (k < loopCache) {
                            from = k + actualDeleteCount;
                            to = k + itemCount;
                            if ($hasItem(object, from, stringTag)) {
                                object[to] = $getItem(object, from, stringTag);
                            } else {
                                $deleteProperty(object, to);
                            }

                            k += 1;
                        }

                        k = length;
                        loopCache = length - actualDeleteCount + itemCount;
                        while (k > loopCache) {
                            $deleteProperty(object, k - 1);
                            k -= 1;
                        }
                    } else if (itemCount > actualDeleteCount) {
                        k = length - actualDeleteCount;
                        while (k > actualStart) {
                            from = k + actualDeleteCount - 1;
                            to = k + itemCount - 1;
                            if ($hasItem(object, from, stringTag)) {
                                object[to] = $getItem(object, from, stringTag);
                            } else {
                                $deleteProperty(object, to);
                            }

                            k -= 1;
                        }
                    }

                    k = actualStart;
                    while (item < argLength) {
                        object[k] = $getArgItem(arguments, item);
                        k += 1;
                        item += 1;
                    }

                    object.length = $toLength(length - actualDeleteCount + itemCount);

                    return removed;
                };
            },

            // argNames
            argNames,

            // message
            'Array.splice shim'
        );
    }());

    /**
     * This method changes the content of an array,
     * adding new elements while removing old elements.
     *
     * @function module:util-x~exports.Array.splice
     * @param {module:util-x~ArrayLike} array
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    exports.Array.splice = $toMethod(exports.Array.proto.splice);
    exports.Array.splice.argNames = ['array', 'start', 'deleteCount'];

    /**
     * This) method changes the content of an array,
     * adding new elements while removing old elements.
     *
     * @private
     * @function module:util-x~$splice
     * @param {module:util-x~ArrayLike} array
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    $splice = exports.Array.splice;

    /**
     * Checks if the supplied function suffers from the V8 strict mode bug.
     *
     * @private
     * @function module:util-x~$testV8StrictBug
     * @param {Function} fn
     * @returns {boolean}
     */
    function $testV8StrictBug(fn) {
        var bug = false;

        if (isStrictMode) {
            $affirm.doesNotThrow(function () {
                $call(fn, [1], function () {
                    bug = $typeOf(this) === 'object';
                }, 'foo');
            }, 'should not throw when calling function');
        }

        return bug;
    }

    /**
     * @private
     * @function module:util-x~$affirmArrayMethodTestsBasic
     * @param {Function} [thisArg]
     * @returns {Function}
     */
    function $affirmArrayMethodTestsBasic(Fn) {
        return function () {
            $affirmBasic(Fn)();
            $affirm.ok(!$testV8StrictBug(Fn), 'V8 bug');
        };
    }

    /**
     * @private
     * @function module:util-x~$affirmArrayMethodTestsObject
     * @param {Function} [thisArg]
     * @returns {Function}
     */
    function $affirmArrayMethodTestsObject(Fn) {
        return function () {
            $affirmArrayMethodTestsBasic(Fn)();

            var result;

            $affirm.doesNotThrow(function () {
                $call(Fn, 'foo', function () {
                    result = arguments[$toLength(arguments.length) - 1];
                });
            }, 'should not throw when calling function');

            $affirm.strictEqual($typeOf(result), 'object', 'is object');
            $affirm.strictEqual($toStringTag(result), stringTagString, 'is string');
        };
    }

    /**
     * forEach executes the callback function once for each array element;
     * unlike every and some it does not return a value.
     * If a thisArg parameter is provided to forEach, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~forEachCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that forEach was called upon.
     * @returns {undefined}
     */

    /**
     * Executes a provided function once per array element.
     *
     * @function module:util-x~exports.Array.proto.forEach
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~forEachCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    exports.Array.proto.forEach = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.forEach),

        // pass
        function () {
            return base.Array.forEach;
        },

        //fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    length,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                for (index = 0; index < length; index += 1) {
                    if ($hasItem(object, index, stringTag)) {
                        $call(fn, thisArg, $getItem(object, index, stringTag), index, object);
                    }
                }
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.forEach shim'
    );

    /**
     * Executes a provided function once per array element.
     *
     * @function module:util-x~exports.Array.forEach
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~forEachCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    exports.Array.forEach = $toMethod(exports.Array.proto.forEach);
    exports.Array.forEach.argNames = ['array', 'fn', 'thisArg'];

    /**
     * Executes a provided function once per array element.
     *
     * @private
     * @function module:util-x~$forEach
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~forEachCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    $forEach = exports.Array.forEach;

    /**
     * Executes a provided function once per array element position.
     * Unlike forEach, this method treats the array as dense and allows a some like break.
     *
     * @function module:util-x~exports.Array.proto.forAll
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~someCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     */
    exports.Array.proto.forAll = function (fn, thisArg) {
        var object = $toObject(this),
            stringTag,
            length,
            index,
            val;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        /*
        if (length) {
            thisArg = $toObjectCallFix(thisArg);
        }
        */

        stringTag = $toStringTag(object);
        val = false;
        for (index = 0; index < length; index += 1) {
            val = !!$call(fn, thisArg, $getItem(object, index, stringTag), index, object);
            if (val) {
                break;
            }
        }

        return val;
    };

    exports.Array.proto.forAll.argNames = ['fn', 'thisArg'];

    /**
     * Executes a provided function once per array element position.
     * Unlike forEach, this method treats the array as dense and allows a some like break.
     *
     * @function module:util-x~exports.Array.forAll
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~someCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     */
    exports.Array.forAll = $toMethod(exports.Array.proto.forAll);
    exports.Array.forAll.argNames = ['array', 'fn', 'thisArg'];

    /**
     * some executes the callback function once for each element present in the array until it finds one
     * where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~someCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that some was called upon.
     * @returns {boolean}
     */

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.proto.some
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~someCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     */
    exports.Array.proto.some = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.some),

        // pass
        function () {
            return base.Array.some;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    val,
                    length,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                val = false;
                for (index = 0; index < length; index += 1) {
                    if ($hasItem(object, index, stringTag)) {
                        val = !!$call(fn, thisArg, $getItem(object, index, stringTag), index, object);
                        if (val) {
                            break;
                        }
                    }
                }

                return val;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.some shim'
    );

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.some
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~someCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     */
    exports.Array.some = $toMethod(exports.Array.proto.some);
    exports.Array.some.argNames = ['array', 'fn', 'thisArg'];

    /**
     * The find method executes the callback function once for each element present in the array until it
     * finds one where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~findCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that find was called upon.
     * @returns {boolean}
     */

    /**
     * This method returns a value in the array, if an element in the array satisfies the provided testing function.
     * Otherwise undefined is returned.
     *
     * @function module:util-x~exports.Array.proto.find
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~findCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
     */
    exports.Array.proto.find = $decide(
        // test
        function () {
            $affirmArrayMethodTestsBasic(base.Array.find)();

            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                foundIndex;

            $affirm.doesNotThrow(function () {
                foundIndex = $call(base.Array.find, obj, function () {
                    throw new CError('should not reach here');
                });
            }, 'should not iterate object with negative length');

            $affirm.strictEqual(foundIndex, -1, 'object with negative length');
        },

        // pass
        function () {
            return base.Array.find;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    length,
                    index,
                    val,
                    it;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                for (index = 0; index < length; index += 1) {
                    it = $getItem(object, index, stringTag);
                    if ($call(fn, thisArg, it, index, object)) {
                        val = it;
                        break;
                    }
                }

                return val;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.find shim'
    );

    /**
     * This method returns a value in the array, if an element in the array satisfies the provided testing function.
     * Otherwise undefined is returned.
     *
     * @function module:util-x~exports.Array.find
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~findCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
     */
    exports.Array.find = $toMethod(exports.Array.proto.find);
    exports.Array.find.argNames = ['array', 'fn', 'thisArg'];

    /**
     * The findIndex method executes the callback function once for each element present in the array until it
     * finds one where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~findIndexCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that findIndex was called upon.
     * @returns {boolean}
     */

    /**
     * This method returns an index in the array, if an element in the array satisfies the provided testing function.
     * Otherwise -1 is returned.
     *
     * @function module:util-x~exports.Array.proto.findIndex
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~findIndexCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    exports.Array.proto.findIndex = $decide(
        // test
        function () {
            $affirmArrayMethodTestsBasic(base.Array.findIndex)();

            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                foundIndex;

            $affirm.doesNotThrow(function () {
                foundIndex = $call(base.Array.findIndex, obj, function () {
                    throw new CError('should not reach here');
                });
            }, 'should not iterate object with negative length');

            $affirm.strictEqual(foundIndex, -1, 'object with negative length');
        },

        // pass
        function () {
            return base.Array.findIndex;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    val,
                    length,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                val = -1;
                for (index = 0; index < length; index += 1) {
                    if ($call(fn, thisArg, $getItem(object, index, stringTag), index, object)) {
                        val = index;
                        break;
                    }
                }

                return val;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.findIndex'
    );

    /**
     * This method returns an index in the array, if an element in the array satisfies the provided testing function.
     * Otherwise -1 is returned.
     *
     * @function module:util-x~exports.Array.findIndex
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~findIndexCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    exports.Array.findIndex = $toMethod(exports.Array.proto.findIndex);
    exports.Array.findIndex.argNames = ['array', 'fn', 'thisArg'];

    /**
     * from calls a provided callback function once for each element in an arrayLike object, in order,
     * and constructs a new array from the results.
     * @typedef {Function} module:util-x~fromCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @returns {*}
     */

    /**
     * Converts a single argument that is an array-like object or list (eg. arguments, NodeList,
     * DOMTokenList (used by classList), NamedNodeMap (used by attributes property)) into a new Array() and returns it.
     *
     * @function module:util-x~exports.Array.from
     * @param {module:util-x~ArrayLike} arrayLike
     * @param {module:util-x~fromCallback} [mapfn]
     * @param {*} [thisArg]
     * @returns {Array}
     */
    exports.Array.from = $decide(
        // test
        $affirmBasic(base.Array.from),

        // pass
        function () {
            return base.Array.from;
        },

        // fail
        function () {
            return function (arrayLike, mapfn, thisArg) {
                var object = $toObject(arrayLike),
                    stringTag,
                    length,
                    array,
                    mapping,
                    index,
                    it;

                if (!$isUndefined(mapfn)) {
                    mapping = !!$throwIfNotFunction(mapfn);
                }

                length = $toLength(object.length);
                if ($isFunction(this)) {
                    array = new this(length);
                } else {
                    array = [];
                }

                array.length = length;
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                for (index = 0; index < length; index += 1) {
                    it = $getItem(object, index, stringTag);
                    if (mapping) {
                        it = $call(mapfn, thisArg, it, index);
                    }

                    array[index] = it;
                }

                return array;
            };
        },

        // argNames
        ['arrayLike', 'mapfn', 'thisArg'],

        // message
        'Array.from shim'
    );

    /**
     * The every method executes the provided callback function once for each element present in the array
     * until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean).
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~everyCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that every was called upon.
     * @returns {*}
     */

    /**
     * Tests whether all elements in the array pass the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.proto.every
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~everyCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    exports.Array.proto.every = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.every),

        // pass
        function () {
            return base.Array.every;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    length,
                    val,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                val = true;
                for (index = 0; index < length; index += 1) {
                    if ($hasItem(object, index, stringTag)) {
                        val = !!$call(fn, thisArg, $getItem(object, index, stringTag), index, object);
                        if (!val) {
                            break;
                        }
                    }
                }

                return val;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.every shim'
    );

    /**
     * Tests whether all elements in the array pass the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.every
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~everyCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    exports.Array.every = $toMethod(exports.Array.proto.every);
    exports.Array.every.argNames = ['array', 'fn', 'thisArg'];

    /**
     * map calls a provided callback function once for each element in an arrayLike object, in order,
     * and constructs a new array from the results.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} module:util-x~mapCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that map was called upon.
     * @returns {*}
     */

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     *
     * @function module:util-x~exports.Array.proto.map
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~mapCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    exports.Array.proto.map = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.map),

        // pass
        function () {
            return base.Array.map;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    length,
                    arr,
                    index;

                $throwIfNotFunction(fn);
                arr = [];
                arr.length = length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                for (index = 0; index < length; index += 1) {
                    if ($hasItem(object, index, stringTag)) {
                        arr[index] =  $call(fn, thisArg, $getItem(object, index, stringTag), index, object);
                    }
                }

                return arr;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.map shim'
    );

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     *
     * @function module:util-x~exports.Array.map
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~mapCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    exports.Array.map = $toMethod(exports.Array.proto.map);
    exports.Array.map.argNames = ['array', 'fn', 'thisArg'];

    /**
     * Shortcut
     * Creates a new array with the results of calling a provided function on every element in this array.
     *
     * @private
     * @function module:util-x~$map
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~mapCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    $map = exports.Array.map;

    /**
     * This method creates a new Array instance with a variable number of arguments,
     * regardless of number or type of the arguments.
     *
     * @function module:util-x~exports.Array.of
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
     */
    exports.Array.of = $decide(
        // test
        $affirmBasic(base.Array.of),

        // pass
        function () {
            return base.Array.of;
        },

        // fail
        function () {
            return function () {
                return $argSlice(arguments);
            };
        },

        // argNames
        ['varArgs'],

        // message
        'Array.of shim'
    );

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.proto.filter
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     */
    exports.Array.proto.filter = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.filter),

        // pass
        function () {
            return base.Array.filter;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = $toObject(this),
                    stringTag,
                    length,
                    arr,
                    index,
                    it;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                /*
                if (length) {
                    thisArg = $toObjectCallFix(thisArg);
                }
                */

                stringTag = $toStringTag(object);
                arr = [];
                for (index = 0; index < length; index += 1) {
                    if ($hasItem(object, index, stringTag)) {
                        it = $getItem(object, index, stringTag);
                        if ($call(fn, thisArg, it, index, object)) {
                            $push(arr, it);
                        }
                    }
                }

                return arr;
            };
        },

        // argNames
        ['fn', 'thisArg'],

        // message
        'Array.filter shim'
    );

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     *
     * @function module:util-x~exports.Array.filter
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     */
    exports.Array.filter = $toMethod(exports.Array.proto.filter);
    exports.Array.filter.argNames = ['array', 'fn', 'thisArg'];

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     *
     * @function module:util-x~exports.Array.proto.reduce
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    exports.Array.proto.reduce = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.reduce),

        // pass
        function () {
            return base.Array.reduce;
        },

        // fail
        function () {
            var reduceTypeErrorMessage = 'reduce of empty array with no initial value';

            return function (fn, initialValue) {
                var object = $toObject(this),
                    stringTag,
                    accumulator,
                    length,
                    kPresent,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                if (!length && $toLength(arguments.length) === 1) {
                    throw new CTypeError(reduceTypeErrorMessage);
                }

                index = 0;
                stringTag = $toStringTag(object);
                if ($toLength(arguments.length) > 1) {
                    accumulator = initialValue;
                } else {
                    kPresent = false;
                    while (!kPresent && index < length) {
                        kPresent = $hasItem(object, index, stringTag);
                        if (kPresent) {
                            accumulator = $getItem(object, index, stringTag);
                            index += 1;
                        }
                    }

                    if (!kPresent) {
                        throw new CTypeError(reduceTypeErrorMessage);
                    }
                }

                while (index < length) {
                    if ($hasItem(object, index, stringTag)) {
                        accumulator = $call(fn, Undefined, accumulator, $getItem(object, index, stringTag), index, object);
                    }

                    index += 1;
                }

                return accumulator;
            };
        },

        // argNames
        ['fn', 'initialValue'],

        // message
        'Array.reduce shim'
    );

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     *
     * @function module:util-x~exports.Array.reduce
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    exports.Array.reduce = $toMethod(exports.Array.proto.reduce);
    exports.Array.reduce.argNames = ['array', 'fn', 'initialValue'];

    /**
     * this method applies a function against an accumulator and
     * each value of the array (from left-to-right) as to reduce it to a single value.
     *
     * @function module:util-x~exports.Array.proto.reduceRight
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
     */
    exports.Array.proto.reduceRight = $decide(
        // test
        $affirmArrayMethodTestsObject(base.Array.reduceRight),

        // pass
        function () {
            return base.Array.reduceRight;
        },

        // fail
        function () {
            var reduceRightTypeErrorMessage = 'reduceRight of empty array with no initial value';

            return function (fn, initialValue) {
                var object = $toObject(this),
                    stringTag,
                    accumulator,
                    length,
                    kPresent,
                    index;

                $throwIfNotFunction(fn);
                length = $toLength(object.length);
                if (!length && $toLength(arguments.length) === 1) {
                    throw new CTypeError(reduceRightTypeErrorMessage);
                }

                stringTag = $toStringTag(object);
                index = length - 1;
                if ($toLength(arguments.length) > 1) {
                    accumulator = initialValue;
                } else {
                    kPresent = false;
                    while (!kPresent && index >= 0) {
                        kPresent = $hasItem(object, index, stringTag);
                        if (kPresent) {
                            accumulator = $getItem(object, index, stringTag);
                            index -= 1;
                        }
                    }

                    if (!kPresent) {
                        throw new CTypeError(reduceRightTypeErrorMessage);
                    }
                }

                while (index >= 0) {
                    if ($hasItem(object, index, stringTag)) {
                        accumulator = $call(fn, Undefined, accumulator, $getItem(object, index, stringTag), index, object);
                    }

                    index -= 1;
                }

                return accumulator;
            };
        },

        // argNames
        ['fn', 'initialValue'],

        // message
        'Array.reduceRight shim'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} applies a function against an accumulator and
     * each value of the array (from left-to-right) as to reduce it to a single value.
     *
     * @function module:util-x~exports.Array.reduceRight
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
     */
    exports.Array.reduceRight = $toMethod(exports.Array.proto.reduceRight);
    exports.Array.reduceRight.argNames = ['array', 'fn', 'initialValue'];

    /**
     * Returns a safe integer for the supplied argument.
     *
     * @private
     * @@function module:util-x~clampSafeInt
     * @param {number} number
     * @returns {number}
     */
    function clampSafeInt(number) {
        return $min($max($toInteger(number), MIN_SAFE_INTEGER), MAX_SAFE_INTEGER);
    }

    /**
     * Returns a uniformly distributed random safe integer between the supplied min and max arguments.
     * Max: MAX_SAFE_INTEGER, Min: MIN_SAFE_INTEGER
     * If min is not supplied then 0 is used.
     *
     * @function module:util-x~exports.Number.randomInt
     * @param {number} [min]
     * @param {number} max
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    exports.Number.randomInt = function (min, max) {
        if ($toLength(arguments.length) === 1) {
            max = min;
            min = 0;
        }

        min = clampSafeInt(min);
        max = clampSafeInt(max);
        if (min === max) {
            return min;
        }

        var tmp = max - min + 1,
            val;

        if (tmp > MAX_SAFE_INTEGER) {
            tmp = new BigNum(max).minus(min).plus(1);
            val  = $floor(tmp.times($random())) + min;
        } else {
            val = $floor($random() * tmp + min);
        }

        return val;
    };

    exports.Number.randomInt.argNames = ['min', 'max'];

    /**
     * Shortcut
     * Returns a uniformly distributed random safe integer between the supplied min and max arguments.
     * Max: MAX_SAFE_INTEGER, Min: MIN_SAFE_INTEGER
     * If min is not supplied then 0 is used.
     *
     * @private
     * @function module:util-x~$randomInt
     * @param {number} [min]
     * @param {number} max
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
     */
    $randomInt = exports.Number.randomInt;
    /**
     * Default compare function for stableSort.
     *
     * @private
     * @function module:util-x~$ascending
     * @param {*} left
     * @param {*} right
     * @returns {number}
     */
    function $ascending(left, right) {
        var leftS = $toString(left),
            rightS = $toString(right),
            val;

        if (leftS === rightS) {
            val = +0;
        } else if (leftS < rightS) {
            val = -1;
        } else {
            val = 1;
        }

        return val;
    }

    /**
     * Default compare function for stableSort.
     *
     * @private
     * @function module:util-x~$descending
     * @param {*} left
     * @param {*} right
     * @returns {number}
     */
    function $descending(left, right) {
        var leftS = $toString(left),
            rightS = $toString(right),
            val;

        if (leftS === rightS) {
            val = +0;
        } else if (leftS < rightS) {
            val = 1;
        } else {
            val = -1;
        }

        return val;
    }

    /**
     * This method sorts the elements of the array in place and returns the array.
     * This is a stable sort. The default sort order is lexicographic (not numeric).
     *
     * @function module:util-x~exports.Array.proto.stableSort
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Function} [compareFN]
     * @throws {TypeError} If compareFN is not undefined or is not a function
     * @returns {module:util-x~ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * @see http://en.wikipedia.org/wiki/Sorting_algorithm#Stability
     */
    exports.Array.proto.stableSort = (function () {
        /**
         * sortCompare function for stableSort.
         *
         * @private
         * @function
         * @param {*} object
         * @param {*} left
         * @param {*} right
         * @returns {number}
         */
        function sortCompare(left, right) {
            var hasj = $call(pHasOwn, left, 0),
                hask = $call(pHasOwn, right, 0),
                typex,
                typey,
                val;

            if (!hasj && !hask) {
                val = +0;
            } else if (!hasj) {
                val = 1;
            } else if (!hask) {
                val = -1;
            } else {
                typex = typeof left[0];
                typey = typeof right[0];
                if (typex === 'undefined' && typey === 'undefined') {
                    val = +0;
                } else if (typex === 'undefined') {
                    val = 1;
                } else if (typey === 'undefined') {
                    val = -1;
                }
            }

            return val;
        }

        /**
         * merge function for stableSort.
         *
         * @private
         * @function
         * @param {module:util-x~ArrayLike} left
         * @param {module:util-x~ArrayLike} right
         * @param {Function} comparison
         * @returns {Array}
         */
        function merge(left, right, comparison) {
            var result = [],
                next = 0,
                sComp;

            result.length = $toLength($toLength(left.length) + $toLength(right.length));
            while ($toLength(left.length) && $toLength(right.length)) {
                sComp = sortCompare(left, right);
                if (typeof sComp !== 'number') {
                    if (comparison(left[0], right[0]) <= 0) {
                        if ($call(pHasOwn, left, 0)) {
                            result[next] = left[0];
                        }

                        $shift(left);
                    } else {
                        if ($call(pHasOwn, right, 0)) {
                            result[next] = right[0];
                        }

                        $shift(right);
                    }
                } else if (sComp <= 0) {
                    if ($call(pHasOwn, left, 0)) {
                        result[next] = left[0];
                    }

                    $shift(left);
                } else {
                    if ($call(pHasOwn, right, 0)) {
                        result[next] = right[0];
                    }

                    $shift(right);
                }

                next += 1;
            }

            while ($toLength(left.length)) {
                if ($call(pHasOwn, left, 0)) {
                    result[next] = left[0];
                }

                $shift(left);
                next += 1;
            }

            while ($toLength(right.length)) {
                if ($call(pHasOwn, right, 0)) {
                    result[next] = right[0];
                }

                $shift(right);
                next += 1;
            }

            return result;
        }

        /**
         * mergeSort function for stableSort.
         *
         * @private
         * @function module:util-x~mergeSort
         * @param {module:util-x~ArrayLike} array
         * @param {Function} comparefn
         * @returns {Array}
         */
        function mergeSort(array, comparefn) {
            var length = $toLength(array.length),
                middle,
                front,
                back,
                val;

            if (length < 2) {
                val = $slice(array);
            } else {
                middle = $ceil(length / 2);
                front = $slice(array, 0, middle);
                back = $slice(array, middle);
                val = merge(mergeSort(front, comparefn), mergeSort(back, comparefn), comparefn);
            }

            return val;
        }

        return function (comparefn) {
            var object = $toObject(this),
                length = $toLength(object.length),
                index,
                sorted;

            if ($isUndefined(comparefn)) {
                comparefn = $ascending;
            }

            $throwIfNotFunction(comparefn);
            if (length > 1) {
                sorted = mergeSort(object, comparefn);
                if ($isArray(object) || $isArguments(object)) {
                    object.length = 0;
                } else {
                    $splice(object, 0, $toLength(object.length));
                }

                object.length = $toLength(sorted.length);
                for (index = 0; index < length; index += 1) {
                    if ($call(pHasOwn, sorted, index)) {
                        object[index] = sorted[index];
                    }
                }
            }

            return object;
        };
    }());

    exports.Array.proto.stableSort.argNames = ['comparefn'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} method sorts the elements of an array in place and returns the array.
     * This is a stable sort. The default sort order is lexicographic (not numeric).
     *
     * @function module:util-x~exports.Array.stableSort
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} [compareFN]
     * @throws {TypeError} If compareFN is defined and is not a function
     * @returns {module:util-x~ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * @see http://en.wikipedia.org/wiki/Sorting_algorithm#Stability
     */
    exports.Array.stableSort = $toMethod(exports.Array.proto.stableSort);
    exports.Array.stableSort.argNames = ['array', 'comparefn'];

    /**
     * This method sorts the elements the array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     *
     * @function module:util-x~exports.Array.proto.sort
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Function} [compareFN]
     * @throws {TypeError} If compareFN is not undefined or is not a function
     * @returns {module:util-x~ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    exports.Array.proto.sort = (function () {
        var argNames = ['comparefn'];

        return $decide(
            // test
            function () {
                $affirmBasic(base.Array.sort)();

                var sortArr = [],
                    sortObj;

                sortArr.length = 9;
                sortArr[0] = 'f';
                sortArr[1] = 'e';
                sortArr[2] = 'd';
                sortArr[4] = null;
                sortArr[5] = Undefined;
                sortArr[6] = 'a';
                sortArr[7] = 'c';
                sortArr[8] = 'b';

                $call(base.Array.sort, sortArr);
                $affirm.strictEqual(sortArr.length, 9, 'test1');
                $affirm.strictEqual(sortArr[0], 'a', 'test2');
                $affirm.strictEqual(sortArr[1], 'b', 'test3');
                $affirm.strictEqual(sortArr[2], 'c', 'test4');
                $affirm.strictEqual(sortArr[3], 'd', 'test5');
                $affirm.strictEqual(sortArr[4], 'e', 'test6');
                $affirm.strictEqual(sortArr[5], 'f', 'test7');
                $affirm.strictEqual(sortArr[6], null, 'test8');
                $affirm.strictEqual(sortArr[7], Undefined, 'test9');
                $affirm.strictEqual(sortArr[8], Undefined, 'test110');
                $affirm.ok($call(pHasOwn, sortArr, 7), 'test11');
                $affirm.ok(!$call(pHasOwn, sortArr, 8), 'test12');

                sortObj = {
                    0: 5,
                    1: 2,
                    2: 4,
                    4: null,
                    6: 1,
                    7: 3,
                    length: 8
                };

                $call(base.Array.sort, sortObj, $descending);
                $affirm.strictEqual(sortObj.length, 8, 'test13');
                $affirm.strictEqual(sortObj[0], null, 'test14');
                $affirm.strictEqual(sortObj[1], 5, 'test15');
                $affirm.strictEqual(sortObj[2], 4, 'test16');
                $affirm.strictEqual(sortObj[3], 3, 'test17');
                $affirm.strictEqual(sortObj[4], 2, 'test18');
                $affirm.strictEqual(sortObj[5], 1, 'test19');
                $affirm.strictEqual(sortObj[6], Undefined, 'test20');
                $affirm.strictEqual(sortObj[7], Undefined, 'test21');
                $affirm.ok(!$call(pHasOwn, sortObj, 6), 'test22');
                $affirm.ok(!$call(pHasOwn, sortObj, 7), 'test23');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.doesNotThrow(function () {
                            $call(base.Array.sort, []);
                        }, 'no compare argument');

                        $affirm.doesNotThrow(function () {
                            $call(base.Array.sort, [], undefined);
                        }, 'undefined compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], null);
                        }, CTypeError, 'null compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], 1);
                        }, CTypeError, 'number compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], true);
                        }, CTypeError, 'boolean compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], 'a');
                        }, CTypeError, 'string compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], {});
                        }, CTypeError, 'object compare argument');

                        $affirm.throws(function () {
                            $call(base.Array.sort, [], []);
                        }, CTypeError, 'array compare argument');
                    },

                    // pass
                    function () {
                        return base.Array.sort;
                    },

                    // fail
                    function () {
                        var pSort = base.Array.sort;

                        return function (comparefn) {
                            if ($isUndefined(comparefn)) {
                                comparefn = $ascending;
                            }

                            return $call(pSort, $checkObjectCoercible(this), $throwIfNotFunction(comparefn));
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Array.sort patch'
                );
            },

            // fail
            function () {
                return exports.Array.proto.stableSort;
            },

            // argNames
            argNames,

            // message
            'Array.sort shim'
        );
    }());

    /**
     * This {@link module:util-x~boundPrototypalFunction method} sorts the elements of an array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     *
     * @function module:util-x~exports.Array.sort
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} [compareFN]
     * @throws {TypeError} If compareFN is defined and is not a function
     * @returns {module:util-x~ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    exports.Array.sort = $toMethod(exports.Array.proto.sort);
    exports.Array.sort.argNames = ['array', 'comparefn'];

    /**
     * Shortcut
     * This {@link module:util-x~boundPrototypalFunction method} sorts the elements of an array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     *
     * @private
     * @function module:util-x~$sort
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Function} [compareFN]
     * @throws {TypeError} If compareFN is defined and is not a function
     * @returns {module:util-x~ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    $sort = exports.Array.sort;

    /**
     * @private
     * @name module:util-x~wspaceStrings
     * @namespace
     */
    wspaceStrings = (function () {
        var whiteSpaces = [
                0x0009, // Tab
                0x000a, // Line Feed
                0x000b, // Vertical Tab
                0x000c, // Form Feed
                0x000d, // Carriage Return
                0x0020, // Space
                //0x0085, // Next line
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
                //0x200b, // Zero width space
                0x2028, // Line separator
                0x2029, // Paragraph separator
                0x202f, // Narrow no-break space
                0x205f, // Medium mathematical space
                0x3000, // Ideographic space
                0xfeff // Byte Order Mark
            ],
            length = whiteSpaces.length,
            index,
            hex,
            wsStr = '',
            trimString = '';

        for (index = 0; index < length; index += 1) {
            hex = $call(base.Number.toString, whiteSpaces[index], 16);
            wsStr += '\\u' + $call(pSSlice, '0000', 0, -hex.length) + hex;
            trimString += base.String.fromCharCode(whiteSpaces[index]);
        }

        return {
            /**
             * For creating a RegExp
             *
             * @private
             * @name module:util-x~wspaceStrings.wsStr
             * type {string}
             * */
            wsStr: wsStr,

            /**
             * For testing trim
             *
             * @private
             * @name module:util-x~wspaceStrings.trimString
             * type {string}
             * */
            trimString: trimString
        };
    }());

    /**
     * This method removes whitespace from both ends of the string.
     *
     * @function module:util-x~exports.String.proto.trim
     * @this {string}
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    exports.String.proto.trim = $decide(
        // test
        function () {
            $affirmBasic(base.String.trim)();

            var value;

            $affirm.doesNotThrow(function () {
                value = $call(base.String.trim, wspaceStrings.trimString);
            }, 'test1');

            $affirm.strictEqual(value.length, 0, 'not all whitespace trimmed');

            $affirm.doesNotThrow(function () {
                value = $call(base.String.trim, base.String.fromCharCode(0x200b));
            }, 'test2');

            $affirm.strictEqual(value.length, 1, 'trimmed 0x200b bug');

            $affirm.doesNotThrow(function () {
                value = $call(base.String.trim, base.String.fromCharCode(0x0085));
            }, 'test3');

            $affirm.strictEqual(value.length, 1, 'trimmed 0x0085 bug');
        },

        // pass
        function () {
            return base.String.trim;
        },

        // fail
        function () {
            var wsTrim = new CRegExp('^[' + wspaceStrings.wsStr + ']+|[' + wspaceStrings.wsStr + ']+$', 'g');

            return function () {
                return $replace($onlyCoercibleToString(this), wsTrim, '');
            };
        },

        // message
        'String.trim shim'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} removes whitespace from both ends of the string.
     *
     * @function module:util-x~exports.String.trim
     * @param {string} inputArg
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    exports.String.trim = $toMethod(exports.String.proto.trim);
    exports.String.trim.argNames = ['inputArg'];

    /**
     * Shortcut
     * This {@link module:util-x~boundPrototypalFunction method} removes whitespace from both ends of the string.
     *
     * @private
     * @function module:util-x~$trim
     * @param {string} inputArg
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    $trim = exports.String.trim;

    /**
     * This function parses a string argument and returns an integer of the specified radix or base.
     *
     * @function module:util-x~exports.parseInt
     * @param {StringLike} inputArg
     * @param {number} radix
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     */
    exports.parseInt = $decide(
        // test
        function () {
            $affirm.ok(!testShims, 'testing shim');

            var value;

            $affirm.doesNotThrow(function () {
                value = base.parseInt(wspaceStrings.trimString + '08' + wspaceStrings.trimString);
            }, 'test1');

            $affirm.strictEqual(value, 8, 'test2');

            $affirm.doesNotThrow(function () {
                value = base.parseInt(wspaceStrings.trimString + '0x16' + wspaceStrings.trimString);
            }, 'test3');

            $affirm.strictEqual(value, 22, 'test4');

            $affirm.doesNotThrow(function () {
                value = base.parseInt(wspaceStrings.trimString + '0x16' + wspaceStrings.trimString, 10);
            }, 'test5');

            $affirm.strictEqual(value, 0, 'test6');
        },

        // pass
        function () {
            return base.parseInt;
        },

        // fail
        function () {
            var mParseInt = base.parseInt,
                hexRx = new CRegExp('^0[xX]');

            return function (str, radix) {
                str = $trim(str);
                if ($isUndefined(radix) || !toInt32(radix)) {
                    if ($test(hexRx, str)) {
                        radix = 16;
                    } else {
                        radix = 10;
                    }
                }

                if (radix === 10 && $test(hexRx, str)) {
                    return 0;
                }

                return mParseInt(str, radix);
            };
        },

        // argNames
        ['inputArg', 'radix'],

        // message
        'parseInt patch'
    );

    /**
     * Shortcut
     * This function parses a string argument and returns an integer of the specified radix or base.
     *
     * @private
     * @function module:util-x~$parseInt
     * @param {StringLike} inputArg
     * @param {number} radix
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     */
    $parseInt = exports.parseInt;

    /**
     * This function parses a string argument and returns an integer of the specified radix or base.
     *
     * @function module:util-x~exports.Number.parseInt
     * @param {StringLike} inputArg
     * @param {number} radix
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
     */
    exports.Number.parseInt = $decide(
        // test
        function () {
            $affirmBasic(base.Number.parseInt)();

            var value;

            $affirm.doesNotThrow(function () {
                value = base.Number.parseInt(wspaceStrings.trimString + '08' + wspaceStrings.trimString);
            }, 'test1');

            $affirm.strictEqual(value, 8, 'test2');

            $affirm.doesNotThrow(function () {
                value = base.Number.parseInt(wspaceStrings.trimString + '0x16' + wspaceStrings.trimString);
            }, 'test3');

            $affirm.strictEqual(value, 22, 'test4');

            $affirm.doesNotThrow(function () {
                value = base.Number.parseInt(wspaceStrings.trimString + '0x16' + wspaceStrings.trimString, 10);
            }, 'test5');

            $affirm.strictEqual(value, 0, 'test6');
        },

        // pass
        function () {
            return base.Number.parseInt;
        },

        // fail
        function () {
            return function () {
                return $apply($parseInt, null, arguments);
            };
        },

        // argNames
        ['inputArg', 'radix'],

        // message
        'Number.parseInt shim'
    );

    /**
     * This method parses a string argument and returns a floating point number.
     *
     * @function module:util-x~exports.parseFloat
     * @param {StringLike} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
     */
    exports.parseFloat = $decide(
        // test
        function () {
            $affirm.ok(!testShims, 'testing shim');
            var value;

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '123.45678' + wspaceStrings.trimString);
            }, 'test1');

            $affirm.strictEqual(value, 123.45678, 'test2');

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '0123.45678' + wspaceStrings.trimString);
            }, 'test3');

            $affirm.strictEqual(value, 123.45678, 'test4');

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '123.456780' + wspaceStrings.trimString);
            }, 'test5');

            $affirm.strictEqual(value, 123.45678, 'test6');
        },

        // pass
        function () {
            return base.parseFloat;
        },

        // fail
        function () {
            var mParseFloat = base.parseFloat;

            return function (str) {
                return mParseFloat($trim(str));
            };
        },

        // argNames
        ['inputArg'],

        // message
        'parseFloat patch'
    );

    // redefinition
    $parseFloat = exports.parseFloat;

    /**
     * This method parses a string argument and returns a floating point number.
     *
     * @function module:util-x~exports.Number.parseFloat
     * @param {StringLike} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
     */
    exports.Number.parseFloat = $decide(
        // test
        // test
        function () {
            $affirmBasic(base.parseFloat)();

            var value;

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '123.45678' + wspaceStrings.trimString);
            }, 'test1');

            $affirm.strictEqual(value, 123.45678, 'test2');

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '0123.45678' + wspaceStrings.trimString);
            }, 'test3');

            $affirm.strictEqual(value, 123.45678, 'test4');

            $affirm.doesNotThrow(function () {
                value = base.parseFloat(wspaceStrings.trimString + '123.456780' + wspaceStrings.trimString);
            }, 'test5');

            $affirm.strictEqual(value, 123.45678, 'test6');
        },

        // pass
        function () {
            return base.parseFloat;
        },

        // fail
        function () {
            return $parseFloat;
        },

        // argNames
        ['inputArg'],

        // message
        'Number.parseFloat shim'
    );

    /**
     * This method formats a number using fixed-point notation.
     *
     * @function module:util-x~exports.Number.toFixed
     * @this {number}
     * @param {number} fractionDigits
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    exports.Number.proto.toFixed = $decide(
        // test
        function () {
            $affirmBasic(base.Number.toFixed)();

            var value;

            $affirm.doesNotThrow(function () {
                value = $call(base.Number.toFixed, 0.00008, 3);
            }, 'test1');

            $affirm.strictEqual(value, '0.000', 'test2');

            $affirm.doesNotThrow(function () {
                value = $call(base.Number.toFixed, 0.9, 0);
            }, 'test3');

            $affirm.strictEqual(value, '1', 'test4');

            $affirm.doesNotThrow(function () {
                value = $call(base.Number.toFixed, 1.255, 2);
            }, 'test5');

            $affirm.strictEqual(value, '1.25', 'test6');

            $affirm.doesNotThrow(function () {
                value = $call(base.Number.toFixed, 1000000000000000128, 0);
            }, 'test7');

            $affirm.strictEqual(value, '1000000000000000128', 'test8');
        },

        // pass
        function () {
            return base.Number.toFixed;
        },

        // fail
        function () {
            var baseNum = 1e7,
                data = [0, 0, 0, 0, 0, 0],
                size = $toLength(data.length),
                last = size - 1;

            function multiply(n, c) {
                var index;

                for (index = 0; index < size; index += 1) {
                    c += n * data[index];
                    data[index] = c % baseNum;
                    c = $floor(c / baseNum);
                }
            }

            function divide(n) {
                var c = 0,
                    index;

                for (index = last; index >= 0; index -= 1) {
                    c += data[index];
                    data[index] = $floor(c / n);
                    c = (c % n) * baseNum;
                }
            }

            function numToString() {
                var s = '',
                    index,
                    it;

                for (index = last; index >= 0; index -= 1) {
                    it = data[index];
                    if (s || !index || it) {
                        it = $toString(it);
                        if (!s) {
                            s = it;
                        } else {
                            s += $call(pSSlice, '0000000', 0, 7 - it.length) + it;
                        }
                    }
                }

                return s;
            }

            function pow(x, n, acc) {
                if (n) {
                    if (n % 2) {
                        acc = pow(x, n - 1, acc * x);
                    } else {
                        acc = pow(x * x, n / 2, acc);
                    }
                }

                return acc;
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

            return function (fractionDigits) {
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
                if (!$strictEqual(f, f)) {
                    f = 0;
                } else {
                    f = $floor(f);
                }

                if (f < 0 || f > 20) {
                    throw new CRangeError('Number.toFixed called with invalid number of decimals');
                }

                x = +this;
                // Test for NaN or if it is too big or small, return the string value of the number.
                if (!$strictEqual(x, x) || x <= -1e21 || x >= 1e21) {
                    return $toString(x);
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
                        m = numToString() + $call(pSSlice, '0.00000000000000000000', 2, 2 + f);
                    }
                }

                if (f > 0) {
                    k = m.length;
                    if (k <= f) {
                        m = s + $call(pSSlice, '0.0000000000000000000', 0, f - k + 2) + m;
                    } else {
                        m = s + $call(pSSlice, m, 0, k - f) + '.' + $call(pSSlice, m, k - f);
                    }
                } else {
                    m = s + m;
                }

                return m;
            };
        },

        // argNames
        ['fractionDigits'],

        // message
        'Number.toFixed shim'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} formats a number using fixed-point notation.
     *
     * @function module:util-x~exports.Number.toFixed
     * @param {number} number The number to be formatted.
     * @param {number} fractionDigits
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    exports.Number.toFixed = $toMethod(exports.Number.proto.toFixed, $firstArg);
    exports.Number.toFixed.argNames = ['number', 'fractionDigits'];

    /**
     * This method returns the first index at which a given element can
     * be found in the array, or -1 if it is not present.
     *
     * @function module:util-x~exports.Array.proto.indexOf
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {*} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     */
    exports.Array.proto.indexOf = $decide(
        // test
        function () {
            $affirmBasic(base.Array.indexOf)();

            var value;

            $affirm.doesNotThrow(function () {
                value = $call(base.Array.indexOf, [0, 1], 1, 2);
            }, 'test1');

            $affirm.strictEqual(value, -1, 'item not found');
        },

        // pass
        function () {
            return base.Array.indexOf;
        },

        // fail
        function () {
            return function (searchElement, fromIndex) {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    stringTag = $toStringTag(object),
                    val = -1,
                    index;

                if (length) {
                    if (arguments.length > 1) {
                        fromIndex = $toInteger(fromIndex);
                    } else {
                        fromIndex = 0;
                    }

                    if (fromIndex < length) {
                        if (fromIndex < 0) {
                            fromIndex = length - $abs(fromIndex);
                            if (fromIndex < 0) {
                                fromIndex = 0;
                            }
                        }

                        for (index = fromIndex; index < length; index += 1) {
                            if ($hasItem(object, index, stringTag) && searchElement === $getItem(object, index, stringTag)) {
                                val = index;
                                break;
                            }
                        }
                    }
                }

                return val;
            };
        },

        // argNames
        ['searchElement', 'fromIndex'],

        // message
        'Array.indexOf shim'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns the first index at which a given element can
     * be found in the array, or -1 if it is not present.
     *
     * @function module:util-x~exports.Array.indexOf
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {*} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     */
    exports.Array.indexOf = $toMethod(exports.Array.proto.indexOf);
    exports.Array.indexOf.argNames = ['array', 'searchElement', 'fromIndex'];

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     *
     * @function module:util-x~exports.Array.proto.contains
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {*} searchElement
     * @returns {boolean}
     */
    exports.Array.proto.contains = (function (pEAIndexOf) {
        return function () {
            return $apply(pEAIndexOf, this, arguments) !== -1;
        };
    }(exports.Array.proto.indexOf));

    exports.Array.proto.contains.argNames = ['searchElement'];

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     *
     * @function module:util-x~exports.Array.contains
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {*} searchElement
     * @returns {boolean}
     */
    exports.Array.contains = $toMethod(exports.Array.proto.contains);
    exports.Array.contains.argNames = ['array', 'searchElement'];

    /**
     * This method returns the first index at which a given element
     * can be found in the array, or -1 if it is not present.
     *
     * @memberOf exports.Array.proto
     * @name lastIndexOf
     * @function module:util-x~exports.Array.proto.lastIndexOf
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {Object} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
     */
    exports.Array.proto.lastIndexOf = $decide(
        // test
        function () {
            $affirmBasic(base.Array.lastIndexOf)();

            var value;

            $affirm.doesNotThrow(function () {
                value = $call(base.Array.lastIndexOf, [0, 1], 0, -3);
            }, 'test1');

            $affirm.strictEqual(value, -1, 'item not found');
        },

        // pass
        function () {
            return base.Array.lastIndexOf;
        },

        // fail
        function () {
            return function (searchElement, fromIndex) {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    stringTag = $toStringTag(object),
                    val = -1,
                    index;

                if (length) {
                    if (arguments.length > 1) {
                        fromIndex = $toInteger(fromIndex);
                    } else {
                        fromIndex = length - 1;
                    }

                    if (fromIndex >= 0) {
                        fromIndex = $min(fromIndex, length - 1);
                    } else {
                        fromIndex = length - $abs(fromIndex);
                    }

                    for (index = fromIndex; index >= 0; index -= 1) {
                        if ($hasItem(object, index, stringTag) && searchElement === $getItem(object, index, stringTag)) {
                            val = index;
                            break;
                        }
                    }
                }

                return val;
            };
        },

        // argNames
        ['searchElement', 'fromIndex'],

        // message
        'Array.lastIndexOf shim'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns the first index at which a given element
     * can be found in the array, or -1 if it is not present.
     *
     * @function module:util-x~exports.Array.lastIndexOf
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {Object} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
     */
    exports.Array.lastIndexOf = $toMethod(exports.Array.proto.lastIndexOf);
    exports.Array.lastIndexOf.argNames = ['array', 'searchElement', 'fromIndex'];

    /**
     * With this {@link module:util-x~boundPrototypalFunction method}, fill every element of array from start up
     * to but not including end is assigned value.
     *
     * @memberOf exports.Array.proto
     * @name fill
     * @function module:util-x~exports.Array.proto.fill
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {*} value
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     */
    exports.Array.proto.fill = $decide(
        // test
        $affirmBasic(base.Array.fill),

        // pass
        function () {
            return base.Array.fill;
        },

        // fail
        function () {
            return function (value, start, end) {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    relativeStart = $toInteger(start),
                    relativeEnd,
                    finalEnd,
                    index;

                if (start < 0) {
                    relativeStart = $max(length + relativeStart, 0);
                } else {
                    relativeStart = $min(relativeStart, length);
                }

                if ($isUndefined(end)) {
                    relativeEnd = length;
                } else {
                    relativeEnd = $toInteger(end);
                }

                if (relativeEnd < 0) {
                    finalEnd = $max(length + relativeEnd, 0);
                } else {
                    finalEnd = $min(relativeEnd, length);
                }

                for (index = relativeStart; index < finalEnd; index += 1) {
                    object[index] = value;
                }

                return object;
            };
        },

        // argNames
        ['value', 'start', 'end'],

        // message
        'Array.fill shim'
    );

    /**
     * With this {@link module:util-x~boundPrototypalFunction method}, fill every element of array from start up
     * to but not including end is assigned value.
     *
     * @function module:util-x~exports.Array.fill
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {*} value
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     */
    exports.Array.fill = $toMethod(exports.Array.proto.fill);
    exports.Array.fill.argNames = ['array', 'value', 'start', 'end'];

    /**
     * With this {@link module:util-x~boundPrototypalFunction method}, every element of array from start up to but
     * not including end is assigned value.
     *
     * @memberOf exports.Array.proto
     * @name copyWithin
     * @function module:util-x~exports.Array.proto.copyWithin
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {number} target
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     */
    exports.Array.proto.copyWithin = $decide(
        // test
        $affirmBasic(base.Array.copyWithin),

        // pass
        function () {
            return base.Array.copyWithin;
        },

        // fail
        function () {
            return function (target, start, end) {
                var object = $toObject(this),
                    length = $toLength(object.length),
                    relativeTarget = $toInteger(target),
                    relativeStart = $toInteger(start),
                    relativeEnd,
                    to,
                    from,
                    finalEnd,
                    count,
                    direction,
                    index;

                if (relativeTarget < 0) {
                    to = $max(length + relativeTarget, 0);
                } else {
                    to = $min(relativeTarget, length);
                }

                if (relativeStart < 0) {
                    from = $max(length + relativeStart, 0);
                } else {
                    from = $min(relativeStart, length);
                }

                if ($isUndefined(end)) {
                    relativeEnd = length;
                } else {
                    relativeEnd = $toInteger(end);
                }

                if (relativeEnd < 0) {
                    finalEnd = $max(length + relativeEnd, 0);
                } else {
                    finalEnd = $min(relativeEnd, length);
                }

                count = $min(finalEnd - from, length - to);
                if (from < to && to < from + count) {
                    direction = -1;
                    from += count - 1;
                    to += count - 1;
                } else {
                    direction = 1;
                }

                for (index = count; index >= 1; index -= 1) {
                    if ($call(pHasOwn, object, from)) {
                        object[to] = object[from];
                    } else {
                        $deleteProperty(object, to);
                    }

                    from += direction;
                    to += direction;
                }

                return object;
            };
        },

        // argNames
        ['target', 'start', 'end'],

        // message
        'Array.copyWithin shim'
    );

    /**
     * With this {@link module:util-x~boundPrototypalFunction method}, every element of array from start up to but
     * not including end is assigned value.
     *
     * @function module:util-x~exports.Array.copyWithin
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {number} target
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     */
    exports.Array.copyWithin = $toMethod(exports.Array.proto.copyWithin);
    exports.Array.proto.copyWithin.argNames = ['array', 'target', 'start', 'end'];

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
     *
     * @function module:util-x~exports.Object.keys
     * @param {Object} object
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
     */
    /*jslint todo: true */
    /** @todo: fix unwanted error, constructor and prototype properties */
    /*jslint todo: false */
    exports.Object.keys = (function () {
        var argNames = ['object'];

        return $decide(
            // test
            function () {
                $affirmBasic(base.Object.keys)();

                var value;

                $affirm.doesNotThrow(function () {
                    value = base.Object.keys($returnArgs(1, 2));
                }, 'test1');

                $affirm.strictEqual(value.length, 2, 'works with arguments object');
                $affirm.ok(!hasErrorProps, 'works with error objects');

                $affirm.doesNotThrow(function () {
                    value = base.Object.keys(CError.prototype);
                }, 'test2');

                // Error prototype should not list
                $affirm.strictEqual(value.length, 0, 'Error prototype zero list');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        var value;

                        $affirm.doesNotThrow(function () {
                            value = base.Object.keys(1);
                        }, 'number literal');

                        $affirm.strictEqual(value.length, 0, 'number literal');

                        $affirm.doesNotThrow(function () {
                            value = base.Object.keys('a');
                        }, 'string literal');

                        $affirm.strictEqual(value.length, 1, 'string literal');

                        $affirm.doesNotThrow(function () {
                            value = base.Object.keys(true);
                        }, 'boolean literal');

                        $affirm.strictEqual(value.length, 0, 'boolean literal');
                    },

                    // pass
                    function () {
                        return base.Object.keys;
                    },

                    // fail
                    function () {
                        var mKeys = base.Object.keys;

                        return function (object) {
                            return mKeys($toObject(object));
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.keys patch'
                );
            },

            // fail
            function () {
                return function (object) {
                    object = $toObject(object);

                    var skipEnumArgs = hasEnumArgsBug && $isArguments(object),
                        length,
                        dontEnum,
                        theKeys = [],
                        skipProto = hasProtoEnumBug && $isFunction(object),
                        skipConstructor,
                        name,
                        ctor,
                        index;

                    if ((hasEnumStringBug && $toStringTag(object) === stringTagString) || skipEnumArgs) {
                        length = $toLength(object.length);
                        for (index = 0; index < length; index += 1) {
                            $push(theKeys, $toString(index));
                        }
                    }

                    if (!skipEnumArgs) {
                        /*jslint forin: true */
                        for (name in object) {
                            if (!(skipProto && name === 'prototype') && $call(pHasOwn, object, name)) {
                                $push(theKeys, name);
                            }
                        }
                    }

                    if (hasDontEnumBug) {
                        ctor = object.constructor;
                        skipConstructor = ctor && ctor.prototype === object;
                        length = $toLength(shadowed.length);
                        for (index = 0; index < length; index += 1) {
                            dontEnum = shadowed[index];
                            if (!(skipConstructor && dontEnum === 'constructor') && $call(pHasOwn, object, dontEnum)) {
                                $push(theKeys, dontEnum);
                            }
                        }
                    }

                    return theKeys;
                };
            },

            // argNames
            argNames,

            // message
            'Object.keys shim'
        );
    }());

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
     *
     * @private
     * @function module:util-x~exports.Object.keys
     * @param {Object} object
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
     */
    $objectKeys = exports.Object.keys;

    /**
     * forKeys executes the callback function once for each own property present in the object until it finds one
     * where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     *
     * @typedef {Function} module:util-x~forKeysCallback
     * @param {*} element The current property being processed in the object.
     * @param {prop} index The property name of the current property being processed in the object.
     * @param {Object} object The object that some was called upon.
     * @returns {boolean}
     */

    /**
     * Executes a provided function once per object property and allows a some like break.
     *
     * @function module:util-x~exports.Object.proto.forKeys
     * @this {Object}
     * @throws {TypeError} If object is primitive
     * @param {module:util-x~forKeysCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     */
    exports.Object.proto.forKeys = function (fn, thisArg) {
        var object = $toObject(this),
            isString,
            keys,
            length,
            val,
            index,
            it,
            item;

        $throwIfNotFunction(fn);
        keys = $objectKeys(object);
        length = $toLength(keys.length);
        /*
        if (length) {
            thisArg = $toObjectCallFix(thisArg);
        }
        */

        isString = $toStringTag(object) === stringTagString;
        val = false;
        for (index = 0; index < length; index += 1) {
            it = keys[index];
            if (isString && $toString($toInteger(it)) === it && it >= 0 && it <= MAX_SAFE_INTEGER) {
                item = $call(pCharAt, object, it);
            } else {
                item = object[it];
            }

            val = !!$call(fn, thisArg, item, it, object);
            if (val) {
                break;
            }
        }

        return val;
    };

    exports.Object.proto.forKeys.argNames = ['fn', 'thisArg'];

    /**
     * Executes a provided function once per object property and allows a some like break.
     *
     * @function module:util-x~exports.Object.forKeys
     * @param {Object} object
     * @throws {TypeError} If object is primitive
     * @param {module:util-x~forKeysCallback} fn
     * @throws {TypeError} If fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     */
    exports.Object.forKeys = $toMethod(exports.Object.proto.forKeys);
    exports.Object.forKeys.argNames = ['object', 'fn', 'thisArg'];

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
     *
     * @function module:util-x~exports.Object.isEmpty
     * @param {Object} inputArg
     * @returns {boolean}
     */
    exports.Object.isEmpty = function (inputArg) {
        return !$objectKeys(inputArg).length;
    };

    exports.Object.isEmpty.argNames = ['inputArg'];

    /**
     * This method returns true if the string
     * only contains numerical digits.
     *
     * @function module:util-x~exports.String.proto.isDigits
     * @this {string}
     * @returns {boolean}
     */
    exports.String.proto.isDigits = (function () {
        var notDigits = new CRegExp('^\\d+$');

        return function () {
            return $test(notDigits, $onlyCoercibleToString(this));
        };
    }());

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a String and
     * only contains numerical digits.
     *
     * @function module:util-x~exports.String.isDigits
     * @param {*} string
     * @returns {boolean}
     */
    exports.String.isDigits = $toMethod(exports.String.proto.isDigits);
    exports.String.isDigits.argNames = ['string'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a String and
     * only contains numerical digits.
     *
     * @private
     * @function module:util-x~exports.String.isDigits
     * @param {*} string
     * @returns {boolean}
     */
    $isDigits = exports.String.isDigits;

    hasAccessorSupport = $call(pHasOwn, protoObject, stringDefineGetter);

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     *
     * @private
     * @function module:util-x~$defProp
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    $defProp = (function (mLookupGetter, mLookupSetter, mDefineGetter, mDefineSetter) {
        return function $defProp(object, property, descriptor) {
            $throwIfIsPrimitive(object);
            descriptor = $assign({}, $throwIfIsPrimitive(descriptor));

            var hasValue = $call(pHasOwn, descriptor, 'value'),
                hasGet = $call(pHasOwn, descriptor, 'get'),
                hasSet = $call(pHasOwn, descriptor, 'set'),
                prototype,
                isIdx;

            if (hasValue) {
                if (hasGet || hasSet) {
                    throw new CTypeError('Invalid property. A property cannot have accessors and a value');
                }
            } else {
                if ($call(pHasOwn, object, property)) {
                    descriptor.value = object[property];
                } else if (!hasGet && !hasSet) {
                    descriptor.value = Undefined;
                }
            }

            // If it's a data property.
            if ($call(pHasOwn, descriptor, 'value')) {
                // fail silently if 'writable', 'enumerable', or 'configurable'
                // are requested but not supported
                /*
                // alternate approach:
                if ( // can't implement these features; allow false but not true
                    ('writable' in descriptor && !descriptor.writable) ||
                    ('enumerable' in descriptor && !descriptor.enumerable) ||
                    ('configurable' in descriptor && !descriptor.configurable)
                ))
                    throw new CRangeError(
                        'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                    );
                */

                if ($isArray(object) || $isArguments(object)) {
                    property = $toString(property);
                    if ($isDigits(property) && $call(pCharAt, property, 0) !== '0' && $isIndex(+property, MAX_UINT32 - 1)) {
                        property = +property;
                        isIdx = true;
                    }
                }

                if (!isIdx && (hasAccessorSupport && ($call(mLookupGetter, object, property) || $call(mLookupSetter, object, property)))) {
                    // As accessors are supported only on engines implementing
                    // `__proto__` we can safely override `__proto__` while defining
                    // a property to make sure that we don't hit an inherited
                    // accessor.
                    prototype = object[stringProto];
                    object[stringProto] = protoObject;
                    // Deleting a property anyway since getter / setter may be
                    // defined on object itself.
                    $deleteProperty(object, property);
                    object[property] = descriptor.value;
                    // Setting original `__proto__` back now.
                    object[stringProto] = prototype;
                } else {
                    if (isIdx) {
                        if (property >= $toLength(object.length)) {
                            object.length = property + 1;
                        }
                    }

                    object[property] = descriptor.value;
                }
            } else {
                if (!hasAccessorSupport) {
                    throw new CTypeError('getters & setters can not be defined on this javascript engine');
                }

                // If we got that far then getters and setters can be defined !!
                if (hasGet) {
                    $call(mDefineGetter, object, property, descriptor.get);
                }

                if (hasSet) {
                    $call(mDefineSetter, object, property, descriptor.set);
                }
            }

            return object;
        };
    }(base.Object.lookupGetter, base.Object.lookupSetter, base.Object.defineGetter, base.Object.defineSetter));

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     *
     * @function module:util-x~exports.Object.defineProperty
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    exports.Object.defineProperty = (function () {
        var argNames = ['object', 'property', 'descriptor'];

        return $decide(
            //test
            function () {
                $affirmBasic(base.Object.defineProperty)();
                $affirm.strictEqual(base.Object.defineProperty({}, 'sentinel', { value: null }).sentinel, null, 'test1');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        // should not throw an error definining elements on arrays using trailing point numbers strings
                        var testObj,
                            testArr = [];

                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([], '1.', { value: null });
                        }, 'should not throw an error definining elements on arrays using trailing point numbers strings');

                        $affirm.strictEqual(testObj.length, 0, 'test1');
                        $affirm.strictEqual(testObj[1], Undefined, 'test2');
                        $affirm.strictEqual(testObj['1.'], null, 'test3');

                        // should not throw an error definining elements on arrays using integer strings
                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([], '1', { value: Undefined });
                        }, 'should not throw an error definining elements on arrays using integer strings');

                        $affirm.strictEqual(testObj.length, 2, 'test4');
                        $affirm.strictEqual(testObj[1], Undefined, 'test5');

                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([], '1', { value: null });
                        }, 'should not throw an error definining elements on arrays using integer strings');

                        $affirm.strictEqual(testObj.length, 2, 'test6');
                        $affirm.strictEqual(testObj[1], null, 'test7');

                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([], '1', {});
                        }, 'should not throw an error definining elements on arrays using integer strings');

                        $affirm.strictEqual(testObj.length, 2, 'test8');
                        $affirm.strictEqual(testObj[1], Undefined, 'test9');

                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([], '1', { value: null });
                        }, 'should not throw an error definining elements on arrays using integer strings');

                        $affirm.strictEqual(testObj.length, 2, 'test10');
                        $affirm.strictEqual(testObj[1], null, 'test11');

                        // Test overwrite array properties when no value defined, no value change
                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([10, 20], '1', {});
                        }, 'Test overwrite array properties when no value defined, no value change');

                        $affirm.strictEqual(testObj.length, 2, 'test12');
                        $affirm.strictEqual(testObj[1], 20, 'test13');

                        // should not throw an error redefinining elements on arrays
                        $affirm.doesNotThrow(function () {
                            testObj = base.Object.defineProperty([10], '0', {
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error redefinining elements on arrays');

                        $affirm.strictEqual(testObj.length, 1, 'length after re-define');
                        $affirm.strictEqual(testObj[0], 10, 'value after re-define');

                        // should not throw an error definining elements/properties on arrays
                        testArr = [];
                        $affirm.doesNotThrow(function () {
                            base.Object.defineProperty(testArr, '0', {
                                value: 10,
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error definining elements on arrays');

                        $affirm.doesNotThrow(function () {
                            base.Object.defineProperty(testArr, '1', {
                                value: true,
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error definining elements on arrays');

                        $affirm.doesNotThrow(function () {
                            base.Object.defineProperty(testArr, '2', {
                                value: 'x',
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error definining elements on arrays');

                        $affirm.doesNotThrow(function () {
                            base.Object.defineProperty(testArr, 'foo', {
                                value: noop,
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error definining properties on arrays');

                        $affirm.strictEqual(testArr.length, 3, 'length after define');
                        $affirm.strictEqual(testArr[0], 10, 'first value');
                        $affirm.strictEqual(testArr[1], true, 'second value');
                        $affirm.strictEqual(testArr[2], 'x', 'third value');
                        $affirm.strictEqual(testArr.foo, noop, 'fourth value');

                        //should not throw an error definining elements on arrays using float numbers
                        testObj = base.Object.defineProperty([], 1.1, {
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        $affirm.ok($call(pHasOwn, testObj, 1.1), 'have own property');
                        $affirm.strictEqual(testObj.length, 0, 'be zero length');
                        $affirm.strictEqual(testObj[1.1], Undefined, 'value should be undefined');
                    },

                    // pass
                    function () {
                        return base.Object.defineProperty;
                    },

                    // fail
                    function () {
                        var mDefineProperty = base.Object.defineProperty;

                        return function (object, property, descriptor) {
                            if ($isArray(object) || $isArguments(object)) {
                                property = $toString(property);
                                if (($isDigits(property) && $call(pCharAt, property, 0) !== '0' && $isIndex(+property, MAX_UINT32 - 1)) || $isNumeric(property)) {
                                    return $defProp(object, property, descriptor);
                                }
                            }

                            return mDefineProperty(object, property, descriptor);
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.defineProperty patch'
                );
            },

            // fail
            function () {
                return $defProp;
            },

            // argNames
            argNames,

            //message
            'Object.defineProperty sham'
        );
    }());

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     *
     * @private
     * @function module:util-x~$defineProperty
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    $defineProperty = exports.Object.defineProperty;

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     *
     * @function module:util-x~exports.Object.defineProperties
     * @param {Object} object
     * @param {Object} props
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
     */
    exports.Object.defineProperties = (function () {
        var argNames = ['object', 'props'],
            mDefineProperties = base.Object.defineProperties;

        /**
         * @private
         * @function module:util-x~throwString
         * @param {Object} props
         * @throws If props is a string
         * @returns {Object}
         */
        function throwString(props) {
            if ($toStringTag(props) === stringTagString) {
                throw new CTypeError('Property description must be an object: ' + $toString(props));
            }

            return props;
        }

        return $decide(
            // test
            function () {
                $affirmBasic(mDefineProperties)();
                $affirm.strictEqual($defineProperty, base.Object.defineProperty, 'defineProperty was patched or shimmed');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.throws(function () {
                            mDefineProperties({});
                        }, CTypeError, 'no properties argument');

                        $affirm.throws(function () {
                            mDefineProperties({}, undefined);
                        }, CTypeError, 'properties undefined');

                        $affirm.throws(function () {
                            mDefineProperties({}, null);
                        }, CTypeError, 'properties null');

                        $affirm.doesNotThrow(function () {
                            mDefineProperties({}, true);
                        }, 'boolean');

                        $affirm.doesNotThrow(function () {
                            mDefineProperties({}, 1);
                        }, 'properties number');

                        $affirm.throws(function () {
                            mDefineProperties({}, 'a');
                        }, CTypeError, 'properties string');
                    },

                    // pass
                    function () {
                        return mDefineProperties;
                    },

                    // fail
                    function () {
                        return function (object, props) {
                            return mDefineProperties($throwIfIsPrimitive(object), throwString($toObject(props)));
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'Object.defineProperties patch'
                );
            },

            // fail
            function () {
                return function (object, props) {
                    $throwIfIsPrimitive(object);
                    props = throwString($toObject(props));

                    var keys = $objectKeys(props),
                        length = $toLength(keys.length),
                        key,
                        index;

                    for (index = 0; index < length; index += 1) {
                        key = keys[index];
                        $defineProperty(object, key, props[key]);
                    }

                    return object;
                };
            },

            // argNames
            argNames,

            // message
            'Object.defineProperties using Object.defineProperty'
        );
    }());

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     *
     * @private
     * @function module:util-x~$defineProperties
     * @param {Object} object
     * @param {Object} props
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
     */
    $defineProperties = exports.Object.defineProperties;

    /**
     * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties
     * from being removed; and prevents existing properties, or their enumerability, configurability, or
     * writability, from being changed.
     * In essence the object is made effectively immutable. Returns the object being frozen.
     *
     * @function module:util-x~exports.Object.freeze
     * @param {Object} object
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     */
    exports.Object.freeze = $decide(
        // test
        $affirmBasic(base.Object.freeze),

        // pass
        function () {
            return base.Object.freeze;
        },

        // fail
        function () {
            return function (object) {
                return $throwIfIsPrimitive(object);
            };
        },

        // argNames
        ['object'],

        // message
        'Object.freeze sham'
    );

    // detect a Rhino bug and patch it
    exports.Object.freeze = $decide(
        // test
        function () {
            $affirm.doesNotThrow(function () {
                exports.Object.freeze({
                    noop: noop
                });
            }, 'does not throw an error in Rhino');
        },

        // pass
        function () {
            return exports.Object.freeze;
        },

        // fail
        function () {
            var freezeObject = exports.Object.freeze;

            return function (object) {
                var val;

                if ($isFunction(object)) {
                    val = object;
                } else {
                    val = freezeObject(object);
                }

                return val;
            };
        },

        // argNames
        ['object'],

        // message
        'Object.freeze Rhino bug patch'
    );

    /**
     * Determine if an object is frozen.
     *
     * @function module:util-x~exports.Object.isFrozen
     * @param {Object} object
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
     */
    exports.Object.isFrozen = $decide(
        // test
        $affirmBasic(base.Object.isFrozen),

        // pass
        function () {
            return base.Object.isFrozen;
        },

        // fail
        function () {
            return function (object) {
                $throwIfIsPrimitive(object);

                return false;
            };
        },

        // argNames
        ['object'],

        //  message
        'Object.isFrozen sham'
    );

    /**
     * To make object fully immutable, freeze each object in object.
     *
     * @function module:util-x~exports.Object.deepFreeze
     * @param {Object} object
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     */
    exports.Object.deepFreeze = function (object) {
        var propKey,
            propVal;

        exports.Object.freeze(object);
        for (propKey in object) {
            /*jslint forin: false*/
            propVal = $getItem(object, propKey, $toStringTag(object));
            if (!$isPrimitive(propVal) && !exports.Object.isFrozen(propVal)) {
                exports.Object.deepFreeze(propVal);
            }
            /*jslint forin: true*/
        }

        return object;
    };

    exports.Object.deepFreeze.argNames = ['object'];

    /**
     * The assign function is used to copy the values of all of the enumerable own properties from a
     * source object to a target object.
     *
     * @function module:util-x~exports.Object.assign
     * @param {Object} target
     * @param {...Object} source
     * @returns {Object}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
     */
    exports.Object.assign = $decide(
        // test
        $affirmBasic(base.Object.assign),

        // pass
        function () {
            return base.Object.assign;
        },

        // fail
        function () {
            return function (target) {
                var to = $toObject(target),
                    length = $toLength(arguments.length),
                    stringTag,
                    from,
                    index,
                    keysArray,
                    len,
                    nextIndex,
                    nextKey,
                    arg;

                if (length >= 2) {
                    for (index = 1; index < length; index += 1) {
                        arg = arguments[index];
                        if (arg !== null && !$isUndefined(arg)) {
                            from = $toObject(arg);
                            keysArray = $objectKeys(from);
                            len = $toLength(keysArray.length);
                            for (nextIndex = 0; nextIndex < len; nextIndex += 1) {
                                nextKey = keysArray[nextIndex];
                                stringTag = $toStringTag(from);
                                if ($hasItem(from, nextKey, stringTag)) {
                                    to[nextKey] = $getItem(from, nextKey, stringTag);
                                }
                            }
                        }
                    }
                }

                return to;
            };
        },

        // argNames
        ['target'],

        // message
        'Object.assign shim'
    );

    /**
     * The assign function is used to copy the values of all of the enumerable own properties from a
     * source object to a target object.
     *
     * @private
     * @function module:util-x~$assign
     * @param {Object} target
     * @param {...Object} source
     * @returns {Object}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
     */
    $assign = exports.Object.assign;

    /**
     * This method creates a new object with the specified prototype object and properties.
     *
     * @function module:util-x~exports.Object.create
     * @param {Prototype} prototype
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    exports.Object.create = $decide(
        // test
        function () {
            $affirmBasic(base.Object.create)();

            /**
             * @private
             * @constructor module:util-x~createFn
             */
            function createFn() {
                return;
            }

            var created = base.Object.create(createFn.prototype, {
                    /**
                     * @private
                     * @constructor module:util-x~createFn.prototype.constructor
                     */
                    constructor: $assign({
                        value: createFn
                    }, propNotEnumerable),

                    /**
                     * @private
                     * @name module:util-x~createFn.prototype.foo
                     * type {?string}
                     */
                    foo: $assign({
                        value: 'test'
                    }, propNotEnumerable)
                });

            $affirm.strictEqual(created.foo, 'test', 'test1');
        },

        //pass
        function () {
            return base.Object.create;
        },

        // fail
        function () {
            /**
             * The constructor used by {@link module:util-x~exports.Object.create} if shimmed.
             *
             * @private
             * @constructor ObjectCreateFunc
             */
            function ObjectCreateFunc() {
                return;
            }

            return function (prototype, propertiesObject) {
                ObjectCreateFunc.prototype = $throwIfIsPrimitive(prototype);

                var newObject = new ObjectCreateFunc();

                $defineProperty(newObject, stringProto, $assign({
                    value: prototype
                }, propNotEnumerable));

                if ($isPlainObject(propertiesObject)) {
                    $defineProperties(newObject, propertiesObject);
                }

                return newObject;
            };
        },

        // argNames
        ['prototype', 'propertiesObject'],

        // message
        'Object.create shim'
    );

    /**
     * This method creates a new object with the specified prototype object and properties.
     *
     * @private
     * @function module:util-x~$create
     * @param {Prototype} prototype
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    $create = exports.Object.create;

    /**
     * This method returns true if the Date object is valid.
     *
     * @function module:util-x~exports.Date.proto.isValid
     * @this {Date}
     * @returns {boolean}
     */
    exports.Date.proto.isValid = (function (pGetTime) {
        return function () {
            if ($toStringTag(this) !== stringTagDate) {
                throw new CTypeError('this is not a Date object.');
            }

            var ms = $call(pGetTime, this);

            return $strictEqual(ms, ms);
        };
    }(base.Date.getTime));

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a Date object and is valid.
     *
     * @function module:util-x~exports.Date.isValid
     * @param {*} dateObject
     * @returns {boolean}
     */
    exports.Date.isValid = $toMethod(exports.Date.proto.isValid);
    exports.Date.isValid.argNames = ['dateObject'];

    /**
     * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     *
     * @function module:util-x~exports.Date.now
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
     */
    exports.Date.now = $decide(
        // test
        $affirmBasic(base.Date.now),

        // pass
        function () {
            return base.Date.now;
        },

        // fail
        function () {
            var pGetTime = base.Date.getTime;

            return function now() {
                return $call(pGetTime, new CDate());
            };
        },

        // message
        'Date.now shim'
    );

    /**
     * This method wraps the string within the given character.
     *
     * @function module:util-x~exports.String.proto.wrapInChars
     * @this {string}
     * @param {string} character
     * @returns {string}
     */
    exports.String.proto.wrapInChars = function (characters) {
        if ($toStringTag(characters) !== stringTagString && $toStringTag(characters) !== stringTagNumber) {
            characters = '';
        } else {
            characters = $toString(characters);
        }

        return characters + $onlyCoercibleToString(this) + characters;
    };

    exports.String.proto.wrapInChars.argNames = ['characters'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} wraps a string within the given character.
     *
     * @function module:util-x~exports.String.wrapInChars
     * @param {string} string
     * @param {string} character
     * @returns {string}
     */
    exports.String.wrapInChars = $toMethod(exports.String.proto.wrapInChars);
    exports.String.proto.wrapInChars.argNames = ['string', 'characters'];

    /**
     * Tests a deep equality relation.
     *
     * @function module:util-x~exports.Object.deepEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
     */
    exports.Object.deepEqual = (function (pGetTime) {
        return function (a, b) {
            if (a === b) {
                return true;
            }

            if ($toStringTag(a) === stringTagDate && $toStringTag(b) === stringTagDate) {
                return $call(pGetTime, a) === $call(pGetTime, b);
            }

            if ($isRegExp(a) && $isRegExp(b)) {
                return a.source === b.source &&
                    a.global === b.global &&
                    a.multiline === b.multiline &&
                    a.lastIndex === b.lastIndex &&
                    a.ignoreCase === b.ignoreCase &&
                    a.sticky === b.sticky;
            }

            if (($isPrimitive(a) || $isFunction(a)) && ($isPrimitive(b) || $isFunction(b))) {
                /*jslint eqeq: true */
                return a == b;
            }

            if (a.prototype !== b.prototype) {
                return false;
            }

            if ($isArguments(a)) {
                if (!$isArguments(b)) {
                    return false;
                }

                return $deepEqual($slice(a), $slice(b));
            }

            var ka,
                kb,
                length,
                index,
                it;

            try {
                ka = $objectKeys(a);
                kb = $objectKeys(b);
            } catch (eDE) {
                return false;
            }

            length = $toLength(ka.length);
            if (length !== $toLength(kb.length)) {
                if ($isArray(a) && $isArray(b)) {
                    if ($toLength(a.length) !== $toLength(b.length)) {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                $sort(ka);
                $sort(kb);
                for (index = 0; index < length; index += 1) {
                    if (ka[index] !== kb[index]) {
                        return false;
                    }
                }
            }

            for (index = 0; index < length; index += 1) {
                it = ka[index];
                if (!$deepEqual(a[it], b[it])) {
                    return false;
                }
            }

            return $typeOf(a) === $typeOf(b);
        };
    }(base.Date.getTime));

    exports.Object.deepEqual.argNames = ['a', 'b'];

    /**
     * Tests a deep equality relation.
     *
     * @private
     * @function module:util-x~$deepEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
     */
    $deepEqual = exports.Object.deepEqual;

    /**
     * Tests a deep equality relation.
     *
     * @function module:util-x~exports.Object.deepStrictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    exports.Object.deepStrictEqual = (function (pGetTime) {
        return function (a, b) {
            if (a === b) {
                return true;
            }

            if ($toStringTag(a) === stringTagDate && $toStringTag(b) === stringTagDate) {
                return $call(pGetTime, a) === $call(pGetTime, b);
            }

            if ($isRegExp(a) && $isRegExp(b)) {
                return a.source === b.source &&
                    a.global === b.global &&
                    a.multiline === b.multiline &&
                    a.lastIndex === b.lastIndex &&
                    a.ignoreCase === b.ignoreCase &&
                    a.sticky === b.sticky;
            }

            if (($isPrimitive(a) || $isFunction(a)) && ($isPrimitive(b) || $isFunction(b))) {
                return a === b;
            }

            if ($getPrototypeOf(a) !== $getPrototypeOf(b)) {
                return false;
            }

            if ($isArguments(a)) {
                if (!$isArguments(b)) {
                    return false;
                }

                return $deepStrictEqual($slice(a), $slice(b));
            }

            var ka,
                kb,
                length,
                index,
                it;

            try {
                ka = $objectKeys(a);
                kb = $objectKeys(b);
            } catch (eDE) {
                return false;
            }

            length = $toLength(ka.length);
            if (length !== $toLength(kb.length)) {
                if ($isArray(a) && $isArray(b)) {
                    if ($toLength(a.length) !== $toLength(b.length)) {
                        return false;
                    }
                } else {
                    return false;
                }
            } else {
                $sort(ka);
                $sort(kb);
                for (index = 0; index < length; index += 1) {
                    if (ka[index] !== kb[index]) {
                        return false;
                    }
                }
            }

            for (index = 0; index < length; index += 1) {
                it = ka[index];
                if (!$deepStrictEqual(a[it], b[it])) {
                    return false;
                }
            }

            return $typeOf(a) === $typeOf(b);
        };
    }(base.Date.getTime));

    exports.Object.deepStrictEqual.argNames = ['a', 'b'];

    /**
     * Tests a deep equality relation.
     *
     * @private
     * @function module:util-x~$deepStrictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    $deepStrictEqual = exports.Object.deepStrictEqual;

    /**
     * This method truncates a long string to the length specified by n;
     * used by AssertionError.toString
     *
     * @function module:util-x~exports.String.proto.truncate
     * @this {string}
     * @param {module:util-x~NumberLike} n
     * @returns {string}
     */
    exports.String.proto.truncate = function (n) {
        var s = $onlyCoercibleToString(this);

        n = +n;
        if ($strictEqual(n, n) && n >= 0 && s.length > n) {
            s = $call(pSSlice, s, 0, n);
        }

        return s;
    };

    exports.String.proto.truncate.argNames = ['n'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} truncates a long string to the length specified by n;
     * used by AssertionError.toString
     *
     * @function module:util-x~exports.String.truncate
     * @param {string} s
     * @param {module:util-x~NumberLike} n
     * @returns {string}
     */
    exports.String.truncate = $toMethod(exports.String.proto.truncate);
    exports.String.truncate.argNames = ['s', 'n'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} truncates a long string to the length specified by n;
     * used by AssertionError.toString
     *
     * @private
     * @function module:util-x~$truncate
     * @param {string} s
     * @param {module:util-x~NumberLike} n
     * @returns {string}
     */
    $truncate = exports.String.truncate;

    /**
     * This method inherits the prototype methods from one constructor into another.
     *
     * @function module:util-x~exports.Function.proto.inherits
     * @this {Function}
     * @param {Function} superCtor
     * @returns {undefined}
     */
    exports.Function.proto.inherits = function (superCtor) {
        $throwIfNotFunction(this);
        $throwIfNotFunction(superCtor);

        $defineProperty(this, 'superCtor', $assign({
            value: superCtor
        }, propConstant));

        this.prototype = $create(superCtor.prototype);
        $defineProperty(this.prototype, 'constructor', $assign({
            value: this
        }, propNotEnumerable));
    };

    exports.Function.proto.inherits.argNames = ['superCtor'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
     *
     * @function module:util-x~exports.Function.inherits
     * @param {Function} ctor
     * @param {Function} superCtor
     * @returns {undefined}
     */
    exports.Function.inherits = $toMethod(exports.Function.proto.inherits);
    exports.Function.inherits.argNames = ['ctor', 'superCtor'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
     *
     * @private
     * @function module:util-x~$inherits
     * @param {Function} ctor
     * @param {Function} superCtor
     * @returns {undefined}
     */
    $inherits = exports.Function.inherits;

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     *
     * @function module:util-x~exports.Error.isErrorTypeConstructor
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Error.isErrorTypeConstructor = function (inputArg) {
        var result;

        switch (inputArg) {
        case CError:
            /* falls through */
        case CTypeError:
            /* falls through */
        case CSyntaxError:
            /* falls through */
        case CRangeError:
            /* falls through */
        case CEvalError:
            /* falls through */
        case CReferenceError:
            /* falls through */
        case CURIError:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    exports.Error.isErrorTypeConstructor.argNames = ['inputArg'];

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     *
     * @private
     * @function module:util-x~$isErrorTypeConstructor
     * @param {*} inputArg
     * @returns {boolean}
     */
    $isErrorTypeConstructor = exports.Error.isErrorTypeConstructor;

    /**
     * Custom replacer used to help stringify error messages.
     *
     * @function module:util-x~exports.customErrorReplacer
     * @param {string} key Unused
     * @param {*} value
     * @returns {string}
     */
    exports.customErrorReplacer = function () {
        var value = $getArgItem(arguments, 1),
            type = typeof value,
            result;

        if (type === 'string') {
            result = value;
        } else if (type === 'undefined' ||
                    value === Infinity ||
                    value === -Infinity ||
                    exports.Number.isNaN(value) ||
                    $isFunction(value) ||
                    $isRegExp(value)) {

            result = $toString(value);
        } else {
            result = value;
        }

        return result;
    };

    exports.customErrorReplacer.argNames = ['key', 'value'];

    // Error closure
    (function () {
        var patchedIEErrorToString = false,
            previousIEErrorToString;

        /**
         * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
         * This is an obtrusive fix.
         *
         * @function module:util-x~exports.normaliseErrorIEToStringOn
         * @returns {boolean}
         */
        exports.normaliseErrorIEToStringOn = function () {
            var message = 'Should we patch IE6&7?';

            try {
                throw new CError(message);
            } catch (ePatch) {
                if (ePatch.message === message && ePatch.toString() === stringTagError) {
                    previousIEErrorToString = protoError.toString;
                    $defineProperties(protoError, {
                        toString: $assign({
                            value: function () {
                                return this.name + ': ' + this.message;
                            }
                        }, propNotEnumerable)
                    });

                    patchedIEErrorToString = true;
                }
            }

            return patchedIEErrorToString;
        };

        /**
         * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
         * This is an obtrusive fix.
         *
         * @function module:util-x~exports.normaliseErrorIEToStringOff
         * @returns {boolean}
         */
        exports.normaliseErrorIEToStringOff = function () {
            if (patchedIEErrorToString) {
                $defineProperties(protoError, {
                    toString: $assign({
                        value: previousIEErrorToString
                    }, propNotEnumerable)
                });

                previousIEErrorToString = null;
                patchedIEErrorToString = false;
            }

            return patchedIEErrorToString;
        };

        /**
         * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
         * This is an obtrusive fix.
         *
         * @function module:util-x~exports.normaliseErrorIEToStringState
         * @returns {boolean}
         */
        exports.normaliseErrorIEToStringState = function () {
            return patchedIEErrorToString;
        };
    }());

    /**
     * Creates a custom Error. If and invalid ErrorConstructor is provided it will default to Error.
     * If a valid native Error type constructor is provided but not supporte by the browesr the it will
     * also default to Error. (Looking at you IE < 9)
     *
     * @function module:util-x~exports.customError
     * @param {string} name
     * @param {Function} [ErrorConstructor] Does not work with IE < 9, only Error can be used (defult: Error)
     * @param {module:util-x~NumberLike} [maxMessageLength] Range 64 to Infinity (128 default)
     * @returns {Function}
     */
    exports.customError = (function () {
        var splitNewLine = new CRegExp('\\r\\n|\\n'),
            isOkToUseOtherErrors,
            Custom;

        /**
         * Creates a custom Error constructor.
         *
         * @private
         * @function makeCustomError
         * @param {string} name
         * @param {Function} ErrorConstructor Does not work with IE < 9, only Error can be used
         * @param {module:util-x~NumberLike} [maxMessageLength] Range 64 to Infinity (128 default)
         * @returns {Function}
         */
        function makeCustomError(name, ErrorConstructor, maxMessageLength) {
            var CustomError;

            if (typeof name !== 'string' || name === '') {
                throw new CTypeError('"name" was not a valid string: ' + $toString(name));
            }

            if (!$isErrorTypeConstructor(ErrorConstructor)) {
                throw new CTypeError('"ErrorConstructor" was not an Error type');
            }

            maxMessageLength = +maxMessageLength;
            if (!$strictEqual(maxMessageLength, maxMessageLength) || maxMessageLength < 64) {
                maxMessageLength = 128;
            }

            /**
             * @private
             * @constructor makeCustomError
             * @augments ErrorConstructor
             */
            CustomError = function (message, stackStartFunction) {
                var err;

                if (typeof message !== 'string') {
                    message = $truncate($stringify(message, exports.customErrorReplacer), maxMessageLength);
                }

                $defineProperty(this, 'message', $assign({
                    value: message
                }, propNotEnumerable));

                if (!$isFunction(stackStartFunction)) {
                    stackStartFunction = CustomError;
                }

                this.stackStartFunction = stackStartFunction;
                if ($isFunction(ErrorConstructor.captureStackTrace)) {
                    ErrorConstructor.captureStackTrace(this, this.stackStartFunction);
                } else {
                    err = $call(ErrorConstructor, this);
                    if (typeof err.stack === 'string') {
                        $defineProperty(this, 'stack', $assign({
                            value: err.stack
                        }, propNotEnumerable));
                    } else if (typeof err.stacktrace === 'string') {
                        $defineProperty(this, 'stack', $assign({
                            value: err.stacktrace
                        }, propNotEnumerable));
                    }
                }
            };

            $inherits(CustomError, ErrorConstructor);

            $defineProperties(CustomError.prototype, {
                /**
                 * @private
                 * @name CustomError.prototype.name
                 * @type {string}
                 */
                name: $assign({
                    value: name
                }, propNotEnumerable),

                /**
                 * @private
                 * @function CustomError.prototype.toString
                 */
                toString: $assign({
                    value: function () {
                        var arr = $split(this.message, splitNewLine),
                            messageToString = this.name + ': ',
                            length = $toLength(arr.length),
                            tempArr,
                            element,
                            index;

                        if (length > 1) {
                            tempArr = [];
                            for (index = 0; index < length; index += 1) {
                                element = arr[index];
                                if (!$stringContains(element, 'opera:config#UserPrefs|Exceptions Have Stacktrace')) {
                                    $push(tempArr, element);
                                }
                            }

                            messageToString += $join(tempArr, '\n');
                        } else {
                            messageToString += this.message;
                        }

                        return messageToString;
                    }
                }, propNotEnumerable)
            });

            return CustomError;
        }

        try {
            Custom = makeCustomError('CustomSyntaxError', CSyntaxError);
            isOkToUseOtherErrors = $instanceOf(new Custom('test'), CSyntaxError);
        } catch (eCSE) {
            // IE < 9
            isOkToUseOtherErrors = false;
        }

        return function (name, ErrorConstructor, maxMessageLength) {
            if (typeof name !== 'string') {
                throw new CTypeError('"name" was not a string: ' + $toString(name));
            }

            if (name === '') {
                throw new CSyntaxError('"name" was an empty string');
            }

            if ($isUndefined(maxMessageLength)) {
                var type = typeof ErrorConstructor;

                if (type === 'number' || type === 'string') {
                    maxMessageLength = ErrorConstructor;
                    ErrorConstructor = CError;
                }
            }

            if (!isOkToUseOtherErrors || !$isErrorTypeConstructor(ErrorConstructor)) {
                ErrorConstructor = CError;
            }

            return makeCustomError(name, ErrorConstructor, maxMessageLength);
        };
    }());

    exports.customError.argNames = ['name', 'ErrorConstructor', 'maxMessageLength'];

    /**
     * Swap places of 2 item values on an object's properties.
     *
     * @function module:util-x~exports.Object.swapItems
     * @param {Object} object
     * @param {module:util-x~NumberLike} prop1
     * @param {module:util-x~NumberLike} prop2
     * @returns {Object}
     */
    exports.Object.swapItems = function (object, prop1, prop2) {
        $throwIfIsPrimitive(object);
        prop1 = $toString(prop1);
        prop2 = $toString(prop2);

        var temp1,
            temp2,
            num,
            cond1,
            cond2;

        if (prop1 !== prop2) {
            temp1 = exports.Object.getOwnPropertyDescriptor(object, prop1) || {};
            temp2 = exports.Object.getOwnPropertyDescriptor(object, prop2) || {};
            num = $toLength(prop2);
            cond1 = $hasOwnValidLength(object) && !$isFunction(object) && $toString(num) === prop2;
            if (!$isPlainObject(temp1) || !$call(pHasOwn, temp1, 'value')) {
                if (cond1 && num === $toLength(object.length) - 1) {
                    object.length -= 1;
                }

                $deleteProperty(object, prop2);
            } else {
                if (cond1 && num === $toLength(object.length)) {
                    object.length += 1;
                }

                $defineProperty(object, prop2, temp1);
            }

            num = $toLength(prop1);
            cond2 = $hasOwnValidLength(object) && !$isFunction(object) && $toString(num) === prop1;
            if (!$isPlainObject(temp2) || !$call(pHasOwn, temp2, 'value')) {
                if (cond2 && num === $toLength(object.length) - 1) {
                    object.length -= 1;
                }

                $deleteProperty(object, prop1);
            } else {
                $defineProperty(object, prop1, temp2);
                if (cond2 && num === $toLength(object.length)) {
                    object.length += 1;
                }

                $defineProperty(object, prop1, temp2);
            }
        }

        return object;
    };

    exports.Object.swapItems.argNames = ['object', 'prop1', 'prop2'];

    /**
     * This method performs Fisher-Yates shuffle for randomly shuffling a set.
     *
     * @function module:util-x~exports.Array.proto.shuffle
     * @this {module:util-x~ArrayLike}
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~NumberLike} [rounds]
     * @returns {Array}
     * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    exports.Array.proto.shuffle = function (rounds) {
        var object = $toObject(this),
            isString,
            inLen,
            outLen,
            inIndex,
            outIndex,
            rand,
            tempVal,
            hasItem;

        if ($hasOwnValidLength(object) && !$isFunction(object)) {
            inLen = $toLength(object.length);
            isString = $toStringTag(object) === stringTagString;
            if (isString) {
                tempVal = {};
                for (inIndex = 0; inIndex < inLen; inIndex += 1) {
                    tempVal[inIndex] = $call(pCharAt, object, inIndex);
                }

                object = tempVal;
            }

            object.length = inLen;
            if (inLen > 1) {
                outLen = $min($max($toInteger(rounds), 1), MAX_SAFE_INTEGER);
                for (outIndex = 0; outIndex < outLen; outIndex += 1) {
                    for (inIndex = 0; inIndex < inLen; inIndex += 1) {
                        rand = $randomInt(inIndex);
                        hasItem = $call(pHasOwn, object, inIndex);
                        tempVal = object[inIndex];
                        if ($call(pHasOwn, object, rand)) {
                            object[inIndex] = object[rand];
                        } else {
                            $deleteProperty(object, inIndex);
                        }

                        if (hasItem) {
                            object[rand] = tempVal;
                        } else {
                            $deleteProperty(object, rand);
                        }
                    }
                }
            }

            if (isString) {
                tempVal = '';
                for (inIndex = 0; inIndex < inLen; inIndex += 1) {
                    tempVal += object[inIndex];
                }

                object = $toObject(tempVal);
            }
        }

        return object;
    };

    exports.Array.proto.shuffle.argNames = ['rounds'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} performs Fisher-Yates shuffle for randomly shuffling a set.
     *
     * @function module:util-x~exports.Array.shuffle
     * @param {module:util-x~ArrayLike} array
     * @throws {TypeError} If array is null or undefined
     * @param {module:util-x~NumberLike} [rounds]
     * @returns {Array}
     * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    exports.Array.shuffle = $toMethod(exports.Array.proto.shuffle);
    exports.Array.proto.shuffle.argNames = ['array', 'rounds'];

    /**
     *  This function returns an ISO 8601 representation of the instance in time
     *  represented by this Date object.
     *
     * @function module:util-x~exports.Date.proto.toISOString
     * @this {Date}
     * @throws {RangeError} If not a valid date.
     * @returns {string} An ISO 8601 representation of the date.
     */
    exports.Date.proto.toISOString = $decide(
        // test
        function () {
            $affirmBasic(base.Date.toISOString)();

            $affirm.throws(function () {
                $call(base.Date.toISOString, null);
            }, CTypeError, 'Throws if not date object');

            $affirm.throws(function () {
                $call(base.Date.toISOString, new CDate(MAX_VALUE));
            }, CRangeError, 'Throws on invalid date');

            var value;

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toISOString, new CDate(-8.64e15));
            }, 'test1');

            // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
            // serialize extended years.
            $affirm.strictEqual(value, '-271821-04-20T00:00:00.000Z', 'test2');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toISOString, new CDate(8.64e15));
            }, 'test3');

            // The milliseconds are optional in ES 5, but required in 5.1.
            $affirm.strictEqual(value, '+275760-09-13T00:00:00.000Z', 'test4');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toISOString, new CDate(-621987552e5));
            }, 'test5');

            // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
            // four-digit years instead of six-digit years. Credits: @Yaffle.
            $affirm.strictEqual(value, '-000001-01-01T00:00:00.000Z', 'test6');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toISOString, new CDate(-1));
            }, 'test7');

            // Safari <= 5.1.7 and Opera >= 10.53 incorrectly serialize millisecond
            // values less than 1000. Credits: @Yaffle.
            $affirm.strictEqual(value, '1969-12-31T23:59:59.999Z', 'test8');
        },

        // pass
        function () {
            return base.Date.toISOString;
        },

        // fail
        function () {
            var pGetUTCFullYear = base.Date.proto.getUTCFullYear,
                pGetUTCMonth =  base.Date.proto.getUTCMonth,
                pGetUTCDate =  base.Date.proto.getUTCDate,
                pGetUTCHours =  base.Date.proto.getUTCHours,
                pGetUTCMinutes =  base.Date.proto.getUTCMinutes,
                pGetUTCSeconds =  base.Date.proto.getUTCSeconds,
                pGetUTCMilliseconds =  base.Date.proto.getUTCMilliseconds;

            return function () {
                if (!exports.Date.isDate(this)) {
                    throw new CTypeError('this is not a Date object.');
                }

                if (!exports.Date.isValid(this)) {
                    throw new CRangeError('Invalid time value');
                }

                var result,
                    index,
                    length,
                    value,
                    year,
                    month,
                    date,
                    time,
                    sign;

                year = $call(pGetUTCFullYear, this);
                month = $call(pGetUTCMonth, this);
                year += $floor(month / 12);
                month = (month % 12 + 12) % 12;

                result = [
                    month + 1,
                    $call(pGetUTCDate, this),
                    $call(pGetUTCHours, this),
                    $call(pGetUTCMinutes, this),
                    $call(pGetUTCSeconds, this)
                ];

                if (year < 0) {
                    sign = '-';
                } else if (year > 9999) {
                    sign = '+';
                } else {
                    sign = '';
                }

                if (0 <= year && year <= 9999) {
                    length = -4;
                } else {
                    length = -6;
                }

                year = sign + $call(pSSlice, '00000' + $abs(year), length);
                length = $toLength(result.length);
                for (index = 0; index < length; index += 1) {
                    value = result[index];
                    if (value < 10) {
                        result[index] = '0' + value;
                    }
                }

                // pad milliseconds to have three digits.
                date = year + '-' + $join($slice(result, 0, 2), '-');
                time = $join($slice(result, 2), ':') + '.' + $call(pSSlice, '000' + $call(pGetUTCMilliseconds, this), -3);

                return date + 'T' + time + 'Z';
            };
        },

        // message
        'Date.toISOString shim'
    );

    /**
     *  This function returns an ISO 8601 representation of the instance in time
     *  represented by this Date object.
     *
     * @function module:util-x~exports.Date.toISOString
     * @param {Date} date A Javascript Date object.
     * @throws {RangeError} If not a valid date.
     * @returns {string} An ISO 8601 representation of the date.
     */
    exports.Date.toISOString = $toMethod(exports.Date.proto.toISOString);
    exports.Date.toISOString.argNames = ['date'];

    /**
     * Create date object with .toISOString and .toJSON methods attached.
     * Used for testing Date.prototype.toJSON and JSON.stringify
     *
     * @private
     * @function module:util-x~$makeDate
     * @param {*} inputArg Value to be passed to the Date constructor
     * @returns {date} A date object with .toISOString and .toJSON
     */
    function $makeDate(inputArg) {
        var date = new CDate(inputArg);

        date.toISOString = exports.Date.proto.toISOString;
        date.toJSON = exports.Date.proto.toJSON;

        return date;
    }

    /**
     *  This function returns an ISO 8601 representation of the instance in time
     *  represented by this Date object.
     *
     * @function module:util-x~exports.Date.proto.toJSON
     * @this {Date}
     * @param {*} [key] Ignored
     * @throws {RangeError} If not a valid date.
     * @returns {string} An ISO 8601 representation of the date.
     */
    exports.Date.proto.toJSON = $decide(
        // test
        function () {
            $affirmBasic(base.Date.toJSON)();

            var value;

            $affirm.throws(function () {
                value = $call(base.Date.toJSON, $makeDate(-8.64e15));
                value.toISOString = null;
            }, CTypeError, 'Throw if toISOString is not a function');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, $makeDate(-8.64e15));
            }, 'test1');

            $affirm.strictEqual(value, '-271821-04-20T00:00:00.000Z', 'test2');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, $makeDate(8.64e15));
            }, 'test3');

            $affirm.strictEqual(value, '+275760-09-13T00:00:00.000Z', 'test4');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, $makeDate(-621987552e5));
            }, 'test5');

            $affirm.strictEqual(value, '-000001-01-01T00:00:00.000Z', 'test6');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, $makeDate(-1));
            }, 'test7');

            $affirm.strictEqual(value, '1969-12-31T23:59:59.999Z', 'test8');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, NaN);
            }, 'test9');

            $affirm.strictEqual(value, null, 'test10');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, Infinity);
            }, 'test11');

            $affirm.strictEqual(value, null, 'test12');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, -Infinity);
            }, 'test13');

            $affirm.strictEqual(value, null, 'test14');

            $affirm.doesNotThrow(function () {
                value = $call(base.Date.toJSON, $makeDate(MAX_VALUE));
            }, 'test15');

            $affirm.strictEqual(value, null, 'test16');
        },

        // pass
        function () {
            return base.Date.toJSON;
        },

        // fail
        function () {
            return function () {
                var object = $toObject(this),
                    tv = $toPrimitive(object),
                    rtn;

                if (typeof tv === 'number' && !$isFinite(tv)) {
                    rtn = null;
                } else {
                    rtn = $throwIfNotFunction(object.toISOString).call(object);
                }

                return rtn;
            };
        },

        // argNames
        ['key'],

        // message
        'Date.toJSON shim'
    );

    /**
     *  This function returns an ISO 8601 representation of the instance in time
     *  represented by this Date object.
     *
     * @function module:util-x~exports.Date.toJSON
     * @param {Date} date A Javascript Date object.
     * @throws {RangeError} If not a valid date.
     * @returns {string} An ISO 8601 representation of the date.
     */
    exports.Date.toJSON = $toMethod(exports.Date.proto.toJSON);
    exports.Date.toJSON.argNames = ['date', 'key'];

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     *
     * @function module:util-x~exports.JSON.stringify
     * @param {*} value
     * @param {(Function|Array)} replacer
     * @param {number} space
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     */
    exports.JSON.stringify = (function (mStringify) {
        return $decide(
            //test
            function () {
                $affirmBasic(mStringify)();

                function customJSON() {
                    return 1;
                }

                customJSON.toJSON = customJSON;

                /*jslint newcap: true */
                $affirm.strictEqual(mStringify(CNumber(1)), '1', 'test1');
                $affirm.strictEqual(mStringify(CBoolean(true)), 'true', 'test2');
                $affirm.strictEqual(mStringify(CString('abc')), '"abc"', 'test3');
                /*jslint newcap: false */

                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                $affirm.strictEqual(mStringify(0), '0', 'test4');
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                $affirm.strictEqual(mStringify(new CNumber()), '0', 'test5');
                $affirm.strictEqual(mStringify(new CString()), '""', 'test6');
                // FF 3.1b1, 2 throw an error if the toJSON is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                $affirm.doesNotThrow(function () {
                    mStringify(noop);
                }, 'should not throw');
                $affirm.ok($isUndefined(mStringify(noop)), 'test7');
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                $affirm.ok($isUndefined(mStringify(Undefined)), 'test8');
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the toSON is omitted entirely.
                $affirm.doesNotThrow(function () {
                    mStringify();
                }, 'test9');
                $affirm.ok($isUndefined(mStringify()), 'test10');
                // FF 3.1b1, 2 throw an error if the given testTemp.a is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                $affirm.doesNotThrow(function () {
                    mStringify(customJSON);
                    mStringify([customJSON]);
                }, 'test11');
                $affirm.strictEqual(mStringify(customJSON), '1', 'test12');
                $affirm.strictEqual(mStringify([customJSON]), '[1]', 'test13');
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                $affirm.strictEqual(mStringify([Undefined]), '[null]', 'test14');
                // YUI 3.0.0b1 fails to serialize `null` literals.
                $affirm.strictEqual(mStringify(null), 'null', 'test15');
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, noop, 1]` serializes as "[1,true,],". These versions
                // of Firefox also allow trailing commas in JSON objects and arrays.
                // FF 3.1b3 elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                $affirm.strictEqual(mStringify([Undefined, noop, null]), '[null,null,null]', 'test16');
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                // Removed test for '\0' => '\\'u0000'as Chrome 10 fails in 'use strict' mode with
                // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.
                $affirm.doesNotThrow(function () {
                    mStringify({
                        'A': [customJSON, true, false, null, '\b\n\f\r\t']
                    });
                }, 'test17');
                $affirm.strictEqual(mStringify({
                    'A': [customJSON, true, false, null, '\b\n\f\r\t']
                }), '{"A":[1,true,false,null,"\\b\\n\\f\\r\\t"]}', 'test18');
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                //mStringify(null, testTemp.customJSON) === '"1"' &&
                $affirm.strictEqual(mStringify([1, 2], null, 1), '[\n 1,\n 2\n]', 'test19');

                var date = $makeDate(-8.64e15);

                $affirm.strictEqual(mStringify(date), '"-271821-04-20T00:00:00.000Z"', 'test20');
                date = $makeDate(8.64e15);
                $affirm.strictEqual(mStringify(date), '"+275760-09-13T00:00:00.000Z"', 'test21');
                date = $makeDate(-621987552e5);
                $affirm.strictEqual(mStringify(date), '"-000001-01-01T00:00:00.000Z"', 'test22');
                date = $makeDate(-1);
                $affirm.strictEqual(mStringify(date), '"1969-12-31T23:59:59.999Z"', 'test22');

                date.toJSON = undefined;
                $affirm.strictEqual(mStringify(date), '{}', 'test23');
            },

            // pass
            function () {
                return mStringify;
            },

            // fail
            function () {
                var sfyEscapable = new CRegExp('[\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-' +
                                                '\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f\\u2028-' +
                                                '\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]', 'g'),
                    sfyMeta = {
                        '\b': '\\b',
                        '\t': '\\t',
                        '\n': '\\n',
                        '\f': '\\f',
                        '\r': '\\r',
                        '"': '\\"',
                        '\\': '\\\\'
                    },
                    sfyIndent,
                    sfyGap,
                    sfyReplacer;

                /**
                 * @private
                 * @function
                 */
                function stringifyQuote(string) {
                    var result = '"',
                        hex;

                    sfyEscapable.lastIndex = 0;
                    if ($test(sfyEscapable, string)) {
                        result += $replace(string, sfyEscapable, function (a) {
                            var c = sfyMeta[a],
                                r;

                            if (typeof c === 'string') {
                                r = c;
                            } else {
                                hex = $toString($call(pCharCodeAt, a, 0), 16);
                                r = '\\u' + $call(pSSlice, '0000', 0, -hex.length) + hex;
                            }

                            return r;
                        });
                    } else {
                        result += string;
                    }

                    return result + '"';
                }

                /**
                 * @private
                 * @function
                 */
                function stringifyToString(key, holder, circular) {
                    if (!$isArray(circular)) {
                        circular = [];
                    }

                    var member,
                        mind = sfyGap,
                        partial,
                        value = holder[key],
                        element,
                        theGap,
                        length,
                        index,
                        keys,
                        cl,
                        v;

                    if (value !== null && !$isUndefined(value) && $isFunction(value.toJSON)) {
                        value = value.toJSON(key);
                    }

                    if ($isFunction(sfyReplacer)) {
                        value = $call(sfyReplacer, holder, key, value);
                    }

                    if (!$isPrimitive(value)) {
                        cl = $toStringTag(value);
                        if (cl === stringTagString || cl === stringTagNumber || cl === stringTagBoolean) {
                            value = $toPrimitive(value);
                        }
                    }

                    switch ($typeOf(value)) {
                    case 'string':
                        return stringifyQuote(value);
                    case 'number':
                        if (value !== Infinity && value !== -Infinity) {
                            return $toString(value);
                        }

                        return 'null';
                    case 'boolean':
                    case 'null':
                        return $toString(value);
                    case 'object':
                        if (value === null) {
                            return $toString(value);
                        }

                        length = $toLength(circular.length);
                        for (index = 0; index < length; index += 1) {
                            if (value === circular[index]) {
                                throw new CTypeError('Converting circular structure to JSON');
                            }
                        }

                        circular.length = length + 1;
                        circular[length] = value;
                        sfyGap += sfyIndent;
                        partial = [];
                        if ($isArray(value)) {
                            length = $toLength(value.length);
                            for (index = 0; index < length; index += 1) {
                                $push(partial, stringifyToString(index, value, circular) || 'null');
                            }

                            if (!$toLength(partial.length)) {
                                member = '[]';
                            } else if (typeof sfyGap === 'string' && sfyGap !== '') {
                                member = '[\n' + sfyGap +  $join(partial, ',\n' + sfyGap) + '\n' + mind + ']';
                            } else {
                                member = '[' + $join(partial, ',') + ']';
                            }

                            sfyGap = mind;

                            return member;
                        }

                        if (typeof sfyGap === 'string' && sfyGap !== '') {
                            theGap = ': ';
                        } else {
                            theGap = ':';
                        }

                        if ($isArray(sfyReplacer)) {
                            length = $toLength(sfyReplacer.length);
                            for (index = 0; index < length; index += 1) {
                                element = sfyReplacer[index];
                                if (typeof element === 'string') {
                                    v = stringifyToString(element, value, circular);
                                    if (!$isUndefined(v)) {
                                        $push(partial, stringifyQuote(element) + theGap + v);
                                    }
                                }
                            }
                        } else {
                            keys = $objectKeys(value);
                            length = $toLength(keys.length);
                            for (index = 0; index < length; index += 1) {
                                element = keys[index];
                                v = stringifyToString(element, value, circular);
                                if (!$isUndefined(v)) {
                                    $push(partial, stringifyQuote(element) + theGap + v);
                                }
                            }
                        }

                        if (!$toLength(partial.length)) {
                            member = '{}';
                        } else if (typeof sfyGap === 'string' && sfyGap !== '') {
                            member = '{\n' + sfyGap + $join(partial, ',\n' + sfyGap) + '\n' + mind + '}';
                        } else {
                            member = '{' + $join(partial, ',') + '}';
                        }

                        sfyGap = mind;

                        return member;
                    }

                    return Undefined;
                }

                return function (value, replacer, space) {
                    sfyGap = '';

                    var type = typeof space;

                    if (type === 'number') {
                        sfyIndent = $repeat(' ', space);
                    } else if (type === 'string') {
                        sfyIndent = space;
                    } else {
                        sfyIndent = '';
                    }

                    sfyReplacer = replacer;
                    if (replacer !== null && !$isUndefined(replacer) && !$isFunction(replacer) && !$isArray(replacer)) {
                        throw new CError('JSON.stringify');
                    }

                    return stringifyToString('', {
                        '': value
                    });
                };
            },

            //argNames
            ['value', 'replacer', 'space'],

            // message
            'JSON.stringify shim'
        );
    }(base.JSON.stringify));

    /**
     * Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
     *
     * @private
     * @function module:util-x~mParse
     * @param {string} text
     * @param {(Function|Array)} reviver
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
     */
    exports.JSON.parse = (function (mParse) {
        var argNames = ['text', 'reviver'];

        return $decide(
            //test
            function () {
                $affirmBasic(mParse)();

                // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
                // Conforming implementations should also coerce the initial argument to
                // a string prior to parsing.
                $affirm.strictEqual(mParse('0'), 0, 'test1');
                $affirm.strictEqual(mParse(false), false, 'test2');

                var parseSimple;

                $affirm.doesNotThrow(function () {
                    parseSimple = mParse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
                }, 'test3');

                $affirm.strictEqual(parseSimple.A.length, 5, 'test4');
                $affirm.strictEqual(parseSimple.A[0], 1, 'test5');
                // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in string.
                $affirm.throws(function () {
                    mParse('"\t"');
                }, CSyntaxError, 'test6');

                // FF 4.0 and 4.0.1 allow leading `+` signs, and leading and
                // trailing decimal points. FF 4.0, 4.0.1, and IE 9-10 also
                // allow certain octal literals.
                $affirm.throws(function () {
                    mParse('01');
                }, CSyntaxError, 'test7');
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.throws(function () {
                            mParse();
                        }, CSyntaxError, 'test8');
                    },

                    // pass
                    function () {
                        return mParse;
                    },

                    // fail
                    function () {
                        return function (text, reviver) {
                            if ($isUndefined(text)) {
                                throw new CSyntaxError('JSON.parse');
                            }

                            return mParse(text, reviver);
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'JSON.parse patch'
                );
            },

            //fail
            function () {
                var parseProtect1 = new CRegExp('^[\\],:{}\\s]*$'),
                    parseProtect2 = new CRegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g'),
                    parseProtect3 = new CRegExp('"[^"\\\\\\n\\r]*"|true|false|null|' +
                                               '-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g'),

                    parseProtect4 = new CRegExp('(?:^|:|,)(?:\\s*\\[)+', 'g'),
                    parseCharacterTest = new CRegExp('[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5' +
                                                    '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff' +
                                                    '\\ufff0-\\uffff]', 'g');

                /** function */
                function walk(holder, key, reviver) {
                    var value = holder[key],
                        keys,
                        length,
                        index,
                        k,
                        v;

                    if (!$isPrimitive(value) && $typeOf(value) === 'object') {
                        keys = $objectKeys(value);
                        length = $toLength(keys.length);
                        for (index = 0; index < length; index += 1) {
                            k = keys[index];
                            v = walk(value, k);
                            if (!$isUndefined(v)) {
                                value[k] = v;
                            } else {
                                $deleteProperty(value, k);
                            }
                        }
                    }

                    return $call(reviver, holder, key, value);
                }

                return function (text, reviver) {
                    var j;

                    text = $toString(text);
                    parseCharacterTest.lastIndex = 0;
                    if ($test(parseCharacterTest, text)) {
                        text = $replace(text, parseCharacterTest, function (a) {
                            var hex = $toString($call(pCharCodeAt, a, 0), 16);

                            return '\\u' + $call(pSSlice, '0000', 0, -hex.length) + hex;
                        });
                    }

                    if ($test(parseProtect1, $replace($replace($replace(text, parseProtect2, '@'), parseProtect3, ']'), parseProtect4, ''))) {
                        /*jslint evil: true */
                        j = eval('(' + text + ')');
                        /*jslint evil: false */

                        if ($isFunction(reviver)) {
                            return walk({
                                '': j
                            }, '', reviver);
                        }

                        return j;
                    }

                    throw new CSyntaxError('JSON.parse');
                };
            },

            // argNames
            argNames,

            // message
            'JSON.parse shim'
        );
    }(base.JSON.parse));

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     *
     * @private
     * @function module:util-x~$stringify
     * @param {*} value
     * @param {(Function|Array)} replacer
     * @param {number} space
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     */
    $stringify = exports.JSON.stringify;

    /**
     * The substr method takes two arguments, start and length, and returns a substring of the result
     * of converting the this object to a String, starting from character position start and running
     * for length characters (or through the end of the String if length is undefined). If start is
     * negative, it is treated as (sourceLength+start) where sourceLength is the length of the String.
     *
     * @function module:util-x~exports.String.proto.substr
     * @this {string}
     * @param {number} start
     * @param {number} length
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.3
     */
    exports.String.proto.substr = (function () {
        var argNames = ['start', 'length'];

        return $decide(
            // test
            function () {
                $affirmBasic(base.String.substr)();
            },

            // pass
            function () {
                return $decide(
                    // test
                    function () {
                        $affirm.strictEqual($call(base.String.substr, '0b', -1), 'b', 'negative substr bug');
                    },

                    // pass
                    function () {
                        return base.String.substr;
                    },

                    // fail
                    function () {
                        var pSubstr = base.String.substr;

                        return function () {
                            var first = $getArgItem(arguments, 0);

                            if (first < 0) {
                                $setArgItem(arguments, 0, $toLength(this.length + first));
                            }

                            return $apply(pSubstr, this, arguments);
                        };
                    },

                    // argnames
                    argNames,

                    // message
                    'String.substr patch'
                );

            },

            // fail
            function () {
                return function (start, length) {
                    var object = $toString(this),
                        size = object.length,
                        intStart = $toInteger(start),
                        end;

                    if ($isUndefined(length)) {
                        end = Infinity;
                    } else {
                        end = $toInteger(length);
                    }

                    if (intStart < 0) {
                        intStart = $max(size + intStart, 0);
                    }


                    return $call(pSSlice, object, intStart, intStart + $min($max(end, 0), size - intStart));
                };
            },

            //argsNames
            argNames,

            // message
            'String.substr shim'
        );
    }());

    /**
     * The substr method takes two arguments, start and length, and returns a substring of the result
     * of converting the this object to a String, starting from character position start and running
     * for length characters (or through the end of the String if length is undefined). If start is
     * negative, it is treated as (sourceLength+start) where sourceLength is the length of the String.
     *
     * @function module:util-x~exports.String.substr
     * @param {string} object
     * @param {number} start
     * @param {number} length
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.3
     */
    exports.String.substr = $toMethod(exports.String.proto.substr);
    exports.String.substr.argNames = ['object', 'start', 'length'];

    /**
     * The substr method takes two arguments, start and length, and returns a substring of the result
     * of converting the this object to a String, starting from character position start and running
     * for length characters (or through the end of the String if length is undefined). If start is
     * negative, it is treated as (sourceLength+start) where sourceLength is the length of the String.
     *
     * @private
     * @function module:util-x~$substr
     * @param {string} object
     * @param {number} start
     * @param {number} length
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.3
     */
    $substr = exports.String.substr;

    /**
     * This method calculates the Power Set of the array.
     * Sparseness is ignored.
     *
     * @function module:util-x~exports.Array.proto.powerSet
     * @this {(ArrayLike|string)}
     * @throws {TypeError} If array is null or undefined
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    exports.Array.proto.powerSet = (function () {
        var pPowerSet = function () {
            var thisObj = $toObject(this),
                val = [],
                object,
                lastElement,
                pSet,
                len,
                idx,
                it;

            if ($hasOwnValidLength(thisObj) && !$isFunction(thisObj)) {
                len = $toLength(thisObj.length);
                if (len < 1) {
                    $push(val, []);
                } else {
                    if ($toStringTag(thisObj) === stringTagString) {
                        lastElement = $call(pCharAt, thisObj, len - 1);
                        object = $call(pSSlice, thisObj, 0, -1);
                    } else {
                        object = $slice(thisObj);
                        lastElement = $pop(object);
                    }

                    pSet = $call(pPowerSet, object);
                    len = pSet.length;
                    for (idx = 0; idx < len; idx += 1) {
                        it = pSet[idx];
                        $push(val, it);
                        pSet[idx] = it = $slice(it);
                        $push(it, lastElement);
                        $push(val, it);
                    }
                }
            } else {
                $push(val, []);
            }

            val.length = $toLength(val.length);

            return val;
        };

        return pPowerSet;
    }());

    /**
     * This {@link module:util-x~boundPrototypalFunction method} calculates the Power Set of a given array.
     *
     * @function module:util-x~exports.Array.powerSet
     * @param {(ArrayLike|string)} array
     * @throws {TypeError} If array is null or undefined
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    exports.Array.powerSet = $toMethod(exports.Array.proto.powerSet);

    /**
     * Convert an array to a plain object representation.
     *
     * @function module:util-x~exports.Array.proto.toObject
     * @this {module:util-x~ArrayLike}
     * @returns {Object}
     */
    exports.Array.proto.toObject = function () {
        var object = $toObject(this),
            accumulator = {},
            stringTag,
            length,
            index;

        if ($hasOwnValidLength(object) && !$isFunction(object)) {
            stringTag = $toStringTag(object);
            accumulator.length = length = $toLength(object.length);
            for (index = 0; index < length; index += 1) {
                if ($hasItem(object, index, stringTag)) {
                    accumulator[index] = $getItem(object, index, stringTag);
                }
            }
        } else {
            accumulator.length = 0;
        }

        return accumulator;
    };

    /**
     * Convert an array to a plain object representation.
     *
     * @function module:util-x~exports.Array.toObject
     * @param {module:util-x~ArrayLike} array
     * @returns {Object}
     */
    exports.Array.toObject = $toMethod(exports.Array.proto.toObject);

    /**
     * Determines if the supplied object is an instance of a particular constructor or
     * if the supplied object has the matching 'classId' on its constructor property.
     *
     * @private
     * @function module:util-x~$isInstance
     * @param {*} object The object to be tested.
     * @param {Function} Ctor The constructor to test the object against.
     * @throws {TypeError} If Ctor is not a constructor.
     * @returns {boolean} True if object is an instance of Ctor or
     *                    has the matching `classId` otherwise false.
     */
    function $isInstance(object, Ctor) {
        if (!$isFunction(Ctor)) {
            throw new CTypeError('Ctor is not a constructor.');
        }

        var rtn = false;

        if (object !== null && !$isUndefined(object)) {
            if ($instanceOf(object, Ctor)) {
                rtn = true;
            } else if (!$isPrimitive(object) && !$isPlainObject(object) && !$isFunction(object) && typeof object.classId === 'string') {
                // this could be more robust
                rtn = object.classId === Ctor.prototype.classId;
            }
        }

        return rtn;
    }

    // Big closure
    (function () {
        /**
         * A Big number instance used for arbitrary-precision decimal arithmetic.
         *
         * @typedef {Object} module:util-x~bigobject
         * @property {number} s Sign. -1 or 1.
         * @property {number} e Exponent. Integer, -1e+6 to 1e+6 inclusive.
         * @property {Array.<number>} c Coefficient. Array of single digits.
         * @see http://mikemcl.github.io/big.js/
         */

        /**
         * A BigError instance.
         *
         * @typedef {Object} module:util-x~bigerror
         * @property {string} message Human readable error message.
         * @property {string} name 'BigError'.
         */

        /**
         * An object with a value that {@link Big} accepts as a valid numeric value.<br/>
         * <br/>
         * A decimal value.<br/>
         * <br/>
         * String values may be in exponential, as well as normal (non-exponential) notation.<br/>
         * <br/>
         * There is no limit to the number of digits of a string value (other than that of Javascript's
         * maximum array size 2^32-1), but the largest recommended exponent magnitude is 1e+6.<br/>
         * <br/>
         * Infinity, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.<br/>
         * <br/>
         * String values in octal literal form will be interpreted as decimals, e.g. '011' is 11, not 9.<br/>
         *<br/>
         * Any object where the `valueOf` gives a valid number or string value, as above.
         *
         * @typedef {*} module:util-x~validNumeric
         */

        // Declare variables used globally within this scope.

        var
            /***************************** START EDITABLE DEFAULTS ******************************/

            // The default values below must be integers within the stated ranges.

            /**
             * The maximum number of decimal places of the results of operations
             * involving division: div and sqrt, and pow with negative exponents.
             * The maximum value of DP and Big.DP. 0 to MAX_DP
             *
             * @private
             * @const
             * @type {number}
             * @default 20
             */
            DP = 20,

            /**
             * The rounding mode used when rounding to the above decimal places.<br/>
             * <br/>
             * 0 Towards zero (i.e. truncate, no rounding).       (ROUND_DOWN)<br/>
             * 1 To nearest neighbour. If equidistant, round up.  (ROUND_HALF_UP)<br/>
             * 2 To nearest neighbour. If equidistant, to even.   (ROUND_HALF_EVEN)<br/>
             * 3 Away from zero.                                  (ROUND_UP)<br/>
             *
             * @private
             * @const
             * @type {number}
             * @default
             */
            RM = 1,

            /**
             * The maximum value of DP and Big.DP. 0 to 1000000
             *
             * @private
             * @const
             * @type {number}
             * @default 1E6
             */
            MAX_DP = 1E6,

            /**
             * The maximum magnitude of the exponent argument to the pow method. 0 to 1000000
             *
             * @private
             * @const
             * @type {number}
             * @default 1E6
             */
            MAX_POWER = 1E6,

            /**
             * The exponent value at and beneath which toString returns exponential
             * notation. 0 to -1000000
             * <br/>
             * -1000000 is the minimum recommended exponent value of a Big.
             *
             * @private
             * @const
             * @type {number}
             * @default -7
             */
            TO_EXP_NEG = -7,

            /**
             * The exponent value at and above which toString returns exponential
             * notation. 0 to 1000000
             * <br/>
             * 1000000 is the maximum recommended exponent value of a Big.
             * (This limit is not enforced or checked.)
             *
             * @private
             * @const
             * @type {number}
             * @default 21
             */
            TO_EXP_POS = 21,

            /***************************** END EDITABLE DEFAULTS ******************************/

            /**
             * @private
             * @constructor
             * @param {*} [message] Human-readable description of the error.
             * @returns {Function}
             */
            BigError = exports.customError('BigError', CError),

            /**
             * The string to be used for identifying Big instances.
             *
             * @private
             * @const
             * @type {string}
             * @default '[object Big]'
             */
            bigClassID = '[object Big]',

            /**
             * The regular expression used for validating the argument of a new Big.
             *
             * @private
             * @const
             * @type {RegExp}
             * @default /^-?(\d+(\.\d*)?|\.\d+)(e[+\-]?\d+)?$/i
             */
            isValid = /^-?(\d+(\.\d*)?|\.\d+)(e[+\-]?\d+)?$/i,

            /**
             * Used to keep jslint happy whenever we divide or multiply bu zero.
             *
             * @private
             * @const
             * @type {number}
             * @default 0
             */
            zero = 0,

            /**
             * Variable used for a function expression.
             * Primarily to keep jslint happy when a function can not
             * be defined before it is used.
             */
            plus,

            /**
             * Variable used for a function expression.
             * Primarily to keep jslint happy when a function can not
             * be defined before it is used.
             */
            minus;

        /**
         * @private
         * @readonly
         * @name BigNumber.version
         * @type {string}
         */
        $defineProperty(BigError, 'version', $assign({
            value: '0.2.0'
        }, propConstant));

        $defineProperties(BigError.prototype, {
            /**
             * @private
             * @readonly
             * @name BigNumber.prototype.classId
             * @type {string}
             */
            classId: $assign({
                value: '[object BigError]'
            }, propConstant),

            /**
             * @private
             * @readonly
             * @name BigNumber.prototype.version
             * @type {string}
             */
            version: $assign({
                value: '0.2.0'
            }, propConstant)
        });

        /******************************************************************************/

        /*
         * Private functions
         */

        /**
         * Determines if the supplied object is a sibling big object (duck typed).
         *
         * @private
         * @function isBigDuck
         * @param {*} [object] The object to be tested.
         * @returns {boolean} True if object possitively duck types.
         * @see https://github.com/MikeMcl/bignumber.js/
         * @see https://github.com/MikeMcl/decimal.js/
         */
        function isBigDuck(object) {
            var rtn = false,
                testType;

            /* What's goin on here?
             * We test if the argument is an object, but not null, a function or a plain object.
             * If we have an object (class) then we check the properties to make sure that they match
             * the properties and their types that we would expect from a sibling library's object.
             * If they match then we check for a couple of methods that we expect the object to have.
             * If all of these pass then we can be fairly sure that it's a sibling object.
             */
            if (object) {
                testType = typeof object;
                if (testType === 'object' && !$isFunction(object) && object.constructor.prototype !== protoObject &&
                        (object.s === null || object.s === 1 || object.s === -1) &&
                            (object.c === null || $isArray(object.c)) &&
                            (object.e === null || typeof object.e === 'number') &&
                            $isFunction(object.plus) && $isFunction(object.minus)) {

                    rtn = true;
                }
            }

            return rtn;
        }

        /**
         * The function evaluates the passed value and tests that it is an integer and is in the specified range.
         *
         * @private
         * @function isIntegerInRange
         * @param {*} [val]
         * @param {number} Integer, min
         * @param {number} Integer, max
         * @throws {TypeError} If min is not an integer.
         * @throws {TypeError} If max is not an integer.
         * @returns {boolean}
         */
        function isIntegerInRange(val, min, max) {
            if (!$isInteger(min)) {
                throw new CTypeError('min is not an integer: ' + $toString($toPrimitive(min)));
            }

            if (!$isInteger(max)) {
                throw new CTypeError('max is not an integer: ' + $toString($toPrimitive(max)));
            }

            return $isInteger(val) && $inRange(val, min, max);
        }

        /**
         * For executing methods that take a variable number of arguments.
         *
         * @private
         * @function forArgs
         * @params {arguments.<module:util-x~bigobject>} args Arguments to be executed.
         * @params {Function} fn Function to execute the arguments against.
         * @params {module:util-x~bigobject} thisArg The initial this value.
         * @throws {module:util-x~bigerror} Any BigError encountered by executing fn.
         * @returns {module:util-x~bigobject}
         */
        function forArgs(args, fn, thisArg) {
            var length = $toLength(args.length),
                index = 0;

            do {
                thisArg = $call(fn, thisArg, args[index]);
                index += 1;
            } while (index < length);

            return thisArg;
        }

        /**
         * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
         * {@link module:util-x~bigobject Big number} rounded using rounding mode rm to a maximum of
         * dp decimal places.<br/>
         * <br/>
         * Called by {@link Big#div}, {@link Big#sqrt}
         * and {@link Big#round}.
         *
         * @private
         * @function rnd
         * @this module:util-x~bigobject
         * @param {number} dp Integer, 0 to 1e+6 inclusive.
         * @param {number} rm 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
         * @param {boolean} [more] Whether the result of division was truncated.
         * @throws {module:util-x~bigerror} !Big.RM! if rm is invalid.
         * @returns {module:util-x~bigobject} A rounded value of this.
         *
         * @example <caption>Example usage.</caption>
         * x = 123.45
         * Math.round(x)              // 123
         * y = new Big(x)
         * $call(rnd, y, 1, 0)              // '123.4'
         * $call(rnd, y, 1, 1)              // '123.5'
         * $call(rnd, y, 1, 2)              // '123.4'
         * $call(rnd, y, 1, 3)              // '123.5'
         * y                              // '123.45'
         */
        function rnd(dp, rm, more) {
            /*jshint validthis:true */
            var xc = this.c,
                i = this.e + dp + 1;

            if (rm === 1) {
                // xc[i] is the digit after the digit that may be rounded up.
                more = xc[i] >= 5;
            } else if (rm === 2) {
                /*jslint bitwise:true */
                more = xc[i] > 5 || (xc[i] === 5 && (more || i < 0 || !$isUndefined(xc[i + 1]) || xc[i - 1] & 1));
                /*jslint bitwise:true */
            } else if (rm === 3) {
                more = more || !$isUndefined(xc[i]) || i < 0;
            } else {
                more = false;
                if (rm !== 0) {
                    throw new BigError('!Big.RM!');
                }
            }

            if (i < 1 || !xc[0]) {
                if (more) {
                    // 1, 0.1, 0.01, 0.001, 0.0001 etc.
                    this.e = -dp;
                    this.c = [1];
                } else {
                    // Zero.
                    this.e = 0;
                    this.c = [0];
                }
            } else {
                // Remove any digits after the required decimal places.
                xc.length = i;
                i -= 1;
                // Round up?
                if (more) {
                    // Rounding up may mean the previous digit has to be rounded up.
                    for (xc[i] += 1; xc[i] > 9; xc[i] += 1) {
                        xc[i] = 0;
                        if (!i) {
                            this.e += 1;
                            $unshift(xc, 1);
                        }

                        i -= 1;
                    }
                }

                // Remove trailing zeros.
                for (i = $toLength(xc.length) - 1; !xc[i]; i -= 1) {
                    $pop(xc);
                }
            }

            return this;
        }

        /**
         * Returns a string representing the value of this {@link module:util-x~bigobject Big number}.<br/>
         * <br/>
         * If this {@link module:util-x~bigobject Big number} has a positive exponent that is equal to or
         * greater than 21, or a negative exponent equal to or less than -7,
         * then exponential notation is returned.<br/>
         * <br/>
         * The point at which {@link Big#toString} returns exponential rather than normal
         * notation can be adjusted by changing the value of TO_EXP_POS and TO_EXP_NEG in the
         * EDITABLE DEFAULTS section at the top of the source code file. By default,
         * {@link module:util-x~bigobject Big numbers} correspond to {@link number Javascript's number type}
         * in this regard.
         *
         * @private
         * @function bigToString
         * @this module:util-x~bigobject
         * @param {?boolean} valueof Don't avoid -0 if true.
         * @param {boolean} [preventExp] Prevent exponential representation.
         * @returns {string} A string representation of this.
         *
         * @example <caption>Example usage.</caption>
         * x = new Big('9.99e+20')
         * $call(bigToString, x)               // '999000000000000000000'
         * y = new Big('1E21')
         * $call(bigToString, y)               // '1e+21'
         * z = new Big('1E21')
         * $call(bigToString, y, true)         //100000000000000000000
         */
        function bigToString(valueof, preventExp) {
            /*jshint validthis:true */
            var e = this.e,
                strT = $join(this.c, ''),
                strL = strT.length,
                str;

            // Exponential notation?
            if (!preventExp && (e <= TO_EXP_NEG || e >= TO_EXP_POS)) {
                str = $call(pCharAt, strT, 0);
                if (strL > 1) {
                    str += '.' + $call(pSSlice, strT, 1);
                }

                if (e < 0) {
                    str += 'e';
                } else {
                    str += 'e+';
                }

                str += e;
                // Negative exponent?
            } else if (e < 0) {
                str = strT;
                // Prepend zeros.
                for (e += 1; e; e += 1) {
                    str = '0' + str;
                }

                str = '0.' + str;
                // Positive exponent?
            } else if (e > 0) {
                str = strT;
                e += 1;
                if (e > strL) {
                    // Append zeros.
                    for (e -= strL; e; e -= 1) {
                        str += '0';
                    }
                } else if (e < strL) {
                    str = $call(pSSlice, strT, 0, e) + '.' + $call(pSSlice, strT, e);
                }
                // Exponent zero.
            } else if (strL > 1) {
                str = $call(pCharAt, strT, 0) + '.' + $call(pSSlice, strT, 1);
            } else {
                str = strT;
            }

            // Avoid '-0'
            if (valueof === true) {
                if (this.s < 0) {
                    str = '-' + str;
                }
            } else if (this.s < 0 && this.c[0]) {
                str = '-' + str;
            }

            return str;
        }

        /*
         ***************************************************************************
         * If toExponential, toFixed, toPrecision and format are not required they
         * can safely be commented-out or deleted. No redundant code will be left.
         * format is used only by toExponential, toFixed and toPrecision.
         ***************************************************************************
         */

        /**
         * Return a string representing the value of Big x in normal or exponential
         * notation to dp fixed decimal places or significant digits.
         *
         * @private
         * @function format
         * @this module:util-x~bigobject
         * @param {number} dp Integer, 0 to MAX_DP inclusive.
         * @param {number} toE 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
         * @param {boolean} [preventExp] Prevent exponential representation.
         * @returns {string}
         */
        function format(dp, toE, preventExp) {
            /*jshint validthis:true */
            // The index (normal notation) of the digit that may be rounded up.
            var x = new this.constructor(this),
                i = dp - x.e,
                c = x.c,
                str;

            // Round?
            dp += 1;
            if ($toLength(c.length) > dp) {
                $call(rnd, x, i, this.constructor.RM);
            }

            if (!c[0]) {
                i += 1;
            } else if (toE) {
                i = dp;
                // toFixed
            } else {
                c = x.c;
                // Recalculate i as x.e may have changed if value rounded up.
                i = x.e + i + 1;
            }

            // Append zeros?
            while ($toLength(c.length) < i) {
                $push(c, 0);
            }

            i = x.e;
            /*
             * toPrecision returns exponential notation if the number of
             * significant digits specified is less than the number of digits
             * necessary to represent the integer part of the value in normal
             * notation.
             */
            if (!preventExp && (toE === 1 || (toE && (dp <= i || i <= TO_EXP_NEG)))) {
                // Exponential notation.
                str = '';
                if (x.s < 0 && c[0]) {
                    str += '-';
                }

                str += c[0];
                if (c.length > 1) {
                    str += '.' + $call(pSSlice, $join(c, ''), 1);
                }

                str += 'e';
                if (i >= 0) {
                    str += '+';
                }

                str += i;
            } else {
                // Normal notation.
                str = $call(bigToString, x, false, preventExp);
            }

            return str;
        }

        /**
         * Parse the number or string value passed to a Big constructor.
         *
         * @private
         * @function parse
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} n A numeric value.
         * @throws {module:util-x~bigerror} If n coerced to a string does not pass the RegExp test.
         */
        function parse(n) {
            /*jshint validthis:true */
            var e,
                i,
                nL;

            // Minus zero?
            // Ensure n is string and check validity.
            n = $toString($toPrimitive(n));
            if (!$test(isValid, n)) {
                throw new BigError(NaN);
            }

            // Determine sign.
            if ($call(pCharAt, n, 0) === '-') {
                n = $call(pSSlice, n, 1);
                this.s = -1;
            } else {
                this.s = 1;
            }

            // Decimal point?
            e = $call(pSIndexOf, n, '.');
            if (e > -1) {
                n = $call(pReplace, n, '.', '');
            }

            // Exponential form?
            i = $call(pSearch, n, /e/i);
            if (i > 0) {
                // Determine exponent.
                if (e < 0) {
                    e = i;
                }

                e += +$call(pSSlice, n, i + 1);
                n = $substr(n, 0, i);
            } else if (e < 0) {
                // Integer.
                e = $toLength(n.length);
            }

            // Determine leading zeros.
            i = 0;
            while ($call(pCharAt, n, i) === '0') {
                i += 1;
            }

            nL = $toLength(n.length);
            if (i === nL) {
                // Zero.
                this.e = 0;
                this.c = [0];
            } else {
                // Determine trailing zeros.
                nL -= 1;
                while ($call(pCharAt, n, nL) === '0') {
                    nL -= 1;
                }

                this.e = e - i - 1;
                this.c = [];
                // Convert string to array of digits without leading/trailing zeros.
                for (e = 0; i <= nL; i += 1, e += 1) {
                    this.c[e] = +$call(pCharAt, n, i);
                }
            }
        }

        /**
         * Returns a {@link module:util-x~bigobject Big number} whose value is the value of
         * this {@link module:util-x~bigobject Big number} divided by y.<br/>
         * <br/>
         * If the result has more fraction digits than is specified by {@link Big.DP},
         * it will be rounded to {@link Big.DP} decimal places using rounding mode
         * {@link Big.RM}.<br/>
         *
         * @private
         * @function div
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @param {number} dp Integer, 0 to MAX_DP inclusive.
         * @param {number} rm 0, 1, 2 or 3 (DOWN, HALF_UP, HALF_EVEN, UP)
         * @throws {module:util-x~bigerror} NaN if y is invalid.
         * @throws {module:util-x~bigerror} ±Infinity on division by zero.
         * @throws {module:util-x~bigerror} NaN on division of zero by zero.
         * @throws {module:util-x~bigerror} '!Big.DP!' if dp not an integer or not in integer range.
         * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} / y.
         *
         * @example <caption>Example usage.</caption>
         * x = new Big(355)
         * y = new Big(113)
         * $call(div, x, y)             // '3.14159292035398230088'
         * Big.DP = 2
         * $call(div, x, y)             // '3.14'
         * $call(div, x, 5)             // '71'
         */
        function div(y, dp, rm) {
            /*jshint validthis:true */
            // dividend
            var dvd = this.c,
                //divisor
                dvs,
                s,
                dvsT,
                next,
                cmp,
                remI,
                dvsZ,
                dvsL,
                dvdI,
                dvdL,
                // remainder
                rem,
                remL,
                // quotient
                q,
                qc,
                qi,
                digits,
                length = $toLength(arguments.length);

            if (length < 2) {
                dp = this.constructor.DP;
            }

            if (!isIntegerInRange(dp, 0, MAX_DP)) {
                throw new BigError('!Big.DP!');
            }

            if (length < 3) {
                rm = this.constructor.RM;
            }

            y = new this.constructor(y);
            dvs = y.c;
            if (this.s === y.s) {
                s = 1;
            } else {
                s = -1;
            }

            // Either 0?
            if (!dvd[0] || !dvs[0]) {
                // If both are 0, throw NaN
                if (dvd[0] === dvs[0]) {
                    throw new BigError(NaN);
                }

                // If dvs is 0, throw +-Infinity.
                if (!dvs[0]) {
                    throw new BigError(s / zero);
                }

                // dvd is 0, return +-0.
                return new this.constructor(s * zero);
            }

            dvsZ = $slice(dvs);
            dvsL = $toLength(dvs.length);
            dvdI = dvsL;
            dvdL = $toLength(dvd.length);
            // remainder
            rem = dvd.slice(0, dvsL);
            remL = $toLength(rem.length);
            // quotient
            q = y;
            qi = 0;
            qc = q.c = [];
            q.e = this.e - y.e;
            digits = dp + q.e + 1;
            q.s = s;
            if (digits < 0) {
                s = 1;
            } else {
                s = digits + 1;
            }

            // Create version of divisor with leading zero.
            $unshift(dvsZ, 0);
            // Add zeros to make remainder as long as divisor.
            while (remL < dvsL) {
                $push(rem, 0);
                remL += 1;
            }

            do {
                // 'next' is how many times the divisor goes into current remainder.
                for (next = 0; next < 10; next += 1) {
                    // Compare divisor and remainder.
                    remL = $toLength(rem.length);
                    if (dvsL !== remL) {
                        if (dvsL > remL) {
                            cmp = 1;
                        } else {
                            cmp = -1;
                        }
                    } else {
                        cmp = 0;
                        for (remI = 0; remI < dvsL; remI += 1) {
                            if (dvs[remI] !== rem[remI]) {
                                if (dvs[remI] > rem[remI]) {
                                    cmp = 1;
                                } else {
                                    cmp = -1;
                                }


                                break;
                            }
                        }
                    }

                    // If divisor < remainder, subtract divisor from remainder.
                    if (cmp < 0) {
                        // Remainder can't be more than 1 digit longer than divisor.
                        // Equalise lengths using divisor with extra leading zero?
                        if (remL === dvsL) {
                            dvsT = dvs;
                        } else {
                            dvsT = dvsZ;
                        }

                        while (remL) {
                            remL -= 1;
                            if (rem[remL] < dvsT[remL]) {
                                for (remI = remL - 1; remI >= 0 && !rem[remI]; remI -= 1) {
                                    rem[remI] = 9;
                                }

                                rem[remI] -= 1;
                                rem[remL] += 10;
                            }

                            rem[remL] -= dvsT[remL];
                        }

                        while (!rem[0]) {
                            $shift(rem);
                        }
                    } else {
                        break;
                    }
                }

                // Add the 'next' digit to the result array.
                if (!cmp) {
                    next += 1;
                }

                qc[qi] = next;
                qi += 1;
                // Update the remainder.
                if (rem[0] && cmp) {
                    rem[remL] = dvd[dvdI] || 0;
                } else {
                    rem = [dvd[dvdI]];
                }

                dvdI += 1;
                s -= 1;
            } while ((dvdI < dvdL || !$isUndefined(rem[0])) && s);

            // Leading zero? Do not remove if result is simply zero (qi == 1).
            if (!qc[0] && qi !== 1) {
                // There can't be more than one zero.
                $shift(qc);
                q.e -= 1;
            }

            // Round?
            if (qi > digits) {
                $call(rnd, q, dp, rm, !$isUndefined(rem[0]));
            }

            return q;
        }

        /**
         * Returns a new {@link module:util-x~bigobject Big number} whose value is the value of this
         * {@link module:util-x~bigobject Big number} times the value of y.
         *
         * @private
         * @function times
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @throws {Error} NaN if y is invalid.
         * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} * y
         *
         * @example <caption>Example usage.</caption>
         * 0.6 * 3                         // 1.7999999999999998
         * x = new Big(0.6)
         * y= $call(times, x, 3)             // '1.8'
         * $call(times, Big('7e+500', y)     // '1.26e+501'
         */
        function times(y) {
            /*jshint validthis:true */
            y = new this.constructor(y);

            var c,
                xc = this.c,
                yc = y.c,
                a,
                b,
                i,
                j;

            // Determine sign of result.
            if (this.s === y.s) {
                y.s = 1;
            } else {
                y.s = -1;
            }

            // Return signed 0 if either 0.
            if (!xc[0] || !yc[0]) {
                if (y.s === -1) {
                    a = -0;
                } else {
                    a = 0;
                }

                return new this.constructor(a);
            }

            a = $toLength(xc.length);
            b = $toLength(yc.length);
            i = this.e;
            j = y.e;
            // Initialise exponent of result as x.e + y.e.
            y.e = i + j;
            // If array xc has fewer digits than yc, swap xc and yc, and lengths.
            if (a < b) {
                c = xc;
                xc = yc;
                yc = c;
                j = a;
                a = b;
                b = j;
            }

            // Initialise coefficient array of result with zeros.
            c = [];
            for (c.length = j = a + b; j; c[j] = 0) {
                j -= 1;
            }

            // Multiply.

            // i is initially xc.length.
            i = b;
            while (i) {
                i -= 1;
                b = 0;
                // a is yc.length.
                j = a + i;
                while (j > i) {
                    // Current sum of products at this digit position, plus carry.
                    b = c[j] + yc[i] * xc[j - i - 1] + b;
                    c[j] = b % 10;
                    j -= 1;
                    // carry
                    /*jslint bitwise: true */
                    b = b / 10 | 0;
                    /*jslint bitwise: false */
                }

                c[j] = (c[j] + b) % 10;
            }

            // Increment result exponent if there is a final carry.
            if (b) {
                y.e += 1;
            }

            // Remove any leading zero.
            if (!c[0]) {
                $shift(c);
            }

            // Remove trailing zeros.
            for (i = $toLength(c.length) - 1; !c[i]; i -= 1) {
                $pop(c);
            }

            y.c = c;

            return y;
        }

        /**
         * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
         * {@link module:util-x~bigobject Big number} minus y.
         *
         * @private
         * @function minus
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @throws {Error} NaN if y is invalid.
         *
         * @example <caption>Example usage.</caption>
         * 0.3 - 0.1                  // 0.19999999999999998
         * x = new Big(0.3)
         * $call(minus, x, 0.1)         // '0.2'
         */
        minus = function (y) {
            /*jshint validthis:true */
            y = new this.constructor(y);

            var i,
                j,
                t,
                xLTy,
                a = this.s,
                b = y.s,
                xc,
                xe,
                xcL,
                ycL,
                yc,
                ye,
                rtn;

            // Signs differ?
            if (a !== b) {
                y.s = -b;

                return $call(plus, this, y);
            }

            xc = $slice(this.c);
            xe = this.e;
            yc = y.c;
            ye = y.e;
            // Either zero?
            if (!xc[0] || !yc[0]) {
                // y is non-zero? x is non-zero? Or both are zero.
                if (yc[0]) {
                    y.s = -b;

                    rtn = y;
                } else if (xc[0]) {
                    rtn = new this.constructor(this);
                } else {
                    rtn = new this.constructor(0);
                }

                return rtn;
            }

            // Determine which is the bigger number.
            // Prepend zeros to equalise exponents.
            a = xe - ye;
            if (a) {
                xLTy = a < 0;
                if (xLTy) {
                    a = -a;
                    t = xc;
                } else {
                    ye = xe;
                    t = yc;
                }

                $reverse(t);
                for (b = a; b; b -= 1) {
                    $push(t, 0);
                }

                $reverse(t);
            } else {
                // Exponents equal. Check digit by digit.
                xcL = $toLength(xc.length);
                ycL = $toLength(yc.length);
                xLTy = xcL < ycL;
                if (xLTy) {
                    j = xcL;
                } else {
                    j = ycL;
                }

                for (a = b = 0; b < j; b += 1) {
                    if (xc[b] !== yc[b]) {
                        xLTy = xc[b] < yc[b];

                        break;
                    }
                }
            }

            // x < y? Point xc to the array of the bigger number.
            if (xLTy) {
                t = xc;
                xc = yc;
                yc = t;
                y.s = -y.s;
            }

            /*
             * Append zeros to xc if shorter. No need to add zeros to yc if shorter
             * as subtraction only needs to start at yc.length.
             */
            i = $toLength(xc.length);
            j = $toLength(yc.length);
            b = j - i;
            if (b > 0) {
                while (b) {
                    xc[i] = 0;
                    i += 1;
                    b -= 1;
                }
            }

            // Subtract yc from xc.
            b = i - 1;
            while (j > a) {
                j -= 1;
                if (xc[j] < yc[j]) {
                    for (i = j - 1; i && !xc[i]; i -= 1) {
                        xc[i] = 9;
                    }

                    xc[i] -= 1;
                    xc[j] += 10;
                }

                xc[j] -= yc[j];
            }

            // Remove trailing zeros.
            while (xc[b] === 0) {
                $pop(xc);
                b -= 1;
            }

            // Remove leading zeros and adjust exponent accordingly.
            while (xc[0] === 0) {
                $shift(xc);
                ye -= 1;
            }

            if (!xc[0]) {
                // n - n = +0
                y.s = 1;
                // Result must be zero.
                ye = 0;
                xc = [0];
            }

            y.c = xc;
            y.e = ye;

            return y;
        };

        /**
         * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
         * {@link module:util-x~bigobject Big number} plus y
         *
         * @private
         * @function plus
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @throws {Error} NaN if y is invalid.
         * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} + y
         *
         * @example <caption>Example usage.</caption>
         * 0.1 + 0.2                              // 0.30000000000000004
         * x = new Big(0.1)
         * y = $call(plus, x, 0.2)                  // '0.3'
         * $call(plus, $call(plus, Big(0.7), x), y)   // '1'
         */
        plus = function (y) {
            /*jshint validthis:true */
            y = new this.constructor(y);

            var t,
                a = this.s,
                b = y.s,
                xe,
                xc,
                ye,
                yc,
                rtn;

            // Signs differ?
            if (a !== b) {
                y.s = -b;

                return $call(minus, this, y);
            }

            xc = this.c;
            yc = y.c;
            // Either zero?
            if (!xc[0] || !yc[0]) {
                // y is non-zero? x is non-zero? Or both are zero.
                if (yc[0]) {
                    rtn = y;
                } else if (xc[0]) {
                    rtn = new this.constructor(this);
                } else {
                    rtn = new this.constructor(a * zero);
                }

                return rtn;
            }

            xc = $slice(xc);
            // Prepend zeros to equalise exponents.
            // Note: Faster to use reverse then do unshifts.
            xe = this.e;
            ye = y.e;
            a = xe - ye;
            if (a) {
                if (a > 0) {
                    ye = xe;
                    t = yc;
                } else {
                    a = -a;
                    t = xc;
                }

                $reverse(t);
                while (a) {
                    $push(t, 0);
                    a -= 1;
                }

                $reverse(t);
            }

            // Point xc to the longer array.
            if ($toLength(xc.length) - $toLength(yc.length) < 0) {
                t = yc;
                yc = xc;
                xc = t;
            }

            a = $toLength(yc.length);
            /*
             * Only start adding at yc.length - 1 as the further digits of xc can be
             * left as they are.
             */
            b = 0;
            while (a) {
                a -= 1;
                xc[a] = xc[a] + yc[a] + b;
                /*jslint bitwise: true */
                b = xc[a] / 10 | 0;
                /*jslint bitwise: false */
                xc[a] %= 10;
            }

            // No need to check for zero, as +x + +y != 0 && -x + -y != 0

            if (b) {
                $unshift(xc, b);
                ye += 1;
            }

            // Remove trailing zeros.
            for (a = $toLength(xc.length) - 1; xc[a] === 0; a -= 1) {
                $pop(xc);
            }

            y.c = xc;
            y.e = ye;

            return y;
        };

        /**
         * Performs a comparison of this {@link module:util-x~bigobject Big number} and the value of y.<br/>
         * <br/>
         * <style>
         *   table, th, td {
         *     border-style: solid;
         *     border-width: 1px;
         *     text-align: left;
         *   }
         * </style>
         * <table>
         * <tbody><tr>
         *   <th>Returns</th>
         *   <th colspan="2">&nbsp;</th>
         * </tr>
         * <tr>
         *   <td class="centre">1</td>
         *   <td>
         *     If the value of this {@link module:util-x~bigobject Big number} is greater than the value of
         *     <code>n</code>
         *   </td>
         * </tr>
         * <tr>
         *   <td class="centre">-1</td>
         *   <td>
         *     If the value of this {@link module:util-x~bigobject Big number} is less than the value of
         *     <code>n</code>
         *   </td>
         * </tr>
         * <tr>
         *   <td class="centre">0</td>
         *   <td>If this {@link module:util-x~bigobject Big number} and <code>n</code> have the same value</td>
         * </tr>
         * </tbody></table>
         *
         * @private
         * @function cmp
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @throws {Error} NaN if y is invalid.
         * @returns {number} One of these values: -1, 0, 1
         *
         * @example <caption>Example usage.</caption>
         * x = new Big(6)
         * y = new Big(5)
         * $call(cmp, x, y)                   // 1
         * $call(cmp, y, x.minus(1))          // 0
         */
        function cmp(y) {
            /*jshint validthis:true */
            y = new this.constructor(y);

            var xNeg,
                xc = this.c,
                yc = y.c,
                i = this.s,
                j = y.s,
                k = this.e,
                l = y.e,
                test,
                rtn;

            // Either zero?
            if (!xc[0] || !yc[0]) {
                if (!xc[0]) {
                    if (!yc[0]) {
                        rtn = 0;
                    } else {
                        rtn = -j;
                    }
                } else {
                    rtn = i;
                }

                return rtn;
            }

            // Signs differ?
            if (i !== j) {
                return i;
            }

            xNeg = i < 0;
            // Compare exponents.
            if (k !== l) {
                /*jslint bitwise:true */
                test = k > l ^ xNeg;
                /*jslint bitwise:false */
                if (test) {
                    rtn = 1;
                } else {
                    rtn = -1;
                }

                return rtn;
            }

            k = $toLength(xc.length);
            l = $toLength(yc.length);
            if (k < l) {
                j = k;
            } else {
                j = l;
            }

            // Compare digit by digit.
            for (i = 0; i < j; i += 1) {
                if (xc[i] !== yc[i]) {
                    /*jslint bitwise: true */
                    test = xc[i] > yc[i] ^ xNeg;
                    /*jslint bitwise: false */
                    if (test) {
                        rtn = 1;
                    } else {
                        rtn = -1;
                    }

                    return rtn;
                }
            }

            // Compare lengths.
            if (k === l) {
                rtn = 0;
            } else {
                /*jslint bitwise: true */
                test = k > l ^ xNeg;
                /*jslint bitwise: false */
                if (test) {
                    rtn = 1;
                } else {
                    rtn = -1;
                }
            }

            return rtn;
        }

        /**
         * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
         * {@link module:util-x~bigobject Big number} modulo y, i.e. the integer remainder of dividing this
         * {@link module:util-x~bigobject Big number} by y.<br/>
         * <br/>
         * The result will have the same sign as this {@link module:util-x~bigobject Big number},
         *  and it will match that of
         * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Javascript's % operator}
         * (within the limits of its precision) and BigDecimal's remainder method.
         *
         * @private
         * @function mod
         * @this module:util-x~bigobject
         * @param {module:util-x~validNumeric} y A numeric value.
         * @throws {module:util-x~bigerror} NaN if y is negative or otherwise invalid.
         * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} % y
         *
         * @example <caption>Example usage.</caption>
         * 1 % 0.9                    // 0.09999999999999998
         * x = new Big(1)
         * $call(mod, x, 0.9)           // '0.1'
         */
        function mod(y) {
            /*jshint validthis:true */
            y = new this.constructor(y);

            var yGTx,
                a = this.s,
                b = y.s,
                x,
                rtn;

            if (!y.c[0]) {
                throw new BigError(NaN);
            }

            this.s = y.s = 1;
            yGTx = $call(cmp, y, this) === 1;
            this.s = a;
            y.s = b;
            if (yGTx) {
                rtn = new this.constructor(this);
            } else {
                x = $call(div, this, y, 0, 0);
                rtn = $call(minus, this, $call(times, x, y));
            }

            return rtn;
        }

        /******************************************************************************/

        //Factory and Big constructor.

        /**
         * Create and return an independant copy of the {@link Big} constructor.
         *
         * @private
         * @function bigFactory
         * @returns {Big} An independant copy of the {@link Big} constructor.
         */
        function bigFactory() {
            /**
             * Used to create a new a {@link module:util-x~bigobject Big number}
             * or new independant {@link Big} constructor.
             *
             * @constructor Big
             *
             * @param {module:util-x~validNumeric} [n] A decimal value.
             * @throws {Error} Throws NaN on an invalid value.
             * @returns {(module:util-x~bigobject|Big)}
             *
             * @example <caption>Example usage.</caption>
             * x = new Big(9)                       // '9'
             * y = new Big(x)                       // '9'
             * Big(435.345)                         // 'new' is optional
             * new Big('5032485723458348569331745.33434346346912144534543')
             * new Big('4.321e+4')                  // '43210'
             * new Big('-735.0918e-430')            // '-7.350918e-428'
             * Big1 = Big()                         // Creates a new and independant constructor
             */
            function Big(n) {
                var rtn;

                // Enable constructor usage without new.
                if (!$isInstance(this, Big)) {
                    if ($toLength(arguments.length) === 0) {
                        return bigFactory();
                    }

                    rtn = new Big(n);
                } else {
                    // set the attributes of the properties on this {@link module:util-x~bigobject}
                    $defineProperty(this, 's', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    $defineProperty(this, 'e', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    $defineProperty(this, 'c', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    // set the values of the properties on this {@link module:util-x~bigobject}
                    if ($isInstance(n, Big) || isBigDuck(n)) {
                        // Duplicate.
                        this.s = n.s;
                        this.e = n.e;
                        if (n.c === null) {
                            this.c = n.c;
                        } else {
                            this.c = n.c.slice();
                        }
                    } else {
                        $call(parse, this, n);
                    }
                }

                return rtn;
            }

            /**
             * Returns a new {@link module:util-x~bigobject Big number} whose value is the absolute value,
             * i.e. the magnitude, of this {@link module:util-x~bigobject Big number}
             *
             * @memberOf Big.prototype
             * @name abs
             * @function
             * @returns {module:util-x~bigobject} The absolute value of {@link module:util-x~bigobject this}.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big(-0.8)
             * x.abs()                     // '0.8'
             */
            $defineProperty(Big.prototype, 'abs', {
                value: function () {
                    var x = new this.constructor(this);

                    x.s = 1;

                    return x;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Performs a comparison of this {@link module:util-x~bigobject Big number} and the value of y.<br/>
             * <br/>
             * <style>
             *   table, th, td {
             *     border-style: solid;
             *     border-width: 1px;
             *     text-align: left;
             *   }
             * </style>
             * <table>
             * <tbody><tr>
             *   <th>Returns</th>
             *   <th colspan="2">&nbsp;</th>
             * </tr>
             * <tr>
             *   <td class="centre">1</td>
             *   <td>
             *     If the value of this {@link module:util-x~bigobject Big number} is greater than the value of
             *     <code>n</code>
             *   </td>
             * </tr>
             * <tr>
             *   <td class="centre">-1</td>
             *   <td>
             *     If the value of this {@link module:util-x~bigobject Big number} is less than the value of
             *     <code>n</code>
             *   </td>
             * </tr>
             * <tr>
             *   <td class="centre">0</td>
             *   <td>If this {@link module:util-x~bigobject Big number} and <code>n</code> have the same value</td>
             * </tr>
             * </tbody></table>
             *
             * @memberOf Big.prototype
             * @name cmp
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {number} One of these values: -1, 0, 1
             *
             * @example <caption>Example usage.</caption>
             * x = new Big(6)
             * y = new Big(5)
             * x.cmp(y)                   // 1
             * y.cmp(x.minus(1))          // 0
             */
            $defineProperty(Big.prototype, 'cmp', {
                value: function (y) {
                    return $call(cmp, this, y);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of
             * this {@link module:util-x~bigobject Big number} divided by y.<br/>
             * <br/>
             * If the result has more fraction digits than is specified by {@link Big.DP},
             * it will be rounded to {@link Big.DP} decimal places using rounding mode
             * {@link Big.RM}.<br/
             *
             * @memberOf Big.prototype
             * @name div
             * @function
             * @param {...module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @throws {Error} ±Infinity on division by zero.
             * @throws {Error} NaN on division of zero by zero.
             * @throws {Error} '!Big.DP!' if {@link Big.DP} not an integer or not in integer range
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} / y.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big(355)
             * y = new Big(113)
             * x.div(y)                   // '3.14159292035398230088'
             * Big.DP = 2
             * x.div(y)                   // '3.14'
             * x.div(5)                   // '71'
             */
            $defineProperty(Big.prototype, 'div', {
                value: function () {
                    return forArgs(arguments, div, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns true if the value of this {@link module:util-x~bigobject Big number}
             * equals the value of y, otherwise returns false.
             *
             * @memberOf Big.prototype
             * @name eq
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {boolean} {@link module:util-x~bigobject this} === y
             *
             * @example <caption>Example usage.</caption>
             * 0 === 1e-324               // true
             * x = new Big(0)
             * x.eq('1e-324')             // false
             * Big(-0).eq(x)              // true  ( -0 === 0 )
             */
            $defineProperty(Big.prototype, 'eq', {
                value: function (y) {
                    return !$call(cmp, this, y);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns true if the value of this {@link module:util-x~bigobject Big number} is
             * greater than the value of y, otherwise returns false.
             *
             * @memberOf Big.prototype
             * @name gt
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {boolean} {@link module:util-x~bigobject this} > y
             *
             * @example <caption>Example usage.</caption>
             * 0.1 > 0.3 - 0.2              // true
             * x = new Big(0.1)
             * x.gt(Big(0.3).minus(0.2))    // false
             * Big(0).gt(x)                 // false
             */
            $defineProperty(Big.prototype, 'gt', {
                value: function (y) {
                    return $call(cmp, this, y) > 0;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns true if the value of this {@link module:util-x~bigobject Big number} is
             * greater than or equal to the value of y, otherwise returns false.
             *
             * @memberOf Big.prototype
             * @name gte
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {boolean} {@link module:util-x~bigobject this} >= y
             *
             * @example <caption>Example usage.</caption>
             * 0.3 - 0.2 >= 0.1               // false
             * x = new Big(0.3).minus(0.2)
             * x.gte(0.1)                     // true
             * Big(1).gte(x)                  // true
             */
            $defineProperty(Big.prototype, 'gte', {
                value: function (y) {
                    return $call(cmp, this, y) > -1;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns true if the value of this {@link module:util-x~bigobject Big number} is less than the value of y,
             * otherwise returns false.
             *
             * @memberOf Big.prototype
             * @name lt
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {boolean} {@link module:util-x~bigobject this} < y
             *
             * @example <caption>Example usage.</caption>
             * 0.3 - 0.2 < 0.1                // true
             * x = new Big(0.3).minus(0.2)
             * x.lt(0.1)                      // false
             * Big(0).lt(x)                   // true
             */
            $defineProperty(Big.prototype, 'lt', {
                value: function (y) {
                    return $call(cmp, this, y) < 0;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns true if the value of this {@link module:util-x~bigobject Big number} is
             * less than or equal to the value of y, otherwise returns false.
             *
             * @memberOf Big.prototype
             * @name lte
             * @function
             * @param {module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {boolean} {@link module:util-x~bigobject this} <= y
             *
             * @example <caption>Example usage.</caption>
             * 0.1 <= 0.3 - 0.2               // false
             * x = new Big(0.1)
             * x.lte(Big(0.3).minus(0.2))     // true
             * Big(-1).lte(x)                 // true
             */
            $defineProperty(Big.prototype, 'lte', {
                value: function (y) {
                    return $call(cmp, this, y) < 1;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} minus y.
             *
             * @memberOf Big.prototype
             * @name minus
             * @function
             * @param {...module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} - y
             *
             * @example <caption>Example usage.</caption>
             * 0.3 - 0.1                  // 0.19999999999999998
             * x = new Big(0.3)
             * x.minus(0.1)               // '0.2'
             */
            $defineProperty(Big.prototype, 'minus', {
                value: function () {
                    return forArgs(arguments, minus, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * An alias for {@link Big#minus}
             * @memberOf Big.prototype
             * @name sub
             * @function
             * @borrows Big#minus as sub
             */
            $defineProperty(Big.prototype, 'sub', {
                value: function () {
                    return $apply(Big.prototype.minus, this, arguments);
                },
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} modulo y, i.e. the integer remainder of dividing this
             * {@link module:util-x~bigobject Big number} by y.<br/>
             * <br/>
             * The result will have the same sign as this {@link module:util-x~bigobject Big number},
             * and it will match that of
             * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Javascript's % operator}
             * (within the limits of its precision) and BigDecimal's remainder method.
             *
             * @memberOf Big.prototype
             * @name mod
             * @function
             * @param {...module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is negative or otherwise invalid.
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} % y
             *
             * @example <caption>Example usage.</caption>
             * 1 % 0.9                    // 0.09999999999999998
             * x = new Big(1)
             * x.mod(0.9)                 // '0.1'
             */
            $defineProperty(Big.prototype, 'mod', {
                value: function () {
                    return forArgs(arguments, mod, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} plus y.
             *
             * @memberOf Big.prototype
             * @name plus
             * @function
             * @param {...module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} + y
             *
             * @example <caption>Example usage.</caption>
             * 0.1 + 0.2                  // 0.30000000000000004
             * x = new Big(0.1)
             * y = x.plus(0.2)            // '0.3'
             * Big(0.7).plus(x).plus(y)   // '1'
             */
            $defineProperty(Big.prototype, 'plus', {
                value: function () {
                    return forArgs(arguments, plus, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * An alias for {@link Big#plus}
             * @memberOf Big.prototype
             * @name add
             * @function
             * @borrows Big#plus as add
             */
            $defineProperty(Big.prototype, 'add', {
                value: function () {
                    return $apply(Big.prototype.plus, this, arguments);
                },
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} raised to the power exp.<br/>
             * <br/>
             * If exp is negative and the result has more fraction digits than is specified
             * by {@link Big.DP}, it will be rounded to {@link Big.DP} decimal places using
             * rounding mode {@link Big.RM}.<br/>
             * <br/>
             * Note: High value exponents may cause this method to be slow to return.
             *
             * @memberOf Big.prototype
             * @name pow
             * @function
             * @param {number} exp Integer, Negative -1e+6 to positive 1e+6 inclusive.
             * @throws {module:util-x~bigerror} !pow! if exp is invalid.
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} ^ y
             *
             * @example <caption>Example usage.</caption>
             * Math.pow(0.7, 2)           // 0.48999999999999994
             * x = new Big(0.7)
             * x.pow(2)                   // '0.49'
             * Big.DP = 20
             * Big(3).pow(-2)             // '0.11111111111111111111'
             * new Big(123.456).pow(1000).toString().length     // 5099
             * new Big(2).pow(1e+6)       // Time taken (Node.js): 9 minutes 34 secs.
             */
            $defineProperty(Big.prototype, 'pow', {
                value: function (exp) {
                    var x = this,
                        one = new this.constructor(1),
                        y = one,
                        isNeg = exp < 0,
                        test;

                    if (!isIntegerInRange(exp, -MAX_POWER, MAX_POWER)) {
                        throw new BigError('!pow!');
                    }

                    if (isNeg) {
                        exp = -exp;
                    }

                    do {
                        /*jslint bitwise: true */
                        test = exp & 1;
                        /*jslint bitwise: false */
                        if (test) {
                            y = $call(times, y, x);
                        }

                        /*jslint bitwise: true */
                        exp >>= 1;
                        /*jslint bitwise: false */
                        if (exp) {
                            x = $call(times, x, x);
                        }
                    } while (exp);

                    if (isNeg) {
                        return $call(div, one, y);
                    }

                    return y;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} rounded using rounding mode rm to a maximum of
             * dp decimal places.<br/>
             * <br/>
             * If dp is omitted or is null,
             * the return {@link module:util-x~bigobject Big number} is rounded to a whole number.
             * <br/>
             * If rm is omitted, the current {@link Big.RM} setting is used.
             *
             * @memberOf Big.prototype
             * @name round
             * @function
             * @param {?number} [dp] Integer, 0 to 1e+6 inclusive.
             * @param {number} [rm] 0, 1, 2 or 3 (ROUND_DOWN, ROUND_HALF_UP, ROUND_HALF_EVEN, ROUND_UP)
             * @throws {module:util-x~bigerror} !round! if dp is invalid.
             * @throws {module:util-x~bigerror} !Big.RM! if rm is invalid.
             * @returns {module:util-x~bigobject} A rounded value of this.
             *
             * @example <caption>Example usage.</caption>
             * x = 123.45
             * Math.round(x)              // 123
             * y = new Big(x)
             * y.round()                  // '123'
             * y.round(2)                 // '123.45'
             * y.round(10)                // '123.45'
             * y.round(1, 0)              // '123.4'
             * y.round(1, 1)              // '123.5'
             * y.round(1, 2)              // '123.4'
             * y.round(1, 3)              // '123.5'
             * y                          // '123.45'
             */
            $defineProperty(Big.prototype, 'round', {
                value: function (dp, rm) {
                    var length = $toLength(arguments.length);

                    if (length === 0 || dp === null) {
                        dp = 0;
                    } else if (!isIntegerInRange(dp, 0, MAX_DP)) {
                        throw new BigError('!round!');
                    }

                    if (length < 2) {
                        rm = this.constructor.RM;
                    }

                    return $call(rnd, new this.constructor(this), dp, rm);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a {@link module:util-x~bigobject Big number} whose value is the square root
             * of this {@link module:util-x~bigobject Big number}.<br/>
             * <br/>
             * If the result has more fraction digits than is specified by {@link Big.DP},
             * it will be rounded to {@link Big.DP} decimal places using rounding mode
             * {@link Big.RM}.
             *
             * @memberOf Big.prototype
             * @name sqrt
             * @function
             * @throws {module:util-x~bigerror} NaN if this {@link module:util-x~bigobject Big number} is negative.
             * @returns {module:util-x~bigobject} The square root of this.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big(16)
             * x.sqrt()                   // '4'
             * y = new Big(3)
             * y.sqrt()                   // '1.73205080756887729353'
             */
            $defineProperty(Big.prototype, 'sqrt', {
                value: function () {
                    var estimate,
                        r,
                        approx,
                        xc = this.c,
                        i,
                        e,
                        half,
                        test,
                        dp;

                    // Zero?
                    if (!xc[0]) {
                        return new this.constructor(this);
                    }

                    i = this.s;
                    // If negative, throw NaN.
                    if (i < 0) {
                        throw new BigError(NaN);
                    }

                    // Estimate.
                    i = $sqrt($call(bigToString, this));
                    // Math.sqrt underflow/overflow?
                    // Pass x to Math.sqrt as integer, then adjust the result exponent.
                    if (i === 0 || i === 1 / zero) {
                        estimate = $join(xc, '');
                        /*jslint bitwise: true */
                        test = estimate.length + e & 1;
                        /*jslint bitwise: false */
                        if (!test) {
                            estimate += '0';
                        }

                        r = new this.constructor($toString($sqrt(estimate)));
                        e = this.e;
                        /*jslint bitwise: true */
                        r.e = ((e + 1) / 2 | 0) - (e < 0 || e & 1);
                        /*jslint bitwise: false */
                    } else {
                        r = new this.constructor($toString(i));
                    }

                    dp = this.constructor.DP + 4;
                    i = r.e + dp;
                    half = new this.constructor('0.5');
                    // Newton-Raphson iteration.
                    do {
                        approx = r;
                        r = $call(times, half, $call(plus, approx, $call(div, this, approx, dp)));
                    } while ($join($slice(approx.c, 0, i), '') !== $join($slice(r.c, 0, i), ''));

                    return $call(rnd, r, this.constructor.DP, this.constructor.RM);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a new {@link module:util-x~bigobject Big number} whose value is the value of this
             * {@link module:util-x~bigobject Big number} times the value of y.
             *
             * @memberOf Big.prototype
             * @name times
             * @function
             * @param {...module:util-x~validNumeric} y A numeric value.
             * @throws {Error} NaN if y is invalid.
             * @returns {module:util-x~bigobject} {@link module:util-x~bigobject this} * y
             *
             * @example <caption>Example usage.</caption>
             * 0.6 * 3                    // 1.7999999999999998
             * x = new Big(0.6)
             * y = x.times(3)             // '1.8'
             * Big('7e+500').times(y)     // '1.26e+501'
             */
            $defineProperty(Big.prototype, 'times', {
                value: function () {
                    return forArgs(arguments, times, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * An alias for {@link Big#times}
             * @memberOf Big.prototype
             * @name mul
             * @function
             * @borrows Big#times as mul
             */
            $defineProperty(Big.prototype, 'mul', {
                value: function () {
                    return $apply(Big.prototype.times, this, arguments);
                },
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}.<br/>
             * <br/>
             * If this {@link module:util-x~bigobject Big number} has a positive exponent that is equal to or
             * greater than 21, or a negative exponent equal to or less than -7,
             * then exponential notation is returned.<br/>
             * <br/>
             * The point at which {@link Big#toString} returns exponential rather than normal
             * notation can be adjusted by changing the value of TO_EXP_POS and TO_EXP_NEG in the
             * EDITABLE DEFAULTS section at the top of the source code file. By default,
             * {@link module:util-x~bigobject Big numbers} correspond to {@link number Javascript's number type}
             * in this regard.
             *
             * @memberOf Big.prototype
             * @name toString
             * @function
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big('9.99e+20')
             * x.toString()               // '999000000000000000000'
             * y = new Big('1E21')
             * y.toString()               // '1e+21'
             */
            $defineProperty(Big.prototype, 'toString', {
                value: function () {
                    return $call(bigToString, this);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}.<br/>
             * <br/>
             * If this {@link module:util-x~bigobject Big number} has a positive exponent that is equal to or
             * greater than 21, or a negative exponent equal to or less than -7,
             * then exponential notation is returned.<br/>
             * <br/>
             * The point at which {@link Big#toString} returns exponential rather than normal
             * notation can be adjusted by changing the value of TO_EXP_POS and TO_EXP_NEG in the
             * EDITABLE DEFAULTS section at the top of the source code file. By default,
             * {@link module:util-x~bigobject Big numbers} correspond to {@link number Javascript's number type}
             * in this regard, except a minus zero will be represented as '-0'.
             *
             * @memberOf Big.prototype
             * @name valueOf
             * @function
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big('177.7e+457')
             * x.valueOf()                // '1.777e+459'
             */
            $defineProperty(Big.prototype, 'valueOf', {
                value: function () {
                    return $call(bigToString, this, true);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}.<br/>
             * <br/>
             * If this {@link module:util-x~bigobject Big number} has a positive exponent that is equal to or
             * greater than 21, or a negative exponent equal to or less than -7,
             * then exponential notation is returned.<br/>
             * <br/>
             * The point at which {@link Big#toString} returns exponential rather than normal
             * notation can be adjusted by changing the value of TO_EXP_POS and TO_EXP_NEG in the
             * EDITABLE DEFAULTS section at the top of the source code file. By default,
             * {@link module:util-x~bigobject Big numbers} correspond to {@link number Javascript's number type}
             * in this regard, except a minus zero will be represented as '-0'.
             *
             * @memberOf Big.prototype
             * @name toJSON
             * @function
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = new Big('177.7e+457')
             * y = new Big(235.4325)
             * z = new Big('0.0098074')
             * str = JSON.stringify( [x, y, z] )
             * JSON.parse( str, function ( k, v ) { return k === '' ? v : new Big(v) } )
             * // Returns an array of three Big numbers.
             */
            $defineProperty(Big.prototype, 'toJSON', {
                value: function () {
                    return $call(bigToString, this, true);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /*
             ***************************************************************************
             * If toExponential, toFixed, toPrecision and format are not required they
             * can safely be commented-out or deleted. No redundant code will be left.
             * format is used only by toExponential, toFixed and toPrecision.
             ***************************************************************************
             */

            /**
             * Integer, 0 to 1e+6 inclusive<br/>
             * <br/>
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}
             * in exponential notation to a fixed number of decimal places dp.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} in exponential notation has
             * more digits to the right of the decimal point than is specified by dp, the return
             * value will be rounded to dp decimal places using rounding mode {@link Big.RM}.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} in exponential notation
             * has fewer digits to the right of the decimal point than is specified by dp, the
             * return value will be appended with zeros accordingly.<br/>
             * <br/>
             * If dp is omitted, the number of digits after the decimal
             * point defaults to the minimum number of digits necessary to represent the value
             * exactly.
             *
             * @memberOf Big.prototype
             * @name toExponential
             * @function
             * @param {number} [dp] Integer, 0 to 1e+6 inclusive.
             * @throws {module:util-x~bigerror} !toExp! if dp is invalid.
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = 45.6
             * y = new Big(x)
             * x.toExponential()          // '4.56e+1'
             * y.toExponential()          // '4.56e+1'
             * x.toExponential(0)         // '5e+1'
             * y.toExponential(0)         // '5e+1'
             * x.toExponential(1)         // '4.6e+1'
             * y.toExponential(1)         // '4.6e+1'
             * x.toExponential(3)         // '4.560e+1'
             * y.toExponential(3)         // '4.560e+1'
             */
            $defineProperty(Big.prototype, 'toExponential', {
                value: function (dp) {
                    if ($toLength(arguments.length) === 0) {
                        dp = $toLength(this.c.length) - 1;
                    } else if (!isIntegerInRange(dp, 0, MAX_DP)) {
                        throw new BigError('!toExp!');
                    }

                    return $call(format, this, dp, 1);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Integer, 0 to 1e+6 inclusive<br/>
             * <br/>
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}
             * in normal notation to a fixed number of decimal places dp.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} in normal notation has more
             * digits to the right of the decimal point than is specified by dp, the return value
             * will be rounded to dp decimal places using rounding mode {@link Big.RM}.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} in normal notation has fewer
             * fraction digits then is specified by dp, the return value will be appended with zeros
             * accordingly.<br/>
             * <br/>
             * Unlike
             * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-15.7.4.5 Number.prototype.toFixed},
             * which returns exponential notation if a number is
             * greater or equal to 1021, this method will always return normal notation.<br/>
             * <br/>
             * If dp is omitted, then the return value is simply the value
             * in normal notation. This is also unlike
             * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-15.7.4.5 Number.prototype.toFixed},
             * which returns the value to zero decimal places.
             *
             * @memberOf Big.prototype
             * @name toFixed
             * @function
             * @param {number} [dp] Integer, 0 to 1e+6 inclusive.
             * @throws {module:util-x~bigerror} !toFix! if dp is invalid.
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = 45.6
             * y = new Big(x)
             * x.toFixed()                // '46'
             * y.toFixed()                // '45.6'
             * y.toFixed(0)               // '46'
             * x.toFixed(3)               // '45.600'
             * y.toFixed(3)               // '45.600'
             */
            $defineProperty(Big.prototype, 'toFixed', {
                value: function (dp) {
                    var preventExp = true,
                        str;

                    // Prevent the possibility of exponential notation.
                    if ($toLength(arguments.length) === 0) {
                        str = $call(bigToString, this, false, preventExp);
                    } else if (isIntegerInRange(dp, 0, MAX_DP)) {
                        str = $call(format, this, this.e + dp, null, preventExp);
                        // (-0).toFixed() is '0', but (-0.1).toFixed() is '-0'.
                        // (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
                        if (this.s < 0 && this.c[0] && $call(pSIndexOf, str, '-') < 0) {
                            //E.g. -0.5 if rounded to -0 will cause toString to omit the minus sign.
                            str = '-' + str;
                        }
                    }

                    if (!str) {
                        throw new BigError('!toFix!');
                    }

                    return str;
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Integer, 1 to 1e+6 inclusive<br/>
             * <br/>
             * Returns a string representing the value of this {@link module:util-x~bigobject Big number}
             * to the specified number of significant digits sd.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} has more digits than is
             * specified by sd, the return value will be rounded to sd significant digits using
             * rounding mode {@link Big.RM}.<br/>
             * <br/>
             * If the value of this {@link module:util-x~bigobject Big number} has fewer digits than is specified by sd,
             * the return value will be appended with zeros accordingly.<br/>
             * <br/>
             * If sd is less than the number of digits necessary to represent the integer part
             * of the value in normal notation, then exponential notation is used.<br/>
             * <br/>
             * If sd is omitted, then the return value is the same as {@link Big#toString}.
             *
             * @memberOf Big.prototype
             * @name toPrecision
             * @function
             * @param {number} sd Integer, 1 to MAX_DP inclusive.
             * @throws {module:util-x~bigerror} !toPre! if sd is invalid.
             * @returns {string} A string representation of this.
             *
             * @example <caption>Example usage.</caption>
             * x = 45.6
             * y = new Big(x)
             * x.toPrecision()            // '45.6'
             * y.toPrecision()            // '45.6'
             * x.toPrecision(1)           // '5e+1'
             * y.toPrecision(1)           // '5e+1'
             * x.toPrecision(5)           // '45.600'
             * y.toPrecision(5)           // '45.600'
             */
            $defineProperty(Big.prototype, 'toPrecision', {
                value: function (sd) {
                    if ($toLength(arguments.length) === 0) {
                        return $call(bigToString, this);
                    }

                    if (!isIntegerInRange(sd, 1, MAX_DP)) {
                        throw new BigError('!toPre!');
                    }

                    return $call(format, this, sd - 1, 2);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Read only member (in ECMA5 environment) with the value '[object Big]'.<br/>
             * <br/>
             * Used by {@link Big.isBig} to determine if the object is
             * a {@link module:util-x~bigobject Big number}.
             *
             * @memberOf Big.prototype
             * @readonly
             * @name classId
             * @type {string}
             */
            $defineProperty(Big.prototype, 'classId', {
                value: bigClassID,
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * The maximum number of decimal places of the results of operations involving division.<br/>
             * It is relevant only to the {@link Big#div} and {@link Big#sqrt} methods,
             * and the {@link Big#pow} method when the exponent is negative.<br/>
             * <br/>
             * Integer, 0 to 1e+6 inclusive<br/>
             * <br/>
             * Default value: 20<br/>
             * <br/>
             * The value will be checked for validity when one of the above methods is called.<br/>
             * <br/>
             * !Big.DP! will be thrown if the value is found to be invalid.
             *
             * @memberOf Big
             * @name DP
             * @type {number}
             *
             * @example <caption>Example usage.</caption>
             * Big.DP = 40
             */
            $defineProperty(Big, 'DP', {
                value: DP,
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * The rounding mode used in the above operations and by {@link Big#round},
             * {@link Big#toExponential}, {@link Big#toFixed}
             * and {@link Big#toPrecision}.<br/>
             * <br/>
             * 0, 1, 2 or 3<br/>
             * <br/>
             * Default value: 1<br/>
             * <br/>
             * <style>
             *   table, th, td {
             *     border-style: solid;
             *     border-width: 1px;
             *     text-align: left;
             *   }
             * </style>
             * <table>
             * <tbody><tr>
             *   <th>Value</th>
             *   <th>Description</th>
             *   <th>BigDecimal equivalent</th>
             * </tr>
             * <tr>
             *   <td class="centre">0</td>
             *   <td>
             *     Rounds towards zero.<br>
             *     I.e. truncate, no rounding.
             *   </td>
             *   <td id="round-down">ROUND_DOWN</td>
             * </tr>
             * <tr>
             *   <td class="centre">1</td>
             *   <td>
             *     Rounds towards nearest neighbour.<br>
             *     If equidistant, rounds away from zero.
             *   </td>
             *   <td id="round-half-up">ROUND_HALF_UP</td>
             * </tr>
             * <tr>
             *   <td class="centre">2</td>
             *   <td>
             *     Rounds towards nearest neighbour.<br>
             *     If equidistant, rounds towards even neighbour.
             *   </td>
             *   <td id="round-half-even">ROUND_HALF_EVEN</td>
             * </tr>
             * <tr>
             *   <td class="centre">3</td>
             *   <td>Rounds away from zero.</td>
             *   <td id="round-up">ROUND_UP</td>
             * </tr>
             * </tbody></table>
             * <br/>
             * The value will be checked for validity when one of the above methods is called.<br/>
             * <br/>
             * !Big.RM! will be thrown if the value is found to be invalid.
             *
             * @memberOf Big
             * @name RM
             * @type {number}
             *
             * @example <caption>Example usage.</caption>
             * Big.RM = 0
             */
            $defineProperty(Big, 'RM', {
                value: RM,
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Read only member (in ECMA5 environment) for use in identifying the
             * source version number of {@link Big} constructors.
             * @memberOf Big
             * @readonly
             * @name version
             * @type {string}
             * @default '0.2.0'
             *
             * @example <caption>Example usage.</caption>
             * log(Big.version);             // Displays: '0.2.0'
             */
            $defineProperty(Big, 'version', {
                value: '0.2.0',
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * Read only member (in ECMA5 environment) for use in identifying the
             * source version number of {@link Big} constructors.
             * @memberOf Big.prototype
             * @readonly
             * @name version
             * @type {string}
             * @default '0.2.0'
             *
             * @example <caption>Example usage.</caption>
             * var y = new Big('Hello');
             * log(y.constructor.version);   // Displays: '0.2.0'
             */
            $defineProperty(Big.prototype, 'version', {
                value: '0.2.0',
                writable: false,
                configurable: false,
                enumerable: false
            });

            /**
             * Determines if an object is a {@link module:util-x~bigobject Big number}.
             *
             * @memberOf Big
             * @name isBig
             * @function
             * @param {*} inputArg The argument to be tested to see if it is a {@link module:util-x~bigobject Big number}.
             * @returns {boolean} True if inputArg is a {@link module:util-x~bigobject Big number} otherwise false.
             *
             * @example <caption>Example usage.</caption>
             * Big1 = Big()
             * x = 123
             * y = new Big1(x)
             * Big.isBig(x)                         // false
             * Big.isBig(y)                         // true
             * Big.isBigSibling(new BigNumber(1))   // false
             * Big.isBigSibling(new Decimal(1))     // false
             */
            $defineProperty(Big, 'isBig', {
                value: function (inputArg) {
                    return $isInstance(inputArg, Big);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * Determines if an object is a an object created by one of its sibling libraries.
             *
             * @memberOf Big
             * @name isBigSibling
             * @function
             * @param {*} inputArg The argument to be tested to see if it is a sibling object.
             * @returns {boolean} True if inputArg is a sibling object, otherwise false.
             *
             * @example <caption>Example usage.</caption>
             * Big1 = Big()
             * x = 123
             * y = new Big1(x)
             * Big.isBigSibling(x)                  // false
             * Big.isBigSibling(y)                  // false
             * Big.isBigSibling(new BigNumber(1))   // true
             * Big.isBigSibling(new Decimal(1))     // true
             *
             * @see https://github.com/MikeMcl/bignumber.js/
             * @see https://github.com/MikeMcl/decimal.js/
             */
            $defineProperty(Big, 'isBigSibling', {
                value: function (inputArg) {
                    return !$isInstance(inputArg, Big) && isBigDuck(inputArg);
                },
                writable: true,
                configurable: true,
                enumerable: false
            });

            /**
             * The custom error constructor.
             *
             * @memberOf Big
             * @constructor BigError
             * @readonly
             * @param {*} [message] Human-readable description of the error.
             * @returns {module:util-x~bigerror}
             *
             * @example <caption>Example usage.</caption>
             * try {
             *     throw new Big.BigError('Test');
             * } catch (e) {
             *     // e.name = 'BigError'
             *     // e.message = 'Test'
             * }
             *
             * try {
             *     throw new Big.BigError(NaN);
             * } catch (e) {
             *     // e.name = 'BigError'
             *     // e.message = '"NaN"'
             * }
             */
            $defineProperty(Big, 'BigError', {
                value: BigError,
                writable: false,
                configurable: false,
                enumerable: false
            });

            return Big;
        }

        /**
         * Internal copy of {@link Big}
         *
         * @private
         * @constructor
         * @augments Big
         */
        BigNum = bigFactory();
    }());

    (function () {
        var maxMessageLength = 128,
            assertCustomError = exports.customError('AssertionError', maxMessageLength),
            assertClassId = '[object AssertionError]';

        /**
         * The AssertionError constructor.
         *
         * @constructor module:util-x~AssertionError
         * @augments CustomError
         * @param {object} opts
         */
        function AssertionError(opts) {
            var rtn;

            // Enable constructor usage without new.
            if (!$isInstance(this, AssertionError)) {
                rtn = new AssertionError(opts);
            } else {
                if (!$isPlainObject(opts)) {
                    opts = {};
                }

                if (typeof opts.message !== 'string') {
                    opts.message = '';
                }

                if (typeof opts.operator !== 'string') {
                    opts.operator = '';
                }

                if (!$isFunction(opts.stackStartFunction)) {
                    opts.stackStartFunction = AssertionError;
                }

                $call(assertCustomError, this, opts.message, opts.stackStartFunction);
                $defineProperties(this, {
                    actual: $assign({
                        value: opts.actual
                    }, propNotEnumerable),

                    expected: $assign({
                        value: opts.expected
                    }, propNotEnumerable),

                    operator: $assign({
                        value: opts.operator
                    }, propNotEnumerable)
                });
            }

            return rtn;
        }

        $defineProperties(AssertionError, {
            /**
             * @name module:util-x~AssertionError.version
             * @readonly
             * @const
             * @type {string}
             */
            version: $assign({
                value: '0.2.0'
            }, propConstant)
        });

        $inherits(AssertionError, assertCustomError);

        $defineProperties(AssertionError.prototype, {
            /**
             * @name module:util-x~AssertionError.prototype.classId
             * @readonly
             * @const
             * @type {string}
             */
            classId: $assign({
                value: assertClassId
            }, propConstant),

            /**
             * @name module:util-x~AssertionError.prototype.version
             * @readonly
             * @const
             * @type {string}
             */
            version: $assign({
                value: '0.2.0'
            }, propConstant),

            /**
             * @function module:util-x~AssertionError.prototype.toString
             * @returns {string}
             */
            toString: $assign({
                value: function () {
                    var theString;

                    if (typeof this.message === 'string' && this.message.length) {
                        theString = this.name + ': ' + $truncate(this.message, maxMessageLength);
                    } else if ($isInstance(this, AssertionError)) {
                        theString = this.name + ': ';
                        theString += $truncate($stringify(this.actual, exports.customErrorReplacer), maxMessageLength) + ' ';
                        theString += this.operator + ' ';
                        theString += exports.String.truncate($stringify(this.expected, exports.customErrorReplacer), maxMessageLength);
                    }

                    return theString;
                }
            }, propNotEnumerable)
        });

        /**
         * Returns whether an exception is expected. Used by throws.
         *
         * @private
         * @function module:util-x~expectedException
         * @param {*} actual
         * @param {*} expected
         * @returns {boolean}
         */
        function expectedException(actual, expected) {
            var storeState,
                val;

            if (actual === null || $isUndefined(actual)) {
                return false;
            }

            if (expected === null || $isUndefined(expected)) {
                return false;
            }

            if ($isRegExp(expected) && $instanceOf(actual, CError)) {
                storeState = exports.normaliseErrorIEToStringState();
                if (storeState === false) {
                    exports.normaliseErrorIEToStringOn();
                }

                val = $toString(actual);
                if (storeState === false) {
                    exports.normaliseErrorIEToStringOff();
                }

                return $test(expected, val);
            }

            if ($instanceOf(actual, expected)) {
                return true;
            }

            if ($isFunction(expected)) {
                storeState = exports.normaliseErrorIEToStringState();
                if (storeState === false) {
                    exports.normaliseErrorIEToStringOn();
                }

                val = $call(expected, {}, actual);
                if (storeState === false) {
                    exports.normaliseErrorIEToStringOff();
                }

                if (val === true) {
                    return true;
                }
            }

            return false;
        }

        /**
         * Throws an exception that displays the values for actual and expected separated by the provided operator.
         *
         * @private
         * @function module:util-x~throwAssertionError
         * @param {*} actual
         * @param {*} expected
         * @param {string} message
         * @param {string} operator
         * @param {Function} [stackStartFunction]
         * @returns {undefined}
         */
        function throwAssertionError(actual, expected, message, operator, stackStartFunction) {
            if (!$isFunction(stackStartFunction)) {
                stackStartFunction = throwAssertionError;
            }

            throw new AssertionError({
                message: message,
                actual: actual,
                expected: expected,
                operator: operator,
                stackStartFunction: stackStartFunction
            });
        }

        /**
         * Returns whether an exception is expected. Used by assert.throws and assert.doesNotThrow.
         *
         * @private
         * @function module:util-x~throws
         * @param {boolean} shouldThrow
         * @param {Function} block
         * @param {*} expected
         * @param {string} [message]
         * @param {Function} [stackStartFunction]
         * @returns {undefined}
         */
        function throws(shouldThrow, block, expected, message, stackStartFunction) {
            var wasExceptionExpected,
                actual;

            if (!$isFunction(stackStartFunction)) {
                if ($isFunction(message)) {
                    stackStartFunction = message;
                    message = Undefined;
                } else {
                    stackStartFunction = throws;
                }
            }

            if ((typeof message !== 'string' || !message.length) && typeof expected === 'string') {
                message = expected;
                expected = null;
            }

            try {
                block();
            } catch (e) {
                actual = e;
            }

            wasExceptionExpected = expectedException(actual, expected);
            if (message) {
                message = ' ' + $toString(message);
            } else {
                message = '.';
            }

            if (expected && typeof expected.name === 'string' && !expected.name.length) {
                message = ' (' + expected.name + ').' + message;
            } else {
                message = '.' + message;
            }

            if (shouldThrow === true && !actual) {
                throwAssertionError(actual, expected, 'Missing expected exception' + message, Undefined, stackStartFunction);
            }

            if (shouldThrow === false && wasExceptionExpected === true) {
                throwAssertionError(actual, expected, 'Got unwanted exception' + message, Undefined, stackStartFunction);
            }

            if ((shouldThrow === true && actual && expected && wasExceptionExpected === false) || (shouldThrow === false && actual)) {
                throw actual;
            }
        }

        function assertFactory() {
            var assert = {};

            $defineProperties(assert, {
                AssertionError: $assign({
                    /**
                     * The AssertionError constructor.
                     *
                     * @constructor module:util-x~exports.assert.AssertionError
                     * @augments CustomError
                     * @readonly
                     * @const
                     * @param {object} opts
                     */
                    value: AssertionError
                }, propConstant),

                factory: $assign({
                    /**
                     * Create and return an independant copy of the {@link module:util-x~exports.assert} object.
                     *
                     * @function module:util-x~exports.assert.assertFactory
                     * @readonly
                     * @const
                     * @returns {object}
                     */
                    value: assertFactory
                }, propConstant),

                /**
                 * Tests if value is truthy, it is equivalent to assert.equal(!!value, true, message);
                 *
                 * @function module:util-x~exports.assert.fail
                 * @param {*} value
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                fail: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        throwAssertionError(actual, expected, message, 'fail', stackStartFunction);
                    }
                }, propNotEnumerable),

                /**
                 * Tests if value is truthy, it is equivalent to assert.equal(!!value, true, message);
                 *
                 * @function module:util-x~exports.assert.ok
                 * @param {*} value
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                ok: $assign({
                    value: function (value, message, stackStartFunction) {
                        var pass = !!value;

                        if (!pass) {
                            throwAssertionError(pass, true, message, 'ok', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests if value is truthy, it is equivalent to assert.equal(!value, true, message);
                 *
                 * @function module:util-x~exports.assert.notOk
                 * @param {*} value
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                notOk: $assign({
                    value: function (value, message, stackStartFunction) {
                        var pass = !!value;

                        if (pass) {
                            throwAssertionError(pass, true, message, 'notOk', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests shallow, coercive equality with the equal comparison operator ( == ).
                 *
                 * @function module:util-x~exports.assert.equal
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                equal: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        /*jslint eqeq: true */
                        if (actual != expected) {
                            throwAssertionError(actual, expected, message, '==', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests shallow, coercive non-equality with the not equal comparison operator ( != ).
                 *
                 * @function module:util-x~exports.assert.notEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                notEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        /*jslint eqeq: true */
                        if (actual == expected) {
                            throwAssertionError(actual, expected, message, '!=', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests strict equality, as determined by the strict equality operator ( === ).
                 *
                 * @function module:util-x~exports.assert.strictEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                strictEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (actual !== expected) {
                            throwAssertionError(actual, expected, message, '===', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests strict non-equality, as determined by the strict not equal operator ( !== ).
                 *
                 * @function module:util-x~exports.assert.notStrictEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {string} operator
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                notStrictEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (actual === expected) {
                            throwAssertionError(actual, expected, message, '!==', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Expects block to throw an error. error can be constructor, regexp or validation function.
                 *
                 * @function module:util-x~exports.assert.throws
                 * @param {Function} block
                 * @param {constructor|regexp|function} error
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                throws: $assign({
                    value: function (block, error, message, stackStartFunction) {
                        throws(true, block, error, message, stackStartFunction);
                    }
                }, propNotEnumerable),

                /**
                 * Expects block not to throw an error, see assert.throws for details.
                 *
                 * @function module:util-x~exports.assert.doesNotThrow
                 * @param {Function} block
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                doesNotThrow: $assign({
                    value: function (block, message, stackStartFunction) {
                        throws(false, block, message, stackStartFunction);
                    }
                }, propNotEnumerable),

                /**
                 * Tests if value is not a falsy value, throws if it is a truthy value.
                 * Useful when testing the first argument, error in callbacks.
                 *
                 * @function module:util-x~exports.assert.ifError
                 * @param {*} err
                 * @returns {undefined}
                 */
                ifError: $assign({
                    value: function (err) {
                        if (err) {
                            throw err;
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests for deep equality, coercive equality with the equal comparison operator ( == ) and equivalent.
                 *
                 * @function module:util-x~exports.assert.deepEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                deepEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (!$deepEqual(actual, expected)) {
                            throwAssertionError(actual, expected, message, 'deeptEqual', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests for deep inequality, coercive inequality with the not equal comparison operator ( != ) and equivalent.
                 *
                 * @function module:util-x~exports.assert.notDeepEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                notDeepEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if ($deepEqual(actual, expected)) {
                            throwAssertionError(actual, expected, message, 'notDeepEqual', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests for deep strict equality, equality with the strict equal comparison operator
                 * ( === ) and equivalent.
                 *
                 * @function module:util-x~exports.assert.deepStrictEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                deepStrictEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (!$deepStrictEqual(actual, expected)) {
                            throwAssertionError(actual, expected, message, 'deepStrictEqual', stackStartFunction);
                        }
                    }
                }, propNotEnumerable),

                /**
                 * Tests for deep strict inequality, inequality with the strict not equal comparison operator
                 * ( !== ) and equivalent.
                 *
                 * @function module:util-x~exports.assert.notDeepStrictEqual
                 * @param {*} actual
                 * @param {*} expected
                 * @param {string} message
                 * @param {Function} [stackStartFunction]
                 * @returns {undefined}
                 */
                notDeepStrictEqual: $assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if ($deepStrictEqual(actual, expected)) {
                            throwAssertionError(actual, expected, message, 'notDeepStrictEqual', stackStartFunction);
                        }
                    }
                }, propNotEnumerable)
            });

            return assert;
        }

        /**
         * @name module:util-x~exports.assert
         * @namespace
         */
        exports.assert = assertFactory();
    }());

    /**
     * Applies utilx to the neatice objects.
     *
     * @function module:util-x~exports.goNative
     */
    exports.goNative = function () {
        var utilx = exports.factory();

        $forEach($objectKeys(exports), function (key1) {
            if (key1 === 'Big' || key1 === 'assert') {
                return;
            }

            if ($isPlainObject(utilx[key1])) {
                $forEach($objectKeys(exports[key1]), function (key2) {
                    if (!$isPlainObject(exports[key1][key2])) {
                        if (exports[key1][key2] !== base[key1][key2]) {
                            if (!(exports.Number.isNaN(utilx[key1][key2]) && exports.Number.isNaN(base[key1][key2]))) {
                                $conlog(key1 + '.' + key2);
                                $defineProperty(global[key1], key2, $assign({
                                    value: utilx[key1][key2]
                                }, propNotEnumerable));
                            }
                        }
                    }

                    if ($isPlainObject(exports[key1][key2])) {
                        $forEach($objectKeys(exports[key1][key2]), function (key3) {
                            if (!$isPlainObject(exports[key1][key2][key3]) && exports[key1][key2][key3] !== base[key1][key2][key3]) {
                                if (key2 === 'proto') {
                                    $conlog(key1, key1 + '.prototype.' + key3);
                                    $defineProperty(global[key1].prototype, key3, $assign({
                                        value: utilx[key1][key2][key3]
                                    }, propNotEnumerable));
                                } else {
                                    $conlog(key1, key1 + '.' + key2 + '.' + key3);
                                    $defineProperty(global[key1][key2], key3, $assign({
                                        value: utilx[key1][key2][key3]
                                    }, propNotEnumerable));
                                }
                            }
                        });
                    }
                });
            }
        });

        /*jslint newcap: true */
        $defineProperty(global, 'Big', $assign({
            value: BigNum()
        }, propNotEnumerable));
        /*jslint newcap: false */

        $defineProperty(global, 'assert', $assign({
            value: exports.assert.factory()
        }, propNotEnumerable));
    };

    /**
     * @private
     * @function module:util-x~wrapFunction
     * @param {Function} fn A function to be wrapped.
     * @throws {TypeError} If fn is not a function.
     * @returns {Function} A wrapped version of the supplied function.
     */
    function wrapFunction(fn) {
        var fnLen = $toLength($throwIfNotFunction(fn).length),
            anLen,
            args;

        if ($isArray(fn.argNames)) {
            anLen = $toLength(fn.argNames.length);
            if (anLen < fnLen) {
                throw new CError('argNames are fewer than function arguments: ' + $toString(fn.argNames));
            }

            args = $slice(fn.argNames, 0, $min(anLen, fnLen));
            args = $map(args, function (name) {
                return '$' + name;
            });

            args = $join(args, ', ');
        } else {
            args = $bindArgs(fnLen);
        }

        /*jslint evil: true */
        return new CFunction('fn', 'apply', 'return function (' + args + ') { return apply(fn, this, arguments); };')(fn, $apply);
    }

    /**
     * @private
     * @function module:util-x~provideItem
     * @param {*} item
     * @returns {*} The item that the argument provides.
     */
    function provideItem(item) {
        if (!$isPrimitive(item)) {
            if ($isPlainObject(item)) {
                item = {};
            } else if ($isFunction(item)) {
                item = wrapFunction(item);
            }
        }

        return item;
    }

    /**
     * @private
     * @function module:util-x~addMethodsList
     * @param {Object} object
     * @param {String} key
     */
    function defineItem(to, key, value) {
        $defineProperty(to, key, $assign({
            value: provideItem(value)
        }, propNotEnumerable));
    }

    /**
     * @private
     * @function module:util-x~addMethodsList
     * @param {Object} object
     */
    function addMethodsList(object) {
        if (!$call(pHasOwn, object, 'methods')) {
            defineItem(object, 'methods', []);
        }
    }

    /**
     * Creates an copy of utilx from the internal $ object.
     *
     * @function module:util-x~exports.factory
     * @returns {Object}
     */
    exports.factory = function () {
        var utilx = {};

        $forEach($objectKeys(exports), function (key1) {
            if (key1 === 'Big' || key1 === 'assert') {
                return;
            }

            addMethodsList(utilx);
            defineItem(utilx, key1, exports[key1]);
            if ($isPlainObject(exports[key1])) {
                addMethodsList(utilx[key1]);
                $forEach($objectKeys(exports[key1]), function (key2) {
                    defineItem(utilx[key1], key2, exports[key1][key2]);
                    if ($isPlainObject(exports[key1][key2])) {
                        addMethodsList(utilx[key1][key2]);
                        $forEach($objectKeys(exports[key1][key2]), function (key3) {
                            defineItem(utilx[key1][key2], key3, exports[key1][key2][key3]);
                            $push(utilx[key1][key2].methods, key3);
                        });
                    } else {
                        $push(utilx[key1].methods, key2);
                    }
                });
            } else {
                $push(utilx.methods, key1);
            }
        });

        /*jslint newcap: true */
        $defineProperty(utilx, 'Big', $assign({
            value: BigNum()
        }, propNotEnumerable));
        /*jslint newcap: false */

        $defineProperty(utilx, 'assert', $assign({
            value: exports.assert.factory()
        }, propNotEnumerable));

        $defineProperty(utilx, 'version', propConstant);

        $defineProperties(utilx.Number, {
            POSITIVE_ZERO: propConstant,

            NEGATIVE_ZERO: propConstant,

            UNSAFE_INTEGER: propConstant,

            WORD8: propConstant,

            UWORD8: propConstant,

            WORD16: propConstant,

            UWORD16: propConstant,

            WORD32: propConstant,

            UWORD32: propConstant,

            MAX_UINT32: propConstant,

            MAX_INT32: propConstant,

            MIN_INT32: propConstant,

            MAX_UINT16: propConstant,

            MAX_INT16: propConstant,

            MIN_INT16: propConstant,

            MAX_UINT8: propConstant,

            MAX_INT8: propConstant,

            MIN_INT8: propConstant,

            MAX_SAFE_INTEGER: propConstant,

            MIN_SAFE_INTEGER: propConstant,

            MAX_VALUE: propConstant,

            MIN_VALUE: propConstant,

            EPSILON: propConstant,

            NaN: propConstant,

            POSITIVE_INFINITY: propConstant,

            NEGATIVE_INFINITY: propConstant
        });

        return utilx;
    };

    /******************************************************************************/

    //Code to export the public utilx object to different environments.

    if ($typeOf(global) !== 'object') {
        throw new CTypeError('Invalid global context');
    }

    if (module && module.exports) {
        /**
         * Node and other CommonJS-like environments that support "module.exports".
         */
        module.exports = exports.factory();
    } else if (define && define.amd) {
        define(function () {
            /**
             * Asynchronous Module Definition-like environments that support "define".
             *
             * @name module:util-x
             */
            return exports.factory();
        });
    } else {
        /**
         * Without module support. Defines "utilx"
         * on the reference to the "global this" if it doesn't already exist.
         *
         * @global
         * @name utilx
         */
        $defineProperty(global, 'utilx', $assign({
            value: exports.factory()
        }, propNotEnumerable));
    }

    // No longer required - trash early.
    testTemp = null;
}(((typeof window === 'object' || typeof window === 'function' || false) && window) ||
    (typeof self === 'object' && self) ||
    (typeof global === 'object' && global) ||
    (typeof this === 'object' && this) || {},
    typeof module === 'object' && module,
    (typeof define === 'function' || false) && define));
