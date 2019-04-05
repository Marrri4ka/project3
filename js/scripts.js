//UI logic

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    var number = parseInt($("input#userInput").val());
    var name = $("input#userName").val();
    console.log(name);
    var res = "";
    var res1 = [];
    var Dave = "I'm sorry, Dave. I'm afraid I can't do that";
    var Dave1 = Dave.replace("Dave", name);
    console.log(Dave1);

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
          res = Dave;
        } else if (count2 > 0) {
          res = "Bob";
        } else if (count1 > 0) {
          res = "Beep";
        } else {
          res = number1;
        }
        result = res.split(", . ");
        for (m = 0; m < result.length; m++) {
          res1.push(result[m]);
        }

        $("#result ul").append("<li>" + res + "</li>");


      }


    }
    $("#upsidedown").click(function() {
      res1 = res1.reverse();
      res1.forEach(function(r) {
        $("#reverse ul").append("<li>" + r + "</li>");
      });

      $("#reverse").show();
      $("#result").hide();

    });

  });

});


// if (number % 3 === 0) {
//   for
// }