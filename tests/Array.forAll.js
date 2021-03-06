/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.forAll', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            forAll = required.create(0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, undefined, null,
                                  new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity),
            testSubject,
            testIndex,
            expected,
            numberOfRuns;

        beforeEach(function () {
            testSubject = required.create(2, 3, undefined, true, 'hej', null, false, 0, 8, 9);
            delete testSubject[1];
            delete testSubject[8];
            numberOfRuns = 0;
            expected = {
                0: 2,
                1: undefined,
                2: undefined
            };
        });

        utilx.Array.assign(forAll, 24, NaN);
        utilx.Array.assign(forAll, 25, 'end');

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.forAll();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.forAll(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.forAll(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Array.forAll(forAll);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.forAll(forAll, undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.forAll(forAll, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(utilx.Array.forAll(forAll, function (element, index, array) {
                expect(array).to.be(forAll);
                expect(utilx.Number.isNumber(index)).to.be.ok();
                expect(utilx.Object.gte(index, 0)).to.be.ok();
                expect(utilx.Object.lte(index, lastIndex)).to.be.ok();
                if (utilx.Number.isNumber(element) && utilx.Number.isNaN(element)) {
                    expect(utilx.Number.isNumber(forAll[index]) && utilx.Number.isNaN(forAll[index])).to.be(true);
                } else {
                    expect(element).to.be(forAll[index]);
                }

                testIndex = index;
                if (element === 'end') {
                    return true;
                }

                return false;
            })).to.be(true);

            expect(testIndex).to.be(forAll.length - 1);
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.Array.forAll(array, function (item, index, list) {
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            });
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.Array.forAll(arr, function (a) {
                i += 1;
                utilx.Array.push(arr, a + 3);

                return i === 3;
            });

            expect(arr).to.eql([1, 2, 3, 4, 5, 6]);
            expect(i).to.be(3);
        });

        it('should set the right context when given none', function () {
            var context;

            utilx.Array.forAll([1], function () {
                context = this;
            });

            expect(context).to.be((function () {
                return function () {
                    return this;
                };
            }()).call());
        });

        it('should return false if it runs to the end', function () {
            var actual = utilx.Array.forAll(testSubject, function () {
                return;
            });

            expect(actual).to.not.be.ok();
        });


        it('should not skip over holes', function () {
            var noHoles = {};

            utilx.Array.forAll(testSubject, function (item, idx) {
                noHoles[idx] = item;
                noHoles.length = idx + 1;
            }, noHoles);

            expect(noHoles).to.eql({
                0: 2,
                1: undefined,
                2: undefined,
                3: true,
                4: 'hej',
                5: null,
                6: false,
                7: 0,
                8: undefined,
                9: 9,
                length: 10
            });
        });

        it('should return true if it is stopped somewhere', function () {
            var actual = utilx.Array.forAll(testSubject, function () {
                return true;
            });

            expect(actual).to.be.ok();
        });

        it('should return false if there are no elements', function () {
            var actual = utilx.Array.forAll([], function () {
                return true;
            });

            expect(actual).to.not.be.ok();
        });

        it('should stop after 3 elements', function () {
            var actual = {};

            utilx.Array.forAll(testSubject, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (numberOfRuns === 3) {
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

            utilx.Array.forAll(testSubject, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (numberOfRuns === 3) {
                    return true;
                }

                return false;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object', function () {
            var ts = utilx.Array.toObject(testSubject),
                actual = {};

            utilx.Array.forAll(ts, function (obj, index) {
                actual[index] = obj;
                numberOfRuns += 1;
                if (numberOfRuns === 3) {
                    return true;
                }

                return false;
            });

            expect(actual).to.eql(expected);
        });

        it('should stop after 3 elements in an array-like object using a context', function () {
            var ts = utilx.Array.toObject(testSubject),
                actual = {},
                o = {
                    a: actual
                };

            utilx.Array.forAll(ts, function (obj, index) {
                this.a[index] = obj;
                numberOfRuns += 1;
                if (numberOfRuns === 3) {
                    return true;
                }

                return false;
            }, o);

            expect(actual).to.eql(expected);
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.Array.forAll('foo', function (item, index, list) {
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

            utilx.Array.forAll([1], function () {
                actual = this;
            }, 'x');

            expect(typeof actual).to.be(required.isStrictMode() ? 'string' : 'object');
        });
    });
}());
