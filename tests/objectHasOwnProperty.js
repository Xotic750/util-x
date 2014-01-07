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

        it('should not throw an error in each case', function () {
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

            expect(utilx.objectHasOwnProperty({
                toString: utilx.privateUndefined
            }, 'toString')).to.be.ok();

            expect(utilx.objectHasOwnProperty({}, 'toString')).to.not.be.ok();
            expect(utilx.objectHasOwnProperty({}, 'bar')).to.not.be.ok();
        });
    });
}());
