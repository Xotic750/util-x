/*global require, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        testSubject = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0];

    delete testSubject[1];

    if (utilx.notStrictEqual(testSubject.length, 8) ||
            utilx.notStrictEqual(testSubject[0], 2) ||
            utilx.notStrictEqual(testSubject[1], utilx.privateUndefined) ||
            utilx.notStrictEqual(testSubject[2], utilx.privateUndefined) ||
            utilx.notStrictEqual(testSubject[3], true) ||
            utilx.notStrictEqual(testSubject[4], 'hej') ||
            utilx.notStrictEqual(testSubject[5], null) ||
            utilx.notStrictEqual(testSubject[6], false) ||
            utilx.notStrictEqual(testSubject[7], 0) ||

            utilx.notStrictEqual(utilx.hasProperty(testSubject, 0), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 1), false) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 2), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 3), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 4), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 5), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 6), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject, 7), true) ||

            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 0), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 1), false) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 2), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 3), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 4), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 5), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 6), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject, 7), true)) {

        console.log('#####################################################');
        console.log('# Array object has serious bugs in this environment #');
        console.log('#####################################################');
    }
}());
