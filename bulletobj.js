// Name       : ByungChan Park
// Assignment : final_project(making_a_game)
// Course     : CS099
// Spring 2021
class bullets{
    constructor(x,y){
        this.bulletImage = loadImage('Image/bullet.png')
        this.preload_x = x - width/2
        this.preload_y = y - height/2
        this.speed = 8

        this.position = new vec2(width/2,height/2);
        this.velocity = new vec2(this.preload_x,this.preload_y);
        this.velocity.setLength(this.speed);
        this.angle = angle;

        //let the gun appear at the end of the gun.
        this.gunPosition = new vec2(this.preload_x,this.preload_y);
        this.gunPosition.setLength(35)
        this.position.addTo(this.gunPosition)

        this.hitZombie = false;
    }
    update(){
        this.position.addTo(this.velocity);
    }
    draw(){
        push();
        translate(this.position.x, this.position.y)
        scale(0.7)
       
        imageMode(CENTER);

        rotate(this.angle)
        image(this.bulletImage, 0,0)
        
        pop();
    }
    
    bulletHit(){
        this.hitZombie = true;
    }

    setBulletSpeed(){
        if(this.speed < 8)
            this.velocity.setLength(this.speed)
    }

}