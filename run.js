/*global document, window */

/*properties
    appendChild, checkLeaks, createElement, getElementsByTagName, mocha, onload,
    run, setup, src, timeout, type, ui
*/

(function (oldOnload) {
    'use strict';

    window.onload = function () {
        if (oldOnload) {
            try {
                oldOnload();
            } catch (ignore) {}
        }

        var script = document.createElement('script');

        script.type = 'text/javascript';
        script.src = './mocha.js';
        script.onload = function () {
            window.mocha.setup({
                ui: 'bdd',
                timeout: 1200000
            });

            script = document.createElement('script');
            script.type = 'text/javascript';
            script.src = './brow.js';
            script.onload = function () {
                window.mocha.checkLeaks();
                window.mocha.run();
            };

            document.getElementsByTagName('body')[0].appendChild(script);
        };

        document.getElementsByTagName('body')[0].appendChild(script);
    };
}(window.onload));
