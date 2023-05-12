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
    lvlTateLarsen()
    // lvlRoberDiaz()
    // lvlPaulPascatore()
    // lvlNoahArevalo()
    // lvlMaximusGarcia()
    // lvlMatiasLatorre()
    // lvlEmilySmith()
    // lvlDaniellaRodrigues()
    // AnnabellaMoerbeck()
    player1 = charAdrianPena()
    player2 = charEthanWansakul()

}

function keyPressed() {
    gm.addKey(keyCode)

    if(keyCode === 81) {
       
    }

    if(keyCode === 69) {

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