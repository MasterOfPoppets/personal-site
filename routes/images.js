(function () {
  'use strict';

  var gm = require('gm'),
      IMAGES_DIR = './public/images/';

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