level1Boundaries = [
    {
        "position": {
            "x": 413,
            "y": 200
        },
        "width": 885,
        "height": 604,
        "image": {}
    },
    {
        "position": {
            "x": 876,
            "y": 8
        },
        "width": 0,
        "height": 200,
        "image": {}
    }
]
level2Boundaries = [
    {
        "position": {
            "x": 21,
            "y": 24
        },
        "width": 1888,
        "height": 356,
        "image": {}
    },
    {
        "position": {
            "x": 38,
            "y": 681
        },
        "width": 1864,
        "height": 383,
        "image": {}
    },
    {
        "position": {
            "x": 1190,
            "y": 417
        },
        "width": 538,
        "height": 88,
        "image": {}
    },
    {
        "position": {
            "x": 462,
            "y": 556
        },
        "width": 504,
        "height": 78,
        "image": {}
    }
]

let levels = [];
class Level{
    constructor({levelBoundaries}){
        this.levelBoundaries = levelBoundaries
    }
    loadLevel(){
        InstantiateWallBoundaries();
        for(let i = 0; i < this.levelBoundaries.length; i++){
            boundaries.push(new Boundary(
                {
                    position: {x: this.levelBoundaries[i].position.x, y: this.levelBoundaries[i].position.y},
                    width: this.levelBoundaries[i].width,
                    height: this.levelBoundaries[i].height
                }));
        }
        console.log()
    }
}
levels.push(new Level({levelBoundaries: level1Boundaries}));
levels.push(new Level({levelBoundaries: level2Boundaries}));
initializeLevel(currentLevel);

