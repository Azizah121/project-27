class Bob{
constructor(x,y){
    var option={
         isStatic:true,
        restitution:0.3,
        friction:0.5,
        density:1.2
     };
this.body=Matter.Bodies.rectangle(x,y,20,20,option);
this.width=20;
this.height=20;
Matter.World.add(world,this.body);
}
display(){
 var pos=this.body.position;
push();
rectMode(CENTER);
translate(pos.x,pos.y);
rect(0,0,this.width,this.height);
pop();
}
    }
