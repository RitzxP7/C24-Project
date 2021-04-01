const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1, bird1, box2, ball1, ball2, ball3, ball4;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    box1 = new Box(600, 200, 70, 100);
    box2 = new Box(1100, 300, 124, 509);

    bird1 = new Bird(100, 100);

    ball1 = new Rubber(400, 200, 10);
    ball2 = new Rubber(400, 200, 10);
    ball3 = new Rubber(400, 200, 10);
    ball4 = new Rubber(400, 200, 10);


  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    box1.display();
    box2.display();

    bird1.display();

    plane.display();
    hammer.display();

    ball1.display();
    ball2.display();
    ball3.display();
    ball4.display();

    
 
}