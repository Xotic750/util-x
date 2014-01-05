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

    describe('isObject', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isObject()).to.not.be.ok();
            expect(utilx.isObject(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isObject(null)).to.not.be.ok();
            expect(utilx.isObject(1)).to.not.be.ok();
            expect(utilx.isObject(true)).to.not.be.ok();
            expect(utilx.isObject('')).to.not.be.ok();
            expect(utilx.isObject(new Error('x'))).to.not.be.ok();
            expect(utilx.isObject(new Date())).to.not.be.ok();
            expect(utilx.isObject(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isObject(utilx.noop)).to.not.be.ok();
            expect(utilx.isObject([])).to.not.be.ok();
            expect(utilx.isObject({})).to.be.ok();
            expect(utilx.isObject(new F())).to.be.ok();
            expect(utilx.isObject(returnArgs())).to.not.be.ok();
        });
    });
}());
