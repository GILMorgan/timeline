import graphScale from './graphScale'

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

    getRealHeight(time) {
        var height = (time - graphScale.bounds.min) / (3600 * 24) * graphScale.size.heightPerDay;

        return height;
    }

    getBounds() {
        return graphScale.bounds;
    }
}
