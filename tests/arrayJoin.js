/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('arrayJoin', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.arrayJoin();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayJoin(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.arrayJoin(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.arrayJoin([])).to.be('');
            expect(utilx.arrayJoin([utilx.privateUndefined])).to.be('');
            expect(utilx.arrayJoin([utilx.privateUndefined, utilx.privateUndefined])).to.be(',');
            expect(utilx.arrayJoin([null, null])).to.be(',');
            expect(utilx.arrayJoin([1, 2, 3])).to.be('1,2,3');
            expect(utilx.arrayJoin([utilx.privateUndefined, utilx.privateUndefined], '|')).to.be('|');
            expect(utilx.arrayJoin([null, null], '|')).to.be('|');
            expect(utilx.arrayJoin([1, 2, 3], '|')).to.be('1|2|3');

            expect(utilx.arrayJoin([1, 2, 3], utilx.privateUndefined)).to.be('1,2,3');
            expect(utilx.arrayJoin([1, 2, 3], null)).to.be('1null2null3');
            expect(utilx.arrayJoin([1, 2, 3], {})).to.be('1[object Object]2[object Object]3');
            expect(utilx.arrayJoin([1, 2, 3], '')).to.be('123');
        });
    });
}());
