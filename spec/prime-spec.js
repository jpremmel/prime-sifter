
describe('siftPrimes()', function() {
  var userInput;

  beforeEach(function() {
    userInput = -3;
  });

  it ('should do nothing for any input other than a number greater than 1', function() {
    expect(userInput).toBeGreaterThan(1);
  });
});
