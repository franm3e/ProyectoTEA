var express = require('express');
const url = require("url");

var server = express();


server.get('/', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/login.html');
  //res.end();
});

server.get('/login.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/login.html');
  //res.end();
});

server.get('/monitorP.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/monitorP.html');
  //res.end();
});

server.get('/panelControlF.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/panelControlF.html');
  //res.end();
});

server.get('/panelControlP.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/panelControlP.html');
  //res.end();
});

server.get('/historialF.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/historialF.html');
  //res.end();
});

server.get('/usuariosP.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/usuariosP.html');
  //res.end();
});

server.get('/formularioUsuarioTEA.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/formularioUsuarioTEA.html');
  //res.end();
});

server.get('/pictogramasF.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/pictogramasF.html');
  //res.end();
});

server.get('/radarP.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/radarP.html');
  //res.end();
});

server.get('/registrarCrisisF.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/registrarCrisisF.html');
  //res.end();
});

server.get('/registrarCrisisP.html', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.sendFile(__dirname+'/registrarCrisisP.html');
  //res.end();
});

server.get('/js/graficos.js', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(__dirname+'/js/graficos.js');
  //res.end();
});

server.get('/js/monitorP.js', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(__dirname+'/js/monitorP.js');
  //res.end();
});

server.get('/js/login.js', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(__dirname+'/js/login.js');
  //res.end();
});

server.get('/js/historialF.js', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/javascript');
  res.sendFile(__dirname+'/js/historialF.js');
  //res.end();
});

server.get('/css/panelControlP/panelControlP.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/panelControlP/panelControlP.css');
  //res.end();
});

server.get('/css/panelControlP/graficos.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/panelControlP/graficos.css');
  //res.end();
});

server.get('/css/panelControlP/informacion.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/panelControlP/informacion.css');
  //res.end();
});

server.get('/css/panelControlP/medidores.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/panelControlP/medidores.css');
  //res.end();
});

server.get('/css/formularioUsuarioTEA.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/formularioUsuarioTEA.css');
  //res.end();
});

server.get('/css/style.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/style.css');
  //res.end();
});

server.get('/css/pictogramas.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/pictogramas.css');
  //res.end();
});

server.get('/css/historialF.css', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/css');
  res.sendFile(__dirname+'/css/historialF.css');
  //res.end();
});

server.get('/images/distancia.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/distancia.png');
  //res.end();
});

server.get('/images/logo_big.jpg', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpg');
  res.sendFile(__dirname+'/images/logo_big.jpg');
  //res.end();
});

server.get('/images/logo.jpg', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/jpg');
  res.sendFile(__dirname+'/images/logo.jpg');
  //res.end();
});

server.get('/images/logo_calorias.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/logo_calorias.png');
  //res.end();
});

server.get('/images/logo_pasos.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/logo_pasos.png');
  //res.end();
});

server.get('/images/cambiarse.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/cambiarse.png');
  //res.end();
});

server.get('/images/casas.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/casas.png');
  //res.end();
});

server.get('/images/cenas.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/cenas.png');
  //res.end();
});

server.get('/images/desayuno.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/desayuno.png');
  //res.end();
});

server.get('/images/dormir.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/dormir.png');
  //res.end();
});

server.get('/images/duchar.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/duchar.png');
  //res.end();
});

server.get('/images/hacer_la_cama.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/hacer_la_cama.png');
  //res.end();
});

server.get('/images/jugar.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/jugar.png');
  //res.end();
});

server.get('/images/lavar_los_dientes.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/lavar_los_dientes.png');
  //res.end();
});

server.get('/images/merienda.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/merienda.png');
  //res.end();
});

server.get('/images/pelicula.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/pelicula.png');
  //res.end();
});

server.get('/images/zoologico.png', function(req, res){
  res.statusCode = 200;
  res.setHeader('Content-Type', 'image/png');
  res.sendFile(__dirname+'/images/zoologico.png');
  //res.end();
});

server.listen(3000);

console.log('El servidor se está ejecutando en http://127.0.0.1:3000/');
//------------Fin Bloque Main------------
