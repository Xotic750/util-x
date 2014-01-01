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
    });
}());
