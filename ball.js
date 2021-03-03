class Ball{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.x=x;
		this.y=y;
		this.r=10;
		this.body=Bodies.circle(this.x, this.y,10, options)
		World.add(world, this.body);
    }
    display()
    {
        var ballPos=this.body.position;	
		push()
		translate(ballPos.x, ballPos.y);
		// rectMode(CENTER);
		rotate(this.body.angle)
		fill("cyan")
		ellipseMode(CENTER);
		ellipse(0,0,30,30)
		pop() 
    }
}