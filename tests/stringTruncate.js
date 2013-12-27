/*global require */

(function () {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('stringTruncate', function (t) {
        t.strictEqual(utilx.stringTruncate(), 'undefined', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, 5), 'undef', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('null', -1), 'null', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(null, 2), 'nu', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('-1', 1), '-', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('0', 0), '', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('1', 2), '1', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(false, 4), 'fals', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(true, 4), 'true', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('null', -1), 'null', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('null', -Infinity), 'null', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('null', NaN), 'null', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate('null', Infinity), 'null', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, '5'), 'undef', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, '-Infinity'), 'undefined', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, 'NaN'), 'undefined', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, 'Infinity'), 'undefined', 'stringTruncate');
        t.strictEqual(utilx.stringTruncate(utilx.privateUndefined, 'a'), 'undefined', 'stringTruncate');

        t.end();
    });
}());
