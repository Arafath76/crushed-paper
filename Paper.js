class Paper{
     constructor(x, y, width, height, angle,radius){
        var options = {
            'restitution':0.3,
            'friction':0.5,
            'density':1.2,
            'isStatic':false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;

        World.add(world, this.body);
     }


}