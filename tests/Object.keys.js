/*global require, describe, it */

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
                'toString': required.noop,
                'toLocaleString': required.noop,
                'valueOf': required.noop,
                'hasOwnProperty': required.noop,
                'isPrototypeOf': required.noop,
                'propertyIsEnumerable': required.noop,
                'constructor': required.noop
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

        it('should throw if no arguments', function () {
            expect(function () {
                utilx.Object.keys();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is undefined', function () {
            expect(function () {
                utilx.Object.keys(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw if argument is null', function () {
            expect(function () {
                utilx.Object.keys(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

        it('should throw an TypeError if argument is primitive', function () {
            expect(function () {
                utilx.Object.keys(42);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.keys(true);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Object.keys('a');
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
        });

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

            expect(keys2.length).to.be(7);
            expect(utilx.Array.isArray(keys2)).to.be.ok();
            utilx.Array.forEach(keys2, function (name) {
                expect(utilx.Object.hasOwn(obj, name)).to.be.ok();
            });

            utilx.Array.forEach(keys2, function (name) {
                // should return names which are enumerable
                expect(utilx.Array.indexOf(loopedValues2, name)).not.to.be(-1);
            });
        });

        it('should work with arguments object', function () {
            var testValue = [0, 1],
                theArgs = required.returnArgs(1, 2),
                theKeys;

            expect(function () {
                theKeys = utilx.Object.keys(theArgs);
            }).to.not.throwException();

            expect(theKeys.length).to.be(2);
            expect(theKeys).to.eql(testValue);
        });

        it('Constructor should not list prototype or constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;

            expect(utilx.Object.keys(Constructor)).to.eql([]);
        });

        it('Constructor prototype should not list constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;

            expect(utilx.Object.keys(Constructor.prototype)).to.eql([]);
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.Object.keys(new Constructor()).sort()).to.eql(['constructor', 'prototype']);
        });

        it('Object prototype should not list', function () {
            expect(utilx.Object.keys(Object.prototype)).to.eql([]);
        });

        it('Function prototype should not list', function () {
            expect(utilx.Object.keys(Function.prototype)).to.eql([]);
        });

        it('Boolean prototype should not list', function () {
            expect(utilx.Object.keys(Boolean.prototype)).to.eql([]);
        });

        it('String prototype should not list', function () {
            expect(utilx.Object.keys(String.prototype)).to.eql([]);
        });

        it('Number prototype should not list', function () {
            expect(utilx.Object.keys(Function.prototype)).to.eql([]);
        });

        it('Error prototype should not list', function () {
            expect(utilx.Object.keys(Error.prototype)).to.eql([]);
        });

        it('TypeError prototype should not list', function () {
            expect(utilx.Object.keys(TypeError.prototype)).to.eql([]);
        });

        it('SyntaxError prototype should not list', function () {
            expect(utilx.Object.keys(SyntaxError.prototype)).to.eql([]);
        });

        it('RangeError prototype should not list', function () {
            expect(utilx.Object.keys(RangeError.prototype)).to.eql([]);
        });

        it('EvalError prototype should not list', function () {
            expect(utilx.Object.keys(EvalError.prototype)).to.eql([]);
        });

        it('URIError prototype should not list', function () {
            expect(utilx.Object.keys(URIError.prototype)).to.eql([]);
        });

        it('ReferenceError prototypes should not list', function () {
            expect(utilx.Object.keys(ReferenceError.prototype)).to.eql([]);
        });

        it('Date prototype should not list', function () {
            expect(utilx.Object.keys(Date.prototype)).to.eql([]);
        });

        it('RegExp prototype should not list', function () {
            expect(utilx.Object.keys(RegExp.prototype)).to.eql([]);
        });
    });
}());
