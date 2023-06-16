import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveStep extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveStep);
    }
}

registerBrick('0183ed0e20597623482f', D3curveStep);
