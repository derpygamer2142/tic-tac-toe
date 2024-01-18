const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

const crypto = require("crypto")

app.get("/", (req, res) => {
  let id = crypto.randomUUID()
  res.redirect("/game/" + id)
})

app.use("/game", express.static(__dirname + "/public"))


app.get('/game/:id', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})

app.get('/send', (req, res) => {
  res.send('eeeeeeeeeeeeeeeeee')
})

io.on('connection', (socket) => {
  console.log('a user connected');

  socket.on("join room", async roomID => {
    socket.rooms.forEach(room => {
      socket.leave(room)
    })

    socket.join(roomID)
    const sockets = await io.in(roomID).fetchSockets();

    if (sockets.length > 1) {
      socket.broadcast.to(roomID).emit("start host")
      
    }

    if (sockets.length == 1) {
      socket.broadcast.to(roomID).emit("init x")
    }

  })


  socket.on("start guest", () => {
    let [roomID] = socket.rooms;
    socket.to(roomID).emit("start game", roomID)
  })


});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})