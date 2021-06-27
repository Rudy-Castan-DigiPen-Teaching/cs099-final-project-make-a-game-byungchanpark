// Name       : ByungChan Park
// Assignment : final_project(making_a_game)
// Course     : CS099
// Spring 2021
class zombie
{
    constructor(x,y,zombieNUM)
    {
        this.position = new vec2(x,y);
        this.velocity = new vec2(width/2-x,height/2-y);
        this.speed = 1.1;
        this.velocity.setLength(this.speed)
        this.angle = this.velocity.getAngle();
        
        this.size = 0.8
        
        if(zombieNUM == 1){
            this.hp = 2;
        }else if(zombieNUM == 2){
            this.hp = 3;
        }else if(zombieNUM == 3){
            this.hp = 5;
        }else if(zombieNUM == 4){
            this.hp = 10;
        }else{
            this.hp = 1;
        }

        this.monsterNUM = zombieNUM;

        this.zombie;
        
        this.zombie_1 = loadImage('Image/zombie1-1.png');
        this.zombie_2 = loadImage('Image/zombie1-2.png');
        this.zombie_3 = loadImage('Image/zombie1-3.png');
        this.zombie_4 = loadImage('Image/zombie1-4.png');

        this.zombie2_1 = loadImage('Image/zombie2-1.png');
        this.zombie2_2 = loadImage('Image/zombie2-2.png');
        this.zombie2_3 = loadImage('Image/zombie2-3.png');
        this.zombie2_4 = loadImage('Image/zombie2-4.png');

        this.zombie3_1 = loadImage('Image/zombie3-1.png');
        this.zombie3_2 = loadImage('Image/zombie3-2.png');
        this.zombie3_3 = loadImage('Image/zombie3-3.png');
        this.zombie3_4 = loadImage('Image/zombie3-4.png');

        this.zombie4_1 = loadImage('Image/headless-1.png');
        this.zombie4_2 = loadImage('Image/headless-2.png');
        this.zombie4_3 = loadImage('Image/headless-3.png');
        this.zombie4_4 = loadImage('Image/headless-4.png');

        this.zombie5_1 = loadImage('Image/zombie5-1.png');
        this.zombie5_2 = loadImage('Image/zombie5-2.png');
        this.zombie5_3 = loadImage('Image/zombie5-3.png');
        this.zombie5_4 = loadImage('Image/zombie5-4.png');
    }

    update(zombieCount)
    {
        this.position.addTo(this.velocity)
        this.swapZombie(zombieCount)
    }
    
    angleTo( particle )
    {
        const dx = particle.position.x - this.position.x;
        const dy = particle.position.y - this.position.y;
        return atan2(dy,dx);
    }

    draw()
    {
        push();
        translate(this.position.x, this.position.y)
        rotate(this.angle)
        imageMode(CENTER)
        scale(this.size)
        image(this.zombie,0,0)
        pop();

    }
    getNum(){
        return this.monsterNUM;
    }

    
    getDamage(dmg){
        this.hp -= dmg
    }

    swapZombie(n){

        if(this.monsterNUM == 0)
        {
            switch(n){
                case 0:
                    this.zombie = this.zombie_1;
                    break;
                case 1:
                    this.zombie = this.zombie_2;
                    break;
                case 2:
                    this.zombie = this.zombie_3;
                    break;
                case 3:
                    this.zombie = this.zombie_4;
                    break;
            }

        } 
        else if(this.monsterNUM == 1)
        {
            switch(n){
                case 0:
                    this.zombie = this.zombie2_1;
                    break;
                case 1:
                    this.zombie = this.zombie2_2;
                    break;
                case 2:
                    this.zombie = this.zombie2_3;
                    break;
                case 3:
                    this.zombie = this.zombie2_4;
                    break;
            }

        }
        else if(this.monsterNUM == 2)
        {
            switch(n){
                case 0:
                    this.zombie = this.zombie3_1;
                    break;
                case 1:
                    this.zombie = this.zombie3_2;
                    break;
                case 2:
                    this.zombie = this.zombie3_3;
                    break;
                case 3:
                    this.zombie = this.zombie3_4;
                    break;
            }
        }else if(this.monsterNUM == 3)
        {
            switch(n){
                case 0:
                    this.zombie = this.zombie4_1;
                    break;
                case 1:
                    this.zombie = this.zombie4_2;
                    break;
                case 2:
                    this.zombie = this.zombie4_3;
                    break;
                case 3:
                    this.zombie = this.zombie4_4;
                    break;
            }
        } else if(this.monsterNUM == 4)
        {
            switch(n){
                case 0:
                    this.zombie = this.zombie5_1;
                    break;
                case 1:
                    this.zombie = this.zombie5_2;
                    break;
                case 2:
                    this.zombie = this.zombie5_3;
                    break;
                case 3:
                    this.zombie = this.zombie5_4;
                    break;
            }
        }
    }

    
    
}