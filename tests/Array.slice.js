/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.slice', function () {
        var arr = required.create(undefined, null, 1, 'a', 2, 'b', null, undefined),
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

            testValue = required.create(undefined);
            expect(utilx.Array.slice(arr, -1)).to.eql(testValue);
            expect(utilx.Array.slice(arr, -1).length).to.be(1);
            expect(utilx.Array.slice(arr, 0)).to.eql(arr);

            testValue = required.create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(arr, 3)).to.eql(testValue);
            expect(utilx.Array.slice(arr, -1, 4)).to.eql([]);
            expect(utilx.Array.slice(arr, -1, 4).length).to.be(0);

            testValue = required.create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(arr, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(arr, 3, 6)).to.eql(testValue);
        });

        it('should work with objects that have length', function () {
            var obj = utilx.Array.toObject(arr);

            expect(utilx.Array.slice(obj)).to.eql(arr);
            expect(utilx.Array.slice(obj, undefined, undefined)).to.eql(arr);

            testValue = required.create(undefined);
            expect(utilx.Array.slice(obj, -1)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1).length).to.be(1);
            expect(utilx.Array.slice(obj, 0)).to.eql(arr);

            testValue = required.create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(obj, 3)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1, 4)).to.eql([]);
            expect(utilx.Array.slice(obj, -1, 4).length).to.be(0);

            testValue = required.create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(obj, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(obj, 3, 6)).to.eql(testValue);
        });

        it('should work with arguments', function () {
            var obj = required.returnArgs(undefined, null, 1, 'a', 2, 'b', null, undefined);

            expect(utilx.Array.slice(obj)).to.eql(arr);
            expect(utilx.Array.slice(obj, undefined, undefined)).to.eql(arr);

            testValue = required.create(undefined);
            expect(utilx.Array.slice(obj, -1)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1).length).to.be(1);
            expect(utilx.Array.slice(obj, 0)).to.eql(arr);

            testValue = required.create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(obj, 3)).to.eql(testValue);
            expect(utilx.Array.slice(obj, -1, 4), []).to.eql([]);
            expect(utilx.Array.slice(obj, -1, 4).length).to.be(0);

            testValue = required.create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(obj, 0, 4)).to.eql(testValue);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(obj, 3, 6)).to.eql(testValue);
        });

        it('should work with string', function () {
            var obj = '1234567890';

            expect(utilx.Array.slice(obj)).to.eql(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);
            expect(utilx.Array.slice(obj, undefined, undefined))
                    .to.eql(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

            expect(utilx.Array.slice(obj, -1)).to.eql(['0']);
            expect(utilx.Array.slice(obj, -1).length).to.be(1);
            expect(utilx.Array.slice(obj, 0)).to.eql(['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']);

            testValue = required.create('a', 2, 'b', null, undefined);
            expect(utilx.Array.slice(obj, 3)).to.eql(['4', '5', '6', '7', '8', '9', '0']);
            expect(utilx.Array.slice(obj, -1, 4), []).to.eql([]);
            expect(utilx.Array.slice(obj, -1, 4).length).to.be(0);

            testValue = required.create(undefined, null, 1, 'a');
            expect(utilx.Array.slice(obj, 0, 4)).to.eql(['1', '2', '3', '4']);

            testValue = ['a', 2, 'b'];
            expect(utilx.Array.slice(obj, 3, 6)).to.eql(['4', '5', '6']);
        });
    });
}());
