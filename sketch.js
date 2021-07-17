const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var iron,iron1;
var stone,rubber1,rubber2;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);

    iron = new Iron(20,100);
    iron1 = new Iron(50,75);

    stone = new Stone(300,150);
    rubber1 = new Rubber(700,300,45);
    rubber2 = new Rubber(900,120,60);
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    stone.display();
    iron.display();
    iron1.display();
    rubber1.display();
    rubber2.display();

    
 
}