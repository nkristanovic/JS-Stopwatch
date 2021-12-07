let outputMinutes = document.querySelector('.min');
let outputSeconds = document.querySelector('.sec');
let outputTens = document.querySelector('.tens');
let buttonStart = document.querySelector('.btn-start');
let buttonStop = document.querySelector('.btn-stop');
let buttonReset = document.querySelector('.btn-reset');

let min = 00;
let sec = 00;
let tens = 00;
let interval;

function start() {
    tens++;
    if (tens <= 9) {
        outputTens.innerHTML = '0' + tens;
    }
    if (tens > 9) {
        outputTens.innerHTML = tens;
    }
    if (tens > 99) {
        sec++;
        outputSeconds.innerHTML = '0' + sec;
        tens = 00;
        outputTens.innerHTML = '0' + tens;
    }
    if (sec > 9) {
        outputSeconds.innerHTML = sec;
    }
    if (sec > 59) {
        min++;
        outputMinutes.innerHTML = '0' + min;
        sec = 00;
        outputSeconds.innerHTML = '0' + sec;
    }
    if (min > 9) {
        outputMinutes.innerHTML = min;
    }
};

buttonStart.addEventListener('click', () => {
   clearInterval(interval);
   interval = setInterval(start, 10);
});

buttonStop.addEventListener('click', () => {
    clearInterval(interval);
});

buttonReset.addEventListener('click', () => {
    clearInterval(interval);
    min = 00;
    sec = 00;
    tens = 00;
    outputMinutes.innerHTML = '0' + min;
    outputSeconds.innerHTML = '0' + sec;
    outputTens.innerHTML = '0' + tens;
});