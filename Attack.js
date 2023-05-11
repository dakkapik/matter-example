class Attack {
    constructor(width, height, offSetX, offSetY, body, bodyW, comp, options = {}) {


        this.options = {
            isSensor : true,
            label: "attack"
        }
        this.playerId = body.id;
        this.width = width;
        this.height = height;
        this.offSetX = offSetX;
        this.offSetY = offSetY;
        this.body = body;
        this.bodyW = bodyW;
        this.comp = comp;
        this.color = "yellow"

        this.attBody = this.createAttack()
    }

    createAttack() {
        //smt here maybe? change to let , who passes by reference?
        const centre = this.body.position
        // console.log(this.bodyW)
        // console.log(centre.x - this.bodyW/2 - this.width/2)

        let rightA = Bodies.rectangle(
            centre.x + this.bodyW/2 + this.width/2, 
            centre.y, 
            this.width, 
            this.height, 
            this.options
            );


        let leftA = Bodies.rectangle(
            centre.x - this.bodyW/2 - this.width/2, 
            centre.y, 
            this.width, 
            this.height, 
            this.options
            );

        Composite.add(this.comp, [leftA, rightA])
        return {r: rightA, l: leftA}
    }

    update() {        
        this.attBody.r.angle = 0
        this.attBody.l.angle = 0

        const centre = this.body.position
        let posR = {...centre}
        let posL = {...centre}
        
        posR.x = centre.x + this.bodyW/2 + this.width/2
        posL.x = centre.x - this.bodyW/2 - this.width/2
        // add offset

        this.attBody.r.position = posR
        this.attBody.l.position = posL

        this.show()
    }

    show() {
        let pos = this.attBody.r.position;
        let angle = this.attBody.r.angle;
        push();
        fill("red");
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.width, this.height);
        pop();

        pos = this.attBody.l.position;
        angle = this.attBody.l.angle;
        push();
        fill("blue");
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.width, this.height);
        pop();
    }
}