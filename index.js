class Timer{
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton;
        this.pauseButton = pauseButton;
        if(callbacks) {
            this.onStart = callbacks.onStart;
            this.onTick = callbacks.onTick;
            this.onComplete = callbacks.onComplete;
        }


        this.startButton.addEventListener('click', this.start);
        this.pauseButton.addEventListener('click', this.pause);
    };

    start = () => {
        if(this.onStart) {
            this.onStart();
        };
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval)
    };

    tick = () => {
        if(this.timeRemaining <= 0) {
            this.pause();
            this.onComplete();
        } else {
            this.timeRemaining = this.timeRemaining - 1;
            this.onTick();
        }
    };

    get timeRemaining() {
        return durationInput.value;
    };

    set timeRemaining(time) {
        this.durationInput.value = time;
    };


};

const durationInput = document.querySelector('#durationInput');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = new Timer(durationInput, startButton, pauseButton, {
    onStart() {
        console.log('Timer started')
    },
    onTick() {
        console.log('Timer ticked')
    },
    onComplete() {
        console.log('Timer is completed')
    }
});