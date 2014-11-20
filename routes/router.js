(function () {
  'use strict';
  
  function voight_kampff(vkVars, vkAnswer) {
    var num1 = parseInt(vkVars.num1),
        num2 = parseInt(vkVars.num2),
        ans = parseInt(vkAnswer);
    
    return num1 + num2 === ans;
  }

  exports.loadPartial = function (req, res) {
    res.render('partials/' + req.params.section);
  };

  exports.loadPartialItem = function (req, res) {
    res.render('partials/' + req.params.section + '/' + req.params.item);
  };
  
  exports.loadBlogEntry = function (req, res) {
    res.render('partials/blogEntry');
  };
  
  exports.camera = function (req, res) {
    res.render('mobCamera'); 
  };
  
  exports.contact = function (req, res) {
    var nodeMailer = require('nodemailer'),
        transporter = nodeMailer.createTransport();
    
    if (voight_kampff(req.body.vk, req.body.voight_kampff)) {
      console.log('Handling contact request');
      
      transporter.sendMail({
        from: 'noreply@garethhughes.com',
        to: 'gurrkin@gmail.com',
        subject: req.body.subject,
        text: req.body.message
      });
    } else {
      console.log('REPLICANT!');
    }
    
    res.end();
  };

  exports.index = function (req, res) {
    res.render('layout');
  };
}());