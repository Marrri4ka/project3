$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());


    for (i = 0; i <= number; i++) {
      var number1 = i.toString();
      for (j = 0; j < number1.length; j++) {
        if (number1[j] === "1") {
          number1 = number1.replace(number1[j], "Bob");


        }

      }
      console.log(number1);
    }

    // var count1 = 0;
    // var count2 = 0;
    // var count3 = 0;
    // for (var i = 0; i <= number.length; i++) {
    //
    //   if (number[i] === "1") {
    //     count1 += 1;
    //   }
    //   if (number[i] === "2") {
    //     count2 += 1;
    //   }
    //   if (number[i] === "3") {
    //     count3 += 1;
    //   }
    // }
    //
    //
    // if (count3 > 0) {
    //   console.log("Sorry");
    // } else if (count2 > 0) {
    //   console.log("Bob");
    // } else if (count1 > 0) {
    //   console.log("Beep");
    // } else {
    //   console.log(number);
    // }
    // console.log(count1, count2, count3);
    //
    //
    // if number > 10 {
    //   else {
    //
    //   }
    // }
    //


  });

});