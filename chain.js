class Chain{
    constructor(bodyA,bodyB)
    {
        var opt={bodyA:bodyA,bodyB:bodyB,stiffness:0.05,length:50}
    
    this.chain=Constraint.create(opt);
    World.add(world,this.chain);
}
display(){
    var pointA=this.chain.bodyA.position;
    var pointB=this.chain.bodyB.position;
    line (pointA.x, pointA.y, pointB.x, pointB.y)
}
}