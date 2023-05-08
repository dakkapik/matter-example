class Input {
    constructor(){
        // change this name to envVars
        this.values = {
            play: true,
            editStage: false,
            console: true,
            selectedBody: null,
            selectedItemId: -1,
            selectedItemLabel: "",
            //0=move / 1=width / 2=height
            editMode: 0
        }

        this.inputQueue = new Set();
        this.console = new Console();

        this.buttons = {
            start: document.getElementById('bt-game'),
            console: document.getElementById('bt-console'),
            stage: document.getElementById('bt-stage'),
            stageSave: document.getElementById('bt-save-stage'),
            editPosition: document.getElementById('bt-edit-position'),
            editWidth: document.getElementById('bt-edit-width'),
            editHeight: document.getElementById('bt-edit-height')
        }

        this.buttons.editPosition.addEventListener("click", ()=> this.setEditMode(0))
        this.buttons.editWidth.addEventListener("click", ()=> this.setEditMode(1))
        this.buttons.editHeight.addEventListener("click", ()=> this.setEditMode(2))

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

        this.buttons.stageSave.addEventListener("click", ()=> {
            this.saveStage();
        })
    }

    setEditMode(mode) {
        console.log(mode)
        this.values.editMode = mode
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

    enableEditStage() {
        this.buttons.stage.innerHTML = "stop editing";
        this.values.editStage = true;
        document.getElementById("edit-div").removeAttribute("hidden")
    }
    
    disableEditStage() {
        this.buttons.stage.innerHTML = "edit stage";
        this.values.editStage = false;
        document.getElementById("edit-div").setAttribute("hidden", "hidden")
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