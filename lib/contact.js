(function () {
  'use strict';
  
  var nodeMailer = require('nodemailer'),
      EventEmitter = require('events').EventEmitter,
      util = require('util'),
      https = require('https'),
      keys = require('../data/recaptcha.json');
  
  module.exports = exports = Contact;
  
  function Contact (payload) {
    this.payload = payload;
  }
  
  function createMessage(payload) {
    return payload.name + ' (' + payload.email + ')<br><br>' + payload.message; 
  }
  
  util.inherits(Contact, EventEmitter);
  
  Contact.prototype.sendContactForm = function () {
    var errors = [];
    
    if (!this.voightKampffTest()) {
      errors.push('voight_kampff_test');
    }
    
    if (errors.length > 0) {
      this.emit('error', 'validation-failure', errors);
    } else {
      this.sendEmail(); 
    }
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
          'secret=' + keys.secretkey +
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