/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    test('checkObjectCoercible', function (t) {
        t.throws(function () {
            utilx.checkObjectCoercible();
        }, TypeError, 'checkObjectCoercible');

        t.throws(function () {
            utilx.checkObjectCoercible(privateUndefined);
        }, TypeError, 'checkObjectCoercible');

        t.throws(function () {
            utilx.checkObjectCoercible(null);
        }, TypeError, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(-1);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(0);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(1);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(NaN);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(Infinity);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(-Infinity);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(true);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(false);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible('');
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible('x');
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(utilx.noop);
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(new RegExp('y'));
        }, privateUndefined, 'checkObjectCoercible');

        t.doesNotThrow(function () {
            utilx.checkObjectCoercible(new Date());
        }, privateUndefined, 'checkObjectCoercible');

        t.end();
    });
}());
