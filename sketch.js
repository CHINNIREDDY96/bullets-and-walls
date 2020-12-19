var wall, thickness;
var bullet1, bullet2, bullet3, speed1,speed2, speed3, weight1, weight2, weight3;

function setup() {
  createCanvas(1600,600);
  wall1 = createSprite(1200, 100, thickness, height/2);
  wall2 = createSprite(1200, 300, thickness, height/2);
  wall3 = createSprite(1200, 500, thickness, height/2);

  bullet1 = createSprite(10,100, 10, 10);
  bullet2 = createSprite(10,300, 10, 10);
  bullet3 = createSprite(10,500, 10, 10);

  thickness = random(22,83);

  speed1 = random(80,90);
  speed2 = random(100,90);
  speed3 = random(450,90);

  weight1 = random(40,50); 
  weight2 = random(20,60); 
  weight3 = random(30,70); 

}

function draw() {
  background("black"); 
  bullet1.velocityX = speed1;
  bullet2.velocityX = speed2;
  bullet3.velocityX = speed3;
  
  hasCollided1(bullet1, wall1);
  hasCollided2(bullet2, wall2);
  hasCollided3(bullet3, wall3);

  if(hasCollided1(bullet1, wall1)){

    bullet1.velocityX = 0;
    var damage = 0.5 * weight1 * speed1 * speed1/(thickness * thickness * thickness)
    
    if(damage > 10){
      wall1.shapeColor = color(255,0,0);
    }
    
    if(damage<10){

      wall1.shapeColor = color(0,255,0);
    }

  }

  if(hasCollided2(bullet2, wall2)){

    bullet2.velocityX = 0;
    var damage = 0.5 * weight2 * speed2 * speed2/(thickness * thickness * thickness)
    
    if(damage > 10){
      wall2.shapeColor = color(255,0,0);
    }
    
    if(damage<10){

      wall2.shapeColor = color(0,255,0);
    }

  }

  if(hasCollided3(bullet3, wall3)){

    bullet3.velocityX = 0;
    var damage = 0.5 * weight3 * speed3 * speed3/(thickness * thickness * thickness)
    
    if(damage > 10){
      wall3.shapeColor = color(255,0,0);
    }
    
    if(damage<10){

      wall3.shapeColor = color(0,255,0);
    }

  }













  drawSprites();
}

function hasCollided1(bullet1, wall1)
{

 bullet1RightEdge = bullet1.x + bullet1.width;
 wall1LeftEdge = wall1.x; 
  
 if(bullet1RightEdge >= wall1LeftEdge){
   return true
 }
 return false; 

}

function hasCollided2(bullet2, wall2)
{

 bullet2RightEdge = bullet2.x + bullet2.width;
 wall2LeftEdge = wall2.x; 
  
 if(bullet2RightEdge >= wall2LeftEdge){
   return true
 }
 return false; 

}

function hasCollided3(bullet3, wall3)
{

 bullet3RightEdge = bullet3.x + bullet3.width;
 wall3LeftEdge = wall3.x; 
  
 if(bullet3RightEdge >= wall3LeftEdge){
   return true
 }
 return false; 

}








