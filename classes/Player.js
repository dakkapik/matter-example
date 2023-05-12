class Player extends Entity{
    constructor (x,y, width, height,name,p1, options={}) {
        super( )
        //TEST SETTINGS 
        // this.settings.show_hitbox = true;

        //player properties
        this.name = name;
        this.p1 = p1;
        this.maxJumps = 1;
        this.airImpulse = 1; 
        this.runSpeed = 1.2;
        this.accVect = Vector.create(this.runSpeed, 0);
        this.topSpeed = 8;
        this.jumpForce = -0.3
        this.invulFrames = 25;
        this.health = 100

        //timers
        this.timer = new Timer();
        
        //counters
        this.jumps = 0;
        
        //flags
        this.hitInvul = false;
        this.jumpReady = true;
        this.attackReady = true;
        this.grounded = false;
        this.running = false;
        this.fRight = true;

        //RENDER REQUIRED 
        this.w = width;
        this.h = height;
        this.settings.skin = true;
        this.sprites = {
            i: loadImage(`assets/char/${name}/i.png`)
        }
        this.loadSprites()
        this.spriteState = 'i'

        //option mods
        this.options = options
        this.options.friction = 0.05
        this.options.mass = 12

        //GAME ENGINE REQUIRED
        this.detector = Detector.create();

        this.body = Bodies.rectangle(x,y,width, height, this.options);
        this.body.label = "player";

        this.comp = Composite.create()
        this.comp = Composite.add(this.comp, this.body)

        this.velMod = Body.getVelocity(this.body)

        Composite.add(engine.world, this.comp);

        this.attacks = {
            // 'e':,
            // 'r':,
            // 'f':,
        }

        this.keyMap1 ={
            '69':'p',
            '82':'k',
            '70':'b',
        }
        this.keyMap2 = {
            '188':'p',
            '190':'k',
            '191':'b',
        }
    }

    loadSprites() {
        loadImage(`assets/char/${this.name}/i.png`, 
            (img) => {
                // console.log(img)
                this.sprites['i'] = img
                this.spriteState = 'i'
                // console.log(this.sprites['i'])
            },
            ()=> {console.log("COULD NOT LOAD THIS CHARACTER IDLE")}
        )

        loadImage(`assets/char/${this.name}/p.png`, 
            (img) => {
                this.sprites['p'] = img
            },
            ()=> {console.log("COULD NOT LOAD THIS CHARACTER PUNCH")}
        )

        loadImage(`assets/char/${this.name}/k.png`, 
            (img) => {
                this.sprites['k'] = img
            },
            ()=> {console.log("COULD NOT LOAD THIS CHARACTER KICK")}
        )

        loadImage(`assets/char/${this.name}/b.png`, 
            (img) => {
                this.sprites['b'] = img
            },
            ()=> {console.log("COULD NOT LOAD THIS CHARACTER BLOCK")}
        )
         
    }



    addAttack( id, attack) {
        if(!this.attacks[id]) {
            // let profile = new AttackProfile(10, 0.2, 10, 4)
            // let attack = new Attack(20,20,0,0, this, profile)

            this.attacks[id] = attack
            gm.objects.push(attack)
        } 
    }

    engageAttack (key) {
        if(this.attackReady){
            let keyMapped
            if(this.p1){
                keyMapped = this.keyMap1[key]
            } else {
                keyMapped = this.keyMap2[key]
            }
            
            this.spriteState = keyMapped
            this.attacks[keyMapped].active = true

            let attack = this.attacks[keyMapped]
            this.attackReady = false;

            gm.addAttackDetector(this.attacks[keyMapped])
            this.timer.addTimer(attack.attBody.profile.duration, () => {
                
                this.stopAttack(keyMapped)
                this.spriteState = 'i'
                this.timer.addTimer(attack.attBody.profile.cooldown, () => {
                    this.attackReady = true
                })
            })
        }
    }

    stopAttack (key) {
        this.attacks[key].active = false;
        gm.removeAttackDetector(this.attacks[key].attBody.id)
    }

    setName(name) {
        this.name = name;
    }

    setColor(color) {
        this.color = color;
    }

    setSprite(name) {
        this.sprites.idle = loadImage(`assets/char/${name}.png`);
    }


    checkCollision() {
        let collisions = Detector.collisions(this.detector)
        // console.log(collisions)
        if(collisions.length === 0){
            this.grounded = false;
        } else {
            collisions.forEach(collision => {
                
                if(collision.bodyA.label === 'ground'){
                    this.grounded = true;
                    this.jumps = 0;
                }else {
                    // console.log(collision.bodyA)
                }

                if(
                    collision.bodyA.label === 'attack'||
                    collision.bodyB.label === 'attack'
                ){
                    if (!this.hitInvul) {
                        this.hitInvul = true
                        this.timer.addTimer(this.invulFrames, ()=> {
                            this.hitInvul = false
                        })
                        if(collision.bodyA.label === 'attack'){
                            this.damage(collision.bodyA)
                        } else {
                            this.damage(collision.bodyB)
                        }
                    }
                }
            })
        }
    }

    damage(attack) {
        console.log("THIS")
        console.log(attack)
        this.health - attack.profile.damage

        let x = this.body.position.x - attack.position.x
        let y = this.body.position.y - attack.position.y
        let v = Vector.create(x, y)
        let nv = Vector.normalise(v)
        let force = Vector.mult(nv, attack.profile.knockback)
        Body.applyForce(this.body, attack.position, force)
        // console.log(profile)
    }

    jumpExec() {   
        let jumpForce = Vector.create(0,this.jumpForce);
        Body.applyForce(this.body, this.body.position, jumpForce);
    }

    jump() {
        if(this.grounded) {
            this.jumpImpulse();
            return;
        }

        if(this.jumpReady && this.jumps < this.maxJumps){
            this.jumpImpulse();
            return
        }
    }

    jumpImpulse() {
        this.jumps ++;
        this.jumpReady = false

        this.timer.addTimer(1, ()=> {

            this.timer.addTimer(20, ()=> {
                this.jumpReady = true
            })

        }, "jumpExec", this)
    }

    moveRight() {
        this.running = true;
        this.fRight = true;
    }

    moveLeft() {
        this.running = true;
        this.fRight = false;
    }

    updateMove() {
        let acc = Vector.create(0,0)
        if(this.running) {
            // console.log()
            if(Math.abs(this.velMod.x) < this.topSpeed) {
                if(this.fRight) {
                    acc = Vector.add(acc, this.accVect)
                } else {
                    acc = Vector.add(acc, Vector.neg(this.accVect))
                }
            }
        }

        if(!this.grounded) {
            acc = Vector.mult(acc, 0.2)
        }

        this.velMod = Vector.add(acc, this.velMod)
    
        this.running = false;
    }

    movement() {
        this.velMod = Body.getVelocity(this.body)
        // this.updateJump()
        this.updateMove()
        Body.setVelocity(this.body, this.velMod)
    }

    update() {
        // to prevent player from switching angle
        Body.setAngle(this.body, 0)
        // timers must tick
        this.timer.tick()
        // tick timers for state update
        // this.tickTimers()
        // check collision with ground collision detector
        this.checkCollision()
        // increase jumpVel as long as timer lasts
        this.movement()

        this.show()
    }
}