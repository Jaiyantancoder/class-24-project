const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,pig1,bird1,log1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(200,300,50,50);
    box2 = new Box(240,100,50,100);
    ground = new Ground(200,height,500,20);
    pig1 = new Pig(200,120,30,20);
    bird1 = new Bird(85,200,20,20);
    log1 = new Log(150,285,55,5,PI/2);
    console.log(log1);
}

function draw(){
    background(0);
   
    stroke("white");
    text(mouseX+","+mouseY,50,50);


    Engine.update(engine);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird1.display();
    log1.display();
}