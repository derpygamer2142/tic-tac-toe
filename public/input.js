export default class Input {
    constructor() {
        this.mouseX = 0;
        this.mouseY = 0;
        this.mouseDown = false;

        document.addEventListener("mousemove",e => {
            this.mouseX = e.offsetX;
            this.mouseY = e.offsetY;
        })
        document.addEventListener("mousedown",e=> {
            this.mouseDown = true;
        })

        document.addEventListener("mouseup",e=> {
            this.mouseDown = false;
        })
    }
}