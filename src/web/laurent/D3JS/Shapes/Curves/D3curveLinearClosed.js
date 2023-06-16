import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveLinearClosed extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveLinearClosed);
    }
}

registerBrick('0183ed0e5e3749f6f3f3', D3curveLinearClosed);
