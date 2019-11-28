const romanticImg = require("./Photos/RestTypes/romantic.jpg");
const nightLifeImg = require("./Photos/RestTypes/nightlife.jpg");
const extremeImg = require("./Photos/RestTypes/extreme.jpg");
const historicImg = require("./Photos/RestTypes/historic.jpg");
const exoticImg = require("./Photos/RestTypes/exotic.jpg");
const resortImg = require("./Photos/RestTypes/resort.jpg");

export enum restTypes {
    romantic = 'romantic',
    nightLife = 'nightLife',
    extreme = 'extreme',
    historic = 'historic',
    exotic = 'exotic',
    resort = 'resort',
}

export const restTypesData = [
    {
        type: restTypes.romantic,
        img: romanticImg,
        name: 'romantic',
    },
    {
        type: restTypes.nightLife,
        img: nightLifeImg,
        name: 'night life',
    },
    {
        type: restTypes.extreme,
        img: extremeImg,
        name: 'extreme',
    },
    {
        type: restTypes.historic,
        img: historicImg,
        name: 'historic',
    },
    {
        type: restTypes.exotic,
        img: exoticImg,
        name: 'exotic',
    },
    {
        type: restTypes.resort,
        img: resortImg,
        name: 'resort',
    },
];
