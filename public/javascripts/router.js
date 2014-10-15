/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    
    var router = require('express').Router(),
        gm = require('gm');
    
    router.use(function (req, res, next) {
        console.log(req.method, req.url);
        next();
    });
    
    router.get('/partials/:name', function (req, res) {
        res.render(
            'partials/' + req.params.name
        );
    });
    
    router.get('/partials/portfolio/:portfolioItem', function (req, res) {
        res.render(
            'partials/portfolio-items/' + req.params.portfolioItem
        );
    });
    
    router.get('/partials/playtime/:playtimeItem', function (req, res) {
        res.render(
            'partials/playtime-items/' + req.params.playtimeItem
        );
    });
    
    router.get('/images/playtime/:img', function (req, res) {
        res.set('Content-Type', 'image/jpeg');
        
        var img = gm('./public/images/playtime/' + req.params.img),
            split = [];
        
        if (req.query.crop) {
            split = req.query.crop.split(',');
            img.crop(split[0], split[1], split[2], split[3]);
        }
        
        if (req.query.w) {
            img.resize(req.query.w, "<");
        }
        
        img.stream(function (err, stdout, stderr) {
            stdout.pipe(res);
        });
    });
    
    router.get('/', function (req, res) {
        res.render(
            'layout'
        );
    });
    
    exports.router = router;
}());