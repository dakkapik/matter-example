class Input {
    constructor(){
        // change this name to envVars
        this.values = {
            play: true,
            editStage: false,
            console: true,
            selectedItem: -1
        }

        this.inputQueue = new Set();
        this.console = new Console();

        this.buttons = {
            start: document.getElementById('bt-game'),
            console: document.getElementById('bt-console'),
            stage: document.getElementById('bt-stage'),
            stageSave: document.getElementById('bt-save-stage')
        }

        this.buttons.console.addEventListener("click", ()=> {
            this.values.console ? this.hideConsole() : this.showConsole();
        })

        this.buttons.start.addEventListener("click", ()=>{
            this.values.play ? this.pauseGame() : this.startGame()
        })

        this.disableEditStage();
        this.buttons.stage.addEventListener("click", ()=>{
            if(this.values.editStage) {
                this.disableEditStage()
            } else {
                this.pauseGame()
                this.enableEditStage()
            }
        })

        this.buttons.stageSave.addEventListener("click", ()=> this.saveStage())
    }

    hideConsole () {
        this.values.console = false;
        this.buttons.console.innerHTML = "show HUD"
        this.console.hide()
    }

    showConsole() {
        this.values.console = true;
        this.buttons.console.innerHTML = "hide HUD"
        this.console.show()
    }

    saveStage() {
        console.log("SAVE STAGE")
    }

    enableEditStage() {
        this.buttons.stage.innerHTML = "stop editing";
        this.buttons.stageSave.removeAttribute("hidden")
        this.values.editStage = true;
    }
    
    disableEditStage() {
        this.buttons.stage.innerHTML = "edit stage";
        this.buttons.stageSave.setAttribute("hidden", "hidden")
        this.values.editStage = false;
    }

    pauseGame () {
        Runner.stop(runner);
        this.values.play = false;
        this.buttons.start.innerHTML = "play game";
    }

    startGame () {
        this.disableEditStage();
        Runner.run(runner, engine);
        this.values.play = true;
        this.buttons.start.innerHTML = "stop game";
    }


    addKey(keyCode) {
        this.inputQueue.add(keyCode)
    }
    rmKey(keyCode){
        this.inputQueue.delete(keyCode)
    }
}