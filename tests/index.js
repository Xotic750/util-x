/*global module, require, process */

(function () {
    'use strict';

    var required = {
        test: require('tape-compact')
    };

    if ('1' === process.env.UTILX_WHICH) {
        required.utilx = require('../lib/util-x');
    } else {
        required.utilx = require('../lib/util-x');
        //required.utilx = require('../lib/util-x.min');
    }

    module.exports = required;
}());
