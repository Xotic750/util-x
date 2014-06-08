/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect,
        create = required.Array.create;

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
            expect(utilx.Array.slice(arr)).to.eql(arr);
            expect(utilx.Array.slice(arr, undefined, undefined)).to.eql(arr);

            testValue = create(undefined);
            expect(utilx.Array.slice(arr, -1)).to.eql(testValue);
            expect(utilx.Array.slice(arr, -1).length).to.be(1);
            expect(utilx.Array.slice(arr, 0)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(arr, 3)).to.eql(testValue);
            expect(utilx.Array.slice(arr, -1, 4)).to.eql([]);
            expect(utilx.Array.slice(arr, -1, 4).length).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(arr, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(arr, 3, 6)).to.eql(testValue);
        });

        it('should work with objects that have length', function () {
            var obj = utilx.Array.toObject(arr);

            expect(utilx.Array.slice(obj)).to.eql(arr);
            expect(utilx.Array.slice(obj, undefined, undefined)).to.eql(arr);

            testValue = create(undefined);
            expect(utilx.Array.slice(obj, -1)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1).length).to.be(1);
            expect(utilx.Array.slice(obj, 0)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(obj, 3)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1, 4)).to.eql([]);
            expect(utilx.Array.slice(obj, -1, 4).length).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(obj, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(obj, 3, 6)).to.eql(testValue);
        });

        it('should work with arguments', function () {
            var obj = utilx.Function.returnArgs(undefined, null, 1, 'a', 2, 'b', null, undefined);

            expect(utilx.Array.slice(obj)).to.eql(arr);
            expect(utilx.Array.slice(obj, undefined, undefined)).to.eql(arr);

            testValue = create(undefined);
            expect(utilx.Array.slice(obj, -1)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1).length).to.be(1);
            expect(utilx.Array.slice(obj, 0)).to.eql(arr);

            testValue = create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(obj, 3)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1, 4), []).to.eql([]);
            expect(utilx.Array.slice(obj, -1, 4).length).to.be(0);

            testValue = create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(obj, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(obj, 3, 6)).to.eql(testValue);
        });
    });
}());
