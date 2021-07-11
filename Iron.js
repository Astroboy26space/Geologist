class Iron{
	constructor(x,y){
		var options = {
			restitution:0.8,
			density :3,
			friction: 30
			
		}
	// assign options to the rubber ball
		this.x=x;
		this.y=y;
		this.body=Bodies.rect(this.x, this.y,options)
		World.add(world, this.body);

	}
	display()
	{
			var ironpos =this.body.position;		
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("black");
			fill("darkblue");
			

			pop()
	}

}