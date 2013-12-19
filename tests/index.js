/*global module, require, process */

(function () {
    'use strict';

    var required = {
        test: require('tape-compact')
    };

    if ('1' === process.env.UTILX_WHICH) {
        required.util = require('../lib/util-x');
    } else {
        required.util = require('../lib/util-x.min');
    }

    module.exports = required;
}());
