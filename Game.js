class Game {
    constructor(width, height) {
        createCanvas(width, height);
   
        this.width = width;
        this.height = height;
        this.backgrounds = {
            annaM : loadImage("assets/background/DaniellaRodriguez1.png")
        }
        this.ids = {}
        this.players = [];
        this.groundBoxes = [];
        this.boxes = [];
    }

    redraw() {
        push()
        imageMode(CORNERS)
        image(this.backgrounds.annaM, 0,0, this.width, this.height)
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

    // getPlayerAction(id, action) {
    //     let player = this.players[this.ids[id]];
    //     return player[action];
    // } 

    addGround(x,y,width,height) {
        let ground = new Ground(x,y,width,height);
        this.groundBoxes.push(ground);
        this.updateGroundDetector();
        return ground;
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
    }
}