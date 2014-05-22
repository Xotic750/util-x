/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.equal', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.equal(-1, '-1')).to.be.ok();
            expect(utilx.Object.equal(0, '0')).to.be.ok();
            expect(utilx.Object.equal(1, '1')).to.be.ok();
            expect(utilx.Object.equal(Infinity, 'Infinity')).to.be.ok();
            expect(utilx.Object.equal(-Infinity, '-Infinity')).to.be.ok();
            expect(utilx.Object.equal(isNaN(NaN), isNaN('NaN'))).to.be.ok();
            expect(utilx.Object.equal(NaN, NaN)).to.not.be.ok();
            expect(utilx.Object.equal(NaN, 'NaN')).to.not.be.ok();
            expect(utilx.Object.equal(-1, -1)).to.be.ok();
            expect(utilx.Object.equal(0, 0)).to.be.ok();
            expect(utilx.Object.equal(1, 1)).to.be.ok();
            expect(utilx.Object.equal(Infinity, Infinity)).to.be.ok();
            expect(utilx.Object.equal(-Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.equal(utilx.Number.isNaN(NaN), utilx.Number.isNaN(NaN))).to.be.ok();
            expect(utilx.Object.equal(1, 2)).to.not.be.ok();
        });
    });
}());
