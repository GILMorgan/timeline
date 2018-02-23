import graphDate from './graphDate';

export default class graphDateSet {
    constructor(dateset, label) {
        this.dateset = dateset;
        this.label = label;
        this.position = 0;
    }

    getBounds() {
        var dates = [];

        this.dateset.forEach(
            function(date) {
                var myDate = new graphDate(date.date);
                dates = dates.concat(myDate.convert())
            }
        )

        return {
            "min": Math.min(...dates),
            "max": Math.max(...dates)
        }
    }
        
    setPosition(position) {
        this.position = position;

        return this;
    }
}
