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

        it('#1: ' + utilx.arraySlice(someArgs()) + ' : ' + utilx.arraySlice(arr), function () {
            expect(utilx.arraySlice(someArgs())).to.eql(utilx.arraySlice(arr));
        });

        it('#2: ' + utilx.arraySlice(someArgs(), utilx.privateUndefined, utilx.privateUndefined) + ' : ' + utilx.arraySlice(arr, utilx.privateUndefined, utilx.privateUndefined), function () {
            expect(utilx.arraySlice(someArgs(), utilx.privateUndefined, utilx.privateUndefined))
                .to.eql(utilx.arraySlice(arr, utilx.privateUndefined, utilx.privateUndefined));
        });

        it('#3: ' + utilx.arraySlice(someArgs(), -1).length + ' : ' + utilx.arraySlice(arr, -1).length, function () {
            expect(utilx.arraySlice(someArgs(), -1)).to.eql(utilx.arraySlice(arr, -1));
            expect(utilx.arraySlice(someArgs(), -1).length).to.be(1);
        });

        it('#4: ' + utilx.arraySlice(someArgs(), 0) + ' : ' + utilx.arraySlice(arr, 0), function () {
            expect(utilx.arraySlice(someArgs(), 0)).to.eql(utilx.arraySlice(arr, 0));
        });

        it('#5: ' + utilx.arraySlice(someArgs(), 3) + ' : ' + utilx.arraySlice(arr, 3), function () {
            expect(utilx.arraySlice(someArgs(), 3)).to.eql(utilx.arraySlice(arr, 3));
        });

        it('#6: ' + utilx.arraySlice(someArgs(), -1, 4).length + ' : ' + utilx.arraySlice(arr, -1, 4).length, function () {
            expect(utilx.arraySlice(someArgs(), -1, 4)).to.eql(utilx.arraySlice(arr, -1, 4));
            expect(utilx.arraySlice(someArgs(), -1, 4).length).to.be(0);
        });

        it('#7: ' + utilx.arraySlice(someArgs(), 0, 4) + ' : ' + utilx.arraySlice(arr, 0, 4), function () {
            expect(utilx.arraySlice(someArgs(), 0, 4)).to.eql(utilx.arraySlice(arr, 0, 4));
        });

        it('#8: ' + utilx.arraySlice(someArgs(), 3, 6) + ' : ' + utilx.arraySlice(arr, 3, 6), function () {
            expect(utilx.arraySlice(someArgs(), 3, 6)).to.eql(utilx.arraySlice(arr, 3, 6));
        });
    });
}());