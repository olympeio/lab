import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3axisRight extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Scale} scale
     * @param {function(d3.Axis)} setAxis
     */
    update($, [scale], [setAxis]) {
        setAxis(d3.axisRight(scale));
    }
}

registerBrick('0183dd286dc5943f163a', D3axisRight);
