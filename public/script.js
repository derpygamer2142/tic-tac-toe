import Game from "./game.js";


/*
we will use expressjs
socket.io for communication
*/
console.log("change worked")
const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;
let url = window.location.href
let urlArray = url.split("/")
let roomID = urlArray[4]
let shape = "o"

const socket = io()

socket.emit("join room", roomID)

socket.on("start host", () => {
    socket.emit("start guest")
})
socket.on("init x", () => {
    shape = "x"
})

socket.on("next turn", (shape) => {
    let s = game.squares[shape]
    s.clicked = true
    if (game.turn % 2 == 1) {
        s.color = "red"
        s.type = "o"
    }
    else {
        s.color = "blue"
        s.type = "x"
    }

    game.turn += 1
})

canv.width = WIDTH;
canv.height = HEIGHT;

let game = new Game(WIDTH,HEIGHT,shape);
game.socket = socket
function main() {
    game.shape = shape
    console.log(game.shape)
    if (game.gameState == 0) {
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0,WIDTH,HEIGHT);
        game.update();

        game.draw(ctx);
    }
}

setInterval(main,17);