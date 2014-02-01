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

        it('should not list prototype or constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            if (!utilx.isZero(utilx.objectKeys(Constructor).length)) {
                console.log('# Constructor lists prototype (must be Safari4 !): ' +
                            utilx.objectKeys(Constructor));
            }

            expect(utilx.objectKeys(Constructor).length).to.be(0);
            if (!utilx.isZero(utilx.objectKeys(Constructor.prototype).length)) {
                console.log('# Constructor.prototype lists constructor (must be IE<9 !): ' +
                            utilx.objectKeys(Constructor.prototype));

                console.log('# Corner case when set to a non-function (will/can not fix)');
                expect(utilx.objectKeys(Constructor.prototype).length).to.be(1);
            } else {
                expect(utilx.objectKeys(Constructor.prototype).length).to.be(0);
            }
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectKeys(new Constructor()).length).to.be(2);
        });

        it('should not list', function () {
            expect(utilx.objectKeys(Object.prototype).length).to.be(0);
            expect(utilx.objectKeys(Function.prototype).length).to.be(0);
            expect(utilx.objectKeys(Boolean.prototype).length).to.be(0);
            expect(utilx.objectKeys(String.prototype).length).to.be(0);
            expect(utilx.objectKeys(Number.prototype).length).to.be(0);
            expect(utilx.objectKeys(Error.prototype).length).to.be(0);
            expect(utilx.objectKeys(TypeError.prototype).length).to.be(0);
            expect(utilx.objectKeys(SyntaxError.prototype).length).to.be(0);
            expect(utilx.objectKeys(Date.prototype).length).to.be(0);
            expect(utilx.objectKeys(RegExp.prototype).length).to.be(0);
        });
    });
}());
