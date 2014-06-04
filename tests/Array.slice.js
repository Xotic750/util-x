/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create,
        log = required.log;

    describe('Array.slice', function () {
        var arr = create(undefined, null, 1, 'a', 2, 'b', null, undefined),
            testValue;

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.slice();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.slice(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.slice(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(log.toEql(utilx.Array.slice(arr), arr)).to.eql(arr);
            expect(log.toEql(utilx.Array.slice(arr, undefined, undefined), arr)).to.eql(arr);

            testValue = create(undefined);
            expect(log.toEql(utilx.Array.slice(arr, -1), testValue)).to.eql(testValue);
            expect(log.toBe(utilx.Array.slice(arr, -1).length, 1)).to.be(1);
            expect(log.toEql(utilx.Array.slice(arr, 0), arr)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(log.toEql(utilx.Array.slice(arr, 3), testValue)).to.eql(testValue);
            expect(log.toEql(utilx.Array.slice(arr, -1, 4), [])).to.eql([]);
            expect(log.toBe(utilx.Array.slice(arr, -1, 4).length, 0)).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(log.toEql(utilx.Array.slice(arr, 0, 4), testValue)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(log.toEql(utilx.Array.slice(arr, 3, 6), testValue)).to.eql(testValue);
        });

        it('should work with objects that have length', function () {
            var obj = utilx.Array.toObject(arr);

            expect(log.toEql(utilx.Array.slice(obj), arr)).to.eql(arr);
            expect(log.toEql(utilx.Array.slice(obj, undefined, undefined), arr)).to.eql(arr);

            testValue = create(undefined);
            expect(log.toEql(utilx.Array.slice(obj, -1), testValue)).to.eql(testValue);
            expect(log.toBe(utilx.Array.slice(obj, -1).length, 1)).to.be(1);
            expect(log.toEql(utilx.Array.slice(obj, 0), arr)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(log.toEql(utilx.Array.slice(obj, 3), testValue)).to.eql(testValue);
            expect(log.toEql(utilx.Array.slice(obj, -1, 4), [])).to.eql([]);
            expect(log.toBe(utilx.Array.slice(obj, -1, 4).length, 0)).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(log.toEql(utilx.Array.slice(obj, 0, 4), testValue)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(log.toEql(utilx.Array.slice(obj, 3, 6), testValue)).to.eql(testValue);
        });

        it('should work with arguments', function () {
            var obj = utilx.Function.returnArgs(undefined, null, 1, 'a', 2, 'b', null, undefined);

            expect(log.toEql(utilx.Array.slice(obj), arr)).to.eql(arr);
            expect(log.toEql(utilx.Array.slice(obj, undefined, undefined), arr)).to.eql(arr);

            testValue = create(undefined);
            expect(log.toEql(utilx.Array.slice(obj, -1), testValue)).to.eql(testValue);
            expect(log.toBe(utilx.Array.slice(obj, -1).length, 1)).to.be(1);
            expect(log.toEql(utilx.Array.slice(obj, 0), arr)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(log.toEql(utilx.Array.slice(obj, 3), testValue)).to.eql(testValue);
            expect(log.toEql(utilx.Array.slice(obj, -1, 4), [])).to.eql([]);
            expect(log.toBe(utilx.Array.slice(obj, -1, 4).length, 0)).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(log.toEql(utilx.Array.slice(obj, 0, 4), testValue)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(log.toEql(utilx.Array.slice(obj, 3, 6), testValue)).to.eql(testValue);
        });
    });
}());
