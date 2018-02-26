import graphElement from './graphElement'
import graphDate from './graphDate';

export default class graphLabel extends graphElement {
    constructor(canvas, event, position) {
        super(canvas);
        this.event = event;
        this.date = new graphDate(this.event.date);
        this.position = position;

        this.setStrokeStyle("rgb(0, 0, 0)");
    }

    _getMiddle() {
        var convertDate = this.date.convert();
        this.middle = (convertDate[1] - convertDate[0]) / 2 + convertDate[0];
    }

    display() {
        this._getMiddle();

        var realHeight = this.getRealHeight(this.middle);

        this.ctx.beginPath();
        this.ctx.moveTo(this.getRealPosition(this.position) + 10, realHeight);
        this.ctx.lineTo(270, realHeight);
        this.ctx.stroke();

        //this.event.lieu;
        //this.event.entreprise;
    }
}
