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
    }

    update() {
        if ((this.input.mouseX > this.x && this.input.mouseX < this.x + this.size) && (this.input.mouseY > this.y && this.input.mouseY < this.y + this.size)) {
            if (this.input.mouseDown) {
                this.clicked = true;
                this.color = "red";
                
            }
            else {
                this.color = "dimgray";
            }
        }
        else {
            if (!this.clicked) {
                this.color = "white";
            }
        }
    }

    draw(ctx) {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 5;
        ctx.fillStyle = this.color;
        if (!(this.color == "white")) {
            ctx.fillRect(this.x,this.y,this.size,this.size);
        }
        else {
            ctx.strokeRect(this.x,this.y,this.size,this.size);
        }
    }
}