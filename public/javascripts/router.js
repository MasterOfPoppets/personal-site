/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var router = require('express').Router();
    
    router.use(function (req, res, next) {
        console.log(req.method, req.url);
        next();
    });
    
    router.get('/partials/:name', function (req, res) {
        res.render(
            'partials/' + req.params.name,
            {title: 'Contact | '}
        );
    });
    
    router.get('/partials/portfolio/:portfolioItem', function (req, res) {
        res.render(
            'partials/portfolio-items/' + req.params.portfolioItem,
            {title: 'Portfolio | '}
        );
    });
    
    router.get('/', function (req, res) {
        res.render(
            'layout',
            {title: ''}
        );
    });
    
    exports.router = router;
}());