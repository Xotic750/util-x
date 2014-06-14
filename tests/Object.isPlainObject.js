/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    describe('Object.isPlainObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Object.isPlainObject()).to.not.be.ok();
            expect(utilx.Object.isPlainObject(undefined)).to.not.be.ok();
            expect(utilx.Object.isPlainObject(null)).to.not.be.ok();
            expect(utilx.Object.isPlainObject(1)).to.not.be.ok();
            expect(utilx.Object.isPlainObject(true)).to.not.be.ok();
            expect(utilx.Object.isPlainObject('')).to.not.be.ok();
            expect(utilx.Object.isPlainObject(new Error('x'))).to.not.be.ok();
            expect(utilx.Object.isPlainObject(new Date())).to.not.be.ok();
            expect(utilx.Object.isPlainObject(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Object.isPlainObject(required.noop)).to.not.be.ok();
            expect(utilx.Object.isPlainObject([])).to.not.be.ok();
            expect(utilx.Object.isPlainObject({})).to.be.ok();
            expect(utilx.Object.isPlainObject(new F())).to.not.be.ok();
            expect(utilx.Object.isPlainObject(required.returnArgs())).to.not.be.ok();
        });
    });
}());
