/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNumeric - Integer Literals', function () {
        it('should not throw an error in each case', function () {
            // Negative integer string
            expect(utilx.isNumeric('-10')).to.be.ok();
            // Zero string
            expect(utilx.isNumeric('0')).to.be.ok();
            // Positive integer string
            expect(utilx.isNumeric('5')).to.be.ok();
            // Negative integer number
            expect(utilx.isNumeric(-16)).to.be.ok();
            // Zero integer number
            expect(utilx.isNumeric(0)).to.be.ok();
            // Positive integer number
            expect(utilx.isNumeric(32)).to.be.ok();
            // Octal integer literal string
            expect(utilx.isNumeric('040')).to.be.ok();
            //t.ok(utilx.isNumeric(0144), 'Octal integer literal');
            // Negative Octal integer literal string
            expect(utilx.isNumeric('-040')).to.be.ok();
            //t.ok(utilx.isNumeric(-0144), 'Negative Octal integer literal');
            // Hexadecimal integer literal string
            expect(utilx.isNumeric('0xFF')).to.be.ok();
            // Hexadecimal integer literal
            expect(utilx.isNumeric(0xFFF)).to.be.ok();
            // Negative Hexadecimal integer literal string
            expect(utilx.isNumeric('-0xFF')).to.be.ok();
            // Negative Hexadecimal integer literal
            expect(utilx.isNumeric(-0xFFF)).to.be.ok();
        });
    });

    describe('isNumeric - Foating-Point Literals', function () {
        it('should not throw an error in each case', function () {
            // Negative floating point string
            expect(utilx.isNumeric('-1.6')).to.be.ok();
            // Positive floating point string
            expect(utilx.isNumeric('4.536')).to.be.ok();
            // Negative floating point number
            expect(utilx.isNumeric(-2.6)).to.be.ok();
            // Positive floating point number
            expect(utilx.isNumeric(3.1415)).to.be.ok();
            // Exponential notation
            expect(utilx.isNumeric(8e5)).to.be.ok();
            // Exponential notation string
            expect(utilx.isNumeric('123e-2')).to.be.ok();
        });
    });

    describe('isNumeric - Non-Numeric values', function () {
        it('should not throw an error in each case', function () {
            // Empty string
            expect(utilx.isNumeric('')).to.not.be.ok();
            // Whitespace characters string
            expect(utilx.isNumeric('        ')).to.not.be.ok();
            // Tab characters string
            expect(utilx.isNumeric('\t\t')).to.not.be.ok();
            // Alphanumeric character string
            expect(utilx.isNumeric('abcdefghijklm1234567890')).to.not.be.ok();
            // Non-numeric character string
            expect(utilx.isNumeric('xabcdefx')).to.not.be.ok();
            // Boolean true literal
            expect(utilx.isNumeric(true)).to.not.be.ok();
            // Boolean false literal
            expect(utilx.isNumeric(false)).to.not.be.ok();
            // Number with preceding non-numeric characters
            expect(utilx.isNumeric('bcfed5.2')).to.not.be.ok();
            // Number with trailling non-numeric characters
            expect(utilx.isNumeric('7.2acdgs')).to.not.be.ok();
            // Undefined value
            expect(utilx.isNumeric(privateUndefined)).to.not.be.ok();
            // Null value
            expect(utilx.isNumeric(null)).to.not.be.ok();
            // NaN value
            expect(utilx.isNumeric(NaN)).to.not.be.ok();
            // Infinity primitive
            expect(utilx.isNumeric(Infinity)).to.not.be.ok();
            // Positive Infinity
            expect(utilx.isNumeric(Number.POSITIVE_INFINITY)).to.not.be.ok();
            // Negative Infinity
            expect(utilx.isNumeric(Number.NEGATIVE_INFINITY)).to.not.be.ok();
            // Date object
            expect(utilx.isNumeric(new Date(2009, 1, 1))).to.not.be.ok();
            // Empty object
            expect(utilx.isNumeric({})).to.not.be.ok();
            // Instance of a function
            expect(utilx.isNumeric(utilx.noop)).to.not.be.ok();
            // Empty Array
            expect(utilx.isNumeric([])).to.not.be.ok();
            // Array Negative integer string
            expect(utilx.isNumeric(['-10'])).to.not.be.ok();
            // Array Zero string
            expect(utilx.isNumeric(['0'])).to.not.be.ok();
            // Array Positive integer string
            expect(utilx.isNumeric(['5'])).to.not.be.ok();
            // Array Negative integer number
            expect(utilx.isNumeric([-16])).to.not.be.ok();
            // Array Zero integer number
            expect(utilx.isNumeric([0])).to.not.be.ok();
            // Array Positive integer number
            expect(utilx.isNumeric([32])).to.not.be.ok();
            // Array Octal integer literal string
            expect(utilx.isNumeric(['040'])).to.not.be.ok();
            // Array Negative Octal integer literal string
            expect(utilx.isNumeric(['-040'])).to.not.be.ok();
            // Array Hexadecimal integer literal string
            expect(utilx.isNumeric(['0xFF'])).to.not.be.ok();
            // Array Hexadecimal integer literal
            expect(utilx.isNumeric([0xFFF])).to.not.be.ok();
            // Array Negative Hexadecimal integer literal string
            expect(utilx.isNumeric(['-0xFF'])).to.not.be.ok();
            // Array Negative Hexadecimal integer literal
            expect(utilx.isNumeric([-0xFFF])).to.not.be.ok();
            // Array with more than 1 Positive interger number
            expect(utilx.isNumeric([1, 2])).to.not.be.ok();
            // Array with more than 1 Negative interger number
            expect(utilx.isNumeric([-1, -2])).to.not.be.ok();
            // Functions that could be considered numbers
            expect(utilx.isNumeric({
                toString: function () {
                    return '1.2';
                }
            })).to.not.be.ok();
        });
    });
}());
