/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayMap', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            mapArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        mapArray[24] = NaN;
        mapArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arrayMap(mapArray, function (element, index, array) {
                expect(array).to.be(mapArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof mapArray[index] === 'number' && isNaN(mapArray[index])).to.be(true);
                } else {
                    expect(element).to.be(mapArray[index]);
                }

                testIndex = index;

                return element;
            }).toString()).to.be(mapArray.toString());

            expect(testIndex).to.be(mapArray.length - 1);
        });
    });
}());
