
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
 

function preload()
{
	boyImage=loadImage("boyImage.jpg")
}

function setup() {
	createCanvas(1300, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground1=new Ground(width/2,600,width,20)
    ball1=new Ball(220,500)
    sling=new Slingshot(ball1.body,{x:220,y:400});
	platform=new  Ground(1200,505,300,250)
	wall1=new Ground(1170,380,200,10);
	wall2=new Ground(1100,330,20,90);
  wall3=new Ground(1250,330,20,90);
	Engine.run(engine);
  
}


function draw() { 
  background("white");
 
textSize(20)
text("Press Space for another turn",200,30)

  image(boyImage,200,350,170,250)
  
  ground1.display();
  ball1.display();
platform.display();
wall1.display();
wall2.display();
wall3.display();

Engine.update(engine)
}
function mouseDragged(){
	Matter.Body.setPosition(ball1.body,{x:mouseX,y:mouseY})
  
  }
  function mouseReleased(){
	sling.fly();
  }
  function keyPressed(){
	  if(keyCode === 32){
	  Matter.Body.setPosition(ball1.body,{x:250,y:500})
	  sling.attach(ball1.body);
	  }
  }




