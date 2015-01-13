(function () {
  'use strict';
  
  var nodeMailer = require('nodemailer'),
      EventEmitter = require('events').EventEmitter,
      util = require('util'),
      validator = require('validator');
  
  module.exports = exports = Contact;
  
  function Contact (payload) {
    this.payload = payload;
  }
  
  function createMessage(payload) {
    return payload.enquiry_name + ' (' + payload.enquiry_email +
      ')<br><br>' + payload.enquiry_message; 
  }
  
  util.inherits(Contact, EventEmitter);
  
  Contact.prototype.processContactForm = function () {
    if (this.payload.email) {
      this.emit('error', 'bot-detected');
      return;
    } 
    
    var errors = this.validateContactForm();
    console.log(errors);
    if (Object.keys(errors).length > 0) {
      this.emit('error', 'validation-failure', errors);
      return;
    }
    
    this.sendEmail();
  };
  
  Contact.prototype.validateContactForm = function () {
    var errors = {};
    
    if (!this.payload.enquiry_name) {
      errors.enquiry_name = 'Name is required';
    }
    
    if (!this.payload.enquiry_email) {
      errors.enquiry_email = 'Email address is required';
    } else if (!validator.isEmail(this.payload.enquiry_email)) {
      errors.enquiry_email = 'Invalid email address'; 
    }
    
    if (!this.payload.enquiry_message) {
      errors.enquiry_message = 'Message is required';
    }
    
    return errors;
  };
  
  Contact.prototype.sendEmail = function () {
    var transporter = nodeMailer.createTransport(),
        self = this;
    return transporter.sendMail(
      {
        from: 'noreply@garethhughes.io',
        to: 'gurrkin@googlemail.com',
        subject: this.payload.enquiry_subject || 'General enquiry',
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
})();