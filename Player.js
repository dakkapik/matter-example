class Player extends Entity{
    constructor (x,y, width, height, options={}) {
        super()
        //TEST SETTINGS 
        this.settings.show_hitbox = true;

        //player properties
        this.name = 'player';
        this.maxJumps = 1;
        this.airImpulse = 1; 
        this.runSpeed = 8;
        this.jumpForce = -0.08

        //timers
        this.timers = [];
        this.timerKeys = {};
        this.addTracker("jump-duration", 3);
        this.addTracker("jump-cooldown", 6);

        //counters
        this.jumps = 0;
        this.acc = Vector.create(0,1);

        //flags
        this.grounded = false;
        this.mRight = false;
        this.mLeft = false;
        this.fRight = true;

        //RENDER REQUIRED 
        this.w = width;
        this.h = height;
        this.settings.skin = true;
        this.sprites = {
            idle: loadImage('char/AnnabellaMoerbeck.png')
        }

        //option mods
        this.options = options

        //GAME ENGINE REQUIRED
        this.groundDetector = Detector.create();

        this.body = Bodies.rectangle(x,y,width, height, this.options);
        this.body.label = "player";

        this.comp = Composite.create()

        Composite.add(engine.world, this.body);

        //body mods
        Body.setCentre(this.body, Vector.create(0, this.h/3), true)
        // Body.setDensity(this.body, 15)
        Body.setMass(this.body, 4)

    }

    setName(name) {
        this.name = name;
    }

    setColor(color) {
        this.color = color;
    }

    addTracker(key, abs) {
        this.timerKeys[key] = [abs, this.timers.length]
        this.timers.push(0)
    }

    tickTimers() {
        for(let i = 0; i < this.timers.length; i++) {
            if(this.timers[i] > 0) {
                this.timers[i] --;
            }
        }
    }

    startTimer(key) {
        console.log()
        this.timers[this.timerKeys[key][1]] = this.timerKeys[key][0]
    }

    timerFinished(key) {
        if(this.timers[this.timerKeys[key][1]] === 0) {
            return true;
        } else {
            return false;
        }
    } 

    checkGround() {
        let collisions = Detector.collisions(this.groundDetector)
        // console.log(collisions)
        if(collisions.length === 0){
            this.grounded = false;
        } else {
            collisions.forEach(collision => {
                if(collision.bodyA.label === 'ground'){
                    this.grounded = true;
                    this.jumps = 0;
                }
            })
        }
    }

    updateJump() {
        if(!this.timerFinished('jump-duration')) {
            let jumpForce = Vector.create(0,this.jumpForce);
            Body.applyForce(this.body, this.body.position, jumpForce);
        }   
    }

    jump() {
        if(this.grounded) {
            this.jumpImpulse();
            return;
        }

        if(this.timerFinished('jump-cooldown')){
            if(this.jumps < this.maxJumps) {
                this.jumpImpulse();
                return
            }
        }
    }

    jumpImpulse() {
        this.jumps ++;
        this.startTimer("jump-cooldown");
        this.startTimer("jump-duration");
    }

    moveRight() {
        this.mRight = true;
        this.fRight = true;
    }

    moveLeft() {
        this.mLeft = true;
        this.fRight = false;
    }

    updateMove() {
        this.acc= Vector.create(0,0)
        if(this.mRight) {
            this.acc = Vector.add(this.acc, Vector.create(this.runSpeed, 0))
        }
        if(this.mLeft) {
            this.acc = Vector.add(this.acc, Vector.create(-this.runSpeed, 0))
        }

        if(this.grounded){
            Body.setVelocity(this.body, this.acc)
        } else {
            let currVel = Body.getVelocity(this.body)
            let modAirVel = Vector.div(this.acc, this.runSpeed*4)

            let modVel = Vector.add(currVel, modAirVel)
            Body.setVelocity(this.body, modVel)
        }
        this.mLeft = false
        this.mRight = false
    }

    movement() {
        this.updateJump()
        this.updateMove()
    }

    update() {
        //tick timers for state update
        this.tickTimers()
        // check collision with ground collision detector
        this.checkGround()
        //increase jumpVel as long as timer lasts
        this.movement()

        this.show()
    }

    // show() {
    //     //state update bound to game loop
    //     let pos = this.body.position;
    //     let angle = this.body.angle;
    //     push();
    //     // fill(this.color)
    //     translate(pos.x, pos.y - this.h/3);
    //     rotate(angle);
    //     rect(0,0,this.w,this.h);
    //     if(this.fRight) {
    //         image(this.sprites.idle,0,0,this.w, this.h);
    //     } else {
    //         scale(-1,1)
    //         image(this.sprites.idle,0,0,this.w, this.h);
    //     }
    //     pop();
    // }
}