class Stone{

    constructor(x,y,r){
    
        var options={
        friction:1,
        
        density:1.2
        }
        
        this.image=loadImage("images/stone.png");
        this.body=Bodies.circle(x,y,r,options);
        World.add(myworld,this.body);
        this.r=r;
        
    }

    display(){

    imageMode(CENTER);
    image(this.image,this.body.position.x,this.body.position.y,this.r*2,this.r*2);

    }

}
