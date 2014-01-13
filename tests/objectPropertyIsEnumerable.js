/*global require, describe, it */

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
            expect(utilx.objectPropertyIsEnumerable(obj, 'constructor')).to.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'foo')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'bar')).to.not.be.ok();
            expect(utilx.objectPropertyIsEnumerable(obj, 'fuz')).to.not.be.ok();
        });

        it('not defined on object should be ok in each case', function () {
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
    });
}());
