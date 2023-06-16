import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class generateAxisOnSelection extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Axis} axis
     * @param {d3.Selection} selection
     * @param {function(*)} setSelection
     */
    update($, [axis, selection], [setSelection]) {
        // we have to use this trick, because as the selection object 
        //is not changing its reference when axis does change it doesn't trigger updates on the downflow
        //setting (temporarily) to null forces an update
        setSelection(null)

        axis(selection);
        setSelection(selection)
    }
}

registerBrick('0183dd4c40794aeec382', generateAxisOnSelection);
