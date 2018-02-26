import graphDateSet from './graphDateSet';
import graphScale from './graphScale';
import graphBar from './graphBar';
import graphLabel from './graphLabel';

export default class timeLine {
    constructor() {
        this.dateSets = [];
        this.canvas = document.createElement('canvas');
        this.scale = new graphScale(this.canvas);
    }

    addDateSet(dateset, label) {
        if (typeof(dateset) === 'undefined') {
            return this;
        }

        var newDateSet = new graphDateSet(dateset, label);
        newDateSet.setPosition(this.dateSets.length + 1);
        this.dateSets.push(newDateSet);

        return this;
    }

    render() {
        var _this = this;
        this.scale
            .getDateSets(this.dateSets)
            .setGraduation();

        this.dateSets.forEach(function(dateSet) {
            dateSet.dateset.forEach(function(event) {
                var bar = new graphBar(_this.canvas, event, dateSet.position);
                var label = new graphLabel(_this.canvas, event, dateSet.position);

                bar.display();
                label.display();
            });
        });

        return this.canvas;
    }
}
