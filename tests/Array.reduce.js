/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.reduce', function () {
        var testSubject;

        beforeEach(function () {
            testSubject = [1, 2, 3];
        });

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.reduce();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.reduce(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.reduce(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if function argument is not a function', function () {
            expect(function () {
                utilx.Array.reduce([]);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.reduce([], undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.reduce([], null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should pass the right parameters', function () {
            var array = ['1'];

            utilx.Array.reduce(array, function (prev, item, index, list) {
                expect(prev).to.be('');
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            }, '');
        });

        it('should start with the right initialValue', function () {
            var array = ['1'];

            utilx.Array.reduce(array, function (prev, item, index, list) {
                expect(prev).to.be(10);
                expect(item).to.be('1');
                expect(index).to.be(0);
                expect(list).to.be(array);
            }, 10);
        });


        it('should not affect elements added to the array after it has begun', function () {
            var arr = [1, 2, 3],
                i = 0;

            utilx.Array.reduce(arr, function (a, b) {
                i += 1;
                if (utilx.Object.lte(i, 4)) {
                    utilx.Array.push(arr, a + 3);
                }

                return b;
            });

            expect(arr).to.eql([1, 2, 3, 4, 5]);
            expect(i).to.be(2);
        });

        it('should work as expected for empty arrays', function () {
            expect(function () {
                utilx.Array.reduce([], function () {
                    throw new Error('function should not be called!');
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should return the expected result', function () {
            expect(utilx.Array.reduce(testSubject, function (a, b) {
                return (a || '').toString() + (b || '').toString();
            })).to.eql(utilx.Array.join(testSubject, ''));
        });

        it('should not directly affect the passed array', function () {
            var copy = utilx.Array.slice(testSubject);

            utilx.Array.reduce(testSubject, function (a, b) {
                return a + b;
            });

            expect(testSubject).to.eql(copy);
        });

        it('should skip non-set values', function () {
            delete testSubject[1];
            var visited = {};

            utilx.Array.reduce(testSubject, function (a, b) {
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

            utilx.Array.reduce('foo', function (previous, item, index, list) {
                /*jslint unparam: true */
                /*jshint unused: true */
                actual = list;
            });

            expect(typeof actual).to.be('object');
            expect(utilx.Object.ToClassString(actual)).to.be('[object String]');
            expect(actual.toString()).to.be('foo');
            expect(actual[0]).to.be('f');
        });
    });
}());
