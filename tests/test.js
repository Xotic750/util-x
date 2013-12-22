/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function returnArgs() {
        return arguments;
    }

    function X() {
        return;
    }

    test('basics', function (t) {
        t.strictEqual(utilx.noop(), privateUndefined, 'noop');
        t.strictEqual(utilx.privateUndefined, privateUndefined, 'undefined');
        t.strictEqual(utilx.toNumber('-1'), -1, 'toNumber');
        t.strictEqual(utilx.toNumber('0'), 0, 'toNumber');
        t.strictEqual(utilx.toNumber('1'), 1, 'toNumber');
        t.strictEqual(utilx.toNumber('Infinity'), Infinity, 'toNumber');
        t.strictEqual(utilx.toNumber('-Infinity'), -Infinity, 'toNumber');
        t.strictEqual(isNaN(utilx.toNumber('NaN')), true, 'toNumber');
        t.strictEqual(utilx.toNumber('Infinity'), Infinity, 'toNumber');
        t.strictEqual(utilx.toNumber('-Infinity'), -Infinity, 'toNumber');
        t.strictEqual(utilx.equal(-1, '-1'), true, 'equal');
        t.strictEqual(utilx.equal(0, '0'), true, 'equal');
        t.strictEqual(utilx.equal(1, '1'), true, 'equal');
        t.strictEqual(utilx.equal(Infinity, 'Infinity'), true, 'equal');
        t.strictEqual(utilx.equal(-Infinity, '-Infinity'), true, 'equal');
        t.strictEqual(utilx.equal(isNaN(NaN), isNaN('NaN')), true, 'equal');
        t.strictEqual(utilx.equal(NaN, NaN), false, 'equal');
        t.strictEqual(utilx.equal(NaN, 'NaN'), false, 'equal');
        t.strictEqual(utilx.equal(-1, -1), true, 'equal');
        t.strictEqual(utilx.equal(0, 0), true, 'equal');
        t.strictEqual(utilx.equal(1, 1), true, 'equal');
        t.strictEqual(utilx.equal(Infinity, Infinity), true, 'equal');
        t.strictEqual(utilx.equal(-Infinity, -Infinity), true, 'equal');
        t.strictEqual(utilx.equal(isNaN(NaN), isNaN(NaN)), true, 'equal');
        t.strictEqual(utilx.notEqual(1, '2'), true, 'not equal');
        t.strictEqual(utilx.notEqual(1, 2), true, 'not equal');
        t.strictEqual(utilx.strictEqual(1, 1), true, 'strict equal');
        t.strictEqual(utilx.notStrictEqual(1, '1'), true, 'not strict equal');
        t.strictEqual(utilx.notStrictEqual(1, 2), true, 'not strict equal');
        t.strictEqual(utilx.lt(1, 2), true, 'lt');
        t.strictEqual(utilx.lt(1, 1), false, 'lt');
        t.strictEqual(utilx.lt(1, 0), false, 'lt');
        t.strictEqual(utilx.lte(1, 1), true, 'lte');
        t.strictEqual(utilx.lte(1, 0), false, 'lte');
        t.strictEqual(utilx.lte(1, 2), true, 'lte');
        t.strictEqual(utilx.gt(1, 0), true, 'gt');
        t.strictEqual(utilx.gt(1, 1), false, 'gt');
        t.strictEqual(utilx.gte(1, 1), true, 'gte');
        t.strictEqual(utilx.gte(1, 2), false, 'gte');
        t.strictEqual(utilx.mod(10, 3), 10 % 3, 'mod');
        t.strictEqual(utilx.mod(-10, 3), -10 % 3, 'mod');
        t.strictEqual(utilx.clamp(-10, -5, 5), -5, 'clamp');
        t.strictEqual(utilx.clamp(10, -5, 5), 5, 'clamp');
        t.strictEqual(utilx.clamp(-5, -5, 5), -5, 'clamp');
        t.strictEqual(utilx.clamp(5, -5, 5), 5, 'clamp');
        t.strictEqual(utilx.inRange(-10, -5, 5), false, 'clamp');
        t.strictEqual(utilx.inRange(10, -5, 5), false, 'clamp');
        t.strictEqual(utilx.inRange(-5, -5, 5), true, 'clamp');
        t.strictEqual(utilx.inRange(5, -5, 5), true, 'clamp');
        t.strictEqual(utilx.isUndefined(), true, 'isUndefined');
        t.strictEqual(utilx.isUndefined(null), false, 'isUndefined');
        t.strictEqual(utilx.isNull(null), true, 'isNull');
        t.strictEqual(utilx.isNull(), false, 'isNull');
        t.strictEqual(utilx.isUndefinedOrNull(), true, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(null), true, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(), true, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(null), true, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(0), false, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(1), false, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull(''), false, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull([]), false, 'isUndefinedOrNull');
        t.strictEqual(utilx.isUndefinedOrNull({}), false, 'isUndefinedOrNull');
        t.strictEqual(utilx.isTrue(true), true, 'isTrue');
        t.strictEqual(utilx.isTrue(1), false, 'isTrue');
        t.strictEqual(utilx.isTrue(), false, 'isTrue');
        t.strictEqual(utilx.isTrue(null), false, 'isTrue');
        t.strictEqual(utilx.isFalse(false), true, 'isFalse');
        t.strictEqual(utilx.isFalse(0), false, 'isFalse');
        t.strictEqual(utilx.isFalse(), false, 'isFalse');
        t.strictEqual(utilx.isFalse(null), false, 'isFalse');
        t.strictEqual(utilx.isBoolean(true), true, 'isBoolean');
        t.strictEqual(utilx.isBoolean(false), true, 'isBoolean');
        t.strictEqual(utilx.isBoolean(), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean(null), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean(''), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean(0), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean(1), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean({}), false, 'isBoolean');
        t.strictEqual(utilx.isBoolean([]), false, 'isBoolean');
        t.strictEqual(utilx.toBoolean(true), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean(false), false, 'toBoolean');
        t.strictEqual(utilx.toBoolean('true'), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean('false'), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean('-1'), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean('0'), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean('1'), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean(''), false, 'toBoolean');
        t.strictEqual(utilx.toBoolean(-1), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean(0), false, 'toBoolean');
        t.strictEqual(utilx.toBoolean(1), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean([]), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean([-1]), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean([0]), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean([1]), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean({}), true, 'toBoolean');
        t.strictEqual(utilx.toBoolean(), false, 'toBoolean');
        t.strictEqual(utilx.toBoolean(null), false, 'toBoolean');
        t.strictEqual(utilx.toBoolean(utilx.noop), true, 'toBoolean');
        t.strictEqual(utilx.isNumber(10), true, 'isNumber');
        t.strictEqual(utilx.isNumber(NaN), true, 'isNumber');
        t.strictEqual(utilx.isNumber(Infinity), true, 'isNumber');
        t.strictEqual(utilx.isNumber(-Infinity), true, 'isNumber');
        t.strictEqual(utilx.isNumber('10'), false, 'isNumber');
        t.strictEqual(utilx.isNumber(), false, 'isNumber');
        t.strictEqual(utilx.isNumber(null), false, 'isNumber');
        t.strictEqual(utilx.isNumber({}), false, 'isNumber');
        t.strictEqual(utilx.isNumber([]), false, 'isNumber');
        t.strictEqual(utilx.isZero(0), true, 'isZero');
        t.strictEqual(utilx.isZero(1), false, 'isZero');
        t.strictEqual(utilx.isZero('0'), false, 'isZero');
        t.strictEqual(utilx.isZero(), false, 'isZero');
        t.strictEqual(utilx.isZero(null), false, 'isZero');
        t.strictEqual(utilx.isString(''), true, 'isString');
        t.strictEqual(utilx.isString(), false, 'isString');
        t.strictEqual(utilx.isString(null), false, 'isString');
        t.strictEqual(utilx.isString(1), false, 'isString');
        t.strictEqual(utilx.isString({}), false, 'isString');
        t.strictEqual(utilx.isString([]), false, 'isString');
        t.strictEqual(utilx.isEmptyString(''), true, 'isEmptyString');
        t.strictEqual(utilx.isEmptyString(' '), false, 'isEmptyString');
        t.strictEqual(utilx.isEmptyString(), false, 'isEmptyString');
        t.strictEqual(utilx.isEmptyString(null), false, 'isEmptyString');
        t.strictEqual(utilx.isEmptyString({}), false, 'isEmptyString');
        t.strictEqual(utilx.isEmptyString([]), false, 'isEmptyString');
        t.strictEqual(utilx.isPrimitive(), true, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive(null), true, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive(''), true, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive(1), true, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive(false), true, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive({}), false, 'isPrimitive');
        t.strictEqual(utilx.isPrimitive([]), false, 'isPrimitive');
        t.strictEqual(utilx.isError(new Error('test')), true, 'isError');
        t.strictEqual(utilx.isError(new TypeError('test')), true, 'isError');
        t.strictEqual(utilx.isError(new SyntaxError('test')), true, 'isError');
        t.strictEqual(utilx.isError(new RangeError('test')), true, 'isError');
        t.strictEqual(utilx.isError(new Date()), false, 'isError');
        t.strictEqual(utilx.isError(utilx.noop), false, 'isError');
        t.strictEqual(utilx.isError(), false, 'isError');
        t.strictEqual(utilx.isError(null), false, 'isError');
        t.strictEqual(utilx.isRegExp(new RegExp('test')), true, 'isRegExp');
        t.strictEqual(utilx.isRegExp(/test/), true, 'isRegExp');
        t.strictEqual(utilx.isRegExp([]), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp({}), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(''), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(1), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(true), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(null), false, 'isRegExp');
        t.strictEqual(utilx.isRegExp(utilx.noop), false, 'isRegExp');
        t.strictEqual(utilx.isObject(new RegExp('test')), false, 'isObject');
        t.strictEqual(utilx.isObject(/test/), false, 'isObject');
        t.strictEqual(utilx.isObject([]), false, 'isObject');
        t.strictEqual(utilx.isObject({}), true, 'isObject');
        t.strictEqual(utilx.isObject(''), false, 'isObject');
        t.strictEqual(utilx.isObject(1), false, 'isObject');
        t.strictEqual(utilx.isObject(true), false, 'isObject');
        t.strictEqual(utilx.isObject(), false, 'isObject');
        t.strictEqual(utilx.isObject(null), false, 'isObject');
        t.strictEqual(utilx.isObject(utilx.noop), false, 'isObject');
        t.strictEqual(utilx.isFunction(new RegExp('test')), false, 'isFunction');
        t.strictEqual(utilx.isFunction(/test/), false, 'isFunction');
        t.strictEqual(utilx.isFunction([]), false, 'isFunction');
        t.strictEqual(utilx.isFunction({}), false, 'isFunction');
        t.strictEqual(utilx.isFunction(''), false, 'isFunction');
        t.strictEqual(utilx.isFunction(1), false, 'isFunction');
        t.strictEqual(utilx.isFunction(true), false, 'isFunction');
        t.strictEqual(utilx.isFunction(), false, 'isFunction');
        t.strictEqual(utilx.isFunction(null), false, 'isFunction');
        t.strictEqual(utilx.isFunction(utilx.noop), true, 'isFunction');
        t.strictEqual(utilx.isArguments(new RegExp('test')), false, 'isArguments');
        t.strictEqual(utilx.isArguments(/test/), false, 'isArguments');
        t.strictEqual(utilx.isArguments([]), false, 'isArguments');
        t.strictEqual(utilx.isArguments({}), false, 'isArguments');
        t.strictEqual(utilx.isArguments(''), false, 'isArguments');
        t.strictEqual(utilx.isArguments(1), false, 'isArguments');
        t.strictEqual(utilx.isArguments(true), false, 'isArguments');
        t.strictEqual(utilx.isArguments(), false, 'isArguments');
        t.strictEqual(utilx.isArguments(null), false, 'isArguments');
        t.strictEqual(utilx.isArguments(utilx.noop), false, 'isArguments');
        t.strictEqual(utilx.isArguments(returnArgs()), true, 'isArguments');
        t.strictEqual(utilx.arrayIsArray(new RegExp('test')), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(/test/), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray([]), true, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray({}), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(''), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(1), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(true), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(null), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(utilx.noop), false, 'arrayIsArray');
        t.strictEqual(utilx.arrayIsArray(returnArgs()), false, 'arrayIsArray');
        t.strictEqual(utilx.isEmptyArray(new RegExp('test')), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(new Date()), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(/test/), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray([]), true, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray([utilx.privateUndefined]), false, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray([null]), false, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray({}), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(''), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(1), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(true), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(null), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(utilx.noop), null, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(returnArgs()), true, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(returnArgs(null)), false, 'isEmptyArray');
        t.strictEqual(utilx.isEmptyArray(returnArgs(utilx.privateUndefined)), false, 'isEmptyArray');
        t.strictEqual(utilx.isTypeOfObject(new RegExp('test')), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(new Date()), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(/test/), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject([]), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject({}), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(''), false, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(1), false, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(true), false, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(), false, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(null), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(utilx.noop), false, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeOfObject(returnArgs()), true, 'isTypeOfObject');
        t.strictEqual(utilx.isTypeObject(new RegExp('test')), true, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(new Date()), true, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(/test/), true, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject([]), true, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject({}), true, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(''), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(1), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(true), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(null), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(utilx.noop), false, 'isTypeObject');
        t.strictEqual(utilx.isTypeObject(returnArgs()), true, 'isTypeObject');
        t.strictEqual(utilx.isDate(new RegExp('test')), false, 'isDate');
        t.strictEqual(utilx.isDate(new Date()), true, 'isDate');
        t.strictEqual(utilx.isDate(/test/), false, 'isDate');
        t.strictEqual(utilx.isDate([]), false, 'isDate');
        t.strictEqual(utilx.isDate({}), false, 'isDate');
        t.strictEqual(utilx.isDate(''), false, 'isDate');
        t.strictEqual(utilx.isDate(1), false, 'isDate');
        t.strictEqual(utilx.isDate(true), false, 'isDate');
        t.strictEqual(utilx.isDate(), false, 'isDate');
        t.strictEqual(utilx.isDate(null), false, 'isDate');
        t.strictEqual(utilx.isDate(utilx.noop), false, 'isDate');
        t.strictEqual(utilx.isDate(returnArgs()), false, 'isDate');
        t.strictEqual(utilx.arrayIsArray(utilx.argumentsSlice(returnArgs())), true, 'argumentsSlice');
        t.strictEqual(utilx.arrayIsArray(utilx.argumentsSlice(returnArgs(null))), true, 'argumentsSlice');
        t.strictEqual(utilx.arrayIsArray(utilx.argumentsSlice(returnArgs(utilx.privateUndefined))), true, 'argumentsSlice');
        t.strictEqual(utilx.arrayIsArray(utilx.argumentsSlice(returnArgs(1, 2, 3))), true, 'argumentsSlice');
        t.strictEqual(utilx.arrayIsArray(utilx.argumentsSlice(returnArgs({}, {}, {}))), true, 'argumentsSlice');
        t.strictEqual(utilx.stringTrim(''), '', 'stringTrim');
        t.strictEqual(utilx.stringTrim('     '), '', 'stringTrim');
        t.strictEqual(utilx.stringTrim('x '), 'x', 'stringTrim');
        t.strictEqual(utilx.stringTrim(' x'), 'x', 'stringTrim');
        t.strictEqual(utilx.stringTrim(' x '), 'x', 'stringTrim');
        t.strictEqual(utilx.stringTrim('    x x x    '), 'x x x', 'stringTrim');
        t.strictEqual(utilx.objectInstanceOf(new Date(), Date), true, 'objectInstanceOf');
        t.strictEqual(utilx.objectInstanceOf(new RegExp(), RegExp), true, 'objectInstanceOf');
        t.strictEqual(utilx.objectInstanceOf(new X(), X), true, 'objectInstanceOf');
        t.strictEqual(utilx.isPlainObject(), false, 'isPlainObject');
        t.strictEqual(utilx.isPlainObject(null), false, 'isPlainObject');
        t.strictEqual(utilx.isPlainObject(utilx.privateUndefined), false, 'isPlainObject');
        t.strictEqual(utilx.isPlainObject([]), false, 'isPlainObject');
        t.strictEqual(utilx.isPlainObject({}), true, 'isPlainObject');
        t.strictEqual(utilx.isPlainObject(new X()), false, 'isPlainObject');
        t.strictEqual(utilx.isDateValid(new Date()), true, 'isDateValid');
        t.strictEqual(utilx.isDateValid(new Date(NaN)), false, 'isDateValid');

        t.strictEqual(utilx.hasProperty({
            foo: utilx.privateUndefined
        }, 'foo'), true, 'hasProperty');

        t.strictEqual(utilx.hasProperty({}, 'toString'), true, 'hasProperty');
        t.strictEqual(utilx.hasProperty({}, 'bar'), false, 'hasProperty');

        t.strictEqual(utilx.objectHasOwnProperty({
            toString: utilx.privateUndefined
        }, 'toString'), true, 'hasProperty');

        t.strictEqual(utilx.objectHasOwnProperty({}, 'toString'), false, 'objectHasOwnProperty');
        t.strictEqual(utilx.objectHasOwnProperty({}, 'bar'), false, 'objectHasOwnProperty');

        t.end();
    });

    test('isNumeric - Integer Literals', function (t) {
        t.ok(utilx.isNumeric('-10'), 'Negative integer string');
        t.ok(utilx.isNumeric('0'), 'Zero string');
        t.ok(utilx.isNumeric('5'), 'Positive integer string');
        t.ok(utilx.isNumeric(-16), 'Negative integer number');
        t.ok(utilx.isNumeric(0), 'Zero integer number');
        t.ok(utilx.isNumeric(32), 'Positive integer number');
        t.ok(utilx.isNumeric('040'), 'Octal integer literal string');
        //t.ok(utilx.isNumeric(0144), 'Octal integer literal');
        t.ok(utilx.isNumeric('-040'), 'Negative Octal integer literal string');
        //t.ok(utilx.isNumeric(-0144), 'Negative Octal integer literal');
        t.ok(utilx.isNumeric('0xFF'), 'Hexadecimal integer literal string');
        t.ok(utilx.isNumeric(0xFFF), 'Hexadecimal integer literal');
        t.ok(utilx.isNumeric('-0xFF'), 'Negative Hexadecimal integer literal string');
        t.ok(utilx.isNumeric(-0xFFF), 'Negative Hexadecimal integer literal');

        t.end();
    });

    test('isNumeric - Foating-Point Literals', function (t) {
        t.ok(utilx.isNumeric('-1.6'), 'Negative floating point string');
        t.ok(utilx.isNumeric('4.536'), 'Positive floating point string');
        t.ok(utilx.isNumeric(-2.6), 'Negative floating point number');
        t.ok(utilx.isNumeric(3.1415), 'Positive floating point number');
        t.ok(utilx.isNumeric(8e5), 'Exponential notation');
        t.ok(utilx.isNumeric('123e-2'), 'Exponential notation string');

        t.end();
    });

    test('isNumeric - Non-Numeric values', function (t) {
        t.strictEqual(utilx.isNumeric(''), false, 'Empty string');
        t.strictEqual(utilx.isNumeric('        '), false, 'Whitespace characters string');
        t.strictEqual(utilx.isNumeric('\t\t'), false, 'Tab characters string');
        t.strictEqual(utilx.isNumeric('abcdefghijklm1234567890'), false, 'Alphanumeric character string');
        t.strictEqual(utilx.isNumeric('xabcdefx'), false, 'Non-numeric character string');
        t.strictEqual(utilx.isNumeric(true), false, 'Boolean true literal');
        t.strictEqual(utilx.isNumeric(false), false, 'Boolean false literal');
        t.strictEqual(utilx.isNumeric('bcfed5.2'), false, 'Number with preceding non-numeric characters');
        t.strictEqual(utilx.isNumeric('7.2acdgs'), false, 'Number with trailling non-numeric characters');
        t.strictEqual(utilx.isNumeric(undefined), false, 'Undefined value');
        t.strictEqual(utilx.isNumeric(null), false, 'Null value');
        t.strictEqual(utilx.isNumeric(NaN), false, 'NaN value');
        t.strictEqual(utilx.isNumeric(Infinity), false, 'Infinity primitive');
        t.strictEqual(utilx.isNumeric(Number.POSITIVE_INFINITY), false, 'Positive Infinity');
        t.strictEqual(utilx.isNumeric(Number.NEGATIVE_INFINITY), false, 'Negative Infinity');
        t.strictEqual(utilx.isNumeric(new Date(2009, 1, 1)), false, 'Date object');
        t.strictEqual(utilx.isNumeric({}), false, 'Empty object');
        t.strictEqual(utilx.isNumeric(utilx.noop), false, 'Instance of a function');
        t.strictEqual(utilx.isNumeric([]), false, 'Empty Array');
        t.strictEqual(utilx.isNumeric(['-10']), false, 'Array Negative integer string');
        t.strictEqual(utilx.isNumeric(['0']), false, 'Array Zero string');
        t.strictEqual(utilx.isNumeric(['5']), false, 'Array Positive integer string');
        t.strictEqual(utilx.isNumeric([-16]), false, 'Array Negative integer number');
        t.strictEqual(utilx.isNumeric([0]), false, 'Array Zero integer number');
        t.strictEqual(utilx.isNumeric([32]), false, 'Array Positive integer number');
        t.strictEqual(utilx.isNumeric(['040']), false, 'Array Octal integer literal string');
        //t.strictEqual(utilx.isNumeric([0144]), false, 'Array Octal integer literal');
        t.strictEqual(utilx.isNumeric(['-040']), false, 'Array Negative Octal integer literal string');
        //t.strictEqual(utilx.isNumeric([-0144]), false, 'Array Negative Octal integer literal');
        t.strictEqual(utilx.isNumeric(['0xFF']), false, 'Array Hexadecimal integer literal string');
        t.strictEqual(utilx.isNumeric([0xFFF]), false, 'Array Hexadecimal integer literal');
        t.strictEqual(utilx.isNumeric(['-0xFF']), false, 'Array Negative Hexadecimal integer literal string');
        t.strictEqual(utilx.isNumeric([-0xFFF]), false, 'Array Negative Hexadecimal integer literal');
        t.strictEqual(utilx.isNumeric([1, 2]), false, 'Array with more than 1 Positive interger number');
        t.strictEqual(utilx.isNumeric([-1, -2]), false, 'Array with more than 1 Negative interger number');
        t.strictEqual(utilx.isNumeric({
            toString: function () {
                return '1.2';
            }
        }), false, 'Functions that could be considered numbers');

        t.end();
    });

    test('Throws errors', function (t) {
        t.throws(function () {
            utilx.checkObjectCoercible();
        }, TypeError, 'checkObjectCoercible');

        t.throws(function () {
            utilx.checkObjectCoercible(utilx.privateUndefined);
        }, TypeError, 'checkObjectCoercible');

        t.throws(function () {
            utilx.checkObjectCoercible(null);
        }, TypeError, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(-1);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(0);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(1);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(NaN);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(Infinity);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(-Infinity);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(true);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(false);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible('');
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible('x');
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(utilx.noop);
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(new RegExp('y'));
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(new Date());
        }, utilx.privateUndefined, 'checkObjectCoercible');

        t.end();
    });

    test('toObjectFixIndexedAccess', function (t) {
        t.throws(function () {
            utilx.toObjectFixIndexedAccess();
        }, TypeError, 'toObjectFixIndexedAccess');

        t.throws(function () {
            utilx.toObjectFixIndexedAccess(utilx.privateUndefined);
        }, TypeError, 'toObjectFixIndexedAccess');

        t.throws(function () {
            utilx.toObjectFixIndexedAccess(null);
        }, TypeError, 'toObjectFixIndexedAccess');

        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(1), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(true), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(''), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess([]), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess({}), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(Object('a')), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(utilx.noop), 'function', 'toObjectFixIndexedAccess');
        t.strictEqual(typeof utilx.toObjectFixIndexedAccess(new Date()), 'object', 'toObjectFixIndexedAccess');
        t.strictEqual(utilx.isRegExp(utilx.toObjectFixIndexedAccess(new RegExp('c'))), true, 'toObjectFixIndexedAccess');


        t.end();
    });

    test('anyToString', function (t) {
        t.strictEqual(utilx.anyToString(), 'undefined', 'anyToString');
        t.strictEqual(utilx.anyToString(utilx.privateUndefined), 'undefined', 'anyToString');
        t.strictEqual(utilx.anyToString(null), 'null', 'anyToString');
        t.strictEqual(utilx.anyToString(1), '1', 'anyToString');
        t.strictEqual(utilx.anyToString(true), 'true', 'anyToString');
        t.strictEqual(utilx.anyToString('x'), 'x', 'anyToString');
        t.strictEqual(utilx.anyToString([1, 2, 3]), '1,2,3', 'anyToString');
        t.strictEqual(utilx.anyToString({}), '[object Object]', 'anyToString');
        t.strictEqual(utilx.anyToString(utilx.noop), utilx.noop.toString(), 'anyToString');
        t.strictEqual(utilx.anyToString(new RegExp('c')), '/c/', 'anyToString');


        t.end();
    });

    test('toObjectString', function (t) {
        t.strictEqual(utilx.toObjectString(), '[object Undefined]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(utilx.privateUndefined), '[object Undefined]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(null), '[object Null]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(1), '[object Number]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(true), '[object Boolean]', 'toObjectString');
        t.strictEqual(utilx.toObjectString('x'), '[object String]', 'toObjectString');
        t.strictEqual(utilx.toObjectString([1, 2, 3]), '[object Array]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(returnArgs()), '[object Arguments]', 'toObjectString');
        t.strictEqual(utilx.toObjectString({}), '[object Object]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(utilx.noop), '[object Function]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new RegExp('c')), '[object RegExp]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new Date()), '[object Date]', 'toObjectString');
        t.strictEqual(utilx.toObjectString(new Error('x')), '[object Error]', 'toObjectString');

        t.end();
    });

    test('arrayForEach', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            forEachArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, utilx.privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        forEachArray[24] = NaN;
        forEachArray[25] = 'end';
        t.strictEqual(utilx.arrayForEach(forEachArray, function (element, index, array) {
            t.strictEqual(array, forEachArray, 'arrayForEach');
            t.strictEqual(typeof index, 'number', 'arrayForEach');
            t.strictEqual(index >= 0, true, 'arrayForEach');
            t.strictEqual(index <= lastIndex, true, 'arrayForEach');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof forEachArray[index] === 'number' && isNaN(forEachArray[index]), true, 'arrayForEach');
            } else {
                t.strictEqual(element, forEachArray[index], 'arrayForEach');
            }

            testIndex = index;
        }), utilx.privateUndefined, 'arrayForEach');

        t.strictEqual(testIndex, forEachArray.length - 1, 'arrayForEach');

        t.end();
    });

    test('arraySome', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            someArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, utilx.privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        someArray[24] = NaN;
        someArray[25] = 'end';
        t.strictEqual(utilx.arraySome(someArray, function (element, index, array) {
            t.strictEqual(array, someArray, 'arraySome');
            t.strictEqual(typeof index, 'number', 'arraySome');
            t.strictEqual(index >= 0, true, 'arraySome');
            t.strictEqual(index <= lastIndex, true, 'arraySome');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof someArray[index] === 'number' && isNaN(someArray[index]), true, 'arraySome');
            } else {
                t.strictEqual(element, someArray[index], 'arraySome');
            }

            testIndex = index;
            if ('end' === element) {
                return true;
            }

            return false;
        }), true, 'arraySome return');

        t.strictEqual(testIndex, someArray.length - 1, 'arraySome');

        t.end();
    });

    test('arrayMap', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            mapArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, utilx.privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        mapArray[24] = NaN;
        mapArray[25] = 'end';
        t.strictEqual(utilx.arrayMap(mapArray, function (element, index, array) {
            t.strictEqual(array, mapArray, 'arrayMap');
            t.strictEqual(typeof index, 'number', 'arrayMap');
            t.strictEqual(index >= 0, true, 'arrayMap');
            t.strictEqual(index <= lastIndex, true, 'arrayMap');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof mapArray[index] === 'number' && isNaN(mapArray[index]), true, 'arrayMap');
            } else {
                t.strictEqual(element, mapArray[index], 'arrayMap');
            }

            testIndex = index;

            return element;
        }).toString(), mapArray.toString(), 'arrayMap return');

        t.strictEqual(testIndex, mapArray.length - 1, 'arrayMap');

        t.end();
    });

    test('arrayFilter', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            filterArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, utilx.privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        filterArray[24] = NaN;
        filterArray[25] = 'end';
        t.strictEqual(utilx.arrayFilter(filterArray, function (element, index, array) {
            t.strictEqual(array, filterArray, 'arrayFilter');
            t.strictEqual(typeof index, 'number', 'arrayFilter');
            t.strictEqual(index >= 0, true, 'arrayFilter');
            t.strictEqual(index <= lastIndex, true, 'arrayFilter');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof filterArray[index] === 'number' && isNaN(filterArray[index]), true, 'arrayFilter');
            } else {
                t.strictEqual(element, filterArray[index], 'arrayFilter');
            }

            testIndex = index;

            if (typeof element === 'string') {
                return element;
            }

            return utilx.privateUndefined;
        }).toString(), ['a', 'b', 'c', 'end'].toString(), 'arrayFilter return');

        t.strictEqual(testIndex, filterArray.length - 1, 'arrayFilter');

        t.end();
    });

    test('arrayReduce', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            reduceArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, utilx.privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        reduceArray[24] = NaN;
        reduceArray[25] = 'end';
        t.strictEqual(utilx.arrayReduce(reduceArray, function (accumulator, element, index, array) {
            t.strictEqual(array, reduceArray, 'arrayReduce');
            t.strictEqual(typeof index, 'number', 'arrayReduce');
            t.strictEqual(index >= 0, true, 'arrayReduce');
            t.strictEqual(index <= lastIndex, true, 'arrayReduce');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index]), true, 'arrayReduce');
            } else {
                t.strictEqual(element, reduceArray[index], 'arrayReduce');
            }

            testIndex = index;

            if (utilx.privateUndefined === element || null === element) {
                return accumulator;
            }

            return accumulator + ',' + element;
        }, '').slice(1), reduceArray.toString().replace(new RegExp(',+', 'g'), ','), 'arrayReduce return');

        t.strictEqual(testIndex, reduceArray.length - 1, 'arrayReduce');

        t.end();
    });
}());
