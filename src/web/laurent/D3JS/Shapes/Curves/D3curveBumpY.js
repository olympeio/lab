import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBumpY extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveBumpY);
    }
}

registerBrick('0183ed0597336bf852a1', D3curveBumpY);
