var WebSocket = require("ws").Server;
// Note that the Server method is necessary when requiring ws for the purpose of creating a server.
var chatServ = new WebSocket({port:3000});
var users = [];


    chatServ.on("connection" , function(ws){
      console.log("connection");
      users.push(ws);

      ws.on("message" , function(msg){
        console.log(msg);
        users.forEach(function(usr){usr.send(msg)});
      })

      ws.on("close" , function(){
        var client = users.indexOf(ws);
        users.splice(client,1);
        console.log("a client has disconnected");
      })

    })
