class Game extends Editor{
    constructor(width, height, name) {
        super();
        createCanvas(width, height);
        this.name = name
        this.iteration = 0;
        this.width = width;
        this.height = height;

        // this could be a animation
        this.background = false;
        this.players = [];
        this.groundBoxes = [];
        this.boxes = [];
        this.stages = {};
        this.stageName = '';
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
                this.background[this.iteration%this.background.length] 
                ,0,0, this.width, this.height)
        } else {
            background(220)
        }
        pop()
        
    }

    addPlayer(x,y,width,height, name) {
        let player = new Player(x,y,width,height);
        player.setName(name);
        this.players.push(player);
        this.updateGroundDetector();

        return player
    }

    updateGroundDetector() {
        this.players.forEach(player => {
            Detector.clear(player.groundDetector)

            let bodyList = [player.body]

            for(let i =0; i < this.groundBoxes.length; i ++) {
                bodyList.push(this.groundBoxes[i].body);
            }

            Detector.setBodies(player.groundDetector, bodyList);
        })
    }

    setStage ( name ) {
        
    }

    addGround(x,y,width,height, options) {
        let g = new Ground(x,y,width,height, options);
        this.groundBoxes.push(g);
        this.updateGroundDetector();
        return g;
    }

    addBox(x,y,width,height) {
        let box = new Box(x,y,width,height);
        this.boxes.push(box);
        return box;
    }

    show() {
        this.players.forEach(player => player.show())
        this.groundBoxes.forEach(ground => ground.show())
        this.boxes.forEach(box => box.show())
        if(this.values.console) this.console.update();
    }
}