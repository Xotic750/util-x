/*global require, console */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        testSubject1 = [2, 3, undefined, true, 'hej', null, false, 0, , 9],
        testSubject2 = [],
        testSubject3 = [ , , , ];

    delete testSubject1[1];

    if (testSubject1.length !== 10 ||
            testSubject2.length !== 0 ||
            testSubject3.length !== 3 ||
            testSubject1[0] !== 2 ||
            testSubject1[1] !== undefined ||
            testSubject1[2] !== undefined ||
            testSubject1[3] !== true ||
            testSubject1[4] !== 'hej' ||
            testSubject1[5] !== null ||
            testSubject1[6] !== false ||
            testSubject1[7] !== 0 ||
            testSubject1[8] !== undefined ||
            testSubject1[9] !== 9 ||

            utilx.Object.hasOwn(testSubject1, 0) !== true ||
            utilx.Object.hasOwn(testSubject1, 1) !== false ||
            utilx.Object.hasOwn(testSubject1, 2) !== true ||
            utilx.Object.hasOwn(testSubject1, 3) !== true ||
            utilx.Object.hasOwn(testSubject1, 4) !== true ||
            utilx.Object.hasOwn(testSubject1, 5) !== true ||
            utilx.Object.hasOwn(testSubject1, 6) !== true ||
            utilx.Object.hasOwn(testSubject1, 7) !== true ||
            utilx.Object.hasOwn(testSubject1, 8) !== false ||
            utilx.Object.hasOwn(testSubject1, 9) !== true ||

            utilx.Object.hasOwn(testSubject1, 0) !== true ||
            utilx.Object.hasOwn(testSubject1, 1) !== false ||
            utilx.Object.hasOwn(testSubject1, 2) !== true ||
            utilx.Object.hasOwn(testSubject1, 3) !== true ||
            utilx.Object.hasOwn(testSubject1, 4) !== true ||
            utilx.Object.hasOwn(testSubject1, 5) !== true ||
            utilx.Object.hasOwn(testSubject1, 6) !== true ||
            utilx.Object.hasOwn(testSubject1, 7) !== true ||
            utilx.Object.hasOwn(testSubject1, 8) !== false ||
            utilx.Object.hasOwn(testSubject1, 9) !== true) {

        console.log('#####################################################');
        console.log('# Array object has serious bugs in this environment #');
        console.log('#####################################################');
    }
}());
