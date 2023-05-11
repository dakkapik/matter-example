class Entity {
    constructor() {
        this.settings = {
            color_default: "white",
            color_hitbox: "rgba(173, 0, 0, 0.4)",
            show_hitbox: false,
            skin: false
        }
        this.fRight = true;
        this.color = "white"
        
    }

    update() {
        this.show()
    }

    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        
        if(this.settings.skin){
            if(this.fRight) {
                image(this.sprites.idle,0,0,this.w, this.h);
            } else {
                scale(-1,1)
                image(this.sprites.idle,0,0,this.w, this.h);
            }
        } else {
            fill(this.color)
            rect(0,0,this.w,this.h);
        }

        if(this.settings.show_hitbox){
            fill(this.settings.color_hitbox)
            rect(0,0,this.w, this.h);
        }
        pop();
    }
}