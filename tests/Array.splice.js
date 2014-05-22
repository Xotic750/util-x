/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Array.splice', function () {
        var b = ['b'],
            a = [1, 'a', b],
            makeArray,
            test;

        makeArray = function (l, prefix) {
            prefix = prefix || '';

            var a1 = [],
                arr = [];

            while (l) {
                a1.length = l;
                l -= 1;
                utilx.Array.unshift(arr, prefix + utilx.Array.join(a1, ' ') + l);
            }

            return arr;
        };

        it('basic implementation test 1', function () {
            test = utilx.Array.slice(a, 0);
            expect(utilx.Array.splice(test, 0)).to.eql(a);
        });

        it('basic implementation test 2', function () {
            test = utilx.Array.slice(a, 0);
            utilx.Array.splice(test, 0, 2);
            expect(test).to.eql([b]);
        });

        it('should return right result 1', function () {

            expect((function () {
                var array = [];

                utilx.Array.splice(array, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);
                utilx.Array.splice(array, 1, 0, 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                    'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20',
                    'F21', 'F22', 'F23', 'F24', 'F25', 'F26');
                utilx.Array.splice(array, 5, 0, 'XXX');

                return utilx.Array.join(array, '|');
            }())).to.be('1|F1|F2|F3|F4|XXX|F5|F6|F7|F8|F9|F10|F11|F12|F13|F14|F15|F16|F17|F18|F19|F20|' +
                'F21|F22|F23|F24|F25|F26|2|3|4|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20');
        });

        it('should return right result 2', function () {
            expect((function () {
                var array = makeArray(6);

                utilx.Array.splice(array, array.length - 1, 1, '');
                utilx.Array.splice(array, 0, 1, 1, 2, 3, 4);
                utilx.Array.splice(array, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
                    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40,
                    41, 42, 43, 44, 45);

                utilx.Array.splice(array, 4, 0, '99999999999999');

                return utilx.Array.join(array, '|');
            }())).to.be('1|2|3|4|99999999999999|5|6|7|8|9|10|11|12|13|14|15|16|17|18|19|20|' +
                '21|22|23|24|25|26|27|28|29|30|31|32|33|34|35|36|37|38|39|40|' +
                '41|42|43|44|45|1|2|3|4| 1|  2|   3|    4|');
        });

        it('should return right result 3', function () {
            expect((function () {
                var array = [1, 2, 3],
                    tmp;

                utilx.Array.splice(array, 0);
                utilx.Array.splice(array, 0, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
                utilx.Array.splice(array, 1, 1, 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                    'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20',
                    'F21', 'F22', 'F23', 'F24', 'F25', 'F26');
                utilx.Array.splice(array, 5, 1, 'YYY', 'XXX');
                utilx.Array.splice(array, 0, 1);
                utilx.Array.splice(array, 0, 2);
                array.pop();
                array.push.apply(array, makeArray(10, '-'));
                utilx.Array.splice(array, array.length - 2, 10);
                utilx.Array.splice(array);
                utilx.Array.splice(array, 1, 1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9);
                utilx.Array.splice(array, 1, 1, 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                    'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20',
                    'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 1, 23, 4, 5, 6, 7, 8);
                utilx.Array.splice(array, 30, 10);
                utilx.Array.splice(array, 30, 1);
                utilx.Array.splice(array, 30, 0);
                utilx.Array.splice(array, 2, 5, 1, 2, 3, 'P', 'LLL', 'CCC', 'YYY', 'XXX');
                utilx.Array.push(array, 1, 2, 3, 4, 5, 6);
                utilx.Array.splice(array, 1, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 5, 6, 7, 8, 9);
                utilx.Array.splice(array, 3, 7);
                utilx.Array.unshift(array, 7, 8, 9, 10, 11);
                array.pop();
                utilx.Array.splice(array, 5, 2);
                array.pop();
                tmp = makeArray(8, '~');
                utilx.Array.unshift(tmp, array);
                utilx.Array.unshift.apply(null, tmp);
                array.pop();
                utilx.Array.splice(array, 3, 1, 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9', 'F10',
                    'F11', 'F12', 'F13', 'F14', 'F15', 'F16', 'F17', 'F18', 'F19', 'F20',
                    'F21', 'F22', 'F23', 'F24', 'F25', 'F26', 1, 23, 4, 5, 6, 7, 8);
                utilx.Array.splice(array, 4, 5, 'P', 'LLL', 'CCC', 'YYY', 'XXX');

                return utilx.Array.join(array, '|');
            }())).to.be('~0|~ 1|~  2|F1|P|LLL|CCC|YYY|XXX|F7|F8|F9|F10|F11|F12|F13|F14|F15|F16|F17|F18|F19|F20|' +
                'F21|F22|F23|F24|F25|F26|1|23|4|5|6|7|8|~    4|~     5|~      6|~       7|' +
                '7|8|9|10|11|2|4|5|6|7|8|9|CCC|YYY|XXX|F7|F8|F9|F10|F11|F12|F13|F14|F15|F16|F17|F18|' +
                'F19|F20|F21|F22|F23|F24|F25|F26|1|23|4|9|10|1|2|3|4|5|6|7|8|9|YYY|XXX|F6|F7|F8|F9|' +
                'F10|F11|F12|F13|F14|F15|F16|F17|F18|F19|F20|F21|F22|F23|F24|F25|F26|3|4|5|6|7|8|9|' +
                '-0|- 1|-  2|-   3|-    4|-     5|-      6|-       7|1|2|3');
        });

        it('should do nothing if method called with no arguments', function () {
            test = utilx.Array.slice(a, 0);
            expect(utilx.Array.splice(test)).to.eql([]);
            expect(test).to.eql(a);
        });

        it('should set first argument to 0 if first argument is set but undefined', function () {
            test = utilx.Array.slice(a, 0);

            var test2 = utilx.Array.slice(test, 0);

            expect(utilx.Array.splice(test, undefined, 2)).to.eql(test2.splice(0, 2));
            expect(test).to.eql(test2);
        });

        it('should deleted and return all items after "start" when second argument is undefined', function () {
            test = utilx.Array.slice(a, 0);
            expect(utilx.Array.splice(test, 0)).to.eql(a);
            expect(test).to.eql([]);
        });

        it('should deleted and return all items after "start" when second argument is undefined', function () {
            test = utilx.Array.slice(a, 0);
            expect(utilx.Array.splice(test, 2)).to.eql([b]);
            expect(test).to.eql([1, 'a']);
        });

        it('should work with objects - adding 1', function () {
            var obj = {};

            utilx.Array.splice(obj, 0, 0, 1, 2, 3);
            expect(obj.length).to.eql(3);
        });

        it('should work with objects - adding 2', function () {
            var obj = {
                0: 1,
                length: 1
            };

            utilx.Array.splice(obj, 1, 0, 2, 3);
            expect(obj.length).to.eql(3);
        });

        it('should work with objects - removing', function () {
            var obj = {
                0: 1,
                1: 2,
                2: 3,
                length: 3
            };

            utilx.Array.splice(obj, 0, 3);
            expect(obj.length).to.eql(0);
        });

        it('should work with objects - replacing', function () {
            var obj = {
                0: 99,
                length: 1
            };

            utilx.Array.splice(obj, 0, 1, 1, 2, 3);
            expect(obj.length).to.eql(3);
            expect(obj[0]).to.eql(1);
        });
    });
}());
