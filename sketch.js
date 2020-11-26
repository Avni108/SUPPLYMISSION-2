var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var package_options;
var brick1,brick2,brick3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	
	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	brick1Sprite = createSprite(340,620,10,80);
	brick1Sprite.shapeColor = "red";

	brick2Sprite = createSprite(385,655,100,10);
	brick2Sprite.shapeColor = "red";

	brick3Sprite = createSprite(440,620,10,80);
	brick3Sprite.shapeColor = "red";

	engine = Engine.create();
	world = engine.world;

	package_options ={
	isStatic:true,
	friction:0.7
	}
		
	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5,isStatic:true});
	World.add(world, packageBody,package_options);
	
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true});
 	World.add(world, ground);

	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 

  
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody,false);

    
  }
}



