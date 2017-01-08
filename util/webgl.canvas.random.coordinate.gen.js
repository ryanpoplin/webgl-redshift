'use strict';

const fs = require('fs');
function webglCanvasRandomCoordinatesGen (numberOfCoordinates, min, max, randomNumberRange) {
    const coordinatesArr = [];
    for (let i = 0; i <= numberOfCoordinates; i++) {
        coordinatesArr.push({
            x: randomNumberRange(min, max),
            y: randomNumberRange(min, max),
            z: randomNumberRange(min, max)
        });
    }
    const coordinates = JSON.stringify(coordinatesArr).replace(/\},/g, '}').replace(/\[/g, '').replace(/\]/g, '');
    fs.writeFile('webgl.random.coordinates.redshift.json', coordinates, 'utf8', () => { console.log('The data was uploaded'); });
}
webglCanvasRandomCoordinatesGen(1000, 1, 10, function randomNumberRange (min, max) { return Math.random() * (max - min) + min; });
