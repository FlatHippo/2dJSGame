//#region  initialization
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
canvas.width = 1920;
canvas.height = 1080;
const backgroundImg = new Image();
backgroundImg.src = './images/background.jpg';
const playerImg = new Image();
playerImg.src = './images/player.png';
const wallImg = new Image();
wallImg.src = './images/wall.jpg';
let playerSpeed = 2.5;
let boundaries = [];
let deaths = 0;
//#endregion
function updateDeaths(){
    context.font = "50px Sofia Sans Regular";
    context.fillStyle = 'white';
    context.fillText("Deaths: " + deaths, 100, 100);
}
function initializeLevel(levelNum){
    if(boundaries.length > 0) 
        boundaries = [];
    levels[levelNum].loadLevel();
    goal.updateGoal({position: {x: goalPositions[currentLevel][1][0], y: goalPositions[currentLevel][1][1]}});
}
class Sprite{
    constructor({position, startPositon, image, scale, rotation = 0}){
        this.position = position;
        this.image = image;
        this.scale = scale;
        this.startPositon = startPositon;
        this.rotation = rotation;
        this.rotationSpeed = 360 * Math.PI / 180;
        this.rotating = false;
    }

    draw(){
        context.save();
        context.translate(this.position.x + this.image.width/2, this.position.y + this.image.height/2);
        context.rotate(this.rotation);
        context.drawImage(this.image, -this.image.width/2, -this.image.height/2, this.image.width * this.scale.x, this.image.height * this.scale.y);
        context.restore();
    }
    rotate(angle){
        this.rotation += angle * Math.PI / 180;
    }
};
class Boundary{
    constructor({position, width, height}){
        this.position = position;
        this.width = width;
        this.height = height;
        this.image = wallImg;
    }
    draw(){
        context.drawImage(this.image, this.position.x, this.position.y, this.width, this.height);
    }
}
class Timer{
    static countdown = 5000;
    constructor(){
        this.activateTimer();
    }
    activateTimer(){
        setInterval(this.randomizePlayerSpeed, Timer.countdown);
    }
    randomizePlayerSpeed(){
        let newSpeed;
        playerSpeed = Math.abs(playerSpeed);
        do{
            newSpeed = Math.random() * 7 + 1;
            let r = Math.random();
            if(r > 0.5){
                newSpeed *= -1;
            }
            
        }
        while((newSpeed >= -0.5 && newSpeed <= 0.5) || (playerSpeed - newSpeed <= 0.8 && playerSpeed - newSpeed >= -0.8));
        player.rotating = true;
        playerSpeed = 0;
        setTimeout(() => {player.rotating = false
                          playerSpeed = newSpeed}, 1000);
        ;
    }
}

function isColliding(sprite, boundary){
    if(sprite.position.x + sprite.image.width >= boundary.position.x && 
        sprite.position.x <= boundary.position.x + boundary.width && 
        sprite.position.y + sprite.image.height >= boundary.position.y && 
        sprite.position.y <= boundary.position.y + boundary.height){
            return true;
    }
}

const background = new Sprite(
    {position: {x: 0, y: 0},
     image: backgroundImg,
     scale: {x: 1, y: 1}
    });
const player = new Sprite(
    {
        position: {x: 150, y: 450},
        startPositon: {x: 150, y: 450},
        image: playerImg,
        scale: {x: 1, y: 1}
    });

function InstantiateWallBoundaries(){
    const leftWall = new Boundary({
        position: {x: -50, y: 0},
        width: 0,
        height: 1080
    })
    const rightWall = new Boundary({
        position: {x: canvas.width + 50, y: 0},
        width: 0,
        height: 1080
    })
    const topWall = new Boundary({
        position: {x: 0, y: -50},
        width: 1920,
        height: 0
    })
    const bottomWall = new Boundary({
        position: {x: 0, y: canvas.height + 50},
        width: 1920,
        height: 0
    })
    boundaries.push(leftWall);
    boundaries.push(rightWall);
    boundaries.push(topWall);
    boundaries.push(bottomWall);
}
const playerSpeedRandomizer = new Timer();
const keys = {
    w: {
        pressed: false
    },
    a: {
        pressed: false
    },
    s: {
        pressed: false
    },
    d: {
        pressed: false
    }

};
let previousTime = Date.now();
function Update(){
    window.requestAnimationFrame(Update);
    background.draw();
    updateDeaths();
    player.draw();
    goal.draw();
    boundaries.forEach(boundary => {
        if(boundary){
            boundary.draw();
            if(isColliding(player, boundary)){
                resetPlayerPos();
            }
        }
    })
    if(isColliding(player, goal)){
        console.log("tocjed");
        goal.goalTouched();
    }
    let currentTime = Date.now();
    let deltaTime = (currentTime - previousTime) / 1000;
    if(player.rotating){
        player.rotation += player.rotationSpeed * deltaTime;
    }
    else{
        player.rotation = 0 * Math.PI / 180;
    }
    previousTime = currentTime;
    if(keys.w.pressed){
        player.position.y -= playerSpeed;
    }
    if(keys.a.pressed){
        player.position.x -= playerSpeed;
    }
    if(keys.d.pressed){
        player.position.x += playerSpeed;
    }
    if(keys.s.pressed){
        player.position.y += playerSpeed;
    }
}
function resetPlayerPos(){
    player.position = {x: player.startPositon.x,
        y: player.startPositon.y};
    deaths++;
}
Update();
updateDeaths();
window.addEventListener('keydown', (ev) => {
//key down logic
switch(ev.key){
    case 'w':
        keys.w.pressed = true;
        break;
    case 'a':
        keys.a.pressed = true;
        break;
    case 's':
        keys.s.pressed = true;
        break;
    case 'd':
        keys.d.pressed = true;
        break;
    case 'r':
        resetPlayerPos();
        //add death
        break;
}
window.addEventListener('keyup', (ev) => {
    //key down logic
    switch(ev.key){
        case 'w':
            keys.w.pressed = false;
            break;
        case 'a':
            keys.a.pressed = false;
            break;
        case 's':
            keys.s.pressed = false;
            break;
        case 'd':
            keys.d.pressed = false;
            break;
    }

});




});

