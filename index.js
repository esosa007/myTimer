class Timer {
    constructor(inputDuration, startButton, pauseButton) {
        this.inputDuration = inputDuration;
        this.startButton = startButton;
        this.pauseButton = pauseButton;

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
            console.log('tick')
        }, 1000)
    }
}

const input = document.querySelector('#inputDuration');
const start = document.querySelector('#startButton');
const pause = document.querySelector('#pauseButton');

const timer = new Timer(input, start, pause);