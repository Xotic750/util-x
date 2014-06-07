/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.deepStrictEqual', function () {
        it('strict equal', function () {
            expect(utilx.Object.deepStrictEqual(NaN, NaN)).to.be(true);
        });

        it('strict not equal', function () {
            expect(utilx.Object.deepStrictEqual('3', 3)).to.be(false);
            expect(utilx.Object.deepStrictEqual([], {})).to.be(false);
            expect(utilx.Object.deepStrictEqual([{
                a: 3
            }, {
                b: 4
            }], [{
                a: '3'
            }, {
                b: '4'
            }])).to.not.be.ok();
        });
    });
}());
