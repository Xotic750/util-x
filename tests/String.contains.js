/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.contains', function () {
        var str = 'The quick sly fox jumped over the lazy dog.';

        it('should not throw an error in each case', function () {
            expect(utilx.String.contains(str, 'The')).to.be.ok();
            expect(utilx.String.contains(str, 'quick')).to.be.ok();
            expect(utilx.String.contains(str, 'sly')).to.be.ok();
            expect(utilx.String.contains(str, 'fox')).to.be.ok();
            expect(utilx.String.contains(str, 'jumped')).to.be.ok();
            expect(utilx.String.contains(str, 'over')).to.be.ok();
            expect(utilx.String.contains(str, 'the')).to.be.ok();
            expect(utilx.String.contains(str, 'lazy')).to.be.ok();
            expect(utilx.String.contains(str, 'dog')).to.be.ok();
            expect(utilx.String.contains(str, 'foo')).to.not.be.ok();
            expect(utilx.String.contains(str, 'bar')).to.not.be.ok();
            expect(utilx.String.contains(str, 'buz')).to.not.be.ok();
            expect(utilx.String.contains(str, 'The', 4)).to.not.be.ok();
            expect(utilx.String.contains(str, 'fox', 20)).to.not.be.ok();
            expect(utilx.String.contains(str, 'fox', 0)).to.be.ok();
        });
    });
}());
