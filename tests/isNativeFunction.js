/*global require, describe, it, alert, setInterval */

(function (globalThis) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNativeFunction', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.isNativeFunction()).to.not.be.ok();
            expect(utilx.isNativeFunction(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isNativeFunction(null)).to.not.be.ok();
            expect(utilx.isNativeFunction(1)).to.not.be.ok();
            expect(utilx.isNativeFunction(true)).to.not.be.ok();
            expect(utilx.isNativeFunction('')).to.not.be.ok();
            expect(utilx.isNativeFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.isNativeFunction(new Date())).to.not.be.ok();
            expect(utilx.isNativeFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isNativeFunction(utilx.noop)).to.not.be.ok();
            expect(utilx.isNativeFunction([])).to.not.be.ok();
            expect(utilx.isNativeFunction({})).to.not.be.ok();
            expect(utilx.isNativeFunction(utilx.returnArgs())).to.not.be.ok();
        });

        it('native functions should not throw an error in each case', function () {
            expect(utilx.isNativeFunction(Error)).to.be.ok();
            expect(utilx.isNativeFunction(Date)).to.be.ok();
            expect(utilx.isNativeFunction(RegExp)).to.be.ok();
            expect(utilx.isNativeFunction(Function)).to.be.ok();
            expect(utilx.isNativeFunction(Boolean)).to.be.ok();
            expect(utilx.isNativeFunction(Number)).to.be.ok();
            expect(utilx.isNativeFunction(String)).to.be.ok();
            expect(utilx.isNativeFunction(Object)).to.be.ok();
            if (!utilx.isUndefined(globalThis.alert)) {
                expect(utilx.isNativeFunction(globalThis.alert)).to.be.ok();
            }

            if (!utilx.isUndefined(globalThis.setInterval)) {
                expect(utilx.isNativeFunction(globalThis.setInterval)).to.be.ok();
            }
        });
    });
}(this));
