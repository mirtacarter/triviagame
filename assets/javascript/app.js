$(document).ready(function () {
// Global variables
//=======================================================================================    

    //Counter variables
    var number = 60;
    var intervalId;
    var correct = 0;


    // Game variables
  


// Counter Functions
//=======================================================================================   
    //Start button begins game clock, hides itself, and shows the quiz accordion
    $("#startbutton").on("click", function (){
        $(this).hide();
        startClock();
        $(".counter").show();
        $(".gamewrapper").show();
        
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

        //  Show game results
        gameOver;
      }
    }


    function stop() {
        //  Clears our intervalId
        clearInterval(intervalId);
      }


// Trivia Play
//=======================================================================================   


var gameOver = $("#gameOver").on("click", function (){
    stop();
    $(".counter").hide();
    $(".gamewrapper").hide();
    $("#content").show();
    
    if (correct > 3){
        $("#content").html("<h3>You got " + correct + " questions out of 5 correct! Great job!</h3><br>");
    
        $("#content").append("<img src=assets/images/win.jpg>");

    } else {
        $("#content").html("<h3>You got " + correct + " questions out of 5 correct! Better luck next time!</h3><br>");
    
        $("#content").append("<img src=assets/images/lose.jpg>");
    }

});
































});