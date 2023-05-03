class Input {
    constructor(){
        this.values = {
            play: true
        }
        // this.startButton = document.getElementById('play-gm');
        this.inputQueue = new Set();

//         this.startButton.addEventListener("click", ()=>{
//             if(!this.values.play){
//                 Runner.run(runner, engine);
//             } else {
//                 Runner.stop(runner);
//             }

//             this.values.play = !this.values.play;
//             this.values.play?
//             this.startButton.innerHTML = "stop":
//             this.startButton.innerHTML = "play";
//         })
    }

    addKey(keyCode) {
        this.inputQueue.add(keyCode)
    }
    rmKey(keyCode){
        this.inputQueue.delete(keyCode)
    }
}