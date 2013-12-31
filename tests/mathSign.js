/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('mathSign', function () {
        it('should not throw an error in each case', function () {
            expect(isNaN(utilx.mathSign())).to.be(true);
            expect(isNaN(utilx.mathSign(privateUndefined))).to.be(true);
            expect(utilx.mathSign(null)).to.be(0);
            expect(utilx.mathSign(-1)).to.be(-1);
            expect(utilx.mathSign(0)).to.be(0);
            expect(utilx.mathSign(1)).to.be(1);
            expect(utilx.mathSign(Infinity)).to.be(1);
            expect(utilx.mathSign(-Infinity)).to.be(-1);
            expect(isNaN(utilx.mathSign(NaN))).to.be(true);
            expect(utilx.mathSign('')).to.be(0);
            expect(utilx.mathSign(true)).to.be(1);
            expect(utilx.mathSign(false)).to.be(0);
            expect(isNaN(utilx.mathSign(utilx.noop))).to.be(true);
            expect(isNaN(utilx.mathSign({}))).to.be(true);
            expect(utilx.mathSign([])).to.be(0);
            expect(isNaN(utilx.mathSign(new RegExp('c')))).to.be(true);
            expect(utilx.mathSign(new Date(2013, 11, 11))).to.be(1);
            expect(isNaN(utilx.mathSign(new Error('x')))).to.be(true);
        });
    });
}());
