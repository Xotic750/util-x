/*global require, describe, it, window */

(function (globalThis) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFunction2', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isFunction2()).to.not.be.ok();
            expect(utilx.isFunction2(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isFunction2(null)).to.not.be.ok();
            expect(utilx.isFunction2(1)).to.not.be.ok();
            expect(utilx.isFunction2(true)).to.not.be.ok();
            expect(utilx.isFunction2('')).to.not.be.ok();
            expect(utilx.isFunction2(new Error('x'))).to.not.be.ok();
            expect(utilx.isFunction2(new Date())).to.not.be.ok();
            expect(utilx.isFunction2(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isFunction2(utilx.noop)).to.be.ok();
            expect(utilx.isFunction2([])).to.not.be.ok();
            expect(utilx.isFunction2({})).to.not.be.ok();
            expect(utilx.isFunction2(utilx.returnArgs())).to.not.be.ok();
        });

        it('native functions should not throw an error in each case', function () {
            expect(utilx.isFunction2(Error)).to.be.ok();
            expect(utilx.isFunction2(Date)).to.be.ok();
            expect(utilx.isFunction2(RegExp)).to.be.ok();
            expect(utilx.isFunction2(Function)).to.be.ok();
            expect(utilx.isFunction2(Boolean)).to.be.ok();
            expect(utilx.isFunction2(Number)).to.be.ok();
            expect(utilx.isFunction2(String)).to.be.ok();
            expect(utilx.isFunction2(Object)).to.be.ok();
            expect(utilx.isFunction2(isNaN)).to.be.ok();
            expect(utilx.isFunction2(isFinite)).to.be.ok();
            if (typeof window === 'object' && window.alert) {
                expect(utilx.isFunction2(window.alert)).to.be.ok();
            }

            if (typeof window === 'object' && window.setInterval) {
                expect(utilx.isFunction2(window.setInterval)).to.be.ok();
            }
        });
    });
}());
