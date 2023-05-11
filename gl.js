const Engine = Matter.Engine,
    Collision = Matter.Collision,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Composites = Matter.Composites,
    Constraint = Matter.Constraint,

    Vector = Matter.Vector,
    Detector = Matter.Detector,
    Query = Matter.Query;

let gm;

let engine;
let runner;

let player1;
let player2;

let box;

function setup() {
    gm = new Game(1800, 1000, "AnnabellaMoerbeck");
    rectMode(CENTER);
    imageMode(CENTER);
    engine = Engine.create();
    runner = Runner.create();
    Runner.run(runner, engine);

    // gm.addStage(gm.width, gm.height, "AnnabellaMoerbeck")

    gm.setBackground( loadImage("assets/background/AnnabellaMoerbeck.png") )

    let options = {skin: "IsabelaRivera-t"}

    let ground1 = gm.addGround(250, 400, 350, 50, options)
    let ground2 = gm.addGround(590, 800, 420, 50)

    gm.addGround(900, 550, 400, 50)
    gm.addGround(1200, 900,600, 40)
    gm.addGround(1750, 520, 150, 20)

    player1 = gm.addPlayer(300,80, 120, 120, "Aurelian")
    player2 = gm.addPlayer(500,80, 30, 80, "Bastilan")

    // console.log(player2.body)
    player2.setColor("green")
    player1.addAttack("q")

    // player1.engageAttack("q")
    // player1.stopAttack("q")

    // player2.setSprite('DiegoShea')
    player2.setSprite('ShannaRose')
    gm.console.addTracker("x pos","x", player1.body.position)
}

function keyPressed() {
    gm.addKey(keyCode)

    if(keyCode === 81) {
       
    }

    if(keyCode === 69) {
        // player1.addAttack()
        // console.log("e")
    }

}

function keyReleased() {
    gm.rmKey(keyCode)

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
    queue = gm.inputQueue

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
    keyHeld();
    mouseHeld();
    gm.redraw();
    gm.show();
}