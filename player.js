class player{
    constructor(position_x,position_y){
        this.x = position_x;
        this.y = position_y;
        this.dmg = 1;

        this.hp = 3;
        this.angle = 0;
        this.playerImage = loadImage('Image/player.png');
        this.heartFrame = loadImage('Image/heartFrame.png')
        this.heart = loadImage('Image/heart.png')

        this.score = 0;
        this.gold = 0;
    }

    update(){
        
    }

    draw(){
        push();
        translate(this.x, this.y);
        rotate(this.angle)
        imageMode(CENTER)
        image(this.playerImage,0,0)

        pop();

        push();
        imageMode(CENTER)
        for(let i = 0; i < 3; i++){
            
            image(this.heartFrame,70+70*i,750)
        }
        for(let i = 0; i < this.hp; i++){
            
            image(this.heart,70+70*i,750)
        }
        pop();
    }

    setAngle(angle){
        this.angle = angle;
    }

    hpDown(){
        this.hp -= 1;
    }
    setDamage(dmg){
        this.dmg = dmg;
    }
    setHealth(hp){
        this.hp +=hp;
    }

    addGold(G){
        this.gold += G;
    }
    loseGold(G){
        this.gold -= G;
    }

    addScore(S){
        this.score += S
    }

}