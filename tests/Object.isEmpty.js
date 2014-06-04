/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    F.foo = utilx.Function.noop;

    function X() {
        return;
    }

    X.prototype.foo = utilx.Function.noop;

    describe('Object.isEmpty', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Object.isEmpty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.isEmpty(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.isEmpty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.isEmpty('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.isEmpty(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.isEmpty(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should be ok in each case', function () {
            expect(utilx.Object.isEmpty({})).to.be.ok();
            expect(utilx.Object.isEmpty([])).to.be.ok();
            expect(utilx.Object.isEmpty(utilx.Function.noop)).to.be.ok();
            expect(utilx.Object.isEmpty(X)).to.be.ok();
        });

        it('should not be ok in each case', function () {
            expect(utilx.Object.isEmpty({toString: utilx.Function.noop})).to.not.be.ok();
            expect(utilx.Object.isEmpty({valueOf: utilx.Function.noop})).to.not.be.ok();
            expect(utilx.Object.isEmpty([1])).to.not.be.ok();
            expect(utilx.Object.isEmpty(F)).to.not.be.ok();
            expect(utilx.Object.isEmpty(X.prototype)).to.not.be.ok();
        });
    });
}());