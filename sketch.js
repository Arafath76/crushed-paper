const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

const Constraint = Matter.Constraint;

var engine, world;
var ground,paper,dustbin;
function preload() {
    
}

function setup(){
     createCanvas(1600,400);
    engine = Engine.create();
    ground = new Ground(600,height,1200,20);
    dustbin1= new Dustbin(1200,300,10,50);
    dustbin2= new Dustbin(1400,300,10,50);
    dustbin3= new Dustbin(1200,300,50,10);
    paper = new Paper(0,0,0,0,0,40);
    world = engine.world;
}

function draw(){
    background(0);;
    Engine.update(engine);
    ground.display();
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
}
