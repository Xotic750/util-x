/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayPush', function () {
        //it('should not throw an error in each case', function () {
        var arr = [];

        it('1', function () {
            expect(utilx.arrayPush(arr, null)).to.be(1);
        });

        it('2', function () {
            expect(utilx.arrayPush(arr, -1)).to.be(2);
        });

        it('3', function () {
            expect(utilx.arrayPush(arr, 0)).to.be(3);
        });

        it('4', function () {
            expect(utilx.arrayPush(arr, 1)).to.be(4);
        });

        it('5', function () {
            expect(utilx.arrayPush(arr, false)).to.be(5);
        });

        it('6', function () {
            expect(utilx.arrayPush(arr, true)).to.be(6);
        });

        it('7', function () {
            expect(utilx.arrayPush(arr)).to.be(6);
        });

        it('8', function () {
            expect(utilx.arrayPush(arr, utilx.privateUndefined)).to.be(7);
        });

        it('9', function () {
            expect(utilx.arrayPush(arr, '')).to.be(8);
        });

        it('10', function () {
            expect(utilx.arrayPush(arr, 'abc')).to.be(9);
        });

        it('11', function () {
            expect(arr).to.eql([null, -1, 0, 1, false, true, utilx.privateUndefined, '', 'abc']);
        });
    });
}());
