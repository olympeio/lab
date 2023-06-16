import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlOrRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateYlOrRd)
    }
}

registerBrick('01867ee8286ba38c8944', D3interpolateYlOrRd);
