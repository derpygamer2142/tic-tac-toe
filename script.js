import Game from "./game.js";


/*
we will use expressjs
socket.io for communication
*/
const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

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