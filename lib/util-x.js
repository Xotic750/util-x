/**
 * @file {@link http://xotic750.github.io/util-x/ AstroDate}. A Javascript utility library..
 * @version 0.0.4
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

(function (globalThis) {
    /* jshint -W034 */
    'use strict';

    function factory() {
        /**
         * @namespace utilx
         */

        var utilx = {},
            UWORD32 = Math.pow(2, 32),
            MAX_UINT32 = UWORD32 - 1,
            baseObject = {},
            baseArray = [],
            baseString = '',
            baseNumber = 0,
            baseBoolean = true,
            CtrBoolean = baseBoolean.constructor,
            CtrNumber = baseNumber.constructor,
            CtrString = baseString.constructor,
            protoName = '__proto__',

            /**
             * For hasOwnProperty bug.
             * @ignore
             * @type {array.<string>}
             */
            defaultProperties = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],

            // Safari 2.x NFE bug fix
            // http://kangax.github.io/nfe/
            tempSafariNFE;

        /**
         * Returns the primitive value undefined.
         * @memberOf utilx
         * @function
         * @return {undefined}
         */
        utilx.noop = function () {
            return;
        };

        /**
         * @memberOf utilx
         * @type {undefined}
         */
        utilx.privateUndefined = (function () {
            return utilx.noop();
        }());

        /**
         * Coerces an input to a number.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        utilx.toNumber = function (inputArg) {
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
        utilx.equal = function (a, b) {
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
        utilx.notEqual = function (a, b) {
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
        utilx.strictEqual = function (a, b) {
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
        utilx.notStrictEqual = function (a, b) {
            return a !== b;
        };

        /**
         * Returns true if the operand number is less than limit.
         * @param {number} number
         * @param {number} limit
         * @return {boolean}
         */
        utilx.lt = function (number, limit) {
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
        utilx.lte = function (number, limit) {
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
        utilx.gt = function (number, limit) {
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
        utilx.gte = function (number, limit) {
            return number >= limit;
        };

        /**
         * The mod/remainder operator returns the first operand modulo of the second operand, that is, number1 modulo number2, in the preceding statement,
         * where number1 and number2 are numbers. The modulo function is the integer remainder of dividing number1 by number2.
         * For example, 12 % 5 returns 2. The result will have the same sign as number1; that is, -1 % 2 returns -1.
         * @memberOf utilx
         * @function
         * @param {number} number1
         * @param {number} number2
         * @return {number}
         */
        utilx.mod = function (number1, number2) {
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
        utilx.clamp = function (number, min, max) {
            return Math.min(Math.max(number, min), max);
        };

        /**
         * Returns true if the operand number is greater than or equal to min or if number is less than or equal to max.
         * @memberOf utilx
         * @function
         * @param {number} number
         * @param {number} min
         * @param {number} max
         * @return {boolean}
         */
        utilx.inRange = function (number, min, max) {
            return utilx.gte(number, min) && utilx.lte(number, max);
        };

        /**
         * Returns true if the operand inputArg is undefined.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isUndefined = function (inputArg) {
            return utilx.strictEqual(typeof inputArg, 'undefined');
        };

        /**
         * Returns true if the operand inputArg is null.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isNull = function (inputArg) {
            return utilx.strictEqual(inputArg, null);
        };

        /**
         * Returns true if the operand inputArg is undefined or null.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isUndefinedOrNull = function (value) {
            return utilx.isUndefined(value) || utilx.isNull(value);
        };

        /**
         * Returns true if the operand inputArg is a true.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isTrue = function (inputArg) {
            return utilx.strictEqual(inputArg, true);
        };

        /**
         * Returns true if the operand inputArg is a false.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isFalse = function (inputArg) {
            return utilx.strictEqual(inputArg, false);
        };

        /**
         * Returns true if the operand inputArg is a boolean.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isBoolean = function (inputArg) {
            return utilx.isTrue(inputArg) || utilx.isFalse(inputArg);
        };

        /**
         * Returns true if the operand inputArg is a number.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isNumber = function (inputArg) {
            return utilx.strictEqual(typeof inputArg, 'number');
        };

        /**
         * Returns true if the operand inputArg is the number 0.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isZero = function (inputArg) {
            return utilx.strictEqual(inputArg, 0);
        };

        /**
         * Returns true if the operand inputArg is a string.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isString = function (inputArg) {
            return utilx.strictEqual(typeof inputArg, 'string');
        };

        /**
         * Returns true if the operand inputArg is a primitive object.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isPrimitive = function (object) {
            return utilx.isUndefinedOrNull(object) || utilx.isString(object) || utilx.isNumber(object) || utilx.isBoolean(object);
        };

        /**
         * Returns true if the operand inputArg is an empty string.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isEmptyString = function (inputArg) {
            return utilx.strictEqual(inputArg, '');
        };

        /**
         * Returns true if the operand inputArg is deemed numeric.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isNumeric = function (inputArg) {
            var val = false,
                string;

            if (utilx.isNumber(inputArg) || utilx.isString(inputArg)) {
                string = inputArg.toString().replace(/^[+\-]?/, '');
                if (!isNaN(parseFloat(string)) && isFinite(string)) {
                    val = true;
                }
            }

            return val;
        };

        /**
         * The abstract operation throws an error if its argument is a value that cannot be
         * converted to an Object using utilx.argToObject, otherwise returns the argument.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @param {string} [msg]
         * @return {boolean}
         */
        utilx.checkObjectCoercible = function (inputArg) {
            if (utilx.isUndefinedOrNull(inputArg)) {
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
        utilx.argToObject = function (inputArg) {
            var object = utilx.checkObjectCoercible(inputArg);

            if (utilx.isBoolean(object)) {
                object = new CtrBoolean(object);
            } else if (utilx.isNumber(object)) {
                object = new CtrNumber(object);
            } else if (utilx.isString(object)) {
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
        // named utilx.anyToString instead of toString because of SpiderMonkey and Blackberry bug
        utilx.anyToString = function (inputArg) {
            var val;

            if (utilx.isString(inputArg)) {
                val = inputArg;
            } else if (utilx.isUndefined(inputArg)) {
                val = 'undefined';
            } else {
                val = String(inputArg);
            }

            return val;
        };

        /**
         * Return the String value that is the result of concatenating the three Strings "[object ", class, and "]".
         * @memberOf utilx
         * @function
         * @param {*} object
         * @return {string}
         */
        utilx.toObjectString = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var toStringFN = baseObject.toString,
                undefinedString = '[object Undefined]',
                nullString = '[object Null]',
                nfeToObjectString;

            try {
                tempSafariNFE = null;
                if (utilx.strictEqual(toStringFN.call(), undefinedString) && utilx.strictEqual(toStringFN.call(null), nullString)) {
                    tempSafariNFE = function nfeToObjectString(object) {
                        return toStringFN.call(object);
                    };
                }
            } catch (exception) {
                tempSafariNFE = null;
            }

            if (utilx.isNull(tempSafariNFE)) {
                tempSafariNFE = function nfeToObjectString(object) {
                    var val;

                    if (utilx.isUndefined(object)) {
                        val = undefinedString;
                    } else if (utilx.isNull(object)) {
                        val = nullString;
                    } else {
                        val = toStringFN.call(object);
                    }

                    return val;
                };
            }

            nfeToObjectString = null;

            return tempSafariNFE;
        }());

        /**
         * Returns true if the operand inputArg is a RegExp.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isRegExp = function (inputArg) {
            return utilx.strictEqual(utilx.toObjectString(inputArg), '[object RegExp]');
        };

        /**
         * Returns true if the operand inputArg is an Object.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isObject = function (inputArg) {
            return utilx.strictEqual(utilx.toObjectString(inputArg), '[object Object]');
        };

        /**
         * Returns true if the operand inputArg is a Function.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isFunction = function (inputArg) {
            return utilx.strictEqual(utilx.toObjectString(inputArg), '[object Function]');
        };

        /**
         * Returns true if the operand inputArg is an argumenta object.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isArguments = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
                argumentsString = '[object Arguments]',
                calleeString = 'callee',
                lengthString = 'length',
                nfeIsArguments;

            function getArgs() {
                return arguments;
            }

            if (utilx.strictEqual(utilx.toObjectString(getArgs()), argumentsString)) {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return utilx.strictEqual(utilx.toObjectString(inputArg), argumentsString);
                };
            } else if (utilx.isFunction(propertyIsEnumerableFN)) {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return utilx.isObject(inputArg) && utilx.objectHasOwnProperty(inputArg, calleeString) && !propertyIsEnumerableFN.call(inputArg, calleeString) && utilx.objectHasOwnProperty(inputArg, lengthString) && !propertyIsEnumerableFN.call(inputArg, lengthString) && utilx.isNumber(inputArg.length);
                };
            } else {
                tempSafariNFE = function nfeIsArguments(inputArg) {
                    return utilx.isObject(inputArg) && utilx.objectHasOwnProperty(inputArg, calleeString) && utilx.objectHasOwnProperty(inputArg, lengthString) && utilx.isNumber(inputArg.length);
                };
            }

            nfeIsArguments = null;

            return tempSafariNFE;
        }());

        /**
         * Returns true if the operand inputArg is typeof Object.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isTypeOfObject = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var testRx = /test/,
                objectString = 'object',
                isRxObject = utilx.strictEqual(typeof testRx, objectString),
                nfeIsTypeOfObject;

            if (utilx.isTrue(isRxObject)) {
                tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                    return utilx.strictEqual(typeof inputArg, objectString);
                };
            } else {
                tempSafariNFE = function nfeIsTypeOfObject(inputArg) {
                    return utilx.strictEqual(typeof inputArg, objectString) || utilx.isRegExp(inputArg);
                };
            }

            nfeIsTypeOfObject = null;

            return tempSafariNFE;
        }());

        /**
         * Returns true if the operand inputArg is of type Object but not if null.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isTypeObject = function (inputArg) {
            return !utilx.isNull(inputArg) && utilx.isTypeOfObject(inputArg);
        };

        /**
         * The function takes one argument inputArg, and returns the Boolean value true if the argument is an object
         * whose class internal property is "Array"; otherwise it returns false.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        // named utilx.arrayIsArray instead of isArray because of SpiderMonkey and Blackberry bug
        utilx.arrayIsArray = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isArrayFN = baseArray.isArray,
                nfeIsArray;

            if (utilx.isFunction(isArrayFN)) {
                tempSafariNFE = isArrayFN;
            } else {
                tempSafariNFE = function nfeIsArray(inputArg) {
                    return utilx.strictEqual(utilx.toObjectString(inputArg), '[object Array]');
                };
            }

            nfeIsArray = null;

            return tempSafariNFE;
        }());

        /**
         * Returns true if the specified property is in the specified object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {string} property
         * @return {boolean}
         */
        utilx.hasProperty = function (object, property) {
            return property in object;
        };

        /**
         * The function takes one argument inputArg, if the argument is an object whose class internal property is "Array"
         * or is an Object whose class internal property is "Arguments"; returns true if length is zero otherwise it returns false.
         * Otherwise returns null if the argument does not match the rquirements.
         * @memberOf utilx
         * @function
         * @param {array} inputArg
         * @return {(boolean|null)}
         */
        utilx.isEmptyArray = function (inputArg) {
            var val;

            if (utilx.arrayIsArray(inputArg) || utilx.isArguments(inputArg)) {
                val = utilx.isZero(inputArg.length);
            } else {
                val = null;
            }

            return val;
        };

        /**
         * Returns the first element of an array; otherwise returns undefined.
         * @memberOf utilx
         * @function
         * @param {array} inputArg
         * @return {(*|undefined)}
         */
        utilx.arrayFirst = function (inputArg) {
            var val;

            if (!utilx.isEmptyArray(inputArg)) {
                val = inputArg[0];
            }

            return val;
        };

        /**
         * Returns the last element of an array; otherwise returns undefined.
         * @memberOf utilx
         * @function
         * @param {array} inputArg
         * @return {(*|undefined)}
         */
        utilx.arrayLast = function (inputArg) {
            var val;

            if (!utilx.isEmptyArray(inputArg)) {
                val = inputArg[inputArg.length - 1];
            }

            return val;
        };

        /**
         * Returns true if the operand inputArg is a Date object.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {boolean}
         */
        utilx.isDate = function (inputArg) {
            return utilx.strictEqual(utilx.toObjectString(inputArg), '[object Date]');
        };

        /**
         * Determines whether two values are the same value.
         * @memberOf utilx
         * @function
         * @param {*} x
         * @param {*} y
         * @return {boolean}
         */
        // named utilx.objectIs instead of utilx.objectIs because of SpiderMonkey and Blackberry bug
        utilx.objectIs = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isIsFn = baseObject.constructor.is,
                nfeIs;

            if (utilx.isFunction(isIsFn)) {
                tempSafariNFE = isIsFn;
            } else {
                tempSafariNFE = function nfeIs(x, y) {
                    var val;

                    if (utilx.strictEqual(x, y)) {
                        if (utilx.isZero(x)) {
                            val = utilx.strictEqual(1 / x, 1 / y);
                        } else {
                            val = true;
                        }
                    } else {
                        val = utilx.notStrictEqual(x, x) && utilx.notStrictEqual(y, y);
                    }

                    return val;
                };
            }

            nfeIs = null;

            return tempSafariNFE;
        }());

        /**
         * The function determines whether the passed value is NaN. More robust version of the original global isNaN.
         * @memberOf utilx
         * @function
         * @param {*} number
         * @return {boolean}
         */
        // named utilx.numberIsNaN instead of isNaN because of SpiderMonkey and Blackberry bug
        utilx.numberIsNaN = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isNaNFN = baseNumber.constructor.isNaN,
                nfeIsNaN;

            if (utilx.isFunction(isNaNFN)) {
                tempSafariNFE = isNaNFN;
            } else {
                tempSafariNFE = function nfeIsNaN(number) {
                    return utilx.objectIs(number, NaN);
                };
            }

            nfeIsNaN = null;

            return tempSafariNFE;
        }());

        /**
         * The function determines whether the passed value is finite. More robust version of the original global isFinite.
         * @memberOf utilx
         * @function
         * @param {*} number
         * @return {boolean}
         */
        // named utilx.numberIsFinite instead of isFinite because of SpiderMonkey and Blackberry bug
        utilx.numberIsFinite = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var isFiniteFN = baseNumber.constructor.isFinite,
                nfeIsFinite;

            if (utilx.isFunction(isFiniteFN)) {
                tempSafariNFE = isFiniteFN;
            } else {
                tempSafariNFE = function nfeIsFinite(number) {
                    return utilx.isNumber(number) && isFinite(number);
                };
            }

            nfeIsFinite = null;

            return tempSafariNFE;
        }());

        /**
         * The function returns the sign of a number, indicating whether the number is positive, negative or zero.
         * This function has 5 kinds of return values, 1, -1, 0, -0, NaN, which represent "positive number",
         * "negative number", "positive zero",  "negative zero" and NaN respectively
         * @memberOf utilx
         * @function
         * @param {*} value
         * @return {number}
         */
        // named mathSign instead of sign because of SpiderMonkey and Blackberry bug
        utilx.mathSign = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var signFN = Math.sign,
                nfeSign;

            if (utilx.isFunction(signFN)) {
                tempSafariNFE = signFN;
            } else {
                tempSafariNFE = function nfeSign(value) {
                    var number = utilx.toNumber(value),
                        val;

                    if (utilx.isZero(number) || utilx.numberIsNaN(number)) {
                        val = number;
                    } else if (utilx.lt(number, 0)) {
                        val = -1;
                    } else {
                        val = 1;
                    }

                    return val;
                };
            }

            nfeSign = null;

            return tempSafariNFE;
        }());

        /**
         * The function evaluates the passed value and converts it to an integer.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        // named utilx.numberToInteger instead of toInteger because of SpiderMonkey and Blackberry bug
        utilx.numberToInteger = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var toIntegerFN = Number.toInteger,
                nfeToInteger;

            if (utilx.isFunction(toIntegerFN)) {
                tempSafariNFE = toIntegerFN;
            } else {
                tempSafariNFE = function nfeToInteger(inputArg) {
                    var number = utilx.toNumber(inputArg),
                        val;

                    if (utilx.numberIsNaN(number)) {
                        val = +0;
                    } else if (utilx.isZero(number) || !utilx.numberIsFinite(number)) {
                        val = number;
                    } else {
                        val = utilx.mathSign(number) * Math.floor(Math.abs(number));
                    }

                    return val;
                };
            }

            nfeToInteger = null;

            return tempSafariNFE;
        }());

        /**
         * The abstract operation converts its argument to one of 2^32 integer values in the range -2^31 through 2^31-1, inclusive.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        utilx.toInt32 = function (inputArg) {
            var number = utilx.toNumber(inputArg),
                int32bit,
                val;

            if (utilx.isZero(number) || !utilx.numberIsFinite(number)) {
                val = +0;
            } else {
                int32bit = utilx.mod(utilx.mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
                if (utilx.gt(int32bit, UWORD32)) {
                    val = int32bit - UWORD32;
                } else {
                    val = int32bit;
                }
            }

            return val;
        };

        /**
         * The abstract operation converts its argument to one of 2^32 integer values in the range 0 through 2^32-1,inclusive.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {number}
         */
        utilx.toUint32 = function (inputArg) {
            var number = utilx.toNumber(inputArg),
                val;

            if (utilx.isZero(number) || !utilx.numberIsFinite(number)) {
                val = +0;
            } else {
                val = utilx.mod(utilx.mathSign(number) * Math.floor(Math.abs(number)), UWORD32);
            }

            return val;
        };

        /**
         * @memberOf utilx
         * @function
         * @param {regexp} separator
         * @param {array} match
         * @param {arguments} args
         */
        function stringSplitReplacer(separator, match, args) {
            var length = args.length - 2,
                index;

            utilx.arrayFirst(match).replace(separator, function () {
                for (index = 1; utilx.lt(index, length); index += 1) {
                    if (utilx.isUndefined(arguments[index])) {
                        match[index] = utilx.privateUndefined;
                    }
                }
            });
        }

        /**
         * Splits a String object into an array of strings by separating the string into substrings.
         * @memberOf utilx
         * @function
         * @param {string} str
         * @param {string} [separator]
         * @param {number} [limit]
         * @return {array.<string>}
         */
        // named utilx.stringSplit instead of split because of SpiderMonkey and Blackberry bug
        utilx.stringSplit = (function () {
            var splitFN = baseString.split,
                compliantExecNpcg = utilx.isUndefined(/()??/.exec('')[1]);

            return function (str, separator, limit) {
                var string = utilx.anyToString(utilx.checkObjectCoercible(str)),
                    output,
                    flags,
                    lastLastIndex,
                    separator2,
                    match,
                    lastIndex,
                    lastLength,
                    val;

                if (utilx.isRegExp(separator)) {
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
                    if (utilx.isFalse(compliantExecNpcg)) {
                        separator2 = new RegExp('^' + separator.source + '$(?!\\s)', flags);
                    }

                    if (utilx.isUndefined(limit)) {
                        limit = MAX_UINT32;
                    } else {
                        limit = utilx.toUint32(limit);
                    }

                    output = [];
                    flags = 'g';
                    lastLastIndex = 0;
                    match = separator.exec(string);
                    while (match) {
                        lastIndex = match.index + utilx.arrayFirst(match).length;
                        if (utilx.gt(lastIndex, lastLastIndex)) {
                            output.push(string.slice(lastLastIndex, match.index));
                            if (utilx.isFalse(compliantExecNpcg) && utilx.gt(match.length, 1)) {
                                stringSplitReplacer(separator2, match, arguments);
                            }

                            if (utilx.gt(match.length, 1) && utilx.lt(match.index, string.length)) {
                                output = output.concat(match.slice(1));
                            }

                            lastLength = utilx.arrayFirst(match).length;
                            lastLastIndex = lastIndex;
                            if (utilx.gte(output.length, limit)) {
                                break;
                            }
                        }

                        if (utilx.strictEqual(separator.lastIndex, match.index)) {
                            separator.lastIndex += 1;
                        }

                        match = separator.exec(string);
                    }

                    if (utilx.strictEqual(lastLastIndex, string.length)) {
                        if (lastLength || !separator.test('')) {
                            output.push('');
                        }
                    } else {
                        output.push(string.slice(lastLastIndex));
                    }

                    if (utilx.gt(output.length, limit)) {
                        return output.slice(0, limit);
                    }

                    val = output;
                } else {
                    val = splitFN.call(str, separator, limit);
                }

                return val;
            };
        }());

        /**
         * Coerces its argument to a string and returns the first character of that string.
         * If the argument is an empty string, returns an empty string.
         * Throws an error if the argument can not be coerced, i.e. null or undefined.
         * @memberOf utilx
         * @function
         * @param {string} inputArg
         * @return {string}
         */
        utilx.firstChar = function (inputArg) {
            return utilx.anyToString(utilx.checkObjectCoercible(inputArg)).charAt(0);
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
        utilx.firstCharIs = function (inputArg, character) {
            return utilx.strictEqual(utilx.firstChar(inputArg), utilx.firstChar(character));
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
        utilx.lastChar = function (inputArg) {
            var thisStr = utilx.anyToString(utilx.checkObjectCoercible(inputArg));

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
        utilx.lastCharIs = function (inputArg, character) {
            return utilx.strictEqual(utilx.lastChar(inputArg), utilx.firstChar(character));
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
        utilx.countCharacter = function (inputArg, character) {
            return utilx.clamp(utilx.stringSplit(utilx.anyToString(utilx.checkObjectCoercible(inputArg)), utilx.firstChar(character)).length - 1, 0, Number.POSITIVE_INFINITY);
        };

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
        utilx.padLeadingChar = function (inputArg, character, size) {
            var string = utilx.anyToString(utilx.checkObjectCoercible(inputArg)),
                singleChar = utilx.firstChar(character),
                count = utilx.numberToInteger(size) - string.length;

            if (utilx.lt(count, 0) || utilx.strictEqual(count, Infinity)) {
                count = 0;
            }

            return utilx.stringRepeat(singleChar, count) + string;
        };

        /**
         * Repeat the current string several times, return the new string.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @param {number} times
         * @return {string}
         */
        // named utilx.stringRepeat instead of repeat because of SpiderMonkey and Blackberry bug
        utilx.stringRepeat = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var repeatFN = baseString.constructor.repeat,
                nfeRepeat;

            function rep(s, times) {
                var half,
                    val;

                if (utilx.lt(times, 1)) {
                    val = '';
                } else if (utilx.mod(times, 2)) {
                    val = rep(s, times - 1) + s;
                } else {
                    half = rep(s, times / 2);
                    val = half + half;
                }

                return val;
            }

            if (utilx.isFunction(repeatFN)) {
                tempSafariNFE = function nfeRepeat(string, times) {
                    return repeatFN.call(string, times);
                };
            } else {
                tempSafariNFE = function nfeRepeat(string, count) {
                    var thisString = utilx.anyToString(utilx.checkObjectCoercible(string)),
                        times = utilx.numberToInteger(count);

                    if (utilx.lt(times, 0) || utilx.strictEqual(times, Infinity)) {
                        throw new RangeError();
                    }

                    return rep(thisString, times);
                };
            }

            nfeRepeat = null;

            return tempSafariNFE;
        }());

        /**
         * Determines whether a string begins with the characters of another string, returning true or false as appropriate.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @param {string} searchString
         * @param {number} [position]
         * @return {boolean}
         */
        // named stringStartsWith instead of startsWith because of SpiderMonkey and Blackberry bug
        utilx.stringStartsWith = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var startsWithFN = baseString.constructor.startsWith,
                nfeStartsWith;

            if (utilx.isFunction(startsWithFN)) {
                tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                    return startsWithFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeStartsWith(string, searchString, position) {
                    var thisStr = utilx.anyToString(utilx.checkObjectCoercible(string)),
                        searchStr = utilx.anyToString(searchString),
                        start = utilx.clamp(utilx.numberToInteger(position), 0, thisStr.length);

                    return utilx.strictEqual(thisStr.slice(start, start + searchStr.length), searchStr);
                };
            }

            nfeStartsWith = null;

            return tempSafariNFE;
        }());

        /**
         * Determines whether a string ends with the characters of another string, returning true or false as appropriate.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @param {string} searchString
         * @param {number} [position]
         * @return {boolean}
         */
        // named stringEndsWith instead of endsWith because of SpiderMonkey and Blackberry bug
        utilx.stringEndsWith = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var endsWithFN = baseString.constructor.endsWith,
                nfeEndsWith;

            if (utilx.isFunction(endsWithFN)) {
                tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                    return endsWithFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeEndsWith(string, searchString, position) {
                    var thisStr = utilx.anyToString(utilx.checkObjectCoercible(string)),
                        searchStr = utilx.anyToString(searchString),
                        thisLen = thisStr.length,
                        end,
                        start;

                    if (utilx.isUndefined(position)) {
                        position = thisLen;
                    } else {
                        position = utilx.numberToInteger(position);
                    }

                    end = utilx.clamp(position, 0, thisLen);
                    start = end - searchStr.length;

                    return utilx.gte(start, 0) && utilx.strictEqual(thisStr.slice(start, end), searchStr);
                };
            }

            nfeEndsWith = null;

            return tempSafariNFE;
        }());

        /**
         * Determines whether a string contains the characters of another string, returning true or false as appropriate.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @param {string} searchString
         * @param {number} [position]
         * @return {boolean}
         */
        // named utilx.stringContains instead of contains because of SpiderMonkey and Blackberry bug
        utilx.stringContains = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var containsFN = baseString.constructor.contains,
                nfeContains;

            if (utilx.isFunction(containsFN)) {
                tempSafariNFE = function nfeContains(string, searchString, position) {
                    return containsFN.call(string, searchString, position);
                };
            } else {
                tempSafariNFE = function nfeContains(string, searchString, position) {
                    var thisStr = utilx.anyToString(utilx.checkObjectCoercible(string)),
                        searchStr = utilx.anyToString(searchString),
                        thisLen = thisStr.length;

                    if (utilx.isUndefined(position)) {
                        position = 0;
                    } else {
                        position = utilx.numberToInteger(position);
                    }

                    return utilx.notStrictEqual(baseString.indexOf.call(thisStr, searchStr, utilx.clamp(position, 0, thisLen)), -1);
                };
            }

            nfeContains = null;

            return tempSafariNFE;
        }());

        /**
         * Return the value of the [[Prototype]] internal property of object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {Prototype}
         */
        // named utilx.objectGetPrototypeOf instead of getPrototypeOf because of SpiderMonkey and Blackberry bug
        utilx.objectGetPrototypeOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var getPrototypeOfFN = baseObject.constructor.getPrototypeOf,
                nfeGetPrototypeOf,
                bocProto;

            if (utilx.isFunction(getPrototypeOfFN)) {
                tempSafariNFE = getPrototypeOfFN;
            } else if (utilx.isNull(baseObject.constructor.prototype[protoName])) {
                tempSafariNFE = function nfeGetPrototypeOf(object) {
                    return object[protoName];
                };
            } else {
                bocProto = baseObject.constructor.prototype;
                tempSafariNFE = function nfeGetPrototypeOf(object) {
                    if (utilx.strictEqual(object, bocProto)) {
                        return null;
                    }

                    var ctrProto = object.constructor.prototype;

                    if (utilx.strictEqual(object, ctrProto)) {
                        return bocProto;
                    }

                    return ctrProto;
                };
            }

            nfeGetPrototypeOf = null;

            return tempSafariNFE;
        }());

        /**
         * Returns true if the specified searchElement is in the specified array.
         * Using strict equality (the same method used by the === comparison operator).
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {*} searchElement
         * @return {boolean}
         */
        utilx.arrayContains = function (array, searchElement) {
            return utilx.notStrictEqual(utilx.arrayIndexOf(array, searchElement), -1);
        };

        /**
         * Returns a boolean indicating whether the object has the specified property.
         * This function can be used to determine whether an object has the specified property as a direct property of that object;
         * unlike the utilx.hasProperty function, this method does not check down the object's prototype chain.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {string} property
         * @return {boolean}
         */
        // http://ecma-international.org/ecma-262/5.1/#sec-15.2.4.5
        // Create our own local "hasOwnProperty" function: native -> shim -> sham
        // named utilx.objectHasOwnProperty instead of hasOwnProperty because of SpiderMonkey and Blackberry bug
        utilx.objectHasOwnProperty = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var hasOwnPropertyFN = baseObject.hasOwnProperty, // to combat old IE8- issues, min support IE6
                propertyIsEnumerableFN = baseObject.propertyIsEnumerable,
                hasDontEnumBug = true,
                testObject = {
                    toString: null
                },
                nfeHasOwnProperty;

            // use nfeHasOwnProperty to save a var
            for (nfeHasOwnProperty in testObject) {
                if (utilx.strictEqual(nfeHasOwnProperty, 'toString') && utilx.isNull(testObject[nfeHasOwnProperty])) {
                    hasDontEnumBug = false;
                }
            }

            function checkDontEnums(object, property) {
                return hasDontEnumBug && utilx.arrayContains(defaultProperties, property) && utilx.hasProperty(object, property) && utilx.notStrictEqual(object[property], utilx.objectGetPrototypeOf(object)[property]);
            }

            if (utilx.isFunction(hasOwnPropertyFN)) {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return hasOwnPropertyFN.call(object, property) || checkDontEnums(object, property);
                };
            } else if (utilx.isFunction(propertyIsEnumerableFN)) {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return propertyIsEnumerableFN.call(object, property) || checkDontEnums(object, property);
                };
            } else {
                tempSafariNFE = function nfeHasOwnProperty(object, property) {
                    return utilx.hasProperty(object, property) && utilx.isUndefined(utilx.objectGetPrototypeOf(object)[property]);
                };
            }

            nfeHasOwnProperty = null;

            return tempSafariNFE;
        }());

        /**
         * The abstract operation converts its argument to a value of type Object but fixes some environment bugs.
         * @memberOf utilx
         * @function
         * @param {*} inputArg
         * @return {object}
         */
        utilx.toObjectFixIndexedAccess = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var boxedString = baseObject.constructor('a'),
                splitString = utilx.notStrictEqual(boxedString[0], 'a') || !utilx.hasProperty(boxedString, 0),
                nfeToObjectFixIndexedAccess;

            tempSafariNFE = function nfeToObjectFixIndexedAccess(inputArg) {
                var object;

                if (splitString && utilx.isString(inputArg)) {
                    object = utilx.stringSplit(inputArg, '');
                } else {
                    object = utilx.argToObject(inputArg);
                }

                return object;
            };

            nfeToObjectFixIndexedAccess = null;

            return tempSafariNFE;
        }());

        /**
         * Executes a provided function once per array element.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {object} [thisArg]
         */
        // named utilx.arrayForEach instead of forEach because of SpiderMonkey and Blackberry bug
        utilx.arrayForEach = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var forEachFN = baseArray.forEach,
                nfeForEach;

            if (utilx.isFunction(forEachFN)) {
                tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                    return forEachFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeForEach(array, fn, thisArg) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length,
                        index;

                    if (!utilx.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = utilx.toUint32(object.length); utilx.lt(index, length); index += 1) {
                        if (utilx.hasProperty(object, index)) {
                            fn.call(thisArg, object[index], index, object);
                        }
                    }
                };
            }

            nfeForEach = null;

            return tempSafariNFE;
        }());

        /**
         * Tests whether some element in the array passes the test implemented by the provided function.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {object} [thisArg]
         * @return {boolean}
         */
        // named utilx.arraySome instead of some because of SpiderMonkey and Blackberry bug
        utilx.arraySome = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var someFN = baseArray.some,
                nfeSome;

            if (utilx.isFunction(someFN)) {
                tempSafariNFE = function nfeSome(array, fn, thisArg) {
                    return someFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeSome(array, fn, thisArg) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length,
                        index,
                        val;

                    if (!utilx.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = utilx.toUint32(object.length), val = false; utilx.lt(index, length); index += 1) {
                        if (utilx.hasProperty(object, index) && fn.call(thisArg, object[index], index, object)) {
                            val = true;
                            break;
                        }
                    }

                    return val;
                };
            }

            nfeSome = null;

            return tempSafariNFE;
        }());

        /**
         * Creates a new array with the results of calling a provided function on every element in this array.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {object} [thisArg]
         * @return {array}
         */
        // named utilx.arrayMap instead of map because of SpiderMonkey and Blackberry bug
        utilx.arrayMap = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var mapFN = baseArray.map,
                nfeMap;

            if (utilx.isFunction(mapFN)) {
                tempSafariNFE = function nfeMap(array, fn, thisArg) {
                    return mapFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeMap(array, fn, thisArg) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length,
                        index,
                        arr;

                    if (!utilx.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = utilx.toUint32(object.length), arr = []; utilx.lt(index, length); index += 1) {
                        arr[index] = fn.call(thisArg, object[index], index, object);
                    }

                    return arr;
                };
            }

            nfeMap = null;

            return tempSafariNFE;
        }());

        utilx.argumentsSlice = function (args, start, end) {
            var val;

            if (utilx.isArguments(args)) {
                val = baseArray.slice.call(args, start, end);
            }

            return val;
        };

        // named utilx.arrayUnshift instead of unshift because of SpiderMonkey and Blackberry bug
        utilx.arrayUnshift = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var unshiftFN = baseArray.unshift,
                nfeUnshift;

            if (utilx.strictEqual(unshiftFN.call([], 0), 1)) {
                tempSafariNFE = function nfeUnshift(array) {
                    return unshiftFN.apply(array, utilx.argumentsSlice(arguments, 1, arguments.length));
                };
            } else {
                tempSafariNFE = function nfeUnshift(array) {
                    unshiftFN.apply(array, utilx.argumentsSlice(arguments, 1, arguments.length));

                    return array.length;
                };
            }

            nfeUnshift = null;

            return tempSafariNFE;
        }());

        /**
         * Creates a new array with all elements that pass the test implemented by the provided function.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {object} [thisArg]
         * @return {array}
         */
        // named utilx.arrayFilter instead of filter because of SpiderMonkey and Blackberry bug
        utilx.arrayFilter = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var filterFN = baseArray.filter,
                nfeFilter;

            if (utilx.isFunction(filterFN)) {
                tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                    return filterFN.call(array, fn, thisArg);
                };
            } else {
                tempSafariNFE = function nfeFilter(array, fn, thisArg) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length,
                        arr,
                        index,
                        element;

                    if (!utilx.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    for (index = 0, length = utilx.toUint32(object.length), arr = []; utilx.lt(index, length); index += 1) {
                        element = object[index];
                        if (fn.call(thisArg, element, index, object)) {
                            arr[index] = element;
                        }
                    }

                    return arr;
                };
            }

            nfeFilter = null;

            return tempSafariNFE;
        }());

        /**
         * Apply a function against an accumulator and each value of the array (from left-to-right) as to reduce it to a single value.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {function} fn
         * @param {*} [initialValue]
         * @return {*}
         */
        // named utilx.arrayReduce instead of reduce because of SpiderMonkey and Blackberry bug
        utilx.arrayReduce = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var reduceFN = baseArray.reduce,
                errString = 'Reduce of empty array with no initial value',
                nfeReduce;

            if (utilx.isFunction(reduceFN)) {
                tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                    return reduceFN.call(array, fn, initialValue);
                };
            } else {
                tempSafariNFE = function nfeReduce(array, fn, initialValue) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length,
                        k,
                        index,
                        accumulator,
                        kPresent;

                    if (!utilx.isFunction(fn)) {
                        throw new TypeError(fn + ' is not a function');
                    }

                    if (utilx.isZero(length) && utilx.lt(arguments.length, 3)) {
                        throw new TypeError(errString);
                    }

                    k = 0;
                    if (utilx.gt(arguments.length, 2)) {
                        accumulator = initialValue;
                    } else {
                        for (k = 0, length = utilx.toUint32(object.length), kPresent = false; utilx.isFalse(kPresent) && utilx.lt(k, length); k += 1) {
                            kPresent = utilx.hasProperty(object, k);
                            if (utilx.isTrue(kPresent)) {
                                accumulator = object[k];
                            }
                        }

                        if (utilx.isFalse(kPresent)) {
                            throw new TypeError(errString);
                        }
                    }

                    for (index = k; utilx.lt(index, length); index += 1) {
                        if (utilx.hasProperty(object, index)) {
                            accumulator = fn.call(utilx.privateUndefined, accumulator, object[index], index, object);
                        }
                    }

                    return accumulator;
                };
            }

            nfeReduce = null;

            return tempSafariNFE;
        }());

        /**
         * Removes whitespace from both ends of the string.
         * @memberOf utilx
         * @function
         * @param {string} inputArg
         * @return {string}
         */
        // named utilx.stringTrim instead of trim because of SpiderMonkey and Blackberry bug
        utilx.stringTrim = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe/
            var trimFN = baseString.trim,
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
                testString,
                whiteSpacesString,
                wsTrimRX,
                nfeTrim,
                nfeBuildTestString,
                nfeBuildWhiteSpaceString;

            tempSafariNFE = function nfeBuildTestString(previous, element) {
                return previous + String.fromCharCode(element);
            };

            testString = utilx.arrayReduce(whiteSpacesList, tempSafariNFE, '');
            if (utilx.isFunction(trimFN) && utilx.isZero(trimFN.call(testString).length)) {
                tempSafariNFE = function nfeTrim(inputArg) {
                    return trimFN.call(inputArg);
                };
            } else {
                tempSafariNFE = function nfeBuildWhiteSpaceString(previous, element) {
                    return previous + '\\u' + utilx.padLeadingChar(element.toString(16), '0', 4);
                };

                whiteSpacesString = utilx.arrayReduce(whiteSpacesList, tempSafariNFE, '');
                wsTrimRX = new RegExp('^[' + whiteSpacesString + ']+|[' + whiteSpacesString + ']+$', 'g');
                tempSafariNFE = function nfeTrim(inputArg) {
                    return utilx.anyToString(utilx.checkObjectCoercible(inputArg)).replace(wsTrimRX, '');
                };
            }

            nfeTrim = null;
            nfeBuildTestString = null;
            nfeBuildWhiteSpaceString = null;

            return tempSafariNFE;
        }());

        /**
         * Returns the first index at which a given element can be found in the array, or -1 if it is not present.
         * @memberOf utilx
         * @function
         * @param {array} array
         * @param {object} searchElement
         * @param {number} [fromIndex]
         * @return {number}
         */
        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "indexOf" function: native -> polyfill
        // named utilx.arrayIndexOf instead of indexOf because of SpiderMonkey and Blackberry bug
        utilx.arrayIndexOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var indexOfFN = baseArray.indexOf,
                nfeIndexOf;

            if (utilx.isFunction(indexOfFN) && utilx.strictEqual(indexOfFN.call([0, 1], 1, 2), 1)) {
                tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                    return indexOfFN.call(array, searchElement, fromIndex);
                };
            } else {
                tempSafariNFE = function nfeIndexOf(array, searchElement, fromIndex) {
                    var object = utilx.toObjectFixIndexedAccess(array),
                        length = utilx.toUint32(object.length),
                        index,
                        start,
                        val;

                    if (utilx.isZero(length)) {
                        val = -1;
                    } else {
                        if (utilx.gt(arguments.length, 2)) {
                            fromIndex = utilx.numberToInteger(fromIndex);
                        } else {
                            fromIndex = 0;
                        }

                        if (utilx.gte(fromIndex, length)) {
                            val = -1;
                        } else {
                            if (utilx.gte(fromIndex, 0)) {
                                start = fromIndex;
                            } else {
                                start = length - Math.abs(fromIndex);
                            }

                            if (utilx.lt(start, 0)) {
                                start = 0;
                            }

                            for (index = start, val = -1; utilx.lt(index, length); index += 1) {
                                if (utilx.hasProperty(object, index) && utilx.strictEqual(searchElement, object[index])) {
                                    val = index;
                                    break;
                                }
                            }
                        }
                    }

                    return val;
                };
            }

            nfeIndexOf = null;

            return tempSafariNFE;
        }());

        /**
         * Returns an array of a given object's own enumerable properties, in the same order as that provided by a for-in loop
         * (the difference being that a for-in loop enumerates properties in the prototype chain as well).
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {array}
         */
        // named utilx.objectKeys instead of keys because of SpiderMonkey and Blackberry bug
        utilx.objectKeys = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var keysFN = baseObject.keys,
                nfeKeys;

            if (utilx.isFunction(keysFN)) {
                tempSafariNFE = keysFN;
            } else {
                tempSafariNFE = function nfeKeys(object) {
                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.keys called on a non-object');
                    }

                    var props = [],
                        prop;

                    for (prop in object) {
                        if (utilx.objectHasOwnProperty(object, prop)) {
                            props.push(prop);
                        }
                    }

                    return props;
                };
            }

            nfeKeys = null;

            return tempSafariNFE;
        }());

        /**
         * Defines a new property directly on an object, or modifies an existing property on an object, and returns the object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {string} property
         * @param {object} descriptor
         * @return {object}
         */
        // http://ecma-international.org/ecma-262/5.1/#sec-15.4.4.14
        // Create our own local "defineProperty" function: native -> sham
        // named utilx.objectDefineProperty instead of defineProperty because of SpiderMonkey and Blackberry bug
        utilx.objectDefineProperty = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var definePropertyFN = baseObject.constructor.defineProperty,
                defineGetter = '__defineGetter__',
                defineSetter = '__defineSetter__',
                defineGetterFN,
                defineSetterFN,
                testObject,
                nfeDefineProperty;

            if (utilx.isFunction(definePropertyFN)) {
                try {
                    testObject = definePropertyFN({}, 'sentinel', {
                        value: null
                    });

                    if (!utilx.isNull(testObject.sentinel)) {
                        definePropertyFN = null;
                    }
                } catch (exception) {
                    definePropertyFN = null;
                }
            }

            if (utilx.isFunction(definePropertyFN)) {
                tempSafariNFE = definePropertyFN;
            } else {
                defineGetterFN = baseObject[defineGetter];
                defineSetterFN = baseObject[defineSetter];
                tempSafariNFE = function nfeDefineProperty(object, property, descriptor) {
                    var prototype;

                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.defineProperty called on non-object');
                    }

                    if (!utilx.isTypeObject(descriptor) && !utilx.isFunction(descriptor)) {
                        throw new TypeError('Property description must be an object');
                    }

                    if (utilx.objectHasOwnProperty(descriptor, 'value')) {
                        if (utilx.isNull(utilx.objectGetPrototypeOf(baseObject)[protoName])) {
                            prototype = object[protoName];
                            object[protoName] = utilx.objectGetPrototypeOf(baseObject);
                            delete object[property];
                            object[property] = descriptor.value;
                            object[protoName] = prototype;
                        } else {
                            object[property] = descriptor.value;
                        }
                    } else {
                        if (!utilx.isFunction(defineGetterFN) || !utilx.isFunction(defineSetterFN)) {
                            throw new TypeError('getters & setters can not be defined on this javascript engine');
                        }

                        if (utilx.isFunction(descriptor.get)) {
                            defineGetterFN.call(object, property, descriptor.get);
                        }

                        if (utilx.isFunction(descriptor.set)) {
                            defineSetterFN.call(object, property, descriptor.set);
                        }
                    }

                    return object;
                };
            }

            nfeDefineProperty = null;

            return tempSafariNFE;
        }());

        /**
         * Defines new or modifies existing properties directly on an object, returning the object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {string} props
         * @return {object}
         */
        // Create our own local "defineProperties" function: native -> sham
        // named utilx.objectDefineProperties instead of defineProperties because of SpiderMonkey and Blackberry bug
        utilx.objectDefineProperties = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var definePropertiesFN = baseObject.constructor.defineProperties,
                nfeDefineProperties;

            if (utilx.isFunction(definePropertiesFN)) {
                tempSafariNFE = definePropertiesFN;
            } else {
                tempSafariNFE = function nfeDefineProperties(object, props) {
                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.defineProperties called on non-object');
                    }

                    if (!utilx.isTypeObject(props) && !utilx.isFunction(props)) {
                        throw new TypeError('Property description must be an object');
                    }

                    utilx.arrayForEach(utilx.objectKeys(props), function (key) {
                        utilx.objectDefineProperty(object, key, props[key]);
                    });

                    return object;
                };
            }

            nfeDefineProperties = null;

            return tempSafariNFE;
        }());

        /**
         * Returns a property descriptor for an own property (that is, one directly present on an object,
         * not present by dint of being along an object's prototype chain) of a given object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {string} property
         * @return {object}
         */
        // Create our own local "getOwnPropertyDescriptor" function: native -> sham
        // named utilx.objectGetOwnPropertyDescriptor instead of getOwnPropertyDescriptor because of SpiderMonkey and Blackberry bug
        utilx.objectGetOwnPropertyDescriptor = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var getOwnPropertyDescriptorFN = baseObject.constructor.getOwnPropertyDescriptor,
                lookupGetter = '__lookupGetter__',
                lookupSetter = '__lookupSetter__',
                lookupGetterFN,
                lookupSetterFN,
                testObject,
                nfeGetOwnPropertyDescriptor;

            if (utilx.isFunction(getOwnPropertyDescriptorFN)) {
                try {
                    testObject = {
                        sentinel: null
                    };

                    if (!utilx.isNull(getOwnPropertyDescriptorFN(testObject, 'sentinel').value)) {
                        getOwnPropertyDescriptorFN = null;
                    }
                } catch (exception) {
                    getOwnPropertyDescriptorFN = null;
                }
            }

            if (utilx.isFunction(getOwnPropertyDescriptorFN)) {
                tempSafariNFE = getOwnPropertyDescriptorFN;
            } else {
                lookupGetterFN = baseObject[lookupGetter];
                lookupSetterFN = baseObject[lookupSetter];
                tempSafariNFE = function nfeGetOwnPropertyDescriptor(object, property) {
                    var descriptor,
                        prototype,
                        getter,
                        setter;

                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.getOwnPropertyDescriptor called on a non-object');
                    }

                    if (utilx.objectHasOwnProperty(object, property)) {
                        descriptor = {
                            enumerable: true,
                            configurable: true
                        };

                        if (utilx.isFunction(lookupGetterFN) && utilx.isFunction(lookupSetterFN)) {
                            prototype = object[protoName];
                            object[protoName] = utilx.objectGetPrototypeOf(baseObject);
                            getter = lookupGetterFN.call(object, property);
                            setter = lookupSetterFN.call(object, property);
                            object[protoName] = prototype;
                            if (utilx.isFunction(getter) || utilx.isFunction(setter)) {
                                if (utilx.isFunction(getter)) {
                                    descriptor.get = getter;
                                }

                                if (utilx.isFunction(setter)) {
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

            nfeGetOwnPropertyDescriptor = null;

            return tempSafariNFE;
        }());

        /**
         * Freezes an object: that is, prevents new properties from being added to it; prevents existing properties from being removed;
         * and prevents existing properties, or their enumerability, configurability, or writability, from being changed.
         * In essence the object is made effectively immutable. Returns the object being frozen.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {object}
         */
        // Create our own local "freeze" function: native -> sham
        // named utilx.objectFreeze instead of freeze because of SpiderMonkey and Blackberry bug
        utilx.objectFreeze = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var freezeFN = baseObject.constructor.freeze,
                nfeFreeze;

            if (utilx.isFunction(freezeFN)) {
                tempSafariNFE = freezeFN;
            } else {
                tempSafariNFE = function nfeFreeze(object) {
                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.freeze called on non-object');
                    }

                    return object;
                };
            }

            nfeFreeze = null;

            return tempSafariNFE;
        }());

        // detect a Rhino bug and patch it
        try {
            utilx.objectFreeze(utilx.noop);
        } catch (exception) {
            utilx.objectFreeze = (function (freezeObject) {
                // Unused variable for JScript NFE bug
                // http://kangax.github.io/nfe
                var nfeFreezeR;

                tempSafariNFE = function nfeFreezeR(object) {
                    var val;

                    if (utilx.isFunction(object)) {
                        val = object;
                    } else {
                        val = freezeObject(object);
                    }

                    return val;
                };

                nfeFreezeR = null;

                return tempSafariNFE;
            }(utilx.objectFreeze));
        }

        /**
         * Determine if an object is frozen.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {boolean}
         */
        // Create our own local "isFrozen" function: native -> sham
        // named utilx.objectIsFrozen instead of isFrozen because of SpiderMonkey and Blackberry bug
        utilx.objectIsFrozen = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var isFrozenFN = baseObject.constructor.isFrozen,
                nfeIsFrozen;

            if (utilx.isFunction(isFrozenFN)) {
                tempSafariNFE = isFrozenFN;
            } else {
                tempSafariNFE = function nfeIsFrozen(object) {
                    if (!utilx.isTypeObject(object) && !utilx.isFunction(object)) {
                        throw new TypeError('Object.isFrozen called on non-object');
                    }

                    return false;
                };
            }

            nfeIsFrozen = null;

            return tempSafariNFE;
        }());

        /**
         * To make object fully immutable, freeze each object in object.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {object}
         */
        utilx.deepFreeze = function (object) {
            utilx.objectFreeze(object);
            utilx.arrayForEach(utilx.objectKeys(object), function (propKey) {
                var prop = object[propKey];

                if ((utilx.isTypeObject(prop) || utilx.isFunction(prop)) && !utilx.objectIsFrozen(prop)) {
                    utilx.deepFreeze(prop);
                }
            });

            return object;
        };

        /**
         * The function tests whether an object has in its prototype chain the prototype property of a constructor.
         * @memberOf utilx
         * @function
         * @param {object} object
         * @param {function} ctr
         * @return {boolean}
         */
        // named utilx.objectInstanceOf instead of instanceOf because of SpiderMonkey and Blackberry bug
        utilx.objectInstanceOf = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var isPrototypeOfFN = baseObject.constructor.prototype.isPrototypeOf,
                nfeInstanceOf;

            if (utilx.isFunction(isPrototypeOfFN)) {
                tempSafariNFE = function nfeInstanceOf(object, ctr) {
                    if (!utilx.isFunction(ctr)) {
                        throw new TypeError('Expecting a function in instanceOf check');
                    }

                    return isPrototypeOfFN.call(ctr.prototype, object);
                };
            } else if (utilx.isFunction(utilx.objectGetPrototypeOf)) {
                tempSafariNFE = function nfeInstanceOf(object, ctr) {
                    if (!utilx.isFunction(ctr)) {
                        throw new TypeError('Expecting a function in instanceOf check');
                    }

                    var val = false;

                    while (object) {
                        if (utilx.strictEqual(object, ctr.prototype)) {
                            val = true;
                            break;
                        }

                        object = utilx.objectGetPrototypeOf(object);
                    }

                    return val;
                };
            }

            nfeInstanceOf = null;

            return tempSafariNFE;
        }());

        /**
         * The utilx.objectCreate method creates a new object with the specified prototype object and properties.
         * @memberOf utilx
         * @function
         * @param {object} prototype
         * @return {object}
         */
        // named utilx.objectCreate instead of create because of SpiderMonkey and Blackberry bug
        utilx.objectCreate = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var objectCreateFN = baseObject.constructor.create,
                nfeObjectCreate,
                Func;

            if (utilx.isFunction(objectCreateFN)) {
                tempSafariNFE = objectCreateFN;
            } else if (utilx.isFunction(utilx.objectGetPrototypeOf)) {
                Func = function () {
                    return;
                };

                tempSafariNFE = function nfeObjectCreate(prototype) {
                    if (utilx.notStrictEqual(arguments.length, 1)) {
                        throw new Error('Object.create implementation only accepts one parameter.');
                    }

                    Func.prototype = prototype;

                    return new Func();
                };
            }

            nfeObjectCreate = null;

            return tempSafariNFE;
        }());

        /**
         * Check to see if an object is a plain object (created using "{}" or "new Object").
         * @memberOf utilx
         * @function
         * @param {object} object
         * @return {boolean}
         */
        utilx.isPlainObject = (function () {
            var baseObjectPrototype = utilx.objectGetPrototypeOf(baseObject);

            return function (object) {
                return utilx.isObject(object) && utilx.strictEqual(utilx.objectGetPrototypeOf(object), baseObjectPrototype);
            };
        }());

        /**
         * Merge the contents of source object together into the target object.
         * @memberOf utilx
         * @function
         * @param {object} target
         * @param {object} source
         * @return {object}
         */
        utilx.extend = function (target, source) {
            if (!utilx.isTypeObject(target) && !utilx.isFunction(target)) {
                throw new TypeError('utilx.extend called on a non-object');
            }

            utilx.arrayForEach(utilx.objectKeys(source), function (key) {
                utilx.objectDefineProperty(target, key, utilx.objectGetOwnPropertyDescriptor(source, key));
            });

            return target;
        };

        /**
         * Returns true if the operand inputArg is a Date object and is valid.
         * @memberOf utilx
         * @function
         * @param {*} dateObject
         * @return {boolean}
         */
        utilx.isDateValid = function (dateObject) {
            return utilx.isDate(dateObject) && !utilx.numberIsNaN(dateObject.getTime());
        };

        /**
         * Returns true if the operand inputArg is a String and only contains numerical digits.
         * @memberOf utilx
         * @function
         * @param {*} string
         * @return {boolean}
         */
        utilx.isDigits = function (string) {
            return utilx.isString(string) && (/^\d+$/).test(string);
        };

        /**
         * Takes string and puts a backslash in front of every character that is part of the regular expression syntax.
         * This is useful if you have a run-time string that you need to match in some text and the string may contain special regex characters.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @return {string}
         */
        utilx.escapeRegex = function (string) {
            return string.replace(/[\[\](){}?*+\^$\\.|]/g, '\\$&');
        };

        /**
         * Wraps a string within the string character.
         * @memberOf utilx
         * @function
         * @param {string} string
         * @param {string} character
         * @return {string}
         */
        utilx.wrapInChar = function (string, character) {
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
        utilx.replaceAll = function (string, pattern, characters) {
            return string.replace(new RegExp(utilx.escapeRegex(pattern), 'g'), characters);
        };

        /**
         * Tests a deep equality relation..
         * @memberOf utilx
         * @function
         * @param {*} a
         * @param {*} b
         * @param {object} opts
         * @return {boolean}
         */
        utilx.deepEqual = function (a, b, opts) {
            if (!utilx.isPlainObject(opts)) {
                opts = {
                    strict: true
                };
            }

            if (utilx.objectIs(a, b)) {
                return true;
            }

            if (utilx.isDate(a) && utilx.isDate(b)) {
                return utilx.objectIs(a.getTime(), b.getTime());
            }

            if (utilx.isRegExp(a) && utilx.isRegExp(b)) {
                return utilx.objectIs(a.source, b.source) &&
                    utilx.objectIs(a.global, b.global) &&
                    utilx.objectIs(a.multiline, b.multiline) &&
                    utilx.objectIs(a.lastIndex, b.lastIndex) &&
                    utilx.objectIs(a.ignoreCase, b.ignoreCase) &&
                    utilx.objectIs(a.sticky, b.sticky);
            }

            if (!utilx.isTypeOfObject(a) && !utilx.isTypeOfObject(b)) {
                return utilx.isTrue(opts.strict) ? utilx.objectIs(a, b) : utilx.equal(a, b);
            }

            if (utilx.isUndefinedOrNull(a) || utilx.isUndefinedOrNull(b)) {
                return false;
            }

            if (!utilx.objectIs(utilx.objectGetPrototypeOf(a), utilx.objectGetPrototypeOf(b))) {
                return false;
            }

            if (utilx.isArguments(a)) {
                if (!utilx.isArguments(b)) {
                    return false;
                }

                a = utilx.argumentsSlice(a);
                b = utilx.argumentsSlice(b);

                return utilx.deepEqual(a, b, opts);
            }

            var ka,
                kb,
                status;

            try {
                ka = utilx.objectKeys(a);
                kb = utilx.objectKeys(b);
            } catch (e) {
                return false;
            }

            if (utilx.notStrictEqual(ka.length, kb.length)) {
                return false;
            }

            ka.sort();
            kb.sort();
            status = utilx.arraySome(ka, function (aKey, index) {
                return !utilx.objectIs(aKey, kb[index]);
            });

            if (utilx.isTrue(status)) {
                return false;
            }

            status = utilx.arraySome(ka, function (aKey) {
                return !utilx.deepEqual(a[aKey], b[aKey], opts);
            });

            if (utilx.isTrue(status)) {
                return false;
            }

            return true;
        };

        /**
         * Returns a random integer between the supplied min and max arguments.
         * @memberOf utilx
         * @function
         * @param {number} min
         * @param {number} max
         * @return {number}
         */
        utilx.getRandomInt = function (min, max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        utilx.jsonParse = (function () {
            // Unused variable for JScript NFE bug
            // http://kangax.github.io/nfe
            var nfeJSONParse;

            if (typeof JSON === 'object' && !utilx.isNull(JSON) && utilx.isFunction(JSON.parse)) {
                tempSafariNFE = JSON.parse;
            } else {
                tempSafariNFE = function nfeJSONParse(jsonString) {
                    var object;

                    /*jslint evil: true */
                    object = new Function('return' + jsonString)();
                    /*jslint evil: false */

                    return object;
                };
            }

            nfeJSONParse = null;

            return tempSafariNFE;
        }());

        tempSafariNFE = null;

        return utilx;
    }

    /*
     *
     * UMD
     *
     */

    var publicUtil = factory();

    publicUtil.factory = function () {
        var pu = factory();

        pu.factory = publicUtil.factory;

        return pu;
    };

    if (typeof globalThis !== 'object' && null === globalThis) {
        throw new TypeError('Invalid global context');
    }

    /*global module, define */
    if (typeof module === 'object' && null !== module && typeof module.exports === 'object' && null !== module.exports) {
        module.exports = publicUtil;
    } else if (typeof define === 'function' && typeof define.amd === 'object' && null !== define.amd) {
        define(publicUtil);
    } else {
        globalThis.utilx = publicUtil;
    }
}(this));
