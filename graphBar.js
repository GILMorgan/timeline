import graphElement from './graphElement';
import graphDate from './graphDate';
import graphGraduation from './graphGraduation';

export default class graphBar extends graphElement {
    constructor(canvas, position) {
        super(canvas);
        this.setStrokeStyle("rgb(0, 0, 0)");
        this.position = 150 - position * 30;
    }

    _setLength() {
        this.length = Math.max(this.end - this.start -1, 0.5) * graphGraduation.getHeight() * -1;
        
        if (!this.length) {
            throw "something messy with length";
        }
    }

    _setTop() {
        this.top = (graphGraduation.endLine - this.start +1) * graphGraduation.getHeight();

        if (isNaN(this.top)) {
            throw "something messy with top";
        }
    }

    setDate(date) {
        var myGraphDate = new graphDate(date.date);
        var convertedDate = myGraphDate.toMonth();

        this.start = convertedDate[0];
        this.end = convertedDate[1];
        this._setLength();
        this._setTop();

        return this;
    }

    display() {
        this.ctx.fillRect(
            this.position,
            this.top,
            20,
            this.length
        );

        this.ctx.strokeRect(
            this.position,
            this.top,
            20,
            this.length
        );
    }
}
