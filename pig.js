class Pig {
    constructor(x,y,w,h) {

    var options = {
   
    mass : 2.0,
    friction : 1.0,

    }
      this.pig = Bodies.rectangle(x,y,w,h);
      this.w =  w;
      this.h = h;

     World.add(world,this.pig); 


    }
   display(){
var pos = this.pig.position;
fill("orange");
rectMode(CENTER);
rect(pos.x,pos.y,this.w,this.h);   

   }  

}