/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.outRange', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.Number.outRange();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, -5, '5');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, '-5', 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, -5, []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, {}, 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange([], [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange({}, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, '1', '1');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, 1, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, NaN, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.outRange(-10, 1, NaN);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.outRange('x', 'a', 'a');
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('number literals should not throw an error in each case', function () {
            expect(utilx.Number.outRange(-10, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(10, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(-5, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(5, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(0, -5, 5)).to.not.be.ok();
            expect(utilx.Number.outRange(+0, -5, 5)).to.not.be.ok();
            expect(utilx.Number.outRange(-0, -5, 5)).to.not.be.ok();
            expect(utilx.Number.outRange(0, -Infinity, Infinity)).to.not.be.ok();
            expect(utilx.Number.outRange(-Infinity, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(Infinity, -5, 5)).to.be.ok();
            expect(utilx.Number.outRange(NaN, -5, 5)).to.not.be.ok();
        });

        it('string literals should not throw an error in each case', function () {
            expect(utilx.Number.outRange('.', 'a', 'z')).to.be.ok();
            expect(utilx.Number.outRange('a', 'a', 'z')).to.be.ok();
            expect(utilx.Number.outRange('h', 'a', 'z')).to.not.be.ok();
            expect(utilx.Number.outRange('z', 'a', 'z')).to.be.ok();
            expect(utilx.Number.outRange('', 'a', 'z')).to.be.ok();
            expect(utilx.Number.outRange('?', 'a', 'z')).to.be.ok();
        });
    });
}());
