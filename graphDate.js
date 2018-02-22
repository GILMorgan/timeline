/**
 * Date range manipulation class
 */
export default class GraphDate {
    constructor(date) {
        this._now = new Date();
        this._date = date;
    }

    /**
     * convert a date in dd/mm format into a the number of month since 01/00
     *
     * @param {string} date
     *
     * @return {int}
     */
    _convertToMonth(date) {
        var splitedDate = date.split('/');

        return parseInt(splitedDate[0]) + (splitedDate[1] * 12);
    }

    /**
     * Split a date with the given callback
     *
     * @param {callback} transformMethod
     *
     * @return {hash}
     */
    _splitDate(transformMethod) {
        var dateToParse = this._date.split(' - ');

        if ((typeof(dateToParse[1]) === 'undefined') ||  (dateToParse[1] == '')) {
            dateToParse[1] = (this._now.getMonth() + 2.5) + "/" + this._now.getFullYear();
        }

        return {
            min: transformMethod(dateToParse[0]),
            max: transformMethod(dateToParse[1])
        }
    }

    /**
     * Return an array of month
     *
     * @return {array}
     */
    toMonth() {
        var dateInMonth = this._splitDate(this._convertToMonth);

        return [
            dateInMonth.min,
            dateInMonth.max
        ];
    }
}
