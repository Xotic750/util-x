/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.ToMethod', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Function.ToMethod();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Function.ToMethod(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Function.ToMethod(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('creates a static method from a prototype method', function () {
            var toString = utilx.Function.ToMethod(Object.prototype.toString);

            expect(toString({})).to.be('[object Object]');
        });
    });
}());
