// Name       : ByungChan Park
// Assignment : final_project(making_a_game)
// Course     : CS099
// Spring 2021

let angle

let player1;

let bullet_arr = [];
let zombie_arr = [];

let movement = 0;

let zombieDrawCount = 0;

const zombieSpawnMax = 1200
const zombieSpawnMin = -400

let zombieOne;
let waveCheck = true;
let waveLevel = 1;
let count =0;

let countDown = 0;
let oneMinute = 59;
let randomSpawn = 1;

let shopOpen = false;

let check_mainMenu = true;

let check_howToPlay = false
let dmg = 1;

function preload(){
    mainMenu = loadImage('Image/MainMenu.png')

    howToShoot = loadImage('Image/how_to_shoot.png')
    howToBuy = loadImage('Image/how_to_shopping.png')

    machine = loadImage('Image/vending machine.png')
    UpgradableGun = loadImage('Image/FN45.png')
    medickit = loadImage('Image/MedicKit.png')

    badEnd = loadImage('Image/badEnd.png')
    survived = loadImage('Image/survived.png')

    mainSound = loadSound('sounds/Horror-Game-Intro.mp3')
    inGameSound = loadSound('sounds/Creepy-Action.mp3')
    fireSound = loadSound('sounds/1911-.45-ACP-Close-Single-Gunshot-C-www.fesliyanstudios.com.mp3')
}

function setup()
{
    createCanvas( 800, 800 );
    player1 = new player(width/2, height/2);
    mainSound.setVolume(0.1)
    
    
    inGameSound.setVolume(0.1)
    fireSound.setVolume(0.1)
    
}

function draw()
{
    background( 220 );
    
    if(check_mainMenu)
    {   
        inGameSound.stop();
        
        if(!mainSound.isPlaying()){
            mainSound.play()
        }
        push()
        
        image(mainMenu,0,0,width,height)
        textAlign(CENTER)
        textSize(50)
        text('Game Start', 400,600)
        text('How to Play',400,700)
        pop()

        if(check_howToPlay){
            push()
            background( 255 );
            imageMode(CENTER)
            textAlign(CENTER)
            textSize(30)

            image(howToBuy,400,500)
            text('UPGRADE YOUR WEAPON\n\n\n BUY MEDKIT TO HEAL',620,450)
            image(howToShoot,400,130)
            text('MOUSE LEFT CLICK \nTO SHOOT',650,200)

            

            text('Retuning to main menu by left clicking',400,750)
            pop()

        }

    } else if(player1.hp > 0 && waveLevel == 6)
    {
        winner();
        
    } else if(player1.hp > 0)
    {
        mainSound.stop();

        if(!inGameSound.isPlaying()){
            inGameSound.play();   
            
        }
        angle = atan2(mouseY - (height/2), mouseX - (width/2))
        player1.setAngle(angle);
        player1.draw();
        
        for(let particles of bullet_arr){
            particles.update();
            particles.draw()
        }
        
        for(let i = bullet_arr.length - 1; i >= 0; --i)
        {
            let particle = bullet_arr[i];
            
            if(particle.position.x > width || particle.position.x < 0 || particle.position.y > height || particle.position.y < 0)
            {
                bullet_arr.splice(i,1);
            }
            if(particle.hitZombie){
                bullet_arr.splice(i,1);
            }


        }


        
        
        if(count > frameRate()/4){
            if(zombieDrawCount < 3){
                zombieDrawCount++;
            } else {
                zombieDrawCount = 0;
            }
            count = 0;
        }
        count++;

        for(let particles of zombie_arr){
            
            
            particles.update(zombieDrawCount);
            particles.draw()
            
        }

        for(let i = zombie_arr.length - 1; i >= 0; --i)
        {
            let particle = zombie_arr[i];
            
            if(particle.position.x > width/2 - 20 && particle.position.x < width/2 +20 && particle.position.y > height/2 - 20 && particle.position.y < height/2 + 20)
            {
                zombie_arr.splice(i,1);
                player1.hpDown();
            }
            if(particle.hp <= 0){
                player1.addGold(particle.getNum()+1)
                player1.addScore((particle.getNum()+1)*100)
                zombie_arr.splice(i,1)
            }
            

        }
        
        
        for(let zombies of zombie_arr){
            for(let bullets of bullet_arr){
                
                if(BulletCollisionCheck(zombies,bullets)){
                    zombies.getDamage(player1.dmg);
                    bullets.bulletHit();
                }
            }
        }

        if(waveCheck){
            waveStart();
            
            waveCheck = false;
        }
        if(zombie_arr.length == 0 && !waveCheck && waveLevel < 5){
            text('Wave '+ waveLevel +' Clear.\n If you want to skip, Press \'I\'', 400,200)
            
            if(countDown > frameRate()){
                countDown = 0;
                
                
                oneMinute--; 
                if(oneMinute < 0 ){
                    oneMinute = 59
                    waveCheck = true;
                    waveLevel++;
                } 
            }  
            textAlign(CENTER)
            textSize(30)
            text('TIME : ' + oneMinute,400,40)
            countDown++; 
            Shop();
        }

        push()
        textAlign(LEFT)
        textStyle(BOLD)
        textSize(30)
        text("Score : " + player1.score, 50,50);
        text("Z-Count : " + zombie_arr.length, 50,80);
        text('GOLD : ' + player1.gold, 50,110)

        pop()

        
                
    }

    
    else if(player1.hp <= 0){
        inGameSound.stop();
        gameOver();
    }
    
}

