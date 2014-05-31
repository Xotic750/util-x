/**
 * @file {@link @@HOMEPAGE @@MODULE}. @@DESCRIPTION.
 * @version @@VERSION
 * @author @@AUTHORNAME <@@AUTHOREMAIL>
 * @copyright @@COPYRIGHT @@AUTHORNAME
 * @license {@link <@@LICLINK> @@LICENSE}
 * @module @@MODULE
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

/*global window, module, define */
/*jslint maxlen: 120 */

/**
 * Type whose sole value is the undefined value
 * @typedef {undefined} undefined
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined
 */

/**
 * A regular expression object for matching text with a pattern.
 * @typedef {Object} null
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null
 */

/**
 * Type consisting of the primitive values.
 * @typedef {(null|undefined|boolean|string|number)} primitive
 * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
 */

/**
 * A number or string to be used as a number.
 * @typedef {(number|string)} NumberLike
 */

/**
 * A string or number to be used as a string.
 * @typedef {(string|number)} StringLike
 */

/**
 * An Array-like object corresponding to the arguments passed to a function.
 * @typedef {Arguments} Arguments
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions_and_function_scope/arguments
 */

/**
 * Host objects that are of an array structure.
 * @typedef {(Array|Arguments)} Arrays
 */

/**
 * Objects that are array like, in that they are an integer indexed list
 * that have a length property which is integer between 0 and 2^32-1 (inclusive)
 * @typedef {(Arrays|Object)} ArrayLike
 */

/**
 * @private
 * @namespace globalThis
 */

/**
 * @private
 * @name Undefined
 * @type {undefined}
 */
