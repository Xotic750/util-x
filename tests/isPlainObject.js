/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    function F() {
        return;
    }

    describe('isPlainObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isPlainObject()).to.not.be.ok();
            expect(utilx.isPlainObject(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isPlainObject(null)).to.not.be.ok();
            expect(utilx.isPlainObject(1)).to.not.be.ok();
            expect(utilx.isPlainObject(true)).to.not.be.ok();
            expect(utilx.isPlainObject('')).to.not.be.ok();
            expect(utilx.isPlainObject(new Error('x'))).to.not.be.ok();
            expect(utilx.isPlainObject(new Date())).to.not.be.ok();
            expect(utilx.isPlainObject(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isPlainObject(utilx.noop)).to.not.be.ok();
            expect(utilx.isPlainObject([])).to.not.be.ok();
            expect(utilx.isPlainObject({})).to.be.ok();
            expect(utilx.isPlainObject(new F())).to.not.be.ok();
            expect(utilx.isPlainObject(returnArgs())).to.not.be.ok();
        });
    });
}());
