/*
My First Sucess Expiriment
*/ 

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

 app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header("Access-Control-Allow-Headers", "Content-Type");
        res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        next();
    });


app.get('/', function(req, res){
res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('sendImage', function(msg){
    //console.log('message: ' + msg);
     io.emit('sendImage', msg);
  });
 socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});