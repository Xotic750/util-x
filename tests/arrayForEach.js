/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayForEach', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            forEachArray = [
                0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {},
                true, false, utilx.privateUndefined,
                null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity
            ],
            testSubject,
            expected = {
                0: 2,
                2: undefined,
                3: true,
                4: 'hej',
                5: null,
                6: false,
                7: 0
            },
            str = 'Hello, World!',
            testIndex;

        forEachArray[24] = NaN;
        forEachArray[25] = 'end';

        function createArrayLikeFromArray(arr) {
            var o = {};

            utilx.arrayForEach(arr, function (e, i) {
                o[i] = e;
            });

            o.length = arr.length;

            return o;
        }

        beforeEach(function () {
            testSubject = [2, 3, undefined, true, 'hej', null, false, 0];
            delete testSubject[1];
        });

        it('should not throw an error in each case', function () {
            expect(utilx.arrayForEach(forEachArray, function (element, index, array) {
                expect(array).to.be(forEachArray);
                expect(utilx.isNumber(index)).to.be.ok();
                expect(utilx.gte(index, 0)).to.be.ok();
                expect(utilx.lte(index, lastIndex)).to.be.ok();
                if (utilx.isNumber(element) && utilx.numberIsNaN(element)) {
                    expect(utilx.isNumber(forEachArray[index]) && utilx.numberIsNaN(forEachArray[index])).to.be(true);
                } else {
                    expect(element).to.be(forEachArray[index]);
                }

                testIndex = index;
            })).to.be(utilx.privateUndefined);

            expect(testIndex).to.be(forEachArray.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.arrayForEach(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.arrayForEach(arr, function (a) {
                i += 1;
                utilx.arrayPush(arr, a + 3);
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.arrayForEach([1], function () {
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

            utilx.arrayForEach(testSubject, function (obj, index) {
                actual[index] = obj;
            });

            /*global console */
            console.log('# actual: ' + utilx.objectKeys(actual));
            console.log('# expected: ' + utilx.objectKeys(expected));
            expect(actual).to.eql(expected);
        });

        it('should iterate all using a context', function () {
            var actual = {},
                o = {
                    a: actual
                };

            utilx.arrayForEach(testSubject, function (obj, index) {
                this.a[index] = obj;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should iterate all in an array-like object', function () {
            var actual = {},
                ts = createArrayLikeFromArray(testSubject);

            utilx.arrayForEach(ts, function (obj, index) {
                actual[index] = obj;
            });

            expect(actual).to.eql(expected);
        });

        it('should iterate all in an array-like object using a context', function () {
            var actual = {},
                ts = createArrayLikeFromArray(testSubject),
                o = {
                    a: actual
                };

            utilx.arrayForEach(ts, function (obj, index) {
                this.a[index] = obj;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should iterate all in a string', function () {
            var actual = [];

            utilx.arrayForEach(str, function (item, index) {
                utilx.arrayAssign(actual, index, item);
            });

            expect(actual).to.eql(utilx.stringSplit(str, ''));
        });

        it('should iterate all in a string using a context', function () {
            var actual = [],
                o = {
                    a: actual
                };

            utilx.arrayForEach(str, function (item, index) {
                utilx.arrayAssign(this.a, index, item);
            }, o);

            expect(actual).to.eql(utilx.stringSplit(str, ''));
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.arrayForEach('foo', function (item, index, list) {
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
