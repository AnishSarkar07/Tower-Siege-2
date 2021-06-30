class Box{
  constructor(x,y,width,height){
      var options = {
          
          restituition: 0.4,
          friction:0.4,
          density:0.00008
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width=width;
      this.height=height;
      this.visibility=255;
      World.add(world, this.body);

  }

  display() {
    var pos = this.body.position;
    var angle = this.body.angle;
    push();
    if (this.body.speed < 9.1) {
        rectMode(CENTER);
        translate(pos.x, pos.y);
        rotate(angle);
        strokeWeight(4);
        stroke("black")
        rect(0, 0, this.width, this.height);
        pop();
    } else {
        push();
        World.remove(world, this.body);
        this.visibility = this.visibility - 1;
        tint(255, this.visibility);
        pop();
    }
}
}