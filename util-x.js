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

/*jslint devel: true */

/*global Array, Boolean, Date, Error, EvalError, Function, JSON, Math, Number,
    Object, RangeError, ReferenceError, RegExp, self, String, SyntaxError,
    TypeError, URIError, console, define, global, isFinite, isNaN, module,
    parseFloat, parseInt, window
*/

/*properties
    '', '\b', '\t', '\n', '\f', '\r', '"', '0', '1', '1.', '2', '3', '4', '5',
    '6', '7', A, AffirmError, Array, AssertionError, Boolean,
    CheckObjectCoercible, ClassEmpty, Ctr, DP, Date, EPSILON, Error, EvalError,
    Function, JSON, MAX_INT16, MAX_INT32, MAX_INT8, MAX_SAFE_INTEGER, MAX_UINT16,
    MAX_UINT32, MAX_UINT8, MAX_VALUE, MIN_INT16, MIN_INT32, MIN_INT8,
    MIN_SAFE_INTEGER, MIN_VALUE, Math, NEGATIVE_INFINITY, NEGATIVE_ZERO, NaN,
    Number, Object, POSITIVE_INFINITY, POSITIVE_ZERO, RM, RangeError,
    ReferenceError, RegExp, String, SyntaxError, ToClassString, ToMethod,
    ToObject, ToObjectFixIndexedAccess, ToString, TypeError, UNSAFE_INTEGER,
    URIError, UWORD16, UWORD32, UWORD8, Uint8Array, WORD16, WORD32, WORD8, '\\',
    abs, actual, add, alert, amd, anchor, apply, areSameClass, areSameTypeOf,
    argNames, assert, assign, bind, c, call, captureStackTrace, ceil, charAt,
    charCodeAt, clamp, clampToInt, classId, clipDuplicates, codePointAt, concat,
    configurable, constructor, contains, copyWithin, countCharacter, create,
    customError, customErrorReplacer, customJSON, deepEqual, deepFreeze,
    deepStrictEqual, defineGetter, defineProperties, defineProperty,
    defineSetter, doesNotThrow, e, endsWith, enumerable, equal, escapeRegex,
    every, exec, execSlice, expected, exports, factory, fail, fill, filter, find,
    findIndex, first, floor, foo, forAll, forEach, forKeys, freeze, from,
    fromCharCode, fromCodePoint, get, getOwnPropertyDescriptor,
    getOwnPropertyNames, getPrototypeOf, getTime, global, goNative, hasOwn,
    hasOwnProperty, hasProperty, ifError, ignoreCase, inRange, index, indexOf,
    inherits, instanceOf, interimLastIndex, is, isArguments, isArray, isBoolean,
    isBytestring, isDate, isDigits, isEmpty, isError, isErrorTypeConstructor,
    isEven, isExtensible, isFinite, isFrozen, isFunction, isInt16, isInt32,
    isInt8, isInteger, isNaN, isNativeFunction, isNegative, isNumber, isNumeric,
    isObject, isOdd, isPlainObject, isPositive, isPrimitive, isPrototypeOf,
    isRegExp, isSafeInteger, isSealed, isString, isUint, isUint16, isUint32,
    isUint8, isUndefined, isValid, join, keys, last, lastIndex, lastIndexOf,
    length, link, localeCompare, log, lookupGetter, lookupSetter, map, match,
    max, message, methods, min, minus, modulo, multiline, name, noop,
    normaliseErrorIEToStringOff, normaliseErrorIEToStringOn,
    normaliseErrorIEToStringState, normalize, notDeepEqual, notDeepStrictEqual,
    notEqual, notOk, notStrictEqual, now, of, ok, operator, outRange,
    padLeadingChar, parse, parseFloat, parseInt, parseSimple, parseSupport, plus,
    pop, pow, powerSet, preventExtensions, propertyIsEnumerable, proto,
    prototype, push, random, randomInt, reduce, reduceRight, regex, remove,
    repeat, replace, replaceAll, returnArgs, reverse, round, runIENativeFunction,
    s, seal, search, sentinel, set, setPrototypeOf, shift, shuffle, sign, slice,
    some, sort, source, splice, split, sqrt, stableSort, stack,
    stackStartFunction, stacktrace, startsWith, sticky, strictEqual, stringify,
    stringifySupport, substr, substring, swapItems, test, throws, times,
    toExponential, toFixed, toInt16, toInt32, toInt8, toInteger, toJSON,
    toLength, toLocaleLowerCase, toLocaleString, toLocaleUpperCase, toLowerCase,
    toObject, toPrecision, toPrimitive, toSource, toString, toUint, toUint16,
    toUint32, toUint8, toUpperCase, trim, trimLeft, trimRight, trimString,
    truncate, unique, unshift, unwatch, value, valueOf, version, watch,
    wrapInChars, writable, wsStr
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

        testShims = false,
        enableLog = true,
        conlog,

        affirm,

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

        // class strings
        classArguments = '[object Arguments]',
        classFunction = '[object Function]',
        classObject = '[object Object]',
        classUndefined = '[object Undefined]',
        classNull = '[object Null]',
        classError = '[object Error]',
        classRegexp = '[object RegExp]',
        classArray = '[object Array]',
        classDate = '[object Date]',
        classString = '[object String]',
        classBoolean = '[object Boolean]',
        classNumber = '[object Number]',

        supportsAccessors,
        stringProto = '__proto__',
        stringDefineGetter = '__defineGetter__',
        stringDefineSetter = '__defineSetter__',
        stringLookupGetter = '__lookupGetter__',
        stringLookupSetter = '__lookupGetter__',

        propConstant,
        propNotEnumerable,
        shadowed,

        // Shortcuts
        pOToString,
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

        mLookupGetter,
        mLookupSetter,
        mDefineGetter,
        mDefineSetter,

        pIsPrototypeOf,
        mGetOwnPropertyDescriptor,

        cObject,

        mMin,
        mMax,
        mFloor,
        mAbs,
        mCeil,
        mRandom,
        mSqrt,
        //mRound,

        isFunc,
        isFunction,
        throwIfNotFunction,
        toClass,
        hasDontEnumBug,
        hasProtoEnumBug,
        hasEnumArgsBug,
        hasEnumStringBug,
        hasBoxedStringBug,

        unwantedError,

        hasErrorProps,
        //nonEnumProps,

        beginsFunction,
        runIENativeFunction,
        isIENativeFunction,
        isNativeFunction,
        isFunctionInternal,
        operaNative,

        testTemp,

        wspaceStrings,

        isProtoSupported,
        areGetSetSupported,
        isStrictMode,
        hasCallBug,
        pArgSlice,

        //hasWorkingCreate,

        // Shortcuts
        pSlice,
        pPush,
        pUnshift,
        pJoin,
        pConcat,
        pPop,
        pShift,
        pSplice,
        pIndexOf,
        pLastIndexOf,
        pForEach,
        pSort,
        pFind,
        pFindIndex,
        pCopyWithin,
        pSome,
        pEvery,
        pMap,
        pFilter,
        pReduce,
        pReduceRight,
        pFill,
        pReverse,

        mIsArray,
        mOf,
        mFrom,

        cString,
        pMatch,
        pSplit,
        pTrim,
        pStartsWith,
        pEndsWith,
        pContains,
        pSearch,

        pCharCodeAt,
        pSSlice,
        pSIndexOf,
        pSRepeat,

        pReplace,

        pGetTime,

        pNToString,

        pHasOwn,
        mDefineProperty,
        mGetPrototypeOf,
        mKeys,
        mParse,
        mStringify,

        pExec,
        pTest,

        mParseInt,
        mParsefloat,
        mIsFinite,

        //iBind,

        $hasOwn,
        $repeat,
        isNative,
        isArguments,
        isArray,
        $isInteger,
        isSafeInteger,
        isNumeric,
        inRange,
        isPlainObject,
        isErrorTypeConstructor,
        $getPrototypeOf,
        modulo,
        $forEach,
        $push,
        deepEqual,
        deepStrictEqual,
        defineProperty,
        defineProperties,
        assign,
        create,
        $objectKeys,
        stringify,
        truncate,
        inherits,
        stringContains,
        pPowerSet,
        $exec,
        $test,
        $slice,
        $split,
        $replace,
        $splice,
        $isDigits,
        $join,
        $parseInt,
        $map,
        trim,

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
        isNaN: isNaN,
        /**
         * @private
         * @function
         */
        isFinite: isFinite,
        /**
         * @private
         * @function
         */
        parseInt: parseInt,
        /**
         * @private
         * @function
         */
        parseFloat: parseFloat,

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
            sign: Math.sign,
            /**
             * @private
             * @function
             */
            min: Math.min,
            /**
             * @private
             * @function
             */
            max: Math.max,
            /**
             * @private
             * @function
             */
            floor: Math.floor,
            /**
             * @private
             * @function
             */
            ceil: Math.ceil,
            /**
             * @private
             * @function
             */
            abs: Math.abs,
            /**
             * @private
             * @function
             */
            random: Math.random,
            /**
             * @private
             * @function
             */
            pow: Math.pow,
            /**
             * @private
             * @function
             */
            sqrt: Math.sqrt,
            /**
             * @private
             * @function
             */
            round: Math.round
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
            Ctr: Object,
            /**  @type {Object} */
            proto: Object.prototype,
            /**
             * @private
             * @function
             */
            assign: Object.assign,
            /**
             * @private
             * @function
             */
            create: Object.create,
            /**
             * @private
             * @function
             */
            defineProperties: Object.defineProperties,
            /**
             * @private
             * @function
             */
            defineProperty: Object.defineProperty,
            /**
             * @private
             * @function
             */
            freeze: Object.freeze,
            /**
             * @private
             * @function
             */
            getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
            /**
             * @private
             * @function
             */
            getOwnPropertyNames: Object.getOwnPropertyNames,
            /**
             * @private
             * @function
             */
            getPrototypeOf: Object.getPrototypeOf,
            /**
             * @private
             * @function
             */
            is: Object.is,
            /**
             * @private
             * @function
             */
            isExtensible: Object.isExtensible,
            /**
             * @private
             * @function
             */
            isFrozen: Object.isFrozen,
            /**
             * @private
             * @function
             */
            isSealed: Object.isSealed,
            /**
             * @private
             * @function
             */
            keys: Object.keys,
            /**
             * @private
             * @function
             */
            preventExtensions: Object.preventExtensions,
            /**
             * @private
             * @function
             */
            seal: Object.seal,
            /**
             * @private
             * @function
             */
            setPrototypeOf: Object.setPrototypeOf,
            /**
             * @private
             * @function
             */
            defineGetter: Object.prototype[stringDefineGetter],
            /**
             * @private
             * @function
             */
            defineSetter: Object.prototype[stringDefineSetter],
            /**
             * @private
             * @function
             */
            lookupGetter: Object.prototype[stringLookupGetter],
            /**
             * @private
             * @function
             */
            lookupSetter: Object.prototype[stringLookupSetter],
            /**
             * @private
             * @function
             */
            hasOwn: Object.prototype.hasOwnProperty,
            /**
             * @private
             * @function
             */
            isPrototypeOf: Object.prototype.isPrototypeOf,
            /**
             * @private
             * @function
             */
            propertyIsEnumerable: Object.prototype.propertyIsEnumerable,
            /**
             * @private
             * @function
             */
            toLocaleString: Object.prototype.toLocaleString,
            /**
             * @private
             * @function
             */
            toSource: Object.prototype.toSource,
            /**
             * @private
             * @function
             */
            toString: Object.prototype.toString,
            /**
             * @private
             * @function
             */
            unwatch: Object.prototype.unwatch,
            /**
             * @private
             * @function
             */
            valueOf: Object.prototype.valueOf,
            /**
             * @private
             * @function
             */
            watch: Object.prototype.watch
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
            Ctr: Array,
            /** @@type {Object} */
            proto: Array.prototype,
            /**
             * @private
             * @function
             */
            isArray: Array.isArray,
            /**
             * @private
             * @function
             */
            of: Array.of,
            /**
             * @private
             * @function
             */
            from: Array.from,
            /**
             * @private
             * @function
             */
            concat: Array.prototype.concat,
            /**
             * @private
             * @function
             */
            every: Array.prototype.every,
            /**
             * @private
             * @function
             */
            filter: Array.prototype.filter,
            /**
             * @private
             * @function
             */
            find: Array.prototype.find,
            /**
             * @private
             * @function
             */
            findIndex: Array.prototype.findIndex,
            /**
             * @private
             * @function
             */
            forEach: Array.prototype.forEach,
            /**
             * @private
             * @function
             */
            indexOf: Array.prototype.indexOf,
            /**
             * @private
             * @function
             */
            join: Array.prototype.join,
            /**
             * @private
             * @function
             */
            lastIndexOf: Array.prototype.lastIndexOf,
            /**
             * @private
             * @function
             */
            map: Array.prototype.map,
            /**
             * @private
             * @function
             */
            pop: Array.prototype.pop,
            /**
             * @private
             * @function
             */
            push: Array.prototype.push,
            /**
             * @private
             * @function
             */
            reduce: Array.prototype.reduce,
            /**
             * @private
             * @function
             */
            reduceRight: Array.prototype.reduceRight,
            /**
             * @private
             * @function
             */
            reverse: Array.prototype.reverse,
            /**
             * @private
             * @function
             */
            shift: Array.prototype.shift,
            /**
             * @private
             * @function
             */
            slice: Array.prototype.slice,
            /**
             * @private
             * @function
             */
            some: Array.prototype.some,
            /**
             * @private
             * @function
             */
            sort: Array.prototype.sort,
            /**
             * @private
             * @function
             */
            splice: Array.prototype.splice,
            /**
             * @private
             * @function
             */
            toString: Array.prototype.toString,
            /**
             * @private
             * @function
             */
            unshift: Array.prototype.unshift
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
            Ctr: String,
            /**
             * @private
             * @type {Object}
             */
            proto: String.prototype,
            /**
             * @private
             * @function
             */
            fromCharCode: String.fromCharCode,
            /**
             * @private
             * @function
             */
            fromCodePoint: String.fromCodePoint,
            /**
             * @private
             * @function
             */
            anchor: String.prototype.anchor,
            /**
             * @private
             * @function
             */
            charAt: String.prototype.charAt,
            /**
             * @private
             * @function
             */
            charCodeAt: String.prototype.charCodeAt,
            /**
             * @private
             * @function
             */
            codePointAt: String.prototype.codePointAt,
            /**
             * @private
             * @function
             */
            concat: String.prototype.concat,
            /**
             * @private
             * @function
             */
            contains: String.prototype.contains,
            /**
             * @private
             * @function
             */
            endsWith: String.prototype.endsWith,
            /**
             * @private
             * @function
             */
            indexOf: String.prototype.indexOf,
            /**
             * @private
             * @function
             */
            lastIndexOf: String.prototype.lastIndexOf,
            /**
             * @private
             * @function
             */
            link: String.prototype.link,
            /**
             * @private
             * @function
             */
            localeCompare: String.prototype.localeCompare,
            /**
             * @private
             * @function
             */
            match: String.prototype.match,
            /**
             * @private
             * @function
             */
            normalize: String.prototype.normalize,
            /**
             * @private
             * @function
             */
            repeat: String.prototype.repeat,
            /**
             * @private
             * @function
             */
            replace: String.prototype.replace,
            /**
             * @private
             * @function
             */
            search: String.prototype.search,
            /**
             * @private
             * @function
             */
            slice: String.prototype.slice,
            /**
             * @private
             * @function
             */
            split: String.prototype.split,
            /**
             * @private
             * @function
             */
            startsWith: String.prototype.startsWith,
            /**
             * @private
             * @function
             */
            substr: String.prototype.substr,
            /**
             * @private
             * @function
             */
            substring: String.prototype.substring,
            /**
             * @private
             * @function
             */
            toLocaleLowerCase: String.prototype.toLocaleLowerCase,
            /**
             * @private
             * @function
             */
            toLocaleUpperCase: String.prototype.toLocaleUpperCase,
            /**
             * @private
             * @function
             */
            toLowerCase: String.prototype.toLowerCase,
            /**
             * @private
             * @function
             */
            toString: String.prototype.toString,
            /**
             * @private
             * @function
             */
            toUpperCase: String.prototype.toUpperCase,
            /**
             * @private
             * @function
             */
            trim: String.prototype.trim,
            /**
             * @private
             * @function
             */
            trimLeft: String.prototype.trimLeft,
            /**
             * @private
             * @function
             */
            trimRight: String.prototype.trimRight,
            /**
             * @private
             * @function
             */
            valueOf: String.prototype.valueOf
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
            Ctr: Number,
            /** @type {object} */
            proto: Number.prototype,
            /**
             * @private
             * @type {number}
             */
            EPSILON: Number.EPSILON,
            /**
             * @private
             * @type {number}
             */
            MAX_VALUE: Number.MAX_VALUE,
            /**
             * @private
             * @type {number}
             */
            MIN_VALUE: Number.MIN_VALUE,

            /**
             * @private
             * @type {number}
             */
            MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,

            /**
             * @private
             * @type {number}
             */
            MIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,

            /**
             * @private
             * @type {number}
             */
            NaN: Number.NaN,
            /**
             * @private
             * @type {number}
             */
            POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
            /**
             * @private
             * @type {number}
             */
            NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
            /**
             * @private
             * @function
             */
            isFinite: Number.isFinite,
            /**
             * @private
             * @function
             */
            isInteger: Number.isInteger,
            /**
             * @private
             * @function
             */
            isSafeInteger: Number.isSafeInteger,
            /**
             * @private
             * @function
             */
            isNaN: Number.isNaN,
            /**
             * @private
             * @function
             */
            parseFloat: Number.parseFloat,
            /**
             * @private
             * @function
             */
            parseInt: Number.parseInt,
            /**
             * @private
             * @function
             */
            toExponential: Number.prototype.toExponential,
            /**
             * @private
             * @function
             */
            toFixed: Number.prototype.toFixed,
            /**
             * @private
             * @function
             */
            toLocaleString: Number.prototype.toLocaleString,
            /**
             * @private
             * @function
             */
            toPrecision: Number.prototype.toPrecision,
            /**
             * @private
             * @function
             */
            toString: Number.prototype.toString,
            /**
             * @private
             * @function
             */
            valueOf: Number.prototype.valueOf
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
            Ctr: Boolean,
            /**
             * @private
             * @type {Object}
             */
            proto: Boolean.prototype,
            /**
             * @private
             * @function
             */
            toString: Boolean.prototype.toString,
            /**
             * @private
             * @function
             */
            valueOf: Boolean.prototype.valueOf
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
            Ctr: Function,
            /**
             * @private
             * @type {Object}
             */
            proto: Function.prototype,
            /**
             * @private
             * @function
             */
            apply: Function.prototype.apply,
            /**
             * @private
             * @function
             */
            bind: Function.prototype.bind,
            /**
             * @private
             * @function
             */
            call: Function.prototype.call,
            /**
             * @private
             * @function
             */
            toString: Function.prototype.toString
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
            Ctr: RegExp,
            /**
             * @private
             * @type {Object}
             */
            proto: RegExp.prototype,
            /**
             * @private
             * @function
             */
            exec: RegExp.prototype.exec,
            /**
             * @private
             * @function
             */
            test: RegExp.prototype.test,
            /**
             * @private
             * @function
             */
            toString: RegExp.prototype.toString
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
            Ctr: Date,
            /**
             * @private
             * @type {Object}
             */
            proto: Date.prototype,
            /**
             * @private
             * @function
             */
            now: Date.now,
            /**
             * @private
             * @function
             */
            getTime: Date.prototype.getTime
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
            Ctr: Error,
            /**
             * @private
             * @type {Object}
             */
            proto: Error.prototype
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
            Ctr: TypeError,
            /**
             * @private
             * @type {Object}
             */
            proto: TypeError.prototype
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
            Ctr: SyntaxError,
            /**
             * @private
             * @type {Object}
             */
            proto: SyntaxError.prototype
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
            Ctr: RangeError,
            /**
             * @private
             * @type {Object}
             */
            proto: RangeError.prototype
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
            Ctr: EvalError,
             /**
              * @private
              * @type {Object}
              */
            proto: EvalError.prototype
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
            Ctr: ReferenceError,
             /**
              * @private
              * @type {Object}
              */
            proto: ReferenceError.prototype
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
            Ctr: URIError,
            /**
             * @private
             * @type {Object}
             */
            proto: URIError.prototype
        }
    };

    /**
     * Holds references to the global JSON methods and members. If it exists.
     *
     * @private
     * @namespace
     */
    base.JSON = {};
    if (typeof JSON === 'object' && JSON) {
        /**
         * @private
         * @function
         */
        base.JSON.parse = JSON.parse;

        /**
         * @private
         * @function
         */
        base.JSON.stringify = JSON.stringify;
    }

    /**
     * Returns the first argument unchanged.
     * Primary use with ToMethod.
     *
     * @private
     * @function module:util-x~justArg
     * @argument {*} [arg]
     * @returns {*}
     */
    function justArg(arg) {
        return arg;
    }

    /**
     * Returns an arguments object of the arguments supplied.
     *
     * @private
     * @name module:util-x~returnArgs
     * @argument {...*} [varArgs]
     * @returns {Arguments}
     */
    function returnArgs(varArgs) {
        /*jslint unparam:true */
        /*jshint unused:false */
        return arguments;
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
    pOToString = base.Object.toString;
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

    mLookupGetter = base.Object.lookupGetter;
    mLookupSetter = base.Object.lookupSetter;
    mDefineGetter = base.Object.defineGetter;
    mDefineSetter = base.Object.defineSetter;

    pIsPrototypeOf = base.Object.isPrototypeOf;
    mGetOwnPropertyDescriptor = base.Object.getOwnPropertyDescriptor;

    pSlice = base.Array.slice;
    pPush = base.Array.push;
    pUnshift = base.Array.unshift;
    pJoin = base.Array.join;
    pConcat = base.Array.concat;
    pPop = base.Array.pop;
    pShift = base.Array.shift;
    pSplice = base.Array.splice;
    pIndexOf = base.Array.indexOf;
    pLastIndexOf = base.Array.lastIndexOf;
    pForEach = base.Array.forEach;
    pSort = base.Array.sort;
    pFind = base.Array.find;
    pFindIndex = base.Array.findIndex;
    pCopyWithin = base.Array.copyWithin;
    pSome = base.Array.some;
    pEvery = base.Array.every;
    pMap = base.Array.map;
    pFilter = base.Array.filter;
    pReduce = base.Array.reduce;
    pReduceRight = base.Array.reduceRight;
    pFill = base.Array.fill;
    pReverse = base.Array.reverse;

    mIsArray = base.Array.isArray;
    mOf = base.Array.of;
    mFrom = base.Array.from;

    cString = base.String.Ctr;
    pMatch = base.String.match;
    pSplit = base.String.split;
    pTrim = base.String.trim;
    pStartsWith = base.String.startsWith;
    pEndsWith = base.String.endsWith;
    pContains = base.String.contains;

    pCharCodeAt = base.String.charCodeAt;
    pSSlice = base.String.slice;
    pSIndexOf = base.String.indexOf;
    pSRepeat = base.String.repeat;
    pReplace = base.String.replace;
    pSearch = base.String.search;

    pGetTime = base.Date.getTime;

    pNToString = base.Number.toString;

    pHasOwn = base.Object.hasOwnProperty;
    mDefineProperty = base.Object.defineProperty;
    mGetPrototypeOf = base.Object.getPrototypeOf;
    mKeys = base.Object.keys;

    pExec = base.RegExp.exec;
    pTest = base.RegExp.test;

    mParseInt = base.parseInt;
    mParsefloat = base.parseFloat;
    mIsFinite = base.isFinite;

    /**
     * Shortcut
     * The Object constructor creates an object wrapper.
     *
     * @private
     * @function module:util-x~cObject
     * @param {*} inputArg
     * @throws TypeError if inputArg is null or undefined
     * @returns {*}
     */
    cObject = base.Object.Ctr;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~mMin
     * @param {number} number
     * @returns {number}
     */
    mMin = base.Math.min;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~mMax
     * @param {number} number
     * @returns {number}
     */
    mMax = base.Math.max;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~floor
     * @param {number} number
     * @returns {number}
     */
    mFloor = base.Math.floor;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~abs
     * @param {number} number
     * @returns {number}
     */
    mAbs = base.Math.abs;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~ceil
     * @param {number} number
     * @returns {number}
     */
    mCeil = base.Math.ceil;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~random
     * @returns {number}
     */
    mRandom = base.Math.random;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~sqrt
     * @returns {number}
     */
    mSqrt = base.Math.sqrt;

    /**
     * Shortcut
     *
     * @private
     * @function module:util-x~round
     * @returns {number}
     */
    //mRound = base.Math.round;

    /**
     * Shortcut
     * Returns true if the operands are strictly equal with no type conversion.
     *
     * @private
     * @function module:util-x~strictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4
     */
    function strictEqual(a, b) {
        return a === b;
    }

    /**
     * Shortcut
     * Returns true if the operand inputArg is undefined.
     *
     * @private
     * @function module:util-x~exportsisUndefined
     * @param {*} inputArg
     * @returns {boolean}
     */
    function $isUndefined(inputArg) {
        return strictEqual(typeof inputArg, 'undefined');
    }

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
            val = cString(inputArg);
        }

        return val;
    }

    /**
     * Avoid a Chakra JIT bug in compatibility modes of IE 11.
     *
     * @private
     * @function module:util-x~typeofFunction
     * @param {*} [inputArg] The object to be tested.
     * @returns {boolean} True if the typeof object is 'function', otherwise false.
     * @see https://github.com/jashkenas/underscore/issues/1621 for more details.
     */
    function typeofFunction(inputArg) {
        return typeof inputArg === 'function' || false;
    }

    /**
     * @private
     * @function module:util-x~isFunc
     * @param {*} [inputArg] The object to be tested.
     * @returns {boolean} True if a function, otherwise false.
     */
    if (!(typeofFunction(/x/) || (global && (typeof global.Uint8Array !== 'function' || false) && global.Uint8Array))) {
        isFunc = typeofFunction;
    } else {
        isFunc = function (inputArg) {
            /**
             * The use of 'Object#toString' avoids issues with the 'typeof' operator
             * in older versions of Chrome and Safari which return 'function' for regexes
             * and Safari 8 equivalents which return 'object' for typed array constructors.
             */
            return pOToString.call(inputArg) === classFunction;
        };
    }

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

        return type === 'undefined' ||
                inputArg === null ||
                type === 'boolean' ||
                type === 'string' ||
                type === 'number';
    }

    /**
     * Throws a TypeError if the operand inputArg is not an object or not a function,
     * otherise returns the object.
     *
     * @private
     * @function module:util-x~throwIfIsPrimitive
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is not an object or a function.
     * @returns {(Object|Function)}
     */
    function throwIfIsPrimitive(inputArg) {
        if ($isPrimitive(inputArg)) {
            throw new CTypeError('called on non-object: ' + $toString(inputArg));
        }

        return inputArg;
    }

    /**
     * @private
     * @function module:util-x~inPrototype
     * @param {Object} inputArg The object to be tested.
     * @throws {CTypeError} If inputArg is primitive
     * @param {string} property The property name.
     * @returns {boolean|undefined} True if the property is in the object's prototype, otherwise falsy.
     */
    function inPrototype(inputArg, property) {
        throwIfIsPrimitive(inputArg);

        var rtn;

        if (!$isPrimitive(inputArg.constructor)) {
            if (!$isPrimitive(inputArg.constructor.prototype)) {
                rtn = pHasOwn.call(inputArg.constructor.prototype, $toString(property));
            }
        }

        return rtn;
    }

    /**
     * replaced later
     */
    isArray = function (inputArg) {
        return !$isPrimitive(inputArg) &&
                pHasOwn.call(inputArg, 'length') &&
                (typeof inputArg.length === 'number') &&
                inPrototype(inputArg, 'push') &&
                inPrototype(inputArg, 'pop') &&
                inPrototype(inputArg, 'splice');
    };

    /**
     * Returns true if the operand inputArg is a Function. (Duck typed)
     * Replaced later on with a more reliable method, but we need to define
     * more functions first.
     *
     * @private
     * @function module:util-x~isFun
     * @param {*} [inputArg] The object to be tested.
     * @returns {boolean} True if the object matches the duck typing, otherwise false.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    function isFun(inputArg) {
        return !$isPrimitive(inputArg) && isFunc(inputArg) &&
                pHasOwn.call(inputArg, 'length') &&
                typeof inputArg.length === 'number' &&
                inPrototype(inputArg, 'constructor') &&
                inPrototype(inputArg, 'call') &&
                inPrototype(inputArg, 'apply');
    }

    /**
     * Returns true if the operand inputArg is a Function. (Duck typed)
     * Replaced later on with a more reliable method, but we need to define
     * more functions first.
     *
     * @private
     * @function module:util-x~isFunction
     * @param {*} [inputArg] The object to be tested.
     * @returns {boolean} True if the object matches the duck typing, otherwise false.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    isFunction = isFun;

    /**
     * @private
     * @function module:util-x~hasProperty
     * @param {*} inputArg The object to be tested.
     * @param {string} property The property name.
     * @returns {boolean} True if the property is on the object or in the object's prototype, otherwise false.
     */
    function hasProperty(inputArg, property) {
        /*jstwit in: true */
        return $toString(property) in throwIfIsPrimitive(inputArg);
    }

    /**
     * Throws a TypeError for argument not a fuction.
     *
     * @private
     * @function module:util-x~throwNotFunction
     * @param {*} [inputArg] The object to be tested.
     * @throws {TypeError} If inputArg is not a function.
     */
    function throwNotFunction(inputArg) {
        throw new CTypeError('Argument is not a function: ' + $toString(inputArg));
    }

    /**
     * Throws a TypeError if arguments is not a function otherwise returns the function.
     *
     * @private
     * @function module:util-x~throwIfNotFunction
     * @param {*} [inputArg] The object to be tested.
     * @throws {TypeError} If inputArg is not a function.
     * @returns {Function} The supplied function.
     */
    throwIfNotFunction = function (inputArg) {
        if (!isFun(inputArg)) {
            throwNotFunction(inputArg);
        }

        return inputArg;
    };

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     *
     * @private
     * @function module:util-x~instanceOf
     * @param {Object} object The object to be tested.
     * @param {Function} ctr The constructor to test the object against
     * @throws {TypeError} If ctr is not a function.
     * @returns {boolean} True if the constructor is in the object chain, otherwise false.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    function instanceOf(object, ctr) {
        throwIfNotFunction(ctr);

        var val = false;

        if (!$isPrimitive(object)) {
            if (object instanceof ctr) {
                val = true;
            } else if (!$isPrimitive(ctr.prototype)) {
                val = pIsPrototypeOf.call(ctr.prototype, object);
            }
        }

        return val;
    }

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object, otherwise returns the argument.
     *
     * @private
     * @function module:util-x~checkObjectCoercible
     * @param {*} inputArg The object to be tested.
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {*} The inputArg if coercible.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
     */
    function checkObjectCoercible(inputArg) {
        if (inputArg === null || $isUndefined(inputArg)) {
            throw new CTypeError('Cannot convert argument to object: ' + inputArg);
        }

        return inputArg;
    }

    /**
     * The function evaluates the passed value and converts it to an integer.
     *
     * @private
     * @function module:util-x~toInteger
     * @param {*} inputArg The object to be converted to an integer.
     * @returns {number} If the target value is NaN, null or undefined, 0 is returned. If the target value is false, 0 is returned and if true, 1 is returned.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
     */
    function toInteger(inputArg) {
        var number = +inputArg,
            val = 0;

        if (strictEqual(number, number)) {
            if (!number || number === Infinity || number === -Infinity) {
                val = number;
            } else {
                val = (number > 0 || -1) * mFloor(mAbs(number));
            }
        }

        return val;
    }

    /**
     * The abstract operation ToLength converts its argument to an integer suitable for use as the length
     * of an array-like object.
     *
     * @private
     * @function module:util-x~toLength
     * @param {*} inputArg The object to be converted to a length.
     * @returns {number} If len <= +0 then +0 else if len is +Infinity then 2^53-1 else min(len, 2^53-1).
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
     */
    function toLength(inputArg) {
        return mMin(mMax(toInteger(inputArg), 0), MAX_SAFE_INTEGER);
    }

    /**
     * @private
     * @function
     * @param {number} length
     * @param {string} [separator] A single comma with or without leading and trailing space characters.
     * @returns {string}
     */
    function bindArgs(length, separator) {
        var len = toLength(length),
            args = '',
            last,
            index;

        if (len) {
            if (typeof separator !== 'string' || !pTest.call(/^ *, *$/, separator)) {
                separator = ',';
            }

            for (index = 0, last = len - 1; index < len; index += 1) {
                args += '$' + index;
                if (index < last) {
                    args += separator;
                }
            }
        }

        return args;
    }

    /**
     * @private
     * @function module:util-x~conlog
     * @param {...*} [varArgs]
     */
    conlog = (function (con) {
        var type = typeof con,
            okType,
            hasLog,
            hasLogApply,
            log,
            toArr,
            fn;

        okType = type === 'object' || type === 'function' || false;
        if (okType) {
            type = typeof con.log;
            hasLog = type === 'object' || type === 'function' || false;
        } else {
            hasLog = false;
        }

        if (hasLog) {
            log = con.log;
            type = typeof log.apply;
            hasLogApply = type === 'object' || type === 'function' || false;
            toArr = function toArr(args) {
                var rtn = [],
                    length = toLength(args.length),
                    index;

                for (rtn.length = length, index = 0; index < length; index += 1) {
                    rtn[index] = args[index];
                }
                return rtn;
            };
        } else {
            hasLogApply = false;
        }

        if (hasLogApply) {
            try {
                log.apply(con, ['Test log', true, con]);
                fn = function () {
                    if (enableLog) {
                        log.apply(con, toArr(arguments));
                    }
                };

                fn('Using standard apply for logging');
            } catch (eLogApply) {
                hasLogApply = false;
            }
        }

        if (!hasLogApply && hasLog) {
            try {
                Function.prototype.call.apply(log, pConcat.call([con], ['Test log', true, con]));
                fn = function () {
                    if (enableLog) {
                        Function.prototype.call.apply(log, pConcat.call([con], toArr(arguments)));
                    }
                };

                fn('Using function apply for logging');
                hasLogApply = true;
            } catch (eApplyLog) {
                hasLogApply = false;
            }
        }

        if (!hasLogApply && hasLog) {
            try {
                log('Test log');
                log(true);
                log(con);
                fn = function () {
                    var args = toArr(arguments),
                        length,
                        index;

                    if (enableLog) {
                        for (length = toLength(args.length), index = 0; index < length; index += 1) {
                            log(args[index]);
                        }
                    }
                };

                fn('Using for loop for logging');
                hasLogApply = true;
            } catch (eLog) {
                hasLog = hasLogApply = toArr = null;
            }

            if (!hasLog) {
                fn = function () { return; };
            }
        }

        return fn;
    }((typeof console === 'object' || typeof console === 'function' || false) && console));

    /**
     * Internal affirm
     *
     * @private
     * @name module:util-x~affirm
     * @namespace
     */
    affirm = {};

    /**
     * @private
     * @constructor module:util-x~affirm.AffirmError
     * @param {Object} opts
     */
    affirm.AffirmError = function (opts) {
        var type = typeof opts;

        if (opts && type === 'object' && !isFunction(opts) && opts.constructor.prototype !== protoObject) {
            opts = {};
        }

        if (!isFunction(opts.stackStartFunction)) {
            opts.stackStartFunction = affirm.AffirmError;
        }

        CError.call(this, opts.message, opts.stackStartFunction);
        this.message = opts.message;
        this.actual =  opts.actual;
        this.expected = opts.expected;
        this.operator = opts.operator;
    };

    testTemp.ClassEmpty = function () { return; };
    testTemp.ClassEmpty.prototype = protoError;
    affirm.AffirmError.prototype = new testTemp.ClassEmpty();
    affirm.AffirmError.prototype.name = 'AffirmError';
    affirm.AffirmError.prototype.constructor = affirm.AffirmError;

    /**
     * @private
     * @function module:util-x~throwIfNotEnoughArgs
     * @param {arguments} args
     * @param {number} requiredLength
     * @throws {SyntaxError} If args.length < requiredLength
     * @returns {number} Arguments length
     */
    function throwIfNotEnoughArgs(args, requiredLength) {
        var length = toLength(args.length);

        if (length < requiredLength) {
            throw new CSyntaxError($toString(length) + ' is not enough arguments, requires ' + $toString(requiredLength));
        }

        return length;
    }

    /**
     * Throws an exception that displays the values for actual and expected separated by the provided operator.
     *
     * @private
     * @function module:util-x~affirm.fail
     * @param {*} actual
     * @param {*} expected
     * @param {string} message
     * @param {string} operator
     * @param {Function} [stackStartFunction]
     * @throws {SyntaxError} If not enough arguments
     */
    affirm.fail = function (actual, expected, message, operator, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 4);
        if (!isFunction(stackStartFunction)) {
            stackStartFunction = affirm.fail;
        }

        throw new affirm.AffirmError({
            actual: actual,
            expected: expected,
            message: $toString(message),
            operator: $toString(operator),
            stackStartFunction: stackStartFunction
        });
    };

    /**
     * Create optional arguments for affirm
     *
     * @private
     * @function module:util-x~optArgs
     * @param {number} begin
     * @param {string} message
     * @param {Function} stackStartFunction
     * @param {Function} caller
     * @returns {Object}
     */
    function optArgs(begin, message, stackStartFunction, caller) {
        var length = throwIfNotEnoughArgs(arguments, 4);

        if (length === begin) {
            if (isFunction(message)) {
                stackStartFunction = message;
                message = 'undefined';
            } else {
                message = $toString(message);
            }
        } else if (length > begin) {
            message = $toString(message);
            if (!isFunction(stackStartFunction)) {
                stackStartFunction = caller;
            }
        }

        return {
            message: message,
            stackStartFunction: stackStartFunction
        };
    }

    /**
     * Tests if value is truthy, it is equivalent to affirm.equal(!!value, true, message);
     *
     * @private
     * @function module:util-x~affirm.ok
     * @param {*} value
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     */
    affirm.ok = function (guard, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 1);

        var opt;

        guard = !guard;
        if (guard) {
            opt = optArgs(2, message, stackStartFunction, affirm.ok);
            affirm.fail(!guard, true, opt.message, 'ok', opt.stackStartFunction);
        }
    };

    /**
     * Tests shallow, coercive equality with the equal comparison operator ( == ).
     *
     * @private
     * @function module:util-x~affirm.equal
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     * @returns {undefined}
     */
    affirm.equal = function (actual, expected, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 2);

        var opt;

        /*jslint eqeq: true */
        if (actual != expected) {
            opt = optArgs(3, message, stackStartFunction, affirm.equal);
            affirm.fail(actual, expected, opt.message, '==', opt.stackStartFunction);
        }
    };

    /**
     * Tests shallow, coercive non-equality with the not equal comparison operator ( != ).
     *
     * @private
     * @function module:util-x~affirm.notEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message]
     * @param {Function} [stackStartFunction]
     */
    affirm.notEqual = function (actual, expected, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 2);

        var opt;

        /*jslint eqeq: true */
        if (actual == expected) {
            opt = optArgs(3, message, stackStartFunction, affirm.notEqual);
            affirm.fail(actual, expected, opt.message, '!=', opt.stackStartFunction);
        }
    };

    /**
     * Tests strict equality, as determined by the strict equality operator ( === ).
     *
     * @private
     * @function module:util-x~affirm.strictEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message}
     * @param {Function} [stackStartFunction]
     */
    affirm.strictEqual = function (actual, expected, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 2);

        var opt;

        if (actual !== expected) {
            opt = optArgs(3, message, stackStartFunction, affirm.strictEqual);
            affirm.fail(actual, expected, opt.message, '===', opt.stackStartFunction);
        }
    };

    /**
     * Tests strict non-equality, as determined by the strict not equal operator ( !== ).
     *
     * @private
     * @function module:util-x~affirm.notStrictEqual
     * @param {*} actual
     * @param {*} expected
     * @param {string} [message}
     * @param {Function} [stackStartFunction]
     */
    affirm.notStrictEqual = function (actual, expected, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 2);

        var opt;

        if (actual === expected) {
            opt = optArgs(3, message, stackStartFunction, affirm.notStrictEqual);
            affirm.fail(actual, expected, opt.message, '!==', opt.stackStartFunction);
        }
    };

    /**
     * Expects block to throw an error. error can be constructor, regexp or validation function.
     *
     * @private
     * @function module:util-x~affirm.throws
     * @param {Function} block
     * @param {Function} error
     * @param {string|function} [message]
     * @param {Function} [stackStartFunction]
     */
    affirm.throws = function (block, error, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 2);

        var actual,
            expected,
            opt;

        if (isFunction(block)) {
            try {
                block();
            } catch (eBlock) {
                actual = eBlock;
            }
        }

        if (isFunction(error)) {
            try {
                /*jslint newcap:true */
                throw new error();
            } catch (eError) {
                if (instanceOf(eError, CError)) {
                    expected = error;
                }
            }
        }

        if (!expected) {
            expected = CError;
        }

        if (!instanceOf(actual, expected)) {
            opt = optArgs(3, message, stackStartFunction, affirm.throws);
            affirm.fail(actual, expected, opt.message, 'throws', opt.stackStartFunction);
        }
    };

    /**
     * Expects block not to throw an error, see affirm.throws for details.
     *
     * @private
     * @function module:util-x~affirm.doesNotThrow
     * @param {Function} block
     * @param {string} [message0
     * @param {Function} [stackStartFunction]
     */
    affirm.doesNotThrow = function (block, message, stackStartFunction) {
        throwIfNotEnoughArgs(arguments, 1);

        var actual,
            opt;

        if (isFunction(block)) {
            try {
                block();
            } catch (eBlock) {
                actual = eBlock;
            }
        }

        if (!$isUndefined(actual)) {
            opt = optArgs(2, message, stackStartFunction, affirm.doesNotThrow);
            affirm.fail(actual, Undefined, opt.message, 'doesNotThrow', opt.stackStartFunction);
        }
    };

    /**
     * Tests if value is not a falsy value, throws if it is a truthy value.
     * Useful when testing the first argument, error in callbacks.
     *
     * @private
     * @function module:util-x~affirm.ifError
     * @param {*} [err]
     */
    affirm.ifError = function (err) {
        if (err) {
            throw err;
        }
    };

    /**
     * @private
     * @function module:util-x~decide
     * @param {Function|boolean} affirms A function that throws exceptions or boolean (coerced).
     * @param {Function|*} pass A function to be called or any value. If affirms was called then the result of the call will be supplied as an argument to a function.
     * @param {Function} fail A function to be called or any value. If affirms was called then the result of the call will be supplied as an argument to a function.
     * @param {Array} [argNames] If fail evaluated to a function then this array will be added as the property 'argNames'.
     * @param {string} [message] Any value will be coerced to a string for logging.
     * @returns {*}
     */
    function decide(affirms, pass, fail, argNames, message) {
        var length = throwIfNotEnoughArgs(arguments, 3),
            result,
            passed,
            returned;

        if (isFunction(affirms)) {
            try {
                returned = affirms();
                passed = true;
            } catch (eAffirms) {
                if (length === 4 && typeof argNames === 'string') {
                    message = argNames;
                } else {
                    message = $toString(message);
                }

                conlog(message, eAffirms);
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
            if (isFunction(pass)) {
                result = pass(returned);
            } else {
                result = pass;
            }

        } else {
            if (isFunction(fail)) {
                result = fail(returned);
                if (isFunction(result) && isArray(argNames)) {
                    result.argNames = argNames;
                }
            } else {
                result = fail;
            }
        }

        return result;
    }

    /**
     * Provides a string representation of the supplied object in the form "[object type]",
     * where type is the object type.
     *
     * @private
     * @function module:util-x~toClass
     * @param {*} inputArg The object for which a class string represntation is required.
     * @returns {string} A string value of the form "[object type]".
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.2
     */
    toClass = decide(
        // test
        function () {
            affirm.ok(!testShims, 'testing shim');
            affirm.strictEqual(pOToString.call(protoRegExp), classRegexp, 'test1');
            affirm.strictEqual(pOToString.call(protoString), classString, 'test2');
            affirm.strictEqual(pOToString.call(protoError), classError, 'test3');
            affirm.strictEqual(pOToString.call(returnArgs()), classArguments, 'test4');
        },

        // pass
        function () {
            function toC(inputArg) {
                return pOToString.call(inputArg);
            }

            return decide(
                //test
                function () {
                    affirm.doesNotThrow(function () {
                        toC();
                    }, 'test1');

                    affirm.strictEqual(toC(), classUndefined, 'test2');

                    affirm.doesNotThrow(function () {
                        toC(Undefined);
                    }, 'test3');

                    affirm.strictEqual(toC(Undefined), classUndefined, 'test3');

                    affirm.doesNotThrow(function () {
                        toC(null);
                    }, 'test4');

                    affirm.strictEqual(toC(null), classNull, 'test5');
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
                            val = classNull;
                        } else if ($isUndefined(inputArg)) {
                            val = classUndefined;
                        } else {
                            val = pOToString.call(inputArg);
                        }

                        return val;
                    };
                },

                // argNames
                ['inputArg'],

                // message
                'toClass basic patch'
            );
        },

        // fail
        function () {
            return function (inputArg) {
                var type = typeof inputArg,
                    object,
                    val;

                if (type === 'undefined') {
                    val = classUndefined;
                } else if (inputArg === null) {
                    val = classNull;
                } else if (type === 'object' &&
                        !pHasOwn.call(inputArg, 'arguments') &&
                        pHasOwn.call(inputArg, 'callee') &&
                        pHasOwn.call(inputArg, 'length') &&
                        typeof inputArg.length === 'number') {

                    val = classArguments;
                } else {
                    object = cObject(inputArg);
                    if (instanceOf(object, CNumber)) {
                        val = classNumber;
                    } else if (instanceOf(object, CBoolean) || object === protoBoolean) {
                        val = classBoolean;
                    } else if (instanceOf(object, CString) || object === protoString) {
                        val = classString;
                    } else if (instanceOf(object, CDate) || object === protoDate) {
                        val = classDate;
                    } else if (instanceOf(object, CRegExp) || object === protoRegExp) {
                        val = classRegexp;
                    } else if (instanceOf(object, CError) || object === protoError) {
                        val = classError;
                    } else if (instanceOf(object, CArray) || object === protoArray) {
                        val = classArray;
                    } else if (instanceOf(object, CFunction) || object === protoFunction) {
                        val = classFunction;
                    } else if (object === protoObject) {
                        val = classObject;
                    }
                }

                if (!val) {
                    val = pOToString.call(object);
                }

                return val;
            };
        },

        // argNames
        ['inputArg'],

        // message
        'toClass extended patch'
    );

    /**
     * Indicates if the environment suffers the "don't enum bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasDontEnumBug
     * @type {boolean}
     * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    hasDontEnumBug = !base.Object.propertyIsEnumerable.call({'toString': null}, 'toString') || false;

    /**
     * Indicates if the environment's function objects suffer the "prototype is enumerable bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasProtoEnumBug
     * @type {boolean}
     * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
     */
    hasProtoEnumBug = base.Object.propertyIsEnumerable.call(function () { return; }, 'prototype');

    /**
     * Indicates if the arguments object suffers the "index enumeration bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasEnumArgsBug
     * @type {boolean}
     */
    hasEnumArgsBug = (function () {
        var argObj = returnArgs('h', 'e', 'j'),
            expected = {},
            prop;

        /*jslint forin: true */
        for (prop in argObj) {
            if (prop === '0' || prop === '1' || prop === '2') {
                expected[prop] = argObj[prop];
            }
        }

        return expected[0] !== 'h' || expected[1] !== 'e' || expected[2] !== 'j';
    }()) || false;

    /**
     * Indicates if a string suffers enumerable bug.
     *
     * @private
     * @name module:util-x~hasEnumStringBug
     * @type {boolean}
     */
    hasEnumStringBug = !pHasOwn.call('x', '0') || false;

    /**
     * Indicates if a string suffers the "indexed accessability bug".
     * True if it does, otherwise false.
     *
     * @private
     * @name module:util-x~hasBoxedStringBug
     * @type {boolean}
     */
    hasBoxedStringBug = (function () {
        var boxedString = cObject('a');

        return boxedString[0] !== 'a' || !hasProperty(boxedString, 0) || false;
    }());

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
            length1 = errObjs.length,
            index1,
            length2,
            index2,
            prop,
            found,
            obj;

        for (index1 = 0; index1 < length1; index1 += 1) {
            obj = errObjs[index1];
            /*jslint forin: true */
            for (prop in obj) {
                if (pHasOwn.call(obj, prop)) {
                    for (found = false, index2 = 0, length2 = unwantedError.length; index2 < length2; index2 += 1) {
                        if (prop === unwantedError[index2]) {
                            found = true;
                            break;
                        }
                    }

                    if (!found) {
                        pPush.call(unwantedError, prop);
                    }
                }
            }
        }

        return !!unwantedError.length;
    }()) || false;

    /**
     * Indicates if __proto__ is supported.
     * True if it is, otherwise false.
     *
     * @private
     * @name module:util-x~isProtoSupported
     * @type {boolean}
     */
    isProtoSupported = protoObject[stringProto] === null || false;

    /**
     * Indicates if __defineGetter__ and __lookupSetter__ are supported.
     * True if they are, otherwise false.
     *
     * @private
     * @name module:util-x~areGetSetSupported
     * @type {boolean}
     */
    areGetSetSupported = (isFunction(mLookupGetter) && isFunction(mLookupSetter)) || false;

    /**
     * Indicates if running in strict mode.
     * True if we are, otherwise false.
     *
     * @private
     * @name module:util-x~isStrictMode
     * @type {boolean}
     */
    isStrictMode = (function () {
        return !this;
    }()) || false;

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     *
     * @private
     * @function module:util-x~toObjectFixIndexedAccess
     * @param {*} inputArg The argument to be converted to an object.
     * @throws {TypeError} If inputArg is not coercible to an object.
     * @returns {Object} Value of inputArg as type Object.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    function toObjectFixIndexedAccess(inputArg) {
        var object = cObject(checkObjectCoercible(inputArg)),
            length,
            index;

        if (hasBoxedStringBug && toClass(object) === classString) {
            for (index = 0, length = object.length; index < length; index += 1) {
                object[index] = pCharAt.call(object, index);
            }
        }

        return object;
    }

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
        };

        return !isStrictMode && typeof returnThis.call('foo') === 'string';
    }()) || false;

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * For use with call.
     *
     * @private
     * @function module:util-x~toObjectCallFix
     * @param {*} inputArg The argument to be converted to an object.
     * @returns {Object} Value of inputArg as type Object.
     */
    function toObjectCallFix(inputArg) {
        var object = inputArg,
            length,
            index,
            type;

        if (hasCallBug) {
            type = typeof inputArg;
            if (type === 'boolean' || type === 'number' || type === 'string') {
                object = cObject(inputArg);
            }
        }

        if (hasBoxedStringBug && toClass(object) === classString) {
            for (index = 0, length = object.length; index < length; index += 1) {
                object[index] = pCharAt.call(object, index);
            }
        }

        return object;
    }

    /**
     * Creates a new array from the arraylike argument, starting at start and ending at end.
     * Combats issues where {@link module:util-x~exports.Array.proto.slice} does not work on the arguments object.
     * Used in the {@link module:util-x~exports.Array.proto.slice} shim when it fails tests, and
     * in the mission critical function {@link module:util-x~toMethod}.
     *
     * @private
     * @function module:util-x~pArgSlice
     * @this {module:util-x~ArrayLike} The object to be sliced.
     * @throws {TypeError} If args is not coercible to an object.
     * @param {module:util-x~NumberLike} [start] The starting index.
     * @param {module:util-x~NumberLike} [end] The ending index.
     * @returns {Array} A new array containg the selection.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    pArgSlice = function (start, end) {
        var object = toObjectFixIndexedAccess(this),
            length = toLength(object.length),
            relativeStart = toInteger(start),
            val = [],
            next = 0,
            relativeEnd,
            finalEnd,
            k;

        if (relativeStart < 0) {
            k = mMax(length + relativeStart, 0);
        } else {
            k = mMin(relativeStart, length);
        }

        if ($isUndefined(end)) {
            relativeEnd = length;
        } else {
            relativeEnd = toInteger(end);
        }

        if (relativeEnd < 0) {
            finalEnd = mMax(length + relativeEnd, 0);
        } else {
            finalEnd = mMin(relativeEnd, length);
        }

        val.length = mMax(finalEnd - k, 0);
        while (k < finalEnd) {
            if (hasProperty(object, k)) {
                val[next] = object[k];
            }

            next += 1;
            k += 1;
        }

        return val;
    };

    /**
     * The function takes an argument protoFn, and returns a bound function as a stand alone method.
     *
     * @private
     * @function module:util-x~toMethod
     * @param {prototypalFunction} protoFn A prototypal function to be converted to be bound as a stand alone method.
     * @throws {TypeError} If protoFn is not a function.
     * @param {Function} [checkThisArgFn] A function to perform any checks on thisArg.
     *                                    Default checkThisArgFn is to {@link @function module:util-x~checkObjectCoercible}
     *                                    if none supplied or is not a function.
     * @returns {module:util-x~boundPrototypalFunction} Stand alone method.
     */
    function toMethod(protoFn, checkThisArgFn) {
        throwIfNotFunction(protoFn);
        if (!isFunction(checkThisArgFn)) {
            checkThisArgFn = checkObjectCoercible;
        }

        /*jslint evil: true */
        return new Function('fn', 'check', 'pSlice', 'return function (' + bindArgs(protoFn.length + 1) + ') { return fn.apply(check(pSlice.call(arguments, 0, 1)[0]), pSlice.call(arguments, 1)); }')(protoFn, checkThisArgFn, pArgSlice);
    }

    /**
     * Shortcut
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
    $slice = toMethod(pArgSlice);

    conlog('+++++++++ hasDontEnumBug: ' + hasDontEnumBug);
    conlog('+++++++++ hasProtoEnumBug: ' + hasProtoEnumBug);
    conlog('+++++++++ hasEnumArgsBug: ' + hasEnumArgsBug);
    conlog('+++++++++ hasErrorProps: ' + hasErrorProps);
    conlog('+++++++++ hasBoxedStringBug: ' + hasBoxedStringBug);
    conlog('+++++++++ hasEnumStringBug: ' + hasEnumStringBug);
    conlog('+++++++++ hasCallBug: ' + hasCallBug);
    conlog('+++++++++ isProtoSupported: ' + isProtoSupported);
    conlog('+++++++++ areGetSetSupported: ' + areGetSetSupported);
    conlog('+++++++++ isStrictMode: ' + isStrictMode);

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
    exports.Function.returnArgs = returnArgs;
    exports.Function.returnArgs.argNames = ['varArgs'];

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
        return mMin(mMax(number, min), max);
    };

    exports.Number.clamp.argNames = ['number', 'min', 'max'];

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
     * Returns true if the operand inputArg is a boolean.
     *
     * @function module:util-x~exports.Boolean.isBoolean
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Boolean.isBoolean = function (inputArg) {
        return typeof inputArg === 'boolean';
    };

    exports.Boolean.isBoolean.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a Number.
     *
     * @function module:util-x~exports.Number.isNumber
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Number.isNumber = function (inputArg) {
        return typeof inputArg === 'number';
    };

    exports.Number.isNumber.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a string.
     *
     * @function module:util-x~exports.String.isString
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.String.isString = function (inputArg) {
        return typeof inputArg === 'string';
    };

    exports.String.isString.argNames = ['inputArg'];

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
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     *
     * @function module:util-x~exports.Object.isArguments
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Object.isArguments = function (inputArg) {
        return inputArg && typeof inputArg === 'object' && toClass(inputArg) === classArguments;
    };

    exports.Object.isArguments.argNames = ['inputArg'];

    /**
     * Shortcut
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     *
     * @private
     * @function module:util-x~.isArguments
     * @param {*} inputArg
     * @returns {boolean}
     */
    isArguments = exports.Object.isArguments;

    /**
     * Shortcut
     * Returns true if the operand inputArg is a RegExp.
     *
     * @private
     * @function module:util-x~isRegExp
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isRegExp(inputArg) {
        return inputArg && (typeof inputArg === 'object' || typeofFunction(inputArg)) && toClass(inputArg) === classRegexp;
    }

    /**
     * Returns true if the operand inputArg is a RegExp.
     *
     * @function module:util-x~.exports.RegExp.isRegExp
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.RegExp.isRegExp = isRegExp;
    exports.RegExp.isRegExp.argNames = ['inputArg'];

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
    $toString = decide(
        // test
        function () {
            affirm.ok(!testShims, 'testing shim');

            /*jslint todo: true */
            /** @todo Decide if ToString () should be '' or 'undefined'? */
            /*jslint todo: false */
            affirm.doesNotThrow(function () {
                cString();
            }, 'test1');

            affirm.strictEqual(cString(), 'undefined', 'test2');

            affirm.doesNotThrow(function () {
                cString(Undefined);
            }, 'test3');

            affirm.strictEqual(cString(Undefined), 'undefined', 'test4');

            affirm.doesNotThrow(function () {
                cString(null);
            }, 'test5');

            affirm.strictEqual(cString(null), 'null', 'test3');
        },

        // pass
        function () {
            return cString;
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
     * Returns true if the operand inputArg is an error.
     *
     * @function module:util-x~exports.Error.isError
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Error.isError = function (inputArg) {
        return inputArg && typeof inputArg === 'object' && toClass(inputArg) === classError;
    };

    exports.Error.isError.argNames = ['inputArg'];

    /**
     * Returns true if the operand inputArg is a Date object.
     *
     * @function module:util-x~exports.Date.isDate
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Date.isDate = function (inputArg) {
        return inputArg && typeof inputArg === 'object' && toClass(inputArg) === classDate;
    };

    exports.Date.isDate.argNames = ['inputArg'];

    /**
     * Shortcut
     * Returns true if the operand inputArg is deemed numeric.
     *
     * @private
     * @function module:util-x~isNumeric
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://stackoverflow.com/a/15043984/592253
     */
    isNumeric = (function () {
        var plusMinus = new CRegExp('^[+\\-]?');

        return function (inputArg) {
            var thisClass = toClass(inputArg),
                val,
                string,
                number;

            if (thisClass === classNumber || thisClass === classString) {
                string = pReplace.call(inputArg, plusMinus, '');
                number = mParsefloat(string);
                val = strictEqual(number, number) && mIsFinite(string);
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
    exports.Object.isNumeric = isNumeric;
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
        if (toClass(min) !== classNumber && !isNumeric(min)) {
            min = NaN;
        }

        max = $toPrimitive(max);
        if (toClass(max) !== classNumber && !isNumeric(max)) {
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
     * @function module:util-x~inRange
     * @param {module:util-x~NumberLike} value
     * @param {module:util-x~NumberLike} min
     * @param {module:util-x~NumberLike} max
     * @returns {boolean}
     */
    inRange = exports.Number.inRange;

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
        if ((toClass(value) !== classNumber || !strictEqual(value, value)) && !isNumeric(value)) {
            return true;
        }

        min = $toPrimitive(min);
        if ((toClass(min) !== classNumber || !strictEqual(min, min)) && !isNumeric(min)) {
            return true;
        }

        max = $toPrimitive(max);
        if ((toClass(max) !== classNumber || !strictEqual(max, max)) && !isNumeric(max)) {
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
    exports.Object.CheckObjectCoercible = checkObjectCoercible;
    exports.Object.CheckObjectCoercible.argNames = ['inputArg'];

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error.
     *
     * @private
     * @function module:util-x~onlyCoercibleToString
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {string}
     */
    function onlyCoercibleToString(inputArg) {
        return $toString(checkObjectCoercible(inputArg));
    }

    /**
     * The abstract operation converts its argument to a value of type Object
     *
     * @function module:util-x~exports.Object.ToObject
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is null or undefined.
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    exports.Object.ToObject = function (inputArg) {
        return cObject(checkObjectCoercible(inputArg));
    };

    exports.Object.ToObject.argNames = ['inputArg'];

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     *
     * @function module:util-x~exports.Object.ToObjectFixIndexedAccess
     * @param {*} inputArg
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    exports.Object.ToObjectFixIndexedAccess = toObjectFixIndexedAccess;
    exports.Object.ToObjectFixIndexedAccess.argNames = ['inputArg'];

    /**
     * Returns true if the specified property is in the specified object.
     *
     * @function module:util-x~exports.Object.hasProperty
     * @param {Object} object The object that has was called upon.
     * @param {StringLike} property A string or numeric expression representing a property name or array index.
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7
     */
    exports.Object.hasProperty = function (object, property) {
        return hasProperty(toObjectFixIndexedAccess(object), property);
    };

    exports.Object.hasProperty.argNames = ['object', 'property'];

    /**
     * Returns true if the operand inputArg is a Function. Used by {@link exports.Function.isFunction}.
     *
     * @private
     * @function module:util-x~isFunctionBasic
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isFunctionBasic(inputArg) {
        return inputArg && toClass(inputArg) === classFunction && hasProperty(inputArg, 'call');
    }

    try {
        /**
         * native function cannot be passed
         * to native Function.prototype.toString
         * as scope to evaluate ... only IE, sure
         */
        if (!$isPrimitive(global) && global.alert) {
            base.Function.toString.call(global.alert);
        }
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
     * Are we in IE? How to define isIENativeFunction.
     */
    testTemp.runIENativeFunction = runIENativeFunction &&
                                        !$isPrimitive(global) &&
                                        !$isPrimitive(global.alert) &&
                                        typeof global.alert.toString;

    beginsFunction = new CRegExp('^\\s*\\bfunction\\b');

    /**
     * Returns true if the operand inputArg is a native Function in IE. Used by {@link exports.Function.isFunction}.
     *
     * @private
     * @function module:util-x~isIENativeFunction
     * @param {*} inputArg
     * @returns {boolean}
     */
    if ($isUndefined(testTemp.runIENativeFunction) && pTest.call(beginsFunction, global.alert)) {
        isIENativeFunction = function (inputArg) {
            /**
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
            return $isUndefined(inputArg.toString) && pTest.call(beginsFunction, inputArg);
        };
    } else {
        isIENativeFunction = function () {
            return false;
        };
    }

    /**
     * Test if a function is native by simply trying to evaluate its original Function.prototype.toString call.
     * Used by {@link exports.Function.isFunction}.
     *
     * @private
     * @function module:util-x~isNativeFunction
     * @param {*} inputArg
     * @returns {boolean}
     */
    try {
        /*jslint evil: true */
        eval('(' + base.Function.toString.call(CFunction) + ')');
        /*jslint evil: false */

        /**
         * Opera 10 doesn't play ball so have to test the string.
         * Only defined on Opera
         *
         * @private
         * @name module:util-x~operaNative
         * type {RegExp}
         */
        operaNative = new CRegExp('^function \\S*\\(\\) \\{ (\\[native code\\]|' +
                                 '\\/\\* source code not available \\*\\/) \\}$');

        isNativeFunction = function (inputArg) {
            return pTest.call(operaNative, inputArg);
        };
    } catch (eINF1) {
        isNativeFunction = function (inputArg) {
            var val = true,
                ownToString;

            try {
                // no execution
                // just an error if it is native
                // every browser manifest native
                // functions with some weird char
                // that cannot be evaluated [native]
                ownToString = inputArg.toString;
                /*jslint evil: true */
                eval('(' + ownToString.call(inputArg) + ')');
                /*jslint evil: false */
                val = false;
            } catch (ignore) {}

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by {@link exports.Function.isFunction}.
     *
     * @private
     * @function module:util-x~isFunctionExtended
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isFunctionExtended(inputArg) {
        /**
         * it should be a function in any case
         * before we try to pass it to
         * Function.prototype.toString
         */
        return isFunctionInternal(inputArg, false) && isNativeFunction(inputArg);
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by {@link exports.Function.isFunction}.
     *
     * @private
     * @function @function module:util-x~isFunctionInternal
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
                val = isFunctionBasic(inputArg);
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
                val = isFunctionBasic(inputArg);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a native Function.
     *
     * @function module:util-x~exports.Function.isNativeFunction
     * @param {*} inputArg
     * @returns {boolean}
     */
    if (runIENativeFunction) {
        exports.Function.isNativeFunction = function (inputArg) {
            return isFunction(inputArg) && (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
        };

        exports.Function.isNativeFunction.argNames = ['inputArg'];
    } else {
        exports.Function.isNativeFunction = function (inputArg) {
            return isFunction(inputArg) && isNativeFunction(inputArg);
        };

        exports.Function.isNativeFunction.argNames = ['inputArg'];
    }

    /**
     * Shortcut
     * Returns true if the operand inputArg is a native Function.
     *
     * @private
     * @function module:util-x~isNative
     * @param {*} inputArg
     * @returns {boolean}
     */
    isNative = exports.Function.isNativeFunction;

    /**
     * @function module:util-x~affirmBasic
     * @param {Function} Fn Native prototype method
     * @returns {Function}
     */
    function affirmBasic(Fn) {
        return function () {
            affirm.ok(!testShims, 'testing shim');
            affirm.ok(isNative(Fn), 'not native');
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

    /**
     * Shortcut
     * Use the new improved function instead of the duck typed.
     * Returns true if the operand inputArg is a Function.
     *
     * @private
     * @function module:util-x~isFunction
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    isFunction = exports.Function.isFunction;

    /**
     * Shortcut
     * This method returns a string indicating the type of the unevaluated operand.
     *
     * @private
     * @function module:util-x~typeOf
     * @param {*} inputArg
     * @returns {string}
     */
    function typeOf(inputArg) {
        var rtn;

        if (isRegExp(inputArg)) {
            rtn = 'object';
        } else if (isFunction(inputArg)) {
            rtn = 'function';
        } else {
            rtn = typeof inputArg;
        }

        return rtn;
    }

    /**
     * Returns true if the operands are of the same typeof.
     *
     * @function module:util-x~exports.Object.areSameTypeOf
     * @param {*} a
     * @param {...*} [b]
     * @returns {boolean}
     */
    exports.Object.areSameTypeOf = function (a, b) {
        a = typeOf(a);
        b = typeOf(b);

        var same = a === b,
            length,
            index;

        if (same) {
            length = toLength(arguments.length);
            for (index = 2; index < length; index += 1) {
                b = typeOf(arguments[index]);
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
        a = toClass(a);

        var same = a === toClass(b),
            length,
            index;

        if (same) {
            length = toLength(arguments.length);
            for (index = 2; index < length; index += 1) {
                same = a === toClass(arguments[index]);
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
    exports.Object.instanceOf = instanceOf;
    exports.Object.instanceOf.argNames = ['object', 'ctr'];

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
    exports.Array.proto.slice = decide(
        // test
        function () {
            affirmBasic(pSlice)();

            // should throw
            affirm.throws(function () {
                pSlice.call();
            }, CTypeError, 'no arguments');

            affirm.throws(function () {
                pSlice.call(Undefined);
            }, CTypeError, 'argument is undefined');

            affirm.throws(function () {
                pSlice.call(null);
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

            var someArgs = returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined),
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
                var testSlice = pSlice.apply(original, sliceArgs),
                    length = toLength(expected.length),
                    index,
                    isOk = true;

                if (testSlice.length !== length) {
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
            affirm.ok(sOk(someArray, [], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test1');
            affirm.ok(sOk(someArray, [Undefined, Undefined], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test2');
            affirm.ok(sOk(someArray, [-1], createArray(Undefined)), 'test3');
            affirm.ok(sOk(someArray, [0], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test4');
            affirm.ok(sOk(someArray, [3], createArray('a', 2, 'b', null, Undefined)), 'test5');
            affirm.ok(sOk(someArray, [-1, 4], []), 'test6');
            affirm.ok(sOk(someArray, [0, 4], createArray(Undefined, null, 1, 'a')), 'test7');
            affirm.ok(sOk(someArray, [3, 6], createArray('a', 2, 'b')), 'test8');

            // works on arguments
            affirm.ok(sOk(someArgs, [], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test9');
            affirm.ok(sOk(someArgs, [Undefined, Undefined], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test10');
            affirm.ok(sOk(someArgs, [-1], returnArgs(Undefined)), 'test11');
            affirm.ok(sOk(someArgs, [0], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test12');
            affirm.ok(sOk(someArgs, [3], returnArgs('a', 2, 'b', null, Undefined)), 'test13');
            affirm.ok(sOk(someArgs, [-1, 4], []), 'test14');
            affirm.ok(sOk(someArgs, [0, 4], returnArgs(Undefined, null, 1, 'a')), 'test15');
            affirm.ok(sOk(someArgs, [3, 6], returnArgs('a', 2, 'b')), 'test16');

            // works on object with length
            affirm.ok(sOk(someObject, [], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test17');
            affirm.ok(sOk(someObject, [Undefined, Undefined], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test18');
            affirm.ok(sOk(someObject, [-1], createArray(Undefined)), 'test19');
            affirm.ok(sOk(someObject, [0], createArray(Undefined, null, 1, 'a', 2, 'b', null, Undefined)), 'test20');
            affirm.ok(sOk(someObject, [3], createArray('a', 2, 'b', null, Undefined)), 'test21');
            affirm.ok(sOk(someObject, [-1, 4], []), 'test22');
            affirm.ok(sOk(someObject, [0, 4], createArray(Undefined, null, 1, 'a')), 'test23');
            affirm.ok(sOk(someObject, [3, 6], createArray('a', 2, 'b')), 'test24');

            // works on strings
            affirm.ok(sOk(someString, [], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test25');
            affirm.ok(sOk(someString, [Undefined, Undefined], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test26');
            affirm.ok(sOk(someString, [-1], createArray('0')), 'test27');
            affirm.ok(sOk(someString, [0], createArray('1', '2', '3', '4', '5', '6', '7', '8', '9', '0')), 'test28');
            affirm.ok(sOk(someString, [3], createArray('4', '5', '6', '7', '8', '9', '0')), 'test29');
            affirm.ok(sOk(someString, [-1, 4], createArray()), 'test30');
            affirm.ok(sOk(someString, [0, 4], createArray('1', '2', '3', '4')), 'test31');
            affirm.ok(sOk(someString, [3, 6], createArray('4', '5', '6')), 'test32');
        },

        // pass
        function () {
            return pSlice;
        },

        // fail
        function () {
            return pArgSlice;
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
    exports.Array.slice = toMethod(exports.Array.proto.slice);
    exports.Array.slice.argNames = ['array', 'start', 'end'];

    /**
     * Shortcut
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
    $slice = exports.Array.slice;

    /**
     * Returns true if argument is an object that has own property of length which is a number of uint32
     * but is not a {@link Function function}.
     *
     * @private
     * @function module:util-x~hasValidLength
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     */
    function hasValidLength(inputArg) {
        return !$isPrimitive(inputArg) && !isFunction(inputArg) && pHasOwn.call(inputArg, 'length') && typeof inputArg.length === 'number' && inputArg.length >= 0 && isSafeInteger(inputArg.length);
    }

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * Default this check is to {@link checkObjectCoercible}.
     *
     * @function module:util-x~exports.Function.ToMethod
     * @param {prototypalFunction} protoFn
     * @param {Function} checkThisArgFn
     * @throws {TypeError} If protoFn is not a {@link Function function}.
     * @returns {boundPrototypalFunction}
     */
    exports.Function.ToMethod = toMethod;
    exports.Function.ToMethod.argNames = ['protofn', 'checkThisArgFn'];

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * I.e. [[Class]] A String value indicating a specification defined classification of objects.
     *
     * @function module:util-x~exports.Object.ToClassString
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2
     */
    exports.Object.ToClassString = toClass;

    /**
     * Returns true if the operand inputArg is an Object.
     *
     * @function module:util-x~exports.Object.isObject
     * @param {*} inputArg
     * @returns {boolean}
     */
    exports.Object.isObject = function (inputArg) {
        return toClass(inputArg) === classObject && !isFunction(inputArg);
    };

    exports.Object.isObject.argNames = ['inputArg'];

    /**
     * Throws a TypeError if arguments is a function otherwise returns the function.
     *
     * @private
     * @function module:util-x~throwIfFunction
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is a {@link Function function}.
     * @returns {Function}
     */
    function throwIfFunction(inputArg) {
        if (isFunction(inputArg)) {
            throw new CTypeError(toClass(inputArg) + ' is a function');
        }

        return inputArg;
    }

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
    exports.Function.proto.bind = decide(
        // test
        function () {
            affirmBasic(base.Function.bind)();

            var bindArr = [1, 2, 3],
                BindCtr = base.Function.bind.call(function () {
                    return bindArr;
                }, null),
                bindObj = new BindCtr();

            affirm.strictEqual(bindArr, bindObj, 'same array');

            function BindFn(x) {
                this.name = x || 'A';
            }

            BindCtr = base.Function.bind.call(BindFn, null, 'B');
            bindObj = new BindCtr();

            affirm.ok(bindObj instanceof BindFn, 'instanceof a');
            affirm.ok(bindObj instanceof BindCtr, 'instanceof b');
            affirm.strictEqual(bindObj.name, 'B', 'return B');
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
                return new Function('binder', 'slice', 'return function (' + args + '){ return binder.apply(this, slice(arguments)); }')(binder, $slice);
            }

            return function (thisArg) {
                var fn = throwIfNotFunction(this),
                    args = $slice(arguments, 1),
                    bound = makeBound(function () {
                        var binderArgs = pConcat.call(args, $slice(arguments)),
                            result;

                        if (instanceOf(this, bound)) {
                            result = fn.apply(this, binderArgs);
                            if (cObject(result) === result) {
                                return result;
                            }

                            return this;
                        }

                        return fn.apply(thisArg, binderArgs);
                    }, bindArgs(fn.length - args.length));

                if (cObject(fn.prototype) === fn.prototype) {
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
    exports.Function.bind = toMethod(exports.Function.proto.bind);
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
    exports.Array.isArray = decide(
        // test
        affirmBasic(mIsArray),

        // pass
        function () {
            return mIsArray;
        },

        // fail
        function () {
            return function (inputArg) {
                return inputArg && typeof inputArg === 'object' && toClass(inputArg) === classArray;
            };
        },

        // argNames
        ['inputArg'],

        // message
        'Array.isArray shim'
    );

    /**
     * Shortcut
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     *
     * @private
     * @function module:util-x~isArray
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
     */
    isArray = exports.Array.isArray;

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

        return decide(
            // test
            affirmBasic(pJoin),

            // pass
            function () {
                return decide(
                    // test
                    function name() {
                        affirm.strictEqual(pJoin.call([1, 2]), '1,2', 'defaults to comma');
                    },

                    // pass
                    function () {
                        return pJoin;
                    },

                    // fail
                    function () {
                        return function (separator) {
                            checkObjectCoercible(this);
                            if ($isUndefined(separator)) {
                                separator = ',';
                            }

                            return pJoin.call(this, separator);
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
                    var object = toObjectFixIndexedAccess(this),
                        length = toLength(object.length),
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
    exports.Array.join = toMethod(exports.Array.proto.join);
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
    exports.Object.is = decide(
        // test
        function () {
            affirmBasic(base.Object.is)();
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
                    val = !strictEqual(x, x) && !strictEqual(y, y);
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
    exports.Number.isNaN = decide(
        // test
        function () {
            affirmBasic(base.Number.isNaN)();
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
    exports.Number.isFinite = decide(
        // test
        function () {
            affirmBasic(base.Number.isFinite)();
        },

        // pass
        function () {
            return base.Number.isFinite;
        },

        // fail
        function () {
            return function (number) {
                return typeof number === 'number' && strictEqual(number, number) && number !== Infinity && number !== -Infinity;
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
    exports.Math.sign = decide(
        // test
        function () {
            affirmBasic(base.Math.sign)();
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
    exports.Number.toInteger = toInteger;
    exports.Number.toInteger.argNames = ['inputArg'];

    /**
     * Shortcut
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
    $isInteger = decide(
        // test
        function () {
            affirmBasic(base.Number.isInteger)();
        },

        // pass
        function () {
            return base.Number.isInteger;
        },

        // fail
        function () {
            return function (inputArg) {
                return typeof inputArg === 'number' &&
                        inputArg !== Infinity &&
                        inputArg !== -Infinity &&
                        toInteger(inputArg) === inputArg;
            };
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

    /**
     * Shortcut
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     *
     * @private
     * @function module:util-x~isSafeInteger
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
     */
    isSafeInteger = decide(
        // test
        function () {
            affirmBasic(base.Number.isSafeInteger)();
            affirm.ok(!base.Number.isSafeInteger(UNSAFE_INTEGER), 'max unsafe');
            affirm.ok(!base.Number.isSafeInteger(-UNSAFE_INTEGER), 'min unsafe');
        },

        // pass
        function () {
            return base.Number.isSafeInteger;
        },

        // fail
        function () {
            return function (inputArg) {
                return typeof inputArg === 'number' &&
                        inputArg !== Infinity &&
                        inputArg !== -Infinity &&
                        toInteger(inputArg) === inputArg &&
                        inputArg >= MIN_SAFE_INTEGER &&
                        inputArg <= MAX_SAFE_INTEGER;
            };
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
    exports.Number.isSafeInteger = isSafeInteger;

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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * mFloor(mAbs(number))) % UWORD32;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT32 && inputArg <= MAX_INT32;
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
        return this - divisor * mFloor(this / divisor);
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
    exports.Number.modulo = toMethod(exports.Number.proto.modulo, justArg);
    exports.Number.modulo.argNames = ['dividend', 'divisor'];

    /**
     * Shortcut
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Known as Rounding division, Floored division or Integer division.
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
     *
     * @private
     * @function module:util-x~modulo
     * @param {number} dividend
     * @param {number} divisor
     * @returns {number}
     */
    modulo = exports.Number.modulo;

    /**
     * The Number.isOdd returns true if the integer is odd otherwise false.
     *
     * @function module:util-x~exports.Number.isOdd
     * @param {number} inputArg
     * @returns {boolean|undefined}
     */
    exports.Number.isOdd = function (inputArg) {
        var rtn;

        if (typeof inputArg === 'number' && $isInteger(inputArg)) {
            rtn = inputArg % 2 !== 0;
        }

        return rtn;
    };

    exports.Number.isOdd.argNames = ['inputArg'];

    /**
     * The Number.isEven returns true if the integer is even otherwise false.
     *
     * @function module:util-x~exports.Number.isEven
     * @param {number} inputArg
     * @returns {boolean|undefined}
     */
    exports.Number.isEven = function (inputArg) {
        var rtn;

        if (typeof inputArg === 'number' && $isInteger(inputArg)) {
            rtn = inputArg % 2 === 0;
        }

        return rtn;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UNSAFE_INTEGER);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_SAFE_INTEGER;
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
    exports.Number.toLength = toLength;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD32);
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
     * @function module:util-x~isUint32
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isUint32(inputArg) {
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT32;
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
    exports.Number.isUint32 = isUint32;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * mFloor(mAbs(number))) % UWORD16;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT16 && inputArg <= MAX_INT16;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD16);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT16;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val  = ((number > 0 || -1) * mFloor(mAbs(number))) % UWORD8;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT8 && inputArg <= MAX_INT8;
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

        if (number && strictEqual(number, number) && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD8);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT8;
    };

    exports.Number.isUint8.argNames = ['inputArg'];

    /**
     * Throws TypeError if argument has not got a valid length otherwise return the object.
     *
     * @private
     * @function module:util-x~throwIfIsNotHasValidLength
     * @param {*} inputArg
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     */
    function throwIfIsNotHasValidLength(inputArg) {
        if (!hasValidLength(inputArg)) {
            throw new CTypeError('invalid length property: ' + $toString(inputArg));
        }

        return inputArg;
    }

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
    exports.Array.proto.push = decide(
        // test
        function () {
            affirm.ok(!testShims, 'testing shim');

            var pushArr = [],
                pushObj = {};

            affirm.strictEqual(pPush.call(pushArr, 0), 1, 'array wrong return count');
            affirm.strictEqual(pushArr[0], 0, 'array value not set');
            affirm.strictEqual(pPush.call(pushObj, 0), 1, 'object wrong return count');
            affirm.strictEqual(pushObj[0], 0, 'object value not set');
        },

        // pass
        function () {
            return pPush;
        },

        // fail
        function () {
            return function () {
                var object = toObjectFixIndexedAccess(this);

                object.length = toLength(object.length);
                pPush.apply(object, $slice(arguments));

                return object.length;
            };
        },

        // message
        'Array.push patch'
    );

    /**
     * This {@link module:util-x~boundPrototypalFunction method} adds one or more elements to the end of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.push
     * @param {module:util-x~ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     */
    exports.Array.push = toMethod(exports.Array.proto.push);
    exports.Array.push.argNames = ['array', 'varArgs'];

    /**
     * Shortcut
     * This {@link module:util-x~boundPrototypalFunction method} adds one or more elements to the end of an array and
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
     * This method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.proto.unshift
     * @this {module:util-x~ArrayLike}
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     */

    exports.Array.proto.unshift = decide(
        // test
        function () {
            affirm.ok(!testShims, 'testing shim');

            var unshiftArr = [],
                unshiftObj = {};

            affirm.strictEqual(pPush.call(unshiftArr, 0), 1, 'array wrong return count');
            affirm.strictEqual(unshiftArr[0], 0, 'array value not set');
            affirm.strictEqual(pPush.call(unshiftObj, 0), 1, 'object wrong return count');
            affirm.strictEqual(unshiftObj[0], 0, 'object value not set');
        },

        //pass
        function () {
            return pUnshift;
        },

        // fail
        function () {
            return function () {
                var object = toObjectFixIndexedAccess(this);

                object.length = toLength(object.length);
                pUnshift.apply(object, $slice(arguments));

                return object.length;
            };
        },

        // message
        'Array.unshift patch'
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
    exports.Array.unshift = toMethod(exports.Array.proto.unshift);
    exports.Array.unshift.argNames = ['array', 'varArgs'];

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
        return mMin(mMax(toInteger(num), toInteger(min)), toInteger(max));
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
        if (!isRegExp(inputArg)) {
            throw new CTypeError('Type RegExp expected: ' + $toString(inputArg));
        }

        return inputArg;
    }

    // RegExp closure
    (function () {
        var clipDups = new CRegExp('([\\s\\S])(?=[\\s\\S]*\\1)', 'g'),
            // Check for correct `exec` handling of nonparticipating capturing groups
            npcgType = typeof pExec.call(new CRegExp('()??'), '')[1],
            escapeThese = new CRegExp('[\\[\\](){}?*+\\^$\\\\.|]', 'g'),
            correctExecNpcg = npcgType === 'undefined',
            replacementToken = new CRegExp('\\$(?:\\{(\\$+)\\}|(\\d\\d?|[\\s\\S]))', 'g'),
            getNativeFlags = new CRegExp('\\/([a-z]*)$', 'i'),
            es5limit = $join(pSplit.call('test', /(?:)/, -1), '') === 'test' &&
                        $join(pSplit.call('a b c d', / /, -(UWORD32 - 1)), '') === 'a' &&
                        $join(pSplit.call('a b c d', / /, UWORD32 + 1), '') === 'a' &&
                        $join(pSplit.call('a b c d', / /, Infinity), '') === '';

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
            return pReplace.call(onlyCoercibleToString(this), escapeThese, '\\$&');
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
        exports.String.escapeRegex = toMethod(exports.String.proto.escapeRegex);
        exports.String.escapeRegex.argNames = ['string'];

        /**
         * Removes any duplicate characters from the provided string.
         *
         * @function module:util-x~exports.String.clipDuplicates
         * @param {string} str String to remove duplicate characters from.
         * @returns {string} String with any duplicate characters removed.
         */
        exports.String.clipDuplicates = function (str) {
            return pReplace.call(onlyCoercibleToString(str), clipDups, '');
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

            if (!isPlainObject(options)) {
                options = {};
            }

            // Get native flags in use
            flags = onlyCoercibleToString(pExec.call(getNativeFlags, $toString(regExpArg))[1]);
            if (options.add) {
                flags = pReplace.call(flags + options.add, clipDups, '');
            }

            if (options.remove) {
                // Would need to escape `options.remove` if this was public
                flags = pReplace.call(flags, new CRegExp('[' + options.remove + ']+', 'g'), '');
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
            testTemp.execSlice = $slice(pExec.call(testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex = /x/g;
            testTemp.regex.lastIndex = 4;
            if (pExec.call(testTemp.regex, '123x5') !== null) {
                throw new CError();
            }

            testTemp.regex.lastIndex = 2;
            testTemp.execSlice = $slice(pExec.call(testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex.lastIndex = '3';
            testTemp.execSlice = $slice(pExec.call(testTemp.regex, '123x5'));
            if (testTemp.execSlice.length !== 1 || testTemp.execSlice[0] !== 'x') {
                throw new CError();
            }

            testTemp.regex.lastIndex = '4';
            if (pExec.call(testTemp.regex, '123x5') !== null) {
                throw new CError();
            }

            testTemp.regex = /\b/g;
            testTemp.match = pExec.call(testTemp.regex, '1,2');
            if (!testTemp.match[0].length && testTemp.regex.lastIndex > testTemp.match.index) {
                throw new CError();
            }

            testTemp.regex = /x/;
            pExec.call(testTemp.regex, '123x5');
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
                match = pExec.apply(this, $slice(arguments));
                if (isArray(match)) {
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
                            pReplace.call(pSSlice.call($toString(str), match.index), r2, function () {
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
        exports.RegExp.exec = toMethod(exports.RegExp.proto.exec);
        exports.RegExp.exec.argNames = ['regExpArg', 'stringArg'];

        /**
         * Fixes browser bugs in the native `RegExp.prototype.exec`.
         *
         * @private
         * @function module:util-x~exportsexec
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
        exports.RegExp.test = toMethod(exports.RegExp.proto.test);
        exports.RegExp.test.argNames = ['regExpArg', 'stringArg'];

        /**
         * Fixes browser bugs in the native `RegExp.prototype.test`.
         *
         * @private
         * @function module:util-x~exportstest
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
            return exports.RegExp.test(/^[\x00-\xFF]*$/, onlyCoercibleToString(this));
        };

        /**
         * Checks to see that the string is only comprised of byte sized characters.
         *
         * @function module:util-x~exports.String.isBytestring
         * @param {string} stringArg String to check.
         * @returns {Boolean} Is a bytestring or not.
         */
        exports.String.isBytestring = toMethod(exports.String.proto.isBytestring);
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
            if (!testShims || !isNative(pSplit) ||
                    pSplit.call('test', new CRegExp('(?:test)*')).length === 2 ||
                    pSplit.call('.', new CRegExp('(.?)(.?)')).length !== 4 ||
                    pSplit.call('tesst', new CRegExp('(s)*'))[1] === 't' ||
                    pSplit.call('', new CRegExp('.?')).length > 0 ||
                    pSplit.call('.', new CRegExp('()()')).length > 1) {

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
                            limit = mMin(toLength(limit), MAX_UINT32);
                        }
                    } else {
                        if (isUndef) {
                            limit = MAX_SAFE_INTEGER;
                        } else {
                            limit = toLength(limit);
                        }
                    }

                    val = pSplit.call(onlyCoercibleToString(this), separator, limit);
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
                    var str = onlyCoercibleToString(this),
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
                                limit = mMin(toLength(limit), MAX_UINT32);
                            }
                        } else {
                            if (isUndef) {
                                limit = MAX_SAFE_INTEGER;
                            } else {
                                limit = toLength(limit);
                            }
                        }

                        if (!isRegExp(separator)) {
                            // Browsers handle nonregex split correctly, so use the faster native method
                            output = pSplit.call(str, separator, limit);
                        } else {
                            output = [];
                            origLastIndex = separator.lastIndex;
                            lastLastIndex = 0;
                            length = str.length;
                            match = search(str, separator, pos);
                            while (match) {
                                // This condition is not the same as `if (match[0].length)`
                                if ((match.index + match[0].length) > lastLastIndex) {
                                    pPush.call(output, pSSlice.call(str, lastLastIndex, match.index));
                                    if (match.length > 1 && match.index < length) {
                                        pPush.apply(output, $slice(match, 1));
                                    }

                                    lastLength = match[0].length;
                                    lastLastIndex = match.index + lastLength;
                                }

                                pos = match.index + (match[0].length || 1);
                                match = search(str, separator, pos);
                            }

                            if (lastLastIndex === str.length) {
                                if (!pTest.call(separator, '') || lastLength) {
                                    pPush.call(output, '');
                                }
                            } else {
                                pPush.call(output, pSSlice.call(str, lastLastIndex));
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
        exports.String.split = toMethod(exports.String.proto.split);
        exports.String.split.argNames = ['stringArg', 'separator', 'limit'];

        /**
         * Splits a String object into an array of strings by separating the string into subbase.str.
         *
         * @private
         * @function module:util-x~exportssplit
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
            if (testShims || !isNative(pSplit)) {
                throw new CError();
            }

            /*jslint todo: true */
            /** @todo Require more tests for string replace */
            /*jslint todo: false */
            if (pReplace.call('aaa', /aa/, '$&b') !== 'aaba' ||
                    pReplace.call('aaa', /aa/, '$\'b') !== 'aba' ||
                    pReplace.call('xaaa', /aa/, '$`b') !== 'xxba' ||
                    pReplace.call('aaa', /aa/, '$$b') !== '$ba') {

                throw new CError('Failed token handling');
            }

            testTemp.regex = /x/g;
            testTemp.regex.lastIndex = 1;
            pReplace.call('nomatch', testTemp.regex, '_');
            if (testTemp.regex.lastIndex !== 0) {
                throw new CError('No reset of lastIndex of a global regex');
            }

            testTemp.regex.lastIndex = testTemp.interimLastIndex = 0;
            pReplace.call('1x2', testTemp.regex, function () {
                testTemp.interimLastIndex = testTemp.regex.lastIndex;
            });

            if (testTemp.interimLastIndex !== 2) {
                throw new CError('No update of lastIndex during replacement iterations');
            }

            testTemp.regex = /x/;
            testTemp.regex.lastIndex = 1;
            pReplace.call('nomatch', testTemp.regex, '_');
            if (testTemp.regex.lastIndex !== 0) {
                throw new CError('No reset of lastIndex of a non-global regex');
            }

            exports.String.proto.replace = pReplace;
        } catch (eReplace) {
            conlog('EWW', eReplace);
            exports.String.proto.replace = function (search, replacement) {
                var str = onlyCoercibleToString(this),
                    isRegex = isRegExp(search),
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
                if (isFunction(replacement)) {
                    // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
                    // functions isn't type-converted to a string
                    result = pReplace.call(str, search, function () {
                        var args = $slice(arguments);

                        // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox,
                        // Safari bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
                        if (isRegex && search.global) {
                            search.lastIndex = args[args.length - 2] + args[0].length;
                        }

                        // Should pass `undefined` as context; see
                        // <https://bugs.ecmascript.org/show_bug.cgi?id=154>
                        return replacement.apply(Undefined, args);
                    });
                } else {
                    // Ensure that the last value of `args` will be a string when given nonstring `this`,
                    // while still throwing on `null` or `undefined` context
                    result = pReplace.call(str, search, function () {
                        // Keep this function's `arguments` available through closure
                        var args = $slice(arguments),
                            length = args.length;

                        return pReplace.call($toString(replacement), replacementToken, function ($0, $1, $2) {
                            /*jslint unparam: true */
                            /*jshint unused: false */
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
                            if (strictEqual($2, $2)) {
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
        exports.String.replace = toMethod(exports.String.proto.replace);
        exports.String.replace.argNames = ['inputArg', 'search', 'replacement'];

        /**
         * Fixes browser bugs in replacement text syntax when performing a replacement using a nonregex search
         * value, and the value of a replacement regex's `lastIndex` property during replacement iterations
         * and upon completion. Note that this doesn't support SpiderMonkey's proprietary third (`flags`)
         * argument.
         *
         * @private
         * @function module:util-x~exportsreplace
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
            if (toClass(pattern) === classString) {
                pattern = new CRegExp($replace(onlyCoercibleToString(pattern), escapeThese, '\\$&'), 'g');
            } else if (isRegExp(pattern)) {
                pattern = copyRegExp(pattern, {
                    add: 'g'
                });
            }

            if (toClass(characters) !== classString && toClass(characters) !== classNumber) {
                characters = '';
            } else {
                characters = $toString(characters);
            }

            return $replace(onlyCoercibleToString(this), pattern, characters);
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
        exports.String.replaceAll = toMethod(exports.String.proto.replaceAll);
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
            var str = onlyCoercibleToString(this),
                result;

            if (!isRegExp(regExpArg)) {
                regExpArg = new CRegExp(regExpArg);
            } else if (regExpArg.global) {
                result = pMatch.apply(str, $slice(arguments));
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
        exports.String.match = toMethod(exports.String.proto.match);
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
        return pCharAt.call(onlyCoercibleToString(this), 0);
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
    exports.String.first = toMethod(exports.String.proto.first);
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
        var str = onlyCoercibleToString(this);

        return pCharAt.call(str, str.length - 1);
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
    exports.String.last = toMethod(exports.String.proto.last);
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
        var str = onlyCoercibleToString(this),
            first = pCharAt.call(onlyCoercibleToString(character), 0),
            val;

        if (first === '') {
            val = Infinity;
        } else {
            val = mMin(mMax($split(str, first).length - 1, 0), Infinity);
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
    exports.String.countCharacter = toMethod(exports.String.proto.countCharacter);
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
        var string = onlyCoercibleToString(this),
            singleChar = pCharAt.call(onlyCoercibleToString(character), 0),
            count = toInteger(size) - string.length;

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
    exports.String.padLeadingChar = toMethod(exports.String.proto.padLeadingChar);
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
    exports.String.proto.repeat = decide(
        // test
        affirmBasic(pSRepeat),

        // pass
        function () {
            return pSRepeat;
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
                var thisString = onlyCoercibleToString(this);

                count = toInteger(count);
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
    exports.String.repeat = toMethod(exports.String.proto.repeat);
    exports.String.repeat.argNames = ['string', 'count'];

    /**
     * Repeat the current string several times, return the new string.
     *
     * @private
     * @function module:util-x~exportsrepeat
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
    exports.String.proto.startsWith = decide(
        // test
        affirmBasic(pStartsWith),

        // pass
        function () {
            return pStartsWith;
        },

        // fail
        function () {
            return function (searchString, position) {
                var thisStr = onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    start = mMin(mMax(toInteger(position), 0), thisStr.length);

                return pSSlice.call(thisStr, start, start + searchStr.length) === searchStr;
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
    exports.String.startsWith = toMethod(exports.String.proto.startsWith);
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
    exports.String.proto.endsWith = decide(
        // test
        affirmBasic(pEndsWith),

        // pass
        function () {
            return pEndsWith;
        },

        // fail
        function () {
            return function (searchString, position) {
                var thisStr = onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    thisLen = thisStr.length,
                    end,
                    start;

                if ($isUndefined(position)) {
                    position = thisLen;
                } else {
                    position = toInteger(position);
                }

                end = mMin(mMax(position, 0), thisLen);
                start = end - searchStr.length;

                return start >= 0 && pSSlice.call(thisStr, start, end) === searchStr;
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
    exports.String.endsWith = toMethod(exports.String.proto.endsWith);
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
    exports.String.proto.contains = decide(
        // test
        affirmBasic(pContains),

        // pass
        function () {
            return pContains;
        },

        // fail
        function () {
            return function (searchString, position) {
                var str = onlyCoercibleToString(this),
                    searchStr = $toString(searchString),
                    length = str.length;

                if ($isUndefined(position)) {
                    position = 0;
                } else {
                    position = toInteger(position);
                }

                return pSIndexOf.call(str, searchStr, mMin(mMax(position, 0), length)) !== -1;
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
    exports.String.contains = toMethod(exports.String.proto.contains);
    exports.String.proto.contains.argNames = ['string', 'searchString', 'position'];

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     *
     * @private
     * @function module:util-x~stringContains
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
     */
    stringContains = exports.String.contains;

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
    if (!testShims && isNative(mGetPrototypeOf)) {
        try {
            if (mGetPrototypeOf(1) === protoNumber &&
                    mGetPrototypeOf(true) === protoBoolean &&
                    mGetPrototypeOf('') === protoString) {

                exports.Object.getPrototypeOf = mGetPrototypeOf;
            } else {
                throw new CError();
            }
        } catch (eGPO) {
            exports.Object.getPrototypeOf = function (object) {
                return mGetPrototypeOf(cObject(checkObjectCoercible(object)));
            };

            exports.Object.getPrototypeOf.argNames = ['object'];
        }
    } else if (!testShims && protoObject[stringProto] === null) {
        exports.Object.getPrototypeOf = function (object) {
            return cObject(checkObjectCoercible(object))[stringProto];
        };

        exports.Object.getPrototypeOf.argNames = ['object'];
    } else {
        exports.Object.getPrototypeOf = (function () {
            var fixOpera10GetPrototypeOf;

            if (returnArgs().constructor.prototype !== protoObject) {
                fixOpera10GetPrototypeOf = true;
            }

            return function (object) {
                var obj = cObject(checkObjectCoercible(object)),
                    ctrProto,
                    protoObj;

                if (obj === protoObject) {
                    return null;
                }

                if (isFunction(obj.constructor)) {
                    if (fixOpera10GetPrototypeOf && isArguments(obj)) {
                        ctrProto = protoObject;
                    } else {
                        ctrProto = obj.constructor.prototype;
                    }
                } else {
                    protoObj = obj[stringProto];
                    if (toClass(protoObj) === classObject && !isFunction(protoObj)) {
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
        }());

        exports.Object.getPrototypeOf.argNames = ['object'];
    }

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * Actually based on the ECMA6 draft, which only throws on undefined or null.
     *
     * @private
     * @function module:util-x~exportsgetPrototypeOf
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
        return toClass(object) === classObject && !isFunction(object) && $getPrototypeOf(object) === protoObject;
    };

    exports.Object.isPlainObject.argNames = ['object'];

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     *
     * @private
     * @function module:util-x~isPlainObject
     * @param {Object} object
     * @returns {boolean}
     */
    isPlainObject = exports.Object.isPlainObject;

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
    if (hasDontEnumBug) {
        /* jshint -W001 */
        exports.Object.proto.hasOwnProperty = function (property) {
            var prop = $toString(property),
                hop = pHasOwn.call(this, prop),
                length,
                index;

            if (!hop && hasProperty(this, prop)) {
                for (index = 0, length = shadowed.length; index < length; index += 1) {
                    if (prop === shadowed[index] && this[prop] !== $getPrototypeOf(this)[prop]) {
                        hop = true;
                        break;
                    }
                }
            }

            return hop;
        };
        /* jshint +W001 */

        exports.Object.proto.hasOwnProperty.argNames = ['property'];
    } else if (hasProtoEnumBug) {
        /* jshint -W001 */
        exports.Object.proto.hasOwnProperty = function (property) {
            var prop = $toString(property);

            return (prop === 'prototype' && isFunction(this)) || pHasOwn.call(this, prop);
        };
        /* jshint +W001 */

        exports.Object.proto.hasOwnProperty.argNames = ['property'];
    } else {
        /* jshint -W001 */
        exports.Object.proto.hasOwnProperty = pHasOwn;
        /* jshint +W001 */
    }

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
    /* jshint -W001 */
    exports.Object.hasOwnProperty = toMethod(exports.Object.proto.hasOwnProperty);
    /* jshint +W001 */
    exports.Object.hasOwnProperty.argNames = ['object', 'property'];

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
     *
     * @private
     * @function module:util-x~exportshasOwn
     * @param {Object} object
     * @param {StringLike} property
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     */
    $hasOwn = exports.Object.hasOwnProperty;

    /**
     * The function takes one argument inputArg, if the argument is an object whose class internal
     * property is "Array" or is an Object whose class internal property is "Arguments";
     * returns true if length is zero otherwise it returns false.
     * Otherwise returns null if the argument does not match the rquirements.
     *
     * @function module:util-x~exports.Array.isEmpty
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {(boolean|null)}
     */
    exports.Array.isEmpty = function (inputArg) {
        return !throwIfIsNotHasValidLength(throwIfFunction(cObject(checkObjectCoercible(inputArg)))).length;
    };

    exports.Array.isEmpty.argNames = ['inputArg'];

    /**
     * Returns the first element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.proto.first
     * @this {module:util-x~ArrayLike}
     * @returns {*}
     */
    exports.Array.proto.first = function () {
        return throwIfIsNotHasValidLength(toObjectFixIndexedAccess(this))[0];
    };

    /**
     * Returns the first element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.first
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.first = toMethod(exports.Array.proto.first);
    exports.Array.first.argNames = ['inputArg'];

    /**
     * Returns the last element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.proto.last
     * @this {module:util-x~ArrayLike}
     * @returns {*}
     */
    exports.Array.proto.last = function () {
        var object = throwIfIsNotHasValidLength(toObjectFixIndexedAccess(this));

        return object[object.length - 1];
    };

    /**
     * Returns the last element of an array; otherwise returns undefined.
     *
     * @function module:util-x~exports.Array.last
     * @param {module:util-x~ArrayLike} inputArg
     * @returns {*}
     */
    exports.Array.last = toMethod(exports.Array.proto.last);
    exports.Array.last.argNames = ['inputArg'];

    /**
     * The Array.assign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.proto.assign
     * @this {module:util-x~ArrayLike}
     * @param {module:util-x~NumberLike} index
     * @param {*} value
     * @returns {(number|undefined)}
     */
    exports.Array.proto.assign = (function () {
        var rxInt = new CRegExp('^[1-9]\\d*$');

        return function (index, value) {
            var object = toObjectFixIndexedAccess(this),
                updateLen,
                numIndex,
                number,
                string,
                isInt;

            if (arguments.length >= 2) {
                updateLen = hasValidLength(object) && !isFunction(object);
                if (updateLen) {
                    if (toClass(index) === classNumber) {
                        numIndex = +index;
                        isInt = numIndex >= 0 && isSafeInteger(numIndex);
                    } else {
                        string = $toString(index);
                        if ($test(rxInt, string)) {
                            number = +string;
                            if (number >= 0 && isSafeInteger(number)) {
                                numIndex = number;
                                isInt = true;
                            }
                        }
                    }
                }

                if (updateLen && isInt) {
                    if (isArray(object) || isArguments(object)) {
                        if (numIndex <= MAX_UINT32 - 1) {
                            object[numIndex] = value;
                            numIndex += 1;
                            if (numIndex > object.length) {
                                object.length = numIndex;
                            }
                        } else {
                            object[index] = value;
                        }
                    } else {
                        object[numIndex] = value;
                        numIndex += 1;
                        if (numIndex > object.length) {
                            object.length = numIndex;
                        }
                    }
                } else {
                    object[index] = value;
                }
            }

            return object.length;
        };
    }());

    exports.Array.proto.assign.argNames = ['index', 'value'];

    /**
     * The Array.assign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     *
     * @function module:util-x~exports.Array.assign
     * @param {module:util-x~ArrayLike} array
     * @param {module:util-x~NumberLike} index
     * @param {*} value
     * @returns {(number|undefined)}
     */
    exports.Array.assign = toMethod(exports.Array.proto.assign);
    exports.Array.assign.argNames = ['array', 'index', 'value'];

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
        function defaultEqual(a, b) {
            return a === b;
        }

        return function (equalFn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                index,
                arr,
                idx,
                val,
                it;

            if ($isUndefined(equalFn)) {
                equalFn = defaultEqual;
            }

            throwIfNotFunction(equalFn);
            for (arr = [], index = 0, length = toLength(object.length); index < length; index += 1) {
                if (hasProperty(object, index)) {
                    for (it = object[index], val = true, idx = 0; idx < length; idx += 1) {
                        if (idx < index && hasProperty(object, idx) && equalFn.call(thisArg, it, object[idx])) {
                            val = false;
                            break;
                        }
                    }

                    if (val) {
                        pPush.call(arr, it);
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
    exports.Array.unique = toMethod(exports.Array.proto.unique);
    exports.Array.proto.unique.argNames = ['array', 'equalFn', 'thisArg'];

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
        var argNames = ['start', 'deleteCount'];

        return decide(
            // test
            function () {
                affirmBasic(pSplice)();
                affirm.strictEqual(pSplice.call([1, 2], 0).length, 2, 'correct length');
            },

            // pass
            function () {
                return decide(
                    // test
                    function () {
                        affirm.strictEqual(pSplice.call([1, 2]).length, 0, 'not zero');
                    },

                    // pass
                    function () {
                        return pSplice;
                    },

                    // fail
                    function () {
                        return function () {
                            var val;

                            if (arguments.length < 1) {
                                val = [];
                            } else {
                                val = pSplice.apply(this, $slice(arguments));
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
                    var object = toObjectFixIndexedAccess(this),
                        length = toLength(object.length),
                        removed = [],
                        relativeStart = toInteger(start),
                        actualStart,
                        actualDeleteCount,
                        k = 0,
                        from,
                        argLength = arguments.length,
                        args = $slice(arguments),
                        item = 2,
                        itemCount = mMax(argLength - item, 0),
                        to,
                        loopCache;

                    if (argLength < 1) {
                        return removed;
                    }

                    if (relativeStart < 0) {
                        actualStart = mMax(length + relativeStart, 0);
                    } else {
                        actualStart = mMin(relativeStart, length);
                    }

                    if (argLength < 2) {
                        deleteCount = length - actualStart;
                    }

                    actualDeleteCount = mMin(mMax(toLength(deleteCount), 0), length - actualStart);
                    while (k < actualDeleteCount) {
                        from = actualStart + k;
                        if ($hasOwn(object, from)) {
                            pPush.call(removed, object[from]);
                        }

                        k += 1;
                    }

                    if (itemCount < actualDeleteCount) {
                        k = actualStart;
                        loopCache = length - actualDeleteCount;
                        while (k < loopCache) {
                            from = k + actualDeleteCount;
                            to = k + itemCount;
                            if ($hasOwn(object, from)) {
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
                            if ($hasOwn(object, from)) {
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
    exports.Array.splice = toMethod(exports.Array.proto.splice);
    exports.Array.splice.argNames = ['array', 'start', 'deleteCount'];

    /**
     * This) method changes the content of an array,
     * adding new elements while removing old elements.
     *
     * @private
     * @function module:util-x~exportssplice
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
     * @function module:util-x~hasV8StrictBug
     * @param {Function} fn
     * @returns {boolean}
     */
    function hasV8StrictBug(fn) {
        var bug = false;

        if (isStrictMode) {
            fn.call([1], function () {
                bug = typeof this === 'object';
            }, 'foo');
        }

        return bug;
    }

    /**
     * @function module:util-x~affirmArrayMethodTestsBasic
     * @param {Function} [thisArg]
     * @returns {Function}
     */
    function affirmArrayMethodTestsBasic(Fn) {
        return function () {
            affirmBasic(Fn)();
            affirm.ok(!hasV8StrictBug(Fn), 'V8 bug');
        };
    }

    /**
     * @function module:util-x~affirmArrayMethodTestsObject
     * @param {Function} [thisArg]
     * @returns {Function}
     */
    function affirmArrayMethodTestsObject(Fn) {
        return function () {
            affirmArrayMethodTestsBasic(Fn)();

            var result;

            Fn.call('foo', function () {
                /*jslint unparam: true */
                /*jshint unused: false */
                result = arguments[arguments.length - 1];
            });

            affirm.strictEqual(typeOf(result), 'object', 'is object');
            affirm.strictEqual(toClass(result), classString, 'is string');
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
    exports.Array.proto.forEach = decide(
        // test
        affirmArrayMethodTestsObject(pForEach),

        // pass
        function () {
            return pForEach;
        },

        //fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    length,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (index = 0; index < length; index += 1) {
                    if (hasProperty(object, index)) {
                        fn.call(thisArg, object[index], index, object);
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
    exports.Array.forEach = toMethod(exports.Array.proto.forEach);
    exports.Array.forEach.argNames = ['array', 'fn', 'thisArg'];

    /**
     * Executes a provided function once per array element.
     *
     * @private
     * @function module:util-x~exportsforEach
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
        var object = toObjectFixIndexedAccess(this),
            length,
            index,
            val;

        throwIfNotFunction(fn);
        length = toLength(object.length);
        if (length) {
            thisArg = toObjectCallFix(thisArg);
        }

        for (val = false, index = 0; index < length; index += 1) {
            val = !!fn.call(thisArg, object[index], index, object);
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
    exports.Array.forAll = toMethod(exports.Array.proto.forAll);
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
    exports.Array.proto.some = decide(
        // test
        affirmArrayMethodTestsObject(pSome),

        // pass
        function () {
            return pSome;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    val,
                    length,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (val = false, index = 0; index < length; index += 1) {
                    if (hasProperty(object, index)) {
                        val = !!fn.call(thisArg, object[index], index, object);
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
    exports.Array.some = toMethod(exports.Array.proto.some);
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
    exports.Array.proto.find = decide(
        // test
        function () {
            affirmArrayMethodTestsBasic(pFind)();

            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                foundIndex = pFind.call(obj, function () {
                    throw new Error('should not reach here');
                });

            affirm.strictEqual(foundIndex, -1, 'object with negative length');
        },

        // pass
        function () {
            return pFind;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    length,
                    index,
                    val,
                    it;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (index = 0; index < length; index += 1) {
                    it = object[index];
                    if (fn.call(thisArg, it, index, object)) {
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
    exports.Array.find = toMethod(exports.Array.proto.find);
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
    exports.Array.proto.findIndex = decide(
        // test
        function () {
            affirmArrayMethodTestsBasic(pFindIndex)();

            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                foundIndex = pFindIndex.call(obj, function () {
                    throw new Error('should not reach here');
                });

            affirm.strictEqual(foundIndex, -1, 'object with negative length');
        },

        // pass
        function () {
            return pFindIndex;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    val,
                    length,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (val = -1, index = 0; index < length; index += 1) {
                    if (fn.call(thisArg, object[index], index, object)) {
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
    exports.Array.findIndex = toMethod(exports.Array.proto.findIndex);
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
    exports.Array.from = decide(
        // test
        affirmBasic(mFrom),

        // pass
        function () {
            return mFrom;
        },

        // fail
        function () {
            return function (arrayLike, mapfn, thisArg) {
                var object = toObjectFixIndexedAccess(arrayLike),
                    length,
                    array,
                    mapping,
                    index,
                    it;

                if (!$isUndefined(mapfn)) {
                    mapping = !!throwIfNotFunction(mapfn);
                }

                length = toLength(object.length);
                if (isFunction(this)) {
                    array = new this(length);
                } else {
                    array = [];
                }

                array.length = length;
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (index = 0; index < length; index += 1) {
                    it = object[index];
                    if (mapping) {
                        it = mapfn.call(thisArg, it, index);
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
    exports.Array.proto.every = decide(
        // test
        affirmArrayMethodTestsObject(pEvery),

        // pass
        function () {
            return pEvery;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    length,
                    val,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (val = true, index = 0; index < length; index += 1) {
                    if (hasProperty(object, index)) {
                        val = !!fn.call(thisArg, object[index], index, object);
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
    exports.Array.every = toMethod(exports.Array.proto.every);
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
    exports.Array.proto.map = decide(
        // test
        affirmArrayMethodTestsObject(pMap),

        // pass
        function () {
            return pMap;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    length,
                    arr,
                    index;

                throwIfNotFunction(fn);
                arr = [];
                arr.length = length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (index = 0; index < length; index += 1) {
                    if (hasProperty(object, index)) {
                        arr[index] =  fn.call(thisArg, object[index], index, object);
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
    exports.Array.map = toMethod(exports.Array.proto.map);
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
    exports.Array.of = decide(
        // test
        affirmBasic(mOf),

        // pass
        function () {
            return mOf;
        },

        // fail
        function () {
            return function () {
                return $slice(arguments);
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
    exports.Array.proto.filter = decide(
        // test
        affirmArrayMethodTestsObject(pFilter),

        // pass
        function () {
            return pFilter;
        },

        // fail
        function () {
            return function (fn, thisArg) {
                var object = toObjectFixIndexedAccess(this),
                    length,
                    arr,
                    index,
                    it;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (length) {
                    thisArg = toObjectCallFix(thisArg);
                }

                for (arr = [], index = 0; index < length; index += 1) {
                    it = object[index];
                    if (hasProperty(object, index) && fn.call(thisArg, it, index, object)) {
                        pPush.call(arr, it);
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
    exports.Array.filter = toMethod(exports.Array.proto.filter);
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
    exports.Array.proto.reduce = decide(
        // test
        affirmArrayMethodTestsObject(pReduce),

        // pass
        function () {
            return pReduce;
        },

        // fail
        function () {
            var reduceTypeErrorMessage = 'reduce of empty array with no initial value';

            return function (fn, initialValue) {
                var object = toObjectFixIndexedAccess(this),
                    accumulator,
                    length,
                    kPresent,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (!length && arguments.length === 1) {
                    throw new CTypeError(reduceTypeErrorMessage);
                }

                index = 0;
                if (arguments.length > 1) {
                    accumulator = initialValue;
                } else {
                    kPresent = false;
                    while (!kPresent && index < length) {
                        kPresent = hasProperty(object, index);
                        if (kPresent) {
                            accumulator = object[index];
                            index += 1;
                        }
                    }

                    if (!kPresent) {
                        throw new CTypeError(reduceTypeErrorMessage);
                    }
                }

                while (index < length) {
                    if (hasProperty(object, index)) {
                        accumulator = fn.call(Undefined, accumulator, object[index], index, object);
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
    exports.Array.reduce = toMethod(exports.Array.proto.reduce);
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
    exports.Array.proto.reduceRight = decide(
        // test
        affirmArrayMethodTestsObject(pReduceRight),

        // pass
        function () {
            return pReduceRight;
        },

        // fail
        function () {
            var reduceRightTypeErrorMessage = 'reduceRight of empty array with no initial value';

            return function (fn, initialValue) {
                var object = toObjectFixIndexedAccess(this),
                    accumulator,
                    length,
                    kPresent,
                    index;

                throwIfNotFunction(fn);
                length = toLength(object.length);
                if (!length && arguments.length === 1) {
                    throw new CTypeError(reduceRightTypeErrorMessage);
                }

                index = length - 1;
                if (arguments.length > 1) {
                    accumulator = initialValue;
                } else {
                    kPresent = false;
                    while (!kPresent && index >= 0) {
                        kPresent = hasProperty(object, index);
                        if (kPresent) {
                            accumulator = object[index];
                            index -= 1;
                        }
                    }

                    if (!kPresent) {
                        throw new CTypeError(reduceRightTypeErrorMessage);
                    }
                }

                while (index >= 0) {
                    if (hasProperty(object, index)) {
                        accumulator = fn.call(Undefined, accumulator, object[index], index, object);
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
    exports.Array.reduceRight = toMethod(exports.Array.proto.reduceRight);
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
        return mMin(mMax(toInteger(number), MIN_SAFE_INTEGER), MAX_SAFE_INTEGER);
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
        if (arguments.length === 1) {
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

        if (tmp > Number.MAX_SAFE_INTEGER) {
            tmp = new BigNum(max).minus(min).plus(1);
            val  = mFloor(tmp.times(mRandom())) + min;
        } else {
            val = mFloor(mRandom() * tmp + min);
        }

        return val;
    };

    exports.Number.randomInt.argNames = ['min', 'max'];

    /**
     * Default compare function for stableSort.
     *
     * @private
     * @function module:util-x~defaultComparison
     * @param {*} left
     * @param {*} right
     * @returns {number}
     */
    function defaultComparison(left, right) {
        var leftS = $toString(left),
            rightS = $toString(right),
            val = 1;

        if (leftS === rightS) {
            val = +0;
        } else if (leftS < rightS) {
            val = -1;
        }

        return val;
    }

    /**
     * sortCompare function for stableSort.
     *
     * @private
     * @function module:util-x~sortCompare
     * @param {*} object
     * @param {*} left
     * @param {*} right
     * @returns {number}
     */
    function sortCompare(left, right) {
        var hasj = $hasOwn(left, 0),
            hask = $hasOwn(right, 0),
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
     * @function module:util-x~merge
     * @param {module:util-x~ArrayLike} left
     * @param {module:util-x~ArrayLike} right
     * @param {Function} comparison
     * @returns {Array}
     */
    function merge(left, right, comparison) {
        var result = [],
            next = 0,
            sComp;

        result.length = left.length + right.length;
        while (left.length && right.length) {
            sComp = sortCompare(left, right);
            if (typeof sComp !== 'number') {
                if (comparison(left[0], right[0]) <= 0) {
                    if ($hasOwn(left, 0)) {
                        result[next] = left[0];
                    }

                    pShift.call(left);
                } else {
                    if ($hasOwn(right, 0)) {
                        result[next] = right[0];
                    }

                    pShift.call(right);
                }
            } else if (sComp <= 0) {
                if ($hasOwn(left, 0)) {
                    result[next] = left[0];
                }

                pShift.call(left);
            } else {
                if ($hasOwn(right, 0)) {
                    result[next] = right[0];
                }

                pShift.call(right);
            }

            next += 1;
        }

        while (left.length) {
            if ($hasOwn(left, 0)) {
                result[next] = left[0];
            }

            pShift.call(left);
            next += 1;
        }

        while (right.length) {
            if ($hasOwn(right, 0)) {
                result[next] = right[0];
            }

            pShift.call(right);
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
        var length = array.length,
            middle,
            front,
            back,
            val;

        if (length < 2) {
            val = $slice(array);
        } else {
            middle = mCeil(length / 2);
            front = $slice(array, 0, middle);
            back = $slice(array, middle);
            val = merge(mergeSort(front, comparefn), mergeSort(back, comparefn), comparefn);
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
    exports.Array.proto.stableSort = function (comparefn) {
        var object = toObjectFixIndexedAccess(this),
            length = toLength(object.length),
            index,
            sorted;

        if ($isUndefined(comparefn)) {
            comparefn = defaultComparison;
        }

        throwIfNotFunction(comparefn);
        if (length > 1) {
            sorted = mergeSort(object, comparefn);
            if (isArray(object) || isArguments(object)) {
                object.length = 0;
            } else {
                $splice(object, 0, object.length);
            }

            object.length = sorted.length;
            for (index = 0; index < length; index += 1) {
                if ($hasOwn(sorted, index)) {
                    object[index] = sorted[index];
                }
            }
        }

        return object;
    };

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
    exports.Array.stableSort = toMethod(exports.Array.proto.stableSort);
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

        return decide(
            // test
            function () {
                affirmBasic(pSort)();

                function descending(left, right) {
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

                var sortObj = {
                    0: 5,
                    1: 2,
                    2: 4,
                    4: null,
                    6: 1,
                    7: 3,
                    length: 8
                };

                pSort.call(sortObj, descending);
                affirm.strictEqual(sortObj[0], null, 'test1');
                affirm.strictEqual(sortObj[1], 5, 'test2');
                affirm.strictEqual(sortObj[2], 4, 'test3');
                affirm.strictEqual(sortObj[3], 3, 'test4');
                affirm.strictEqual(sortObj[4], 2, 'test5');
                affirm.strictEqual(sortObj[5], 1, 'test6');
                affirm.ok(!pHasOwn.call(sortObj, 6), 'test7');
                affirm.ok(!pHasOwn.call(sortObj, 7), 'test8');
                affirm.strictEqual(sortObj.length, 8, 'test9');
            },

            // pass
            function () {
                return decide(
                    // test
                    function () {
                        affirm.doesNotThrow(function () {
                            pSort.call([]);
                        }, 'no compare argument');

                        affirm.doesNotThrow(function () {
                            pSort.call([], undefined);
                        }, 'undefined compare argument');

                        affirm.throws(function () {
                            pSort.call([], null);
                        }, CTypeError, 'null compare argument');

                        affirm.throws(function () {
                            pSort.call([], 1);
                        }, CTypeError, 'number compare argument');

                        affirm.throws(function () {
                            pSort.call([], true);
                        }, CTypeError, 'boolean compare argument');

                        affirm.throws(function () {
                            pSort.call([], 'a');
                        }, CTypeError, 'string compare argument');

                        affirm.throws(function () {
                            pSort.call([], {});
                        }, CTypeError, 'object compare argument');

                        affirm.throws(function () {
                            pSort.call([], []);
                        }, CTypeError, 'array compare argument');
                    },

                    // pass
                    function () {
                        return pSort;
                    },

                    // fail
                    function () {
                        return function (comparefn) {
                            if ($isUndefined(comparefn)) {
                                comparefn = defaultComparison;
                            }

                            return pSort.call(checkObjectCoercible(this), throwIfNotFunction(comparefn));
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
    exports.Array.sort = toMethod(exports.Array.proto.sort);
    exports.Array.sort.argNames = ['array', 'comparefn'];

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
            hex = pNToString.call(whiteSpaces[index], 16);
            wsStr += '\\u' + pSSlice.call('0000', 0, -hex.length) + hex;
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
    exports.String.proto.trim = decide(
        // test
        function () {
            affirmBasic(pTrim)();
            affirm.strictEqual(pTrim.call(wspaceStrings.trimString).length, 0, 'not all whitespace trimmed');
            affirm.strictEqual(pTrim.call(base.String.fromCharCode(0x200b)).length, 1, 'trimmed 0x200b bug');
            affirm.strictEqual(pTrim.call(base.String.fromCharCode(0x0085)).length, 1, 'trimmed 0x0085 bug');
        },

        // pass
        function () {
            return pTrim;
        },

        // fail
        function () {
            var wsTrim = new CRegExp('^[' + wspaceStrings.wsStr + ']+|[' + wspaceStrings.wsStr + ']+$', 'g');

            return function () {
                return $replace(onlyCoercibleToString(this), wsTrim, '');
            };
        },

        // argNames
        [],

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
    exports.String.trim = toMethod(exports.String.proto.trim);
    exports.String.trim.argNames = ['inputArg'];

    /**
     * Shortcut
     * This {@link module:util-x~boundPrototypalFunction method} removes whitespace from both ends of the string.
     *
     * @private
     * @function module:util-x~trim
     * @param {string} inputArg
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    trim = exports.String.trim;

    /**
     * This function parses a string argument and returns an integer of the specified radix or base.
     *
     * @function module:util-x~exports.parseInt
     * @param {StringLike} inputArg
     * @param {number} radix
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
     */
    if (testShims ||
            !isNative(base.parseInt) ||
            mParseInt(wspaceStrings.trimString + '08') !== 8 ||
            mParseInt(wspaceStrings.trimString + '0x16') !== 22 ||
            mParseInt(wspaceStrings.trimString + '0x16', 10) !== 0) {

        exports.parseInt = (function () {
            var hexRx = new CRegExp('^0[xX]');

            return function (str, radix) {
                str = trim(str);
                if ($isUndefined(radix) || !toInt32(radix)) {
                    radix = $test(hexRx, str) ? 16 : 10;
                }

                if (radix === 10 && $test(hexRx, str)) {
                    return 0;
                }

                return mParseInt(str, radix);
            };
        }());

        exports.parseInt.argNames = ['inputArg', 'radix'];
    } else {
        exports.parseInt = mParseInt;
    }

    /**
     * Shortcut
     * This function parses a string argument and returns an integer of the specified radix or base.
     *
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
    if (testShims ||
            !isNative(base.Number.parseInt) ||
            base.Number.parseInt(wspaceStrings.trimString + '08') !== 8 ||
            base.Number.parseInt(wspaceStrings.trimString + '0x16') !== 22 ||
            base.Number.parseInt(wspaceStrings.trimString + '0x16', 10) !== 0) {

        exports.Number.parseInt = function (str, radix) {
            /*jslint unparam: true */
            /*jshint unused: false */
            return $parseInt.apply(null, $slice(arguments));
        };

        exports.Number.parseInt.argNames = ['inputArg', 'radix'];
    } else {
        exports.Number.parseInt = base.Number.parseInt;
    }

    /**
     * This method parses a string argument and returns a floating point number.
     *
     * @function module:util-x~exports.Number.parseFloat
     * @param {StringLike} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
     */
    if (testShims || !isNative(base.Number.parseFloat)) {
        exports.Number.parseFloat = mParsefloat;
        exports.Number.parseFloat.argNames = ['inputArg'];
    } else {
        exports.Number.parseFloat = base.Number.parseFloat;
    }

    /**
     * This method formats a number using fixed-point notation.
     *
     * @function module:util-x~exports.Number.toFixed
     * @this {number}
     * @param {number} fractionDigits
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    if (testShims ||
            !isNative(base.Number.toFixed) ||
            base.Number.toFixed.call(0.00008, 3) !== '0.000' ||
            base.Number.toFixed.call(0.9, 0) === '0' ||
            base.Number.toFixed.call(1.255, 2) !== '1.25' ||
            base.Number.toFixed.call(1000000000000000128, 0) !== '1000000000000000128') {

        // Hide these variables and functions
        (function () {
            var baseNum = 1e7,
                data = [0, 0, 0, 0, 0, 0],
                size = data.length,
                last = size - 1;

            function multiply(n, c) {
                var index;

                for (index = 0; index < size; index += 1) {
                    c += n * data[index];
                    data[index] = c % baseNum;
                    c = mFloor(c / baseNum);
                }
            }

            function divide(n) {
                var c = 0,
                    index;

                for (index = last; index >= 0; index -= 1) {
                    c += data[index];
                    data[index] = mFloor(c / n);
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
                            s += pSSlice.call('0000000', 0, 7 - it.length) + it;
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

            exports.Number.proto.toFixed = function (fractionDigits) {
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
                if (!strictEqual(f, f)) {
                    f = 0;
                } else {
                    f = mFloor(f);
                }

                if (f < 0 || f > 20) {
                    throw new CRangeError('Number.toFixed called with invalid number of decimals');
                }

                x = +this;
                // Test for NaN or if it is too big or small, return the string value of the number.
                if (!strictEqual(x, x) || x <= -1e21 || x >= 1e21) {
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
                        m = numToString() + pSSlice.call('0.00000000000000000000', 2, 2 + f);
                    }
                }

                if (f > 0) {
                    k = m.length;
                    if (k <= f) {
                        m = s + pSSlice.call('0.0000000000000000000', 0, f - k + 2) + m;
                    } else {
                        m = s + pSSlice.call(m, 0, k - f) + '.' + pSSlice.call(m, k - f);
                    }
                } else {
                    m = s + m;
                }

                return m;
            };

            exports.Number.proto.toFixed.argNames = ['fractionDigits'];
        }());
    } else {
        exports.Number.proto.toFixed = base.Number.toFixed;
    }

    /**
     * This {@link module:util-x~boundPrototypalFunction method} formats a number using fixed-point notation.
     *
     * @function module:util-x~exports.Number.toFixed
     * @param {number} number The number to be formatted.
     * @param {number} fractionDigits
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    exports.Number.toFixed = toMethod(exports.Number.proto.toFixed, justArg);
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
    exports.Array.proto.indexOf = decide(
        // test
        function () {
            affirmBasic(pIndexOf)();
            affirm.strictEqual(pIndexOf.call([0, 1], 1, 2), -1, 'item not found');
        },

        // pass
        function () {
            return pIndexOf;
        },

        // fail
        function () {
            return function (searchElement, fromIndex) {
                var object = toObjectFixIndexedAccess(this),
                    length = toLength(object.length),
                    val = -1,
                    index;

                if (length) {
                    if (arguments.length > 1) {
                        fromIndex = toInteger(fromIndex);
                    } else {
                        fromIndex = 0;
                    }

                    if (fromIndex < length) {
                        if (fromIndex < 0) {
                            fromIndex = length - mAbs(fromIndex);
                            if (fromIndex < 0) {
                                fromIndex = 0;
                            }
                        }

                        for (index = fromIndex; index < length; index += 1) {
                            if (hasProperty(object, index) && searchElement === object[index]) {
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
    exports.Array.indexOf = toMethod(exports.Array.proto.indexOf);
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

    exports.Array.proto.contains = function (searchElement) {
        /*jslint unparam: true */
        /*jshint unused: false */
        return exports.Array.proto.indexOf.apply(this, arguments) !== -1;
    };

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
    exports.Array.contains = toMethod(exports.Array.proto.contains);
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
    exports.Array.proto.lastIndexOf = decide(
        // test
        function () {
            affirmBasic(pIndexOf)();
            affirm.strictEqual(pLastIndexOf.call([0, 1], 0, -3), -1, 'item not found');
        },

        // pass
        function () {
            return pLastIndexOf;
        },

        // fail
        function () {
            return function (searchElement, fromIndex) {
                var object = toObjectFixIndexedAccess(this),
                    length = toLength(object.length),
                    val = -1,
                    index;

                if (length) {
                    if (arguments.length > 1) {
                        fromIndex = toInteger(fromIndex);
                    } else {
                        fromIndex = length - 1;
                    }

                    if (fromIndex >= 0) {
                        fromIndex = mMin(fromIndex, length - 1);
                    } else {
                        fromIndex = length - mAbs(fromIndex);
                    }

                    for (index = fromIndex; index >= 0; index -= 1) {
                        if (hasProperty(object, index) && searchElement === object[index]) {
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
    exports.Array.lastIndexOf = toMethod(exports.Array.proto.lastIndexOf);
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
    exports.Array.proto.fill = decide(
        // test
        affirmBasic(pFill),

        // pass
        function () {
            return pFill;
        },

        // fail
        function () {
            return function (value, start, end) {
                var object = toObjectFixIndexedAccess(this),
                    length = toLength(object.length),
                    relativeStart = toInteger(start),
                    relativeEnd,
                    finalEnd,
                    index;

                if (start < 0) {
                    relativeStart = mMax(length + relativeStart, 0);
                } else {
                    relativeStart = mMin(relativeStart, length);
                }

                if ($isUndefined(end)) {
                    relativeEnd = length;
                } else {
                    relativeEnd = toInteger(end);
                }

                if (relativeEnd < 0) {
                    finalEnd = mMax(length + relativeEnd, 0);
                } else {
                    finalEnd = mMin(relativeEnd, length);
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
    exports.Array.fill = toMethod(exports.Array.proto.fill);
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
    exports.Array.proto.copyWithin = decide(
        // test
        affirmBasic(pCopyWithin),

        // pass
        function () {
            return pCopyWithin;
        },

        // fail
        function () {
            return function (target, start, end) {
                var object = toObjectFixIndexedAccess(this),
                    length = toLength(object.length),
                    relativeTarget = toInteger(target),
                    relativeStart = toInteger(start),
                    relativeEnd,
                    to,
                    from,
                    finalEnd,
                    count,
                    direction,
                    index;

                if (relativeTarget < 0) {
                    to = mMax(length + relativeTarget, 0);
                } else {
                    to = mMin(relativeTarget, length);
                }

                if (relativeStart < 0) {
                    from = mMax(length + relativeStart, 0);
                } else {
                    from = mMin(relativeStart, length);
                }

                if ($isUndefined(end)) {
                    relativeEnd = length;
                } else {
                    relativeEnd = toInteger(end);
                }

                if (relativeEnd < 0) {
                    finalEnd = mMax(length + relativeEnd, 0);
                } else {
                    finalEnd = mMin(relativeEnd, length);
                }

                count = mMin(finalEnd - from, length - to);
                if (from < to && to < from + count) {
                    direction = -1;
                    from += count - 1;
                    to += count - 1;
                } else {
                    direction = 1;
                }

                for (index = count; index >= 1; index -= 1) {
                    if ($hasOwn(object, from)) {
                        object[to] = object[from];
                    } else {
                        delete object[to];
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
    exports.Array.copyWithin = toMethod(exports.Array.proto.copyWithin);
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
    exports.Object.keys = (function () {
        var argNames = ['object'];

        return decide(
            // test
            affirmBasic(mKeys),

            // pass
            function () {
                var keysWorksWithArguments = mKeys(returnArgs(1, 2)).length === 2;

                return decide(
                    // test
                    function () {
                        affirm.doesNotThrow(function () {
                            mKeys(1);
                        }, 'number');

                        affirm.doesNotThrow(function () {
                            mKeys('a');
                        }, 'string');

                        affirm.doesNotThrow(function () {
                            mKeys(true);
                        }, 'boolean');

                        affirm.ok(keysWorksWithArguments, 'works with arguments object');
                        affirm.ok(!hasErrorProps, 'works with error objects');

                        // Error prototype should not list
                        affirm.strictEqual(mKeys(CError.prototype).length, 0, 'Error prototype zero list');
                    },

                    // pass
                    function () {
                        return mKeys;
                    },

                    // fail
                    function () {
                        function argsFix(object) {
                            var keys;

                            if (!keysWorksWithArguments && isArguments(object)) {
                                keys = mKeys($slice(object));
                            } else {
                                keys = mKeys(object);
                            }

                            return keys;
                        }

                        function errorFix(keys, object) {
                            var len,
                                found,
                                arr,
                                index,
                                length,
                                it,
                                idx;

                            if (hasErrorProps && toClass(object) === classError) {
                                len = unwantedError.length;
                                for (arr = [], index = 0, length = keys.length; index < length; index += 1) {
                                    for (found = false, it = keys[index], idx = 0; idx < len; idx += 1) {
                                        if (it === unwantedError[idx]) {
                                            found = true;
                                            break;
                                        }
                                    }

                                    if (!found) {
                                        pPush.call(arr, it);
                                    }
                                }

                                keys = arr;
                            }

                            return keys;
                        }

                        return function (object) {
                            object = toObjectFixIndexedAccess(object);

                            return errorFix(argsFix(object), object);
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
                    object = toObjectFixIndexedAccess(object);

                    var isArgs = isArguments(object),
                        length,
                        dontEnum,
                        theKeys = [],
                        skipProto = hasProtoEnumBug && isFunction(object),
                        skipConstructor,
                        name,
                        ctor,
                        index;

                    if ((hasEnumStringBug && toClass(object) === classString) || isArgs) {
                        for (index = 0, length = object.length; index < length; index += 1) {
                            pPush.call(theKeys, $toString(index));
                        }
                    }

                    if (!isArgs) {
                        /*jslint forin: true */
                        for (name in object) {
                            if (!(skipProto && name === 'prototype') && pHasOwn.call(object, name)) {
                                pPush.call(theKeys, String(name));
                            }
                        }
                    }

                    if (hasDontEnumBug) {
                        ctor = object.constructor;
                        skipConstructor = ctor && ctor.prototype === object;
                        for (index = 0, length = shadowed.length; index < length; index += 1) {
                            dontEnum = shadowed[index];
                            if (!(skipConstructor && dontEnum === 'constructor') && pHasOwn.call(object, dontEnum)) {
                                pPush.call(theKeys, dontEnum);
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
     * @function module:util-x~exportsobjectKeys
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
        var object = toObjectFixIndexedAccess(this),
            keys,
            len,
            val,
            index,
            it;

        throwIfNotFunction(fn);
        keys = $objectKeys(cObject(this));
        len = keys.length;
        if (len) {
            thisArg = toObjectCallFix(thisArg);
        }

        for (val = false, index = 0; index < len; index += 1) {
            it = keys[index];
            val = !!fn.call(thisArg, object[it], it, object);
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
    exports.Object.forKeys = toMethod(exports.Object.proto.forKeys);
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
            return $test(notDigits, onlyCoercibleToString(this));
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
    exports.String.isDigits = toMethod(exports.String.proto.isDigits);
    exports.String.isDigits.argNames = ['string'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a String and
     * only contains numerical digits.
     *
     * @private
     * @function module:util-x~exportsisDigits
     * @param {*} string
     * @returns {boolean}
     */
    $isDigits = exports.String.isDigits;

    supportsAccessors = pHasOwn.call(protoObject, stringDefineGetter);

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     *
     * @private
     * @function module:util-x~defProp
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    function defProp(object, property, descriptor) {
        throwIfIsPrimitive(object);
        descriptor = assign({}, throwIfIsPrimitive(descriptor));

        var hasValue = pHasOwn.call(descriptor, 'value'),
            hasGet = pHasOwn.call(descriptor, 'get'),
            hasSet = pHasOwn.call(descriptor, 'set'),
            prototype;

        if (hasValue) {
            if (hasGet || hasSet) {
                throw new CTypeError('Invalid property. A property cannot have accessors and a value');
            }
        } else {
            if (pHasOwn.call(object, property)) {
                descriptor.value = object[property];
            } else if (!hasGet && !hasSet) {
                descriptor.value = Undefined;
            }
        }

        // If it's a data property.
        if (pHasOwn.call(descriptor, 'value')) {
            // fail silently if 'writable', 'enumerable', or 'configurable'
            // are requested but not supported
            /*
            // alternate approach:
            if ( // can't implement these features; allow false but not true
                ('writable' in descriptor && !descriptor.writable) ||
                ('enumerable' in descriptor && !descriptor.enumerable) ||
                ('configurable' in descriptor && !descriptor.configurable)
            ))
                throw new RangeError(
                    'This implementation of Object.defineProperty does not support configurable, enumerable, or writable.'
                );
            */

            if (supportsAccessors && (mLookupGetter.call(object, property) || mLookupSetter.call(object, property))) {
                // As accessors are supported only on engines implementing
                // `__proto__` we can safely override `__proto__` while defining
                // a property to make sure that we don't hit an inherited
                // accessor.
                prototype = object[stringProto];
                object[stringProto] = protoObject;
                // Deleting a property anyway since getter / setter may be
                // defined on object itself.
                delete object[property];
                object[property] = descriptor.value;
                // Setting original `__proto__` back now.
                object[stringProto] = prototype;
            } else {
                object[property] = descriptor.value;
            }
        } else {
            if (!supportsAccessors) {
                throw new CTypeError('getters & setters can not be defined on this javascript engine');
            }

            // If we got that far then getters and setters can be defined !!
            if (hasGet) {
                mDefineGetter.call(object, property, descriptor.get);
            }

            if (hasSet) {
                mDefineSetter.call(object, property, descriptor.set);
            }
        }
        return object;
    }

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

        return decide(
            //test
            function () {
                affirmBasic(mDefineProperty)();
                affirm.strictEqual(mDefineProperty({}, 'sentinel', { value: null }).sentinel, null, 'test1');
            },

            // pass
            function () {
                return decide(
                    // test
                    function () {
                        // should not throw an error definining elements on arrays using trailing point numbers strings
                        var testObj = mDefineProperty([], '1.', { value: null }),
                            testArr = [];

                        affirm.strictEqual(testObj.length, 0, 'test1');
                        affirm.strictEqual(testObj[1], Undefined, 'test2');
                        affirm.strictEqual(testObj['1.'], null, 'test3');

                        // should not throw an error definining elements on arrays using integer strings
                        testObj = mDefineProperty([], '1', { value: Undefined });
                        affirm.strictEqual(testObj.length, 2, 'test4');
                        affirm.strictEqual(testObj[1], Undefined, 'test5');

                        testObj = mDefineProperty([], '1', { value: null });
                        affirm.strictEqual(testObj.length, 2, 'test6');
                        affirm.strictEqual(testObj[1], null, 'test7');

                        testObj = mDefineProperty([], '1', {});
                        affirm.strictEqual(testObj.length, 2, 'test8');
                        affirm.strictEqual(testObj[1], Undefined, 'test9');

                        testObj = mDefineProperty([], '1', { value: null });
                        affirm.strictEqual(testObj.length, 2, 'test10');
                        affirm.strictEqual(testObj[1], null, 'test11');

                        // Test overwrite array properties when no value defined, no value change
                        testObj = mDefineProperty([10, 20], '1', {});
                        affirm.strictEqual(testObj.length, 2, 'test12');
                        affirm.strictEqual(testObj[1], 20, 'test13');

                        affirm.doesNotThrow(function () {
                            testObj = mDefineProperty([10], '0', {
                                enumerable: true,
                                writable: true,
                                configurable: true
                            });
                        }, 'should not throw an error redefinining elements on arrays');


                        affirm.strictEqual(testObj.length, 1, 'length after re-define');
                        affirm.strictEqual(testObj[0], 10, 'value after re-define');

                        // should not throw an error definining elements/properties on arrays
                        mDefineProperty(testArr, '0', {
                            value: 10,
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        mDefineProperty(testArr, '1', {
                            value: true,
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        mDefineProperty(testArr, '2', {
                            value: 'x',
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        mDefineProperty(testArr, 'foo', {
                            value: noop,
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        affirm.strictEqual(testArr.length, 3, 'length after define');
                        affirm.strictEqual(testArr[0], 10, 'first value');
                        affirm.strictEqual(testArr[1], true, 'second value');
                        affirm.strictEqual(testArr[2], 'x', 'third value');
                        affirm.strictEqual(testArr.foo, noop, 'fourth value');


                        //should not throw an error definining elements on arrays using float numbers
                        testObj = mDefineProperty([], 1.1, {
                            enumerable: true,
                            writable: true,
                            configurable: true
                        });

                        affirm.ok(pHasOwn.call(testObj, 1.1), 'have own property');
                        affirm.strictEqual(testObj.length, 0, 'be zero length');
                        affirm.strictEqual(testObj[1.1], Undefined, 'value should be undefined');
                    },

                    // pass
                    function () {
                        return mDefineProperty;
                    },

                    // fail
                    function () {
                        return function (object, property, descriptor) {
                            if (isArray(object) || isArguments(object)) {
                                property = $toString(property);
                                if ($isDigits(property) && isUint32(+property)) {
                                    property = +property;
                                }

                                if (toClass(property) === classString && isNumeric(property)) {
                                    return defProp(object, property, descriptor);
                                }
                            }

                            return mDefineProperty(object, property, descriptor);
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'defineProperty patch'
                );
            },

            // fail
            function () {
                return defProp;
            },

            // argNames
            argNames,

            //message
            'defineProperty shim'
        );
    }());

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     *
     * @private
     * @function module:util-x~defineProperty
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    defineProperty = exports.Object.defineProperty;

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
            if (toClass(props) === classString) {
                throw new CTypeError('Property description must be an object: ' + $toString(props));
            }

            return props;
        }

        return decide(
            // test
            function () {
                affirmBasic(mDefineProperties)();
                affirm.strictEqual(defineProperty, mDefineProperty, 'defineProperty was patched or shimmed');
            },

            // pass
            function () {
                return decide(
                    // test
                    function () {
                        affirm.throws(function () {
                            mDefineProperties({});
                        }, CTypeError, 'no properties argument');

                        affirm.throws(function () {
                            mDefineProperties({}, undefined);
                        }, CTypeError, 'properties undefined');

                        affirm.throws(function () {
                            mDefineProperties({}, null);
                        }, CTypeError, 'properties null');

                        affirm.doesNotThrow(function () {
                            mDefineProperties({}, true);
                        }, 'boolean');

                        affirm.doesNotThrow(function () {
                            mDefineProperties({}, 1);
                        }, 'properties number');

                        affirm.throws(function () {
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
                            return mDefineProperties(throwIfIsPrimitive(object), throwString(toObjectFixIndexedAccess(props)));
                        };
                    },

                    // argNames
                    argNames,

                    // message
                    'defineProperties patch'
                );
            },

            // fail
            function () {
                return function (object, props) {
                    throwIfIsPrimitive(object);
                    props = throwString(toObjectFixIndexedAccess(props));

                    var keys = $objectKeys(props),
                        length = keys.length,
                        key,
                        index;

                    for (index = 0; index < length; index += 1) {
                        key = keys[index];
                        defineProperty(object, key, props[key]);
                    }

                    return object;
                };
            },

            // argNames
            argNames,

            // message
            'defineProperties shim'
        );
    }());

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     *
     * @private
     * @function module:util-x~defineProperties
     * @param {Object} object
     * @param {Object} props
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
     */
    defineProperties = exports.Object.defineProperties;

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
    if (!testShims && isNative(base.Object.freeze)) {
        exports.Object.freeze = base.Object.freeze;
    } else {
        exports.Object.freeze = function (object) {
            return throwIfIsPrimitive(object);
        };

        exports.Object.freeze.argNames = ['object'];
    }

    // detect a Rhino bug and patch it
    try {
        exports.Object.freeze({
            noop: noop
        });
    } catch (eFreeze) {
        exports.Object.freeze = (function (
            freezeObject
        ) {
            return function (object) {
                var val;

                if (isFunction(object)) {
                    val = object;
                } else {
                    val = freezeObject(object);
                }

                return val;
            };
        }(
            exports.Object.freeze
        ));

        exports.Object.freeze.argNames = ['object'];
    }

    /**
     * Determine if an object is frozen.
     *
     * @function module:util-x~exports.Object.isFrozen
     * @param {Object} object
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
     */
    if (!testShims && isNative(base.Object.isFrozen)) {
        exports.Object.isFrozen = base.Object.isFrozen;
    } else {
        exports.Object.isFrozen = function (object) {
            throwIfIsPrimitive(object);

            return false;
        };

        exports.Object.isFrozen.argNames = ['object'];
    }

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
            propVal = object[propKey];
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
    if (!testShims && isNative(base.Object.assign)) {
        exports.Object.assign = base.Object.assign;
    } else {
        exports.Object.assign = function (target) {
            var to = cObject(checkObjectCoercible(target)),
                length = toLength(arguments.length),
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
                        from = cObject(arguments[index]);
                        keysArray = $objectKeys(from);
                        for (nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                            nextKey = keysArray[nextIndex];
                            if ($hasOwn(from, nextKey)) {
                                to[nextKey] = from[nextKey];
                            }
                        }
                    }
                }
            }

            return to;
        };

        exports.Object.assign.argNames = ['target'];
    }

    /**
     * The assign function is used to copy the values of all of the enumerable own properties from a
     * source object to a target object.
     *
     * @private
     * @function module:util-x~assign
     * @param {Object} target
     * @param {...Object} source
     * @returns {Object}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
     */
    assign = exports.Object.assign;

    /**
     * This method creates a new object with the specified prototype object and properties.
     *
     * @function module:util-x~exports.Object.create
     * @param {Prototype} prototype
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    exports.Object.create = decide(
        // test
        function () {
            affirmBasic(base.Object.create)();

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
                    constructor: assign({
                        value: createFn
                    }, propNotEnumerable),

                    /**
                     * @private
                     * @name module:util-x~createFn.prototype.foo
                     * type {?string}
                     */
                    foo: assign({
                        value: 'test'
                    }, propNotEnumerable)
                });

            affirm.strictEqual(created.foo, 'test', 'test1');
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
                ObjectCreateFunc.prototype = throwIfIsPrimitive(prototype);

                var newObject = new ObjectCreateFunc();

                defineProperty(newObject, stringProto, assign({
                    value: prototype
                }, propNotEnumerable));

                if (isPlainObject(propertiesObject)) {
                    defineProperties(newObject, propertiesObject);
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
     * @function module:util-x~create
     * @param {Prototype} prototype
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    create = exports.Object.create;

    /**
     * This method returns true if the Date object is valid.
     *
     * @function module:util-x~exports.Date.proto.isValid
     * @this {Date}
     * @returns {boolean}
     */
    exports.Date.proto.isValid = function () {
        if (toClass(this) !== classDate) {
            throw new CTypeError('this is not a Date object.');
        }

        var ms = pGetTime.call(this);

        return strictEqual(ms, ms);
    };

    /**
     * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a Date object and is valid.
     *
     * @function module:util-x~exports.Date.isValid
     * @param {*} dateObject
     * @returns {boolean}
     */
    exports.Date.isValid = toMethod(exports.Date.proto.isValid);
    exports.Date.isValid.argNames = ['dateObject'];

    /**
     * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     *
     * @function module:util-x~exports.Date.now
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
     */
    if (!testShims && isNative(base.Date.now)) {
        exports.Date.now = base.Date.now;
    } else {
        exports.Date.now = function now() {
            return pGetTime.call(new CDate());
        };
    }

    /**
     * This method wraps the string within the given character.
     *
     * @function module:util-x~exports.String.proto.wrapInChars
     * @this {string}
     * @param {string} character
     * @returns {string}
     */
    exports.String.proto.wrapInChars = function (characters) {
        if (toClass(characters) !== classString && toClass(characters) !== classNumber) {
            characters = '';
        } else {
            characters = $toString(characters);
        }

        return characters + onlyCoercibleToString(this) + characters;
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
    exports.String.wrapInChars = toMethod(exports.String.proto.wrapInChars);
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
    exports.Object.deepEqual = function (a, b) {
        if (a === b) {
            return true;
        }

        if (toClass(a) === classDate && toClass(b) === classDate) {
            return pGetTime.call(a) === pGetTime.call(b);
        }

        if (isRegExp(a) && isRegExp(b)) {
            return a.source === b.source &&
                a.global === b.global &&
                a.multiline === b.multiline &&
                a.lastIndex === b.lastIndex &&
                a.ignoreCase === b.ignoreCase &&
                a.sticky === b.sticky;
        }

        if (($isPrimitive(a) || isFunction(a)) && ($isPrimitive(b) || isFunction(b))) {
            /*jslint eqeq: true */
            return a == b;
        }

        if (a.prototype !== b.prototype) {
            return false;
        }

        if (isArguments(a)) {
            if (!isArguments(b)) {
                return false;
            }

            return deepEqual($slice(a), $slice(b));
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

        length = ka.length;
        if (length !== kb.length) {
            if (isArray(a) && isArray(b)) {
                if (a.length !== b.length) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            pSort.call(ka);
            pSort.call(kb);
            for (index = 0; index < length; index += 1) {
                if (ka[index] !== kb[index]) {
                    return false;
                }
            }
        }

        for (index = 0; index < length; index += 1) {
            it = ka[index];
            if (!deepEqual(a[it], b[it])) {
                return false;
            }
        }

        return typeOf(a) === typeOf(b);
    };

    exports.Object.deepEqual.argNames = ['a', 'b'];

    /**
     * Tests a deep equality relation.
     *
     * @private
     * @function module:util-x~deepEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
     */
    deepEqual = exports.Object.deepEqual;

    /**
     * Tests a deep equality relation.
     *
     * @function module:util-x~exports.Object.deepStrictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    exports.Object.deepStrictEqual = function (a, b) {
        if (a === b) {
            return true;
        }

        if (toClass(a) === classDate && toClass(b) === classDate) {
            return pGetTime.call(a) === pGetTime.call(b);
        }

        if (isRegExp(a) && isRegExp(b)) {
            return a.source === b.source &&
                a.global === b.global &&
                a.multiline === b.multiline &&
                a.lastIndex === b.lastIndex &&
                a.ignoreCase === b.ignoreCase &&
                a.sticky === b.sticky;
        }

        if (($isPrimitive(a) || isFunction(a)) && ($isPrimitive(b) || isFunction(b))) {
            return a === b;
        }

        if ($getPrototypeOf(a) !== $getPrototypeOf(b)) {
            return false;
        }

        if (isArguments(a)) {
            if (!isArguments(b)) {
                return false;
            }

            return deepStrictEqual($slice(a), $slice(b));
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

        length = ka.length;
        if (length !== kb.length) {
            if (isArray(a) && isArray(b)) {
                if (a.length !== b.length) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            pSort.call(ka);
            pSort.call(kb);
            for (index = 0; index < length; index += 1) {
                if (ka[index] !== kb[index]) {
                    return false;
                }
            }
        }

        for (index = 0; index < length; index += 1) {
            it = ka[index];
            if (!deepStrictEqual(a[it], b[it])) {
                return false;
            }
        }

        return typeOf(a) === typeOf(b);
    };

    exports.Object.deepStrictEqual.argNames = ['a', 'b'];

    /**
     * Tests a deep equality relation.
     *
     * @private
     * @function module:util-x~deepStrictEqual
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    deepStrictEqual = exports.Object.deepStrictEqual;

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
        var s = onlyCoercibleToString(this);

        n = +n;
        if (strictEqual(n, n) && n >= 0) {
            if (s.length > n) {
                s = pSSlice.call(s, 0, n);
            }
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
    exports.String.truncate = toMethod(exports.String.proto.truncate);
    exports.String.truncate.argNames = ['s', 'n'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} truncates a long string to the length specified by n;
     * used by AssertionError.toString
     *
     * @private
     * @function module:util-x~truncate
     * @param {string} s
     * @param {module:util-x~NumberLike} n
     * @returns {string}
     */
    truncate = exports.String.truncate;

    /**
     * This method inherits the prototype methods from one constructor into another.
     *
     * @function module:util-x~exports.Function.proto.inherits
     * @this {Function}
     * @param {Function} superCtor
     * @returns {undefined}
     */
    exports.Function.proto.inherits = function (superCtor) {
        throwIfNotFunction(this);
        throwIfNotFunction(superCtor);

        defineProperty(this, 'superCtor', assign({
            value: superCtor
        }, propConstant));

        this.prototype = create(superCtor.prototype);
        defineProperty(this.prototype, 'constructor', assign({
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
    exports.Function.inherits = toMethod(exports.Function.proto.inherits);
    exports.Function.inherits.argNames = ['ctor', 'superCtor'];

    /**
     * This {@link module:util-x~boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
     *
     * @private
     * @function module:util-x~inherits
     * @param {Function} ctor
     * @param {Function} superCtor
     * @returns {undefined}
     */
    inherits = exports.Function.inherits;

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
     * @function module:util-x~isErrorTypeConstructor
     * @param {*} inputArg
     * @returns {boolean}
     */
    isErrorTypeConstructor = exports.Error.isErrorTypeConstructor;

    /**
     * Custom replacer used to help stringify error messages.
     *
     * @function module:util-x~exports.customErrorReplacer
     * @param {string} key Unused
     * @param {*} value
     * @returns {string}
     */
    exports.customErrorReplacer = function (key, value) {
        /*jslint unparam: true */
        /*jshint unused: false */
        var type = typeof value,
            result;

        if (type === 'string') {
            result = value;
        } else if (type === 'undefined' ||
                    value === Infinity ||
                    value === -Infinity ||
                    exports.Number.isNaN(value) ||
                    isFunction(value) ||
                    isRegExp(value)) {

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
                if (ePatch.message === message && ePatch.toString() === classError) {
                    previousIEErrorToString = protoError.toString;
                    defineProperties(protoError, {
                        toString: assign({
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
                defineProperties(protoError, {
                    toString: assign({
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

            if (!isErrorTypeConstructor(ErrorConstructor)) {
                throw new CTypeError('"ErrorConstructor" was not an Error type');
            }

            maxMessageLength = +maxMessageLength;
            if (!strictEqual(maxMessageLength, maxMessageLength) || maxMessageLength < 64) {
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
                    message = truncate(stringify(message, exports.customErrorReplacer), maxMessageLength);
                }

                defineProperty(this, 'message', assign({
                    value: message
                }, propNotEnumerable));

                if (!isFunction(stackStartFunction)) {
                    stackStartFunction = CustomError;
                }

                this.stackStartFunction = stackStartFunction;
                if (isFunction(ErrorConstructor.captureStackTrace)) {
                    ErrorConstructor.captureStackTrace(this, this.stackStartFunction);
                } else {
                    err = ErrorConstructor.call(this);
                    if (typeof err.stack === 'string') {
                        defineProperty(this, 'stack', assign({
                            value: err.stack
                        }, propNotEnumerable));
                    } else if (typeof err.stacktrace === 'string') {
                        defineProperty(this, 'stack', assign({
                            value: err.stacktrace
                        }, propNotEnumerable));
                    }
                }
            };

            inherits(CustomError, ErrorConstructor);

            defineProperties(CustomError.prototype, {
                /**
                 * @private
                 * @name CustomError.prototype.name
                 * @type {string}
                 */
                name: assign({
                    value: name
                }, propNotEnumerable),

                /**
                 * @private
                 * @function CustomError.prototype.toString
                 */
                toString: assign({
                    value: function () {
                        var arr = $split(this.message, splitNewLine),
                            messageToString = this.name + ': ',
                            length = arr.length,
                            tempArr,
                            element,
                            index;

                        if (length > 1) {
                            for (tempArr = [], index = 0; index < length; index += 1) {
                                element = arr[index];
                                if (!stringContains(element, 'opera:config#UserPrefs|Exceptions Have Stacktrace')) {
                                    pPush.call(tempArr, element);
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
            isOkToUseOtherErrors = instanceOf(new Custom('test'), CSyntaxError);
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

            if (!isOkToUseOtherErrors || !isErrorTypeConstructor(ErrorConstructor)) {
                ErrorConstructor = CError;
            }

            return makeCustomError(name, ErrorConstructor, maxMessageLength);
        };
    }());

    exports.customError.argNames = ['name', 'ErrorConstructor', 'maxMessageLength'];

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
    exports.Object.getOwnPropertyDescriptor = decide(
        // test
        function () {
            affirmBasic(mGetOwnPropertyDescriptor)();

            var gOPDsentinel = {
                    sentinel: null
                },
                gOPDarray = [10, 20, 30];

            gOPDarray[4] = Undefined;

            affirm.strictEqual(mGetOwnPropertyDescriptor(gOPDsentinel, 'sentinel').value, null, 'test1');
            affirm.strictEqual(mGetOwnPropertyDescriptor(gOPDarray, 2).value, 30, 'test2');
            affirm.strictEqual(mGetOwnPropertyDescriptor(gOPDarray, '2').value, 30, 'test3');
            affirm.ok(pHasOwn.call(mGetOwnPropertyDescriptor(gOPDarray, 4), 'value'), 'test4');
            affirm.strictEqual(mGetOwnPropertyDescriptor(gOPDarray, 4).value, Undefined, 'test5');
            affirm.strictEqual(mGetOwnPropertyDescriptor(gOPDarray, 5), Undefined, 'test6');
        },

        // pass
        function () {
            return decide(
                // test
                function () {
                    affirm.ok(!(mGetOwnPropertyDescriptor(function (a) {
                        return a;
                    }, 'length').writable));
                },

                // pass
                function () {
                    return mGetOwnPropertyDescriptor;
                },

                // fail
                function () {
                    return function (object, property) {
                        var descriptor = mGetOwnPropertyDescriptor(object, property);

                        if (isFunction(object) && property === 'length' && descriptor.writable) {
                            descriptor.writable = false;
                        }

                        return descriptor;
                    };
                },

                // argNames
                ['object', 'property'],

                // message
                'getOwnPropertyDescriptor length patch'
            );
        },

        // fail
        function () {
            return function (object, property) {
                var descriptor,
                    prototype,
                    getter,
                    setter;

                if ($hasOwn(throwIfIsPrimitive(object), property)) {
                    descriptor = {};
                    descriptor.configurable = true;
                    descriptor.enumerable = true;
                    if (areGetSetSupported) {
                        prototype = object[stringProto];
                        object[stringProto] = protoObject;
                        getter = mLookupGetter.call(object, property);
                        setter = mLookupSetter.call(object, property);
                        if ($isUndefined(prototype)) {
                            delete object[stringProto];
                        } else {
                            object[stringProto] = prototype;
                        }

                        if (isNative(getter) || isNative(setter)) {
                            if (isNative(getter)) {
                                descriptor.get = getter;
                            }

                            if (isNative(setter)) {
                                descriptor.set = setter;
                            }
                        }
                    }

                    descriptor.value = object[property];
                    descriptor.writable = true;
                }

                return descriptor;
            };
        },

        // argNames
        ['object', 'property'],

        //message
        'getOwnPropertyDescriptor shim'
    );

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
        throwIfIsPrimitive(object);
        prop1 = $toString(prop1);
        prop2 = $toString(prop2);

        var temp1,
            temp2,
            num,
            notFunc,
            cond1,
            cond2;

        if (prop1 !== prop2) {
            temp1 = exports.Object.getOwnPropertyDescriptor(object, prop1) || {};
            temp2 = exports.Object.getOwnPropertyDescriptor(object, prop2) || {};
            num = toLength(prop2);
            notFunc = !isFunction(object);
            cond1 =  notFunc && hasValidLength(object) && $toString(num) === prop2;
            if (!isPlainObject(temp1) || !pHasOwn.call(temp1, 'value')) {
                if (cond1 && num === object.length - 1) {
                    object.length -= 1;
                }

                delete object[prop2];
            } else {
                if (cond1 && num === object.length) {
                    object.length += 1;
                }

                defineProperty(object, prop2, temp1);
            }

            num = toLength(prop1);
            cond2 = notFunc && hasValidLength(object) && $toString(num) === prop1;
            if (!isPlainObject(temp2) || !pHasOwn.call(temp2, 'value')) {
                if (cond2 && num === object.length - 1) {
                    object.length -= 1;
                }

                delete object[prop1];
            } else {
                defineProperty(object, prop1, temp2);
                if (cond2 && num === object.length) {
                    object.length += 1;
                }

                defineProperty(object, prop1, temp2);
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
        var object = toObjectFixIndexedAccess(this),
            isString,
            inLen,
            outLen,
            inIndex,
            outIndex,
            rand,
            tempVal,
            hasItem;

        if (hasProperty(object, 'length') && !isFunction(object)) {
            inLen = toLength(object.length);
            isString = toClass(object) === classString;
            if (isString) {
                for (tempVal = {}, inIndex = 0; inIndex < inLen; inIndex += 1) {
                    tempVal[inIndex] = object[inIndex];
                }

                object = tempVal;
            }

            object.length = inLen;
            if (inLen > 1) {
                outLen = mMin(mMax(toInteger(rounds), 1), MAX_SAFE_INTEGER);
                for (outIndex = 0; outIndex < outLen; outIndex += 1) {
                    for (inIndex = 0; inIndex < inLen; inIndex += 1) {
                        rand = mFloor(mRandom() * inIndex);
                        hasItem = $hasOwn(object, inIndex);
                        tempVal = object[inIndex];
                        if ($hasOwn(object, rand)) {
                            object[inIndex] = object[rand];
                        } else {
                            delete object[inIndex];
                        }

                        if (hasItem) {
                            object[rand] = tempVal;
                        } else {
                            delete object[rand];
                        }
                    }
                }
            }

            if (isString) {
                for (tempVal = '', inIndex = 0; inIndex < inLen; inIndex += 1) {
                    tempVal += object[inIndex];
                }

                object = cObject(tempVal);
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
    exports.Array.shuffle = toMethod(exports.Array.proto.shuffle);
    exports.Array.proto.shuffle.argNames = ['array', 'rounds'];

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     *
     * @private
     * @function module:util-x~mStringify
     * @param {*} value
     * @param {(Function|Array)} replacer
     * @param {number} space
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     */
    mStringify = base.JSON.stringify;

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
    if (!testShims && isNative(mStringify)) {
        /**
         * A test function object with a custom `toJSON` method.
         *
         * @private
         * @name module:util-x~testTemp.customJSON
         * @type {?Function}
         */
        testTemp.customJSON = function () {
            return 1;
        };

        /**
         * @private
         * @name module:util-x~testTemp.customJSON.toJSON
         * @type {?Function}
         */
        testTemp.customJSON.toJSON = testTemp.customJSON;

        try {
            /**
             * @private
             * @name module:util-x~testTemp.stringiySupport
             * @type {?Boolean}
             */
            testTemp.stringifySupport =
                // Firefox 3.1b1 and b2 serialize string, number, and boolean
                // primitives as object literals.
                mStringify(0) === '0' &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                mStringify(new CNumber()) === '0' &&
                mStringify(new CString()) === '""' &&
                // FF 3.1b1, 2 throw an error if the testTemp.customJSON is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                $isUndefined(mStringify(noop)) &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                $isUndefined(mStringify(Undefined)) &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the testTemp.customJSON is omitted entirely.
                $isUndefined(mStringify()) &&
                // FF 3.1b1, 2 throw an error if the given testTemp.a is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                mStringify(testTemp.customJSON) === '1' &&
                mStringify([testTemp.customJSON]) === '[1]' &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                mStringify([Undefined]) === '[null]' &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                mStringify(null) === 'null' &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, noop, 1]` serializes as "[1,true,],". These versions
                // of Firefox also allow trailing commas in JSON objects and arrays.
                // FF 3.1b3 elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                mStringify([Undefined, noop, null]) === '[null,null,null]' &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                // Removed test for '\0' => '\\'u0000'as Chrome 10 fails in 'use strict' mode with
                // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.
                mStringify({
                    'A': [testTemp.customJSON, true, false, null, '\b\n\f\r\t']
                }) === '{"A":[1,true,false,null,"\\b\\n\\f\\r\\t"]}' &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                //mStringify(null, testTemp.customJSON) === '"1"' &&
                mStringify([1, 2], null, 1) === '[\n 1,\n 2\n]' &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                mStringify(new CDate(-8.64e15)) === '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                mStringify(new CDate(8.64e15)) === '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                mStringify(new CDate(-621987552e5)) === '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.7 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                mStringify(new CDate(-1)) === '"1969-12-31T23:59:59.999Z"';
        } catch (eStringify) {
            testTemp.stringifySupport = null;
        }
    }

    if (testTemp.stringifySupport) {
        exports.JSON.stringify = mStringify;
    } else {
        exports.JSON.stringify = (function () {
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

            /** function */
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
                            hex = pNToString.call(pCharCodeAt.call(a, 0), 16);
                            r = '\\u' + pSSlice.call('0000', 0, -hex.length) + hex;
                        }

                        return r;
                    });
                } else {
                    result += string;
                }

                return result + '"';
            }

            /** function */
            function stringifyToString(key, holder) {
                var member,
                    mind = sfyGap,
                    partial,
                    value = holder[key],
                    element,
                    theGap,
                    length,
                    index,
                    keys,
                    v;

                if (value && isFunction(value.toJSON)) {
                    value = value.toJSON(key);
                }

                if (isFunction(sfyReplacer)) {
                    value = sfyReplacer.call(holder, key, value);
                }

                switch (typeof value) {
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

                    sfyGap += sfyIndent;
                    if (isArray(value)) {
                        for (partial = [], index = 0, length = value.length; index < length; index += 1) {
                            pPush.call(partial, stringifyToString(index, value) || 'null');
                        }

                        if (!partial.length) {
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

                    partial = [];
                    if (isArray(sfyReplacer)) {
                        for (partial = [], index = 0, length = sfyReplacer.length; index < length; index += 1) {
                            element = sfyReplacer[index];
                            if (typeof element === 'string') {
                                v = stringifyToString(element, value);
                                if (!$isUndefined(v)) {
                                    pPush.call(partial, stringifyQuote(element) + theGap + v);
                                }
                            }
                        }
                    } else {
                        for (index = 0, keys = $objectKeys(value), length = keys.length; index < length; index += 1) {
                            element = keys[index];
                            v = stringifyToString(element, value);
                            if (!$isUndefined(v)) {
                                pPush.call(partial, stringifyQuote(element) + theGap + v);
                            }
                        }
                    }

                    if (!partial.length) {
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
                if (replacer !== null && !$isUndefined(replacer) && !isFunction(replacer) && !isArray(replacer)) {
                    throw new CError('JSON.stringify');
                }

                return stringifyToString('', {
                    '': value
                });
            };
        }());

        exports.JSON.stringify.argNames = ['value', 'replacer', 'space'];
    }

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
    mParse = base.JSON.parse;

    /**
     * Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
     *
     * @function module:util-x~exports.JSON.parse
     * @param {string} text
     * @param {(Function|Array)} reviver
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
     */
    // Determines whether the (possibly native) `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    if (!testShims && isNative(mParse)) {
        try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (mParse('0') === 0 && mParse(false) === false) {
                /**
                 * Simple parsing test.
                 *
                 * @private
                 * @name module:util-x~testTemp.parseSimple
                 * @type {?Object}
                 */
                testTemp.parseSimple = mParse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
                /**
                 * @private
                 * @name module:util-x~testTemp.parseSupport
                 * @type {?Boolean}
                 */
                testTemp.parseSupport = testTemp.parseSimple.A.length === 5 && testTemp.parseSimple.A[0] === 1;
                if (testTemp.parseSupport) {
                    try {
                        // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in string.
                        testTemp.parseSupport = typeof mParse('"\t"') === 'string';
                    } catch (ignore) {}

                    if (testTemp.parseSupport) {
                        try {
                            // FF 4.0 and 4.0.1 allow leading `+` signs, and leading and
                            // trailing decimal points. FF 4.0, 4.0.1, and IE 9-10 also
                            // allow certain octal literals.
                            testTemp.parseSupport = mParse('01') !== 1;
                        } catch (ignore) {}
                    }
                }
            }
        } catch (eParse) {
            testTemp.parseSupport = false;
        }
    }

    if (testTemp.parseSupport) {
        try {
            mParse();
        } catch (eParse) {
            testTemp.parseSupport = instanceOf(eParse, CSyntaxError);
        }

        if (testTemp.parseSupport) {
            exports.JSON.parse = mParse;
        } else {
            exports.JSON.parse = function (text, reviver) {
                if ($isUndefined(text)) {
                    throw new CSyntaxError('JSON.parse');
                }

                return mParse(text, reviver);
            };

            exports.JSON.parse.argNames = ['text', 'reviver'];
        }
    } else {
        exports.JSON.parse = (function () {
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

                if (value && typeOf(value) === 'object') {
                    keys = $objectKeys(value);
                    length = keys.length;
                    for (index = 0; index < length; index += 1) {
                        k = keys[index];
                        v = walk(value, k);
                        if (!$isUndefined(v)) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }
                }

                return reviver.call(holder, key, value);
            }

            return function (text, reviver) {
                var j;

                text = $toString(text);
                parseCharacterTest.lastIndex = 0;
                if ($test(parseCharacterTest, text)) {
                    text = $replace(text, parseCharacterTest, function (a) {
                        var hex = pNToString.call(pCharCodeAt.call(a, 0), 16);

                        return '\\u' + pSSlice.call('0000', 0, -hex.length) + hex;
                    });
                }

                if ($test(parseProtect1,
                        $replace($replace($replace(text,
                            parseProtect2, '@'),
                            parseProtect3, ']'),
                            parseProtect4, ''))) {

                    /*jslint evil: true */
                    j = eval('(' + text + ')');
                    /*jslint evil: false */

                    if (isFunction(reviver)) {
                        return walk({
                            '': j
                        }, '', reviver);
                    }

                    return j;
                }

                throw new CSyntaxError('JSON.parse');
            };
        }());

        exports.JSON.parse.argNames = ['text', 'reviver'];
    }

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     *
     * @private
     * @function module:util-x~stringify
     * @param {*} value
     * @param {(Function|Array)} replacer
     * @param {number} space
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
     */
    stringify = exports.JSON.stringify;

    /**
     * This method calculates the Power Set of the array.
     *
     * @function module:util-x~exports.Array.proto.powerSet
     * @this {(ArrayLike|string)}
     * @throws {TypeError} If array is null or undefined
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    exports.Array.proto.powerSet = function () {
        var thisObj = toObjectFixIndexedAccess(this),
            val = [],
            object,
            lastElement,
            pSet,
            len,
            idx,
            it;

        if (hasProperty(thisObj, 'length') && !isFunction(thisObj)) {
            len = toLength(thisObj.length);
            if (len < 1) {
                pPush.call(val, []);
            } else {
                if (toClass(thisObj) === classString) {
                    lastElement = thisObj[len - 1];
                    object = pSSlice.call(thisObj, 0, -1);
                } else {
                    object = $slice(thisObj);
                    lastElement = pPop.call(object);
                }

                pSet = pPowerSet.call(object);
                for (idx = 0, len = pSet.length; idx < len; idx += 1) {
                    it = pSet[idx];
                    pPush.call(val, it);
                    pSet[idx] = it = $slice(it);
                    pPush.call(it, lastElement);
                    pPush.call(val, it);
                }
            }
        } else {
            pPush.call(val, []);
        }

        return val;
    };

    /**
     * This {@link module:util-x~boundPrototypalFunction method} calculates the Power Set of a given array.
     *
     * @private
     * @function module:util-x~pPowerSet
     * @this {(ArrayLike|string)}
     * @throws {TypeError} If array is null or undefined
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    pPowerSet = exports.Array.proto.powerSet;

    /**
     * This {@link module:util-x~boundPrototypalFunction method} calculates the Power Set of a given array.
     *
     * @function module:util-x~exports.Array.powerSet
     * @param {(ArrayLike|string)} array
     * @throws {TypeError} If array is null or undefined
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    exports.Array.powerSet = toMethod(exports.Array.proto.powerSet);

    /**
     * Convert an array to a plain object representation.
     *
     * @function module:util-x~exports.Array.proto.toObject
     * @this {module:util-x~ArrayLike}
     * @returns {Object}
     */
    exports.Array.proto.toObject = function () {
        var object = toObjectFixIndexedAccess(this),
            accumulator = {},
            length,
            index;

        if (hasProperty(object, 'length') && !isFunction(object)) {
            accumulator.length = length = toLength(object.length);
            for (index = 0; index < length; index += 1) {
                if (hasProperty(object, index)) {
                    accumulator[index] = object[index];
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
    exports.Array.toObject = toMethod(exports.Array.proto.toObject);

    /**
     * Determines if the supplied object is an instance of a particular constructor or
     * if the supplied object has the matching 'classId' on its constructor property.
     *
     * @private
     * @function module:util-x~isInstance
     * @param {*} object The object to be tested.
     * @param {Function} Ctor The constructor to test the object against.
     * @throws {TypeError} If Ctor is not a constructor.
     * @returns {boolean} True if object is an instance of Ctor or
     *                    has the matching `classId` otherwise false.
     */
    function isInstance(object, Ctor) {
        if (!isFunction(Ctor)) {
            throw new CTypeError('Ctor is not a constructor.');
        }

        var rtn = false,
            testType;

        if (object !== null) {
            testType = typeof object;
            if (testType !== 'undefined') {
                if (instanceOf(object, Ctor)) {
                    rtn = true;
                } else if (testType === 'object' && !isPlainObject(object) && !isFunction(object) && typeof object.classId === 'string') {
                    rtn = object.classId === Ctor.prototype.classId;
                }
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
            BigError = exports.customError('BigError', Error),

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
        defineProperty(BigError, 'version', assign({
            value: '0.2.0'
        }, propConstant));

        defineProperties(BigError.prototype, {
            /**
             * @private
             * @readonly
             * @name BigNumber.prototype.classId
             * @type {string}
             */
            classId: assign({
                value: '[object BigError]'
            }, propConstant),

            /**
             * @private
             * @readonly
             * @name BigNumber.prototype.version
             * @type {string}
             */
            version: assign({
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
                if (testType === 'object' && !isFunction(object) && object.constructor.prototype !== Object.prototype &&
                        (object.s === null || object.s === 1 || object.s === -1) &&
                            (object.c === null ||
                                (typeof object.c === 'object' &&
                                    isFunction(object.c.slice) &&
                                    isFunction(object.c.push) &&
                                    typeof object.c[0] === 'number')) &&
                            (object.e === null || typeof object.e === 'number') &&
                            (isFunction(object.plus) && isFunction(object.minus))) {

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

            return $isInteger(val) && inRange(val, min, max);
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
            var length = toLength(args.length),
                index = 0;

            do {
                thisArg = fn.call(thisArg, args[index]);
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
         * rnd.call(y, 1, 0)              // '123.4'
         * rnd.call(y, 1, 1)              // '123.5'
         * rnd.call(y, 1, 2)              // '123.4'
         * rnd.call(y, 1, 3)              // '123.5'
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
                            pUnshift.call(xc, 1);
                        }

                        i -= 1;
                    }
                }

                // Remove trailing zeros.
                for (i = toLength(xc.length) - 1; !xc[i]; i -= 1) {
                    xc.pop();
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
         * bigToString.call(x)               // '999000000000000000000'
         * y = new Big('1E21')
         * bigToString.call(y)               // '1e+21'
         * z = new Big('1E21')
         * bigToString.call(y, true)         //100000000000000000000
         */
        function bigToString(valueof, preventExp) {
            /*jshint validthis:true */
            var e = this.e,
                strT = $join(this.c, ''),
                strL = strT.length,
                str;

            // Exponential notation?
            if (!preventExp && (e <= TO_EXP_NEG || e >= TO_EXP_POS)) {
                str = pCharAt.call(strT, 0);
                if (strL > 1) {
                    str += '.' + pSSlice.call(strT, 1);
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
                    str = pSSlice.call(strT, 0, e) + '.' + pSSlice.call(strT, e);
                }
                // Exponent zero.
            } else if (strL > 1) {
                str = pCharAt.call(strT, 0) + '.' + pSSlice.call(strT, 1);
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
            if (toLength(c.length) > dp) {
                rnd.call(x, i, this.constructor.RM);
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
            while (toLength(c.length) < i) {
                pPush.call(c, 0);
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
                    str += '.' + pSSlice.call($join(c, ''), 1);
                }

                str += 'e';
                if (i >= 0) {
                    str += '+';
                }

                str += i;
            } else {
                // Normal notation.
                str = bigToString.call(x, false, preventExp);
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
            if (pCharAt.call(n, 0) === '-') {
                n = pSSlice.call(n, 1);
                this.s = -1;
            } else {
                this.s = 1;
            }

            // Decimal point?
            e = pSIndexOf.call(n, '.');
            if (e > -1) {
                n = pReplace.call(n, '.', '');
            }

            // Exponential form?
            i = pSearch.call(n, /e/i);
            if (i > 0) {
                // Determine exponent.
                if (e < 0) {
                    e = i;
                }

                e += +pSSlice.call(n, i + 1);
                n = n.substring(0, i);
            } else if (e < 0) {
                // Integer.
                e = toLength(n.length);
            }

            // Determine leading zeros.
            i = 0;
            while (pCharAt.call(n, i) === '0') {
                i += 1;
            }

            nL = toLength(n.length);
            if (i === nL) {
                // Zero.
                this.e = 0;
                this.c = [0];
            } else {
                // Determine trailing zeros.
                nL -= 1;
                while (pCharAt.call(n, nL) === '0') {
                    nL -= 1;
                }

                this.e = e - i - 1;
                this.c = [];
                // Convert string to array of digits without leading/trailing zeros.
                for (e = 0; i <= nL; i += 1, e += 1) {
                    this.c[e] = +pCharAt.call(n, i);
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
         * div.call(x, y)             // '3.14159292035398230088'
         * Big.DP = 2
         * div.call(x, y)             // '3.14'
         * div.call(x, 5)             // '71'
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
                length = toLength(arguments.length);

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
            dvsL = toLength(dvs.length);
            dvdI = dvsL;
            dvdL = toLength(dvd.length);
            // remainder
            rem = dvd.slice(0, dvsL);
            remL = toLength(rem.length);
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
            pUnshift.call(dvsZ, 0);
            // Add zeros to make remainder as long as divisor.
            while (remL < dvsL) {
                pPush.call(rem, 0);
                remL += 1;
            }

            do {
                // 'next' is how many times the divisor goes into current remainder.
                for (next = 0; next < 10; next += 1) {
                    // Compare divisor and remainder.
                    remL = toLength(rem.length);
                    if (dvsL !== remL) {
                        if (dvsL > remL) {
                            cmp = 1;
                        } else {
                            cmp = -1;
                        }
                    } else {
                        for (remI = 0, cmp = 0; remI < dvsL; remI += 1) {
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
                            pShift.call(rem);
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
                qc.shift();
                q.e -= 1;
            }

            // Round?
            if (qi > digits) {
                rnd.call(q, dp, rm, !$isUndefined(rem[0]));
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
         * y= times.call(x, 3)             // '1.8'
         * times.call(Big('7e+500', y)     // '1.26e+501'
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

            a = toLength(xc.length);
            b = toLength(yc.length);
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
            for (c = [], c.length = j = a + b; j; c[j] = 0) {
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
                pShift.call(c);
            }

            // Remove trailing zeros.
            for (i = c.length - 1; !c[i]; i -= 1) {
                pPop.call(c);
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
         * minus.call(x, 0.1)         // '0.2'
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

                return plus.call(this, y);
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

                pReverse.call(t);
                for (b = a; b; b -= 1) {
                    pPush.call(t, 0);
                }

                pReverse.call(t);
            } else {
                // Exponents equal. Check digit by digit.
                xcL = toLength(xc.length);
                ycL = toLength(yc.length);
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
            i = toLength(xc.length);
            j = toLength(yc.length);
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
                pPop.call(xc);
                b -= 1;
            }

            // Remove leading zeros and adjust exponent accordingly.
            while (xc[0] === 0) {
                xc.shift();
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
         * y = plus.call(x, 0.2)                  // '0.3'
         * plus.call(plus.call(Big(0.7), x), y)   // '1'
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

                return minus.call(this, y);
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

                pReverse.call(t);
                while (a) {
                    pPush.call(t, 0);
                    a -= 1;
                }

                pReverse.call(t);
            }

            // Point xc to the longer array.
            if (toLength(xc.length) - toLength(yc.length) < 0) {
                t = yc;
                yc = xc;
                xc = t;
            }

            a = yc.length;
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
                pUnshift.call(xc, b);
                ye += 1;
            }

            // Remove trailing zeros.
            for (a = toLength(xc.length) - 1; xc[a] === 0; a -= 1) {
                xc.pop();
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
         * cmp.call(x, y)                   // 1
         * cmp.call(y, x.minus(1))          // 0
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

            k = xc.length;
            l = yc.length;
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
         * mod.call(x, 0.9)           // '0.1'
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
            yGTx = cmp.call(y, this) === 1;
            this.s = a;
            y.s = b;
            if (yGTx) {
                rtn = new this.constructor(this);
            } else {
                x = div.call(this, y, 0, 0);
                rtn = minus.call(this, times.call(x, y));
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
                if (!isInstance(this, Big)) {
                    if (toLength(arguments.length) === 0) {
                        return bigFactory();
                    }

                    rtn = new Big(n);
                } else {
                    // set the attributes of the properties on this {@link module:util-x~bigobject}
                    defineProperty(this, 's', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    defineProperty(this, 'e', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    defineProperty(this, 'c', {
                        writable: true,
                        configurable: true,
                        enumerable: false
                    });

                    // set the values of the properties on this {@link module:util-x~bigobject}
                    if (isInstance(n, Big) || isBigDuck(n)) {
                        // Duplicate.
                        this.s = n.s;
                        this.e = n.e;
                        if (n.c === null) {
                            this.c = n.c;
                        } else {
                            this.c = n.c.slice();
                        }
                    } else {
                        parse.call(this, n);
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
            defineProperty(Big.prototype, 'abs', {
                value: function () {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'cmp', {
                value: function (y) {
                    return cmp.call(this, y);
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
            defineProperty(Big.prototype, 'div', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'eq', {
                value: function (y) {
                    return !cmp.call(this, y);
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
            defineProperty(Big.prototype, 'gt', {
                value: function (y) {
                    return cmp.call(this, y) > 0;
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
            defineProperty(Big.prototype, 'gte', {
                value: function (y) {
                    return cmp.call(this, y) > -1;
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
            defineProperty(Big.prototype, 'lt', {
                value: function (y) {
                    return cmp.call(this, y) < 0;
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
            defineProperty(Big.prototype, 'lte', {
                value: function (y) {
                    return cmp.call(this, y) < 1;
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
            defineProperty(Big.prototype, 'minus', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'sub', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
                    return Big.prototype.minus.apply(this, $slice(arguments));
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
            defineProperty(Big.prototype, 'mod', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'plus', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'add', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
                    return Big.prototype.plus.apply(this, $slice(arguments));
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
            defineProperty(Big.prototype, 'pow', {
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
                            y = times.call(y, x);
                        }

                        /*jslint bitwise: true */
                        exp >>= 1;
                        /*jslint bitwise: false */
                        if (exp) {
                            x = times.call(x, x);
                        }
                    } while (exp);

                    if (isNeg) {
                        return div.call(one, y);
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
            defineProperty(Big.prototype, 'round', {
                value: function (dp, rm) {
                    var length = toLength(arguments.length);

                    if (length === 0 || dp === null) {
                        dp = 0;
                    } else if (!isIntegerInRange(dp, 0, MAX_DP)) {
                        throw new BigError('!round!');
                    }

                    if (length < 2) {
                        rm = this.constructor.RM;
                    }

                    return rnd.call(new this.constructor(this), dp, rm);
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
            defineProperty(Big.prototype, 'sqrt', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
                    i = mSqrt(bigToString.call(this));
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

                        r = new this.constructor($toString(mSqrt(estimate)));
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
                        r = times.call(half, plus.call(approx, div.call(this, approx, dp)));
                    } while ($join($slice(approx.c, 0, i), '') !== $join($slice(r.c, 0, i), ''));

                    return rnd.call(r, this.constructor.DP, this.constructor.RM);
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
            defineProperty(Big.prototype, 'times', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
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
            defineProperty(Big.prototype, 'mul', {
                value: function (y) {
                    /*jslint unparam:true */
                    /*jshint unused:false */
                    return Big.prototype.times.apply(this, $slice(arguments));
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
            defineProperty(Big.prototype, 'toString', {
                value: function () {
                    return bigToString.call(this);
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
            defineProperty(Big.prototype, 'valueOf', {
                value: function () {
                    return bigToString.call(this, true);
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
            defineProperty(Big.prototype, 'toJSON', {
                value: function () {
                    return bigToString.call(this, true);
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
            defineProperty(Big.prototype, 'toExponential', {
                value: function (dp) {
                    if (toLength(arguments.length) === 0) {
                        dp = toLength(this.c.length) - 1;
                    } else if (!isIntegerInRange(dp, 0, MAX_DP)) {
                        throw new BigError('!toExp!');
                    }

                    return format.call(this, dp, 1);
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
            defineProperty(Big.prototype, 'toFixed', {
                value: function (dp) {
                    var preventExp = true,
                        str;

                    // Prevent the possibility of exponential notation.
                    if (toLength(arguments.length) === 0) {
                        str = bigToString.call(this, false, preventExp);
                    } else if (isIntegerInRange(dp, 0, MAX_DP)) {
                        str = format.call(this, this.e + dp, null, preventExp);
                        // (-0).toFixed() is '0', but (-0.1).toFixed() is '-0'.
                        // (-0).toFixed(1) is '0.0', but (-0.01).toFixed(1) is '-0.0'.
                        if (this.s < 0 && this.c[0] && pSIndexOf.call(str, '-') < 0) {
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
            defineProperty(Big.prototype, 'toPrecision', {
                value: function (sd) {
                    if (toLength(arguments.length) === 0) {
                        return bigToString.call(this);
                    }

                    if (!isIntegerInRange(sd, 1, MAX_DP)) {
                        throw new BigError('!toPre!');
                    }

                    return format.call(this, sd - 1, 2);
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
            defineProperty(Big.prototype, 'classId', {
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
            defineProperty(Big, 'DP', {
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
            defineProperty(Big, 'RM', {
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
            defineProperty(Big, 'version', {
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
            defineProperty(Big.prototype, 'version', {
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
            defineProperty(Big, 'isBig', {
                value: function (inputArg) {
                    return isInstance(inputArg, Big);
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
            defineProperty(Big, 'isBigSibling', {
                value: function (inputArg) {
                    return !isInstance(inputArg, Big) && isBigDuck(inputArg);
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
            defineProperty(Big, 'BigError', {
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
            if (!isInstance(this, AssertionError)) {
                rtn = new AssertionError(opts);
            } else {
                if (!isPlainObject(opts)) {
                    opts = {};
                }

                if (typeof opts.message !== 'string') {
                    opts.message = '';
                }

                if (typeof opts.operator !== 'string') {
                    opts.operator = '';
                }

                if (!isFunction(opts.stackStartFunction)) {
                    opts.stackStartFunction = AssertionError;
                }

                assertCustomError.call(this, opts.message, opts.stackStartFunction);
                defineProperties(this, {
                    actual: assign({
                        value: opts.actual
                    }, propNotEnumerable),

                    expected: assign({
                        value: opts.expected
                    }, propNotEnumerable),

                    operator: assign({
                        value: opts.operator
                    }, propNotEnumerable)
                });
            }

            return rtn;
        }

        defineProperties(AssertionError, {
            /**
             * @name module:util-x~AssertionError.version
             * @readonly
             * @const
             * @type {string}
             */
            version: assign({
                value: '0.2.0'
            }, propConstant)
        });

        inherits(AssertionError, assertCustomError);

        defineProperties(AssertionError.prototype, {
            /**
             * @name module:util-x~AssertionError.prototype.classId
             * @readonly
             * @const
             * @type {string}
             */
            classId: assign({
                value: assertClassId
            }, propConstant),

            /**
             * @name module:util-x~AssertionError.prototype.version
             * @readonly
             * @const
             * @type {string}
             */
            version: assign({
                value: '0.2.0'
            }, propConstant),

            /**
             * function module:util-x~AssertionError.prototype.toString
             * @returns {string}
             */
            toString: assign({
                value: function () {
                    var theString;

                    if (typeof this.message === 'string' && this.message.length) {
                        theString = this.name + ': ' + truncate(this.message, maxMessageLength);
                    } else if (isInstance(this, AssertionError)) {
                        theString = this.name + ': ';
                        theString += truncate(stringify(this.actual, exports.customErrorReplacer), maxMessageLength) + ' ';
                        theString += this.operator + ' ';
                        theString += exports.String.truncate(stringify(this.expected, exports.customErrorReplacer), maxMessageLength);
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

            if (isRegExp(expected) && instanceOf(actual, Error)) {
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

            if (instanceOf(actual, expected)) {
                return true;
            }

            if (isFunction(expected)) {
                storeState = exports.normaliseErrorIEToStringState();
                if (storeState === false) {
                    exports.normaliseErrorIEToStringOn();
                }

                val = expected.call({}, actual);
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
            if (!isFunction(stackStartFunction)) {
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

            if (!isFunction(stackStartFunction)) {
                if (isFunction(message)) {
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

            defineProperties(assert, {
                AssertionError: assign({
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

                factory: assign({
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
                fail: assign({
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
                ok: assign({
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
                notOk: assign({
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
                equal: assign({
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
                notEqual: assign({
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
                strictEqual: assign({
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
                notStrictEqual: assign({
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
                throws: assign({
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
                doesNotThrow: assign({
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
                ifError: assign({
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
                deepEqual: assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (!deepEqual(actual, expected)) {
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
                notDeepEqual: assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (deepEqual(actual, expected)) {
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
                deepStrictEqual: assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (!deepStrictEqual(actual, expected)) {
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
                notDeepStrictEqual: assign({
                    value: function (actual, expected, message, stackStartFunction) {
                        if (deepStrictEqual(actual, expected)) {
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

            if (isPlainObject(utilx[key1])) {
                $forEach($objectKeys(exports[key1]), function (key2) {
                    if (!isPlainObject(exports[key1][key2])) {
                        if (exports[key1][key2] !== base[key1][key2]) {
                            if (!(exports.Number.isNaN(utilx[key1][key2]) && exports.Number.isNaN(base[key1][key2]))) {
                                conlog(key1 + '.' + key2);
                                defineProperty(global[key1], key2, assign({
                                    value: utilx[key1][key2]
                                }, propNotEnumerable));
                            }
                        }
                    }

                    if (isPlainObject(exports[key1][key2])) {
                        $forEach($objectKeys(exports[key1][key2]), function (key3) {
                            if (!isPlainObject(exports[key1][key2][key3]) && exports[key1][key2][key3] !== base[key1][key2][key3]) {
                                if (key2 === 'proto') {
                                    conlog(key1, key1 + '.prototype.' + key3);
                                    defineProperty(global[key1].prototype, key3, assign({
                                        value: utilx[key1][key2][key3]
                                    }, propNotEnumerable));
                                } else {
                                    conlog(key1, key1 + '.' + key2 + '.' + key3);
                                    defineProperty(global[key1][key2], key3, assign({
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
        defineProperty(global, 'Big', assign({
            value: BigNum()
        }, propNotEnumerable));
        /*jslint newcap: false */

        defineProperty(global, 'assert', assign({
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
        var fnLen = toLength(throwIfNotFunction(fn).length),
            anLen,
            args;

        if (isArray(fn.argNames)) {
            anLen = toLength(fn.argNames.length);
            if (anLen < fnLen) {
                throw new Error('argNames are fewer than function arguments.');
            }

            args = $slice(fn.argNames, 0, mMin(anLen, fnLen));
            args = $map(args, function (name) {
                return '$' + name;
            });

            args = $join(args, ', ');
        } else {
            args = bindArgs(toLength(fnLen));
        }

        /*jslint evil: true */
        return new Function('fn', 'slice', 'return function (' + args + ') { return fn.apply(this, slice(arguments)); }')(fn, $slice);
    }

    /**
     * @private
     * @function module:util-x~provideItem
     * @param {*} item
     * @returns {*} The item that the argument provides.
     */
    function provideItem(item) {
        if (!$isPrimitive(item)) {
            if (isPlainObject(item)) {
                item = {};
            } else if (isFunction(item)) {
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
        defineProperty(to, key, assign({
            value: provideItem(value)
        }, propNotEnumerable));
    }

    /**
     * @private
     * @function module:util-x~addMethodsList
     * @param {Object} object
     */
    function addMethodsList(object) {
        if (!pHasOwn.call(object, 'methods')) {
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
            if (isPlainObject(exports[key1])) {
                addMethodsList(utilx[key1]);
                $forEach($objectKeys(exports[key1]), function (key2) {
                    defineItem(utilx[key1], key2, exports[key1][key2]);
                    if (isPlainObject(exports[key1][key2])) {
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
        defineProperty(utilx, 'Big', assign({
            value: BigNum()
        }, propNotEnumerable));
        /*jslint newcap: false */

        defineProperty(utilx, 'assert', assign({
            value: exports.assert.factory()
        }, propNotEnumerable));

        defineProperty(utilx, 'version', propConstant);

        defineProperties(utilx.Number, {
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

    if (typeOf(global) !== 'object') {
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
        defineProperty(global, 'utilx', assign({
            value: exports.factory()
        }, propNotEnumerable));
    }

    // No longer required - trash early.
    testTemp = null;
}((typeof window === 'object' && window) ||
    (typeof self === 'object' && self) ||
    (typeof global === 'object' && global) ||
    (typeof this === 'object' && this) || {},
    typeof module === 'object' && module,
    (typeof define === 'function' || false) && define));
