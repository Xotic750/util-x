/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayForEach', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            forEachArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        forEachArray[24] = NaN;
        forEachArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arrayForEach(forEachArray, function (element, index, array) {
                expect(array).to.be(forEachArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof forEachArray[index] === 'number' && isNaN(forEachArray[index])).to.be(true);
                } else {
                    expect(element).to.be(forEachArray[index]);
                }

                testIndex = index;
            })).to.be(privateUndefined);

            expect(testIndex).to.be(forEachArray.length - 1);
        });
    });
}());
