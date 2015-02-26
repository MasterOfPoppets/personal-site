var should = chai.should();

describe('PageFactory', function () {
  var PageFactory

  beforeEach(module('gh.factories'))
  beforeEach(inject(function (_PageFactory_) {
    PageFactory = _PageFactory_;
  }))

  it('should be all good now', function (done) {
    should.not.exist(null);
    done();
  })

  it('should be all good now', function (done) {
    should.exist(null);
    done();
  })
});
