const Engine = Matter.Engine,
    Collision = Matter.Collision,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
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

function setup() {
    rectMode(CENTER);
    gm = new Game(700, 600);
    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);
    
    gm.addGround(width/2, height-20, width, 40)

    player1 = gm.addPlayer(120,80, 30, 80, "Aurelian")
    player2 = gm.addPlayer(300,80, 30, 80, "Bastilan")

    player2.setColor("green")

    console.log(gm.players)
    gmConsole = new Console();
    gmInput = new Input();
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

    if(queue.has(81)){
        // q
        // player1.moveRight();
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