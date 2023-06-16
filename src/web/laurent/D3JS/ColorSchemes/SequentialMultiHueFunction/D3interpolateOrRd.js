import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateOrRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateOrRd)
    }
}

registerBrick('01867ee8286b894610c5', D3interpolateOrRd);
