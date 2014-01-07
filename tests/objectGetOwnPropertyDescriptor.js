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
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Object, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Object.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Array, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Array.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Function, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Function.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Boolean, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Boolean.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(String, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: String.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Error, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Error.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(Date, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: Date.prototype,
                writable: false
            });

            expect(utilx.objectGetOwnPropertyDescriptor(RegExp, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: RegExp.prototype,
                writable: false
            });

            function F() {
                return;
            }

            F.prototype = Function.prototype;
            F.prototype.constructor = F;

            expect(utilx.objectGetOwnPropertyDescriptor(F, 'prototype')).to.eql({
                configurable: false,
                enumerable: false,
                value: F.prototype,
                writable: true
            });
        });
    });
}());
