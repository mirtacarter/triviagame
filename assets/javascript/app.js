$(document).ready(function () {
// Global variables
//=======================================================================================    

    //Counter variables
    var number = 120;
    var intervalId;



// Counter Functions
//=======================================================================================   
    //Start button begins game clock, hides itself, and shows the quiz accordion
    $("#startbutton").on("click", function (){
        $(this).hide();
        $(".counter").show();
        $(".gamewrapper").show();
        startClock();
    });


    // Counter will decrement by 1 second when game is started
    function startClock() {
      clearInterval(intervalId);
      intervalId = setInterval(decrement, 1000);
    }

    //  The decrement function.
    function decrement() {

      //  Decrease number by one.
      number--;

      //  Show the counter on the page
      $(".counter").html("<h2>" + number + "</h2>");


      //  Once number hits zero...
      if (number === 0) {

        //  ...run the stop function.
        stop();

        //  Alert the user that time is up.
        alert("Time Up!");
      }
    }


    function stop() {
        //  Clears our intervalId
        clearInterval(intervalId);
      }


// Trivia Question Retrieval
//=======================================================================================   

































});