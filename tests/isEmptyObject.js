/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function F() {
        return;
    }

    F.foo = utilx.noop;

    function X() {
        return;
    }

    X.prototype.foo = utilx.noop;

    describe('isEmptyObject', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.isEmptyObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isEmptyObject(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isEmptyObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isEmptyObject('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isEmptyObject(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isEmptyObject(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should be ok in each case', function () {
            expect(utilx.isEmptyObject({})).to.be.ok();
            expect(utilx.isEmptyObject([])).to.be.ok();
            expect(utilx.isEmptyObject(utilx.noop)).to.be.ok();
            //expect(utilx.isEmptyObject(Date)).to.be.ok();
            //expect(utilx.isEmptyObject(RegExp)).to.be.ok();
            //expect(utilx.isEmptyObject(Function)).to.be.ok();
            //expect(utilx.isEmptyObject(String)).to.be.ok();
            //expect(utilx.isEmptyObject(Boolean)).to.be.ok();
            //expect(utilx.isEmptyObject(Object)).to.be.ok();
            //expect(utilx.isEmptyObject(Number)).to.be.ok();
            expect(utilx.isEmptyObject(X)).to.be.ok();
            //expect(utilx.isEmptyObject(Error)).to.be.ok();
            //expect(utilx.isEmptyObject(TypeError)).to.be.ok();
            //expect(utilx.isEmptyObject(SyntaxError)).to.be.ok();
            //expect(utilx.isEmptyObject(RangeError)).to.be.ok();
        });

        it('should not be ok in each case', function () {
            expect(utilx.isEmptyObject({string: utilx.noop})).to.not.be.ok();
            expect(utilx.isEmptyObject({valueOf: utilx.noop})).to.not.be.ok();
            expect(utilx.isEmptyObject([1])).to.not.be.ok();
            expect(utilx.isEmptyObject(F)).to.not.be.ok();
            expect(utilx.isEmptyObject(X.prototype)).to.not.be.ok();
        });
    });
}());
