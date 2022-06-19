var boat, boatImg;
var bottle, bottleImg, bottle2Img, bottle3Img;
var log, logImg;
var gameOver, gameOverImg;
//var gameState;
//var PLAY = 1;
//var END = 0;

function preload() {
  boatImg = loadImage("./assets/boat.png");
  bottleImg = loadImage("./assets/bottle.jpg");
  bottle2Img = loadImage("./assets/bottle2.jpg");
  bottle3Img = loadImage("./assets/bottle3.jpg");
  logImg = loadImage("./assets/wood.png");
  gameOver = loadImage("./assets/gameover.png");

}

function setup() {
  createCanvas(700, 700);

  //if (gameState == PLAY) {
    gameOver.visible = false;

    boat = createSprite(100, 675);
    boat.addImage(boatImg);
    boat.scale = 0.15;
    
  //}

  //if (gameState == END) {

    //gameOver = createSprite(350, 350, 50, 50);
    //gameOver.addImage(gameOverImg);

  //}
}

function draw() {
  background("blue");

boat.velocityX =5;
  if (frameCount % 120 == 0) {
    spawnObstacles();
 }

  drawSprites();
}

function spawnObstacles() {
  var ranNum = Math.round(random(1,3));

  log = createSprite(250,Math.round(random(695, 5)));
  log.addImage(logImg);
  log.scale = 0.075
  log.velocityY = -5;

  /*bottle = createSprite(250,Math.round(random(695, 5)));
  bottle.scale = 0.1
  bottle.velocityX = -2;

  switch (ranNum) {

    case 1: bottle.addImage(bottleImg);
      break;

    case 2: bottle.addImage(bottle2Img);
      break;

    case 3: bottle.addImage(bottle3Img);
      break;
  }*/
}