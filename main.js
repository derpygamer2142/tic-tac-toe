const express = require('express')
const app = express()
const port = 3000
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.use("/", express.static(__dirname + "/public"))


app.get('/game', (req, res) => {
  res.sendFile(__dirname + "/public/index.html")
})
app.get('/send', (req, res) => {
  res.send('eeeeeeeeeeeeeeeeee')
})

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.emit('message', `hi ${socket.id}`)
});

server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})