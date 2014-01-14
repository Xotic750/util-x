/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('escapeRegex', function () {
        it('should be ok in each case', function () {
            expect(utilx.escapeRegex('[](){}?*+^$\\.|')).to.not.be('[](){}?*+^$\\.|');
            expect(utilx.escapeRegex('[](){}?*+^$\\.|')).to.be('\\[\\]\\(\\)\\{\\}\\?\\*\\+\\^\\$\\\\\\.\\|');
        });
    });
}());
