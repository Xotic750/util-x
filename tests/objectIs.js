/*global require, describe, it */

(function (privateUndefined) {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    function returnArgs() {
        return arguments;
    }

    describe('objectIs', function () {
        var date = new Date(),
            rx = new RegExp('x'),
            err = new Error('y');

        it('should not throw an error in each case', function () {
            expect(utilx.objectIs(privateUndefined, privateUndefined)).to.be(true);
            expect(utilx.objectIs(null, null)).to.be(true);
            expect(utilx.objectIs(1, 1)).to.be(true);
            expect(utilx.objectIs(true, true)).to.be(true);
            expect(utilx.objectIs('x', 'x')).to.be(true);
            expect(utilx.objectIs([1, 2, 3], [1, 2, 3])).to.be(false);
            expect(utilx.objectIs(returnArgs(), returnArgs())).to.be(false);
            expect(utilx.objectIs({}, {}), false, 'objectIs');
            expect(utilx.objectIs(utilx.noop, utilx.noop)).to.be(true);
            expect(utilx.objectIs(new RegExp('c'), new RegExp('c'))).to.be(false);
            expect(utilx.objectIs(new Date(2013, 11, 23), new Date(2013, 11, 23))).to.be(false);
            expect(utilx.objectIs(new Error('x'), new Error('x'))).to.be(false);
            expect(utilx.objectIs(date, date)).to.be(true);
            expect(utilx.objectIs(rx, rx)).to.be(true);
            expect(utilx.objectIs(err, err)).to.be(true);
            expect(utilx.objectIs(NaN, NaN)).to.be(true);
        });
    });
}());
