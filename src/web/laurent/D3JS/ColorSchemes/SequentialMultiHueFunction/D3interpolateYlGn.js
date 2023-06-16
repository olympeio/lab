import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateYlGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateYlGn)
    }
}

registerBrick('01867ee8286b8c5e8cec', D3interpolateYlGn);
