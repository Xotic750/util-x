/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('arrayReduce', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            reduceArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        reduceArray[24] = NaN;
        reduceArray[25] = 'end';

        t.strictEqual(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
            t.strictEqual(array, reduceArray, 'arrayReduce');
            t.strictEqual(typeof index, 'number', 'arrayReduce');
            t.strictEqual(index >= 0, true, 'arrayReduce');
            t.strictEqual(index <= lastIndex, true, 'arrayReduce');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index]), true, 'arrayReduce');
            } else {
                t.strictEqual(element, reduceArray[index], 'arrayReduce');
            }

            testIndex = index;
            if (element === privateUndefined || null === element) {
                return previous;
            }

            return previous + ',' + element;
        }), 'undefined,' + reduceArray.toString().replace(new RegExp(',+', 'g'), ','), 'arrayReduce return');

        t.strictEqual(testIndex, reduceArray.length - 1, 'arrayReduce');

        t.strictEqual(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
            t.strictEqual(array, reduceArray, 'arrayReduce');
            t.strictEqual(typeof index, 'number', 'arrayReduce');
            t.strictEqual(index >= 0, true, 'arrayReduce');
            t.strictEqual(index <= lastIndex, true, 'arrayReduce');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index]), true, 'arrayReduce');
            } else {
                t.strictEqual(element, reduceArray[index], 'arrayReduce');
            }

            testIndex = index;
            if (element === privateUndefined || null === element) {
                return previous;
            }

            return previous + ',' + element;
        }, null), 'null,' + reduceArray.toString().replace(new RegExp(',+', 'g'), ','), 'arrayReduce return');

        t.strictEqual(testIndex, reduceArray.length - 1, 'arrayReduce');

        t.strictEqual(utilx.arrayReduce(reduceArray, function (previous, element, index, array) {
            t.strictEqual(array, reduceArray, 'arrayReduce');
            t.strictEqual(typeof index, 'number', 'arrayReduce');
            t.strictEqual(index >= 0, true, 'arrayReduce');
            t.strictEqual(index <= lastIndex, true, 'arrayReduce');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof reduceArray[index] === 'number' && isNaN(reduceArray[index]), true, 'arrayReduce');
            } else {
                t.strictEqual(element, reduceArray[index], 'arrayReduce');
            }

            testIndex = index;
            if (element === privateUndefined || null === element) {
                return previous;
            }

            return previous + ',' + element;
        }, '').slice(1), reduceArray.toString().replace(new RegExp(',+', 'g'), ','), 'arrayReduce return');

        t.strictEqual(testIndex, reduceArray.length - 1, 'arrayReduce');

        t.end();
    });
}());
