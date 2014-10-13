/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var express = require('express'),
        stylus = require('stylus'),
        nib = require('nib'),
        app = express(),
        router = express.Router(),
        port = process.env.PORT || 3000;
    
    function compile(str, path) {
        return stylus(str)
            .set('compress', true)
            .set('filename', path)
            .use(nib());
    }
    
    app.set('views', __dirname + '/views');
    app.set('view engine', 'jade');
    
    router.use(function (req, res, next) {
        console.log(req.method, req.url);
        next();
    });
    
    router.get('/contact', function (req, res) {
        res.render(
            'contact',
            {title: 'Contact | '}
        );
    });
    
    router.get('/playtime', function (req, res) {
        res.render(
            'playtime',
            {title: 'Playtime | '}
        );
    });
    
    router.get('/portfolio', function (req, res) {
        res.render(
            'portfolio',
            {title: 'Portfolio | '}
        );
    });
    
    router.get('/portfolio/:portfolioItem', function (req, res) {
        res.render(
            'portfolio-items/' + req.params.portfolioItem,
            {title: 'Portfolio | '}
        );
    });
    
    router.get('/', function (req, res) {
        res.render(
            'index',
            {title: ''}
        );
    });
    
    app.use(stylus.middleware({
        src: __dirname + '/public',
        compile: compile
    }));
    app.use('/', router);
    app.use(express.static(__dirname + '/public'));
    
    app.listen(port);
}());