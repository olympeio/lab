import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveLinear extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveLinear);
    }
}

registerBrick('0183ed0e6ed92e93dc9b', D3curveLinear);
