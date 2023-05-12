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
    lvlLoad[2]()
    charLoad.forEach((char, index)=> {
        // console.log(char)
        // console.log(index)
    })

    player1 = charLoad[1](true)
    player2 = charLoad[3](false)
}

function keyPressed() {
    gm.addKey(keyCode)
}

function keyReleased() {
    gm.rmKey(keyCode)

    if(keyCode === 69) {
        //e
        player1.engageAttack('69', true)
     }  
 
     if(keyCode === 82) {
         //r
         player1.engageAttack("82", true)
     }
 
     if(keyCode === 70) {
         //f
        player1.engageAttack("70", true)
     }

    if(keyCode === 87) {
        //w
        player1.jump();
    }
    
    if(keyCode === 38) {
        //up key
        player2.jump();
    }

    if(keyCode === 188) {
        //coma
        player2.engageAttack("188", false)
    }
    if(keyCode === 190) {
        //dot
        player2.engageAttack("190", false)
    }
    if(keyCode === 191) {
        //slash
        player2.engageAttack("191", false)
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