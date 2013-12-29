/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arraySome', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            someArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        someArray[24] = NaN;
        someArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arraySome(someArray, function (element, index, array) {
                expect(array).to.be(someArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof someArray[index] === 'number' && isNaN(someArray[index])).to.be(true);
                } else {
                    expect(element).to.be(someArray[index]);
                }

                testIndex = index;
                if ('end' === element) {
                    return true;
                }

                return false;
            })).to.be(true);

            expect(testIndex).to.be(someArray.length - 1);
        });
    });
}());
