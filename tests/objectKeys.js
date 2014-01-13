/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectKeys', function () {
        /*jshint -W001 */
        var loopedValues = [
                'str',
                'obj',
                'arr',
                'bool',
                'num',
                'null',
                'undefined',
                'toString',
                'toLocaleString',
                'valueOf',
                'hasOwnProperty',
                'isPrototypeOf',
                'propertyIsEnumerable',
                'constructor'
            ],
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
                'valueOf': utilx.noop,
                'hasOwnProperty': utilx.noop,
                'isPrototypeOf': utilx.noop,
                'propertyIsEnumerable': utilx.noop,
                'constructor': utilx.noop
            },
            keys = utilx.objectKeys(obj),
            loopedValues2 = [
                'str',
                'obj',
                'arr',
                'bool',
                'num',
                'null',
                'undefined'
            ],
            obj2 = {
                'str': 'boz',
                'obj': {},
                'arr': [],
                'bool': true,
                'num': 42,
                'null': null,
                'undefined': utilx.privateUndefined
            },
            keys2 = utilx.objectKeys(obj2);
            /*jshint +W001 */

        it('should not throw an error in each case', function () {
            expect(keys.length).to.be(14);
            expect(utilx.arrayIsArray(keys)).to.be.ok();
            utilx.arrayForEach(keys, function (name) {
                expect(utilx.objectHasOwnProperty(obj, name)).to.be.ok();
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

            expect(keys2.length).to.be(7);
            expect(utilx.arrayIsArray(keys2)).to.be.ok();
            utilx.arrayForEach(keys2, function (name) {
                expect(utilx.objectHasOwnProperty(obj, name)).to.be.ok();
            });

            utilx.arrayForEach(keys2, function (name) {
                // should return names which are enumerable
                expect(utilx.arrayIndexOf(loopedValues2, name)).not.to.be(-1);
            });
        });

        it('should not list prototype or constructor 1', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectKeys(Constructor).length).to.be(0);
            expect(utilx.objectKeys(Constructor.prototype).length).to.be(0);
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectKeys(new Constructor()).length).to.be(2);
        });
    });
}());
