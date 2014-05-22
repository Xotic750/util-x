/*global require, describe, it */

(function () {
    'use strict';

    var required = require('../scripts/'),
        utilx = required.utilx,
        expect = required.expect;

    describe('Number.toNumber', function () {
        it('objects with only toString should throw a TypeError in each case', function () {
            expect(function () {
                utilx.Number.toNumber({toString: ''});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({toString: '1'});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({toString: 1});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({toString: 1.1});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            /*jshint -W047 */
            expect(function () {
                utilx.Number.toNumber({toString: 1.});
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            /*jshint +W047 */
        });

        it('objects with only toString function should not throw', function () {
            expect(utilx.Number.toNumber({
                toString: function () {
                    return '';
                }
            })).to.be(0);

            expect(utilx.Number.toNumber({
                toString: function () {
                    return '1';
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                toString: function () {
                    return 1;
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                toString: function () {
                    return 1.1;
                }
            })).to.be(1.1);

            /*jshint -W047 */
            expect(utilx.Number.toNumber({
                toString: function () {
                    return 1.;
                }
            })).to.be(1);
            /*jshint +W047 */
        });

        it('objects with only valueOf should be NaN', function () {
            expect(utilx.Number.isNaN(utilx.Number.toNumber({}))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.toNumber({valueOf: ''}))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.toNumber({valueOf: '1'}))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.toNumber({valueOf: 1}))).to.be.ok();
            expect(utilx.Number.isNaN(utilx.Number.toNumber({valueOf: 1.1}))).to.be.ok();
            /*jshint -W047 */
            expect(utilx.Number.isNaN(utilx.Number.toNumber({valueOf: 1.}))).to.be.ok();
            /*jshint +W047 */
        });

        it('objects with only valueOf function should not throw', function () {
            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return '';
                }
            })).to.be(0);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return '1';
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1;
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1.1;
                }
            })).to.be(1.1);

            /*jshint -W047 */
            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1.;
                }
            })).to.be(1);
            /*jshint +W047 */
        });

        it('objects with toString and valueOf should throw an TypeError in each case', function () {
            expect(function () {
                utilx.Number.toNumber({
                    toString: '',
                    valueOf: ''
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({
                    toString: '1',
                    valueOf: '1'
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({
                    toString: 1,
                    valueOf: 1
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            expect(function () {
                utilx.Number.toNumber({
                    toString: 1.1,
                    valueOf: 1.1
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });

            /*jshint -W047 */
            expect(function () {
                utilx.Number.toNumber({
                    toString: 1.,
                    valueOf: 1.
                });
            }).to.throwException(function (e) {
                expect(e).to.be.a(TypeError);
            });
            /*jshint +W047 */
        });

        it('objects with toString and valueOf function should not throw', function () {
            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return '';
                },

                toString: function () {
                    return '1';
                }
            })).to.be(0);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return '1';
                },

                toString: function () {
                    return '2';
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1;
                },

                toString: function () {
                    return '';
                }
            })).to.be(1);

            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1.1;
                },

                toString: function () {
                    return '';
                }
            })).to.be(1.1);

            /*jshint -W047 */
            expect(utilx.Number.toNumber({
                valueOf: function () {
                    return 1.;
                },

                toString: function () {
                    return '';
                }
            })).to.be(1);
            /*jshint +W047 */
        });

        it('number literals should not throw errors', function () {
            expect(utilx.Number.toNumber(-1)).to.be(-1);
            expect(utilx.Number.toNumber(0)).to.be(0);
            expect(utilx.Number.toNumber(1)).to.be(1);
            /*jshint -W047 */
            expect(utilx.Number.toNumber(-1.)).to.be(-1);
            expect(utilx.Number.toNumber(0.)).to.be(0);
            expect(utilx.Number.toNumber(1.)).to.be(1);
            /*jshint +W047 */
            expect(utilx.Number.toNumber(-1.1)).to.be(-1.1);
            expect(utilx.Number.toNumber(0.1)).to.be(0.1);
            expect(utilx.Number.toNumber(1.1)).to.be(1.1);
            expect(utilx.Number.toNumber(0x0)).to.be(0);
            expect(utilx.Number.toNumber(0xA)).to.be(10);
            expect(utilx.Number.toNumber(0xFF)).to.be(255);
            expect(utilx.Number.toNumber(Infinity)).to.be(Infinity);
            expect(utilx.Number.toNumber(-Infinity)).to.be(-Infinity);
            expect(utilx.Number.isNaN(utilx.Number.toNumber(NaN))).to.be.ok();
            expect(utilx.Number.isNumber(utilx.Number.toNumber(new Date(2013, 11, 11)))).to.be.ok();
        });

        it('string literals should not throw errors', function () {
            expect(utilx.Number.toNumber('-1')).to.be(-1);
            expect(utilx.Number.toNumber('0')).to.be(0);
            expect(utilx.Number.toNumber('1')).to.be(1);
            expect(utilx.Number.toNumber('-1.')).to.be(-1);
            expect(utilx.Number.toNumber('0.')).to.be(0);
            expect(utilx.Number.toNumber('1.')).to.be(1);
            expect(utilx.Number.toNumber('-1.1')).to.be(-1.1);
            expect(utilx.Number.toNumber('0.1')).to.be(0.1);
            expect(utilx.Number.toNumber('1.1')).to.be(1.1);
            expect(utilx.Number.isNaN(utilx.Number.toNumber('NaN'))).to.be.ok();
            expect(utilx.Number.toNumber('Infinity')).to.be(Infinity);
            expect(utilx.Number.toNumber('-Infinity')).to.be(-Infinity);
        });

        it('arrays should not throw an error in each case', function () {
            expect(utilx.Number.toNumber([])).to.be(0);
            expect(utilx.Number.toNumber([1])).to.be(1);
            expect(utilx.Number.toNumber([1.1])).to.be(1.1);
            /*jshint -W047 */
            expect(utilx.Number.toNumber([1.])).to.be(1);
            /*jshint +W047 */
            expect(utilx.Number.toNumber([''])).to.be(0);
            expect(utilx.Number.toNumber(['1'])).to.be(1);
            expect(utilx.Number.toNumber(['1.1'])).to.be(1.1);
        });

        it('a function that returns a number should not throw an error', function () {
            expect(utilx.Number.isNaN(utilx.Number.toNumber(function () { return 1; }))).to.be.ok();
        });
    });
}());
