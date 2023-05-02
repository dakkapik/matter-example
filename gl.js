const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Vector = Matter.Vector;

let engine;
let ground;
let runner;
let boxes = [];
let player1;
let player2;

function setup() {
    rectMode(CENTER)
    createCanvas(900,600)
    engine = Engine.create();
    runner = Runner.create();
    
    Runner.run(runner, engine);
    
    let grOptions = {isStatic: true}
    boxes.push(new Box(width/2, height-20, width, 10, grOptions))
    player1 = new Box(50,80, 120,80)
    player2 = new Box(120,80, 120,80)
    console.log(player1.body.position)
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, 20, 20))
}

function keyPressed() {
    
    if(keyCode === 87) {
        // w
        let force = new Vector.create(0,-0.5)
        Body.applyForce(player1.body, player1.body.position, force)
    }
    if(keyCode === 68) {
        // d
    }
    if(keyCode === 65) {
        // a
    }
    if(keyCode === 81) {
        // q
        let force = new Vector.create(0.2,0)
        Body.applyForce(player2.body, player1.body.position, force)
    }

}

function draw() {
    background(220);
    fill("red")
    player1.show()
    player2.show()
    boxes.forEach(box => {
        box.show()
    })
}