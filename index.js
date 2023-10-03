class Timer {
    constructor(inputDuration, startButton, pauseButton, circle) {
        this.inputDuration = inputDuration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        this.circle = circle;

        startButton.addEventListener('click', this.startTimer);
        pauseButton.addEventListener('click', this.pauseTimer);
    }

    startTimer = () => {
        console.log('Timer started');
        this.tick();
    }

    pauseTimer = () => {
        console.log('Timer paused');
        clearInterval(this.interval);
    }

    tick = () => {
        this.interval = setInterval(() => {
            if(parseFloat(this.inputDuration.value) <= 0) {
                this.pauseTimer();
            } else {
                this.inputDuration.value -= 1;
            }
        }, 1000);
    }

    onDurationChange = () => {

    }
}

const input = document.querySelector('#inputDuration');
const start = document.querySelector('#startButton');
const pause = document.querySelector('#pauseButton');
const circle = document.querySelector('#timerCircle');

const timer = new Timer(input, start, pause);