/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Native Array object', function () {
        var testSubject;

        beforeEach(function () {
            testSubject = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0];
            delete testSubject[1];
        });

        it('should have correct values', function () {
            expect(testSubject.length).to.be(8);
            expect(testSubject[0]).to.be(2);
            expect(testSubject[1]).to.be(utilx.privateUndefined);
            expect(testSubject[2]).to.be(utilx.privateUndefined);
            expect(testSubject[3]).to.be(true);
            expect(testSubject[4]).to.be('hej');
            expect(testSubject[5]).to.be(null);
            expect(testSubject[6]).to.be(false);
            expect(testSubject[7]).to.be(0);
        });

        it('should have properties (using \'in\')', function () {
            expect(utilx.hasProperty(testSubject, 0)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 1)).to.not.be.ok();
            expect(utilx.hasProperty(testSubject, 2)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 3)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 4)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 5)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 6)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 7)).to.be.ok();
        });

        it('should have own properties (using \'hasOwnProperty\')', function () {
            expect(utilx.objectHasOwnProperty(testSubject, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 1)).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 7)).to.be.ok();
        });
    });
}());
