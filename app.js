/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var express = require('express'),
        stylus = require('stylus'),
        nib = require('nib'),
        app = express(),
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
    app.use(express.static(__dirname + '/public'));
    
    app.get('/contact', function (req, res) {
        res.render(
            'contact',
            {title: 'Contact | '}
        );
    });
    
    app.get('/playtime', function (req, res) {
        res.render(
            'playtime',
            {title: 'Playtime | '}
        );
    });
    
    app.get('/', function (req, res) {
        res.render(
            'index',
            {title: ''}
        );
    });
    app.listen(port);
}());