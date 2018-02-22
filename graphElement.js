/**
 * Base class of any element of the graph
 * Adding some dry to the current classes
 */
export default class graphElement {
    constructor(domElement) {
        this.ctx = domElement.getContext("2d");
        this.ctx.strokeStyle = "rgb(191, 191, 191)";
        this.ctx.fillStyle = "rgb(191, 191, 191)";
        this.ctx.font = "12px serif";
    }

    setFillStyle(style) {
        this.ctx.fillStyle = style;
    }

    setStrokeStyle(style) {
        this.ctx.strokeStyle = style;
    }

    setFont(font) {
        this.ctx.font = font;
    }
}
