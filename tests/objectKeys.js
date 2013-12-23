/*global require */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
        utilx = required.utilx,
        test = required.test;

    function returnArgs() {
        return arguments;
    }

    function X() {
        return;
    }

    test('objectKeys', function (t) {
        var loopedValues = [],
            obj = {
                'str': 'boz',
                'obj': {},
                'arr': [],
                'bool': true,
                'num': 42,
                'null': null,
                'undefined': privateUndefined
            },
            keys = utilx.objectKeys(obj),
            k;

        for (k in obj) {
            /*jslint forin: true */
            loopedValues.push(k);
        }

        t.strictEqual(keys.length, 7, 'should have correct length');
        t.strictEqual(utilx.arrayIsArray(keys), true, 'should return an Array');

        utilx.arrayForEach(keys, function (name) {
            t.strictEqual(utilx.objectHasOwnProperty(obj, name), true, 'should return names which are own properties');
        });

        utilx.arrayForEach(keys, function (name) {
            t.notStrictEqual(utilx.arrayIndexOf(loopedValues, name), -1, 'should return names which are enumerable');
        });

        t.throws(function () {
            utilx.objectKeys(42);
        }, TypeError, 'should throw error for non object');

        t.end();
    });
}());
