/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayPush', function () {
        var arr = [],
            arrCmp = [],
            arrCmp2 = [
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
            ];

        it('should not throw an error in each case', function () {
            expect(utilx.arrayPush(arr, null)).to.be(1);
            expect(utilx.arrayPush(arr, -1)).to.be(2);
            expect(utilx.arrayPush(arr, 0)).to.be(3);
            expect(utilx.arrayPush(arr, 1)).to.be(4);
            expect(utilx.arrayPush(arr, false)).to.be(5);
            expect(utilx.arrayPush(arr, true)).to.be(6);
            expect(utilx.arrayPush(arr)).to.be(6);
            expect(utilx.arrayPush(arr, utilx.privateUndefined)).to.be(7);
            expect(utilx.arrayPush(arr, '')).to.be(8);
            expect(utilx.arrayPush(arr, 'abc')).to.be(9);
        });

        it('11', function () {
            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            utilx.arrayPush(arrCmp, null);
            utilx.arrayPush(arrCmp, -1);
            utilx.arrayPush(arrCmp, 0);
            utilx.arrayPush(arrCmp, 1);
            utilx.arrayPush(arrCmp, false);
            utilx.arrayPush(arrCmp, true);
            utilx.arrayPush(arrCmp);
            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            utilx.arrayPush(arrCmp, '');
            utilx.arrayPush(arrCmp, 'abc');
            utilx.arrayPush(arrCmp, null);
            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            console.log('# ' + arrCmp.length + ' : ' + arrCmp2.length);
            for (var i = 0; i < arrCmp2.length; i += 1) {
                console.log('# ' + arrCmp[i] + ' : ' + arrCmp2[i]);
            }

            expect(arrCmp).to.eql(arrCmp2);
        });
    });
}());
