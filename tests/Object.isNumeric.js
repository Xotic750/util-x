/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isNumeric - Integer Literals', function () {
        it('should not throw an error in each case', function () {
            // Negative integer string
            expect(utilx.Object.isNumeric('-10')).to.be.ok();
            // Zero string
            expect(utilx.Object.isNumeric('0')).to.be.ok();
            // Positive integer string
            expect(utilx.Object.isNumeric('5')).to.be.ok();
            // Negative integer number
            expect(utilx.Object.isNumeric(-16)).to.be.ok();
            // Zero integer number
            expect(utilx.Object.isNumeric(0)).to.be.ok();
            // Positive integer number
            expect(utilx.Object.isNumeric(32)).to.be.ok();
            // Octal integer literal string
            expect(utilx.Object.isNumeric('040')).to.be.ok();
            //t.ok(utilx.Object.isNumeric(0144), 'Octal integer literal');
            // Negative Octal integer literal string
            expect(utilx.Object.isNumeric('-040')).to.be.ok();
            //t.ok(utilx.Object.isNumeric(-0144), 'Negative Octal integer literal');
            // Hexadecimal integer literal string
            expect(utilx.Object.isNumeric('0xFF')).to.be.ok();
            // Hexadecimal integer literal
            expect(utilx.Object.isNumeric(0xFFF)).to.be.ok();
            // Negative Hexadecimal integer literal string
            expect(utilx.Object.isNumeric('-0xFF')).to.be.ok();
            // Negative Hexadecimal integer literal
            expect(utilx.Object.isNumeric(-0xFFF)).to.be.ok();
        });
    });

    describe('Object.isNumeric - Foating-Point Literals', function () {
        it('should not throw an error in each case', function () {
            // Negative floating point string
            expect(utilx.Object.isNumeric('-1.6')).to.be.ok();
            // Positive floating point string
            expect(utilx.Object.isNumeric('4.536')).to.be.ok();
            // Negative floating point number
            expect(utilx.Object.isNumeric(-2.6)).to.be.ok();
            // Positive floating point number
            expect(utilx.Object.isNumeric(3.1415)).to.be.ok();
            // Exponential notation
            expect(utilx.Object.isNumeric(8e5)).to.be.ok();
            // Exponential notation string
            expect(utilx.Object.isNumeric('123e-2')).to.be.ok();
        });
    });

    describe('Object.isNumeric - Non-Numeric values', function () {
        it('should not throw an error in each case', function () {
            // Empty string
            expect(utilx.Object.isNumeric('')).to.not.be.ok();
            // Whitespace characters string
            expect(utilx.Object.isNumeric('        ')).to.not.be.ok();
            // Tab characters string
            expect(utilx.Object.isNumeric('\t\t')).to.not.be.ok();
            // Alphanumeric character string
            expect(utilx.Object.isNumeric('abcdefghijklm1234567890')).to.not.be.ok();
            // Non-numeric character string
            expect(utilx.Object.isNumeric('xabcdefx')).to.not.be.ok();
            // Boolean true literal
            expect(utilx.Object.isNumeric(true)).to.not.be.ok();
            // Boolean false literal
            expect(utilx.Object.isNumeric(false)).to.not.be.ok();
            // Number with preceding non-numeric characters
            expect(utilx.Object.isNumeric('bcfed5.2')).to.not.be.ok();
            // Number with trailling non-numeric characters
            expect(utilx.Object.isNumeric('7.2acdgs')).to.not.be.ok();
            // Undefined value
            expect(utilx.Object.isNumeric(undefined)).to.not.be.ok();
            // Null value
            expect(utilx.Object.isNumeric(null)).to.not.be.ok();
            // NaN value
            expect(utilx.Object.isNumeric(NaN)).to.not.be.ok();
            // Infinity primitive
            expect(utilx.Object.isNumeric(Infinity)).to.not.be.ok();
            // Negative Infinity
            expect(utilx.Object.isNumeric(-Infinity)).to.not.be.ok();
            // Date object
            expect(utilx.Object.isNumeric(new Date(2009, 1, 1))).to.not.be.ok();
            // Empty object
            expect(utilx.Object.isNumeric({})).to.not.be.ok();
            // Instance of a function
            expect(utilx.Object.isNumeric(utilx.Function.noop)).to.not.be.ok();
            // Empty Array
            expect(utilx.Object.isNumeric([])).to.not.be.ok();
            // Array Negative integer string
            expect(utilx.Object.isNumeric(['-10'])).to.not.be.ok();
            // Array Zero string
            expect(utilx.Object.isNumeric(['0'])).to.not.be.ok();
            // Array Positive integer string
            expect(utilx.Object.isNumeric(['5'])).to.not.be.ok();
            // Array Negative integer number
            expect(utilx.Object.isNumeric([-16])).to.not.be.ok();
            // Array Zero integer number
            expect(utilx.Object.isNumeric([0])).to.not.be.ok();
            // Array Positive integer number
            expect(utilx.Object.isNumeric([32])).to.not.be.ok();
            // Array Octal integer literal string
            expect(utilx.Object.isNumeric(['040'])).to.not.be.ok();
            // Array Negative Octal integer literal string
            expect(utilx.Object.isNumeric(['-040'])).to.not.be.ok();
            // Array Hexadecimal integer literal string
            expect(utilx.Object.isNumeric(['0xFF'])).to.not.be.ok();
            // Array Hexadecimal integer literal
            expect(utilx.Object.isNumeric([0xFFF])).to.not.be.ok();
            // Array Negative Hexadecimal integer literal string
            expect(utilx.Object.isNumeric(['-0xFF'])).to.not.be.ok();
            // Array Negative Hexadecimal integer literal
            expect(utilx.Object.isNumeric([-0xFFF])).to.not.be.ok();
            // Array with more than 1 Positive interger number
            expect(utilx.Object.isNumeric([1, 2])).to.not.be.ok();
            // Array with more than 1 Negative interger number
            expect(utilx.Object.isNumeric([-1, -2])).to.not.be.ok();
            // Functions that could be considered numbers
            expect(utilx.Object.isNumeric({
                toString: function () {
                    return '1.2';
                }
            })).to.not.be.ok();
        });
    });
}());
