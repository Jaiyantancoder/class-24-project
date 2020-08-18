class Bird {
    constructor(x,y,w,h) {

    var options = {
   
    mass : 2.0,
    friction : 1.0,

    }
      this.bird = Bodies.rectangle(mouseX,mouseY,w,h);
      this.w =  w;
      this.h = h;

     World.add(world,this.bird); 


    }
   display(){
var pos = this.bird.position;
fill("green");
rectMode(CENTER);
rect(mouseX,mouseY,this.w,this.h);   

   }  

}