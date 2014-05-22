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
            var arr1 = [1, 2, 3],
                arr2 = [1, 2, 3],
                arr3 = [];

            utilx.Array.assign(arr3, 1, 2);
            utilx.Array.assign(arr3, 2, 3);
            utilx.Array.assign(arr3, 3, 1);

            utilx.Array.shuffle(arr1);
            expect(arr1.length).to.be(3);
            utilx.Array.shuffle(arr1);
            expect(arr1.length).to.be(3);

            utilx.Array.shuffle(arr2, 5);
            expect(arr2.length).to.be(3);
            utilx.Array.shuffle(arr2, 5);
            expect(arr2.length).to.be(3);
            utilx.Array.shuffle(arr2, '5');
            expect(arr2.length).to.be(3);
            utilx.Array.shuffle(arr2, '5');
            expect(arr2.length).to.be(3);

            utilx.Array.shuffle(arr3);
            expect(arr3.length).to.be(4);
            utilx.Array.shuffle(arr3, '5');
            expect(arr3.length).to.be(4);
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
            utilx.Array.shuffle(obj1);
            expect(obj1.length).to.be(3);

            utilx.Array.shuffle(obj2, 5);
            expect(obj2.length).to.be(3);
            utilx.Array.shuffle(obj2, 5);
            expect(obj2.length).to.be(3);
            utilx.Array.shuffle(obj2, '5');
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
    });
}());
