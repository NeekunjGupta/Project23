var helicopterIMG, helicopter, package,packageIMG;
var packageBody,ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	package=createSprite(400, 80, 10,10);
	package.addImage(packageIMG)
	package.scale=0.2

	helicopter=createSprite(package.x, 200, 10,10);
	helicopter.addImage(helicopterIMG)
	helicopter.scale=0.6

	

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(helicopter.position.x , 200 , 5 , {restitution:0.4, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

 	boxPosition=width/2-100
 	boxY=610;


 	boxleftSprite=createSprite(boxPosition, boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxLeftBody = Bodies.rectangle(boxPosition+20, boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxLeftBody);

 	boxBase=createSprite(boxPosition+100, boxY+40, 200,20);
 	boxBase.shapeColor=color(255,0,0);

 	boxBottomBody = Bodies.rectangle(boxPosition+100, boxY+45-20, 200,20 , {isStatic:true} );
 	World.add(world, boxBottomBody);

 	boxleftSprite=createSprite(boxPosition+200 , boxY, 20,100);
 	boxleftSprite.shapeColor=color(255,0,0);

 	boxRightBody = Bodies.rectangle(boxPosition+200-20 , boxY, 20,100 , {isStatic:true} );
 	World.add(world, boxRightBody);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
 
 
  package.x= packageBody.position.x 
  package.y= packageBody.position.y 
  helicopter.velocityX = 0
   helicopter.velocityY = 0
  if(keyDown(RIGHT_ARROW)){
	helicopter.velocityX = 4;

	if(packageBody.isStatic === true){
		Matter.Body.setPosition(packageBody, { x : helicopter.x, y: helicopter.y})
	}

  }
  if(keyDown(LEFT_ARROW)){
	helicopter.velocityX = -4;
	if(packageBody.isStatic === true){
		Matter.Body.setPosition(packageBody, { x : helicopter.x, y: helicopter.y})
	}
  }
  if(keyDown(DOWN_ARROW)){
	Matter.Body.setStatic(packageBody,false)
  }

  drawSprites();
  
  
 
}