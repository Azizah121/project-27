
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;


	Bob1=new Bob(460,400,50,50);
	Bob2=new Bob (420,400,50,50);
	Bob3=new Bob (300,400,50,50);
	Bob4=new Bob (380,400,50,50);
	Bob5=new Bob (340,400,50,50);
	Roof1=new Roof (400,200,400,20);
	rope=new Constraints(Bob1.body,Roof1.body);
	rope=new Constraints(Bob2.body,Roof1.body);
	rope=new Constraints(Bob3.body,Roof1.body);
	rope=new Constraints(Bob4.body,Roof1.body);
	rope=new Constraints(Bob5.body,Roof1.body);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(200);
  Matter.Engine.update(engine);
  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();
Roof1.display();
  drawSprites();
 
}



