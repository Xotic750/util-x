/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.CheckObjectCoercible', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Object.CheckObjectCoercible();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.CheckObjectCoercible(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.CheckObjectCoercible(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.CheckObjectCoercible(-1);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(0);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(1);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(NaN);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(Infinity);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(-Infinity);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(true);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(false);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible('');
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible('x');
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(required.noop);
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(new RegExp('y'));
            }).to.not.throwException();

            expect(function () {
                utilx.Object.CheckObjectCoercible(new Date());
            }).to.not.throwException();
        });
    });
}());
