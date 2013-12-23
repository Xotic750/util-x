/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('arraySome', function (t) {
        var lastIndex = Math.pow(2, 32) - 1,
            someArray = [0, 1, 2, 'a', 'b', 'c', [8, 9, 10], {}, true, false, privateUndefined, null, new Date(), new Error('x'), new RegExp('t'), Infinity, -Infinity],
            testIndex;

        someArray[24] = NaN;
        someArray[25] = 'end';
        t.strictEqual(utilx.arraySome(someArray, function (element, index, array) {
            t.strictEqual(array, someArray, 'arraySome');
            t.strictEqual(typeof index, 'number', 'arraySome');
            t.strictEqual(index >= 0, true, 'arraySome');
            t.strictEqual(index <= lastIndex, true, 'arraySome');
            if (typeof element === 'number' && isNaN(element)) {
                t.strictEqual(typeof someArray[index] === 'number' && isNaN(someArray[index]), true, 'arraySome');
            } else {
                t.strictEqual(element, someArray[index], 'arraySome');
            }

            testIndex = index;
            if ('end' === element) {
                return true;
            }

            return false;
        }), true, 'arraySome return');

        t.strictEqual(testIndex, someArray.length - 1, 'arraySome');

        t.end();
    });
}());
