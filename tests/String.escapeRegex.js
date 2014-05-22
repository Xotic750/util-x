/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('String.escapeRegex', function () {
        it('should be ok in each case', function () {
            var str = '[](){}?*+^$\\.|',
                obj = utilx.Object.ToObject(str);

            expect(utilx.String.escapeRegex(str)).to.not.be('[](){}?*+^$\\.|');
            expect(utilx.String.escapeRegex(str)).to.be('\\[\\]\\(\\)\\{\\}\\?\\*\\+\\^\\$\\\\\\.\\|');
            expect(utilx.String.escapeRegex(obj)).to.not.be('[](){}?*+^$\\.|');
            expect(utilx.String.escapeRegex(obj)).to.be('\\[\\]\\(\\)\\{\\}\\?\\*\\+\\^\\$\\\\\\.\\|');
        });
    });
}());
