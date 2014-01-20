/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isFunction', function () {
        it('non functions should be not ok in each case', function () {
            expect(utilx.isFunction()).to.not.be.ok();
            expect(utilx.isFunction(utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.isFunction(null)).to.not.be.ok();
            expect(utilx.isFunction(1)).to.not.be.ok();
            expect(utilx.isFunction(true)).to.not.be.ok();
            expect(utilx.isFunction('')).to.not.be.ok();
            expect(utilx.isFunction(new Error('x'))).to.not.be.ok();
            expect(utilx.isFunction(new Date())).to.not.be.ok();
            expect(utilx.isFunction(new RegExp('x'))).to.not.be.ok();
            expect(utilx.isFunction([])).to.not.be.ok();
            expect(utilx.isFunction({})).to.not.be.ok();
            expect(utilx.isFunction(utilx.returnArgs())).to.not.be.ok();
        });

        it('user functions should not ok in each case', function () {
            expect(utilx.isFunction(utilx.noop)).to.be.ok();
            expect(utilx.isFunction(describe)).to.be.ok();
            expect(utilx.isFunction(expect)).to.be.ok();
            expect(utilx.isFunction(it)).to.be.ok();
        });

        it('Error constructor should be ok', function () {
            expect(utilx.isFunction(Error)).to.be.ok();
        });

        it('Date constructor should be ok', function () {
            expect(utilx.isFunction(Date)).to.be.ok();
        });

        it('RegExp constructor should be ok', function () {
            expect(utilx.isFunction(RegExp)).to.be.ok();
        });

        it('Function constructor should be ok', function () {
            expect(utilx.isFunction(Function)).to.be.ok();
        });

        it('Boolean constructor should be ok', function () {
            expect(utilx.isFunction(Boolean)).to.be.ok();
        });

        it('Number constructor should be ok', function () {
            expect(utilx.isFunction(Number)).to.be.ok();
        });

        it('String constructor should be ok', function () {
            expect(utilx.isFunction(String)).to.be.ok();
        });

        it('Object constructor should be ok', function () {
            expect(utilx.isFunction(Object)).to.be.ok();
        });

        it('isNaN should be ok', function () {
            expect(utilx.isFunction(isNaN)).to.be.ok();
        });

        it('isFinite should be ok', function () {
            expect(utilx.isFunction(isFinite)).to.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should be ok', function () {
                expect(utilx.isFunction(window.alert)).to.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should be ok', function () {
                expect(utilx.isFunction(window.setInterval)).to.be.ok();
            });
        }
    });
}());
