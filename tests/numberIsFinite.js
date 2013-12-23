/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('numberIsFinite', function (t) {
        t.strictEqual(utilx.numberIsFinite(), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(privateUndefined), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(null), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(1), true, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(Infinity), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(-Infinity), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(NaN), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(''), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(true), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(false), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite({}), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite([]), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(new RegExp('c')), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(new Date(2013, 11, 23)), false, 'numberIsFinite');
        t.strictEqual(utilx.numberIsFinite(new Error('x')), false, 'numberIsFinite');

        t.end();
    });
}());
