import Game from "./game.js";


/*
we will use expressjs
socket.io for communication
*/
const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

const socket = io()

socket.on('message', arg1 => {
    console.log(arg1)
})

const container = document.getElementById("container")

canv.width = WIDTH;
canv.height = HEIGHT;

let game = new Game(WIDTH,HEIGHT);
function main() {
    if (game.gameState == 0) {
        ctx.fillStyle = "grey";
        ctx.fillRect(0,0,WIDTH,HEIGHT);
        game.update();

        game.draw(ctx);
    }
}

setInterval(main,17);