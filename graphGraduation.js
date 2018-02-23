import graphElement from './graphElement'

export default class graphGraduation extends graphElement {
    constructor(canvas, time) {
        super(canvas);
        this.time = time;
    }

    formatLabel(date) {
        if (typeof(this.format) === 'undefined') {
            var firstDate = new Date(this.getBounds().min * 1000);
            var lastDate = new Date(this.getBounds().max * 1000);

            if (!(lastDate.getFullYear() - firstDate.getFullYear())) {
                this.format = "year";
            }

            this.format = "month";
        };

        if (this.format === "year") {
            return date.getFullYear();
        }

        var month = date.getMonth() + 1;
        if (month < 10) {
            month = "0" + month;
        }

        return month + "/" + date.getFullYear();
    }

    display() {
        var date = new Date(this.time * 1000);

        if (date.getDate() !== 1) {
            return;
        }

        var realHeight = this.getRealHeight(this.time);

        this.ctx.beginPath();
        this.ctx.moveTo(10, realHeight);
        this.ctx.lineTo(150, realHeight);
        this.ctx.stroke();

        this.ctx.strokeText(this.formatLabel(date), 170, realHeight);
    }
}
