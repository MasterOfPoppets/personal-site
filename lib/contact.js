(function () {
  'use strict';
  
  var nodeMailer = require('nodemailer'),
      EventEmitter = require('events').EventEmitter,
      util = require('util'),
      https = require('https');
  
  module.exports = exports = Contact;
  
  function Contact (payload) {
    this.payload = payload;
    this.SECRET_KEY = process.env.RECAPTCHA_SECRET_KEY || 
      require('../data/recaptcha.json').secretkey;
  }
  
  function createMessage(payload) {
    return payload.name + ' (' + payload.email + ')<br><br>' + payload.message; 
  }
  
  util.inherits(Contact, EventEmitter);
  
  Contact.prototype.sendContactForm = function () {
    var errors = [];
    
    // Firstly check field validation
    if (errors.length > 0) {
      res.json({
        errors: errors
      }); 
    }
    
    // Then send off reCaptcha verification    
    this.voightKampffTest();
    
    this.on('vk-error', function (errors) {
      res.json({
        errors: errors
      });
    });
    
    this.on('vk-success', function () {
      this.sendEmail();
    });
  };
  
  Contact.prototype.sendEmail = function () {
    var transporter = nodeMailer.createTransport(),
        self = this;
    return transporter.sendMail(
      {
        from: 'noreply@garethhughes.io',
        to: 'gurrkin@gmail.com',
        subject: this.payload.subject,
        html: createMessage(this.payload)
      },
      function (error, info) {
        if (error) {
          self.emit('error', 'send-failure', error);
        } else {
          self.emit('success', info); 
        }
      }
    );
  };
  
  Contact.prototype.voightKampffTest = function () {
    var self = this,
        jsonResponse = {},
        apiRequest = 
          'https://www.google.com/recaptcha/api/siteverify?' +
          'secret=' + this.SECRET_KEY +
          '&response=' + this.payload.vkResponse;
    
    https.get(apiRequest, function (res) {
      res.on('data', function (data) {
        jsonResponse = JSON.parse(data);        
        if (jsonResponse.success) {
          self.emit('vk-success');
        } else {
          self.emit('vk-error', jsonResponse['error-codes']);
        }
      });
    });
  };
})();