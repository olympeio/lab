import { Brick, registerBrick } from 'olympe';
import * as d3 from "d3";

export default class D3axisLeft extends Brick {

    /**
     * @override
     * @protected
     * @param {!BrickContext} $
     * @param {d3.Scale} scale
     * @param {function(d3.Axis)} setAxis
     */
    update($, [scale], [setAxis]) {
        setAxis(d3.axisLeft(scale));
    }
}

registerBrick('0183dd2928bbaedba8b8', D3axisLeft);
