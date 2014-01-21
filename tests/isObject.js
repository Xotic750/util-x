/*global require, describe, it, window */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    describe('isObject', function () {
        it('should not be ok in each case', function () {
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
            expect(utilx.isObject(utilx.returnArgs())).to.not.be.ok();
        });

        it('should be ok in each case', function () {
            expect(utilx.isObject({})).to.be.ok();
            expect(utilx.isObject(new F())).to.be.ok();
        });

        it('Error constructor should not be ok', function () {
            expect(utilx.isObject(Error)).to.not.be.ok();
        });

        it('Date constructor should not be ok', function () {
            expect(utilx.isObject(Date)).to.not.be.ok();
        });

        it('RegExp constructor should not be ok', function () {
            expect(utilx.isObject(RegExp)).to.not.be.ok();
        });

        it('Function constructor should not be ok', function () {
            expect(utilx.isObject(Function)).to.not.be.ok();
        });

        it('Boolean constructor should not be ok', function () {
            expect(utilx.isObject(Boolean)).to.not.be.ok();
        });

        it('Number constructor should not be ok', function () {
            expect(utilx.isObject(Number)).to.not.be.ok();
        });

        it('String constructor should not be ok', function () {
            expect(utilx.isObject(String)).to.not.be.ok();
        });

        it('Object constructor should not be ok', function () {
            expect(utilx.isObject(Object)).to.not.be.ok();
        });

        it('isNaN should not be ok', function () {
            expect(utilx.isObject(isNaN)).to.not.be.ok();
        });

        it('isFinite should not be ok', function () {
            expect(utilx.isObject(isFinite)).to.not.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should not be ok', function () {
                expect(utilx.isObject(window.alert)).to.not.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should not be ok', function () {
                expect(utilx.isObject(window.setInterval)).to.not.be.ok();
            });
        }
    });
}());
