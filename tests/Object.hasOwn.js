/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.hasOwn', function () {
        /*jshint -W001 */
        var obj = {
                'toString': utilx.Function.noop,
                'toLocaleString': utilx.Function.noop,
                'valueOf': utilx.Function.noop,
                'hasOwnProperty': utilx.Function.noop,
                'isPrototypeOf': utilx.Function.noop,
                'propertyIsEnumerable': utilx.Function.noop,
                'constructor': utilx.Function.noop
            },
            obj2 = {};
        /*jshint +W001 */

        it('defined on object should be ok in each case', function () {
            expect(utilx.Object.hasOwn(obj, 'toString')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'toLocaleString')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'valueOf')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'hasOwnProperty')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'isPrototypeOf')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'constructor')).to.be.ok();
            expect(utilx.Object.hasOwn(obj, 'foo')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj, 'bar')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj, 'fuz')).to.not.be.ok();
        });

        it('not defined on object should be not ok in each case', function () {
            expect(utilx.Object.hasOwn(obj2, 'toString')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'toLocaleString')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'valueOf')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'hasOwnProperty')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'isPrototypeOf')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'propertyIsEnumerable')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'constructor')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'foo')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'bar')).to.not.be.ok();
            expect(utilx.Object.hasOwn(obj2, 'fuz')).to.not.be.ok();
        });

        it('defined on object with undefined value should be ok in each case', function () {
            expect(utilx.Object.hasOwn({
                toString: undefined
            }, 'toString')).to.be.ok();
        });

        it('should not list prototype or constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.Object.hasOwn(Constructor, 'constructor')).to.not.be.ok();
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            if (!utilx.Object.hasOwn(Constructor, 'prototype')) {
                console.log('# Constructor.prototype does not list (must be FF<3.6 or Opera 11.5 !)');
            }

            expect(utilx.Object.hasOwn(Constructor, 'prototype')).to.be.ok();
            expect(utilx.Object.hasOwn(Constructor.prototype, 'constructor')).to.be.ok();
            expect(utilx.Object.hasOwn(new Constructor(), 'prototype')).to.be.ok();
            expect(utilx.Object.hasOwn(new Constructor(), 'constructor')).to.be.ok();
        });
    });
}());
