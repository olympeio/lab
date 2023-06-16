import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveNatural extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveNatural);
    }
}

registerBrick('0183ed0e3188b9545648', D3curveNatural);
