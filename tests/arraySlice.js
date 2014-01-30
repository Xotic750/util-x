/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySlice', function () {
        var arr = [utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined];

        it('should not throw an error in each case', function () {
            expect(utilx.arraySlice(arr)).to.eql(arr);
            expect(utilx.arraySlice(arr, utilx.privateUndefined, utilx.privateUndefined)).to.eql(arr);
            expect(utilx.arraySlice(arr, -1)).to.eql([utilx.privateUndefined]);
            expect(utilx.arraySlice(arr, -1).length).to.be(1);
            expect(utilx.arraySlice(arr, 0)).to.eql(arr);
            expect(utilx.arraySlice(arr, 3)).to.eql(['a', 2, 'b', null, utilx.privateUndefined]);
            expect(utilx.arraySlice(arr, -1, 4)).to.eql([]);
            expect(utilx.arraySlice(arr, -1, 4).length).to.be(0);
            expect(utilx.arraySlice(arr, 0, 4)).to.eql([utilx.privateUndefined, null, 1, 'a']);
            expect(utilx.arraySlice(arr, 3, 6)).to.eql(['a', 2, 'b']);
        });
    });
}());
