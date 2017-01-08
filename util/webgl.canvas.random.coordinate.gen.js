'use strict';

function webglCanvasRandomCoordinatesGen (numberOfCoordinates, min, max, randomNumberRange) {
    const coordinatesArr = [];
    for (let i = 0; i <= numberOfCoordinates; i++) {
        coordinatesArr.push({
            x: randomNumberRange(min, max),
            y: randomNumberRange(min, max),
            z: randomNumberRange(min, max)
        });
    }
    console.log(JSON.stringify(coordinatesArr).replace(/\},/g, '}').replace(/\[/g, '').replace(/\]/g, ''));
}
webglCanvasRandomCoordinatesGen(100, 1, 10, function randomNumberRange (min, max) { return Math.random() * (max - min) + min; });
