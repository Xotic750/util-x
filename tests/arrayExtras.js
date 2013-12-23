/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function returnArgs() {
        return arguments;
    }

    test('Array extras', function (t) {
        var testArray1 = [],
            testArray2 = [privateUndefined, privateUndefined],
            testArray3 = [1, 2, 3],
            testArgs = returnArgs(1, 2, 3);

        t.strictEqual(utilx.arrayFirst(), privateUndefined, 'arrayFirst');
        t.strictEqual(utilx.arrayFirst(testArray1), privateUndefined, 'arrayFirst');
        t.strictEqual(utilx.arrayFirst(testArray2), privateUndefined, 'arrayFirst');
        t.strictEqual(utilx.arrayFirst(testArray3), 1, 'arrayFirst');
        t.strictEqual(utilx.arrayFirst(testArgs), 1, 'arrayFirst');

        t.strictEqual(utilx.arrayLast(), privateUndefined, 'arrayLast');
        t.strictEqual(utilx.arrayLast(testArray1), privateUndefined, 'arrayLast');
        t.strictEqual(utilx.arrayLast(testArray2), privateUndefined, 'arrayLast');
        t.strictEqual(utilx.arrayLast(testArray3), 3, 'arrayLast');
        t.strictEqual(utilx.arrayLast(testArgs), 3, 'arrayLast');

        t.end();
    });
}());
