/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.countCharacter', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.String.countCharacter();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.String.countCharacter(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.String.countCharacter(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if no character argument', function () {
            expect(function () {
                utilx.String.countCharacter('abacadaeafa');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if character argument is undefined', function () {
            expect(function () {
                utilx.String.countCharacter('abacadaeafa', undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if character argument is null', function () {
            expect(function () {
                utilx.String.countCharacter('abacadaeafa', null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.String.countCharacter('abacadaeafa', 'a')).to.be(6);
            expect(utilx.String.countCharacter('abacadaeafa', 'z')).to.be(0);
            expect(utilx.String.countCharacter('abacadaeafa', '')).to.be(Infinity);

        });
    });
}());
