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
                ms += 100;
                if (ms == 1000) {
                    ms=0;
                    s++;                    
                }
                if (s==60){
                    s = 0;
                    m++;
                }    
                if (m == 60){
                        m = 0;
                        h++;
                }                
                msecond.innerText = ms;
                second.innerText = s;
                minute.innerText = m;
                hour.innerText = h;
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
    timer_stop=true;
    ms = s = m = h = 0;
    msecond.innerText = ms;
    second.innerText = s;
    minute.innerText = m;
    hour.innerText = h;
}