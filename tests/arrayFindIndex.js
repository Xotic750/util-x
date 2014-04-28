/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayFindIndex', function () {
        var list = [5, 10, 15, 20];

        it('should find item key by predicate', function () {
            var result = utilx.arrayFindIndex(list, function (item) {
                return utilx.strictEqual(item, 15);
            });

            expect(result).to.equal(2);
        });

        it('should return -1 when nothing matched', function () {
            var result = utilx.arrayFindIndex(list, function (item) {
                return utilx.strictEqual(item, 'a');
            });

            expect(result).to.equal(-1);
        });

        it('should throw TypeError when function was not passed', function () {
            expect(function () {
                utilx.arrayFindIndex(list);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should receive all three parameters', function () {
            var index = utilx.arrayFindIndex(list, function (value, index, arr) {
                expect(list[index]).to.equal(value);
                expect(list).to.eql(arr);

                return false;
            });

            expect(index).to.equal(-1);
        });

        it('should work with the context argument', function () {
            var context = {};

            utilx.arrayFindIndex([1], function () {
                expect(this).to.equal(context);
            }, context);
        });

        it('should work with an array-like object', function () {
            var obj = {
                    '0': 1,
                    '1': 2,
                    '2': 3,
                    length: 3
                },
                foundIndex = utilx.arrayFindIndex(obj, function (item) {
                    return utilx.strictEqual(item, 2);
                });

            expect(foundIndex).to.equal(1);
        });

        it('should work with an array-like object with negative length', function () {
            var obj = {
                    '0': 1,
                    '1': 2,
                    '2': 3,
                    length: -3
                },
                foundIndex = utilx.arrayFindIndex(obj, function () {
                    throw new Error('should not reach here');
                });

            expect(foundIndex).to.equal(-1);
        });

        it('should work with a sparse array', function () {
            var obj = [1, , utilx.privateUndefined],
                seen = [],
                foundIndex = utilx.arrayFindIndex(obj, function (item, idx) {
                    seen.push([idx, item]);

                    return utilx.isUndefined(item);
                });

            expect(foundIndex).to.equal(2);
            expect(seen).to.eql([
                [0, 1],
                [2, utilx.privateUndefined]
            ]);
        });

        it('should work with a sparse array-like object', function () {
            var obj = {
                    '0': 1,
                    '2': utilx.privateUndefined,
                    length: 3.2
                },
                seen = [],
                foundIndex = utilx.arrayFindIndex(obj, function (item, idx) {
                    seen.push([idx, item]);
                    return false;
                });

            expect(foundIndex).to.equal(-1);
            expect(seen).to.eql([
                [0, 1],
                [2, utilx.privateUndefined]
            ]);
        });

        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.arrayFind(null, utilx.noop);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayFind(utilx.privateUndefined, utilx.noop);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
