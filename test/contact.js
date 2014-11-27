var should = require('chai').should(),
    sinon = require('sinon'),
    Contact = require('../lib/contact');

describe('Contact', function () {
  describe('#validateContactForm', function () {
    it('should emit error on validation errors');
    
    it('should attempt to send mail if all validation passes'); 
  });

  describe('#sendMail', function () {
    it('should emit an error if mail sending fails');

    it('should emit success if mail sending succeeds');
  });
});