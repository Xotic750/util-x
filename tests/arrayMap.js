/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayMap', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            mapArray = [
                0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {},
                true, false, utilx.privateUndefined,
                null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity
            ],
            testSubject,
            testIndex,
            callback;

        mapArray[24] = NaN;
        mapArray[25] = 'end';

        beforeEach(function () {
            var i = -1;

            testSubject = [2, 3, undefined, true, 'hej', null, false, 0];
            delete testSubject[1];
            callback = function () {
                i += 1;

                return i;
            };
        });

        it('should not throw an error in each case', function () {
            expect(utilx.arrayMap(mapArray, function (element, index, array) {
                expect(array).to.be(mapArray);
                expect(utilx.isNumber(index)).to.be.ok();
                expect(utilx.gte(index, 0)).to.be.ok();
                expect(utilx.lte(index, lastIndex)).to.be.ok();
                if (utilx.isNumber(element) && utilx.numberIsNaN(element)) {
                    expect(utilx.isNumber(mapArray[index]) && utilx.numberIsNaN(mapArray[index])).to.be(true);
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

            utilx.arrayMap(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should set the context correctly', function () {
            var context = {};

            utilx.arrayMap(testSubject, function (o, i) {
                this[i] = o;
            }, context);

            expect(context).to.eql(testSubject);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.arrayMap([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should not change the array it is called on', function () {
            var copy = utilx.arraySlice(testSubject);

            utilx.arrayMap(testSubject, callback);
            expect(testSubject).to.eql(copy);
        });

        it('should only run for the number of objects in the array when it started', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.arrayMap(arr, function (o) {
                arr.push(o + 3);
                i += 1;

                return o;
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should properly translate the values as according to the callback', function () {
            var result = utilx.arrayMap(testSubject, callback),
                expected = [0, 0, 1, 2, 3, 4, 5, 6];

            delete expected[1];
            expect(result).to.eql(expected);
        });

        it('should skip non-existing values', function () {
            var array = [1, 2, 3, 4],
                i = 0;

            delete array[2];
            utilx.arrayMap(array, function () {
                i += 1;
            });

            expect(i).to.be(3);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.arrayMap('foo', function (item, index, list) {
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