function mousePressed(){
    if(!check_mainMenu && zombie_arr.length != 0){
        fireSound.play();
        bullet_arr.push(new bullets(mouseX, mouseY)); 
    }
    if(check_mainMenu && !check_howToPlay && mouseX > 250 && mouseX < 550 && mouseY > 550 && mouseY < 600){
        check_mainMenu = false;
    }

    if(check_mainMenu && !check_howToPlay && mouseX > 250 && mouseX < 550 && mouseY > 650 && mouseY < 700){
        check_howToPlay = true;
    } else if(check_howToPlay){
        check_howToPlay = false;

    }
    
    if(!check_mainMenu &&player1.hp > 0 && mouseX > 650 && mouseX < 750 && mouseY > 50 && mouseY < 150 && zombie_arr.length == 0){
        shopOpen = true
    }

    if(shopOpen == true && mouseX > 305 && mouseX < 375 && mouseY > 325 && mouseY < 395 && player1.dmg < 4){
        
        if(dmg == 1&& player1.gold >= 15){
            dmg++
            player1.loseGold(15)
            player1.setDamage(dmg)
        }
        if(dmg == 2 && player1.gold >= 30){
            dmg++
            player1.loseGold(30)
            player1.setDamage(dmg)
        }
        if(dmg == 3 && player1.gold >= 50){
            dmg++
            player1.loseGold(50);
            player1.setDamage(dmg)
        }
        
        
    }

    if(shopOpen == true && mouseX > 435 && mouseX < 505 && mouseY > 325 && mouseY < 395 && player1.hp < 3 && player1.gold >= 20){
        player1.loseGold(20)
        player1.setHealth(1)
    }
    
    if(shopOpen == true && mouseX > 555 && mouseX < 565 && mouseY > 280 && mouseY < 300){
        shopOpen = false;
    }
}


function waveStart(){
    
    for(let i = 0; i < 6 * waveLevel; i++){
        const zombie_X_pos = random(zombieSpawnMin,zombieSpawnMax)
        const zombie_Y_pos = random(zombieSpawnMin,zombieSpawnMax)
        const randomZombie = random(randomSpawn)
        if( zombie_X_pos > 0 && zombie_X_pos < 800 && zombie_Y_pos > 0 &&  zombie_Y_pos < 800){
            --i;
            continue;
        
        }
        zombie_arr.push(new zombie(zombie_X_pos, zombie_Y_pos, int(randomZombie)))
        if(i == 29){
            zombie_arr.push(new zombie(zombie_X_pos, zombie_Y_pos, int(4)))
            zombie_arr.push(new zombie(zombie_X_pos, zombie_Y_pos, int(4)))
        }

    }
    if(randomSpawn < 4)
        randomSpawn++;
}

function keyPressed(){
    if(keyCode == 67){
        waveStart();
    }
    if(keyCode == 73 && oneMinute > 6){
        oneMinute = 5;
    }
}

function BulletCollisionCheck(zombie,bullet){
    const zombieHitBox = 15;
    if(bullet.position.x > zombie.position.x - zombieHitBox && bullet.position.x < zombie.position.x + zombieHitBox && bullet.position.y > zombie.position.y - zombieHitBox && bullet.position.y < zombie.position.y + zombieHitBox)
    {
        return true;
    }
        return false;

}

function gameOver(){
    
    if(!mainSound.isPlaying()){
            mainSound.play()
        }
    textAlign(CENTER)
    textSize(40)
    textFont(BOLD)
    image(badEnd,0,0,width,height)
    text('GAMEOVER\n Press \'F5\' to Restart',width/2,700)

}
function winner(){
    inGameSound.stop();
    if(!mainSound.isPlaying()){
        mainSound.play()
    }
    image(survived,0,0,width,height)
    textAlign(CENTER)
    textSize(50)
    text('You survived the night.',400,200)

    text('Credit', 400,630)
    text('Music by Eric Matyas\nwww.soundimage.org',400,700)
}

function Shop(){
    push()
    imageMode(CENTER)
    image(machine, 700,100,100,100)
        if(shopOpen){
            rectMode(CENTER)
            rect(400,400,300,200,20)
            imageMode(CENTER)
            image(UpgradableGun, 340,360,70,70)
            textAlign(CENTER)
            textSize(20)
            if(player1.dmg < 2){
                text('15G\nDamage\nUpgrade',340,420)
            } else if( player1.dmg < 3) {
                text('30G\nDamage\nUpgrade',340,420)
            } else if(player1.dmg < 4){
                text('50G\nDamage\nUpgrade',340,420)

            } else {
                text('Full\nUpgrade',340,420)
            }
            
            image(medickit, 470,360,70,70)
            text('20G\nHealing',470,420)
            
            push()
            textStyle(BOLD)
            text('X',560,300)
            pop();
        }

    pop();
}