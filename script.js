import Game from "./game.js";


/*
make xs and os show up
maybe do win calculations
*/
const canv = document.querySelector("canvas");
const ctx = canv.getContext("2d");

const WIDTH = window.innerWidth;
const HEIGHT = window.innerHeight;

canv.width = WIDTH;
canv.height = HEIGHT;

let game = new Game(WIDTH,HEIGHT);
function main() {
    ctx.fillStyle = "grey";
    ctx.fillRect(0,0,WIDTH,HEIGHT);
    game.update();

    game.draw(ctx);
}

setInterval(main,17);