/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.contains', function () {
        var arr = [
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
            arr2 = [0, 1, 2, 3, 4, 5];

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.contains();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.contains(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.contains(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should find the string in the array', function () {
            expect(utilx.Array.contains(arr, 'toString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'valueOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.Array.contains(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.Array.contains(arr, 'constructor')).to.be.ok();
        });

        it('should not find the string in the array', function () {
            expect(utilx.Array.contains(arr, 'foo')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'bar')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'fuz')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'push')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'pop')).to.not.be.ok();
        });

        it('should find the number in the array', function () {
            expect(utilx.Array.contains(arr2, 0)).to.be.ok();
            expect(utilx.Array.contains(arr2, 1)).to.be.ok();
            expect(utilx.Array.contains(arr2, 2)).to.be.ok();
            expect(utilx.Array.contains(arr2, 3)).to.be.ok();
            expect(utilx.Array.contains(arr2, 4)).to.be.ok();
            expect(utilx.Array.contains(arr2, 5)).to.be.ok();
        });

        it('should not find the number in the array', function () {
            expect(utilx.Array.contains(arr2, 6)).to.not.be.ok();
            expect(utilx.Array.contains(arr2, 7)).to.not.be.ok();
            expect(utilx.Array.contains(arr2, 8)).to.not.be.ok();
            expect(utilx.Array.contains(arr2, 9)).to.not.be.ok();
            expect(utilx.Array.contains(arr2, 10)).to.not.be.ok();
        });

        it('should iterate arguments object', function () {
            var args = utilx.Function.returnArgs(1, undefined, null, 2, 3);

            expect(utilx.Array.contains(args, 1)).to.be.ok();
            expect(utilx.Array.contains(args, undefined)).to.be.ok();
            expect(utilx.Array.contains(args, null)).to.be.ok();
            expect(utilx.Array.contains(args, 2)).to.be.ok();
            expect(utilx.Array.contains(args, 3)).to.be.ok();
        });
    });
}());
