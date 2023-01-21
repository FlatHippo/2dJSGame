levels.push(new Level({levelBoundaries: level1Boundaries}));
let level1Boundaries = [
    {
        "position": {
            "x": 1274,
            "y": 146
        },
        "width": 250,
        "height": 410
    },
    {
        "position": {
            "x": 12,
            "y": 20
        },
        "width": 1638,
        "height": 170
    },
    {
        "position": {
            "x": 45,
            "y": 556
        },
        "width": 1501,
        "height": 182
    },
    {
        "position": {
            "x": 36,
            "y": 745
        },
        "width": 1625,
        "height": 231
    },
    {
        "position": {
            "x": 1578,
            "y": 177
        },
        "width": 108,
        "height": 536
    },
    {
        "position": {
            "x": 974,
            "y": 277
        },
        "width": 78,
        "height": 33
    },
    {
        "position": {
            "x": 849,
            "y": 301
        },
        "width": 55,
        "height": 59
    },
    {
        "position": {
            "x": 914,
            "y": 473
        },
        "width": 91,
        "height": 21
    },
    {
        "position": {
            "x": 678,
            "y": 404
        },
        "width": 63,
        "height": 14
    },
    {
        "position": {
            "x": 588,
            "y": 252
        },
        "width": 81,
        "height": 17
    }
];
class Level{
    constructor({levelBoundaries}){
        this.levelBoundaries = levelBoundaries
    }
    loadLevel(){
        console.log("working");
    }
}
