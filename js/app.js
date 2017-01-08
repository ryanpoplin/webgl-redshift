'use strict';

var BjsApp = BjsApp || {};
BjsApp.init = function () {
    var canvas = document.getElementById('render');
    var engine = new BABYLON.Engine(canvas, true);
    var scene = new BABYLON.Scene(engine);
};
