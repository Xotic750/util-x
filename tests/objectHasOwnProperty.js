/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectHasOwnProperty', function () {
        /*jshint -W001 */
        var obj = {
                'toString': utilx.noop,
                'toLocaleString': utilx.noop,
                'valueOf': utilx.noop,
                'hasOwnProperty': utilx.noop,
                'isPrototypeOf': utilx.noop,
                'propertyIsEnumerable': utilx.noop,
                'constructor': utilx.noop
            },
            obj2 = {};
        /*jshint +W001 */

        it('defined on object should be ok in each case', function () {
            expect(utilx.objectHasOwnProperty(obj, 'toString')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'toLocaleString')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'valueOf')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'hasOwnProperty')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'isPrototypeOf')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'propertyIsEnumerable')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'constructor')).to.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'foo')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'bar')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj, 'fuz')).to.not.be.ok();
        });

        it('not defined on object should be ok in each case', function () {
            expect(utilx.objectHasOwnProperty(obj2, 'toString')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'toLocaleString')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'valueOf')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'hasOwnProperty')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'isPrototypeOf')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'propertyIsEnumerable')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'constructor')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'foo')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'bar')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(obj2, 'fuz')).to.not.be.ok();
        });

        it('defined on object with undefined value should be ok in each case', function () {
            expect(utilx.objectHasOwnProperty({
                toString: utilx.privateUndefined
            }, 'toString')).to.be.ok();
        });

        it('should not list prototype or constructor 1', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectHasOwnProperty(Constructor, 'prototype')).to.be.ok();
            expect(utilx.objectHasOwnProperty(Constructor, 'constructor')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(Constructor.prototype, 'prototype')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(Constructor.prototype, 'constructor')).to.be.ok();
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectHasOwnProperty(new Constructor(), 'prototype')).to.be.ok();
            expect(utilx.objectHasOwnProperty(new Constructor(), 'constructor')).to.be.ok();
            expect(utilx.objectHasOwnProperty(new Constructor().prototype, 'prototype')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(new Constructor().prototype, 'constructor')).to.not.be.ok();
        });
    });
}());
