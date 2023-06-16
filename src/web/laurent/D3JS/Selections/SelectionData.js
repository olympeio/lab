import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class SelectionData extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {Array} data
     * @param {function(*)} setSelection
     */
    update($, [selection, data], [setSelection]) {
        setSelection(selection.data(data));
    }
}

registerBrick('0183dd6e37f210d7f078', SelectionData);
