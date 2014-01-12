/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('inRange', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.inRange();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, -5, '5');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, '-5', 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, -5, []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, {}, 5);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange([], [], []);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange({}, {}, {});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, '1', '1');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.inRange(-10, 1, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });

            expect(function () {
                utilx.inRange('x', 'a', 'a');
            }).to.throwException(function (e) {
                expect(e).to.be.a(RangeError);
            });
        });

        it('number literals should not throw an error in each case', function () {
            expect(utilx.inRange(-10, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(10, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(-5, -5, 5)).to.be.ok();
            expect(utilx.inRange(5, -5, 5)).to.be.ok();
            expect(utilx.inRange(0, -5, 5)).to.be.ok();
            expect(utilx.inRange(+0, -5, 5)).to.be.ok();
            expect(utilx.inRange(-0, -5, 5)).to.be.ok();
            expect(utilx.inRange(-Infinity, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(Infinity, -5, 5)).to.not.be.ok();
            expect(utilx.inRange(NaN, -5, 5)).to.not.be.ok();
        });

        it('string literals should not throw an error in each case', function () {
            expect(utilx.inRange('.', 'a', 'z')).to.not.be.ok();
            expect(utilx.inRange('a', 'a', 'z')).to.be.ok();
            expect(utilx.inRange('h', 'a', 'z')).to.be.ok();
            expect(utilx.inRange('z', 'a', 'z')).to.be.ok();
            expect(utilx.inRange('', 'a', 'z')).to.not.be.ok();
            expect(utilx.inRange('?', 'a', 'z')).to.not.be.ok();
        });
    });
}());
