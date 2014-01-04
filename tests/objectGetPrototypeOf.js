/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    describe('objectGetPrototypeOf', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.objectGetPrototypeOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.objectGetPrototypeOf('x');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('1', function () {
            expect(utilx.objectGetPrototypeOf([1, 2, 3])).to.be(Array.prototype);
        });

        it('2', function () {
            expect(utilx.objectGetPrototypeOf(returnArgs())).to.be(Object.prototype);
        });

        it('3', function () {
            expect(utilx.objectGetPrototypeOf({})).to.be(Object.prototype);
        });

        it('4', function () {
            expect(utilx.objectGetPrototypeOf(utilx.noop)).to.be(Function.prototype);
        });

        it('5', function () {
            expect(utilx.objectGetPrototypeOf(new RegExp('c'))).to.be(RegExp.prototype);
        });

        it('6', function () {
            expect(utilx.objectGetPrototypeOf(new Date())).to.be(Date.prototype);
        });

        it('7', function () {
            expect(utilx.objectGetPrototypeOf(new Error('x'))).to.be(Error.prototype);
        });
    });
}());
