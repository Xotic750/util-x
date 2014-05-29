/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.areSameTypeOf', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.Object.areSameTypeOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameTypeOf(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameTypeOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameTypeOf(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });
        });

        it('are same typeof in each case', function () {
            expect(utilx.Object.areSameTypeOf(undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, NaN)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2')).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', String(1))).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', new String(1))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false)).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, {})).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, [])).to.be.ok();
            expect(utilx.Object.areSameTypeOf({}, new Date())).to.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined, undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null, null)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, Number('3'))).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, new Number('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, NaN, Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', String(3))).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', new String(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false, Boolean(1))).to.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false, new Boolean(1))).to.not.be.ok();
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
            expect(utilx.Object.areSameTypeOf('1', Number('1'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', new Number('1'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, 'false')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, true)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, 1)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf({}, '')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(undefined, undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(null, null, 'null')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, String(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, new String(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, Number(3))).to.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, new Number(3))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(Object('1'), NaN, Infinity)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, Infinity, true)).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', Boolean('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', new Boolean('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', String('3'))).to.be.ok();
            expect(utilx.Object.areSameTypeOf('1', '2', new String('3'))).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(true, false, 'true')).to.not.be.ok();
            expect(utilx.Object.areSameTypeOf(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
        });
    });
}());
