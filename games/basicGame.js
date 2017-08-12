// Global constants:
var PLAYGROUND_WIDTH    = 700;
var PLAYGROUND_HEIGHT    = 250;
var REFRESH_RATE        = 30;


//Initialise the game
$(“#playground”).playground(height: PLAYGROUND_HEIGHT, 
        width: PLAYGROUND_WIDTH, 
        keyTracker: true});
  
//Set id of loading bar
$().setLoadBar("loadingBar", 400);

//initialize the start button
$("#startbutton").click(function(){
$.playground().startGame(function(){
$("#welcomeScreen").remove();
});
})

