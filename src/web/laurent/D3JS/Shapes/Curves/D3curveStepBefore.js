import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveStepBefore extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveStepBefore);
    }
}

registerBrick('0183ed0dd069bfb0856b', D3curveStepBefore);
