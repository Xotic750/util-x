/**
 * @file {@link @@HOMEPAGE @@MODULE}. @@DESCRIPTION.
 * @version @@VERSION
 * @author @@AUTHORNAME <@@AUTHOREMAIL>
 * @copyright @@COPYRIGHT @@AUTHORNAME
 * @license {@link <@@LICLINK> @@LICENSE}
 * @module @@MODULE
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

(function (globalThis, Math, JSON, module, define) {
    /* jshint -W034 */
    'use strict';

    var baseObject = {},
        toStringFN = baseObject.toString,
        hasOwnPropertyFN = baseObject.hasOwnProperty,
        propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
        CtrObject = baseObject.constructor,
        baseObjectPrototype = CtrObject.prototype,
        noNewCtrObject = CtrObject,
        boxedString = noNewCtrObject('a'),
        isIsFn = CtrObject.is,
        getPrototypeOfFN = CtrObject.getPrototypeOf,
        keysFN = CtrObject.keys,
        freezeFN = CtrObject.freeze,
        isFrozenFN = CtrObject.isFrozen,
        isPrototypeOfFN = CtrObject.prototype.isPrototypeOf,
        objectCreateFN = CtrObject.create,
        getOwnPropDescFN = CtrObject.getOwnPropertyDescriptor,
        definePropertyFN = CtrObject.defineProperty,
        definePropertyPatch1,
        definePropertyPatch2,
        definePropertyPatch3,
        freezeObject,

        baseArray = [],
        isArrayFN = baseArray.isArray,
        spliceFN = baseArray.splice,
        forEachFN = baseArray.forEach,
        someFN = baseArray.some,
        mapFN = baseArray.map,
        sliceFN = baseArray.slice,
        filterFN = baseArray.filter,
        reduceFN = baseArray.reduce,
        sortFN = baseArray.sort,
        indexOfFN = baseArray.indexOf,
        lastIndexOfFN = baseArray.lastIndexOf,
        CtrArray = baseArray.constructor,

        baseString = '',
        splitFN = baseString.split,
        startsWithFN = baseString.startsWith,
        endsWithFN = baseString.endsWith,
        containsFN = baseString.contains,
        trimFN = baseString.trim,
        CtrString = baseString.constructor,
        repeatFN = CtrString.repeat,

        baseNumber = 0,
        CtrNumber = baseNumber.constructor,
        isFiniteFN = CtrNumber.isFinite,
        isNaNFN = CtrNumber.isNaN,
        toIntegerFN = CtrNumber.toInteger,
        isIntegerFN = CtrNumber.isInteger,

        baseBoolean = true,
        CtrBoolean = baseBoolean.constructor,

        baseFunction = function () {
            return;
        },
        tostringFnFN = baseFunction.toString,
        CtrFunction = baseFunction.constructor,
        noNewCtrFunction = CtrFunction,

        globalIsNaN = isNaN,
        globalIsFinite = isFinite,
        globalMathSign = Math.sign,
        globalMathMin = Math.min,
        globalMathMax = Math.max,
        globalMathFloor = Math.floor,
        globalMathCeil = Math.ceil,
        globalMathAbs = Math.abs,
        globalMathRandom = Math.random,
        globalJsonParse,
        globalJsonStringify,

        protoName = '__proto__',
        defineGetter = '__defineGetter__',
        defineSetter = '__defineSetter__',
        lookupGetter = '__lookupGetter__',
        lookupSetter = '__lookupSetter__',
        lookupGetterFN = baseObject[lookupGetter],
        lookupSetterFN = baseObject[lookupSetter],
        defineGetterFN = baseObject[defineGetter],
        defineSetterFN = baseObject[defineSetter],

        objectName = 'object',
        functionName = 'function',
        calleeString = 'callee',
        lengthString = 'length',
        prototypeString = 'prototype',
        toStringString = 'toString',
        constructorString = 'constructor',
        valueString = 'value',
        sentinelString = 'sentinel',
        testString = 'test',
        stackString = 'stack',
        stacktraceString = 'stacktrace',
        messageString = 'message',
        newLine = '\n',
        factoryString = 'factory',
        setString = 'set',
        getString = 'get',
        emptyString = '',
        dotString = '.',

        argumentsString = '[object Arguments]',
        functionString = '[object Function]',
        objectString = '[object Object]',
        undefinedString = '[object Undefined]',
        nullString = '[object Null]',
        errorString = '[object Error]',
        regexpString = '[object RegExp]',
        arrayString = '[object Array]',
        dateString = '[object Date]',

        rxSplitNewLine = new RegExp('\\r\\n|\\n'),
        rxPlusMinus = new RegExp('^[+\\-]?'),
        rxNpcgCheck = new RegExp('()??'),
        rxNotDigits = new RegExp('^\\d+$'),
        rxTest = new RegExp(testString),
        rxEscapeThese = new RegExp('[\\[\\](){}?*+\\^$\\\\.|]', 'g'),
        rxBeginsFunction = new RegExp('^\\s*\\bfunction\\b'),
        rxOperaNative,
        wsTrimRX,

        constantProperties = {
            enumerable: false,
            writable: false,
            configurable: false
        },
        notEnumerableProperties = {
            enumerable: false,
            writable: true,
            configurable: true
        },

        patchedIEErrorToString = false,
        hasDontEnumBug = true,
        hasFuncProtoBug = false,
        testObject1,
        testObject2,
        TestConstructor,
        previousIEErrorToString,
        isArgumentsCheck,
        compliantExecNpcg,
        fixOpera10GetPrototypeOf,
        testProp,
        testValue,
        shouldSplitString,
        isOkToUseOtherErrors,
        stringSplitReplacer,
        isFunctionInternal,
        isNativeFunction,

        // JSON compliance result
        isSupportedResult,

        // JSON stringify variables
        stringifiedValue,
        escapableRxString,
        rxEscapable,
        stringifyGap,
        stringifyIndent,
        stringifyMeta,
        stringifyReplacer,
        stringifyQuote,
        stringifyToString,

        // JSON parse variables
        threwSynatxError,
        rxParseProtect1,
        rxParseProtect2,
        rxParseProtect3,
        rxParseProtect4,
        parseRxCharacterString,
        rxParseCharacterTest,

        /**
         * For hasOwnProperty bug.
         * @ignore
         * @type {array.<string>}
         */
        defaultProperties = [
            toStringString,
            'toLocaleString',
            'valueOf',
            'hasOwnProperty',
            'isPrototypeOf',
            'propertyIsEnumerable',
            constructorString
        ],

        whiteSpacesList = [
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
        whiteSpacesString,

        publicUtil,

        /**
         * @namespace utilx
         */

        $ = {};

    /**
     * +0
     * @memberOf utilx
     * @type {number}
     */
    $.POSITIVE_ZERO = +0;

    /**
     * -0
     * @memberOf utilx
     * @type {number}
     */
    $.NEGATIVE_ZERO = -0;

    /**
     * 128
     * @memberOf utilx
     * @type {number}
     */
    $.WORD8 = 128;

    /**
     * 256
     * @memberOf utilx
     * @type {number}
     */
    $.UWORD8 = 256;

    /**
     * 65536
     * @memberOf utilx
     * @type {number}
     */
    $.WORD16 = 32768;

    /**
     * 32768
     * @memberOf utilx
     * @type {number}
     */
    $.UWORD16 = 65536;

    /**
     * 2147483648
     * @memberOf utilx
     * @type {number}
     */
    $.WORD32 = 2147483648;

    /**
     * 4294967296
     * @memberOf utilx
     * @type {number}
     */
    $.UWORD32 = 4294967296;

    /**
     * 4294967295
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_UINT32 = 4294967295;

    /**
     * 2147483647
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_INT32 = 2147483647;

    /**
     * -2147483648
     * @memberOf utilx
     * @type {number}
     */
    $.MIN_INT32 = -2147483648;

    /**
     * 65535
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_UINT16 = 65535;

    /**
     * 32767
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_INT16 = 32767;

    /**
     * -32768
     * @memberOf utilx
     * @type {number}
     */
    $.MIN_INT16 = -32768;

    /**
     * 255
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_UINT8 = 255;

    /**
     * 127
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_INT8 = 127;

    /**
     * -128
     * @memberOf utilx
     * @type {number}
     */
    $.MIN_INT8 = -128;

    /**
     * 9007199254740991
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_INTEGER = 9007199254740991;

    /**
     * -9007199254740991
     * @memberOf utilx
     * @type {number}
     */
    $.MIN_INTEGER = -9007199254740991;

    /**
     * -9007199254740991
     * @memberOf utilx
     * @type {number}
     */
    $.UNSAFE_INTEGER = 9007199254740992;

    /**
     * Infinity
     * @memberOf utilx
     * @type {number}
     */
    $.POSITIVE_INFINITY = Infinity;

    /**
     * -Infinity
     * @memberOf utilx
     * @type {number}
     */
    $.NEGATIVE_INFINITY = -Infinity;

    /**
     * 1.7976931348623157e+308
     * @memberOf utilx
     * @type {number}
     */
    $.MAX_VALUE = 1.7976931348623157e+308;

    /**
     * 5e-324
     * @memberOf utilx
     * @type {number}
     */
    $.MIN_VALUE = 5e-324;

    /**
     * NaN
     * @memberOf utilx
     * @type {number}
     */
    $.NAN = NaN;

    /**
     * 2.220446049250313e-16
     * @memberOf utilx
     * @type {number}
     */
    $.EPSILON = 2.220446049250313e-16;

    /**
     * Returns the primitive value undefined.
     * @memberOf utilx
     * @function
     * @return {undefined}
     */
    $.noop = function () {
        return;
    };

    /**
     * undefined
     * @memberOf utilx
     * @type {undefined}
     */
    $.privateUndefined = (function () {
        return $.noop();
    }());

    /**
     * Returns an arguments object of the srguments supplied.
     * @memberOf utilx
     * @function
     * @argument {...*} var_args
     * @return {undefined}
     */
    $.returnArgs = function () {
        return arguments;
    };

    /**
     * Coerces an input to a number.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toNumber = function (inputArg) {
        return +inputArg;
    };

    /**
     * Returns true if the operands are loosely equal.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.equal = function (a, b) {
        /*jslint eqeq: true */
        return a == b;
    };

    /**
     * Returns true if the operands are not loosely equal.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.notEqual = function (a, b) {
        /*jslint eqeq: true */
        return a != b;
    };

    /**
     * Returns true if the operands are strictly equal with no type conversion.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.strictEqual = function (a, b) {
        return a === b;
    };

    /**
     * Returns true if the operands are not strictly equal with no type conversion.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.notStrictEqual = function (a, b) {
        return a !== b;
    };

    /**
     * Returns true if the operand number is less than limit.
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    $.lt = function (number, limit) {
        return number < limit;
    };

    /**
     * Returns true if the operand number is less than or equal to limit.
     * @memberOf utilx
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    $.lte = function (number, limit) {
        return number <= limit;
    };

    /**
     * Returns true if the operand number is greater than limit.
     * @memberOf utilx
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    $.gt = function (number, limit) {
        return number > limit;
    };

    /**
     * Returns true if the operand number is greater than or equal to limit.
     * @memberOf utilx
     * @function
     * @param {number} number
     * @param {number} limit
     * @return {boolean}
     */
    $.gte = function (number, limit) {
        return number >= limit;
    };

    /**
     * The mod/remainder operator returns the first operand modulo of the second operand, that is,
     * number1 modulo number2, in the preceding statement, where number1 and number2 are numbers.
     * The modulo function is the integer remainder of dividing number1 by number2.
     * For example, 12 % 5 returns 2. The result will have the same sign as number1; that is, -1 % 2 returns -1.
     * Truncating division
     * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator}
     * @memberOf utilx
     * @function
     * @param {number} number1
     * @param {number} number2
     * @return {number}
     */
    $.mod = function (number1, number2) {
        return number1 % number2;
    };

    /**
     * Returns a number clamped to the range set by min and max.
     * @memberOf utilx
     * @function
     * @param {number} number
     * @param {number} min
     * @param {number} max
     * @return {number}
     */
    $.clamp = function (number, min, max) {
        return globalMathMin(globalMathMax(number, min), max);
    };

    /**
     * Returns true if the operand inputArg is undefined.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUndefined = function (inputArg) {
        return $.strictEqual(typeof inputArg, 'undefined');
    };

    /**
     * Returns true if the operand inputArg is null.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNull = function (inputArg) {
        return $.strictEqual(inputArg, null);
    };

    /**
     * Indicates if __proto__ is supported.
     * @memberOf utilx
     * @type {boolean}
     */
    $.isProtoSupported = $.isNull(baseObjectPrototype[protoName]);

    /**
     * Returns true if the operand inputArg is undefined or null.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUndefinedOrNull = function (value) {
        return $.isUndefined(value) || $.isNull(value);
    };

    /**
     * Returns true if the operand inputArg is a true.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isTrue = function (inputArg) {
        return $.strictEqual(inputArg, true);
    };

    /**
     * Returns true if the operand inputArg is a false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isFalse = function (inputArg) {
        return $.strictEqual(inputArg, false);
    };

    /**
     * Returns true if the operand inputArg is a boolean.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isBoolean = function (inputArg) {
        return $.isTrue(inputArg) || $.isFalse(inputArg);
    };

    /**
     * Converts any truthy or falsy expression into a boolean true or false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.toBoolean = function (inputArg) {
        return !!inputArg;
    };

    /**
     * Returns true if the operand inputArg is a number.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNumber = function (inputArg) {
        return $.strictEqual(typeof inputArg, 'number');
    };

    /**
     * Returns true if the operand inputArg is the number 0.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isZero = function (inputArg) {
        return $.strictEqual(inputArg, $.POSITIVE_ZERO);
    };

    /**
     * Returns true if the operand inputArg is the number 0 or +0.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isPositiveZero = function (inputArg) {
        return $.isZero(inputArg) && $.strictEqual(1 / inputArg, Infinity);
    };

    /**
     * Returns true if the operand inputArg is the number -0.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNegativeZero = function (inputArg) {
        return $.isZero(inputArg) && $.strictEqual(1 / inputArg, -Infinity);
    };

    /**
     * Returns true if the operand inputArg is a string.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isString = function (inputArg) {
        return $.strictEqual(typeof inputArg, 'string');
    };

    /**
     * Returns true if the operand inputArg is a primitive object.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isPrimitive = function (inputArg) {
        return $.isUndefinedOrNull(inputArg) ||
            $.isString(inputArg) ||
            $.isNumber(inputArg) ||
            $.isBoolean(inputArg);
    };

    /**
     * Returns true if the operand inputArg is not a primitive object.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNotPrimitive = function (inputArg) {
        return !$.isPrimitive(inputArg);
    };

    /**
     * Returns true if the operand inputArg is typeof Object.
     * @memberOf utilx
     * @name isTypeOfObject
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if ($.isTrue($.strictEqual(typeof rxTest, objectName))) {
        $.isTypeOfObject = function (inputArg) {
            return $.strictEqual(typeof inputArg, objectName);
        };
    } else {
        $.isTypeOfObject = function (inputArg) {
            return $.strictEqual(typeof inputArg, objectName) || $.isRegExp(inputArg);
        };
    }

    /**
     * Returns true if the operand inputArg is of type Object but not if null.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isTypeObject = function (inputArg) {
        return !$.isNull(inputArg) && $.isTypeOfObject(inputArg);
    };

    /**
     * Returns true if the operand inputArg is an empty string (ie '').
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isEmptyString = function (inputArg) {
        return $.strictEqual(inputArg, emptyString);
    };

    /**
     * Returns true if the operand inputArg is a string and is not empty.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isStringNotEmpty = function (inputArg) {
        return $.isString(inputArg) && !$.isEmptyString(inputArg, emptyString);
    };

    /**
     * Returns true if the operand inputArg is deemed numeric.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNumeric = function (inputArg) {
        var val = false,
            string;

        if ($.isNumber(inputArg) || $.isStringNotEmpty(inputArg)) {
            string = $.anyToString(inputArg).replace(rxPlusMinus, emptyString);
            if (!globalIsNaN(parseFloat(string)) && globalIsFinite(string)) {
                val = true;
            }
        }

        return val;
    };

    /**
     * The abstract operation throws an error if its argument is a value that cannot be
     * converted to an Object using $.argToObject, otherwise returns the argument.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @param {string} [msg]
     * @return {boolean}
     */
    $.checkObjectCoercible = function (inputArg) {
        if ($.isUndefinedOrNull(inputArg)) {
            throw new TypeError('Cannot convert "' + inputArg + '" to object');
        }

        return inputArg;
    };

    /**
     * The abstract operation converts its argument to a value of type Object
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    $.argToObject = function (inputArg) {
        var object = $.checkObjectCoercible(inputArg);

        if ($.isBoolean(object)) {
            object = new CtrBoolean(object);
        } else if ($.isNumber(object)) {
            object = new CtrNumber(object);
        } else if ($.isString(object)) {
            object = new CtrString(object);
        }

        return object;
    };

    /**
     * The abstract operation converts its argument to a value of type String
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {string}
     */
    // named $.anyToString instead of toString because of SpiderMonkey and Blackberry bug
    $.anyToString = function (inputArg) {
        var val;

        if ($.isString(inputArg)) {
            val = inputArg;
        } else if ($.isUndefined(inputArg)) {
            val = 'undefined';
        } else {
            val = String(inputArg);
        }

        return val;
    };

    /**
     * Returns true if the specified property is in the specified object.
     * @memberOf utilx
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
    $.hasProperty = function (object, property) {
        return property in object;
    };

    /**
     * Returns true if the operand inputArg is an argumenta object.
     * @memberOf utilx
     * @name isArguments
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if ($.strictEqual(toStringFN.call($.returnArgs()), argumentsString)) {
        $.isArguments = function (inputArg) {
            return $.strictEqual(toStringFN.call(inputArg), argumentsString);
        };
    } else if ($.strictEqual(toStringFN.call(hasOwnPropertyFN), functionString)) {
        isArgumentsCheck = function (inputArg) {
            return $.isTypeObject(inputArg) &&
                $.strictEqual(toStringFN.call(inputArg), objectString) &&
                hasOwnPropertyFN.call(inputArg, calleeString) &&
                hasOwnPropertyFN.call(inputArg, lengthString) &&
                $.isNumber(inputArg.length);
        };

        if ($.strictEqual(toStringFN.call(propertyIsEnumerableFN), functionString)) {
            $.isArguments = function (inputArg) {
                return isArgumentsCheck(inputArg) &&
                    !propertyIsEnumerableFN.call(inputArg, calleeString) &&
                    !propertyIsEnumerableFN.call(inputArg, lengthString);
            };
        } else {
            $.isArguments = isArgumentsCheck;
        }
    }

    if ($.isUndefined($.isArguments)) {
        $.isArguments = function (inputArg) {
            return $.isTypeObject(inputArg) &&
                $.strictEqual(toStringFN.call(inputArg), objectString) &&
                $.hasProperty(inputArg, calleeString) &&
                $.hasProperty(inputArg, lengthString) &&
                $.isNumber(inputArg.length);
        };
    }

    /**
     * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
     * @memberOf utilx
     * @name toObjectString
     * @function
     * @param {*} object
     * @return {string}
     */
    try {
        if ($.strictEqual(toStringFN.call(), undefinedString) &&
                $.strictEqual(toStringFN.call(null), nullString) &&
                $.strictEqual(toStringFN.call($.returnArgs()), argumentsString)) {

            $.toObjectString = function (object) {
                return toStringFN.call(object);
            };
        }
    } catch (ignore) {}

    if ($.isUndefined($.toObjectString)) {
        $.toObjectString = function (object) {
            var val;

            if ($.isUndefined(object)) {
                val = undefinedString;
            } else if ($.isNull(object)) {
                val = nullString;
            } else if ($.isArguments(object)) {
                val = argumentsString;
            } else {
                val = toStringFN.call(object);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is an error.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isError = function (inputArg) {
        return $.strictEqual($.toObjectString(inputArg), errorString) ||
            ($.isTypeObject(inputArg) && $.objectInstanceOf(inputArg, Error));
    };

    /**
     * Returns true if the operand inputArg is a RegExp.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isRegExp = function (inputArg) {
        return $.strictEqual($.toObjectString(inputArg), regexpString) &&
            $.isString(inputArg.source) && $.isBoolean(inputArg.global);
    };

    /**
     * Returns true if the operand inputArg is a native Function in IE. Used by isFunction.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isIENativeFunction(inputArg) {
        // $.toBoolean(inputArg)
        // we want return true or false

        // $.isUndefined(inputArg.toString)
        // native functions do not
        // contain a toString callback
        // as is for every user defined
        // function or object, even if deleted
        // so next step is a "safe" destructuration
        // assumption

        // rxBeginsFunction.test(inputArg)
        // we are looking for a function
        // and IE shows them with function
        // as first word. Eventually
        // there could be a space
        // (never happened, it does not hurt anyway)

        return $.toBoolean(inputArg) && $.isUndefined(inputArg.toString) && rxBeginsFunction.test(inputArg);
    }

    /**
     * Test if a function is native by simply trying to evaluate its original Function.prototype.toString call.
     * Used by isFunction.
     * @private
     * @name isNativeFunction
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    try {
        /*jslint evil: true */
        noNewCtrFunction('return (' + tostringFnFN.call(CtrFunction) + ');');
        /*jslint evil: false */
        rxOperaNative = new RegExp('^function \\S*\\(\\) \\{ \\[native code\\] \\}$');
        isNativeFunction = function (inputArg) {
            var val = false,
                ownToString = inputArg.toString;

            try {
                // no execution
                // just an error if it is native
                // every browser manifest native
                // functions with some weird char
                // that cannot be evaluated [native]
                /*jslint evil: true */
                noNewCtrFunction('return (' + ownToString.call(inputArg) + ');');
                /*jslint evil: false */
                val = rxOperaNative.test(ownToString());
            } catch (e) {
                val = true;
            }

            return val;
        };
    } catch (e) {
        isNativeFunction = function (inputArg) {
            var val = false,
                ownToString = inputArg.toString;

            try {
                // no execution
                // just an error if it is native
                // every browser manifest native
                // functions with some weird char
                // that cannot be evaluated [native]
                /*jslint evil: true */
                noNewCtrFunction('return (' + ownToString.call(inputArg) + ');');
                /*jslint evil: false */
            } catch (e) {
                val = true;
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by isFunction.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isFunctionBasic(inputArg) {
        return $.strictEqual($.toObjectString(inputArg), functionString) ||
            ($.strictEqual(typeof inputArg, functionName) &&
             $.strictEqual(typeof inputArg.call, functionName) &&
             $.strictEqual(typeof inputArg.apply, functionName));
    }

    /**
     * Returns true if the operand inputArg is a Function. Used by isFunction.
     * @private
     * @function
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
        tostringFnFN.call(globalThis.alert);
        tostringFnFN.call(globalIsNaN);
        tostringFnFN.call(globalIsFinite);
        tostringFnFN.call(globalMathMin);
        // this function is for every other browser
        isFunctionInternal = function (inputArg, n) {
            var val;

            if ($.isFalse(n)) {
                val = isFunctionBasic(inputArg);
            } else {
                val = isFunctionExtended(inputArg);
            }

            return val;
        };
    } catch (e) {
        isFunctionInternal = function (inputArg, n) {
            var val;

            if ($.isFalse(n)) {
                val = isFunctionBasic(inputArg);
            } else {
                val = isIENativeFunction(inputArg) || isFunctionExtended(inputArg);
            }

            return val;
        };
    }

    /**
     * Returns true if the operand inputArg is a Function.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isFunction = function (inputArg) {
        return isFunctionInternal(inputArg, false) || isFunctionInternal(inputArg, true);
    };

    /**
     * Returns true if the operand inputArg is a native Function.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isNativeFunction = function (inputArg) {
        return $.isFunction(inputArg) && (isNativeFunction(inputArg) || isIENativeFunction(inputArg));
    };

    /**
     * Returns true if the operand inputArg is an Object.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isObject = function (inputArg) {
        return $.strictEqual($.toObjectString(inputArg), objectString) && !$.isFunction(inputArg);
    };

    /**
     * Indicates if __defineGetter__ and __lookupSetter__ are supported.
     * @memberOf utilx
     * @type {boolean}
     */
    $.areGetSetSupported = $.isFunction(lookupGetterFN) && $.isFunction(lookupSetterFN);

    /**
     * Throws a TypeError if arguments is not a function otherwise returns the function.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {function}
     */
    function throwIfNotAFunction(inputArg) {
        if (!$.isFunction(inputArg)) {
            throw new TypeError(inputArg + ' is not a function');
        }

        return inputArg;
    }

    /**
     * Returns true if the operand inputArg is an object or function but not null.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isTypeObjectOrIsFunction(inputArg) {
        return $.isTypeObject(inputArg) || $.isFunction(inputArg);
    }

    /**
     * Throws a TypeError if the operand inputArg is not an object or not a function,
     * otherise returns the object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotTypeObjectOrIsNotFunction(inputArg) {
        if (!isTypeObjectOrIsFunction(inputArg)) {
            throw new TypeError('called on non-object');
        }

        return inputArg;
    }

    /**
     *
     * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
     * whose class internal property is "Array"; otherwise it returns false.
     * @memberOf utilx
     * @name arrayIsArray
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    // named $.arrayIsArray instead of isArray because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isArrayFN)) {
        $.arrayIsArray = isArrayFN;
    } else {
        $.arrayIsArray = function (inputArg) {
            return $.strictEqual($.toObjectString(inputArg), arrayString);
        };
    }

    /**
     * The arrayJoin() method joins all elements of an array into a string.
     * The separator is converted to a string if necessary.
     * If omitted, the array elements are separated with a comma.
     * @memberOf utilx
     * @function
     * @param {array} inputArg
     * @param {string} [separator]
     * @return {*}
     */
    $.arrayJoin = function (inputArg, separator) {
        $.checkObjectCoercible(inputArg);
        if ($.isUndefined(separator)) {
            separator = ',';
        }

        return baseArray.join.call(inputArg, separator);
    };

    /**
     * Returns true if the operand inputArg is a Date object.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isDate = function (inputArg) {
        return $.strictEqual($.toObjectString(inputArg), dateString);
    };

    /**
     * Determines whether two values are the same value.
     * @memberOf utilx
     * @name objectIs
     * @function
     * @param {*} x
     * @param {*} y
     * @return {boolean}
     */
    // named $.objectIs instead of $.objectIs because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isIsFn)) {
        $.objectIs = isIsFn;
    } else {
        $.objectIs = function (x, y) {
            var val;

            if ($.strictEqual(x, y)) {
                if ($.isZero(x)) {
                    val = $.strictEqual(1 / x, 1 / y);
                } else {
                    val = true;
                }
            } else {
                val = $.notStrictEqual(x, x) && $.notStrictEqual(y, y);
            }

            return val;
        };
    }

    /**
     * Returns true if the operands are of the same typeof.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @param {...*} [var_args]
     * @return {boolean}
     */
    $.areSameTypeOf = function (a, b) {
        var length = arguments.length,
            typeA,
            val;

        if ($.lt(length, 2)) {
            throw new SyntaxError('must supply at least 2 arguments');
        }

        typeA = typeof a;
        val = $.strictEqual(typeA, typeof b);
        if ($.isTrue(val) && $.gt(length, 2)) {
            val = !$.arraySome($.arraySlice(arguments, 2), function (argument) {
                return $.notStrictEqual(typeA, typeof argument);
            });
        }

        return val;
    };

    /**
     * Returns true if the operands are of the same object class.
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @param {...*} [var_args]
     * @return {boolean}
     */
    $.areSameObjectClass = function (a, b) {
        var length = arguments.length,
            typeA,
            val;

        if ($.lt(length, 2)) {
            throw new SyntaxError('must supply at least 2 arguments');
        }

        typeA = $.toObjectString(a);
        val = $.strictEqual(typeA, $.toObjectString(b));
        if ($.isTrue(val) && $.gt(length, 2)) {
            val = !$.arraySome($.arraySlice(arguments, 2), function (argument) {
                return $.notStrictEqual(typeA, $.toObjectString(argument));
            });
        }

        return val;
    };

    /**
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     * @private
     * @function
     * @param {(number|string)} value
     * @param {(number|string)} min
     * @param {(number|string)} max
     * @return {boolean}
     */
    function inRange(value, min, max) {
        if (!$.isNumber(value) && !$.isString(value)) {
            throw new TypeError('arguments must be either numbers or strings');
        }

        if ($.strictEqual(min, max) || $.numberIsNaN(min) || $.numberIsNaN(max)) {
            throw new RangeError('min and max do not define a range');
        }

        return $.gte(value, min) && $.lte(value, max);
    }

    /**
     * Returns true if the operand value is greater than or equal to min and is less than or equal to max.
     * @memberOf utilx
     * @function
     * @param {(number|string)} value
     * @param {(number|string)} min
     * @param {(number|string)} max
     * @return {boolean}
     */
    $.inRange = function (value, min, max) {
        if (!$.areSameTypeOf(value, min, max)) {
            throw new TypeError('arguments must be of the same type');
        }

        return inRange(value, min, max);
    };

    /**
     * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
     * @memberOf utilx
     * @name numberIsNaN
     * @function
     * @param {*} number
     * @return {boolean}
     */
    // named $.numberIsNaN instead of isNaN because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isNaNFN)) {
        $.numberIsNaN = isNaNFN;
    } else {
        $.numberIsNaN = function (number) {
            return $.objectIs(number, NaN);
        };
    }

    /**
     * The function determines whether the passed value is finite.
     * More robust version of the original global isFinite.
     * @memberOf utilx
     * @name numberIsFinite
     * @function
     * @param {*} number
     * @return {boolean}
     */
    // named $.numberIsFinite instead of isFinite because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isFiniteFN)) {
        $.numberIsFinite = isFiniteFN;
    } else {
        $.numberIsFinite = function (number) {
            return $.isNumber(number) && globalIsFinite(number);
        };
    }

    /**
     * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
     * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
     * "negative number", "positive zero",  "negative zero" and NaN respectively
     * @memberOf utilx
     * @name mathSign
     * @function
     * @param {*} value
     * @return {number}
     */
    // named mathSign instead of sign because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(globalMathSign)) {
        $.mathSign = globalMathSign;
    } else {
        $.mathSign = function nfeSign(value) {
            var number = $.toNumber(value),
                val;

            if ($.isZero(number) || $.numberIsNaN(number)) {
                val = number;
            } else if ($.lt(number, $.POSITIVE_ZERO)) {
                val = -1;
            } else {
                val = 1;
            }

            return val;
        };
    }

    /**
     * Returns true if the argument is zero or not finite.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isZeroOrNotFinite(inputArg) {
        return $.isZero(inputArg) || !$.numberIsFinite(inputArg);
    }

    /**
     * The function evaluates the passed value and converts it to an integer.
     * @memberOf utilx
     * @name numberToInteger
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    // named $.numberToInteger instead of toInteger because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(toIntegerFN)) {
        $.numberToInteger = toIntegerFN;
    } else {
        $.numberToInteger = function (inputArg) {
            var number = $.toNumber(inputArg),
                val;

            if ($.numberIsNaN(number)) {
                val = $.POSITIVE_ZERO;
            } else if (isZeroOrNotFinite(number)) {
                val = number;
            } else {
                val = $.mathSign(number) * globalMathFloor(globalMathAbs(number));
            }

            return val;
        };
    }

    /**
     * The $.numberIsInteger() method determines whether the passed value is an integer.
     * If the target value is an integer, return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @name numberIsInteger
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    // named $.numberIsInteger instead of toInteger because of SpiderMonkey and Blackberry bug
    try {
        if (isIntegerFN($.UNSAFE_INTEGER) || isIntegerFN(-$.UNSAFE_INTEGER)) {
            throw new Error('Failed unsafe integer check');
        }

        $.numberIsInteger = isIntegerFN;
    } catch (e) {
        $.numberIsInteger = function nfeIsInteger(inputArg) {
            return !$.numberIsNaN(inputArg) && $.numberIsFinite(inputArg) &&
                inRange(inputArg, $.MIN_INTEGER, $.MAX_INTEGER) &&
                $.strictEqual($.numberToInteger(inputArg), inputArg);
        };
    }

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range -2^31 through 2^31-1, inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toInt32 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.mod($.mathSign(number) * globalMathFloor(globalMathAbs(number)), $.UWORD32);
            if ($.gt(val, $.MAX_INT32)) {
                val -= $.UWORD32;
            } else if ($.lt(val, $.MIN_INT32)) {
                val += $.UWORD32;
            }
        }

        return val;
    };

    /**
     * The $.isInt32() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^31 through 2^31-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isInt32 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.MIN_INT32, $.MAX_INT32);
    };

    /**
     * The modulo function is a modified implementation of the `%` operator. This algorithm uses the
     * formula `remainder = dividend - divisor * quotient`; the `%` operator uses a truncating division.
     * Rounding division
     * @see {@link http://www.ecma-international.org/ecma-262/5.1/#sec-11.5.3 Applying the % Operator}
     * @memberOf utilx
     * @function
     * @param {number} dividend
     * @param {number} divisor
     * @return {number}
     */
    $.modulo = function (dividend, divisor) {
        return dividend - divisor * globalMathFloor(dividend / divisor);
    };

    /**
     * The abstract operation converts its argument to one of 2^53 integer values in
     * the range 0 through 2^53-1,inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toUint = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.modulo($.numberToInteger(number), $.UNSAFE_INTEGER);
        }

        return val;
    };

    /**
     * The $.isUint() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^53-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUint = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.POSITIVE_ZERO, $.MAX_INTEGER);
    };

    /**
     * The abstract operation converts its argument to one of 2^32 integer values in
     * the range 0 through 2^32-1,inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toUint32 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.modulo($.numberToInteger(number), $.UWORD32);
        }

        return val;
    };

    /**
     * The $.isUint32() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^32-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUint32 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.POSITIVE_ZERO, $.MAX_UINT32);
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range -2^15 through 2^15-1, inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toInt16 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.mod($.mathSign(number) * globalMathFloor(globalMathAbs(number)), $.UWORD16);
            if ($.gt(val, $.MAX_INT16)) {
                val -= $.UWORD16;
            } else if ($.lt(val, $.MIN_INT16)) {
                val += $.UWORD16;
            }
        }

        return val;
    };

    /**
     * The $.isInt16() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^15 through 2^15-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isInt16 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.MIN_INT16, $.MAX_INT16);
    };

    /**
     * The abstract operation converts its argument to one of 2^16 integer values in
     * the range 0 through 2^16-1,inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toUint16 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.modulo($.numberToInteger(number), $.UWORD16);
        }

        return val;
    };

    /**
     * The $.isUint16() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^16-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUint16 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.POSITIVE_ZERO, $.MAX_UINT16);
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range -2^7 through 2^7-1, inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toInt8 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val  = $.mod($.mathSign(number) * globalMathFloor(globalMathAbs(number)), $.UWORD8);
            if ($.gt(val, $.MAX_INT8)) {
                val -= $.UWORD8;
            } else if ($.lt(val, $.MIN_INT8)) {
                val += $.UWORD8;
            }
        }

        return val;
    };

    /**
     * The $.isInt8() method determines whether the passed value is an integer.
     * If the target value is an integer in the range -2^7 through 2^7-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isInt8 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.MIN_INT8, $.MAX_INT8);
    };

    /**
     * The abstract operation converts its argument to one of 2^8 integer values in
     * the range 0 through 2^8-1,inclusive.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {number}
     */
    $.toUint8 = function (inputArg) {
        var number = $.toNumber(inputArg),
            val;

        if (isZeroOrNotFinite(number)) {
            val = $.POSITIVE_ZERO;
        } else {
            val = $.modulo($.numberToInteger(number), $.UWORD8);
        }

        return val;
    };

    /**
     * The $.isUint8() method determines whether the passed value is an integer.
     * If the target value is an integer in the  range 0 through 2^8-1, inclusive,
     * return true, otherwise return false.
     * If the value is NaN or infinite, return false.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isUint8 = function (inputArg) {
        return $.numberIsInteger(inputArg) &&
            inRange(inputArg, $.POSITIVE_ZERO, $.MAX_UINT8);
    };

    /**
     * The arrayPush() method adds one or more elements to the end of an array and
     * returns the new length of the array.
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {...*} var_args
     * @return {number}
     */
    // named $.arrayPush instead of push because of SpiderMonkey and Blackberry bug
    if ($.strictEqual(baseArray.push.call([], 0), 1)) {
        $.arrayPush = function (array) {
            return baseArray.push.apply(array, $.arraySlice(arguments, 1));
        };
    } else {
        $.arrayPush = function (array) {
            baseArray.push.apply(array, $.arraySlice(arguments, 1));

            return array.length;
        };
    }

    /**
     * The arrayUnshift() method adds one or more elements to the beginning of an array and
     * returns the new length of the array.
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {...*} var_args
     * @return {number}
     */
    // named $.arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
    if ($.strictEqual(baseArray.unshift.call([], 0), 1)) {
        $.arrayUnshift = function (array) {
            return baseArray.unshift.apply(array, $.arraySlice(arguments, 1));
        };
    } else {
        $.arrayUnshift = function (array) {
            baseArray.unshift.apply(array, $.arraySlice(arguments, 1));

            return array.length;
        };
    }

    /**
     * Returns a string only if the arguments is coercible otherwise throws an error.
     * @private
     * @function
     * @param {*} inputArg
     * @return {string}
     */
    function onlyCoercibleToString(inputArg) {
        return $.anyToString($.checkObjectCoercible(inputArg));
    }

    /**
     * Returns an integer clamped to the range set by min and max.
     * @private
     * @function
     * @param {number} number
     * @param {number} min
     * @param {number} max
     * @return {string}
     */
    function clampInteger(number, min, max) {
        return $.clamp($.numberToInteger(number), $.numberToInteger(min), $.numberToInteger(max));
    }

    /**
     * Splits a String object into an array of strings by separating the string into substrings.
     * @memberOf utilx
     * @name stringSplit
     * @function
     * @param {string} stringArg
     * @param {string} [separator]
     * @param {number} [limit]
     * @return {array.<string>}
     */
    // named $.stringSplit instead of split because of SpiderMonkey and Blackberry bug
    if ($.notStrictEqual(splitFN.call(testString, new RegExp('(?:test)*')).length, 2) ||
            $.notStrictEqual(splitFN.call(dotString, new RegExp('(.?)(.?)')).length, 4) ||
            $.strictEqual(splitFN.call('tesst', new RegExp('(s)*'))[1], 't') ||
            !$.isZero(splitFN.call(emptyString, new RegExp('.?')).length) ||
            $.gt(splitFN.call(dotString, new RegExp('()()')).length, 1)) {

        /**
         * @private
         * @function
         * @param {regexp} separator
         * @param {array} match
         * @param {arguments} args
         */
        stringSplitReplacer = function (separator, match, args) {
            var length = args.length - 2,
                index;

            $.arrayFirst(match).replace(separator, function () {
                for (index = 1; $.lt(index, length); index += 1) {
                    if ($.isUndefined(arguments[index])) {
                        $.arrayAssign(match, index, $.privateUndefined);
                    }
                }
            });
        };

        /**
         * @private
         * @type {boolean}
         */
        compliantExecNpcg = $.isUndefined(rxNpcgCheck.exec(emptyString)[1]);
        $.stringSplit = function (stringArg, separator, limit) {
            var string = onlyCoercibleToString(stringArg),
                flags,
                lastLastIndex,
                separator2,
                match,
                lastIndex,
                lastLength,
                val;

            // "0".split(undefined, 0) -> []
            if ($.isUndefined(separator) && $.isZero(limit)) {
                val = [];
            } else if ($.isRegExp(separator)) {
                flags = 'g';
                if (separator.ignoreCase) {
                    flags += 'i';
                }

                if (separator.multiline) {
                    flags += 'm';
                }

                if (separator.extended) {
                    flags += 'x';
                }

                if (separator.sticky) {
                    flags += 'y';
                }

                separator = new RegExp(separator.source, flags);
                if ($.isFalse(compliantExecNpcg)) {
                    separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
                }

                if ($.isUndefined(limit)) {
                    limit = $.MAX_UINT32;
                } else {
                    limit = $.toUint32(limit);
                }

                val = [];
                lastLastIndex = $.POSITIVE_ZERO;
                match = separator.exec(string);
                while (match) {
                    lastIndex = match.index + $.arrayFirst(match).length;
                    if ($.gt(lastIndex, lastLastIndex)) {
                        $.arrayPush(val, string.slice(lastLastIndex, match.index));
                        if ($.isFalse(compliantExecNpcg) && $.gt(match.length, 1)) {
                            stringSplitReplacer(separator2, match, arguments);
                        }

                        if ($.gt(match.length, 1) && $.lt(match.index, string.length)) {
                            val = val.concat(match.slice(1));
                        }

                        lastLength = $.arrayFirst(match).length;
                        lastLastIndex = lastIndex;
                        if ($.gte(val.length, limit)) {
                            break;
                        }
                    }

                    if ($.strictEqual(separator.lastIndex, match.index)) {
                        separator.lastIndex += 1;
                    }

                    match = separator.exec(string);
                }

                if ($.strictEqual(lastLastIndex, string.length)) {
                    if (lastLength || !separator.test(emptyString)) {
                        $.arrayPush(val, emptyString);
                    }
                } else {
                    $.arrayPush(val, string.slice(lastLastIndex));
                }

                if ($.gt(val.length, limit)) {
                    val = val.slice($.POSITIVE_ZERO, limit);
                }
            } else {
                val = splitFN.apply(string, $.arraySlice(arguments, 1));
            }

            return val;
        };
    } else {
        $.stringSplit = function (stringArg, separator, limit) {
            var val;

            // "0".split(undefined, 0) -> []
            if ($.isUndefined(separator) && $.isZero(limit)) {
                val = [];
            } else {
                val = splitFN.apply(onlyCoercibleToString(stringArg), $.arraySlice(arguments, 1));
            }

            return val;
        };
    }

    /**
     * Coerces its argument to a string and returns the first character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    $.firstChar = function (inputArg) {
        return onlyCoercibleToString(inputArg).charAt($.POSITIVE_ZERO);
    };

    /**
     * Coerces inputArg to a string and compares the first character to the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {boolean}
     */
    $.firstCharIs = function (inputArg, character) {
        return $.strictEqual($.firstChar(inputArg), $.firstChar(character));
    };

    /**
     * Coerces its argument to a string and returns the last character of that string.
     * If the argument is an empty string, returns an empty string.
     * Throws an error if the argument can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    $.lastChar = function (inputArg) {
        var thisStr = onlyCoercibleToString(inputArg);

        return thisStr.charAt(thisStr.length - 1);
    };

    /**
     * Coerces inputArg to a string and compares the last character to the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {boolean}
     */
    $.lastCharIs = function (inputArg, character) {
        return $.strictEqual($.lastChar(inputArg), $.firstChar(character));
    };

    /**
     * Coerces inputArg to a string and counts the occurences of the argument character.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @return {number}
     */
    $.countCharacter = function (inputArg, character) {
        var firstChar = $.firstChar(character),
            val;

        if ($.isEmptyString(firstChar)) {
            val = Infinity;
        } else {
            val = clampInteger($.stringSplit(inputArg,
                                             $.firstChar(character)).length - 1, $.POSITIVE_ZERO, Infinity);
        }

        return val;
    };

    /**
     * Returns true if arguments is less than zero or is equal to positive infinity
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isLtZeroOrPositiveInfinity(inputArg) {
        return $.lt(inputArg, $.POSITIVE_ZERO) || $.strictEqual(inputArg, Infinity);
    }

    /**
     * Coerces inputArg to a string and repeatedly adds the argument character to the beginning until
     * the string is greater than or equal to the specified length.
     * Throws an error if the arguments can not be coerced, i.e. null or undefined.
     * @memberOf utilx
     * @function
     * @param {string} inputArg
     * @param {string} character
     * @param {number} size
     * @return {string}
     */
    $.padLeadingChar = function (inputArg, character, size) {
        var string = onlyCoercibleToString(inputArg),
            singleChar = $.firstChar(character),
            count = $.numberToInteger(size) - string.length;

        if (isLtZeroOrPositiveInfinity(count)) {
            count = $.POSITIVE_ZERO;
        }

        return $.stringRepeat(singleChar, count) + string;
    };

    /**
     * Repeat the current string several times, return the new string. Used by stringRepeat
     * @private
     * @function
     * @param {string} s
     * @param {number} times
     * @return {string}
     */
    function stringRepeatRep(s, times) {
        var half,
            val;

        if ($.lt(times, 1)) {
            val = emptyString;
        } else if ($.mod(times, 2)) {
            val = stringRepeatRep(s, times - 1) + s;
        } else {
            half = stringRepeatRep(s, times / 2);
            val = half + half;
        }

        return val;
    }

    /**
     * Repeat the current string several times, return the new string.
     * @memberOf utilx
     * @name stringRepeat
     * @function
     * @param {string} string
     * @param {number} times
     * @return {string}
     */
    // named $.stringRepeat instead of repeat because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(repeatFN)) {
        $.stringRepeat = function (string, times) {
            return repeatFN.call(string, times);
        };
    } else {
        $.stringRepeat = function (string, count) {
            var thisString = onlyCoercibleToString(string),
                times = $.numberToInteger(count);

            if (isLtZeroOrPositiveInfinity(times)) {
                throw new RangeError();
            }

            return stringRepeatRep(thisString, times);
        };
    }

    /**
     * Determines whether a string begins with the characters of another string,
     * returning true or false as appropriate.
     * @memberOf utilx
     * @name stringStartsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    // named stringStartsWith instead of startsWith because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(startsWithFN)) {
        $.stringStartsWith = function (string, searchString, position) {
            return startsWithFN.call(string, searchString, position);
        };
    } else {
        $.stringStartsWith = function (string, searchString, position) {
            var thisStr = onlyCoercibleToString(string),
                searchStr = $.anyToString(searchString),
                start = clampInteger(position, $.POSITIVE_ZERO, thisStr.length);

            return $.strictEqual(thisStr.slice(start, start + searchStr.length), searchStr);
        };
    }

    /**
     * Determines whether a string ends with the characters of another string,
     * returning true or false as appropriate.
     * @memberOf utilx
     * @name stringEndsWith
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    // named stringEndsWith instead of endsWith because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(endsWithFN)) {
        $.stringEndsWith = function (string, searchString, position) {
            return endsWithFN.call(string, searchString, position);
        };
    } else {
        $.stringEndsWith = function (string, searchString, position) {
            var thisStr = onlyCoercibleToString(string),
                searchStr = $.anyToString(searchString),
                thisLen = thisStr.length,
                end,
                start;

            if ($.isUndefined(position)) {
                position = thisLen;
            } else {
                position = $.numberToInteger(position);
            }

            end = $.clamp(position, $.POSITIVE_ZERO, thisLen);
            start = end - searchStr.length;

            return $.gte(start, $.POSITIVE_ZERO) && $.strictEqual(thisStr.slice(start, end), searchStr);
        };
    }

    /**
     * Determines whether a string contains the characters of another string, returning true or
     * false as appropriate.
     * @memberOf utilx
     * @name stringContains
     * @function
     * @param {string} string
     * @param {string} searchString
     * @param {number} [position]
     * @return {boolean}
     */
    // named $.stringContains instead of contains because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(containsFN)) {
        $.stringContains = function (string, searchString, position) {
            return containsFN.call(string, searchString, position);
        };
    } else {
        $.stringContains = function (string, searchString, position) {
            var thisStr = onlyCoercibleToString(string),
                searchStr = $.anyToString(searchString),
                thisLen = thisStr.length;

            if ($.isUndefined(position)) {
                position = $.POSITIVE_ZERO;
            } else {
                position = $.numberToInteger(position);
            }

            return $.notStrictEqual(baseString.indexOf.call(thisStr, searchStr,
                                                                $.clamp(position, $.POSITIVE_ZERO, thisLen)), -1);
        };
    }

    /**
     * Return the value of the [[Prototype]] internal property of object.
     * @memberOf utilx
     * @name objectGetPrototypeOf
     * @function
     * @param {object} object
     * @return {Prototype}
     */
    // named $.objectGetPrototypeOf instead of getPrototypeOf because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(getPrototypeOfFN)) {
        $.objectGetPrototypeOf = function (object) {
            return getPrototypeOfFN(throwIfIsNotTypeObjectOrIsNotFunction(object));
        };
    } else if ($.isNull(CtrObject.prototype[protoName])) {
        $.objectGetPrototypeOf = function (object) {
            return throwIfIsNotTypeObjectOrIsNotFunction(object)[protoName];
        };
    } else {
        if ($.notStrictEqual($.returnArgs().constructor.prototype, baseObjectPrototype)) {
            fixOpera10GetPrototypeOf = true;
        }

        $.objectGetPrototypeOf = function (object) {
            if ($.strictEqual(throwIfIsNotTypeObjectOrIsNotFunction(object), baseObjectPrototype)) {
                return null;
            }

            var ctrProto;

            if ($.isFunction(object.constructor)) {
                if (fixOpera10GetPrototypeOf && $.isArguments(object)) {
                    ctrProto = baseObjectPrototype;
                } else {
                    ctrProto = object.constructor.prototype;
                }
            } else if ($.isObject(object[protoName])) {
                ctrProto = object[protoName];
            } else {
                ctrProto = baseObjectPrototype;
            }

            if ($.strictEqual(object, ctrProto)) {
                return baseObjectPrototype;
            }

            return ctrProto;
        };
    }

    /**
     * Returns true if the specified searchElement is in the specified array.
     * Using strict equality (the same method used by the === comparison operator).
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {*} searchElement
     * @return {boolean}
     */
    $.arrayContains = function (array, searchElement) {
        return $.notStrictEqual($.arrayIndexOf(array, searchElement), -1);
    };

    /**
     * The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable.
     * Used by $.objectPropertyIsEnumerable
     * @private
     * @function
     * @param {*} object
     * @param {string} property
     * @return {boolean}
     */
    function propertyIsEnumerableCustom(object, property) {
        // KJS in Safari 2 is not ECMAScript compatible and lacks crucial methods
        // such as propertyIsEnumerable. We therefore use a workaround.
        var val = false,
            key;

        if ($.hasProperty(object, property)) {
            for (key in object) {
                if ($.strictEqual(key, property) && $.objectHasOwnProperty(object, property)) {
                    val = true;
                    break;
                }
            }
        }

        return val;
    }

    /*
     * Test for hasDontEnumBug and hasFuncProtoBug.
     */
    testObject1 = {
        toString: null
    };

    for (testProp in testObject1) {
        if ($.strictEqual(testProp, toStringString) &&
                $.isNull(testObject1[testProp])) {

            hasDontEnumBug = false;
        }
    }

    testObject1 = function () {
        return;
    };

    for (testProp in testObject1) {
        if ($.strictEqual(testProp, prototypeString)) {
            hasFuncProtoBug = true;
        }
    }

    /**
     * The propertyIsEnumerable() method returns a Boolean indicating whether the specified property is enumerable.
     * @memberOf utilx
     * @name objectPropertyIsEnumerable
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    if ($.isNativeFunction(propertyIsEnumerableFN)) {
        if (hasDontEnumBug) {
            $.objectPropertyIsEnumerable = function (object, property) {
                var val;

                if ($.objectInstanceOf(object, CtrObject)) {
                    val = propertyIsEnumerableFN.call(object, property) ||
                        ($.arrayContains(defaultProperties, property) &&
                            $.hasProperty(object, property) &&
                            !$.objectIs(object[property], $.objectGetPrototypeOf(object)[property]));
                } else {
                    val = propertyIsEnumerableCustom(object, property) ||
                        ($.arrayContains(defaultProperties, property) &&
                            $.hasProperty(object, property) &&
                            !$.objectIs(object[property], $.objectGetPrototypeOf(object)[property]));
                }

                return val;
            };
        } else if (hasFuncProtoBug) {
            $.objectPropertyIsEnumerable = function (object, property) {
                var val;

                if ($.isFunction(object) && $.strictEqual(property, prototypeString)) {
                    val = false;
                } else {
                    val = propertyIsEnumerableFN.call(object, property);
                }

                return val;
            };
        } else {
            $.objectPropertyIsEnumerable = function (object, property) {
                return propertyIsEnumerableFN.call(object, property);
            };
        }
    } else {
        $.objectPropertyIsEnumerable = propertyIsEnumerableCustom;
    }

    /**
     * Returns a boolean indicating whether the object has the specified property.
     * This function can be used to determine whether an object has the specified property as a direct property of
     * that object; unlike the $.hasProperty function, this method does not check down the object's prototype
     * chain.
     * @memberOf utilx
     * @name objectHasOwnProperty
     * @function
     * @param {object} object
     * @param {string} property
     * @return {boolean}
     */
    // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
    // Create our own local "hasOwnProperty" function: native -> shim -> sham
    // named $.objectHasOwnProperty instead of hasOwnProperty because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(hasOwnPropertyFN)) {
        if (hasDontEnumBug) {
            $.objectHasOwnProperty = function (object, property) {
                return hasOwnPropertyFN.call(object, property) ||
                    ($.arrayContains(defaultProperties, property) &&
                        $.hasProperty(object, property) &&
                        !$.objectIs(object[property], $.objectGetPrototypeOf(object)[property]));
            };
        } else if (hasFuncProtoBug) {
            $.objectHasOwnProperty = function (object, property) {
                var val;

                if ($.isFunction(object) && $.strictEqual(property, prototypeString)) {
                    val = false;
                } else {
                    val = hasOwnPropertyFN.call(object, property);
                }

                return val;
            };
        } else {
            $.objectHasOwnProperty = function (object, property) {
                return hasOwnPropertyFN.call(object, property);
            };
        }
    } else {
        $.objectHasOwnProperty = function (object, property) {
            return $.hasProperty(object, property) &&
                $.isUndefined($.objectGetPrototypeOf(object)[property]);
        };
    }

    /**
     * Returns true if argument is null, not an object or is a function.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isNotTypeObjectOrIsFunction(inputArg) {
        return !$.isTypeObject(inputArg) || $.isFunction(inputArg);
    }

    /**
     * Returns true if argument is an object that has own property of length which is a number of uint32
     * but is not a function.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function hasValidLength(inputArg) {
        return $.isTypeObject(inputArg) && $.objectHasOwnProperty(inputArg, lengthString) &&
            $.isNumber(inputArg.length) && $.isUint32(inputArg.length);
    }

    /**
     * Throws TypeError if argument is null, not an object or is a function otherwise return the object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotTypeObjectOrIsFunction(inputArg) {
        if (isNotTypeObjectOrIsFunction(inputArg)) {
            throw new TypeError('called on a invalid object');
        }

        return inputArg;
    }

    /**
     * Throws TypeError if argument has not got a valid length otherwise return the object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    function throwIfIsNotHasValidLength(inputArg) {
        if (!hasValidLength(inputArg)) {
            throw new TypeError('invalid length property');
        }

        return inputArg;
    }

    /**
     * Returns true if arguments is an array or an arguments object.
     * @private
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    function isArrayOrArguments(inputArg) {
        return $.arrayIsArray(inputArg) || $.isArguments(inputArg);
    }

    /**
     * The function takes one argument inputArg, if the argument is an object whose class internal
     * property is "Array" or is an Object whose class internal property is "Arguments";
     * returns true if length is zero otherwise it returns false.
     * Otherwise returns null if the argument does not match the rquirements.
     * @memberOf utilx
     * @function
     * @param {array} inputArg
     * @return {(boolean|null)}
     */
    $.isEmptyArray = function (inputArg) {
        if (!isArrayOrArguments(inputArg)) {
            throwIfIsNotTypeObjectOrIsFunction(inputArg);
            throwIfIsNotHasValidLength(inputArg);
        }

        return $.isZero(inputArg.length);
    };

    /**
     * Returns the first element of an array; otherwise returns undefined.
     * @memberOf utilx
     * @function
     * @param {array|arguments} inputArg
     * @return {*}
     */
    $.arrayFirst = function (inputArg) {
        if (!isArrayOrArguments(inputArg)) {
            throwIfIsNotTypeObjectOrIsFunction(inputArg);
            throwIfIsNotHasValidLength(inputArg);
        }

        return inputArg[$.POSITIVE_ZERO];
    };

    /**
     * Returns the last element of an array; otherwise returns undefined.
     * @memberOf utilx
     * @function
     * @param {array|arguments} inputArg
     * @return {*}
     */
    $.arrayLast = function (inputArg) {
        if (!isArrayOrArguments(inputArg)) {
            throwIfIsNotTypeObjectOrIsFunction(inputArg);
            throwIfIsNotHasValidLength(inputArg);
        }

        return inputArg[inputArg.length - 1];
    };

    /**
     * The arrayAssign() method assigns a value to a specific element of an array and
     * returns the new length of the array.
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {number|string} index
     * @param {*} value
     * @return {number}
     */
    $.arrayAssign = function (array, index, value) {
        if (!isArrayOrArguments(array)) {
            throwIfIsNotTypeObjectOrIsFunction(array);
            throwIfIsNotHasValidLength(array);
        }

        var numIndex;

        if ($.gte(arguments.length, 3)) {
            numIndex = $.numberToInteger(index);
            if (inRange(numIndex, $.POSITIVE_ZERO, $.MAX_UINT32 - 1)) {
                array[numIndex] = value;
                numIndex += 1;
                if ($.gt(numIndex, array.length)) {
                    array.length = numIndex;
                }
            } else {
                array[$.anyToString(index)] = value;
            }
        }

        return array.length;
    };

    /**
     * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
     * @memberOf utilx
     * @name toObjectFixIndexedAccess
     * @function
     * @param {*} inputArg
     * @return {object}
     */
    shouldSplitString = $.notStrictEqual(boxedString[$.POSITIVE_ZERO], 'a') ||
                            !$.hasProperty(boxedString, $.POSITIVE_ZERO);

    $.toObjectFixIndexedAccess = function (inputArg) {
        var object;

        if (shouldSplitString && $.isString(inputArg)) {
            object = $.stringSplit(inputArg, emptyString);
        } else {
            object = $.argToObject(inputArg);
        }

        return object;
    };

    /**
     * The $.arraySplice() method changes the content of an array,
     * adding new elements while removing old elements.
     * @memberOf utilx
     * @name arraySplice
     * @function
     * @param {array} array
     * @param {number} start
     * @param {number} [deleteCount]
     * @param {...*} [element]
     */
    // named $.arraySplice instead of arraySplice because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(spliceFN) && $.strictEqual(spliceFN.call([1, 2], $.POSITIVE_ZERO).length, 2)) {
        try {
            if ($.isZero(spliceFN.call([1, 2]).length)) {
                $.arraySplice = function (array) {
                    return spliceFN.apply(array, $.arraySlice(arguments, 1));
                };
            } else {
                throw new Error();
            }
        } catch (e) {
            $.arraySplice = function (array) {
                var val;

                if ($.lt(arguments.length, 2)) {
                    val = [];
                } else {
                    val = spliceFN.apply(array, $.arraySlice(arguments, 1));
                }

                return val;
            };
        }
    } else {
        $.arraySplice = function (array, start, deleteCount) {
            var object = $.toObjectFixIndexedAccess(array),
                length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32),
                removed = [],
                relativeStart = clampInteger(start, -$.MAX_UINT32, $.MAX_UINT32),
                actualStart,
                actualDeleteCount,
                k = $.POSITIVE_ZERO,
                from,
                argLength = arguments.length,
                item = 3,
                itemCount = globalMathMax(argLength - item, $.POSITIVE_ZERO),
                to,
                loopCache;

            if ($.lt(argLength, 2)) {
                return removed;
            }

            if ($.lt($.mathSign(relativeStart), $.POSITIVE_ZERO)) {
                actualStart = globalMathMax(length + relativeStart, $.POSITIVE_ZERO);
            } else {
                actualStart = globalMathMin(relativeStart, length);
            }

            if ($.lt(argLength, 3)) {
                deleteCount = length - actualStart;
            }

            actualDeleteCount = $.clamp(clampInteger(deleteCount, $.POSITIVE_ZERO, $.MAX_UINT32),
                                        $.POSITIVE_ZERO, length - actualStart);
            while (k < actualDeleteCount) {
                from = actualStart + k;
                if ($.objectHasOwnProperty(object, from)) {
                    $.arrayPush(removed, object[from]);
                }

                k += 1;
            }

            if (itemCount < actualDeleteCount) {
                k = actualStart;
                loopCache = length - actualDeleteCount;
                while (k < loopCache) {
                    from = k + actualDeleteCount;
                    to = k + itemCount;
                    if ($.objectHasOwnProperty(object, from)) {
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
                    if ($.objectHasOwnProperty(object, from)) {
                        object[to] = object[from];
                    } else {
                        delete object[to];
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

            object.length = length - actualDeleteCount + itemCount;

            return removed;
        };
    }

    /**
     * Executes a provided function once per array element.
     * @memberOf utilx
     * @name arrayForEach
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     */
    // named $.arrayForEach instead of forEach because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(forEachFN)) {
        forEachFN.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if ($.isTypeObject(testObject1)) {
            $.arrayForEach = function (array, fn, thisArg) {
                return forEachFN.call(array, fn, thisArg);
            };
        } else {
            $.arrayForEach = function (array, fn, thisArg) {
                return forEachFN.call($.toObjectFixIndexedAccess(array), fn, thisArg);
            };
        }
    } else {
        $.arrayForEach = function (array, fn, thisArg) {
            var object = $.toObjectFixIndexedAccess(array),
                length,
                index;

            throwIfNotAFunction(fn);
            length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
            for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                if ($.hasProperty(object, index)) {
                    fn.call(thisArg, object[index], index, object);
                }
            }
        };
    }

    /**
     * Tests whether some element in the array passes the test implemented by the provided function.
     * @memberOf utilx
     * @name arraySome
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {boolean}
     */
    // named $.arraySome instead of some because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(someFN)) {
        someFN.call('foo', function (item, index, list) {
            /*jslint unparam: true */
            /*jshint unused: true */
            testObject1 = list;
        });

        if ($.isTypeObject(testObject1)) {
            $.arraySome = function (array, fn, thisArg) {
                return someFN.call(array, fn, thisArg);
            };
        } else {
            $.arraySome = function (array, fn, thisArg) {
                return someFN.call($.toObjectFixIndexedAccess(array), fn, thisArg);
            };
        }
    } else {
        $.arraySome = function (array, fn, thisArg) {
            var object = $.toObjectFixIndexedAccess(array),
                length,
                index,
                val;

            throwIfNotAFunction(fn);
            length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
            val = false;
            for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                if ($.hasProperty(object, index) && fn.call(thisArg, object[index], index, object)) {
                    val = true;
                    break;
                }
            }

            return val;
        };
    }

    /**
     * Creates a new array with the results of calling a provided function on every element in this array.
     * @memberOf utilx
     * @name arrayMap
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
    // named $.arrayMap instead of map because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(mapFN)) {
        $.arrayMap = function (array, fn, thisArg) {
            return mapFN.call(array, fn, thisArg);
        };
    } else {
        $.arrayMap = function (array, fn, thisArg) {
            var object = $.toObjectFixIndexedAccess(array),
                length,
                index,
                arr;

            throwIfNotAFunction(fn);
            arr = [];
            arr.length = length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
            for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                if ($.hasProperty(object, index)) {
                    $.arrayAssign(arr, index, fn.call(thisArg, object[index], index, object));
                }
            }

            return arr;
        };
    }

    /**
     * Returns some args for testing purposes.
     * @private
     * @function
     * @return {arguments}
     */
    function someArgs() {
        return $.returnArgs($.privateUndefined, null, 1, 'a', 2, 'b', null, $.privateUndefined);
    }

    /**
     * Creates a new array from arguments, starting at start and ending at end.
     * @memberOf utilx
     * @name arraySlice
     * @function
     * @param {array} array
     * @param {number|string} [start]
     * @param {number|string} [end]
     * @return {array}
     */
    try {
        if ($.notStrictEqual(sliceFN.call(someArgs()).toString(), ',,1,a,2,b,,') ||
                $.notStrictEqual(sliceFN.call(someArgs(),
                                $.privateUndefined, $.privateUndefined).toString(), ',,1,a,2,b,,') ||
                $.notStrictEqual(sliceFN.call(someArgs(), -1).length, 1) ||
                $.notStrictEqual(sliceFN.call(someArgs(), $.POSITIVE_ZERO).toString(), ',,1,a,2,b,,') ||
                $.notStrictEqual(sliceFN.call(someArgs(), 3).toString(), 'a,2,b,,') ||
                !$.isZero(sliceFN.call(someArgs(), -1, 4).length) ||
                $.notStrictEqual(sliceFN.call(someArgs(), $.POSITIVE_ZERO, 4).toString(), ',,1,a') ||
                $.notStrictEqual(sliceFN.call(someArgs(), 3, 6).toString(), 'a,2,b')) {

            sliceFN = $.privateUndefined;
        }
    } catch (e) {
        sliceFN = $.privateUndefined;
    }

    if ($.isNativeFunction(sliceFN)) {
        $.arraySlice = function (array, start, end) {
            return sliceFN.call(array, start, end);
        };
    } else {
        $.arraySlice = function (array, start, end) {
            var object = $.toObjectFixIndexedAccess(array),
                length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32),
                relativeStart = $.numberToInteger(start),
                val = [],
                next = $.POSITIVE_ZERO,
                relativeEnd,
                final,
                k;

            if ($.lt($.mathSign(relativeStart), $.POSITIVE_ZERO)) {
                k = globalMathMax(length + relativeStart, $.POSITIVE_ZERO);
            } else {
                k = globalMathMin(relativeStart, length);
            }

            if ($.isUndefined(end)) {
                relativeEnd = length;
            } else {
                relativeEnd = $.numberToInteger(end);
            }

            if ($.lt($.mathSign(relativeEnd), $.POSITIVE_ZERO)) {
                final = globalMathMax(length + relativeEnd, $.POSITIVE_ZERO);
            } else {
                final = globalMathMin(relativeEnd, length);
            }

            val.length = globalMathMax(final - k, $.POSITIVE_ZERO);
            while ($.lt(k, final)) {
                if ($.hasProperty(object, k)) {
                    $.arrayAssign(val, next, object[k]);
                }

                next += 1;
                k += 1;
            }

            return val;
        };
    }

    /**
     * Creates a new array with all elements that pass the test implemented by the provided function.
     * @memberOf utilx
     * @name arrayFilter
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {object} [thisArg]
     * @return {array}
     */
    // named $.arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(filterFN)) {
        $.arrayFilter = function (array, fn, thisArg) {
            return filterFN.call(array, fn, thisArg);
        };
    } else {
        $.arrayFilter = function (array, fn, thisArg) {
            var object = $.toObjectFixIndexedAccess(array),
                next,
                length,
                arr,
                index,
                element;

            throwIfNotAFunction(fn);
            arr = [];
            length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
            next = $.POSITIVE_ZERO;
            for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                if ($.hasProperty(object, index)) {
                    element = object[index];
                    if (fn.call(thisArg, element, index, object)) {
                        $.arrayAssign(arr, next, element);
                        next += 1;
                    }
                }
            }

            return arr;
        };
    }

    /**
     * Apply a function against an accumulator and each value of the array (from left-to-right)
     * as to reduce it to a single value.
     * @memberOf utilx
     * @name arrayReduce
     * @function
     * @param {array} array
     * @param {function} fn
     * @param {*} [initialValue]
     * @return {*}
     */
    // named $.arrayReduce instead of reduce because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(reduceFN)) {
        /*jshint -W098 */
        $.arrayReduce = function (array, fn, initialValue) {
            return reduceFN.apply(array, $.arraySlice(arguments, 1));
        };
        /*jshint +W098 */
    } else {
        $.arrayReduce = function (array, fn, initialValue) {
            var object = $.toObjectFixIndexedAccess(array),
                accumulator,
                length,
                kPresent,
                index;

            throwIfNotAFunction(fn);
            length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
            if ($.isZero(length) && $.strictEqual(arguments.length, 2)) {
                throw new TypeError('reduce of empty array with no initial value');
            }

            index = 0;
            if ($.gt(arguments.length, 2)) {
                accumulator = initialValue;
            } else {
                kPresent = false;
                while ($.isFalse(kPresent) && $.lt(index, length)) {
                    kPresent = $.hasProperty(object, index);
                    if ($.isTrue(kPresent)) {
                        accumulator = object[index];
                        index += 1;
                    }
                }

                if ($.isFalse(kPresent)) {
                    throw new TypeError('reduce of empty array with no initial value');
                }
            }

            while ($.lt(index, length)) {
                if ($.isTrue($.hasProperty(object, index))) {
                    accumulator = fn.call($.privateUndefined, accumulator, object[index], index, object);
                }

                index += 1;
            }

            return accumulator;
        };
    }

    /**
     * Returns a random integer between the supplied min and max arguments.
     * If no arguments are supplied or are the same then 0 and 1 will be used.
     * If min is not supplied then 0 is used.
     * @memberOf utilx
     * @function
     * @param {number} [min]
     * @param {number} max
     * @return {number}
     */
    $.getRandomInt = function (min, max) {
        if ($.strictEqual(arguments.length, 1)) {
            max = min;
            min = $.POSITIVE_ZERO;
        }

        min = $.numberToInteger(min);
        max = $.numberToInteger(max);
        if ($.objectIs(min, max)) {
            max = 1;
            min = $.POSITIVE_ZERO;
        }

        var mult,
            val;

        if ($.lt(min, $.POSITIVE_ZERO) && $.gt(max, $.POSITIVE_ZERO) && $.gt(max - min + 1, $.MAX_INTEGER)) {
            mult = globalMathFloor(globalMathRandom() * 2);
            if ($.isZero(mult)) {
                mult = -1;
            }

            val = globalMathFloor(globalMathRandom() * $.UNSAFE_INTEGER) * mult;
        } else {
            val = globalMathFloor(globalMathRandom() * (max - min + 1) + min);
        }

        return val;
    };

    /**
     * Default compare function for stableSort.
     * @private
     * @function
     * @param {*} left
     * @param {*} right
     * @return {number}
     */
    function defaultComparison(left, right) {
        var leftS = $.anyToString(left),
            rightS = $.anyToString(right),
            val;

        if ($.strictEqual(leftS, rightS)) {
            val = $.POSITIVE_ZERO;
        } else if ($.lt(leftS, rightS)) {
            val = -1;
        } else {
            val = 1;
        }

        return val;
    }

    /**
     * merge function for stableSort.
     * @private
     * @function
     * @param {array} left
     * @param {array} right
     * @param {Function} comparison
     * @return {array}
     */
    function merge(left, right, comparison) {
        var result = [];

        while (!$.isZero(left.length) && !$.isZero(right.length)) {
            if ($.lte(comparison(left[$.POSITIVE_ZERO], right[$.POSITIVE_ZERO]), $.POSITIVE_ZERO)) {
                $.arrayPush(result, left.shift());
            } else {
                $.arrayPush(result, right.shift());
            }
        }

        while (!$.isZero(left.length)) {
            $.arrayPush(result, left.shift());
        }

        while (!$.isZero(right.length)) {
            $.arrayPush(result, right.shift());
        }

        return result;
    }

    /**
     * mergeSort function for stableSort.
     * @private
     * @function
     * @param {array} array
     * @param {Function} comparefn
     * @return {array}
     */
    function mergeSort(array, comparefn) {
        var length = clampInteger(array.length, $.POSITIVE_ZERO, $.MAX_UINT32),
            middle,
            val;

        if ($.lt(length, 2)) {
            val = $.arraySlice(array);
        } else {
            middle = globalMathCeil(length / 2);
            val = merge(mergeSort($.arraySlice(array, $.POSITIVE_ZERO, middle), comparefn),
                         mergeSort($.arraySlice(array, middle), comparefn), comparefn);
        }

        return val;
    }

    /**
     * The $.arrayStableSort() method sorts the elements of an array in place and returns the array.
     * This is a stable sort. The default sort order is lexicographic (not numeric).
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {Function} [compareFN]
     * @return {array}
     */
    $.arrayStableSort = function (array, comparefn) {
        var object = $.toObjectFixIndexedAccess(array),
            length,
            index;

        if ($.isUndefined(comparefn)) {
            comparefn = defaultComparison;
        }

        throwIfNotAFunction(comparefn);
        length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32);
        if ($.gt(length, 1)) {
            object = mergeSort(object, comparefn);
            for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                array[index] = object[index];
            }
        }

        return array;
    };

    /**
     * The $.arrayeSort() method sorts the elements of an array in place and returns the array.
     * The sort may be unstable depending on the browser. The default sort order is lexicographic (not numeric).
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {Function} [compareFN]
     * @return {array}
     */
    $.arraySort = function (array, comparefn) {
        $.checkObjectCoercible(array);
        if ($.isUndefined(comparefn)) {
            comparefn = defaultComparison;
        }

        throwIfNotAFunction(comparefn);

        return sortFN.call(array, comparefn);
    };

    /**
     * Builds the test string used to determine if native trim is ES5.
     * @private
     * @function
     * @param {string} previous
     * @param {string} element
     * @return {string}
     */
    function buildTestString(previous, element) {
        return previous + String.fromCharCode(element);
    }

    /**
     * Removes whitespace from both ends of the string.
     * @memberOf utilx
     * @name stringTrim
     * @function
     * @param {string} inputArg
     * @return {string}
     */
    // named $.stringTrim instead of trim because of SpiderMonkey and Blackberry bug
    try {
        if ($.isNativeFunction(trimFN) &&
                $.isZero(trimFN.call($.arrayReduce(whiteSpacesList, buildTestString, emptyString)).length)) {

            $.stringTrim = function (inputArg) {
                return trimFN.call(inputArg);
            };
        } else {
            throw new Error();
        }
    } catch (e) {
        whiteSpacesString = $.arrayReduce(whiteSpacesList, function (previous, element) {
            return previous + '\\u' + $.padLeadingChar(element.toString(16), '0', 4);
        }, emptyString);

        wsTrimRX = new RegExp('^[' + whiteSpacesString + ']+|[' + whiteSpacesString + ']+$', 'g');
        $.stringTrim = function (inputArg) {
            return onlyCoercibleToString(inputArg).replace(wsTrimRX, emptyString);
        };
    }

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @memberOf utilx
     * @name arrayIndexOf
     * @function
     * @param {array} array
     * @param {object} searchElement
     * @param {number} [fromIndex]
     * @return {number}
     */
    // http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
    // Create our own local "indexOf" function: native -> polyfill
    // named $.arrayIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(indexOfFN) && $.strictEqual(indexOfFN.call([$.POSITIVE_ZERO, 1], 1, 2), -1)) {
        $.arrayIndexOf = function (array, searchElement, fromIndex) {
            return indexOfFN.call(array, searchElement, fromIndex);
        };
    } else {
        $.arrayIndexOf = function (array, searchElement, fromIndex) {
            var object = $.toObjectFixIndexedAccess(array),
                length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32),
                val = -1,
                index;

            if (!$.isZero(length)) {
                if ($.gt(arguments.length, 2)) {
                    fromIndex = $.numberToInteger(fromIndex);
                } else {
                    fromIndex = $.POSITIVE_ZERO;
                }

                if ($.lt(fromIndex, length)) {
                    if ($.lt(fromIndex, $.POSITIVE_ZERO)) {
                        fromIndex = length - globalMathAbs(fromIndex);
                    }

                    if ($.lt(fromIndex, $.POSITIVE_ZERO)) {
                        fromIndex = $.POSITIVE_ZERO;
                    }

                    for (index = fromIndex; $.lt(index, length); index += 1) {
                        if ($.hasProperty(object, index) && $.strictEqual(searchElement, object[index])) {
                            val = index;
                            break;
                        }
                    }
                }
            }

            return val;
        };
    }

    /**
     * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
     * @memberOf utilx
     * @name arrayLastIndexOf
     * @function
     * @param {array} array
     * @param {object} searchElement
     * @param {number} [fromIndex]
     * @return {number}
     */
    // http://www.ecma-international.org/ecma-262/5.1/#sec-15.4.4.15
    // Create our own local "lastIndexOf" function: native -> polyfill
    // named $.arrayLastIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(indexOfFN) && $.strictEqual(indexOfFN.call([$.POSITIVE_ZERO, 1], $.POSITIVE_ZERO, -3), -1)) {
        $.arrayLastIndexOf = function (array, searchElement, fromIndex) {
            return lastIndexOfFN.call(array, searchElement, fromIndex);
        };
    } else {
        $.arrayLastIndexOf = function (array, searchElement, fromIndex) {
            var object = $.toObjectFixIndexedAccess(array),
                length = clampInteger(object.length, $.POSITIVE_ZERO, $.MAX_UINT32),
                val = -1,
                index;

            if (!$.isZero(length)) {
                if ($.gt(arguments.length, 2)) {
                    fromIndex = $.numberToInteger(fromIndex);
                } else {
                    fromIndex = length - 1;
                }

                if ($.gte(fromIndex, 0)) {
                    fromIndex = globalMathMin(fromIndex, length - 1);
                } else {
                    fromIndex = length - globalMathAbs(fromIndex);
                }

                for (index = fromIndex; $.gte(index, 0); index -= 1) {
                    if ($.hasProperty(object, index) && $.strictEqual(object[index], searchElement)) {
                        val = index;
                        break;
                    }
                }
            }

            return val;
        };
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
     * @memberOf utilx
     * @name objectKeys
     * @function
     * @param {object} object
     * @return {array}
     */
    // named $.objectKeys instead of keys because of SpiderMonkey and Blackberry bug
    testObject1 = {};
    $.arrayForEach(defaultProperties, function (element) {
        testObject1[element] = null;
    });

    try {
        if ($.strictEqual(keysFN(testObject1).length, 7)) {
            $.objectKeys = keysFN;
        } else {
            throw new Error();
        }
    } catch (e) {
        $.objectKeys = function (object) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);

            var props = [],
                prop;

            for (prop in object) {
                if ($.objectHasOwnProperty(object, prop)) {
                    $.arrayPush(props, prop);
                }
            }

            if ($.isTrue(hasDontEnumBug)) {
                $.arrayForEach(defaultProperties, function (property) {
                    if ($.objectHasOwnProperty(object, property)) {
                        $.arrayPush(props, property);
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
     * @memberOf utilx
     * @function
     * @param {object} inputArg
     * @return {boolean}
     */
    $.isEmptyObject = function (inputArg) {
        return $.isZero($.objectKeys(inputArg).length);
    };

    /**
     * Returns true if the operand inputArg is a String and only contains numerical digits.
     * @memberOf utilx
     * @function
     * @param {*} string
     * @return {boolean}
     */
    $.isDigits = function (string) {
        return $.isStringNotEmpty(string) && rxNotDigits.test(string);
    };

    /**
     * Defines a new property directly on an object, or modifies an existing property on an object,
     * and returns the object.
     * @memberOf utilx
     * @name objectDefineProperty
     * @function
     * @param {object} object
     * @param {string} property
     * @param {object} descriptor
     * @return {object}
     */
    // http://ecma-international.org/ecma-262/5.1/#sec-15.2.3.6
    // Create our own local "defineProperty" function: native -> sham
    // named $.objectDefineProperty instead of defineProperty because of SpiderMonkey and Blackberry bug
    try {
        testObject1 = definePropertyFN({}, sentinelString, {
            value: null
        });

        if (!$.isNull(testObject1[sentinelString])) {
            throw new Error('Fails sentinel check');
        }

        // Test string integer
        try {
            testValue = definePropertyFN([], '1.', {
                value: null
            });

            if (!$.isNull(testValue[1])) {
                throw new Error('Fails integer check');
            }
        } catch (e) {
            definePropertyPatch1 = true;
        }

        // Test assign to array
        try {
            testObject1 = definePropertyFN([], '0', {
                value: null
            });

            if (!$.isNull(testObject1[$.POSITIVE_ZERO])) {
                throw new Error('Fails array check');
            }
        } catch (e) {
            definePropertyPatch2 = true;
        }

        // Test overwrite array property when no value defined
        try {
            testObject1 = definePropertyFN([10], '0', {});
            if ($.notStrictEqual(testObject1[$.POSITIVE_ZERO], 10)) {
                throw new Error('Fails overwrite check');
            }
        } catch (e) {
            definePropertyPatch3 = true;
        }

        if (definePropertyPatch1 || definePropertyPatch2 || definePropertyPatch3) {
            $.objectDefineProperty = function (object, property, descriptor) {
                var isA = (definePropertyPatch1 || definePropertyPatch2 || definePropertyPatch3) &&
                            isArrayOrArguments(object) && $.isNumeric(property) && $.isUint32($.toNumber(property)),
                    isB = (definePropertyPatch1 || definePropertyPatch2) &&
                            $.objectHasOwnProperty(descriptor, valueString);

                if (definePropertyPatch1 && isA) {
                    property = $.toNumber(property);
                }

                if (definePropertyPatch2 && isA && (isB || !$.objectHasOwnProperty(object, property))) {
                    $.arrayAssign(object, property, descriptor[valueString]);
                }

                if (definePropertyPatch3 && isA && !isB) {
                    descriptor[valueString] = object[property];
                }

                return definePropertyFN(object, property, descriptor);
            };
        } else {
            $.objectDefineProperty = definePropertyFN;
        }

        testObject1 = {
            abc: 0,
            def: '',
            ghi: true,
            jkl: $.noop
        };

        $.arrayForEach($.objectKeys(testObject1), function (key) {
            $.objectDefineProperty(testObject1, key, notEnumerableProperties);
        });

        if ($.notStrictEqual(testObject1.abc, 0) || $.notStrictEqual(testObject1.def, '') ||
                $.notStrictEqual(testObject1.ghi, true) || $.notStrictEqual(testObject1.jkl, $.noop)) {

            throw new Error();
        }

        testObject1 = [10, true, '', $.noop];

        $.arrayForEach($.objectKeys(testObject1), function (key) {
            $.objectDefineProperty(testObject1, key, notEnumerableProperties);
        });

        if ($.notStrictEqual(testObject1[0], 10) || $.notStrictEqual(testObject1[1], true) ||
                $.notStrictEqual(testObject1[2], '') || $.notStrictEqual(testObject1[3], $.noop)) {

            throw new Error();
        }
    } catch (e) {
        $.objectDefineProperty = function (object, property, descriptor) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);
            if (!isTypeObjectOrIsFunction(descriptor)) {
                throw new TypeError('Property description must be an object: ' + $.anyToString(descriptor));
            }

            if ($.objectHasOwnProperty(descriptor, valueString) && ($.objectHasOwnProperty(descriptor, getString) ||
                        $.objectHasOwnProperty(descriptor, setString))) {

                throw new TypeError('Invalid property. A property cannot have accessors and a value');
            }

            var prototype;

            if (!$.objectHasOwnProperty(descriptor, getString) && !$.objectHasOwnProperty(descriptor, setString)) {
                if ($.objectHasOwnProperty(descriptor, valueString) || !$.objectHasOwnProperty(object, property)) {
                    if ($.isTrue($.isProtoSupported)) {
                        prototype = object[protoName];
                        object[protoName] = baseObjectPrototype;
                        if (isArrayOrArguments(object) && $.isNumeric(property) && $.isUint32($.toNumber(property))) {
                            $.arrayAssign(object, property, descriptor[valueString]);
                        } else {
                            delete object[property];
                            object[property] = descriptor[valueString];
                        }

                        if ($.isUndefined(prototype)) {
                            delete object[protoName];
                        } else {
                            object[protoName] = prototype;
                        }
                    } else {
                        if (isArrayOrArguments(object) && $.isNumeric(property) && $.isUint32($.toNumber(property))) {
                            $.arrayAssign(object, property, descriptor[valueString]);
                        } else {
                            object[property] = descriptor[valueString];
                        }
                    }
                }
            } else {
                if (!$.isNativeFunction(defineGetterFN) || !$.isNativeFunction(defineSetterFN)) {
                    throw new TypeError('getters & setters can not be defined on this javascript engine');
                }

                if ($.isNativeFunction(descriptor[getString])) {
                    defineGetterFN.call(object, property, descriptor[getString]);
                }

                if ($.isNativeFunction(descriptor[setString])) {
                    defineSetterFN.call(object, property, descriptor[setString]);
                }
            }

            return object;
        };
    }

    /**
     * Defines new or modifies existing properties directly on an object, returning the object.
     * @memberOf utilx
     * @function
     * @param {object} object
     * @param {string} props
     * @return {object}
     */
    // Create our own local "defineProperties" function: native -> sham
    // we don't use the native otherwise we need all the same patches applied to objectDefineProperty
    // named $.objectDefineProperties instead of defineProperties because of SpiderMonkey and Blackberry bug
    $.objectDefineProperties = function (object, props) {
        throwIfIsNotTypeObjectOrIsNotFunction(object);
        if (!isTypeObjectOrIsFunction(props)) {
            throw new TypeError('Property description must be an object');
        }

        $.arrayForEach($.objectKeys(props), function (key) {
            $.objectDefineProperty(object, key, props[key]);
        });

        return object;
    };

    /**
     * Returns a property descriptor for an own property (that is, one directly present on an object,
     * not present by dint of being along an object's prototype chain) of a given object.
     * On environments that do not support it natively, this is just a sham to allow code to work.
     * @memberOf utilx
     * @name objectGetOwnPropertyDescriptor
     * @function
     * @param {object} object
     * @param {string} property
     * @return {object}
     */
    // Create our own local "getOwnPropertyDescriptor" function: native -> sham
    // named objectGetOwnPropertyDescriptor instead of getOwnPropertyDescriptor because of SpiderMonkey
    // and Blackberry bug
    try {
        testObject1 = {
            sentinel: null
        };

        testObject2 = [10, 20, 30];
        testObject2[4] = $.privateUndefined;
        if (!$.isNull(getOwnPropDescFN(testObject1, sentinelString).value) ||
                $.notStrictEqual(getOwnPropDescFN(testObject2, 3).value, 30) ||
                $.notStrictEqual(getOwnPropDescFN(testObject2, '3').value, 30) ||
                !$.objectHasOwnProperty(getOwnPropDescFN(testObject2, 4), valueString) ||
                $.notStrictEqual(getOwnPropDescFN(testObject2, 4).value, $.privateUndefined) ||
                $.notStrictEqual(getOwnPropDescFN(testObject2, 5), $.privateUndefined) ||
                $.objectHasOwnProperty(getOwnPropDescFN(testObject2, 5), valueString)) {

            throw new Error();
        }

        if ($.isFalse(getOwnPropDescFN(function (a) {
                return a;
            }, lengthString).writable)) {

            $.objectGetOwnPropertyDescriptor = getOwnPropDescFN;
        } else {
            $.objectGetOwnPropertyDescriptor = function (object, property) {
                var descriptor = getOwnPropDescFN(object, property);

                if ($.isFunction(object) && $.strictEqual(property, lengthString) &&
                        $.isTrue(descriptor.writable)) {

                    descriptor.writable = false;
                }

                return descriptor;
            };
        }
    } catch (e) {
        $.objectGetOwnPropertyDescriptor = function (object, property) {
            var descriptor,
                prototype,
                getter,
                setter;

            if ($.objectHasOwnProperty(throwIfIsNotTypeObjectOrIsNotFunction(object), property)) {
                descriptor = {};
                descriptor.configurable = true;
                try {
                    descriptor.enumerable = $.objectPropertyIsEnumerable(object, property);
                } catch (e) {
                    descriptor.enumerable = true;
                }

                if ($.isTrue($.areGetSetSupported)) {
                    prototype = object[protoName];
                    object[protoName] = baseObjectPrototype;
                    getter = lookupGetterFN.call(object, property);
                    setter = lookupSetterFN.call(object, property);
                    if ($.isUndefined(prototype)) {
                        delete object[protoName];
                    } else {
                        object[protoName] = prototype;
                    }

                    if ($.isNativeFunction(getter) || $.isNativeFunction(setter)) {
                        if ($.isNativeFunction(getter)) {
                            descriptor[getString] = getter;
                        }

                        if ($.isNativeFunction(setter)) {
                            descriptor[setString] = setter;
                        }
                    }
                }

                descriptor[valueString] = object[property];
                if ($.strictEqual(property, lengthString)) {
                    if ($.isFunction(object)) {
                        descriptor.writable = false;
                        descriptor.configurable = false;
                    } else if (isArrayOrArguments(object)) {
                        descriptor.writable = true;
                        descriptor.configurable = false;
                    }
                } else if ($.strictEqual(property, prototypeString)) {
                    switch (object) {
                    case CtrObject:
                        /* falls through */
                    case CtrArray:
                        /* falls through */
                    case Function:
                        /* falls through */
                    case CtrBoolean:
                        /* falls through */
                    case CtrString:
                        /* falls through */
                    case CtrNumber:
                        /* falls through */
                    case Date:
                        /* falls through */
                    case RegExp:
                        /* falls through */
                    case Error:
                        /* falls through */
                    case TypeError:
                        /* falls through */
                    case SyntaxError:
                        /* falls through */
                    case RangeError:
                        /* falls through */
                    case EvalError:
                        /* falls through */
                    case ReferenceError:
                        /* falls through */
                    case URIError:
                        descriptor.writable = false;
                        descriptor.configurable = false;
                        break;
                    default:
                        descriptor.writable = true;
                        descriptor.configurable = false;
                    }
                } else {
                    descriptor.writable = true;
                }
            }

            return descriptor;
        };
    }

    /**
     * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties
     * from being removed; and prevents existing properties, or their enumerability, configurability, or
     * writability, from being changed.
     * In essence the object is made effectively immutable. Returns the object being frozen.
     * @memberOf utilx
     * @name objectFreeze
     * @function
     * @param {object} object
     * @return {object}
     */
    // Create our own local "freeze" function: native -> sham
    // named $.objectFreeze instead of freeze because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(freezeFN)) {
        $.objectFreeze = freezeFN;
    } else {
        $.objectFreeze = function (object) {
            return throwIfIsNotTypeObjectOrIsNotFunction(object);
        };
    }

    // detect a Rhino bug and patch it
    try {
        testObject1 = {
            noop: $.noop
        };

        $.objectFreeze(testObject1.noop);
    } catch (exception) {
        freezeObject = $.objectFreeze;
        $.objectFreeze = function (object) {
            var val;

            if ($.isFunction(object)) {
                val = object;
            } else {
                val = freezeObject(object);
            }

            return val;
        };
    }

    /**
     * Determine if an object is frozen.
     * @memberOf utilx
     * @name objectIsFrozen
     * @function
     * @param {object} object
     * @return {boolean}
     */
    // Create our own local "isFrozen" function: native -> sham
    // named $.objectIsFrozen instead of isFrozen because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isFrozenFN)) {
        $.objectIsFrozen = isFrozenFN;
    } else {
        $.objectIsFrozen = function (object) {
            throwIfIsNotTypeObjectOrIsNotFunction(object);

            return false;
        };
    }

    /**
     * To make object fully immutable, freeze each object in object.
     * @memberOf utilx
     * @function
     * @param {object} object
     * @return {object}
     */
    $.deepFreeze = function (object) {
        $.objectFreeze(object);
        $.arrayForEach($.objectKeys(object), function (propKey) {
            var prop = object[propKey];

            if (isTypeObjectOrIsFunction(prop) && !$.objectIsFrozen(prop)) {
                $.deepFreeze(prop);
            }
        });

        return object;
    };

    /**
     * The function tests whether an object has in its prototype chain the prototype property of a constructor.
     * @memberOf utilx
     * @name objectInstanceOf
     * @function
     * @param {object} object
     * @param {function} ctr
     * @return {boolean}
     */
    // named $.objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
    if ($.isNativeFunction(isPrototypeOfFN)) {
        $.objectInstanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            return isTypeObjectOrIsFunction(object) &&
                (object instanceof ctr || isPrototypeOfFN.call(ctr.prototype, object));
        };
    } else if ($.isFunction($.objectGetPrototypeOf)) {
        $.objectInstanceOf = function (object, ctr) {
            throwIfNotAFunction(ctr);

            var val = false;

            if (isTypeObjectOrIsFunction(object)) {
                val = object instanceof ctr;
                if ($.isFalse(val)) {
                    while ($.toBoolean(object)) {
                        if ($.strictEqual(object, ctr.prototype)) {
                            val = true;
                            break;
                        }

                        object = $.objectGetPrototypeOf(object);
                    }
                }
            }

            return val;
        };
    }

    /**
     * Check to see if an object is a plain object (created using "{}" or "new Object").
     * Some gotchas, not all browsers are equal and native objects do not necessarily abide by the rules.
     * @memberOf utilx
     * @function
     * @param {object} object
     * @return {boolean}
     */
    $.isPlainObject = function (object) {
        return $.isTypeObject(object) && $.isObject(object) &&
            $.strictEqual($.objectGetPrototypeOf(object), baseObjectPrototype);
    };

    /**
     * "shallow" extend the properties from the source objects over to the target object,
     * and return the target object. It's in-order, so the last source will override properties of
     * the same name in previous arguments.
     * @memberOf utilx
     * @function
     * @param {object} target
     * @param {...object} source
     * @return {object}
     */
    $.extend = function (target) {
        throwIfIsNotTypeObjectOrIsNotFunction(target);
        $.arrayForEach($.arraySlice(arguments, 1), function (source) {
            if (isTypeObjectOrIsFunction(source)) {
                $.arrayForEach($.objectKeys(source), function (key) {
                    target[key] = source[key];
                });
            }
        });

        return target;
    };

    /**
     * The constructor used by $.objectCreate if shimmed.
     * @private
     * @constructor
     * @return {object}
     */
    function ObjectCreateFunc() {
        return;
    }

    /**
     * The $.objectCreate method creates a new object with the specified prototype object and properties.
     * @memberOf utilx
     * @name objectCreate
     * @function
     * @param {object} prototype
     * @return {object}
     */
    // named $.objectCreate instead of create because of SpiderMonkey and Blackberry bug
    try {
        testObject1 = objectCreateFN(ObjectCreateFunc.prototype, {
            constructor: $.extend({
                value: ObjectCreateFunc
            }, notEnumerableProperties),

            foo: $.extend({
                value: testString
            }, notEnumerableProperties)
        });

        if ($.notStrictEqual(testObject1.foo, testString)) {
            throw new Error();
        }

        $.objectCreate = objectCreateFN;
    } catch (e) {
        $.objectCreate = function (prototype, propertiesObject) {
            var newObject;

            ObjectCreateFunc.prototype = throwIfIsNotTypeObjectOrIsNotFunction(prototype);
            newObject = new ObjectCreateFunc();
            $.objectDefineProperty(newObject, protoName, $.extend({
                value: prototype
            }, notEnumerableProperties));

            if ($.isPlainObject(propertiesObject)) {
                $.objectDefineProperties(newObject, propertiesObject);
            }

            return newObject;
        };
    }

    /**
     * Returns true if the operand inputArg is a Date object and is valid.
     * @memberOf utilx
     * @function
     * @param {*} dateObject
     * @return {boolean}
     */
    $.isDateValid = function (dateObject) {
        return $.isDate(dateObject) && !$.numberIsNaN(dateObject.getTime());
    };

    /**
     * Takes string and puts a backslash in front of every character that is part of the regular expression syntax.
     * This is useful if you have a run-time string that you need to match in some text and the string may contain
     * special regex characters.
     * @memberOf utilx
     * @function
     * @param {string} string
     * @return {string}
     */
    $.escapeRegex = function (string) {
        return string.replace(rxEscapeThese, '\\$&');
    };

    /**
     * Wraps a string within the string character.
     * @memberOf utilx
     * @function
     * @param {string} string
     * @param {string} character
     * @return {string}
     */
    $.wrapInChar = function (string, character) {
        return character + string + character;
    };

    /**
     * Replace all occurences of a string pattern within a string with the string characters.
     * @memberOf utilx
     * @function
     * @param {string} string
     * @param {string} pattern
     * @param {string} characters
     * @return {string}
     */
    $.replaceAll = function (string, pattern, characters) {
        return string.replace(new RegExp($.escapeRegex(pattern), 'g'), characters);
    };

    /**
     * Tests a deep equality relation.. set opts {strict: true} for deepStrictEqual
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @param {object} opts
     * @return {boolean}
     */
    $.deepEqual = function (a, b, opts) {
        if (!$.isPlainObject(opts)) {
            opts = {};
        }

        if ($.objectIs(a, b)) {
            return true;
        }

        if ($.isDate(a) && $.isDate(b)) {
            return $.objectIs(a.getTime(), b.getTime());
        }

        if ($.isRegExp(a) && $.isRegExp(b)) {
            return $.objectIs(a.source, b.source) &&
                $.objectIs(a.global, b.global) &&
                $.objectIs(a.multiline, b.multiline) &&
                $.objectIs(a.lastIndex, b.lastIndex) &&
                $.objectIs(a.ignoreCase, b.ignoreCase) &&
                $.objectIs(a.sticky, b.sticky);
        }

        if (!$.isTypeObject(a) && !$.isTypeObject(b)) {
            return $.isTrue(opts.strict) ? $.objectIs(a, b) : $.equal(a, b);
        }

        if ($.isTrue(opts.strict)) {
            if (!$.objectIs($.objectGetPrototypeOf($.toObjectFixIndexedAccess(a)),
                                $.objectGetPrototypeOf($.toObjectFixIndexedAccess(b)))) {

                return false;
            }
        } else {
            if (!$.objectIs(a.prototype, b.prototype)) {
                return false;
            }
        }

        if ($.isArguments(a)) {
            if (!$.isArguments(b)) {
                return false;
            }

            return $.deepEqual($.arraySlice(a), $.arraySlice(b), opts);
        }

        var ka,
            kb,
            status;

        try {
            ka = $.objectKeys(a);
            kb = $.objectKeys(b);
        } catch (e) {
            return false;
        }

        if (!$.objectIs(ka.length, kb.length)) {
            if ($.arrayIsArray(a) && $.arrayIsArray(b)) {
                if (!$.objectIs(a.length, b.length)) {
                    return false;
                }
            } else {
                return false;
            }
        } else {
            $.arrayStableSort(ka);
            $.arrayStableSort(kb);
            status = $.arraySome(ka, function (aKey, index) {
                return !$.objectIs(aKey, kb[index]);
            });

            if ($.isTrue(status)) {
                return false;
            }
        }

        status = $.arraySome(ka, function (aKey) {
            return !$.deepEqual(a[aKey], b[aKey], opts);
        });

        if ($.isTrue(status)) {
            return false;
        }

        return true;
    };

    /**
     * Shortcut for $.deepEqual(a, b, {strict: true})
     * @memberOf utilx
     * @function
     * @param {*} a
     * @param {*} b
     * @return {boolean}
     */
    $.deepStrictEqual = function (a, b) {
        return $.deepEqual(a, b, {
            strict: true
        });
    };

    /**
     * Truncates a long string to the length specified by n; used by AssertionError.toString
     * @memberOf utilx
     * @function
     * @param {string} s
     * @param {number|string} n
     * @return {string}
     */
    $.stringTruncate = function (s, n) {
        if (!$.isString(s)) {
            s = $.anyToString(s);
        }

        n = $.toNumber(n);
        if (!$.numberIsNaN(n) && $.gte(n, $.POSITIVE_ZERO)) {
            if ($.gt(s.length, n)) {
                s = s.slice($.POSITIVE_ZERO, n);
            }
        }

        return s;
    };

    /**
     * Inherit the prototype methods from one constructor into another.
     * @memberOf utilx
     * @function
     * @param {function} ctor
     * @param {function} superCtor
     * @return {undefined}
     */
    $.inherits = function (ctor, superCtor) {
        throwIfNotAFunction(ctor);
        throwIfNotAFunction(superCtor);
        /*jslint nomen: true */
        ctor.super_ = superCtor;
        /*jslint nomen: false */
        ctor.prototype = $.objectCreate(superCtor.prototype);
        $.objectDefineProperty(ctor.prototype, constructorString, $.extend({
            value: ctor
        }, notEnumerableProperties));
    };

    /**
     * Tests to see if the argument is one of the seven standard Error type constructors.
     * @memberOf utilx
     * @function
     * @param {*} inputArg
     * @return {boolean}
     */
    $.isErrorTypeConstructor = function (inputArg) {
        var result;

        switch (inputArg) {
        case Error:
            /* falls through */
        case TypeError:
            /* falls through */
        case SyntaxError:
            /* falls through */
        case RangeError:
            /* falls through */
        case EvalError:
            /* falls through */
        case ReferenceError:
            /* falls through */
        case URIError:
            result = true;
            break;
        default:
            result = false;
        }

        return result;
    };

    /**
     * Custom replacer used to help stringify error messages.
     * @private
     * @function
     * @param {string} key Unused
     * @param {*} value
     * @return {string}
     */
    $.customErrorReplacer = function (key, value) {
        /*jslint unparam: true */
        /*jshint unused: true */
        var result;

        if ($.isString(value)) {
            result = value;
        } else if ($.isUndefined(value) || $.isFunction(value) || $.isRegExp(value) ||
                ($.isNumber(value) && !$.numberIsFinite(value))) {

            result = $.anyToString(value);
        } else {
            result = value;
        }

        return result;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberOf utilx
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringOn = function () {
        var message = 'Should we patch IE6&7?';

        try {
            throw new Error(message);
        } catch (e) {
            if ($.strictEqual(e.message, message) &&
                    $.strictEqual(e.toString(), errorString)) {

                previousIEErrorToString = Error.prototype.toString;
                $.objectDefineProperties(Error.prototype, {
                    toString: $.extend({
                        value: function () {
                            return this.name + ': ' + this.message;
                        }
                    }, notEnumerableProperties)
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
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringOff = function () {
        if ($.isTrue(patchedIEErrorToString)) {
            $.objectDefineProperties(Error.prototype, {
                toString: $.extend({
                    value: previousIEErrorToString
                }, notEnumerableProperties)
            });

            patchedIEErrorToString = false;
        }

        return patchedIEErrorToString;
    };

    /**
     * Pathces IE6 & 7 Error.prototype.toString to make it function as expected in all other browsers.
     * This is an obtrusive fix.
     * @memberOf utilx
     * @function
     * @return {boolean}
     */
    $.normaliseErrorIEToStringState = function () {
        return patchedIEErrorToString;
    };

    /**
     * Creates a custom Error constructor.
     * @private
     * @function
     * @param {string} name
     * @param {constructor} ErrorConstructor Does not work with IE < 9, only Error can be used
     * @param {number|string} [maxMessageLength] Range 64 to Infinity (128 default)
     * @return {constructor}
     */
    function makeCustomError(name, ErrorConstructor, maxMessageLength) {
        if (!$.isString(name) || $.isEmptyString(name)) {
            throw new TypeError('"name" was not a valid string');
        }

        if (!$.isErrorTypeConstructor(ErrorConstructor)) {
            throw new TypeError('"ErrorConstructor" was not an Error type');
        }

        maxMessageLength = $.toNumber(maxMessageLength);
        if ($.numberIsNaN(maxMessageLength) || $.lt(maxMessageLength, 64)) {
            maxMessageLength = 128;
        }

        function CustomError(message, stackStartFunction) {
            var err;

            if (!$.isString(message)) {
                message = $.stringTruncate($.jsonStringify(message, $.customErrorReplacer),
                                               maxMessageLength);
            }

            $.objectDefineProperty(this, messageString, $.extend({
                value: message
            }, notEnumerableProperties));

            if (!$.isFunction(stackStartFunction)) {
                stackStartFunction = CustomError;
            }

            this.stackStartFunction = stackStartFunction;
            if ($.isFunction(ErrorConstructor.captureStackTrace)) {
                ErrorConstructor.captureStackTrace(this, this.stackStartFunction);
            } else {
                err = ErrorConstructor.call(this);
                if ($.isString(err[stackString])) {
                    $.objectDefineProperty(this, stackString, $.extend({
                        value: err[stackString]
                    }, notEnumerableProperties));
                } else if ($.isString(err[stacktraceString])) {
                    $.objectDefineProperty(this, stackString, $.extend({
                        value: err[stacktraceString]
                    }, notEnumerableProperties));
                }
            }
        }

        $.inherits(CustomError, ErrorConstructor);

        $.objectDefineProperties(CustomError.prototype, {
            name: $.extend({
                value: name
            }, notEnumerableProperties),

            toString: $.extend({
                value: function () {
                    var arr = $.stringSplit(this.message, rxSplitNewLine),
                        messageToString = this.name + ': ';

                    if ($.gt(arr.length, 1)) {
                        arr = $.arrayFilter(arr, function (element) {
                            var val;

                            if (!$.stringContains(element,
                                                     'opera:config#UserPrefs|Exceptions Have Stacktrace')) {

                                val = element;
                            }

                            return val;
                        });

                        messageToString += $.arrayJoin(arr, newLine);
                    } else {
                        messageToString += this.message;
                    }

                    return messageToString;
                }
            }, notEnumerableProperties)
        });

        return CustomError;
    }

    try {
        TestConstructor = makeCustomError('CustomSyntaxError', SyntaxError);
        isOkToUseOtherErrors = $.objectInstanceOf(new TestConstructor(testString), SyntaxError);
    } catch (e) {
        // IE < 9
        isOkToUseOtherErrors = false;
    }

    /**
     * Creates a custom Error. If and invalid ErrorConstructor is provided it will default to Error.
     * If a valid native Error type constructor is provided but not supporte by the browesr the it will
     * also default to Error. (Looking at you IE < 9)
     * @memberOf utilx
     * @function
     * @param {string} name
     * @param {constructor} [ErrorConstructor] Does not work with IE < 9, only Error can be used (defult: Error)
     * @param {number|string} [maxMessageLength] Range 64 to Infinity (128 default)
     * @return {constructor}
     */
    $.customError = function (name, ErrorConstructor, maxMessageLength) {
        if (!$.isString(name)) {
            throw new TypeError('"name" was not a string');
        }

        if ($.isEmptyString(name)) {
            throw new SyntaxError('"name" was an empty string');
        }

        if ($.isUndefined(maxMessageLength) &&
                ($.isNumber(ErrorConstructor) || $.isString(ErrorConstructor))) {
            maxMessageLength = ErrorConstructor;
            ErrorConstructor = Error;
        }

        if (!isOkToUseOtherErrors || !$.isErrorTypeConstructor(ErrorConstructor)) {
            ErrorConstructor = Error;
        }

        return makeCustomError(name, ErrorConstructor, maxMessageLength);
    };

    /**
     * Swap places of 2 item values on an object's properties.
     * @memberOf utilx
     * @function
     * @param {object} object
     * @param {(number|string)} prop1
     * @param {(number|string)} prop2
     * @return {object}
     */
    $.swapItems = function (object, prop1, prop2) {
        throwIfIsNotTypeObjectOrIsNotFunction(object);
        prop1 = $.anyToString(prop1);
        prop2 = $.anyToString(prop2);

        var temp1,
            temp2,
            num;

        if ($.notStrictEqual(prop1, prop2)) {
            temp1 = $.objectGetOwnPropertyDescriptor(object, prop1);
            temp2 = $.objectGetOwnPropertyDescriptor(object, prop2);
            num = $.toUint32(prop2);
            if (!$.isPlainObject(temp1) || !$.objectHasOwnProperty(temp1, valueString)) {
                if ($.isTypeObject(object) && !$.isFunction(object) &&
                        hasValidLength(object) && $.strictEqual($.anyToString(num), prop2) &&
                        $.strictEqual(num, object.length - 1)) {

                    object.length -= 1;
                }

                delete object[prop2];
            } else {
                if ($.isTypeObject(object) && !$.isFunction(object) && hasValidLength(object) &&
                        $.strictEqual($.anyToString(num), prop2) &&
                        $.strictEqual(num, object.length)) {

                    object.length += 1;
                }

                $.objectDefineProperty(object, prop2, temp1);
            }

            num = $.toUint32(prop1);
            if (!$.isPlainObject(temp2) || !$.objectHasOwnProperty(temp2, valueString)) {
                if ($.isTypeObject(object) && !$.isFunction(object) && hasValidLength(object) &&
                        $.strictEqual($.anyToString(num), prop1) &&
                        $.strictEqual(num, object.length - 1)) {

                    object.length -= 1;
                }

                delete object[prop1];
            } else {
                $.objectDefineProperty(object, prop1, temp2);
                if ($.isTypeObject(object) && !$.isFunction(object) && hasValidLength(object) &&
                        $.strictEqual($.anyToString(num), prop1) &&
                        $.strictEqual(num, object.length)) {

                    object.length += 1;
                }

                $.objectDefineProperty(object, prop1, temp2);
            }
        }

        return object;
    };

    /**
     * Fisher-Yates shuffle for randomly shuffling a set.
     * @memberOf utilx
     * @function
     * @param {array} array
     * @param {(number|string)} [rounds]
     * @return {array}
     */
    $.shuffle = function (array, rounds) {
        var length = clampInteger(throwIfIsNotTypeObjectOrIsNotFunction(array).length, $.POSITIVE_ZERO, $.MAX_UINT32),
            index,
            round;

        if ($.gt(length, 1)) {
            rounds = clampInteger(rounds, 1, $.MAX_INTEGER);
            for (round = $.POSITIVE_ZERO; $.lt(round, rounds); round += 1) {
                for (index = $.POSITIVE_ZERO; $.lt(index, length); index += 1) {
                    $.swapItems(array, index, $.getRandomInt($.POSITIVE_ZERO, index));
                }
            }

            array.length = length;
        }

        return array;
    };

    if ($.isTypeObject(JSON)) {
        if ($.isNativeFunction(JSON.parse)) {
            globalJsonParse = JSON.parse;
        }

        if ($.isNativeFunction(JSON.parse)) {
            globalJsonStringify = JSON.stringify;
        }
    }

    /**
     * Return a JSON string corresponding to the specified value, optionally including only certain properties
     * or replacing property values in a user-defined manner.
     * @memberOf utilx
     * @name jsonStringify
     * @function
     * @param {*} value
     * @param {function|array} replacer
     * @param {number} space
     * @return {string}
     */
    if ($.isNativeFunction(globalJsonStringify)) {
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
                $.strictEqual(globalJsonStringify($.POSITIVE_ZERO), '0') &&
                // FF 3.1b1, b2, and JSON 2 serialize wrapped primitives as object
                // literals.
                $.strictEqual(globalJsonStringify(new CtrNumber()), '0') &&
                $.strictEqual(globalJsonStringify(new CtrString()), '""') &&
                // FF 3.1b1, 2 throw an error if the stringifiedValue is `null`, `undefined`, or
                // does not define a canonical JSON representation (this applies to
                // objects with `toJSON` properties as well, *unless* they are nested
                // within an object or array).
                $.strictEqual(globalJsonStringify($.noop), $.privateUndefined) &&
                // IE 8 serializes `undefined` as `"undefined"`. Safari 5.1.7 and FF
                // 3.1b3 pass this test.
                $.strictEqual(globalJsonStringify($.privateUndefined), $.privateUndefined) &&
                // Safari <= 5.1.7 and FF 3.1b3 throw `Error`s and `TypeError`s,
                // respectively, if the stringifiedValue is omitted entirely.
                $.strictEqual(globalJsonStringify(), $.privateUndefined) &&
                // FF 3.1b1, 2 throw an error if the given stringifiedValue is not a number,
                // string, array, object, Boolean, or `null` literal. This applies to
                // objects with custom `toJSON` methods as well, unless they are nested
                // inside object or array literals. YUI 3.0.0b1 ignores custom `toJSON`
                // methods entirely.
                $.strictEqual(globalJsonStringify(stringifiedValue), '1') &&
                $.strictEqual(globalJsonStringify([stringifiedValue]), '[1]') &&
                // Prototype <= 1.6.1 serializes `[undefined]` as `"[]"` instead of
                // `"[null]"`.
                $.strictEqual(globalJsonStringify([$.privateUndefined]), '[null]') &&
                // YUI 3.0.0b1 fails to serialize `null` literals.
                $.strictEqual(globalJsonStringify(null), 'null') &&
                // FF 3.1b1, 2 halts serialization if an array contains a function:
                // `[1, true, $.noop, 1]` serializes as "[1,true,],". These versions
                // of Firefox also allow trailing commas in JSON objects and arrays.
                // FF 3.1b3 elides non-JSON values from objects and arrays, unless they
                // define custom `toJSON` methods.
                $.strictEqual(globalJsonStringify([$.privateUndefined, $.noop, null]),
                                  '[null,null,null]') &&
                // Simple serialization test. FF 3.1b1 uses Unicode escape sequences
                // where character escape codes are expected (e.g., `\b` => `\u0008`).
                // Removed test for '\0' => '\\'u0000'as Chrome 10 fails in 'use strict' mode with
                // Error: Uncaught SyntaxError: Octal literals are not allowed in strict mode.
                $.strictEqual(globalJsonStringify({
                    'A': [stringifiedValue, true, false, null, '\b\n\f\r\t']
                }), '{"A":[1,true,false,null,"\\b\\n\\f\\r\\t"]}') &&
                // FF 3.1b1 and b2 ignore the `filter` and `width` arguments.
                //$.strictEqual(globalJsonStringify(null, stringifiedValue), '"1"') &&
                $.strictEqual(globalJsonStringify([1, 2], null, 1), '[\n 1,\n 2\n]') &&
                // JSON 2, Prototype <= 1.7, and older WebKit builds incorrectly
                // serialize extended years.
                $.strictEqual(globalJsonStringify(new Date(-8.64e15)), '"-271821-04-20T00:00:00.000Z"') &&
                // The milliseconds are optional in ES 5, but required in 5.1.
                $.strictEqual(globalJsonStringify(new Date(8.64e15)), '"+275760-09-13T00:00:00.000Z"') &&
                // Firefox <= 11.0 incorrectly serializes years prior to 0 as negative
                // four-digit years instead of six-digit years. Credits: @Yaffle.
                $.strictEqual(globalJsonStringify(new Date(-621987552e5)),
                                  '"-000001-01-01T00:00:00.000Z"') &&
                // Safari <= 5.1.7 and Opera >= 10.53 incorrectly serialize millisecond
                // values less than 1000. Credits: @Yaffle.
                $.strictEqual(globalJsonStringify(new Date(-1)), '"1969-12-31T23:59:59.999Z"');
        } catch (e) {
            isSupportedResult = false;
        }
    }

    if ($.isTrue(isSupportedResult)) {
        $.jsonStringify = globalJsonStringify;
    } else {
        escapableRxString = '[\\\\\\"\\x00-\\x1f\\x7f-\\x9f\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5';
        escapableRxString += '\\u200c-\\u200f\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';
        rxEscapable = new RegExp(escapableRxString, 'g');
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

            rxEscapable.lastIndex = $.POSITIVE_ZERO;
            if (rxEscapable.test(string)) {
                result += string.replace(rxEscapable, function (a) {
                    var c = stringifyMeta[a],
                        r;

                    if ($.isString(c)) {
                        r = c;
                    } else {
                        r = '\\u' + ('0000' + a.charCodeAt($.POSITIVE_ZERO).toString(16)).slice(-4);
                    }

                    return r;
                });
            } else {
                result += string;
            }

            return result + '"';
        };

        stringifyToString = function (key, holder) {
            var index,
                member,
                length,
                mind = stringifyGap,
                partial,
                value = holder[key];

            if (isTypeObjectOrIsFunction(value) && $.isFunction(value.toJSON)) {
                value = value.toJSON(key);
            }

            if ($.isFunction(stringifyReplacer)) {
                value = stringifyReplacer.call(holder, key, value);
            }

            switch (typeof value) {
            case 'string':
                return stringifyQuote(value);
            case 'number':
                if ($.numberIsFinite(value)) {
                    return $.anyToString(value);
                }

                return 'null';
            case 'boolean':
            case 'null':
                return $.anyToString(value);
            case 'object':
                if ($.isNull(value)) {
                    return $.anyToString(value);
                }

                stringifyGap += stringifyIndent;
                partial = [];
                if ($.arrayIsArray(value)) {
                    length = value.length;
                    for (index = $.POSITIVE_ZERO; index < length; index += 1) {
                        $.arrayAssign(partial, index, stringifyToString(index, value) || 'null');
                    }

                    if ($.isZero(partial.length)) {
                        member = '[]';
                    } else if ($.isStringNotEmpty(stringifyGap)) {
                        member = '[' + newLine + stringifyGap + $.arrayJoin(partial, ',' + newLine + stringifyGap) +
                                                newLine + mind + ']';
                    } else {
                        member = '[' + $.arrayJoin(partial) + ']';
                    }

                    stringifyGap = mind;

                    return member;
                }

                if ($.arrayIsArray(stringifyReplacer)) {
                    $.arrayForEach(stringifyReplacer, function (element) {
                        var v;

                        if ($.isString(element)) {
                            v = stringifyToString(element, value);
                            if (!$.isUndefined(v)) {
                                $.arrayPush(partial, stringifyQuote(element) +
                                                ($.isStringNotEmpty(stringifyGap)  ? ': ' : ':') + v);
                            }
                        }
                    });
                } else {
                    $.arrayForEach($.objectKeys(value), function (k) {
                        var v = stringifyToString(k, value);

                        if (!$.isUndefined(v)) {
                            $.arrayPush(partial, stringifyQuote(k) +
                                            ($.isStringNotEmpty(stringifyGap) ? ': ' : ':') + v);
                        }
                    });
                }

                if ($.isZero(partial.length)) {
                    member = '{}';
                } else if ($.isStringNotEmpty(stringifyGap)) {
                    member = '{' + newLine + stringifyGap + $.arrayJoin(partial, ',' + newLine + stringifyGap) +
                                                newLine + mind + '}';
                } else {
                    member = '{' + $.arrayJoin(partial) + '}';
                }

                stringifyGap = mind;

                return member;
            }

            return $.privateUndefined;
        };

        $.jsonStringify = function (value, replacer, space) {
            stringifyGap = emptyString;
            if ($.isNumber(space)) {
                stringifyIndent = $.stringRepeat(' ', space);
            } else if ($.isString(space)) {
                stringifyIndent = space;
            } else {
                stringifyIndent = emptyString;
            }

            stringifyReplacer = replacer;
            if (!$.isUndefinedOrNull(replacer) && !$.isFunction(replacer) &&
                    !$.arrayIsArray(replacer)) {

                throw new Error('JSON.stringify');
            }

            return stringifyToString(emptyString, {
                '': value
            });
        };
    }

    /**
     * Parse a string as JSON, optionally transform the produced value and its properties, and return the value.
     * @memberOf utilx
     * @name jsonParse
     * @function
     * @param {string} text
     * @param {function|array} reviver
     * @return {object}
     */
    // Determines whether the (possibly native) `JSON.stringify` and `parse`
    // implementations are spec-compliant. Based on work by Ken Snyder.
    if ($.isNativeFunction(globalJsonParse)) {
        try {
            // FF 3.1b1, b2 will throw an exception if a bare literal is provided.
            // Conforming implementations should also coerce the initial argument to
            // a string prior to parsing.
            if ($.isZero(globalJsonParse('0')) && $.isFalse(globalJsonParse(false))) {
                // Simple parsing test.
                testValue = globalJsonParse('{\"A\":[1,true,false,null,\"\\u0000\\b\\n\\f\\r\\t\"]}');
                isSupportedResult = $.strictEqual(testValue.A.length, 5);
                isSupportedResult = isSupportedResult && $.strictEqual(testValue.A[$.POSITIVE_ZERO], 1);
                if (isSupportedResult) {
                    try {
                        // Safari <= 5.1.2 and FF 3.1b1 allow unescaped tabs in strings.
                        isSupportedResult = $.isString(globalJsonParse('"\t"'));
                    } catch (ignore) {}

                    if (isSupportedResult) {
                        try {
                            // FF 4.0 and 4.0.1 allow leading `+` signs, and leading and
                            // trailing decimal points. FF 4.0, 4.0.1, and IE 9-10 also
                            // allow certain octal literals.
                            isSupportedResult = $.notStrictEqual(globalJsonParse('01'), 1);
                        } catch (ignore) {}
                    }
                }
            }
        } catch (e) {
            isSupportedResult = false;
        }
    }

    if ($.isTrue(isSupportedResult)) {
        try {
            globalJsonParse();
        } catch (e) {
            threwSynatxError = $.objectInstanceOf(e, SyntaxError);
        }

        if (threwSynatxError) {
            $.jsonParse = globalJsonParse;
        } else {
            $.jsonParse = function (text, reviver) {
                if ($.isUndefined(text)) {
                    throw new SyntaxError('globalJsonParse');
                }

                return globalJsonParse(text, reviver);
            };
        }
    } else {
        rxParseProtect1 = new RegExp('^[\\],:{}\\s]*$');
        rxParseProtect2 = new RegExp('\\\\(?:["\\\\\\/bfnrt]|u[0-9a-fA-F]{4})', 'g');
        rxParseProtect3 = new RegExp('"[^"\\\\\\n\\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?', 'g');
        rxParseProtect4 = new RegExp('(?:^|:|,)(?:\\s*\\[)+', 'g');
        parseRxCharacterString = '[\\u0000\\u00ad\\u0600-\\u0604\\u070f\\u17b4\\u17b5\\u200c-\\u200f';
        parseRxCharacterString += '\\u2028-\\u202f\\u2060-\\u206f\\ufeff\\ufff0-\\uffff]';
        rxParseCharacterTest = new RegExp(parseRxCharacterString, 'g');
        $.jsonParse = function (text, reviver) {
            var j;

            function walk(holder, key) {
                var value = holder[key];

                if ($.isTypeObject(value)) {
                    $.arrayForEach($.objectKeys(value), function (k) {
                        var v = walk(value, k);

                        if (!$.isUndefined(v)) {
                            value[k] = v;
                        } else {
                            delete value[k];
                        }
                    });
                }

                return reviver.call(holder, key, value);
            }

            text = $.anyToString(text);
            rxParseCharacterTest.lastIndex = $.POSITIVE_ZERO;
            if (rxParseCharacterTest.test(text)) {
                text = text.replace(rxParseCharacterTest, function (a) {
                    return '\\u' + ('0000' + a.charCodeAt($.POSITIVE_ZERO).toString(16)).slice(-4);
                });
            }

            if (rxParseProtect1.test(text.replace(rxParseProtect2, '@')
                                     .replace(rxParseProtect3, ']')
                                     .replace(rxParseProtect4, emptyString))) {

                /*jslint evil: true */
                j = eval('(' + text + ')');
                /*jslint evil: false */

                if ($.isFunction(reviver)) {
                    return walk({
                        '': j
                    }, emptyString);
                }

                return j;
            }

            throw new SyntaxError('JSON.parse');
        };
    }

    function factory() {
        var utilx = $.extend({}, $);

        // set the properties of utilx to not enumerable
        $.arrayForEach($.objectKeys(utilx), function (key) {
            $.objectDefineProperty(utilx, key, notEnumerableProperties);
        });

        // set the properties of the constants
        $.objectDefineProperties(utilx, {
            privateUndefined: constantProperties,

            POSITIVE_ZERO: constantProperties,

            NEGATIVE_ZERO: constantProperties,

            UNSAFE_INTEGER: constantProperties,

            WORD8: constantProperties,

            UWORD8: constantProperties,

            WORD16: constantProperties,

            UWORD16: constantProperties,

            WORD32: constantProperties,

            UWORD32: constantProperties,

            MAX_UINT32: constantProperties,

            MAX_INT32: constantProperties,

            MIN_INT32: constantProperties,

            MAX_UINT16: constantProperties,

            MAX_INT16: constantProperties,

            MIN_INT16: constantProperties,

            MAX_UINT8: constantProperties,

            MAX_INT8: constantProperties,

            MIN_INT8: constantProperties,

            MAX_INTEGER: constantProperties,

            MIN_INTEGER: constantProperties,

            POSITIVE_INFINITY: constantProperties,

            NEGATIVE_INFINITY: constantProperties,

            MAX_VALUE: constantProperties,

            MIN_VALUE: constantProperties,

            NAN: constantProperties,

            EPSILON: constantProperties
        });

        return utilx;
    }

    /*
     *
     * UMD
     *
     */

    if (!$.isTypeObject(globalThis)) {
        throw new TypeError('Invalid global context');
    }

    publicUtil = $.objectDefineProperty(factory(), factoryString, $.extend({
        value: function () {
            return $.objectDefineProperty(factory(), factoryString, $.extend({
                value: publicUtil[factoryString]
            }, notEnumerableProperties));
        }
    }, notEnumerableProperties));

    if ($.isTypeObject(module) && $.isTypeObject(module.exports)) {
        $.objectDefineProperty(module, 'exports', $.extend({
            value: publicUtil
        }, notEnumerableProperties));
    } else if ($.isFunction(define) && $.isTypeObject(define.amd)) {
        define(function () {
            return publicUtil;
        });
    } else {
        $.objectDefineProperty(globalThis, 'utilx', $.extend({
            value: publicUtil
        }, notEnumerableProperties));
    }

    /*global module, define */
}(this, Math,
    typeof JSON === 'object' && JSON,
    typeof module === 'object' && module,
    typeof define === 'function' && define));
