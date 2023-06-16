import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3interpolateWarm extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(*)} setFunction
     */
    update($, inputs, [setFunction]) {
        setFunction(d3.interpolateWarm)
    }
}

registerBrick('01867ee8286bf3b81263', D3interpolateWarm);
