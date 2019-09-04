import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { siftPrimes } from './scripts.js';

$(document).ready(function() {
  $("#input").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("#number-input").val());
    var primes = siftPrimes(userNumber).join(", ");
    $("#output").text(primes);
  });
});
