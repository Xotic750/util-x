/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectGetOwnPropertyDescriptor', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.objectGetOwnPropertyDescriptor({
                a: 1,
                b: 2,
                c: 3
            }, 'a')).to.eql({
                configurable: true,
                enumerable: true,
                value: 1,
                writable: true
            });

            expect(utilx.objectGetOwnPropertyDescriptor({
                a: 1,
                b: 2,
                c: 3
            }, 'b')).to.eql({
                configurable: true,
                enumerable: true,
                value: 2,
                writable: true
            });

            expect(utilx.objectGetOwnPropertyDescriptor({
                a: 1,
                b: 2,
                c: 3
            }, 'c')).to.eql({
                configurable: true,
                enumerable: true,
                value: 3,
                writable: true
            });

            expect(utilx.objectGetOwnPropertyDescriptor([1], 'length')).to.eql({
                configurable: false,
                enumerable: false,
                value: 1,
                writable: true
            });

            expect(utilx.objectGetOwnPropertyDescriptor([1, 5], 'length')).to.eql({
                configurable: false,
                enumerable: false,
                value: 2,
                writable: true
            });

            expect(utilx.objectGetOwnPropertyDescriptor(function (a) {
                return a;
            }, 'length')).to.eql({
                configurable: false,
                enumerable: false,
                value: 1,
                writable: true
            });
        });
    });
}());
