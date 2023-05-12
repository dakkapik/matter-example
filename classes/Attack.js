class Attack {
    constructor(width, height, offSetX, offSetY, parent, profile, options = {}) {

        this.options = options
        this.options.isSensor = true
        this.options.label = "attack"

        this.parent = parent;

        // this.profile = profile;
        this.active = false;
        this.playerId = parent.body.id;
        this.width = width;
        this.height = height;
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        this.body = parent.body;
        this.bodyW = parent.w;
        this.comp = parent.comp;

        this.attBody = this.createAttack()
        this.attBody.profile = profile
    }

    createAttack() {
        //smt here maybe? change to let , who passes by reference?
        const centre = this.body.position
        // console.log(this.bodyW)
        // console.log(centre.x - this.bodyW/2 - this.width/2)

        let att = Bodies.rectangle(
            centre.x + this.bodyW/2 + this.width/2, 
            centre.y, 
            this.width, 
            this.height, 
            this.options
            );


        // let leftA = Bodies.rectangle(
        //     centre.x - this.bodyW/2 - this.width/2, 
        //     centre.y, 
        //     this.width, 
        //     this.height, 
        //     this.options
        //     );
        
        Composite.add(this.comp, [att])
        return att
    }

    update() {        
        Body.setAngle(this.attBody, 0)

        const centre = this.body.position
        let pos = {...centre}
        
        if(this.parent.fRight){
            pos.x = centre.x + this.bodyW/2 + this.width/2
        } else {
            pos.x = centre.x - this.bodyW/2 - this.width/2
        }
        // add offset
        Body.setPosition(this.attBody, pos)
        this.show()
    }

    show() {
        let pos = this.attBody.position
        let angle = this.attBody.angle

        push();
        // console.log(this.active)
        if(this.active) {
            fill("red")
        } else {
            fill("yellow")
        }
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.width, this.height);
        pop();
    }
}