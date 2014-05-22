/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.slice', function () {
        var arr = [undefined, null, 1, 'a', 2, 'b', null, undefined];

        it('should not throw an error in each case', function () {
            expect(utilx.Array.slice(arr)).to.eql(arr);
            expect(utilx.Array.slice(arr, undefined, undefined)).to.eql(arr);
            expect(utilx.Array.slice(arr, -1)).to.eql([undefined]);
            expect(utilx.Array.slice(arr, -1).length).to.be(1);
            expect(utilx.Array.slice(arr, 0)).to.eql(arr);
            expect(utilx.Array.slice(arr, 3)).to.eql(['a', 2, 'b', null, undefined]);
            expect(utilx.Array.slice(arr, -1, 4)).to.eql([]);
            expect(utilx.Array.slice(arr, -1, 4).length).to.be(0);
            expect(utilx.Array.slice(arr, 0, 4)).to.eql([undefined, null, 1, 'a']);
            expect(utilx.Array.slice(arr, 3, 6)).to.eql(['a', 2, 'b']);
        });
    });
}());
