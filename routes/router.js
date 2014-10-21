/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    exports.loadPartial = function (req, res) {
        res.render(
            'partials/' + req.params.section
        );
    };
    
    exports.loadPartialItem = function (req, res) {
        res.render(
            'partials/' + req.params.section + '/' + req.params.item
        );
    };
    
    exports.index = function (req, res) {
        res.render(
            'layout'
        );
    };
}());