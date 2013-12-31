/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    describe('Array extras', function () {
        var testArray1 = [],
            testArray2 = [privateUndefined, privateUndefined],
            testArray3 = [1, 2, 3],
            testArgs = returnArgs(1, 2, 3);

        it('should not throw an error in each case', function () {
            expect(utilx.arrayFirst()).to.be(privateUndefined);
            expect(utilx.arrayFirst(testArray1)).to.be(privateUndefined);
            expect(utilx.arrayFirst(testArray2)).to.be(privateUndefined);
            expect(utilx.arrayFirst(testArray3)).to.be(1);
            expect(utilx.arrayFirst(testArgs)).to.be(1);

            expect(utilx.arrayLast()).to.be(privateUndefined);
            expect(utilx.arrayLast(testArray1)).to.be(privateUndefined);
            expect(utilx.arrayLast(testArray2)).to.be(privateUndefined);
            expect(utilx.arrayLast(testArray3)).to.be(3);
            expect(utilx.arrayLast(testArgs)).to.be(3);
        });
    });
}());
