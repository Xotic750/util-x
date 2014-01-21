/*global require, describe, it, window, console */

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
            console.log('# Error:' + Error.toString());
            expect(utilx.isNativeFunction(Error)).to.be.ok();
        });

        it('Date constructor should be ok', function () {
            console.log('# Date:' + Date.toString());
            expect(utilx.isNativeFunction(Date)).to.be.ok();
        });

        it('RegExp constructor should be ok', function () {
            console.log('# RegExp:' + RegExp.toString());
            expect(utilx.isNativeFunction(RegExp)).to.be.ok();
        });

        it('Function constructor should be ok', function () {
            console.log('# Function:' + Function.toString);
            console.log('# Function:' + Function.toString());
            console.log('# Function:' + Function.prototype.toString);
            console.log('# Function:' + Function.prototype.toString());
            console.log('# Function:' + Function.prototype.toString.call(Function));
            expect(utilx.isNativeFunction(Function)).to.be.ok();
        });

        it('Boolean constructor should be ok', function () {
            console.log('# Boolean:' + Boolean.toString());
            expect(utilx.isNativeFunction(Boolean)).to.be.ok();
        });

        it('Number constructor should be ok', function () {
            console.log('# Number:' + Number.toString());
            expect(utilx.isNativeFunction(Number)).to.be.ok();
        });

        it('String constructor should be ok', function () {
            console.log('# String:' + String.toString());
            expect(utilx.isNativeFunction(String)).to.be.ok();
        });

        it('Object constructor should be ok', function () {
            console.log('# Object:' + Object.toString());
            expect(utilx.isNativeFunction(Object)).to.be.ok();
        });

        it('isNaN should be ok', function () {
            console.log('# isNaN:' + isNaN.toString());
            expect(utilx.isNativeFunction(isNaN)).to.be.ok();
        });

        it('isFinite should be ok', function () {
            console.log('# isFinite:' + Error.toString());
            expect(utilx.isNativeFunction(isFinite)).to.be.ok();
        });

        if (typeof window === 'object' && window.alert) {
            it('alert should be ok', function () {
                console.log('# window.alert:' + window.alert.toString());
                expect(utilx.isNativeFunction(window.alert)).to.be.ok();
            });
        }

        if (typeof window === 'object' && window.setInterval) {
            it('setInterval should be ok', function () {
                console.log('# window.setInterval:' + window.setInterval.toString());
                expect(utilx.isNativeFunction(window.setInterval)).to.be.ok();
            });
        }
    });
}());
