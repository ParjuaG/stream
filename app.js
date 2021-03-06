var express     = require('express')
var socketio    = require('socket.io')
var port        = 7000
var app         = express()
var server = require('http').createServer(app)
var io = socketio.listen(server)
app.set('views', require('path').join(__dirname, 'views'))
app.set('view engine', 'jade')
app.use('/static', express.static(require('path').join(__dirname, 'static')))
app.get("/", function(req, res){
    res.render("index")
})
app.get("/:channel", function(req,res){
	res.render('index', {channel: req.params.channel})
})
io.sockets.on("connection", function(socket){
    socket.on("mensaje", function(message){
        console.log("Mensaje recibido: ", message)
        io.to(message.channel).emit("mensaje", message)
    })
    socket.on("join", function(user){
        socket.join(user.channel)
    })
})
server.listen(port)
console.log("Server Listening in ", port)