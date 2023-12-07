import Square from "./squares.js";
import Input from "./input.js";
export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;


        this.input = new Input();

        this.squares = [];
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                let square = new Square(this,x,y)
                square.x *= square.size;
                square.y *= square.size;
                square.x += width/2;
                square.y += height/2;
                square.x -= square.size*1.5;
                square.y -= square.size*1.5;

                this.squares.push(square);
            }
        }


    }

    update() {
        this.squares.forEach(s => {
            s.update();
        });
    }

    draw(ctx) {
        this.squares.forEach(s => {
            s.draw(ctx);
        });

    }

}