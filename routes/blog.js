/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    var fs = require('fs');
    
    function getDirectories(dir) {
        var filePath;
        
        return fs.readdirSync(dir).filter(function (file) {
            filePath = dir + '/' + file;
            return fs.statSync(filePath).isDirectory();
        });
    }
    
    function getPostJSON(dir) {
        var filePath = './content/' + dir + '/post.json';
        
        return JSON.parse(fs.readFileSync(filePath));
    }
    
    exports.loadAll = function (req, res) {
        var i,
            postDirs = getDirectories('./content'),
            posts = [],
            postJSON = '';
        
        for (i = 0; i < postDirs.length; i = i + 1) {
            postJSON = getPostJSON(postDirs[i]);
            posts.push({
                contentDir: postDirs[i],
                title: postJSON.title,
                date: postJSON.date,
                description: postJSON.description,
                post: fs.readFileSync('./content/' + postDirs[i] + '/full.jade')
            });
        }
        
        res.render(
            'partials/blog',
            {
                posts: posts
            }
        );
    };
    
    exports.test = function (req, res) {
        res.render(
            '../content/' + req.params.blogItem + '/full'
        );
    };
}());