import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3curveBasisOpen extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {!Array} inputs
     * @param {function(d3.Curve)} setCurve
     */
    update($, inputs, [setCurve]) {
        setCurve(d3.curveBasisOpen);
    }
}

registerBrick('0183ed04dc1aa43db881', D3curveBasisOpen);
