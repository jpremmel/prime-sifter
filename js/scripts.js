$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number-input").val());
    var numbers = [];
    var prime = 2;
    for (var i = 2; i <= userNumber; i++) {
      numbers.push(i);
    }

    var numberMultiple = [];
    numbers.forEach(function(number) {
      if (number % prime != 0) {
        numberMultiple.push(number);
      }
      console.log(numberMultiple);
    })


  });
});
