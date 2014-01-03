/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('deepEqual', function () {
        it('equal', function () {
            expect(utilx.deepEqual({
                a: [2, 3],
                b: [4]
            }, {
                a: [2, 3],
                b: [4]
            })).to.be.ok();

            expect([
                utilx.privateUndefined,
                null, -1,
                0,
                1,
                false,
                true,
                utilx.privateUndefined,
                '',
                'abc',
                null,
                utilx.privateUndefined
            ], [
                utilx.privateUndefined,
                null, -1,
                0,
                1,
                false,
                true,
                utilx.privateUndefined,
                '',
                'abc',
                null,
                utilx.privateUndefined
            ]).to.be.ok();
        });

        it('not equal', function () {
            expect(utilx.deepEqual({
                x: 5,
                y: [6]
            }, {
                x: 5,
                y: 6
            })).to.not.be.ok();
        });

        it('nested nulls', function () {
            expect(utilx.deepEqual([null, null, null], [null, null, null])).to.be.ok();
        });

        it('strict equal', function () {
            expect(utilx.deepEqual([{
                a: 3
            }, {
                b: 4
            }], [{
                a: '3'
            }, {
                b: '4'
            }], {
                strict: true
            })).to.not.be.ok();

            expect(utilx.deepStrictEqual([{
                a: 3
            }, {
                b: 4
            }], [{
                a: '3'
            }, {
                b: '4'
            }])).to.not.be.ok();
        });

        it('non-objects', function () {
            expect(utilx.deepEqual(3, 3)).to.be.ok();
            expect(utilx.deepEqual('beep', 'beep')).to.be.ok();
            expect(utilx.deepEqual('3', 3)).to.be.ok();

            expect(utilx.deepEqual('3', 3, {
                strict: true
            })).to.not.be.ok();

            expect(utilx.deepEqual('3', [3])).to.not.be.ok();
        });

        it('arguments class', function () {
            expect(utilx.deepEqual((function () {
                return arguments;
            }(1, 2, 3)), (function () {
                return arguments;
            }(1, 2, 3)))).to.be.ok();

            expect(utilx.deepEqual((function () {
                return arguments;
            }(1, 2, 3)), [1, 2, 3])).to.not.be.ok();
        });

        it('test the arguments shim', function () {
            expect(utilx.isArguments((function () {
                return arguments;
            }()))).to.be.ok();

            expect(utilx.isArguments([1, 2, 3])).to.not.be.ok();

            expect(utilx.isArguments((function () {
                return arguments;
            }()))).to.be.ok();

            expect(utilx.isArguments([1, 2, 3])).to.not.be.ok();
        });

        it('test the keys shim', function () {
            expect(utilx.deepEqual(utilx.objectKeys({
                a: 1,
                b: 2
            }), ['a', 'b'])).to.be.ok();
        });

        it('dates', function () {
            var d0 = new Date(1391297899000),
                d1 = new Date(Date.UTC(2014, 1, 1, 23, 38, 19));

            expect(utilx.deepEqual(d0, d1)).to.be.ok();
        });

        it('regexp', function () {
            var r0 = /test/gi,
                r1 = new RegExp('test', 'gi');

            expect(utilx.deepEqual(r0, r1)).to.be.ok();

            r0 = /test/g;
            r1 = new RegExp('test', 'gi');
            expect(utilx.deepEqual(r0, r1)).to.not.be.ok();
        });

        it('arrays', function () {
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
                ];

            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be(true);

            arrCmp = [];
            expect(utilx.arrayAssign(arrCmp, 14)).to.be(0);
            expect(utilx.arrayAssign(arrCmp, 14)).to.be(0);
            expect(utilx.arrayAssign(arrCmp, 3, 0)).to.be(4);
            expect(utilx.arrayAssign(arrCmp, 0, utilx.privateUndefined)).to.be(4);
            expect(utilx.arrayAssign(arrCmp, 1, null)).to.be(4);
            expect(utilx.arrayAssign(arrCmp, 2, -1)).to.be(4);
            expect(utilx.arrayAssign(arrCmp, 3, 0)).to.be(4);
            expect(utilx.arrayAssign(arrCmp, 4, 1)).to.be(5);
            expect(utilx.arrayAssign(arrCmp, 5, false)).to.be(6);
            expect(utilx.arrayAssign(arrCmp, 6, true)).to.be(7);
            expect(utilx.arrayAssign(arrCmp, 12)).to.be(7);
            expect(utilx.arrayAssign(arrCmp, 7, utilx.privateUndefined)).to.be(8);
            expect(utilx.arrayAssign(arrCmp, 8, '')).to.be(9);
            expect(utilx.arrayAssign(arrCmp, 9, 'abc')).to.be(10);
            expect(utilx.arrayAssign(arrCmp, 10, null)).to.be(11);
            expect(utilx.arrayAssign(arrCmp, 11, utilx.privateUndefined)).to.be(12);
            expect(utilx.arrayAssign(arrCmp, 12)).to.be(12);
            expect(utilx.arrayAssign(arrCmp, 13)).to.be(12);
            expect(utilx.arrayAssign(arrCmp, 14)).to.be(12);
            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be.ok();

            arrCmp = [];
            expect(utilx.arrayPush(arrCmp, utilx.privateUndefined)).to.be(1);
            expect(utilx.arrayPush(arrCmp, null)).to.be(2);
            expect(utilx.arrayPush(arrCmp, -1)).to.be(3);
            expect(utilx.arrayPush(arrCmp, 0)).to.be(4);
            expect(utilx.arrayPush(arrCmp, 1)).to.be(5);
            expect(utilx.arrayPush(arrCmp, false)).to.be(6);
            expect(utilx.arrayPush(arrCmp, true)).to.be(7);
            expect(utilx.arrayPush(arrCmp)).to.be(7);
            expect(utilx.arrayPush(arrCmp)).to.be(7);
            expect(utilx.arrayPush(arrCmp)).to.be(7);
            expect(utilx.arrayPush(arrCmp)).to.be(7);
            expect(utilx.arrayPush(arrCmp, utilx.privateUndefined)).to.be(8);
            expect(utilx.arrayPush(arrCmp, '')).to.be(9);
            expect(utilx.arrayPush(arrCmp, 'abc')).to.be(10);
            expect(utilx.arrayPush(arrCmp, null)).to.be(11);
            expect(utilx.arrayPush(arrCmp, utilx.privateUndefined)).to.be(12);
            expect(utilx.deepEqual(arrCmp, arrCmp2)).to.be.ok();
        });
    });
}());
