import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveStepAfter extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveStepAfter);
    }
}

registerBrick('0183ed0e0dc96fdc9a59', D3curveStepAfter);
