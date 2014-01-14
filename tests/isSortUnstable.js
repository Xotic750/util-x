/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isSortUnstable', function () {
        var results = [];

        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.isSortUnstable(5, 2);
            }).to.not.throwException();

            expect(function () {
                utilx.isSortUnstable(5, 2, utilx.privateUndefined);
            }).to.not.throwException();

            expect(function () {
                utilx.isSortUnstable(5, 2, null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isSortUnstable(5, 2, 1);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isSortUnstable(5, 2, '');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.isSortUnstable(5, 2, true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('expect results to match', function () {
            function sortFN(a, b) {
                return a.u - b.u;
            }

            function isSortUnstable(count, bins) {
                var unstable = false,
                    iter,
                    array,
                    ii,
                    i,
                    u,
                    v;

                for (iter = 0; iter < 10; iter += 1) {
                    for (i = 0, array = []; utilx.lt(i, count); i += 1) {
                        utilx.arrayPush(array, {
                            u: Math.floor(Math.random() * bins),
                            i: i
                        });
                    }

                    array.sort(sortFN);

                    u = -1;
                    i = -1;
                    for (ii = 0, u = -1, i = -1; utilx.lt(ii, count); ii += 1) {
                        v = array[ii];
                        if (utilx.gt(v.u, u)) {
                            u = v.u;
                            i = -1;
                        } else if (utilx.gt(v.i, i)) {
                            i = v.i;
                        } else {
                            unstable = true;
                        }
                    }
                }

                return unstable;
            }

            utilx.arrayPush(results, utilx.isSortUnstable(5, 2));
            utilx.arrayPush(results, utilx.isSortUnstable(10, 2));
            utilx.arrayPush(results, utilx.isSortUnstable(11, 3));
            utilx.arrayPush(results, utilx.isSortUnstable(100, 3));
            utilx.arrayPush(results, utilx.isSortUnstable(1000, 3));
            utilx.arrayPush(results, utilx.isSortUnstable(10000, 4));
            expect(results[0]).to.be(isSortUnstable(5, 2));
            expect(results[1]).to.be(isSortUnstable(10, 2));
            expect(results[2]).to.be(isSortUnstable(11, 3));
            expect(results[3]).to.be(isSortUnstable(100, 3));
            expect(results[4]).to.be(isSortUnstable(1000, 3));
            expect(results[5]).to.be(isSortUnstable(10000, 4));
        });

        it('Report of native sort', function () {
            function toText(unstable) {
                var text;

                if (utilx.isTrue(unstable)) {
                    text = 'unstable';
                } else {
                    text = 'stable';
                }

                return text;
            }

            expect(function () {
                console.log('# Is native sort stable?');
                console.log('# 5 items: ' + toText(results[0]));
                console.log('# 10 items: ' + toText(results[1]));
                console.log('# 11 items: ' + toText(results[2]));
                console.log('# 100 items: ' + toText(results[3]));
                console.log('# 1000 items: ' + toText(results[4]));
                console.log('# 10000 items: ' + toText(results[5]));
            }).to.not.throwException();
        });
    });
}());
