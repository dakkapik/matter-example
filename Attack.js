class Attack {
    constructor(width, height, offSetX, offSetY, body, bodyW, comp, options = {}) {


        this.options = {
            isSensor : true,
            label: "attack"
        }
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

        let right = Bodies.rectangle(
            centre.x + this.bodyW/2 + this.width/2, 
            centre.y, 
            this.width, 
            this.height, 
            this.options
            );


        let left = Bodies.rectangle(
            centre.x - this.bodyW/2 - this.width/2, 
            centre.y, 
            this.width, 
            this.height, 
            this.options
            );
        
            console.log(right)
        let options = {
            bodyA: this.body, 
            bodyB: right,
            //change this to hypotenuse
            // lenth: 1,
            lenth: this.bodyW/2 + this.width/2,
            stiffness: 0.8, 
        }

        const constrR = Constraint.create(options)

        options.bodyB = left

        const constrL = Constraint.create(options)

        Composite.add(this.comp, [left, right, constrR, constrL])
        return {r: right, l: left}
    }


    // addAttack(right){
    //     console.log("add attack")
    //     Composite.add(this.comp, [ this.att, this.constr])

    //     if(right) {
    //         this.att.position.x = this.body.position.x + this.bw
    //     } else {
    //         this.att.position.x = this.body.position.x - this.bw
    //     }
        
    //     Composites.chain(this.comp, this.bw,this.y,0,0)
    //     this.color =  "black"
    // }

    // remAttack(){
    //     Composite.remove(this.comp, [this.att, this.constr])
    //     this.color = "yellow"
    // }

    show() {
        this.attBody.r.angle = 0
        this.attBody.l.angle = 0

        let pos = this.attBody.r.position;
        let angle = this.attBody.r.angle;
        push();
        fill(this.color);
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.width, this.height);
        pop();

        pos = this.attBody.l.position;
        angle = this.attBody.l.angle;
        push();
        fill(this.color);
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.width, this.height);
        pop();
    }
}