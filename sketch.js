//Global Variables
var player, player_running;
var banana, bananaGroup,stone;
var obstaclesGroup, obstacleImage;
var bananaImage, bananaGroup;
var scene, score, backgroundImage, ground;


function preload(){
  
  backgroundImage = loadImage("jungle.jpg");
 
player_running =             loadAnimation("Monkey_01.png","Monkey_02.png", "Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png")
  
  
  
  obstacleImage = loadImage("stone.png");
bananaImage = loadImage("Banana.png");
}


function setup() {
  createCanvas(350,300);
  
  scene = createSprite(0, 150, 600, 300);
  scene.addImage("background", backgroundImage);
  scene.scale = 0.5;
   scene.velocityX = -2; 
  scene.x = scene.width/2;
  
  
  player = createSprite(50, 240, 20, 40);
  player.addAnimation("running" ,player_running);
  player.scale = 0.1;
  
  ground = createSprite(200, 275, 620, 10);
  ground.x = ground .width/2;
  ground.visible = false; 
 
  
  score = 0;
  
  bananaGroup = new Group();
  obstacleGroup = new Group();
}


function draw(){
   
   background("blue");

    player.collide(ground);

  bananaGroup.setLifetimeEach = -1;
  obstacleGroup.setLifetimeEach = -1;
  
  
  if (scene.x < 0){
    scene.x = 400 ;
  }
    
  if (keyDown("space") && player.y >= 159 ){
    player.velocityY = -10;
  }

    if (bananaGroup.isTouching(player)){
    bananaGroup.destroyEach();
      score = score+10;
  }
   if (obstacleGroup.isTouching(player)){
  player.scale = 0.1;
     score = 0;
   }
  
  
  player.velocityY = player.velocityY + 0.8;  
    
 
 
  switch(score){
    case 20: player.scale= 0.12
              break;
    case 50: player.scale= 0.15
              break;
    case 90: player.scale= 0.17
              break;          
    case 140: player.scale= 0.22
              break;
    case 200: player.scale= 0.24
              break;      
    case 250: player.scale= 0.26
              break;           
  }
   
  bananas();
 obstacles();
  
  drawSprites();
  
  stroke("white");
  textSize(20);
  fill("white");
 text("Score: "+ score, 450, 50);

}

function bananas(){
  if (frameCount% 80 === 0){
    banana = createSprite(670, 0, 30, 40);
    banana.addImage("Banana", bananaImage);
    banana.y = Math.round(random(100, 200));
    banana.velocityX = -8;
    banana.scale = 0.07;
    
   
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    stone = createSprite(620, 230, 0, 0);
    stone.addImage(obstacleImage);
    stone.scale = 0.15;
    stone.velocityX = -8;
    stone.setCollider("circle",0,0,120);
    
    obstacleGroup.add(stone);
   
  }
}
