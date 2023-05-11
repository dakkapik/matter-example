class Game {
    constructor(width, height) {
        createCanvas(width, height);
        // this.ids = {}
        this.objects = []
        this.players = []
        this.ground = []
        this.boxes = []

        // this.hitDetector = Detector.create();

    }

    redraw() {
        background(220)
    }

    addPlayer(x,y,width,height, name) {
        // this.ids[name] = this.players.length;
        let player = new Player(x,y,width,height);
        player.setName(name);
        this.objects.push(player);
        this.players.push(player);
        this.updateCollisionDetector();

        return player
    }


    // setPlayerColor(color) { 

    // }

    updateCollisionDetector() {
        this.players.forEach(player => {
            Detector.clear(player.detector)

            let bodyList = [player.body]

            for(let i = 0; i < this.objects.length; i++ ) {
                if(this.objects[i].body.label === "ground") {
                    bodyList.push(this.objects[i].body);
                }

                if(
                    this.objects[i].constructor.name === "Attack" && 
                    this.objects[i].playerId !== player.body.id
                    ) {
                    bodyList.push(this.objects[i].attBody.l)
                    bodyList.push(this.objects[i].attBody.r)
                }
            }

            Detector.setBodies(player.detector, bodyList);
        })
    }

    addGround(x,y,width,height) {
        let ground = new Ground(x,y,width,height);
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
    }

    showHitboxes() {
        this.objects.forEach(obj => obj.showHitbox())
    }
}