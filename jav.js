const display = document.getElementById('display');
const startPauseButton = document.getElementById('startPause');
const lapButton = document.getElementById('lap');
const resetButton = document.getElementById('reset');
const lapTimesContainer = document.getElementById('lapTimes');

let isRunning = false;
let startTime;
let interval;

startPauseButton.addEventListener('click', toggleStartPause);
lapButton.addEventListener('click', recordLap);
resetButton.addEventListener('click', resetStopwatch);

function toggleStartPause() {
    if (!isRunning) {
        isRunning = true;
        startPauseButton.textContent = 'Pause';
        startTime = Date.now() - (startTime ? startTime : 0);
        interval = setInterval(updateDisplay, 10);
    } else {
        isRunning = false;
        startPauseButton.textContent = 'Start';
        clearInterval(interval);
    }
}

function updateDisplay() {
    const currentTime = Date.now() - startTime;
    const formattedTime = formatTime(currentTime);
    display.textContent = formattedTime;
}

function formatTime(time) {
    // Convert time to HH:MM:SS format
    // You can implement this formatting logic based on your preference
}

function recordLap() {
    if (isRunning) {
        const lapTime = formatTime(Date.now() - startTime);
        const lapItem = document.createElement('div');
        lapItem.textContent = lapTime;
        lapTimesContainer.appendChild(lapItem);
    }
}

function resetStopwatch() {
    clearInterval(interval);
    isRunning = false;
    startPauseButton.textContent = 'Start';
    display.textContent = '00:00:00';
    startTime = undefined;
    lapTimesContainer.innerHTML = '';
}
