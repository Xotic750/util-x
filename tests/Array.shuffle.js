/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.shuffle', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Array.shuffle();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.shuffle(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.shuffle(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should work with arrays', function () {
            var arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9],
                arr2 = arr1.slice(),
                arr3 = [],
                arr4,
                arr5;

            arr3.length = 1;
            arr5 = arr1.slice();
            arr5.length = arr1.length + 1;

            utilx.Array.shuffle(arr2);
            expect(arr2.length).to.be(arr1.length);
            expect(arr2).to.not.eql(arr1);
            expect(arr2.sort()).to.eql(arr1);

            arr2 = arr1.slice();
            utilx.Array.shuffle(arr2, 5);
            expect(arr2.length).to.be(arr1.length);
            expect(arr2).to.not.eql(arr1);
            expect(arr2.sort()).to.eql(arr1);

            arr2 = arr1.slice();
            utilx.Array.shuffle(arr2, '5');
            expect(arr2.length).to.be(arr1.length);
            expect(arr2).to.not.eql(arr1);
            expect(arr2.sort()).to.eql(arr1);

            arr4 = arr3.concat(arr1.slice());
            utilx.Array.shuffle(arr4);
            expect(arr4.length).to.be(arr5.length);
            expect(arr4).to.not.eql(arr5);
            expect(arr4.sort()).to.eql(arr5);

            arr4 = arr3.concat(arr1.slice());
            utilx.Array.shuffle(arr4, '5');
            expect(arr4.length).to.be(arr5.length);
            expect(arr4).to.not.eql(arr5);
            expect(arr4.sort()).to.eql(arr5);
        });

        it('should work with strings', function () {
            var arr1 = '123456789',
                arr2 = '123456789',
                arr3 = '',
                result;

            expect(function () {
                result = utilx.Array.shuffle(arr1);
            }).to.not.throwException();
            expect(result.length).to.be(arr1.length);
            expect(result).to.not.be(arr1);
            expect(result.split('').sort().join('')).to.be(arr1);

            expect(function () {
                result = utilx.Array.shuffle(arr2, 5);
            }).to.not.throwException();
            expect(result.length).to.be(arr2.length);
            expect(result).to.not.be(arr2);
            expect(result.split('').sort().join('')).to.be(arr2);

            expect(function () {
                result = utilx.Array.shuffle(arr2, '5');
            }).to.not.throwException();
            expect(result.length).to.be(arr2.length);
            expect(result).to.not.be(arr2);
            expect(result.split('').sort().join('')).to.be(arr2);

            expect(function () {
                result = utilx.Array.shuffle(arr3);
            }).to.not.throwException();
            expect(result.length).to.be(arr3.length);

            expect(function () {
                result = utilx.Array.shuffle(arr3, '5');
            }).to.not.throwException();
            expect(result.length).to.be(arr3.length);
        });

        it('should work with objects with length', function () {
            var obj1 = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                },
                obj2 = {
                    0: 1,
                    1: 2,
                    2: 3,
                    length: 3
                },
                obj3 = {
                    1: 2,
                    2: 3,
                    3: 1,
                    length: 4
                };

            utilx.Array.shuffle(obj1);
            expect(obj1.length).to.be(3);

            utilx.Array.shuffle(obj2, 5);
            expect(obj2.length).to.be(3);

            utilx.Array.shuffle(obj2, '5');
            expect(obj2.length).to.be(3);

            utilx.Array.shuffle(obj3);
            expect(obj3.length).to.be(4);

            utilx.Array.shuffle(obj3, '5');
            expect(obj3.length).to.be(4);
        });

        it('should do nothing with objects without length', function () {
            var obj1 = {
                    0: 1,
                    1: 2,
                    2: 3
                },
                obj2 = {
                    0: 1,
                    1: 2,
                    2: 3
                },
                obj3 = {
                    1: 2,
                    2: 3,
                    3: 1
                };

            utilx.Array.shuffle(obj1);
            expect(obj1).to.eql({
                0: 1,
                1: 2,
                2: 3
            });
            expect(obj1.length).to.be(undefined);

            utilx.Array.shuffle(obj2, 5);
            expect(obj2).to.eql({
                0: 1,
                1: 2,
                2: 3
            });
            expect(obj2.length).to.be(undefined);

            utilx.Array.shuffle(obj2, '5');
            expect(obj2).to.eql({
                0: 1,
                1: 2,
                2: 3
            });
            expect(obj2.length).to.be(undefined);

            utilx.Array.shuffle(obj3);
            expect(obj3).to.eql({
                1: 2,
                2: 3,
                3: 1
            });
            expect(obj3.length).to.be(undefined);

            utilx.Array.shuffle(obj3, '5');
            expect(obj3).to.eql({
                1: 2,
                2: 3,
                3: 1
            });
            expect(obj3.length).to.be(undefined);
        });

        it('should do nothing with others', function () {
            var arr1 = 123456789,
                arr2 = required.noop,
                arr3 = true;

            arr1 = utilx.Array.shuffle(arr1);
            expect(arr1).to.be(arr1);

            arr2 = utilx.Array.shuffle(arr2, 5);
            expect(arr2).to.be(arr2);

            arr2 = utilx.Array.shuffle(arr2, '5');
            expect(arr2).to.be(arr2);

            arr3 = utilx.Array.shuffle(arr3);
            expect(arr3).to.be(arr3);

            arr3 = utilx.Array.shuffle(arr3, '5');
            expect(arr3).to.be(arr3);
        });

        it('should work with arguments', function () {
            var arr1 = required.returnArgs(1, 2, 3),
                arr2 = required.returnArgs(1, 2, 3),
                arr3 = required.returnArgs();

            utilx.Array.assign(arr3, 1, 2);
            utilx.Array.assign(arr3, 2, 3);
            utilx.Array.assign(arr3, 3, 1);

            utilx.Array.shuffle(arr1);
            expect(arr1.length).to.be(3);

            utilx.Array.shuffle(arr2, 5);
            expect(arr2.length).to.be(3);

            utilx.Array.shuffle(arr2, '5');
            expect(arr2.length).to.be(3);

            utilx.Array.shuffle(arr3);
            expect(arr3.length).to.be(4);

            utilx.Array.shuffle(arr3, '5');
            expect(arr3.length).to.be(4);
        });
    });
}());
