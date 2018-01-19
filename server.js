var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
    var username = "";
  socket.on('chat message', function(msg){
    io.emit('chat message', username + ":" +msg);
  });
    function newMessage( msg ) {
        console.log( username + " --> " + msg );
    }

    function getName() {
        return username;
    }

    function setName( name ) {
        username = name;
    }
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});