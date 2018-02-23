import graphElement from './graphElement'

export default class graphBar extends graphElement {
    constructor(canvas, time) {
        super(canvas);
        this.time = time;
    }
}
