/*global require, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        testSubject1 = [2, 3, utilx.privateUndefined, true, 'hej', null, false, 0, , 9],
        testSubject2 = [],
        testSubject3 = [ , , , ];

    delete testSubject1[1];

    if (utilx.notStrictEqual(testSubject1.length, 10) ||
            utilx.notStrictEqual(testSubject2.length, 0) ||
            utilx.notStrictEqual(testSubject3.length, 3) ||
            utilx.notStrictEqual(testSubject1[0], 2) ||
            utilx.notStrictEqual(testSubject1[1], utilx.privateUndefined) ||
            utilx.notStrictEqual(testSubject1[2], utilx.privateUndefined) ||
            utilx.notStrictEqual(testSubject1[3], true) ||
            utilx.notStrictEqual(testSubject1[4], 'hej') ||
            utilx.notStrictEqual(testSubject1[5], null) ||
            utilx.notStrictEqual(testSubject1[6], false) ||
            utilx.notStrictEqual(testSubject1[7], 0) ||
            utilx.notStrictEqual(testSubject1[8], utilx.privateUndefined) ||
            utilx.notStrictEqual(testSubject1[9], 9) ||

            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 0), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 1), false) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 2), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 3), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 4), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 5), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 6), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 7), true) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 8), false) ||
            utilx.notStrictEqual(utilx.hasProperty(testSubject1, 9), true) ||

            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 0), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 1), false) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 2), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 3), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 4), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 5), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 6), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 7), true) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 8), false) ||
            utilx.notStrictEqual(utilx.objectHasOwnProperty(testSubject1, 9), true)) {

        console.log('#####################################################');
        console.log('# Array object has serious bugs in this environment #');
        console.log('#####################################################');
    }
}());
