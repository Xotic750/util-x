/*global require, describe, it, beforeEach */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Function.ToMethod', function () {
        it('creates a static method frpm a prototype method', function () {
            var toString = utilx.Function.ToMethod(Object.prototype.toString);

            expect(toString({})).to.be('[object Object]');
        });
    });
}());
