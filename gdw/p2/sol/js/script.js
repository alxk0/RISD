/* DATE */

var dt = new Date();

document.getElementById('date-time').innerHTML=dt;

/* GREETING */

const time = new Date().getHours();
let greeting;
if (time < 10) {
  greeting = "GOOD MORNING.";
} else if (time < 20) {
  greeting = "GOOD AFTERNOON.";
} else {
  greeting = "GOOD EVENING.";
}
document.getElementById("greeting").innerHTML = greeting;