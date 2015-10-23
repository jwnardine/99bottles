describe('beerBottle', function() {
  it("writes out '(input) bottles of beer on the wall, (input) bottles of beer! We take on down, and pass it around'", function() {
    expect(beerBottle(99)).to.equal('99 bottles of beer on the wall, 99 bottles of beer! We take one down, and pass it around');
  });
});
