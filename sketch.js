var dogImage, happyDog;
var database;
var foodS, foodStock;

function preload()
{
  dogImage = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  database = firebase.database();

	createCanvas(500, 500);

  dog = createSprite(400,500,20,20);
  dog.addImage(dogImage);
  dog.scale = 0.15;

  foodStock = database.ref("Food");
  foodStock.on("value",readStock);
}


function draw() {  
  background(46,139,87);

  if(keyWentDown(UP_ARROW)){
    writeStock(foodS);
    dog.addImage(happyDog);

  }

  drawSprites();
  fill("white");

  text("foodStock", 400,200);


  //add styles here

}

function readStock(data){
  foodS = data.val();
}

function writeStock(x){

  if(x<=0){
    x = 0;
  }else{
    x = x-1;
  }
  
database.ref('/').update({
  Food:x

})
}



