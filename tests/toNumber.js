/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('toNumber', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.toNumber('-1')).to.be(-1);
            expect(utilx.toNumber('0')).to.be(0);
            expect(utilx.toNumber('1')).to.be(1);
            expect(utilx.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.toNumber('-Infinity')).to.be(-Infinity);
            expect(utilx.isNumber(utilx.toNumber(new Date(2013, 11, 11)))).to.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber(new Date(2013, 11, 11)))).to.not.be.ok();
            expect(utilx.numberIsNaN(utilx.toNumber('NaN'))).to.be.ok();
            expect(utilx.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.toNumber('-Infinity')).to.be(-Infinity);
        });
    });
}());
