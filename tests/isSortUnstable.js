/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('isSortUnstable', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.isSortUnstable(5, 2, utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

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
            function isSortUnstable(count, bins) {
                var unstable = false,
                    iter,
                    array,
                    ii,
                    i,
                    u,
                    v;

                function sortFN(a, b) {
                    return a.u - b.u;
                }

                for (iter = 0; iter < 10; iter += 1) {
                    array = [];
                    for (i = 0; i < count; i += 1) {
                        array.push({
                            u: Math.floor(Math.random() * bins),
                            i: i
                        });
                    }

                    array.sort(sortFN);

                    u = -1;
                    i = -1;
                    for (ii = 0; ii < count; ii += 1) {
                        v = array[ii];
                        if (v.u > u) {
                            u = v.u;
                            i = -1;
                        } else if (v.i > i) {
                            i = v.i;
                        } else {
                            unstable = true;
                        }
                    }
                }

                return unstable;
            }

            expect(utilx.isSortUnstable(5, 2)).to.be(isSortUnstable(5, 2));
            expect(utilx.isSortUnstable(10, 2)).to.be(isSortUnstable(10, 2));
            expect(utilx.isSortUnstable(11, 3)).to.be(isSortUnstable(11, 3));
            expect(utilx.isSortUnstable(100, 3)).to.be(isSortUnstable(100, 3));
            expect(utilx.isSortUnstable(1000, 3)).to.be(isSortUnstable(1000, 3));
            expect(utilx.isSortUnstable(10000, 4)).to.be(isSortUnstable(10000, 4));
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
                console.log('# 5 items: ' + toText(utilx.isSortUnstable(5, 2)));
                console.log('# 10 items: ' + toText(utilx.isSortUnstable(10, 2)));
                console.log('# 11 items: ' + toText(utilx.isSortUnstable(11, 3)));
                console.log('# 100 items: ' + toText(utilx.isSortUnstable(100, 3)));
                console.log('# 1000 items: ' + toText(utilx.isSortUnstable(1000, 3)));
                console.log('# 10000 items: ' + toText(utilx.isSortUnstable(10000, 4)));
            }).to.not.throwException();
        });
    });
}());
