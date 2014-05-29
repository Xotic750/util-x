/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.map', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            mapArray = [
                0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {},
                true, false, undefined,
                null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity
            ],
            testSubject,
            testIndex,
            callback;

        mapArray[24] = NaN;
        mapArray[25] = 'end';

        beforeEach(function () {
            var i = -1;

            testSubject = [2, 3, undefined, true, 'hej', null, false, 0, , 9];
            delete testSubject[1];
            callback = function () {
                i += 1;

                return i;
            };
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Array.map(mapArray, function (element, index, array) {
                expect(array).to.be(mapArray);
                expect(utilx.Number.isNumber(index)).to.be.ok();
                expect(utilx.Object.gte(index, 0)).to.be.ok();
                expect(utilx.Object.lte(index, lastIndex)).to.be.ok();
                if (utilx.Number.isNumber(element) && utilx.Number.isNaN(element)) {
                    expect(utilx.Number.isNumber(mapArray[index]) && utilx.Number.isNaN(mapArray[index])).to.be(true);
                } else {
                    expect(element).to.be(mapArray[index]);
                }

                testIndex = index;

                return element;
            }).toString()).to.be(mapArray.toString());

            expect(testIndex).to.be(mapArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.Array.map(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should set the context correctly', function () {
            var context = {};

            utilx.Array.map(testSubject, function (o, i) {
                this[i] = o;
            }, context);

            expect(context).to.eql(testSubject);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.Array.map([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should not change the array it is called on', function () {
            var copy = utilx.Array.slice(testSubject);

            utilx.Array.map(testSubject, callback);
            expect(testSubject).to.eql(copy);
        });

        it('should only run for the number of objects in the array when it started', function () {
            var arr = [1, 2, 3, , 5],
                i = 0;

            utilx.Array.map(arr, function (o) {
                arr.push(o + 3);
                i += 1;

                return o;
            });

            expect(arr).to.eql([1, 2, 3, , 5, 4, 5, 6, 8]);
            expect(i).to.be(4);
        });

        it('should properly translate the values as according to the callback', function () {
            var result = utilx.Array.map(testSubject, callback),
                expected = [0, 0, 1, 2, 3, 4, 5, 6, , 7];

            delete expected[1];
            expect(result).to.eql(expected);
        });

        it('should skip non-existing values', function () {
            var array = [1, 2, 3, 4, , 6],
                i = 0;

            delete array[2];
            utilx.Array.map(array, function () {
                i += 1;
            });

            expect(i).to.be(4);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.Array.map('foo', function (item, index, list) {
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
            var isStrictMode = (function () {
                    return !this;
                }()),
                actual;

            utilx.Array.map([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(isStrictMode ? 'string' : 'object');
        });
    });
}());
