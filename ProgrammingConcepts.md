## 1. Shapes
    The game is top view. so I was in agony about How i can make people think it is zombie. and i decided to draw a feature of zombies such as skin colors and stretching their hand forwards. 
    

## 2. Colors
    It is zombie games but i want it to make bright. because I wanted to make players can see the zombies and recognized each one of the zombies. so I picked intuitive colors.

## 3. Variables
    I used lots of variables but the point is I made all variables as global. therefore, i can access and modify the variables easily.

    let angle

    let player1;

    let bullet_arr = [];
    let zombie_arr = [];
    let barricade_arr = [];

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
## 4. Conditional Statements
    I used the conditional statements to check the mouse positions and make a bullets or scene move correctly. if i click something on, then it triggered and game reacts. 

    if(shopOpen == true && mouseX > 435 && mouseX < 505 && mouseY > 325 && mouseY < 395 && player1.hp < 3 && player1.gold >= 20){
        player1.loseGold(20)
        player1.setHealth(1)
    }
## 5. Loops
    Below code are existed to spawn the zombies on out of canvas so each wave zombie spawn and game goes on.
    this code is in waveStart() function.

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
## 6. Functions
    I made a functions to code looks better. so code looks clear and easy to find the code.

    function BulletCollisionCheck(zombie,bullet)
    function gameOver()
    function winner()
## 7. Classes
    I have 4 class files so each run as object and save all the variables in class.
    so i can make add later with this objects. and zombie class has all the variables. so i can take out and change the image and moves by zombie numbers.
    
    player.js
    vec2.js
    zombie.js
    bulletobj.js

## 8. Arrays
    2 arrays I build. all the bulltes objects are saved in bullet_arr and same idea, zombie ojects are saving in zombie_arr. so i can take out the each objects easily and compare the positions and could do the collisions check between this two arrays.

    let bullet_arr = [];
    let zombie_arr = [];

