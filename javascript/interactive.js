breakTime = 5;
workTime = 25;

document.getElementById("time_left").innerHTML = "25:00"
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

function clock(stopTime){
	var timerTime = document.getElementById("time_left").innerHTML;
	var ss = timeTimer.split(":");
	var d = new Date();
	d.setHours(0);
	d.setMinutes(ss[0]);
	d.setSeconds(ss[1]);
	var d2 = new Date(d.valueOf() - 1000);
	tempDate = d2.toTimeString().split(" ");
	tD = tempDate[0].split(":");
	document.getElementById(" ").innerHTML = (tD[1]+ ":" +tD[2]);
} 