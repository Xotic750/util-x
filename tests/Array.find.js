/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.find', function () {
        var list = [5, 10, 15, 20];

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.find();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.find(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.find(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Array.find(list);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.find(list, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.find(list, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should find item by predicate', function () {
            var result = utilx.Array.find(list, function (item) {
                return item === 15;
            });

            expect(result).to.equal(15);
        });

        it('should return undefined when nothing matched', function () {
            var result = utilx.Array.find(list, function (item) {
                return item === 'a';
            });

            expect(result).to.equal(undefined);
        });

        it('should receive all three parameters', function () {
            var index = utilx.Array.find(list, function (value, index, arr) {
                expect(list[index]).to.equal(value);
                expect(list).to.eql(arr);

                return false;
            });

            expect(index).to.equal(undefined);
        });

        it('should work with the context argument', function () {
            var context = {};

            utilx.Array.find([1], function () {
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
                found = utilx.Array.find(obj, function (item) {
                    return item === 2;
                });

            expect(found).to.equal(2);
        });

        it('should work with an array-like object with negative length', function () {
            var obj = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: -3
                },
                found = utilx.Array.find(obj, function () {
                    throw new Error('should not reach here');
                });

            expect(found).to.equal(undefined);
        });

        it('should work with a sparse array', function () {
            var obj = required.create(1, 2, undefined),
                seen = [],
                found,
                expected = [];

            delete obj[1];
            found = utilx.Array.find(obj, function (item, idx) {
                if (utilx.Object.hasOwn(obj, idx)) {
                    utilx.Array.assign(seen, idx, required.create(idx, item));

                    return utilx.Object.isUndefined(item);
                }

                return false;
            });

            utilx.Array.assign(expected, 0, [0, 1]);
            utilx.Array.assign(expected, 2, required.create(2, undefined));
            expect(found).to.equal(undefined);
            expect(seen).to.eql(expected);
        });

        it('should work with a sparse array-like object', function () {
            var obj = {
                    0: 1,
                    2: undefined,
                    length: 3.2
                },
                seen = [],
                found = utilx.Array.find(obj, function (item, idx) {
                    if (utilx.Object.hasOwn(obj, idx)) {
                        utilx.Array.assign(seen, idx, required.create(idx, item));

                        return utilx.Object.isUndefined(item);
                    }

                    return false;
                }),
                expected = [];

            utilx.Array.assign(expected, 0, [0, 1]);
            utilx.Array.assign(expected, 2, required.create(2, undefined));
            expect(found).to.equal(undefined);
            expect(seen).to.eql(expected);
        });

        it('does not autobox the content in strict mode', function () {
            var actual;

            utilx.Array.find([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(required.isStrictMode() ? 'string' : 'object');
        });
    });
}());
