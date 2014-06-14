/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.isTypeObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isTypeObject()).to.not.be.ok();
            expect(utilx.Object.isTypeObject(undefined)).to.not.be.ok();
            expect(utilx.Object.isTypeObject(null)).to.not.be.ok();
            expect(utilx.Object.isTypeObject(1)).to.not.be.ok();
            expect(utilx.Object.isTypeObject(true)).to.not.be.ok();
            expect(utilx.Object.isTypeObject('')).to.not.be.ok();
            expect(utilx.Object.isTypeObject(new Error('x'))).to.be.ok();
            expect(utilx.Object.isTypeObject(new Date())).to.be.ok();
            expect(utilx.Object.isTypeObject(new RegExp('x'))).to.be.ok();
            expect(utilx.Object.isTypeObject(required.noop)).to.not.be.ok();
        });
    });
}());
