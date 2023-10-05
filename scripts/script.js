$(document).ready(function () {
    console.log("Let's learn something about me!");
  
    //Button facts
  
    $("#btnMyFacts").click(function () {
      $("#coolFactsOutput").html();
      
  
      let userNumber = Number($("#userNumber").val());
      console.log("user number = ", userNumber);
      //let coolFactsOutput = generateCoolFacts(userNumber);
  
      $("#coolFactsOutput").html(number(userNumber));
      $("#coolFactsOutputs").html(getPersonalFact(userNumber));
      $('#coolFactsOutputs').css('color', 'red');
    });
  });
  
  
  
  
  function number(userNumber) {
            return;
  }
  
  
    //Defined Function
  
    function getPersonalFact(userNumber) {
      if (userNumber < 1 || userNumber > 10) {
        return "Enter a number 1-10!";
      } else if (userNumber == 1) {
        return "At the time of making this I am 22 years old!";
      } else if (userNumber == 2) {
        return "I am from Ardmore, Alabama!";
      } else if (userNumber == 3) {
        return "My favorite video game is Skyrim!"
      } else if (userNumber == 4) {
        return "I have yet to beat Elden Ring HAHAHA!";
      } else if (userNumber == 5) {
        return "My favorite college football team is Tennessee!";
      } else if (userNumber == 6) {
        return "My favorite kind of food is Mexican food!";
      } else if (userNumber == 7) {
        return "My favorite language to code in is Python!";
      } else if (userNumber == 8) {
        return "I am right handed!";
      } else if (userNumber == 9) {
        return "I love to play golf when I can!";
      } else if (userNumber == 10) {
        return "I am six feet and two inches tall!";
      } else {
        return "Did you enter a valid number?";
      }
    }