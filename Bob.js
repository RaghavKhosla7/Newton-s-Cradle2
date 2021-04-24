class Bob{
    constructor(x,y){
        var options = {
            isStatic: false,
            restitution: 1,
            friction: 0,
            density: 0.8,
        }
        this.body = Bodies.circle(x,y,25,options)
        World.add(world,this.body);

        console.log(this.body)

    }

    display(){
        push();
        ellipseMode(RADIUS);
        fill(239,133,118);
        ellipse(this.body.position.x,this.body.position.y,25,25);
        pop();
    }
}