'use strict';

var BjsApp = BjsApp || {};
BjsApp.init = function (coordinatesArr) {
    var canvas = document.getElementById('render');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
    var camera = new BABYLON.FreeCamera('FreeCamera', new BABYLON.Vector3(0, 2, -15), scene);
    camera.attachControl(canvas);
    var light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), scene);
    // engine.runRenderLoop(function () { scene.render(); });
    // for (let i = 0; i <= coordinatesArr.length - parseInt(995); i++) {
        var sphere = BABYLON.Mesh.CreateSphere('sphere1', 16, 1, scene);
        for (let i = 0; i < 1000; i++) {
            var mesh = sphere.createInstance();
            mesh.position.y += i * 2;
        }
        sphere.position.x = coordinatesArr.x; // coordinatesArr[0].x;
        sphere.position.y = coordinatesArr.y; // coordinatesArr[0].y;
        sphere.position.z = coordinatesArr.z; // coordinatesArr[0].z;
        engine.runRenderLoop(function () {
            scene.render();
        });
    // }
};
