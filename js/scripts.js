$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number-input").val());
    var prime = [];
    for (var i = 2; i <= userNumber; i++) {
      prime.push(i);
    }
    console.log(prime);

  });
});
