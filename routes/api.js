(function () {
  'use strict';

  var Contact = require('../lib/contact'),
      gm = require('gm');

  var IMAGES_DIR = './public/images/';

  exports.contact = function (req, res) {
    var contact = new Contact(req.body);

    contact.once('error', function (errorType, errors) {
      res.json({
        success: false,
        errorType: errorType,
        errors: errors
      });
    });

    contact.once('success', function (info) {
      res.json({
        success: true
      });
    });

    contact.processContactForm(req.body);
  };

  exports.loadImage = function (req, res) {
    var img = gm(IMAGES_DIR + req.params.section + '/' + req.params.img),
        split = [];

    res.set('Content-Type', 'image/jpeg');

    if (req.query.crop) {
      split = req.query.crop.split(',');
      img.crop(split[0], split[1], split[2], split[3]);
    }

    if (req.query.w) img.resize(req.query.w, ">");

    img.stream(function (err, stdout, stderr) {
      stdout.pipe(res);
    });
  };
}());
