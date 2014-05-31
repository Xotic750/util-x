/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.isDigits', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.isDigits();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.isDigits(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.isDigits(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.isDigits(true)).to.not.be.ok();
            expect(utilx.String.isDigits(false)).to.not.be.ok();
            expect(utilx.String.isDigits('')).to.not.be.ok();
            expect(utilx.String.isDigits(' ')).to.not.be.ok();
            expect(utilx.String.isDigits(0)).to.be.ok();
            expect(utilx.String.isDigits(1)).to.be.ok();
            expect(utilx.String.isDigits({})).to.not.be.ok();
            expect(utilx.String.isDigits([])).to.not.be.ok();
            expect(utilx.String.isDigits('1234567890.0')).to.not.be.ok();
            expect(utilx.String.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.String.isDigits('-1234567890')).to.not.be.ok();
            expect(utilx.String.isDigits('1234567890')).to.be.ok();
        });
    });
}());
