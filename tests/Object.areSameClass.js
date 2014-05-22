/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.areSameClass', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.Object.areSameClass();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameClass(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameClass(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.Object.areSameClass(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });
        });

        it('are same internal class in each case', function () {
            expect(utilx.Object.areSameClass(undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameClass(null, null)).to.be.ok();
            expect(utilx.Object.areSameClass(1, 2)).to.be.ok();
            expect(utilx.Object.areSameClass(1, NaN)).to.be.ok();
            expect(utilx.Object.areSameClass(1, Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass(1, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass('1', '2')).to.be.ok();
            expect(utilx.Object.areSameClass('1', String(1))).to.be.ok();
            expect(utilx.Object.areSameClass(true, false)).to.be.ok();
            expect(utilx.Object.areSameClass({}, {})).to.be.ok();
            expect(utilx.Object.areSameClass(undefined, undefined,
                                       undefined)).to.be.ok();
            expect(utilx.Object.areSameClass(null, null, null)).to.be.ok();
            expect(utilx.Object.areSameClass(1, 2, Number('3'))).to.be.ok();
            expect(utilx.Object.areSameClass(1, NaN, Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.Object.areSameClass('1', '2', String())).to.be.ok();
            expect(utilx.Object.areSameClass(true, false, Boolean())).to.be.ok();
            expect(utilx.Object.areSameClass({}, {}, Object())).to.be.ok();
            expect(utilx.Object.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).to.be.ok();
        });

        it('are not same internal class in each case', function () {
            expect(utilx.Object.areSameClass(undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameClass(null, undefined)).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, '2')).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', NaN)).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', Number('1'))).to.not.be.ok();
            expect(utilx.Object.areSameClass(true, 'false')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, true)).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, 1)).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, '')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, [])).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, new Date())).to.not.be.ok();
            expect(utilx.Object.areSameClass(undefined, undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameClass(null, null, 'null')).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, 2, String(3))).to.not.be.ok();
            expect(utilx.Object.areSameClass(Object('1'), NaN, Infinity)).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, Infinity, true)).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', '2', Boolean())).to.not.be.ok();
            expect(utilx.Object.areSameClass(true, false, 'true')).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, [], Array())).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, new Date())).to.not.be.ok();
        });
    });
}());
