
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var engine, world;

var floor,platform,rock,slingshot;

var b1,b2,b3,b4,b5,b6;

function setup() {
  createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;

  floor = new Ground(200,700,1000,10);
  platform = new Ground(400,450,40,10);
  rock = new poloygon(200,600,6,6);
  slingshot= new launcher(rock.body,{x:200,y:400});
  b1 = new Box(430,400,12,48);
  b2 = new Box(460,400,12,48);
  b3 = new Box(490,400,12,48);
  b4 = new Box(435,450,12,48);
  b5 = new Box(440,450,12,48);
  b6 = new Box(438,500,12,48);
  

}

function draw() {
  background(0);  
  
  floor.display();
  platform.display();
  rock.display();
  slingshot.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
 
 drawSprites();
}


function mouseDragged()
{
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY}) 
}



function mouseReleased()
{
	slingshot.fly();
  
}
