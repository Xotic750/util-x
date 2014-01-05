/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isTypeOfObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isTypeOfObject()).to.not.be.ok();
            expect(utilx.isTypeOfObject(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isTypeOfObject(null)).to.be.ok();
            expect(utilx.isTypeOfObject(1)).to.not.be.ok();
            expect(utilx.isTypeOfObject(true)).to.not.be.ok();
            expect(utilx.isTypeOfObject('')).to.not.be.ok();
            expect(utilx.isTypeOfObject(new Error('x'))).to.be.ok();
            expect(utilx.isTypeOfObject(new Date())).to.be.ok();
            expect(utilx.isTypeOfObject(new RegExp('x'))).to.be.ok();
            expect(utilx.isTypeOfObject(utilx.noop)).to.not.be.ok();
        });
    });
}());
