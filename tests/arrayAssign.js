/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayAssign', function () {
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

            expect(utilx.arrayAssign(arr, 0, utilx.privateUndefined)).to.be(1);
            expect(utilx.arrayAssign(arr, 1, null)).to.be(2);
            expect(utilx.arrayAssign(arr, 2, -1)).to.be(3);
            expect(utilx.arrayAssign(arr, 3, 0)).to.be(4);
            expect(utilx.arrayAssign(arr, 4, 1)).to.be(5);
            expect(utilx.arrayAssign(arr, 5, false)).to.be(6);
            expect(utilx.arrayAssign(arr, 6, true)).to.be(7);
            expect(utilx.arrayAssign(arr, 20)).to.be(7);
            expect(utilx.arrayAssign(arr, 21)).to.be(7);
            expect(utilx.arrayAssign(arr, 22)).to.be(7);
            expect(utilx.arrayAssign(arr, 23)).to.be(7);
            expect(utilx.arrayAssign(arr, 11, utilx.privateUndefined)).to.be(12);
            expect(utilx.arrayAssign(arr, 7, utilx.privateUndefined)).to.be(12);
            expect(utilx.arrayAssign(arr, 8, '')).to.be(12);
            expect(utilx.arrayAssign(arr, 9, 'abc')).to.be(12);
            expect(utilx.arrayAssign(arr, 10, null)).to.be(12);
            expect(arr.length).to.be(arrCmp.length);
            for (i = 0; i < arr.length; i += 1) {
                expect(arr[i]).to.be(arrCmp[i]);
            }

            expect(utilx.deepEqual(arr, arrCmp)).to.be.ok();
        });
    });
}());
