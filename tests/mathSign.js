/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('mathSign', function (t) {
        t.strictEqual(isNaN(utilx.mathSign()), true, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign(privateUndefined)), true, 'mathSign');
        t.strictEqual(utilx.mathSign(null), 0, 'mathSign');
        t.strictEqual(utilx.mathSign(-1), -1, 'mathSign');
        t.strictEqual(utilx.mathSign(0), 0, 'mathSign');
        t.strictEqual(utilx.mathSign(1), 1, 'mathSign');
        t.strictEqual(utilx.mathSign(Infinity), 1, 'mathSign');
        t.strictEqual(utilx.mathSign(-Infinity), -1, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign(NaN)), true, 'mathSign');
        t.strictEqual(utilx.mathSign(''), 0, 'mathSign');
        t.strictEqual(utilx.mathSign(true), 1, 'mathSign');
        t.strictEqual(utilx.mathSign(false), 0, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign(utilx.noop)), true, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign({})), true, 'mathSign');
        t.strictEqual(utilx.mathSign([]), 0, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign(new RegExp('c'))), true, 'mathSign');
        t.strictEqual(utilx.mathSign(new Date(2013, 11, 23)), 1, 'mathSign');
        t.strictEqual(isNaN(utilx.mathSign(new Error('x'))), true, 'mathSign');

        t.end();
    });
}());
