var ground;
var monkey , monkey_running;
var banana ,bananaImage;
var obstacle, obstacleImage;


function preload()
{
  monkey_running =  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() 
{
  //create a ground sprite
  ground=createSprite(400,360,900,5);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  console.log(ground.x);

  //create a monkey sprite
  monkey=createSprite(80,330,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;

  //obstacle=createSprite(200,340,20,20);
  //obstacle.addImage(obstacleImage);
  //obstacle.scale=0.1;
  
  bananaGroup = new Group(); 
  obstacleGroup = new Group(); 
  
  
  
  
}


function draw() {
  background(255);
  
var survivalTime=0;
var score;
stroke("white");
  textSize(20);
  fill("white");
  text("Score: "+ score, 500,500);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time: "+ survivalTime, 100,50);
  
  if(keyDown("space")&& monkey.y >= 50) {
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground);
  
  //to make a infinite ground
  if (ground.x < 0)
  {
    ground.x = ground.width/2;
  }
  
  if(monkey.isTouching(obstacleGroup))
  {
    monkey.velocity=0;
  }
  
  
banana();
stone();  
drawSprites();
} 
  
 function banana()
  {
    if(frameCount%80===0)
    {
      ban=createSprite(220,300,20,20);
      ban.scale=0.1;
      
      ban.velocityX= -7;
      
        ban.addImage(bananaImage);
      
      ban.y=Math.round(random(120,200));
      
      ban.setLifetime=100;
      
      bananaGroup.add(ban);
    }
  
}

function stone()
  {
    if(frameCount%300===0)
    {
      obstacle=createSprite(300,340,20,20);
      obstacle.scale=0.1;
      
      obstacle.velocityX= -7;
      
        obstacle.addImage(obstacleImage);
      
      obstacle.setLifetime=100;
      
      obstacleGroup.add(obstacle);
    }
  
}






