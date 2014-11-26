var should = require('chai').should(),
    sinon = require('sinon'),
    nock = require('nock'),
    Contact = require('../lib/contact');

describe('Contact', function () {
  describe('#sendContactForm', function () {
    it('should respond with error on validation errors');
    
    it('should respond with error on voight-kampff test failure');
    
    it('should attempt to send mail if all validation passes'); 
  });

  describe('#sendMail', function () {
    it('should emit an error if mail sending fails');

    it('should emit success if mail sending succeeds');
  });

  describe('#voightKampffTest', function () {  
    it('should emit an vk-error if recaptcha response fails', function (done) {
      var contact = new Contact({
            vkResponse: 'test' 
          }),
          errTimeout = setTimeout(function () {
            sinon.assert.fail('Event not emitted');
            done();
          }, 1000);
      
      nock('https://www.google.com')
        .filteringPath(function (path) {
          return '/test';
        })
        .get('/test')
        .reply(200, { 
          "success": false,
          "error-codes": ['invalid-input-response']
        });
      
      contact.on('vk-error', function (errors) {
        clearTimeout(errTimeout);
        errors[0].should.equal('invalid-input-response');
        done();
      });
      
      contact.voightKampffTest();
    });
    
    it('should emit vk-success if recaptcha response succeeds', function (done) {
      var contact = new Contact({
            vkResponse: 'test' 
          }),
          errTimeout = setTimeout(function () {
            sinon.assert.fail('Event not emitted');
            done();
          }, 1000);
      
      nock('https://www.google.com')
        .filteringPath(function (path) {
          return '/test';
        })
        .get('/test')
        .reply(200, { "success": true });
      
      contact.on('vk-success', function () {
        clearTimeout(errTimeout);
        done();
      });
      
      contact.voightKampffTest();
    });
    
    afterEach(function () {
      nock.cleanAll();
    });
  });
});