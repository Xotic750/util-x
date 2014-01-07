/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySlice', function () {
        var arr = [utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined];

        function someArgs() {
            return utilx.returnArgs.apply(null, arr);
        }

        it('should not throw an error in each case', function () {
            expect(utilx.arraySlice(someArgs())).to.eql(utilx.arraySlice(arr));
            expect(utilx.arraySlice(someArgs(), utilx.privateUndefined, utilx.privateUndefined))
                .to.eql(utilx.arraySlice(arr, utilx.privateUndefined, utilx.privateUndefined));
            expect(utilx.arraySlice(someArgs(), -1)).to.eql(utilx.arraySlice(arr, -1));
            expect(utilx.arraySlice(someArgs(), -1).length).to.be(1);
            expect(utilx.arraySlice(someArgs(), 0)).to.eql(utilx.arraySlice(arr, 0));
            expect(utilx.arraySlice(someArgs(), 3)).to.eql(utilx.arraySlice(arr, 3));
            expect(utilx.arraySlice(someArgs(), -1, 4)).to.eql(utilx.arraySlice(arr, -1, 4));
            expect(utilx.arraySlice(someArgs(), -1, 4).length).to.be(0);
            expect(utilx.arraySlice(someArgs(), 0, 4)).to.eql(utilx.arraySlice(arr, 0, 4));
            expect(utilx.arraySlice(someArgs(), 3, 6)).to.eql(utilx.arraySlice(arr, 3, 6));
        });
    });
}());
