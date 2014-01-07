/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('basics', function () {
        it('should not throw an error in each case', function () {
            expect(utilx.noop()).to.be(utilx.privateUndefined);
            expect(utilx.lt(1, 2)).to.be.ok();
            expect(utilx.lt(1, 1)).to.not.be.ok();
            expect(utilx.lt(1, 0)).to.not.be.ok();
            expect(utilx.lte(1, 1)).to.be.ok();
            expect(utilx.lte(1, 0)).to.not.be.ok();
            expect(utilx.lte(1, 2)).to.be.ok();
            expect(utilx.gt(1, 0)).to.be.ok();
            expect(utilx.gt(1, 1)).to.not.be.ok();
            expect(utilx.gte(1, 1)).to.be.ok();
            expect(utilx.gte(1, 2)).to.not.be.ok();
            expect(utilx.mod(10, 3)).to.be(10 % 3);
            expect(utilx.mod(-10, 3)).to.be(-10 % 3);
            expect(utilx.arrayFirst([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayLast([])).to.be(utilx.privateUndefined);
            expect(utilx.arrayFirst([1, 2, 3])).to.be(1);
            expect(utilx.arrayLast([1, 2, 3])).to.be(3);
            expect(utilx.arrayFirst(utilx.returnArgs(1, 2, 3))).to.be(1);
            expect(utilx.arrayLast(utilx.returnArgs(1, 2, 3))).to.be(3);
            expect(utilx.firstChar('abcdef')).to.be('a');
            expect(utilx.lastChar('abcdef')).to.be('f');
            expect(utilx.firstCharIs('abcdef', 'a')).to.be.ok();
            expect(utilx.lastCharIs('abcdef', 'f')).to.be.ok();
            expect(utilx.firstCharIs('abcdef', 'f')).to.not.be.ok();
            expect(utilx.lastCharIs('abcdef', 'a')).to.not.be.ok();
        });
    });
}());
