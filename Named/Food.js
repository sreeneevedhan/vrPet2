class Food{
    constructor(fs){
        this.image=loadImage("images/Milk.png");
        this.foodStock=fs;

       
    }
    display(){
        var x=80;
        var y=100;
       // imageMode(CENTER)
    //    image(this.image,720,220,70,70);
console.log(this.foodStock);
        if(this.foodStock!=0){
            for(var i=0;i<this.foodStock;i++){
                if(i%10===0){
                    x=x;
                    y=y+50;

                }
               // image(this.image,x,y,50,50);
            //x=x+30
            }

        }

    }

  

    updateFoodStock(food){
        
        database.ref('/').update({
            food:food
        });

    }

    deductStock(x){ 
           if(x<=0){
           
             x=0
           }else{
             x=x-1;
           }
           database.ref('/').update({
             food:x
           });
           
           
    }

 

}