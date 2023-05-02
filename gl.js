const Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
// let world;
let boxA;
let boxB;
let boxC;
let ground;
let runner;
let boxes = [];

function setup() {
    createCanvas(900,600)
    engine = Engine.create();
    boxA = Bodies.rectangle(400,200,80,80)
    boxB = Bodies.rectangle(200,200,80,80)

    boxC = new Box(10,20,40,40);

    ground = Bodies.rectangle(0,500,900,10, {isStatic:true})

    runner = Runner.create();

    Composite.add(engine.world,[boxA,boxB,ground] )
    Runner.run(runner, engine);

    console.log(boxA)
}

function mousePressed() {
    boxes.push(new Box(mouseX, mouseY, 20, 20))
}

function draw() {
    background(220);
    fill("red")
    boxes.forEach(box => {
        box.show()
    })
    rect(boxA.position.x, boxA.position.y, 80,80);
    rect(boxB.position.x, boxB.position.y, 80,80);
    rect(ground.position.x, ground.position.y,900 ,10);
}