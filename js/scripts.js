//UI logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var res = "";

    if (isNaN(number) || number === "") {
      alert("Please enter a number!")
    } else {
      for (i = 0; i <= number; i++) {
        var number1 = i.toString();

        var count1 = 0;
        var count2 = 0;
        var count3 = 0;
        for (var k = 0; k <= number1.length; k++) {

          if (number1[k] === "1") {
            count1 += 1;
          }
          if (number1[k] === "2") {
            count2 += 1;
          }
          if (number1[k] === "3") {
            count3 += 1;
          }
        }


        if (count3 > 0) {
          res = "Sorry";
        } else if (count2 > 0) {
          res = "Bob";
        } else if (count1 > 0) {
          res = "Beep";
        } else {
          res = number1;
        }
        $("ul").append("<li>" + res + "</li>");

      }
    }

  });

});