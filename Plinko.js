class Plinko{
    constructor(x, y, r) 
    {
      var options = {
      isStatic: true,
      }
      
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.x = x;
      this.y = y;
      this.r = r;
      World.add(world, this.body);
     }
  
     display(){
 
        var plinko = this.body.position;
      push();
      translate(plinko.x, plinko.y);
      ellipse(0,0, this.r, this.r);
      pop();
     }
  }