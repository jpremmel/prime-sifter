$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number-input").val());
    var numbers = [];

    for (var i = 2; i <= userNumber; i++) {
      numbers.push(i);
    }



    for (var prime = 2; prime < numbers.length; prime++) {
      var numberMultiple = [];
      for (var i = 0; i < numbers.length; i++){

        if (numbers[i] % prime != 0 || numbers[i] === prime) {
          numberMultiple.push(numbers[i]);
        }
      }

      console.log(numbers[0]);
      numbers = numberMultiple.slice();
      console.log(prime);
      console.log(numbers);

    }

  });
});
