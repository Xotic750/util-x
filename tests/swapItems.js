/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('swapItems', function () {
        it('should throw a TypeError in each case', function () {
            /*
            expect(function () {
                utilx.swapItems();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.swapItems(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.swapItems(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.swapItems('');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.swapItems(1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.swapItems(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            */
        });

        it('should work with arrays', function () {
            var arr1 = [1, 2, 3],
                arr2 = [1, 2, 3],
                arr3 = [3, 2, 1],
                arr4 = [],
                arr5 = [1, 2];

            arr5.foo = 3;
            utilx.arrayAssign(arr4, 1, 2);
            utilx.arrayAssign(arr4, 2, 3);
            utilx.arrayAssign(arr4, 3, 1);
            expect(utilx.swapItems(arr1, 0, 2)).to.eql(arr3);
            expect(arr1.length).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.swapItems(arr1, 0, 3)).to.eql(arr4);
            expect(arr1.length).to.be(4);
            expect(utilx.swapItems(arr4, 0, 3)).to.eql(arr2);
            expect(arr4.length).to.be(3);
            arr1 = [1, 2, 3];
            arr2 = [1, 2, 3];
            arr3 = [3, 2, 1];
            arr4 = [];
            utilx.arrayAssign(arr4, 1, 2);
            utilx.arrayAssign(arr4, 2, 3);
            utilx.arrayAssign(arr4, 3, 1);
            expect(utilx.swapItems(arr1, '0', '2')).to.eql(arr3);
            expect(arr1.length).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.swapItems(arr1, '0', '3')).to.eql(arr4);
            expect(arr1.length).to.be(4);
            expect(utilx.swapItems(arr4, '0', '3')).to.eql(arr2);
            expect(arr4.length).to.be(3);
            expect(utilx.swapItems(arr2, 2, 'foo')).to.eql(arr5);
            expect(arr2.length).to.be(2);
            expect(arr2.foo).to.be(3);
            arr1 = [1, 2, 3];
            expect(utilx.swapItems(arr2, 2, 'foo')).to.eql(arr1);
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
            expect(utilx.swapItems(obj1, 0, 2)).to.eql(obj3);
            expect(obj1.length).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.swapItems(obj1, 0, 3)).to.eql(obj4);
            expect(obj1.length).to.be(4);
            expect(utilx.swapItems(obj4, 0, 3)).to.eql(obj2);
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
            expect(utilx.swapItems(obj1, '0', '2')).to.eql(obj3);
            expect(obj1.length).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.swapItems(obj1, '0', '3')).to.eql(obj4);
            expect(obj1.length).to.be(4);
            expect(utilx.swapItems(obj4, '0', '3')).to.eql(obj2);
            expect(obj4.length).to.be(3);
            expect(utilx.swapItems(obj2, 2, 'foo')).to.eql(obj5);
            expect(obj2.length).to.be(2);
            expect(obj2.foo).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };
            expect(utilx.swapItems(obj2, 2, 'foo')).to.eql(obj1);
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
            expect(utilx.swapItems(obj1, 0, 2)).to.eql(obj3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.swapItems(obj1, 0, 3)).to.eql(obj4);
            expect(utilx.swapItems(obj4, 0, 3)).to.eql(obj2);
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
            expect(utilx.swapItems(obj1, '0', '2')).to.eql(obj3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.swapItems(obj1, '0', '3')).to.eql(obj4);
            expect(utilx.swapItems(obj4, '0', '3')).to.eql(obj2);
            expect(utilx.swapItems(obj2, 2, 'foo')).to.eql(obj5);
            expect(obj2.foo).to.be(3);
            obj1 = {
                0: 1,
                1: 2,
                2: 3
            };
            expect(utilx.swapItems(obj2, 2, 'foo')).to.eql(obj1);
        });
    });
}());
