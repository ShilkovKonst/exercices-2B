let msecond = document.getElementById('millisecond');
let second = document.getElementById('second');
let minute = document.getElementById('minute');
let hour = document.getElementById('hour');
let ms = s = m = h = 0;
let timer_stop = timer_start = false;

function updateChrono() {
    if (!timer_start) {
        let interval = setInterval(function change() {
            timer_start = true;
            if (!timer_stop) {
                if (ms < 900) {
                    ms = ms + 100;
                    msecond.innerText = ms;
                }
                else {
                    ms = 0;
                    msecond.innerText = ms;
                    s++;
                    if (s < 60) {
                        second.innerText = s;
                    }
                    else {
                        s = 0;
                        second.innerText = s;
                        m++;
                        if (m < 60) {
                            minute.innerText = m;
                        }
                        else {
                            m = 0;
                            minute.innerText = m;
                            h++;
                            hour.innerText = h;
                        }
                    }
                }
            }
            else {
                clearInterval(interval);
                timer_stop = false;
                timer_start = false;
            }
        }, 100);
    } else return;
}
function start() {
    updateChrono();
}
function stop() {
    timer_stop = true;
}
function reset() {
    ms = s = m = h = 0;
    msecond.innerText = ms;
    second.innerText = s;
    minute.innerText = m;
    hour.innerText = h;
}