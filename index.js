const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1920;
canvas.height = 1080;

//#region images
const backgroundImg = new Image();
backgroundImg.src = './images/background.jpg';

const playerImg = new Image();
playerImg.src = './images/player.png';
//#endregion


class Sprite{
    constructor({position, image, scale}){
        this.position = position;
        this.image = image;
        this.scale = scale;
    }

    draw(){
        if(this.scale != null){
            context.drawImage(this.image, this.position.x, this.position.y, this.image.width * this.scale.x, this.image.height * this.scale.y);
        }
        else{
            context.drawImage(this.image, this.position.x, this.position.y);
        }
    }

};

const background = new Sprite(
    {position: {x: 0, y: 0},
     image: backgroundImg,
     scale: {x: 1, y: 1}
    });
const player = new Sprite(
    {
        position: {x: 200, y: 350},
        image: playerImg,
        scale: {x: 1, y: 1}
    });

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
function Update(){
    let playerSpeed = 3;
    window.requestAnimationFrame(Update);
    background.draw();
    player.draw();
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

Update();
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

