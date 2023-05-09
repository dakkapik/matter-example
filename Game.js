class Game {
    constructor(width, height) {
        createCanvas(width, height);
        // this.ids = {}
        this.objects = []
        this.players = []
        this.ground = []
        this.boxes = []
    }

    redraw() {
        background(220)
    }

    addPlayer(x,y,width,height, name) {
        // this.ids[name] = this.players.length;
        let player = new Player(x,y,width,height);
        player.setName(name);
        this.objects.push(player);
        this.updateGroundDetector();

        return player
    }


    // setPlayerColor(color) {

    // }

    updateGroundDetector() {
        this.objects.forEach(obj => {
            if(obj.groundDetector) {
                Detector.clear(obj.groundDetector)
    
                let bodyList = [obj.body]
    
                for(let i =0; i < this.objects.length; i ++) {
                    if(this.objects[i].body.label === "ground"){
                        bodyList.push(this.objects[i].body);
                    }
                }
    
                Detector.setBodies(obj.groundDetector, bodyList);
            }
        })
    }

    // getPlayerAction(id, action) {
    //     let player = this.players[this.ids[id]];
    //     return player[action];
    // } 

    addGround(x,y,width,height) {
        let ground = new Ground(x,y,width,height);
        this.objects.push(ground);
        this.updateGroundDetector();
        return ground;
    }

    addBox(x,y,width,height) {
        let box = new Box(x,y,width,height);
        this.objects.push(box);
        return box;
    }

    show() {
        this.objects.forEach(object => object.update())
    }

    showHitboxes() {
        this.objects.forEach(obj => obj.showHitbox())
    }
}