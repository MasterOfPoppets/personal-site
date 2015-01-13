var chai = require('chai'),
    sinon = require('sinon'),
    Contact = require('../lib/contact');

chai.should();
chai.use(require('chai-things'));

function setEmitTimeout(done) {
  return setTimeout(function () {
    true.should.not.be.ok;
    done();
  });
}

describe('Contact', function () {
  var payload;
    
  beforeEach(function () {
    payload = {
      enquiry_name: 'Gareth Hughes',
      enquiry_email: 'test@gmail.com',
      enquiry_message: 'This is a test message'
    };
  });
  
  it('should accept a payload', function () {
    contact = new Contact(payload);
    contact.payload.should.deep.equal(payload);
  });
  
  describe('#processContactForm', function () {
    var emitTimeout,
        sendEmailStub,
        validateContactFormStub;
    
    beforeEach(function () {
      sendEmailStub = sinon.stub(Contact.prototype, 'sendEmail');
      validateContactFormStub = sinon.stub(Contact.prototype, 'validateContactForm');
    });
    
    it('should emit bot-detected error if email field is submitted', function (done) {
      payload.email = 'bot@gmail.com';
      var contact = new Contact(payload);
      
      emitTimeout = setEmitTimeout(done);
      contact.on('error', function (errorType) {
        clearTimeout(emitTimeout);
        errorType.should.equal('bot-detected');
        validateContactFormStub.called.should.be.false;
        sendEmailStub.called.should.be.false;
        done();
      });
      contact.processContactForm();
    });
    
    it('should emit a validation-failure if there are errors', function (done) {
      var contact = new Contact(payload);
      
      validateContactFormStub.returns(['test error']);      
      emitTimeout = setEmitTimeout(done);
      contact.on('error', function (errorType, errors) {
        clearTimeout(emitTimeout);
        errorType.should.equal('validation-failure');
        errors.should.deep.equal(['test error']);
        sendEmailStub.called.should.be.false;
        done();
      });
      contact.processContactForm();
    });
    
    it('should send email if everything is ok', function () {
      var contact = new Contact(payload);
      
      validateContactFormStub.returns([]);
      contact.processContactForm();
      sendEmailStub.called.should.be.true;
    });
    
    afterEach(function () {
      sendEmailStub.restore();
      validateContactFormStub.restore();
    });
  });
  
  describe('#validateContactForm', function () {    
    it('should return errors in array if fields missing', function () {
      var contact = new Contact({});
      
      contact.validateContactForm().should.have.deep.property(
        'enquiry_name', 'Name is required'
      );
      contact.validateContactForm().should.have.deep.property(
        'enquiry_email', 'Email address is required'
      );
      contact.validateContactForm().should.have.deep.property(
        'enquiry_message', 'Message is required'
      );
    });
    
    it('should return errors in array if email is invalid', function () {
      var contact = new Contact({enquiry_email: 'invalid email'});
      
      contact.validateContactForm().should.have.deep.property(
        'enquiry_email', 'Invalid email address'
      );
    });
  });

  describe('#sendMail', function () {
    it('should emit an error if mail sending fails');

    it('should emit success if mail sending succeeds');
  });
});