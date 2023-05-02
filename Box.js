class Box {
    constructor (x,y, width, height, options={}) {
        this.options = options
        this.w = width;
        this.h = height;

        this.body = Bodies.rectangle(x,y,width, height, this.options)
        Composite.add(engine.world, this.body)
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        rect(0,0,this.w,this.h);
        pop();
    }
}