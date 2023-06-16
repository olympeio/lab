import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveMonotoneY extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveMonotoneY);
    }
}

registerBrick('0183ed0e3f6ee61c88e6', D3curveMonotoneY);
