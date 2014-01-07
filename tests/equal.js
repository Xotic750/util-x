/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('equal', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.equal(-1, '-1')).to.be.ok();
            expect(utilx.equal(0, '0')).to.be.ok();
            expect(utilx.equal(1, '1')).to.be.ok();
            expect(utilx.equal(Infinity, 'Infinity')).to.be.ok();
            expect(utilx.equal(-Infinity, '-Infinity')).to.be.ok();
            expect(utilx.equal(isNaN(NaN), isNaN('NaN'))).to.be.ok();
            expect(utilx.equal(NaN, NaN)).to.not.be.ok();
            expect(utilx.equal(NaN, 'NaN')).to.not.be.ok();
            expect(utilx.equal(-1, -1)).to.be.ok();
            expect(utilx.equal(0, 0)).to.be.ok();
            expect(utilx.equal(1, 1)).to.be.ok();
            expect(utilx.equal(Infinity, Infinity)).to.be.ok();
            expect(utilx.equal(-Infinity, -Infinity)).to.be.ok();
            expect(utilx.equal(utilx.numberIsNaN(NaN), utilx.numberIsNaN(NaN))).to.be.ok();
            expect(utilx.equal(1, 2)).to.not.be.ok();
        });
    });
}());
