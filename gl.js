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
    // lvlTateLarsen()
    // lvlRoberDiaz()
    // lvlPaulPascatore()
    // lvlNoahArevalo()
    // lvlMaximusGarcia()
    // lvlMatiasLatorre()
    lvlEmilySmith()
    // lvlDaniellaRodrigues()
    // AnnabellaMoerbeck()
    player1 = charAdrianPena()
    player2 = charEthanWansakul()
    // player1 = charAnnabellaMoerbeck()
    // player1 = charCarlosLopez()
    // player1 = charCarlyMclnerney()
    // player1 = charDaniellaRodriguez()
    // player1 = charDanielShashaty()
    // player1 = charDiegoShea()
    // player1 = charEmilioCorrlaes()
    // player1 = charEmilySmith()
    // player1 = charEthanWansakul()
    // player1 = charFlorenceMonedero()
    // player1 = charIsbelRivera()
    // player1 = charJackCarey()
    // player1 = charJohzuaRodriguez()
    // player1 = charLucasTolzein()
    // player1 = charMariellaCiniglio()
    // player1 = charMaryAbbyRigg()
    // player1 = charMaryAbbyRigg1()
    // player1 = charMateoMendez()
    // player1 = charMateoPenas()
    // player1 = charMatiasLatorre()
    // player1 = charMaximusGarcia()
    // player1 = charMichaelBalius()
    // player1 = charNicholasChacon()
    // player1 = charNicolasFernandez()
    // player1 = charNoahArevalo()
    // player1 = charPaulPescatore()
    // player1 = charPrestonGonzalez()
    // player1 = charPrestonSohan()
    // player1 = charRobertDiaz()
    // player1 = charRyderCrews()
    // player1 = charSebastianBarrera()
    // player1 = charShannaRose()
    // player1 = charValentinaMonedero()
    // player1 = charVanessaGomez()
    // player1 = charZackNonez()


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