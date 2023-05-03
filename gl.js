const Engine = Matter.Engine,
    Collision = Matter.Collision,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Vector = Matter.Vector,
    Detector = Matter.Detector;

let gmInput = new Input()
let gmConsole;
let gm;

let engine;
let ground;
let runner;

let player1;
let player2;

function setup() {
    gm = new Game(1800, 1000);
    rectMode(CENTER);
    imageMode(CENTER);
    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);
    
    gm.addGround(250, 400, 350, 50)
    gm.addGround(590, 800, 420, 50)
    gm.addGround(900, 550, 400, 50)
    gm.addGround(1200, 900,600, 40)
    gm.addGround(1750, 520, 150, 20)

    player1 = gm.addPlayer(120,80, 120, 120, "Aurelian")
    player2 = gm.addPlayer(300,80, 90, 120, "Bastilan")

    // player2.setSprite('DiegoShea')
    player2.setSprite('EmilySmith')
}


function keyPressed() {
    gmInput.addKey(keyCode)
}

function keyReleased() {
    gmInput.rmKey(keyCode)

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
        // left key
        player2.moveLeft();
    }

    if(queue.has(39)){
        // right key
        player2.moveRight();
    }
}

function draw() {
    // if(gmInput.values.play) {
        keyHeld();
        gm.redraw();
        gm.show();
    // }
}