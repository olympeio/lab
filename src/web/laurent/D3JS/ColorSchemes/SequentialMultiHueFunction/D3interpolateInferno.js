import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateInferno extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateInferno)
    }
}

registerBrick('01867ee8286bd5cb8ce3', D3interpolateInferno);
