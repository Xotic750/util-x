/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    describe('Object.isObject', function () {
        it('should not be ok in each case', function () {
            expect(utilx.Object.isObject()).to.not.be.ok();
            expect(utilx.Object.isObject(undefined)).to.not.be.ok();
            expect(utilx.Object.isObject(null)).to.not.be.ok();
            expect(utilx.Object.isObject(1)).to.not.be.ok();
            expect(utilx.Object.isObject(true)).to.not.be.ok();
            expect(utilx.Object.isObject('')).to.not.be.ok();
            expect(utilx.Object.isObject(new Error('x'))).to.not.be.ok();
            expect(utilx.Object.isObject(new Date())).to.not.be.ok();
            expect(utilx.Object.isObject(new RegExp('x'))).to.not.be.ok();
            expect(utilx.Object.isObject(utilx.Function.noop)).to.not.be.ok();
            expect(utilx.Object.isObject([])).to.not.be.ok();
            expect(utilx.Object.isObject(utilx.Function.returnArgs())).to.not.be.ok();
        });

        it('should be ok in each case', function () {
            expect(utilx.Object.isObject({})).to.be.ok();
            expect(utilx.Object.isObject(new F())).to.be.ok();
        });

        it('Error constructor should not be ok', function () {
            expect(utilx.Object.isObject(Error)).to.not.be.ok();
        });

        it('Date constructor should not be ok', function () {
            expect(utilx.Object.isObject(Date)).to.not.be.ok();
        });

        it('RegExp constructor should not be ok', function () {
            expect(utilx.Object.isObject(RegExp)).to.not.be.ok();
        });

        it('Function constructor should not be ok', function () {
            expect(utilx.Object.isObject(Function)).to.not.be.ok();
        });

        it('Boolean constructor should not be ok', function () {
            expect(utilx.Object.isObject(Boolean)).to.not.be.ok();
        });

        it('Number constructor should not be ok', function () {
            expect(utilx.Object.isObject(Number)).to.not.be.ok();
        });

        it('String constructor should not be ok', function () {
            expect(utilx.Object.isObject(String)).to.not.be.ok();
        });

        it('Object constructor should not be ok', function () {
            expect(utilx.Object.isObject(Object)).to.not.be.ok();
        });

        it('isNaN should not be ok', function () {
            expect(utilx.Object.isObject(isNaN)).to.not.be.ok();
        });

        it('isFinite should not be ok', function () {
            expect(utilx.Object.isObject(isFinite)).to.not.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should not be ok', function () {
                expect(utilx.Object.isObject(window.alert)).to.not.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should not be ok', function () {
                expect(utilx.Object.isObject(window.setInterval)).to.not.be.ok();
            });
        }
    });
}());
