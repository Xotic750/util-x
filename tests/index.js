/*global module, require, process */

(function () {
    'use strict';

    var required = {
        expect: require('expect.js')
    };

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x.min');
    } else {
        required.utilx = require('../lib/util-x');
    }

    module.exports = required;
}());
