import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveMonotoneX extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveMonotoneX);
    }
}

registerBrick('0183ed0e4fad6a5872c6', D3curveMonotoneX);
