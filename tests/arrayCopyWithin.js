/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayCopyWithin', function () {
        it('works with 2 args', function () {
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 0, 3)).to.eql([4, 5, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 1, 3)).to.eql([1, 4, 5, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 1, 2)).to.eql([1, 3, 4, 5, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 2, 2)).to.eql([1, 2, 3, 4, 5]);
        });

        it('works with 3 args', function () {
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 0, 3, 4)).to.eql([4, 2, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 1, 3, 4)).to.eql([1, 4, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 1, 2, 4)).to.eql([1, 3, 4, 4, 5]);
        });

        it('works with negative args', function () {
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 0, -2)).to.eql([4, 5, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], 0, -2, -1)).to.eql([4, 2, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], -4, -3, -2)).to.eql([1, 3, 3, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], -4, -3, -1)).to.eql([1, 3, 4, 4, 5]);
            expect(utilx.arrayCopyWithin([1, 2, 3, 4, 5], -4, -3)).to.eql([1, 3, 4, 5, 5]);
        });

        it('works with arraylike objects', function () {
            var args = utilx.returnArgs(1, 2, 3);

            expect(utilx.isArguments(args)).to.be.ok();
            expect(utilx.arraySlice(args)).to.eql([1, 2, 3]);
            utilx.arrayCopyWithin(args, -2, 0);
            expect(utilx.arraySlice(args)).to.eql([1, 1, 2]);
            expect(utilx.isArguments(args)).to.be.ok();
        });

        it('should throw a TypeError in each case', function () {
            expect(function () {
                utilx.arrayCopyWithin(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayCopyWithin(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
