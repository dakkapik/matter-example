const Engine = Matter.Engine,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Body = Matter.Body,
    Composite = Matter.Composite,
    Vector = Matter.Vector;

let gmInput
let gmConsole

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

    gmConsole = new Console();
    gmInput = new Input();
    console.log(player1.body.position)
    gmConsole.addTracker("x Pos A", 'x', player1.body.position)
}


function keyPressed() {
    gmInput.addKey(keyCode)
}
function keyReleased() {
    console.log(keyCode)
    gmInput.rmKey(keyCode)
}

function gmMove() {
    queue = gmInput.inputQueue

    let vel = Vector.create(0,0)

    if(queue.has(87)){
        // w
        let force = new Vector.create(0,-0.5)
        Body.applyForce(player1.body, player1.body.position, force)
    }

    if(queue.has(65)){
        // a
        vel = Vector.add(vel, Vector.create(-5,0))
    }

    if(queue.has(68)){
        // d
        vel = Vector.add(vel, new Vector.create(5,0))
    }

    Body.setVelocity(player1.body, vel)


    if(queue.has(81)){
        console.log("this")
        // q
        let force = new Vector.create(0.2,0)
        Body.applyForce(player2.body, player1.body.position, force)
    }
}

function draw() {
    gmMove()
    background(220);
    fill("red")
    player1.show()
    player2.show()
    boxes.forEach(box => {
        box.show()
    })
    gmConsole.update();
}