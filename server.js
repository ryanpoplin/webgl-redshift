'use strict';
const Hapi = require('hapi');
const fs = require('fs');
const pg = require('pg');
const server = new Hapi.Server();
server.register(require('inert'), () => {console.log('inert');});
server.connection({port: 8080});
server.route({
    method: 'GET',
    path: '/',
    handler: (request, reply) => {
        reply.file('./public/index.html');
    }
});
server.route({
    method: 'GET',
    path: '/css',
    handler: (request, reply) => {
        reply.file('./public/css/setup.css')
    }
});
server.route({
    method: 'GET',
    path: '/babylonjs',
    handler: (request, reply) => {
        reply.file('./public/bower_components/babylonjs/dist/babylon.2.5.js')
    }
});
server.route({
    method: 'GET',
    path: '/js',
    handler: (request, reply) => {
        reply.file('./public/js/app.js')
    }
});
server.route({
    method: 'GET',
    path: '/webgl/coordinates',
    handler: (request, reply) => {
        const pgString = 'postgres://:@webgl-data-viz.cp5omfcgotof.us-east-1.redshift.amazonaws.com:5439/data';
        const client = new pg.Client(pgString);
        client.connect((err) => {
            if (err) {
                console.log(err);
                throw err;
            } else {
                const cmd = 'select * from webgl_coordinates;';
                client.query(cmd, (err, data) => {
                    if (err) {
                        console.log(err);
                        throw err;
                    } else {
                        const coordinatesArr = JSON.stringify(data.rows);
                        console.log(coordinatesArr);
                        reply(coordinatesArr);                     
                    }
                });
            }
        });    
    }
});
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(server.info.uri);
});
