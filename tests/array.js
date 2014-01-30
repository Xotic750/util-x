/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Native Array object', function () {
        var testSubject,
            testSubject2,
            testSubject3;

        beforeEach(function () {
            testSubject = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0];
            delete testSubject[1];

            testSubject2 = new Array(2, 3, utilx.privateUndefined, true, 'hej', null, false, 0);
            delete testSubject2[1];

            testSubject3 = Array.apply(utilx.privateUndefined, [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0]);
            delete testSubject3[1];
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

        it('should have properties', function () {
            expect(utilx.hasProperty(testSubject, 0)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 1)).to.not.be.ok();
            expect(utilx.hasProperty(testSubject, 2)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 3)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 4)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 5)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 6)).to.be.ok();
            expect(utilx.hasProperty(testSubject, 7)).to.be.ok();
        });

        it('should have own properties', function () {
            expect(utilx.objectHasOwnProperty(testSubject, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 1)).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject, 7)).to.be.ok();
        });

        it('can be fixed1?', function () {
            var arr;

            function someArgs() {
                return utilx.returnArgs.apply(null, testSubject);
            }

            arr = utilx.arraySlice(someArgs());
            expect(utilx.objectHasOwnProperty(arr, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 1)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 7)).to.be.ok();
        });

        it('can be fixed2?', function () {
            var arr;

            function someArgs() {
                return utilx.returnArgs.apply(null, testSubject);
            }

            arr = someArgs();
            expect(utilx.objectHasOwnProperty(arr, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 1)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 7)).to.be.ok();
        });

        it('can be fixed3?', function () {
            var arr;

            arr = utilx.returnArgs.apply(null, testSubject);
            expect(utilx.objectHasOwnProperty(arr, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 1)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(arr, 7)).to.be.ok();
        });

        it('can be fixed4?', function () {
            expect(utilx.objectHasOwnProperty(testSubject2, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 1)).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject2, 7)).to.be.ok();
        });

        it('can be fixed5?', function () {
            expect(utilx.objectHasOwnProperty(testSubject3, 0)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 1)).to.not.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 2)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 3)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 4)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 5)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 6)).to.be.ok();
            expect(utilx.objectHasOwnProperty(testSubject3, 7)).to.be.ok();
        });
    });
}());
