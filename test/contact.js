var should = require('chai').should(),
    sinon = require('sinon'),
    Contact = require('../lib/contact');

describe('Contact', function () {
  describe('#sendContactForm', function () {
    var contact = new Contact(),
        voightKampffTestStub;

    it('should emit an error with validation failures', function (done) {  
      var errTimeout = setTimeout(function () {
            true.should.not.be.ok;
            done();
          }, 1000);
      
      voightKampffTestStub = sinon.stub(
        Contact.prototype, 
        'voightKampffTest'
      ).returns(false);

      contact.on('error', function (errorType, errors) {
        clearTimeout(errTimeout);
        errorType.should.equal('validation-failure');
        errors.should.deep.equal(['voight_kampff_test']);
        done();
      });

      contact.sendContactForm();
    });

    it('should send mail if there are no validation failures', function () {
      var sendEmailStub = sinon.stub(Contact.prototype, 'sendEmail');
      
      voightKampffTestStub = sinon.stub(
        Contact.prototype, 
        'voightKampffTest'
      ).returns(true);
      
      contact.sendContactForm();
      
      sendEmailStub.called.should.be.ok;
      sendEmailStub.restore();
    });

    afterEach(function () {
      voightKampffTestStub.restore();
    });
  });

  describe('#sendMail', function () {
    var contact = new Contact();
    
    it('should emit an error if mail sending fails');

    it('should emit success if mail sending succeeds');
  });

  describe('#voightKampffTest', function () {
    it('should check if the users answer is correct', function () {
      var contact = new Contact({
        vkQuestion: {
          num1: '2',
          num2: '2'
        }
      });
      
      contact.payload.vkAnswer = '4';
      contact.voightKampffTest().should.be.true;
      
      contact.payload.vkAnswer = '42';
      contact.voightKampffTest().should.be.false;
    });
  });
});