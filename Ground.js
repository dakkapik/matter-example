class Ground {
    constructor (x,y, width, height, options={}) {
        this.options = options
        this.w = width;
        this.h = height;
        this.skin = false;

        if(options.skin !== undefined) {
            loadImage(`assets/blocks/${options.skin}.png`, 
            (img)=> {
                this.skin = img
            },
            ()=> {
                console.log("FAILED LOADING SKIN" + skin);
                this.skin = false;
            })

        }

        this.options.isStatic = true

        this.body = Bodies.rectangle(x,y,width, height, this.options)
        this.body.label = "ground"

        Composite.add(engine.world, this.body)

    }
    show() {
        let pos = this.body.position;
        let angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        if(this.skin === false) {
            rect(0,0,this.w,this.h);
        } else {
            image(this.skin, 0,0, this.w, this.h)
        }

        pop();
    }
}