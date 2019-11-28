const forestImg = require("./Photos/Nature/forest.jpg");
const mountainsImg = require("./Photos/Nature/mountains.jpg");
const waterImg = require("./Photos/Nature/water.jpg");
const desertImg = require("./Photos/Nature/desert.jpg");

export enum natureTypes {
    forest = 'forest',
    mountains = 'mountains',
    water = 'water',
    desert = 'desert',
}

export const natureData = [
    {
        type: natureTypes.forest,
        img: forestImg,
        name: 'forest',
    },
    {
        type: natureTypes.mountains,
        img: mountainsImg,
        name: 'mountains',
    },
    {
        type: natureTypes.water,
        img: waterImg,
        name: 'water',
    },
    {
        type: natureTypes.desert,
        img: desertImg,
        name: 'desert',
    },
];
