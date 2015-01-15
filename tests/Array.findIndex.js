/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.findIndex', function () {
        var list = [5, 10, 15, 20];

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.findIndex();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.findIndex(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.findIndex(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Array.findIndex(list);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.findIndex(list, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.findIndex(list, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should find item key by predicate', function () {
            var result = utilx.Array.findIndex(list, function (item) {
                return item === 15;
            });

            expect(result).to.equal(2);
        });

        it('should return -1 when nothing matched', function () {
            var result = utilx.Array.findIndex(list, function (item) {
                return item === 'a';
            });

            expect(result).to.equal(-1);
        });

        it('should receive all three parameters', function () {
            var index = utilx.Array.findIndex(list, function (value, index, arr) {
                expect(list[index]).to.equal(value);
                expect(list).to.eql(arr);

                return false;
            });

            expect(index).to.equal(-1);
        });

        it('should work with the context argument', function () {
            var context = {};

            utilx.Array.findIndex([1], function () {
                expect(this).to.equal(context);
            }, context);
        });

        it('should work with an array-like object', function () {
            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                },
                foundIndex = utilx.Array.findIndex(obj, function (item) {
                    return item === 3;
                });

            expect(foundIndex).to.equal(2);
        });

        it('should work with an array-like object with negative length', function () {
            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                foundIndex = utilx.Array.findIndex(obj, function () {
                    throw new Error('should not reach here');
                });

            expect(foundIndex).to.equal(-1);
        });

        it('should work with a sparse array', function () {
            var obj = required.create(1, 2, undefined),
                seen = [],
                foundIndex,
                expected = [];

            delete obj[1];
            foundIndex = utilx.Array.findIndex(obj, function (item, idx) {
                if (utilx.Object.hasOwn(obj, idx)) {
                    utilx.Array.assign(seen, idx, required.create(idx, item));

                    return utilx.Object.isUndefined(item);
                }

                return false;
            });

            utilx.Array.assign(expected, 0, [0, 1]);
            utilx.Array.assign(expected, 2, required.create(2, undefined));
            expect(foundIndex).to.equal(2);
            expect(seen).to.eql(expected);
        });

        it('should work with a sparse array-like object', function () {
            var obj = {
                    0: 1,
                    2: undefined,
                    length: 3.2
                },
                seen = [],
                foundIndex = utilx.Array.findIndex(obj, function (item, idx) {
                    if (utilx.Object.hasOwn(obj, idx)) {
                        utilx.Array.assign(seen, idx, required.create(idx, item));

                        return utilx.Object.isUndefined(item);
                    }

                    return false;
                }),
                expected = [];

            utilx.Array.assign(expected, 0, [0, 1]);
            utilx.Array.assign(expected, 2, required.create(2, undefined));
            expect(foundIndex).to.equal(2);
            expect(seen).to.eql(expected);
        });

        it('does not autobox the content in strict mode', function () {
            var actual;

            utilx.Array.findIndex([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(required.isStrictMode() ? 'string' : 'object');
        });
    });
}());
