class Game extends Editor{
    constructor(width, height, name) {
        super();
        createCanvas(width, height);
        this.name = name;
        this.width = width;
        this.height = height;

        this.objects = []
        this.players = []
        this.ground = []
        this.boxes = []
        this.attacks = []

        if(name ) {
            this.background =  loadImage(`assets/background/${name}.png`)
        } else {
            this.background = false;
        }
    }

    changeToStage(){

    }

    saveStage( ) {
        if(this.stages[this.name]){
            console.log("STAGE WITH THIS NAME ALREADY EXISTS")
        } else {
            this.stageName = this.name;
            this.stages[this.name] = new Stage();
            this.stages[this.name].saveStage(
                this.name,
                this.width,
                this.height,
                this.background,
                this.players,
                this.groundBoxes,
                this.boxes
            )
        }
    }

    setBackground(bgAnimation) {
        // console.log(bgAnimation[0])
        // array of loaded images for bg animation
        this.background = bgAnimation
    }


    redraw() {
        this.iteration ++
        push()
        imageMode(CORNERS)
        if(this.background) {
            image(
                this.background 
                ,0,0, this.width, this.height)
        } else {
            background(220)
        }
        pop()
        
    }

    addPlayer(x,y,width,height, name) {
        let player = new Player(x,y,width,height);
        player.setName(name);
        this.objects.push(player);
        this.players.push(player);
        this.updateCollisionDetector();

        return player
    }

    addAttackDetector(attack) {
        this.attacks.push(attack)
        this.updateCollisionDetector()
    }

    removeAttackDetector (id) {
        this.attacks = this.attacks.filter(attack => {
            attack.attBody.id !== id
        })
        this.updateCollisionDetector()
    }

    updateCollisionDetector() {
        this.players.forEach(player => {
            Detector.clear(player.detector)

            let bodyList = [player.body]

            for(let i = 0; i < this.objects.length; i++ ) {
                if(this.objects[i].body.label === "ground") {
                    bodyList.push(this.objects[i].body);
                }
            }

            for(let i =0; i < this.attacks.length; i++ ) {
                if(this.attacks[i].playerId !== player.body.id){
                    bodyList.push(this.attacks[i].attBody)
                }
            }

            Detector.setBodies(player.detector, bodyList);
        })
    }

    addGround(x,y,width,height, options) {
        let ground = new Ground(x,y,width,height, options);
        this.objects.push(ground);
        this.updateCollisionDetector();
        return ground;
    }

    addBox(x,y,width,height) {
        let box = new Box(x,y,width,height);
        this.objects.push(box);
        return box;
    }

    show() {
        this.objects.forEach(object => object.update())
        if(this.values.console) this.console.update();
    }

    showHitboxes() {
        this.objects.forEach(obj => obj.showHitbox())
    }
}