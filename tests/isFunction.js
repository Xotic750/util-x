/*global require, describe, it, alert, setInterval */

(function (globalThis) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFunction', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isFunction()).to.not.be.ok();
            expect(utilx.isFunction(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isFunction(null)).to.not.be.ok();
            expect(utilx.isFunction(1)).to.not.be.ok();
            expect(utilx.isFunction(true)).to.not.be.ok();
            expect(utilx.isFunction('')).to.not.be.ok();
            expect(utilx.isFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.isFunction(new Date())).to.not.be.ok();
            expect(utilx.isFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isFunction(utilx.noop)).to.be.ok();
            expect(utilx.isFunction([])).to.not.be.ok();
            expect(utilx.isFunction({})).to.not.be.ok();
            expect(utilx.isFunction(utilx.returnArgs())).to.not.be.ok();
        });

        it('native functions should not throw an error in each case', function () {
            expect(utilx.isFunction(Error)).to.be.ok();
            expect(utilx.isFunction(Date)).to.be.ok();
            expect(utilx.isFunction(RegExp)).to.be.ok();
            expect(utilx.isFunction(Function)).to.be.ok();
            expect(utilx.isFunction(Boolean)).to.be.ok();
            expect(utilx.isFunction(Number)).to.be.ok();
            expect(utilx.isFunction(String)).to.be.ok();
            expect(utilx.isFunction(Object)).to.be.ok();
            expect(utilx.isFunction(isNaN)).to.be.ok();
            expect(utilx.isFunction(isFinite)).to.be.ok();
            if (!utilx.isUndefined(globalThis.alert)) {
                expect(utilx.isFunction(globalThis.alert)).to.be.ok();
            }

            if (!utilx.isUndefined(globalThis.setInterval)) {
                expect(utilx.isFunction(globalThis.setInterval)).to.be.ok();
            }
        });
    });
}(this));