(function (globalThis, window, module, define, base, Undefined) {
    'use strict';

    /**
     * @private
     * @namespace {Object} base
     */
    base = {};

    /**
     * @private
     * @name base.str
     * @type {Object.<string, string>}
     */
    base.str = {
        proto: '__proto__',
        defineGetter: '__defineGetter__',
        defineSetter: '__defineSetter__',
        lookupGetter: '__lookupGetter__',
        lookupSetter: '__lookupSetter__'
    };

    /**
     * @private
     * @name base.props
     * @type {Object.<string, *>}
     */
    base.props = {};

    /**
     * @private
     * @name base.props.shadowed
     * @type {Array.<string>}
     */
    base.props.shadowed = [
        'toString',
        'toLocaleString',
        'valueOf',
        'hasOwnProperty',
        'isPrototypeOf',
        'propertyIsEnumerable',
        'constructor'
    ];

    /**
     * @private
     * @name base.props.unwantedError
     * @type {Array.<string>}
     */
    base.props.unwantedError = [
        'fileName',
        'lineNumber',
        'columnNumber',
        'name',
        'message',
        'stack',
        'arguments',
        'type'
    ];

    /**
     * @private
     * @name base.classString
     * @type {Object.<string, string>}
     */
    base.classString = {
        arguments: '[object Arguments]',
        Function: '[object Function]',
        object: '[object Object]',
        Undefined: '[object Undefined]',
        Null: '[object Null]',
        error: '[object Error]',
        regexp: '[object RegExp]',
        array: '[object Array]',
        date: '[object Date]',
        string: '[object String]',
        Boolean: '[object Boolean]',
        number: '[object Number]'
    };

    /**
     * @private
     * @name base.properties
     * @type {Object.<string, *>}
     */
    base.properties = {};

    /**
     * @private
     * @name base.properties.constant
     * @type {Object.<string, boolean>}
     */
    base.properties.constant = {
        enumerable: false,
        writable: false,
        configurable: false
    };

    /**
     * @private
     * @name base.properties.enumerable
     * @type {Object.<string, boolean>}
     */
    base.properties.notEnumerable = {
        enumerable: false,
        writable: true,
        configurable: true
    };

    /**
     * @private
     * @name eval
     * @function
     * @param {string} inputArg
     * @returns {*}
     */
    /*jslint evil:true */
    base.eval = eval;
    /*jslint evil:false */

    /**
     * @private
     * @name isNaN
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    base.isNaN = isNaN;

    /**
     * @private
     * @name isFinite
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    base.isFinite = isFinite;

    /**
     * @private
     * @name parseInt
     * @function
     * @param {StringLike} inputArg
     * @returns {number}
     */
    base.parseInt = parseInt;

    /**
     * @private
     * @name parseFloat
     * @function
     * @param {StringLike} inputArg
     * @returns {number}
     */
    base.parseFloat = parseFloat;

    /**
     * Math is a built-in object that has properties and methods for mathematical constants and functions.
     * Not a function object.
     * @ignore
     * @namespace Math
     * @external
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
     */

    /**
     * @private
     * @name base.Math
     * @type {Object.<string, Function>}
     */
    base.Math = {
        sign: Math.sign,
        min: Math.min,
        max: Math.max,
        floor: Math.floor,
        ceil: Math.ceil,
        abs: Math.abs,
        random: Math.random
    };

    /**
     * The JSON object contains methods for parsing JavaScript Object Notation (JSON) and converting values to JSON.
     * It can't be called or constructed, and aside from its two method properties it has
     * no interesting functionality of its own.
     * @ignore
     * @namespace JSON
     * @external
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON
     */

    /**
     * @private
     * @name base.JSON
     * @type {Object.<string, Function>}
     */
    base.JSON = {};
    if (typeof JSON === 'object') {
        base.JSON.parse = JSON.parse;
        base.JSON.stringify = JSON.stringify;
    }

    /**
     * A basic javascript object.
     * @typedef {Object} Object
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
     */

    /**
     * @private
     * @name {Object} base.Object
     * @type {Object.<string, (Function|Object)>}
     */
    /*jslint evil: true */
    base.Object = {
        Ctr: Object,
        proto: Object.prototype,
        assign: Object.assign,
        create: Object.create,
        defineProperties: Object.defineProperties,
        defineProperty: Object.defineProperty,
        freeze: Object.freeze,
        getOwnPropertyDescriptor: Object.getOwnPropertyDescriptor,
        getOwnPropertyNames: Object.getOwnPropertyNames,
        getPrototypeOf: Object.getPrototypeOf,
        is: Object.is,
        isExtensible: Object.isExtensible,
        isFrozen: Object.isFrozen,
        isSealed: Object.isSealed,
        keys: Object.keys,
        preventExtensions: Object.preventExtensions,
        seal: Object.seal,
        setPrototypeOf: Object.setPrototypeOf,
        defineGetter: Object.prototype[base.str.defineGetter],
        defineSetter: Object.prototype[base.str.defineSetter],
        lookupGetter: Object.prototype[base.str.lookupGetter],
        lookupSetter: Object.prototype[base.str.lookupSetter],
        eval: Object.prototype.eval,
        hasOwn: Object.prototype.hasOwnProperty,
        isPrototypeOf: Object.prototype.isPrototypeOf,
        propertyIsEnumerable: Object.prototype.propertyIsEnumerable,
        toLocaleString: Object.prototype.toLocaleString,
        toSource: Object.prototype.toSource,
        toString: Object.prototype.toString,
        unwatch: Object.prototype.unwatch,
        valueOf: Object.prototype.valueOf,
        watch: Object.prototype.watch
    };
    /*jslint evil: false */

    /**
     * A javascript array object.
     * @typedef {Array} Array
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
     */

    /**
     * @private
     * @name base.Array
     * @type {Object.<string, (Function|Object)>}
     */
    base.Array = {
        Ctr: Array,
        proto: Array.prototype,
        isArray: Array.isArray,
        of: Array.of,
        from: Array.from,
        concat: Array.prototype.concat,
        every: Array.prototype.every,
        filter: Array.prototype.filter,
        find: Array.prototype.find,
        findIndex: Array.prototype.findIndex,
        forEach: Array.prototype.forEach,
        indexOf: Array.prototype.indexOf,
        join: Array.prototype.join,
        lastIndexOf: Array.prototype.lastIndexOf,
        map: Array.prototype.map,
        pop: Array.prototype.pop,
        push: Array.prototype.push,
        reduce: Array.prototype.reduce,
        reduceRight: Array.prototype.reduceRight,
        reverse: Array.prototype.reverse,
        shift: Array.prototype.shift,
        slice: Array.prototype.slice,
        some: Array.prototype.some,
        sort: Array.prototype.sort,
        splice: Array.prototype.splice,
        toString: Array.prototype.toString,
        unshift: Array.prototype.unshift
    };

    /**
     * Set of all possible String values.
     * @typedef {string} string
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/string
     */

    /**
     * @private
     * @name base.String
     * @type {Object.<string, (Function|Object|Array)>}
     */
    base.String = {
        Ctr: String,
        proto: String.prototype,
        fromCharCode: String.fromCharCode,
        fromCodePoint: String.fromCodePoint,
        anchor: String.prototype.anchor,
        charAt: String.prototype.charAt,
        charCodeAt: String.prototype.charCodeAt,
        codePointAt: String.prototype.codePointAt,
        concat: String.prototype.concat,
        contains: String.prototype.contains,
        endsWith: String.prototype.endsWith,
        indexOf: String.prototype.indexOf,
        lastIndexOf: String.prototype.lastIndexOf,
        link: String.prototype.link,
        localeCompare: String.prototype.localeCompare,
        match: String.prototype.match,
        normalize: String.prototype.normalize,
        repeat: String.prototype.repeat,
        replace: String.prototype.replace,
        search: String.prototype.search,
        slice: String.prototype.slice,
        split: String.prototype.split,
        startsWith: String.prototype.startsWith,
        substr: String.prototype.substr,
        substring: String.prototype.substring,
        toLocaleLowerCase: String.prototype.toLocaleLowerCase,
        toLocaleUpperCase: String.prototype.toLocaleUpperCase,
        toLowerCase: String.prototype.toLowerCase,
        toString: String.prototype.toString,
        toUpperCase: String.prototype.toUpperCase,
        trim: String.prototype.trim,
        trimLeft: String.prototype.trimLeft,
        trimRight: String.prototype.trimRight,
        valueOf: String.prototype.valueOf
    };

    /**
     * @private
     * @name base.String.whiteSpaces
     * @type {Array.<number>}
     */
    base.String.whiteSpaces = [
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

    /**
     * Set of all possible Number values including the special Not-a-Number (NaN) values, positive infinity,
     * and negative infinity.
     * @typedef {number} number
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/number
     */

    /**
     * @private
     * @name base.Number
     * @type {Object.<string, (Function|Object|number)>}
     */
    base.Number = {
        Ctr: Number,
        proto: Number.prototype,
        EPSILON: Number.EPSILON,
        MAX_VALUE: Number.MAX_VALUE,
        MIN_VALUE: Number.MIN_VALUE,
        NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
        NaN: Number.NaN,
        POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
        isFinite: Number.isFinite,
        isInteger: Number.isInteger,
        isNaN: Number.isNaN,
        parseFloat: Number.parseFloat,
        parseInt: Number.parseInt,
        toInteger: Number.toInteger,
        toExponential: Number.prototype.toExponential,
        toFixed: Number.prototype.toFixed,
        toLocaleString: Number.prototype.toLocaleString,
        toPrecision: Number.prototype.toPrecision,
        toString: Number.prototype.toString,
        valueOf: Number.prototype.valueOf
    };

    /**
     * Type consisting of the {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive}
     * values true and false
     * @typedef {boolean} boolean
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/boolean
     */

    /**
     * @private
     * @name base.Boolean
     * @type {Object.<string, (Function|Object)>}
     */
    base.Boolean = {
        Ctr: Boolean,
        proto: Boolean.prototype,
        toString: Boolean.prototype.toString,
        valueOf: Boolean.prototype.valueOf
    };

    /**
     * In JavaScript every function is actually a Function object.
     * @typedef {Function} Function
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
     */

    /**
     * @private
     * @name base.Function
     * @type {Object.<string, (Function|Object)>}
     */
    base.Function = {
        Ctr: Function,
        proto: Function.prototype,
        apply: Function.prototype.apply,
        bind: Function.prototype.bind,
        call: Function.prototype.call,
        toString: Function.prototype.toString
    };

    /**
     * A regular expression object for matching text with a pattern.
     * @typedef {RegExp} RegExp
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
     */

    /**
     * @private
     * @name base.RegExp
     * @type {Object.<string, (Function|Object|RegExp)>}
     */
    base.RegExp = {
        Ctr: RegExp,
        proto: RegExp.prototype,
        exec: RegExp.prototype.exec,
        test: RegExp.prototype.test,
        toString: RegExp.prototype.toString,
        splitNewLine: new RegExp('\\r\\n|\\n'),
        plusMinus: new RegExp('^[+\\-]?'),
        notDigits: new RegExp('^\\d+$'),
        testStr: new RegExp('test'),
        escapeThese: new RegExp('[\\[\\](){}?*+\\^$\\\\.|]', 'g'),
        beginsFunction: new RegExp('^\\s*\\bfunction\\b'),
        replacementToken: new RegExp('\\$(?:\\{(\\$+)\\}|(\\d\\d?|[\\s\\S]))', 'g'),
        getNativeFlags: new RegExp('\\/([a-z]*)$', 'i'),
        clipDuplicates: new RegExp('([\\s\\S])(?=[\\s\\S]*\\1)', 'g')
    };

    /**
     * Instance that represents a single moment in time. Date objects are based on a time value that is the number
     * of milliseconds since 1 January, 1970 UTC.
     * @typedef {Object} Date
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
     */

    /**
     * @private
     * @name base.Date
     * @type {Object.<string, (Function|Object)>}
     */
    base.Date = {
        Ctr: Date,
        proto: Date.prototype,
        now: Date.now,
        getTime: Date.prototype.getTime
    };

    /**
     * Instances of Error objects are thrown when runtime errors occur.
     * @typedef {Error} Error
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error
     */

    /**
     * @private
     * @name base.Error
     * @type {Object.<string, (Function|Object)>}
     */
    base.Error = {
        Ctr: Error,
        proto: Error.prototype
    };

    /**
     * The TypeError object represents an error when a value is not of the expected type.
     * @typedef {TypeError} TypeError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypeError
     */

    /**
     * @private
     * @name base.TypeError
     * @type {Object.<string, (Function|Object)>}
     */
    base.TypeError = {
        Ctr: TypeError,
        proto: TypeError.prototype
    };

    /**
     * The SyntaxError object represents an error when trying to interpret syntactically invalid code.
     * @typedef {SyntaxError} SyntaxError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError
     */

    /**
     * @private
     * @name base.SyntaxError
     * @type {Object.<string, (Function|Object)>}
     */
    base.SyntaxError = {
        Ctr: SyntaxError,
        proto: SyntaxError.prototype
    };

    /**
     * The RangeError object indicates an error when a value is not in the set or range of allowed values.
     * @typedef {RangeError} RangeError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RangeError
     */

    /**
     * @private
     * @name base.RangeError
     * @type {Object.<string, (Function|Object)>}
     */
    base.RangeError = {
        Ctr: RangeError,
        proto: RangeError.prototype
    };

    /**
     * The EvalError object indicates an error regarding the global eval() function.
     * @typedef {EvalError} EvalError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/EvalError
     */

    /**
     * @private
     * @name base.EvalError
     * @type {Object.<string, (Function|Object)>}
     */
    base.EvalError = {
        Ctr: EvalError,
        proto: EvalError.prototype
    };

    /**
     * The ReferenceError object represents an error when a non-existent variable is referenced.
     * @typedef {ReferenceError} ReferenceError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError
     */

    /**
     * @private
     * @name base.ReferenceError
     * @type {Object.<string, (Function|Object)>}
     */
    base.ReferenceError = {
        Ctr: ReferenceError,
        proto: ReferenceError.prototype
    };

    /**
     * The URIError object represents an error when a global URI handling function was used in a wrong way.
     * @typedef {URIError} URIError
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/URIError
     */

    /**
     * @private
     * @name base.URIError
     * @type {Object.<string, (Function|Object)>}
     */
    base.URIError = {
        Ctr: URIError,
        proto: URIError.prototype
    };


    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object, otherwise returns the argument.
     * @private
     * @name checkObjectCoercible
     * @function
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @returns {*}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
     */
    function checkObjectCoercible(inputArg) {
        var type = typeof inputArg;

        if (type === 'undefined' || inputArg === null) {
            throw new base.TypeError.Ctr('Cannot convert "' + inputArg + '" to object');
        }

        return inputArg;
    }

    /*jslint maxlen: 150 */
    /**
     * Prototypal function, as usually used in
     * {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain inheritance and the prototype chain}.
     * @typedef {Function} prototypalFunction
     * @param {...*} [varArgs]
     * @returns {*}
     */
    /*jslint maxlen: 120 */

    /**
     * Stand alone function created from a {@link prototypalFunction prototypalFunction}.
     * @typedef {Function} boundPrototypalFunction
     * @this Function.prototype.call
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * @private
     * @name ToMethod
     * @function
     * @param {prototypalFunction} protoFn
     * @returns {boundPrototypalFunction}
     */
    function toMethod(protoFn) {
        return function (thisArg) {
            return protoFn.apply(thisArg, base.Array.slice.call(arguments, 1));
        };
    }

    var testShims = true,

        /**
         * @private
         * @name toClassStr
         * @function
         * @param {*} inputArg
         * @returns {string}
         */
        toClassStr = toMethod(base.Object.toString),

        /**
         * @private
         * @name hasOwn
         * @function
         * @param {Object} object
         * @param {StringLike} property
         * @returns {boolean}
         */
        hasOwn = toMethod(base.Object.hasOwn),

        /**
         * @private
         * @name isEnumerable
         * @function
         * @param {Object} object
         * @param {string} property
         * @returns {boolean}
         */
        isEnumerable = toMethod(base.Object.propertyIsEnumerable),
        definePropertyPatch1,
        definePropertyPatch2,
        definePropertyPatch3,
        freezeObject,

        /**
         * @private
         * @name splice
         * @param {ArrayLike} array
         * @param {number} start
         * @param {number} [deleteCount]
         * @param {...*} [element]
         * @returns {Array}
         */
        splice = toMethod(base.Array.splice),

        /**
         * @private
         * @name concat
         * @function
         * @param {...Array} varArgs
         * @returns {Array}
         */
        concat = toMethod(base.Array.concat),

        /**
         * @private
         * @name push
         * @function
         * @param {ArrayLike} array
         * @param {...*} [varArgs]
         * @returns {number}
         */
        push = toMethod(base.Array.push),

        /**
         * @private
         * @name join
         * @function
         * @param {ArrayLike} inputArg
         * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
         * @param {string} [separator]
         * @returns {string}
         */
        join = toMethod(base.Array.join),

        /**
         * @private
         * @name toClassStr
         * @function
         * @param {ArrayLike} array
         * @param {...*} [varArgs]
         * @returns {number}
         */
        unshift = toMethod(base.Array.unshift),

        /**
         * @private
         * @name shift
         * @function
         * @param {arraylike} inputArg
         * @returns {*}
         */
        shift = toMethod(base.Array.shift),

        /**
         * @private
         * @name pop
         * @function
         * @param {ArrayLike} inputArg
         * @returns {*}
         */
        pop = toMethod(base.Array.pop),

        /**
         * @private
         * @name forEach
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {forEachCallback} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [thisArg]
         * @returns {undefined}
         */
        forEach = toMethod(base.Array.forEach),

        /**
         * @private
         * @name toClassStr
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {someCallback} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [thisArg]
         * @returns {boolean}
         */
        some = toMethod(base.Array.some),

        /**
         * @private
         * @name every
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {everyCallback} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [thisArg]
         * @returns {boolean}
         */
        every = toMethod(base.Array.every),

        /**
         * @private
         * @name map
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {mapCallback} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [thisArg]
         * @returns {Array}
         */
        map = toMethod(base.Array.map),

        /**
         * @private
         * @name slice
         * @function
         * @param {ArrayLike} array
         * @param {NumberLike} [start]
         * @param {NumberLike} [end]
         * @returns {Array}
         */
        slice = toMethod(base.Array.slice),

        /**
         * @private
         * @name filter
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Function} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [thisArg]
         * @returns {Array}
         */
        filter = toMethod(base.Array.filter),

        /**
         * @private
         * @name reduce
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Function} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [initialValue]
         * @returns {*}}
         */
        reduce = toMethod(base.Array.reduce),

        /**
         * @private
         * @name reduceRight
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Function} fn
         * @throws {TypeError} if fn is not a function
         * @param {*} [initialValue]
         * @returns {*}
         */
        reduceRight = toMethod(base.Array.reduceRight),

        /**
         * @private
         * @name sort
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Function} [compareFN]
         * @throws {TypeError} if compareFN is defined and is not a function
         * @returns {ArrayLike} same type as supplied array argument.
         */
        sort = base.Array.sort,

        /**
         * @private
         * @name indexOf
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Object} searchElement
         * @param {number} [fromIndex]
         * @returns {number}
         */
        indexOf = toMethod(base.Array.indexOf),

        /**
         * @private
         * @name lastIndexOf
         * @function
         * @param {ArrayLike} array
         * @throws {TypeError} if array is {@link null} or {@link undefined}
         * @param {Object} searchElement
         * @param {number} [fromIndex]
         * @returns {number}
         */
        lastIndexOf = toMethod(base.Array.lastIndexOf),

        /**
         * @private
         * @name split
         * @function
         * @param {string} stringArg
         * @param {string|RegExp} [separator]
         * @param {number} [limit]
         * @returns {Array.<string>}
         */
        split = toMethod(base.String.split),

        /**
         * @private
         * @name trim
         * @function
         * @param {string} inputArg
         * @returns {string}
         */
        trim = toMethod(base.String.trim),

        /**
         * @private
         * @name replace
         * @function
         * @param {RegExp|string} search
         * @param {string|Function} replacement
         * @returns {string}
         */
        replace = toMethod(base.String.replace),

        /**
         * @private
         * @name charAt
         * @function
         * @param {string} string
         * @param {NumberLike} position
         * @returns {string}
         */
        charAt = toMethod(base.String.charAt),

        /**
         * @private
         * @name charCodeAt
         * @function
         * @param {string} string
         * @param {NumberLike} position
         * @returns {number}
         */
        charCodeAt = toMethod(base.String.charCodeAt),

        /**
         * @private
         * @name strSlice
         * @function
         * @param {string} string
         * @param {NumberLike} [start]
         * @param {NumberLike} [end]
         * @returns {string}
         */
        strSlice = toMethod(base.String.slice),

        /**
         * @private
         * @name mMin
         * @function
         * @param {number} number
         * @returns {number}
         */
        mMin = base.Math.min,

        /**
         * @private
         * @name mMax
         * @function
         * @param {number} number
         * @returns {number}
         */
        mMax = base.Math.max,

        /**
         * @private
         * @name floor
         * @function
         * @param {number} number
         * @returns {number}
         */
        floor = base.Math.floor,

        /**
         * @private
         * @name abs
         * @function
         * @param {number} number
         * @returns {number}
         */
        abs = base.Math.abs,

        /**
         * @private
         * @name ceil
         * @function
         * @param {number} number
         * @returns {number}
         */
        ceil = base.Math.ceil,

        /**
         * @private
         * @name random
         * @function
         * @returns {number}
         */
        random = base.Math.random,

        /**
         * @private
         * @name exec
         * @function
         * @param {RegExp} regex
         * @param {string} string
         * @returns {(Array|null)}
         */
        exec = toMethod(base.RegExp.exec),

        /**
         * @private
         * @name test
         * @function
         * @param {RegExp} regex
         * @param {string} string
         * @returns {boolean}
         */
        test = toMethod(base.RegExp.test),
        correctExecNpcg,

        isStrictMode = (function () {
            return !this;
        }()),

        /**
         * @private
         * @name BindCtr
         * @constructor
         */
        BindCtr,

        /**
         * @private
         * @name bindArgs
         * @function
         * @param {number} length
         * @returns {string}
         */
        bindArgs,

        patchedIEErrorToString = false,
        hasDontEnumBug = true,
        hasFuncProtoBug = false,
        hasErrorProps,
        nonEnumProps,
        testObject1,
        testObject2,
        /**
         * @private
         * @name TestConstructor
         * @constructor
         */
        TestConstructor,
        previousIEErrorToString,
        isArgs,
        fixOpera10GetPrototypeOf,
        testValue,
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

        /** @namespace {Object} utilx */
        $ = {
            /** @namespace {Object} utilx.Boolean */
            Boolean: {
                /** @namespace {Object} utilx.Boolean.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Number */
            Number: {
                /** @namespace {Object} utilx.Number.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.String */
            String: {
                /** @namespace {Object} utilx.String.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Array */
            Array: {
                /** @namespace {Object} utilx.Array.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Object */
            Object: {
                /** @namespace {Object} utilx.Object.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Function */
            Function: {
                /** @namespace {Object} utilx.function.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Date */
            Date: {
                /** @namespace {Object} utilx.Date.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Error */
            Error: {
                /** @namespace {Object} utilx.Error.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.RegExp */
            RegExp: {
                /** @namespace {Object} utilx.RegExp.prototype */
                prototype: {}
            },

            /** @namespace {Object} utilx.Math */
            Math: {},

            /** @namespace {Object} utilx.JSON */
            JSON: {}
        };

    /**
     * +0
     * @memberof utilx.Number
     * @name POSITIVE_ZERO
     * @type {number}
     */
    $.Number.POSITIVE_ZERO = +0;

    /**
     * -0
     * @memberof utilx.Number
     * @name NEGATIVE_ZERO
     * @type {number}
     */
    $.Number.NEGATIVE_ZERO = -0;

    /**
     * 128
     * @memberof utilx.Number
     * @name WORD8
     * @type {number}
     */
    $.Number.WORD8 = 128;

    /**
     * 256
     * @memberof utilx.Number
     * @name UWORD8
     * @type {number}
     */
    $.Number.UWORD8 = 256;

    /**
     * 65536
     * @memberof utilx.Number
     * @name WORD16
     * @type {number}
     */
    $.Number.WORD16 = 32768;

    /**
     * 32768
     * @memberof utilx.Number
     * @name UWORD16
     * @type {number}
     */
    $.Number.UWORD16 = 65536;

    /**
     * 2147483648
     * @memberof utilx.Number
     * @name WORD32
     * @type {number}
     */
    $.Number.WORD32 = 2147483648;

    /**
     * 4294967296
     * @memberof utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.UWORD32 = 4294967296;

    /**
     * 4294967295
     * @memberof utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.MAX_UINT32 = 4294967295;

    /**
     * 2147483647
     * @memberof utilx.Number
     * @name MAX_INT32
     * @type {number}
     */
    $.Number.MAX_INT32 = 2147483647;

    /**
     * -2147483648
     * @memberof utilx.Number
     * @name MIN_INT32
     * @type {number}
     */
    $.Number.MIN_INT32 = -2147483648;

    /**
     * 65535
     * @memberof utilx.Number
     * @name MAX_UINT16
     * @type {number}
     */
    $.Number.MAX_UINT16 = 65535;

    /**
     * 32767
     * @memberof utilx.Number
     * @name MAX_INT16
     * @type {number}
     */
    $.Number.MAX_INT16 = 32767;

    /**
     * -32768
     * @memberof utilx.Number
     * @name MIN_INT16
     * @type {number}
     */
    $.Number.MIN_INT16 = -32768;

    /**
     * 255
     * @memberof utilx.Number
     * @name MAX_UINT8
     * @type {number}
     */
    $.Number.MAX_UINT8 = 255;

    /**
     * 127
     * @memberof utilx.Number
     * @name MAX_INT8
     * @type {number}
     */
    $.Number.MAX_INT8 = 127;

    /**
     * -128
     * @memberof utilx.Number
     * @name MIN_INT8
     * @type {number}
     */
    $.Number.MIN_INT8 = -128;

    /**
     * 9007199254740991
     * @memberof utilx.Number
     * @name MAX_INTEGER
     * @type {number}
     */
    $.Number.MAX_INTEGER = 9007199254740991;

    /**
     * -9007199254740991
     * @memberof utilx.Number
     * @name MIN_INTEGER
     * @type {number}
     */
    $.Number.MIN_INTEGER = -9007199254740991;

    /**
     * -9007199254740991
     * @memberof utilx.Number
     * @name UNSAFE_INTEGER
     * @type {number}
     */
    $.Number.UNSAFE_INTEGER = 9007199254740992;

    /**
     * Infinity
     * @memberof utilx.Number
     * @name POSITIVE_INFINITY
     * @type {number}
     */
    $.Number.POSITIVE_INFINITY = 1 / $.Number.POSITIVE_ZERO;

    /**
     * -Infinity
     * @memberof utilx.Number
     * @name NEGATIVE_INFINITY
     * @type {number}
     */
    $.Number.NEGATIVE_INFINITY = 1 / $.Number.NEGATIVE_ZERO;

    /**
     * 1.7976931348623157e+308
     * @memberof utilx.Number
     * @name MAX_VALUE
     * @type {number}
     */
    $.Number.MAX_VALUE = 1.7976931348623157e+308;

    /**
     * 5e-324
     * @memberof utilx.Number
     * @name MIN_VALUE
     * @type {number}
     */
    $.Number.MIN_VALUE = 5e-324;

    /**
     * NaN
     * @memberof utilx.Number
     * @name NaN
     * @type {number}
     */
    $.Number.NaN = $.Number.POSITIVE_ZERO / $.Number.POSITIVE_ZERO;

    /**
     * 2.220446049250313e-16
     * @memberof utilx.Number
     * @name EPSILON
     * @type {number}
     */
    $.Number.EPSILON = 2.220446049250313e-16;

    /**
     * Returns the {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive} value
     * {@link undefined}.
     * @memberof utilx.Function
     * @name noop
     * @function
     * @returns {undefined}
     */
    $.Function.noop = function () {
        return;
    };

    /**
     * Returns an arguments object of the arguments supplied.
     * @memberof utilx.Function
     * @name returnArgs
     * @function
     * @argument {...*} [varArgs]
     * @returns {Arguments}
     */
    $.Function.returnArgs = function (varArgs) {
        /*jslint unparam:true */
        /*jshint unused:false */
        return arguments;
    };

    /**
     * The abstract operation ToNumber converts its argument to a value of type Number.
     * @memberof utilx.Number
     * @name toNumber
     * @function
     * @param {*} inputArg
     * @returns {number}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.3
     */
    $.Number.toNumber = function (inputArg) {
        return +inputArg;
    };

    /**
     * Returns true if the operands are loosely equal.
     * @memberof utilx.Object
     * @name equal
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.1
     */
    $.Object.equal = function (a, b) {
        /*jslint eqeq: true */
        return a == b;
    };

    /**
     * Returns true if the operands are not loosely equal.
     * @memberof utilx.Object
     * @name notEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.2
     */
    $.Object.notEqual = function (a, b) {
        /*jslint eqeq: true */
        return a != b;
    };

    /**
     * Returns true if the operands are strictly equal with no type conversion.
     * @memberof utilx.Object
     * @name strictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4
     */
    $.Object.strictEqual = function (a, b) {
        return a === b;
    };

    /**
     * Returns true if the operands are not strictly equal with no type conversion.
     * @memberof utilx.Object
     * @name notStrictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.5
     */
    $.Object.notStrictEqual = function (a, b) {
        return a !== b;
    };

    /**
     * Returns true if the operand number is less than limit.
     * @memberof utilx.Object
     * @name lt
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.1
     */
    $.Object.lt = function (a, b) {
        return a < b;
    };

    /**
     * Returns true if the operand number is less than or equal to limit.
     * @memberof utilx.Object
     * @name lte
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.3
     */
    $.Object.lte = function (a, b) {
        return a <= b;
    };

    /**
     * Returns true if the operand number is greater than limit.
     * @memberof utilx.Object
     * @name gt
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.2
     */
    $.Object.gt = function (a, b) {
        return a > b;
    };

    /**
     * Returns true if the operand number is greater than or equal to limit.
     * @memberof utilx.Object
     * @name gte
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.4
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
     * @memberof utilx.Number
     * @name mod
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {number}
     */
    $.Number.mod = function (a, b) {
        return a % b;
    };

    /**
     * Returns a number clamped to the range set by min and max.
     * @memberof utilx.Number
     * @name clamp
     * @function
     * @param {*} number
     * @param {*} min
     * @param {*} max
     * @returns {number}
     */
    $.Number.clamp = function (number, min, max) {
        return mMin(mMax(number, min), max);
    };

    /**
     * Returns true if the operand inputArg is undefined.
     * @memberof utilx.Object
     * @name isUndefined
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isUndefined = function (inputArg) {
        var type = typeof inputArg;

        return type === 'undefined';
    };

    /**
     * Returns true if the operand inputArg is null.
     * @memberof utilx.Object
     * @name isNull
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isNull = function (inputArg) {
        return inputArg === null;
    };

    /**
     * Indicates if __proto__ is supported.
     * @private
     */
    isProtoSupported = base.Object.proto[base.str.proto] === null;

    /**
     * Returns true if the operand inputArg is undefined or null.
     * @memberof utilx.Object
     * @name isUndefinedOrNull
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isUndefinedOrNull = function (inputArg) {
        var type = typeof inputArg;

        return type === 'undefined' || inputArg === null;
    };

    /**
     * Returns true if the operand inputArg is a true.
     * @memberof utilx.Boolean
     * @name isTrue
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isTrue = function (inputArg) {
        return inputArg === true;
    };

    /**
     * Returns true if the operand inputArg is a false.
     * @memberof utilx.Boolean
     * @name isFalse
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isFalse = function (inputArg) {
        return inputArg === false;
    };

    /**
     * Returns true if the operand inputArg is a boolean.
     * @memberof utilx.Boolean
     * @name isBoolean
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isBoolean = function (inputArg) {
        return inputArg === true || inputArg === false;
    };

    /**
     * Returns true if the operand inputArg is a truthy.
     * @memberof utilx.Object
     * @name isTruthy
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isTruthy = function (inputArg) {
        return !!inputArg;
    };

    /**
     * Returns true if the operand inputArg is a falsy.
     * @memberof utilx.Object
     * @name isFalsy
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isFalsy = function (inputArg) {
        return !inputArg;
    };

    /**
     * Returns true if the operand inputArg is a Number.
     * @memberof utilx.Number
     * @name isNumber
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isNumber = function (inputArg) {
        return typeof inputArg === 'number';
    };

    /**
     * Returns true if the operand inputArg is the number 0.
     * @memberof utilx.Number
     * @name isZero
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isZero = function (inputArg) {
        return inputArg === 0;
    };

    /**
     * Returns true if the operand inputArg is the number 0 or +0.
     * @memberof utilx.Number
     * @name isPositiveZero
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isPositiveZero = function (inputArg) {
        return inputArg === 0 && (1 / inputArg) === $.Number.POSITIVE_INFINITY;
    };

    /**
     * Returns true if the operand inputArg is the number -0.
     * @memberof utilx.Number
     * @name isNegativeZero
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isNegativeZero = function (inputArg) {
        return inputArg === 0 && (1 / inputArg) === $.Number.NEGATIVE_INFINITY;
    };

    /**
     * Returns true if the operand inputArg is a string.
     * @memberof utilx.String
     * @name isString
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isString = function (inputArg) {
        return typeof inputArg === 'string';
    };

    /**
     * Returns true if the operand inputArg is a
     * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive} object.
     * @memberof utilx.Object
     * @name isPrimitive
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
     */
    $.Object.isPrimitive = function (inputArg) {
        var type = typeof inputArg;

        return inputArg === null || type === 'undefined' || inputArg === true || inputArg === false ||
                type === 'string' || type === 'number';
    };

    /**
     * Returns true if the operand inputArg is not a
     * {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive} object.
     * @memberof utilx.Object
     * @name isNotPrimitive
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2
     */
    $.Object.isNotPrimitive = function (inputArg) {
        var type = typeof inputArg;

        return inputArg !== null && type !== 'undefined' && inputArg !== true && inputArg !== false &&
                type !== 'string' && type !== 'number';
    };

    /**
     * Returns true if the operand inputArg is typeof Object.
     * @memberof utilx.Object
     * @name isTypeOfObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    if (typeof base.RegExp.testStr === 'object') {
        $.Object.isTypeOfObject = function (inputArg) {
            return typeof inputArg === 'object';
        };
    } else {
        $.Object.isTypeOfObject = function (inputArg) {
            return typeof inputArg === 'object' || $.RegExp.isRegExp(inputArg);
        };
    }

    /**
     * Returns true if the operand inputArg is of type Object but not if null.
     * @memberof utilx.Object
     * @name isTypeObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isTypeObject = function (inputArg) {
        return inputArg !== null && $.Object.isTypeOfObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a boolean object.
     * @memberof utilx.Boolean
     * @name isBooleanObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isBooleanObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.Boolean;
    };

    /**
     * Returns true if the operand inputArg is a boolean object with the value of true.
     * @memberof utilx.Boolean
     * @name isTrueObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isTrueObject = function (inputArg) {
        return $.Boolean.isBooleanObject(inputArg) && base.Boolean.valueOf.call(inputArg) === true;
    };

    /**
     * Returns true if the operand inputArg is a boolean object with the value of false.
     * @memberof utilx.Boolean
     * @name isFalseObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isFalseObject = function (inputArg) {
        return $.Boolean.isBooleanObject(inputArg) && base.Boolean.valueOf.call(inputArg) === false;
    };

    /**
     * Returns true if the operand inputArg is a string object.
     * @memberof utilx.String
     * @name isStringObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isStringObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.string;
    };

    /**
     * Returns true if the operand inputArg is a number object.
     * @memberof utilx.Number
     * @name isNumberObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isNumberObject = function (inputArg) {
        return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.number;
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object.
     * @memberof utilx.Boolean
     * @name isBooleanAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isBooleanAny = function (inputArg) {
        return inputArg === true || inputArg === false || toClassStr(inputArg) === base.classString.Boolean;
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object with the value of true.
     * @memberof utilx.Boolean
     * @name isTrueAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isTrueAny = function (inputArg) {
        return inputArg === true || $.Boolean.isTrueObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a boolean literal or object with the value of false.
     * @memberof utilx.Boolean
     * @name isFalseAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Boolean.isFalseAny = function (inputArg) {
        return inputArg === false || $.Boolean.isFalseObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is a string literal or object.
     * @memberof utilx.String
     * @name isStringAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isStringAny = function (inputArg) {
        return typeof inputArg === 'string' || toClassStr(inputArg) === base.classString.string;
    };

    /**
     * Returns true if the operand inputArg is a number literal or object.
     * @memberof utilx.Number
     * @name isNumberAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isNumberAny = function (inputArg) {
        return typeof inputArg === 'number' || toClassStr(inputArg) === base.classString.number;
    };

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object, otherwise returns the argument.
     * @memberof utilx.Object
     * @name CheckObjectCoercible
     * @function
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @returns {*}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.10
     */
    $.Object.CheckObjectCoercible = checkObjectCoercible;

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error.
     * @private
     * @function onlyCoercibleToString
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @returns {string}
     */
    function onlyCoercibleToString(inputArg) {
        return $.String.ToString(checkObjectCoercible(inputArg));
    }

    /**
     * Throws a TypeError if arguments is not a string literal otherwise returns the function.
     * @private
     * @function throwIfNotAStringAny
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link Function function}.
     * @returns {Function}
     */
    function throwIfNotAString(inputArg) {
        if (!$.String.isString(inputArg)) {
            throw new base.TypeError.Ctr(inputArg + ' is not a string literal');
        }

        return inputArg;
    }

    /**
     * Throws a TypeError if arguments is not a string object otherwise returns the function.
     * @private
     * @function throwIfNotAStringAny
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link Function function}.
     * @returns {Function}
     */
    function throwIfNotAStringObject(inputArg) {
        if (!$.String.isStringObject(inputArg)) {
            throw new base.TypeError.Ctr(inputArg + ' is not a string object');
        }

        return inputArg;
    }

    /**
     * Throws a TypeError if arguments is not any string otherwise returns the function.
     * @private
     * @function throwIfNotAStringAny
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link Function function}.
     * @returns {Function}
     */
    function throwIfNotAStringAny(inputArg) {
        if (!$.String.isStringAny(inputArg)) {
            throw new base.TypeError.Ctr(inputArg + ' is not a string');
        }

        return inputArg;
    }

    /**
     * Returns true if the operand inputArg is an empty string (ie '').
     * @memberof utilx.String
     * @name isEmpty
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isEmpty = function (inputArg) {
        return throwIfNotAString(inputArg) === '';
    };

    /**
     * Returns true if the operand inputArg is an empty string object (ie '').
     * @memberof utilx.String
     * @name isEmptyObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isEmptyObject = function (inputArg) {
        return $.String.isStringObject(throwIfNotAStringObject(inputArg)) && base.String.valueOf.call(inputArg) === '';
    };

    /**
     * Returns true if the operand inputArg is an empty string literal or object (ie '').
     * @memberof utilx.String
     * @name isEmptyAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isEmptyAny = function (inputArg) {
        return $.String.isStringAny(throwIfNotAStringAny(inputArg)) && base.String.valueOf.call(inputArg) === '';
    };

    /**
     * Returns true if the operand inputArg is a string and is not empty.
     * @memberof utilx.String
     * @name isNotEmpty
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isNotEmpty = function (inputArg) {
        return typeof throwIfNotAStringAny(inputArg) === 'string' && inputArg !== '';
    };

    /**
     * Returns true if the operand inputArg is a string object and is not empty.
     * @memberof utilx.String
     * @name isNotEmptyObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isNotEmptyObject = function (inputArg) {
        return $.String.isStringObject(throwIfNotAStringAny(inputArg)) && base.String.valueOf.call(inputArg) !== '';
    };

    /**
     * Returns true if the operand inputArg is a string literal or object and is not empty.
     * @memberof utilx.String
     * @name isNotEmptyAny
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isNotEmptyAny = function (inputArg) {
        return $.String.isStringAny(throwIfNotAStringAny(inputArg)) && base.String.valueOf.call(inputArg) !== '';
    };

    /**
     * The abstract operation converts its argument to a value of type Object
     * @memberof utilx.Object
     * @name ToObject
     * @function
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    $.Object.ToObject = function (inputArg) {
        return base.Object.Ctr(checkObjectCoercible(inputArg));
    };

    /**
     * The abstract operation converts its argument to a value of type string
     * @memberof utilx.String
     * @name ToString
     * @function
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.8
     */
    $.String.ToString = function (inputArg) {
        var type = typeof inputArg,
            val;

        if (type === 'undefined') {
            val = type;
        } else if (inputArg === null) {
            val = 'null';
        } else {
            val = base.String.Ctr(inputArg);
        }

        return val;
    };

    /**
     * Returns true if the specified property is in the specified object.
     * @memberof utilx.Object
     * @name has
     * @function
     * @param {Object} object The object that has was called upon.
     * @throws {TypeError} if object is a {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive}.
     * @param {StringLike} property A string or numeric expression representing a property name or array index.
     * @throws {TypeError} if property is not a string or a number.
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7
     */
    $.Object.has = function (object, property) {
        if (!$.String.isStringAny(property) && !$.Number.isNumberAny(property)) {
            throw new base.TypeError.Ctr('Cannot use \'has\' operator to search for \'' + property + '\' in ' + object);
        }

        return property in object;
    };

    /**
     * Returns true if the object exists and appears unaltered.
     * @private
     * @name canUse
     * @function
     * @param {Object} object The object that canUse was called upon.
     * @param {StringLike} property A string or numeric expression representing a property name or array index.
     * @throws {TypeError} if property is not a string or a number.
     * @returns {boolean}
     */
    /*
    function canUse(object, property) {
        var method;

        if ($.Object.isNotPrimitive(object) && $.Object.has(object, property)) {
            method = object[property];
            if ($.Object.isNotPrimitive(method.call) && $.Object.isNotPrimitive(method.apply)) {
                return !isEnumerable(method);
            }
        }

        return false;
    }
    */

    /**
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     * @memberof utilx.Object
     * @name isArguments
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    if (toClassStr($.Function.returnArgs()) === base.classString.arguments) {
        $.Object.isArguments = function (inputArg) {
            return toClassStr(inputArg) === base.classString.arguments;
        };
    } else {
        isArgs = function (inputArg) {
            return $.Object.isTypeObject(inputArg) && toClassStr(inputArg) === base.classString.object &&
                hasOwn(inputArg, 'callee') && hasOwn(inputArg, 'length') && typeof inputArg.length === 'number';
        };

        if (toClassStr(isEnumerable) === base.classString.Function) {
            $.Object.isArguments = function (inputArg) {
                return isArgs(inputArg) && !isEnumerable(inputArg, 'callee') && !isEnumerable(inputArg, 'length');
            };
        } else {
            $.Object.isArguments = isArgs;
        }
    }

    /**
     * Tests to see if the argument is one of the seven standard Error type prototypes.
     * @private
     * @function isErrorTypePrototype
     * @param {*} inputArg
     * @returns {boolean}
     */
    isErrorTypePrototype = function (inputArg) {
        var result;

        switch (inputArg) {
        case base.Error.proto:
            /* falls through */
        case base.TypeError.proto:
            /* falls through */
        case base.SyntaxError.proto:
            /* falls through */
        case base.RangeError.proto:
            /* falls through */
        case base.EvalError.proto:
            /* falls through */
        case base.ReferenceError.proto:
            /* falls through */
        case base.URIError.proto:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * I.e. [[Class]] A String value indicating a specification defined classification of objects.
     * @memberof utilx.Object
     * @name ToClassString
     * @function
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2
     */
    try {
        if (testShims || toClassStr() !== base.classString.Undefined ||
                toClassStr(null) !== base.classString.Null ||
                toClassStr(base.RegExp.proto) !== base.classString.regexp ||
                toClassStr(base.String.proto) !== base.classString.string ||
                toClassStr(base.Error.proto) !== base.classString.error ||
                toClassStr($.Function.returnArgs()) !== base.classString.arguments) {

            throw new Error();
        }

        $.Object.ToClassString = function (inputArg) {
            return toClassStr(inputArg);
        };
    } catch (eClass) {
        $.Object.ToClassString = function (inputArg) {
            var type = typeof inputArg,
                val;

            if (type === 'undefined') {
                val = base.classString.Undefined;
            } else if (inputArg === null) {
                val = base.classString.Null;
            } else if ($.Object.isArguments(inputArg)) {
                val = base.classString.arguments;
            } else if (inputArg === base.Number.proto) {
                val = base.classString.number;
            } else if (inputArg === base.Boolean.proto) {
                val = base.classString.Boolean;
            } else if (inputArg === base.Object.proto) {
                val = base.classString.object;
            } else if (inputArg === base.Function.proto) {
                val = base.classString.Function;
            } else if (inputArg === base.String.proto) {
                val = base.classString.string;
            } else if (inputArg === base.Date.proto) {
                val = base.classString.date;
            } else if (inputArg === base.RegExp.proto) {
                val = base.classString.regexp;
            } else if (isErrorTypePrototype(inputArg)) {
                val = base.classString.error;
            } else {
                val = toClassStr(inputArg);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is an error.
     * @memberof utilx.Error
     * @name isError
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Error.isError = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) && ($.Object.ToClassString(inputArg) === base.classString.error ||
                                                   $.Object.instanceOf(inputArg, base.Error.Ctr));
    };

    /**
     * Returns true if the operand inputArg is a RegExp.
     * @memberof utilx.RegExp
     * @name isRegExp
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.RegExp.isRegExp = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) && $.Object.ToClassString(inputArg) === base.classString.regexp &&
                    typeof inputArg.source === 'string' && (inputArg.global === true || inputArg.global === false);
    };

    /**
     * Returns true if the operand inputArg is a native Function in IE. Used by Function.isFunction.
     * @private
     * @function isIENativeFunction
     * @param {*} inputArg
     * @returns {boolean}
     */
    testValue = null;
    if ($.Object.isNotPrimitive(window) && $.Object.isNotPrimitive(window.alert)) {
        testValue = typeof window.alert.toString;
    }

    if (testValue === 'undefined' && test(base.RegExp.beginsFunction, window.alert)) {
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

            // test(base.RegExp.beginsFunction, inputArg)
            // we are looking for a function
            // and IE shows them with function
            // as first word. Eventually
            // there could be a space
            // (never happened, it does not hurt anyway)

            var val = false,
                type;

            if ($.Object.isNotPrimitive(inputArg)) {
                type = typeof inputArg.toString;
                val = type === 'undefined' && test(base.RegExp.beginsFunction, inputArg);
            }

            return val;
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
     * @returns {boolean}
     */
    try {
        /*jslint evil: true */
        base.eval('(' + base.Function.toString.call(base.Function.Ctr) + ')');
        /*jslint evil: false */
        // Opera 10 doesn't play ball so have to test the string
        testValue = '^function \\S*\\(\\) \\{ (\\[native code\\]|\\/\\* source code not available \\*\\/) \\}$';
        base.RegExp.operaNative = new RegExp(testValue);
        isNativeFunction = function (inputArg) {
            return $.Object.isNotPrimitive(inputArg) && test(base.RegExp.operaNative, inputArg);
        };
    } catch (eINF1) {
        isNativeFunction = function (inputArg) {
            var val,
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
                val = false;
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
     * @returns {boolean}
     */
    function isFunctionBasic(inputArg) {
        return $.Object.isNotPrimitive(inputArg) &&
            ($.Object.ToClassString(inputArg) === base.classString.Function ||
             (typeof inputArg === 'function' && inputArg.call && inputArg.apply));
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by Function.isFunction.
     * @private
     * @function isFunctionExtended
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isFunctionExtended(inputArg) {
        // it should be a function in any case
        // before we try to pass it to
        // Function.prototype.toString
        return $.Object.isNotPrimitive(inputArg) && isFunctionInternal(inputArg, false) && isNativeFunction(inputArg);
    }

    try {
        // native function cannot be passed
        // to native Function.prototype.toString
        // as scope to evaluate ... only IE, sure
        if ($.Object.isNotPrimitive(window) && window.alert) {
            base.Function.toString.call(window.alert);
        }

        // this function is for every other browser
        isFunctionInternal = function (inputArg, n) {
            var val = false;

            if ($.Object.isNotPrimitive(inputArg)) {
                if (n) {
                    val = isFunctionExtended(inputArg);
                } else {
                    val = isFunctionBasic(inputArg);
                }
            }

            return val;
        };
    } catch (eIFI) {
        isFunctionInternal = function (inputArg, n) {
            var val = false;

            if ($.Object.isNotPrimitive(inputArg)) {
                if (n) {
                    val = isIENativeFunction(inputArg) || isFunctionExtended(inputArg);
                } else {
                    val = isFunctionBasic(inputArg);
                }
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function.
     * @memberof utilx.Function
     * @name isFunction
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    $.Function.isFunction = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) &&
                (isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true));
    };

    /**
     * Returns true if the operand inputArg is a native Function.
     * @memberof utilx.Function
     * @name isNativeFunction
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Function.isNativeFunction = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) && $.Function.isFunction(inputArg) &&
                (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
    };

    /**
     * Returns true if the operand inputArg is an Object.
     * @memberof utilx.Object
     * @name isObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isObject = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) && $.Object.ToClassString(inputArg) === base.classString.object &&
                                !$.Function.isFunction(inputArg);
    };

    /**
     * Indicates if __defineGetter__ and __lookupSetter__ are supported.
     * @private
     */
    areGetSetSupported = $.Function.isFunction(base.Object.lookupGetter) &&
                                        $.Function.isFunction(base.Object.lookupSetter);

    /**
     * Throws a TypeError if arguments is not a function otherwise returns the function.
     * @private
     * @function throwIfNotAFunction
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link Function function}.
     * @returns {Function}
     */
    function throwIfNotAFunction(inputArg) {
        if (!$.Function.isFunction(inputArg)) {
            throw new base.TypeError.Ctr(inputArg + ' is not a function');
        }

        return inputArg;
    }

    /**
     * Throws a TypeError if arguments is a function otherwise returns the function.
     * @private
     * @function throwIfAFunction
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is a {@link Function function}.
     * @returns {Function}
     */
    function throwIfAFunction(inputArg) {
        if ($.Function.isFunction(inputArg)) {
            throw new base.TypeError.Ctr(inputArg + ' is a function');
        }

        return inputArg;
    }

    /**
     * Throws a TypeError if the operand inputArg is not an object or not a function,
     * otherise returns the object.
     * @private
     * @function throwIfIsPrimitive
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not an object or a function.
     * @returns {(Object|Function)}
     */
    function throwIfIsPrimitive(inputArg) {
        if ($.Object.isPrimitive(inputArg)) {
            throw new base.TypeError.Ctr('called on non-object');
        }

        return inputArg;
    }

    /**
     * Throws a TypeError if the operand inputArg is the globalThis object,
     * otherise returns the globalThis object.
     * @private
     * @function throwIfGlobalThis
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is the globalThis object.
     * @returns {Object}
     */
    /*
    function throwIfGlobalThis(inputArg) {
        if (inputArg === globalThis) {
            throw new base.TypeError.Ctr('called on the global execution context');
        }

        return inputArg;
    }
    */

    /**
     * @private
     * @name iterBody
     * @function
     */
    function iterBody(object, index, has, fn, thisArg) {
        var item;

        if (object) {
            if (toClassStr(object) === base.classString.string) {
                item = charAt(object, index);
            } else {
                item = object[index];
            }
        }

        if (has) {
            if (index in object) {
                if (fn.call(thisArg, item, index, object)) {
                    return true;
                }
            }
        } else {
            if (fn.call(thisArg, item, index, object)) {
                return true;
            }
        }

        return false;
    }

    /**
     * @private
     * @name iter
     * @function
     */
    function iter(object, has, start, length, reverse, fn, thisArg) {
        var index;

        if (reverse) {
            for (index = start; index >= length; index -= 1) {
                if (iterBody(object, index, has, fn, thisArg)) {
                    break;
                }
            }
        } else {
            for (index = start; index < length; index += 1) {
                if (iterBody(object, index, has, fn, thisArg)) {
                    break;
                }
            }
        }

        return thisArg;
    }

    /**
     * @private
     * @name enumer
     * @function
     */
    function enumer(object, own, fn, thisArg) {
        var prop,
            item;

        /*jslint forin: true */
        for (prop in object) {
            item = object[prop];
            if (own) {
                if (hasOwn(object, prop)) {
                    if (fn.call(thisArg, item, prop, object)) {
                        break;
                    }
                }
            } else {
                if (fn.call(thisArg, item, prop, object)) {
                    break;
                }
            }
        }

        return thisArg;
    }

    /**
     * Target function.
     * @typedef {Function} bindTargetFunction
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * Bound function.
     * @typedef {Function} boundFunction
     * @this thisArg
     * @param {...*} [varArgs]
     * @returns {*}
     */

    /**
     * The bind() function creates a new function (a bound function) with the same function body
     * (internal call property in ECMAScript 5 terms) as the function it is being called on
     * (the bound function's target function) with the this value bound to thisArg,
     * which cannot be overridden.
     * @memberof utilx.Function
     * @name bind
     * @function
     * @param {bindTargetFunction} fn
     * @throws {TypeError} if fn is not a {@link Function function}.
     * @param {*} thisArg the this argument to be bound to the new function
     * @param {...*} [varArgs] any arguments to be bound to the new function.
     * @returns {boundFunction}.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.Function.bind)) {
            throw new Error();
        }

        testObject1 = [1, 2, 3];
        TestConstructor = base.Function.bind.call(function () {
            return testObject1;
        }, null);

        testObject2 = new TestConstructor();
        if (testObject1 !== testObject2) {
            throw new Error();
        }

        testObject1 = function (x) {
            this.name = x || 'A';
        };

        TestConstructor = base.Function.bind.call(testObject1, null, 'B');
        testObject2 = new TestConstructor();
        if (!(testObject2 instanceof testObject1) || !(testObject2 instanceof TestConstructor)) {
            throw new Error();
        }

        $.Function.bind = base.Function.bind.call(base.Function.call, base.Function.bind);
    } catch (eBind) {
        BindCtr = function () {
            return;
        };

        bindArgs = function (length) {
            return join(iter(null, false, 0, mMax(0, length), false, function (it, idx) {
                /*jslint unparam: true */
                /*jshint unused: false */
                this[idx] = '$' + idx;
            }, []), ',');
        };

        $.Function.prototype.bind = function (thisArg, varArgs) {
            /*jslint unparam:true */
            /*jshint unused:false */
            var fn = throwIfNotAFunction(this),
                args = slice(arguments, 1),
                bound = base.Function.Ctr('binder', 'return function(' + bindArgs(fn.length - args.length) +
                    '){return binder.apply(this,arguments);}')(function () {
                    var binderArgs = concat(args, slice(arguments)),
                        result;

                    if (this instanceof bound) {
                        result = fn.apply(this, binderArgs);
                        if (base.Object.Ctr(result) === result) {
                            return result;
                        }

                        return this;
                    }

                    return fn.apply(thisArg, binderArgs);
                });


            if ($.Object.isTypeObject(fn.prototype)) {
                BindCtr.prototype = fn.prototype;
                bound.prototype = new BindCtr();
                BindCtr.prototype = base.Function.proto;
            }

            return bound;
        };

        $.Function.bind = $.Function.prototype.bind.call(base.Function.call, $.Function.prototype.bind);
    }

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * @memberof utilx.Function
     * @name ToMethod
     * @function
     * @param {prototypalFunction} protoFn
     * @throws {TypeError} if protoFn is not a {@link Function function}.
     * @returns {boundPrototypalFunction}
     */
    $.Function.ToMethod = function (protoFn, checkThisArgFn) {
        throwIfNotAFunction(protoFn);

        if (!$.Function.isFunction(checkThisArgFn)) {
            checkThisArgFn = checkObjectCoercible;
        }

        return function (thisArg) {
            return protoFn.apply(checkThisArgFn(thisArg), slice(arguments, 1));
        };
    };

    /**
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     * @memberof utilx.Array
     * @name isArray
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.isArray)) {
        $.Array.isArray = base.Array.isArray;
    } else {
        $.Array.isArray = function (inputArg) {
            return $.Object.isNotPrimitive(inputArg) && $.Object.ToClassString(inputArg) === base.classString.array;
        };
    }

    /**
     * The arrayJoin() method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     * @memberof utilx.Array
     * @name join
     * @function
     * @param {ArrayLike} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @param {string} [separator]
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
     */
    $.Array.prototype.join = function (separator) {
        checkObjectCoercible(this);

        var type = typeof separator;

        if (type === 'undefined') {
            separator = ',';
        }

        return join(this, separator);
    };

    $.Array.join = $.Function.ToMethod($.Array.prototype.join);

    /**
     * Returns true if the operand inputArg is a Date object.
     * @memberof utilx.Date
     * @name isDate
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Date.isDate = function (inputArg) {
        return $.Object.isNotPrimitive(inputArg) && $.Object.ToClassString(inputArg) === base.classString.date;
    };

    /**
     * Determines whether two values are the same value.
     * @memberof utilx.Object
     * @name is
     * @function
     * @param {*} [x]
     * @param {*} [y]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.is)) {
        $.Object.is = base.Object.is;
    } else {
        $.Object.is = function (x, y) {
            var val,
                a,
                b;

            if (x === y) {
                if (x === 0) {
                    val = (1 / x) === (1 / y);
                } else {
                    val = true;
                }
            } else {
                a = x;
                b = y;
                val = x !== a && y !== b;
            }

            return val;
        };
    }

    /**
     * Determines whether two values are not the same value.
     * @memberof utilx.Object
     * @name isnt
     * @function
     * @param {*} [x]
     * @param {*} [y]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
     */
    $.Object.isnt = function (x, y) {
        return !$.Object.is(x, y);
    };

    /**
     * Returns true if the operands are of the same typeof.
     * @memberof utilx.Object
     * @name areSameTypeOf
     * @function
     * @param {*} a
     * @param {...*} b
     * @throws {SyntaxError} if not supplied with both arguments a and b.
     * @returns {boolean}
     */
    $.Object.areSameTypeOf = function (a, b) {
        /*jslint unparam:true */
        /*jshint unused:false */
        if (arguments.length < 2) {
            throw new base.SyntaxError.Ctr('must supply at least 2 arguments');
        }

        var typeA = typeof a;

        return !$.Array.some(arguments, function (arg) {
            var type = typeof arg;

            return typeA !== type;
        });
    };

    /**
     * Returns true if the operands are of the same object class.
     * @memberof utilx.Object
     * @name areSameClass
     * @function
     * @param {*} a
     * @param {...*} b
     * @throws {SyntaxError} if not supplied with both arguments a and b.
     * @returns {boolean}
     */
    $.Object.areSameClass = function (a, b) {
        /*jslint unparam:true */
        /*jshint unused:false */
        if (arguments.length < 2) {
            throw new base.SyntaxError.Ctr('must supply at least 2 arguments');
        }

        var classA = $.Object.ToClassString(a);

        return !$.Array.some(arguments, function (arg) {
            return classA !== this(arg);
        }, $.Object.ToClassString);
    };

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * @memberof utilx.Number
     * @name isNaN
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
     */
    if (!testShims && $.Function.isNativeFunction(base.Number.isNaN)) {
        $.Number.isNaN = base.Number.isNaN;
    } else {
        $.Number.isNaN = function (inputArg) {
            var myself = inputArg;

            return inputArg !== myself;
        };
    }

    /**
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     * @memberof utilx.Number
     * @name inRange
     * @function
     * @param {NumberLike} value
     * @param {NumberLike} min
     * @param {NumberLike} max
     * @returns {boolean}
     */
    $.Number.inRange = function (value, min, max) {
        if (!$.Number.isNumberAny(value) && !$.String.isStringAny(value)) {
            throw new base.TypeError.Ctr('arguments must be either numbers or strings');
        }

        if (!$.Object.areSameTypeOf(value, min, max)) {
            throw new base.TypeError.Ctr('arguments must be of the same type');
        }

        if (min === max || $.Number.isNaN(min) || $.Number.isNaN(max)) {
            throw new base.RangeError.Ctr('min and max do not define a range');
        }

        return value >= min && value <= max;
    };

    /**
     * Returns true if the operand value is less than or equal to min or is greater than or equal to max.
     * @memberof utilx.Number
     * @name outRange
     * @function
     * @param {NumberLike} value
     * @param {NumberLike} min
     * @param {NumberLike} max
     * @returns {boolean}
     */
    $.Number.outRange = function (value, min, max) {
        if (!$.Number.isNumberAny(value) && !$.String.isStringAny(value)) {
            throw new base.TypeError.Ctr('arguments must be either numbers or strings');
        }

        if (!$.Object.areSameTypeOf(value, min, max)) {
            throw new base.TypeError.Ctr('arguments must be of the same type');
        }

        if (min === max || $.Number.isNaN(min) || $.Number.isNaN(max)) {
            throw new base.RangeError.Ctr('min and max do not define a range');
        }

        return value <= min || value >= max;
    };

    /**
     * The function determines whether the passed value is finite.
     * More robust version of the original global isFinite.
     * @memberof utilx.Number
     * @name isFinite
     * @function
     * @param {*} number
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isFinite
     */
    if (!testShims && $.Function.isNativeFunction(base.Number.isFinite)) {
        $.Number.isFinite = base.Number.isFinite;
    } else {
        $.Number.isFinite = function (number) {
            return typeof number === 'number' && base.isFinite(number);
        };
    }

    /**
     * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
     * "negative number", "positive zero",  "negative zero" and NaN respectively.
     * @memberof utilx.Math
     * @name sign
     * @function
     * @param {*} value
     * @returns {number}
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
     * @memberof utilx.Number
     * @name toInteger
     * @function
     * @param {*} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger
     */
    if (!testShims && $.Function.isNativeFunction(base.Number.toInteger)) {
        $.Number.toInteger = base.Number.toInteger;
    } else {
        $.Number.toInteger = function (inputArg) {
            var number = +inputArg,
                val;

            if ($.Number.isNaN(number)) {
                val = 0;
            } else if (number === 0 || !$.Number.isFinite(number)) {
                val = number;
            } else {
                val = $.Math.sign(number) * floor(abs(number));
            }

            return val;
        };
    }

    /**
     * The $.Number.isInteger() method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberof utilx.Number
     * @name isInteger
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.Number.isInteger)) {
            throw new Error();
        }

        if (base.Number.isInteger($.Number.UNSAFE_INTEGER) || base.Number.isInteger(-$.Number.UNSAFE_INTEGER)) {
            throw new Error('Failed unsafe integer check');
        }

        $.Number.isInteger = base.Number.isInteger;
    } catch (eIsInt) {
        $.Number.isInteger = function (inputArg) {
            return !$.Number.isNaN(inputArg) && $.Number.isFinite(inputArg) &&
                inputArg >= $.Number.MIN_INTEGER && inputArg <= $.Number.MAX_INTEGER &&
                $.Number.toInteger(inputArg) === inputArg;
        };
    }

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range -2^31 through 2^31-1, inclusive.
     * @memberof utilx.Number
     * @name toInt32
     * @function
     * @param {*} inputArg
     * @returns {number}
     */
    $.Number.toInt32 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = ($.Math.sign(number) * floor(abs(number))) % $.Number.UWORD32;
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
     * @memberof utilx.Number
     * @name isInt32
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isInt32 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= $.Number.MIN_INT32 && inputArg <= $.Number.MAX_INT32;
    };

    /**
     * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Known as Rounding division, Floored division or Integer division.
     * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator}
     * @memberof utilx.Number
     * @name modulo
     * @function
     * @param {number} dividend
     * @param {number} divisor
     * @returns {number}
     */
    $.Number.prototype.modulo = function (divisor) {
        return this - divisor * floor(this / divisor);
    };

    $.Number.modulo = $.Function.ToMethod($.Number.prototype.modulo, function (dividend) {
        return dividend;
    });

    /**
     * The Number.isOdd returns true if the integer is odd otherwise false.
     * @memberof utilx.Number
     * @name isOdd
     * @function
     * @param {number} inputArg
     * @returns {boolean}
     */
    $.Number.isOdd = function (inputArg) {
        return $.Number.isInteger(inputArg) && (inputArg % 2) !== 0;
    };

    /**
     * The Number.isEven returns true if the integer is even otherwise false.
     * @memberof utilx.Number
     * @name isOdd
     * @function
     * @param {number} inputArg
     * @returns {boolean}
     */
    $.Number.isEven = function (inputArg) {
        return $.Number.isInteger(inputArg) && (inputArg % 2) === 0;
    };

    /**
     * The abstract operation converts its argument to one of 2^53 integer values in
     * the range 0 through 2^53-1,inclusive.
     * @memberof utilx.Number
     * @name toUint
     * @function
     * @param {*} inputArg
     * @returns {number}
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
     * @memberof utilx.Number
     * @name isUint
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isUint = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= 0 && inputArg <= $.Number.MAX_INTEGER;
    };

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range 0 through 2^32-1,inclusive.
     * @memberof utilx.Number
     * @name toUint32
     * @function
     * @param {*} inputArg
     * @returns {number}
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
     * @memberof utilx.Number
     * @name isUint32
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isUint32 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= 0 && inputArg <= $.Number.MAX_UINT32;
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range -2^15 through 2^15-1, inclusive.
     * @memberof utilx.Number
     * @name toInt16
     * @function
     * @param {*} inputArg
     * @returns {number}
     */
    $.Number.toInt16 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val = ($.Math.sign(number) * floor(abs(number))) % $.Number.UWORD16;
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
     * @memberof utilx.Number
     * @name isInt16
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isInt16 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= $.Number.MIN_INT16 && inputArg <= $.Number.MAX_INT16;
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range 0 through 2^16-1,inclusive.
     * @memberof utilx.Number
     * @name toUint16
     * @function
     * @param {*} inputArg
     * @returns {number}
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
     * @memberof utilx.Number
     * @name isUint16
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isUint16 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= 0 && inputArg <= $.Number.MAX_UINT16;
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range -2^7 through 2^7-1, inclusive.
     * @memberof utilx.Number
     * @name toInt8
     * @function
     * @param {*} inputArg
     * @returns {number}
     */
    $.Number.toInt8 = function (inputArg) {
        var number = +inputArg,
            val;

        if (number === 0 || !$.Number.isFinite(number)) {
            val = 0;
        } else {
            val  = ($.Math.sign(number) * floor(abs(number))) % $.Number.UWORD8;
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
     * @memberof utilx.Number
     * @name isInt8
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isInt8 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= $.Number.MIN_INT8 && inputArg <= $.Number.MAX_INT8;
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range 0 through 2^8-1,inclusive.
     * @memberof utilx.Number
     * @name toUint8
     * @function
     * @param {*} inputArg
     * @returns {number}
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
     * @memberof utilx.Number
     * @name isUint8
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Number.isUint8 = function (inputArg) {
        return $.Number.isInteger(inputArg) && inputArg >= 0 && inputArg <= $.Number.MAX_UINT8;
    };

    /**
     * The Array.push() {@link boundPrototypalFunction method} adds one or more elements to the end of an array and
     * returns the new length of the array.
     * @memberof utilx.Array
     * @name push
     * @function
     * @param {ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
     */
    if (!testShims && push([], 0) === 1) {
        $.Array.push = $.Function.ToMethod(base.Array.push);
    } else {
        $.Array.prototype.push = function () {
            base.Array.push.apply(checkObjectCoercible(this), slice(arguments));

            return this.length;
        };

        $.Array.push = $.Function.ToMethod($.Array.prototype.push);
    }

    /**
     * The Array.unshift() method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     * @memberof utilx.Array
     * @name unshift
     * @function
     * @param {ArrayLike} array
     * @param {...*} [varArgs]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
     */
    if (!testShims && unshift([], 0) === 1) {
        $.Array.unshift = $.Function.ToMethod(base.Array.unshift);
    } else {
        $.Array.prototype.unshift = function () {
            base.Array.unshift.apply(checkObjectCoercible(this), slice(arguments));

            return this.length;
        };

        $.Array.unshift = $.Function.ToMethod($.Array.prototype.unshift);
    }

    /**
     * Returns an integer clamped to the range set by min and max.
     * The arguments are converted to integers with the {@link utilx.Number.toInteger toInteger} method.
     * @memberof utilx.Number
     * @name clampToInt
     * @function
     * @param {*} num
     * @param {*} min
     * @param {*} max
     * @returns {number}
     */
    $.Number.clampToInt = function (num, min, max) {
        return mMin(mMax($.Number.toInteger(num), $.Number.toInteger(min)), $.Number.toInteger(max));
    };

    /**
     * Removes any duplicate characters from the provided string.
     * @memberof utilx.String
     * @function clipDuplicates
     * @param {string} str String to remove duplicate characters from.
     * @returns {string} String with any duplicate characters removed.
     */
    $.String.clipDuplicates = function (str) {
        return replace(onlyCoercibleToString(str), base.RegExp.clipDuplicates, '');
    };

    /**
     * Throws a TypeError if the argument is not a RegExp.
     * @function throwIfIsNotRegExp
     * @private
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link RegExp RegExp}.
     * @returns {RegExp}
     */
    function throwIfIsNotRegExp(inputArg) {
        if (!$.RegExp.isRegExp(inputArg)) {
            throw new base.TypeError.Ctr('Type RegExp expected');
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
        var flags = exec(base.RegExp.getNativeFlags, $.String.ToString(regExpArg))[1];

        if (options.add) {
            flags = $.String.clipDuplicates(flags + options.add);
        }

        if (options.remove) {
            // Would need to escape `options.remove` if this was public
            flags = replace(flags, new base.RegExp.Ctr('[' + options.remove + ']+', 'g'), '');
        }

        return new base.RegExp.Ctr(regExpArg.source, flags);
    }

    // Check for correct `exec` handling of nonparticipating capturing groups
    testValue = typeof exec(new RegExp('()??'), '')[1];
    correctExecNpcg = testValue === 'undefined';

    /**
     * Fixes browser bugs in the native `RegExp.prototype.exec`.
     * @memberof utilx.RegExp
     * @name exec
     * @function
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @returns {Array} Match array with named backreference properties, or `null`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
     */
    $.RegExp.prototype.exec = function (stringArg) {
        throwIfIsNotRegExp(this);

        var str = $.String.ToString(stringArg),
            origLastIndex = this.lastIndex,
            match = base.RegExp.exec.apply(this, arguments),
            r2;

        if ($.Array.isArray(match)) {
            // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating
            // capturing groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of
            // older IEs. IE 9 in standards mode follows the spec
            if (!correctExecNpcg && match.length > 1 && $.Array.contains(match, '')) {
                r2 = copyRegExp(this, {remove: 'g'});
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                replace(strSlice($.String.ToString(str), match.index), r2, function () {
                    // Skip index 0 and the last 2
                    iter(arguments, false, 1, arguments.length - 2, false, function (it, idx) {
                        var type = typeof it;

                        if (type === 'undefined') {
                            this(match, idx, it);
                        }
                    }, $.Array.assign);
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
     * @memberof utilx.RegExp
     * @name test
     * @function
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @returns {Boolean} Whether the regex matched the provided value.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
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
     * @returns {Array} Match array or `null`.
     */
    function regExpForEachExec(stringArg, regExpArg, pos) {
        throwIfIsNotRegExp(regExpArg);

        var str = onlyCoercibleToString(stringArg),
            r2 = copyRegExp(regExpArg, {
                add: 'g',
                remove: 'y'
            }),
            match;

        r2.lastIndex = pos = mMin(mMax($.Number.toInteger(pos), 0), $.Number.MAX_INTEGER);
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
            pos = match.index + mMin(mMax(match[0].length, 1), $.Number.UWORD32);
            match = regExpForEachExec(str, regExpArg, pos);
            index += 1;
        }

        return context;
    }

    /**
     * Splits a String object into an array of strings by separating the string into subbase.str.
     * @memberof utilx.String
     * @name split
     * @function
     * @param {string} stringArg
     * @param {string|RegExp}} [separator]
     * @param {number} [limit]
     * @returns {Array.<string>}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     */
    if (testShims || split('test', new RegExp('(?:test)*')).length !== 2 ||
            split('.', new RegExp('(.?)(.?)')).length !== 4 ||
            split('tesst', new RegExp('(s)*'))[1] === 't' ||
            split('', new RegExp('.?')).length > 0 ||
            split('.', new RegExp('()()')).length > 1) {

        $.String.prototype.split = function (separator, limit) {
            var str = onlyCoercibleToString(this),
                type = typeof separator,
                output,
                origLastIndex,
                lastLastIndex,
                lastLength;

            // "0".split(undefined, 0) -> []
            if (type === 'undefined' && limit === 0) {
                output = [];
            } else if (!$.RegExp.isRegExp(separator)) {
                // Browsers handle nonregex split correctly, so use the faster native method
                output = base.String.split.apply(str, arguments);
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
                type = typeof limit;
                if (type === 'undefined') {
                    limit = $.Number.MAX_UINT32;
                } else {
                    limit = $.Number.toUint32(limit);
                }

                regExpForEach(str, separator, function (match) {
                    // This condition is not the same as `if (match[0].length)`
                    if ((match.index + match[0].length) > lastLastIndex) {
                        push(output, strSlice(str, lastLastIndex, match.index));
                        if (match.length > 1 && match.index < str.length) {
                            //$.Array.push.apply(Undefined, concat([output], slice(match, 1)));
                            output = concat(output, slice(match, 1));
                        }

                        lastLength = match[0].length;
                        lastLastIndex = match.index + lastLength;
                    }
                });

                if (lastLastIndex === str.length) {
                    if (!test(separator, '') || lastLength) {
                        push(output, '');
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
            var type = typeof separator,
                val;

            // "0".split(undefined, 0) -> []
            if (type === 'undefined' && limit === 0) {
                val = [];
            } else {
                val = base.String.split.apply(onlyCoercibleToString(this), arguments);
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
     * @memberof utilx.String
     * @name replace
     * @function
     * @param {RegExp|string} search Search pattern to be replaced.
     * @param {string|Function} replacement Replacement string or a function invoked to create it.
     * @returns {string} New string with one or all matches replaced.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
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
                return replacement.apply(Undefined, args);
            });
        } else {
            // Ensure that the last value of `args` will be a string when given nonstring `this`,
            // while still throwing on `null` or `undefined` context
            result = replace(str, search, function () {
                // Keep this function's `arguments` available through closure
                var args = slice(arguments),
                    length = args.length;

                return replace($.String.ToString(replacement), base.RegExp.replacementToken, function () {
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
                            throw new base.SyntaxError.Ctr('Backreference to undefined group ' + $0);
                        }

                        return args[$2] || '';
                    }

                    throw new base.SyntaxError.Ctr('Invalid token ' + $0);
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
     * @memberof utilx.String
     * @name match
     * @function
     * @param {string} stringArg String to search.
     * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
     * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
     * the result of calling `$.RegExp.exec(regExpArg)`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     */
    $.String.prototype.match = function (regExpArg) {
        var str = onlyCoercibleToString(this),
            result;

        if (!$.RegExp.isRegExp(regExpArg)) {
            regExpArg = new base.RegExp.Ctr(regExpArg);
        } else if (regExpArg.global) {
            result = base.String.match.apply(str, arguments);
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
     * @memberof utilx.String
     * @name first
     * @function
     * @param {string} inputArg
     * @returns {string}
     */
    $.String.prototype.first = function () {
        return charAt(onlyCoercibleToString(this), 0);
    };

    $.String.first = $.Function.ToMethod($.String.prototype.first);

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberof utilx.String
     * @name last
     * @function
     * @param {string} inputArg
     * @returns {string}
     */
    $.String.prototype.last = function () {
        var str = onlyCoercibleToString(this);

        return charAt(str, str.length - 1);
    };

    $.String.last = $.Function.ToMethod($.String.prototype.last);

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberof utilx.String
     * @name countCharacter
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @returns {number}
     */
    $.String.prototype.countCharacter = function (character) {
        var str = onlyCoercibleToString(this),
            first = $.String.first(character),
            val;

        if (first === '') {
            val = $.Number.POSITIVE_INFINITY;
        } else {
            val = mMin(mMax($.String.split(str, first).length - 1, 0), $.Number.POSITIVE_INFINITY);
        }

        return val;
    };

    $.String.countCharacter = $.Function.ToMethod($.String.prototype.countCharacter);

    /**
     * Returns true if arguments is less than zero or is Object.equal to positive infinity
     * @private
     * @function isLtZeroOrPositiveInfinity
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isLtZeroOrPositiveInfinity(inputArg) {
        return inputArg < 0 || inputArg === $.Number.POSITIVE_INFINITY;
    }

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or Object.equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberof utilx.String
     * @name padLeadingChar
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @param {number} size
     * @returns {string}
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
     * @returns {string}
     */
    function stringRepeatRep(s, times) {
        var half,
            val;

        if (times < 1) {
            val = '';
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
     * @memberof utilx.String
     * @name repeat
     * @function
     * @param {string} string
     * @param {number} times
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
     */
    if (!testShims && $.Function.isNativeFunction(base.String.repeat)) {
        $.String.repeat = $.Function.ToMethod(base.String.repeat);
    } else {
        $.String.prototype.repeat = function (times) {
            var thisString = onlyCoercibleToString(this),
                count = $.Number.toInteger(times);

            if (isLtZeroOrPositiveInfinity(count)) {
                throw new base.RangeError.Ctr();
            }

            return stringRepeatRep(thisString, count);
        };

        $.String.repeat = $.Function.ToMethod($.String.prototype.repeat);
    }

    /**
     * Determines whether a string begins with the characters of another string,
     * returning true or false as appropriate.
     * @memberof utilx.String
     * @name startsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
     */
    if (!testShims && $.Function.isNativeFunction(base.String.startsWith)) {
        $.String.startsWith = $.Function.ToMethod(base.String.startsWith);
    } else {
        $.String.prototype.startsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                start = mMin(mMax($.Number.toInteger(position), 0), thisStr.length);

            return strSlice(thisStr, start, start + searchStr.length) === searchStr;
        };

        $.String.startsWith = $.Function.ToMethod($.String.prototype.startsWith);
    }

    /**
     * Determines whether a string ends with the characters of another string,
     * returning true or false as appropriate.
     * @memberof utilx.String
     * @name endsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
     */
    if (!testShims && $.Function.isNativeFunction(base.String.endsWith)) {
        $.String.endsWith = $.Function.ToMethod(base.String.endsWith);
    } else {
        $.String.prototype.endsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                thisLen = thisStr.length,
                type = typeof position,
                end,
                start;

            if (type === 'undefined') {
                position = thisLen;
            } else {
                position = $.Number.toInteger(position);
            }

            end = mMin(mMax(position, 0), thisLen);
            start = end - searchStr.length;

            return start >= 0 && strSlice(thisStr, start, end) === searchStr;
        };

        $.String.endsWith = $.Function.ToMethod($.String.prototype.endsWith);
    }

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     * @memberof utilx.String
     * @name contains
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
     */
    if (!testShims && $.Function.isNativeFunction(base.String.contains)) {
        $.String.contains = $.Function.ToMethod(base.String.contains);
    } else {
        $.String.prototype.contains = function (searchString, position) {
            var str = onlyCoercibleToString(this),
                searchStr = $.String.ToString(searchString),
                length = str.length,
                type = typeof position;

            if (type === 'undefined') {
                position = 0;
            } else {
                position = $.Number.toInteger(position);
            }

            return base.String.indexOf.call(str, searchStr, mMin(mMax(position, 0), length)) !== -1;
        };

        $.String.contains = $.Function.ToMethod($.String.prototype.contains);
    }

    /**
     * When it comes to inheritance, JavaScript only has one construct: objects.
     * Each object has an internal link to another object called its prototype.
     * That prototype object has a prototype of its own, and so on until an object is reached with
     * null as its prototype. null, by definition, has no prototype, and acts as the final link in
     * this prototype chain.
     * @typedef {Object} Prototype
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain
     */

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * @memberof utilx.Object
     * @name getPrototypeOf
     * @function
     * @param {Object} object
     * @returns {Prototype}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.getPrototypeOf)) {
        $.Object.getPrototypeOf = function (object) {
            return base.Object.getPrototypeOf(throwIfIsPrimitive(object));
        };
    } else if (base.Object.proto[base.str.proto] === null) {
        $.Object.getPrototypeOf = function (object) {
            return throwIfIsPrimitive(object)[base.str.proto];
        };
    } else {
        if ($.Function.returnArgs().constructor.prototype !== base.Object.proto) {
            fixOpera10GetPrototypeOf = true;
        }

        $.Object.getPrototypeOf = function (object) {
            if (throwIfIsPrimitive(object) === base.Object.proto) {
                return null;
            }

            var ctrProto;

            if ($.Function.isFunction(object.constructor)) {
                if (fixOpera10GetPrototypeOf && $.Object.isArguments(object)) {
                    ctrProto = base.Object.proto;
                } else {
                    ctrProto = object.constructor.prototype;
                }
            } else if ($.Object.isObject(object[base.str.proto])) {
                ctrProto = object[base.str.proto];
            } else {
                ctrProto = base.Object.proto;
            }

            if (object === ctrProto) {
                return base.Object.proto;
            }

            return ctrProto;
        };
    }

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     * @memberof utilx.Object
     * @name isPlainObject
     * @function
     * @param {Object} object
     * @returns {boolean}
     */
    $.Object.isPlainObject = function (object) {
        return $.Object.isObject(object) && $.Object.getPrototypeOf(object) === base.Object.proto;
    };

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     * @memberof utilx.Array
     * @name contains
     * @function
     * @param {ArrayLike} array
     * @param {*} searchElement
     * @returns {boolean}
     */
    $.Array.prototype.contains = function (searchElement) {
        return $.Array.indexOf(this, searchElement) !== -1;
    };

    $.Array.contains = $.Function.ToMethod($.Array.prototype.contains);

    //Test for hasDontEnumBug and hasFuncProtoBug.
    enumer({toString: null}, false, function (it, prop) {
        hasDontEnumBug = prop !== 'toString' || it !== null;

        return !hasDontEnumBug;
    });

    testObject1 = function () {
        return;
    };

    testObject1.prototype.constructor = testObject1;
    enumer(testObject1, false, function (unused, prop) {
        /*jslint unparam: true */
        /*jshint unused: false */
        hasFuncProtoBug = prop === 'prototype';

        return hasFuncProtoBug;
    });

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

        nonEnumProps[base.classString.Boolean] =
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

        iter(base.props.shadowed, false, 0, base.props.shadowed.length, false, function (it) {
            this(nonEnumProps, true, function (unused, prop, obj) {
                /*jslint unparam: true */
                /*jshint unused: false */
                if (!this(obj[prop], it)) {
                    obj[prop][it] = false;
                }
            }, hasOwn);
        }, enumer);
    }

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the $.Object.has function, this method does not check down the object's prototype
     * chain.
     * @memberof utilx.Object
     * @name hasOwn
     * @function
     * @param {Object} object
     * @param {StringLike} property
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
     */
    if (hasDontEnumBug) {
        $.Object.prototype.hasOwn = function (property) {
            var prop = $.String.ToString(property),
                val;

            if (hasOwn(this, prop)) {
                val = true;
            } else {
                val = $.Object.has(this, prop) && $.Array.contains(base.props.shadowed, prop) &&
                                        !$.Object.is(this[prop], $.Object.getPrototypeOf(this)[prop]);
            }

            return val;
        };

        $.Object.hasOwn = $.Function.ToMethod($.Object.prototype.hasOwn);
    } else if (hasFuncProtoBug) {
        $.Object.prototype.hasOwn = function (property) {
            var prop = $.String.ToString(property),
                val;

            if ($.Function.isFunction(this) && prop === 'prototype') {
                val = true;
            } else {
                val = hasOwn(this, prop);
            }

            return val;
        };

        $.Object.hasOwn = $.Function.ToMethod($.Object.prototype.hasOwn);
    } else {
        $.Object.hasOwn = $.Function.ToMethod(base.Object.hasOwn);
    }

    /**
     * Returns true if argument is an object that has own property of length which is a number of uint32
     * but is not a {@link Function function}.
     * @private
     * @function hasValidLength
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     */
    function hasValidLength(inputArg) {
        return $.Object.isNotPrimitive(inputArg) && hasOwn(inputArg, 'length') &&
                    typeof inputArg.length === 'number' && $.Number.isUint32(inputArg.length);
    }

    /**
     * Throws TypeError if argument has not got a valid length otherwise return the object.
     * @private
     * @function throwIfIsNotHasValidLength
     * @param {*} inputArg
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/length
     */
    function throwIfIsNotHasValidLength(inputArg) {
        if (!hasValidLength(inputArg)) {
            throw new base.TypeError.Ctr('invalid length property');
        }

        return inputArg;
    }

    /**
     * Returns true if arguments is an array or an arguments object.
     * @private
     * @function isArrayOrArguments
     * @param {*} inputArg
     * @returns {boolean}
     */
    function isArrayOrArguments(inputArg) {
        return $.Array.isArray(inputArg) || $.Object.isArguments(inputArg);
    }

    /**
     * The function takes one argument inputArg, if the argument is an object whose class internal
     * property is "Array" or is an Object whose class internal property is "Arguments";
     * returns true if length is zero otherwise it returns false.
     * Otherwise returns null if the argument does not match the rquirements.
     * @memberof utilx.Array
     * @name isEmpty
     * @function
     * @param {ArrayLike} inputArg
     * @returns {(boolean|null)}
     */
    $.Array.isEmpty = function (inputArg) {
        return !throwIfIsNotHasValidLength(throwIfAFunction($.Object.ToObject(inputArg))).length;
    };

    /**
     * Returns the first element of an array; otherwise returns undefined.
     * @memberof utilx.Array
     * @name first
     * @function
     * @param {ArrayLike} inputArg
     * @returns {*}
     */
    $.Array.prototype.first = function () {
        return throwIfIsNotHasValidLength($.Object.ToObjectFixIndexedAccess(this))[0];
    };

    $.Array.first = $.Function.ToMethod($.Array.prototype.first);

    /**
     * Returns the last element of an array; otherwise returns undefined.
     * @memberof utilx.Array
     * @name last
     * @function
     * @param {ArrayLike} inputArg
     * @returns {*}
     */
    $.Array.prototype.last = function () {
        var object = throwIfIsNotHasValidLength($.Object.ToObjectFixIndexedAccess(this));

        return object[object.length - 1];
    };

    $.Array.last = $.Function.ToMethod($.Array.prototype.last);

    /**
     * The Array.assign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     * @memberof utilx.Array
     * @name assign
     * @function
     * @param {ArrayLike} array
     * @param {NumberLike} index
     * @param {*} value
     * @returns {number}
     */
    $.Array.prototype.assign = function (index, value) {
        var object = throwIfIsNotHasValidLength(throwIfIsPrimitive(this)),
            numIndex;

        if (arguments.length >= 2) {
            if ($.Number.isFinite(+index)) {
                numIndex = $.Number.toInteger(index);
            } else {
                numIndex = $.Number.NaN;
            }

            if (numIndex >= 0 && numIndex <= $.Number.MAX_UINT32 - 1) {
                this[numIndex] = value;
                numIndex += 1;
                if (numIndex > this.length) {
                    object.length = numIndex;
                }

            } else {
                object[$.String.ToString(index)] = value;
            }
        }

        return object.length;
    };

    $.Array.assign = $.Function.ToMethod($.Array.prototype.assign);

    /**
     * Compares operand a against operand b and returns true if they are deemed to be the same value.
     * Otherwise returns false.
     * @typedef {Function} equalityFn
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */

    /**
     * This method creates a new array of unique occurences using
     * the {@link utilx.Object.strictEqual strictEqual} comparison.
     * The new array is ordered as per the original array.
     * A function can be provided as an alternative comparison method.
     * @memberof utilx.Array
     * @name unique
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}.
     * @param {equalityFn} [fn]
     * @throws {TypeError} if equalityFn is not a {@link Function function}.
     * @returns {Array}
     */
    $.Array.prototype.unique = function (fn) {
        return $.Array.filter(this, function (element, index, obj) {
            var type = typeof fn;

            if (type === 'undefined') {
                fn = $.Object.strictEqual;
            }

            return !this(obj, function (ele, idx) {
                return idx < index && this(element, ele);
            }, throwIfNotAFunction(fn));
        }, $.Array.some);
    };

    $.Array.unique = $.Function.ToMethod($.Array.prototype.unique);

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * @memberof utilx.Object
     * @name ToObjectFixIndexedAccess
     * @function
     * @param {*} inputArg
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    boxedString = $.Object.ToObject('g');
    shouldSplitString = boxedString[0] !== 'g' || !$.Object.has(boxedString, 0);
    $.Object.ToObjectFixIndexedAccess = function (inputArg) {
        var object = $.Object.ToObject(inputArg);

        if (shouldSplitString && $.String.isStringObject(object)) {
            iter(object, false, 0, object.length, false, function (it, idx, obj) {
                obj[idx] = it;
            });
        }

        return object;
    };

    function fixLength(inputArg) {
        return mMin(mMax($.Number.toInteger(inputArg.length), 0), $.Number.MAX_UINT32);
    }

    /**
     * The $.Array.splice() method changes the content of an array,
     * adding new elements while removing old elements.
     * @memberof utilx.Array
     * @name splice
     * @function
     * @param {ArrayLike} array
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.splice) && splice([1, 2], 0).length === 2) {
        try {
            if (!splice([1, 2]).length) {
                $.Array.splice = $.Function.ToMethod(base.Array.splice);
            } else {
                throw new Error();
            }
        } catch (eSplice) {
            $.Array.prototype.splice = function () {
                var val;

                if (arguments.length < 1) {
                    val = [];
                } else {
                    val = base.Array.splice.apply(this, arguments);
                }

                return val;
            };

            $.Array.splice = $.Function.ToMethod($.Array.prototype.splice);
        }
    } else {
        $.Array.prototype.splice = function (start, deleteCount) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = fixLength(object),
                removed = [],
                relativeStart = mMin(mMax($.Number.toInteger(start), -$.Number.MAX_UINT32), $.Number.MAX_UINT32),
                actualStart,
                actualDeleteCount,
                k = 0,
                from,
                args = slice(arguments),
                argLength = args.length,
                item = 2,
                itemCount = mMax(argLength - item, 0),
                to,
                loopCache;

            if (argLength < 1) {
                return removed;
            }

            if ($.Math.sign(relativeStart) < 0) {
                actualStart = mMax(length + relativeStart, 0);
            } else {
                actualStart = mMin(relativeStart, length);
            }

            if (argLength < 2) {
                deleteCount = length - actualStart;
            }

            actualDeleteCount = mMin(mMax($.Number.toInteger(deleteCount), 0), $.Number.MAX_UINT32);
            actualDeleteCount = mMin(mMax(actualDeleteCount, 0), length - actualStart);
            while (k < actualDeleteCount) {
                from = actualStart + k;
                if (hasOwn(object, from)) {
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
                    if (hasOwn(object, from)) {
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
                    if (hasOwn(object, from)) {
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
     * @param {Function} fn
     * @returns {boolean}
     */
    function checkV8StrictBug(fn) {
        var hasV8StrictBug = false;

        if (isStrictMode) {
            fn.call([1], function () {
                hasV8StrictBug = $.String.isStringObject(this);
            }, 'foo');
        }

        return hasV8StrictBug;
    }

    /**
     * forEach executes the callback function once for each array element;
     * unlike every and some it does not return a value.
     * If a thisArg parameter is provided to forEach, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} forEachCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that forEach was called upon.
     * @returns {undefined}
     */

    /**
     * Executes a provided function once per array element.
     * @memberof utilx.Array
     * @name forEach
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {forEachCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
     */
    try {
        forEach('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.forEach) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.Array.forEach)) {

            $.Array.forEach = $.Function.ToMethod(base.Array.forEach);
        } else {
            throw new Error();
        }
    } catch (eForEach) {
        $.Array.prototype.forEach = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this);

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                this.call(thisArg, it, idx, obj);
            }, throwIfNotAFunction(fn));
        };

        $.Array.forEach = $.Function.ToMethod($.Array.prototype.forEach);
    }

    /**
     * Executes a provided function once per array element position.
     * Unlike forEach, this method treats the array as dense and allows a some like break.
     * @memberof utilx.Array
     * @name forAll
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {someCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {undefined}
     */
    $.Array.prototype.forAll = function (fn, thisArg) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            val = false;

        iter(object, false, 0, fixLength(object), false, function (it, idx, obj) {
            val = !!this.call(thisArg, it, idx, obj);

            return val;
        }, throwIfNotAFunction(fn));

        return val;
    };

    $.Array.forAll = $.Function.ToMethod($.Array.prototype.forAll);

    /**
     * some executes the callback function once for each element present in the array until it finds one
     * where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} someCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that some was called upon.
     * @returns {boolean}
     */

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     * @memberof utilx.Array
     * @name some
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {someCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
     */
    try {
        some('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.some) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.Array.some)) {

            $.Array.some = $.Function.ToMethod(base.Array.some);
        } else {
            throw new Error();
        }
    } catch (eSome) {
        $.Array.prototype.some = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                val = false;

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                val = !!this.call(thisArg, it, idx, obj);

                return val;
            }, throwIfNotAFunction(fn));

            return val;
        };

        $.Array.some = $.Function.ToMethod($.Array.prototype.some);
    }

    /**
     * The find method executes the callback function once for each element present in the array until it
     * finds one where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} findCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that find was called upon.
     * @returns {boolean}
     */

    /**
     * This method returns a value in the array, if an element in the array satisfies the provided testing function.
     * Otherwise undefined is returned.
     * @memberof utilx.Array
     * @name find
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {findCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.find) && !checkV8StrictBug(base.Array.find)) {
        $.Array.find = $.Function.ToMethod(base.Array.find);
    } else {
        $.Array.prototype.find = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                val;

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                if (this.call(thisArg, it, idx, obj)) {
                    val = it;
                }

                return val === it;
            }, throwIfNotAFunction(fn));

            return val;
        };

        $.Array.find = $.Function.ToMethod($.Array.prototype.find);
    }

    /**
     * The findIndex method executes the callback function once for each element present in the array until it
     * finds one where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} findIndexCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that findIndex was called upon.
     * @returns {boolean}
     */

    /**
     * This method returns an index in the array, if an element in the array satisfies the provided testing function.
     * Otherwise -1 is returned.
     * @memberof utilx.Array
     * @name findIndex
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {findIndexCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.findIndex) && !checkV8StrictBug(base.Array.findIndex)) {
        $.Array.findIndex = $.Function.ToMethod(base.Array.findIndex);
    } else {
        $.Array.prototype.findIndex = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                val = -1;

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                if (this.call(thisArg, it, idx, obj)) {
                    val = idx;
                }

                return val === idx;
            }, throwIfNotAFunction(fn));

            return val;
        };

        $.Array.findIndex = $.Function.ToMethod($.Array.prototype.findIndex);
    }

    /**
     * This method creates a new Array instance with a variable number of arguments,
     * regardless of number or type of the arguments.
     * @memberof utilx.Array
     * @name of
     * @function
     * @param {...*} [varArgs]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.of)) {
        $.Array.of = base.Array.of;
    } else {
        $.Array.of = function () {
            return slice(arguments);
        };
    }

    /**
     * from calls a provided callback function once for each element in an arrayLike object, in order,
     * and constructs a new array from the results.
     * @typedef {Function} fromCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @returns {*}
     */

    /**
     * Converts a single argument that is an array-like object or list (eg. arguments, NodeList,
     * DOMTokenList (used by classList), NamedNodeMap (used by attributes property)) into a new Array() and returns it.
     * @memberof utilx.Array
     * @name from
     * @function
     * @param {ArrayLike} arrayLike
     * @param {fromCallback} [mapfn]
     * @param {*} [thisArg]
     * @returns {Array}
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.from) && !checkV8StrictBug(base.Array.from)) {
        $.Array.from = base.Array.from;
    } else {
        $.Array.from = function (arrayLike, mapfn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(arrayLike),
                type = typeof mapfn,
                mapping = false,
                length = fixLength(object),
                array,
                isTargetArrayOrArguments;

            if (type !== 'undefined') {
                mapping = !!throwIfNotAFunction(mapfn);
            }

            if ($.Function.isFunction(this)) {
                array = new this(length);
                isTargetArrayOrArguments = isArrayOrArguments(array);
            } else {
                array = [];
                isTargetArrayOrArguments = true;
            }

            iter(object, false, 0, length, false, function (it, idx) {
                if (mapping) {
                    it = mapfn.call(thisArg, it, idx);
                }

                if (isTargetArrayOrArguments) {
                    this(array, idx, it);
                } else {
                    array[idx] = it;
                }
            }, $.Array.assign);

            array.length = length;

            return array;
        };
    }

    /**
     * The every method executes the provided callback function once for each element present in the array
     * until it finds one where callback returns a falsy value (a value that becomes false when converted to a Boolean).
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} everyCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that every was called upon.
     * @returns {*}
     */

    /**
     * Tests whether all elements in the array pass the test implemented by the provided function.
     * @memberof utilx.Array
     * @name every
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {everyCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
     */
    try {
        every('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.every) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.Array.every)) {

            $.Array.every = $.Function.ToMethod(base.Array.every);
        } else {
            throw new Error();
        }
    } catch (eEvery) {
        $.Array.prototype.every = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                val = true;

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                val = !!this.call(thisArg, it, idx, obj);

                return !val;
            }, throwIfNotAFunction(fn));

            return val;
        };

        $.Array.every = $.Function.ToMethod($.Array.prototype.every);
    }

    /**
     * map calls a provided callback function once for each element in an arrayLike object, in order,
     * and constructs a new array from the results.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} mapCallback
     * @param {*} element The current element being processed in the array.
     * @param {number} index The index of the current element being processed in the array.
     * @param {Object} object The object that map was called upon.
     * @returns {*}
     */

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     * @memberof utilx.Array
     * @name map
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {mapCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
     */
    try {
        map('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.map) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.Array.map)) {

            $.Array.map = $.Function.ToMethod(base.Array.map);
        } else {
            throw new Error();
        }
    } catch (eMap) {
        $.Array.prototype.map = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                arr = [];

            arr.length = fixLength(object);
            iter(object, true, 0, arr.length, false, function (it, idx, obj) {
                $.Array.assign(arr, idx, this.call(thisArg, it, idx, obj));
            }, throwIfNotAFunction(fn));

            return arr;
        };

        $.Array.map = $.Function.ToMethod($.Array.prototype.map);
    }

    /**
     * Returns some args for testing purposes.
     * @private
     * @function someArgs
     * @returns {Arguments}
     */
    function someArgs() {
        return $.Function.returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined);
    }

    /**
     * Creates a new array from arguments, starting at start and ending at end.
     * @private
     * @function internalSlice
     * @param {ArrayLike} array
     * @param {NumberLike} [start]
     * @param {NumberLike} [end]
     * @returns {Array}
     */
    internalSlice = function (start, end) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            length = fixLength(object),
            relativeStart = $.Number.toInteger(start),
            val = [],
            next = 0,
            isTargetArrayOrArguments = isArrayOrArguments(object),
            type = typeof end,
            relativeEnd,
            finalEnd,
            k;

        if ($.Math.sign(relativeStart) < 0) {
            k = mMax(length + relativeStart, 0);
        } else {
            k = mMin(relativeStart, length);
        }

        if (type === 'undefined') {
            relativeEnd = length;
        } else {
            relativeEnd = $.Number.toInteger(end);
        }

        if ($.Math.sign(relativeEnd) < 0) {
            finalEnd = mMax(length + relativeEnd, 0);
        } else {
            finalEnd = mMin(relativeEnd, length);
        }

        val.length = mMax(finalEnd - k, 0);
        while (k < finalEnd) {
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
     * @memberof utilx.Array
     * @name slice
     * @function
     * @param {ArrayLike} array
     * @param {NumberLike} [start]
     * @param {NumberLike} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
     */
    try {
        if (testShims || !$.Function.isNativeFunction(base.Array.slice) ||
                slice(someArgs()).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), Undefined, Undefined).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), -1).length !== 1 ||
                slice(someArgs(), 0).toString() !== ',,1,a,2,b,,' ||
                slice(someArgs(), 3).toString() !== 'a,2,b,,' ||
                slice(someArgs(), -1, 4).length ||
                slice(someArgs(), 0, 4).toString() !== ',,1,a' ||
                slice(someArgs(), 3, 6).toString() !== 'a,2,b') {

            throw new Error();
        }

        $.Array.prototype.slice = function () {
            try {
                return base.Array.slice.apply(this, arguments);
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
     * @memberof utilx.Array
     * @name filter
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Function} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
     */
    try {
        filter('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.filter) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1) && !checkV8StrictBug(base.Array.filter)) {

            $.Array.filter = $.Function.ToMethod(base.Array.filter);
        } else {
            throw new Error();
        }
    } catch (eFilter) {
        $.Array.prototype.filter = function (fn, thisArg) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                //next = 0,
                arr = [];

            iter(object, true, 0, fixLength(object), false, function (it, idx, obj) {
                if (this.call(thisArg, it, idx, obj)) {
                    $.Array.push(arr, it);
                    //$.Array.assign(arr, next, it);
                    //next += 1;
                }
            }, throwIfNotAFunction(fn));

            return arr;
        };

        $.Array.filter = $.Function.ToMethod($.Array.prototype.filter);
    }

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     * @memberof utilx.Array
     * @name reduce
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Function} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
     */
    try {
        reduce('foo', function (unused1, unused2, unused3, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.reduce) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1)) {

            $.Array.reduce = $.Function.ToMethod(base.Array.reduce);
        } else {
            throw new Error();
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
            length = fixLength(object);
            if (!length && arguments.length === 1) {
                throw new base.TypeError.Ctr(reduceTypeErrorMessage);
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
                    throw new base.TypeError.Ctr(reduceTypeErrorMessage);
                }
            }

            while (index < length) {
                if ($.Object.has(object, index)) {
                    accumulator = fn.call(Undefined, accumulator, object[index], index, object);
                }

                index += 1;
            }

            return accumulator;
        };

        $.Array.reduce = $.Function.ToMethod($.Array.prototype.reduce);
    }

    /**
     * This {@link boundPrototypalFunction method} applies a function against an accumulator and
     * each value of the array (from left-to-right) as to reduce it to a single value.
     * @memberof utilx.Array
     * @name reduceRight
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Function} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [initialValue]
     * @returns {*}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
     */
    try {
        reduceRight('foo', function (unused1, unused2, unused3, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testObject1 = list;
        });

        if (!testShims && $.Function.isNativeFunction(base.Array.reduceRight) && $.Object.isTypeObject(testObject1) &&
                $.String.isStringAny(testObject1)) {

            $.Array.reduceRight = $.Function.ToMethod(base.Array.reduceRight);
        } else {
            throw new Error();
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
            length = fixLength(object);
            if (!length && arguments.length === 1) {
                throw new base.TypeError.Ctr(reduceRightTypeErrorMessage);
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
                    throw new base.TypeError.Ctr(reduceRightTypeErrorMessage);
                }
            }

            while (index >= 0) {
                if ($.Object.has(object, index)) {
                    accumulator = fn.call(Undefined, accumulator, object[index], index, object);
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
     * @memberof utilx.Number
     * @name randomInt
     * @function
     * @param {number} [min]
     * @param {number} max
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
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
            mult = floor(random() * 2);
            if (mult === 0) {
                mult = -1;
            }

            val = floor(random() * $.Number.UNSAFE_INTEGER) * mult;
        } else {
            val = floor(random() * (max - min + 1) + min);
        }

        return val;
    };

    /**
     * Default compare function for stableSort.
     * @private
     * @function defaultComparison
     * @param {*} left
     * @param {*} right
     * @returns {number}
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
     * @param {ArrayLike} left
     * @param {ArrayLike} right
     * @param {Function} comparison
     * @returns {Array}
     */
    function merge(left, right, comparison) {
        var result = [];

        while (left.length && right.length) {
            if (comparison(left[0], right[0]) <= 0) {
                push(result, shift(left));
            } else {
                push(result, shift(right));
            }
        }

        while (left.length) {
            push(result, shift(left));
        }

        while (right.length) {
            push(result, shift(right));
        }

        return result;
    }

    /**
     * mergeSort function for stableSort.
     * @private
     * @function mergeSort
     * @param {ArrayLike} array
     * @param {Function} comparefn
     * @returns {Array}
     */
    function mergeSort(array, comparefn) {
        var length = fixLength(array),
            middle,
            val;

        if (length < 2) {
            val = slice(array);
        } else {
            middle = ceil(length / 2);
            val = merge(mergeSort(slice(array, 0, middle), comparefn),
                         mergeSort(slice(array, middle), comparefn), comparefn);
        }

        return val;
    }

    /**
     * This {@link boundPrototypalFunction method} method sorts the elements of an array in place and returns the array.
     * This is a stable sort. The default sort order is lexicographic (not numeric).
     * @memberof utilx.Array
     * @name stableSort
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Function} [compareFN]
     * @throws {TypeError} if compareFN is defined and is not a function
     * @returns {ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     * @see http://en.wikipedia.org/wiki/Sorting_algorithm#Stability
     */
    $.Array.prototype.stableSort = function (comparefn) {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            type = typeof comparefn,
            isTargetArrayOrArguments;

        if (type === 'undefined') {
            comparefn = defaultComparison;
        }

        throwIfNotAFunction(comparefn);
        if (fixLength(object) > 1) {
            isTargetArrayOrArguments = isArrayOrArguments(object);
            $.Array.forEach(mergeSort(object, comparefn), function (value, index) {
                if (isTargetArrayOrArguments) {
                    this(object, index, value);
                } else {
                    object[index] = value;
                }
            }, $.Array.assign);
        }

        return object;
    };

    $.Array.stableSort = $.Function.ToMethod($.Array.prototype.stableSort);

    /**
     * This {@link boundPrototypalFunction method} sorts the elements of an array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     * @memberof utilx.Array
     * @name sort
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Function} [compareFN]
     * @throws {TypeError} if compareFN is defined and is not a function
     * @returns {ArrayLike} same type as supplied array argument.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
     */
    if (!testShims && $.Function.isNativeFunction(sort)) {
        $.Array.prototype.sort = function (comparefn) {
            var type = typeof comparefn;

            if (type === 'undefined') {
                comparefn = defaultComparison;
            }

            return sort.call(checkObjectCoercible(this), throwIfNotAFunction(comparefn));
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
     * @returns {string}
     */
    function buildTestString(previous, element) {
        return previous + base.String.Ctr.fromCharCode(element);
    }

    base.String.wsStr = $.Array.reduce(base.String.whiteSpaces, function (previous, element) {
        return previous + '\\u' + $.String.padLeadingChar(element.toString(16), '0', 4);
    }, '');

    /**
     * This {@link boundPrototypalFunction method} removes whitespace from both ends of the string.
     * @memberof utilx.String
     * @name trim
     * @function
     * @param {string} inputArg
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    try {
        if (!testShims && $.Function.isNativeFunction(base.String.trim) &&
                !trim($.Array.reduce(base.String.whiteSpaces, buildTestString, '')).length) {

            $.String.trim = $.Function.ToMethod(base.String.trim);
        } else {
            throw new Error();
        }
    } catch (eTrim) {
        base.RegExp.wsTrim = new RegExp('^[' + base.String.wsStr + ']+|[' + base.String.wsStr + ']+$', 'g');
        $.String.prototype.trim = function () {
            return $.String.replace(onlyCoercibleToString(this), base.RegExp.wsTrim, '');
        };

        $.String.trim = $.Function.ToMethod($.String.prototype.trim);
    }

    /**
     * This function parses a string argument and returns an integer of the specified radix or base.
     * @memberof utilx.Number
     * @name parseInt
     * @function
     * @param {StringLike} inputArg
     * @param {number} radix
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseInt
     */
    if (testShims || !$.Function.isNativeFunction(base.Number.parseInt) ||
            base.Number.parseInt(base.String.wsStr + '08') !== 8 ||
            base.Number.parseInt(base.String.wsStr + '0x16') !== 22) {

        if (testShims || base.parseInt(base.String.wsStr + '08') !== 8 ||
                base.parseInt(base.String.wsStr + '0x16') !== 22) {

            base.RegExp.hex = new RegExp('^0[xX]');
            $.Number.parseInt = function (str, radix) {
                var type = typeof radix;

                str = $.String.trim(str);
                if (type === 'undefined' || !$.Number.toInt32(radix)) {
                    radix = test(base.RegExp.hex, str) ? 16 : 10;
                }

                return base.parseInt(str, radix);
            };
        } else {
            $.Number.parseInt = base.parseInt;
        }
    } else {
        $.Number.parseInt = base.Number.parseInt;
    }

    /**
     * This method parses a string argument and returns a floating point number.
     * @memberof utilx.Number
     * @name parseFloat
     * @function
     * @param {StringLike} inputArg
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/parseFloat
     */
    if (!testShims && $.Function.isNativeFunction(base.Number.parseFloat)) {
        $.Number.parseFloat = base.Number.parseFloat;
    } else {
        $.Number.parseFloat = base.parseFloat;
    }

    /**
     * This {@link boundPrototypalFunction method} formats a number using fixed-point notation.
     * @memberof utilx.Number
     * @name toFixed
     * @function
     * @param {number} fractionDigits
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
     */
    if (testShims || !$.Function.isNativeFunction(base.Number.toFixed) ||
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
                iter(data, false, 0, size, false, function (it, idx, obj) {
                    c += n * it;
                    obj[idx] = c % this;
                    c = floor(c / this);
                }, baseNum);
            }

            function divide(n) {
                var c = 0;

                iter(data, true, last, 0, true, function (it, idx, obj) {
                    c += it;
                    obj[idx] = floor(c / n);
                    c = (c % n) * this;
                }, baseNum);
            }

            function numToString() {
                var s = '';

                iter(data, true, last, 0, true, function (it, idx) {
                    if (s || !idx || it) {
                        it = this(it);
                        if (!s) {
                            s = it;
                        } else {
                            s += strSlice('0000000', 0, 7 - it.length) + it;
                        }
                    }
                }, $.String.ToString);

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
                    throw new base.Error.Ctr();
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
                    f = floor(f);
                }

                if (f < 0 || f > 20) {
                    throw new RangeError('Number.toFixed called with invalid number of decimals');
                }

                x = +this;
                // Test for NaN or if it is too big or small, return the string value of the number.
                if ($.Number.isNaN(x) || x <= -1e21 || x >= 1e21) {
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
        $.Number.prototype.toFixed = base.Number.toFixed;
    }

    $.Number.toFixed = $.Function.ToMethod($.Number.prototype.toFixed, function (num) {
        return num;
    });

    /**
     * This {@link boundPrototypalFunction method} returns the first index at which a given element can
     * be found in the array, or -1 if it is not present.
     * @memberof utilx.Array
     * @name indexOf
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Object} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.indexOf) && indexOf([0, 1], 1, 2) === -1) {
        $.Array.indexOf = $.Function.ToMethod(base.Array.indexOf);
    } else {
        $.Array.prototype.indexOf = function (searchElement, fromIndex) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = fixLength(object),
                val = -1;

            if (length) {
                if (arguments.length > 1) {
                    fromIndex = $.Number.toInteger(fromIndex);
                } else {
                    fromIndex = 0;
                }

                if (fromIndex < length) {
                    if (fromIndex < 0) {
                        fromIndex = length - abs(fromIndex);
                    }

                    if (fromIndex < 0) {
                        fromIndex = 0;
                    }

                    iter(object, true, fromIndex, length, false, function (it, idx) {
                        if (this === it) {
                            val = idx;
                            return true;
                        }

                        return false;
                    }, searchElement);
                }
            }

            return val;
        };

        $.Array.indexOf = $.Function.ToMethod($.Array.prototype.indexOf);
    }

    /**
     * This {@link boundPrototypalFunction method} returns the first index at which a given element
     * can be found in the array, or -1 if it is not present.
     * @memberof utilx.Array
     * @name lastIndexOf
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Object} searchElement
     * @param {number} [fromIndex]
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.lastIndexOf) && lastIndexOf([0, 1], 0, -3) === -1) {
        $.Array.lastIndexOf = $.Function.ToMethod(base.Array.lastIndexOf);
    } else {
        $.Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = fixLength(object),
                val = -1;

            if (length) {
                if (arguments.length > 1) {
                    fromIndex = $.Number.toInteger(fromIndex);
                } else {
                    fromIndex = length - 1;
                }

                if (fromIndex >= 0) {
                    fromIndex = mMin(fromIndex, length - 1);
                } else {
                    fromIndex = length - abs(fromIndex);
                }

                iter(object, true, fromIndex, 0, true, function (it, idx) {
                    if (this === it) {
                        val = idx;
                        return true;
                    }

                    return false;
                }, searchElement);
            }

            return val;
        };

        $.Array.lastIndexOf = $.Function.ToMethod($.Array.prototype.lastIndexOf);
    }

    /**
     * With this {@link boundPrototypalFunction method}, fill every element of array from start up
     * to but not including end is assigned value.
     * @memberof utilx.Array
     * @name fill
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {*} value
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.fill)) {
        $.Array.fill = $.Function.ToMethod(base.Array.fill);
    } else {
        $.Array.prototype.fill = function (value, start, end) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = fixLength(object),
                relativeStart = $.Number.toInteger(start),
                type = typeof end,
                relativeEnd,
                finalEnd,
                isTargetArrayOrArguments;

            if (start < 0) {
                relativeStart = mMax(length + relativeStart, 0);
            } else {
                relativeStart = mMin(relativeStart, length);
            }

            if (type === 'undefined') {
                relativeEnd = length;
            } else {
                relativeEnd = $.Number.toInteger(end);
            }

            if (relativeEnd < 0) {
                finalEnd = mMax(length + relativeEnd, 0);
            } else {
                finalEnd = mMin(relativeEnd, length);
            }

            isTargetArrayOrArguments = isArrayOrArguments(object);
            iter(object, false, relativeStart, finalEnd, false, function (unused, idx, obj) {
                /*jslint unparam: true */
                /*jshint unused: false */
                if (isTargetArrayOrArguments) {
                    this(obj, idx, value);
                } else {
                    obj[idx] = value;
                }
            }, $.Array.assign);

            return object;
        };

        $.Array.fill = $.Function.ToMethod($.Array.prototype.fill);
    }

    /**
     * With this {@link boundPrototypalFunction method}, every element of array from start up to but
     * not including end is assigned value.
     * @memberof utilx.Array
     * @name copyWithin
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {number} target
     * @param {number} [start]
     * @param {number} [end]
     * @returns {Array}
     */
    if (!testShims && $.Function.isNativeFunction(base.Array.copyWithin)) {
        $.Array.copyWithin = $.Function.ToMethod(base.Array.copyWithin);
    } else {
        $.Array.prototype.copyWithin = function (target, start, end) {
            var object = $.Object.ToObjectFixIndexedAccess(this),
                length = fixLength(object),
                relativeTarget = $.Number.toInteger(target),
                relativeStart = $.Number.toInteger(start),
                type = typeof end,
                relativeEnd,
                to,
                from,
                finalEnd,
                count,
                direction,
                isTargetArrayOrArguments;

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

            if (type === 'undefined') {
                relativeEnd = length;
            } else {
                relativeEnd = $.Number.toInteger(end);
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

            isTargetArrayOrArguments = isArrayOrArguments(object);
            iter(object, false, count, 1, true, function (unused1, unused2, obj) {
                /*jslint unparam: true */
                /*jshint unused: false */
                if (hasOwn(obj, from)) {
                    if (isTargetArrayOrArguments) {
                        this(obj, to, obj[from]);
                    } else {
                        obj[to] = obj[from];
                    }
                } else {
                    delete obj[to];
                }

                from += direction;
                to += direction;
            }, $.Array.assign);

            return object;
        };

        $.Array.copyWithin = $.Function.ToMethod($.Array.prototype.copyWithin);
    }

    /**
     * Returns true if the operand key matches the test property name.
     * @private
     * @function unwantedErrorPropsFilter
     * @param {key} string
     * @returns {boolean}
     */
    unwantedErrorPropsFilter = function (key) {
        return key !== this;
    };

    enumer(base.Error.proto, false, function (unused, prop) {
        /*jslint unparam: true */
        /*jshint unused: false */
        if (this.contains(base.props.unwantedError, prop)) {
            hasErrorProps = true;
        } else {
            base.props.unwantedError = this.filter(base.props.unwantedError, unwantedErrorPropsFilter, prop);
        }
    }, $.Array);

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
     * @memberof utilx.Object
     * @name keys
     * @function
     * @param {Object} object
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
     */
    try {
        if (!testShims && $.Function.isNativeFunction(base.Object.keys)) {
            keysWorksWithArguments = base.Object.keys($.Function.returnArgs(1, 2)).length === 2;
            if (hasErrorProps) {
                $.Object.keys = function (object) {
                    if (!keysWorksWithArguments && $.Object.isArguments(object)) {
                        object = slice(object);
                    }

                    var keys = base.Object.keys(object);

                    if (isErrorTypePrototype(object)) {
                        keys = $.Array.filter(keys, function (key) {
                            return !this(base.props.unwantedError, key);
                        }, $.Array.contains);
                    }

                    return keys;
                };
            } else if (!keysWorksWithArguments) {
                $.Object.keys = function (object) {
                    return base.Object.keys(slice(object));
                };
            } else {
                $.Object.keys = base.Object.keys;
            }
        } else {
            throw new Error();
        }
    } catch (eKeys) {
        $.Object.keys = function (object) {
            throwIfIsPrimitive(object);

            var skipProto = hasFuncProtoBug && $.Function.isFunction(object),
                skipErrorProps = hasErrorProps && isErrorTypePrototype(object),
                props = enumer(object, false, function (unused, prop, obj) {
                    /*jslint unparam: true */
                    /*jshint unused: false */
                    if (!(skipProto && prop === 'prototype') && !(skipErrorProps &&
                            $.Array.contains(base.props.unwantedError, prop)) && $.Object.hasOwn(obj, prop)) {

                        push(this, prop);
                    }
                }, []),
                ctor,
                isProto,
                nonEnum;

            if (hasDontEnumBug && object !== base.Object.proto) {
                ctor = object.constructor;
                isProto = ($.Function.isFunction(ctor) && ctor.prototype === object);
                nonEnum = nonEnumProps[$.Object.ToClassString(object)];
                $.Array.forEach(base.props.shadowed, function (property) {
                    if (!(isProto && nonEnum[property]) && this(object, property)) {
                        push(props, property);
                    }
                }, $.Object.hasOwn);
            }

            return props;
        };
    }

    /**
     * forKeys executes the callback function once for each own property present in the object until it finds one
     * where callback returns a true value.
     * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
     * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
     * @typedef {Function} forKeysCallback
     * @param {*} element The current property being processed in the object.
     * @param {prop} index The property name of the current property being processed in the object.
     * @param {Object} object The object that some was called upon.
     * @returns {boolean}
     */

    /**
     * Executes a provided function once per object property and allows a some like break.
     * @memberof utilx.Object
     * @name forKeys
     * @function
     * @param {object} object
     * @throws {TypeError} if object is {@link primitive}
     * @param {forKeysCallback} fn
     * @throws {TypeError} if fn is not a function
     * @param {*} [thisArg]
     * @returns {boolean}
     */
    $.Object.forKeys = function (object, fn, thisArg) {
        var obj = $.Object.ToObjectFixIndexedAccess(object),
            keys = $.Object.keys(obj),
            val = false;

        iter(keys, true, 0, fixLength(keys), false, function (it) {
            if (this.call(thisArg, obj[it], it, obj)) {
                val = true;
            }

            return val;
        }, throwIfNotAFunction(fn));

        return val;
    };

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
     * @memberof utilx.Object
     * @name isEmpty
     * @function
     * @param {Object} inputArg
     * @returns {boolean}
     */
    $.Object.isEmpty = function (inputArg) {
        return !$.Object.keys(inputArg).length;
    };

    /**
     * This {@link boundPrototypalFunction method} returns true if the operand inputArg is a String and
     * only contains numerical digits.
     * @memberof utilx.String
     * @name isDigits
     * @function
     * @param {*} string
     * @returns {boolean}
     */
    $.String.prototype.isDigits = function () {
        return $.RegExp.test(base.RegExp.notDigits, onlyCoercibleToString(this));
    };

    $.String.isDigits = $.Function.ToMethod($.String.prototype.isDigits);

    /**
     * Returns true if the operand inputArg is deemed numeric.
     * @memberof utilx.Object
     * @name isNumeric
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isNumeric = function (inputArg) {
        var val = false,
            string;

        if ($.Number.isNumberAny(inputArg) || $.String.isStringAny(inputArg)) {
            string = $.String.replace($.String.ToString(inputArg), base.RegExp.plusMinus, '');
            if (!base.isNaN(base.parseFloat(string)) && base.isFinite(string)) {
                val = true;
            }
        }

        return val;
    };

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     * @memberof utilx.Object
     * @name defineProperty
     * @function
     * @param {Object} object
     * @param {string} property
     * @param {Object} descriptor
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
     */
    try {
        if (testShims) {
            throw new Error();
        }

        testObject1 = base.Object.defineProperty({}, 'sentinel', {
            value: null
        });

        if (testObject1.sentinel !== null) {
            throw new Error('Fails sentinel check');
        }

        // Test string integer
        try {
            testValue = base.Object.defineProperty([], '1.', {
                value: null
            });

            if (testValue[1] !== null) {
                throw new Error('Fails integer check');
            }
        } catch (eDP1) {
            definePropertyPatch1 = true;
        }

        // Test assign to array
        try {
            testObject1 = base.Object.defineProperty([], '0', {
                value: null
            });

            if (testObject1[0] !== null) {
                throw new Error('Fails array check');
            }
        } catch (eDP2) {
            definePropertyPatch2 = true;
        }

        // Test overwrite array property when no value defined
        try {
            testObject1 = base.Object.defineProperty([10], '0', {});
            if (testObject1[0] !== 10) {
                throw new Error('Fails overwrite check');
            }
        } catch (eDP3) {
            definePropertyPatch3 = true;
        }

        if (definePropertyPatch1 || definePropertyPatch2 || definePropertyPatch3) {
            $.Object.defineProperty = function (object, property, descriptor) {
                var isA = isArrayOrArguments(object) && $.Object.isNumeric(property) && $.Number.isUint32(+property),
                    isB = (definePropertyPatch1 || definePropertyPatch2) && hasOwn(descriptor, 'value');

                if (definePropertyPatch1 && isA) {
                    property = +property;
                }

                if (definePropertyPatch2 && isA && (isB || !$.Object.hasOwn(object, property))) {
                    $.Array.assign(object, property, descriptor.value);
                }

                if (definePropertyPatch3 && isA && !isB) {
                    descriptor.value = object[property];
                }

                return base.Object.defineProperty(object, property, descriptor);
            };
        } else {
            $.Object.defineProperty = base.Object.defineProperty;
        }

        testObject1 = {
            abc: 0,
            def: '',
            ghi: true,
            jkl: $.Function.noop
        };

        $.Array.forEach($.Object.keys(testObject1), function (key) {
            this(testObject1, key, base.properties.notEnumerable);
        }, $.Object.defineProperty);

        if (testObject1.abc !== 0 || testObject1.def !==  '' || testObject1.ghi !== true ||
                                                        testObject1.jkl !== $.Function.noop) {

            throw new Error();
        }

        testObject1 = [10, true, '', $.Function.noop];

        $.Array.forEach($.Object.keys(testObject1), function (key) {
            this(testObject1, key, base.properties.notEnumerable);
        }, $.Object.defineProperty);

        if (testObject1[0] !== 10 || testObject1[1] !== true || testObject1[2] !== '' ||
                                                        testObject1[3] !== $.Function.noop) {

            throw new Error();
        }
    } catch (eDP) {
        $.Object.defineProperty = function (object, property, descriptor) {
            throwIfIsPrimitive(object);
            if ($.Object.isPrimitive(descriptor)) {
                throw new base.TypeError.Ctr('Property descriptor must be an object: ' + $.String.ToString(descriptor));
            }

            if (hasOwn(descriptor, 'value') && (hasOwn(descriptor, 'get') || hasOwn(descriptor, 'set'))) {
                throw new base.TypeError.Ctr('Invalid property. A property cannot have accessors and a value');
            }

            var prototype,
                type;

            if (!hasOwn(descriptor, 'get') && !hasOwn(descriptor, 'set')) {
                if (hasOwn(descriptor, 'value') || !$.Object.hasOwn(object, property)) {
                    if (isProtoSupported) {
                        prototype = object[base.str.proto];
                        object[base.str.proto] = base.Object.proto;
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

                        type = typeof prototype;
                        if (type === 'undefined') {
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
                if (!$.Function.isNativeFunction(base.Object.defineGetter) ||
                        !$.Function.isNativeFunction(base.Object.defineSetter)) {

                    throw new base.TypeError.Ctr('getters & setters can not be defined on this javascript engine');
                }

                if ($.Function.isFunction(descriptor.get)) {
                    base.Object.defineGetter.call(object, property, descriptor.get);
                }

                if ($.Function.isFunction(descriptor.set)) {
                    base.Object.defineSetter.call(object, property, descriptor.set);
                }
            }

            return object;
        };
    }

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     * @memberof utilx.Object
     * @name defineProperties
     * @function
     * @param {Object} object
     * @param {string} props
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
     */
    $.Object.defineProperties = function (object, props) {
        throwIfIsPrimitive(object);
        if ($.Object.isPrimitive(props)) {
            throw new base.TypeError.Ctr('Property description must be an object');
        }

        $.Array.forEach($.Object.keys(props), function (key) {
            this(object, key, props[key]);
        }, $.Object.defineProperty);

        return object;
    };

    /**
     * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties
     * from being removed; and prevents existing properties, or their enumerability, configurability, or
     * writability, from being changed.
     * In essence the object is made effectively immutable. Returns the object being frozen.
     * @memberof utilx.Object
     * @name freeze
     * @function
     * @param {Object} object
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.freeze)) {
        $.Object.freeze = base.Object.freeze;
    } else {
        $.Object.freeze = function (object) {
            return throwIfIsPrimitive(object);
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
     * @memberof utilx.Object
     * @name isFrozen
     * @function
     * @param {Object} object
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/isFrozen
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.isFrozen)) {
        $.Object.isFrozen = base.Object.isFrozen;
    } else {
        $.Object.isFrozen = function (object) {
            throwIfIsPrimitive(object);

            return false;
        };
    }

    /**
     * To make object fully immutable, freeze each object in object.
     * @memberof utilx.Object
     * @name deepFreeze
     * @function
     * @param {Object} object
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
     */
    $.Object.deepFreeze = function (object) {
        $.Object.freeze(object);
        $.Array.forEach($.Object.keys(object), function (propKey) {
            var prop = object[propKey];

            if ($.Object.isNotPrimitive(prop) && !this.isFrozen(prop)) {
                this.deepFreeze(prop);
            }
        }, $.Object);

        return object;
    };

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     * @memberof utilx.Object
     * @name instanceOf
     * @function
     * @param {Object} object
     * @param {Function} ctr
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.isPrototypeOf)) {
        $.Object.instanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            return $.Object.isNotPrimitive(object) &&
                (object instanceof ctr || base.Object.isPrototypeOf.call(ctr.prototype, object));
        };
    } else {
        $.Object.instanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            var val = false;

            if ($.Object.isNotPrimitive(object)) {
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
     * @memberof utilx.Object
     * @name assign
     * @function
     * @param {Object} target
     * @param {...Object} source
     * @returns {Object}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
     */
    if (!testShims && $.Function.isNativeFunction(base.Object.assign)) {
        $.Object.assign = base.Object.assign;
    } else {
        $.Object.assign = function (target) {
            throwIfIsPrimitive(target);

            var isTargetArrayOrArguments = isArrayOrArguments(target);

            $.Array.forEach(slice(arguments, 1), function (source) {
                this.forEach($.Object.keys(throwIfIsPrimitive(source)), function (key) {
                    var value = source[key];

                    if (isTargetArrayOrArguments) {
                        this.assign(target, key, value);
                    } else {
                        target[key] = value;
                    }
                }, this);
            }, $.Array);

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
     * @memberof utilx.Object
     * @name create
     * @function
     * @param {Prototype} prototype
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
     */
    try {
        if (testShims) {
            throw new Error();
        }

        testObject1 = base.Object.create(ObjectCreateFunc.prototype, {
            constructor: $.Object.assign({
                value: ObjectCreateFunc
            }, base.properties.notEnumerable),

            foo: $.Object.assign({
                value: 'test'
            }, base.properties.notEnumerable)
        });

        if (testObject1.foo !== 'test') {
            throw new Error();
        }

        $.Object.create = base.Object.create;
    } catch (eCreate) {
        $.Object.create = function (prototype, propertiesObject) {
            ObjectCreateFunc.prototype = throwIfIsPrimitive(prototype);

            var newObject = new ObjectCreateFunc();

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
     * This {@link boundPrototypalFunction method} returns true if the operand inputArg is a Date object and is valid.
     * @memberof utilx.Date
     * @name isValid
     * @function
     * @param {*} dateObject
     * @returns {boolean}
     */
    $.Date.prototype.isValid = function () {
        if (!$.Date.isDate(this)) {
            throw new base.TypeError.Ctr('this is not a Date object.');
        }

        return !$.Number.isNaN(base.Date.getTime.call(this));
    };

    $.Date.isValid = $.Function.ToMethod($.Date.prototype.isValid);

    /**
     * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @memberof utilx.Date
     * @name now
     * @function
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
     */
    if (!testShims && $.Function.isNativeFunction(base.Date.now)) {
        $.Date.now = base.Date.now;
    } else {
        $.Date.now = function now() {
            return base.Date.getTime.call(new base.Date.Ctr());
        };
    }

    /**
     * This {@link boundPrototypalFunction method} takes a string and puts a backslash in front of every character
     * that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain
     * special regex characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberof utilx.String
     * @name escapeRegex
     * @function
     * @param {string} string
     * @returns {string}
     */
    $.String.prototype.escapeRegex = function () {
        return $.String.replace(onlyCoercibleToString(this), base.RegExp.escapeThese, '\\$&');
    };

    $.String.escapeRegex = $.Function.ToMethod($.String.prototype.escapeRegex);

    /**
     * This {@link boundPrototypalFunction method} wraps a string within the given character.
     * @memberof utilx.String
     * @name wrapInChars
     * @function
     * @param {string} string
     * @param {string} character
     * @returns {string}
     */
    $.String.prototype.wrapInChars = function (characters) {
        if (!$.String.isStringAny(characters) && !$.Number.isNumberAny(characters)) {
            characters = '';
        } else {
            characters = $.String.ToString(characters);
        }

        return characters + onlyCoercibleToString(this) + characters;
    };

    $.String.wrapInChars = $.Function.ToMethod($.String.prototype.wrapInChars);

    /**
     * This {@link boundPrototypalFunction method} replaces all occurences of a string pattern within
     * a string with the string characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberof utilx.String
     * @name replaceAll
     * @function
     * @param {string} string
     * @param {(string|RegExp)} pattern
     * @param {string} characters
     * @returns {string}
     */
    $.String.prototype.replaceAll = function (pattern, characters) {
        if ($.String.isStringAny(pattern)) {
            pattern = new base.RegExp.Ctr($.String.escapeRegex(pattern), 'g');
        } else if ($.RegExp.isRegExp(pattern)) {
            pattern = copyRegExp(pattern, {
                add: 'g'
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
     * @memberof utilx.Object
     * @name deepEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @param {Object} opts
     * @returns {boolean}
     * @see http://wiki.commonjs.org/wiki/Unit_Testing
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
            return !this(a[aKey], b[aKey], opts);
        }, $.Object.deepEqual);

        if (status) {
            return false;
        }

        return true;
    };

    /**
     * Shortcut for $.Object.deepEqual(a, b, {strict: true})
     * @memberof utilx.Object
     * @name deepStrictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    $.Object.deepStrictEqual = function (a, b) {
        return $.Object.deepEqual(a, b, {
            strict: true
        });
    };

    /**
     * This {@link boundPrototypalFunction method} truncates a long string to the length specified by n;
     * used by AssertionError.toString
     * @memberof utilx.String
     * @name truncate
     * @function
     * @param {string} s
     * @param {NumberLike} n
     * @returns {string}
     */
    $.String.prototype.truncate = function (n) {
        var s = onlyCoercibleToString(this);

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
     * This {@link boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
     * @memberof utilx.Function
     * @name inherits
     * @function
     * @param {Function} ctor
     * @param {Function} superCtor
     * @returns {undefined}
     */
    $.Function.prototype.inherits = function (superCtor) {
        throwIfNotAFunction(this);
        throwIfNotAFunction(superCtor);
        this.superCtor = superCtor;
        this.prototype = $.Object.create(superCtor.prototype);
        $.Object.defineProperty(this.prototype, 'constructor', $.Object.assign({
            value: this
        }, base.properties.notEnumerable));
    };

    $.Function.inherits = $.Function.ToMethod($.Function.prototype.inherits);

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     * @memberof utilx.Error
     * @name isErrorTypeConstructor
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Error.isErrorTypeConstructor = function (inputArg) {
        var result;

        switch (inputArg) {
        case base.Error.Ctr:
            /* falls through */
        case base.TypeError.Ctr:
            /* falls through */
        case base.SyntaxError.Ctr:
            /* falls through */
        case base.RangeError.Ctr:
            /* falls through */
        case base.EvalError.Ctr:
            /* falls through */
        case base.ReferenceError.Ctr:
            /* falls through */
        case base.URIError.Ctr:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    /**
     * Custom replacer used to help stringify error messages.
     * @memberof utilx
     * @name customErrorReplacer
     * @function
     * @param {string} key Unused
     * @param {*} value
     * @returns {string}
     */
    $.customErrorReplacer = function () {
        var value = slice(arguments, 1, 2),
            type = typeof value,
            result;

        if (type === 'string') {
            result = value;
        } else if (type === 'undefined' || $.Function.isFunction(value) || $.RegExp.isRegExp(value) ||
                    (type === 'number' && !$.Number.isFinite(value))) {

            result = $.String.ToString(value);
        } else {
            result = value;
        }

        return result;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberof utilx
     * @name normaliseErrorIEToStringOn
     * @function
     * @returns {boolean}
     */
    $.normaliseErrorIEToStringOn = function () {
        var message = 'Should we patch IE6&7?';

        try {
            throw new base.Error.Ctr(message);
        } catch (ePatch) {
            if (ePatch.message === message && ePatch.toString() === base.classString.error) {
                previousIEErrorToString = base.Error.prototype.toString;
                $.Object.defineProperties(base.Error.proto, {
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
     * @memberof utilx
     * @name normaliseErrorIEToStringOff
     * @function
     * @returns {boolean}
     */
    $.normaliseErrorIEToStringOff = function () {
        if (patchedIEErrorToString) {
            $.Object.defineProperties(base.Error.proto, {
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
     * @memberof utilx
     * @name normaliseErrorIEToStringState
     * @function
     * @returns {boolean}
     */
    $.normaliseErrorIEToStringState = function () {
        return patchedIEErrorToString;
    };

    /**
     * Creates a custom Error constructor.
     * @private
     * @function makeCustomError
     * @param {string} name
     * @param {Function} ErrorConstructor Does not work with IE < 9, only Error can be used
     * @param {NumberLike} [maxMessageLength] Range 64 to Infinity (128 default)
     * @returns {Function}
     */
    function makeCustomError(name, ErrorConstructor, maxMessageLength) {
        if (typeof name !== 'string' || name === '') {
            throw new base.TypeError.Ctr('"name" was not a valid string');
        }

        if (!$.Error.isErrorTypeConstructor(ErrorConstructor)) {
            throw new base.TypeError.Ctr('"ErrorConstructor" was not an Error type');
        }

        maxMessageLength = +maxMessageLength;
        if ($.Number.isNaN(maxMessageLength) || maxMessageLength < 64) {
            maxMessageLength = 128;
        }

        /**
         * @private
         * @name CustomError
         * @constructor
         */
        function CustomError(message, stackStartFunction) {
            var err;

            if (typeof message !== 'string') {
                message = $.String.truncate($.JSON.stringify(message, $.customErrorReplacer),  maxMessageLength);
            }

            $.Object.defineProperty(this, 'message', $.Object.assign({
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
                if (typeof err.stack === 'string') {
                    $.Object.defineProperty(this, 'stack', $.Object.assign({
                        value: err.stack
                    }, base.properties.notEnumerable));
                } else if (typeof err.stacktrace === 'string') {
                    $.Object.defineProperty(this, 'stack', $.Object.assign({
                        value: err.stacktrace
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
                    var arr = $.String.split(this.message, base.RegExp.splitNewLine),
                        messageToString = this.name + ': ';

                    if (arr.length > 1) {
                        arr = $.Array.filter(arr, function (element) {
                            var val;

                            if (!this(element, 'opera:config#UserPrefs|Exceptions Have Stacktrace')) {

                                val = element;
                            }

                            return val;
                        }, $.String.contains);

                        messageToString += $.Array.join(arr, '\n');
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
        TestConstructor = makeCustomError('CustomSyntaxError', base.SyntaxError.Ctr);
        isOkToUseOtherErrors = $.Object.instanceOf(new TestConstructor('test'), base.SyntaxError.Ctr);
    } catch (eCSE) {
        // IE < 9
        isOkToUseOtherErrors = false;
    }

    /**
     * Creates a custom Error. If and invalid ErrorConstructor is provided it will default to Error.
     * If a valid native Error type constructor is provided but not supporte by the browesr the it will
     * also default to Error. (Looking at you IE < 9)
     * @memberof utilx
     * @name customError
     * @function
     * @param {string} name
     * @param {Function} [ErrorConstructor] Does not work with IE < 9, only Error can be used (defult: Error)
     * @param {NumberLike} [maxMessageLength] Range 64 to Infinity (128 default)
     * @returns {Function}
     */
    $.customError = function (name, ErrorConstructor, maxMessageLength) {
        if (typeof name !== 'string') {
            throw new base.TypeError.Ctr('"name" was not a string');
        }

        if (name === '') {
            throw new base.SyntaxError.Ctr('"name" was an empty string');
        }

        var type = typeof maxMessageLength;

        if (type === 'undefined') {
            type = typeof ErrorConstructor;
            if (type === 'number' || type === 'string') {
                maxMessageLength = ErrorConstructor;
                ErrorConstructor = base.Error.Ctr;
            }
        }

        if (!isOkToUseOtherErrors || !$.Error.isErrorTypeConstructor(ErrorConstructor)) {
            ErrorConstructor = base.Error.Ctr;
        }

        return makeCustomError(name, ErrorConstructor, maxMessageLength);
    };

    /*jslint maxlen: 125 */
    /**
     * Returns a property descriptor for an own property (that is, one directly present on an object,
     * not present by dint of being along an object's prototype chain) of a given object.
     * On environments that do not support it natively, this is just a sham to allow code to work.
     * @memberof utilx.Object
     * @function getOwnPropertyDescriptor
     * @param {Object} object
     * @param {string} property
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
     */
    /*jslint maxlen: 120 */
    try {
        testObject1 = {
            sentinel: null
        };

        testObject2 = [10, 20, 30];
        testObject2[4] = Undefined;
        if (testShims || !$.Function.isNativeFunction(base.Object.getOwnPropertyDescriptor) ||
                base.Object.getOwnPropertyDescriptor(testObject1, 'sentinel').value !== null ||
                base.Object.getOwnPropertyDescriptor(testObject2, 3).value !== 30 ||
                base.Object.getOwnPropertyDescriptor(testObject2, '3').value !== 30 ||
                !hasOwn(base.Object.getOwnPropertyDescriptor(testObject2, 4), 'value') ||
                base.Object.getOwnPropertyDescriptor(testObject2, 4).value !== Undefined ||
                base.Object.getOwnPropertyDescriptor(testObject2, 5) !== Undefined ||
                hasOwn(base.Object.getOwnPropertyDescriptor(testObject2, 5), 'value')) {

            throw new Error();
        }

        if (!(base.Object.getOwnPropertyDescriptor(function (a) {
                return a;
            }, 'length').writable)) {

            $.Object.getOwnPropertyDescriptor = base.Object.getOwnPropertyDescriptor;
        } else {
            $.Object.getOwnPropertyDescriptor = function (object, property) {
                var descriptor = base.Object.getOwnPropertyDescriptor(object, property);

                if ($.Function.isFunction(object) && property === 'length' && descriptor.writable) {
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
                setter,
                type;

            if ($.Object.hasOwn(throwIfIsPrimitive(object), property)) {
                descriptor = {};
                descriptor.configurable = true;
                descriptor.enumerable = true;
                if (areGetSetSupported) {
                    prototype = object[base.str.proto];
                    object[base.str.proto] = base.Object.proto;
                    getter = base.Object.lookupGetter.call(object, property);
                    setter = base.Object.lookupSetter.call(object, property);
                    type = typeof prototype;
                    if (type === 'undefined') {
                        delete object[base.str.proto];
                    } else {
                        object[base.str.proto] = prototype;
                    }

                    if ($.Function.isNativeFunction(getter) || $.Function.isNativeFunction(setter)) {
                        if ($.Function.isNativeFunction(getter)) {
                            descriptor.get = getter;
                        }

                        if ($.Function.isNativeFunction(setter)) {
                            descriptor.set = setter;
                        }
                    }
                }

                descriptor.value = object[property];
                descriptor.writable = true;
            }

            return descriptor;
        };
    }

    /**
     * Swap places of 2 item values on an object's properties.
     * @memberof utilx.Object
     * @name swapItems
     * @function
     * @param {Object} object
     * @param {NumberLike} prop1
     * @param {NumberLike} prop2
     * @returns {Object}
     */
    $.Object.swapItems = function (object, prop1, prop2) {
        throwIfIsPrimitive(object);
        prop1 = $.String.ToString(prop1);
        prop2 = $.String.ToString(prop2);

        var temp1,
            temp2,
            num;

        if (prop1 !== prop2) {
            temp1 = $.Object.getOwnPropertyDescriptor(object, prop1);
            temp2 = $.Object.getOwnPropertyDescriptor(object, prop2);
            num = $.Number.toUint32(prop2);
            if (!$.Object.isPlainObject(temp1) || !hasOwn(temp1, 'value')) {
                if ($.Object.isTypeObject(object) && !$.Function.isFunction(object) && hasValidLength(object) &&
                        $.String.ToString(num) === prop2 && num === object.length - 1) {

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
            if (!$.Object.isPlainObject(temp2) || !hasOwn(temp2, 'value')) {
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
     * This {@link boundPrototypalFunction method} performs Fisher-Yates shuffle for randomly shuffling a set.
     * @memberof utilx.Array
     * @name shuffle
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {NumberLike} [rounds]
     * @returns {Array} same type as supplied array argument.
     * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    $.Array.prototype.shuffle = function (rounds) {
        var object = $.Object.ToObject(this),
            isString = $.String.isStringObject(object),
            array,
            length;

        if (isString) {
            array = split(object, '');
        } else {
            array = object;
        }

        length = fixLength(array);
        if (length > 1) {
            iter(null, false, 0, mMin(mMax($.Number.toInteger(rounds), 1), $.Number.MAX_INTEGER), false, function () {
                iter(array, false, 0, length, false, function (unused, idx, obj) {
                    /*jslint unparam: true */
                    /*jshint unused: false */
                    this(obj, idx, $.Number.randomInt(0, idx));
                }, this);
            }, $.Object.swapItems);

            array.length = length;
        }

        if (isString) {
            object = join(array, '');
            if ($.String.isStringObject(this)) {
                object = $.Object.ToObject(object);
            }
        } else if ($.Object.isPrimitive(this)) {
            object = this;
        }

        return object;
    };

    $.Array.shuffle = $.Function.ToMethod($.Array.prototype.shuffle);

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     * @memberof utilx.JSON
     * @name stringify
     * @function
     * @param {*} value
     * @param {(Function|Array)} replacer
     * @param {number} space
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify
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
                base.JSON.stringify(0) === '0' &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                base.JSON.stringify(new base.Number.Ctr()) === '0' &&
                base.JSON.stringify(new base.String.Ctr()) === '""' &&
                // FF 3.1b1, 2 throw an error if the stringifiedValue is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                $.Object.isUndefined(base.JSON.stringify($.Function.noop)) &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                $.Object.isUndefined(base.JSON.stringify(Undefined)) &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the stringifiedValue is omitted entirely.
                $.Object.isUndefined(base.JSON.stringify()) &&
                // FF 3.1b1, 2 throw an error if the given stringifiedValue is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                base.JSON.stringify(stringifiedValue) === '1' &&
                base.JSON.stringify([stringifiedValue]) === '[1]' &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                base.JSON.stringify([Undefined]) === '[null]' &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                base.JSON.stringify(null) === 'null' &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, $.Function.noop, 1]` serializes as "[1,true,],". These versions
                // of Firefox also allow trailing commas in JSON objects and arrays.
                // FF 3.1b3 elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                base.JSON.stringify([Undefined, $.Function.noop, null]) === '[null,null,null]' &&
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
                base.JSON.stringify(new base.Date.Ctr(-8.64e15)) === '"-271821-04-20T00:00:00.000Z"' &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                base.JSON.stringify(new base.Date.Ctr(8.64e15)) === '"+275760-09-13T00:00:00.000Z"' &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                base.JSON.stringify(new base.Date.Ctr(-621987552e5)) === '"-000001-01-01T00:00:00.000Z"' &&
                // Safari <= 5.1.7 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                base.JSON.stringify(new base.Date.Ctr(-1)) === '"1969-12-31T23:59:59.999Z"';
        } catch (eStringify) {
            isSupportedResult = false;
        }
    }

    if (isSupportedResult) {
        $.JSON.stringify = base.JSON.stringify;
    } else {
        base.str.stringifyRxCharacters = '[\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5' +
                                            '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';

        base.RegExp.stringifyEscapable = new RegExp(base.str.stringifyRxCharacters, 'g');
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

            base.RegExp.stringifyEscapable.lastIndex = 0;
            if ($.RegExp.test(base.RegExp.stringifyEscapable, string)) {
                result += $.String.replace(string, base.RegExp.stringifyEscapable, function (a) {
                    var c = stringifyMeta[a],
                        r;

                    if (typeof c === 'string') {
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

            if ($.Object.isNotPrimitive(value) && $.Function.isFunction(value.toJSON)) {
                value = value.toJSON(key);
            }

            if ($.Function.isFunction(stringifyReplacer)) {
                value = stringifyReplacer.call(holder, key, value);
            }

            switch (typeof value) {
            case 'string':
                return stringifyQuote(value);
            case 'number':
                if ($.Number.isFinite(value)) {
                    return $.String.ToString(value);
                }

                return 'null';
            case 'boolean':
            case 'null':
                return $.String.ToString(value);
            case 'object':
                if (value === null) {
                    return $.String.ToString(value);
                }

                stringifyGap += stringifyIndent;
                if ($.Array.isArray(value)) {
                    partial = $.Array.map(value, function (unused, idx, obj) {
                        /*jslint unparam: true */
                        /*jshint unused : false */
                        return this(idx, obj) || 'null';
                    }, stringifyToString);

                    if (!partial.length) {
                        member = '[]';
                    } else if (typeof stringifyGap === 'string' && stringifyGap !== '') {
                        member = '[\n' + stringifyGap + $.Array.join(partial, ',\n' + stringifyGap) + '\n' + mind + ']';
                    } else {
                        member = '[' + $.Array.join(partial) + ']';
                    }

                    stringifyGap = mind;

                    return member;
                }

                if ($.Array.isArray(stringifyReplacer)) {
                    partial = $.Array.reduce(stringifyReplacer, function (prev, element) {
                        var v;

                        if (typeof element === 'string') {
                            v = stringifyToString(element, value);
                            if (v !== Undefined) {
                                push(prev, stringifyQuote(element) +
                                        (typeof stringifyGap === 'string' && stringifyGap !== '' ? ': ' : ':') + v);
                            }
                        }

                        return prev;
                    }, []);
                } else {
                    partial = $.Array.reduce($.Object.keys(value), function (prev, k) {
                        var v = stringifyToString(k, value);

                        if (v !== Undefined) {
                            push(prev, stringifyQuote(k) +
                                        (typeof stringifyGap === 'string' && stringifyGap !== '' ? ': ' : ':') + v);
                        }

                        return prev;
                    }, []);
                }

                if (!partial.length) {
                    member = '{}';
                } else if (typeof stringifyGap === 'string' && stringifyGap !== '') {
                    member = '{\n' + stringifyGap + $.Array.join(partial, ',\n' + stringifyGap) + '\n' + mind + '}';
                } else {
                    member = '{' + $.Array.join(partial) + '}';
                }

                stringifyGap = mind;

                return member;
            }

            return Undefined;
        };

        $.JSON.stringify = function (value, replacer, space) {
            stringifyGap = '';
            if (typeof space === 'number') {
                stringifyIndent = $.String.repeat(' ', space);
            } else if (typeof space === 'string') {
                stringifyIndent = space;
            } else {
                stringifyIndent = '';
            }

            stringifyReplacer = replacer;
            if (!$.Object.isUndefinedOrNull(replacer) && !$.Function.isFunction(replacer) &&
                                                                    !$.Array.isArray(replacer)) {

                throw new base.Error.Ctr('JSON.stringify');
            }

            return stringifyToString('', {
                '': value
            });
        };
    }

    /**
     * Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
     * @memberof utilx.JSON
     * @name parse
     * @function
     * @param {string} text
     * @param {(Function|Array)} reviver
     * @returns {Object}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
     */
    // Determines whether the (possibly native) `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    if (!testShims && $.Function.isNativeFunction(base.JSON.parse)) {
        try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (base.JSON.parse('0') === 0 && base.JSON.parse(false) === false) {
                // Simple parsing test.
                testValue = base.JSON.parse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
                isSupportedResult = (testValue.A.length === 5 && testValue.A[0] === 1);
                if (isSupportedResult) {
                    try {
                        // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in base.str.
                        isSupportedResult = typeof base.JSON.parse('"\t"') === 'string';
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
            threwSynatxError = $.Object.instanceOf(eParse, base.SyntaxError.Ctr);
        }

        if (threwSynatxError) {
            $.JSON.parse = base.JSON.parse;
        } else {
            $.JSON.parse = function (text, reviver) {
                var type = typeof text;

                if (type === 'undefined') {
                    throw new base.SyntaxError.Ctr('JSON.parse');
                }

                return base.JSON.parse(text, reviver);
            };
        }
    } else {
        base.RegExp.parseProtect1 = new RegExp('^[\\],:{}\\s]*$');
        base.RegExp.parseProtect2 = new RegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
        base.RegExp.parseProtect3 = new RegExp('"[^"\\\\\\n\\r]*"|true|false|null|' +
                                                '-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');

        base.RegExp.parseProtect4 = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
        base.str.parseRxCharacters = '[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f' +
                                        '\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';

        base.RegExp.parseCharacterTest = new RegExp(base.str.parseRxCharacters, 'g');
        $.JSON.parse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var value = holder[key];

                if ($.Object.isTypeObject(value)) {
                    $.Array.forEach($.Object.keys(value), function (k) {
                        var v = this(value, k),
                            type = typeof v;

                        if (type !== 'undefined') {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    }, walk);
                }

                return reviver.call(holder, key, value);
            }

            text = $.String.ToString(text);
            base.RegExp.parseCharacterTest.lastIndex = 0;
            if ($.RegExp.test(base.RegExp.parseCharacterTest, text)) {
                text = $.String.replace(text, base.RegExp.parseCharacterTest, function (a) {
                    return '\\u' + strSlice('0000' + charCodeAt(a, 0).toString(16), -4);
                });
            }

            if ($.RegExp.test(base.RegExp.parseProtect1, $.String.replace($.String.replace($.String.replace(text,
                                base.RegExp.parseProtect2, '@'),
                                base.RegExp.parseProtect3, ']'),
                                base.RegExp.parseProtect4, ''))) {

                /*jslint evil: true */
                j = base.eval('(' + text + ')');
                /*jslint evil: false */

                if ($.Function.isFunction(reviver)) {
                    return walk({
                        '': j
                    }, '');
                }

                return j;
            }

            throw new base.SyntaxError.Ctr('JSON.parse');
        };
    }

    /**
     * This {@link boundPrototypalFunction method} calculates the Power Set of a given array.
     * @memberof utilx.Array
     * @name powerSet
     * @function
     * @param {(ArrayLike|string)} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @returns {Array.<Array>}
     * @see http://en.wikipedia.org/wiki/Power_set
     */
    $.Array.prototype.powerSet = function () {
        var object = $.Object.ToObjectFixIndexedAccess(this),
            lastElement,
            val;

        if ($.String.isStringAny(object)) {
            object = $.String.split(object, '');
        }

        if (!fixLength(object)) {
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
     * Creates an instance of utilx from the internal $ object.
     * @memberof utilx
     * @name factory
     * @function
     * @returns {Object}
     */
    function factory() {
        var utilx = {};

        $.Array.forEach($.Object.keys($), function (key1) {
            if (!this.hasOwn(utilx, 'methods')) {
                this.defineProperty(utilx, 'methods', this.assign({
                    value: []
                }, base.properties.notEnumerable));
            }

            this.defineProperty(utilx, key1, this.assign({
                value: $[key1]
            }, base.properties.notEnumerable));

            if (this.isPlainObject($[key1])) {
                if (!this.hasOwn(utilx[key1], 'methods')) {
                    this.defineProperty(utilx[key1], 'methods', this.assign({
                        value: []
                    }, base.properties.notEnumerable));
                }

                $.Array.forEach(this.keys($[key1]), function (key2) {
                    this.defineProperty(utilx[key1], key2, $.Object.assign({
                        value: $[key1][key2]
                    }, base.properties.notEnumerable));

                    if (this.isPlainObject($[key1][key2])) {
                        if (!this.hasOwn(utilx[key1][key2], 'methods')) {
                            this.defineProperty(utilx[key1][key2], 'methods', this.assign({
                                value: []
                            }, base.properties.notEnumerable));
                        }

                        $.Array.forEach(this.keys($[key1][key2]), function (key3) {
                            this.defineProperty(utilx[key1][key2], key3, this.assign({
                                value: $[key1][key2][key3]
                            }, base.properties.notEnumerable));

                            push(utilx[key1][key2].methods, key3);
                        }, this);
                    } else {
                        push(utilx[key1].methods, key2);
                    }
                }, this);
            } else {
                push(utilx.methods, key1);
            }
        }, $.Object);

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
        throw new TypeError('Invalid global context');
    }

    publicUtil = $.Object.defineProperty(factory(), 'factory', $.Object.assign({
        value: function () {
            return $.Object.defineProperty(factory(), 'factory', $.Object.assign({
                value: publicUtil.factory
            }, base.properties.notEnumerable));
        }
    }, base.properties.notEnumerable));

    /**
     * Nodejs. A reference to the current module. In particular module.exports is used for
     * defining what a module exports and makes available through require().
     * @ignore
     * @namespace module
     * @external
     * @see http://nodejs.org/docs/latest/api/globals.html#globals_module
     */

    /**
     * Requirejs. Define is a function object. A module is different from a traditional script
     * file in that it defines a well-scoped object that avoids polluting the global namespace.
     * It can explicitly list its dependencies and get a handle on those dependencies without
     * needing to refer to global objects, but instead receive the dependencies as arguments to
     * the function that defines the module.
     * @ignore
     * @namespace define
     * @external
     * @see http://requirejs.org/docs/api.html#define
     */

    if ($.Object.isTypeObject(module) && $.Object.isTypeObject(module.exports)) {
        $.Object.defineProperty(module, 'exports', $.Object.assign({
            value: publicUtil
        }, base.properties.notEnumerable));
    } else if ($.Function.isFunction(define) && $.Object.isTypeObject(define.amd)) {
        define(function () {
            return publicUtil;
        });
    } else {

        /**
         * Only global if a module loader is not used to export the module.
         * @name utilx
         * @global
         */
        $.Object.defineProperty(globalThis, 'utilx', $.Object.assign({
            value: publicUtil
        }, base.properties.notEnumerable));
    }

    /**
     * The window object represents a window containing a DOM document;
     * the document property points to the DOM document loaded in that window.
     * @ignore
     * @namespace window
     * @external
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Window
     */

    /*jslint maxlen: 126 */
}(this, typeof window === 'object' && window, typeof module === 'object' && module, typeof define === 'function' && define));
/*jslint maxlen: 120 */
