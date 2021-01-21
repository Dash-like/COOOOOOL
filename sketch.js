//Create variables here
var dog, happyDog;
var database;
var foodS, foodStock;
var dogImg, dogImg1;


function preload()
{
  //load images here
  dogImg = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
  
}

function setup() {
database = firebase.database()
console.log(database)
  createCanvas(900, 900);
  
  dog = createSprite(550, 390, 10, 10);
   dog.addImage(dogImg);
   dogImg = scale(100, 20);
   foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
}


function draw() {  
  background(46,139, 87);
    if(keyWentDown(UP_ARROW)){
      console.log(foodS);
      writeStock(foodS);
      dog.addImage(happyDog);
      }
  
  
  drawSprites();
  //add styles here
   textSize(30);
   fill("black");
   text("Note: Press UP_ARROW Key To Feed Drago Milk!", 100, 100)

}
function readStock(data){
foodS = data.val();
}
function writeStock(x){
  if(x<=0){
    x=0;
  }else{
    x=x-1;
  }
  database.ref('/').update({
    food:x
  })
}

