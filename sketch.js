//Create variables here

var dog,dogImg;
var happyDog;
var database;
var foodS;
var  foodStock;
var feed;
var addFood;
var feedTime;
var lastFed;
var foodObj;
var image1;


function preload(){
  //load images here
  
dogImg=loadImage("images/dogImg.png");
happyDog=loadImage("images/dogImg1.png");
image1=loadImage("images/Milk.png");

}

function setup() {
  createCanvas(700, 500);
  database=firebase.database();
  
  feed=createButton("feed the dog");
  feed.position(700,90);
  

  
  addFood=createButton("add food");
  addFood.position(800,90);
 

  dog=createSprite(550,250,5,5);
  dog.addImage("sad",dogImg);
  dog.addImage("happy",happyDog);

  var dataBaseRef=database.ref("food");
  dataBaseRef.on("value",function(data){
      foodS=data.val();
  });

  foodObj=new Food(foodS);
  
  
  dog.scale=0.3;

  feedTime=database.ref('feedTime');
 feedTime.on("value",function(data){
  lastFed=data.val();
 })
  
//  foodStock=database.ref('food');
//  foodStock.on("value",readStocks);


}


function draw() {  
 
background(46, 139, 87);

 

 feed.mousePressed(feedDog);
 addFood.mousePressed(addFoods);
 display();
 
  drawSprites();
  //add styles here
  fill(0,0,0);
 text("food="+foodS,100,20);
 text("last fed="+lastFed,100,40);

}

function feedDog(){

  dog.changeImage("happy",happyDog);
 
 foodObj.deductStock(foodS);
 
 database.ref('/').update({
   feedTime:hour()
  })
}


function addFoods(){
foodS++;
database.ref('/').update({
  food:foodS
});

}

function  display(){
  var x=330;
  var y=100;
  imageMode(CENTER)
  image(image1,720,220,70,70);
//console.log(this.foodStock);
  if(foodS!=0){
      for(var i=0;i<foodS;i++){
          if(i%10===0){
              x=x-300;
              y=y+50;

          }
          image(image1,x,y,50,50);
          x=x+30;
      }

  }

}