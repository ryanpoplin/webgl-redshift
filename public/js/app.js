'use strict';

var BjsApp = BjsApp || {};
BjsApp.init = function (coordinatesArr) {
    var canvas = document.getElementById('render');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
    camera.attachControl(canvas);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    engine.runRenderLoop(function () { scene.render(); });
    for (let i = 0; i <= coordinatesArr.length - parseInt(995); i++) {
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 1, scene);
        sphere.position.x = coordinatesArr[i].x;
        sphere.position.y = coordinatesArr[i].y;
        sphere.position.z = coordinatesArr[i].z;
        engine.runRenderLoop(function () {
            scene.render();
        });
    }
};
