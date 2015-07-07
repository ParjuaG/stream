// Importamos los paquetes requeridos
var express		= require('express'), 
	socket		= require('socket.io');

var port = 7000;

// Configuracion de la APP
var app = express();
var server = require('http').createServer(app);
var io = socketio.listen(server);

// Iniciamos el servidor
server.listen(port);
console.log("Servidor escuchando en el puerto: ", port);