import graphBar from './graphBar';
import graphDate from './graphDate';

/**
 * A range of date
 */
export default class GraphDataSet {
    constructor(dateset, label) {
        this.dateset = dateset;
        this.label = label;
        this.position = 0;
    }

    addGraphBars(canvas) {
        var position = this.position;
        this.dateset.forEach(function(date) {
            var myGraphBar = new graphBar(canvas, position);

            myGraphBar
                .setDate(date)
                .display();
        });
    }

    getBounds() {
        var _this = this;
        var dates = [];

        this.dateset.forEach(
            function(date) {
                var myDate = new graphDate(date.date);
                dates = dates.concat(myDate.toMonth())
            }
        )

        return {
            "min": Math.min(...dates),
            "max": Math.max(...dates)
        }
    }

    setPosition(position) {
        this.position = position;
    }
}
