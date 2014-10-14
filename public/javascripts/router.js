/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var router = require('express').Router();
    
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
    
    router.get('/blog', function (req, res) {
        res.render(
            'blog',
            {title: 'Blog | '}
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
            'portfolio/portfolio',
            {title: 'Portfolio | '}
        );
    });
    
    router.get('/portfolio/:portfolioItem', function (req, res) {
        res.render(
            'portfolio/portfolio-items/' + req.params.portfolioItem,
            {title: 'Portfolio | '}
        );
    });
    
    router.get('/skills', function (req, res) {
        res.render(
            'skills',
            {title: 'Skill | '}
        );
    });
    
    router.get('/', function (req, res) {
        res.render(
            'home/home',
            {title: ''}
        );
    });
    
    exports.router = router;
}());