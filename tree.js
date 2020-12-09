class Tree{

    constructor(x,y){
    
        var options={
        isStatic:true
         
        }
        this.image=loadImage("images/tree.png")
       // this.body=Bodies.rectangle(x,y,400,550,options);
       // World.add(myworld,this.body);
        
     this.x=x,
     this.y=y
    }

    display(){

    imageMode(CENTER);
    image(this.image,this.x,this.y,400,550);
    //rectMode(CENTER);
    //rect(this.body.position.x,this.body.position.y,200,250)
    }

}