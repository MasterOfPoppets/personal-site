/*jslint node: true, nomen: true*/

(function () {
    'use strict';
    var fs = require('fs'),
        md = require('marked'),
        Firebase = require('firebase'),
        fb = new Firebase('https://fiery-heat-3490.firebaseio.com/');
    
    function getDirectories(dir) {
        var filePath;
        
        return fs.readdirSync(dir).filter(function (file) {
            filePath = dir + '/' + file;
            return fs.statSync(filePath).isDirectory();
        });
    }
    
    function getBlogEntries(callback) {
        fb.child('blogEntries').once('value', function (snapshot) {
            callback(snapshot.val());
        });
    }
    
    function getPostJSON(dir) {
        var filePath = './content/' + dir + '/post.json';
        
        return JSON.parse(fs.readFileSync(filePath));
    }
    
    exports.loadAll = function (req, res) {
        var i,
            blogEntryKeys = [],
            posts = [];
        
        // Get blog entries, providing a callback to render the jade template
        // with meta information when they are returned by Firebase.
        getBlogEntries(function (blogEntries) {
            blogEntryKeys = Object.keys(blogEntries);
            for (i = 0; i < blogEntryKeys.length; i = i + 1) {
                posts.push({
                    url: blogEntryKeys[i],
                    title: blogEntries[blogEntryKeys[i]].title,
                    date: blogEntries[blogEntryKeys[i]].date
                });
            }
            
            res.render(
                'partials/blog',
                {
                    posts: posts
                }
            );
        });
    };
    
    exports.test = function (req, res) {
        var blobby = '';
        fb.child('blogEntries').child(req.params.blogItem).on('value', function (snapshot) {
            console.log(snapshot.val());
            blobby = snapshot.val().post;
            res.render(
                'partials/blogEntry',
                {
                    md: md,
                    post: blobby
                }
            );
        });
    };
}());