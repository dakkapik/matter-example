const Engine = Matter.Engine,
    Collision = Matter.Collision,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,

    Vector = Matter.Vector,
    Detector = Matter.Detector;

let gmInput;
let gmConsole;
let gm;

let engine;
let ground;
let runner;

let player1;
let player2;

let box;

function setup() {
    rectMode(CENTER);
    imageMode(CENTER);
    gm = new Game(10000, 600);
    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);
    
    gm.addGround(width/2, height-20, width, 40)

    box = gm.addBox(200, 100, 50,300)
    player1 = gm.addPlayer(300,80, 120, 120, "Aurelian")
    player2 = gm.addPlayer(500,80, 30, 80, "Bastilan")

    // console.log(player2.body)
    player2.setColor("green")
    player1.addAttack("q")

    // player1.engageAttack("q")
    // player1.stopAttack("q")

    gmConsole = new Console();
    gmInput = new Input();
}
let arm = false

function keyPressed() {
    gmInput.addKey(keyCode)

    if(keyCode === 81) {
       
    }

    if(keyCode === 69) {
        // player1.addAttack()
        // console.log("e")
    }

}

function keyReleased() {
    gmInput.rmKey(keyCode)

    if(keyCode === 81) {
        player1.engageAttack("q")
    }

    if(keyCode === 87) {
        //w
        player1.jump();
    }
    
    if(keyCode === 38) {
        //up key
        player2.jump();
    }
}

function keyHeld() {
    queue = gmInput.inputQueue

    if(queue.has(65)){
        // a
        player1.moveLeft();
    }

    if(queue.has(68)){
        // d
        player1.moveRight();
    }

    if(queue.has(37)){
        // arrow left
        player2.moveLeft()
    }

    if(queue.has(39)){
        // arrow right
        player2.moveRight()
    }
}

function draw() {
    if(gmInput.values.play) {
        keyHeld();
        gm.redraw();
        gm.show();
        gmConsole.update();
    }
}