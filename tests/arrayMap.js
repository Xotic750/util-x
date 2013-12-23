/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('arrayMap', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            mapArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        mapArray[24] = NaN;
        mapArray[25] = 'end';
        t.strictEqual(utilx.arrayMap(mapArray, function (element, index, array) {
            t.strictEqual(array, mapArray, 'arrayMap');
            t.strictEqual(typeof index, 'number', 'arrayMap');
            t.strictEqual(index >= 0, true, 'arrayMap');
            t.strictEqual(index <= lastIndex, true, 'arrayMap');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof mapArray[index] === 'number' && isNaN(mapArray[index]), true, 'arrayMap');
            } else {
                t.strictEqual(element, mapArray[index], 'arrayMap');
            }

            testIndex = index;

            return element;
        }).toString(), mapArray.toString(), 'arrayMap return');

        t.strictEqual(testIndex, mapArray.length - 1, 'arrayMap');

        t.end();
    });
}());
