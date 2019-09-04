
export function siftPrimes(number) {
  var numbers = [];
  for (var i = 2; i <= number; i++) {
    numbers.push(i);
  }
  for (var prime = 2; prime < numbers.length; prime++) {
    var numberMultiple = [];
    for (var j = 0; j < numbers.length; j++){
      if (numbers[j] % prime != 0 || numbers[j] === prime) {
        numberMultiple.push(numbers[j]);
      }
    }
    numbers = numberMultiple.slice();
  }
  return numbers;
}
