import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlOrBr extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateYlOrBr)
    }
}

registerBrick('01867ee8286b979748a3', D3interpolateYlOrBr);
