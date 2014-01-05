/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    function X() {
        return;
    }

    describe('basics', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.noop()).to.be(privateUndefined);
            expect(utilx.privateUndefined).to.be(privateUndefined);
            expect(utilx.toNumber('-1')).to.be(-1);
            expect(utilx.toNumber('0')).to.be(0);
            expect(utilx.toNumber('1')).to.be(1);
            expect(utilx.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.toNumber('-Infinity')).to.be(-Infinity);
            expect(isNaN(utilx.toNumber('NaN'))).to.be(true);
            expect(utilx.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.toNumber('-Infinity')).to.be(-Infinity);
            expect(utilx.equal(-1, '-1')).to.be(true);
            expect(utilx.equal(0, '0')).to.be(true);
            expect(utilx.equal(1, '1')).to.be(true);
            expect(utilx.equal(Infinity, 'Infinity')).to.be(true);
            expect(utilx.equal(-Infinity, '-Infinity')).to.be(true);
            expect(utilx.equal(isNaN(NaN), isNaN('NaN'))).to.be(true);
            expect(utilx.equal(NaN, NaN)).to.be(false);
            expect(utilx.equal(NaN, 'NaN')).to.be(false);
            expect(utilx.equal(-1, -1)).to.be(true);
            expect(utilx.equal(0, 0)).to.be(true);
            expect(utilx.equal(1, 1)).to.be(true);
            expect(utilx.equal(Infinity, Infinity)).to.be(true);
            expect(utilx.equal(-Infinity, -Infinity)).to.be(true);
            expect(utilx.equal(isNaN(NaN), isNaN(NaN))).to.be(true);
            expect(utilx.notEqual(1, '2')).to.be(true);
            expect(utilx.notEqual(1, 2)).to.be(true);
            expect(utilx.strictEqual(1, 1)).to.be(true);
            expect(utilx.notStrictEqual(1, '1')).to.be(true);
            expect(utilx.notStrictEqual(1, 2)).to.be(true);
            expect(utilx.lt(1, 2)).to.be(true);
            expect(utilx.lt(1, 1)).to.be(false);
            expect(utilx.lt(1, 0)).to.be(false);
            expect(utilx.lte(1, 1)).to.be(true);
            expect(utilx.lte(1, 0)).to.be(false);
            expect(utilx.lte(1, 2)).to.be(true);
            expect(utilx.gt(1, 0)).to.be(true);
            expect(utilx.gt(1, 1)).to.be(false);
            expect(utilx.gte(1, 1)).to.be(true);
            expect(utilx.gte(1, 2)).to.be(false);
            expect(utilx.mod(10, 3)).to.be(10 % 3);
            expect(utilx.mod(-10, 3)).to.be(-10 % 3);
            expect(utilx.clamp(-10, -5, 5)).to.be(-5);
            expect(utilx.clamp(10, -5, 5)).to.be(5);
            expect(utilx.clamp(-5, -5, 5)).to.be(-5);
            expect(utilx.clamp(5, -5, 5)).to.be(5);
            expect(utilx.inRange(-10, -5, 5)).to.be(false);
            expect(utilx.inRange(10, -5, 5)).to.be(false);
            expect(utilx.inRange(-5, -5, 5)).to.be(true);
            expect(utilx.inRange(5, -5, 5)).to.be(true);
            expect(utilx.isUndefined()).to.be(true);
            expect(utilx.isUndefined(null)).to.be(false);
            expect(utilx.isNull(null)).to.be(true);
            expect(utilx.isNull()).to.be(false);
            expect(utilx.isUndefinedOrNull()).to.be(true);
            expect(utilx.isUndefinedOrNull(null)).to.be(true);
            expect(utilx.isUndefinedOrNull()).to.be(true);
            expect(utilx.isUndefinedOrNull(null)).to.be(true);
            expect(utilx.isUndefinedOrNull(0)).to.be(false);
            expect(utilx.isUndefinedOrNull(1)).to.be(false);
            expect(utilx.isUndefinedOrNull('')).to.be(false);
            expect(utilx.isUndefinedOrNull([])).to.be(false);
            expect(utilx.isUndefinedOrNull({})).to.be(false);
            expect(utilx.isTrue(true)).to.be(true);
            expect(utilx.isTrue(1)).to.be(false);
            expect(utilx.isTrue()).to.be(false);
            expect(utilx.isTrue(null)).to.be(false);
            expect(utilx.isFalse(false)).to.be(true);
            expect(utilx.isFalse(0)).to.be(false);
            expect(utilx.isFalse()).to.be(false);
            expect(utilx.isFalse(null)).to.be(false);
            expect(utilx.isBoolean(true)).to.be(true);
            expect(utilx.isBoolean(false)).to.be(true);
            expect(utilx.isBoolean()).to.be(false);
            expect(utilx.isBoolean(null)).to.be(false);
            expect(utilx.isBoolean('')).to.be(false);
            expect(utilx.isBoolean(0)).to.be(false);
            expect(utilx.isBoolean(1)).to.be(false);
            expect(utilx.isBoolean({})).to.be(false);
            expect(utilx.isBoolean([])).to.be(false);
            expect(utilx.toBoolean(true)).to.be(true);
            expect(utilx.toBoolean(false)).to.be(false);
            expect(utilx.toBoolean('true')).to.be(true);
            expect(utilx.toBoolean('false')).to.be(true);
            expect(utilx.toBoolean('-1')).to.be(true);
            expect(utilx.toBoolean('0')).to.be(true);
            expect(utilx.toBoolean('1')).to.be(true);
            expect(utilx.toBoolean('')).to.be(false);
            expect(utilx.toBoolean(-1)).to.be(true);
            expect(utilx.toBoolean(0)).to.be(false);
            expect(utilx.toBoolean(1)).to.be(true);
            expect(utilx.toBoolean([])).to.be(true);
            expect(utilx.toBoolean([-1])).to.be(true);
            expect(utilx.toBoolean([0])).to.be(true);
            expect(utilx.toBoolean([1])).to.be(true);
            expect(utilx.toBoolean({})).to.be(true);
            expect(utilx.toBoolean()).to.be(false);
            expect(utilx.toBoolean(null)).to.be(false);
            expect(utilx.toBoolean(utilx.noop)).to.be(true);
            expect(utilx.isNumber(10)).to.be(true);
            expect(utilx.isNumber(NaN)).to.be(true);
            expect(utilx.isNumber(Infinity)).to.be(true);
            expect(utilx.isNumber(-Infinity)).to.be(true);
            expect(utilx.isNumber('10')).to.be(false);
            expect(utilx.isNumber()).to.be(false);
            expect(utilx.isNumber(null)).to.be(false);
            expect(utilx.isNumber({})).to.be(false);
            expect(utilx.isNumber([])).to.be(false);
            expect(utilx.isZero(0)).to.be(true);
            expect(utilx.isZero(1)).to.be(false);
            expect(utilx.isZero('0')).to.be(false);
            expect(utilx.isZero()).to.be(false);
            expect(utilx.isZero(null)).to.be(false);
            expect(utilx.isString('')).to.be(true);
            expect(utilx.isString()).to.be(false);
            expect(utilx.isString(null)).to.be(false);
            expect(utilx.isString(1)).to.be(false);
            expect(utilx.isString({})).to.be(false);
            expect(utilx.isString([])).to.be(false);
            expect(utilx.isEmptyString('')).to.be(true);
            expect(utilx.isEmptyString(' ')).to.be(false);
            expect(utilx.isEmptyString()).to.be(false);
            expect(utilx.isEmptyString(null)).to.be(false);
            expect(utilx.isEmptyString({})).to.be(false);
            expect(utilx.isEmptyString([])).to.be(false);
            expect(utilx.isPrimitive()).to.be(true);
            expect(utilx.isPrimitive(null)).to.be(true);
            expect(utilx.isPrimitive('')).to.be(true);
            expect(utilx.isPrimitive(1)).to.be(true);
            expect(utilx.isPrimitive(false)).to.be(true);
            expect(utilx.isPrimitive({})).to.be(false);
            expect(utilx.isPrimitive([])).to.be(false);
            expect(utilx.isDate(new RegExp('test'))).to.be(false);
            expect(utilx.isDate(new Date())).to.be(true);
            expect(utilx.isDate(/test/)).to.be(false);
            expect(utilx.isDate([])).to.be(false);
            expect(utilx.isDate({})).to.be(false);
            expect(utilx.isDate('')).to.be(false);
            expect(utilx.isDate(1)).to.be(false);
            expect(utilx.isDate(true)).to.be(false);
            expect(utilx.isDate()).to.be(false);
            expect(utilx.isDate(null)).to.be(false);
            expect(utilx.isDate(utilx.noop)).to.be(false);
            expect(utilx.isDate(returnArgs())).to.be(false);
            expect(utilx.stringTrim('')).to.be('');
            expect(utilx.stringTrim('     ')).to.be('');
            expect(utilx.stringTrim('x ')).to.be('x');
            expect(utilx.stringTrim(' x')).to.be('x');
            expect(utilx.stringTrim(' x ')).to.be('x');
            expect(utilx.stringTrim('    x x x    ')).to.be('x x x');
            expect(utilx.isDateValid(new Date())).to.be(true);
            expect(utilx.isDateValid(new Date(NaN))).to.be(false);
            expect(utilx.arrayFirst([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayLast([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayFirst([1, 2, 3])).to.be(1);
            expect(utilx.arrayLast([1, 2, 3])).to.be(3);
            expect(utilx.arrayFirst(returnArgs(1, 2, 3))).to.be(1);
            expect(utilx.arrayLast(returnArgs(1, 2, 3))).to.be(3);
            expect(utilx.firstChar('abcdef')).to.be('a');
            expect(utilx.lastChar('abcdef')).to.be('f');
            expect(utilx.firstCharIs('abcdef', 'a')).to.be.ok();
            expect(utilx.lastCharIs('abcdef', 'f')).to.be.ok();
            expect(utilx.firstCharIs('abcdef', 'f')).to.not.be.ok();
            expect(utilx.lastCharIs('abcdef', 'a')).to.not.be.ok();
            expect(utilx.countCharacter('abacadaeafa', 'a')).to.be(6);
            expect(utilx.countCharacter('abacadaeafa', 'z')).to.be(0);
            expect(utilx.countCharacter('abacadaeafa', '')).to.be(Infinity);

            expect(function () {
                utilx.countCharacter('abacadaeafa');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.countCharacter('abacadaeafa', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.hasProperty({
                foo: privateUndefined
            }, 'foo')).to.be(true);

            expect(utilx.hasProperty({}, 'toString')).to.be(true);
            expect(utilx.hasProperty({}, 'bar')).to.be(false);

            expect(utilx.objectHasOwnProperty({
                toString: privateUndefined
            }, 'toString')).to.be(true);

            expect(utilx.objectHasOwnProperty({}, 'toString')).to.be(false);
            expect(utilx.objectHasOwnProperty({}, 'bar')).to.be(false);
        });
    });
}());
