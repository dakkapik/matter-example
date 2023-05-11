class Game {
    constructor(width, height) {
        createCanvas(width, height);
        // this.ids = {}
        this.objects = []
        this.players = []
        this.ground = []
        this.boxes = []
        this.attacks = []
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