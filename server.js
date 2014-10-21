/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var express = require('express'),
        app = express(),
        router = require('./routes/router'),
        images = require('./routes/images'),
        stylus = require('stylus'),
        nib = require('nib'),
        port = process.env.PORT || 3000;
    
    // Special Stylus compile
    function compile(str, path) {
        return stylus(str)
            .set('compress', true)
            .set('filename', path)
            .use(nib());
    }
    
    // Config
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }));
    
    // General
    app.get('/', router.index);
    app.get('/images/:section/:img', images.loadImage);
    
    // Partials
    app.get('/partials/:name', router.loadPartial);
    app.get('/partials/:section/:item', router.loadPartialItem);
    
    // Misc.
    app.use(express.static(__dirname + '/public'));
    app.use('*', router.index);
    
    app.listen(port);
}());