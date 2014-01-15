/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySort', function () {
        var testArray,
            testArray1 = [],
            testArray2,
            n = 100,
            i;

        for (i = 0; i < n; i += 1) {
            utilx.arrayPush(testArray1, utilx.padLeadingChar(utilx.getRandomInt(n), '0', 3));
        }

        testArray2 = utilx.arraySlice(testArray1);

        function descending(left, right) {
            var leftS = utilx.anyToString(left),
                rightS = utilx.anyToString(right),
                val;

            if (utilx.strictEqual(leftS, rightS)) {
                val = +0;
            } else if (utilx.lt(leftS, rightS)) {
                val = 1;
            } else {
                val = -1;
            }

            return val;
        }

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.arraySort();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort(1);
            }).to.not.throwException();

            expect(function () {
                utilx.arraySort('');
            }).to.not.throwException();

            expect(function () {
                utilx.arraySort(true);
            }).to.not.throwException();
        });

        it('requires a function or undefined', function () {
            expect(function () {
                utilx.arraySort([]);
            }).to.not.throwException();

            expect(function () {
                utilx.arraySort([], utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                utilx.arraySort([], null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort([], 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort([], '');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arraySort([], true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('sorting [5,2,4,6,1,3] ascending should result in [1,2,3,4,5,6]', function () {
            testArray = [5, 2, 4, 6, 1, 3];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([1, 2, 3, 4, 5, 6]);
        });

        it('sorting [5,2,2,6,1,3] ascending should result in [1,2,2,3,5,6]', function () {
            testArray = [5, 2, 2, 6, 1, 3];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([1, 2, 2, 3, 5, 6]);
        });

        it('sorting [0,0,0,0,0,1] ascending should result in [0,0,0,0,0,1]', function () {
            testArray = [0, 0, 0, 0, 0, 1];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([0, 0, 0, 0, 0, 1]);
        });

        it('sorting [0,0,0,0,0,-1] ascending should result in [-1,0,0,0,0,0]', function () {
            testArray = [0, 0, 0, 0, 0, -1];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([-1, 0, 0, 0, 0, 0]);
        });

        it('sorting [f,e,d,a,c,b] ascending should result in [a,b,c,d,e,f]', function () {
            testArray = ['f', 'e', 'd', 'a', 'c', 'b'];
            utilx.arraySort(testArray);
            expect(testArray).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
        });

        it('sorting [] ascending should result in []', function () {
            testArray = [];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([]);
        });

        it('sorting [1] ascending should result in [1]', function () {
            testArray = [1];
            utilx.arraySort(testArray);
            expect(testArray).to.eql([1]);
        });

        it('sorted ascending result should find only greater or equal values while ascending', function () {
            utilx.arraySort(testArray1);
            for (i = 0; i < testArray1.length - 1; i += 1) {
                expect(testArray1[i] <= testArray1[i + 1]).to.be.ok();
            }
        });

        it('sorting [5,2,4,6,1,3] descending should result in [6,5,4,3,2,1]', function () {
            testArray = [5, 2, 4, 6, 1, 3];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([6, 5, 4, 3, 2, 1]);
        });

        it('sorting [5,2,2,6,1,3] descending should result in [6,5,4,2,2,1]', function () {
            testArray = [5, 2, 2, 6, 1, 3];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([6, 5, 3, 2, 2, 1]);
        });

        it('sorting [0,0,0,0,0,1] descending should result in [1,0,0,0,0,0]', function () {
            testArray = [0, 0, 0, 0, 0, 1];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([1, 0, 0, 0, 0, 0]);
        });

        it('sorting [0,0,0,0,0,-1] descending should result in [0,0,0,0,0,-1]', function () {
            testArray = [0, 0, 0, 0, 0, -1];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([0, 0, 0, 0, 0, -1]);
        });

        it('sorting [f,e,d,a,c,b] descending should result in [f,e,d,c,b,a]', function () {
            testArray = ['f', 'e', 'd', 'a', 'c', 'b'];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql(['f', 'e', 'd', 'c', 'b', 'a']);
        });

        it('sorting [] descending should result in []', function () {
            testArray = [];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([]);
        });

        it('sorting [1] descending should result in [1]', function () {
            testArray = [1];
            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql([1]);
        });

        it('sorted descending result should find only lesser or equal values while descending', function () {
            utilx.arraySort(testArray2, descending);
            for (i = 0; i < testArray2.length - 1; i += 1) {
                expect(testArray2[i] >= testArray2[i + 1]).to.be.ok();
            }
        });

        it('sorting should work with objects', function () {
            testArray = {
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3
            };

            utilx.arraySort(testArray);
            expect(testArray).to.eql({
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3
            });

            testArray = {
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3,
                length: 6
            };

            utilx.arraySort(testArray);
            expect(testArray).to.eql({
                0: 1,
                1: 2,
                2: 3,
                3: 4,
                4: 5,
                5: 6,
                length: 6
            });

            testArray = {
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3
            };

            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql({
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3
            });

            testArray = {
                0: 5,
                1: 2,
                2: 4,
                3: 6,
                4: 1,
                5: 3,
                length: 6
            };

            utilx.arraySort(testArray, descending);
            expect(testArray).to.eql({
                0: 6,
                1: 5,
                2: 4,
                3: 3,
                4: 2,
                5: 1,
                length: 6
            });
        });
    });
}());
