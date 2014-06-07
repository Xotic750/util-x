/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.areSameTypeOf', function () {
        it('are same typeof in each case', function () {
            expect(utilx.Object.areSameTypeOf()).to.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, NaN)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2')).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', Object(1))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', Object('2'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false)).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, {})).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, [])).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, new Date())).to.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined, undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null, null)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, Object(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, NaN, Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', Object('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false, Object(true))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, {}, new Object())).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, [], new Array())).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, new Date())).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).to.be.ok();
        });

        it('are not same typeof in each case', function () {
            expect(utilx.Object.areSameTypeOf(undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(null, undefined)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, '2')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', NaN)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', Object('1'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, 'false')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, true)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, 1)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, '')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined, undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null, 'null')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, Object(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(Object('1'), NaN, Infinity)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity, true)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', Object('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false, 'true')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
        });
    });
}());
