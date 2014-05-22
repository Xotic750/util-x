/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.swapItems', function () {
        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Object.swapItems();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.swapItems(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.swapItems(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.swapItems('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.swapItems(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.swapItems(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should do nothing in each case', function () {
            expect(utilx.Object.swapItems([1, 2, 3])).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], undefined)).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], null)).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], undefined, undefined)).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], null, null)).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], 1, 1, undefined)).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], '2', '2')).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], 'foo', 'foo')).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems([1, 2, 3], 'foo', 'bar')).to.eql([1, 2, 3]);
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            })).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, undefined)).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, null)).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, undefined, undefined)).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, null, null)).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, 1, 1)).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, '1', '1')).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, 'foo', 'foo')).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
            expect(utilx.Object.swapItems({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            }, 'foo', 'bar')).to.eql({
                0: 1,
                1: 2,
                2: 3,
                length: 3
            });
        });

        it('should work with arrays', function () {
            var arr1 = [1, 2, 3],
                arr2 = [1, 2, 3],
                arr3 = [3, 2, 1],
                arr4 = [],
                arr5 = [1, 2];

            arr5.foo = 3;
            utilx.Array.assign(arr4, 1, 2);
            utilx.Array.assign(arr4, 2, 3);
            utilx.Array.assign(arr4, 3, 1);
            expect(utilx.Object.swapItems(arr1, 0, 2)).to.eql(arr3);
            expect(arr1.length).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.Object.swapItems(arr1, 0, 3)).to.eql(arr4);
            expect(arr1.length).to.be(4);
            expect(utilx.Object.swapItems(arr4, 0, 3)).to.eql(arr2);
            expect(arr4.length).to.be(3);
            arr1 = [1, 2, 3];
            arr2 = [1, 2, 3];
            arr3 = [3, 2, 1];
            arr4 = [];
            utilx.Array.assign(arr4, 1, 2);
            utilx.Array.assign(arr4, 2, 3);
            utilx.Array.assign(arr4, 3, 1);
            expect(utilx.Object.swapItems(arr1, '0', '2')).to.eql(arr3);
            expect(arr1.length).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.Object.swapItems(arr1, '0', '3')).to.eql(arr4);
            expect(arr1.length).to.be(4);
            expect(utilx.Object.swapItems(arr4, '0', '3')).to.eql(arr2);
            expect(arr4.length).to.be(3);
            expect(utilx.Object.swapItems(arr2, 2, 'foo')).to.eql(arr5);
            expect(arr2.length).to.be(2);
            expect(arr2.foo).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.Object.swapItems(arr2, 2, 'foo')).to.eql(arr1);
            expect(arr2.length).to.be(3);
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
                    0: 3,
                    1: 2,
                    2: 1,
                    length: 3
                },
                obj4 = {
                    1: 2,
                    2: 3,
                    3: 1,
                    length: 4
                },
                obj5 = {
                    0: 1,
                    1: 2,
                    length: 2
                };

            obj5.foo = 3;
            expect(utilx.Object.swapItems(obj1, 0, 2)).to.eql(obj3);
            expect(obj1.length).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.Object.swapItems(obj1, 0, 3)).to.eql(obj4);
            expect(obj1.length).to.be(4);
            expect(utilx.Object.swapItems(obj4, 0, 3)).to.eql(obj2);
            expect(obj4.length).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            obj2 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            obj3 = {
                0: 3,
                1: 2,
                2: 1,
                length: 3
            };
            obj4 = {
                1: 2,
                2: 3,
                3: 1,
                length: 4
            };
            expect(utilx.Object.swapItems(obj1, '0', '2')).to.eql(obj3);
            expect(obj1.length).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.Object.swapItems(obj1, '0', '3')).to.eql(obj4);
            expect(obj1.length).to.be(4);
            expect(utilx.Object.swapItems(obj4, '0', '3')).to.eql(obj2);
            expect(obj4.length).to.be(3);
            expect(utilx.Object.swapItems(obj2, 2, 'foo')).to.eql(obj5);
            expect(obj2.length).to.be(2);
            expect(obj2.foo).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.Object.swapItems(obj2, 2, 'foo')).to.eql(obj1);
            expect(obj2.length).to.be(3);
        });

        it('should work with objects without length', function () {
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
                    0: 3,
                    1: 2,
                    2: 1
                },
                obj4 = {
                    1: 2,
                    2: 3,
                    3: 1
                },
                obj5 = {
                    0: 1,
                    1: 2
                };

            obj5.foo = 3;
            expect(utilx.Object.swapItems(obj1, 0, 2)).to.eql(obj3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.Object.swapItems(obj1, 0, 3)).to.eql(obj4);
            expect(utilx.Object.swapItems(obj4, 0, 3)).to.eql(obj2);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            obj2 = {
                0: 1,
                1: 2,
                2: 3
            };
            obj3 = {
                0: 3,
                1: 2,
                2: 1
            };
            obj4 = {
                1: 2,
                2: 3,
                3: 1
            };
            expect(utilx.Object.swapItems(obj1, '0', '2')).to.eql(obj3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.Object.swapItems(obj1, '0', '3')).to.eql(obj4);
            expect(utilx.Object.swapItems(obj4, '0', '3')).to.eql(obj2);
            expect(utilx.Object.swapItems(obj2, 2, 'foo')).to.eql(obj5);
            expect(obj2.foo).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.Object.swapItems(obj2, 2, 'foo')).to.eql(obj1);
        });
    });
}());
