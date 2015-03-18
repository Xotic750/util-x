/*jslint browser: true, devel: true */

(function () {
    'use strict';

    var $Object = Object,
        hasOwn = $Object.prototype.hasOwnProperty,
        toClass = $Object.prototype.toString,
        $String = String,
        isStrictMode,
        hasCallBug,
        print,
        testItems,
        methods;

    function strictEqual(a, b) {
        return a === b;
    }

    function isUndefined(inputArg) {
        return strictEqual(typeof inputArg, 'undefined');
    }

    function isPrimitive(inputArg) {
        var type = typeof inputArg;

        return type === 'undefined' ||
            inputArg === null ||
            type === 'boolean' ||
            type === 'string' ||
            type === 'number';
    }

    function toInteger(inputArg) {
        var number = +inputArg,
            val = 0;

        if (strictEqual(number, number)) {
            if (!number || number === Infinity || number === -Infinity) {
                val = number;
            } else {
                val = (number > 0 || -1) * Math.floor(Math.abs(number));
            }
        }

        return val;
    }

    function stringify(inputArg) {
        var val;

        if (inputArg === null) {
            val = 'null';
        } else if (isUndefined(inputArg)) {
            val = 'undefined';
        } else {
            val = $String(inputArg);
        }

        return val;
    }

    function checkObjectCoercible(inputArg) {
        if (inputArg === null || isUndefined(inputArg)) {
            throw new TypeError('Cannot convert argument to object: ' + stringify(inputArg));
        }

        return inputArg;
    }

    function toObject(inputArg) {
        return $Object(checkObjectCoercible(inputArg));
    }

    function toLength(inputArg) {
        return Math.min(Math.max(toInteger(inputArg), 0), Math.pow(2, 32) - 1);
    }

    function inPrototype(inputArg, property) {
        if (isPrimitive(inputArg)) {
            throw new TypeError('called on non-object: ' + stringify(inputArg));
        }

        var rtn;

        if (!isPrimitive(inputArg.constructor) && !isPrimitive(inputArg.constructor.prototype)) {
            console.log(hasOwn.call(inputArg.constructor.prototype, stringify(property)));
            rtn = hasOwn.call(inputArg.constructor.prototype, stringify(property));
        } else {
            rtn = false;
        }

        return rtn;
    }

    function isFunction(inputArg) {
        return !isPrimitive(inputArg) &&
            hasOwn.call(inputArg, 'length') &&
            typeof inputArg.length === 'number' &&
            inPrototype(inputArg, 'call') &&
            inPrototype(inputArg, 'apply');
    }

    /*
    function slice(array, start, end) {
        var object = toObject(array),
            length = toLength(object.length),
            relativeStart = toInteger(start),
            val = [],
            next = 0,
            relativeEnd,
            finalEnd,
            k;

        if (relativeStart < 0) {
            k = Math.Max(length + relativeStart, 0);
        } else {
            k = Math.min(relativeStart, length);
        }

        if (isUndefined(end)) {
            relativeEnd = length;
        } else {
            relativeEnd = toInteger(end);
        }

        if (relativeEnd < 0) {
            finalEnd = Math.max(length + relativeEnd, 0);
        } else {
            finalEnd = Math.min(relativeEnd, length);
        }

        val.length = Math.max(finalEnd - k, 0);
        while (k < finalEnd) {
            if (k in object) {
                val[next] = object[k];
            }

            next += 1;
            k += 1;
        }

        return val;
    }
    */

    isStrictMode = (function () {
        return !this;
    }()) || false;

    hasCallBug = (function () {
        var returnThis = function () {
            return this;
        };

        return !isStrictMode && typeof returnThis.call('foo') === 'string';
    }()) || false;

    function toObjectCallFix(inputArg) {
        var object = inputArg,
            type;

        if (hasCallBug) {
            type = typeof inputArg;
            if (type === 'boolean' || type === 'number' || type === 'string') {
                object = $Object(inputArg);
            }
        }

        return object;
    }

    function forEach(arr, fn, thisArg) {
        var object = toObject(arr),
            length,
            index;

        if (!isFunction(fn)) {
            throw new TypeError('Argument is not a function: ' + stringify(fn));
        }

        length = toLength(object.length);
        if (length) {
            thisArg = toObjectCallFix(thisArg);
        }

        for (index = 0; index < length; index += 1) {
            if (index in object) {
                fn.call(thisArg, object[index], index, object);
            }
        }
    }

    print = (function (out) {
        return function print(mtd, itm, res, val) {
            var row = document.createElement('tr'),
                method = document.createElement('td'),
                item = document.createElement('td'),
                result = document.createElement('td'),
                isFun = document.createElement('td');

            method.appendChild(document.createTextNode(stringify(mtd)));
            item.appendChild(document.createTextNode(stringify(itm)));
            result.appendChild(document.createTextNode(stringify(res)));
            isFun.appendChild(document.createTextNode(stringify(isFunction(val))));

            row.appendChild(method);
            row.appendChild(item);
            row.appendChild(result);
            row.appendChild(isFun);

            out.appendChild(row);
        };
    }(document.getElementById('out')));

    methods = [{
        name: 'typeof',
        fn: function (inputArg) {
            return typeof inputArg;
        }
    }, {
        name: 'toString',
        fn: function (inputArg) {
            return toClass.call(inputArg);
        }
    }];

    testItems = [{
        name: 'Number',
        value: Number
    }, {
        name: 'String',
        value: String
    }, {
        name: 'Boolean',
        value: Boolean
    }, {
        name: 'Array',
        value: Array
    }, {
        name: 'Object',
        value: Object
    }, {
        name: 'Function',
        value: Function
    }, {
        name: 'RegExp',
        value: RegExp
    }, {
        name: 'Date',
        value: Date
    }, {
        name: 'Number.prototype',
        value: Number.prototype
    }, {
        name: 'String.prototype',
        value: String.prototype
    }, {
        name: 'Boolean.prototype',
        value: Boolean.prototype
    }, {
        name: 'Array.prototype',
        value: Array.prototype
    }, {
        name: 'Object.prototype',
        value: Object.prototype
    }, {
        name: 'Function.prototype',
        value: Function.prototype
    }, {
        name: 'RegExp.prototype',
        value: RegExp.prototype
    }, {
        name: 'Date.prototype',
        value: Date.prototype
    }, {
        name: 'isNaN',
        value: isNaN
    }, {
        name: 'isFinite',
        value: isFinite
    }, {
        name: 'setTimeout',
        value: setTimeout
    }, {
        name: 'setInterval',
        value: setInterval
    }, {
        name: 'alert',
        value: alert
    }, {
        name: 'function () { return; }',
        value: function () {
            return;
        }
    }, {
        name: '/x/',
        value: /x/
    }];

    forEach(methods, function (method) {
        forEach(testItems, function (testItem) {
            print(method.name, testItem.name, method.fn(testItem.value), testItem.value);
        });
    });
}());
