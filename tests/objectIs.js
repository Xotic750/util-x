/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('objectIs', function () {
        var date = new Date(),
            rx = new RegExp('x'),
            err = new Error('y');

        it('should not throw an error in each case', function () {
            expect(utilx.objectIs(utilx.privateUndefined, utilx.privateUndefined)).to.be.ok();
            expect(utilx.objectIs(null, null)).to.be.ok();
            expect(utilx.objectIs(1, 1)).to.be.ok();
            expect(utilx.objectIs(true, true)).to.be.ok();
            expect(utilx.objectIs('x', 'x')).to.be.ok();
            expect(utilx.objectIs([1, 2, 3], [1, 2, 3])).to.not.be.ok();
            expect(utilx.objectIs(utilx.returnArgs(), utilx.returnArgs())).to.not.be.ok();
            expect(utilx.objectIs({}, {}), false, 'objectIs');
            expect(utilx.objectIs(utilx.noop, utilx.noop)).to.be.ok();
            expect(utilx.objectIs(new RegExp('c'), new RegExp('c'))).to.not.be.ok();
            expect(utilx.objectIs(new Date(2013, 11, 23), new Date(2013, 11, 23))).to.not.be.ok();
            expect(utilx.objectIs(new Error('x'), new Error('x'))).to.not.be.ok();
            expect(utilx.objectIs(date, date)).to.be.ok();
            expect(utilx.objectIs(rx, rx)).to.be.ok();
            expect(utilx.objectIs(err, err)).to.be.ok();
            expect(utilx.objectIs(NaN, NaN)).to.be.ok();
            expect(utilx.objectIs(0, -0)).to.not.be.ok();
            expect(utilx.objectIs(0, 0)).to.be.ok();
            expect(utilx.objectIs(0, +0)).to.be.ok();
        });
    });
}());
