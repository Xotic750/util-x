/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.getOwnPropertyDescriptor', function () {
        it('should return undefined because the object does not own the property', function () {
            var descr = utilx.Object.getOwnPropertyDescriptor({}, 'name');

            expect(descr).to.be(undefined);
        });

        it('should return a data descriptor', function () {
            var descr = utilx.Object.getOwnPropertyDescriptor({name: 'Testing'}, 'name');

            expect(descr).to.not.be(undefined);
            expect(descr.value).to.be('Testing');
            expect(descr.writable).to.be(true);
            expect(descr.enumerable).to.be(true);
            expect(descr.configurable).to.be(true);
        });

        it('should return undefined because the object does not own the property', function () {
            var descr = utilx.Object.getOwnPropertyDescriptor(Object.create({name: 'Testing'}, {}), 'name');

            expect(descr).to.be(undefined);
        });

        it('should return a data descriptor', function () {
            var obj = utilx.Object.create({}, {
                    name: {
                        value: 'Testing',
                        configurable: true,
                        enumerable: true,
                        writable: true
                    }
                }),
                descr = utilx.Object.getOwnPropertyDescriptor(obj, 'name');

            expect(descr).to.not.be(undefined);
            expect(descr.value).to.be('Testing');
            expect(descr.writable).to.be(true);
            expect(descr.enumerable).to.be(true);
            expect(descr.configurable).to.be(true);
        });

        it('should throw error for non object', function () {
            expect(function () {
                utilx.Object.getOwnPropertyDescriptor(42, 'name');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
