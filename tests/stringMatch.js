/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('stringMatch', function () {
        //var msg;

        describe('with a global regex', function () {
            it('should return an array with all matches', function () {
                expect(utilx.arraySlice(utilx.stringMatch('a bc', /(\w)/g))).to.eql(['a', 'b', 'c']);
            });

            it('should return null if no match is found', function () {
                expect(utilx.stringMatch('a bc', /x/g)).to.be(null);
            });

            it('should reset lastIndex to 0 when a match is found', function () {
                var regex = /x/g;

                regex.lastIndex = 1;
                utilx.stringMatch('123x5', regex);
                expect(regex.lastIndex).to.be(0);
            });

            it('should reset lastIndex to 0 when no match is found', function () {
                var regex = /x/g;

                regex.lastIndex = 1;
                utilx.stringMatch('123', regex);
                expect(regex.lastIndex).to.be(0);
            });

            it('should start the search at the beginning of the string, ignoring lastIndex', function () {
                var regex = /x/g;

                regex.lastIndex = 4;
                expect(utilx.stringMatch('123x5', regex)).to.be.ok();
            });

            it('should convert any nonstring context to a string (except null and undefined)', function () {
                expect(utilx.arraySlice(utilx.stringMatch(11, /1/g))).to.eql(['1', '1']);
            });

            /*
            msg = 'should throw an exception when called on null or undefined context, if strict mode is supported';
            it(msg, function () {
                utilx.arrayForEach([null, undefined], function (value) {
                    // This doesn't work the same when strict mode isn't supported, because the match
                    // method will be called with the global object (window) as its context, rather
                    // than null or undefined
                    if (hasStrictMode) {
                        expect(function () {
                            utilx.stringMatch(value, /x/g);
                        }).toThrow(TypeError);
                    } else {
                        // Keep the assertion count consistent cross-browser
                        expect(hasStrictMode).to.be(false);
                    }
                });
            });
            */
        });

        describe('with a nonglobal regex', function () {
            it('should convert any provided non RegExp object to a RegExp', function () {
                // These don't error because, per the spec, the values are passed through new RegExp()
                // before being used as the context object for the (fixed) RegExp.prototype.exec
                var tests = [
                    {
                        str: '12',
                        regex: '^(1)',
                        result: ['1', '1']
                    },
                    // This would throw if the string was converted to an XRegExp rather than RegExp
                    {
                        str: '\x01',
                        regex: '\\1',
                        result: ['\x01']
                    },
                    // The converted value '[object Object]' creates a character class
                    {
                        str: '[obj]',
                        regex: {},
                        result: ['o']
                    }, {
                        str: 'null',
                        regex: null,
                        result: ['null']
                    }
                ];

                utilx.arrayForEach(tests, function (test) {
                    expect(utilx.arraySlice(utilx.stringMatch(test.str, test.regex))).to.eql(test.result);
                });
            });

            /*
            msg = 'should throw an exception when called on null or undefined context, if strict mode is supported';
            it(msg, function () {
                utilx.arrayForEach([null, undefined], function (value) {
                    // This doesn't work the same when strict mode isn't supported, because the match
                    // method will be called with the global object (window) as its context, rather
                    // than null or undefined
                    if (hasStrictMode) {
                        expect(function () {
                            utilx.stringMatch(value, /x/);
                        }).toThrow(TypeError);
                    } else {
                        // Keep the assertion count consistent cross-browser
                        expect(hasStrictMode).to.be(false);
                    }
                });
            });
            */
        });
    });
}());
