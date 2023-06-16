import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlGnBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateYlGnBu)
    }
}

registerBrick('01867ee8286b578dac5a', D3interpolateYlGnBu);
