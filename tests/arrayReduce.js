/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayReduce', function () {
        var lastIndex = Math.pow(2, 32) - 1,
            reduceArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        reduceArray[24] = NaN;
        reduceArray[25] = 'end';
        it('should not throw an error in each case', function () {
            expect(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
                expect(array).to.be(reduceArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index])).to.be(true);
                } else {
                    expect(element).to.be(reduceArray[index]);
                }

                testIndex = index;
                if (element === privateUndefined || null === element) {
                    return previous;
                }

                return previous + ',' + element;
            })).to.be('undefined,' + reduceArray.toString().replace(new RegExp(',+', 'g'), ','));

            expect(testIndex).to.be(reduceArray.length - 1);

            expect(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
                expect(array).to.be(reduceArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index])).to.be(true);
                } else {
                    expect(element).to.be(reduceArray[index]);
                }

                testIndex = index;
                if (element === privateUndefined || null === element) {
                    return previous;
                }

                return previous + ',' + element;
            }, null)).to.be('null,' + reduceArray.toString().replace(new RegExp(',+', 'g'), ','));

            expect(testIndex).to.be(reduceArray.length - 1);

            expect(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
                expect(array).to.be(reduceArray);
                expect(typeof index).to.be('number');
                expect(index >= 0).to.be(true);
                expect(index <= lastIndex).to.be(true);
                if (typeof element === 'number' && isNaN(element)) {
                    expect(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index])).to.be(true);
                } else {
                    expect(element).to.be(reduceArray[index]);
                }

                testIndex = index;
                if (element === privateUndefined || null === element) {
                    return previous;
                }

                return previous + ',' + element;
            }, '').slice(1)).to.be(reduceArray.toString().replace(new RegExp(',+', 'g'), ','));

            expect(testIndex).to.be(reduceArray.length - 1);
        });
    });
}());
