const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');

canvas.width = 1024;
canvas.height = 576;

context.fillStyle = 'white';
context.fillRect(0, 0, canvas.width, canvas.height);

const backgroundImg = new Image();
backgroundImg.src = './images/background.jpg';

class Sprite{
    constructor({position, image}){
        this.position = position;
        this.image = image;

    }

    draw(){
        context.drawImage(
            this.image, 
            //crop
            0,
            0,
            this.image.width * 2.5,
            this.image.height * 2.5,
            //pos
            0,
            0,
            canvas.width * 2.5,
            canvas.height * 2.5
            );
    }

}

const background = new Sprite(
    {position: {x: 0, y: 0},
     image: backgroundImg,
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

function animate(){
    window.requestAnimationFrame(animate);
    background.draw();
    if(keys.w.pressed){
        
    }
}

animate();
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

