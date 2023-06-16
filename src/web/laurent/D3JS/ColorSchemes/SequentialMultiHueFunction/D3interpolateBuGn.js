import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateBuGn extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateBuGn)
    }
}

registerBrick('01867ee8286b4249cf1e', D3interpolateBuGn);
