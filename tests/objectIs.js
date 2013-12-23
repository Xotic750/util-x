/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function returnArgs() {
        return arguments;
    }

    test('objectIs', function (t) {
        var date = new Date(),
            rx = new RegExp('x'),
            err = new Error('y');

        t.strictEqual(utilx.objectIs(privateUndefined, privateUndefined), true, 'objectIs');
        t.strictEqual(utilx.objectIs(null, null), true, 'objectIs');
        t.strictEqual(utilx.objectIs(1, 1), true, 'objectIs');
        t.strictEqual(utilx.objectIs(true, true), true, 'objectIs');
        t.strictEqual(utilx.objectIs('x', 'x'), true, 'objectIs');
        t.strictEqual(utilx.objectIs([1, 2, 3], [1, 2, 3]), false, 'objectIs');
        t.strictEqual(utilx.objectIs(returnArgs(), returnArgs()), false, 'objectIs');
        t.strictEqual(utilx.objectIs({}, {}), false, 'objectIs');
        t.strictEqual(utilx.objectIs(utilx.noop, utilx.noop), true, 'objectIs');
        t.strictEqual(utilx.objectIs(new RegExp('c'), new RegExp('c')), false, 'objectIs');
        t.strictEqual(utilx.objectIs(new Date(2013, 11, 23), new Date(2013, 11, 23)), false, 'objectIs');
        t.strictEqual(utilx.objectIs(new Error('x'), new Error('x')), false, 'objectIs');
        t.strictEqual(utilx.objectIs(date, date), true, 'objectIs');
        t.strictEqual(utilx.objectIs(rx, rx), true, 'objectIs');
        t.strictEqual(utilx.objectIs(err, err), true, 'objectIs');
        t.strictEqual(utilx.objectIs(NaN, NaN), true, 'objectIs');


        t.end();
    });
}());
