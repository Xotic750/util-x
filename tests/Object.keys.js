/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.keys', function () {
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
                'undefined': undefined,
                'toString': utilx.Function.noop,
                'toLocaleString': utilx.Function.noop,
                'valueOf': utilx.Function.noop,
                'hasOwnProperty': utilx.Function.noop,
                'isPrototypeOf': utilx.Function.noop,
                'propertyIsEnumerable': utilx.Function.noop,
                'constructor': utilx.Function.noop
            },
            keys = utilx.Object.keys(obj),
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
                'undefined': undefined
            },
            keys2 = utilx.Object.keys(obj2);
            /*jshint +W001 */

        it('should not throw an error in each case', function () {
            expect(keys.length).to.be(14);
            expect(utilx.Array.isArray(keys)).to.be.ok();
            utilx.Array.forEach(keys, function (name) {
                expect(utilx.Object.hasOwn(obj, name)).to.be.ok();
            });

            utilx.Array.forEach(keys, function (name) {
                // should return names which are enumerable
                expect(utilx.Array.indexOf(loopedValues, name)).not.to.be(-1);
            });

            expect(function () {
                utilx.Object.keys(42);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(keys2.length).to.be(7);
            expect(utilx.Array.isArray(keys2)).to.be.ok();
            utilx.Array.forEach(keys2, function (name) {
                expect(utilx.Object.hasOwn(obj, name)).to.be.ok();
            });

            utilx.Array.forEach(keys2, function (name) {
                // should return names which are enumerable
                expect(utilx.Array.indexOf(loopedValues2, name)).not.to.be(-1);
            });

            expect(utilx.Object.keys(utilx.Function.returnArgs(1, 2)).length).to.be(2);
        });

        it('should not list prototype or constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            if (!utilx.Number.isZero(utilx.Object.keys(Constructor).length)) {
                console.log('# Constructor lists prototype (must be Safari4 !): ' +
                            utilx.Object.keys(Constructor));
            }

            expect(utilx.Object.keys(Constructor).length).to.be(0);
            if (!utilx.Number.isZero(utilx.Object.keys(Constructor.prototype).length)) {
                console.log('# Constructor.prototype lists constructor (must be IE<9 !): ' +
                            utilx.Object.keys(Constructor.prototype));

                console.log('# Corner case when set to something other than constructor function (will/can not fix?)');
                expect(utilx.Object.keys(Constructor.prototype).length).to.be(1);
            } else {
                expect(utilx.Object.keys(Constructor.prototype).length).to.be(0);
            }
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.Object.keys(new Constructor()).length).to.be(2);
        });

        it('should not list', function () {
            console.log('#1: ' + utilx.Object.keys(Object.prototype));
            expect(utilx.Object.keys(Object.prototype).length).to.be(0);
            console.log('#2: ' + utilx.Object.keys(Function.prototype));
            expect(utilx.Object.keys(Function.prototype).length).to.be(0);
            console.log('#3: ' + utilx.Object.keys(Boolean.prototype));
            expect(utilx.Object.keys(Boolean.prototype).length).to.be(0);
            console.log('#4: ' + utilx.Object.keys(String.prototype));
            expect(utilx.Object.keys(String.prototype).length).to.be(0);
            console.log('#5: ' + utilx.Object.keys(Number.prototype));
            expect(utilx.Object.keys(Number.prototype).length).to.be(0);
            console.log('#6: ' + utilx.Object.keys(Error.prototype));
            expect(utilx.Object.keys(Error.prototype).length).to.be(0);
            console.log('#7: ' + utilx.Object.keys(TypeError.prototype));
            expect(utilx.Object.keys(TypeError.prototype).length).to.be(0);
            console.log('#8: ' + utilx.Object.keys(SyntaxError.prototype));
            expect(utilx.Object.keys(SyntaxError.prototype).length).to.be(0);
            console.log('#9: ' + utilx.Object.keys(Date.prototype));
            expect(utilx.Object.keys(Date.prototype).length).to.be(0);
            console.log('#10: ' + utilx.Object.keys(RegExp.prototype));
            expect(utilx.Object.keys(RegExp.prototype).length).to.be(0);
        });
    });
}());
