import Square from "./squares.js";
import Input from "./input.js";
export default class Game {
    constructor(width, height) {
        this.width = width;
        this.height = height;


        this.winConditions = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [6,4,2]
        ]

        this.input = new Input();

        this.squares = [];
        for (let y = 0; y < 3; y++) {
            for (let x = 0; x < 3; x++) {
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

        this.turn = 0;

        this.gameState = 0;


    }

    update() {
        this.squares.forEach(s => {
            s.update();
        });
        let win = this.wincondition();
        if (win) {
            this.gameState = win;
            
        }
    }

    draw(ctx) {
        this.squares.forEach(s => {
            s.draw(ctx);
        });

        if (! (this.gameState == 0)) {
            ctx.fillStyle = "black"
            ctx.font = "bold 35px Comic Sans MS";
            ctx.textAlign = "center"
            if (this.gameState == "nobody") {
                ctx.fillText(`${this.gameState} wins!`,this.width/2,this.height/2)
            }
            else {
                ctx.fillText(`${this.gameState}s win!`,this.width/2,this.height/2)
            }
        }

    }

    wincondition() {
        let win = null
        this.winConditions.forEach(con => {
            let [a, b, c] = con;
            if ((this.squares[a].type != null) && (this.squares[a].type == this.squares[b].type) && (this.squares[b].type == this.squares[c].type)) {
                win = this.squares[a].type;

            }
        });
        let e = this.squares
        e = e.filter(s => (!s.type))
        if (e.length == 0 && !win) {
            win = "nobody";
        }
        return win;
    }



}