/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.isEmpty', function () {
        function F() {
            return;
        }

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.isEmpty();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.isEmpty(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.isEmpty(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Array.isEmpty(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });


            expect(function () {
                utilx.Array.isEmpty(new Error('x'));
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty(new Date());
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty(new RegExp('x'));
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty(required.noop);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty(new F());
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.isEmpty({});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.Array.isEmpty([])).to.be.ok();
            expect(utilx.Array.isEmpty(required.returnArgs())).to.be.ok();
            expect(utilx.Array.isEmpty([''])).to.not.be.ok();
            expect(utilx.Array.isEmpty(required.returnArgs(''))).to.not.be.ok();
            expect(utilx.Array.isEmpty('')).to.be.ok();
        });
    });
}());
