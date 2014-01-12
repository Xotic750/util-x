/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('areSameTypeOf', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.areSameTypeOf();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameTypeOf(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameTypeOf(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameTypeOf(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });
        });

        it('are same typeof in each case', function () {
            expect(utilx.areSameTypeOf(utilx.privateUndefined, utilx.privateUndefined)).to.be.ok();
            expect(utilx.areSameTypeOf(null, null)).to.be.ok();
            expect(utilx.areSameTypeOf(1, 2)).to.be.ok();
            expect(utilx.areSameTypeOf(1, NaN)).to.be.ok();
            expect(utilx.areSameTypeOf(1, Infinity)).to.be.ok();
            expect(utilx.areSameTypeOf(1, -Infinity)).to.be.ok();
            expect(utilx.areSameTypeOf('1', '2')).to.be.ok();
            expect(utilx.areSameTypeOf('1', String(1))).to.be.ok();
            expect(utilx.areSameTypeOf(true, false)).to.be.ok();
            expect(utilx.areSameTypeOf({}, {})).to.be.ok();
            expect(utilx.areSameTypeOf({}, [])).to.be.ok();
            expect(utilx.areSameTypeOf({}, new Date())).to.be.ok();
            expect(utilx.areSameTypeOf(utilx.privateUndefined, utilx.privateUndefined,
                                       utilx.privateUndefined)).to.be.ok();
            expect(utilx.areSameTypeOf(null, null, null)).to.be.ok();
            expect(utilx.areSameTypeOf(1, 2, Number('3'))).to.be.ok();
            expect(utilx.areSameTypeOf(1, NaN, Infinity)).to.be.ok();
            expect(utilx.areSameTypeOf(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.areSameTypeOf(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.areSameTypeOf('1', '2', String())).to.be.ok();
            expect(utilx.areSameTypeOf(true, false, Boolean())).to.be.ok();
            expect(utilx.areSameTypeOf({}, {}, Object())).to.be.ok();
            expect(utilx.areSameTypeOf({}, [], Array())).to.be.ok();
            expect(utilx.areSameTypeOf({}, new Date())).to.be.ok();
            expect(utilx.areSameTypeOf(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).to.be.ok();
        });

        it('are not same typeof in each case', function () {
            expect(utilx.areSameTypeOf(utilx.privateUndefined, null)).to.not.be.ok();
            expect(utilx.areSameTypeOf(null, utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.areSameTypeOf(1, '2')).to.not.be.ok();
            expect(utilx.areSameTypeOf('1', NaN)).to.not.be.ok();
            expect(utilx.areSameTypeOf('1', Number('1'))).to.not.be.ok();
            expect(utilx.areSameTypeOf(true, 'false')).to.not.be.ok();
            expect(utilx.areSameTypeOf({}, true)).to.not.be.ok();
            expect(utilx.areSameTypeOf({}, 1)).to.not.be.ok();
            expect(utilx.areSameTypeOf({}, '')).to.not.be.ok();
            expect(utilx.areSameTypeOf(utilx.privateUndefined, utilx.privateUndefined, null)).to.not.be.ok();
            expect(utilx.areSameTypeOf(null, null, 'null')).to.not.be.ok();
            expect(utilx.areSameTypeOf(1, 2, String(3))).to.not.be.ok();
            expect(utilx.areSameTypeOf(Object(1), NaN, Infinity)).to.not.be.ok();
            expect(utilx.areSameTypeOf(1, Infinity, true)).to.not.be.ok();
            expect(utilx.areSameTypeOf('1', '2', Boolean())).to.not.be.ok();
            expect(utilx.areSameTypeOf(true, false, 'true')).to.not.be.ok();
            expect(utilx.areSameTypeOf(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
        });
    });
}());
