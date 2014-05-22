/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.isFunction', function () {
        it('non functions should be not ok in each case', function () {
            expect(utilx.Function.isFunction()).to.not.be.ok();
            expect(utilx.Function.isFunction(undefined)).to.not.be.ok();
            expect(utilx.Function.isFunction(null)).to.not.be.ok();
            expect(utilx.Function.isFunction(1)).to.not.be.ok();
            expect(utilx.Function.isFunction(true)).to.not.be.ok();
            expect(utilx.Function.isFunction('')).to.not.be.ok();
            expect(utilx.Function.isFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.Function.isFunction(new Date())).to.not.be.ok();
            expect(utilx.Function.isFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Function.isFunction([])).to.not.be.ok();
            expect(utilx.Function.isFunction({})).to.not.be.ok();
            expect(utilx.Function.isFunction(utilx.Function.returnArgs())).to.not.be.ok();
        });

        it('user functions should not ok in each case', function () {
            expect(utilx.Function.isFunction(utilx.Function.noop)).to.be.ok();
            expect(utilx.Function.isFunction(describe)).to.be.ok();
            expect(utilx.Function.isFunction(expect)).to.be.ok();
            expect(utilx.Function.isFunction(it)).to.be.ok();
        });

        it('Error constructor should be ok', function () {
            expect(utilx.Function.isFunction(Error)).to.be.ok();
        });

        it('Date constructor should be ok', function () {
            expect(utilx.Function.isFunction(Date)).to.be.ok();
        });

        it('RegExp constructor should be ok', function () {
            expect(utilx.Function.isFunction(RegExp)).to.be.ok();
        });

        it('Function constructor should be ok', function () {
            expect(utilx.Function.isFunction(Function)).to.be.ok();
        });

        it('Boolean constructor should be ok', function () {
            expect(utilx.Function.isFunction(Boolean)).to.be.ok();
        });

        it('Number constructor should be ok', function () {
            expect(utilx.Function.isFunction(Number)).to.be.ok();
        });

        it('String constructor should be ok', function () {
            expect(utilx.Function.isFunction(String)).to.be.ok();
        });

        it('Object constructor should be ok', function () {
            expect(utilx.Function.isFunction(Object)).to.be.ok();
        });

        it('isNaN should be ok', function () {
            expect(utilx.Function.isFunction(isNaN)).to.be.ok();
        });

        it('isFinite should be ok', function () {
            expect(utilx.Function.isFunction(isFinite)).to.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should be ok', function () {
                expect(utilx.Function.isFunction(window.alert)).to.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should be ok', function () {
                expect(utilx.Function.isFunction(window.setInterval)).to.be.ok();
            });
        }
    });
}());
