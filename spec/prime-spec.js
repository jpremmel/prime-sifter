import { siftPrimes } from '../src/scripts.js';

describe('siftPrimes()', function() {
  var userInput;

  beforeEach(function() {
    userInput = 9;
  });

  it ('should do nothing for any input other than a number greater than 1', function() {
    expect(userInput).toBeGreaterThan(1);
  });

  it('should list all prime numbers from 2 to user input', function(){
    var exampleOutput = [2, 3, 5, 7];
    expect(siftPrimes(userInput)).toEqual(exampleOutput);
  });
});
