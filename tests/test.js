/*global require */

(function () {
    'use strict';

    var required = require('./'),
        util = required.util,
        test = required.test;

    test('TODO', function (t) {
        t.ok(util.equal(1, '1'), 'equal');
        t.ok(util.notEqual(1, '2'), 'not equal');
        t.ok(util.strictEqual(1, 1), 'strict equal');
        t.ok(util.notStrictEqual(1, '1'), 'not strict equal');
        t.end();
    });
}());
