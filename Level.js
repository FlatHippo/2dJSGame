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
level3Boundaries = [
    {
        "position": {
            "x": 362,
            "y": 162
        },
        "width": 166,
        "height": 760,
        "image": {}
    },
    {
        "position": {
            "x": 442,
            "y": 929
        },
        "width": 0,
        "height": 133,
        "image": {}
    },
    {
        "position": {
            "x": 690,
            "y": 18
        },
        "width": 154,
        "height": 906,
        "image": {}
    },
    {
        "position": {
            "x": 1045,
            "y": 130
        },
        "width": 215,
        "height": 932,
        "image": {}
    },
    {
        "position": {
            "x": 1418,
            "y": 141
        },
        "width": 468,
        "height": 252,
        "image": {}
    },
    {
        "position": {
            "x": 1267,
            "y": 526
        },
        "width": 435,
        "height": 285,
        "image": {}
    }
]
level4Boundaries = [
    {
        "position": {
            "x": 22,
            "y": 619
        },
        "width": 479,
        "height": 424,
        "image": {}
    },
    {
        "position": {
            "x": 36,
            "y": 33
        },
        "width": 460,
        "height": 392,
        "image": {}
    },
    {
        "position": {
            "x": 644,
            "y": 528
        },
        "width": 194,
        "height": 532,
        "image": {}
    },
    {
        "position": {
            "x": 644,
            "y": 26
        },
        "width": 194,
        "height": 358,
        "image": {}
    },
    {
        "position": {
            "x": 963,
            "y": 36
        },
        "width": 161,
        "height": 199,
        "image": {}
    },
    {
        "position": {
            "x": 963,
            "y": 365
        },
        "width": 161,
        "height": 607,
        "image": {}
    },
    {
        "position": {
            "x": 1043,
            "y": 256
        },
        "width": 0,
        "height": 118,
        "image": {}
    },
    {
        "position": {
            "x": 1265,
            "y": 36
        },
        "width": 193,
        "height": 937,
        "image": {}
    },
    {
        "position": {
            "x": 707,
            "y": 260
        },
        "width": 1,
        "height": 3,
        "image": {}
    },
    {
        "position": {
            "x": 1585,
            "y": 716
        },
        "width": 328,
        "height": 257,
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
levels.push(new Level({levelBoundaries: level3Boundaries}));
levels.push(new Level({levelBoundaries: level4Boundaries}));
initializeLevel(currentLevel);

