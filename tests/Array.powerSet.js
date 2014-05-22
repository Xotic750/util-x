/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.powerSet', function () {
        it('strict equal', function () {
            var a = [1, 2, 3],
                r = [
                    [],
                    [ 3 ],
                    [ 2 ],
                    [ 2, 3 ],
                    [ 1 ],
                    [ 1, 3 ],
                    [ 1, 2 ],
                    [ 1, 2, 3 ]
                ];

            expect(utilx.Array.powerSet(a)).to.eql(r);
        });
    });
}());
