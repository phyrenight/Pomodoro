breakTime = 5;
workTime = 25;
stat = 0; // off setting is zero(0) on setting is one(1)
breakOrWork = 0;
function assignvar()
{
  document.getElementById("breaks").innerHTML = breakTime;
  document.getElementById("work").innerHTML = workTime;
  document.getElementById("time_left").innerHTML = workTime
}

function increaseBreak() {
	if(breakTime < 60) {
        breakTime++;
	    document.getElementById("breaks").innerHTML = breakTime;
    }
    else{
		document.getElementById("breaks").innerHTML = breakTime;
	}
}

function decreaseBreak() {
	if(breakTime > 0) {
        breakTime--;
	    document.getElementById("breaks").innerHTML = breakTime;
    }
	else {
		document.getElementById("breaks").innerHTML = breakTime;
	}
}

function increaseWork() {
    if( workTime < 60){
	    workTime++;
	    document.getElementById("work").innerHTML = workTime;
    }
	else{
		document.getElementById("work").innerHTML = workTime;
	}
}
function decreaseWork() {
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
	timerTime = timerTime + ":00"
	var ss = timerTime.split(":");
	var d = new Date();
	d.setHours(0);
	d.setMinutes(ss[0]);
	d.setSeconds(ss[1]);
	var d2 = new Date(d.valueOf() - 1000);
	tempDate = d2.toTimeString().split(" ");
	tD = tempDate[0].split(":");
	document.getElementById("time_left").innerHTML = (tD[1]+ ":" +tD[2]);
} 

function alarmAndSwitch() {
	timer = document.getElementById("time_left").innerHTML;
	if(timer < "00:01"){
		if(breakOrWork < 1){
			breakOrWork = 1
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