const Engine = Matter.Engine,
    // Render = Matter.Render,
    Runner = Matter.Runner,
    Bodies = Matter.Bodies,
    Composite = Matter.Composite;

let engine;
// let world;
let ground;
let runner;
let boxes = [];

function setup() {
    rectMode(CENTER)
    createCanvas(900,600)
    engine = Engine.create();
    runner = Runner.create();
    
    Runner.run(runner, engine);
    
    let grOptions = {isStatic: true}
    boxes.push(new Box(width/2, height-20, width, 10, grOptions))
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
}