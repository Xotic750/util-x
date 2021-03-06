/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.sort', function () {
        var testArray,
            testArray1 = [],
            testArray2,
            n = 100,
            i;

        for (i = 0; i < n; i += 1) {
            utilx.Array.push(testArray1, utilx.String.padLeadingChar(utilx.Number.randomInt(n), '0', 3));
        }

        testArray2 = utilx.Array.slice(testArray1);

        function descending(left, right) {
            var leftS = utilx.String.ToString(left),
                rightS = utilx.String.ToString(right),
                val;

            if (leftS === rightS) {
                val = +0;
            } else if (utilx.Object.lt(leftS, rightS)) {
                val = 1;
            } else {
                val = -1;
            }

            return val;
        }

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Array.sort();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Array.sort(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Array.sort(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Array.sort(1);
            }).to.not.throwException();

            expect(function () {
                utilx.Array.sort('');
            }).to.not.throwException();

            expect(function () {
                utilx.Array.sort(true);
            }).to.not.throwException();
        });

        it('requires a function or undefined', function () {
            expect(function () {
                utilx.Array.sort([]);
            }).to.not.throwException();

            expect(function () {
                utilx.Array.sort([], undefined);
            }).to.not.throwException();

            expect(function () {
                utilx.Array.sort([], null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.sort([], 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.sort([], '');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.sort([], true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('sorting [5,2,4,6,1,3] ascending should result in [1,2,3,4,5,6]', function () {
            testArray = [5, 2, 4, 6, 1, 3];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([1, 2, 3, 4, 5, 6]);
        });

        it('sorting [5,2,2,6,1,3] ascending should result in [1,2,2,3,5,6]', function () {
            testArray = [5, 2, 2, 6, 1, 3];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([1, 2, 2, 3, 5, 6]);
        });

        it('sorting [0,0,0,0,0,1] ascending should result in [0,0,0,0,0,1]', function () {
            testArray = [0, 0, 0, 0, 0, 1];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([0, 0, 0, 0, 0, 1]);
        });

        it('sorting [0,0,0,0,0,-1] ascending should result in [-1,0,0,0,0,0]', function () {
            testArray = [0, 0, 0, 0, 0, -1];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([-1, 0, 0, 0, 0, 0]);
        });

        it('sorting [f,e,d,a,c,b] ascending should result in [a,b,c,d,e,f]', function () {
            testArray = ['f', 'e', 'd', 'a', 'c', 'b'];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
        });

        it('sorting [f,e,d,,,,a,c,b] ascending should result in [a,b,c,d,e,f,,,]', function () {
            testArray = ['f', 'e', 'd', 1, 2, 'a', 'c', 'b'];
            delete testArray[3];
            delete testArray[4];
            utilx.Array.sort(testArray);
            var expected = ['a', 'b', 'c', 'd', 'e', 'f'];
            expected.length = 8;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });

        it('sorting [f,e,d,,null,,a,c,b] ascending should result in [a,b,c,d,e,f,null,,,]', function () {
            testArray = ['f', 'e', 'd', 1, null, 2, 'a', 'c', 'b'];
            delete testArray[3];
            delete testArray[5];
            utilx.Array.sort(testArray);
            var expected = ['a', 'b', 'c', 'd', 'e', 'f', null];
            expected.length = 9;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });

        /*jslint maxlen: 125 */
        it('sorting [f,e,d,,null,undefined,a,c,b] ascending should result in [a,b,c,d,e,f,null,undefined,,]', function () {
            testArray = required.create('f', 'e', 'd', 1, null, undefined, 'a', 'c', 'b');
            delete testArray[3];
            utilx.Array.sort(testArray);
            var expected = required.create('a', 'b', 'c', 'd', 'e', 'f', null, undefined);
            expected.length = 9;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });
        /*jslint maxlen: 120 */

        it('sorting [] ascending should result in []', function () {
            testArray = [];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([]);
        });

        it('sorting [1] ascending should result in [1]', function () {
            testArray = [1];
            utilx.Array.sort(testArray);
            expect(testArray).to.eql([1]);
        });

        it('sorted ascending result should find only greater or equal values while ascending', function () {
            utilx.Array.sort(testArray1);
            for (i = 0; i < testArray1.length - 1; i += 1) {
                expect(testArray1[i] <= testArray1[i + 1]).to.be.ok();
            }
        });

        it('sorting [5,2,4,6,1,3] descending should result in [6,5,4,3,2,1]', function () {
            testArray = [5, 2, 4, 6, 1, 3];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([6, 5, 4, 3, 2, 1]);
        });

        it('sorting [5,2,2,6,1,3] descending should result in [6,5,4,2,2,1]', function () {
            testArray = [5, 2, 2, 6, 1, 3];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([6, 5, 3, 2, 2, 1]);
        });

        it('sorting [0,0,0,0,0,1] descending should result in [1,0,0,0,0,0]', function () {
            testArray = [0, 0, 0, 0, 0, 1];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([1, 0, 0, 0, 0, 0]);
        });

        it('sorting [0,0,0,0,0,-1] descending should result in [0,0,0,0,0,-1]', function () {
            testArray = [0, 0, 0, 0, 0, -1];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([0, 0, 0, 0, 0, -1]);
        });

        it('sorting [f,e,d,a,c,b] descending should result in [f,e,d,c,b,a]', function () {
            testArray = ['f', 'e', 'd', 'a', 'c', 'b'];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql(['f', 'e', 'd', 'c', 'b', 'a']);
        });

        it('sorting [f,e,d,,,a,c,b] descending should result in [f,e,d,c,b,a,,,]', function () {
            testArray = ['f', 'e', 'd', 1, 2, 'a', 'c', 'b'];
            delete testArray[3];
            delete testArray[4];
            utilx.Array.sort(testArray, descending);
            var expected = ['f', 'e', 'd', 'c', 'b', 'a'];
            expected.length = 8;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });

        it('sorting [f,e,d,,null,,a,c,b] descending should result in [null,f,e,d,c,b,a,,,]', function () {
            testArray = ['f', 'e', 'd', 1, null, 2, 'a', 'c', 'b'];
            delete testArray[3];
            delete testArray[5];
            utilx.Array.sort(testArray, descending);
            var expected = [null, 'f', 'e', 'd', 'c', 'b', 'a'];
            expected.length = 9;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });

        /*jslint maxlen: 125 */
        it('sorting [f,e,d,undefined,null,,a,c,b] descending should result in [null,f,e,d,c,b,a,undefined,,]', function () {
            testArray = required.create('f', 'e', 'd', undefined, null, 2, 'a', 'c', 'b');
            delete testArray[5];
            utilx.Array.sort(testArray, descending);
            var expected = required.create(null, 'f', 'e', 'd', 'c', 'b', 'a', undefined);
            expected.length = 9;
            expect(testArray.length).to.eql(expected.length);
            expect(testArray).to.eql(expected);
        });
        /*jslint maxlen: 120 */

        it('sorting [] descending should result in []', function () {
            testArray = [];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([]);
        });

        it('sorting [1] descending should result in [1]', function () {
            testArray = [1];
            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql([1]);
        });

        it('sorted descending result should find only lesser or equal values while descending', function () {
            utilx.Array.sort(testArray2, descending);
            for (i = 0; i < testArray2.length - 1; i += 1) {
                expect(testArray2[i] >= testArray2[i + 1]).to.be.ok();
            }
        });

        it('returned value should be source', function () {
            testArray = [1, 3, 2];
            expect(utilx.Array.sort(testArray)).to.be(testArray);
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

            utilx.Array.sort(testArray);
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

            utilx.Array.sort(testArray);
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

            utilx.Array.sort(testArray, descending);
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

            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql({
                0: 6,
                1: 5,
                2: 4,
                3: 3,
                4: 2,
                5: 1,
                length: 6
            });

            testArray = {
                0: 5,
                1: 2,
                2: 4,
                4: null,
                6: 1,
                7: 3,
                length: 8
            };

            utilx.Array.sort(testArray, descending);
            expect(testArray).to.eql({
                0: null,
                1: 5,
                2: 4,
                3: 3,
                4: 2,
                5: 1,
                length: 8
            });
        });
    });
}());
