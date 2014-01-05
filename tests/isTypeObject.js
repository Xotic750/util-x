/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isTypeObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isTypeObject()).to.not.be.ok();
            expect(utilx.isTypeObject(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isTypeObject(null)).to.not.be.ok();
            expect(utilx.isTypeObject(1)).to.not.be.ok();
            expect(utilx.isTypeObject(true)).to.not.be.ok();
            expect(utilx.isTypeObject('')).to.not.be.ok();
            expect(utilx.isTypeObject(new Error('x'))).to.be.ok();
            expect(utilx.isTypeObject(new Date())).to.be.ok();
            expect(utilx.isTypeObject(new RegExp('x'))).to.be.ok();
            expect(utilx.isTypeObject(utilx.noop)).to.not.be.ok();
        });
    });
}());
