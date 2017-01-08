'use strict';
const Hapi = require('hapi');
const Redshift = require('node-redshift');
// const Path = require('path');
const server = new Hapi.Server({
    /*connections: {
        routes: {
            files: {
                relativeTo: Path.join(__dirname, 'public')
            }
        }
    }*/
});
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
server.start((err) => {
    if (err) {
        throw err;
    }
    console.log(server.info.uri);
    /*const client = {
        user: '',
        database: '',
        password: '',
        port: '',
        host: ''
    };
    const redshift = new Redshift(client);
    redshift.query();*/
});
