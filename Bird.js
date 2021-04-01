class Bird{
    constructor(x, y) {
        var option = { restitution: 0.5, density: 1.5, friction: 1}

        this.body = Bodies.rectangle(x, y, 50, 50, option);
        World.add(world, this.body);
        this.width = 50;
        this.height = 50;


    } 

    display() {
        push();



        translate(this.body.position.x, this.body.position.y);
        rotate(this.body.angle);

        rectMode(CENTER);
        fill("red");
        stroke("white");
        strokeWeight(4);
        rect(0, 0, this.width, this.height);

        pop();
        
    }
    
}