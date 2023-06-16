import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuRd extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolatePuRd)
    }
}

registerBrick('01867ee8286b89083421', D3interpolatePuRd);
