/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('mod', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.mod(10, 3)).to.be(10 % 3);
            expect(utilx.mod(-10, 3)).to.be(-10 % 3);
            expect(utilx.mod(10, 3.1)).to.be(10 % 3.1);
            expect(utilx.mod(-10, 3.1)).to.be(-10 % 3.1);
            expect(utilx.mod(10.1, 3)).to.be(10.1 % 3);
            expect(utilx.mod(10.1, 3.1)).to.be(10.1 % 3.1);
            expect(utilx.mod(-10.1, 3.1)).to.be(-10.1 % 3.1);
        });
    });
}());
