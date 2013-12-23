/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

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
        t.strictEqual(utilx.isNumeric(privateUndefined), false, 'Undefined value');
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
}());
