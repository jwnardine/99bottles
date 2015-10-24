describe('beerBottle', function() {
  it("is false for user inputs less than zero", function() {
    expect(beerBottle(-7)).to.equal(false);
  });
  it("finishes at 0", function() {
    expect(beerBottle(0)).to.equal(true);
  });

  it("begins at 99", function() {
    expect(beerBottle(99)).to.equal(true);
  });

  it("decreases by one", function() {
    expect(beerBottle(-1)).to.equal(true);
  });

});
