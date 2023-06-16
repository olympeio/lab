import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBumpX extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveBumpX);
    }
}

registerBrick('0183ed0540405fdb7fbb', D3curveBumpX);
