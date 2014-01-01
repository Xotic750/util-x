/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('argumentsSlice', function () {
        it('should not throw an error in each case', function () {
            var arr = [utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined];

            function returnArgs() {
                return arguments;
            }

            function someArgs() {
                return returnArgs(utilx.privateUndefined, null, 1, 'a', 2, 'b', null, utilx.privateUndefined);
            }

            expect(utilx.argumentsSlice(someArgs())).to.eql(arr.slice());
            expect(utilx.argumentsSlice(someArgs(), -1)).to.eql(arr.slice(-1));
            expect(utilx.argumentsSlice(someArgs(), 0)).to.eql(arr.slice(0));
            expect(utilx.argumentsSlice(someArgs(), 3)).to.eql(arr.slice(3));
            expect(utilx.argumentsSlice(someArgs(), -1, 4)).to.eql(arr.slice(-1, 4));
            expect(utilx.argumentsSlice(someArgs(), 0, 4)).to.eql(arr.slice(0, 4));
            expect(utilx.argumentsSlice(someArgs(), 3, 6)).to.eql(arr.slice(3, 6));
        });
    });
}());
