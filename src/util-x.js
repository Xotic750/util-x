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
 * Type consisting of the primitive values.isFunction
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
        random: Math.random,
        pow: Math.pow
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
    if (typeof JSON === 'object' && JSON !== null) {
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
    /*jslint evil: true, nomen: true */
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
        defineGetter: Object.prototype.__defineGetter__,
        defineSetter: Object.prototype.__defineSetter__,
        lookupGetter: Object.prototype.__lookupGetter__,
        lookupSetter: Object.prototype.__lookupGetter__,
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
    /*jslint evil: false, nomen: false  */

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
        NaN: Number.NaN,
        POSITIVE_INFINITY: Number.POSITIVE_INFINITY,
        NEGATIVE_INFINITY: Number.NEGATIVE_INFINITY,
        isFinite: Number.isFinite,
        isInteger: Number.isInteger,
        isSafeInteger: Number.isSafeInteger,
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
        toString: RegExp.prototype.toString
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
     * Returns the first argument unchanged.
     * Primary use with ToMethod.
     * @private
     * @name justArg
     * @function
     * @argument {*} [arg]
     * @returns {*}
     */
    function justArg(arg) {
        return arg;
    }

    /**
     * Returns an arguments object of the arguments supplied.
     * @private
     * @name returnArgs
     * @function
     * @argument {...*} [varArgs]
     * @returns {Arguments}
     */
    function returnArgs(varArgs) {
        /*jslint unparam:true */
        /*jshint unused:false */
        return arguments;
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
     * @param {...*} [varArgs]
     * @returns {*}
     */

    var testShims = true,

        // constants
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

        stringProto = '__proto__',

        /**
         * @private
         * @name propConstant
         * @type {Object.<string, boolean>}
         */
        propConstant = {
            enumerable: false,
            writable: false,
            configurable: false
        },

        /**
         * @private
         * @name propNotEnumerable
         * @type {Object.<string, boolean>}
         */
        propNotEnumerable = {
            enumerable: false,
            writable: true,
            configurable: true
        },

        /**
         * @private
         * @name shadowed
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
        ],

        // shortcuts
        pOToString = base.Object.toString,
        pCharAt = base.String.charAt,
        CError = base.Error.Ctr,
        CTypeError = base.TypeError.Ctr,
        CSyntaxError = base.SyntaxError.Ctr,
        CRangeError = base.RangeError.Ctr,
        CReferenceError = base.ReferenceError.Ctr,
        CEvalError = base.EvalError.Ctr,
        CURIError = base.URIError.Ctr,
        CNumber = base.Number.Ctr,
        CString = base.String.Ctr,
        CDate = base.Date.Ctr,
        CRegExp = base.RegExp.Ctr,
        CFunction = base.Function.Ctr,
        CBoolean = base.Boolean.Ctr,
        CArray = base.Array.Ctr,
        //CObject = base.Object.Ctr,

        protoObject = base.Object.proto,
        protoFunction = base.Function.proto,
        protoNumber = base.Number.proto,
        protoBoolean = base.Boolean.proto,
        protoString = base.String.proto,
        protoDate = base.Date.proto,
        protoRegExp = base.RegExp.proto,
        protoArray = base.Array.proto,

        protoError = base.Error.proto,
        protoTypeError = base.TypeError.proto,
        protoSyntaxError = base.SyntaxError.proto,
        protoRangeError = base.RangeError.proto,
        protoEvalError = base.EvalError.proto,
        protoReferenceError = base.ReferenceError.proto,
        protoURIError = base.URIError.proto,

        mLookupGetter = base.Object.lookupGetter,
        mLookupSetter = base.Object.lookupSetter,
        mDefineGetter = base.Object.defineGetter,
        mDefineSetter = base.Object.defineSetter,

        pIsPrototypeOf = base.Object.isPrototypeOf,
        mGetOwnPropertyDescriptor = base.Object.getOwnPropertyDescriptor,

        /**
         * The Object constructor creates an object wrapper.
         * shortcut
         * @private
         * @name cObject
         * @function
         * @param {*} inputArg
         * @throws TypeError if inputArg is {@link null} or {@link undefined}
         * @returns {*}
         */
        cObject = base.Object.Ctr,

        /**
         * shortcut
         * @private
         * @name mMin
         * @function
         * @param {number} number
         * @returns {number}
         */
        mMin = base.Math.min,

        /**
         * shortcut
         * @private
         * @name mMax
         * @function
         * @param {number} number
         * @returns {number}
         */
        mMax = base.Math.max,

        /**
         * shortcut
         * @private
         * @name floor
         * @function
         * @param {number} number
         * @returns {number}
         */
        floor = base.Math.floor,

        /**
         * shortcut
         * @private
         * @name abs
         * @function
         * @param {number} number
         * @returns {number}
         */
        abs = base.Math.abs,

        /**
         * shortcut
         * @private
         * @name ceil
         * @function
         * @param {number} number
         * @returns {number}
         */
        ceil = base.Math.ceil,

        /**
         * shortcut
         * @private
         * @name random
         * @function
         * @returns {number}
         */
        random = base.Math.random,

        /**
         * Returns true if the operand inputArg is a Function.
         * @private
         * @name isFunction
         * @function
         * @param {*} inputArg
         * @returns {boolean}
         * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
         */
        isFunction = function (inputArg) {
            var isFn = false,
                type;

            if (inputArg !== null) {
                type = typeof inputArg;
                if ((type === 'function' || type === 'object') &&
                        ('constructor' in inputArg) &&
                        ('call' in inputArg) &&
                        ('apply' in inputArg) &&
                        ('length' in inputArg) &&
                        typeof inputArg.length === 'number') {

                    isFn = true;
                }
            }

            return isFn;
        },

        /**
         * Throws a TypeError if arguments is not a function otherwise returns the function.
         * @private
         * @function throwIfNotAFunction
         * @param {*} inputArg
         * @throws {TypeError} if inputArg is not a {@link Function function}.
         * @returns {Function}
         */
        throwIfNotAFunction = function (inputArg) {
            if (!isFunction(inputArg)) {
                throw new CTypeError('Argument is not a function: ' + inputArg);
            }

            return inputArg;
        },

        /**
         * The function tests whether an object has in its prototype chain the prototype property of a constructor.
         * @private
         * @name instanceOf
         * @function
         * @param {Object} object
         * @param {Function} ctr
         * @returns {boolean}
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
         */
        instanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            var type = typeof object,
                val = false;

            if (type !== 'undefined' &&
                    object !== null &&
                    type !== 'boolean' &&
                    type !== 'string' &&
                    type !== 'number') {

                if (object instanceof ctr) {
                    val = true;
                } else {
                    type = typeof ctr.prototype;
                    if (type !== 'undefined' &&
                            ctr.prototype !== null &&
                            type !== 'boolean' &&
                            type !== 'string' &&
                            type !== 'number') {

                        val = pIsPrototypeOf.call(ctr.prototype, object);
                    }
                }
            }

            return val;
        },

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
        checkObjectCoercible = function (inputArg) {
            var type = typeof inputArg;

            if (type === 'undefined' || inputArg === null) {
                throw new CTypeError('Cannot convert argument to object: ' + inputArg);
            }

            return inputArg;
        },

        /**
         * The function evaluates the passed value and converts it to an integer.
         * @private
         * @name toInteger
         * @function
         * @param {*} inputArg
         * @returns {number}
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toInteger
         */
        toInteger = function (inputArg) {
            var number = +inputArg,
                val = 0;

            if (number === number) {
                if (!number || number === Infinity || number === -Infinity) {
                    val = number;
                } else {
                    val = (number > 0 || -1) * floor(abs(number));
                }
            }

            return val;
        },

        /**
         * The abstract operation ToLength converts its argument to an integer suitable for use as the length
         * of an array-like object.
         * @private
         * @name toLength
         * @function
         * @param {*} inputArg
         * @returns {number}
         * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
         */
        toLength = function (inputArg) {
            var length = toInteger(inputArg);

            if (length <= 0) {
                length = 0;
            }

            return mMin(length, MAX_SAFE_INTEGER);
        },

        /**
         * The abstract operation CreateListFromArrayLike is used to create a List value whose elements
         * are provided by the indexed properties of an array-like object.
         * @private
         * @function createListFromArrayLike
         * @param {ArrayLike} inputArg
         * @throws {TypeError} if inputArg is not an {@link Object object}.
         * @returns {Object}
         * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-createlistfromarraylike
         */
        /*
        createListFromArrayLike = function (inputArg) {
            if (inputArg === null || typeof inputArg !== 'object' || isFunction(inputArg)) {
                throw new CTypeError('Arguments list has wrong type: ' + inputArg);
            }

            var length = toLength(inputArg.length),
                list = {},
                index;

            list.length = length;
            for (index = 0; index < length; index += 1) {
                list[index] = inputArg[index];
            }

            return list;
        },
        */

        /**
         * Tests to see if the argument is one of the seven standard Error type prototypes.
         * @private
         * @function isErrorTypePrototype
         * @param {*} inputArg
         * @returns {boolean}
         */
        /*
        isErrorTypePrototype = function (inputArg) {
            return inputArg === protoError ||
                    inputArg === protoTypeError ||
                    inputArg === protoSyntaxError ||
                    inputArg === protoRangeError ||
                    inputArg === protoEvalError ||
                    inputArg === protoReferenceError ||
                    inputArg === protoURIError;
        },
        */

        /**
         * @private
         * @name toClass
         * @function
         * @param {*} inputArg
         * @returns {string}
         */
        toClass = (function () {
            var toC;

            try {
                if (testShims ||
                        pOToString.call(protoRegExp) !== classRegexp ||
                        pOToString.call(protoString) !== classString ||
                        pOToString.call(protoError) !== classError ||
                        pOToString.call(returnArgs()) !== classArguments) {

                    throw new CError();
                }

                toC = function (inputArg) {
                    return pOToString.call(inputArg);
                };

                try {
                    if (toC() !== classUndefined || toC(null) !== classNull) {
                        throw new CError();
                    }
                } catch (eClass1) {
                    toC = function (inputArg) {
                        var type = typeof inputArg,
                            val;

                        if (type === 'undefined') {
                            val = classUndefined;
                        } else if (inputArg === null) {
                            val = classNull;
                        } else {
                            val = pOToString.call(inputArg);
                        }

                        return val;
                    };
                }

                return toC;
            } catch (eClass2) {
                return function (inputArg) {
                    var type = typeof inputArg,
                        object,
                        val;

                    if (type === 'undefined') {
                        val = classUndefined;
                    } else if (inputArg === null) {
                        val = classNull;
                    } else if (type === 'object' &&
                            !('arguments' in inputArg) &&
                            ('callee' in inputArg) &&
                            ('length' in inputArg) &&
                            typeof inputArg.length === 'number') {

                        val = classArguments;
                    } else {
                        object = cObject(inputArg);
                        if (object instanceof CNumber) {
                            val = classNumber;
                        } else if (object instanceof CBoolean || object === protoBoolean) {
                            val = classBoolean;
                        } else if (object instanceof CString || object === protoString) {
                            val = classString;
                        } else if (object instanceof CDate || object === protoDate) {
                            val = classDate;
                        } else if (object instanceof CRegExp || object === protoRegExp) {
                            val = classRegexp;
                        } else if (object instanceof CError || object === protoError) {
                            val = classError;
                        } else if (object instanceof CArray || object === protoArray) {
                            val = classArray;
                        } else if (object instanceof CFunction || object === protoFunction) {
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
            }
        }()),

        /**
         * Indicates if object suffers the don'r enum bug
         * @private
         * @type {boolean}
         * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
         */
        hasDontEnumBug = (function () {
            var length = shadowed.length,
                obj = {},
                expected = [],
                prop,
                index,
                it;

            for (index = 0; index < length; index += 1) {
                obj[shadowed[index]] = null;
            }

            for (prop in obj) {
                if (base.Object.hasOwn.call(obj, prop)) {
                    for (index = 0; index < length; index += 1) {
                        it = shadowed[index];
                        if (prop === it) {
                            obj[it] = null;
                            break;
                        }
                    }
                }
            }

            base.Array.sort.call(shadowed);
            base.Array.sort.call(expected);

            return base.Array.join(shadowed, ',') !== base.Array.join(expected, ',');
        }()),

        /**
         * Indicates if a function suffers the prototype is enumerable bug.
         * @private
         * @type {boolean}
         * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
         */
        hasProtoEnumBug = (function () {
            var val = false,
                prop;

            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;

            for (prop in Constructor) {
                if (prop === 'prototype') {
                    val = true;
                    break;
                }
            }

            return val;
        }()),

        /**
         * Indicates if a arguments suffers the prototype is enumerable bug.
         * @private
         * @type {boolean}
         */
        hasEnumArgsBug = (function () {
            var argObj = returnArgs('h', 'e', 'j'),
                expected = {},
                prop;

            for (prop in argObj) {
                if (prop === '0' || prop === '1' || prop === '2') {
                    expected[prop] = argObj[prop];
                }
            }

            return expected[0] !== 'h' || expected[1] !== 'e' || expected[2] !== 'j';
        }()),

        /**
         * Indicates if a arguments suffers the prototype is enumerable bug.
         * @private
         * @type {boolean}
         */
        hasEnumStringBug = (function () {
            var strObj = cObject('hej'),
                expected = {},
                prop;

            for (prop in strObj) {
                if (prop === '0' || prop === '1' || prop === '2') {
                    expected[prop] = pCharAt.call(strObj, prop);
                }
            }

            return expected[0] !== 'h' || expected[1] !== 'e' || expected[2] !== 'j';
        }()),

        /**
         * Indicates if a string suffers the indexed accessability bug.
         * @private
         * @type {boolean}
         */
        hasBoxedStringBug = (function () {
            var strObj = cObject('hej'),
                expected = {},
                prop;

            for (prop in strObj) {
                if (prop === '0' || prop === '1' || prop === '2') {
                    expected[prop] = strObj[prop];
                }
            }

            return expected[0] !== 'h' || expected[1] !== 'e' || expected[2] !== 'j';
        }()),

        /**
         * List of unwanted Error prototype prtoperty names that are enumerable.
         * @private
         * @type {Array.<string>}
         */
        unwantedError = [],

        /**
         * Indicates if the Error object has additional enumerable properties.
         * @private
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
                for (prop in obj) {
                    if (base.Object.hasOwn.call(obj, prop)) {
                        for (found = false, index2 = 0, length2 = unwantedError.length; index2 < length2; index2 += 1) {
                            if (prop === unwantedError[index2]) {
                                found = true;
                                break;
                            }
                        }

                        if (!found) {
                            base.Array.push.call(unwantedError, prop);
                        }
                    }
                }
            }

            return !!unwantedError.length;
        }()),

        /**
         * Used to avoid iterating non-enumerable properties in IE < 9 if hasDontEnumBug.
         * @private
         * @type {Object.<string, Object>}
         */
        nonEnumProps = (function () {
            var nep,
                props,
                length,
                index,
                classN,
                key;

            if (hasDontEnumBug) {
                nep = {};
                nep[classArray] =
                    nep[classDate] =
                    nep[classNumber] = {
                        constructor: true,
                        toLocaleString: true,
                        toString: true,
                        valueOf: true
                    };

                nep[classBoolean] =
                    nep[classString] = {
                        constructor: true,
                        toString: true,
                        valueOf: true
                    };

                nep[classError] =
                    nep[classFunction] =
                    nep[classRegexp] = {
                        constructor: true,
                        toString: true
                    };

                nep[classObject] = {
                    constructor: true
                };

                for (index = 0, length = shadowed.length; index < length; index += 1) {
                    key = shadowed[index];
                    for (classN in nep) {
                        if (base.Object.hasOwn.call(nep, classN)) {
                            props = nep[classN];
                            props[key] = base.Object.hasOwn.call(props, key);
                        }
                    }
                }
            }

            return props;
        }()),

        /**
         * Object used for temporary testing values.
         * @private
         * @type {Object.<string, *>}
         */
        testTemp = {},

        /**
         * Indicates if __proto__ is supported.
         * @private
         * @type {boolean}
         */
        isProtoSupported = protoObject[stringProto] === null,

        /**
         * Indicates if __defineGetter__ and __lookupSetter__ are supported.
         * @private
         * @type {boolean}
         */
        areGetSetSupported = isFunction(mLookupGetter) && isFunction(mLookupSetter),

        /**
         * @private
         * @name isStrictMode
         * @type {boolean}
         */
        isStrictMode = (function () {
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
        }()),

        /**
         * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
         * @private
         * @name toObjectFixIndexedAccess
         * @function
         * @param {*} inputArg
         * @returns {Object}
         * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
         */
        toObjectFixIndexedAccess = function (inputArg) {
            var object = cObject(checkObjectCoercible(inputArg)),
                length,
                index;

            if (hasBoxedStringBug && toClass(object) === classString) {
                for (index = 0, length = object.length; index < length; index += 1) {
                    object[index] = pCharAt.call(object, index);
                }
            }

            return object;
        },

        /**
         * Indicates if the this argument used with call does not convert to an object when not strict mode.
         * @private
         * @type {boolean}
         */
        hasCallBug = (function () {
            var returnThis = function () {
                return this;
            };

            return !isStrictMode && typeof returnThis.call('foo') === 'string';
        }()),

        /**
         * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
         * For use with call.
         * @private
         * @name toObjectCallFix
         * @function
         * @param {*} inputArg
         * @returns {*}
         */
        toObjectCallFix = function (inputArg) {
            var object = inputArg,
                length,
                index,
                type;

            if (hasCallBug) {
                type = typeof inputArg;
                if (type !== 'boolean' || type !== 'number' || type !== 'string') {
                    object = cObject(inputArg);
                }
            }

            if (hasBoxedStringBug && toClass(object) === classString) {
                for (index = 0, length = object.length; index < length; index += 1) {
                    object[index] = pCharAt.call(object, index);
                }
            }

            return object;
        },

        /**
         * @private
         * @name argSlice
         * @function
         * @param {ArrayLike} array
         * @param {NumberLike} [start]
         * @param {NumberLike} [end]
         * @returns {Array}
         */
        argSlice = function (args, start, end) {
            var object = toObjectFixIndexedAccess(args),
                length = toLength(object.length),
                relativeStart = toInteger(start),
                val = [],
                next = 0,
                type = typeof end,
                relativeEnd,
                finalEnd,
                k;

            if (relativeStart < 0) {
                k = mMax(length + relativeStart, 0);
            } else {
                k = mMin(relativeStart, length);
            }

            if (type === 'undefined') {
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
                if (k in object) {
                    val[next] = object[k];
                }

                next += 1;
                k += 1;
            }

            return val;
        },

        /**
         * The function takes one argument protoFn, and returns the bound function as a stand alone method.
         * Default this check is to {@link checkObjectCoercible}
         * @private
         * @name toMethod
         * @function
         * @param {prototypalFunction} protoFn
         * @param {Function} [checkThisArgFn]
         * @returns {boundPrototypalFunction}
         */
        toMethod = function (protoFn, checkThisArgFn) {
            throwIfNotAFunction(protoFn);
            if (!isFunction(checkThisArgFn)) {
                checkThisArgFn = checkObjectCoercible;
            }

            return function (thisArg) {
                return protoFn.apply(checkThisArgFn(thisArg), argSlice(arguments, 1));
            };
        },

        // shortcuts
        pSlice = base.Array.slice,
        pPush = base.Array.push,
        pUnshift = base.Array.unshift,
        pJoin = base.Array.join,
        pConcat = base.Array.concat,
        pPop = base.Array.pop,
        pShift = base.Array.shift,
        pSplice = base.Array.splice,
        pIndexOf = base.Array.indexOf,
        pLastIndexOf = base.Array.lastIndexOf,
        pForEach = base.Array.forEach,
        pSort = base.Array.sort,
        pFind = base.Array.find,
        pFindIndex = base.Array.findIndex,
        pCopyWithin = base.Array.copyWithin,
        pSome = base.Array.some,
        pEvery = base.Array.every,
        pMap = base.Array.map,
        pFilter = base.Array.filter,
        pReduce = base.Array.reduce,
        pReduceRight = base.Array.reduceRight,
        pFill = base.Array.fill,

        mIsArray = base.Array.isArray,
        mOf = base.Array.of,
        mFrom = base.Array.from,

        cString = base.String.Ctr,
        pMatch = base.String.match,
        pSplit = base.String.split,
        pTrim = base.String.trim,
        pStartsWith = base.String.startsWith,
        pEndsWith = base.String.endsWith,
        pContains = base.String.contains,

        pCharCodeAt = base.String.charCodeAt,
        pSSlice = base.String.slice,
        pSIndexOf = base.String.indexOf,
        pSRepeat = base.String.repeat,
        pSValueOf = base.String.valueOf,
        pReplace = base.String.replace,

        pGetTime = base.Date.getTime,

        pNToString = base.Number.toString,

        pHasOwn = base.Object.hasOwn,
        mDefineProperty = base.Object.defineProperty,
        mGetPrototypeOf = base.Object.getPrototypeOf,
        mKeys = base.Object.keys,
        mParse,
        mStringify,

        pExec = base.RegExp.exec,
        pTest = base.RegExp.test,

        mParseInt = base.parseInt,
        mParsefloat = base.parseFloat,
        mIsFinite = base.isFinite,
        mIsNaN = base.isNaN,

        pBValueOf = base.Boolean.valueOf,

        $hasOwn,
        $toString,
        $repeat,
        isNotPrimitive,
        isNative,
        isArguments,
        isTypeObject,
        isRegExp,
        isArray,
        isInteger,
        isSafeInteger,
        isNumeric,
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
        objectKeys,
        objectIs,
        stringify,
        truncate,
        inherits,
        stringContains,
        pPowerSet,
        toInt32,
        isUint32,
        $exec,
        $test,
        $slice,
        $split,
        $replace,
        $splice,
        noop,

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

    /*global console */
    console.log('+++++++++ hasDontEnumBug: ' + hasDontEnumBug);
    console.log('+++++++++ hasProtoEnumBug: ' + hasProtoEnumBug);
    console.log('+++++++++ hasEnumArgsBug: ' + hasEnumArgsBug);
    console.log('+++++++++ hasErrorProps: ' + hasErrorProps);
    console.log('+++++++++ hasBoxedStringBug: ' + hasBoxedStringBug);
    console.log('+++++++++ hasEnumStringBug: ' + hasEnumStringBug);
    console.log('+++++++++ hasCallBug: ' + hasCallBug);
    console.log('+++++++++ isProtoSupported: ' + isProtoSupported);
    console.log('+++++++++ areGetSetSupported: ' + areGetSetSupported);
    console.log('+++++++++ isStrictMode: ' + isStrictMode);

    /*
     *
     * EXPORTABLE CONSTANTS
     *
     */

    /**
     * +0
     * @memberof utilx.Number
     * @name POSITIVE_ZERO
     * @type {number}
     */
    $.Number.POSITIVE_ZERO = POSITIVE_ZERO;

    /**
     * -0
     * @memberof utilx.Number
     * @name NEGATIVE_ZERO
     * @type {number}
     */
    $.Number.NEGATIVE_ZERO = NEGATIVE_ZERO;

    /**
     * 128
     * @memberof utilx.Number
     * @name WORD8
     * @type {number}
     */
    $.Number.WORD8 = WORD8;

    /**
     * 256
     * @memberof utilx.Number
     * @name UWORD8
     * @type {number}
     */
    $.Number.UWORD8 = UWORD8;

    /**
     * 65536
     * @memberof utilx.Number
     * @name WORD16
     * @type {number}
     */
    $.Number.WORD16 = WORD16;

    /**
     * 32768
     * @memberof utilx.Number
     * @name UWORD16
     * @type {number}
     */
    $.Number.UWORD16 = UWORD16;

    /**
     * 2147483648
     * @memberof utilx.Number
     * @name WORD32
     * @type {number}
     */
    $.Number.WORD32 = WORD32;

    /**
     * 4294967296
     * @memberof utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.UWORD32 = UWORD32;

    /**
     * 4294967295
     * @memberof utilx.Number
     * @name MAX_UINT32
     * @type {number}
     */
    $.Number.MAX_UINT32 = MAX_UINT32;

    /**
     * 2147483647
     * @memberof utilx.Number
     * @name MAX_INT32
     * @type {number}
     */
    $.Number.MAX_INT32 = MAX_INT32;

    /**
     * -2147483648
     * @memberof utilx.Number
     * @name MIN_INT32
     * @type {number}
     */
    $.Number.MIN_INT32 = MIN_INT32;

    /**
     * 65535
     * @memberof utilx.Number
     * @name MAX_UINT16
     * @type {number}
     */
    $.Number.MAX_UINT16 = MAX_UINT16;

    /**
     * 32767
     * @memberof utilx.Number
     * @name MAX_INT16
     * @type {number}
     */
    $.Number.MAX_INT16 = MAX_INT16;

    /**
     * -32768
     * @memberof utilx.Number
     * @name MIN_INT16
     * @type {number}
     */
    $.Number.MIN_INT16 = MIN_INT16;

    /**
     * 255
     * @memberof utilx.Number
     * @name MAX_UINT8
     * @type {number}
     */
    $.Number.MAX_UINT8 = MAX_UINT8;

    /**
     * 127
     * @memberof utilx.Number
     * @name MAX_INT8
     * @type {number}
     */
    $.Number.MAX_INT8 = MAX_INT8;

    /**
     * -128
     * @memberof utilx.Number
     * @name MIN_INT8
     * @type {number}
     */
    $.Number.MIN_INT8 = MIN_INT8;

    /**
     * 9007199254740991
     * @memberof utilx.Number
     * @name MAX_SAFE_INTEGER
     * @type {number}
     */
    $.Number.MAX_SAFE_INTEGER = MAX_SAFE_INTEGER;

    /**
     * -9007199254740991
     * @memberof utilx.Number
     * @name MIN_SAFE_INTEGER
     * @type {number}
     */
    $.Number.MIN_SAFE_INTEGER = MIN_SAFE_INTEGER;

    /**
     * 9007199254740992
     * @memberof utilx.Number
     * @name UNSAFE_INTEGER
     * @type {number}
     */
    $.Number.UNSAFE_INTEGER = UNSAFE_INTEGER;

    /**
     * 1.7976931348623157e+308
     * @memberof utilx.Number
     * @name MAX_VALUE
     * @type {number}
     */
    $.Number.MAX_VALUE = MAX_VALUE;

    /**
     * 5e-324
     * @memberof utilx.Number
     * @name MIN_VALUE
     * @type {number}
     */
    $.Number.MIN_VALUE = MIN_VALUE;

    /**
     * NaN
     * @memberof utilx.Number
     * @name NaN
     * @type {number}
     */
    $.Number.NaN = NaN;

    /**
     * Infinity
     * @memberof utilx.Number
     * @name POSITIVE_INFINITY
     * @type {number}
     */
    $.Number.POSITIVE_INFINITY = Infinity;

    /**
     * -Infinity
     * @memberof utilx.Number
     * @name NEGATIVE_INFINITY
     * @type {number}
     */
    $.Number.NEGATIVE_INFINITY = -Infinity;

    /**
     * 2.220446049250313e-16
     * @memberof utilx.Number
     * @name EPSILON
     * @type {number}
     */
    $.Number.EPSILON = EPSILON;

    /*
     *
     * EXPORTABLES THAT DO NOT RELY ON ANY OF OUR FUNCTIONS
     *
     */

    /**
     * Returns the {@link http://www.ecma-international.org/ecma-262/5.1/#sec-4.3.2 primitive} value
     * {@link undefined}.
     * @memberof utilx.Function
     * @name noop
     * @function
     * @returns {undefined}
     */
    $.Function.noop = noop = function () {
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
    $.Function.returnArgs = returnArgs;

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
        return typeof inputArg === 'boolean';
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
        var isNum = typeof inputArg === 'number',
            isZe;

        if (isNum) {
            isZe = inputArg === 0;
        }

        return isZe;
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
        var isNum = typeof inputArg === 'number',
            isZe;

        if (isNum) {
            isZe = (1 / inputArg) === Infinity;
        }

        return isZe;
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
        var isNum = typeof inputArg === 'number',
            isZe;

        if (isNum) {
            isZe = (1 / inputArg) === -Infinity;
        }

        return isZe;
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

        return type === 'undefined' ||
                inputArg === null ||
                type === 'boolean' ||
                type === 'string' ||
                type === 'number';
    };

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
        var type = typeof inputArg;

        if (type === 'undefined' || inputArg === null || type === 'boolean' || type === 'string' || type === 'number') {
            throw new CTypeError('called on non-object: ' + typeof inputArg);
        }

        return inputArg;
    }

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
    $.Object.isNotPrimitive = isNotPrimitive = function (inputArg) {
        var type = typeof inputArg;

        return type !== 'undefined' &&
                inputArg !== null &&
                type !== 'boolean' &&
                type !== 'string' &&
                type !== 'number';
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
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classBoolean;
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
        return inputArg !== null &&
                typeof inputArg === 'object' &&
                toClass(inputArg) === classBoolean &&
                pBValueOf.call(inputArg);
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
        return inputArg !== null &&
                typeof inputArg === 'object' &&
                toClass(inputArg) === classBoolean &&
                !pBValueOf.call(inputArg);
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
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classString;
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
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classNumber;
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
        return toClass(inputArg) === classBoolean;
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
        return toClass(inputArg) === classBoolean && pBValueOf.call(inputArg);
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
        return toClass(inputArg) === classBoolean && !pBValueOf.call(inputArg);
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
        return toClass(inputArg) === classString;
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
        return toClass(inputArg) === classNumber;
    };

    /**
     * Returns true if the operand inputArg is an empty string (ie '').
     * @memberof utilx.String
     * @name isEmpty
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.String.isEmpty = function (inputArg) {
        var isStr = typeof inputArg === 'string',
            isEm;

        if (isStr) {
            isEm = !inputArg;
        }

        return isEm;
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
        var isStr = inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classString,
            isEm;

        if (isStr) {
            isEm = !pSValueOf.call(inputArg);
        }

        return isEm;
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
        var isStr = toClass(inputArg) === classString,
            isEm;

        if (isStr) {
            isEm = !pSValueOf.call(inputArg);
        }

        return isEm;
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
        var isStr = typeof inputArg === 'string',
            isEm;

        if (isStr) {
            isEm = !!inputArg;
        }

        return isEm;
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
        var isStr = inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classString,
            isEm;

        if (isStr) {
            isEm = !!pSValueOf.call(inputArg);
        }

        return isEm;
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
        var isStr = toClass(inputArg) === classString,
            isEm;

        if (isStr) {
            isEm = !!pSValueOf.call(inputArg);
        }

        return isEm;
    };

    /**
     * Returns true if the operand inputArg is an {@link Arguments arguments} object.
     * @memberof utilx.Object
     * @name isArguments
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isArguments = isArguments = function (inputArg) {
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classArguments;
    };

    /**
     * Returns true if the operand inputArg is a RegExp.
     * @memberof utilx.RegExp
     * @name isRegExp
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.RegExp.isRegExp = isRegExp = function (inputArg) {
        var isRx = false,
            type;

        if (inputArg !== null) {
            type = typeof inputArg;
            if ((type === 'object' || type === 'function') && toClass(inputArg) === classRegexp) {
                isRx = true;
            }
        }

        return isRx;
    };

    /**
     * Returns true if the operand inputArg is typeof Object.
     * @memberof utilx.Object
     * @name isTypeOfObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */

    /**
     * Returns true if the operand inputArg is of type Object but not if null.
     * @memberof utilx.Object
     * @name isTypeObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    testTemp.testRx = new CRegExp('test');
    if (!testShims && testTemp.testRx !== null && typeof testTemp.testRx === 'object') {
        $.Object.isTypeOfObject = function (inputArg) {
            return inputArg === null || typeof inputArg === 'object';
        };

        $.Object.isTypeObject = function (inputArg) {
            return inputArg !== null && typeof inputArg === 'object';
        };
    } else {
        $.Object.isTypeOfObject = function (inputArg) {
            return inputArg === null || typeof inputArg === 'object' || toClass(inputArg) === classRegexp;
        };

        $.Object.isTypeObject = function (inputArg) {
            return inputArg !== null && (typeof inputArg === 'object' || toClass(inputArg) === classRegexp);
        };
    }

    isTypeObject = $.Object.isTypeObject;

    /**
     * The abstract operation converts its argument to a value of type string
     * @memberof utilx.String
     * @name ToString
     * @function
     * @param {*} inputArg
     * @returns {string}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.8
     */
    try {
        testTemp.tsS1 = cString();
        testTemp.tsS2 = cString(Undefined);
        testTemp.tsS3 = cString(null);
        if (testShims || testTemp.tsS1 !== 'undefined' || testTemp.tsS2 !== 'undefined' || testTemp.tsS3 === 'null') {
            throw new CError();
        }

        $.String.ToString = cString;
    } catch (eToString) {
        $.String.ToString = function (inputArg) {
            var type = typeof inputArg,
                val;

            if (type === 'undefined') {
                val = type;
            } else if (inputArg === null) {
                val = 'null';
            } else {
                val = cString(inputArg);
            }

            return val;
        };
    }

    $toString = $.String.ToString;

    /**
     * Returns true if the operand inputArg is an error.
     * @memberof utilx.Error
     * @name isError
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Error.isError = function (inputArg) {
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classError;
    };

    /**
     * Returns true if the operand inputArg is a Date object.
     * @memberof utilx.Date
     * @name isDate
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Date.isDate = function (inputArg) {
        return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classDate;
    };

    /**
     * Returns true if the operands are of the same typeof.
     * @memberof utilx.Object
     * @name areSameTypeOf
     * @function
     * @param {*} a
     * @param {...*} [b]
     * @returns {boolean}
     */
    $.Object.areSameTypeOf = function (a, b) {
        var length = arguments.length,
            typeA = typeof a,
            typeB = typeof b,
            same = true,
            index;

        if (typeA !== typeB) {
            same = false;
        } else {
            for (index = 2; index < length; index += 1) {
                typeB = typeof arguments[index];
                if (typeA !== typeB) {
                    same = false;
                    break;
                }
            }
        }

        return same;
    };

    /**
     * Returns true if the operands are of the same object class.
     * @memberof utilx.Object
     * @name areSameClass
     * @function
     * @param {*} a
     * @param {...*} [b]
     * @returns {boolean}
     */
    $.Object.areSameClass = function (a, b) {
        var classA = toClass(a),
            length = arguments.length,
            same = true,
            index;

        if (classA !== toClass(b)) {
            same = false;
        } else {
            for (index = 2; index < length; index += 1) {
                if (classA !== toClass(arguments[index])) {
                    same = false;
                    break;
                }
            }
        }

        return same;
    };

    /**
     * Returns true if the operand inputArg is deemed numeric.
     * @memberof utilx.Object
     * @name isNumeric
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isNumeric = isNumeric = (function () {
        var plusMinus = new CRegExp('^[+\\-]?');

        return function (inputArg) {
            var val = false,
                string,
                number;

            if (toClass(inputArg) === classNumber || toClass(inputArg) === classString) {
                string = pReplace.call(inputArg, plusMinus, '');
                number = mParsefloat(string);
                val = number === number && mIsFinite(string);
            }

            return val;
        };
    }());

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
        if (toClass(min) === classNumber || isNumeric(min)) {
            min = +min;
        } else {
            min = NaN;
        }

        if (toClass(max) === classNumber || isNumeric(max)) {
            max = +max;
        } else {
            max = NaN;
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
        if ((toClass(value) === classNumber && !mIsNaN(value)) || isNumeric(value)) {
            value = +value;
        } else {
            return true;
        }

        if ((toClass(min) === classNumber && !mIsNaN(min)) || isNumeric(min)) {
            min = +min;
        } else {
            return true;
        }

        if ((toClass(max) === classNumber && !mIsNaN(min)) || isNumeric(max)) {
            max = +max;
        } else {
            return true;
        }

        return value <= min || value >= max;
    };

    /*
     *
     * EXPORTABLES THAT DO RELY ON ANY OF OUR FUNCTIONS
     *
     */

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
        return $toString(checkObjectCoercible(inputArg));
    }

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error but fixes some environment bugs.
     * @private
     * @function onlyCoercibleToStringFixIndexedAccess
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is {@link null} or {@link undefined}.
     * @returns {string}
     */
    /*
    function onlyCoercibleToStringFixIndexedAccess(inputArg) {
        var object = $toString(checkObjectCoercible(inputArg)),
            length,
            index;

        if (hasBoxedStringBug && toClass(object) === classString) {
            for (index = 0, length = object.length; index < length; index += 1) {
                object[index] = pCharAt.call(object, index);
            }
        }

        return object;
    }
    */

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
        return cObject(checkObjectCoercible(inputArg));
    };

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * @memberof utilx.Object
     * @name ToObjectFixIndexedAccess
     * @function
     * @param {*} inputArg
     * @returns {Object}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
     */
    $.Object.ToObjectFixIndexedAccess = toObjectFixIndexedAccess;

    /**
     * Returns true if the specified property is in the specified object.
     * @memberof utilx.Object
     * @name has
     * @function
     * @param {Object} object The object that has was called upon.
     * @param {StringLike} property A string or numeric expression representing a property name or array index.
     * @returns {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7
     */
    $.Object.has = function (object, property) {
        return $toString(property) in toObjectFixIndexedAccess(object);
    };

    (function () {
        var beginsFunction = new CRegExp('^\\s*\\bfunction\\b'),
            runIENativeFunction,
            isIENativeFunction,
            isNativeFunction,
            isFunctionInternal,
            operaNative,
            tmp;

        /**
         * Returns true if the operand inputArg is a Function. Used by Function.isFunction.
         * @private
         * @function isFunctionBasic
         * @param {*} inputArg
         * @returns {boolean}
         */
        function isFunctionBasic(inputArg) {
            var isFn = toClass(inputArg) === classFunction,
                type;

            if (!isFn && inputArg !== null) {
                type = typeof inputArg;
                if ((type === 'function' || type === 'object') &&
                        ('constructor' in inputArg) &&
                        ('call' in inputArg) &&
                        ('apply' in inputArg) &&
                        ('length' in inputArg) &&
                        typeof inputArg.length === 'number') {

                    isFn = true;
                }
            }

            return isFn;
        }

        try {
            // native function cannot be passed
            // to native Function.prototype.toString
            // as scope to evaluate ... only IE, sure
            if (isNotPrimitive(window) && window.alert) {
                base.Function.toString.call(window.alert);
            }
        } catch (eRunIENativeFunction) {
            runIENativeFunction = true;
        }

        /**
         * Returns true if the operand inputArg is a native Function in IE. Used by Function.isFunction.
         * @private
         * @function isIENativeFunction
         * @param {*} inputArg
         * @returns {boolean}
         */
        tmp = runIENativeFunction &&
                            isNotPrimitive(window) &&
                            isNotPrimitive(window.alert) &&
                            typeof window.alert.toString;

        if (tmp === 'undefined' && pTest.call(beginsFunction, window.alert)) {
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

                // test(beginsFunction, inputArg)
                // we are looking for a function
                // and IE shows them with function
                // as first word. Eventually
                // there could be a space
                // (never happened, it does not hurt anyway)

                var type = typeof inputArg.toString;

                return type === 'undefined' && pTest.call(beginsFunction, inputArg);
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
            eval('(' + base.Function.toString.call(CFunction) + ')');
            /*jslint evil: false */
            // Opera 10 doesn't play ball so have to test the string
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
                    //eval('(' + ownToString.call(inputArg) + ')');
                    eval('(' + ownToString.call(inputArg) + ')');
                    /*jslint evil: false */
                    val = false;
                } catch (ignore) {}

                return val;
            };
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
            return isFunctionInternal(inputArg, false) && isNativeFunction(inputArg);
        }

        if (runIENativeFunction) {
            isFunctionInternal = function (inputArg, n) {
                var val = false;

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
                var val = false;

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
         * @memberof utilx.Function
         * @name isNativeFunction
         * @function
         * @param {*} inputArg
         * @returns {boolean}
         */
        if (runIENativeFunction) {
            $.Function.isNativeFunction = isNative = function (inputArg) {
                return isFunction(inputArg) && (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
            };
        } else {
            $.Function.isNativeFunction = isNative = function (inputArg) {
                return isFunction(inputArg) && isNativeFunction(inputArg);
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
        $.Function.isFunction = isFunction = function (inputArg) {
            var type = typeof inputArg;

            return type !== 'undefined' &&
                    inputArg !== null &&
                    type !== 'boolean' &&
                    type !== 'string' &&
                    type !== 'number' &&
                    (isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true));
        };
    }());

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
    $.Object.instanceOf = instanceOf;

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
        testTemp.someArgs = returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined);
        testTemp.sOk = function (sliceArgs, expected) {
            var testSlice = pSlice.apply(testTemp.someArgs, sliceArgs),
                length = expected.length,
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
        };

        if (testShims ||
                !isNative(pSlice) ||
                !testTemp.sOk([], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)) ||
                !testTemp.sOk([Undefined, Undefined], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)) ||
                !testTemp.sOk([-1], returnArgs(Undefined)) ||
                !testTemp.sOk([0], returnArgs(Undefined, null, 1, 'a', 2, 'b', null, Undefined)) ||
                !testTemp.sOk([3], returnArgs('a', 2, 'b', null, Undefined)) ||
                !testTemp.sOk([-1, 4], []) ||
                !testTemp.sOk([0, 4], returnArgs(Undefined, null, 1, 'a')) ||
                !testTemp.sOk([3, 6], returnArgs('a', 2, 'b'))) {

            throw new CError();
        }

        $.Array.prototype.slice = function () {
            var section;

            try {
                section = pSlice.apply(this, arguments);
            } catch (eSliceFB) {
                pUnshift.call(arguments, this);
                section = argSlice.apply(Undefined, arguments);
            }

            return section;
        };
    } catch (eSlice) {
        $.Array.prototype.slice = function () {
            var args = argSlice(arguments);

            pUnshift.call(args, this);

            return argSlice.apply(Undefined, args);
        };
    }

    $.Array.slice = $slice = toMethod($.Array.prototype.slice);

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
        var valid = false,
            type = typeof inputArg,
            length;

        if (type !== 'undefined' &&
                inputArg !== null &&
                type !== 'boolean' &&
                type !== 'string' &&
                type !== 'number' &&
                pHasOwn.call(inputArg, 'length')) {

            length = inputArg.length;
            if (isInteger(length) && length >= 0) {
                valid = true;
            }
        }

        return valid;
    }

    /**
     * The function takes one argument protoFn, and returns the bound function as a stand alone method.
     * Default this check is to {@link checkObjectCoercible}.
     * @memberof utilx.Function
     * @name ToMethod
     * @function
     * @param {prototypalFunction} protoFn
     * @param {Function} checkThisArgFn
     * @throws {TypeError} if protoFn is not a {@link Function function}.
     * @returns {boundPrototypalFunction}
     */
    $.Function.ToMethod = toMethod;

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
    $.Object.ToClassString = toClass;

    /**
     * Returns true if the operand inputArg is an Object.
     * @memberof utilx.Object
     * @name isObject
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Object.isObject = function (inputArg) {
        return toClass(inputArg) === classObject && !isFunction(inputArg);
    };

    /**
     * This method calls a function with a given this value and arguments provided individually.
     * @memberof utilx.Function
     * @name call
     * @function
     * @param {Function} fn
     * @param {*} thisArg
     * @param {...*} [varArgs]
     * @returns {*}
     */
    /*
    if (!testShims && !hasCallBug) {
        $.Function.call = call;
    } else {
        $.Function.prototype.call = callProto;
        $.Function.call = call = toMethod(callProto);
    }
    */

    /**
     * This method calls a function with a given this value and arguments provided individually.
     * @memberof utilx.Function
     * @name apply
     * @function
     * @param {Function} fn
     * @param {*} thisArg
     * @param {ArrayLike} [argsArray]
     * @returns {*}
     */
    /*
    if (!testShims && !hasCallBug) {
        $.Function.apply = apply;
    } else {
        $.Function.prototype.apply = applyProto;
        $.Function.apply = apply = toMethod(applyProto);
    }
    */

    /**
     * Throws a TypeError if arguments is a function otherwise returns the function.
     * @private
     * @function throwIfAFunction
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is a {@link Function function}.
     * @returns {Function}
     */
    function throwIfAFunction(inputArg) {
        if (isFunction(inputArg)) {
            throw new CTypeError(toClass(inputArg) + ' is a function');
        }

        return inputArg;
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
        if (testShims || !isNative(base.Function.bind)) {
            throw new CError();
        }

        testTemp.bindArr = [1, 2, 3];
        testTemp.bindCtr1 = base.Function.bind.call(function () {
            return testTemp.bindArr;
        }, null);

        testTemp.bindArrObj = new testTemp.bindCtr1();
        if (testTemp.bindArr !== testTemp.bindArrObj) {
            throw new CError();
        }

        testTemp.bindFn = function (x) {
            this.name = x || 'A';
        };

        testTemp.bindCtr2 = base.Function.bind.call(testTemp.bindFunc1, null, 'B');
        testTemp.bindObj = new testTemp.bindCtr2();
        if (!(testTemp.bindObj instanceof testTemp.bindFn) || !(testTemp.bindObj instanceof testTemp.bindCtr2)) {
            throw new CError();
        }

        $.Function.bind = toMethod(base.Function.bind);
    } catch (eBind) {
        $.Function.prototype.bind = (function () {
            /**
             * @private
             * @name BindCtr
             * @constructor
             */
            function BindCtr() {
                return;
            }

            /**
             * @private
             * @name bindArgs
             * @function
             * @param {number} length
             * @return {string}
             */
            function bindArgs(length) {
                var len = mMax(0, length),
                    args = [],
                    index;

                for (index = 0, args.length = len; index < len; index += 1) {
                    args[index] = '$' + index;
                }

                return pJoin.call(args, ',');
            }

            return function (thisArg, varArgs) {
                /*jslint unparam:true */
                /*jshint unused:false */
                var fn = throwIfNotAFunction(this),
                    args = $slice(arguments, 1),
                    bound = (function (binder) {
                        /*jslint evil: true */
                        var f = eval('(function(){return function(' +
                                     bindArgs(fn.length - args.length) +
                                     '){return binder.apply(this,arguments);}}());');
                        /*jslint evil: false */

                        return f;
                    }(function () {
                        var binderArgs = pConcat.call(args, $slice(arguments)),
                            result;

                        if (this instanceof bound) {
                            result = fn.apply(this, binderArgs);
                            if (cObject(result) === result) {
                                return result;
                            }

                            return this;
                        }

                        return fn.apply(thisArg, binderArgs);
                    }));

                if (cObject(fn.prototype) === fn.prototype) {
                    BindCtr.prototype = fn.prototype;
                    bound.prototype = new BindCtr();
                    BindCtr.prototype = protoFunction;
                }

                return bound;
            };
        }());

        $.Function.bind = toMethod($.Function.prototype.bind);
    }

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
    if (!testShims && isNative(mIsArray)) {
        $.Array.isArray = isArray = mIsArray;
    } else {
        $.Array.isArray = isArray = function (inputArg) {
            return inputArg !== null && typeof inputArg === 'object' && toClass(inputArg) === classArray;
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
    if (!testShims && pJoin.call([1, 2]) === '1,2') {
        $.Array.prototype.join = pJoin;
    } else {
        $.Array.prototype.join = function (separator) {
            checkObjectCoercible(this);

            var type = typeof separator;

            if (type === 'undefined') {
                separator = ',';
            }

            return pJoin.call(this, separator);
        };
    }

    $.Array.join = toMethod($.Array.prototype.join);

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
    if (!testShims && isNative(base.Object.is)) {
        $.Object.is = base.Object.is;
    } else {
        $.Object.is = function (x, y) {
            var val;

            if (x === y) {
                val = x !== 0 || (1 / x) === (1 / y);
            } else {
                val = (x !== x) && (y !== y);
            }

            return val;
        };
    }

    objectIs = $.Object.is;

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
        return !objectIs(x, y);
    };

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * NOTE This function differs from the global isNaN function (18.2.3) is that it does not convert its argument
     * to a Number before determining whether it is NaN.
     * @memberof utilx.Number
     * @name isNaN
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isNaN
     */
    if (!testShims && isNative(base.Number.isNaN)) {
        $.Number.isNaN = base.Number.isNaN;
    } else {
        $.Number.isNaN = function (inputArg) {
            return typeof inputArg === 'number' && inputArg !== inputArg;
        };
    }

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
    if (!testShims && isNative(base.Number.isFinite)) {
        $.Number.isFinite = base.Number.isFinite;
    } else {
        $.Number.isFinite = function (number) {
            return typeof number === 'number' && number === number && number !== Infinity && number !== -Infinity;
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
    if (!testShims && isNative(base.Math.sign)) {
        $.Math.sign = base.Math.sign;
    } else {
        $.Math.sign = function (value) {
            return +value && (+(value >= 0) || -1);
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
    if (!testShims && isNative(base.Number.toInteger)) {
        $.Number.toInteger = toInteger = base.Number.toInteger;
    } else {
        $.Number.toInteger = toInteger;
    }

    /**
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberof utilx.Number
     * @name isInteger
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/isInteger
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.isinteger
     */
    try {
        if (testShims || !isNative(base.Number.isInteger)) {
            throw new CError();
        }

        $.Number.isInteger = isInteger = base.Number.isInteger;
    } catch (eIsInt) {
        $.Number.isInteger = isInteger = function (inputArg) {
            return typeof inputArg === 'number' &&
                    inputArg !== Infinity &&
                    inputArg !== -Infinity &&
                    toInteger(inputArg) === inputArg;
        };
    }

    /**
     * The isInteger method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberof utilx.Number
     * @name isSafeInteger
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-number.issafeinteger
     */
    try {
        if (testShims || !isNative(base.Number.isSafeInteger)) {
            throw new CError();
        }

        if (base.Number.isSafeInteger(UNSAFE_INTEGER) || base.Number.isSafeInteger(-UNSAFE_INTEGER)) {
            throw new CError('Failed unsafe integer check');
        }

        $.Number.isSafeInteger = isSafeInteger = base.Number.isSafeInteger;
    } catch (eIsInt) {
        $.Number.isSafeInteger = isSafeInteger = function (inputArg) {
            return typeof inputArg === 'number' &&
                    inputArg !== Infinity &&
                    inputArg !== -Infinity &&
                    toInteger(inputArg) === inputArg &&
                    inputArg >= MIN_SAFE_INTEGER &&
                    inputArg <= MAX_SAFE_INTEGER;
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
    $.Number.toInt32 = toInt32 = function (inputArg) {
        var number = +inputArg,
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * floor(abs(number))) % UWORD32;
            if (val > MAX_INT32) {
                val -= UWORD32;
            } else if (val < MIN_INT32) {
                val += UWORD32;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT32 && inputArg <= MAX_INT32;
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

    $.Number.modulo = modulo = toMethod($.Number.prototype.modulo, justArg);

    /**
     * The Number.isOdd returns true if the integer is odd otherwise false.
     * @memberof utilx.Number
     * @name isOdd
     * @function
     * @param {number} inputArg
     * @returns {boolean}
     */
    $.Number.isOdd = function (inputArg) {
        return isSafeInteger(inputArg) && (inputArg % 2) !== 0;
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
        return isSafeInteger(inputArg) && (inputArg % 2) === 0;
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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UNSAFE_INTEGER);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_SAFE_INTEGER;
    };

    /**
     * The abstract operation ToLength converts its argument to an integer suitable for use as the length
     * of an array-like object.
     * @memberof utilx.Number
     * @name toLength
     * @function
     * @param {*} inputArg
     * @returns {number}
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
     */
    $.Number.toLength = toLength;

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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD32);
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
    $.Number.isUint32 = isUint32 = function (inputArg) {
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT32;
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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = ((number > 0 || -1) * floor(abs(number))) % UWORD16;
            if (val > MAX_INT16) {
                val -= UWORD16;
            } else if (val < MIN_INT16) {
                val += UWORD16;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT16 && inputArg <= MAX_INT16;
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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD16);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT16;
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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val  = ((number > 0 || -1) * floor(abs(number))) % UWORD8;
            if (val > MAX_INT8) {
                val -= UWORD8;
            } else if (val < MIN_INT8) {
                val += UWORD8;
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
        return isSafeInteger(inputArg) && inputArg >= MIN_INT8 && inputArg <= MAX_INT8;
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
            val = 0;

        if (number && number === number && number !== Infinity && number !== -Infinity) {
            val = modulo(toInteger(number), UWORD8);
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
        return isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT8;
    };

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
            throw new CTypeError('invalid length property: ' + $toString(inputArg));
        }

        return inputArg;
    }

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
    testTemp.pushArr = [];
    testTemp.pushObj = {};
    if (!testShims &&
            pPush.call(testTemp.pushArr, 0) === 1 &&
            testTemp.pushArr[0] === 0 &&
            pPush.call(testTemp.pushObj, 0) === 1 &&
            testTemp.pushObj[0] === 0) {

        $.Array.push = toMethod(pPush);
    } else {
        $.Array.prototype.push = function () {
            var object = toObjectFixIndexedAccess(this);

            object.length = toLength(object.length);
            pPush.apply(object, arguments);

            return object.length;
        };

        $.Array.push = toMethod($.Array.prototype.push);
    }

    $push = $.Array.push;

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
    testTemp.unshiftArr = [];
    testTemp.unshiftObj = {};
    if (!testShims &&
            pUnshift.call(testTemp.unshiftArr, 0) === 1 &&
            testTemp.unshiftArr[0] === 0 &&
            pUnshift.call(testTemp.unshiftObj, 0) === 1 &&
            testTemp.unshiftObj[0] === 0) {

        $.Array.unshift = toMethod(pUnshift);
    } else {
        $.Array.prototype.unshift = function () {
            var object = toObjectFixIndexedAccess(this);

            object.length = toLength(object.length);
            pUnshift.apply(object, arguments);

            return object.length;
        };

        $.Array.unshift = toMethod($.Array.prototype.unshift);
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
        return mMin(mMax(toInteger(num), toInteger(min)), toInteger(max));
    };

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     * @memberof utilx.Array
     * @name contains
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {Object} searchElement
     * @param {number} [fromIndex]
     * @returns {boolean}
     */
    if (!testShims && isNative(pIndexOf) && pIndexOf.call([0, 1], 1, 2) === -1) {
        $.Array.prototype.contains = function (searchElement, fromIndex) {
            /*jslint unparam: true */
            /*jshint unused: false */
            return pIndexOf.apply(toObjectFixIndexedAccess(this), arguments) !== -1;
        };
    } else {
        $.Array.prototype.contains = function (searchElement, fromIndex) {
            var object = toObjectFixIndexedAccess(this),
                length = toLength(object.length),
                val = false,
                index;

            if (length) {
                if (arguments.length > 1) {
                    fromIndex = toInteger(fromIndex);
                } else {
                    fromIndex = 0;
                }

                if (fromIndex < length) {
                    if (fromIndex < 0) {
                        fromIndex = length - abs(fromIndex);
                        if (fromIndex < 0) {
                            fromIndex = 0;
                        }
                    }

                    for (index = fromIndex; index < length; index += 1) {
                        if (index in object && searchElement === object[index]) {
                            val = true;
                            break;
                        }
                    }
                }
            }

            return val;
        };
    }

    $.Array.contains = toMethod($.Array.prototype.contains);

    /**
     * Throws a TypeError if the argument is not a RegExp.
     * @function throwIfIsNotRegExp
     * @private
     * @param {*} inputArg
     * @throws {TypeError} if inputArg is not a {@link RegExp RegExp}.
     * @returns {RegExp}
     */
    function throwIfIsNotRegExp(inputArg) {
        if (!isRegExp(inputArg)) {
            throw new CTypeError('Type RegExp expected: ' + $toString(inputArg));
        }

        return inputArg;
    }

    (function () {
        var clipDups = new CRegExp('([\\s\\S])(?=[\\s\\S]*\\1)', 'g'),
            // Check for correct `exec` handling of nonparticipating capturing groups
            npcgType = typeof pExec.call(new CRegExp('()??'), '')[1],
            escapeThese = new CRegExp('[\\[\\](){}?*+\\^$\\\\.|]', 'g'),
            correctExecNpcg = npcgType === 'undefined',
            replacementToken = new CRegExp('\\$(?:\\{(\\$+)\\}|(\\d\\d?|[\\s\\S]))', 'g'),
            getNativeFlags = new CRegExp('\\/([a-z]*)$', 'i'),
            es5limit = pJoin.call(pSplit.call('test', /(?:)/, -1), '') === 'test' &&
                        pJoin.call(pSplit.call('a b c d', / /, -(UWORD32 - 1)), '') === 'a' &&
                        pJoin.call(pSplit.call('a b c d', / /, UWORD32 + 1), '') === 'a' &&
                        pJoin.call(pSplit.call('a b c d', / /, Infinity), '') === '';

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
            return pReplace.call(onlyCoercibleToString(this), escapeThese, '\\$&');
        };

        $.String.escapeRegex = toMethod($.String.prototype.escapeRegex);

        /**
         * Removes any duplicate characters from the provided string.
         * @memberof utilx.String
         * @function clipDuplicates
         * @param {string} str String to remove duplicate characters from.
         * @returns {string} String with any duplicate characters removed.
         */
        $.String.clipDuplicates = function (str) {
            return pReplace.call(onlyCoercibleToString(str), clipDups, '');
        };

        /**
         * Copies a regex object. Allows adding and removing native flags while copying the regex.
         * @private
         * @function copyRegExp
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
         * @memberof utilx.RegExp
         * @name exec
         * @function
         * @param {RegExp} regExpArg
         * @param {string} stringArg String to search.
         * @returns {Array} Match array with named backreference properties, or `null`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
         */
        $.RegExp.prototype.exec = function (stringArg) {
            var str,
                origLastIndex,
                match,
                found,
                len,
                idx,
                r2;

            throwIfIsNotRegExp(this);
            str = $toString(stringArg);
            origLastIndex = this.lastIndex;
            match = pExec.apply(this, arguments);
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

        $.RegExp.exec = $exec = toMethod($.RegExp.prototype.exec);

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
            return !!$exec(this, stringArg);
        };

        $.RegExp.test = $test = toMethod($.RegExp.prototype.test);

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
        if (testShims ||
                pSplit.call('test', new CRegExp('(?:test)*')).length !== 2 ||
                pSplit.call('.', new CRegExp('(.?)(.?)')).length !== 4 ||
                pSplit.call('tesst', new CRegExp('(s)*'))[1] === 't' ||
                pSplit.call('', new CRegExp('.?')).length > 0 ||
                pSplit.call('.', new CRegExp('()()')).length > 1) {

            $.String.prototype.split = (function () {
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
                        type = typeof separator,
                        output,
                        origLastIndex,
                        lastLastIndex,
                        lastLength,
                        pos,
                        match,
                        length;

                    // "0".split(undefined, 0) -> []
                    if (type === 'undefined' && limit === 0) {
                        output = [];
                    } else {
                        type = typeof limit;
                        if (es5limit) {
                            if (type === 'undefined') {
                                limit = MAX_UINT32;
                            } else {
                                limit = mMin(toLength(limit), MAX_UINT32);
                            }
                        } else {
                            if (type === 'undefined') {
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
        } else {
            $.String.prototype.split = function (separator, limit) {
                var type = typeof separator,
                    val;

                // "0".split(undefined, 0) -> []
                if (type === 'undefined' && limit === 0) {
                    val = [];
                } else {
                    type = typeof limit;
                    if (es5limit) {
                        if (type === 'undefined') {
                            limit = MAX_UINT32;
                        } else {
                            limit = mMin(toLength(limit), MAX_UINT32);
                        }
                    } else {
                        if (type === 'undefined') {
                            limit = MAX_SAFE_INTEGER;
                        } else {
                            limit = toLength(limit);
                        }
                    }

                    val = pSplit.call(onlyCoercibleToString(this), separator, limit);
                }

                return val;
            };
        }

        $.String.split = $split = toMethod($.String.prototype.split);

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
                        if ($2 === $2) {
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

        $.String.replace = $replace = toMethod($.String.prototype.replace);

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

        $.String.replaceAll = toMethod($.String.prototype.replaceAll);

        /**
         * Fixes browser bugs in the native `String.prototype.match`.
         * @memberof utilx.String
         * @name match
         * @function
         * @param {string} stringArg String to search.
         * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
         * @returns {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
         * the result of calling `$exec(regExpArg)`.
         * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
         */
        $.String.prototype.match = function (regExpArg) {
            var str = onlyCoercibleToString(this),
                result;

            if (!isRegExp(regExpArg)) {
                regExpArg = new CRegExp(regExpArg);
            } else if (regExpArg.global) {
                result = pMatch.apply(str, arguments);
                // Fixes IE bug
                regExpArg.lastIndex = 0;

                return result;
            }

            return $exec(regExpArg, str);
        };

        $.String.match = toMethod($.String.prototype.match);
    }());

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
        return pCharAt.call(onlyCoercibleToString(this), 0);
    };

    $.String.first = toMethod($.String.prototype.first);

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

        return pCharAt.call(str, str.length - 1);
    };

    $.String.last = toMethod($.String.prototype.last);

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
            first = pCharAt.call(onlyCoercibleToString(character), 0),
            val;

        if (first === '') {
            val = Infinity;
        } else {
            val = mMin(mMax($split(str, first).length - 1, 0), Infinity);
        }

        return val;
    };

    $.String.countCharacter = toMethod($.String.prototype.countCharacter);

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
            singleChar = pCharAt.call(onlyCoercibleToString(character), 0),
            count = toInteger(size) - string.length;

        if (count < 0 || count === Infinity) {
            count = 0;
        }

        return $.String.repeat(singleChar, count) + string;
    };

    $.String.padLeadingChar = toMethod($.String.prototype.padLeadingChar);

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
    if (!testShims && isNative(pSRepeat)) {
        $.String.repeat = toMethod(pSRepeat);
    } else {
        $.String.prototype.repeat = (function () {
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

            return function (times) {
                var thisString = onlyCoercibleToString(this),
                    count = toInteger(times);

                if (count < 0 || count === Infinity) {
                    throw new CRangeError();
                }

                return stringRepeatRep(thisString, count);
            };
        }());

        $.String.repeat = toMethod($.String.prototype.repeat);
    }

    $repeat = $.String.repeat;

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
    if (!testShims && isNative(pStartsWith)) {
        $.String.startsWith = toMethod(pStartsWith);
    } else {
        $.String.prototype.startsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $toString(searchString),
                start = mMin(mMax(toInteger(position), 0), thisStr.length);

            return pSSlice.call(thisStr, start, start + searchStr.length) === searchStr;
        };

        $.String.startsWith = toMethod($.String.prototype.startsWith);
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
    if (!testShims && isNative(pEndsWith)) {
        $.String.endsWith = toMethod(pEndsWith);
    } else {
        $.String.prototype.endsWith = function (searchString, position) {
            var thisStr = onlyCoercibleToString(this),
                searchStr = $toString(searchString),
                thisLen = thisStr.length,
                type = typeof position,
                end,
                start;

            if (type === 'undefined') {
                position = thisLen;
            } else {
                position = toInteger(position);
            }

            end = mMin(mMax(position, 0), thisLen);
            start = end - searchStr.length;

            return start >= 0 && pSSlice.call(thisStr, start, end) === searchStr;
        };

        $.String.endsWith = toMethod($.String.prototype.endsWith);
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
    if (!testShims && isNative(pContains)) {
        $.String.contains = toMethod(pContains);
    } else {
        $.String.prototype.contains = function (searchString, position) {
            var str = onlyCoercibleToString(this),
                searchStr = $toString(searchString),
                length = str.length,
                type = typeof position;

            if (type === 'undefined') {
                position = 0;
            } else {
                position = toInteger(position);
            }

            return pSIndexOf.call(str, searchStr, mMin(mMax(position, 0), length)) !== -1;
        };

        $.String.contains = toMethod($.String.prototype.contains);
    }

    stringContains = $.String.contains;

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
     * Actually based on the ECMA6 draft, which only throws on undefined or null.
     * @memberof utilx.Object
     * @name getPrototypeOf
     * @function
     * @param {Object} object
     * @returns {Prototype}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
     * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tointeger
     */
    if (!testShims && isNative(mGetPrototypeOf)) {
        try {
            if (mGetPrototypeOf(1) === protoNumber &&
                    mGetPrototypeOf(true) === protoNumber &&
                    mGetPrototypeOf('') === protoNumber) {

                $.Object.getPrototypeOf = mGetPrototypeOf;
            } else {
                throw new CError();
            }
        } catch (eGPO) {
            $.Object.getPrototypeOf = function (object) {
                return mGetPrototypeOf(cObject(checkObjectCoercible(object)));
            };
        }
    } else if (!testShims && protoObject[stringProto] === null) {
        $.Object.getPrototypeOf = function (object) {
            return cObject(checkObjectCoercible(object))[stringProto];
        };
    } else {
        $.Object.getPrototypeOf = (function () {
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
    }

    $getPrototypeOf = $.Object.getPrototypeOf;

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     * @memberof utilx.Object
     * @name isPlainObject
     * @function
     * @param {Object} object
     * @returns {boolean}
     */
    $.Object.isPlainObject = isPlainObject = function (object) {
        return toClass(object) === classObject &&
                !isFunction(object) &&
                $getPrototypeOf(object) === protoObject;
    };

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the $.Object.has function, this method does not check down the object's prototype chain.
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
            var prop = $toString(property),
                hop = pHasOwn.call(this, prop),
                length,
                index;

            if (!hop && prop in this) {
                for (index = 0, length = shadowed.length; index < length; index += 1) {
                    if (prop === shadowed[index] && this[prop] !== $getPrototypeOf(this)[prop]) {
                        hop = true;
                        break;
                    }
                }
            }

            return hop;
        };

        $.Object.hasOwn = toMethod($.Object.prototype.hasOwn);
    } else if (hasProtoEnumBug) {
        $.Object.prototype.hasOwn = function (property) {
            var prop = $toString(property);

            return (prop === 'prototype' && isFunction(this)) || pHasOwn.call(this, prop);
        };

        $.Object.hasOwn = toMethod($.Object.prototype.hasOwn);
    } else {
        $.Object.hasOwn = toMethod(pHasOwn);
    }

    $hasOwn = $.Object.hasOwn;

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
        return !throwIfIsNotHasValidLength(throwIfAFunction(cObject(checkObjectCoercible(inputArg)))).length;
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
        return throwIfIsNotHasValidLength(toObjectFixIndexedAccess(this))[0];
    };

    $.Array.first = toMethod($.Array.prototype.first);

    /**
     * Returns the last element of an array; otherwise returns undefined.
     * @memberof utilx.Array
     * @name last
     * @function
     * @param {ArrayLike} inputArg
     * @returns {*}
     */
    $.Array.prototype.last = function () {
        var object = throwIfIsNotHasValidLength(toObjectFixIndexedAccess(this));

        return object[object.length - 1];
    };

    $.Array.last = toMethod($.Array.prototype.last);

    /**
     * The put method assigns a value to a specific element of an array and
     * returns the new length of the array.
     * @private
     * @name put
     * @function
     * @param {ArrayLike} array
     * @param {NumberLike} index
     * @param {*} value
     * @returns {(number|undefined)}
     */

    /**
     * The Array.assign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     * @memberof utilx.Array
     * @name assign
     * @function
     * @param {ArrayLike} array
     * @param {NumberLike} index
     * @param {*} value
     * @returns {(number|undefined)}
     */
    $.Array.prototype.assign = (function () {
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

    $.Array.assign = toMethod($.Array.prototype.assign);

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
     * @param {equalityFn} [equalFn]
     * @throws {TypeError} if equalFn is not a {@link Function function}.
     * @param {*} [thisArg]
     * @returns {Array}
     */
    $.Array.prototype.unique = function (equalFn, thisArg) {
        var object = toObjectFixIndexedAccess(this),
            type = typeof equalFn,
            length,
            index,
            arr,
            idx,
            val,
            it;

        if (type === 'undefined') {
            equalFn = $.Object.strictEqual;
        }

        throwIfNotAFunction(equalFn);
        for (arr = [], index = 0, length = toLength(object.length); index < length; index += 1) {
            if (index in object) {
                for (it = object[index], val = true, idx = 0; idx < length; idx += 1) {
                    if (idx < index && idx in object && equalFn.call(thisArg, it, object[idx])) {
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

    $.Array.unique = toMethod($.Array.prototype.unique);

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
    if (!testShims && isNative(pSplice) && pSplice([1, 2], 0).length === 2) {
        try {
            if (!pSplice.call([1, 2]).length) {
                $.Array.splice = toMethod(pSplice);
            } else {
                throw new CError();
            }
        } catch (eSplice) {
            $.Array.prototype.splice = function () {
                var val;

                if (arguments.length < 1) {
                    val = [];
                } else {
                    val = pSplice.apply(this, arguments);
                }

                return val;
            };

            $.Array.splice = toMethod($.Array.prototype.splice);
        }
    } else {
        $.Array.prototype.splice = function (start, deleteCount) {
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

        $.Array.splice = toMethod($.Array.prototype.splice);
    }

    $splice = $.Array.splice;

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
                hasV8StrictBug = this !== null && typeof this === 'object';
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
        pForEach.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.felist = list;
        });

        if (!testShims &&
                isNative(pForEach) &&
                isTypeObject(testTemp.felist) &&
                toClass(testTemp.felist) === classString &&
                !checkV8StrictBug(pForEach)) {

            $.Array.forEach = toMethod(pForEach);
        } else {
            throw new CError();
        }
    } catch (eForEach) {
        $.Array.prototype.forEach = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                index;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (index = 0; index < length; index += 1) {
                if (index in object) {
                    fn.call(thisArg, object[index], index, object);
                }
            }
        };

        $.Array.forEach = toMethod($.Array.prototype.forEach);
    }

    $forEach = $.Array.forEach;

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
        var object = toObjectFixIndexedAccess(this),
            length,
            index,
            val;

        throwIfNotAFunction(fn);
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

    $.Array.forAll = toMethod($.Array.prototype.forAll);

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
        pSome.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.slist = list;
        });

        if (!testShims &&
                isNative(pSome) &&
                isTypeObject(testTemp.slist) &&
                toClass(testTemp.slist) === classString &&
                !checkV8StrictBug(pSome)) {

            $.Array.some = toMethod(pSome);
        } else {
            throw new CError();
        }
    } catch (eSome) {
        $.Array.prototype.some = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                val,
                length,
                index;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (val = false, index = 0; index < length; index += 1) {
                if (index in object) {
                    val = !!fn.call(thisArg, object[index], index, object);
                    if (val) {
                        break;
                    }
                }
            }

            return val;
        };

        $.Array.some = toMethod($.Array.prototype.some);
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
    if (!testShims && isNative(pFind) && !checkV8StrictBug(pFind)) {
        $.Array.find = toMethod(pFind);
    } else {
        $.Array.prototype.find = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                index,
                val,
                it;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (index = 0; index < length; index += 1) {
                if (index in object) {
                    it = object[index];
                    if (fn.call(thisArg, it, index, object)) {
                        val = it;
                        break;
                    }
                }
            }

            return val;
        };

        $.Array.find = toMethod($.Array.prototype.find);
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
    if (!testShims && isNative(pFindIndex) && !checkV8StrictBug(pFindIndex)) {
        $.Array.findIndex = toMethod(pFindIndex);
    } else {
        $.Array.prototype.findIndex = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                val,
                length,
                index;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (val = -1, index = 0; index < length; index += 1) {
                if (index in object && fn.call(thisArg, object[index], index, object)) {
                    val = index;
                    break;
                }
            }

            return val;
        };

        $.Array.findIndex = toMethod($.Array.prototype.findIndex);
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
    if (!testShims && isNative(mFrom) && !checkV8StrictBug(mFrom)) {
        $.Array.from = mFrom;
    } else {
        $.Array.from = function (arrayLike, mapfn, thisArg) {
            var object = toObjectFixIndexedAccess(arrayLike),
                type = typeof mapfn,
                length,
                array,
                mapping,
                index,
                it;

            if (type !== 'undefined') {
                mapping = !!throwIfNotAFunction(mapfn);
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
        pEvery.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.elist = list;
        });

        if (!testShims &&
                isNative(pEvery) &&
                isTypeObject(testTemp.elist) &&
                toClass(testTemp.elist) === classString &&
                !checkV8StrictBug(pEvery)) {

            $.Array.every = toMethod(pEvery);
        } else {
            throw new CError();
        }
    } catch (eEvery) {
        $.Array.prototype.every = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                val,
                index;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (val = true, index = 0; index < length; index += 1) {
                if (index in object) {
                    val = !!fn.call(thisArg, object[index], index, object);
                    if (!val) {
                        break;
                    }
                }
            }

            return val;
        };

        $.Array.every = toMethod($.Array.prototype.every);
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
        pMap.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.mlist = list;
        });

        if (!testShims &&
                isNative(pMap) &&
                isTypeObject(testTemp.mlist) &&
                toClass(testTemp.mlist) === classString &&
                !checkV8StrictBug(pMap)) {

            $.Array.map = toMethod(pMap);
        } else {
            throw new CError();
        }
    } catch (eMap) {
        $.Array.prototype.map = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                arr,
                index;

            throwIfNotAFunction(fn);
            arr = [];
            arr.length = length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (index = 0; index < length; index += 1) {
                if (index in object) {
                    arr[index] =  fn.call(thisArg, object[index], index, object);
                }
            }

            return arr;
        };

        $.Array.map = toMethod($.Array.prototype.map);
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
    if (!testShims && isNative(mOf)) {
        $.Array.of = mOf;
    } else {
        $.Array.of = function () {
            return $slice(arguments);
        };
    }

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
        pFilter.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.flist = list;
        });

        if (!testShims &&
                isNative(pFilter) &&
                isTypeObject(testTemp.flist) &&
                toClass(testTemp.flist) === classString &&
                !checkV8StrictBug(pFilter)) {

            $.Array.filter = toMethod(pFilter);
        } else {
            throw new CError();
        }
    } catch (eFilter) {
        $.Array.prototype.filter = function (fn, thisArg) {
            var object = toObjectFixIndexedAccess(this),
                length,
                arr,
                index,
                it;

            throwIfNotAFunction(fn);
            length = toLength(object.length);
            if (length) {
                thisArg = toObjectCallFix(thisArg);
            }

            for (arr = [], index = 0; index < length; index += 1) {
                it = object[index];
                if (index in object && fn.call(thisArg, it, index, object)) {
                    pPush.call(arr, it);
                }
            }

            return arr;
        };

        $.Array.filter = toMethod($.Array.prototype.filter);
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
        pReduce.call('foo', function (unused1, unused2, unused3, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.rlist = list;
        });

        if (!testShims &&
                isNative(pReduce) &&
                isTypeObject(testTemp.rlist) &&
                toClass(testTemp.rlist) === classString) {

            $.Array.reduce = toMethod(pReduce);
        } else {
            throw new CError();
        }
    } catch (eReduce) {
        (function () {
            var reduceTypeErrorMessage = 'reduce of empty array with no initial value';

            $.Array.prototype.reduce = function (fn, initialValue) {
                var object = toObjectFixIndexedAccess(this),
                    accumulator,
                    length,
                    kPresent,
                    index;

                throwIfNotAFunction(fn);
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
                        kPresent = index in object;
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
                    if (index in object) {
                        accumulator = fn.call(Undefined, accumulator, object[index], index, object);
                    }

                    index += 1;
                }

                return accumulator;
            };
        }());

        $.Array.reduce = toMethod($.Array.prototype.reduce);
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
        pReduceRight.call('foo', function (unused1, unused2, unused3, list) {
            /*jslint unparam: true */
            /*jshint unused: false */
            testTemp.rrlist = list;
        });

        if (!testShims &&
                isNative(pReduceRight) &&
                isTypeObject(testTemp.rrlist) &&
                toClass(testTemp.rrlist) === classString) {

            $.Array.reduceRight = toMethod(pReduceRight);
        } else {
            throw new CError();
        }
    } catch (eReduceRight) {
        (function () {
            var reduceRightTypeErrorMessage = 'reduceRight of empty array with no initial value';

            $.Array.prototype.reduceRight = function (fn, initialValue) {
                var object = toObjectFixIndexedAccess(this),
                    accumulator,
                    length,
                    kPresent,
                    index;

                throwIfNotAFunction(fn);
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
                        kPresent = index in object;
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
                    if (index in object) {
                        accumulator = fn.call(Undefined, accumulator, object[index], index, object);
                    }

                    index -= 1;
                }

                return accumulator;
            };
        }());

        $.Array.reduceRight = toMethod($.Array.prototype.reduceRight);
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

        min = toInteger(min);
        max = toInteger(max);
        if (min === max) {
            max = 1;
            min = 0;
        }

        var val;

        if (min < 0 && max > 0 && (max - min + 1) > MAX_SAFE_INTEGER) {
            val = floor(random() * UNSAFE_INTEGER) * (floor(random() * 2) || -1);
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
     * @private
     * @function sortCompare
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
     * @private
     * @function merge
     * @param {ArrayLike} left
     * @param {ArrayLike} right
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
     * @private
     * @function mergeSort
     * @param {ArrayLike} array
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
            middle = ceil(length / 2);
            front = $slice(array, 0, middle);
            back = $slice(array, middle);
            val = merge(mergeSort(front, comparefn), mergeSort(back, comparefn), comparefn);
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
        var object = toObjectFixIndexedAccess(this),
            length = toLength(object.length),
            type = typeof comparefn,
            index,
            sorted;

        if (type === 'undefined') {
            comparefn = defaultComparison;
        }

        throwIfNotAFunction(comparefn);
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

    $.Array.stableSort = toMethod($.Array.prototype.stableSort);

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
    if (!testShims && isNative(pSort)) {
        $.Array.prototype.sort = function (comparefn) {
            var type = typeof comparefn;

            if (type === 'undefined') {
                comparefn = defaultComparison;
            }

            return pSort.call(checkObjectCoercible(this), throwIfNotAFunction(comparefn));
        };
    } else {
        $.Array.prototype.sort = $.Array.prototype.stableSort;
    }

    $.Array.sort = toMethod($.Array.prototype.sort);

    /**
     * This {@link boundPrototypalFunction method} removes whitespace from both ends of the string.
     * @memberof utilx.String
     * @name trim
     * @function
     * @param {string} inputArg
     * @returns {string}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
     */
    (function () {
        var whiteSpaces = [
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
            ],
            length = whiteSpaces.length,
            wsStr = '',
            index,
            wsTrim,
            hex;

        for (testTemp.trimString = '', index = 0; index < length; index += 1) {
            hex = pNToString.call(whiteSpaces[index], 16);
            wsStr += '\\u' + pSSlice.call('0000', 0, -hex.length) + hex;
            testTemp.trimString += base.String.fromCharCode(whiteSpaces[index]);
        }

        try {
            if (!testShims && isNative(pTrim) && !pTrim.call(testTemp.trimString).length) {
                $.String.trim = toMethod(pTrim);
            } else {
                throw new CError();
            }
        } catch (eTrim) {
            wsTrim = new CRegExp('^[' + wsStr + ']+|[' + wsStr + ']+$', 'g');
            $.String.prototype.trim = function () {
                return $replace(onlyCoercibleToString(this), wsTrim, '');
            };

            $.String.trim = toMethod($.String.prototype.trim);
        }
    }());

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
    if (testShims ||
            !isNative(base.Number.parseInt) ||
            base.Number.parseInt(testTemp.trimString + '08') !== 8 ||
            base.Number.parseInt(testTemp.trimString + '0x16') !== 22 ||
            base.Number.parseInt(testTemp.trimString + '0x16', 10) === 0) {

        if (testShims ||
                mParseInt(testTemp.trimString + '08') !== 8 ||
                mParseInt(testTemp.trimString + '0x16') !== 22 ||
                mParseInt(testTemp.trimString + '0x16', 10) === 0) {

            $.Number.parseInt = (function () {
                var hexRx = new CRegExp('^0[xX]');

                return function (str, radix) {
                    var type = typeof radix;

                    str = $.String.trim(str);
                    if (type === 'undefined' || !toInt32(radix)) {
                        radix = $test(hexRx, str) ? 16 : 10;
                    }

                    if (radix === 10 && $test(hexRx, str)) {
                        return 0;
                    }

                    return mParseInt(str, radix);
                };
            }());
        } else {
            $.Number.parseInt = mParseInt;
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
    if (!testShims && isNative(base.Number.parseFloat)) {
        $.Number.parseFloat = base.Number.parseFloat;
    } else {
        $.Number.parseFloat = mParsefloat;
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
                    c = floor(c / baseNum);
                }
            }

            function divide(n) {
                var c = 0,
                    index;

                for (index = last; index >= 0; index -= 1) {
                    c += data[index];
                    data[index] = floor(c / n);
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
                if (f !== f) {
                    f = 0;
                } else {
                    f = floor(f);
                }

                if (f < 0 || f > 20) {
                    throw new CRangeError('Number.toFixed called with invalid number of decimals');
                }

                x = +this;
                // Test for NaN or if it is too big or small, return the string value of the number.
                if (x !== x || x <= -1e21 || x >= 1e21) {
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
        }());
    } else {
        $.Number.prototype.toFixed = base.Number.toFixed;
    }

    $.Number.toFixed = toMethod($.Number.prototype.toFixed, justArg);

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
    if (!testShims && isNative(pIndexOf) && pIndexOf.call([0, 1], 1, 2) === -1) {
        $.Array.indexOf = toMethod(pIndexOf);
    } else {
        $.Array.prototype.indexOf = function (searchElement, fromIndex) {
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
                        fromIndex = length - abs(fromIndex);
                        if (fromIndex < 0) {
                            fromIndex = 0;
                        }
                    }

                    for (index = fromIndex; index < length; index += 1) {
                        if (index in object && searchElement === object[index]) {
                            val = index;
                            break;
                        }
                    }
                }
            }

            return val;
        };

        $.Array.indexOf = toMethod($.Array.prototype.indexOf);
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
    if (!testShims && isNative(pLastIndexOf) && pLastIndexOf.call([0, 1], 0, -3) === -1) {
        $.Array.lastIndexOf = toMethod(pLastIndexOf);
    } else {
        $.Array.prototype.lastIndexOf = function (searchElement, fromIndex) {
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
                    fromIndex = length - abs(fromIndex);
                }

                for (index = fromIndex; index >= 0; index -= 1) {
                    if (index in object && searchElement === object[index]) {
                        val = index;
                        break;
                    }
                }
            }

            return val;
        };

        $.Array.lastIndexOf = toMethod($.Array.prototype.lastIndexOf);
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
    if (!testShims && isNative(pFill)) {
        $.Array.fill = toMethod(pFill);
    } else {
        $.Array.prototype.fill = function (value, start, end) {
            var object = toObjectFixIndexedAccess(this),
                length = toLength(object.length),
                relativeStart = toInteger(start),
                type = typeof end,
                relativeEnd,
                finalEnd,
                index;

            if (start < 0) {
                relativeStart = mMax(length + relativeStart, 0);
            } else {
                relativeStart = mMin(relativeStart, length);
            }

            if (type === 'undefined') {
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

        $.Array.fill = toMethod($.Array.prototype.fill);
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
    if (!testShims && isNative(pCopyWithin)) {
        $.Array.copyWithin = toMethod(pCopyWithin);
    } else {
        $.Array.prototype.copyWithin = function (target, start, end) {
            var object = toObjectFixIndexedAccess(this),
                length = toLength(object.length),
                relativeTarget = toInteger(target),
                relativeStart = toInteger(start),
                type = typeof end,
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

            if (type === 'undefined') {
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

        $.Array.copyWithin = toMethod($.Array.prototype.copyWithin);
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
     * @memberof utilx.Object
     * @name keys
     * @function
     * @param {Object} object
     * @returns {Array}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
     */
    try {
        (function () {
            if (!testShims && isNative(base.Object.keys)) {
                var keysWorksWithArguments = mKeys(returnArgs(1, 2)).length === 2;

                if (hasErrorProps) {
                    $.Object.keys = function (object) {
                        var keys = mKeys(object),
                            length,
                            arr,
                            index,
                            len,
                            idx,
                            found,
                            it;

                        if (!keysWorksWithArguments && isArguments(object)) {
                            keys = pConcat.call(mKeys($slice(object)));
                        }

                        if (toClass(object) === classError) {
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
                    };
                } else if (!keysWorksWithArguments) {
                    $.Object.keys = function (object) {
                        var keys = mKeys(object);

                        if (isArguments(object)) {
                            keys = pConcat.call(mKeys($slice(object)));
                        }

                        return keys;
                    };
                } else {
                    $.Object.keys = mKeys;
                }
            } else {
                throw new CError();
            }
        }());
    } catch (eKeys) {
        $.Object.keys = function (object) {
            throwIfIsPrimitive(object);

            var skipProto = hasProtoEnumBug && isFunction(object),
                theClass = (hasEnumStringBug || hasDontEnumBug || hasErrorProps) && toClass(object),
                skipErrorProps = hasErrorProps && theClass === classError,
                length = skipErrorProps && unwantedError.length,
                props = [],
                prop,
                hasDEB = hasDontEnumBug && object !== protoObject,
                ctor = hasDEB && object.constructor,
                isProto = hasDEB && isFunction(ctor) && ctor.prototype === object,
                nonEnum,
                index,
                unwanted;

            for (prop in object) {
                /*jslint forin: false*/
                if (!(skipProto && prop === 'prototype')) {
                    if (skipErrorProps) {
                        for (unwanted = false, index = 0; index < length; index += 1) {
                            if (prop === unwantedError[index]) {
                                unwanted = true;
                                break;
                            }
                        }
                    }

                    if (!unwanted && $hasOwn(object, prop)) {
                        pPush.call(props, prop);
                    }
                }

                /*jslint forin: true*/
            }

            if (hasEnumStringBug && theClass === classString) {
                for (index = 0, length = object.length; index < length; index += 1) {
                    pPush.call(props, cString(index));
                }
            } else if (hasEnumArgsBug && isArguments(object)) {
                for (index = 0, length = object.length; index < length; index += 1) {
                    if ($hasOwn(object, index)) {
                        pPush.call(props, cString(index));
                    }
                }
            }

            if (hasDEB) {
                nonEnum = nonEnumProps[theClass];
                for (index = 0, length = shadowed.length; index < length; index += 1) {
                    prop = shadowed[index];
                    if (!(isProto && nonEnum[prop]) && $hasOwn(object, prop)) {
                        pPush.call(props, prop);
                    }
                }
            }

            return props;
        };
    }

    objectKeys = $.Object.keys;

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
    $.Object.prototype.forKeys = function (fn, thisArg) {
        var object = toObjectFixIndexedAccess(this),
            keys,
            len,
            val,
            index,
            it;

        throwIfNotAFunction(fn);
        keys = objectKeys(cObject(this));
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

    $.Object.forKeys = toMethod($.Object.prototype.forKeys);

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
        return !objectKeys(inputArg).length;
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
    $.String.prototype.isDigits = (function () {
        var notDigits = new CRegExp('^\\d+$');

        return function () {
            return $test(notDigits, onlyCoercibleToString(this));
        };
    }());

    $.String.isDigits = toMethod($.String.prototype.isDigits);

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
        (function () {
            if (testShims) {
                throw new CError();
            }

            if (mDefineProperty({}, 'sentinel', { value: null }) !== null) {
                throw new CError('Fails sentinel check');
            }

            var definePropertyPatch1,
                definePropertyPatch2,
                definePropertyPatch3,
                testProp;

            // Test string integer
            try {
                if (mDefineProperty([], '1.', { value: null })[1] !== null) {
                    throw new CError('Fails integer check');
                }
            } catch (eDP1) {
                definePropertyPatch1 = true;
            }

            // Test assign to array
            try {
                if (mDefineProperty([], '0', { value: null }) !== null) {
                    throw new CError('Fails array check');
                }
            } catch (eDP2) {
                definePropertyPatch2 = true;
            }

            // Test overwrite array property when no value defined
            try {
                if (mDefineProperty([10], '0', {})[0] !== 10) {
                    throw new CError('Fails overwrite check');
                }
            } catch (eDP3) {
                definePropertyPatch3 = true;
            }

            if (definePropertyPatch1 || definePropertyPatch2 || definePropertyPatch3) {
                $.Object.defineProperty = function (object, property, descriptor) {
                    var isA = (isArray(object) || isArguments(object)) && isNumeric(property) && isUint32(+property),
                        isB = (definePropertyPatch1 || definePropertyPatch2) && pHasOwn.call(descriptor, 'value');

                    if (definePropertyPatch1 && isA) {
                        property = +property;
                    }

                    if (definePropertyPatch2 && isA && (isB || !$hasOwn(object, property))) {
                        object[property] = descriptor.value;
                        //ut(object, property, descriptor.value);
                    }

                    if (definePropertyPatch3 && isA && !isB) {
                        descriptor.value = object[property];
                    }

                    return mDefineProperty(object, property, descriptor);
                };
            } else {
                $.Object.defineProperty = mDefineProperty;
            }

            testTemp.dpObject = {
                abc: 0,
                def: '',
                ghi: true,
                jkl: noop
            };

            for (testProp in testTemp.dpObject) {
                if (pHasOwn.call(testTemp.dpObject, testProp)) {
                    defineProperty(testTemp.dpObject, testProp, propNotEnumerable);
                }
            }

            if (testTemp.dpObject.abc !== 0 ||
                    testTemp.dpObject.def !==  '' ||
                    testTemp.dpObject.ghi !== true ||
                    testTemp.dpObject.jkl !== noop) {

                throw new CError();
            }

            testTemp.dpArray = [10, true, '', noop];
            for (testProp in testTemp.dpArray) {
                if (pHasOwn.call(testTemp.dpArray, testProp)) {
                    defineProperty(testTemp.dpArray, testProp, propNotEnumerable);
                }
            }

            if (testTemp.dpArray[0] !== 10 ||
                    testTemp.dpArray[1] !== true ||
                    testTemp.dpArray[2] !== '' ||
                    testTemp.dpArray[3] !== noop) {

                throw new CError();
            }
        }());
    } catch (eDP) {
        (function () {
            var definePropertyInteger = (function () {
                    var rxInt = new CRegExp('^[1-9]\\d*.?$');

                    return function (index) {
                        var val;

                        if (toClass(index) === classNumber) {
                            val = +index;
                        } else {
                            val = $toString(index);
                            if ($test(rxInt, val)) {
                                val = +val;
                            }
                        }

                        return val;
                    };
                }());

            $.Object.defineProperty = function (object, property, descriptor) {
                throwIfIsPrimitive(object);
                throwIfIsPrimitive(descriptor);
                if (pHasOwn.call(descriptor, 'value') &&
                            (pHasOwn.call(descriptor, 'get') || pHasOwn.call(descriptor, 'set'))) {

                    throw new CTypeError('Invalid property. A property cannot have accessors and a value');
                }

                var prototype,
                    type,
                    index;

                if (!pHasOwn.call(descriptor, 'get') && !pHasOwn.call(descriptor, 'set')) {
                    if (pHasOwn.call(descriptor, 'value') || !$hasOwn(object, property)) {
                        index = definePropertyInteger(property);
                        if (isProtoSupported) {
                            prototype = object[stringProto];
                            object[stringProto] = protoObject;
                            /*
                            try {
                                delete object[index];
                            } catch (ignore) {}
                            */

                            object[index] = descriptor.value;
                            type = typeof prototype;
                            if (type === 'undefined') {
                                delete object[stringProto];
                            } else {
                                object[stringProto] = prototype;
                            }
                        } else {
                            object[index] = descriptor.value;
                        }
                    }
                } else {
                    if (!isNative(mDefineGetter) || !isNative(mDefineSetter)) {
                        throw new CTypeError('getters & setters can not be defined on this javascript engine');
                    }

                    if (isFunction(descriptor.get)) {
                        mDefineGetter.call(object, property, descriptor.get);
                    }

                    if (isFunction(descriptor.set)) {
                        mDefineSetter.call(object, property, descriptor.set);
                    }
                }

                return object;
            };
        }());
    }

    defineProperty = $.Object.defineProperty;

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
    $.Object.defineProperties = defineProperties = function (object, props) {
        throwIfIsPrimitive(object);
        throwIfIsPrimitive(props);

        var keys = objectKeys(props),
            length = keys.length,
            key,
            index;

        for (index = 0; index < length; index += 1) {
            key = keys[index];
            defineProperty(object, key, props[key]);
        }

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
    if (!testShims && isNative(base.Object.freeze)) {
        $.Object.freeze = base.Object.freeze;
    } else {
        $.Object.freeze = function (object) {
            return throwIfIsPrimitive(object);
        };
    }

    // detect a Rhino bug and patch it
    try {
        $.Object.freeze({
            noop: noop
        });
    } catch (eFreeze) {
        $.Object.freeze = (function (
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
            $.Object.freeze
        ));
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
    if (!testShims && isNative(base.Object.isFrozen)) {
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
        var propKey,
            propVal,
            type;

        $.Object.freeze(object);
        for (propKey in object) {
            /*jslint forin: false*/
            propVal = object[propKey];
            type = typeof propVal;
            if (type !== 'undefined' &&
                    propVal !== null &&
                    type !== 'boolean' &&
                    type !== 'string' &&
                    type !== 'number' &&
                    !$.Object.isFrozen(propVal)) {

                $.Object.deepFreeze(propVal);
            }
            /*jslint forin: true*/
        }

        return object;
    };

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
    if (!testShims && isNative(base.Object.assign)) {
        $.Object.assign = base.Object.assign;
    } else {
        $.Object.assign = function (target) {
            var to = cObject(checkObjectCoercible(target)),
                length = toLength(arguments.length),
                from,
                index,
                keysArray,
                len,
                nextIndex,
                nextKey;

            if (length >= 2) {
                for (index = 1; index < length; index += 1) {
                    from = cObject(checkObjectCoercible(arguments[index]));
                    keysArray = objectKeys(from);
                    for (nextIndex = 0, len = keysArray.length; nextIndex < len; nextIndex += 1) {
                        nextKey = keysArray[nextIndex];
                        if ($hasOwn(from, nextKey)) {
                            to[nextKey] = from[nextKey];
                        }
                    }
                }
            }

            return to;
        };
    }

    assign = $.Object.assign;

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
            throw new CError();
        }

        testTemp.createFn = function () {
            return;
        };

        testTemp.created = base.Object.create(testTemp.createFn.prototype, {
            constructor: assign({
                value: testTemp.createFn
            }, propNotEnumerable),

            foo: assign({
                value: 'test'
            }, propNotEnumerable)
        });

        if (testTemp.created.foo !== 'test') {
            throw new CError();
        }

        $.Object.create = base.Object.create;
    } catch (eCreate) {
        (function () {
            /**
             * The constructor used by $.Object.create if shimmed.
             * @private
             * @constructor ObjectCreateFunc
             */
            function ObjectCreateFunc() {
                return;
            }

            $.Object.create = function (prototype, propertiesObject) {
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
        }());
    }

    create = $.Object.create;

    /**
     * This {@link boundPrototypalFunction method} returns true if the operand inputArg is a Date object and is valid.
     * @memberof utilx.Date
     * @name isValid
     * @function
     * @param {*} dateObject
     * @returns {boolean}
     */
    $.Date.prototype.isValid = function () {
        if (toClass(this) !== classDate) {
            throw new CTypeError('this is not a Date object.');
        }

        var ms = pGetTime.call(this);

        return ms === ms;
    };

    $.Date.isValid = toMethod($.Date.prototype.isValid);

    /**
     * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
     * @memberof utilx.Date
     * @name now
     * @function
     * @returns {number}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/now
     */
    if (!testShims && isNative(base.Date.now)) {
        $.Date.now = base.Date.now;
    } else {
        $.Date.now = function now() {
            return pGetTime.call(new CDate());
        };
    }

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
        if (toClass(characters) !== classString && toClass(characters) !== classNumber) {
            characters = '';
        } else {
            characters = $toString(characters);
        }

        return characters + onlyCoercibleToString(this) + characters;
    };

    $.String.wrapInChars = toMethod($.String.prototype.wrapInChars);

    /**
     * Tests a deep equality relation.
     * @memberof utilx.Object
     * @name deepEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
     */
    $.Object.deepEqual = deepEqual = function (a, b) {
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

        if (!isTypeObject(a) && !isTypeObject(b)) {
            return $.Object.equal(a, b);
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
            ka = objectKeys(a);
            kb = objectKeys(b);
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

        return true;
    };

    /**
     * Tests a deep equality relation.
     * @memberof utilx.Object
     * @name deepStrictEqual
     * @function
     * @param {*} a
     * @param {*} b
     * @returns {boolean}
     */
    $.Object.deepStrictEqual = deepStrictEqual = function (a, b) {
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

        if (!isTypeObject(a) && !isTypeObject(b)) {
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
            ka = objectKeys(a);
            kb = objectKeys(b);
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

        return true;
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
        if (n === n && n >= 0) {
            if (s.length > n) {
                s = pSSlice.call(s, 0, n);
            }
        }

        return s;
    };

    $.String.truncate = truncate = toMethod($.String.prototype.truncate);

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
        this.prototype = create(superCtor.prototype);
        defineProperty(this.prototype, 'constructor', assign({
            value: this
        }, propNotEnumerable));
    };

    $.Function.inherits = inherits = toMethod($.Function.prototype.inherits);

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     * @memberof utilx.Error
     * @name isErrorTypeConstructor
     * @function
     * @param {*} inputArg
     * @returns {boolean}
     */
    $.Error.isErrorTypeConstructor = isErrorTypeConstructor = function (inputArg) {
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

    /**
     * Custom replacer used to help stringify error messages.
     * @memberof utilx
     * @name customErrorReplacer
     * @function
     * @param {string} key Unused
     * @param {*} value
     * @returns {string}
     */
    $.customErrorReplacer = function (key, value) {
        /*jslint unparam: true */
        /*jshint unused: false */
        var type = typeof value,
            result;

        if (type === 'string') {
            result = value;
        } else if (type === 'undefined' ||
                    value === Infinity ||
                    value === -Infinity ||
                    $.Number.isNaN(value) ||
                    isFunction(value) ||
                    isRegExp(value)) {

            result = $toString(value);
        } else {
            result = value;
        }

        return result;
    };

    (function () {
        var patchedIEErrorToString = false,
            previousIEErrorToString;

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
         * @memberof utilx
         * @name normaliseErrorIEToStringOff
         * @function
         * @returns {boolean}
         */
        $.normaliseErrorIEToStringOff = function () {
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
         * @memberof utilx
         * @name normaliseErrorIEToStringState
         * @function
         * @returns {boolean}
         */
        $.normaliseErrorIEToStringState = function () {
            return patchedIEErrorToString;
        };
    }());

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
    $.customError = (function () {
        var splitNewLine = new CRegExp('\\r\\n|\\n'),
            isOkToUseOtherErrors,
            Custom;

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
            var CustomError;

            if (typeof name !== 'string' || name === '') {
                throw new CTypeError('"name" was not a valid string: ' + $toString(name));
            }

            if (!isErrorTypeConstructor(ErrorConstructor)) {
                throw new CTypeError('"ErrorConstructor" was not an Error type');
            }

            maxMessageLength = +maxMessageLength;
            if (maxMessageLength !== maxMessageLength || maxMessageLength < 64) {
                maxMessageLength = 128;
            }

            /**
             * @private
             * @name CustomError
             * @constructor
             */
            CustomError = function (message, stackStartFunction) {
                var err;

                if (typeof message !== 'string') {
                    message = truncate(stringify(message, $.customErrorReplacer), maxMessageLength);
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
                name: assign({
                    value: name
                }, propNotEnumerable),

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

                            messageToString += pJoin.call(tempArr, '\n');
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
            isOkToUseOtherErrors = new Custom('test') instanceof CSyntaxError;
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

            var type = typeof maxMessageLength;

            if (type === 'undefined') {
                type = typeof ErrorConstructor;
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
        testTemp.gOPDsentinel = {
            sentinel: null
        };

        testTemp.gOPDarray = [10, 20, 30];
        testTemp.gOPDarray[4] = Undefined;
        if (testShims ||
                !isNative(mGetOwnPropertyDescriptor) ||
                mGetOwnPropertyDescriptor(testTemp.gOPDsentinel, 'sentinel').value !== null ||
                mGetOwnPropertyDescriptor(testTemp.gOPDarray, 3).value !== 30 ||
                mGetOwnPropertyDescriptor(testTemp.gOPDarray, '3').value !== 30 ||
                !pHasOwn.call(mGetOwnPropertyDescriptor(testTemp.gOPDarray, 4), 'value') ||
                mGetOwnPropertyDescriptor(testTemp.gOPDarray, 4).value !== Undefined ||
                mGetOwnPropertyDescriptor(testTemp.gOPDarray, 5) !== Undefined ||
                pHasOwn.call(mGetOwnPropertyDescriptor(testTemp.gOPDarray, 5), 'value')) {

            throw new CError();
        }

        if (!(mGetOwnPropertyDescriptor(function (a) {
                return a;
            }, 'length').writable)) {

            $.Object.getOwnPropertyDescriptor = mGetOwnPropertyDescriptor;
        } else {
            $.Object.getOwnPropertyDescriptor = function (object, property) {
                var descriptor = mGetOwnPropertyDescriptor(object, property);

                if (isFunction(object) && property === 'length' && descriptor.writable) {
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

            if ($hasOwn(throwIfIsPrimitive(object), property)) {
                descriptor = {};
                descriptor.configurable = true;
                descriptor.enumerable = true;
                if (areGetSetSupported) {
                    prototype = object[stringProto];
                    object[stringProto] = protoObject;
                    getter = mLookupGetter.call(object, property);
                    setter = mLookupSetter.call(object, property);
                    type = typeof prototype;
                    if (type === 'undefined') {
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
        prop1 = $toString(prop1);
        prop2 = $toString(prop2);

        var temp1,
            temp2,
            num,
            notFunc,
            cond1,
            cond2;

        if (prop1 !== prop2) {
            temp1 = $.Object.getOwnPropertyDescriptor(object, prop1) || {};
            temp2 = $.Object.getOwnPropertyDescriptor(object, prop2) || {};
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

    /**
     * This {@link boundPrototypalFunction method} performs Fisher-Yates shuffle for randomly shuffling a set.
     * @memberof utilx.Array
     * @name shuffle
     * @function
     * @param {ArrayLike} array
     * @throws {TypeError} if array is {@link null} or {@link undefined}
     * @param {NumberLike} [rounds]
     * @returns {Array}
     * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
     */
    $.Array.prototype.shuffle = function (rounds) {
        var object = toObjectFixIndexedAccess(this),
            isString,
            inLen,
            outLen,
            inIndex,
            outIndex,
            rand,
            tempVal,
            hasItem;

        if ('length' in object && !isFunction(object)) {
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
                        rand = floor(random() * inIndex);
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

    $.Array.shuffle = toMethod($.Array.prototype.shuffle);

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
    mStringify = base.JSON.stringify;
    if (!testShims && isNative(mStringify)) {
        // A test function object with a custom `toJSON` method.
        testTemp.customJSON = function () {
            return 1;
        };

        testTemp.customJSON.toJSON = testTemp.customJSON;

        try {
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
                $.Object.isUndefined(mStringify(noop)) &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                $.Object.isUndefined(mStringify(Undefined)) &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the testTemp.customJSON is omitted entirely.
                $.Object.isUndefined(mStringify()) &&
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
        $.JSON.stringify = mStringify;
    } else {
        $.JSON.stringify = (function () {
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

            function stringifyToString(key, holder) {
                var member,
                    mind = sfyGap,
                    partial,
                    value = holder[key],
                    type = typeof value,
                    element,
                    theGap,
                    length,
                    index,
                    keys,
                    v;

                if (type !== 'undefined' &&
                        value !== null &&
                        type !== 'boolean' &&
                        type !== 'string' &&
                        type !== 'number' &&
                        isFunction(value.toJSON)) {

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
                            member = '[\n' + sfyGap +  pJoin.call(partial, ',\n' + sfyGap) + '\n' + mind + ']';
                        } else {
                            member = '[' + pJoin.call(partial, ',') + ']';
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
                                type = typeof v;
                                if (type !== 'undefined') {
                                    pPush.call(partial, stringifyQuote(element) + theGap + v);
                                }
                            }
                        }
                    } else {
                        for (index = 0, keys = objectKeys(value), length = keys.length; index < length; index += 1) {
                            element = keys[index];
                            v = stringifyToString(element, value);
                            type = typeof v;
                            if (type !== 'undefined') {
                                pPush.call(partial, stringifyQuote(element) + theGap + v);
                            }
                        }
                    }

                    if (!partial.length) {
                        member = '{}';
                    } else if (typeof sfyGap === 'string' && sfyGap !== '') {
                        member = '{\n' + sfyGap + pJoin.call(partial, ',\n' + sfyGap) + '\n' + mind + '}';
                    } else {
                        member = '{' + pJoin.call(partial, ',') + '}';
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

                type = typeof replacer;
                if (type !== 'undefined' && replacer !== null && !isFunction(replacer) && !isArray(replacer)) {
                    throw new CError('JSON.stringify');
                }

                return stringifyToString('', {
                    '': value
                });
            };
        }());
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
    mParse = base.JSON.parse;
    if (!testShims && isNative(mParse)) {
        try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if (mParse('0') === 0 && mParse(false) === false) {
                // Simple parsing test.
                testTemp.parseSimple = mParse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
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
            testTemp.parseSupport = eParse instanceof CSyntaxError;
        }

        if (testTemp.parseSupport) {
            $.JSON.parse = mParse;
        } else {
            $.JSON.parse = function (text, reviver) {
                var type = typeof text;

                if (type === 'undefined') {
                    throw new CSyntaxError('JSON.parse');
                }

                return mParse(text, reviver);
            };
        }
    } else {
        $.JSON.parse = (function () {
            var parseProtect1 = new CRegExp('^[\\],:{}\\s]*$'),
                parseProtect2 = new CRegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g'),
                parseProtect3 = new CRegExp('"[^"\\\\\\n\\r]*"|true|false|null|' +
                                           '-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g'),

                parseProtect4 = new CRegExp('(?:^|:|,)(?:\\s*\\[)+', 'g'),
                parseCharacterTest = new CRegExp('[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5' +
                                                '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff' +
                                                '\\ufff0-\\uffff]', 'g');

            function walk(holder, key, reviver) {
                var value = holder[key],
                    keys,
                    length,
                    index,
                    type,
                    k,
                    v;

                if (isTypeObject(value)) {
                    keys = objectKeys(value);
                    length = keys.length;
                    for (index = 0; index < length; index += 1) {
                        k = keys[index];
                        v = walk(value, k);
                        type = typeof v;
                        if (type !== 'undefined') {
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
    }

    stringify = $.JSON.stringify;

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
    $.Array.prototype.powerSet = pPowerSet = function () {
        var thisObj = toObjectFixIndexedAccess(this),
            val = [],
            object,
            lastElement,
            pSet,
            len,
            idx,
            it;

        if ('length' in thisObj && !isFunction(thisObj)) {
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

    $.Array.powerSet = toMethod($.Array.prototype.powerSet);

    /**
     * Convert an array to a plain object representation.
     * @memberof utilx.Array
     * @name toObject
     * @function
     * @param {ArrayLike} array
     * @returns {Object}
     */
    $.Array.prototype.toObject = function () {
        var object = toObjectFixIndexedAccess(this),
            accumulator = {},
            length,
            index;

        if ('length' in object && !isFunction(object)) {
            accumulator.length = length = toLength(object.length);
            for (index = 0; index < length; index += 1) {
                if ($hasOwn(object, index)) {
                    accumulator[index] = object[index];
                }
            }
        } else {
            accumulator.length = 0;
        }

        return accumulator;
    };

    $.Array.toObject = toMethod($.Array.prototype.toObject);

    /**
     * Creates an instance of utilx from the internal $ object.
     * @memberof utilx
     * @name factory
     * @function
     * @returns {Object}
     */
    function factory() {
        var utilx = {};

        $forEach(objectKeys($), function (key1) {
            if (!pHasOwn.call(utilx, 'methods')) {
                defineProperty(utilx, 'methods', assign({
                    value: []
                }, propNotEnumerable));
            }

            defineProperty(utilx, key1, assign({
                value: $[key1]
            }, propNotEnumerable));

            if (isPlainObject($[key1])) {
                if (!pHasOwn.call(utilx[key1], 'methods')) {
                    defineProperty(utilx[key1], 'methods', assign({
                        value: []
                    }, propNotEnumerable));
                }

                $forEach(objectKeys($[key1]), function (key2) {
                    defineProperty(utilx[key1], key2, assign({
                        value: $[key1][key2]
                    }, propNotEnumerable));

                    if (isPlainObject($[key1][key2])) {
                        if (!pHasOwn.call(utilx[key1][key2], 'methods')) {
                            defineProperty(utilx[key1][key2], 'methods', assign({
                                value: []
                            }, propNotEnumerable));
                        }

                        $forEach(objectKeys($[key1][key2]), function (key3) {
                            defineProperty(utilx[key1][key2], key3, assign({
                                value: $[key1][key2][key3]
                            }, propNotEnumerable));

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
    }

    /*
     *
     * UMD
     *
     */

    if (!isTypeObject(globalThis)) {
        throw new CTypeError('Invalid global context');
    }

    publicUtil = defineProperty(factory(), 'factory', assign({
        value: function () {
            return defineProperty(factory(), 'factory', assign({
                value: publicUtil.factory
            }, propNotEnumerable));
        }
    }, propNotEnumerable));

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

    if (isTypeObject(module) && isTypeObject(module.exports)) {
        defineProperty(module, 'exports', assign({
            value: publicUtil
        }, propNotEnumerable));
    } else if (isFunction(define) && isTypeObject(define.amd)) {
        define(function () {
            return publicUtil;
        });
    } else {
        /**
         * Only global if a module loader is not used to export the module.
         * @name utilx
         * @global
         */
        defineProperty(globalThis, 'utilx', assign({
            value: publicUtil
        }, propNotEnumerable));
    }

    // Cleanup the tempory testing object
    (function () {
        var prop;

        for (prop in testTemp) {
            if (pHasOwn.call(testTemp, prop)) {
                testTemp[prop] = null;
            }
        }

        testTemp = null;
    }());

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
