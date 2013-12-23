/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('arrayForEach', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            forEachArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        forEachArray[24] = NaN;
        forEachArray[25] = 'end';
        t.strictEqual(utilx.arrayForEach(forEachArray, function (element, index, array) {
            t.strictEqual(array, forEachArray, 'arrayForEach');
            t.strictEqual(typeof index, 'number', 'arrayForEach');
            t.strictEqual(index >= 0, true, 'arrayForEach');
            t.strictEqual(index <= lastIndex, true, 'arrayForEach');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof forEachArray[index] === 'number' && isNaN(forEachArray[index]), true, 'arrayForEach');
            } else {
                t.strictEqual(element, forEachArray[index], 'arrayForEach');
            }

            testIndex = index;
        }), privateUndefined, 'arrayForEach');

        t.strictEqual(testIndex, forEachArray.length - 1, 'arrayForEach');

        t.end();
    });
}());
