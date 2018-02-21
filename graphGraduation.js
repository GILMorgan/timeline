import graphElement from './graphElement';

export default class graphGraduation extends graphElement {
    static getHeight() {
        return 15;
    }

    static getMargin() {
        return 20;
    }

    static setEndLine(endLine) {
        graphGraduation.endLine = endLine;
    }

    constructor(canvas, position) {
        super(canvas);

        this.length = 50;
        this.text = "";

        if (!(position % 12)) {
            this.length = 250;
            this.text = position / 12;
        }

        this.position = (graphGraduation.endLine - position) * graphGraduation.getHeight();
    }

    display() {
        this.ctx.beginPath();
        this.ctx.moveTo(280, this.position);
        this.ctx.lineTo(280 - this.length, this.position);
        this.ctx.strokeText(this.text, 290, this.position);
        this.ctx.stroke();
    }
}
