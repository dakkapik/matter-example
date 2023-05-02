class Attack {
    constructor(width, height, xOffset, yOffset) {
        this.w = width;
        this.h = height;
        this.xOffset = xOffset;
        this.yOffset = yOffset;
        this.color = "yellow";

        this.body = Bodies.rectangle(x,y,width, height, this.options);
        this.body.label = "attack";
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;
        push();
        fill(this.color);
        translate(pos.x, pos.y - this.h/3);
        rotate(angle);
        
        rect(0,0,this.w,this.h);
        pop();
    }
}