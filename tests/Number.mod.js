/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.mod', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.Number.mod(10, 3)).to.be(1);
            expect(utilx.Number.mod(-10, 3)).to.be(-1);
            expect(utilx.Number.mod(10, 3.1)).to.be(0.6999999999999997);
            expect(utilx.Number.mod(-10, 3.1)).to.be(-0.6999999999999997);
            expect(utilx.Number.mod(10.1, 3)).to.be(1.0999999999999996);
            expect(utilx.Number.mod(10.1, 3.1)).to.be(0.7999999999999994);
            expect(utilx.Number.mod(-10.1, 3.1)).to.be(-0.7999999999999994);
        });
    });
}());
