/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringSplit', function () {
        it('should not throw an error in each case', function () {
            expect(function () {
                utilx.stringSplit();
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringSplit(utilx.privateUndefined);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.stringSplit(null);
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(utilx.stringSplit('abcdef', '')).to.eql(['a', 'b', 'c', 'd', 'e', 'f']);
            expect(utilx.stringSplit('abcdefabcdefabcdef', 'c')).to.eql(['ab', 'defab', 'defab', 'def']);
            expect(utilx.stringSplit('abcdefabcdefabcdef', new RegExp('c'))).to.eql(['ab', 'defab', 'defab', 'def']);
        });
    });
}());
