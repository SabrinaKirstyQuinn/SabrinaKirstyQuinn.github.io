$(“#playground”).playground({refreshRate: 60});
  
  //initialize the start button
        $("#startbutton").click(function(){
          $.playground().startGame(function(){
            $("#welcomeScreen").fadeTo(1000,0,function(){$(this).remove();});
          });
        })

$().setLoadBar("loadingBar", 400);
