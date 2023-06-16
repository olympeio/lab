import { Brick, registerBrick } from 'olympe';

export default class SelectAllData extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {*} selection
     * @param {*} data
     * @param {string} selector
     * @param {function(*)} setSelection
     */
    update($, [selection, data, selector], [setSelection]) {
        setSelection(selection.selectAll(selector).data(data));
    }
}

registerBrick('018678d07874082368d8', SelectAllData);
