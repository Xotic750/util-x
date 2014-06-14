/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.deepEqual', function () {
        it('equal', function () {
            expect(utilx.Object.deepEqual({
                a: [2, 3],
                b: [4]
            }, {
                a: [2, 3],
                b: [4]
            })).to.be(true);

            expect(utilx.Object.deepEqual([
                undefined,
                null,
                -1,
                0,
                1,
                false,
                true,
                undefined,
                '',
                'abc',
                null,
                undefined
            ], [
                undefined,
                null,
                -1,
                0,
                1,
                false,
                true,
                undefined,
                '',
                'abc',
                null,
                undefined
            ])).to.be(true);

            expect(utilx.Object.deepEqual([{
                a: 3
            }, {
                b: 4
            }], [{
                a: '3'
            }, {
                b: '4'
            }])).to.be(true);

            expect(utilx.Object.deepEqual([], {})).to.be(true);
            expect(utilx.Object.deepEqual([6], ['6'])).to.be(true);
        });

        it('not equal', function () {
            expect(utilx.Object.deepEqual(NaN, NaN)).to.be(false);
            expect(utilx.Object.deepEqual({
                x: 5,
                y: [6]
            }, {
                x: 5,
                y: 6
            })).to.be(false);

            expect(utilx.Object.deepEqual([3], {valueOf: 3})).to.be(false);
        });

        it('nested nulls', function () {
            expect(utilx.Object.deepEqual([null, null, null], [null, null, null])).to.be(true);
        });

        it('non-objects', function () {
            expect(utilx.Object.deepEqual(3, 3)).to.be(true);
            expect(utilx.Object.deepEqual('beep', 'beep')).to.be(true);
            expect(utilx.Object.deepEqual('3', 3)).to.be(true);
            expect(utilx.Object.deepEqual('3', [3])).to.be(false);
            expect(utilx.Object.deepEqual(3, [3])).to.be(false);
            expect(utilx.Object.deepEqual(3, {valueOf: 3})).to.be(false);
        });

        it('arguments class', function () {
            var x = required.returnArgs(1, 2, 3),
                y = required.returnArgs(1, 2, 3);

            expect(utilx.Object.deepEqual(x, y)).to.be(true);
            expect(utilx.Object.deepEqual(x, [1, 2, 3])).to.be(false);
        });

        it('test the arguments shim', function () {
            expect(utilx.Object.isArguments(required.returnArgs())).to.be(true);
            expect(utilx.Object.isArguments([1, 2, 3])).to.be(false);
        });

        it('test the keys shim', function () {
            expect(utilx.Object.deepEqual(utilx.Object.keys({
                a: 1,
                b: 2
            }), ['a', 'b'])).to.be(true);
        });

        it('dates', function () {
            var d0 = new Date(1391297899000),
                d1 = new Date(Date.UTC(2014, 1, 1, 23, 38, 19));

            expect(utilx.Object.deepEqual(d0, d1)).to.be(true);
        });

        it('regexp', function () {
            var r0 = /test/gi,
                r1 = new RegExp('test', 'gi');

            expect(utilx.Object.deepEqual(r0, r1)).to.be(true);

            r0 = /test/g;
            r1 = new RegExp('test', 'gi');
            expect(utilx.Object.deepEqual(r0, r1)).to.be(false);
        });

        it('arrays', function () {
            var arrCmp = [
                    undefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    undefined,
                    '',
                    'abc',
                    null,
                    undefined
                ],
                arrCmp2 = [
                    undefined,
                    null,
                    -1,
                    0,
                    1,
                    false,
                    true,
                    undefined,
                    '',
                    'abc',
                    null,
                    undefined
                ];

            expect(utilx.Object.deepEqual(arrCmp, arrCmp2)).to.be(true);

            arrCmp = [];
            expect(utilx.Array.assign(arrCmp, 14)).to.be(0);
            expect(utilx.Array.assign(arrCmp, 14)).to.be(0);
            expect(utilx.Array.assign(arrCmp, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arrCmp, 0, undefined)).to.be(4);
            expect(utilx.Array.assign(arrCmp, 1, null)).to.be(4);
            expect(utilx.Array.assign(arrCmp, 2, -1)).to.be(4);
            expect(utilx.Array.assign(arrCmp, 3, 0)).to.be(4);
            expect(utilx.Array.assign(arrCmp, 4, 1)).to.be(5);
            expect(utilx.Array.assign(arrCmp, 5, false)).to.be(6);
            expect(utilx.Array.assign(arrCmp, 6, true)).to.be(7);
            expect(utilx.Array.assign(arrCmp, 12)).to.be(7);
            expect(utilx.Array.assign(arrCmp, 7, undefined)).to.be(8);
            expect(utilx.Array.assign(arrCmp, 8, '')).to.be(9);
            expect(utilx.Array.assign(arrCmp, 9, 'abc')).to.be(10);
            expect(utilx.Array.assign(arrCmp, 10, null)).to.be(11);
            expect(utilx.Array.assign(arrCmp, 11, undefined)).to.be(12);
            expect(utilx.Array.assign(arrCmp, 12)).to.be(12);
            expect(utilx.Array.assign(arrCmp, 13)).to.be(12);
            expect(utilx.Array.assign(arrCmp, 14)).to.be(12);
            expect(utilx.Object.deepEqual(arrCmp, arrCmp2)).to.be.ok();

            arrCmp = [];
            expect(utilx.Array.push(arrCmp, undefined)).to.be(1);
            expect(utilx.Array.push(arrCmp, null)).to.be(2);
            expect(utilx.Array.push(arrCmp, -1)).to.be(3);
            expect(utilx.Array.push(arrCmp, 0)).to.be(4);
            expect(utilx.Array.push(arrCmp, 1)).to.be(5);
            expect(utilx.Array.push(arrCmp, false)).to.be(6);
            expect(utilx.Array.push(arrCmp, true)).to.be(7);
            expect(utilx.Array.push(arrCmp)).to.be(7);
            expect(utilx.Array.push(arrCmp)).to.be(7);
            expect(utilx.Array.push(arrCmp)).to.be(7);
            expect(utilx.Array.push(arrCmp)).to.be(7);
            expect(utilx.Array.push(arrCmp, undefined)).to.be(8);
            expect(utilx.Array.push(arrCmp, '')).to.be(9);
            expect(utilx.Array.push(arrCmp, 'abc')).to.be(10);
            expect(utilx.Array.push(arrCmp, null)).to.be(11);
            expect(utilx.Array.push(arrCmp, undefined)).to.be(12);
            expect(utilx.Object.deepEqual(arrCmp, arrCmp2)).to.be.ok();
        });
    });
}());
