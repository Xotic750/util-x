/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayPush', function () {
        it('should not throw an error in each case', function () {
            var arr = [];

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

        it('8', function () {
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
                ],
                i;

            expect(arrCmp.length).to.be(arrCmp2.length);
            for (i = 0; i < arrCmp2.length; i += 1) {
                expect(arrCmp[i]).to.be(arrCmp2[i]);
            }

            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be(true);
            //expect(arrCmp).to.eql(arrCmp2);
        });

        it('9', function () {
            var arrCmp = [],
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
                ],
                i;

            arrCmp.length = 12;
            arrCmp[0] = utilx.privateUndefined;
            arrCmp[1] = null;
            arrCmp[2] = -1;
            arrCmp[3] = 0;
            arrCmp[4] = 1;
            arrCmp[5] = false;
            arrCmp[6] = true;
            arrCmp[7] = utilx.privateUndefined;
            arrCmp[8] = '';
            arrCmp[9] = 'abc';
            arrCmp[10] = null;
            arrCmp[11] = utilx.privateUndefined;
            expect(arrCmp.length).to.be(arrCmp2.length);
            for (i = 0; i < arrCmp2.length; i += 1) {
                expect(arrCmp[i]).to.be(arrCmp2[i]);
            }

            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be(true);
            //expect(arrCmp).to.eql(arrCmp2);
        });

        it('10', function () {
            var arrCmp = [],
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
                ],
                i;

            arrCmp.push(utilx.privateUndefined);
            arrCmp.push(null);
            arrCmp.push(-1);
            arrCmp.push(0);
            arrCmp.push(1);
            arrCmp.push(false);
            arrCmp.push(true);
            arrCmp.push();
            arrCmp.push();
            arrCmp.push();
            arrCmp.push(utilx.privateUndefined);
            arrCmp.push('');
            arrCmp.push('abc');
            arrCmp.push(null);
            arrCmp.push(utilx.privateUndefined);
            expect(arrCmp.length).to.be(arrCmp2.length);
            for (i = 0; i < arrCmp2.length; i += 1) {
                expect(arrCmp[i]).to.be(arrCmp2[i]);
            }

            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be(true);
            //expect(arrCmp).to.eql(arrCmp2);
        });

        it('11', function () {
            var arrCmp = [],
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
                ],
                i;

            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            utilx.arrayPush(arrCmp, null);
            utilx.arrayPush(arrCmp, -1);
            utilx.arrayPush(arrCmp, 0);
            utilx.arrayPush(arrCmp, 1);
            utilx.arrayPush(arrCmp, false);
            utilx.arrayPush(arrCmp, true);
            utilx.arrayPush(arrCmp);
            utilx.arrayPush(arrCmp);
            utilx.arrayPush(arrCmp);
            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            utilx.arrayPush(arrCmp, '');
            utilx.arrayPush(arrCmp, 'abc');
            utilx.arrayPush(arrCmp, null);
            utilx.arrayPush(arrCmp, utilx.privateUndefined);
            expect(arrCmp.length).to.be(arrCmp2.length);
            for (i = 0; i < arrCmp2.length; i += 1) {
                expect(arrCmp[i]).to.be(arrCmp2[i]);
            }

            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be(true);
            //expect(arrCmp).to.eql(arrCmp2);
        });
    });
}());
