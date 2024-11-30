let hours = document.getElementById('hour');
let mins = document.getElementById('min');
let secs = document.getElementById('sec');
let msecs = document.getElementById('msec');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('stop').addEventListener('click', stopTimer);
document.getElementById('reset').addEventListener('click', resetTimer);


let msec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let interval;


function startTimer() {
    if (!interval) {
        interval = setInterval(() => {
            msec++;
            if (msec === 100) {
                msec = 0;
                sec++;
            }
            if (sec === 60) {
                sec = 0;
                min++;
            }
            if (min === 60) {
                min = 0;
                hour++;
            }
           

            msecs.textContent = msec < 10 ? "0" + msec : msec;
            secs.textContent = (sec < 10 ? "0" + sec : sec) + ":";
            mins.textContent = (min < 10 ? "0" + min : min) + ":";
            hours.textContent = (hour < 10 ? "0" + hour : hour) + ":";
        }, 10);
    }
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

function resetTimer() {

    msec = 0;
    sec = 0;
    min = 0;
    hour = 0;

}




