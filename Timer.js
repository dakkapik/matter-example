class Timer {
    constructor() {
        this.counter = 0;
        this.timers = []
    }

    addTimer (time, callback) {    
        this.timers.push({time: time + this.counter, callback})
        console.log(this.timers)
    }

    tick() {
        this.timers.forEach((timer, index) => {
            if(this.counter > timer.time){
                timer.callback()
                this.timers.splice(index, 1)
            }
        })
        this.counter ++
    } 
}