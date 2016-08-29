var alarmTime = prompt("Enter a number of seconds");
var alarmSound = new Audio('alarm.mp3');
var timerButton = document.getElementById("time");
var seconds;
var minutes;
if (alarmTime >= 60)
{
	seconds = Math.ceil(alarmTime % 60);
	minutes = Math.floor(alarmTime / 60);
}
else
{
	seconds = alarmTime;
	minutes = 0;
}
timerButton.innerHTML = minutes.toString()+":"+seconds.toString();
var id;

id = setInterval(function() {
	if(seconds > 0)
	{
		seconds--;
		timerButton.innerHTML = minutes.toString()+":"+seconds.toString();
	}
	else if(seconds === 0)
	{
		minutes--;
		seconds = 59;
		timerButton.innerHTML = minutes.toString()+":"+seconds.toString();
	}
	if(seconds === 0 && minutes === 0)
	{
		alarmSound.play();
		clearInterval(id);
	}
}, 1000);