import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBasisClosed extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveBasisClosed);
    }
}

registerBrick('0183ed040f91c2d9e830', D3curveBasisClosed);
