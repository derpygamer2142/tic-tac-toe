export default class Square {
    constructor(game,x,y) {
        this.game = game;
        this.input = game.input;

        this.size = game.width / 5;
        if (game.height < game.width) {
            this.size = game.height / 5;
        }

        this.x = x;
        this.y = y;

        this.clicked = false;
        this.color = "white";
        this.type = null;
    }

    update() {
        if ((this.input.mouseX > this.x && this.input.mouseX < this.x + this.size) && (this.input.mouseY > this.y && this.input.mouseY < this.y + this.size)) {
            
            if (this.input.mouseDown) {
                if (!this.clicked) {
                    if ((this.game.turn % 2) == 0) {
                        this.color = "red";
                        this.type = "o";
                    }
                    else {
                        this.color = "blue";
                        this.type = "x";
                    }
                    this.game.turn += 1;
                    this.clicked = true;
                }
            }
            else {
                if (!this.clicked) {
                    this.color = "dimgray"
                }
            }
        }
        else {
            if (!this.clicked) {this.color = "white"}
        }
    }

    draw(ctx) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        if (!(this.color == "white")) {
            ctx.fillRect(this.x,this.y,this.size,this.size);
            if (this.color == "red") {
                ctx.fillStyle = "black";
                ctx.beginPath();
            
                ctx.arc(this.x+(this.size/2), this.y+(this.size/2), (this.size/2)*0.9, 0, Math.PI * 2, false);
                ctx.stroke();
            }
            else if (this.color == "blue") {
                ctx.beginPath();
                ctx.moveTo(this.x,this.y+this.size);
                ctx.lineTo(this.x+this.size, this.y);
                ctx.stroke();

                ctx.beginPath();
                ctx.moveTo(this.x+this.size,this.y+this.size);
                ctx.lineTo(this.x, this.y);
                ctx.stroke();
            }
        }
        else {
            ctx.strokeRect(this.x,this.y,this.size,this.size);
        }
        ctx.fillText(this.game.squares.indexOf(this),this.x,this.y)
    }
}