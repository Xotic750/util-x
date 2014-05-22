/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.inRange', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.Number.inRange();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, -5, '5');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, '-5', 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, -5, []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, {}, 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange([], [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange({}, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, '1', '1');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, 1, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, NaN, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.inRange(-10, 1, NaN);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.Number.inRange('x', 'a', 'a');
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('number literals should not throw an error in each case', function () {
            expect(utilx.Number.inRange(-10, -5, 5)).to.not.be.ok();
            expect(utilx.Number.inRange(10, -5, 5)).to.not.be.ok();
            expect(utilx.Number.inRange(-5, -5, 5)).to.be.ok();
            expect(utilx.Number.inRange(5, -5, 5)).to.be.ok();
            expect(utilx.Number.inRange(0, -5, 5)).to.be.ok();
            expect(utilx.Number.inRange(+0, -5, 5)).to.be.ok();
            expect(utilx.Number.inRange(-0, -5, 5)).to.be.ok();
            expect(utilx.Number.inRange(0, -Infinity, Infinity)).to.be.ok();
            expect(utilx.Number.inRange(-Infinity, -5, 5)).to.not.be.ok();
            expect(utilx.Number.inRange(Infinity, -5, 5)).to.not.be.ok();
            expect(utilx.Number.inRange(NaN, -5, 5)).to.not.be.ok();
        });

        it('string literals should not throw an error in each case', function () {
            expect(utilx.Number.inRange('.', 'a', 'z')).to.not.be.ok();
            expect(utilx.Number.inRange('a', 'a', 'z')).to.be.ok();
            expect(utilx.Number.inRange('h', 'a', 'z')).to.be.ok();
            expect(utilx.Number.inRange('z', 'a', 'z')).to.be.ok();
            expect(utilx.Number.inRange('', 'a', 'z')).to.not.be.ok();
            expect(utilx.Number.inRange('?', 'a', 'z')).to.not.be.ok();
        });
    });
}());
