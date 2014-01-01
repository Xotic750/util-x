/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySlice', function () {
        var arr = [utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined];

        function returnArgs() {
            return arguments;
        }

        function someArgs() {
            return returnArgs(utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined);
        }

        /*
        it('should not throw an error in each case', function () {

        });
        */

        it('#1', function () {
            expect(utilx.arraySlice(someArgs())).to.eql(utilx.arraySlice(arr));
        });

        it('#2', function () {
            expect(utilx.arraySlice(someArgs(), -1)).to.eql(utilx.arraySlice(arr, -1));
        });

        it('#3', function () {
            expect(utilx.arraySlice(someArgs(), 0)).to.eql(utilx.arraySlice(arr, 0));
        });

        it('#4', function () {
            expect(utilx.arraySlice(someArgs(), 3)).to.eql(utilx.arraySlice(arr, 3));
        });

        it('#5', function () {
            expect(utilx.arraySlice(someArgs(), -1, 4)).to.eql(utilx.arraySlice(arr, -1, 4));
        });

        it('#6', function () {
            expect(utilx.arraySlice(someArgs(), 0, 4)).to.eql(utilx.arraySlice(arr, 0, 4));
        });

        it('#7', function () {
            expect(utilx.arraySlice(someArgs(), 3, 6)).to.eql(utilx.arraySlice(arr, 3, 6));
        });
    });
}());
