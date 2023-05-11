class Timer {
    constructor() {
        this.counter = 0;
        this.timers = []
    }

    addTimer (time, callback, fnName = "a", obj = {"a": ()=>{}}) {
        this.timers.push({time: time + this.counter, callback, fnName, obj})
    }

    tick() {
        this.timers.forEach((timer, index) => {
            if(this.counter > timer.time){
                timer.callback()
                this.timers.splice(index, 1)
            } else {
                timer.obj[timer.fnName]()
            }
        })
        this.counter ++
    } 
}