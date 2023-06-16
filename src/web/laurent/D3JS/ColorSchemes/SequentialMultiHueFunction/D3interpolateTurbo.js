import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateTurbo extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateTurbo)
    }
}

registerBrick('01867ee8286b6ee71b44', D3interpolateTurbo);
