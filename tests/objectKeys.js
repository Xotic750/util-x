/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectKeys', function () {
        var loopedValues = [],
            obj = {
                'str': 'boz',
                'obj': {},
                'arr': [],
                'bool': true,
                'num': 42,
                'null': null,
                'undefined': utilx.privateUndefined,
                'toString': utilx.noop,
                'toLocaleString': utilx.noop,
                'valueOf': utilx.noop
            },
            keys = utilx.objectKeys(obj),
            k;

        for (k in obj) {
            /*jslint forin: true */
            loopedValues.push(k);
        }

        it('should not throw an error in each case', function () {
            expect(keys.length).to.be(10);
        });

        it('1', function () {
            expect(utilx.arrayIsArray(keys)).to.be.ok();
        });

        it('2', function () {
            utilx.arrayForEach(keys, function (name) {
                expect(utilx.objectHasOwnProperty(obj, name)).to.be.ok();
            });
        });

        it('3', function () {
            utilx.arrayForEach(keys, function (name) {
                // should return names which are enumerable
                expect(utilx.arrayIndexOf(loopedValues, name)).not.to.be(-1);
            });
        });

        it('4', function () {
            expect(function () {
                utilx.objectKeys(42);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
