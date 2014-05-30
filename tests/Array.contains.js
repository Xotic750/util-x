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
            ];

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

        it('should not throw an error in each case', function () {
            expect(utilx.Array.contains(arr, 'toString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'toLocaleString')).to.be.ok();
            expect(utilx.Array.contains(arr, 'valueOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'hasOwnProperty')).to.be.ok();
            expect(utilx.Array.contains(arr, 'isPrototypeOf')).to.be.ok();
            expect(utilx.Array.contains(arr, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.Array.contains(arr, 'constructor')).to.be.ok();
            expect(utilx.Array.contains(arr, 'foo')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'bar')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'fuz')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'push')).to.not.be.ok();
            expect(utilx.Array.contains(arr, 'pop')).to.not.be.ok();
        });
    });
}());
