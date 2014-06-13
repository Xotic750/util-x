/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.toObject', function () {
        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.toObject();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.toObject(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.toObject(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('dense', function () {
            expect(utilx.Array.toObject([1, 2, 3, 4, 5])).to.eql({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5,
                length: 5
            });
        });

        it('sparse', function () {
            var arr = [1, 2, 3, 4, 5];

            delete arr[2];
            expect(utilx.Array.toObject(arr)).to.eql({
                0: 1,
                1: 2,
                3: 4,
                4: 5,
                length: 5
            });
        });

        it('arguments', function () {
            expect(utilx.Array.toObject(utilx.Function.returnArgs(1, 2, 3, 4, 5))).to.eql({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5,
                length: 5
            });
        });

        it('object with length', function () {
            expect(utilx.Array.toObject({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5,
                length: 5
            })).to.eql({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5,
                length: 5
            });
        });

        it('object without length', function () {
            expect(utilx.Array.toObject({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5
            })).to.eql({length: 0});
        });

        it('strings', function () {
            expect(utilx.Array.toObject('12345')).to.eql({
                0: '1',
                1: '2',
                2: '3',
                3: '4',
                4: '5',
                length: 5
            });
        });
    });
}());
