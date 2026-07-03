let min = 0;
let sec = 0;
let ms = 0;

let timer = null;
let lapNumber = 1;

function stopwatch() {

    ms++;

    if (ms == 100) {
        ms = 0;
        sec++;
    }

    if (sec == 60) {
        sec = 0;
        min++;
    }

    let m = min < 10 ? "0" + min : min;
    let s = sec < 10 ? "0" + sec : sec;
    let milli = ms < 10 ? "0" + ms : ms;

    document.getElementById("display").innerHTML =
        `${m}:${s}:${milli}`;

}

function startWatch() {

    if (timer !== null)
        clearInterval(timer);

    timer = setInterval(stopwatch, 10);

}

function pauseWatch() {

    clearInterval(timer);

}

function resetWatch() {

    clearInterval(timer);

    min = 0;
    sec = 0;
    ms = 0;

    lapNumber = 1;

    document.getElementById("display").innerHTML = "00:00:00";

    document.getElementById("laps").innerHTML = "";

}

function lapTime() {

    if (min == 0 && sec == 0 && ms == 0)
        return;

    let time = document.getElementById("display").innerHTML;

    let li = document.createElement("li");

    li.innerHTML = `
    <span>Lap ${lapNumber}</span>
    <span>${time}</span>
    `;

    document.getElementById("laps").prepend(li);

    lapNumber++;

}