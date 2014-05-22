/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.join', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.Array.join();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.join(undefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Array.join(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.Array.join([])).to.be('');
            expect(utilx.Array.join([undefined])).to.be('');
            expect(utilx.Array.join([undefined, undefined])).to.be(',');
            expect(utilx.Array.join([null, null])).to.be(',');
            expect(utilx.Array.join([1, 2, 3])).to.be('1,2,3');
            expect(utilx.Array.join([undefined, undefined], '|')).to.be('|');
            expect(utilx.Array.join([null, null], '|')).to.be('|');
            expect(utilx.Array.join([1, 2, 3], '|')).to.be('1|2|3');

            expect(utilx.Array.join([1, 2, 3], undefined)).to.be('1,2,3');
            expect(utilx.Array.join([1, 2, 3], null)).to.be('1null2null3');
            expect(utilx.Array.join([1, 2, 3], {})).to.be('1[object Object]2[object Object]3');
            expect(utilx.Array.join([1, 2, 3], '')).to.be('123');
        });
    });
}());
