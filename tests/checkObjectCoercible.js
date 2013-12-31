/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('checkObjectCoercible', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.checkObjectCoercible();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.checkObjectCoercible(privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.checkObjectCoercible(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.checkObjectCoercible(-1);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(0);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(1);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(NaN);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(Infinity);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(-Infinity);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(true);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(false);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible('');
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible('x');
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(utilx.noop);
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(new RegExp('y'));
            }).to.not.throwException();

            expect(function () {
                utilx.checkObjectCoercible(new Date());
            }).to.not.throwException();
        });
    });
}());
