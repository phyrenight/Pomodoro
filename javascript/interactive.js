(function(){
  "use strict";

  var gameState =  {
      tickTock : "",
      breakTime : 5,
      workTime : 25
  }

  var clockbutton = document.getElementById("time_left");
  var addBreakTime = document.getElementById("incBreakTime");
  var subBreakTime = document.getElementById("decBreakTime");
  var addWorkTime = document.getElementById("incWorkTime");
  var subWorkTime = document.getElementById("decWorkTime");
  
  clockbutton.addEventListener("click", startStop, false);
  addBreakTime.addEventListener("click", increaseBreak, false);
  subBreakTime.addEventListener("click", decreaseBreak, false);
  addWorkTime.addEventListener("click", increaseWork, false);
  subWorkTime.addEventListener("click", decreaseWork, false);

  var stat = 0; // off setting is zero(0) on setting is one(1)
  var breakOrWork = 0;

  function increaseBreak() {
    if(gameState.breakTime < 60) {
      gameState.breakTime++;
    }
	  document.getElementById("breaks").innerHTML = gameState.breakTime;
  }

  function decreaseBreak() {
    if(gameState.breakTime > 0) {
      gameState.breakTime--;
    }
	  document.getElementById("breaks").innerHTML = gameState.breakTime;
  }

  function increaseWork() {
    if( gameState.workTime < 60){
      gameState.workTime++;
    }
    document.getElementById("work").innerHTML = gameState.workTime;
  }

  function decreaseWork() {
    if(gameState.workTime > 0){
      gameState.workTime--;
    }
    document.getElementById("work").innerHTML = gameState.workTime;
  }

  function clock(){
    /*
      function: used for timer countdown
    */
    alarmAndSwitch();
    var timerTime = document.getElementById("time_left").innerHTML;
    timerTime = timerTime + ":00";
    var ss = timerTime.split(":");
    var d = new Date();
    d.setHours(0);
    d.setMinutes(ss[0]);
    d.setSeconds(ss[1]);
    var d2 = new Date(d.valueOf() - 1000);
    var tempDate = d2.toTimeString().split(" ");
    var tD = tempDate[0].split(":");
    document.getElementById("time_left").innerHTML = (tD[1]+ ":" +tD[2]);
  } 

  function alarmAndSwitch() {
    /*
      function: switches timer between the work and the break time  
    */
    var timer = document.getElementById("time_left").innerHTML;
    if(timer < "00:01"){
      soundAlarm();
      if(breakOrWork < 1){
        breakOrWork = 1;
        document.getElementById("time_left").innerHTML = gameState.breakTime;
      }
      else{
        breakOrWork = 0;
        document.getElementById("time_left").innerHTML = gameState.workTime;
      }
    }
  }


  function startStop(){
    /*
      function: starts and stops counter , then resets it to the current work setting.(reword)
    */
    if (stat == 1){ // stops the clock
	    clearInterval(gameState.tickTock);
      stat = 0;
	    document.getElementById("time_left").innerHTML = gameState.workTime;
    }
    else { // starts the clock
	    stat = 1;
	    document.getElementById("time_left").innerHTML = gameState.workTime;
	    gameState.tickTock = setInterval(clock,1000);
    }
  }

  function soundAlarm(){
    var bell = document.getElementById("sound");
    bell.play();
  }
})();