import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateBuPu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateBuPu)
    }
}

registerBrick('01867ee8286a6e9d0e8a', D3interpolateBuPu);
