import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateRdPu extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateRdPu)
    }
}

registerBrick('01867ee8286b4b66e8c5', D3interpolateRdPu);
