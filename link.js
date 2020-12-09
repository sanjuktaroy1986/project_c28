class Link{

constructor(body,point){

 var  options={

    bodyA:body,
    pointB:point,
    stiffness:0.01,
    length:30
 }

 this.chain=Matter.Constraint.create(options);
 World.add(myworld,this.chain)
 this.body=body;

}

attach(body){
    this.chain.bodyA=body
}

fly(){

   this.chain.bodyA=null;
}

display(){

if(this.chain.bodyA){
   stroke(0)
   strokeWeight(3)
    line(this.chain.pointB.x,this.chain.pointB.y, this.chain.bodyA.position.x,this.chain.bodyA.position.y);
    }
}

}