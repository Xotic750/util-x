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

/*jslint
  maxerr:100, indent:2
*/

/*global
  define, global, module, self, window
*/

/*properties
  '', '\b', '\t', '\n', '\f', '\r', '"', '0', '1', '1.', '10', '11', '2',
  '3', '4', '5', '6', '7', '8', '9', A, AffirmError, Array, AssertionError,
  Boolean, Ctr, DP, Date, EPSILON, Error, EvalError, Function, JSON,
  MAX_INT16, MAX_INT32, MAX_INT8, MAX_SAFE_INTEGER, MAX_UINT16, MAX_UINT32,
  MAX_UINT8, MAX_VALUE, MIN_INT16, MIN_INT32, MIN_INT8, MIN_SAFE_INTEGER,
  MIN_VALUE, Math, NEGATIVE_INFINITY, NEGATIVE_ZERO, NaN, Number, Object,
  POSITIVE_INFINITY, POSITIVE_ZERO, RM, RangeError, ReferenceError, RegExp,
  RequireObjectCoercible, String, SyntaxError, ToMethod, ToNumber, ToObject,
  ToPrimitive, ToString, TypeError, UNSAFE_INTEGER, URIError, UWORD16,
  UWORD32, UWORD8, Uint8Array, WORD16, WORD32, WORD8, '\\', abs, actual, add,
  alert, amd, anchor, apply, areSameClass, areSameTypeOf, assert, assign,
  bind, c, call, captureStackTrace, ceil, charAt, charCodeAt, clamp,
  clampToInt, classId, clipDuplicates, codePointAt, concat, configurable,
  console, constructor, contains, copyWithin, countCharacter, create,
  customError, customErrorReplacer, debug, deepEqual, deepFreeze,
  deepStrictEqual, defineGetter, defineProperties, defineProperty,
  defineSetter, doesNotThrow, e, endsWith, enumerable, equal, escapeRegex,
  every, exec, execSlice, expected, exports, factory, fail, fill, filter,
  find, findIndex, first, firstIn, floor, foo, forAll, forEach, forKeys,
  freeze, from, fromCharCode, fromCodePoint, get, getOwnPropertyDescriptor,
  getOwnPropertyNames, getPrototypeOf, getTime, getUTCDate, getUTCFullYear,
  getUTCHours, getUTCMilliseconds, getUTCMinutes, getUTCMonth, getUTCSeconds,
  global, goNative, hasOwn, hasOwnProperty, hasProperty, ifError, ignoreCase,
  inRange, index, indexOf, inherits, instanceOf, interimLastIndex, is,
  isArguments, isArray, isBoolean, isBytestring, isDate, isDigits, isEmpty,
  isError, isErrorTypeConstructor, isEven, isExtensible, isFinite, isFrozen,
  isFunction, isInt16, isInt32, isInt8, isInteger, isNaN, isNativeFunction,
  isNegative, isNumber, isNumeric, isOdd, isPlainObject, isPositive,
  isPrimitive, isPrototypeOf, isRegExp, isSafeInteger, isSealed, isString,
  isSymbol, isUint, isUint16, isUint32, isUint8, isUndefined, isValid, join,
  keys, last, lastIn, lastIndex, lastIndexOf, length, link, localeCompare,
  log, lookupGetter, lookupSetter, map, match, max, message, methods, min,
  minus, modulo, multiline, name, noop, normaliseErrorIEToStringOff,
  normaliseErrorIEToStringOn, normaliseErrorIEToStringState, normalize,
  notDeepEqual, notDeepStrictEqual, notEqual, notOk, notStrictEqual, now, of,
  ok, operator, outRange, padLeadingChar, parse, parseFloat, parseInt, plus,
  pop, pow, powerSet, preventExtensions, propertyIsEnumerable, proto,
  prototype, push, random, randomInt, reduce, reduceRight, regex, remove,
  repeat, replace, replaceAll, returnArgs, reverse, round, s, seal, search,
  sentinel, set, setPrototypeOf, shift, shuffle, sign, slice, some, sort,
  source, splice, split, sqrt, stableSort, stack, stackStartFunction,
  stacktrace, startsWith, sticky, strictEqual, stringify, substr, substring,
  swapItems, test, throws, times, toExponential, toFixed, toISOString,
  toInt16, toInt32, toInt8, toInteger, toJSON, toLength, toLocaleLowerCase,
  toLocaleString, toLocaleUpperCase, toLowerCase, toObject, toPrecision,
  toSource, toString, toStringTag, toUint, toUint16, toUint32, toUint8,
  toUpperCase, trim, trimLeft, trimRight, trimString, truncate, typeOf,
  unique, unshift, unwatch, value, valueOf, version, watch, wrapInChars,
  writable, wsStr, hasDeleteBug, str, target, replacement, result,
  isCircular, a, b, cnt, minArgs, maxArgs, unwanted, searchOf, searchLastOf,
  chunk, isNull, isNil, condense, compact, object, flatten
*/

