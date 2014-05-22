/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.isNativeFunction', function () {
        it('non functions should be not ok in each case', function () {
            expect(utilx.Function.isNativeFunction()).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(undefined)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(null)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(1)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(true)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction('')).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(new Date())).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Function.isNativeFunction([])).to.not.be.ok();
            expect(utilx.Function.isNativeFunction({})).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(utilx.Function.returnArgs())).to.not.be.ok();
        });

        it('user functions should be not ok in each case', function () {
            expect(utilx.Function.isNativeFunction(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(describe)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(expect)).to.not.be.ok();
            expect(utilx.Function.isNativeFunction(it)).to.not.be.ok();
        });

        it('Error constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(Error)).to.be.ok();
        });

        it('Date constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(Date)).to.be.ok();
        });

        it('RegExp constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(RegExp)).to.be.ok();
        });

        it('Function constructor should be ok', function () {

            expect(utilx.Function.isNativeFunction(Function)).to.be.ok();
        });

        it('Boolean constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(Boolean)).to.be.ok();
        });

        it('Number constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(Number)).to.be.ok();
        });

        it('String constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(String)).to.be.ok();
        });

        it('Object constructor should be ok', function () {
            expect(utilx.Function.isNativeFunction(Object)).to.be.ok();
        });

        it('isNaN should be ok', function () {
            expect(utilx.Function.isNativeFunction(isNaN)).to.be.ok();
        });

        it('isFinite should be ok', function () {
            expect(utilx.Function.isNativeFunction(isFinite)).to.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should be ok', function () {
                expect(utilx.Function.isNativeFunction(window.alert)).to.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should be ok', function () {
                expect(utilx.Function.isNativeFunction(window.setInterval)).to.be.ok();
            });
        }

        it('only user functions should be ok in each case', function () {
            expect(utilx.Function.isFunction(utilx.Function.noop) && !utilx.Function.isNativeFunction(utilx.Function.noop)).to.be.ok();
            expect(utilx.Function.isFunction(describe) && !utilx.Function.isNativeFunction(describe)).to.be.ok();
            expect(utilx.Function.isFunction(expect) && !utilx.Function.isNativeFunction(expect)).to.be.ok();
            expect(utilx.Function.isFunction(it) && !utilx.Function.isNativeFunction(it)).to.be.ok();
        });

        it('only native functions should not be ok in each case', function () {
            expect(utilx.Function.isFunction(Error) && !utilx.Function.isNativeFunction(Error)).to.not.be.ok();
            expect(utilx.Function.isFunction(Date) && !utilx.Function.isNativeFunction(Date)).to.not.be.ok();
            expect(utilx.Function.isFunction(RegExp) && !utilx.Function.isNativeFunction(RegExp)).to.not.be.ok();
            expect(utilx.Function.isFunction(Function) && !utilx.Function.isNativeFunction(Function)).to.not.be.ok();
            if (typeof window === 'object' && window.alert) {
                expect(utilx.Function.isFunction(window.alert) && !utilx.Function.isNativeFunction(window.alert)).to.not.be.ok();
            }

            if (typeof window === 'object' && window.setInterval) {
                expect(utilx.Function.isFunction(window.setInterval) &&
                        !utilx.Function.isNativeFunction(window.setInterval)).to.not.be.ok();
            }
        });
    });
}());
