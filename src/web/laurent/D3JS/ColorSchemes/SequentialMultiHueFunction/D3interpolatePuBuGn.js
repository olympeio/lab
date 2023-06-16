import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolatePuBuGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolatePuBuGn)
    }
}

registerBrick('01867ee8286bc5f1088f', D3interpolatePuBuGn);
