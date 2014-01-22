/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySome', function () {
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
            testSubject = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0];
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
            expect(utilx.arraySome(someArray, function (element, index, array) {
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
                    return true;
                }

                return false;
            })).to.be(true);

            expect(testIndex).to.be(someArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.arraySome(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.arraySome(arr, function (a) {
                i += 1;
                utilx.arrayPush(arr, a + 3);

                return utilx.gt(i, 3);
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.arraySome([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should return false if it runs to the end', function () {
            var actual = utilx.arraySome(testSubject, function () {
                return;
            });

            expect(actual).to.not.be.ok();
        });

        it('should return true if it is stopped somewhere', function () {
            var actual = utilx.arraySome(testSubject, function () {
                return true;
            });

            expect(actual).to.be.ok();
        });

        it('should return false if there are no elements', function () {
            var actual = utilx.arraySome([], function () {
                return true;
            });

            expect(actual).to.not.be.ok();
        });

        it('should stop after 3 elements', function () {
            var actual = {};

            utilx.arraySome(testSubject, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return true;
                }

                return false;
            });

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements using a context', function () {
            var actual = {},
                o = {
                    a: actual
                };

            utilx.arraySome(testSubject, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return true;
                }

                return false;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object', function () {
            var ts = createArrayLikeFromArray(testSubject),
                actual = {};

            utilx.arraySome(ts, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return true;
                }

                return false;
            });

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object using a context', function () {
            var ts = createArrayLikeFromArray(testSubject),
                actual = {},
                o = {
                    a: actual
                };

            utilx.arraySome(ts, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (utilx.strictEqual(numberOfRuns, 3)) {
                    return true;
                }

                return false;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.arraySome('foo', function (item, index, list) {
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
