/*global require, describe, it, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectPropertyIsEnumerable', function () {
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
            expect(utilx.objectPropertyIsEnumerable(obj, 'toString')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'toLocaleString')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'valueOf')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'hasOwnProperty')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'isPrototypeOf')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'propertyIsEnumerable')).to.be.ok();

            if (!utilx.objectPropertyIsEnumerable(obj, 'constructor')) {
                console.log('# obj.prototype not enumerable (must be IE<9 !)');
            }

            expect(utilx.objectPropertyIsEnumerable(obj, 'foo')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'bar')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'fuz')).to.not.be.ok();
        });

        it('not defined on object should be not ok in each case', function () {
            expect(utilx.objectPropertyIsEnumerable(obj2, 'toString')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'toLocaleString')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'valueOf')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'hasOwnProperty')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'isPrototypeOf')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'propertyIsEnumerable')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'constructor')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'foo')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'bar')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj2, 'fuz')).to.not.be.ok();
        });

        it('defined on object with undefined value should be ok in each case', function () {
            expect(utilx.objectPropertyIsEnumerable({
                toString: utilx.privateUndefined
            }, 'toString')).to.be.ok();
        });

        it('should not list prototype or constructor', function () {
            var doTest = false;

            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            if (utilx.objectPropertyIsEnumerable(Constructor, 'prototype')) {
                console.log('# Constructor lists prototype (must be Safari 4 !)');
            }

            if (utilx.objectPropertyIsEnumerable(Constructor.prototype, 'constructor')) {
                console.log('# Constructor.prototype.constructor lists constructor (must be IE<9 !)');
            }

            try {
                utilx.objectPropertyIsEnumerable(new Constructor().prototype, 'constructor');
                doTest = true;
            } catch (e) {
                console.log('# IE<9 throws on utilx.objectPropertyIsEnumerable when examining prototype.constructor: ' +
                            e.message);
            }

            if (doTest) {
                expect(utilx.objectPropertyIsEnumerable(new Constructor().prototype, 'constructor')).to.not.be.ok();
            }
        });

        it('should list prototype and constructor', function () {
            function Constructor() {
                this.constructor = this.prototype = 1;
            }

            Constructor.prototype.constructor = 1;
            expect(utilx.objectPropertyIsEnumerable(new Constructor(), 'prototype')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(new Constructor(), 'constructor')).to.be.ok();
        });
    });
}());
