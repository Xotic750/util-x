/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    F.foo = required.noop;

    function X() {
        return;
    }

    X.prototype.foo = required.noop;

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

        it('should true in each case', function () {
            expect(function () {
                utilx.Object.isEmpty({});
            }).to.not.throwException();
            expect(utilx.Object.isEmpty({})).to.be(true);

            expect(function () {
                utilx.Object.isEmpty([]);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty([])).to.be(true);

            expect(function () {
                utilx.Object.isEmpty(required.noop);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty(required.noop)).to.be(true);

            expect(function () {
                utilx.Object.isEmpty(X);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty(X)).to.be(true);
        });

        it('should false in each case', function () {
            expect(function () {
                utilx.Object.isEmpty({toString: required.noop});
            }).to.not.throwException();
            expect(utilx.Object.isEmpty({toString: required.noop})).to.be(false);

            expect(function () {
                utilx.Object.isEmpty({valueOf: required.noop});
            }).to.not.throwException();
            expect(utilx.Object.isEmpty({valueOf: required.noop})).to.be(false);

            expect(function () {
                utilx.Object.isEmpty([1]);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty([1])).to.be(false);

            expect(function () {
                utilx.Object.isEmpty(X.prototype);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty(X.prototype)).to.be(false);

            expect(function () {
                utilx.Object.isEmpty(X.prototype);
            }).to.not.throwException();
            expect(utilx.Object.isEmpty(X.prototype)).to.be(false);
        });
    });
}());
