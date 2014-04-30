/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayEvery', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            someArray = [
                0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {},
                true, false, utilx.privateUndefined,
                null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity
            ],
            testSubject,
            testIndex,
            expected,
            numberOfRuns;

        function createArrayLikeFromArray(arr) {
            var o = {};

            utilx.arrayForEach(arr, function (e, i) {
                o[i] = e;
            });

            o.length = arr.length;

            return o;
        }

        beforeEach(function () {
            testSubject = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0, , 9];
            delete testSubject[1];
            numberOfRuns = 0;
            expected = {
                0: 2,
                2: utilx.privateUndefined,
                3: true
            };
        });

        someArray[24] = NaN;
        someArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arrayEvery(someArray, function (element, index, array) {
                expect(array).to.be(someArray);
                expect(utilx.isNumber(index)).to.be.ok();
                expect(utilx.gte(index, 0)).to.be.ok();
                expect(utilx.lte(index, lastIndex)).to.be.ok();
                if (utilx.isNumber(element) && utilx.numberIsNaN(element)) {
                    expect(utilx.isNumber(someArray[index]) && utilx.numberIsNaN(someArray[index])).to.be(true);
                } else {
                    expect(element).to.be(someArray[index]);
                }

                testIndex = index;
                if (utilx.strictEqual(element, 'end')) {
                    return false;
                }

                return true;
            })).to.be(false);

            expect(testIndex).to.be(someArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.arrayEvery(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.arrayEvery(arr, function (a) {
                i += 1;
                utilx.arrayPush(arr, a + 3);

                return utilx.lte(i, 3);
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.arrayEvery([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should return true if it runs to the end', function () {
            var actual = utilx.arrayEvery(testSubject, function () {
                return true;
            });

            expect(actual).to.be.ok();
        });

        it('should return false if it is stopped somewhere', function () {
            var actual = utilx.arrayEvery(testSubject, function () {
                return false;
            });

            expect(actual).to.not.be.ok();
        });

        it('should return true if there are no elements', function () {
            var actual = utilx.arrayEvery([], function () {
                return true;
            });

            expect(actual).to.be.ok();
        });

        it('should stop after 3 elements', function () {
            var actual = {};

            utilx.arrayEvery(testSubject, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return false;
                }

                return true;
            });

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements using a context', function () {
            var actual = {},
                o = {
                    a: actual
                };

            utilx.arrayEvery(testSubject, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return false;
                }

                return true;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object', function () {
            var ts = createArrayLikeFromArray(testSubject),
                actual = {};

            utilx.arrayEvery(ts, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return false;
                }

                return true;
            });

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object using a context', function () {
            var ts = createArrayLikeFromArray(testSubject),
                actual = {},
                o = {
                    a: actual
                };

            utilx.arrayEvery(ts, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return false;
                }

                return true;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.arrayEvery('foo', function (item, index, list) {
                /*jslint unparam: true */
                /*jshint unused: true */
                actual = list;
            });

            expect(typeof actual).to.be('object');
            expect(utilx.toObjectString(actual)).to.be('[object String]');
            expect(actual.toString()).to.be('foo');
            expect(actual[0]).to.be('f');
        });
    });
}());
