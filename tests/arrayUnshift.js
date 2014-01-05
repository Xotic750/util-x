/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayUnshift', function () {
        it('should not throw an error in each case', function () {
            var arrCmp = [
                    utilx.privateUndefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    utilx.privateUndefined,
                    '',
                    'abc',
                    null,
                    utilx.privateUndefined
                ],
                arr = [],
                i;

            expect(utilx.arrayUnshift(arr, utilx.privateUndefined)).to.be(1);
            expect(utilx.arrayUnshift(arr, null)).to.be(2);
            expect(utilx.arrayUnshift(arr, 'abc')).to.be(3);
            expect(utilx.arrayUnshift(arr, '')).to.be(4);
            expect(utilx.arrayUnshift(arr, utilx.privateUndefined)).to.be(5);
            expect(utilx.arrayUnshift(arr)).to.be(5);
            expect(utilx.arrayUnshift(arr)).to.be(5);
            expect(utilx.arrayUnshift(arr)).to.be(5);
            expect(utilx.arrayUnshift(arr)).to.be(5);
            expect(utilx.arrayUnshift(arr, true)).to.be(6);
            expect(utilx.arrayUnshift(arr, false)).to.be(7);
            expect(utilx.arrayUnshift(arr, 1)).to.be(8);
            expect(utilx.arrayUnshift(arr, 0)).to.be(9);
            expect(utilx.arrayUnshift(arr, -1)).to.be(10);
            expect(utilx.arrayUnshift(arr, null)).to.be(11);
            expect(utilx.arrayUnshift(arr, utilx.privateUndefined)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.deepEqual(arr, arrCmp)).to.be(true);
        });
    });
}());
