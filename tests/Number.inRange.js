/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.inRange', function () {
        it('arguments should be coerced to a number', function () {
            expect(utilx.Number.inRange()).to.be(false);
            expect(utilx.Number.inRange(undefined)).to.be(false);
            expect(utilx.Number.inRange(null)).to.be(false);
            expect(utilx.Number.inRange(10)).to.be(false);
            expect(utilx.Number.inRange(0)).to.be(false);
            expect(utilx.Number.inRange(-10, -5, '5')).to.be(false);
            expect(utilx.Number.inRange(-10, '-5', 5)).to.be(false);
            expect(utilx.Number.inRange(-10, -5, [])).to.be(false);
            expect(utilx.Number.inRange(-10, {}, 5)).to.be(false);
            expect(utilx.Number.inRange(-10, [], [])).to.be(false);
            expect(utilx.Number.inRange(-10, {}, {})).to.be(false);
            expect(utilx.Number.inRange([], [], [])).to.be(false);
            expect(utilx.Number.inRange({}, {}, {})).to.be(false);
            expect(utilx.Number.inRange(-10, '1', '1')).to.be(false);
            expect(utilx.Number.inRange(-10, 1, 1)).to.be(false);
            expect(utilx.Number.inRange(NaN, -Infinity, Infinity)).to.be(false);
            expect(utilx.Number.inRange(-10, NaN, 1)).to.be(false);
            expect(utilx.Number.inRange(-10, 1, NaN)).to.be(false);
            expect(utilx.Number.inRange('x', 'a', 'a')).to.be(false);
            expect(utilx.Number.inRange(0, 1, -1)).to.be(false);
        });

        it('number literals should not throw an error in each case', function () {
            expect(utilx.Number.inRange(-10, -5, 5)).to.be(false);
            expect(utilx.Number.inRange(10, -5, 5)).to.be(false);
            expect(utilx.Number.inRange(-5, -5, 5)).to.be(true);
            expect(utilx.Number.inRange(5, -5, 5)).to.be(true);
            expect(utilx.Number.inRange(0, -5, 5)).to.be(true);
            expect(utilx.Number.inRange(+0, -5, 5)).to.be(true);
            expect(utilx.Number.inRange(-0, -5, 5)).to.be(true);
            expect(utilx.Number.inRange(0, -Infinity, Infinity)).to.be(true);
            expect(utilx.Number.inRange(-Infinity, -5, 5)).to.be(false);
            expect(utilx.Number.inRange(Infinity, -5, 5)).to.be(false);
            expect(utilx.Number.inRange(NaN, -5, 5)).to.be(false);
        });

        it('string literals should not throw an error in each case', function () {
            expect(utilx.Number.inRange('.', 'a', 'z')).to.be(false);
            expect(utilx.Number.inRange('a', 'a', 'z')).to.be(false);
            expect(utilx.Number.inRange('h', 'a', 'z')).to.be(false);
            expect(utilx.Number.inRange('z', 'a', 'z')).to.be(false);
            expect(utilx.Number.inRange('', 'a', 'z')).to.be(false);
            expect(utilx.Number.inRange('?', 'a', 'z')).to.be(false);
        });
    });
}());
