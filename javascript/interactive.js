//var workTime = 25;
var stat = 0; // off setting is zero(0) on setting is one(1)
var breakOrWork = 0;

function assignvar()
{
//  document.getElementById("work").innerHTML = workTime;
//  document.getElementById("time_left").innerHTML = workTime;
}

function increaseBreak() {
  var breakTime = parseInt(document.getElementById("breaks").innerHTML);
  if(breakTime < 60) {
    breakTime++;
    document.getElementById("breaks").innerHTML = breakTime;
  }
  else{
	document.getElementById("breaks").innerHTML = breakTime;
  }
}

function decreaseBreak() {
  var breakTime = parseInt(document.getElementById("breaks").innerHTML);
  if(breakTime > 0) {
    breakTime--;
    document.getElementById("breaks").innerHTML = breakTime;
  }
  else {
	document.getElementById("breaks").innerHTML = breakTime;
  }
}

function increaseWork() {
  var workTime = parseInt(document.getElementById("work").innerHTML);
  if( workTime < 60){
    workTime++;
    document.getElementById("work").innerHTML = workTime;
  }
  else{
	document.getElementById("work").innerHTML = workTime;
  }
}

function decreaseWork() {
  var workTime = parseInt(document.getElementById("work").innerHTML);
  if(workTime > 0){
    workTime--;
    document.getElementById("work").innerHTML = workTime;
  }
  else {
    document.getElementById("work").innerHTML = workTime;
  }
}

function clock(){
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
  var timer = document.getElementById("time_left").innerHTML;
  if(timer < "00:01"){
    soundAlarm();
    if(breakOrWork < 1){
      breakOrWork = 1;
      document.getElementById("time_left").innerHTML = breakTime;
    }
    else{
      breakOrWork = 0;
      document.getElementById("time_left").innerHTML = workTime;
    }
  }
}

function startStop(){
  if (stat == 1){ // stops the clock
	clearInterval(tickTock);
	stat = 0;
	document.getElementById("time_left").innerHTML = workTime;
  }
  else { // starts the clock
	stat = 1;
	document.getElementById("time_left").innerHTML = workTime;
	tickTock = setInterval(clock,1000);
  }
}

function soundAlarm(){
  var bell = document.getElementById("sound");
  bell.play();
}