import graphElement from './graphElement'
import graphDate from './graphDate';
import placeholder from './icons/placeholder.png';
import entreprise from './icons/entreprise.png';

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

    _getIcon(image, height) {
        var icon = new Image()
        var _this = this;

        icon.onload = function() {
            _this.ctx.drawImage(this, 270, height - 24, 24, 24);
        }

        icon.src = image;
    }



    display() {
        this._getMiddle();

        var realHeight = this.getRealHeight(this.middle);

        this.ctx.beginPath();
        this.ctx.moveTo(this.getRealPosition(this.position) + 10, realHeight);
        this.ctx.lineTo(270, realHeight);
        this.ctx.stroke();

        this._getIcon(placeholder, realHeight);
        this._getIcon(entreprise, realHeight - 30);

        this.ctx.strokeText(this.event.lieu, 300, realHeight -7);
        this.ctx.strokeText(this.event.entreprise, 300, realHeight - 38);
    }
}
