/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('anyToString', function (t) {
        t.strictEqual(utilx.anyToString(), 'undefined', 'anyToString');
        t.strictEqual(utilx.anyToString(privateUndefined), 'undefined', 'anyToString');
        t.strictEqual(utilx.anyToString(null), 'null', 'anyToString');
        t.strictEqual(utilx.anyToString(1), '1', 'anyToString');
        t.strictEqual(utilx.anyToString(true), 'true', 'anyToString');
        t.strictEqual(utilx.anyToString('x'), 'x', 'anyToString');
        t.strictEqual(utilx.anyToString([1, 2, 3]), '1,2,3', 'anyToString');
        t.strictEqual(utilx.anyToString({}), '[object Object]', 'anyToString');
        t.strictEqual(utilx.anyToString(utilx.noop), utilx.noop.toString(), 'anyToString');
        t.strictEqual(utilx.anyToString(new RegExp('c')), '/c/', 'anyToString');


        t.end();
    });
}());
