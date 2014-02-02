/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('areSameClass', function () {
        it('should throw particular error types', function () {
            expect(function () {
                utilx.areSameClass();
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameClass(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameClass(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });

            expect(function () {
                utilx.areSameClass(10);
            }).to.throwException(function (e) {
                expect(e).to.be.a(SyntaxError);
            });
        });

        it('are same typeof in each case', function () {
            expect(utilx.areSameClass(utilx.privateUndefined, utilx.privateUndefined)).to.be.ok();
            expect(utilx.areSameClass(null, null)).to.be.ok();
            expect(utilx.areSameClass(1, 2)).to.be.ok();
            expect(utilx.areSameClass(1, NaN)).to.be.ok();
            expect(utilx.areSameClass(1, Infinity)).to.be.ok();
            expect(utilx.areSameClass(1, -Infinity)).to.be.ok();
            expect(utilx.areSameClass('1', '2')).to.be.ok();
            expect(utilx.areSameClass('1', String(1))).to.be.ok();
            expect(utilx.areSameClass(true, false)).to.be.ok();
            expect(utilx.areSameClass({}, {})).to.be.ok();
            expect(utilx.areSameClass(utilx.privateUndefined, utilx.privateUndefined,
                                       utilx.privateUndefined)).to.be.ok();
            expect(utilx.areSameClass(null, null, null)).to.be.ok();
            expect(utilx.areSameClass(1, 2, Number('3'))).to.be.ok();
            expect(utilx.areSameClass(1, NaN, Infinity)).to.be.ok();
            expect(utilx.areSameClass(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.areSameClass(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.areSameClass('1', '2', String())).to.be.ok();
            expect(utilx.areSameClass(true, false, Boolean())).to.be.ok();
            expect(utilx.areSameClass({}, {}, Object())).to.be.ok();
            expect(utilx.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).to.be.ok();
        });

        it('are not same typeof in each case', function () {
            expect(utilx.areSameClass(utilx.privateUndefined, null)).to.not.be.ok();
            expect(utilx.areSameClass(null, utilx.privateUndefined)).to.not.be.ok();
            expect(utilx.areSameClass(1, '2')).to.not.be.ok();
            expect(utilx.areSameClass('1', NaN)).to.not.be.ok();
            expect(utilx.areSameClass('1', Number('1'))).to.not.be.ok();
            expect(utilx.areSameClass(true, 'false')).to.not.be.ok();
            expect(utilx.areSameClass({}, true)).to.not.be.ok();
            expect(utilx.areSameClass({}, 1)).to.not.be.ok();
            expect(utilx.areSameClass({}, '')).to.not.be.ok();
            expect(utilx.areSameClass({}, [])).to.not.be.ok();
            expect(utilx.areSameClass({}, new Date())).to.not.be.ok();
            expect(utilx.areSameClass(utilx.privateUndefined, utilx.privateUndefined, null)).to.not.be.ok();
            expect(utilx.areSameClass(null, null, 'null')).to.not.be.ok();
            expect(utilx.areSameClass(1, 2, String(3))).to.not.be.ok();
            expect(utilx.areSameClass(Object('1'), NaN, Infinity)).to.not.be.ok();
            expect(utilx.areSameClass(1, Infinity, true)).to.not.be.ok();
            expect(utilx.areSameClass('1', '2', Boolean())).to.not.be.ok();
            expect(utilx.areSameClass(true, false, 'true')).to.not.be.ok();
            expect(utilx.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
            expect(utilx.areSameClass({}, [], Array())).to.not.be.ok();
            expect(utilx.areSameClass({}, new Date())).to.not.be.ok();
        });
    });
}());
