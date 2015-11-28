breakTime = 5;
workTime = 25;
stat = 0; // off setting is zero(0) on setting is one(1)

function assignvar()
{
  document.getElementById("breaks").innerHTML = breakTime;
  document.getElementById("work").innerHTML = workTime;
  document.getElementById("time_left").innerHTML = workTime
}

function increaseBreak() {
    breakTime = breakTime + 1;
	document.getElementById("breaks").innerHTML = breakTime;
}

function decreaseBreak() {
    breakTime = breakTime - 1;
	document.getElementById("breaks").innerHTML = breakTime;
}

function increaseWork() {
    workTime++;
	document.getElementById("work").innerHTML = workTime;
}
function decreaseWork() {
    workTime = workTime - 1;
	document.getElementById("work").innerHTML = workTime;
	
}

function clock(){
	var timerTime = document.getElementById("time_left").innerHTML;
	timerTime = timerTime + ":00"
	var ss = timerTime.split(":");
	var d = new Date();
	d.setHours(0);
	d.setMinutes(ss[0]);
	console.log(ss[0])
	d.setSeconds(ss[1]);
	console.log(d);
	var d2 = new Date(d.valueOf() - 1000);
	tempDate = d2.toTimeString().split(" ");
	tD = tempDate[0].split(":");
	document.getElementById("time_left").innerHTML = (tD[1]+ ":" +tD[2]);
} 


function startStop(){
	if (stat == 1){ // stops th clock
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