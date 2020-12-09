class Mango{

    constructor(x,y,r){
    
        var options={
        isStatic:true,    
        friction:1
        }
        
        this.image=loadImage("images/mango.png");
        this.body=Bodies.circle(x,y,r/2,options);
        World.add(myworld,this.body);
        this.r=r;
        

    }

    display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.r,this.r);

    }

}
