export default class graphDate {
    constructor(rawDateRange) {
        this.rawDateRange = rawDateRange;
    }

    _convert(date, first) {
        var _date = new Date();

        if (typeof(_date) === "undefined") {
            return _date.getTime() / 1000;
        }

        var day = date.match(/\d{1,2}\/\d{1,2}\/\d{4}/);
        if(day) {
            _date.setDate(month[1]);
            _date.setMonth(month[2]-1);
            _date.setYear(month[3]);

            return _date.getTime() / 1000;
        }

        var month = date.match(/(\d{1,2})\/(\d{4})/);

        if (month) {
            _date.setDate(1);
            _date.setMonth(month[1]-1);

            if (!first) {
                _date.setMonth(month[1]);
                _date.setDate(0);
            }

            _date.setYear(month[2]);

            return _date.getTime() / 1000;
        }
    }



    _splitRange() {
        this.startRange = this.rawDateRange.split('-')[0];
        this.endRange = this.rawDateRange.split('-')[1]
    }

    convert() {
        this._splitRange();

        return [
            this._convert(this.startRange, true),
            this._convert(this.endRange, false)
        ];
    }
}
