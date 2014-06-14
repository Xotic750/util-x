/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isTypeOfObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isTypeOfObject()).to.not.be.ok();
            expect(utilx.Object.isTypeOfObject(undefined)).to.not.be.ok();
            expect(utilx.Object.isTypeOfObject(null)).to.be.ok();
            expect(utilx.Object.isTypeOfObject(1)).to.not.be.ok();
            expect(utilx.Object.isTypeOfObject(true)).to.not.be.ok();
            expect(utilx.Object.isTypeOfObject('')).to.not.be.ok();
            expect(utilx.Object.isTypeOfObject(new Error('x'))).to.be.ok();
            expect(utilx.Object.isTypeOfObject(new Date())).to.be.ok();
            expect(utilx.Object.isTypeOfObject(new RegExp('x'))).to.be.ok();
            expect(utilx.Object.isTypeOfObject(required.noop)).to.not.be.ok();
        });
    });
}());
