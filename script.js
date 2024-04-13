let stopBtn = document.getElementById('play'); 
let timer = document.querySelector('.Timer'); 
let resetBtn = document.querySelector('.reset'); 
let sec = 0;
let mins = 0;
let hrs = 0;

let stopWatchInterval;
let isTimerRunning = false; 
stopBtn.addEventListener("click", () => {
    if (!isTimerRunning) {
        stopWatchInterval = setInterval(() => {
            sec++;
            if (sec >= 60) {
                mins++;
                sec = 0;
            }
            if (mins >= 60) {
                hrs++;
                mins = 0;
            }
            let display = `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}:${sec < 10 ? '0' + sec : sec}`;
            timer.textContent = display;
        }, 10); 
        isTimerRunning = true; 
        stopBtn.innerHTML = '<i class="fa-solid fa-stop"></i>'; 
    } else { 
        clearInterval(stopWatchInterval);
        isTimerRunning = false; 
        stopBtn.innerHTML = '<i class="fa-solid fa-play"></i>'; 
    }
});

resetBtn.addEventListener("click", () => {
    clearInterval(stopWatchInterval);
    sec = 0;
    mins = 0;
    hrs = 0;
    let display = `${hrs < 10 ? '0' + hrs : hrs}:${mins < 10 ? '0' + mins : mins}:${sec < 10 ? '0' + sec : sec}`;
    timer.textContent = display; 
});
