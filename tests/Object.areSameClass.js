/*global require, describe, it */
/*jshint -W009, -W010, -W053, -W064 */
(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Object.areSameClass', function () {
        it('are same internal class in each case', function () {
            expect(utilx.Object.areSameClass()).to.be.ok();
            expect(utilx.Object.areSameClass(undefined)).to.be.ok();
            expect(utilx.Object.areSameClass(1)).to.not.be.ok();
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
            expect(utilx.Object.areSameClass(undefined, undefined, undefined)).to.be.ok();
            expect(utilx.Object.areSameClass(null, null, null)).to.be.ok();
            expect(utilx.Object.areSameClass(1, 2, Object(3))).to.be.ok();
            expect(utilx.Object.areSameClass(1, NaN, Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass(1, Infinity, -Infinity)).to.be.ok();
            expect(utilx.Object.areSameClass(1, -Infinity, NaN)).to.be.ok();
            expect(utilx.Object.areSameClass('1', '2', Object('3'))).to.be.ok();
            expect(utilx.Object.areSameClass(true, false, Object(true))).to.be.ok();
            expect(utilx.Object.areSameClass({}, {}, Object())).to.be.ok();
            expect(utilx.Object.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, 0)).to.be.ok();
        });

        it('are not same internal class in each case', function () {
            expect(utilx.Object.areSameClass(undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameClass(null, undefined)).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, '2')).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', NaN)).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', Object(1))).to.not.be.ok();
            expect(utilx.Object.areSameClass(true, 'false')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, true)).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, 1)).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, '')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, [])).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, new Date())).to.not.be.ok();
            expect(utilx.Object.areSameClass(undefined, undefined, null)).to.not.be.ok();
            expect(utilx.Object.areSameClass(null, null, 'null')).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, 2, Object('3'))).to.not.be.ok();
            expect(utilx.Object.areSameClass(Object('1'), NaN, Infinity)).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, Infinity, true)).to.not.be.ok();
            expect(utilx.Object.areSameClass('1', '2', Object(3))).to.not.be.ok();
            expect(utilx.Object.areSameClass(true, false, 'true')).to.not.be.ok();
            expect(utilx.Object.areSameClass(1, 2, 3, 4, 5, 6, 7, 8, 9, '0')).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, [], new Array())).to.not.be.ok();
            expect(utilx.Object.areSameClass({}, new Date())).to.not.be.ok();
        });
    });
}());
