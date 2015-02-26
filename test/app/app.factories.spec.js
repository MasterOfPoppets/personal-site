var should = chai.should()

describe('PageFactory', function () {
  var PageFactory

  beforeEach(module('gh.factories'))
  beforeEach(inject(function (_PageFactory_) {
    PageFactory = _PageFactory_
  }))

  it('should have some default settings', function () {
    PageFactory.title().should.equal('Gareth Hughes')
    PageFactory.showExpandedItem().should.be.false
  })

  describe('#newPage()', function () {
    beforeEach(function () {
      PageFactory.setShowExpandedItem(true);
      PageFactory.newPage('Test')
    })

    it('should change the title', function () {
      PageFactory.title().should.equal('Test')
    })

    it('should reset the expansion flag', function () {
      PageFactory.showExpandedItem().should.be.false
    })
  })

  describe('#setShowExpandedItem()', function () {
    beforeEach(function () {
      PageFactory.setShowExpandedItem(true);
    })

    it('should change the expansion flag', function () {
      PageFactory.showExpandedItem().should.be.true
    })
  })
})
