/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringContains', function () {
        var str = 'The quick sly fox jumped over the lazy dog.';

        it('should not throw an error in each case', function () {
            expect(utilx.stringContains(str, 'The')).to.be.ok();
            expect(utilx.stringContains(str, 'quick')).to.be.ok();
            expect(utilx.stringContains(str, 'sly')).to.be.ok();
            expect(utilx.stringContains(str, 'fox')).to.be.ok();
            expect(utilx.stringContains(str, 'jumped')).to.be.ok();
            expect(utilx.stringContains(str, 'over')).to.be.ok();
            expect(utilx.stringContains(str, 'the')).to.be.ok();
            expect(utilx.stringContains(str, 'lazy')).to.be.ok();
            expect(utilx.stringContains(str, 'dog')).to.be.ok();
            expect(utilx.stringContains(str, 'foo')).to.not.be.ok();
            expect(utilx.stringContains(str, 'bar')).to.not.be.ok();
            expect(utilx.stringContains(str, 'buz')).to.not.be.ok();
            expect(utilx.stringContains(str, 'The', 4)).to.not.be.ok();
            expect(utilx.stringContains(str, 'fox', 20)).to.not.be.ok();
            expect(utilx.stringContains(str, 'fox', 0)).to.be.ok();
        });
    });
}());
