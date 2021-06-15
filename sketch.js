const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var polygon1, slingShot;

function preload() {

}

function setup() {
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    polygon1 = new Polygon(200,50);
    slingShot = new SlingShot(polygon1.body,{x:200, y:50});
}

function draw() {
    background(100);
    Engine.update(engine);
    polygon1.display();


}

function mouseDragged(){
    Matter.Body.setPosition(polygon1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}





