/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('numberIsNaN', function (t) {
        t.strictEqual(utilx.numberIsNaN(), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(privateUndefined), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(null), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(1), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(Infinity), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(-Infinity), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(NaN), true, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(''), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(true), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(false), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(utilx.noop), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN({}), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN([]), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(new RegExp('c')), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(new Date(2013, 11, 23)), false, 'numberIsNaN');
        t.strictEqual(utilx.numberIsNaN(new Error('x')), false, 'numberIsNaN');

        t.end();
    });
}());
