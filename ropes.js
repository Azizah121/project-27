class Constraints{
    constructor (x,y){
        var options={
bodyA:x,
bodyB:y,
length:15,
stiffness:0.04
        }
       
        this.rope=Constraint.create(options);
        Matter.World.add(world,this.rope);
    }
}