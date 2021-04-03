var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400, 400);
  
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation('moving', monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400, 350, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width / 2;
  
  FoodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background('white');
  
  groundScroll();
  monkeyControls();
  createFood();
  createObs();
  survivalTime();
  
  drawSprites();
}

function groundScroll() {
  if(ground.x <= 0) {
    ground.x = width;
  }
  
  monkey.collide( ground );
}

function createFood() {
  if(frameCount % 80 == 0) {
    var y = Math.round( random(120, 200) )
    banana = createSprite(350, y, 20, 20);
    banana.addImage('banana', bananaImage);
    banana.scale = 0.1
    banana.velocityX = -4;
    
    if(banana.x <= 10) {
      banana.destroy();
    }
    
    FoodGroup.add( banana );
  }
}

function monkeyControls() {
  if(keyDown( 'space' )) {
    monkey.y -= 34;
  }
  
  monkey.velocityY = 7.2;
}

function createObs() {
  if(frameCount % 300 == 0) {
    obstacle = createSprite(350, 340);
    obstacle.addImage('duhc', obstacleImage);
    obstacle.velocityX = -4;
    obstacle.scale = 0.1;
  }
}

function survivalTime() {
  var survTime
  
  stroke( 'black' );
  textSize(20);
  fill( 'black' );
  
  survTime = Math.round( Math.ceil(frameCount/frameRate()) );
  text('Survival Time: ' + survTime, 100, 50);
}