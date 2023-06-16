import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateGnBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateGnBu)
    }
}

registerBrick('01867ee8286babacfb0e', D3interpolateGnBu);
