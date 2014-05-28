/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.reduceRight', function () {
        function createArrayLikeFromArray(arr) {
            var o = {};

            utilx.Array.forEach(arr, function (e, i) {
                o[i] = e;
            });

            o.length = arr.length;

            return o;
        }

        var testSubject,
            testSubject2;

        beforeEach(function () {
            testSubject = [1, 2, 3];
            testSubject2 = createArrayLikeFromArray(testSubject);
        });

        it('should pass the correct arguments to the callback', function () {
            var array = ['1', '2', '3'],
                progress = ['321', '32', '3'],
                i = 2;

            utilx.Array.reduceRight(array, function (prev, item, index, list) {
                expect(item).to.be(array[index]);
                expect(index).to.be(i);
                i -= 1;
                expect(list).to.be(array);
                prev += item;
                expect(prev).to.be(progress[index]);

                return prev;
            }, '');
        });

        it('should start with the right initialValue', function () {
            utilx.Array.reduceRight(['1'], function (prev) {
                expect(prev).to.be(0);

                return prev;
            }, 0);
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.Array.reduceRight(arr, function (a, b) {
                i += 1;
                if (i <= 4) {
                    utilx.Array.push(arr, a + 3);
                }

                return b;
            });

            expect(arr).to.eql([1, 2, 3, 6, 5]);
            expect(i).to.be(2);
        });

        it('should work as expected for empty arrays', function () {
            var called = false;

            expect(function () {
                utilx.Array.reduceRight([], function () {
                    called = true;
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(called).to.not.be.ok();
        });

        it('should work as expected for empty arrays with an initial value', function () {
            var called = false,
                result = utilx.Array.reduceRight([], function (prev) {
                    called = true;

                    return prev;
                }, '');

            expect(called).to.not.be.ok();
            expect(result).to.be('');
        });

        it('should throw correctly if no callback is given', function () {
            expect(function () {
                utilx.Array.reduceRight(testSubject);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should return the expected result', function () {
            expect(utilx.Array.reduceRight(testSubject, function (a, b) {
                return utilx.String.ToString(a || '') + utilx.String.ToString(b || '');
            })).to.be('321');
        });

        it('should not directly affect the passed array', function () {
            var copy = utilx.Array.slice(testSubject);

            utilx.Array.reduceRight(testSubject, function (a, b) {
                return a + b;
            });

            expect(testSubject).to.eql(copy);
        });

        it('should skip non-set values', function () {
            delete testSubject[1];

            var visited = {};

            utilx.Array.reduceRight(testSubject, function (a, b) {
                if (a) {
                    visited[a] = true;
                }

                if (b) {
                    visited[b] = true;
                }

                return 0;
            });

            expect(visited).to.eql({
                1: true,
                3: true
            });
        });

        it('should pass the correct arguments to the callback', function () {
            var array = ['1', '2', '3'],
                progress = ['321', '32', '3'],
                i = 2;

            utilx.Array.reduceRight(array, function (prev, item, index, list) {
                expect(item).to.be(array[index]);
                expect(index).to.be(i);
                i -= 1;
                expect(list).to.be(array);
                prev += item;
                expect(prev).to.be(progress[index]);

                return prev;
            }, '');
        });

        it('should start with the right initialValue', function () {
            utilx.Array.reduceRight(['1'], function (prev) {
                expect(prev).to.be(0);

                return prev;
            }, 0);
        });

        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.Array.reduceRight(arr, function (a, b) {
                i += 1;
                if (i <= 4) {
                    utilx.Array.push(arr, a + 3);
                }

                return b;
            });

            expect(arr).to.eql([1, 2, 3, 6, 5]);
            expect(i).to.be(2);
        });

        it('should work as expected for empty arrays', function () {
            var called = false;

            expect(function () {
                utilx.Array.reduceRight([], function () {
                    called = true;
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(called).to.not.be.ok();
        });

        it('should work as expected for empty arrays with an initial value', function () {
            var called = false,
                result = utilx.Array.reduceRight([], function (prev) {
                    called = true;

                    return prev;
                }, '');

            expect(called).to.not.be.ok();
            expect(result).to.be('');
        });

        it('should throw correctly if no callback is given', function () {
            expect(function () {
                utilx.Array.reduceRight(testSubject2);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should return the expected result', function () {
            expect(utilx.Array.reduceRight(testSubject2, function (a, b) {
                return utilx.String.ToString(a || '') + utilx.String.ToString(b || '');
            })).to.be('321');
        });

        it('should not directly affect the passed array', function () {
            var copy = createArrayLikeFromArray(testSubject);

            utilx.Array.reduceRight(testSubject2, function (a, b) {
                return a + b;
            });

            expect(testSubject2).to.eql(copy);
        });

        it('should skip non-set values', function () {
            delete testSubject2[1];

            var visited = {};

            utilx.Array.reduceRight(testSubject2, function (a, b) {
                if (a) {
                    visited[a] = true;
                }

                if (b) {
                    visited[b] = true;
                }

                return 0;
            });

            expect(visited).to.eql({
                1: true,
                3: true
            });
        });

        it('should have a boxed object as list argument of callback', function () {
            var actual;

            utilx.Array.reduceRight('foo', function (accumulator, item, index, list) {
                /*jslint unparam: true */
                /*jshint unused: false */
                actual = list;
            });

            expect(typeof actual).to.be('object');
            expect(utilx.Object.ToClassString(actual)).to.be('[object String]');
        });
    });
}());
