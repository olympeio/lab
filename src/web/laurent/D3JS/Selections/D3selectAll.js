import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3selectAll extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {string} selector
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, selector], [setSelection]) {
        setSelection(selection.selectAll(selector));
    }
}

registerBrick('0183dd6b9b25c07626cc', D3selectAll);
