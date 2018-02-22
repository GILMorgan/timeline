import graphDateSet from './graphDateSet';
import graphGraduation from './graphGraduation';

export default class timeLine {
    constructor() {
        this.dateSets = [];
        this.canvas = document.createElement('canvas');
        this.bounds = {
            min: null,
            max: null
        };
    }

    _getBounds() {
        var arrBounds = {
            "min": [],
            "max": []
        };

        this.dateSets.forEach(function(dateset) {
            var bounds = dateset.getBounds();
            arrBounds.min.push(bounds.min);
            arrBounds.max.push(bounds.max);
        });

        this.bounds.min = Math.min(...arrBounds.min);
        this.bounds.max = Math.min(...arrBounds.max);
    }

    _setCanvasSize() {
        this.canvas.setAttribute("width", "800px");
        this.canvas.setAttribute(
            "height",
            (this.bounds.max - this.bounds.min) * graphGraduation.getHeight() + graphGraduation.getMargin()
        );
    }

    _setGraduation() {
        var min = this.bounds.min - 1;
        graphGraduation.setEndLine(this.bounds.max);

        while (min < this.bounds.max) {
            var graduation = new graphGraduation(this.canvas, min);
            graduation.display();

            min++;
        }
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
        this._getBounds();
        this._setCanvasSize();
        this._setGraduation();

        var _this = this;

        this.dateSets.forEach(function(dateSet) {
            dateSet.addGraphBars(_this.canvas, _this.bounds);
        });

        return this.canvas;
    }
}
