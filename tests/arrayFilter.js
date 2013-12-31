/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayFilter', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            filterArray = [0, 1, 2, '', 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        filterArray[24] = NaN;
        filterArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arrayFilter(filterArray, function (element, index, array) {
                expect(array).to.be(filterArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof filterArray[index] === 'number' && isNaN(filterArray[index])).to.be(true);
                } else {
                    expect(element).to.be(filterArray[index]);
                }

                testIndex = index;

                if (typeof element === 'string') {
                    return element;
                }

                return privateUndefined;
            }).toString()).to.be(['a', 'b', 'c', 'end'].toString());

            expect(testIndex).to.be(filterArray.length - 1);
        });
    });
}());
