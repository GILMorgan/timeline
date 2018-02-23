import graphGraduation from './graphGraduation';

let _bounds = {};
let _size = {
    heightPerDay: 2,
    width: 20
};

export default class graphScale {
    constructor(canvas) {
        this.canvas = canvas;
    }

    _setBounds() {
        var arrBounds = {
            "min": [],
            "max": []
        };

        this.dateSets.forEach(function(dateset){
            var bounds = dateset.getBounds();

            arrBounds.min.push(bounds.min);
            arrBounds.max.push(bounds.max);
        });

        graphScale.bounds.min = Math.min(...arrBounds.min);
        graphScale.bounds.max = Math.max(...arrBounds.max);
    }

    static get size() {
        return _size;
    }

    static set size(value) {
        _size = value;
    }

    static getMargin() {
        return {
            up: 10,
            down: 10,
            left: 10,
            right: 10,
            columnGap: 10
        };
    }

    static get bounds() {
        return _bounds;
    }

    static set bounds(value) {
        _bounds = value;
    }

    _setHeight() {
        graphScale.size.height = (graphScale.bounds.max - graphScale.bounds.min) / (3600 * 24) * graphScale.size.heightPerDay;

        this.canvas.setAttribute("height", graphScale.size.height);
    }

    _setWidth() {
        graphScale.size.width = 150 + this.dateSets * 50;

        this.canvas.setAttribute("width", graphScale.size.width);
    }

    getDateSets(dateSets) {
        this.dateSets = dateSets;

        return this;
    }

    setGraduation() {
        this._setBounds();
        this._setHeight();
        this._setWidth();

        var min = graphScale.bounds.min;
        var day = 3600 * 24;

        while (min < graphScale.bounds.max) {
            var graduation = new graphGraduation(this.canvas, min);
            graduation.display();

            min += day;
        }
    }
}
