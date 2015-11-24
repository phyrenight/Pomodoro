breakTime = 5;
workTime = 25;
stopTime = "0:00"
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
/*function clock(stopTime){
	var t = Date.parse(stopTime) - Date.parse(new Date());
	var seconds = Math.floor((t/1000)% 60);
	var minutes
} */