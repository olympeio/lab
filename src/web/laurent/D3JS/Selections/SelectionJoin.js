import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class SelectionJoin extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Selection} selection
     * @param {string} selector
     * @param {function(d3.Selection)} setSelection
     */
    update($, [selection, selector], [setSelection]) {
        setSelection(selection.join(selector));
    }
}

registerBrick('0183dd6f80dc6da8e7af', SelectionJoin);
