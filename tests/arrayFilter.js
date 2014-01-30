/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayFilter', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            filterArray = [
                0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {},
                true, false, utilx.privateUndefined,
                null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity
            ],
            testSubject,
            testIndex,
            filteredArray,
            callback;

        filterArray[24] = NaN;
        filterArray[25] = 'end';
        callback = function callback(o, i) {
            /*jslint unparam: true */
            /*jshint unused: true */
            return utilx.notStrictEqual(i, 3) && utilx.notStrictEqual(i, 5);
        };

        beforeEach(function () {
            testSubject = utilx.arraySlice(utilx.returnArgs(2, 3, utilx.privateUndefined, true, 'hej',
                                                            3, null, false, 0));
            delete testSubject[1];
            filteredArray = utilx.arraySlice(utilx.returnArgs(2, utilx.privateUndefined, 'hej', null, false, 0));
        });

        it('should not throw an error in each case', function () {
            expect(utilx.arrayFilter(filterArray, function (element, index, array) {
                expect(array).to.be(filterArray);
                expect(utilx.isNumber(index)).to.be.ok();
                expect(utilx.gte(index, 0)).to.be.ok();
                expect(utilx.lte(index, lastIndex)).to.be.ok();
                if (utilx.isNumber(element) && utilx.numberIsNaN(element)) {
                    expect(utilx.isNumber(filterArray[index]) && utilx.numberIsNaN(filterArray[index])).to.be.ok();
                } else {
                    expect(element).to.be(filterArray[index]);
                }

                testIndex = index;
                if (utilx.isString(element)) {
                    return element;
                }

                return utilx.privateUndefined;
            }).toString()).to.be(['a', 'b', 'c', 'end'].toString());

            expect(testIndex).to.be(filterArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.arrayFilter(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.arrayFilter(arr, function (a) {
                i += 1;
                if (utilx.lte(i, 4)) {
                    utilx.arrayPush(arr, a + 3);
                }

                return true;
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should skip non-set values', function () {
            var passedValues = {},
                expected = {
                    0: 1,
                    2: 3,
                    3: 4
                };

            testSubject = [1, 2, 3, 4];
            delete testSubject[1];
            utilx.arrayFilter(testSubject, function (o, i) {
                passedValues[i] = o;

                return true;
            });

            expect(passedValues).to.eql(expected);
        });

        it('should pass the right context to the filter', function () {
            var passedValues = {},
                expected = {
                    0: 1,
                    2: 3,
                    3: 4
                };

            testSubject = [1, 2, 3, 4];
            delete testSubject[1];
            utilx.arrayFilter(testSubject, function (o, i) {
                this[i] = o;

                return true;
            }, passedValues);

            expect(passedValues).to.eql(expected);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.arrayFilter([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should remove only the values for which the callback returns false', function () {
            expect(utilx.arrayFilter(testSubject, callback)).to.eql(filteredArray);
        });

        it('should leave the original array untouched', function () {
            var copy = utilx.arraySlice(testSubject);

            utilx.arrayFilter(testSubject, callback);
            expect(testSubject).to.eql(copy);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.arrayFilter('foo', function (item, index, list) {
                /*jslint unparam: true */
                /*jshint unused: true */
                actual = list;
            });

            expect(typeof actual).to.be('object');
            expect(utilx.toObjectString(actual)).to.be('[object String]');
            expect(actual.toString()).to.be('foo');
            expect(actual[0]).to.be('f');
        });

        /*
        it('should not be affected by same-index mutation', function () {
            var results = [1, 2, 3];

            utilx.arrayFilter(results, function (value, index, array) {
                array[index] = 'a';

                return true;
            });

            expect(results).to.eql([1, 2, 3]);
        });
        */
    });
}());
