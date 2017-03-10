/*
 * css-parse.js
 *
 * Distributed under terms of the MIT license.
 */
if (typeof module === "object") {
    var define = require("requirejs").define;
}

define("_cssparser", [], function() {
    'use strict';
    const extractCss = function(text) {
        var start = text.indexOf("<style>");
        var end = text.indexOf("</style>");

        if( start === -1 ) {
            return false;
        } else {
            return text.substring(start + 7, end);
        }
    };

    const appendCSSStyle = function(css) {
        if(css === false) {
            return;
        } else {
            var style = document.createElement("style");
            var head = document.head || document.getElementsByTagName('head')[0];

            style.type = "text/css";
            if (style.styleSheet){
                style.styleSheet.cssText = css;
            } else {
                style.appendChild(document.createTextNode(css));
            }

            head.appendChild(style);
        }
    };
    
    return {
        extractCss: extractCss,
        appendCSSStyle: appendCSSStyle,

        parse: function(text) {
            const css = extractCss(text);
            appendCSSStyle(css);
        }
    };
});
/* vim: set tabstop=4 softtabstop=4 shiftwidth=4 noexpandtab : */
