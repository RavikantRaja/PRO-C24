
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 var side1, side2, side3;
 var paper1;
 var ground1;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  ground1= new ground(500,550,1000,20);
 side1 = new dustbin(900,450,200,20);
 side2 = new dustbin(810,410,20,60);
 side3 = new dustbin(990,410,20,60);

 paper1 = new paper(100,350,30);

 
	Engine.run(engine);
	
	console.log(side1);
  console.log();
}

function draw() {

  background(0);
  side1.display();
  side2.display();
  side3.display();
  paper1.display();
  ground1.display();
  console.log();
  //drawSprites();
 
}

function keyPressed(UP_ARROW){
	Matter.Body.applyForce(paper1.body,paper1.body.position,{x:28,y:-100}); 
	}

