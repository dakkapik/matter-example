class Game extends Input{
    constructor(width, height, stageName) {
        super();
        this.stage = new Stage(width, height, stageName)

        createCanvas(this.stage.w, this.stage.h);
        this.iteration = 0;
        // this.width = width;
        // this.height = height;

        // this could be a animation
        this.stage.setbackground(
            [ loadImage(`assets/background/${stageName}.png`) ])

        this.ids = {}
        this.players = [];
        this.groundBoxes = [];
        this.boxes = [];

        
    }

    setStage(name) {

    }


    redraw() {
        this.iteration ++
        push()
        imageMode(CORNERS)
        image(
            this.stage.background[this.iteration%this.stage.background.length] 
            ,0,0, this.stage.w, this.stage.h
            )
        pop()
        
    }

    addPlayer(x,y,width,height, name) {
        this.ids[name] = this.players.length;
        let player = new Player(x,y,width,height);
        player.setName(name);
        this.players.push(player);
        this.updateGroundDetector();

        return player
    }

    // setPlayerColor(color) {

    // }

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

    // getPlayerAction(id, action) {
    //     let player = this.players[this.ids[id]];
    //     return player[action];
    // } 

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