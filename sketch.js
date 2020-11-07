var car1,car2,car3;

function setup() {
  createCanvas(800,400);
car1=createSprite(0,100,30,20);
car2=createSprite(0,200,30,20);
car3=createSprite(0,300,30,20);

wall1=createSprite(600,100,20,70);
wall1.shapeColor=rgb(80,80,80);
wall2=createSprite(600,200,20,70);
wall2.shapeColor=rgb(80,80,80);
wall3=createSprite(600,300,20,70);
wall3.shapeColor=rgb(80,80,80);

speed1=random(55,90);
speed2=random(55,90);
speed3=random(55,90);

weight1=random(400,1500);
weight2=random(400,1500);
weight3=random(400,1500);

car1.velocityX=speed1;
car2.velocityX=speed2;
car3.velocityX=speed3;

}

function draw() {
  background("lightgreen");  

  if(wall1.x-car1.x< wall1.width/2+car1.width/2){
    car1.velocityX=0;
    damage1=0.5*weight1*speed1*speed1/22500;

    if(damage1>180){
      car1.shapeColor="red";
    }
    else if(damage1>100 && damage1<180){
      car1.shapeColor="yellow";
    }
    else if(damage1<100){
      car1.shapeColor="green";
    }
  }

  if(wall2.x-car2.x< wall2.width/2+car2.width/2){
    car2.velocityX=0;
    damage2=0.5*weight2*speed2*speed2/22500;

    if(damage2>180){
      car2.shapeColor="red";
    }
    else if(damage2>100 && damage2<180){
      car2.shapeColor="yellow";
    }
    else if(damage2<100){
      car2.shapeColor="green";
    }
  }

  if(wall3.x-car3.x< wall3.width/2+car3.width/2){
    car3.velocityX=0;
    damage3=0.5*weight3*speed3*speed3/22500;

    if(damage3>180){
      car3.shapeColor="red";
    }
    else if(damage3>100 && damage3<180){
      car3.shapeColor="yellow";
    }
    else if(damage3<100){
      car3.shapeColor="green";
    }
  }
  drawSprites();
}