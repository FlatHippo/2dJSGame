const goalImg = new Image();
goalImg.src = './images/goal.png';
let goalPositions = [[0,[1552,430]], [1,[1770,430]]];
let currentLevel = 0;
class Goal{
    constructor({position, width, height}){
        this.position = position;
        this.width = width;
        this.height = height;
        this.image = goalImg;
    }
    goalTouched(){
        currentLevel++;
        initializeLevel(currentLevel);
    }
    updateGoal(){
        this.position = {x: goalPositions[currentLevel][1][0], y: goalPositions[currentLevel][1][1]};
    }
    draw(){
        context.drawImage(this.image, this.position.x, this.position.y, this.image.width, this.image.height);
    }
}
let goal = new Goal(
    {position: {x: goalPositions[currentLevel][1][0], y: goalPositions[currentLevel][1][1]},
     width: 110,
     height: 115
    });
    console.log(goal);