/**
 * Type consisting of the primitive values.
 * @typedef {(null|undefined|boolean|string|number)} module:util-x~primitive
 * @see https://goo.gl/McxjfR
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
 * @param {?(Object|boolean)} global Reference to the 'global'
 *                            object or false.
 * @param {?(Object|boolean)} module Reference to the 'module'
 *                            object or false - CMD.
 * @param {?(Object|boolean)} define Reference to the 'define'
 *                            object or false - AMD.
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
    INFINITY = 1 / POSITIVE_ZERO,
    NEGATIVE_INFINITY = 1 / NEGATIVE_ZERO,

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
    //stringTagSymbol = '[object Symbol]',


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

    hintString = '',
    hintNumber = 0,

    propConstant,
    propNotEnumerable,
    shadowed,

    // Shortcuts,
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
    $Number,

    $min,
    $max,
    $floor,
    $abs,
    $ceil,
    $random,
    $sqrt,
    $pow,
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
    pSIndexOf,

    pReplace,

    pHasOwn,

    pExec,
    pTest,

    //iBind,

    $hasProperty,
    $getItem,
    $toNumber,
    $instanceOf,
    $returnThis,
    $unshift,
    $shift,
    $reverse,
    $hasOwn,
    $repeat,
    $isNumber,
    $isBoolean,
    $isString,
    $isError,
    $isDate,
    $isNative,
    $isArguments,
    $isArray,
    $isRegExp,
    $isSymbol,
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
    $trim,
    $substr,
    $parseFloat,
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
    $sSlice,
    $forKeys,
    $indexOf,
    $isCircular,
    $propertyIsEnumerable,
    $toMethod,
    $escapeRegex,
    spIndexOf,
    spLastIndexOf,

    BigNum,

    exports;

  /**
   * The main namespace for methods and properties that are to be exported
   * from this library.
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
   * {@link https://goo.gl/BHd0El}.
   * @typedef {Function} module:util-x~prototypalFunction
   * @param {...*} [varArgs]
   * @return {*}
   */

  /**
   * Stand alone function created from a
   * {@link prototypalFunction prototypalFunction}.
   * @typedef {Function} module:util-x~boundPrototypalFunction
   * @param {...*} [varArgs]
   * @return {*}
   */

  // Shortcuts
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
   * @return {number}
   * @see https://goo.gl/SVeQW2
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
   * @return {Object}
   */
  $Object = base.Object.Ctr;

  /**
   * Shortcut
   * The Number constructor will typecast the argument to a number.
   * Keeps jslint happy
   *
   * @private
   * @function module:util-x~$Number
   * @param {*} inputArg
   * @throws TypeError if inputArg is null or undefined
   * @return {number}
   */
  $Number = base.Number.Ctr;

  /**
   * Shortcut
   * The String constructor creates an object wrapper.
   * Keeps jslint happy
   *
   * @private
   * @function module:util-x~$String
   * @param {*} inputArg
   * @throws TypeError if inputArg is null or undefined
   * @return {*}
   */
  $String = base.String.Ctr;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$min
   * @param {number} number
   * @return {number}
   */
  $min = base.Math.min;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$max
   * @param {number} number
   * @return {number}
   */
  $max = base.Math.max;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$floor
   * @param {number} number
   * @return {number}
   */
  $floor = base.Math.floor;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$abs
   * @param {number} number
   * @return {number}
   */
  $abs = base.Math.abs;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$ceil
   * @param {number} number
   * @return {number}
   */
  $ceil = base.Math.ceil;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$random
   * @return {number}
   */
  $random = base.Math.random;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$sqrt
   * @return {number}
   */
  $sqrt = base.Math.sqrt;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$pow
   * @return {number}
   */
  $pow = base.Math.pow;

  /**
   * Shortcut
   *
   * @private
   * @function module:util-x~$round
   * @return {number}
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
   * @return {*}
   */
  /*
  function $getArgItem(args, index) {
    return args[index];
  }
  */

  /**
   * Set the value of the arguments at index.
   * Primarily to keep jslint happy
   *
   * @private
   * @function module:util-x~$setArgItem
   * @param {arguments} args
   * @param {number} index
   * @param {*} value
   * @return {*}
   */
  /*
  function $setArgItem(args, index, value) {
      args[index] = value;

      return value;
  }
  */

  /**
   * Returns the first argument unchanged.
   * Primary use with ToMethod.
   *
   * @private
   * @function module:util-x~$firstArg
   * @param {*} [arg]
   * @return {*}
   */
  function $firstArg() {
    return arguments[0];
  }

  /**
   * Returns an arguments object of the arguments supplied.
   *
   * @private
   * @name module:util-x~$returnArgs
   * @param {...*} [varArgs]
   * @return {Arguments}
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
   * @return {boolean}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.9.4
   */
  function $strictEqual(a, b) {
    return a === b;
  }

  /**
   * Shortcut
   * Returns true if the operand inputArg is undefined.
   *
   * @private
   * @function module:util-x~$isUndefined
   * @param {*} inputArg
   * @return {boolean}
   */
  function $isUndefined(inputArg) {
    return typeof inputArg === 'undefined';
  }

  /**
   * Returns true if the operand inputArg is undefined.
   *
   * @function module:util-x~exports.Object.isUndefined
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isUndefined = $isUndefined;

  /**
   * Returns true if the operand inputArg is null.
   *
   * @function module:util-x~exports.Object.isNull
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isNull = function (inputArg) {
    return inputArg === null;
  };

  /**
   * Returns true if the operand inputArg is null or undefined.
   *
   * @function module:util-x~exports.Object.isNil
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isNil = function (inputArg) {
    /*jslint eqeq:true */
    /*jshint eqnull:true */
    return inputArg == null;
  };

  /**
   * The abstract operation converts its argument to a value of type string
   *
   * @private
   * @function module:util-x~$toString
   * @param {*} inputArg
   * @return {string}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tostring
   */
  function $toString(inputArg) {
    var type,
      val;

    if (inputArg === null) {
      val = 'null';
    } else {
      type = typeof inputArg;
      if (type === 'string') {
        val = inputArg;
      } else if (type === 'undefined') {
        val = type;
      } else {
        if (type === 'symbol') {
          throw new CTypeError('Cannot convert symbol to string');
        }

        val = $String(inputArg);
      }
    }

    return val;
  }

  /**
   * The abstract operation throws an error if its argument is a value that
   * cannot be converted to an Object, otherwise returns the argument.
   *
   * @private
   * @function module:util-x~$requireObjectCoercible
   * @param {*} inputArg The object to be tested.
   * @throws {TypeError} If inputArg is null or undefined.
   * @return {*} The inputArg if coercible.
   * @see https://goo.gl/53jNbV
   */
  function $requireObjectCoercible(inputArg) {
    /*jslint eqeq:true */
    /*jshint eqnull:true */
    if (inputArg == null) {
      throw new CTypeError('Cannot convert argument to object: ' + inputArg);
    }

    return inputArg;
  }

  /**
   * Returns true if the operand inputArg is a member of one of the types
   * Undefined, Null, Boolean, Number, Symbol, or String.
   *
   * @private
   * @function module:util-x~isPrimitive
   * @param {*} inputArg
   * @return {boolean}
   * @see https://goo.gl/W68ywJ
   * @see https://goo.gl/ev7881
   */
  function $isPrimitive(inputArg) {
    var type;

    /*jslint eqeq:true */
    /*jshint eqnull:true */
    if (inputArg == null) {
      return true;
    }

    type = typeof inputArg;

    return type === 'boolean' ||
            type === 'string' ||
            type === 'number' ||
            type === 'symbol';
  }

  /**
   * Returns true if the operand inputArg is a member of one of the types
   * Undefined, Null, Boolean, Number, Symbol, or String.
   *
   * @function module:util-x~exports.Object.isPrimitive
   * @param {*} inputArg
   * @return {boolean}
   * @see https://goo.gl/W68ywJ
   * @see https://goo.gl/ev7881
   */
  exports.Object.isPrimitive = $isPrimitive;

  /**
   * The abstract operation converts its argument to a value of type Object but
   * fixes some environment bugs.
   *
   * @private
   * @function module:util-x~$toObject
   * @param {*} inputArg The argument to be converted to an object.
   * @throws {TypeError} If inputArg is not coercible to an object.
   * @return {Object} Value of inputArg as type Object.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
   */
  function $toObject(inputArg) {
    var object;

    if ($isPrimitive($requireObjectCoercible(inputArg))) {
      object = $Object(inputArg);
    } else {
      object = inputArg;
    }

    return object;
  }

  /**
   * Shortcut
   * Redefined later
   * Returns true if the operand inputArg is a Date object.
   *
   * @private
   * @function module:util-x~$isDate
   * @param {*} inputArg
   * @return {boolean}
   */
  $isDate = function (inputArg) {
    return !$isPrimitive(inputArg) &&
            inputArg.constructor &&
            inputArg.constructor === CDate;
  };

  /**
   * Shortcut
   * Redefined later
   * Returns true if the operand inputArg is a Function
   * Replaced later on with a more reliable method, but we need to define
   * more functions first.
   *
   * @private
   * @function module:util-x~$isFunction
   * @param {*} [inputArg] The object to be tested.
   * @return {boolean} True if the object matches the duck typing,
   *                   otherwise false.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
   */
  $isFunction = function (inputArg) {
    // Avoid a Chakra JIT bug in compatibility modes of IE 11
    return typeof inputArg === 'function' || false;
  };

  /**
   * Shortcut
   * Abstract operation that coerces its argument to a primitive value.
   *
   * @private
   * @function module:util-x~$toPrimitive
   * @param {*} [inputArg] The object to convert into a primitive.
   * @param {(string|number)} [preferredType] Anything other than a string or a
   *                                          number will be considered number
   *                                          by default.
   * @return {(string|number)}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
   */
  function $toPrimitive(inputArg) {
    var methodNames,
      method,
      index,
      result,
      hint;

    /*
    exoticToPrim = inputarg['@@toPrimitive'];
    if (typeof exoticToPrim !== 'undefined') {
        result = inputarg['@@toPrimitive']();

        if ($isPrimitive(result)) {
            return result;
        }

        throw new CTypeError('exoticToPrim returned an object');
    }
    */

    if ($isPrimitive(inputArg)) {
      result = inputArg;
    } else {
      hint = typeof arguments[1];
      if (hint === 'string' || (hint !== 'number' && $isDate(inputArg))) {
        methodNames = ['toString', 'valueOf'];
      } else {
        methodNames = ['valueOf', 'toString'];
      }

      for (index = 0; index < 2; index += 1) {
        method = methodNames[index];
        if ($isFunction(inputArg[method])) {
          result = inputArg[method]();
          if ($isPrimitive(result)) {
            return result;
          }
        }
      }

      throw new CTypeError('ordinaryToPrimitive returned an object');
    }

    return result;
  }

  /**
   * Abstract operation that coerces its argument to a primitive value.
   *
   * @private
   * @function module:util-x~exports.Object.ToPrimitive
   * @param {*} [inputArg] The object to convert into a primitive.
   * @param {(string|number)} [preferredType] Anything other than a string or a
   *                                          number will be considered number
   *                                          by default.
   * @return {(string|number)}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-toprimitive
   */
  exports.Object.ToPrimitive = $toPrimitive;

  /**
   * The abstract operation converts its argument to a value of type number but
   * fixes some environment bugs.
   *
   * @private
   * @function module:util-x~$toNumber
   * @param {*} inputArg The argument to be converted to an object.
   * @throws {TypeError} If inputArg is a symbol.
   * @throws {TypeError} If inputArg is a was not converted to a primitive.
   * @return {Object} Value of inputArg as type number.
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber
   */
  $toNumber = (function () {
    var tmp,
      fn;

    fn = function (inputArg) {
      var type,
        val;

      if (inputArg === null) {
        val = +0;
      } else {
        type = typeof inputArg;
        if (type === 'undefined') {
          val = NaN;
        } else if (type === 'boolean') {
          if (inputArg) {
            val = 1;
          } else {
            val = +0;
          }
        } else if (type === 'number') {
          val = inputArg;
        } else if (type === 'string') {
          val = $Number(inputArg);
        } else {
          if (type === 'symbol') {
            throw new TypeError('Can not convert symbol to a number');
          }

          val = fn($toPrimitive(inputArg, hintNumber));
        }
      }

      return val;
    };

    if (!testShims) {
      // Opera 9 fails this
      try {
        tmp = {};
        tmp = +tmp;
        tmp = {
          valueOf: ''
        };
        tmp = +tmp;
        tmp = {
          valueOf: '1'
        };
        tmp = +tmp;
        tmp = {
          valueOf: 1
        };
        tmp = +tmp;
        tmp = {
          valueOf: 1.1
        };
        tmp = +tmp;

        fn = function (inputArg) {
          return +inputArg;
        };
      } catch (ignore) {}
    }

    return fn;
  }());

  /**
   * The abstract operation converts its argument to a value of type number but
   * fixes some environment bugs.
   *
   * @function module:util-x~exports.Object.ToNumber
   * @param {*} inputArg The argument to be converted to an object.
   * @throws {TypeError} If inputArg is a symbol.
   * @throws {TypeError} If inputArg is a was not converted to a primitive.
   * @return {Object} Value of inputArg as type number.
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tonumber
   */
  exports.Object.ToNumber = $toNumber;

  /**
   * Shortcut
   * Replaced later
   * Returns true if the argument coerces to NaN, and otherwise returns false.
   *
   * @private
   * @function module:util-x~$isNaN
   * @param {*} inputArg
   * @return {boolean}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.4
   */
  $isNaN = function (inputArg) {
    var num = $toNumber(inputArg);

    return num !== num;
  };

  /**
   * Shortcut
   * Replaced later
   * Returns false if the argument coerces to NaN, +INFINITY, or
   * NEGATIVE_INFINITY, and otherwise returns true.
   *
   * @private
   * @function module:util-x~$isFinite
   * @param {*} inputArg
   * @return {boolean}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.1.2.5
   */
  $isFinite = function (inputArg) {
    var num = $toNumber(inputArg);

    return num === num &&
            num !== INFINITY &&
            num !== NEGATIVE_INFINITY;
  };

  /**
   * The function evaluates the passed value and converts it to an integer.
   *
   * @private
   * @function module:util-x~$toInteger
   * @param {*} inputArg The object to be converted to an integer.
   * @return {number} If the target value is NaN, null or undefined, 0 is
   *                  returned. If the target value is false, 0 is returned
   *                  and if true, 1 is returned.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
   */
  function $toInteger(inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number === number) {
      if (!number || number === INFINITY || number === NEGATIVE_INFINITY) {
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
   * @return {boolean}
   * @see https://goo.gl/AIekCc
   * @see https://goo.gl/zbc2nB
   */
  $isInteger = function (inputArg) {
    return typeof inputArg === 'number' &&
            inputArg !== INFINITY &&
            inputArg !== NEGATIVE_INFINITY &&
            $toInteger(inputArg) === inputArg;
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
   * @return {boolean}
   * @see https://goo.gl/CyRElr
   */
  $isSafeInteger = function (inputArg) {
    return typeof inputArg === 'number' &&
            inputArg !== INFINITY &&
            inputArg !== NEGATIVE_INFINITY &&
            $toInteger(inputArg) === inputArg &&
            inputArg >= MIN_SAFE_INTEGER &&
            inputArg <= MAX_SAFE_INTEGER;
  };

  /**
   * The abstract operation ToLength converts its argument to an integer
   * suitable for use as the length of an array-like object.
   *
   * @private
   * @function module:util-x~$toLength
   * @param {*} inputArg The object to be converted to a length.
   * @return {number} If len <= +0 then +0 else if len is +INFINITY then 2^53-1
   *                  else min(len, 2^53-1).
   * @see https://goo.gl/Mirlq3
   */
  function $toLength(inputArg) {
    return $min($max($toInteger(inputArg), 0), MAX_SAFE_INTEGER);
  }

  /**
   * Checks if `value` is a valid array-like length.
   *
   * **Note:** This function is based on ES `ToLength`. See the
   * [ES spec](https://goo.gl/Mirlq3) for more details.
   *
   * @private
   * @function module:util-x~$isLength
   * @param {*} inputArg The value to check.
   * @return {boolean} Returns `true` if `value` is a valid length,
   *                   else `false`.
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
   * @param {number} [length] The upper bounds of a valid index otherwise
   *                          MAX_SAFE_INTEGER - 1.
   * @return {boolean} Returns true if inputArg is a valid index, otherwise
   *                   false.
   */
  function $isIndex(inputArg, length) {
    if ($toLength(arguments.length) > 1) {
      length = $toLength(length);
    } else {
      length = MAX_SAFE_INTEGER - 1;
    }

    inputArg = $toNumber(inputArg);

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
   * Delete an item from an Array or Arguments object with delete bug. Internal
   * use only. Safari 5. IE has another delete bug w.r.t. globally defined
   * variables but I'm not going to mask that problem.
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
          return delete object[property];
        } catch (ehasDeleteBug) {
          return ehasDeleteBug;
        }
      };
    } else {
      fn = function (object, property) {
        return delete object[property];
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
   * Indicates if the this argument used with call does not convert to an
   * object when not strict mode. True if it does, otherwise false.
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
   * Indicates if the this argument used with apply does not convert to an
   * object when not strict mode. True if it does not, otherwise false.
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
   * Indicates if the arrayLike argument used must be an specified and
   * arrayLike. True if it does not, otherwise false.
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
      rtn = returnArg0.apply('foo', {
        0: 1,
        length: 1
      }) === 1;
    } catch (eHasApplyArrayBug) {
      rtn = false;
    }

    return rtn;
  }());

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

    /*jstwit in: true */
    return boxedString[0] !== 'a' || !(0 in boxedString);
  }());

  /**
   * Shortcut
   * Redefined later
   * Returns true if the operand inputArg is a string.
   *
   * @private
   * @function module:util-x~$isString
   * @param {*} inputArg
   * @return {boolean}
   */
  $isString = function (inputArg) {
    return typeof inputArg === 'string' ||
            (!$isPrimitive(inputArg) &&
              typeof inputArg.length === 'number' &&
              'charAt' in inputArg);
  };

  /**
   * Shortcut
   * Redefined later
   * Returns true if the operand inputArg is an
   * {@link Arguments arguments} object.
   *
   * @private
   * @function module:util-x~$isArguments
   * @param {*} inputArg
   * @return {boolean}
   */
  $isArguments = function (inputArg) {
    return !$isPrimitive(inputArg) &&
            typeof inputArg.length === 'number' &&
            'callee' in inputArg &&
            !('arguments' in inputArg);
  };

  /**
   * @private
   * @function module:util-x~$hasProperty
   * @param {*} inputArg The object to be tested.
   * @param {string} property The property name.
   * @return {boolean} True if the property is on the object or in the object's
   *                   prototype, otherwise false.
   */
  $hasProperty = (function () {
    var fn,
      obj,
      val;

    if (hasBoxedStringBug) {
      fn = function (inputArg, property) {
        var prop = $toString(property);

        /*jstwit in: true */
        return ($isString(inputArg) &&
                $isIndex(prop, inputArg.length)) ||
                prop in $toObject(inputArg);
      };
    } else {
      val = 0;
      obj = $toObject('abc');
      try {
        if (val in obj && 'charAt' in obj) {
          fn = function (inputArg, property) {
            /*jstwit in: true */
            return property in $toObject(inputArg);
          };
        } else {
          throw 'requires toString';
        }
      } catch (eHasProperty) {
        fn = function (inputArg, property) {
          /*jstwit in: true */
          return $toString(property) in $toObject(inputArg);
        };
      }
    }

    return fn;
  }());

  /**
   * Forchecking an objects item by index. Can pacth or objects that don't work
   * with boxed index access. Primary use in Array shims.
   *
   * @private
   * @function module:util-x~$hasItem
   * @param {Object} object
   * @param {number} index
   * @param {boolean} isString
   * @return {boolean}
   */
  function $hasItem(object, index, isString) {
    return isString || $hasProperty(object, index);
  }

  /**
   * @private
   * @function module:util-x~$getName
   * @param {Object} object
   * @param {string} name
   * @return {string}
   */
  function $getName(object, name) {
    while (typeof object[name] !== 'undefined') {
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
   * @return {Object}
   */
  function $toObjectThisArg(thisArg, strictMode) {
    if (!strictMode) {
      /*jslint eqeq:true */
      /*jshint eqnull:true */
      if (thisArg == null) {
        thisArg = global;
      } else {
        thisArg = $Object(thisArg);
      }
    }

    return thisArg;
  }

  /**
   * @private
   * @function module:util-x~ $throwArgsWrongType
   * @param {*} inputArg
   * @return {*}
   */
  function $throwArgsWrongType(inputArg) {
    /*jslint eqeq:true */
    /*jshint eqnull:true */
    if (inputArg != null) {
      if ($isPrimitive(inputArg) ||
          (typeof inputArg.length === 'number' && 'charAt' in inputArg)) {

        throw new CTypeError('Arguments list has wrong type');
      }
    }

    return inputArg;
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
   * @return {*}
   */
  function $evalCallApply(thisArg, name, func, args, start) {
    var length = $toLength(args.length),
      last = length - 1,
      argsStrings = '',
      index,
      rtn,
      str;

    for (index = start; index < length; index += 1) {
      argsStrings += 'args[' + index + ']';
      if (index < last) {
        argsStrings += ',';
      }
    }

    thisArg = $toObjectThisArg(thisArg, false);
    name = $getName(thisArg, name);
    thisArg[name] = func;
    str = 'return function () { return fn[name](' + argsStrings + '); }();';
    /*jslint evil: true */
    rtn = new CFunction('fn', 'name', 'args', str)(thisArg, name, args);
    //rtn = eval('(thisArg[name](' + argsStrings + '))');
    /*jslint evil: false */
    $deleteProperty(thisArg, name);

    return rtn;
  }

  /**
   * This method calls a function with a given this value and arguments
   * provided as an array (or an array-like object).
   *
   * @private
   * @function module:util-x~$pApply
   * @this {Function}
   * @param {*} thisArg
   * @param {module:util-x~ArrayLike} [arrayLike]
   * @return {*}
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
   * This method calls a function with a given this value and arguments
   * provided individually.
   *
   * @private
   * @function module:util-x~$pCall
   * @this {Function}
   * @param {*} thisArg
   * @param {*} [varArgs]
   * @return {*}
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
   * @return {*}
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
   * @return {*}
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
   * For getting an objects item by index. Can pacth or objects that don't work with boxed index access.
   * Primary use in Array shims.
   *
   * @private
   * @function module:util-x~$getItem
   * @param {Object} object
   * @param {number} index
   * @param {boolean} isString
   * @return {*}
   */
  $getItem = (function (pCharAt) {
    return function (object, index, isString) {
      var item;

      if (hasBoxedStringBug && isString) {
        item = $call(pCharAt, object, index);
      } else {
        item = object[index];
        if (isString && typeof item === 'undefined') {
          item = '';
        }
      }

      return item;
    };
  }(base.String.charAt));

  /**
   * Provides a string representation of the supplied object in the form "[object type]",
   * where type is the object type.
   *
   * @private
   * @function module:util-x~$toStringTag
   * @param {*} inputArg The object for which a class string represntation is required.
   * @return {string} A string value of the form "[object type]".
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.2.4.2
   */
  $toStringTag = (function (pToString) {
    return function (inputArg) {
      var val;

      if (inputArg === null) {
        val = stringTagNull;
      } else if (typeof inputArg === 'undefined') {
        val = stringTagUndefined;
      } else {
        val = $call(pToString, inputArg);
      }

      return val;
    };
  }(base.Object.toString));

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
   * @return {Array} A new array containg the selection.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   */
  $pSlice = function (start, end) {
    var object = $toObject(this),
      length = $toLength(object.length),
      isString = length && $isString(object),
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

    if (typeof end === 'undefined') {
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
      if ($hasItem(object, k, isString)) {
        val[next] = $getItem(object, k, isString);
      }

      next += 1;
      k += 1;
    }

    return val;
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
   * @return {Array}
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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   */
  $slice = $argSlice;

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
   * @return {Function} The supplied function.
   */
  $throwIfNotFunction = function (inputArg) {
    if (!$isFunction(inputArg)) {
      $throwNotFunction(inputArg);
    }

    return inputArg;
  };

  if (typeof window === 'function' || typeof window === 'object') {
    supportsXFrameClass = isStrictMode;
  }

  /**
   * @private
   * @function module:util-x~$checkCrossFrame
   * @param {Object} inputArg
   * @param {string} strCtr
   * @return {boolean}
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
   * @return {(Object|Function)}
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
   * @private
   * @function module:util-x~$isBoolean
   * @param {*} inputArg
   * @return {boolean}
   */
  $isBoolean = (function (pOToString, strBool) {
    var hasBug;

    if ($call(pOToString, protoBoolean) !== stringTagBoolean) {
      hasBug = true;
    }

    return function (inputArg) {
      return typeof inputArg === 'boolean' ||
        (!$isPrimitive(inputArg) && ((hasBug && inputArg === protoBoolean) || $call(pOToString, inputArg) === stringTagBoolean || $checkXFrame(inputArg, strBool)));
    };
  }(base.Object.toString, $toString(CBoolean)));

  /**
   * Returns true if the operand inputArg is a boolean.
   *
   * @function module:util-x~exports.Boolean.isBoolean
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Boolean.isBoolean = $isBoolean;

  /**
   * Returns true if the operand inputArg is a Number.
   *
   * @private
   * @function module:util-x~$isNumber
   * @param {*} inputArg
   * @return {boolean}
   */
  $isNumber = (function (pOToString, strNum) {
    var hasBug;

    if ($call(pOToString, protoNumber) !== stringTagNumber) {
      hasBug = true;
    }

    return function (inputArg) {
      return typeof inputArg === 'number' ||
        (!$isPrimitive(inputArg) && ((hasBug && inputArg === protoNumber) || $call(pOToString, inputArg) === stringTagNumber || $checkXFrame(inputArg, strNum)));
    };
  }(base.Object.toString, $toString(CNumber)));

  /**
   * Returns true if the operand inputArg is a Number.
   *
   * @function module:util-x~exports.Number.isNumber
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isNumber = $isNumber;

  // redefinition
  $isString = (function (pOToString, strStr) {
    var hasBug;

    if ($call(pOToString, protoString) !== stringTagString) {
      hasBug = true;
    }

    return function (inputArg) {
      if (typeof inputArg === 'string') {
        return true;
      }

      if (!$isPrimitive(inputArg)) {
        if (hasBug && inputArg === protoString) {
          return true;
        }

        if ($call(pHasOwn, inputArg, 'length')) {
          if ($call(pOToString, inputArg) === stringTagString || $checkXFrame(inputArg, strStr)) {
            return true;
          }
        }
      }

      return false;
    };
  }(base.Object.toString, $toString(CString)));

  /**
   * Returns true if the operand inputArg is a string.
   *
   * @function module:util-x~exports.String.isString
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.String.isString = $isString;

  /**
   * Returns true if the operand inputArg is a symbol.
   *
   * @private
   * @function module:util-x~$isSymbol
   * @param {*} inputArg
   * @return {boolean}
   */
  $isSymbol = function (inputArg) {
    return typeof inputArg === 'symbol';
  };

  /**
   * Returns true if the operand inputArg is a symbol.
   *
   * @function module:util-x~exports.Object.isSymbol
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isSymbol = $isSymbol;

  /**
   * Shortcut
   * Replaced later
   * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
   * whose class internal property is "Array"; otherwise it returns false.
   *
   * @private
   * @function module:util-x~$isArray
   * @param {*} inputArg
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray
   */
  $isArray = (function (pOToString, strArr) {
    var hasBug;

    if ($call(pOToString, protoArray) !== stringTagArray) {
      hasBug = true;
    }

    return function (inputArg) {
      if (!$isPrimitive(inputArg)) {
        if (hasBug && inputArg === protoArray) {
          return true;
        }

        if ($call(pHasOwn, inputArg, 'length') && !$call(pHasOwn, inputArg, 'callee')) {
          if ($call(pOToString, inputArg) === stringTagArray || $checkXFrame(inputArg, strArr)) {
            return true;
          }
        }
      }

      return false;
    };
  }(base.Object.toString, $toString(CArray)));

  // redefinition
  $isArguments = (function (pOToString) {
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

  /**
   * Returns true if the operand inputArg is an {@link Arguments arguments} object.
   *
   * @function module:util-x~exports.Object.isArguments
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isArguments = $isArguments;

  /**
   * Shortcut
   * Returns true if the operand inputArg is a RegExp.
   *
   * @private
   * @function module:util-x~$isRegExp
   * @param {*} inputArg
   * @return {boolean}
   */
  $isRegExp = (function (pOToString, strRx) {
    var strTag = $call(pOToString, new CRegExp('x')),
      isRegExp = strTag === stringTagRegExp,
      stringTagSafariPrototype,
      hasBug1,
      hasBug2,
      fn;

    if (isRegExp) {
      stringTagSafariPrototype = '[object RegExpPrototype]';
      strTag = $call(pOToString, protoRegExp);
      if (strTag === stringTagSafariPrototype) {
        hasBug1 = true;
      } else if (strTag !== stringTagRegExp) {
        hasBug2 = true;
      }

      fn = function (inputArg) {
        var stringTag;

        if (!$isPrimitive(inputArg)) {
          stringTag = $call(pOToString, inputArg);
          if ($call(pHasOwn, inputArg, 'ignoreCase')) {
            if (stringTag === stringTagRegExp) {
              return true;
            }

            if (hasBug2 && inputArg === protoRegExp) {
              return true;
            }

            if ($checkXFrame(inputArg, strRx)) {
              return true;
            }
          }

          if (hasBug1 && stringTag === stringTagSafariPrototype) {
            return true;
          }
        }

        return false;
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
   * @return {boolean}
   */
  exports.RegExp.isRegExp = $isRegExp;

  /**
   * Returns true if the operand inputArg is an error.
   *
   * @private
   * @function module:util-x~$isError
   * @param {*} inputArg
   * @return {boolean}
   */
  $isError = (function (pOToString, strErr) {
    var hasBug;

    if ($call(pOToString, protoError) !== stringTagError) {
      hasBug = true;
    }

    return function (inputArg) {
      if (!$isPrimitive(inputArg)) {
        if (hasBug && inputArg === protoError) {
          return true;
        }

        if ($call(pHasOwn, inputArg, 'message')) {
          if ($call(pOToString, inputArg) === stringTagError || $checkXFrame(inputArg, strErr)) {
            return true;
          }
        }
      }

      return false;
    };

  }(base.Object.toString, $toString(CError)));

  /**
   * Returns true if the operand inputArg is an error.
   *
   * @function module:util-x~exports.Error.isError
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Error.isError = $isError;

  // redefinition
  $isDate = (function (pOToString, strDate) {
    var hasBug;

    if ($call(pOToString, protoDate) !== stringTagArray) {
      hasBug = true;
    }

    return function (inputArg) {
      return !$isPrimitive(inputArg) && ((hasBug && inputArg === protoDate) || $call(pOToString, inputArg) === stringTagDate || $checkXFrame(inputArg, strDate));
    };
  }(base.Object.toString, $toString(CDate)));

  /**
   * Returns true if the operand inputArg is a Date object.
   *
   * @function module:util-x~exports.Date.isDate
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Date.isDate = $isDate;

  /**
   * Returns true if argument has own property of length
   * which is a safe integer and is greather or equal to 0.
   *
   * @private
   * @function module:util-x~$hasOwnValidLength
   * @param {*} inputArg
   * @return {boolean}
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
   * @return {boolean} True if the constructor is in the object chain, otherwise false.
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
   * @param {string} [separator] A single comma with or without leading and
   *                             trailing space characters.
   * @return {string}
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
   * @return {boolean}
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
      this.actual = opts.actual;
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
   * @return {number} Arguments length
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
   * @return {Object}
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
   * @return {undefined}
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

    /*jslint eqeq:true */
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
   * @param {string} [message }
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
   * @param {string} [message }
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

    if (typeof actual !== 'undefined') {
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
   * @param {string} [message] Any value will be coerced to a string for logging.
   * @return {*}
   */
  function $decide(affirms, pass, fail, message) {
    $throwIfNotEnoughArgs(arguments, 3);

    var result,
      passed,
      returned;

    if ($isFunction(affirms)) {
      try {
        returned = affirms();
        passed = true;
      } catch (eAffirms) {
        message = $toString(message);
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
      } else {
        result = fail;
      }
    }

    return result;
  }

  /**
   * When the concat method is called with zero or more arguments item1, item2,
   * etc., it returns an array containing the array elements of the object
   * followed by the array elements of each argument in order.
   *
   * @private
   * @function module:util-x~$pConcat
   * @this {Array} array
   * @param {...*} [varArgs]
   * @return {Array}
   * @see https://goo.gl/aY7KDO
   */
  $pConcat = function () {
    var object = $toObject(this),
      length = $toLength(arguments.length),
      next = 0,
      val = [],
      element,
      index,
      len,
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

  // redefinition
  $toStringTag = (function (pOToString) {
    return $decide(
      // test
      function () {
        var result;

        $affirm.ok(!testShims, 'testing shim');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString);
        }, 'call no arg');

        $affirm.strictEqual(result, stringTagUndefined, 'no arg');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, Undefined);
        }, 'call undefined');

        $affirm.strictEqual(result, stringTagUndefined, 'undefined');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, null);
        }, 'call null');

        $affirm.strictEqual(result, stringTagNull, 'null');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, arguments);
        }, 'call arguments');

        $affirm.strictEqual(result, stringTagArguments, 'arguments');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, 'abc');
        }, 'call string');

        $affirm.strictEqual(result, stringTagString, 'string');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, $Object('abc'));
        }, 'call string object');

        $affirm.strictEqual(result, stringTagString, 'string object');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, []);
        }, 'call array');

        $affirm.strictEqual(result, stringTagArray, 'array');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, function () { return; });
        }, 'test3');

        $affirm.strictEqual(result, stringTagFunction, 'function');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, 1);
        }, 'call number');

        $affirm.strictEqual(result, stringTagNumber, 'number');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, $Object(1));
        }, 'call number object');

        $affirm.strictEqual(result, stringTagNumber, 'number object');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, true);
        }, 'call boolean');

        $affirm.strictEqual(result, stringTagBoolean, 'boolean');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, $Object(true));
        }, 'call boolean object');

        $affirm.strictEqual(result, stringTagBoolean, 'boolean object');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, new CRegExp(''));
        }, 'call regexp');

        $affirm.strictEqual(result, stringTagRegExp, 'regexp');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, new CDate());
        }, 'call date');

        $affirm.strictEqual(result, stringTagDate, 'date');

        $affirm.doesNotThrow(function () {
          result = $call(pOToString, new CError(''));
        }, 'call error');

        $affirm.strictEqual(result, stringTagError, 'error');
      },

      // pass
      function () {
        return function (inputArg) {
          return $call(pOToString, inputArg);
        };
      },

      // fail
      function () {
        return function (inputArg) {
          var val;

          if ($isPrimitive(inputArg)) {
            if (inputArg === null) {
              val = stringTagNull;
            } else if (typeof inputArg === 'undefined') {
              val = stringTagUndefined;
            }
          } else if ($call(pHasOwn, inputArg, 'length')) {
            if ($isArguments(inputArg)) {
              val = stringTagArguments;
            } else if ($isArray(inputArg)) {
              val = stringTagArray;
            } else if ($isString(inputArg)) {
              val = stringTagString;
            } else if ($isFunction(inputArg)) {
              val = stringTagFunction;
            }
          } else {
            if ($isNumber(inputArg)) {
              val = stringTagNumber;
            } else if ($isBoolean(inputArg)) {
              val = stringTagBoolean;
            } else if ($isRegExp(inputArg)) {
              val = stringTagRegExp;
            } else if ($isDate(inputArg)) {
              val = stringTagDate;
            } else if ($isError(inputArg)) {
              val = stringTagError;
            }
          }

          if (!val) {
            val = $call(pOToString, inputArg);
          }

          return val;
        };
      },

      // message
      'toStringTag patch'
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
  hasDontEnumBug = !$call(base.Object.propertyIsEnumerable, {
    'toString': null
  }, 'toString');

  /**
   * Indicates if the environment's function objects suffer the "prototype is enumerable bug".
   * True if it does, otherwise false.
   *
   * @private
   * @name module:util-x~hasProtoEnumBug
   * @type {boolean}
   * @see http://whattheheadsaid.com/2010/10/a-safer-object-keys-compatibility-implementation
   */
  hasProtoEnumBug = $call(base.Object.propertyIsEnumerable, function () {
    return;
  }, 'prototype');

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
    var errObjs = [{
        name: 'Error',
        proto: protoError,
        unwanted: {}
      }, {
        name: 'TypeError',
        proto: protoTypeError,
        unwanted: {}
      }, {
        name: 'SyntaxError',
        proto: protoSyntaxError,
        unwanted: {}
      }, {
        name: 'RangeError',
        proto: protoRangeError,
        unwanted: {}
      }, {
        name: 'EvalError',
        proto: protoEvalError,
        unwanted: {}
      }, {
        name: 'ReferenceError',
        proto: protoReferenceError,
        unwanted: {}
      }, {
        name: 'URIError',
        proto: protoURIError,
        unwanted: {}
      }],
      length = $toLength(errObjs.length),
      hasDefProp = !!base.Object.defineProperty,
      found = false,
      index,
      name,
      prop,
      proto;

    unwantedError.length = 0;
    for (index = 0; index < length; index += 1) {
      name = errObjs[index].name;
      proto = errObjs[index].proto;
      /*jslint forin: true */
      for (prop in proto) {
        if ($call(pHasOwn, proto, prop)) {
          try {
            if (hasDefProp) {
              base.Object.defineProperty(proto, prop, propNotEnumerable);
              if ($call(base.Object.propertyIsEnumerable, proto, prop)) {
                throw new CError('Still enumerable');
              }

              $conlog('Unwanted error prop "' + prop + '": patched');
            } else {
              throw new CError('Still enumerable');
            }
          } catch (eUnwantedError) {
            found = true;
            errObjs[index].unwanted[prop] = proto[prop];
            $conlog('Unwanted "' + name + '" prop "' + prop + '": patch failed');
          }
        }
      }
    }

    if (found) {
      unwantedError = errObjs;
    }

    return found;
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
  hasGetSet = $isFunction(base.Object.lookupGetter) &&
              $isFunction(base.Object.lookupSetter);

  /**
   * The function takes an argument protoFn, and returns a bound function as a
   * stand alone method.
   *
   * @private
   * @function module:util-x~$toMethod
   * @param {prototypalFunction} protoFn A prototypal function to be converted
   *                                     to be bound as a stand alone method.
   * @throws {TypeError} If protoFn is not a function.
   * @param {Function} [checkThisArgFn] A function to perform any checks on
   *                                    thisArg. Default checkThisArgFn is to
   *                                    $requireObjectCoercible if none
   *                                    supplied or is not a function.
   * @return {module:util-x~boundPrototypalFunction} Stand alone method.
   */
  $toMethod = (function () {
    var funcs = {
      1: function (protoFn, checkThisArgFn) {
        return function (thisArg) {
          var args = $argSlice(arguments, 1);

          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      2: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      3: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      4: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      5: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      6: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4, $5) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      7: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4, $5, $6) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      8: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4, $5, $6, $7) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      9: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4, $5, $6, $7, $8) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      10: function (protoFn, checkThisArgFn) {
        return function (thisArg, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
          var args = $argSlice(arguments, 1);

          /*jslint unparam: true */
          /*jshint unused: false */
          return $apply(protoFn, checkThisArgFn(thisArg), args);
        };
      },

      minArgs: 1,

      maxArgs: 10
    };

    return function (protoFn, checkThisArgFn) {
      $throwIfNotFunction(protoFn);
      if (!$isFunction(checkThisArgFn)) {
        checkThisArgFn = $requireObjectCoercible;
      }

      var length = $toLength(protoFn.length) + 1;

      length = $min($max(length, funcs.minArgs), funcs.maxArgs);

      return funcs[length](protoFn, checkThisArgFn);
    };
  }());

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
   * @default INFINITY
   */
  exports.Number.POSITIVE_INFINITY = INFINITY;

  /**
   * @name module:util-x~exports.Number.NEGATIVE_INFINITY
   * @type {number}
   * @const
   * @default NEGATIVE_INFINITY
   */
  exports.Number.NEGATIVE_INFINITY = NEGATIVE_INFINITY;

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
   * @return {undefined}
   */
  function noop() {
    return;
  }

  /**
   * Returns the primitive value of undefined.
   *
   * @function module:util-x~exports.Function.noop
   * @return {undefined}
   */
  exports.Function.noop = noop;

  /**
   * Returns an arguments object of the arguments supplied.
   *
   * @function module:util-x~exports.Function.returnArgs
   * @argument {...*} [varArgs]
   * @return {Arguments}
   */
  exports.Function.returnArgs = $returnArgs;

  /**
   * Returns a number clamped to the range set by min and max.
   *
   * @function module:util-x~exports.Number.clamp
   * @param {*} number
   * @param {*} min
   * @param {*} max
   * @return {number}
   */
  exports.Number.clamp = function (number, min, max) {
    return $min($max(number, min), max);
  };

  /**
   * Returns true if the operand inputArg is a number which is positive.
   *
   * @function module:util-x~exports.Number.isPositive
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isPositive = function (inputArg) {
    var rtn;

    if (typeof inputArg !== 'number') {
      rtn = false;
    } else if (inputArg === 0) {
      rtn = 1 / inputArg === INFINITY;
    } else {
      rtn = inputArg > 0;
    }

    return rtn;
  };

  /**
   * Returns true if the operand inputArg is a number which is negative.
   *
   * @function module:util-x~exports.Number.isNegative
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isNegative = function (inputArg) {
    var rtn;

    if (typeof inputArg !== 'number') {
      rtn = false;
    } else if (inputArg === 0) {
      rtn = 1 / inputArg !== INFINITY;
    } else {
      rtn = inputArg < 0;
    }

    return rtn;
  };

  /**
   * The abstract operation converts its argument to a value of type Object but
   * fixes some environment bugs. Should be a pointless check, as it should
   * never pass and always fail o the shim.
   *
   * @private
   * @function module:util-x~$toObject
   * @param {*} inputArg The argument to be converted to an object.
   * @throws {TypeError} If inputArg is not coercible to an object.
   * @return {Object} Value of inputArg as type Object.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
   */
  $toObject = $decide(
    // test
    function () {
      var result;

      $affirm.ok(!testShims, 'testing shim');

      $affirm.throws(function () {
        $Object();
      }, CTypeError, 'no arguments');

      $affirm.throws(function () {
        $Object(Undefined);
      }, CTypeError, 'undefined');

      $affirm.throws(function () {
        $Object(null);
      }, CTypeError, 'null');

      $affirm.doesNotThrow(function () {
        result = $Object(false);
      }, 'boolean');

      $affirm.strictEqual(typeof result, 'object', 'boolean object');

      $affirm.doesNotThrow(function () {
        result = $Object(0);
      }, 'number');

      $affirm.strictEqual(typeof result, 'object', 'number object');

      $affirm.doesNotThrow(function () {
        result = $Object('');
      }, 'string');

      $affirm.strictEqual(typeof result, 'object', 'string');
    },

    // pass
    function () {
      return $Object;
    },

    // fail
    function () {
      return $toObject;
    },

    // message
    'ToObject patch'
  );

  /**
   * Shortcut
   * The abstract operation converts its argument to a value of type string
   *
   * @private
   * @function module:util-x~$toString
   * @param {*} inputArg
   * @return {string}
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

    // message
    'ToString patch'
  );

  /**
   * The abstract operation converts its argument to a value of type string
   *
   * @function module:util-x~exports.String.ToString
   * @param {*} inputArg
   * @return {string}
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
   * @return {boolean}
   * @see http://stackoverflow.com/a/15043984/592253
   */
  $isNumeric = (function () {
    var plusMinus = new CRegExp('^[+\\-]?');

    return function (inputArg) {
      var val,
        string,
        number;

      if ($isNumber(inputArg) || $isString(inputArg)) {
        string = $call(pReplace, inputArg, plusMinus, '');
        number = $parseFloat(string);
        val = number === number && $isFinite(string);
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
   * @return {boolean}
   * @see http://stackoverflow.com/a/15043984/592253
   */
  exports.Object.isNumeric = $isNumeric;

  /**
   * Returns true if the operand value is greater than or equal to min and is
   * less than or equal to max.
   *
   * @function module:util-x~exports.Number.inRange
   * @param {module:util-x~NumberLike} value
   * @param {module:util-x~NumberLike} min
   * @param {module:util-x~NumberLike} max
   * @return {boolean}
   */
  exports.Number.inRange = function (value, min, max) {
    min = $toPrimitive(min, hintNumber);
    if (!$isNumber(min) && !$isNumeric(min)) {
      min = NaN;
    }

    max = $toPrimitive(max, hintNumber);
    if (!$isNumber(max) && !$isNumeric(max)) {
      max = NaN;
    }

    return $toNumber(value) >= $toNumber(min) && value <= $toNumber(max);
  };

  /**
   * Shortcut
   * Returns true if the operand value is greater than or equal to min and is
   * less than or equal to max.
   *
   * @private
   * @function module:util-x~$inRange
   * @param {module:util-x~NumberLike} value
   * @param {module:util-x~NumberLike} min
   * @param {module:util-x~NumberLike} max
   * @return {boolean}
   */
  $inRange = exports.Number.inRange;

  /**
   * Returns true if the operand value is less than or equal to min or is
   * greater than or equal to max.
   *
   * @function module:util-x~exports.Number.outRange
   * @param {module:util-x~NumberLike} value
   * @param {module:util-x~NumberLike} min
   * @param {module:util-x~NumberLike} max
   * @return {boolean}
   */
  exports.Number.outRange = function (value, min, max) {
    value = $toPrimitive(value, hintNumber);
    if ((!$isNumber(value) || value !== value) &&
        !$isNumeric(value)) {

      return true;
    }

    min = $toPrimitive(min, hintNumber);
    if ((!$isNumber(min) || min !== min) && !$isNumeric(min)) {
      return true;
    }

    max = $toPrimitive(max, hintNumber);
    if ((!$isNumber(max) || max !== max) && !$isNumeric(max)) {
      return true;
    }

    value = $toNumber(value);

    return value <= $toNumber(min) || value >= $toNumber(max);
  };

  /*
   *
   * EXPORTABLES THAT DO RELY ON ANY OF OUR FUNCTIONS
   *
   */

  /**
   * The abstract operation throws an error if its argument is a value that
   * cannot be  converted to an Object, otherwise returns the argument.
   *
   * @function module:util-x~exports.Object.RequireObjectCoercible
   * @param {*} inputArg
   * @throws {TypeError} If inputArg is null or undefined.
   * @return {*}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-requireobjectcoercible
   */
  exports.Object.RequireObjectCoercible = $requireObjectCoercible;

  /**
   * Returns a string only if the arguments is coercible otherwise throws an
   * error.
   *
   * @private
   * @function module:util-x~$onlyCoercibleToString
   * @param {*} inputArg
   * @throws {TypeError} If inputArg is null or undefined.
   * @return {string}
   */
  function $onlyCoercibleToString(inputArg) {
    return $toString($requireObjectCoercible(inputArg));
  }

  /**
   * The abstract operation converts its argument to a value of type Object.
   *
   * @function module:util-x~exports.Object.ToObject
   * @param {*} inputArg
   * @return {Object}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.9
   */
  exports.Object.ToObject = $toObject;

  /**
   * Returns true if the specified property is in the specified object.
   *
   * @function module:util-x~exports.Object.hasProperty
   * @param {Object} object The object that has was called upon.
   * @param {StringLike} property A string or numeric expression representing a
   *                              property name or array index.
   * @return {boolean}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.8.7
   */
  exports.Object.hasProperty = $hasProperty;

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
     * @return {boolean}
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
     * @return {boolean}
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
     * @return {boolean}
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
     * @return {boolean}
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
     * @return {boolean}
     * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.11
     */
    exports.Function.isFunction = function (inputArg) {
      return !$isPrimitive(inputArg) && (isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true));
    };

    // redefinition
    $isFunction = exports.Function.isFunction;

    /**
     * Returns true if the operand inputArg is a native Function.
     *
     * @function module:util-x~exports.Function.isNativeFunction
     * @param {*} inputArg
     * @return {boolean}
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
  }(base.Object.toString));

  /**
   * Shortcut
   * Returns true if the operand inputArg is a native Function.
   *
   * @private
   * @function module:util-x~$isNative
   * @param {*} inputArg
   * @return {boolean}
   */
  $isNative = exports.Function.isNativeFunction;

  /**
   * @private
   * @function module:util-x~$affirmBasic
   * @param {Function} Fn Native prototype method
   * @return {Function}
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
   * @return {*}
   */
  exports.Function.proto.call = (function () {
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

          // message
          'Function.call patch'
        );
      },

      // fail
      function () {
        return $pCall;
      },

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
   * @return {*}
   */
  exports.Function.call = $call;

  /**
   * This method calls a function with a given this value and arguments provided as an
   * array (or an array-like object).
   *
   * @function module:util-x~exports.Function.proto.apply
   * @this {Function}
   * @param {*} thisArg
   * @param {module:util-x~ArrayLike} [arrayLike]
   * @return {*}
   */
  exports.Function.proto.apply = (function () {
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

          // message
          'Function.apply patch'
        );
      },

      // fail
      function () {
        return $pApply;
      },

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
   * @return {*}
   */
  exports.Function.apply = $apply;

  /**
   * Shortcut
   * This method returns a string indicating the type of the unevaluated operand.
   *
   * @private
   * @function module:util-x~$typeOf
   * @param {*} inputArg
   * @return {string}
   */
  function $typeOf(inputArg) {
    var rtn;

    if ($isPrimitive(inputArg)) {
      rtn = typeof inputArg;
    } else if (!$isRegExp(inputArg) && $isFunction(inputArg)) {
      rtn = 'function';
    } else {
      rtn = 'object';
    }

    return rtn;
  }

  /**
   * This method returns a string indicating the type of the unevaluated operand.
   *
   * @function module:util-x~exports.Object.typeOf
   * @param {*} inputArg
   * @return {string}
   */
  exports.Object.typeOf = $typeOf;

  /**
   * Returns true if the operands are of the same typeof.
   *
   * @function module:util-x~exports.Object.areSameTypeOf
   * @param {*} a
   * @param {...*} [b]
   * @return {boolean}
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

  /**
   * Returns true if the operands are of the same object class.
   *
   * @function module:util-x~exports.Object.areSameClass
   * @param {*} a
   * @param {...*} [b]
   * @return {boolean}
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

  /**
   * The function tests whether an object has in its prototype chain the prototype property of a constructor.
   *
   * @function module:util-x~exports.Object.instanceOf
   * @param {Object} object
   * @param {Function} ctr
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/instanceof
   */
  exports.Object.instanceOf = $instanceOf;

  /**
   * Returns true if the argument coerces to NaN, and otherwise returns false.
   *
   * @function module:util-x~exports.isNaN
   * @param {*} number
   * @return {boolean}
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

    // message
    'isNaN shim'
  );

  // redefinition
  $isNaN = exports.isNaN;

  /**
   * Returns false if the argument coerces to NaN, +INFINITY, or NEGATIVE_INFINITY, and otherwise returns true.
   *
   * @private
   * @function module:util-x~exports.isFinite
   * @param {*} number
   * @return {boolean}
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
   * @return {Array}
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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
   */
  exports.Array.slice = $toMethod(exports.Array.proto.slice);

  // redefinition
  $slice = exports.Array.slice;

  /**
   * The function takes one argument protoFn, and returns the bound function as a stand alone method.
   * Default this check is to {@link $requireObjectCoercible}.
   *
   * @function module:util-x~exports.Function.ToMethod
   * @param {prototypalFunction} protoFn
   * @param {Function} checkThisArgFn
   * @throws {TypeError} If protoFn is not a {@link Function function}.
   * @return {boundPrototypalFunction}
   */
  exports.Function.ToMethod = $toMethod;

  /**
   * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
   * I.e. [[Class]] A String value indicating a specification defined classification of objects.
   *
   * @function module:util-x~exports.Object.toStringTag
   * @param {*} inputArg
   * @return {string}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-8.6.2
   */
  exports.Object.toStringTag = $toStringTag;

  /**
   * Target function.
   * @typedef {Function} module:util-x~bindTargetFunction
   * @param {...*} [varArgs]
   * @return {*}
   */

  /**
   * Bound function.
   * @typedef {Function} module:util-x~boundFunction
   * @this thisArg
   * @param {...*} [varArgs]
   * @return {*}
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
   * @return {module:util-x~boundFunction}.
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
            var binderArgs = [],
              len1 = $toLength(args.length),
              len2 = $toLength(arguments.length),
              result,
              idx;

            binderArgs.length = len1 + len2;
            for (idx = 0; idx < len1; idx += 1) {
              binderArgs[idx] = args[idx];
            }

            for (idx = 0; idx < len2; idx += 1) {
              binderArgs[len1 + idx] = arguments[idx];
            }

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
   * @return {module:util-x~boundFunction}.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind
   */
  exports.Function.bind = $toMethod(exports.Function.proto.bind);

  /**
   * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
   * whose class internal property is "Array"; otherwise it returns false.
   *
   * @function module:util-x~exports.Array.isArray
   * @param {*} inputArg
   * @return {boolean}
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
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   */
  exports.Array.proto.join = (function () {
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
              $requireObjectCoercible(this);
              if (typeof separator === 'undefined') {
                separator = ',';
              }

              return $call(pJoin, this, separator);
            };
          },

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

          if (typeof separator === 'undefined') {
            separator = ',';
          }

          separator = $toString(separator);
          for (index = 0; index < length; index += 1) {
            val = object[index];
            /*jslint eqeq:true */
            /*jshint eqnull:true */
            if (val != null) {
              result += $toString(val);
            }

            if (index < last) {
              result += separator;
            }
          }

          return result;
        };
      },

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
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   */
  exports.Array.join = $toMethod(exports.Array.proto.join);

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
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join
   */
  $join = exports.Array.join;

  /**
   * Determines whether two values are the same value.
   *
   * @function module:util-x~exports.Object.is
   * @param {*} [x]
   * @param {*} [y]
   * @return {boolean}
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
          val = x !== x && y !== y;
        }

        return val;
      };
    },

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
   * @return {boolean}
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

    // message
    'Number.isNaN shim'
  );

  /**
   * The function determines whether the passed value is finite.
   * More robust version of the original global isFinite.
   *
   * @function module:util-x~exports.Number.isFinite
   * @param {*} number
   * @return {boolean}
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
        return typeof number === 'number' && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY;
      };
    },

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
   * @return {number}
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
        return $toNumber(value) && ($toNumber(value >= 0) || -1);
      };
    },

    // message
    'Math.sign shim'
  );

  /**
   * The function evaluates the passed value and converts it to an integer.
   *
   * @function module:util-x~exports.Number.toInteger
   * @param {*} inputArg The object to be converted to an integer.
   * @return {number} If the target value is NaN, null or undefined, 0 is returned. If the target value is false, 0 is returned and if true, 1 is returned.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-9.4
   */
  exports.Number.toInteger = $toInteger;

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
   * @return {boolean}
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
   * @return {boolean}
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
   * @return {number}
   */
  function toInt32(inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
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
   * @return {number}
   */
  exports.Number.toInt32 = toInt32;

  /**
   * The exports.Number.isInt32() method determines whether the passed value is an integer.
   * If the target value is an integer in the range -2^31 through 2^31-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isInt32
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isInt32 = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= MIN_INT32 && inputArg <= MAX_INT32;
  };

  /**
   * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
   * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
   * Known as Rounding division, Floored division or Integer division.
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
   *
   * @function module:util-x~exports.Number.proto.modulo
   * @this {number}
   * @param {number} divisor
   * @return {number}
   */
  exports.Number.proto.modulo = function (divisor) {
    return this - divisor * $floor(this / divisor);
  };

  /**
   * The Number.modulo function is a modified implementation of the `%` operator. This algorithm uses the
   * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
   * Known as Rounding division, Floored division or Integer division.
   * @see @link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator
   *
   * @function module:util-x~exports.Number.modulo
   * @param {number} dividend
   * @param {number} divisor
   * @return {number}
   */
  exports.Number.modulo = $toMethod(exports.Number.proto.modulo, $firstArg);

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
   * @return {number}
   */
  $modulo = exports.Number.modulo;

  /**
   * The Number.isOdd returns true if the integer is odd otherwise false.
   *
   * @function module:util-x~exports.Number.isOdd
   * @param {number} inputArg
   * @return {boolean}
   */
  exports.Number.isOdd = function (inputArg) {
    return $isInteger(inputArg) && inputArg % 2 !== 0;
  };

  /**
   * The Number.isEven returns true if the integer is even otherwise false.
   *
   * @function module:util-x~exports.Number.isEven
   * @param {number} inputArg
   * @return {boolean}
   */
  exports.Number.isEven = function (inputArg) {
    return $isInteger(inputArg) && inputArg % 2 === 0;
  };

  /**
   * The abstract operation converts its argument to one of 2^53 integer values in
   * the range 0 through 2^53-1,inclusive.
   *
   * @function module:util-x~exports.Number.toUint
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toUint = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = $modulo($toInteger(number), UNSAFE_INTEGER);
    }

    return val;
  };

  /**
   * This method determines whether the passed value is an integer.
   * If the target value is an integer in the  range 0 through 2^53-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isUint
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isUint = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_SAFE_INTEGER;
  };

  /**
   * The abstract operation ToLength converts its argument to an integer suitable for use as the length
   * of an array-like object.
   *
   * @function module:util-x~exports.Number.toLength
   * @param {*} inputArg
   * @return {number}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
   */
  exports.Number.toLength = $toLength;

  /**
   * The abstract operation converts its argument to one of 2^32 integer values in
   * the range 0 through 2^32-1,inclusive.
   *
   * @function module:util-x~exports.Number.toUint32
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toUint32 = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = $modulo($toInteger(number), UWORD32);
    }

    return val;
  };

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
   * @return {boolean}
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
   * @return {boolean}
   */
  exports.Number.isUint32 = $isUint32;

  /**
   * The abstract operation converts its argument to one of 2^16 integer values in
   * the range -2^15 through 2^15-1, inclusive.
   *
   * @function module:util-x~exports.Number.toInt16
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toInt16 = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = ((number > 0 || -1) * $floor($abs(number))) % UWORD16;
      if (val > MAX_INT16) {
        val -= UWORD16;
      } else if (val < MIN_INT16) {
        val += UWORD16;
      }
    }

    return val;
  };

  /**
   * This method determines whether the passed value is an integer.
   * If the target value is an integer in the range -2^15 through 2^15-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isInt16
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isInt16 = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= MIN_INT16 && inputArg <= MAX_INT16;
  };

  /**
   * The abstract operation converts its argument to one of 2^16 integer values in
   * the range 0 through 2^16-1,inclusive.
   *
   * @function module:util-x~exports.Number.toUint16
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toUint16 = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = $modulo($toInteger(number), UWORD16);
    }

    return val;
  };

  /**
   * This method determines whether the passed value is an integer.
   * If the target value is an integer in the  range 0 through 2^16-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isUint16
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isUint16 = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT16;
  };

  /**
   * The abstract operation converts its argument to one of 2^8 integer values in
   * the range -2^7 through 2^7-1, inclusive.
   *
   * @function module:util-x~exports.Number.toInt8
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toInt8 = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = ((number > 0 || -1) * $floor($abs(number))) % UWORD8;
      if (val > MAX_INT8) {
        val -= UWORD8;
      } else if (val < MIN_INT8) {
        val += UWORD8;
      }
    }

    return val;
  };

  /**
   * This method determines whether the passed value is an integer.
   * If the target value is an integer in the range -2^7 through 2^7-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isInt8
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isInt8 = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= MIN_INT8 && inputArg <= MAX_INT8;
  };

  /**
   * The abstract operation converts its argument to one of 2^8 integer values in
   * the range 0 through 2^8-1,inclusive.
   *
   * @function module:util-x~exports.Number.toUint8
   * @param {*} inputArg
   * @return {number}
   */
  exports.Number.toUint8 = function (inputArg) {
    var number = $toNumber(inputArg),
      val = 0;

    if (number && number === number && number !== INFINITY && number !== NEGATIVE_INFINITY) {
      val = $modulo($toInteger(number), UWORD8);
    }

    return val;
  };

  /**
   * This method determines whether the passed value is an integer.
   * If the target value is an integer in the  range 0 through 2^8-1, inclusive,
   * return true, otherwise return false.
   * If the value is NaN or infinite, return false.
   *
   * @function module:util-x~exports.Number.isUint8
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Number.isUint8 = function (inputArg) {
    return $isSafeInteger(inputArg) && inputArg >= 0 && inputArg <= MAX_UINT8;
  };

  /**
   * When the concat method is called with zero or more arguments item1, item2,
   * etc., it returns an array containing the array elements of the object
   * followed by the array elements of each argument in order.
   *
   * @function module:util-x~exports.Array.proto.concat
   * @this {Array} array
   * @param {...*} [varArgs]
   * @return {Array}
   * @see https://goo.gl/aY7KDO
   */
  exports.Array.proto.concat = $decide(
    // test
    function () {
      $affirmBasic(base.Array.concat)();
      $affirm.doesNotThrow(function () {
        $call(base.Array.concat, [], true);
      });

      var concatArr = [1, 2, 3],
        expected = $slice($returnArgs(1, 2, 3, Undefined, null, false)),
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
   * When the concat method is called with zero or more arguments item1, item2,
   * etc., it returns an array containing the array elements of the object
   * followed by the array elements of each argument in order.
   *
   * @function module:util-x~exports.Array.concat
   * @param {Array} array
   * @param {...*} [varArgs]
   * @return {Array}
   * @see https://goo.gl/aY7KDO
   */
  exports.Array.concat = $toMethod(exports.Array.proto.concat);

  /**
   * This method adds one or more elements to the end of the array and
   * returns the new length of the array.
   *
   * @function module:util-x~exports.Array.proto.push
   * @this {module:util-x~ArrayLike}
   * @param {...*} [varArgs]
   * @return {number}
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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   */
  exports.Array.push = $toMethod(exports.Array.proto.push);

  /**
   * Shortcut
   * This method adds one or more elements to the end of the array and
   * returns the new length of the array.
   *
   * @private
   * @function module:util-x~$push
   * @param {module:util-x~ArrayLike} array
   * @param {...*} [varArgs]
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push
   */
  $push = exports.Array.push;

  /**
   * This method removes the last element from an array and returns that element.
   *
   *
   * @function module:util-x~exports.Array.proto.pop
   * @this {module:util-x~ArrayLike} array
   * @return {*}
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
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
   */
  exports.Array.pop = $toMethod(exports.Array.proto.pop);

  /**
   * Shortcut
   * This method removes the last element from an array and returns that element.
   *
   * @private
   * @function module:util-x~$pop
   * @param {module:util-x~ArrayLike} array
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop
   */
  $pop = exports.Array.pop;

  /**
   * The first element of the array is removed from the array and returned.
   *
   *
   * @function module:util-x~exports.Array.proto.shift
   * @this {module:util-x~ArrayLike} array
   * @return {*}
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
              object[to] = object[index];
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
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
   */
  exports.Array.shift = $toMethod(exports.Array.proto.shift);

  /**
   * Shortcut
   * The first element of the array is removed from the array and returned.
   *
   * @private
   * @function module:util-x~$shift
   * @param {module:util-x~ArrayLike} array
   * @return {*}
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
   * @return {number}
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
        unshiftObj = {},
        arrCmp,
        i;

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

      arrCmp = [];
      arrCmp.length = 12;
      arrCmp[0] = Undefined;
      arrCmp[1] = null;
      arrCmp[2] = -1;
      arrCmp[3] = 0;
      arrCmp[4] = 1;
      arrCmp[5] = false;
      arrCmp[6] = true;
      arrCmp[7] = Undefined;
      arrCmp[8] = '';
      arrCmp[9] = 'abc';
      arrCmp[10] = null;
      arrCmp[11] = Undefined;

      unshiftArr = [];
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, Undefined), 1, 'test1');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, null), 2, 'test2');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, 'abc'), 3, 'test3');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, ''), 4, 'test4');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, Undefined), 5, 'test5');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr), 5, 'test6');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr), 5, 'test7');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr), 5, 'test8');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr), 5, 'test9');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, true), 6, 'test10');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, false), 7, 'test11');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, 1), 8, 'test12');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, 0), 9, 'test13');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, -1), 10, 'test14');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, null), 11, 'test15');
      $affirm.strictEqual($call(base.Array.unshift, unshiftArr, Undefined), 12, 'test16');
      $affirm.strictEqual(unshiftArr.length, arrCmp.length, 'test17');
      for (i = 0; i < unshiftArr.length; i += 1) {
        $affirm.ok($call(pHasOwn, unshiftArr, i), 'hasOwn test' + i);
        $affirm.strictEqual(unshiftArr[i], arrCmp[i], 'strictEqual test' + i);
      }
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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
   */
  exports.Array.unshift = $toMethod(exports.Array.proto.unshift);

  /**
   * Shortcut
   * This method adds one or more elements to the beginning of an array and
   * returns the new length of the array.
   *
   * @private
   * @function module:util-x~$unshift
   * @param {module:util-x~ArrayLike} array
   * @param {...*} [varArgs]
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift
   */
  $unshift = exports.Array.unshift;

  /**
   * The elements of the array are rearranged so as to reverse their order.
   *
   * @function module:util-x~exports.Array.proto.reverse
   * @this {module:util-x~ArrayLike}
   * @return {module:util-x~ArrayLike}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8
   */
  exports.Array.proto.reverse = $decide(
    // test
    function () {
      $affirmBasic(base.Array.reverse)();
      $affirm.doesNotThrow(function () {
        $call(base.Array.reverse, 1);
      }, 'number');

      $affirm.doesNotThrow(function () {
        $call(base.Array.reverse, true);
      }, 'boolean');

      $affirm.doesNotThrow(function () {
        $call(base.Array.reverse, 'a');
      }, 'string');

      var arrCmp = [];

      arrCmp.length = 12;
      arrCmp[0] = Undefined;
      arrCmp[1] = null;
      arrCmp[2] = -1;
      arrCmp[3] = 0;
      arrCmp[4] = 1;
      arrCmp[5] = false;
      arrCmp[6] = true;
      arrCmp[8] = '';
      arrCmp[9] = 'abc';
      arrCmp[10] = null;
      arrCmp[11] = Undefined;

      $affirm.doesNotThrow(function () {
        $call(base.Array.reverse, arrCmp);
      }, 'test1');

      $affirm.strictEqual(arrCmp.length, 12, 'test2');
      $affirm.strictEqual(arrCmp[11], Undefined, 'test3');
      $affirm.ok($call(pHasOwn, arrCmp, 11), 'test4');
      $affirm.strictEqual(arrCmp[10], null, 'test5');
      $affirm.strictEqual(arrCmp[9], -1, 'test6');
      $affirm.strictEqual(arrCmp[8], 0, 'test7');
      $affirm.strictEqual(arrCmp[7], 1, 'test8');
      $affirm.strictEqual(arrCmp[6], false, 'test9');
      $affirm.strictEqual(arrCmp[5], true, 'test10');
      $affirm.strictEqual(arrCmp[4], Undefined, 'test11');
      $affirm.ok(!$call(pHasOwn, arrCmp, 4), 'test12');
      $affirm.strictEqual(arrCmp[3], '', 'test13');
      $affirm.strictEqual(arrCmp[2], 'abc', 'test14');
      $affirm.strictEqual(arrCmp[1], null, 'test15');
      $affirm.strictEqual(arrCmp[0], Undefined, 'test16');
      $affirm.ok($call(pHasOwn, arrCmp, 0), 'test17');
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
   * @return {module:util-x~ArrayLike}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.8
   */
  exports.Array.reverse = $toMethod(exports.Array.proto.reverse);

  /**
   * Shortcut
   * The elements of the array are rearranged so as to reverse their order.
   *
   * @private
   * @function module:util-x~$reverse
   * @param {module:util-x~ArrayLike} array
   * @return {module:util-x~ArrayLike}
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
   * @return {number}
   */
  exports.Number.clampToInt = function (num, min, max) {
    return $min($max($toInteger(num), $toInteger(min)), $toInteger(max));
  };

  /**
   * The slice method takes two arguments, start and end, and returns a substring of the result
   * of converting this object to a String, starting from index start and running to, but not
   * including, index end (or through the end of the String if end is undefined). If start is
   * negative, it is treated as sourceLength+start where sourceLength is the length of the
   * String. If end is negative, it is treated as sourceLength+end where sourceLength is the
   * length of the String. The result is a String value, not a String object.
   *
   * @function module:util-x~exports.String.proto.slice
   * @this {string}
   * @param {number} start
   * @param {number} end
   * @return {string}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.slice
   */
  exports.String.proto.slice = $decide(
    // test
    function () {
      $affirmBasic(base.String.slice)();
    },

    // pass
    function () {
      return base.String.slice;
    },

    // fail
    function () {
      return function (start, end) {
        var object = $onlyCoercibleToString(this),
          length = $toLength(object.length),
          intStart = $toInteger(start),
          result = '',
          index,
          intEnd,
          from,
          to;

        if (typeof end === 'undefined') {
          intEnd = length;
        } else {
          intEnd = $toInteger(end);
        }

        if (intStart < 0) {
          from = $max(length + intStart, 0);
        } else {
          from = $min(intStart, length);
        }

        if (intEnd < 0) {
          to = $max(length + intEnd, 0);
        } else {
          to = $min(intEnd, length);
        }

        for (index = from; index < to; index += 1) {
          result += $getItem(object, index, stringTagString);
        }

        return result;
      };
    },

    //argsNames
    ['start', 'end'],

    // message
    'String.slice shim'
  );

  /**
   * The slice method takes two arguments, start and end, and returns a substring of the result
   * of converting this object to a String, starting from index start and running to, but not
   * including, index end (or through the end of the String if end is undefined). If start is
   * negative, it is treated as sourceLength+start where sourceLength is the length of the
   * String. If end is negative, it is treated as sourceLength+end where sourceLength is the
   * length of the String. The result is a String value, not a String object.
   *
   * @function module:util-x~exports.String.slice
   * @param {string} string
   * @param {number} start
   * @param {number} end
   * @return {string}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.slice
   */
  exports.String.slice = $toMethod(exports.String.proto.slice);

  /**
   * The slice method takes two arguments, start and end, and returns a substring of the result
   * of converting this object to a String, starting from index start and running to, but not
   * including, index end (or through the end of the String if end is undefined). If start is
   * negative, it is treated as sourceLength+start where sourceLength is the length of the
   * String. If end is negative, it is treated as sourceLength+end where sourceLength is the
   * length of the String. The result is a String value, not a String object.
   *
   * @private
   * @function module:util-x~$sSlice
   * @param {string} string
   * @param {number} start
   * @param {number} end
   * @return {string}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.slice
   */
  $sSlice = exports.String.slice;

  /**
   * Repeat the current string several times, return the new string.
   *
   * @function module:util-x~exports.String.proto.repeat
   * @this {string}
   * @param {number} count
   * @return {string}
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
       * @return {string}
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

        if (count === INFINITY) {
          throw new CRangeError('repeat count must be less than infinity');
        }

        return stringRepeatRep(thisString, count);
      };
    },

    // messgae
    'String.repeat shim'
  );

  /**
   * Repeat the current string several times, return the new string.
   *
   * @function module:util-x~exports.String.repeat
   * @param {string} string
   * @param {number} count
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
   */
  exports.String.repeat = $toMethod(exports.String.proto.repeat);

  /**
   * Repeat the current string several times, return the new string.
   *
   * @private
   * @function module:util-x~$repeat
   * @param {string} string
   * @param {number} count
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/repeat
   */
  $repeat = exports.String.repeat;

  /**
   * Return the value of the [[Prototype]] internal property of object.
   * Actually based on the ECMA6 draft, which only throws on undefined or null.
   *
   * @function module:util-x~exports.Object.getPrototypeOf
   * @param {Object} object
   * @return {Prototype}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-ordinary-object-internal-methods-and-internal-slots-getprototypeof
   */
  exports.Object.getPrototypeOf = (function () {
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

          // message
          'Object.getPrototypeOf full shim'
        );
      },

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
   * @return {Prototype}
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
   * @return {boolean}
   */
  exports.Object.isPlainObject = function (object) {
    return $toStringTag(object) === stringTagObject && $getPrototypeOf(object) === protoObject;
  };

  // redefinition
  $isPlainObject = exports.Object.isPlainObject;

  /**
   * Returns a boolean indicating whether the object has the specified property.
   * This function can be used to determine whether an object has the specified property as a direct property of
   * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
   *
   * @function module:util-x~exports.Object.proto.hasOwnProperty
   * @this {Object}
   * @param {StringLike} property
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   */
  /* jshint -W001 */
  exports.Object.proto.hasOwnProperty = (function (phop) {
    return $decide(
      // test
      function () {
        $affirm.ok($call(phop, 'abc', '1'), 'hasStringOwnPropBug');
        $affirm.ok($call(phop, $Object('abc'), '1'), 'hasStringOwnPropBug');
      },

      // pass
      function () {
        return phop;
      },

      // fail
      function () {
        return function (property) {
          var object = $toObject(this),
            prop = $toString(property);

          return ($isString(object) && $isIndex(prop, $toLength(object.length))) || $call(phop, object, prop);
        };
      },

      // message
      'Object.hasOwnProperty hasStringOwnPropBug patch'
    );
  }(pHasOwn));

  /**
   * Returns a boolean indicating whether the object has the specified property.
   * This function can be used to determine whether an object has the specified property as a direct property of
   * that object; unlike the exports.Object.has function, this method does not check down the object's prototype chain.
   *
   * @function module:util-x~exports.Object.hasOwnProperty
   * @param {Object} object
   * @param {StringLike} property
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   */
  exports.Object.hasOwnProperty = function (object, property) {
    return pHasOwn.call(object, property);
  };

  exports.Object.hasOwnProperty = $toMethod(exports.Object.proto.hasOwnProperty);
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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty
   */
  $hasOwn = exports.Object.hasOwnProperty;

  /**
   * This method returns a Boolean indicating whether the specified property is enumerable.
   *
   * @function module:util-x~exports.Object.proto.propertyIsEnumerable
   * @this {Object}
   * @param {StringLike} prop The name of the property to test.
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
   */
  exports.Object.proto.propertyIsEnumerable = (function (pPropertyIsEnumerable) {
    var strPropEnumBug = true;

    return $decide(
      // test
      function () {
        $affirmBasic(pPropertyIsEnumerable)();

        $affirm.ok($call(pPropertyIsEnumerable, 'abc', '0'), 'String indexes');
        $affirm.ok($call(pPropertyIsEnumerable, $toObject('abc'), '0'), 'String object indexes');
        strPropEnumBug = false;
        $affirm.ok(!hasDontEnumBug, 'hasDontEnumBug');
        $affirm.ok(!hasEnumStringBug, 'hasEnumStringBug');
        $affirm.ok(!hasEnumArgsBug, 'hasEnumArgsBug');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'toString'), 'Object.prototype.toString');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'toLocaleString'), 'Object.prototype.toLocaleString');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'valueOf'), 'Object.prototype.valueOf');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'hasOwnProperty'), 'Object.prototype.hasOwnProperty');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'isPrototypeOf'), 'Object.prototype.isPrototypeOf');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'propertyIsEnumerable'), 'Object.prototype.propertyIsEnumerable');
        $affirm.ok(!$call(pPropertyIsEnumerable, protoObject, 'constructor'), 'Object.prototype.constructor');

      },

      // pass
      function () {
        return pPropertyIsEnumerable;
      },

      // fail
      function () {
        var length = $toLength(shadowed.length);

        return function (property) {
          var object = $toObject(this),
            prop = $toString(property),
            rtn = $call(pPropertyIsEnumerable, object, prop),
            found,
            index,
            name,
            isProto,
            skip,
            subject;

          if (!rtn) {
            if ((((hasEnumStringBug || strPropEnumBug) && $isString(object)) || (hasEnumArgsBug && $isArguments(object) && $call(pHasOwn, object, prop))) && $isIndex(prop, $toLength(object.length))) {
              rtn = true;
            } else if (hasDontEnumBug) {
              for (index = 0; index < length; index += 1) {
                if (prop === shadowed[index]) {
                  /*jslint forin: true */
                  for (name in base) {
                    subject = base[name];
                    /*jslint eqeq:true */
                    /*jshint eqnull:true */
                    if (subject != null && object === subject.proto) {
                      isProto = true;
                      break;
                    }
                  }

                  skip = prop === 'constructor' && $hasProperty(object, 'constructor') && object.constructor.prototype !== object;
                  if (!skip && !isProto) {
                    $conlog('found : ' + prop);
                    found = true;
                  }

                  break;
                }
              }

              if (found && $call(pHasOwn, object, prop)) {
                $conlog(name + ' : ' + prop + ' : ' + object[prop] !== base[name][prop]);
                rtn = object[prop] !== base[name][prop];
              }
            }
          }

          return rtn;
        };
      },

      // message
      'Object.propertyIsEnumerable patch'
    );
  }(base.Object.propertyIsEnumerable));

  /**
   * Shortcut
   * This method returns a Boolean indicating whether the specified property is enumerable.
   *
   * @private
   * @function module:util-x~$propertyIsEnumerable
   * @param {Object} The object to be tested
   * @param {StringLike} prop The name of the property to test.
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
   */
  $propertyIsEnumerable = $toMethod(exports.Object.proto.propertyIsEnumerable);

  /**
   * This method returns a Boolean indicating whether the specified property is enumerable.
   *
   * @function module:util-x~exports.Object.propertyIsEnumerable
   * @param {Object} The object to be tested
   * @param {StringLike} prop The name of the property to test.
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
   */
  exports.Object.propertyIsEnumerable = $propertyIsEnumerable;

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   */
  /*jslint todo: true */
  /** @todo: fix unwanted error, constructor and prototype properties */
  /*jslint todo: false */
  exports.Object.keys = (function () {
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

          // message
          'Object.keys patch'
        );
      },

      // fail
      function () {
        var length = $toLength(shadowed.length),
          uLen = 0;

        if (hasErrorProps) {
          uLen = $toLength(unwantedError.length);
        }

        return function (object) {
          var obj = $toObject(object),
            theKeys = [],
            isString = hasEnumStringBug && $isString(obj),
            dontEnum,
            skip,
            name,
            index,
            isProto,
            subject;

          if (isString || (hasEnumArgsBug && $isArguments(obj))) {
            length = $toLength(obj.length);
            for (index = 0; index < length; index += 1) {
              if (isString || $call(pHasOwn, obj, index)) {
                $push(theKeys, $toString(index));
              }
            }
          }

          /*jslint forin: true */
          for (name in obj) {
            if ($call(pHasOwn, obj, name)) {
              if (hasErrorProps) {
                skip = false;
                for (index = 0; index < uLen; index += 1) {
                  subject = unwantedError[index];
                  if (obj === subject.proto) {
                    dontEnum = subject.unwanted;
                    if ($call(pHasOwn, dontEnum, name) && obj[name] === dontEnum[name]) {
                      skip = true;
                    }

                    break;
                  }
                }
              }

              if (!skip) {
                $push(theKeys, name);
              }
            }
          }

          if (hasDontEnumBug) {
            /*jslint forin: true */
            for (name in base) {
              subject = base[name];
              /*jslint eqeq:true */
              /*jshint eqnull:true */
              if (subject != null && obj === subject.proto) {
                isProto = true;
                break;
              }
            }

            skip = !isProto && $hasProperty(obj, 'constructor') && obj.constructor.prototype === obj;
            for (index = 0; index < length; index += 1) {
              dontEnum = shadowed[index];
              if ($call(pHasOwn, obj, dontEnum)) {
                if (isProto) {
                  if (obj[dontEnum] !== subject[dontEnum]) {
                    $push(theKeys, dontEnum);
                  }
                } else if (!(skip && dontEnum === 'constructor')) {
                  $push(theKeys, dontEnum);
                }
              }
            }
          }

          return theKeys;
        };
      },

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
   */
  $objectKeys = exports.Object.keys;

  /**
   * Default compare function for stableSort.
   *
   * @private
   * @function module:util-x~$ascending
   * @param {*} left
   * @param {*} right
   * @return {number}
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
   * @return {number}
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
   * @return {module:util-x~ArrayLike} same type as supplied array argument.
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
     * @return {number}
     */
    function sortCompare(left, right) {
      var hasj = $call(pHasOwn, left, 0),
        hask = $call(pHasOwn, right, 0),
        isUndefX,
        isUndefY,
        val;

      if (!hasj && !hask) {
        val = +0;
      } else if (!hasj) {
        val = 1;
      } else if (!hask) {
        val = -1;
      } else {
        isUndefX = typeof left[0] === 'undefined';
        isUndefY = typeof right[0] === 'undefined';
        if (isUndefX && isUndefY) {
          val = +0;
        } else if (isUndefX) {
          val = 1;
        } else if (isUndefY) {
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
     * @return {Array}
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
     * @return {Array}
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

      if (typeof comparefn === 'undefined') {
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

  /**
   * This {@link module:util-x~boundPrototypalFunction method} method sorts the elements of an array in place and returns the array.
   * This is a stable sort. The default sort order is lexicographic (not numeric).
   *
   * @function module:util-x~exports.Array.stableSort
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @param {Function} [compareFN]
   * @throws {TypeError} If compareFN is defined and is not a function
   * @return {module:util-x~ArrayLike} same type as supplied array argument.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   * @see http://en.wikipedia.org/wiki/Sorting_algorithm#Stability
   */
  exports.Array.stableSort = $toMethod(exports.Array.proto.stableSort);

  /**
   * This method sorts the elements the array in place and returns the array.
   * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
   *
   * @function module:util-x~exports.Array.proto.sort
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @param {Function} [compareFN]
   * @throws {TypeError} If compareFN is not undefined or is not a function
   * @return {module:util-x~ArrayLike} same type as supplied array argument.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  exports.Array.proto.sort = (function () {
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

        sortArr.length = 9;
        sortArr[0] = 'f';
        sortArr[1] = 'e';
        sortArr[2] = 'd';
        sortArr[3] = Undefined;
        sortArr[4] = null;
        sortArr[5] = 'a';
        sortArr[6] = 'c';
        sortArr[7] = 'b';

        $call(base.Array.sort, sortArr, $descending);
        $affirm.strictEqual(sortArr.length, 9, 'test13');
        $affirm.strictEqual(sortArr[0], null, 'test14');
        $affirm.strictEqual(sortArr[1], 'f', 'test15');
        $affirm.strictEqual(sortArr[2], 'e', 'test16');
        $affirm.strictEqual(sortArr[3], 'd', 'test17');
        $affirm.strictEqual(sortArr[4], 'c', 'test18');
        $affirm.strictEqual(sortArr[5], 'b', 'test19');
        $affirm.strictEqual(sortArr[6], 'a', 'test20');
        $affirm.strictEqual(sortArr[7], Undefined, 'test21');
        $affirm.strictEqual(sortArr[8], Undefined, 'test22');
        $affirm.ok($call(pHasOwn, sortArr, 7), 'test23');
        $affirm.ok(!$call(pHasOwn, sortArr, 8), 'test24');

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
        $affirm.strictEqual(sortObj.length, 8, 'test25');
        $affirm.strictEqual(sortObj[0], null, 'test26');
        $affirm.strictEqual(sortObj[1], 5, 'test27');
        $affirm.strictEqual(sortObj[2], 4, 'test28');
        $affirm.strictEqual(sortObj[3], 3, 'test29');
        $affirm.strictEqual(sortObj[4], 2, 'test30');
        $affirm.strictEqual(sortObj[5], 1, 'test31');
        $affirm.strictEqual(sortObj[6], Undefined, 'test32');
        $affirm.strictEqual(sortObj[7], Undefined, 'test33');
        $affirm.ok(!$call(pHasOwn, sortObj, 6), 'test34');
        $affirm.ok(!$call(pHasOwn, sortObj, 7), 'test35');
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
              $call(base.Array.sort, [], Undefined);
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
              if (typeof comparefn === 'undefined') {
                comparefn = $ascending;
              }

              return $call(pSort, $requireObjectCoercible(this), $throwIfNotFunction(comparefn));
            };
          },

          // message
          'Array.sort patch'
        );
      },

      // fail
      function () {
        return exports.Array.proto.stableSort;
      },

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
   * @return {module:util-x~ArrayLike} same type as supplied array argument.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  exports.Array.sort = $toMethod(exports.Array.proto.sort);

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
   * @return {module:util-x~ArrayLike} same type as supplied array argument.
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
   */
  $sort = exports.Array.sort;

  /**
   * This method returns the first index at which a given element can
   * be found in the array, or -1 if it is not present.
   *
   * @function module:util-x~exports.Array.proto.indexOf
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @param {*} searchElement
   * @param {number} [fromIndex]
   * @return {number}
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
          isString = length && $isString(object),
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
              if ($hasItem(object, index, isString) && searchElement === $getItem(object, index, isString)) {
                val = index;
                break;
              }
            }
          }
        }

        return val;
      };
    },

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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   */
  exports.Array.indexOf = $toMethod(exports.Array.proto.indexOf);

  /**
   * Shortcut
   * This {@link module:util-x~boundPrototypalFunction method} returns the first index at which a given element can
   * be found in the array, or -1 if it is not present.
   *
   * @private
   * @function module:util-x~$indexOf
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @param {*} searchElement
   * @param {number} [fromIndex]
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf
   */
  $indexOf = exports.Array.indexOf;

  /**
   * Returns true if the specified searchElement is in the specified array.
   * Using strict equality (the same method used by the === comparison operator).
   *
   * @function module:util-x~exports.Array.proto.contains
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @param {*} searchElement
   * @return {boolean}
   */
  exports.Array.proto.contains = (function (pEAIndexOf) {
    return function () {
      return $apply(pEAIndexOf, this, arguments) !== -1;
    };
  }(exports.Array.proto.indexOf));

  /**
   * Returns true if the specified searchElement is in the specified array.
   * Using strict equality (the same method used by the === comparison operator).
   *
   * @function module:util-x~exports.Array.contains
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @param {*} searchElement
   * @return {boolean}
   */
  exports.Array.contains = $toMethod(exports.Array.proto.contains);

  /**
   * Tests a deep equality relation.
   *
   * @function module:util-x~exports.Object.deepEqual
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
   */
  exports.Object.deepEqual = (function () {
    var de = function (a, b, circ) {
      if (a === b) {
        return true;
      }

      var aIsString,
        bIsString,
        aType,
        bType,
        aIsArgs,
        bIsArgs,
        aIsPrim,
        bIsPrim,
        aCirc,
        bCirc,
        ka,
        kb,
        length,
        index,
        it;

      if ($isDate(a) && $isDate(b)) {
        return $toPrimitive(a, hintString) === $toPrimitive(b, hintString);
      }

      if ($isRegExp(a) && $isRegExp(b)) {
        return a.source === b.source &&
          a.global === b.global &&
          a.multiline === b.multiline &&
          a.lastIndex === b.lastIndex &&
          a.ignoreCase === b.ignoreCase &&
          a.sticky === b.sticky;
      }

      aIsPrim = $isPrimitive(a);
      bIsPrim = $isPrimitive(b);
      if ((aIsPrim || $isFunction(a)) && (bIsPrim || $isFunction(b))) {
        /*jslint eqeq:true */
        return a == b;
      }

      if (aIsPrim || bIsPrim) {
        return a === b;
      }

      if (a.prototype !== b.prototype) {
        return false;
      }

      if ($indexOf(circ.a, a) === -1) {
        $push(circ.a, a);
      } else {
        aCirc = true;
      }

      if ($indexOf(circ.b, b) === -1) {
        $push(circ.b, b);
      } else {
        bCirc = true;
      }

      if (aCirc && bCirc) {
        circ.cnt += 1;
      } else {
        circ.cnt = 0;
      }

      if (circ.cnt > 200) {
        throw new CRangeError('Circular reference limit exceeded');
      }

      aIsArgs = $isArguments(a);
      bIsArgs = $isArguments(b);
      if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs)) {
        return false;
      }

      if (aIsArgs) {
        return de($slice(a), $slice(b), circ);
      }

      ka = $objectKeys(a);
      kb = $objectKeys(b);
      length = $toLength(ka.length);
      if (length !== $toLength(kb.length)) {
        if ($isArray(a) && $isArray(b)) {
          if (a.length !== b.length) {
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

      aIsString = $isString(a);
      bIsString = $isString(b);
      for (index = 0; index < length; index += 1) {
        it = ka[index];
        if (!de($getItem(a, it, aIsString), $getItem(b, it, bIsString), circ)) {
          return false;
        }
      }

      aType = typeof a;
      bType = typeof b;

      return aType === bType;
    };

    return function (a, b) {
      return de(a, b, {
        a: [],
        b: [],
        cnt: 0
      });
    };
  }());

  /**
   * Tests a deep equality relation.
   *
   * @private
   * @function module:util-x~$deepEqual
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   * @see http://wiki.commonjs.org/wiki/Unit_Testing/1.0
   */
  $deepEqual = exports.Object.deepEqual;

  /**
   * Tests for deep equality, coercive equality with the equal comparison operator ( == ) and equivalent.
   *
   * @private
   * @function module:util-x~$affirm.deepEqual
   * @param {*} actual
   * @param {*} expected
   * @param {string} [message]
   * @param {Function} [stackStartFunction]
   * @return {undefined}
   */
  $affirm.deepEqual = function (actual, expected, message, stackStartFunction) {
    $throwIfNotEnoughArgs(arguments, 2);

    var opt;

    if (!$deepEqual(actual, expected)) {
      opt = $optArgs(3, message, stackStartFunction, $affirm.deepEqual);
      $affirm.fail(actual, expected, opt.message, 'deepEqual', opt.stackStartFunction);
    }
  };

  /**
   * Tests a deep equality relation.
   *
   * @function module:util-x~exports.Object.deepStrictEqual
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  exports.Object.deepStrictEqual = (function () {
    var de = function (a, b, circ) {
      if (a === b) {
        return true;
      }

      var aIsString,
        bIsString,
        aType,
        bType,
        aIsArgs,
        bIsArgs,
        aIsPrim,
        bIsPrim,
        aCirc,
        bCirc,
        ka,
        kb,
        length,
        index,
        it;

      if ($isDate(a) && $isDate(b)) {
        return $toPrimitive(a, hintString) === $toPrimitive(b, hintString);
      }

      if ($isRegExp(a) && $isRegExp(b)) {
        return a.source === b.source &&
          a.global === b.global &&
          a.multiline === b.multiline &&
          a.lastIndex === b.lastIndex &&
          a.ignoreCase === b.ignoreCase &&
          a.sticky === b.sticky;
      }

      aIsPrim = $isPrimitive(a);
      bIsPrim = $isPrimitive(b);
      if ((aIsPrim || $isFunction(a)) && ($isPrimitive(b) || $isFunction(b))) {
        return a === b;
      }

      if (aIsPrim || bIsPrim) {
        return a === b;
      }

      if ($getPrototypeOf(a) !== $getPrototypeOf(b)) {
        return false;
      }

      if ($indexOf(circ.a, a) === -1) {
        $push(circ.a, a);
      } else {
        aCirc = true;
      }

      if ($indexOf(circ.b, b) === -1) {
        $push(circ.b, b);
      } else {
        bCirc = true;
      }

      if (aCirc && bCirc) {
        circ.cnt += 1;
      } else {
        circ.cnt = 0;
      }

      if (circ.cnt > 200) {
        throw new CRangeError('Circular reference limit exceeded');
      }

      aIsArgs = $isArguments(a);
      bIsArgs = $isArguments(b);
      if ((aIsArgs && !bIsArgs) || (!aIsArgs && bIsArgs)) {
        return false;
      }

      if (aIsArgs) {
        return de($slice(a), $slice(b), circ);
      }

      ka = $objectKeys(a);
      kb = $objectKeys(b);
      length = $toLength(ka.length);
      if (length !== $toLength(kb.length)) {
        if ($isArray(a) && $isArray(b)) {
          if (a.length !== b.length) {
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

      aIsString = $isString(a);
      bIsString = $isString(b);
      for (index = 0; index < length; index += 1) {
        it = ka[index];
        if (!de($getItem(a, it, aIsString), $getItem(b, it, bIsString), circ)) {
          return false;
        }
      }

      aType = typeof a;
      bType = typeof b;

      return aType === bType;
    };

    return function (a, b) {
      return de(a, b, {
        a: [],
        b: [],
        cnt: 0
      });
    };
  }());

  /**
   * Tests a deep equality relation.
   *
   * @private
   * @function module:util-x~$deepStrictEqual
   * @param {*} a
   * @param {*} b
   * @return {boolean}
   */
  $deepStrictEqual = exports.Object.deepStrictEqual;

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
        $join($call(pSplit, 'a b c d', / /, INFINITY), '') === '';

    /**
     * This method takes a string and puts a backslash in front of every character
     * that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain
     * special regex characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.proto.escapeRegex
     * @this {string}
     * @return {string}
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
     * @private
     * @function module:util-x~$escapeRegex
     * @param {string} string
     * @return {string}
     */
    $escapeRegex = $toMethod(exports.String.proto.escapeRegex);

    /**
     * This {@link module:util-x~boundPrototypalFunction method} takes a string and puts a backslash in front of every character
     * that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain
     * special regex characters.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     *
     * @function module:util-x~exports.String.escapeRegex
     * @param {string} string
     * @return {string}
     */
    exports.String.escapeRegex = $escapeRegex;

    /**
     * Removes any duplicate characters from the provided string.
     *
     * @function module:util-x~exports.String.clipDuplicates
     * @param {string} str String to remove duplicate characters from.
     * @return {string} String with any duplicate characters removed.
     */
    exports.String.clipDuplicates = function (str) {
      return $call(pReplace, $onlyCoercibleToString(str), clipDups, '');
    };

    /**
     * Throws a TypeError if the argument is not a RegExp.
     *
     * @private
     * @function module:util-x~throwIfNotRegExp
     * @param {*} inputArg
     * @throws {TypeError} If inputArg is not a RegExp.
     * @return {RegExp}
     */
    function throwIfNotRegExp(inputArg) {
      if (!$isRegExp(inputArg)) {
        throw new CTypeError('Type RegExp expected: ' + $toString(inputArg));
      }

      return inputArg;
    }

    /**
     * Copies a regex object. Allows adding and removing native flags while copying the regex.
     *
     * @private
     * @function module:util-x~copyRegExp
     * @param {RegExp} regex Regex to copy.
     * @param {Object} [options] Allows specifying native flags to add or remove while copying the regex.
     * @return {RegExp} Copy of the provided regex, possibly with modified flags.
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
     * @return {Array} Match array with named backreference properties, or `null`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
     */
    exports.RegExp.proto.exec = $decide(
      // test
      function () {
        $affirmBasic(pExec)();

        $affirm.throws(function () {
          $call(pExec);
        }, CTypeError, 'should throw if no arguments');

        $affirm.throws(function () {
          $call(pExec, Undefined);
        }, CTypeError, 'should throw if argument is undefined');

        $affirm.throws(function () {
          $call(pExec, null);
        }, CTypeError, 'should throw if argument is null');

        $affirm.doesNotThrow(function () {
          $call(pExec, /x/);
        }, 'should not throw if no string argument');

        $affirm.doesNotThrow(function () {
          $call(pExec, /x/, Undefined);
        }, 'should not throw if string argument is undefined');

        $affirm.doesNotThrow(function () {
          $call(pExec, /x/, null);
        }, 'should not throw if string argument is null');

        var regex = /x/,
          match;

        regex.lastIndex = 4;
        $affirm.deepEqual($slice($call(pExec, regex, '123x5')), ['x'], 'should ignore lastIndex and set the search start position at 0 for a nonglobal regex');

        regex = /x/g;

        regex.lastIndex = 4;
        $affirm.strictEqual($call(pExec, regex, '123x5'), null, 'should use lastIndex to set the search start position for a global regex');

        regex.lastIndex = 2;
        $affirm.deepEqual($slice($call(pExec, regex, '123x5')), ['x'], 'should use lastIndex to set the search start position for a global regex');

        regex = /x/g;

        regex.lastIndex = '3';
        $affirm.deepEqual($slice($call(pExec, regex, '123x5')), ['x'], 'should type convert lastIndex when setting the search start position');

        regex.lastIndex = '4';
        $affirm.strictEqual($call(pExec, regex, '123x5'), null, 'should type convert lastIndex when setting the search start position');

        regex = /\b/g;
        match = $call(pExec, regex, '1,2');

        $affirm.deepEqual(match[0].length, 0, 'should not increment index on zero length mathces');
        $affirm.deepEqual(regex.lastIndex, match.index, 'should not increment index on zero length mathces');

        regex = /x/;

        $call(pExec, regex, '123x5');

        $affirm.strictEqual(regex.lastIndex, 0, 'should not increment lastIndex non global');
      },

      // pass
      function () {
        return pExec;
      },

      // fail
      function () {
        return function (stringArg) {
          var origLastIndex = $toNumber(throwIfNotRegExp(this).lastIndex),
            match = $apply(pExec, this, arguments),
            found,
            len,
            idx;

          if ($isArray(match)) {
            // Fix browsers whose `exec` methods don't return `undefined` for nonparticipating
            // capturing groups. This fixes IE 5.5-8, but not IE 9's quirks mode or emulation of
            // older IEs. IE 9 in standards mode follows the spec
            len = $toLength(match.length);
            if (!correctExecNpcg && len > 1) {
              for (idx = 0; idx < len; idx += 1) {
                if ('' === match[idx]) {
                  found = true;
                  break;
                }
              }

              if (found) {
                // Using `str.slice(match.index)` rather than `match[0]` in case lookahead allowed
                // matching due to characters outside the match
                $call(pReplace, $sSlice($toString(stringArg), $toNumber(match.index)), copyRegExp(this, {
                  remove: 'g'
                }), function () {
                  var length = $toLength(arguments.length) - 2,
                    index,
                    it;

                  // Skip index 0 and the last 2
                  for (index = 1; index < length; index += 1) {
                    it = arguments[index];
                    if ($isUndefined(it)) {
                      match[index] = it;
                    }
                  }
                });
              }
            }

            // Fix browsers that increment `lastIndex` after zero-length matches
            if (this.global && !$toLength(match[0].length) && $toNumber(this.lastIndex) > $toNumber(match.index)) {
              this.lastIndex = $toNumber(match.index);
            }
          }

          if (!this.global) {
            // Fixes IE, Opera bug (last tested IE 9, Opera 11.6)
            this.lastIndex = origLastIndex;
          }

          return match;
        };
      },

      // message
      'RegExp.exec patch'
    );

    /**
     * Fixes browser bugs in the native `RegExp.prototype.exec`.
     *
     * @function module:util-x~exports.RegExp.exec
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @return {Array} Match array with named backreference properties, or `null`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
     */
    exports.RegExp.exec = $toMethod(exports.RegExp.proto.exec);

    /**
     * Fixes browser bugs in the native `RegExp.prototype.exec`.
     *
     * @private
     * @function module:util-x~$exec
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @return {Array} Match array with named backreference properties, or `null`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
     */
    $exec = exports.RegExp.exec;

    /**
     * Fixes browser bugs in the native `RegExp.prototype.test`.
     *
     * @function module:util-x~exports.RegExp.proto.test
     * @this {RegExp}
     * @param {string} stringArg String to search.
     * @return {Boolean} Whether the regex matched the provided value.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
     */
    exports.RegExp.proto.test = $decide(
      // test
      function () {
        $affirmBasic(pTest)();
        $affirm.strictEqual(exports.RegExp.proto.exec, pExec, 'RegExp.exec was patched');

        $affirm.throws(function () {
          $call(pTest);
        }, CTypeError, 'should throw if no arguments');

        $affirm.throws(function () {
          $call(pTest, Undefined);
        }, CTypeError, 'should throw if argument is undefined');

        $affirm.throws(function () {
          $call(pTest, null);
        }, CTypeError, 'should throw if argument is null');

        $affirm.doesNotThrow(function () {
          $call(pTest, /x/);
        }, 'should not throw if no string argument');

        $affirm.doesNotThrow(function () {
          $call(pTest, /x/, Undefined);
        }, 'should not throw if string argument is undefined');

        $affirm.doesNotThrow(function () {
          $call(pTest, /x/, null);
        }, 'should not throw if string argument is null');

        var regex = /x/;

        regex.lastIndex = 4;
        $affirm.ok($call(pTest, regex, '123x5'), 'should ignore lastIndex and set the search start position at 0 for a nonglobal regex');

        regex = /x/g;
        regex.lastIndex = 4;
        $affirm.ok(!$call(pTest, regex, '123x5'), 'should use lastIndex to set the search start position for a global regex');

        regex.lastIndex = 2;
        $affirm.ok($call(pTest, regex, '123x5'), 'should use lastIndex to set the search start position for a global regex');

        regex = /x/g;
        regex.lastIndex = '3';
        $affirm.ok($call(pTest, regex, '123x5'), 'should type convert lastIndex when setting the search start position');

        regex.lastIndex = '4';
        $affirm.ok(!$call(pTest, regex, '123x5'), 'should type convert lastIndex when setting the search start position');

        regex = /x/g;
        $affirm.ok(!$call(pTest, regex), 'should type no argument to string');
        $affirm.ok(!$call(pTest, regex, undefined), 'should type undefined to string');
        $affirm.ok(!$call(pTest, regex, null), 'should type null to string');
        $affirm.ok(!$call(pTest, regex, 1), 'should type 1 to string');
        $affirm.ok(!$call(pTest, regex, true), 'should type true to string');
        $affirm.ok(!$call(pTest, regex, {}), 'should type {} to string');
        $affirm.ok(!$call(pTest, regex, []), 'should type [] to string');
      },

      // pass
      function () {
        return pTest;
      },

      // fail
      function () {
        return function (stringArg) {
          // Do this the easy way :-)
          return !!$exec(this, stringArg);
        };
      },

      // message
      'RegExp.test shim'
    );

    /**
     * Fixes browser bugs in the native `RegExp.prototype.test`.
     *
     * @function module:util-x~exports.RegExp.test
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @return {Boolean} Whether the regex matched the provided value.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
     */
    exports.RegExp.test = $toMethod(exports.RegExp.proto.test);

    /**
     * Fixes browser bugs in the native `RegExp.prototype.test`.
     *
     * @private
     * @function module:util-x~$test
     * @param {RegExp} regExpArg
     * @param {string} stringArg String to search.
     * @return {Boolean} Whether the regex matched the provided value.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
     */
    $test = exports.RegExp.test;

    /**
     * Checks to see that the string is only comprised of byte sized characters.
     *
     * @function module:util-x~exports.String.proto.isBytestring
     * @this {string}
     * @return {Boolean} Is a bytestring or not.
     */
    exports.String.proto.isBytestring = function () {
      return $test(/^[\x00-\xFF]*$/, $onlyCoercibleToString(this));
    };

    /**
     * Checks to see that the string is only comprised of byte sized characters.
     *
     * @function module:util-x~exports.String.isBytestring
     * @param {string} stringArg String to check.
     * @return {Boolean} Is a bytestring or not.
     */
    exports.String.isBytestring = $toMethod(exports.String.proto.isBytestring);

    /**
     * Executes a search for a match between a regular expression and this String object.
     *
     * @function module:util-x~exports.String.proto.search
     * @this {string}
     * @param {RegExp|string} regex A regular expression object. If a non-RegExp object obj is passed,
     *                              it is implicitly converted to a RegExp by using new RegExp(obj).
     * @return {Number} If successful, returns the index of the first match of the regular
     *                   expression inside the string. Otherwise, it returns -1.
     */
    exports.String.proto.search = $decide(
      // test
      function () {
        $affirmBasic(pSearch)();

        var rx1 = new CRegExp('c'),
          rx2 = new CRegExp('c', 'gmi'),
          testStr = 'abcdefgabcdefg',
          index;

        $affirm.doesNotThrow(function () {
          index = $call(pSearch, testStr, rx1);
        }, 'should not throw performing search rx1');

        $affirm.strictEqual(index, 2, 'rx1 gives correct index');
        $affirm.strictEqual(rx1.source, 'c', 'rx1 source should be unchanged');
        $affirm.strictEqual(rx1.global, false, 'rx1 global should be unchanged');
        $affirm.strictEqual(rx1.ignoreCase, false, 'rx1 ignoreCase should be unchanged');
        $affirm.strictEqual(rx1.multiline, false, 'rx1 multiline should be unchanged');
        $affirm.strictEqual(rx1.lastIndex, 0, 'rx1 lastIndex should be unchanged');

        $affirm.doesNotThrow(function () {
          index = $call(pSearch, testStr, rx2);
        }, 'should not throw performing search rx2');

        $affirm.strictEqual(index, 2, 'rx2 gives correct index');
        $affirm.strictEqual(rx2.source, 'c', 'rx2 source should be unchanged');
        $affirm.strictEqual(rx2.global, false, 'rx2 global should be unchanged');
        $affirm.strictEqual(rx2.ignoreCase, false, 'rx2 ignoreCase should be unchanged');
        $affirm.strictEqual(rx2.multiline, false, 'rx2 multiline should be unchanged');
        $affirm.strictEqual(rx2.lastIndex, 0, 'rx2 lastIndex should be unchanged');
      },

      //pass
      function () {
        return pSearch;
      },

      //fail
      function () {
        return function (regex) {
          var str = $onlyCoercibleToString(this),
            result = -1,
            match,
            rx;

          if ($isRegExp(regex)) {
            rx = copyRegExp(regex, {
              remove: 'gy'
            });
          } else {
            if (typeof regex === 'undefined') {
              regex = '';
            }

            rx = new CRegExp($toString(regex));
          }

          match = $exec(rx, str);
          if (match) {
            result = $toNumber(match.index);
          }

          return result;
        };
      },

      // message
      'String.search shim'
    );

    /**
     * Executes a search for a match between a regular expression and this String object.
     *
     * @function module:util-x~exports.String.search
     * @param {string} stringArg String to search.
     * @param {RegExp|string} regex A regular expression object. If a non-RegExp object obj is passed,
     *                              it is implicitly converted to a RegExp by using new RegExp(obj).
     * @return {Number} If successful, returns the index of the first match of the regular
     *                   expression inside the string. Otherwise, it returns -1.
     */
    exports.String.search = $toMethod(exports.String.proto.search);



    exports.String.proto.indexOf = base.String.indexOf;

    spIndexOf = exports.String.proto.indexOf;

    exports.String.indexOf = $toMethod(exports.String.proto.indexOf);

    exports.String.proto.lastIndexOf = base.String.lastIndexOf;

    spLastIndexOf = exports.String.proto.lastIndexOf;

    exports.String.lastIndexOf = $toMethod(exports.String.proto.lastIndexOf);


    /**
     * This method returns the index within the calling String object of
     * the first occurrence of the specified value, starting the search at
     * fromIndex. Returns -1 if the value is not found.
     *
     * @function module:util-x~exports.String.proto.searchOf
     * @this {string}
     * @param {RegExp|string} regex A regular expression object or a String.
     *                              Anything else is implicitly converted to
     *                              a String.
     * @param {Number} [fromIndex] The location within the calling string
     *                             to start the search from. It can be any
     *                             integer. The default value is 0. If
     *                             fromIndex < 0 the entire string is
     *                             searched (same as passing 0). If
     *                             fromIndex >= str.length, the method will
     *                             return -1 unless searchValue is an empty
     *                             string in which case str.length is
     *                             returned.
     * @return {Number} If successful, returns the index of the first
     *                   match of the regular expression inside the
     *                   string. Otherwise, it returns -1.
     */
    exports.String.proto.searchOf = function (regex) {
      var str = $onlyCoercibleToString(this),
        result = -1,
        fromIndex,
        match,
        rx;

      if (!$isRegExp(regex)) {
        return $apply(spIndexOf, str, arguments);
      }

      rx = copyRegExp(regex, {
        add: 'g',
        remove: 'y'
      });

      if ($toLength(arguments.length) > 1) {
        fromIndex = $toNumber(arguments[1]);
        if (fromIndex < 0) {
          fromIndex = 0;
        }
      } else {
        fromIndex = 0;
      }

      if (fromIndex >= $toLength(str.length)) {
        return result;
      }

      rx.lastIndex = fromIndex;
      match = $exec(rx, str);
      if (match) {
        result = $toNumber(match.index);
      }

      return result;
    };

    /**
     * This method returns the index within the calling String object of
     * the first occurrence of the specified value, starting the search at
     * fromIndex. Returns -1 if the value is not found.
     *
     * @function module:util-x~exports.String.searchOf
     * @param {string} stringArg String to search.
     * @param {RegExp|string} regex A regular expression object or a String.
     *                              Anything else is implicitly converted to
     *                              a String.
     * @param {Number} [fromIndex] The location within the calling string
     *                             to start the search from. It can be any
     *                             integer. The default value is 0. If
     *                             fromIndex < 0 the entire string is
     *                             searched (same as passing 0). If
     *                             fromIndex >= str.length, the method will
     *                             return -1 unless searchValue is an empty
     *                             string in which case str.length is
     *                             returned.
     * @return {Number} If successful, returns the index of the first
     *                   match of the regular expression inside the
     *                   string. Otherwise, it returns -1.
     */
    exports.String.searchOf = $toMethod(exports.String.proto.searchOf);

    /**
     * This method returns the index within the calling String object of
     * the last occurrence of the specified value, or -1 if not found.
     * The calling string is searched backward, starting at fromIndex.
     *
     * @function
     * @this {string}
     * @param {RegExp|string} regex A regular expression object or a String.
     *                              Anything else is implicitly converted to
     *                              a String.
     * @param {Number} [fromIndex] Optional. The location within the
     *                             calling string to start the search at,
     *                             indexed from left to right. It can be
     *                             any integer. The default value is
     *                             str.length. If it is negative, it is
     *                             treated as 0. If fromIndex > str.length,
     *                             fromIndex is treated as str.length.
     * @return {Number} If successful, returns the index of the first
     *                   match of the regular expression inside the
     *                   string. Otherwise, it returns -1.
     */
    exports.String.proto.searchLastOf = function (regex) {
      var str = $onlyCoercibleToString(this),
        result = -1,
        arg1,
        numPos,
        fromIndex,
        length,
        match,
        pos,
        rx;

      if (!$isRegExp(regex)) {
        return $apply(spLastIndexOf, str, arguments);
      }

      rx = copyRegExp(regex, {
        add: 'g',
        remove: 'y'
      });

      arg1 = arguments[1];
      numPos = $toNumber(arg1);
      length = $toLength(str.length);
      if (numPos !== numPos) {
        fromIndex = length;
      } else {
        if ($toLength(arguments.length) > 1) {
          fromIndex = $toInteger(arg1);
        } else {
          fromIndex = length - 1;
        }
      }

      if (fromIndex >= 0) {
        fromIndex = $min(fromIndex, length - 1);
      } else {
        fromIndex = 0;
      }

      pos = 0;
      while (pos <= fromIndex) {
        rx.lastIndex = pos;
        match = $exec(rx, str);
        if (!match) {
          break;
        }

        pos = $toNumber(match.index);
        if (pos <= fromIndex) {
          result = pos;
        }

        pos += 1;
      }

      return result;
    };

    /**
     * This method returns the index within the calling String object of
     * the last occurrence of the specified value, or -1 if not found.
     * The calling string is searched backward, starting at fromIndex.
     *
     * @function module:util-x~exports.String.searchLastOf
     * @param {string} stringArg
     * @param {RegExp|string} regex A regular expression object or a String.
     *                              Anything else is implicitly converted to
     *                              a String.
     * @param {Number} [fromIndex] Optional. The location within the
     *                             calling string to start the search at,
     *                             indexed from left to right. It can be
     *                             any integer. The default value is
     *                             str.length. If it is negative, it is
     *                             treated as 0. If fromIndex > str.length,
     *                             fromIndex is treated as str.length.
     * @return {Number} If successful, returns the index of the first
     *                   match of the regular expression inside the
     *                   string. Otherwise, it returns -1.
     */
    exports.String.searchLastOf = $toMethod(exports.String.proto.searchLastOf);

    /**
     * This method chunks a string into an array of strings of a specified
     * chunk size.
     *
     * @function module:util-x~exports.String.proto.chunk
     * @this {string} The string to be chunked.
     * @param {Number} chunkSize The size of the chunks that the string will
     *                           be chunked into.
     * @return {Array} Returns an array of the chunked string.
     */
    exports.String.proto.chunk = function (chunkSize) {
      var str = $onlyCoercibleToString(this),
        chunkLength = $toInteger(chunkSize),
        chunked = [],
        numChunks,
        length,
        index,
        start,
        end;

      if (chunkLength < 1) {
        return chunked;
      }

      length = $toLength(str.length);
      numChunks = $ceil(length / chunkLength);
      index = 0;
      start = 0;
      end = chunkLength;
      chunked.length = numChunks;
      while (index < numChunks) {
        chunked[index] = $sSlice(str, start, end);
        start = end;
        end += chunkLength;
        index += 1;
      }

      return chunked;
    };

    /**
     * This method chunks a string into an array of strings of a specified
     * chunk size.
     *
     * @function module:util-x~exports.String.chunk
     * @param {string} stringArg The string to be chunked.
     * @param {Number} chunkSize The size of the chunks that the string will
     *                           be chunked into.
     * @return {Array} Returns an array of the chunked string.
     */
    exports.String.chunk = $toMethod(exports.String.proto.chunk);

    /**
     * Splits a String object into an array of strings by separating the string into substrings.
     *
     * @function module:util-x~exports.String.proto.split
     * @this {string} stringArg
     * @param {string|RegExp}} [separator]
     * @param {number} [limit]
     * @return {Array.<string>}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     */
    exports.String.proto.split = $decide(
      // test
      function () {
        $affirmBasic(pSplit)();

        $affirm.throws(function () {
          $call(pSplit);
        }, CTypeError, 'should throw if no arguments');

        $affirm.throws(function () {
          $call(pSplit, Undefined);
        }, CTypeError, 'should throw if argument is undefined');

        $affirm.throws(function () {
          $call(pSplit, null);
        }, CTypeError, 'should throw if argument is null');

        $affirm.deepEqual($call(pSplit, 'abcdef', ''), ['a', 'b', 'c', 'd', 'e', 'f'], 'should not throw on basic tests');
        $affirm.deepEqual($call(pSplit, 'abcdefabcdefabcdef', 'c'), ['ab', 'defab', 'defab', 'def'], 'should not throw on basic tests');
        $affirm.deepEqual($call(pSplit, 'abcdefabcdefabcdef', new CRegExp('c')), ['ab', 'defab', 'defab', 'def'], 'should not throw on basic tests');
        $affirm.deepEqual($call(pSplit, 'ab'), ['ab'], 'If "separator" is undefined must return Array with one String - "this" string');
        $affirm.deepEqual($call(pSplit, 'ab', Undefined), ['ab'], 'If "separator" is undefined must return Array with one String - "this" string');
        $affirm.deepEqual($call(pSplit, ''), [''], '(\'\') results in [\'\']');
        $affirm.deepEqual($call(pSplit, '', new CRegExp('.')), [''], '(\'\', /./) results in [\'\']');
        $affirm.deepEqual($call(pSplit, '', new CRegExp('.?')), [], '(\'\', /.?/) results in []');
        $affirm.deepEqual($call(pSplit, '', new CRegExp('.??')), [], '(\'\', /.??/) results in []');
        $affirm.deepEqual($call(pSplit, 'ab', /a*/), ['', 'b'], '(\'ab\', /a*/) results in [\'\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'ab', /a*?/), ['a', 'b'], '(\'ab\', /a*?/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'ab', /(?:ab)/), ['', ''], '(\'ab\', /(?:ab)/) results in [\'\', \'\']');
        $affirm.deepEqual($call(pSplit, 'ab', /(?:ab)*/), ['', ''], '(\'ab\', /(?:ab)*/) results in [\'\', \'\']');
        $affirm.deepEqual($call(pSplit, 'ab', /(?:ab)*?/), ['a', 'b'], '(\'ab\', /(?:ab)*?/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'test', ''), ['t', 'e', 's', 't'], '(\'test\', \'\') results in [\'t\', \'e\', \'s\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'test'), ['test'], '(\'test\', ) results in [\'test\']');
        $affirm.deepEqual($call(pSplit, '111', 1), ['', '', '', ''], '(\'111\', 1) results in [\'\', \'\', \'\', \'\']');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, 2), ['t', 'e'], '(\'test\', /(?:)/, 2) results in [\'t\', \'e\']');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, -1), [], '(\'test\', /(?:)/, -1) results in []');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, Undefined), ['t', 'e', 's', 't'], '(\'test\', /(?:)/, undefined) results in [\'t\', \'e\', \'s\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, null), [], '(\'test\', /(?:)/, null) results in []');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, NaN), [], '(\'test\', /(?:)/, NaN) results in []');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, true), ['t'], '(\'test\', /(?:)/, true) results in [\'t\']');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, '2'), ['t', 'e'], '(\'test\', /(?:)/, \'2\') results in [\'t\', \'e\']');
        $affirm.deepEqual($call(pSplit, 'test', /(?:)/, 'two'), [], '(\'test\', /(?:)/, \'two\') results in []');
        $affirm.deepEqual($call(pSplit, 'a', /-/), ['a'], '(\'a\', /-/) results in [\'a\']');
        $affirm.deepEqual($call(pSplit, 'a', /-?/), ['a'], '(\'a\', /-?/) results in [\'a\']');
        $affirm.deepEqual($call(pSplit, 'a', /-??/), ['a'], '(\'a\', /-??/) results in [\'a\']');
        $affirm.deepEqual($call(pSplit, 'a', /a/), ['', ''], '(\'a\', /a/) results in [\'\', \'\']');
        $affirm.deepEqual($call(pSplit, 'a', /a?/), ['', ''], '(\'a\', /a?/) results in [\'\', \'\']');
        $affirm.deepEqual($call(pSplit, 'a', /a??/), ['a'], '(\'a\', /a??/) results in [\'a\']');
        $affirm.deepEqual($call(pSplit, 'ab', /-/), ['ab'], '(\'ab\', /-/) results in [\'ab\']');
        $affirm.deepEqual($call(pSplit, 'ab', /-?/), ['a', 'b'], '(\'ab\', /-?/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'ab', /-??/), ['a', 'b'], '(\'ab\', /-??/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a-b', /-/), ['a', 'b'], '(\'a-b\', /-/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a-b', /-?/), ['a', 'b'], '(\'a-b\', /-?/) results in [\'a\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a-b', /-??/), ['a', '-', 'b'], '(\'a-b\', /-??/) results in [\'a\', \'-\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a--b', /-/), ['a', '', 'b'], '(\'a--b\', /-/) results in [\'a\', \'\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a--b', /-?/), ['a', '', 'b'], '(\'a--b\', /-?/) results in [\'a\', \'\', \'b\']');
        $affirm.deepEqual($call(pSplit, 'a--b', /-??/), ['a', '-', '-', 'b'], '(\'a--b\', /-??/) results in [\'a\', \'-\', \'-\', \'b\']');
        $affirm.deepEqual($call(pSplit, '', /()()/), [], '(\'\', /()()/) results in []');
        $affirm.deepEqual($call(pSplit, '.', /()()/), ['.'], '(\'.\', /()()/) results in [\'.\']');
        $affirm.deepEqual($call(pSplit, '.', new CRegExp('(.?)(.?)')), ['', '.', '', ''], '(\'.\', /(.?)(.?)/) results in [\'\', \'.\', \'\', \'\']');
        $affirm.deepEqual($call(pSplit, '.', new CRegExp('(.??)(.??)')), ['.'], '(\'.\', /(.??)(.??)/) results in [\'.\']');

        var arrCmp = [];

        arrCmp.length = 4;
        arrCmp[0] = '';
        arrCmp[1] = '.';
        arrCmp[2] = Undefined;
        arrCmp[3] = '';

        $affirm.deepEqual($call(pSplit, '.', new CRegExp('(.)?(.)?')), arrCmp, '(\'.\', /(.)?(.)?/) results in [\'\', \'.\', undefined, \'\']');

        arrCmp = [];
        arrCmp.length = 13;
        arrCmp[0] = 'A';
        arrCmp[1] = Undefined;
        arrCmp[2] = 'B';
        arrCmp[3] = 'bold';
        arrCmp[4] = '/';
        arrCmp[5] = 'B';
        arrCmp[6] = 'and';
        arrCmp[7] = Undefined;
        arrCmp[8] = 'CODE';
        arrCmp[9] = 'coded';
        arrCmp[10] = '/';
        arrCmp[11] = 'CODE';
        arrCmp[12] = '';

        $affirm.deepEqual($call(pSplit, 'A<B>bold</B>and<CODE>coded</CODE>'), arrCmp, '(\'A<B>bold</B>and<CODE>coded</CODE>\', /<(\\/)?([^<>]+)>/) results in [\'A\', undefined, \'B\', \'bold\', \'/\', \'B\', \'and\', undefined, \'CODE\', \'coded\', \'/\', \'CODE\', \'\']');

        arrCmp = [];
        arrCmp.length = 5;
        arrCmp[0] = 't';
        arrCmp[1] = Undefined;
        arrCmp[2] = 'e';
        arrCmp[3] = 's';
        arrCmp[4] = 'e';

        $affirm.deepEqual($call(pSplit, 'tesst', /(s)*/), arrCmp, '(\'test\', /(s)*/) results in [\'t\', undefined, \'e\', \'s\', \'t\']');

        arrCmp = [];
        arrCmp.length = 7;
        arrCmp[0] = 't';
        arrCmp[1] = Undefined;
        arrCmp[2] = 'e';
        arrCmp[3] = Undefined;
        arrCmp[4] = 's';
        arrCmp[5] = Undefined;
        arrCmp[6] = 'e';

        $affirm.deepEqual($call(pSplit, 'tesst', /(s)*?/), arrCmp, '(\'test\', /(s)*?/) results in [\'t\', undefined, \'e\', undefined, \'s\', undefined, \'s\', undefined, \'t\']');
        $affirm.deepEqual($call(pSplit, 'tesst', /(s*)/), ['t', '', 'e', 'ss', 't'], '(\'test\', /(s*)/) results in [\'t\', \'\', \'e\', \'ss\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'tesst', /(s*?)/), ['t', '', 'e', '', 's', '', 's', '', 't'], '(\'test\', /(s*?)/) results in [\'t\', \'\', \'e\', \'\', \'s\', \'\', \'s\', \'\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'tesst', /(?:s)*/), ['t', 'e', 't'], '(\'test\', /(?:s)*/) results in [\'t\', \'e\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'tesst', /(?=s+)/), ['te', 's', 'st'], '(\'test\', /(?=s+)/) results in [\'te\', \'s\', \'st\']');
        $affirm.deepEqual($call(pSplit, 'test', 't'), ['', 'es', ''], '(\'test\', \'t\') results in [\'\', \'es\', \'\']');
        $affirm.deepEqual($call(pSplit, 'test', 'es'), ['t', 't'], '(\'test\', \'es\') results in [\'t\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'test', /t/), ['', 'es', '']);
        $affirm.deepEqual($call(pSplit, 'test', /es/), ['t', 't'], '(\'test\', /es/) results in [\'t\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'test', /(t)/), ['', 't', 'es', 't', ''], '(\'test\', /(t)/) results in [\'\', \'t\', \'es\', \'t\', \'\']');
        $affirm.deepEqual($call(pSplit, 'test', /(es)/), ['t', 'es', 't'], '(\'test\', /(es)/) results in [\'t\', \'es\', \'t\']');
        $affirm.deepEqual($call(pSplit, 'test', /(t)(e)(s)(t)/), ['', 't', 'e', 's', 't', ''], '(\'test\', /(t)(e)(s)(t)/) results in [\'\', \'t\', \'e\', \'s\', \'t\', \'\']');
        $affirm.deepEqual($call(pSplit, '.', new CRegExp('(((.((.??)))))')), ['', '.', '.', '.', '', '', ''], '(\'.\', /(((.((.??)))))/) results in [\'\', \'.\', \'.\', \'.\', \'\', \'\', \'\']');
        $affirm.deepEqual($call(pSplit, '.', new CRegExp('(((((.??)))))')), ['.'], '(\'.\', /(((((.??)))))/) results in [\'.\']');
        $affirm.deepEqual($call(pSplit, 'a b c d', / /, -($pow(2, 32) - 1)), [], '(\'a b c d\', / /, -(Math.pow(2, 32) - 1)) results in []');
        $affirm.deepEqual($call(pSplit, 'a b c d', / /, $pow(2, 32) + 1), ['a', 'b', 'c', 'd'], '(\'a b c d\', / /, Math.pow(2, 32) + 1) results in []');
        $affirm.deepEqual($call(pSplit, 'a b c d', / /, INFINITY), ['a', 'b', 'c', 'd'], '(\'a b c d\', / /, INFINITY) results in []');
      },

      // pass
      function () {
        return $decide(
          // test
          function () {
            $affirm.deepEqual($call(pSplit, 'ab', Undefined, 0), [], 'If "separator" is undefined and "limit" set to 0 must return Array[]');
          },

          // pass
          function () {
            return pSplit;
          },

          // fail
          function () {
            return function (separator, limit) {
              var isUndef,
                val;

              // "0".split(undefined, 0) -> []
              if (typeof separator === 'undefined' && limit === 0) {
                val = [];
              } else {
                isUndef = typeof limit === 'undefined';
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
          },

          // message
          'String.split patch 2'
        );
      },

      // fail
      function () {
        function search(str, regex, pos) {
          var r2 = copyRegExp(regex, {
              add: 'g',
              remove: 'y'
            }),
            match;

          r2.lastIndex = pos;
          match = $exec(r2, str);
          if (regex.global) {
            if (match) {
              regex.lastIndex = $toNumber(r2.lastIndex);
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
            match,
            length,
            mIndex,
            m0Len,
            slc,
            idx,
            len;

          // "0".split(undefined, 0) -> []
          if (typeof separator === 'undefined' && limit === 0) {
            output = [];
          } else {
            isUndef = typeof limit === 'undefined';
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
              origLastIndex = $toNumber(separator.lastIndex);
              lastLastIndex = 0;
              length = $toLength(str.length);
              match = search(str, separator, 0);
              while (match) {
                mIndex = $toNumber(match.index);
                m0Len = $toLength(match[0].length);
                // This condition is not the same as `if (match[0].length)`
                if ((mIndex + m0Len) > lastLastIndex) {
                  $push(output, $sSlice(str, lastLastIndex, mIndex));
                  if ($toLength(match.length) > 1 && mIndex < length) {
                    slc = $slice(match, 1);
                    len = $toLength(slc.length);
                    for (idx = 0; idx < len; idx += 1) {
                      if ($hasProperty(slc, idx)) {
                        $push(output, slc[idx]);
                      } else {
                        output.length += 1;
                      }
                    }
                  }

                  lastLength = m0Len;
                  lastLastIndex = mIndex + lastLength;
                }

                match = search(str, separator, mIndex + (m0Len || 1));
              }

              if (lastLastIndex === length) {
                if (!$test(separator, '') || lastLength) {
                  $push(output, '');
                }
              } else {
                $push(output, $sSlice(str, lastLastIndex));
              }

              separator.lastIndex = origLastIndex;
              if ($toLength(output.length) > limit) {
                output = $slice(output, 0, limit);
              }
            }
          }

          return output;
        };
      },

      // message
      'String.split patch 1'
    );

    /**
     * Splits a String object into an array of strings by separating the string into subbase.str.
     *
     * @function module:util-x~exports.String.split
     * @param {string} stringArg
     * @param {string|RegExp}} [separator]
     * @param {number} [limit]
     * @return {Array.<string>}
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split
     */
    exports.String.split = $toMethod(exports.String.proto.split);

    /**
     * Splits a String object into an array of strings by separating the string into subbase.str.
     *
     * @private
     * @function module:util-x~$split
     * @param {string} stringArg
     * @param {string|RegExp}} [separator]
     * @param {number} [limit]
     * @return {Array.<string>}
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
     * @return {string} New string with one or all matches replaced.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     */
    exports.String.proto.replace = $decide(
      // test
      function () {
        $affirmBasic(pReplace)();

        $affirm.throws(function () {
          $call(pReplace);
        }, CTypeError, 'should throw if no arguments');

        $affirm.throws(function () {
          $call(pReplace, Undefined);
        }, CTypeError, 'should throw if argument is undefined');


        $affirm.throws(function () {
          $call(pReplace, null);
        }, CTypeError, 'should throw if argument is null');

        $affirm.strictEqual($call(pReplace, 'aaa', /a/, 'b'), 'baa', 'should replace the first match only when given a nonglobal regex');
        $affirm.strictEqual($call(pReplace, 'aaa', /a/g, 'b'), 'bbb', 'should replace all matches when given a global regex');
        $affirm.strictEqual($call(pReplace, 'aaa', 'a', 'b'), 'baa', 'should replace the first match only when given a string as the search pattern');
        $affirm.strictEqual($call(pReplace, 'aaa', 'a(a)', 'b'), 'aaa', 'should not type convert a string search pattern to a regex');
        $affirm.strictEqual($call(pReplace, 'a(a)a', 'a(a)', 'b'), 'ba', 'should not type convert a string search pattern to a regex');
        $affirm.strictEqual($call(pReplace, 'aaa', /a(a)/, '$1b', 'should handle single-digit backreference $1 in the replacement string'), 'aba');
        // Backreference to a nonparticipating capturing group
        $affirm.strictEqual($call(pReplace, 'test', /t|(e)/g, '$1'), 'es', 'should handle single-digit backreference $1 in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', /a(a)/, '$01b'), 'aba', 'should handle double-digit backreferences $01, $10, and $99 in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', new CRegExp('a' + $repeat('()', 9) + '(a)'), '$10b'), 'aba', 'should handle double-digit backreferences $01, $10, and $99 in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', new CRegExp('a' + $repeat('()', 98) + '(a)'), '$99b'), 'aba', 'should handle double-digit backreferences $01, $10, and $99 in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', new CRegExp('a' + $repeat('()', 99) + '(a)'), '$100b'), '0ba', 'should end backreferences in the replacement string after two digits');
        // NOTE: IE < 9 incorrectly treats all occurrences of $ as literal text when performing a
        // replacement based on a search value that is not a regex.
        $affirm.strictEqual($call(pReplace, 'aaa', /aa/, '$&b'), 'aaba', 'should handle backreference $& in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', 'aa', '$&b'), 'aaba', 'should handle backreference $& in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', /aa/, '$\'b'), 'aba', 'should handle right context token $\' in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', 'aa', '$\'b'), 'aba', 'should handle right context token $\' in the replacement string');
        $affirm.strictEqual($call(pReplace, 'xaaa', /aa/, '$`b'), 'xxba', 'should handle left context token $` in the replacement string');
        $affirm.strictEqual($call(pReplace, 'xaaa', 'aa', '$`b'), 'xxba', 'should handle left context token $` in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', /aa/, '$$b'), '$ba', 'should handle token $$ in the replacement string');
        $affirm.strictEqual($call(pReplace, 'aaa', 'aa', '$$b'), '$ba', 'should handle token $$ in the replacement string');

        $affirm.strictEqual($call(pReplace, 'aaa', /a/, function () {
          return 'b';
        }), 'baa', 'should allow a function to generate the replacement');

        $affirm.strictEqual($call(pReplace, 'aaa', /a/g, function () {
          return 'b';
        }), 'bbb', 'should allow a function to generate the replacement');

        $affirm.strictEqual($call(pReplace, 'aaa', 'a', function () {
          return 'b';
        }), 'baa', 'should allow a function to generate the replacement');

        $affirm.strictEqual($call(pReplace, 'aaa', /aa/, function ($0) {
          return $0 + 'b';
        }), 'aaba', 'should allow using backreferences with replacement functions');

        /*jshint -W098 */
        $affirm.strictEqual($call(pReplace, 'aaa', /a(a)/, function ($0, $1) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return $1 + 'b';
        }), 'aba', 'should allow using backreferences with replacement functions');
        /*jshint +W098 */

        $affirm.strictEqual($call(pReplace, 'aaa', 'aa', function ($0) {
          return $0 + 'b';
        }), 'aaba', 'should allow using backreferences with replacement functions');

        // Regex search...
        /*jshint -W098 */
        $affirm.strictEqual($call(pReplace, 'aaa', /a(a)/, function ($0, $1) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return '$1';
        }), '$1a', 'should not substitute tokens returned by replacement functions');
        /*jshint +W098 */

        $affirm.strictEqual($call(pReplace, 'aaa', /a/, function () {
          return '$&';
        }), '$&aa', 'should not substitute tokens returned by replacement functions');

        /*jshint -W098 */
        $affirm.strictEqual($call(pReplace, 'xaaa', /a/, function ($0, pos) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return $toString(pos);
        }), 'x1aa', 'should allow using the match position within replacement functions');

        $affirm.strictEqual($call(pReplace, 'xaaa', /a/g, function ($0, pos) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return $toString(pos);
        }), 'x123', 'should allow using the match position within replacement functions');

        $affirm.strictEqual($call(pReplace, 'xaaa', /(a)/g, function ($0, $1, pos) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return $toString(pos);
        }), 'x123', 'should allow using the match position within replacement functions');

        $affirm.strictEqual($call(pReplace, 'xaaa', 'a', function ($0, pos) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return $toString(pos);
        }), 'x1aa', 'should allow using the match position within replacement functions');
        /*jshint +W098 */

        /*jshint -W098 */
        $affirm.strictEqual($call(pReplace, 'xaaa', /a/, function ($0, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return str;
        }), 'xxaaaaa', 'should allow using the source string within replacement functions');

        $affirm.strictEqual($call(pReplace, 'xaaa', /(a)/, function ($0, $1, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return str;
        }), 'xxaaaaa', 'should allow using the source string within replacement functions');

        $affirm.strictEqual($call(pReplace, 'xaaa', 'a', function ($0, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return str;
        }), 'xxaaaaa', 'should allow using the source string within replacement functions');
        /*jshint +W098 */

        // NOTE: This tests for IE < 9, which doesn't get this correct natively
        /*jshint -W098 */
        $affirm.strictEqual($call(pReplace, '100', /0/, function ($0, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return typeof str;
        }), '1string0', 'should return string as the typeof the last argument in replacement functions');

        /*jshint -W053 */
        $affirm.strictEqual($call(pReplace, new CString('100'), /0/, function ($0, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return typeof str;
        }), '1string0', 'should return string as the typeof the last argument in replacement functions');
        /*jshint +W053 */

        $affirm.strictEqual($call(pReplace, 100, /0/, function ($0, pos, str) {
          /*jslint unparam: true */
          /*jshint unused: false */
          return typeof str;
        }), '1string0', 'should return string as the typeof the last argument in replacement functions');
        /*jshint +W098 */

        $affirm.strictEqual($call(pReplace, 0, /^/, '$`'), '0', 'should handle nonstring context when using a replacement text token that references the subject text');

        var regex = /x/,
          interimLastIndex,
          values,
          value,
          length,
          index;

        $call(pReplace, '123x567', regex, '_');
        $affirm.strictEqual(regex.lastIndex, 0, 'should not modify the lastIndex of a nonglobal regex');

        regex.lastIndex = 1;
        $call(pReplace, '123x567', regex, '_');
        $affirm.strictEqual(regex.lastIndex, 1, 'should not modify the lastIndex of a nonglobal regex');

        $call(pReplace, 'nomatch', regex, '_');
        $affirm.strictEqual(regex.lastIndex, 1, 'should not modify the lastIndex of a nonglobal regex');

        regex = /x/g;

        regex.lastIndex = 1;
        $call(pReplace, '123x567', regex, '_');
        $affirm.strictEqual(regex.lastIndex, 0, 'should reset the lastIndex of a global regex to 0');

        regex.lastIndex = 1;
        $call(pReplace, 'nomatch', regex, '_');
        $affirm.strictEqual(regex.lastIndex, 0, 'should reset the lastIndex of a global regex to 0');

        regex = /x/;
        regex.lastIndex = 5;
        $affirm.strictEqual($call(pReplace, '123x567', regex, '_'), '123_567', 'should ignore lastIndex when setting the search start position');

        regex = /x/g;
        regex.lastIndex = 5;
        $affirm.strictEqual($call(pReplace, '123x567', regex, '_'), '123_567', 'should ignore lastIndex when setting the search start position');

        regex = /x/g;
        interimLastIndex = 0;

        $call(pReplace, '1x2', regex, function () {
          interimLastIndex = regex.lastIndex;
        });

        $affirm.strictEqual(interimLastIndex, 2, 'should update lastIndex during replacement iterations');

        values = [{
          target: '10x10',
          search: 10,
          replacement: 'x',
          expected: 'xx10'
        }, {
          target: 'xaaa,ba,b',
          search: ['a', 'b'],
          replacement: 'x',
          expected: 'xaaxa,b'
        }, {
          target: 'undefined',
          search: undefined,
          replacement: 'x',
          expected: 'x'
        }];

        length = $toLength(values.length);
        for (index = 0; index < length; index += 1) {
          value = values[index];
          $affirm.strictEqual($call(pReplace, value.target, value.search, value.replacement), value.expected, 'should convert any provided nonstring search to a string');
        }

        // Implicit undefined search and replacement
        $affirm.strictEqual($call(pReplace, 'undefined'), 'undefined', 'should convert any provided nonstring search to a string');

        values = [{
          target: 'xaaa',
          search: /a/g,
          replacement: 1.1,
          expected: 'x1.11.11.1'
        }, {
          target: 'xaaa',
          search: /a/g,
          replacement: ['a', 'b'],
          expected: 'xa,ba,ba,b'
        }, {
          target: 'x',
          search: /x/,
          replacement: /x/,
          expected: '/x/'
        }, {
          target: 'xaaa',
          search: /a/,
          replacement: undefined,
          expected: 'xundefinedaa'
        }];

        length = $toLength(values.length);
        for (index = 0; index < length; index += 1) {
          value = values[index];
          $affirm.strictEqual($call(pReplace, value.target, value.search, value.replacement), value.expected, 'should convert any provided nonstring/nonfunction replacement to a string');
        }

        // Implicit undefined replacement
        $affirm.strictEqual($call(pReplace, 'xaaa', /a/), 'xundefinedaa', 'should convert any provided nonstring/nonfunction replacement to a string');

        values = [
          100, {},
          true,
          false,
          NaN, ['a']
        ];

        length = $toLength(values.length);
        for (index = 0; index < length; index += 1) {
          value = values[index];
          $affirm.strictEqual($call(pReplace, value, /^/, 'x'), 'x' + value, 'should convert any nonstring context to a string (except null and undefined)');
        }
      },

      // pass
      function () {
        return pReplace;
      },

      // fail
      function () {
        return function (search, replacement) {
          var str = $onlyCoercibleToString(this),
            isRegex = $isRegExp(search),
            origLastIndex,
            result;

          if (isRegex) {
            // Only needed if `search` is nonglobal
            origLastIndex = $toNumber(search.lastIndex);
          } else {
            // Type-convert
            search = $toString(search);
          }

          // Don't use `typeof`; some older browsers return 'function' for regex objects
          if ($isFunction(replacement)) {
            // Stringifying `this` fixes a bug in IE < 9 where the last argument in replacement
            // functions isn't type-converted to a string
            result = $call(pReplace, str, search, function () {
              var args = $argSlice(arguments);

              args[2] = $toString(args[2]);

              // Update `lastIndex` before calling `replacement`. Fixes IE, Chrome, Firefox,
              // Safari bug (last tested IE 9, Chrome 17, Firefox 11, Safari 5.1)
              if (isRegex && search.global) {
                search.lastIndex = args[$toLength(args.length) - 2] + arguments[0].length;
              }

              // Should pass `undefined` as context; see
              // <https://bugs.ecmascript.org/show_bug.cgi?id=154>
              return $apply(replacement, Undefined, args);
            });
          } else {
            // Ensure that the last value of `args` will be a string when given nonstring `this`,
            // while still throwing on `null` or `undefined` context
            result = $call(pReplace, str, search, function () {
              // Keep this function's `arguments` available through closure
              var args = arguments,
                length = $toLength(arguments.length);

              return $call(pReplace, $toString(replacement), replacementToken, function () {
                var $2 = $toString(arguments[2]);

                // Special variable or numbered backreference without curly braces
                // $$
                if ($2 === '$') {
                  return '$';
                }

                // $&, $0 (not followed by 1-9), $00
                if ($2 === '&' || $toNumber($2) === 0) {
                  return args[0];
                }

                // $` (left context)
                if ($2 === '`') {
                  return $sSlice(args[2], 0, $toNumber(args[1]));
                }

                // $' (right context)
                if ($2 === '\'') {
                  return $sSlice(args[2], $toNumber(args[1]) + $toLength(args[0].length));
                }

                // Numbered backreference without curly braces
                // Type-convert; drop leading zero
                $2 = $toNumber($2);
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
                    throw new CSyntaxError('Backreference to undefined group ' + $toString(arguments[0]));
                  }

                  return args[$2] || '';
                }

                throw new CSyntaxError('Invalid token ' + $toString(arguments[0]));
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
      },

      // message
      'String.replace patch'
    );

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
     * @return {string} New string with one or all matches replaced.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace
     */
    exports.String.replace = $toMethod(exports.String.proto.replace);

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
     * @return {string} New string with one or all matches replaced.
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
     * @return {string}
     */
    exports.String.proto.replaceAll = function (pattern, characters) {
      if ($isString(pattern)) {
        pattern = new CRegExp($replace($onlyCoercibleToString(pattern), escapeThese, '\\$&'), 'g');
      } else if ($isRegExp(pattern)) {
        pattern = copyRegExp(pattern, {
          add: 'g'
        });
      }

      if (!$isString(characters) && !$isNumber(characters)) {
        characters = '';
      } else {
        characters = $toString(characters);
      }

      return $replace($onlyCoercibleToString(this), pattern, characters);
    };

    /**
     * This {@link module:util-x~boundPrototypalFunction method} replaces all occurences of a string pattern within
     * a string with the string characters.
     *
     * @function module:util-x~exports.String.replaceAll
     * @param {string} string
     * @throws {Error} an If the argument can not be coerced, i.e. null or undefined.
     * @param {(string|RegExp)} pattern
     * @param {string} characters
     * @return {string}
     */
    exports.String.replaceAll = $toMethod(exports.String.proto.replaceAll);

    /**
     * Fixes browser bugs in the native `String.prototype.match`.
     *
     * @function module:util-x~exports.String.proto.match
     * @this {string}
     * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
     * @return {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
     * the result of calling `$exec(regExpArg)`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     */
    exports.String.proto.match = $decide(
      // test
      function () {
        $affirmBasic(pMatch)();

        $affirm.throws(function () {
          $call(pMatch);
        }, CTypeError, 'should throw if no arguments');

        $affirm.throws(function () {
          $call(pMatch, Undefined);
        }, CTypeError, 'should throw if argument is undefined');

        $affirm.throws(function () {
          $call(pMatch, null);
        }, CTypeError, 'should throw if argument is null');

        // https://github.com/es-shims/es5-shim/issues/293
        /*jslint regexp: true */
        $affirm.deepEqual($slice($call(pMatch, '4', /(?=(?:...)*$)/)), [''], '"4".match(/(?=(?:...)*$)/) == [""]');
        /*jslint regexp: false */

        $affirm.deepEqual($slice($call(pMatch, 'a bc', /(\w)/g)), ['a', 'b', 'c'], 'should return an array with all matches');
        $affirm.strictEqual($call(pMatch, 'a bc', /x/g), null, 'should return null if no match is found');

        var regex = /x/g,
          tests,
          length,
          index,
          test;

        regex.lastIndex = 1;
        $call(pMatch, '123x5', regex);
        $affirm.strictEqual(regex.lastIndex, 0, 'should reset lastIndex to 0 when a match is found');

        regex = /x/g;
        regex.lastIndex = 1;
        $call(pMatch, '123', regex);
        $affirm.strictEqual(regex.lastIndex, 0, 'should reset lastIndex to 0 when no match is found');

        regex = /x/g;
        regex.lastIndex = 4;
        $affirm.ok($call(pMatch, '123x5', regex), 'should start the search at the beginning of the string, ignoring lastIndex');

        $affirm.deepEqual($slice($call(pMatch, 11, /1/g)), ['1', '1'], 'should convert any nonstring context to a string (except null and undefined)');

        // These don't error because, per the spec, the values are passed through new RegExp()
        // before being used as the context object for the (fixed) RegExp.prototype.exec
        tests = [
          {
            str: '12',
            regex: '^(1)',
            result: ['1', '1']
          },
          // This would throw if the string was converted to an XRegExp rather than RegExp
          {
            str: '\x01',
            regex: '\\1',
            result: ['\x01']
          },
          // The converted value '[object Object]' creates a character class
          {
            str: '[obj]',
            regex: {},
            result: ['o']
          }, {
            str: 'null',
            regex: null,
            result: ['null']
          }
        ];

        length = $toLength(tests.length);
        for (index = 0; index < length; index += 1) {
          test = tests[index];
          $affirm.deepEqual($slice($call(pMatch, test.str, test.regex)), test.result, 'should convert any provided non RegExp object to a RegExp');
        }
      },

      // pass
      function () {
        return pMatch;
      },

      // fail
      function () {
        return function (regExpArg) {
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
      },

      // message
      'String.match patch'
    );

    /**
     * Fixes browser bugs in the native `String.prototype.match`.
     *
     * @function module:util-x~exports.String.match
     * @param {string} stringArg String to search.
     * @param {(RegExp|*)} regExpArg Regex to search with. If not a regex object, it is passed to `RegExp`.
     * @return {Array} If `regex` uses flag g, an array of match strings or `null`. Without flag g,
     * the result of calling `$exec(regExpArg)`.
     * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
     */
    exports.String.match = $toMethod(exports.String.proto.match);
  }());

  /**
   * Coerces its argument to a string and returns the first character of that string.
   * If the argument is an empty string, returns an empty string.
   * Throws an error if the argument can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.proto.first
   * @this {string}
   * @return {string}
   */
  exports.String.proto.first = function () {
    return $getItem($onlyCoercibleToString(this), 0, stringTagString);
  };

  /**
   * Coerces its argument to a string and returns the first character of that string.
   * If the argument is an empty string, returns an empty string.
   * Throws an error if the argument can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.first
   * @param {string} inputArg
   * @return {string}
   */
  exports.String.first = $toMethod(exports.String.proto.first);

  /**
   * Coerces its argument to a string and returns the last character of that string.
   * If the argument is an empty string, returns an empty string.
   * Throws an error if the argument can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.proto.last
   * @this {string}
   * @return {string}
   */
  exports.String.proto.last = function () {
    var str = $onlyCoercibleToString(this);

    return $getItem(str, str.length - 1, stringTagString);
  };

  /**
   * Coerces its argument to a string and returns the last character of that string.
   * If the argument is an empty string, returns an empty string.
   * Throws an error if the argument can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.last
   * @param {string} inputArg
   * @return {string}
   */
  exports.String.last = $toMethod(exports.String.proto.last);

  /**
   * Coerces inputArg to a string and counts the occurences of the argument character.
   * Throws an error if the arguments can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.proto.countCharacter
   * @this {string}
   * @param {string} character
   * @return {number}
   */
  exports.String.proto.countCharacter = function (character) {
    var str = $onlyCoercibleToString(this),
      first = $getItem($onlyCoercibleToString(character), 0, stringTagString),
      val;

    if (first === '') {
      val = INFINITY;
    } else {
      val = $min($max($split(str, first).length - 1, 0), INFINITY);
    }

    return val;
  };

  /**
   * Coerces inputArg to a string and counts the occurences of the argument character.
   * Throws an error if the arguments can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.countCharacter
   * @param {string} inputArg
   * @param {string} character
   * @return {number}
   */
  exports.String.countCharacter = $toMethod(exports.String.proto.countCharacter);

  /**
   * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
   * the string is greater than or Object.equal to the specified length.
   * Throws an error if the arguments can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.proto.padLeadingChar
   * @this {string}
   * @param {string} character
   * @param {number} size
   * @return {string}
   */
  exports.String.proto.padLeadingChar = function (character, size) {
    var string = $onlyCoercibleToString(this),
      singleChar = $getItem($onlyCoercibleToString(character), 0, stringTagString),
      count = $toInteger(size) - string.length;

    if (count < 0 || count === INFINITY) {
      count = 0;
    }

    return exports.String.repeat(singleChar, count) + string;
  };

  /**
   * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
   * the string is greater than or Object.equal to the specified length.
   * Throws an error if the arguments can not be coerced, i.e. null or undefined.
   *
   * @function module:util-x~exports.String.padLeadingChar
   * @param {string} inputArg
   * @param {string} character
   * @param {number} size
   * @return {string}
   */
  exports.String.padLeadingChar = $toMethod(exports.String.proto.padLeadingChar);

  /**
   * Determines whether a string begins with the characters of another string,
   * returning true or false as appropriate.
   *
   * @function module:util-x~exports.String.proto.startsWith
   * @this {string}
   * @param {string} searchString
   * @param {number} [position]
   * @return {boolean}
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

        return $sSlice(thisStr, start, start + searchStr.length) === searchStr;
      };
    },

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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
   */
  exports.String.startsWith = $toMethod(exports.String.proto.startsWith);

  /**
   * Determines whether a string ends with the characters of another string,
   * returning true or false as appropriate.
   *
   * @function module:util-x~exports.String.proto.endsWith
   * @this {string}
   * @param {string} searchString
   * @param {number} [position]
   * @return {boolean}
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

        if (typeof position === 'undefined') {
          position = thisLen;
        } else {
          position = $toInteger(position);
        }

        end = $min($max(position, 0), thisLen);
        start = end - searchStr.length;

        return start >= 0 && $sSlice(thisStr, start, end) === searchStr;
      };
    },

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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/endsWith
   */
  exports.String.endsWith = $toMethod(exports.String.proto.endsWith);

  /**
   * Determines whether a string contains the characters of another string, returning true or
   * false as appropriate.
   *
   * @function module:util-x~exports.String.proto.contains
   * @this {string}
   * @param {string} searchString
   * @param {number} [position]
   * @return {boolean}
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

        if (typeof position === 'undefined') {
          position = 0;
        } else {
          position = $toInteger(position);
        }

        return $call(pSIndexOf, str, searchStr, $min($max(position, 0), length)) !== -1;
      };
    },

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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
   */
  exports.String.contains = $toMethod(exports.String.proto.contains);

  /**
   * Determines whether a string contains the characters of another string, returning true or
   * false as appropriate.
   *
   * @private
   * @function module:util-x~$stringContains
   * @param {string} string
   * @param {string} searchString
   * @param {number} [position]
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/contains
   */
  $stringContains = exports.String.contains;

  /**
   * @private
   * @function module:util-x~$specialToObject
   * @param {module:util-x~ArrayLike} inputArg
   * @return {(boolean|null)}
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
   * @return {boolean}
   */
  exports.Array.isEmpty = function (inputArg) {
    return !$specialToObject(inputArg).length;
  };

  /**
   * Returns the first element of an array i.e. array[0]
   * Use in combination .isEmpty
   *
   * @function module:util-x~exports.Array.proto.first
   * @this {module:util-x~ArrayLike}
   * @return {*}
   */
  exports.Array.proto.first = function () {
    var object = $specialToObject(this);

    return $getItem(object, 0, $isString(object));
  };

  /**
   * Returns the first element of an array i.e. array[0]
   * Use in combination .isEmpty
   *
   * @function module:util-x~exports.Array.first
   * @param {module:util-x~ArrayLike} inputArg
   * @return {*}
   */
  exports.Array.first = $toMethod(exports.Array.proto.first);

  /**
   * Returns the first populated elements index in an array ignoring holes, otherwise -1.
   *
   * @function module:util-x~exports.Array.proto.firstIn
   * @this {module:util-x~ArrayLike}
   * @return {number}
   */
  exports.Array.proto.firstIn = function () {
    var object = $specialToObject(this),
      length = $toLength(object.length),
      rtn = -1,
      index;

    if ($isString(object)) {
      rtn = length - 1;
    } else {
      for (index = 0; index < length; index += 1) {
        if ($hasProperty(object, index)) {
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
   * @return {*}
   */
  exports.Array.firstIn = $toMethod(exports.Array.proto.firstIn);

  /**
   * Returns the last element of an array; otherwise returns undefined.
   *
   * @function module:util-x~exports.Array.proto.last
   * @this {module:util-x~ArrayLike}
   * @return {*}
   */
  exports.Array.proto.last = function () {
    var object = $specialToObject(this);

    return $getItem(object, object.length - 1, $isString(object));
  };

  /**
   * Returns the last element of an array; otherwise returns undefined.
   *
   * @function module:util-x~exports.Array.last
   * @param {module:util-x~ArrayLike} inputArg
   * @return {*}
   */
  exports.Array.last = $toMethod(exports.Array.proto.last);

  /**
   * Returns the last populated elements index of an array ignoring holes, otherwise -1.
   *
   * @function module:util-x~exports.Array.proto.lastIn
   * @this {module:util-x~ArrayLike}
   * @return {*}
   */
  exports.Array.proto.lastIn = function () {
    var object = $specialToObject(this),
      last = $toLength(object.length) - 1,
      rtn = -1,
      index;

    if ($isString(object)) {
      rtn = last;
    } else {
      for (index = last; index >= 0; index -= 1) {
        if ($hasProperty(object, index)) {
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
   * @return {*}
   */
  exports.Array.lastIn = $toMethod(exports.Array.proto.lastIn);

  /**
   * Compares operand a against operand b and returns true if they are deemed to be the same value.
   * Otherwise returns false.
   * @typedef {Function} module:util-x~equalityFn
   * @param {*} a
   * @param {*} b
   * @return {boolean}
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
   * @return {Array}
   */
  exports.Array.proto.unique = (function () {
    return function (equalFn, thisArg) {
      var object = $toObject(this),
        isString,
        length,
        index,
        eqFn,
        arr,
        idx,
        val,
        it;

      if (typeof equalFn === 'undefined') {
        eqFn = $strictEqual;
      } else {
        eqFn = equalFn;
      }

      $throwIfNotFunction(eqFn);
      arr = [];
      length = $toLength(object.length);
      isString = length && $isString(object);
      for (index = 0; index < length; index += 1) {
        if ($hasItem(object, index, isString)) {
          it = $getItem(object, index, isString);
          val = true;
          for (idx = 0; idx < length; idx += 1) {
            if (idx < index && $hasItem(object, idx, isString) && $call(eqFn, thisArg, it, $getItem(object, idx, isString))) {
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
   * @return {Array}
   */
  exports.Array.unique = $toMethod(exports.Array.proto.unique);

  /**
   * Returns a property descriptor for an own property (that is, one directly present on an object,
   * not present by dint of being along an object's prototype chain) of a given object.
   * On environments that do not support it natively, this is just a sham to allow code to work.
   *
   * @function module:util-x~exports.Object.getOwnPropertyDescriptor
   * @param {Object} object
   * @param {string} property
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyDescriptor
   */
  exports.Object.getOwnPropertyDescriptor = (function () {
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

            $affirm.ok(!(base.Object.getOwnPropertyDescriptor(function () {
              return;
            }, 'length').writable), 'Function.length should be read only.');
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
              if (typeof prototype === 'undefined') {
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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
  exports.Array.proto.splice = (function () {
    var readOnlyLengths = {};

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
              $call(base.Array.splice, function () {
                return;
              });
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
            isString = length && $isString(object),
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
            if ($hasItem(object, from, isString)) {
              $push(removed, $getItem(object, from, isString));
            }

            k += 1;
          }

          if (itemCount < actualDeleteCount) {
            k = actualStart;
            loopCache = length - actualDeleteCount;
            while (k < loopCache) {
              from = k + actualDeleteCount;
              to = k + itemCount;
              if ($hasItem(object, from, isString)) {
                object[to] = $getItem(object, from, isString);
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
              if ($hasItem(object, from, isString)) {
                object[to] = $getItem(object, from, isString);
              } else {
                $deleteProperty(object, to);
              }

              k -= 1;
            }
          }

          k = actualStart;
          while (item < argLength) {
            object[k] = arguments[item];
            k += 1;
            item += 1;
          }

          object.length = $toLength(length - actualDeleteCount + itemCount);

          return removed;
        };
      },

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
  exports.Array.splice = $toMethod(exports.Array.proto.splice);

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
   */
  $splice = exports.Array.splice;

  /**
   * Checks if the supplied function suffers from the V8 strict mode bug.
   *
   * @private
   * @function module:util-x~$testV8StrictBug
   * @param {Function} fn
   * @return {boolean}
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
   * @return {Function}
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
   * @return {Function}
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
      $affirm.ok($isString(result), 'is string');
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
   * @return {undefined}
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
   * @return {undefined}
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
          isString,
          length,
          index;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        for (index = 0; index < length; index += 1) {
          if ($hasItem(object, index, isString)) {
            $call(fn, thisArg, $getItem(object, index, isString), index, object);
          }
        }
      };
    },

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
   * @return {undefined}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach
   */
  exports.Array.forEach = $toMethod(exports.Array.proto.forEach);

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
   * @return {undefined}
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
   * @return {undefined}
   */
  exports.Array.proto.forAll = function (fn, thisArg) {
    var object = $toObject(this),
      isString,
      length,
      index,
      val;

    $throwIfNotFunction(fn);
    length = $toLength(object.length);
    isString = length && $isString(object);
    val = false;
    for (index = 0; index < length; index += 1) {
      val = !!$call(fn, thisArg, $getItem(object, index, isString), index, object);
      if (val) {
        break;
      }
    }

    return val;
  };

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
   * @return {undefined}
   */
  exports.Array.forAll = $toMethod(exports.Array.proto.forAll);

  /**
   * some executes the callback function once for each element present in the array until it finds one
   * where callback returns a true value.
   * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
   * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
   * @typedef {Function} module:util-x~someCallback
   * @param {*} element The current element being processed in the array.
   * @param {number} index The index of the current element being processed in the array.
   * @param {Object} object The object that some was called upon.
   * @return {boolean}
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
   * @return {boolean}
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
          isString,
          val,
          length,
          index;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        val = false;
        for (index = 0; index < length; index += 1) {
          if ($hasItem(object, index, isString)) {
            val = !!$call(fn, thisArg, $getItem(object, index, isString), index, object);
            if (val) {
              break;
            }
          }
        }

        return val;
      };
    },

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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some
   */
  exports.Array.some = $toMethod(exports.Array.proto.some);

  /**
   * The find method executes the callback function once for each element present in the array until it
   * finds one where callback returns a true value.
   * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
   * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
   * @typedef {Function} module:util-x~findCallback
   * @param {*} element The current element being processed in the array.
   * @param {number} index The index of the current element being processed in the array.
   * @param {Object} object The object that find was called upon.
   * @return {boolean}
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
   * @return {*}
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
          isString,
          length,
          index,
          val,
          it;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        for (index = 0; index < length; index += 1) {
          it = $getItem(object, index, isString);
          if ($call(fn, thisArg, it, index, object)) {
            val = it;
            break;
          }
        }

        return val;
      };
    },

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
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
   */
  exports.Array.find = $toMethod(exports.Array.proto.find);

  /**
   * The findIndex method executes the callback function once for each element present in the array until it
   * finds one where callback returns a true value.
   * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
   * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
   * @typedef {Function} module:util-x~findIndexCallback
   * @param {*} element The current element being processed in the array.
   * @param {number} index The index of the current element being processed in the array.
   * @param {Object} object The object that findIndex was called upon.
   * @return {boolean}
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
   * @return {number}
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
          isString,
          val,
          length,
          index;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        val = -1;
        for (index = 0; index < length; index += 1) {
          if ($call(fn, thisArg, $getItem(object, index, isString), index, object)) {
            val = index;
            break;
          }
        }

        return val;
      };
    },

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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
   */
  exports.Array.findIndex = $toMethod(exports.Array.proto.findIndex);

  /**
   * from calls a provided callback function once for each element in an arrayLike object, in order,
   * and constructs a new array from the results.
   * @typedef {Function} module:util-x~fromCallback
   * @param {*} element The current element being processed in the array.
   * @param {number} index The index of the current element being processed in the array.
   * @return {*}
   */

  /**
   * Converts a single argument that is an array-like object or list (eg. arguments, NodeList,
   * DOMTokenList (used by classList), NamedNodeMap (used by attributes property)) into a new Array() and returns it.
   *
   * @function module:util-x~exports.Array.from
   * @param {module:util-x~ArrayLike} arrayLike
   * @param {module:util-x~fromCallback} [mapfn]
   * @param {*} [thisArg]
   * @return {Array}
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
          isString,
          length,
          array,
          mapping,
          index,
          it;

        if (typeof mapfn !== 'undefined') {
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

        isString = length && $isString(object);
        for (index = 0; index < length; index += 1) {
          it = $getItem(object, index, isString);
          if (mapping) {
            it = $call(mapfn, thisArg, it, index);
          }

          array[index] = it;
        }

        return array;
      };
    },

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
   * @return {*}
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
   * @return {boolean}
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
          isString,
          length,
          val,
          index;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        val = true;
        for (index = 0; index < length; index += 1) {
          if ($hasItem(object, index, isString)) {
            val = !!$call(fn, thisArg, $getItem(object, index, isString), index, object);
            if (!val) {
              break;
            }
          }
        }

        return val;
      };
    },

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
   * @return {boolean}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every
   */
  exports.Array.every = $toMethod(exports.Array.proto.every);

  /**
   * map calls a provided callback function once for each element in an arrayLike object, in order,
   * and constructs a new array from the results.
   * If a thisArg parameter is provided to some, it will be passed to callback when invoked,
   * for use as its this value. Otherwise, the value undefined will be passed for use as its this value.
   * @typedef {Function} module:util-x~mapCallback
   * @param {*} element The current element being processed in the array.
   * @param {number} index The index of the current element being processed in the array.
   * @param {Object} object The object that map was called upon.
   * @return {*}
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
   * @return {Array}
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
          isString,
          length,
          arr,
          index;

        $throwIfNotFunction(fn);
        arr = [];
        arr.length = length = $toLength(object.length);
        isString = length && $isString(object);
        for (index = 0; index < length; index += 1) {
          if ($hasItem(object, index, isString)) {
            arr[index] = $call(fn, thisArg, $getItem(object, index, isString), index, object);
          }
        }

        return arr;
      };
    },

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
   */
  exports.Array.map = $toMethod(exports.Array.proto.map);

  /**
   * This method creates a new Array instance with a variable number of arguments,
   * regardless of number or type of the arguments.
   *
   * @function module:util-x~exports.Array.of
   * @param {...*} [varArgs]
   * @return {Array}
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
   * @return {Array}
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
          isString,
          length,
          arr,
          index,
          it;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        isString = length && $isString(object);
        arr = [];
        for (index = 0; index < length; index += 1) {
          if ($hasItem(object, index, isString)) {
            it = $getItem(object, index, isString);
            if ($call(fn, thisArg, it, index, object)) {
              $push(arr, it);
            }
          }
        }

        return arr;
      };
    },

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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
   */
  exports.Array.filter = $toMethod(exports.Array.proto.filter);

  /**
   * Creates a new array with all the 'holes' removed.
   *
   * @function module:util-x~exports.Array.proto.condense
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.proto.condense = function () {
    var object = $toObject(this),
      length = $toLength(object.length),
      isString = length && $isString(object),
      arr = [],
      index;

    for (index = 0; index < length; index += 1) {
      if ($hasItem(object, index, isString)) {
        $push(arr, $getItem(object, index, isString));
      }
    }

    return arr;
  };

  /**
   * Creates a new array with all the 'holes' removed.
   *
   * @function module:util-x~exports.Array.condense
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.condense = $toMethod(exports.Array.proto.condense);

  /**
   * Creates an array with all falsey values removed. The values false, null,
   * 0, "", undefined, and NaN are falsey.
   *
   * @function module:util-x~exports.Array.proto.compact
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.proto.compact = function () {
    var object = $toObject(this),
      length = $toLength(object.length),
      isString = length && $isString(object),
      arr = [],
      value,
      index;

    for (index = 0; index < length; index += 1) {
      if ($hasItem(object, index, isString)) {
        value = $getItem(object, index, isString);
        if (value) {
          $push(arr, value);
        }
      }
    }

    return arr;
  };

  /**
   * Creates an array with all falsey values removed. The values false, null,
   * 0, "", undefined, and NaN are falsey.
   *
   * @function module:util-x~exports.Array.compact
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.compact = $toMethod(exports.Array.proto.compact);

  /**
   * Flattens a nested array. If deep is true the array is recursively
   * flattened, otherwise it's only flattened a single level.
   *
   * @function module:util-x~exports.Array.proto.flatten
   * @this {Array} The array to flatten.
   * @param {boolean} [deep] Specify a deep flatten.
   * @return {Array} Returns the new flattened array.
   */
  exports.Array.proto.flatten = function (deep) {
    var object = $toObject(this),
      length = $toLength(object.length),
      result = [],
      index,
      stack,
      value,
      idx,
      len;

    if (!length || !$isArray(object)) {
      return result;
    }

    index = 0;
    if (deep) {
      stack = [];
    }

nextChildFlatten:
    while (index < length) {
      if ($hasProperty(object, index)) {
        value = object[index];
        if ($isArray(value)) {
          if (deep) {
            $push(stack, {
              object: object,
              length: length,
              index: index
            });

            object = value;
            length = $toLength(value.length);
            index = 0;
            /*jslint continue:true*/
            continue nextChildFlatten;
          }

          len = $toLength(value.length);
          for (idx = 0; idx < len; idx += 1) {
            if ($hasProperty(value, idx)) {
              $push(result, value[idx]);
            } else {
              result.length += 1;
            }
          }
        } else {
          $push(result, value);
        }
      } else {
        result.length += 1;
      }

      index += 1;
      if (deep && index >= length && $toLength(stack.length)) {
        value = $pop(stack);
        object = value.object;
        length = value.length;
        index = value.index + 1;
        /*jslint continue:true*/
        continue nextChildFlatten;
      }
    }

    return result;
  };

  /**
   * Flattens a nested array. If deep is true the array is recursively
   * flattened, otherwise it's only flattened a single level.
   *
   * @function module:util-x~exports.Array.flatten
   * @param {Array} array The array to flatten.
   * @param {boolean} [deep] Specify a deep flatten.
   * @return {Array} Returns the new flattened array.
   */
  exports.Array.flatten = $toMethod(exports.Array.proto.flatten);

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
   * @return {*}
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
          isString,
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
        isString = length && $isString(object);
        if ($toLength(arguments.length) > 1) {
          accumulator = initialValue;
        } else {
          kPresent = false;
          while (!kPresent && index < length) {
            kPresent = $hasItem(object, index, isString);
            if (kPresent) {
              accumulator = $getItem(object, index, isString);
              index += 1;
            }
          }

          if (!kPresent) {
            throw new CTypeError(reduceTypeErrorMessage);
          }
        }

        while (index < length) {
          if ($hasItem(object, index, isString)) {
            accumulator = $call(fn, Undefined, accumulator, $getItem(object, index, isString), index, object);
          }

          index += 1;
        }

        return accumulator;
      };
    },

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
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
   */
  exports.Array.reduce = $toMethod(exports.Array.proto.reduce);

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
   * @return {*}
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
          isString,
          accumulator,
          length,
          kPresent,
          index;

        $throwIfNotFunction(fn);
        length = $toLength(object.length);
        if (!length && $toLength(arguments.length) === 1) {
          throw new CTypeError(reduceRightTypeErrorMessage);
        }

        isString = length && $isString(object);
        index = length - 1;
        if ($toLength(arguments.length) > 1) {
          accumulator = initialValue;
        } else {
          kPresent = false;
          while (!kPresent && index >= 0) {
            kPresent = $hasItem(object, index, isString);
            if (kPresent) {
              accumulator = $getItem(object, index, isString);
              index -= 1;
            }
          }

          if (!kPresent) {
            throw new CTypeError(reduceRightTypeErrorMessage);
          }
        }

        while (index >= 0) {
          if ($hasItem(object, index, isString)) {
            accumulator = $call(fn, Undefined, accumulator, $getItem(object, index, isString), index, object);
          }

          index -= 1;
        }

        return accumulator;
      };
    },

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
   * @return {*}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight
   */
  exports.Array.reduceRight = $toMethod(exports.Array.proto.reduceRight);

  /**
   * This method groups array elements into groups of num elements.
   *
   * @function module:util-x~exports.Array.proto.chunk
   * @param {*} chunkSize
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.proto.chunk = function (chunkSize) {
    var object = $toObject(this),
      chunkLength = $toInteger(chunkSize),
      chunked = [],
      numChunks,
      length,
      index,
      start,
      end;

    if (chunkLength < 1) {
      return chunked;
    }

    length = $toLength(object.length);
    numChunks = $ceil(length / chunkLength);
    index = 0;
    start = 0;
    end = chunkLength;
    chunked.length = numChunks;
    while (index < numChunks) {
      chunked[index] = $slice(object, start, end);
      start = end;
      end += chunkLength;
      index += 1;
    }

    return chunked;
  };

  /**
   * This method groups array elements into groups of num elements.
   *
   * @function module:util-x~exports.Array.chunk
   * @param {module:util-x~ArrayLike} array
   * @param {*} num
   * @throws {TypeError} If array is null or undefined
   * @return {Array}
   */
  exports.Array.chunk = $toMethod(exports.Array.proto.chunk);

  /**
   * Returns a safe integer for the supplied argument.
   *
   * @private
   * @@function module:util-x~clampSafeInt
   * @param {number} number
   * @return {number}
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
   * @return {number}
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
      val = $floor(tmp.times($random())) + min;
    } else {
      val = $floor($random() * tmp + min);
    }

    return val;
  };

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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
   */
  $randomInt = exports.Number.randomInt;

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
      length = $toLength(whiteSpaces.length),
      index,
      hex,
      wsStr = '',
      trimString = '';

    for (index = 0; index < length; index += 1) {
      hex = $call(base.Number.toString, whiteSpaces[index], 16);
      wsStr += '\\u' + $sSlice('0000', 0, -$toLength(hex.length)) + hex;
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
   * @return {string}
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
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
   */
  exports.String.trim = $toMethod(exports.String.proto.trim);

  /**
   * Shortcut
   * This {@link module:util-x~boundPrototypalFunction method} removes whitespace from both ends of the string.
   *
   * @private
   * @function module:util-x~$trim
   * @param {string} inputArg
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/trim
   */
  $trim = exports.String.trim;

  /**
   * This function parses a string argument and returns an integer of the specified radix or base.
   *
   * @function module:util-x~exports.parseInt
   * @param {StringLike} inputArg
   * @param {number} radix
   * @return {number}
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
        if (typeof radix === 'undefined' || !toInt32(radix)) {
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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/parseInt
   */
  $parseInt = exports.parseInt;

  /**
   * This function parses a string argument and returns an integer of the specified radix or base.
   *
   * @function module:util-x~exports.Number.parseInt
   * @param {StringLike} inputArg
   * @param {number} radix
   * @return {number}
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

    // message
    'Number.parseInt shim'
  );

  /**
   * This method parses a string argument and returns a floating point number.
   *
   * @function module:util-x~exports.parseFloat
   * @param {StringLike} inputArg
   * @return {number}
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
   * @return {number}
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

    // message
    'Number.parseFloat shim'
  );

  /**
   * This method formats a number using fixed-point notation.
   *
   * @function module:util-x~exports.Number.toFixed
   * @this {number}
   * @param {number} fractionDigits
   * @return {string}
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
              s += $sSlice('0000000', 0, 7 - it.length) + it;
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

        f = $toNumber(fractionDigits);
        // Test for NaN and round fractionDigits down
        if (f !== f) {
          f = 0;
        } else {
          f = $floor(f);
        }

        if (f < 0 || f > 20) {
          throw new CRangeError('Number.toFixed called with invalid number of decimals');
        }

        x = $toNumber(this);
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
            m = numToString() + $sSlice('0.00000000000000000000', 2, 2 + f);
          }
        }

        if (f > 0) {
          k = m.length;
          if (k <= f) {
            m = s + $sSlice('0.0000000000000000000', 0, f - k + 2) + m;
          } else {
            m = s + $sSlice(m, 0, k - f) + '.' + $sSlice(m, k - f);
          }
        } else {
          m = s + m;
        }

        return m;
      };
    },

    // message
    'Number.toFixed shim'
  );

  /**
   * This {@link module:util-x~boundPrototypalFunction method} formats a number using fixed-point notation.
   *
   * @function module:util-x~exports.Number.toFixed
   * @param {number} number The number to be formatted.
   * @param {number} fractionDigits
   * @return {string}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
   */
  exports.Number.toFixed = $toMethod(exports.Number.proto.toFixed, $firstArg);

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
   * @return {number}
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
          isString = length && $isString(object),
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
            if ($hasItem(object, index, isString) && searchElement === $getItem(object, index, isString)) {
              val = index;
              break;
            }
          }
        }

        return val;
      };
    },

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
   * @return {number}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
   */
  exports.Array.lastIndexOf = $toMethod(exports.Array.proto.lastIndexOf);

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
   * @return {Array}
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

        if (typeof end === 'undefined') {
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
   * @return {Array}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill
   */
  exports.Array.fill = $toMethod(exports.Array.proto.fill);

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
   * @return {Array}
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

        if (typeof end === 'undefined') {
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
   * @return {Array}
   */
  exports.Array.copyWithin = $toMethod(exports.Array.proto.copyWithin);

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
   * @return {boolean}
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
   * @return {boolean}
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

    isString = length && $isString(object);
    val = false;
    for (index = 0; index < length; index += 1) {
      it = keys[index];
      if (isString && $toString($toInteger(it)) === it && it >= 0 && it <= MAX_SAFE_INTEGER) {
        item = $getItem(object, it, true);
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

  /**
   * Executes a provided function once per object property and allows a some like break.
   *
   * @function module:util-x~exports.Object.forKeys
   * @param {Object} object
   * @throws {TypeError} If object is primitive
   * @param {module:util-x~forKeysCallback} fn
   * @throws {TypeError} If fn is not a function
   * @param {*} [thisArg]
   * @return {boolean}
   */
  exports.Object.forKeys = $toMethod(exports.Object.proto.forKeys);

  /**
   * Executes a provided function once per object property and allows a some like break.
   *
   * @private
   * @function module:util-x~$.forKeys
   * @param {Object} object
   * @throws {TypeError} If object is primitive
   * @param {module:util-x~forKeysCallback} fn
   * @throws {TypeError} If fn is not a function
   * @param {*} [thisArg]
   * @return {boolean}
   */
  $forKeys = exports.Object.forKeys;

  /**
   * @private
   * @function module:util-x~$isCircular
   * @param {*} inputArg
   * @return {boolean}
   */
  $isCircular = (function () {
    var isCirc,
      cb;

    cb = function (item) {
      return !$isPrimitive(item) && ($indexOf(this, item) !== -1 || isCirc(item, this));
    };

    isCirc = function (obj, arr) {
      if ($isPrimitive(obj)) {
        return false;
      }

      $push(arr, obj);

      return $forKeys(obj, cb, arr);
    };

    return function (inputArg) {
      return isCirc(inputArg, []);
    };
  }());

  /**
   * @function module:util-x~exports.Object.isCircular
   * @param {*} inputArg
   * @return {boolean}
   */
  exports.Object.isCircular = $isCircular;

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
   * @return {boolean}
   */
  exports.Object.isEmpty = function (inputArg) {
    return !$objectKeys(inputArg).length;
  };

  /**
   * This method returns true if the string
   * only contains numerical digits.
   *
   * @function module:util-x~exports.String.proto.isDigits
   * @this {string}
   * @return {boolean}
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
   * @return {boolean}
   */
  exports.String.isDigits = $toMethod(exports.String.proto.isDigits);

  /**
   * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a String and
   * only contains numerical digits.
   *
   * @private
   * @function module:util-x~exports.String.isDigits
   * @param {*} string
   * @return {boolean}
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
   * @return {Object}
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
          if ($isDigits(property) && $getItem(property, 0, stringTagString) !== '0' && $isIndex($toNumber(property), MAX_UINT32 - 1)) {
            property = $toNumber(property);
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
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
   */
  exports.Object.defineProperty = (function () {
    return $decide(
      //test
      function () {
        $affirmBasic(base.Object.defineProperty)();
        $affirm.strictEqual(base.Object.defineProperty({}, 'sentinel', {
          value: null
        }).sentinel, null, 'test1');
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
              testObj = base.Object.defineProperty([], '1.', {
                value: null
              });
            }, 'should not throw an error definining elements on arrays using trailing point numbers strings');

            $affirm.strictEqual(testObj.length, 0, 'test1');
            $affirm.strictEqual(testObj[1], Undefined, 'test2');
            $affirm.strictEqual(testObj['1.'], null, 'test3');

            // should not throw an error definining elements on arrays using integer strings
            $affirm.doesNotThrow(function () {
              testObj = base.Object.defineProperty([], '1', {
                value: Undefined
              });
            }, 'should not throw an error definining elements on arrays using integer strings');

            $affirm.strictEqual(testObj.length, 2, 'test4');
            $affirm.strictEqual(testObj[1], Undefined, 'test5');

            $affirm.doesNotThrow(function () {
              testObj = base.Object.defineProperty([], '1', {
                value: null
              });
            }, 'should not throw an error definining elements on arrays using integer strings');

            $affirm.strictEqual(testObj.length, 2, 'test6');
            $affirm.strictEqual(testObj[1], null, 'test7');

            $affirm.doesNotThrow(function () {
              testObj = base.Object.defineProperty([], '1', {});
            }, 'should not throw an error definining elements on arrays using integer strings');

            $affirm.strictEqual(testObj.length, 2, 'test8');
            $affirm.strictEqual(testObj[1], Undefined, 'test9');

            $affirm.doesNotThrow(function () {
              testObj = base.Object.defineProperty([], '1', {
                value: null
              });
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
                if (($isDigits(property) && $getItem(property, 0, stringTagString) !== '0' && $isIndex($toNumber(property), MAX_UINT32 - 1)) || $isNumeric(property)) {
                  return $defProp(object, property, descriptor);
                }
              }

              return mDefineProperty(object, property, descriptor);
            };
          },

          // message
          'Object.defineProperty patch'
        );
      },

      // fail
      function () {
        return $defProp;
      },

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
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
   */
  $defineProperty = exports.Object.defineProperty;

  /**
   * Defines new or modifies existing properties directly on an object, returning the object.
   *
   * @function module:util-x~exports.Object.defineProperties
   * @param {Object} object
   * @param {Object} props
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperties
   */
  exports.Object.defineProperties = (function () {
    var mDefineProperties = base.Object.defineProperties;

    /**
     * @private
     * @function module:util-x~throwString
     * @param {Object} props
     * @throws If props is a string
     * @return {Object}
     */
    function throwString(props) {
      if ($isString(props)) {
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
              mDefineProperties({}, Undefined);
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
   * @return {Object}
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
   * @return {Object}
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

    // message
    'Object.freeze Rhino bug patch'
  );

  /**
   * Determine if an object is frozen.
   *
   * @function module:util-x~exports.Object.isFrozen
   * @param {Object} object
   * @return {boolean}
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

    //  message
    'Object.isFrozen sham'
  );

  /**
   * To make object fully immutable, freeze each object in object.
   *
   * @function module:util-x~exports.Object.deepFreeze
   * @param {Object} object
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze
   */
  exports.Object.deepFreeze = function (object) {
    var propKey,
      propVal;

    exports.Object.freeze(object);
    for (propKey in object) {
      /*jslint forin: false*/
      propVal = $getItem(object, propKey, $isString(object));
      if (!$isPrimitive(propVal) && !exports.Object.isFrozen(propVal)) {
        exports.Object.deepFreeze(propVal);
      }
      /*jslint forin: true*/
    }

    return object;
  };

  /**
   * The assign function is used to copy the values of all of the enumerable own properties from a
   * source object to a target object.
   *
   * @function module:util-x~exports.Object.assign
   * @param {Object} target
   * @param {...Object} source
   * @return {Object}
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
          isString,
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
            /*jslint eqeq:true */
            /*jshint eqnull:true */
            if (arg != null) {
              from = $toObject(arg);
              keysArray = $objectKeys(from);
              len = $toLength(keysArray.length);
              for (nextIndex = 0; nextIndex < len; nextIndex += 1) {
                nextKey = keysArray[nextIndex];
                isString = $isString(from);
                if ($hasItem(from, nextKey, isString)) {
                  to[nextKey] = $getItem(from, nextKey, isString);
                }
              }
            }
          }
        }

        return to;
      };
    },

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
   * @return {Object}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign
   */
  $assign = exports.Object.assign;

  /**
   * This method creates a new object with the specified prototype object and properties.
   *
   * @function module:util-x~exports.Object.create
   * @param {Prototype} prototype
   * @return {Object}
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

    // message
    'Object.create shim'
  );

  /**
   * This method creates a new object with the specified prototype object and properties.
   *
   * @private
   * @function module:util-x~$create
   * @param {Prototype} prototype
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/create
   */
  $create = exports.Object.create;

  /**
   * This method returns true if the Date object is valid.
   *
   * @function module:util-x~exports.Date.proto.isValid
   * @this {Date}
   * @return {boolean}
   */
  exports.Date.proto.isValid = (function (pGetTime) {
    return function () {
      if (!$isDate(this)) {
        throw new CTypeError('this is not a Date object.');
      }

      var ms = $call(pGetTime, this);

      return ms === ms;
    };
  }(base.Date.getTime));

  /**
   * This {@link module:util-x~boundPrototypalFunction method} returns true if the operand inputArg is a Date object and is valid.
   *
   * @function module:util-x~exports.Date.isValid
   * @param {*} dateObject
   * @return {boolean}
   */
  exports.Date.isValid = $toMethod(exports.Date.proto.isValid);

  /**
   * This method returns the number of milliseconds elapsed since 1 January 1970 00:00:00 UTC.
   *
   * @function module:util-x~exports.Date.now
   * @return {number}
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
   * @return {string}
   */
  exports.String.proto.wrapInChars = function (characters) {
    if (!$isString(characters) && !$isNumber(characters)) {
      characters = '';
    } else {
      characters = $toString(characters);
    }

    return characters + $onlyCoercibleToString(this) + characters;
  };

  /**
   * This {@link module:util-x~boundPrototypalFunction method} wraps a string within the given character.
   *
   * @function module:util-x~exports.String.wrapInChars
   * @param {string} string
   * @param {string} character
   * @return {string}
   */
  exports.String.wrapInChars = $toMethod(exports.String.proto.wrapInChars);

  /**
   * This method truncates a long string to the length specified by n;
   * used by AssertionError.toString
   *
   * @function module:util-x~exports.String.proto.truncate
   * @this {string}
   * @param {module:util-x~NumberLike} n
   * @return {string}
   */
  exports.String.proto.truncate = function (n) {
    var s = $onlyCoercibleToString(this);

    n = $toNumber(n);
    if (n === n && n >= 0 && s.length > n) {
      s = $sSlice(s, 0, n);
    }

    return s;
  };

  /**
   * This {@link module:util-x~boundPrototypalFunction method} truncates a long string to the length specified by n;
   * used by AssertionError.toString
   *
   * @function module:util-x~exports.String.truncate
   * @param {string} s
   * @param {module:util-x~NumberLike} n
   * @return {string}
   */
  exports.String.truncate = $toMethod(exports.String.proto.truncate);

  /**
   * This {@link module:util-x~boundPrototypalFunction method} truncates a long string to the length specified by n;
   * used by AssertionError.toString
   *
   * @private
   * @function module:util-x~$truncate
   * @param {string} s
   * @param {module:util-x~NumberLike} n
   * @return {string}
   */
  $truncate = exports.String.truncate;

  /**
   * This method inherits the prototype methods from one constructor into another.
   *
   * @function module:util-x~exports.Function.proto.inherits
   * @this {Function}
   * @param {Function} superCtor
   * @return {undefined}
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

  /**
   * This {@link module:util-x~boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
   *
   * @function module:util-x~exports.Function.inherits
   * @param {Function} ctor
   * @param {Function} superCtor
   * @return {undefined}
   */
  exports.Function.inherits = $toMethod(exports.Function.proto.inherits);

  /**
   * This {@link module:util-x~boundPrototypalFunction method} inherits the prototype methods from one constructor into another.
   *
   * @private
   * @function module:util-x~$inherits
   * @param {Function} ctor
   * @param {Function} superCtor
   * @return {undefined}
   */
  $inherits = exports.Function.inherits;

  /**
   * Tests to see if the argument is one of the seven standard Error type constructors.
   *
   * @function module:util-x~exports.Error.isErrorTypeConstructor
   * @param {*} inputArg
   * @return {boolean}
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

  /**
   * Tests to see if the argument is one of the seven standard Error type constructors.
   *
   * @private
   * @function module:util-x~$isErrorTypeConstructor
   * @param {*} inputArg
   * @return {boolean}
   */
  $isErrorTypeConstructor = exports.Error.isErrorTypeConstructor;

  /**
   * Custom replacer used to help stringify error messages.
   *
   * @function module:util-x~exports.customErrorReplacer
   * @param {string} key Unused
   * @param {*} value
   * @return {string}
   */
  exports.customErrorReplacer = function () {
    var value = arguments[1],
      type = typeof value,
      result;

    if (type === 'string') {
      result = value;
    } else if (type === 'undefined' ||
        value === INFINITY ||
        value === NEGATIVE_INFINITY ||
        exports.Number.isNaN(value) ||
        $isFunction(value) ||
        $isRegExp(value)) {

      result = $toString(value);
    } else {
      result = value;
    }

    return result;
  };

  // Error closure
  (function () {
    var patchedIEErrorToString = false,
      previousIEErrorToString;

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     *
     * @function module:util-x~exports.normaliseErrorIEToStringOn
     * @return {boolean}
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
     * @return {boolean}
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
     * @return {boolean}
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
   * @param {module:util-x~NumberLike} [maxMessageLength] Range 64 to INFINITY (128 default)
   * @return {Function}
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
     * @param {module:util-x~NumberLike} [maxMessageLength] Range 64 to INFINITY (128 default)
     * @return {Function}
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
      if (maxMessageLength !== maxMessageLength || maxMessageLength < 64) {
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

      if (typeof maxMessageLength === 'undefined') {
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

  /**
   * Swap places of 2 item values on an object's properties.
   *
   * @function module:util-x~exports.Object.swapItems
   * @param {Object} object
   * @param {module:util-x~NumberLike} prop1
   * @param {module:util-x~NumberLike} prop2
   * @return {Object}
   */
  exports.Object.swapItems = function (object, prop1, prop2) {
    $throwIfIsPrimitive(object);
    prop1 = $toString(prop1);
    prop2 = $toString(prop2);

    var temp1,
      temp2,
      num,
      cond1,
      cond2,
      len1,
      len2;

    if (prop1 !== prop2) {
      temp1 = exports.Object.getOwnPropertyDescriptor(object, prop1) || {};
      temp2 = exports.Object.getOwnPropertyDescriptor(object, prop2) || {};
      num = $toLength(prop2);
      cond1 = $hasOwnValidLength(object) && !$isFunction(object) && $toString(num) === prop2;
      if (!$isPlainObject(temp1) || !$call(pHasOwn, temp1, 'value')) {
        if (cond1) {
          len1 = $toLength(object.length) - 1;
          if (num === len1) {
            object.length = len1;
          }
        }

        $deleteProperty(object, prop2);
      } else {
        if (cond1) {
          len1 = $toLength(object.length);
          if (num === len1) {
            object.length = len1 + 1;
          }
        }

        $defineProperty(object, prop2, temp1);
      }

      num = $toLength(prop1);
      cond2 = $hasOwnValidLength(object) && !$isFunction(object) && $toString(num) === prop1;
      if (!$isPlainObject(temp2) || !$call(pHasOwn, temp2, 'value')) {
        if (cond2) {
          len2 = $toLength(object.length) - 1;
          if (num === len2) {
            object.length = len2;
          }
        }

        $deleteProperty(object, prop1);
      } else {
        $defineProperty(object, prop1, temp2);
        if (cond2) {
          len2 = $toLength(object.length);
          if (num === len2) {
            object.length = len2 + 1;
          }
        }

        $defineProperty(object, prop1, temp2);
      }
    }

    return object;
  };

  /**
   * This method performs Fisher-Yates shuffle for randomly shuffling a set.
   *
   * @function module:util-x~exports.Array.proto.shuffle
   * @this {module:util-x~ArrayLike}
   * @throws {TypeError} If array is null or undefined
   * @param {module:util-x~NumberLike} [rounds]
   * @return {Array}
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
      isString = $isString(object);
      if (isString) {
        tempVal = {};
        for (inIndex = 0; inIndex < inLen; inIndex += 1) {
          tempVal[inIndex] = $getItem(object, inIndex, true);
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

  /**
   * This {@link module:util-x~boundPrototypalFunction method} performs Fisher-Yates shuffle for randomly shuffling a set.
   *
   * @function module:util-x~exports.Array.shuffle
   * @param {module:util-x~ArrayLike} array
   * @throws {TypeError} If array is null or undefined
   * @param {module:util-x~NumberLike} [rounds]
   * @return {Array}
   * @see http://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle
   */
  exports.Array.shuffle = $toMethod(exports.Array.proto.shuffle);

  /**
   *  This function returns an ISO 8601 representation of the instance in time
   *  represented by this Date object.
   *
   * @function module:util-x~exports.Date.proto.toISOString
   * @this {Date}
   * @throws {RangeError} If not a valid date.
   * @return {string} An ISO 8601 representation of the date.
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
        pGetUTCMonth = base.Date.proto.getUTCMonth,
        pGetUTCDate = base.Date.proto.getUTCDate,
        pGetUTCHours = base.Date.proto.getUTCHours,
        pGetUTCMinutes = base.Date.proto.getUTCMinutes,
        pGetUTCSeconds = base.Date.proto.getUTCSeconds,
        pGetUTCMilliseconds = base.Date.proto.getUTCMilliseconds;

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

        year = sign + $sSlice('00000' + $abs(year), length);
        length = $toLength(result.length);
        for (index = 0; index < length; index += 1) {
          value = result[index];
          if (value < 10) {
            result[index] = '0' + value;
          }
        }

        // pad milliseconds to have three digits.
        date = year + '-' + $join($slice(result, 0, 2), '-');
        time = $join($slice(result, 2), ':') + '.' + $sSlice('000' + $call(pGetUTCMilliseconds, this), -3);

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
   * @return {string} An ISO 8601 representation of the date.
   */
  exports.Date.toISOString = $toMethod(exports.Date.proto.toISOString);

  /**
   * Create date object with .toISOString and .toJSON methods attached.
   * Used for testing Date.prototype.toJSON and JSON.stringify
   *
   * @private
   * @function module:util-x~$makeDate
   * @param {*} inputArg Value to be passed to the Date constructor
   * @return {date} A date object with .toISOString and .toJSON
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
   * @return {string} An ISO 8601 representation of the date.
   */
  exports.Date.proto.toJSON = $decide(
    // test
    function () {
      $affirmBasic(base.Date.toJSON)();

      var zero = 0,
        value;

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
        value = $call(base.Date.toJSON, INFINITY);
      }, 'test11');

      $affirm.strictEqual(value, null, 'test12');

      $affirm.doesNotThrow(function () {
        value = $call(base.Date.toJSON, 1 / -zero);
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
          tv = $toPrimitive(object, hintNumber),
          rtn;

        if (typeof tv === 'number' && !$isFinite(tv)) {
          rtn = null;
        } else {
          rtn = $throwIfNotFunction(object.toISOString).call(object);
        }

        return rtn;
      };
    },

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
   * @return {string} An ISO 8601 representation of the date.
   */
  exports.Date.toJSON = $toMethod(exports.Date.proto.toJSON);

  /**
   * Return a JSON string corresponding to the specified value, optionally including only certain properties
   * or replacing property values in a user-defined manner.
   *
   * @function module:util-x~exports.JSON.stringify
   * @param {*} value
   * @param {(Function|Array)} replacer
   * @param {number} space
   * @return {string}
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
        $affirm.ok(typeof mStringify(noop) === 'undefined', 'test7');
        // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
        // 3.1b3 pass this test.
        $affirm.ok(typeof mStringify(Undefined) === 'undefined', 'test8');
        // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
        // respectively, if the toSON is omitted entirely.
        $affirm.doesNotThrow(function () {
          mStringify();
        }, 'test9');
        $affirm.ok(typeof mStringify() === 'undefined', 'test10');
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
                r = '\\u' + $sSlice('0000', 0, -hex.length) + hex;
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
            v;

          /*jslint eqeq:true */
          /*jshint eqnull:true */
          if (value != null && $isFunction(value.toJSON)) {
            value = value.toJSON(key);
          }

          if ($isFunction(sfyReplacer)) {
            value = $call(sfyReplacer, holder, key, value);
          }

          if (!$isPrimitive(value) && ($isString(value) || $isNumber(value) || $isBoolean(value))) {
            value = $toPrimitive(value, hintNumber);
          }

          switch ($typeOf(value)) {
          case 'string':
            return stringifyQuote(value);
          case 'number':
            if (value !== INFINITY && value !== NEGATIVE_INFINITY) {
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
                member = '[\n' + sfyGap + $join(partial, ',\n' + sfyGap) + '\n' + mind + ']';
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
                  if (typeof v !== 'undefined') {
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
                if (typeof v !== 'undefined') {
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
          /*jslint eqeq:true */
          /*jshint eqnull:true */
          if (replacer != null && !$isFunction(replacer) && !$isArray(replacer)) {
            throw new CError('JSON.stringify');
          }

          return stringifyToString('', {
            '': value
          });
        };
      },

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
   * @return {Object}
   * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse
   */
  exports.JSON.parse = (function (mParse) {
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
              if (typeof text === 'undefined') {
                throw new CSyntaxError('JSON.parse');
              }

              return mParse(text, reviver);
            };
          },

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
              if (typeof v !== 'undefined') {
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

              return '\\u' + $sSlice('0000', 0, -hex.length) + hex;
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
   * @return {string}
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
   * @return {string}
   * @see https://people.mozilla.org/~jorendorff/es6-draft.html#sec-string.prototype.substr
   */
  exports.String.proto.substr = (function () {
    return $decide(
      // test
      function () {
        $affirmBasic(base.String.substr)();
        $affirm.strictEqual($call(base.String.substr, '0b', -1), 'b', 'negative substr bug');
        $affirm.strictEqual($call(base.String.substr, 'abcdef', 1, Undefined), 'bcdef', 'stop is undefined bug');
      },

      // pass
      function () {
        return base.String.substr;
      },

      // fail
      function () {
        var pSSlice = exports.String.proto.slice;

        return function (start, length) {
          var object = $onlyCoercibleToString(this),
            size = $toLength(object.length),
            intStart = $toInteger(start),
            end;

          if (intStart < 0) {
            intStart = $max(size + intStart, 0);
          }

          if (typeof length === 'undefined') {
            end = INFINITY;
          } else {
            end = $toInteger(length);
          }

          return $call(pSSlice, object, intStart, intStart + $min($max(end, 0), size - intStart));
        };
      },

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
   * @return {string}
   * @see http://www.ecma-international.org/ecma-262/5.1/#sec-B.2.3
   */
  exports.String.substr = $toMethod(exports.String.proto.substr);

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
   * @return {string}
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
   * @return {Array.<Array>}
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
          if ($isString(thisObj)) {
            lastElement = $getItem(thisObj, len - 1, true);
            object = $sSlice(thisObj, 0, -1);
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
   * @return {Array.<Array>}
   * @see http://en.wikipedia.org/wiki/Power_set
   */
  exports.Array.powerSet = $toMethod(exports.Array.proto.powerSet);

  /**
   * Convert an array to a plain object representation.
   *
   * @function module:util-x~exports.Array.proto.toObject
   * @this {module:util-x~ArrayLike}
   * @return {Object}
   */
  exports.Array.proto.toObject = function () {
    var object = $toObject(this),
      accumulator = {},
      isString,
      length,
      index;

    if ($hasOwnValidLength(object) && !$isFunction(object)) {
      isString = length && $isString(object);
      accumulator.length = length = $toLength(object.length);
      for (index = 0; index < length; index += 1) {
        if ($hasItem(object, index, isString)) {
          accumulator[index] = $getItem(object, index, isString);
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
   * @return {Object}
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
   * @return {boolean} True if object is an instance of Ctor or
   *                    has the matching `classId` otherwise false.
   */
  function $isInstance(object, Ctor) {
    if (!$isFunction(Ctor)) {
      throw new CTypeError('Ctor is not a constructor.');
    }

    var rtn = false;

    /*jslint eqeq:true */
    /*jshint eqnull:true */
    if (object != null) {
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
     * INFINITY, NaN and hexadecimal literal strings, e.g. '0xff', are not valid.<br/>
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
       * @return {Function}
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
     * @return {boolean} True if object possitively duck types.
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
        if (testType === 'object' &&
            !$isFunction(object) &&
            object.constructor.prototype !== protoObject &&
            (object.s === null || object.s === 1 || object.s === -1) &&
            (object.c === null || $isArray(object.c)) &&
            (object.e === null || typeof object.e === 'number') &&
            $isFunction(object.plus) &&
            $isFunction(object.minus)) {

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
     * @return {boolean}
     */
    function isIntegerInRange(val, min, max) {
      if (!$isInteger(min)) {
        throw new CTypeError('min is not an integer: ' + $toString($toPrimitive(min, hintString)));
      }

      if (!$isInteger(max)) {
        throw new CTypeError('max is not an integer: ' + $toString($toPrimitive(max, hintString)));
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
     * @return {module:util-x~bigobject}
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
     * @return {module:util-x~bigobject} A rounded value of this.
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
        more = xc[i] > 5 || (xc[i] === 5 && (more || i < 0 || typeof xc[i + 1] !== 'undefined' || xc[i - 1] & 1));
        /*jslint bitwise:true */
      } else if (rm === 3) {
        more = more || typeof xc[i] !== 'undefined' || i < 0;
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
     * @return {string} A string representation of this.
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
        str = $getItem(strT, 0, stringTagString);
        if (strL > 1) {
          str += '.' + $sSlice(strT, 1);
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
          str = $sSlice(strT, 0, e) + '.' + $sSlice(strT, e);
        }
        // Exponent zero.
      } else if (strL > 1) {
        str = $getItem(strT, 0, stringTagString) + '.' + $sSlice(strT, 1);
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
     * @return {string}
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
          str += '.' + $sSlice($join(c, ''), 1);
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
      if (n === 0 && 1 / n === NEGATIVE_INFINITY) {
        n = '-0';
      } else {
        // Ensure n is string and check validity.
        n = $toString(n);
      }

      if (!$test(isValid, n)) {
        throw new BigError(NaN);
      }

      // Determine sign.
      if ($getItem(n, 0, stringTagString) === '-') {
        n = $sSlice(n, 1);
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

        e += $toNumber($sSlice(n, i + 1));
        n = $substr(n, 0, i);
      } else if (e < 0) {
        // Integer.
        e = $toLength(n.length);
      }

      // Determine leading zeros.
      i = 0;
      while ($getItem(n, i, stringTagString) === '0') {
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
        while ($getItem(n, nL, stringTagString) === '0') {
          nL -= 1;
        }

        this.e = e - i - 1;
        this.c = [];
        // Convert string to array of digits without leading/trailing zeros.
        for (e = 0; i <= nL; i += 1, e += 1) {
          this.c[e] = $toNumber($getItem(n, i, stringTagString));
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
     * @throws {module:util-x~bigerror} ±INFINITY on division by zero.
     * @throws {module:util-x~bigerror} NaN on division of zero by zero.
     * @throws {module:util-x~bigerror} '!Big.DP!' if dp not an integer or not in integer range.
     * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} / y.
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

        // If dvs is 0, throw +-INFINITY.
        if (!dvs[0]) {
          throw new BigError(s / POSITIVE_ZERO);
        }

        // dvd is 0, return +-0.
        return new this.constructor(s * POSITIVE_ZERO);
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
      } while ((dvdI < dvdL || typeof rem[0] !== 'undefined') && s);

      // Leading zero? Do not remove if result is simply zero (qi == 1).
      if (!qc[0] && qi !== 1) {
        // There can't be more than one zero.
        $shift(qc);
        q.e -= 1;
      }

      // Round?
      if (qi > digits) {
        $call(rnd, q, dp, rm, typeof rem[0] !== 'undefined');
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
     * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} * y
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
     * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} + y
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
          rtn = new this.constructor(a * POSITIVE_ZERO);
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
     * @return {number} One of these values: -1, 0, 1
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
     * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} % y
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
     * @return {Big} An independant copy of the {@link Big} constructor.
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
       * @return {(module:util-x~bigobject|Big)}
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
       * @return {module:util-x~bigobject} The absolute value of {@link module:util-x~bigobject this}.
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
       * @return {number} One of these values: -1, 0, 1
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
       * @throws {Error} ±INFINITY on division by zero.
       * @throws {Error} NaN on division of zero by zero.
       * @throws {Error} '!Big.DP!' if {@link Big.DP} not an integer or not in integer range
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} / y.
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
       * @return {boolean} {@link module:util-x~bigobject this} === y
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
       * @return {boolean} {@link module:util-x~bigobject this} > y
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
       * @return {boolean} {@link module:util-x~bigobject this} >= y
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
       * @return {boolean} {@link module:util-x~bigobject this} < y
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
       * @return {boolean} {@link module:util-x~bigobject this} <= y
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
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} - y
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
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} % y
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
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} + y
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
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} ^ y
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
       * @return {module:util-x~bigobject} A rounded value of this.
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
       * @return {module:util-x~bigobject} The square root of this.
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
          if (i === 0 || i === INFINITY) {
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
       * @return {module:util-x~bigobject} {@link module:util-x~bigobject this} * y
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
       * @return {string} A string representation of this.
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
       * @return {string} A string representation of this.
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
       * @return {string} A string representation of this.
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
       * @return {string} A string representation of this.
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
       * @return {string} A string representation of this.
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
       * @return {string} A string representation of this.
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
       * @return {boolean} True if inputArg is a {@link module:util-x~bigobject Big number} otherwise false.
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
       * @return {boolean} True if inputArg is a sibling object, otherwise false.
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
       * @return {module:util-x~bigerror}
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
       * @return {string}
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
     * @return {boolean}
     */
    function expectedException(actual, expected) {
      var storeState,
        val;

      /*jslint eqeq:true */
      /*jshint eqnull:true */
      if (actual == null) {
        return false;
      }

      /*jslint eqeq:true */
      /*jshint eqnull:true */
      if (expected == null) {
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
     * @return {undefined}
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
     * @return {undefined}
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
           * @return {object}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
         */
        notEqual: $assign({
          value: function (actual, expected, message, stackStartFunction) {
            /*jslint eqeq:true */
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
         * @return {undefined}
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
   * Applies utilx to the native objects.
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
   * @function module:util-x~addMethodsList
   * @param {Object} object
   * @param {String} key
   */
  function defineItem(to, key, value) {
    var item;

    if (!$isPrimitive(item) && $isPlainObject(item)) {
      item = {};
    } else {
      item = value;
    }

    $defineProperty(to, key, $assign({
      value: item
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
   * @return {Object}
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
}(((typeof window === 'function' || typeof window === 'object') && window) ||
  (typeof self === 'object' && self) ||
  (typeof global === 'object' && global) ||
  (typeof this === 'object' && this) || {},
  typeof module === 'object' && module, (typeof define === 'function' || false) && define));
