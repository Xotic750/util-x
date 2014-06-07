/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.outRange', function () {
        it('arguments should be coerced to a number', function () {
            expect(utilx.Number.outRange()).to.be(true);
            expect(utilx.Number.outRange(undefined)).to.be(true);
            expect(utilx.Number.outRange(null)).to.be(true);
            expect(utilx.Number.outRange(10)).to.be(true);
            expect(utilx.Number.outRange(0)).to.be(true);
            expect(utilx.Number.outRange(-10, -5, '5')).to.be(true);
            expect(utilx.Number.outRange(-10, '-5', 5)).to.be(true);
            expect(utilx.Number.outRange(-10, -5, [])).to.be(true);
            expect(utilx.Number.outRange(-10, {}, 5)).to.be(true);
            expect(utilx.Number.outRange(-10, [], [])).to.be(true);
            expect(utilx.Number.outRange(-10, {}, {})).to.be(true);
            expect(utilx.Number.outRange([], [], [])).to.be(true);
            expect(utilx.Number.outRange({}, {}, {})).to.be(true);
            expect(utilx.Number.outRange(-10, '1', '1')).to.be(true);
            expect(utilx.Number.outRange(-10, 1, 1)).to.be(true);
            expect(utilx.Number.outRange(-10, NaN, 1)).to.be(true);
            expect(utilx.Number.outRange(-10, 1, NaN)).to.be(true);
            expect(utilx.Number.outRange('x', 'a', 'a')).to.be(true);
        });

        it('number literals should not throw an error in each case', function () {
            expect(utilx.Number.outRange(-10, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(10, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(-5, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(5, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(0, -5, 5)).to.be(false);
            expect(utilx.Number.outRange(+0, -5, 5)).to.be(false);
            expect(utilx.Number.outRange(-0, -5, 5)).to.be(false);
            expect(utilx.Number.outRange(-4.9, -5, 5)).to.be(false);
            expect(utilx.Number.outRange(-4.9, -5, 5)).to.be(false);
            expect(utilx.Number.outRange(0, -Infinity, Infinity)).to.be(false);
            expect(utilx.Number.outRange(-Infinity, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(Infinity, -5, 5)).to.be(true);
            expect(utilx.Number.outRange(NaN, -5, 5)).to.be(true);
        });

        it('string literals should not throw an error in each case', function () {
            expect(utilx.Number.outRange('.', 'a', 'z')).to.be(true);
            expect(utilx.Number.outRange('a', 'a', 'z')).to.be(true);
            expect(utilx.Number.outRange('h', 'a', 'z')).to.be(true);
            expect(utilx.Number.outRange('z', 'a', 'z')).to.be(true);
            expect(utilx.Number.outRange('', 'a', 'z')).to.be(true);
            expect(utilx.Number.outRange('?', 'a', 'z')).to.be(true);
        });
    });
}());
