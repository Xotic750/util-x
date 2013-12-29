/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('./'),
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
                'undefined': privateUndefined
            },
            keys = utilx.objectKeys(obj),
            k;

        for (k in obj) {
            /*jslint forin: true */
            loopedValues.push(k);
        }

        it('should not throw an error in each case', function () {
            expect(keys.length).to.be(7);
            expect(utilx.arrayIsArray(keys)).to.be(true);

            utilx.arrayForEach(keys, function (name) {
                expect(utilx.objectHasOwnProperty(obj, name)).to.be(true);
            });

            utilx.arrayForEach(keys, function (name) {
                // should return names which are enumerable
                expect(utilx.arrayIndexOf(loopedValues, name)).not.to.be(-1);
            });

            expect(function () {
                utilx.objectKeys(42);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });
    });
}());
