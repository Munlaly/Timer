const time = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");
const storageKey = "time";

let secondsElapsed = parseInt(localStorage.getItem(storageKey)) || 0;
let interval = null;

function format(value) {
    return String(value).padStart(2,"0");
}

function timer() {
    secondsElapsed++;
    localStorage.setItem(storageKey, secondsElapsed);
    setTime();
}

function setTime(){
    const hours = Math.floor(secondsElapsed / 3600);
    const minutes = Math.floor(secondsElapsed % 3600 /60);
    const seconds = secondsElapsed % 60;
    time.textContent =`${format(hours)}:${format(minutes)}:${format(seconds)}`;
}

function startClock() {
    if(!interval) 
    interval = setInterval(timer, 1000);
    

}

function pauseClock() {
    clearInterval(interval);
    interval = null;
}

function resetClock() {
    pauseClock();
    secondsElapsed = 0;
    localStorage.removeItem(storageKey);
    setTime();

}

setTime();

startBtn.addEventListener('click',startClock); 
pauseBtn.addEventListener('click', pauseClock);
resetBtn.addEventListener('click', resetClock);
