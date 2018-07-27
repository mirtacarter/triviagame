$(document).ready(function () {
// Global variables
//=======================================================================================    

    //Counter variables
    var number = 60;
    var intervalId;
    var correct = 0;
    var incorrect = 0;

    // Game variables
  


// Counter Functions
//=======================================================================================   
    //Start button begins game clock, hides itself, and shows the quiz accordion
    $("#startbutton").on("click", function (){
        $(this).hide();
        $(".counter").show();
        $(".gamewrapper").show();
        startClock();
    });

 


        $("input").on("focus", function(){
        if ($(this).attr("value") === "correct"){
            correct++;
        }    
        
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
        alert("Time is up!");
      }
    }


    function stop() {
        //  Clears our intervalId
        clearInterval(intervalId);
      }


// Trivia Play
//=======================================================================================   



$("#gameOver").on("click", function (){
    stop();
    $(".counter").hide();
    $(".gamewrapper").hide();
    
    console.log("you got " + correct + " questions right");

});
































});