/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isNativeFunction', function () {
        it('non functions should be not ok in each case', function () {
            expect(utilx.isNativeFunction()).to.not.be.ok();
            expect(utilx.isNativeFunction(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isNativeFunction(null)).to.not.be.ok();
            expect(utilx.isNativeFunction(1)).to.not.be.ok();
            expect(utilx.isNativeFunction(true)).to.not.be.ok();
            expect(utilx.isNativeFunction('')).to.not.be.ok();
            expect(utilx.isNativeFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.isNativeFunction(new Date())).to.not.be.ok();
            expect(utilx.isNativeFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isNativeFunction([])).to.not.be.ok();
            expect(utilx.isNativeFunction({})).to.not.be.ok();
            expect(utilx.isNativeFunction(utilx.returnArgs())).to.not.be.ok();
        });

        it('user functions should be not ok in each case', function () {
            expect(utilx.isNativeFunction(utilx.noop)).to.not.be.ok();
            expect(utilx.isNativeFunction(describe)).to.not.be.ok();
            expect(utilx.isNativeFunction(expect)).to.not.be.ok();
            expect(utilx.isNativeFunction(it)).to.not.be.ok();
        });

        it('Error constructor should be ok', function () {
            expect(utilx.isNativeFunction(Error)).to.be.ok();
        });

        it('Date constructor should be ok', function () {
            expect(utilx.isNativeFunction(Date)).to.be.ok();
        });

        it('RegExp constructor should be ok', function () {
            expect(utilx.isNativeFunction(RegExp)).to.be.ok();
        });

        it('Function constructor should be ok', function () {

            expect(utilx.isNativeFunction(Function)).to.be.ok();
        });

        it('Boolean constructor should be ok', function () {
            expect(utilx.isNativeFunction(Boolean)).to.be.ok();
        });

        it('Number constructor should be ok', function () {
            expect(utilx.isNativeFunction(Number)).to.be.ok();
        });

        it('String constructor should be ok', function () {
            expect(utilx.isNativeFunction(String)).to.be.ok();
        });

        it('Object constructor should be ok', function () {
            expect(utilx.isNativeFunction(Object)).to.be.ok();
        });

        it('isNaN should be ok', function () {
            expect(utilx.isNativeFunction(isNaN)).to.be.ok();
        });

        it('isFinite should be ok', function () {
            expect(utilx.isNativeFunction(isFinite)).to.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should be ok', function () {
                expect(utilx.isNativeFunction(window.alert)).to.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should be ok', function () {
                expect(utilx.isNativeFunction(window.setInterval)).to.be.ok();
            });
        }

        it('only user functions should be ok in each case', function () {
            expect(utilx.isFunction(utilx.noop) && !utilx.isNativeFunction(utilx.noop)).to.be.ok();
            expect(utilx.isFunction(describe) && !utilx.isNativeFunction(describe)).to.be.ok();
            expect(utilx.isFunction(expect) && !utilx.isNativeFunction(expect)).to.be.ok();
            expect(utilx.isFunction(it) && !utilx.isNativeFunction(it)).to.be.ok();
        });

        it('only user functions should not be ok in each case', function () {
            expect(utilx.isFunction(Error) && !utilx.isNativeFunction(Error)).to.not.be.ok();
            expect(utilx.isFunction(Date) && !utilx.isNativeFunction(Date)).to.not.be.ok();
            expect(utilx.isFunction(RegExp) && !utilx.isNativeFunction(RegExp)).to.not.be.ok();
            expect(utilx.isFunction(Function) && !utilx.isNativeFunction(Function)).to.not.be.ok();
        });
    });
}());
