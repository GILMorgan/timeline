import graphElement from './graphElement'
import graphDate from './graphDate';

export default class graphBar extends graphElement {
    constructor(canvas, event, position) {
        super(canvas);
        this.event = event;
        this.date = new graphDate(this.event.date);
        this.position = position;

        this.setStrokeStyle("rgb(0, 0, 0)");
    }

    _setPosition() {
        this.startPosition = this.getRealHeight(this.date.convert()[0]);
        this.endPosition = this.getRealHeight(this.date.convert()[1]);
    }

    _setLength() {
        this.length = this.endPosition - this.startPosition;
    }

    display() {
        this._setPosition();
        this._setLength();

        this.ctx.fillRect(
            this.getRealPosition(this.position),
            this.startPosition,
            20,
            this.length
        );

        this.ctx.strokeRect(
            this.getRealPosition(this.position),
            this.startPosition,
            20,
            this.length
        );
    }
}
