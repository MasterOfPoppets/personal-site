/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var express = require('express'),
        app = express(),
        router = require('./public/javascripts/router'),
        stylus = require('stylus'),
        nib = require('nib'),
        port = process.env.PORT || 3000;
    
    function compile(str, path) {
        return stylus(str)
            .set('compress', true)
            .set('filename', path)
            .use(nib());
    }
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    
    app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }));
    app.use('/', router.router);
    app.use(express.static(__dirname + '/public'));
    app.use('*', router.router);
    
    app.listen(port);
}());