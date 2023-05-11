class Box extends Entity{
    constructor (x,y, width, height, options={}) {
        super()
        this.options = options
        this.w = width;
        this.h = height;
        
        this.body = Bodies.rectangle(x,y,width, height, this.options)
        this.arm = Bodies.rectangle(x+width+10, y, 20,20)
        this.constr = Constraint.create({
            bodyA: this.body,
            bodyB: this.arm,
            stiffness: 0.7, 
            length: 1
        })
        
        this.comp = Composite.create()

        Composite.add(this.comp, 
            [
                this.body, 
            ])

        this.body.label = "box"
        
        

        Composite.add(engine.world, this.comp)
        // Composite.add(engine.world, this.body)

    }

    addArm () {
        Composite.add(this.comp, 
            [
                this.body, 
                this.arm, 
                this.constr
            ])   

        Composites.chain(this.comp, -50,0,0,0)
    }

    removeArm () {
        Composite.remove(this.comp, [
            this.arm,
            this.constr
        ])
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.w,this.h);
        pop();

        pos = this.arm.position;
        angle = this.arm.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,20,20);
        pop();

    }
}