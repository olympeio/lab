import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuBu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolatePuBu)
    }
}

registerBrick('01867ee8286b6f538876', D3interpolatePuBu);
