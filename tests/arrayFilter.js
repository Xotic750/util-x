/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('arrayFilter', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            filterArray = [0, 1, 2, '', 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        filterArray[24] = NaN;
        filterArray[25] = 'end';
        t.strictEqual(utilx.arrayFilter(filterArray, function (element, index, array) {
            t.strictEqual(array, filterArray, 'arrayFilter');
            t.strictEqual(typeof index, 'number', 'arrayFilter');
            t.strictEqual(index >= 0, true, 'arrayFilter');
            t.strictEqual(index <= lastIndex, true, 'arrayFilter');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof filterArray[index] === 'number' && isNaN(filterArray[index]), true, 'arrayFilter');
            } else {
                t.strictEqual(element, filterArray[index], 'arrayFilter');
            }

            testIndex = index;

            if (typeof element === 'string') {
                return element;
            }

            return privateUndefined;
        }).toString(), ['a', 'b', 'c', 'end'].toString(), 'arrayFilter return');

        t.strictEqual(testIndex, filterArray.length - 1, 'arrayFilter');

        t.end();
    });
}());
