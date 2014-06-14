/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.forEach', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            forEachArray = required.create(0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, undefined, null,
                                  new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity),
            testSubject,
            expected,
            str = 'Hello, World!',
            testIndex;

        utilx.Array.assign(forEachArray, 24, NaN);
        utilx.Array.assign(forEachArray, 25, 'end');

        beforeEach(function () {
            testSubject = required.create(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            delete testSubject[1];
            delete testSubject[8];
            expected = utilx.Array.toObject(testSubject);
        });

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.forEach();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.forEach(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.forEach(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Array.forEach(forEachArray);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.forEach(forEachArray, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.forEach(forEachArray, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Array.forEach(forEachArray, function (element, index, array) {
                expect(array).to.be(forEachArray);
                expect(utilx.Number.isNumber(index)).to.be.ok();
                expect(utilx.Object.gte(index, 0)).to.be.ok();
                expect(utilx.Object.lte(index, lastIndex)).to.be.ok();
                if (utilx.Number.isNumber(element) && utilx.Number.isNaN(element)) {
                    expect(utilx.Number.isNumber(forEachArray[index]) &&
                           utilx.Number.isNaN(forEachArray[index])).to.be(true);
                } else {
                    expect(element).to.be(forEachArray[index]);
                }

                testIndex = index;
            })).to.be(undefined);

            expect(testIndex).to.be(forEachArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.Array.forEach(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.Array.forEach(arr, function (a) {
                i += 1;
                utilx.Array.push(arr, a + 3);
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.Array.forEach([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should iterate all', function () {
            var actual = {};

            utilx.Array.forEach(testSubject, function (obj, index) {
                actual[index] = obj;
                actual.length = index + 1;
            });

            expect(actual).to.eql(expected);
        });

        it('should iterate all using a context', function () {
            var actual = {},
                o = {
                    a: actual
                };

            utilx.Array.forEach(testSubject, function (obj, index) {
                this.a[index] = obj;
                this.a.length = index + 1;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should iterate arguments object', function () {
            var actual = {};

            utilx.Array.forEach(required.returnArgs(1, undefined, null, 2, 3), function (obj, index) {
                actual[index] = obj;
            });

            expect(actual).to.eql({
                0: 1,
                1: undefined,
                2: null,
                3: 2,
                4: 3
            });
        });

        it('should iterate all in an array-like object', function () {
            var actual = {},
                ts = utilx.Array.toObject(testSubject);

            utilx.Array.forEach(ts, function (obj, index) {
                actual[index] = obj;
                actual.length = index + 1;
            });

            expect(actual).to.eql(expected);
        });

        it('should iterate all in an array-like object using a context', function () {
            var actual = {},
                ts = utilx.Array.toObject(testSubject),
                o = {
                    a: actual
                };

            utilx.Array.forEach(ts, function (obj, index) {
                this.a[index] = obj;
                this.a.length = index + 1;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should iterate all in a string', function () {
            var actual = [];

            utilx.Array.forEach(str, function (item, index) {
                utilx.Array.assign(actual, index, item);
            });

            expect(actual).to.eql(utilx.String.split(str, ''));
        });

        it('should iterate all in a string using a context', function () {
            var actual = [],
                o = {
                    a: actual
                };

            utilx.Array.forEach(str, function (item, index) {
                utilx.Array.assign(this.a, index, item);
            }, o);

            expect(actual).to.eql(utilx.String.split(str, ''));
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.Array.forEach('foo', function (item, index, list) {
                /*jslint unparam: true */
                /*jshint unused: true */
                actual = list;
            });

            expect(typeof actual).to.be('object');
            expect(utilx.Object.ToClassString(actual)).to.be('[object String]');
            expect(actual.toString()).to.be('foo');
            expect(actual[0]).to.be('f');
        });

        it('does not autobox the content in strict mode', function () {
            var actual;

            utilx.Array.forEach([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(required.isStrictMode() ? 'string' : 'object');
        });
    });
}());
